import { NextRequest, NextResponse } from "next/server";

// Telegram Bot configuration for SiTech Agency
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface LeadInfo {
  name: string;
  phone: string;
  interest: string;
}

interface ChatRequest {
  message: string;
  isLead?: boolean;
  leadInfo?: LeadInfo;
  action?: string;
}

interface QuickButton {
  text: string;
  action: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, isLead, leadInfo, action } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Get visitor info
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const timestamp = new Date().toLocaleString("ka-GE", { timeZone: "Asia/Tbilisi" });

    // Format message for Telegram
    let telegramMessage: string;
    
    if (isLead && leadInfo) {
      // New lead notification
      telegramMessage = `
🎉 *ახალი ლიდი საიტიდან!*
━━━━━━━━━━━━━━━━━━
👤 *სახელი:* ${leadInfo.name}
📱 *ტელეფონი:* ${leadInfo.phone}
🎯 *ინტერესი:* ${getInterestLabel(leadInfo.interest)}

⏰ *დრო:* ${timestamp}
━━━━━━━━━━━━━━━━━━
_sitech.ge — ახალი ლიდი!_
      `.trim();
    } else {
      // Regular chat message
      const leadContext = leadInfo 
        ? `\n👤 *ვინ:* ${leadInfo.name} (${leadInfo.phone})`
        : "";
      
      telegramMessage = `
🌐 *შეტყობინება საიტიდან*
━━━━━━━━━━━━━━━━━━${leadContext}
📝 *შეტყობინება:*
${message}

⏰ ${timestamp}
━━━━━━━━━━━━━━━━━━
_sitech.ge chat_
      `.trim();
    }

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

    // Generate AI response
    const response = generateResponse(message, leadInfo, action);

    return NextResponse.json({
      success: true,
      reply: response.text,
      buttons: response.buttons,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { 
        error: "Something went wrong", 
        reply: "მადლობა! მალე დაგიკავშირდებით. 🙏",
        buttons: [{ text: "📱 Telegram", action: "telegram" }]
      },
      { status: 500 }
    );
  }
}

function getInterestLabel(interest: string): string {
  const labels: Record<string, string> = {
    website: "🌐 ვებსაიტი",
    ecommerce: "🛒 ონლაინ მაღაზია",
    bot: "🤖 Telegram ბოტი",
    ai: "✨ AI ინტეგრაცია",
    other: "📦 სხვა"
  };
  return labels[interest] || interest;
}

function generateResponse(
  message: string, 
  leadInfo?: LeadInfo,
  action?: string
): { text: string; buttons: QuickButton[] } {
  const lowerMessage = message.toLowerCase();
  const name = leadInfo?.name || "";
  const greeting = name ? `${name}, ` : "";

  // Check for escalation triggers
  const escalationKeywords = ["ადამიანთან", "მენეჯერთან", "დარეკვა", "პრობლემა", "რეკლამაცია"];
  if (escalationKeywords.some(kw => lowerMessage.includes(kw))) {
    return {
      text: `${greeting}რა თქმა უნდა! 📞\n\nჩვენი გუნდი მალე დაგიკავშირდებათ.\n\nან პირდაპირ დაგვირეკეთ/მოგვწერეთ:\n📱 Telegram: @sitech_georgia`,
      buttons: [
        { text: "💬 სხვა კითხვა", action: "question" }
      ]
    };
  }

  // Price related
  if (lowerMessage.includes("ფასი") || lowerMessage.includes("ღირს") || lowerMessage.includes("რა ჯდება") || lowerMessage.includes("რამდენი")) {
    return {
      text: `${greeting}💰 ჩვენი ფასები:\n\n• Landing Page: 300-800 ₾\n• კორპორატიული საიტი: 1,500-3,000 ₾\n• ონლაინ მაღაზია: 3,000-8,000 ₾\n• AI ინტეგრაცია: Custom\n\nრომელი გაინტერესებთ? 🤔`,
      buttons: [
        { text: "Landing", action: "landing" },
        { text: "E-commerce", action: "ecommerce_pricing" },
        { text: "📅 კონსულტაცია", action: "book_call" }
      ]
    };
  }

  // Website related
  if (lowerMessage.includes("საიტ") || lowerMessage.includes("ვებ") || lowerMessage.includes("landing")) {
    return {
      text: `${greeting}🌐 ვებსაიტის შექმნაში დაგეხმარებით!\n\nშეგვიძლია გავაკეთოთ:\n• Landing Pages (300₾-დან)\n• კორპორატიული საიტები\n• ბლოგები/პორტფოლიოები\n• ონლაინ მაღაზიები\n\nრა ტიპის საიტი გჭირდებათ? 🤔`,
      buttons: [
        { text: "Landing Page", action: "landing" },
        { text: "კორპორატიული", action: "corporate" },
        { text: "E-commerce", action: "ecommerce_pricing" }
      ]
    };
  }

  // E-commerce related
  if (lowerMessage.includes("მაღაზია") || lowerMessage.includes("ecommerce") || lowerMessage.includes("გაყიდვ")) {
    return {
      text: `${greeting}🛒 ონლაინ მაღაზია!\n\nფასი: 3,000-8,000 ₾\n\nრა შედის:\n• TBC/BOG გადახდები\n• მარაგის მართვა\n• მიტანის ინტეგრაცია\n• მობაილ-ადაპტური\n\nრა პროდუქტებს ყიდით? 🛍️`,
      buttons: [
        { text: "💰 დეტალური ფასი", action: "ecommerce_pricing" },
        { text: "📅 კონსულტაცია", action: "book_call" }
      ]
    };
  }

  // Bot/AI related
  if (lowerMessage.includes("ბოტ") || lowerMessage.includes("telegram") || lowerMessage.includes("ai") || lowerMessage.includes("ხელოვნური")) {
    return {
      text: `${greeting}🤖 AI & ბოტების ინტეგრაცია!\n\nგთავაზობთ:\n• Telegram/WhatsApp ბოტები\n• AI Customer Support\n• ავტომატიზაცია\n• Custom AI solutions\n\nრა ამოცანის გადაჭრა გინდათ? 💡`,
      buttons: [
        { text: "Customer Support", action: "bot_support" },
        { text: "შეკვეთების ბოტი", action: "bot_orders" },
        { text: "📅 კონსულტაცია", action: "book_call" }
      ]
    };
  }

  // Portfolio related
  if (lowerMessage.includes("პორტფოლიო") || lowerMessage.includes("ნამუშევ") || lowerMessage.includes("მაგალით")) {
    return {
      text: `${greeting}🖼 ჩვენი ბოლო პროექტები:\n\n✨ Greenland77.ge — ლენდინგი\n✨ Caucasus Dance Bridge — ივენთი\n✨ Tbilisi.today — სიახლეები\n\nრომელიმეს დეტალურად ნახვა გინდათ?`,
      buttons: [
        { text: "💰 ფასები", action: "pricing" },
        { text: "📅 კონსულტაცია", action: "book_call" }
      ]
    };
  }

  // Time/deadline related
  if (lowerMessage.includes("დრო") || lowerMessage.includes("ვადა") || lowerMessage.includes("როდის") || lowerMessage.includes("სწრაფად")) {
    return {
      text: `${greeting}⏰ ჩვენი ვადები:\n\n• Landing Page: 3-7 დღე\n• კორპორატიული: 1-2 კვირა\n• ონლაინ მაღაზია: 2-4 კვირა\n• Custom პროექტი: შეთანხმებით\n\nსასწრაფოდ გჭირდებათ? დაგვიკავშირდით! 🚀`,
      buttons: [
        { text: "📅 ზარის დაჯავშნა", action: "book_call" },
        { text: "💰 ფასები", action: "pricing" }
      ]
    };
  }

  // Hello/greeting
  if (lowerMessage.includes("გამარჯობა") || lowerMessage.includes("გაუმარჯოს") || lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return {
      text: `გამარჯობა${name ? ` ${name}` : ""}! 👋\n\nმე ვარ Lucy, SiTech-ის AI ასისტენტი.\n\nრით შემიძლია დაგეხმაროთ?`,
      buttons: [
        { text: "💰 ფასები", action: "pricing" },
        { text: "🖼 პორტფოლიო", action: "portfolio" },
        { text: "❓ კითხვა მაქვს", action: "question" }
      ]
    };
  }

  // Thanks
  if (lowerMessage.includes("მადლობა") || lowerMessage.includes("გმადლობ") || lowerMessage.includes("thanks")) {
    return {
      text: `${greeting}არაფრის! 🙏\n\nსხვა რამეში ხომ არ შემიძლია დაგეხმაროთ?`,
      buttons: [
        { text: "💰 ფასები", action: "pricing" },
        { text: "📅 კონსულტაცია", action: "book_call" }
      ]
    };
  }

  // Default response
  return {
    text: `${greeting}მადლობა შეტყობინებისთვის! 🙏\n\nთქვენი კითხვა მივიღე და მალე დაგიკავშირდებით.\n\nან დამიწერეთ უფრო კონკრეტულად რა გაინტერესებთ:`,
    buttons: [
      { text: "💰 ფასები", action: "pricing" },
      { text: "🌐 საიტი მინდა", action: "website" },
      { text: "🤖 ბოტი მინდა", action: "bot" },
      { text: "📅 კონსულტაცია", action: "book_call" }
    ]
  };
}
