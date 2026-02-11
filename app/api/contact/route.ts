import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, message } = body;

    if (!name || !contact || !message) {
      return NextResponse.json({ error: 'ყველა ველი სავალდებულოა' }, { status: 400 });
    }

    // Send to Telegram directly
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || '112157134';
    
    if (telegramToken) {
      const text = `📩 *ახალი შეტყობინება sitech\\.ge\\-დან\\!*\n\n👤 *სახელი:* ${name}\n📞 *კონტაქტი:* ${contact}\n💬 *შეტყობინება:* ${message}\n\n⏰ ${new Date().toLocaleString('ka-GE', { timeZone: 'Asia/Tbilisi' })}`;
      
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'MarkdownV2' }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'შეცდომა' }, { status: 500 });
  }
}
