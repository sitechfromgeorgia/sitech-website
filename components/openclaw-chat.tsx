"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const GATEWAY_TOKEN = process.env.NEXT_PUBLIC_OPENCLAW_TOKEN || "";

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
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
  const pendingRef = useRef<Map<string, (data: unknown) => void>>(new Map());

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const sendRequest = useCallback((method: string, params: Record<string, unknown> = {}) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return null;
    const id = generateId();
    const frame = { type: "req", id, method, params };
    wsRef.current.send(JSON.stringify(frame));
    return id;
  }, []);

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;
    if (typeof window === "undefined") return;

    try {
      const wsUrl = `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}/openclaw-ws`;
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        // Send OpenClaw connect handshake (first frame MUST be "connect")
        const connectFrame = {
          type: "req",
          id: generateId(),
          method: "connect",
          params: {
            minProtocol: 3,
            maxProtocol: 3,
            role: "operator",
            scopes: [],
            auth: GATEWAY_TOKEN ? { token: GATEWAY_TOKEN } : undefined,
            client: {
              id: "webchat",
              version: "1.0.0",
              platform: "web",
              mode: "webchat",
            },
            caps: [],
            userAgent: navigator.userAgent,
            locale: navigator.language,
          },
        };
        ws.send(JSON.stringify(connectFrame));
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          // Handle response to connect or chat.send
          if (data.type === "res") {
            if (data.ok) {
              // Connected successfully
              setIsConnected(true);
              const resolver = pendingRef.current.get(data.id);
              if (resolver) {
                resolver(data.payload);
                pendingRef.current.delete(data.id);
              }
            }
            return;
          }

          // Handle events (streaming)
          if (data.type === "evt") {
            const method = data.method || "";

            if (method === "chat.tokens" || method === "chat.delta") {
              setIsTyping(true);
              const text = data.params?.text || data.params?.content || data.params?.delta || "";
              if (text) {
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === "assistant" && Date.now() - last.timestamp < 120000) {
                    return [...prev.slice(0, -1), { ...last, content: last.content + text }];
                  }
                  return [...prev, { role: "assistant", content: text, timestamp: Date.now() }];
                });
              }
            } else if (method === "chat.reply" || method === "chat.message") {
              setIsTyping(false);
              const content = data.params?.content || data.params?.text || data.params?.message || "";
              if (content) {
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === "assistant") {
                    return [...prev.slice(0, -1), { role: "assistant", content, timestamp: Date.now() }];
                  }
                  return [...prev, { role: "assistant", content, timestamp: Date.now() }];
                });
              }
            } else if (method === "chat.end" || method === "chat.done" || method === "chat.turn.end") {
              setIsTyping(false);
            }
          }
        } catch {
          // ignore parse errors
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
  }, [isOpen]);

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
    if (!text || !isConnected) return;

    setMessages((prev) => [...prev, { role: "user", content: text, timestamp: Date.now() }]);
    setInput("");
    setIsTyping(true);

    sendRequest("chat.send", { message: text });
  };

  return (
    <>
      {/* Toggle Button */}
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

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl sm:h-[32rem] sm:w-96">
          {/* Header */}
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-md bg-violet-600 text-white"
                      : "rounded-bl-md bg-white/10 text-gray-100"
                  }`}
                >
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

          {/* Input */}
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
