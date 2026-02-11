import { NextRequest } from 'next/server';

const GW_URL = process.env.OPENCLAW_GATEWAY_URL || 'ws://10.0.1.1:18789';
const GW_TOKEN = process.env.OPENCLAW_GATEWAY_TOKEN || '';

interface GWMessage {
  type: string;
  event?: string;
  payload?: Record<string, unknown>;
  id?: string;
  ok?: boolean;
  error?: { message: string };
  method?: string;
  params?: Record<string, unknown>;
}

async function chatWithLucy(message: string, sessionId: string): Promise<string> {
  // Dynamic import for ws (server-side only)
  const { default: WebSocket } = await import('ws');

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      ws.close();
      reject(new Error('timeout'));
    }, 60000);

    const ws = new WebSocket(GW_URL);
    let responseText = '';
    let connected = false;

    ws.on('open', () => {
      // Wait for challenge
    });

    ws.on('message', (data: Buffer) => {
      try {
        const msg: GWMessage = JSON.parse(data.toString());

        // Step 1: Respond to challenge with connect request
        if (msg.event === 'connect.challenge') {
          ws.send(JSON.stringify({
            type: 'req',
            id: 'connect-1',
            method: 'connect',
            params: {
              auth: { token: GW_TOKEN },
              device: {
                platform: 'web',
                mode: 'webchat',
                instanceId: `webchat-${sessionId}`,
              },
              role: 'owner',
              scopes: [],
              caps: [],
              userAgent: 'sitech-webchat/1.0',
              locale: 'ka',
            },
          }));
          return;
        }

        // Step 2: Connected - send chat message
        if (msg.type === 'res' && msg.id === 'connect-1') {
          if (!msg.ok) {
            clearTimeout(timeout);
            ws.close();
            reject(new Error('auth failed'));
            return;
          }
          connected = true;
          ws.send(JSON.stringify({
            type: 'req',
            id: 'chat-1',
            method: 'chat.send',
            params: {
              text: message,
              sessionKey: `webchat:${sessionId}`,
            },
          }));
          return;
        }

        // Step 3: Collect chat response events
        if (msg.type === 'event' && msg.event === 'chat') {
          const p = msg.payload as Record<string, unknown>;
          // Collect text chunks
          if (p?.kind === 'text' && typeof p.text === 'string') {
            responseText += p.text;
          }
          // Agent done
          if (p?.kind === 'turn.done' || p?.kind === 'done') {
            clearTimeout(timeout);
            ws.close();
            resolve(responseText || 'მადლობა! მალე დაგიკავშირდებით 😊');
          }
        }

        // Also handle chat.send ack
        if (msg.type === 'res' && msg.id === 'chat-1') {
          // ack received, now waiting for events
        }
      } catch {
        // ignore parse errors
      }
    });

    ws.on('error', () => {
      clearTimeout(timeout);
      reject(new Error('connection failed'));
    });

    ws.on('close', () => {
      clearTimeout(timeout);
      if (!responseText && connected) {
        resolve('მადლობა შეტყობინებისთვის! მალე დაგიკავშირდებით 😊');
      }
    });
  });
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId = 'anonymous' } = await request.json();

    if (!message?.trim()) {
      return Response.json({ error: 'შეტყობინება ცარიელია' }, { status: 400 });
    }

    if (!GW_TOKEN) {
      return Response.json({
        reply: 'მადლობა შეტყობინებისთვის! 😊 სწრაფი პასუხისთვის მოგვწერეთ Telegram-ზე: @SiTechagencybot ✨',
      });
    }

    const reply = await chatWithLucy(message.slice(0, 2000), sessionId);
    return Response.json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    return Response.json({
      reply: 'მადლობა შეტყობინებისთვის! 😊 მოგვწერეთ Telegram-ზე: @SiTechagencybot ✨',
    });
  }
}
