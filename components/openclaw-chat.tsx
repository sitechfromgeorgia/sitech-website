"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const GATEWAY_TOKEN = process.env.NEXT_PUBLIC_OPENCLAW_TOKEN || "";

function uuid() {
  return crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function OpenClawChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const challengeHandled = useRef(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, scrollToBottom]);

  const sendConnect = useCallback((ws: WebSocket) => {
    ws.send(JSON.stringify({
      type: "req",
      id: uuid(),
      method: "connect",
      params: {
        minProtocol: 3,
        maxProtocol: 3,
        client: {
          id: "openclaw-control-ui",
          version: "1.0.0",
          platform: typeof navigator !== "undefined" ? navigator.platform : "web",
          mode: "webchat",
        },
        role: "operator",
        scopes: ["operator.read", "operator.write"],
        caps: [],
        commands: [],
        permissions: {},
        auth: GATEWAY_TOKEN ? { token: GATEWAY_TOKEN } : undefined,
        locale: typeof navigator !== "undefined" ? navigator.language : "en",
        userAgent: "sitech-webchat/1.0.0",
      },
    }));
  }, []);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;
    if (typeof window === "undefined") return;

    try {
      const wsUrl = `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}/openclaw-ws`;
      const ws = new WebSocket(wsUrl);
      challengeHandled.current = false;

      ws.onopen = () => {
        // Wait for connect.challenge or send connect immediately
        // Some gateway versions send challenge first, others accept connect directly
        setTimeout(() => {
          if (!challengeHandled.current) {
            sendConnect(ws);
            challengeHandled.current = true;
          }
        }, 500);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          // Handle connect.challenge
          if (data.type === "event" && data.event === "connect.challenge") {
            if (!challengeHandled.current) {
              sendConnect(ws);
              challengeHandled.current = true;
            }
            return;
          }

          // Handle hello-ok response
          if (data.type === "res" && data.ok && data.payload?.type === "hello-ok") {
            setIsConnected(true);
            return;
          }

          // Handle res errors
          if (data.type === "res" && !data.ok) {
            console.warn("OpenClaw error:", data.error);
            return;
          }

          // Handle chat events (streaming)
          if (data.type === "event" && data.event === "chat") {
            const state = data.payload?.state;
            const text = data.payload?.text || data.payload?.message?.content || "";

            if (state === "delta" && text) {
              setIsTyping(true);
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && Date.now() - last.timestamp < 120000) {
                  return [...prev.slice(0, -1), { ...last, content: last.content + text }];
                }
                return [...prev, { role: "assistant", content: text, timestamp: Date.now() }];
              });
            } else if (state === "final") {
              setIsTyping(false);
              if (text) {
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === "assistant") {
                    return [...prev.slice(0, -1), { role: "assistant", content: text, timestamp: Date.now() }];
                  }
                  return [...prev, { role: "assistant", content: text, timestamp: Date.now() }];
                });
              }
            } else if (state === "error") {
              setIsTyping(false);
            }
            return;
          }

          // Handle chat.history response
          if (data.type === "res" && data.ok && Array.isArray(data.payload)) {
            // History messages
            return;
          }

        } catch {
          // ignore
        }
      };

      ws.onerror = () => setIsConnected(false);

      ws.onclose = () => {
        setIsConnected(false);
        wsRef.current = null;
        if (isOpen) {
          reconnectTimer.current = setTimeout(connect, 3000);
        }
      };

      wsRef.current = ws;
    } catch {
      setIsConnected(false);
    }
  }, [isOpen, sendConnect]);

  useEffect(() => {
    if (isOpen) {
      connect();
      if (messages.length === 0) {
        setMessages([{
          role: "assistant",
          content: "გამარჯობა! 👋 მე ვარ ლუსი, SiTech-ის AI ასისტენტი. რით შემიძლია დაგეხმაროთ?",
          timestamp: Date.now(),
        }]);
      }
    }
    return () => {
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
    };
  }, [isOpen, connect]);

  useEffect(() => {
    return () => {
      wsRef.current?.close();
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
    };
  }, []);

  const sendMessage = () => {
    const text = input.trim();
    if (!text || !isConnected || !wsRef.current) return;

    setMessages((prev) => [...prev, { role: "user", content: text, timestamp: Date.now() }]);
    setInput("");
    setIsTyping(true);

    wsRef.current.send(JSON.stringify({
      type: "req",
      id: uuid(),
      method: "chat.send",
      params: { text },
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-purple-500/50 active:scale-95"
        aria-label={isOpen ? "ჩატის დახურვა" : "ჩატის გახსნა"}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl sm:h-[32rem] sm:w-96">
          <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-3">
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-lg">✨</div>
              <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-gray-900 ${isConnected ? "bg-green-500" : "bg-red-500"}`} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">ლუსი</h3>
              <p className="text-xs text-gray-400">{isConnected ? "ონლაინ" : "კავშირი..."}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-md bg-violet-600 text-white"
                    : "rounded-bl-md bg-white/10 text-gray-100"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-gray-900/80 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                placeholder="დაწერეთ შეტყობინება..."
                disabled={!isConnected}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-violet-500/50 disabled:opacity-40"
              />
              <button
                onClick={sendMessage}
                disabled={!isConnected || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white transition-all hover:bg-violet-500 disabled:opacity-40"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
