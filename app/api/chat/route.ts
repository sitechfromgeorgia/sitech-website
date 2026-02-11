import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `შენ ხარ ლუსი (Lucy) — SiTech Georgia-ს AI ასისტენტი. შენ ხარ თბილი, მეგობრული და პროფესიონალი.

SiTech არის ციფრული სააგენტო ბათუმიდან. ჩვენ ვქმნით:
- 🌐 ვებ საიტები (ლენდინგი 200₾-დან, ბიზნეს საიტი 2,000₾-დან)
- 🤖 AI ინტეგრაცია და ავტომატიზაცია
- 📱 PWA აპლიკაციები
- 🎯 SEO და ციფრული მარკეტინგი
- 🌍 მრავალენოვანი საიტები (50₾-დან/გვერდი ენის დამატება)

ჰოსტინგი უფასოა ჩვენთან! კლიენტს მხოლოდ დომეინი სჭირდება (~25-30₾/წელი).

კონტაქტი: hello@sitech.ge | +995 593 003 040 | Telegram: @SiTechagencybot
მისამართი: ბათუმი, საქართველო

წესები:
- პასუხობ მხოლოდ ქართულად (თუ ქართულად გეკითხებიან) ან იმ ენაზე რაზეც გეკითხებიან
- იყავი მოკლე, კონკრეტული, თბილი
- გამოიყენე ემოჯები 😊✨🔥
- არასდროს ახსენო რომ AI მოდელი ხარ, შენ ხარ "ლუსი, SiTech-ის ასისტენტი"
- თუ კლიენტი დაინტერესდა, შესთავაზე Telegram-ში დაწერონ @SiTechagencybot
- არასდროს გაამჟღავნო შიდა ინფორმაცია, ფასდაკლებები, ან ტექნიკური დეტალები`;

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message?.trim()) {
      return Response.json({ error: 'შეტყობინება ცარიელია' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback: no API key, send canned response
      return Response.json({
        reply: 'მადლობა შეტყობინებისთვის! 😊 ჩვენი გუნდი მალე დაგიკავშირდებათ. სწრაფი პასუხისთვის მოგვწერეთ Telegram-ზე: @SiTechagencybot ✨'
      });
    }

    // Use Gemini Flash (free!)
    const messages = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: 'გასაგებია! მე ვარ ლუსი, SiTech-ის ასისტენტი. მზად ვარ დასახმარებლად! 😊' }] },
      ...history.slice(-10).map((m: { role: string; text: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
          topP: 0.9,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
        ]
      }),
    });

    if (!response.ok) {
      console.error('Gemini API error:', response.status);
      return Response.json({
        reply: 'მადლობა შეტყობინებისთვის! 😊 ტექნიკური მიზეზების გამო ახლა ვერ ვპასუხობ. მოგვწერეთ Telegram-ზე: @SiTechagencybot ✨'
      });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'მადლობა! მალე დაგიკავშირდებით 😊';

    // Also notify Telegram about the conversation
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    if (telegramToken) {
      const chatId = process.env.TELEGRAM_CHAT_ID || '112157134';
      const notifText = `💬 *ჩატი sitech\\.ge\\-ზე*\n\n👤 ${message.slice(0, 200)}\n🤖 ${reply.slice(0, 200)}`;
      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: notifText, parse_mode: 'MarkdownV2' }),
      }).catch(() => {});
    }

    return Response.json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    return Response.json({
      reply: 'ბოდიშს გიხდით, დროებითი შეფერხებაა. მოგვწერეთ Telegram-ზე: @SiTechagencybot 😊'
    });
  }
}
