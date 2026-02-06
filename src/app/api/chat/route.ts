import { NextRequest, NextResponse } from "next/server";

// Telegram Bot configuration for SiTech Agency
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; // SiTech agency chat/group

interface ChatMessage {
  message: string;
  visitorId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatMessage = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Get visitor info
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const timestamp = new Date().toLocaleString("ka-GE", { timeZone: "Asia/Tbilisi" });

    // Format message for Telegram
    const telegramMessage = `
🌐 *ახალი შეტყობინება საიტიდან!*
━━━━━━━━━━━━━━━━━━
📝 *შეტყობინება:*
${message}

⏰ *დრო:* ${timestamp}
🌍 *IP:* ${ip.split(",")[0]}
📱 *Device:* ${userAgent.substring(0, 50)}...
━━━━━━━━━━━━━━━━━━
_sitech.ge chat widget_
    `.trim();

    // Send to Telegram if configured
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        });
      } catch (telegramError) {
        console.error("Telegram send failed:", telegramError);
      }
    }

    // Generate auto-reply based on message content
    let reply = "მადლობა შეტყობინებისთვის! 🙏 ჩვენი გუნდი მალე დაგიკავშირდებათ.";

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("ფასი") || lowerMessage.includes("ღირს") || lowerMessage.includes("რა ჯდება")) {
      reply = `💰 ფასების შესახებ:

• Landing Page: 300-800 ₾
• კორპორატიული საიტი: 1,500-3,000 ₾
• ონლაინ მაღაზია: 3,000-8,000 ₾
• AI ინტეგრაცია: Custom

უფრო დეტალური ინფორმაციისთვის მოგვწერეთ @sitech_georgia 📱`;
    } else if (lowerMessage.includes("საიტ") || lowerMessage.includes("ვებ")) {
      reply = `🌐 ვებსაიტის შექმნაში დაგეხმარებით!

შეგვიძლია გავაკეთოთ:
• Landing Pages
• კორპორატიული საიტები
• ბლოგები/პორტფოლიოები
• ონლაინ მაღაზიები

რა ტიპის საიტი გჭირდებათ? 🤔`;
    } else if (lowerMessage.includes("ბოტ") || lowerMessage.includes("telegram") || lowerMessage.includes("ai")) {
      reply = `🤖 AI & ბოტების ინტეგრაცია!

გთავაზობთ:
• Telegram/WhatsApp ბოტები
• AI Customer Support
• ავტომატიზაცია n8n-ით
• Custom AI solutions

მოდით განვიხილოთ თქვენი იდეა @sitech_georgia 💡`;
    }

    return NextResponse.json({
      success: true,
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong", reply: "მადლობა! მალე დაგიკავშირდებით." },
      { status: 500 }
    );
  }
}
