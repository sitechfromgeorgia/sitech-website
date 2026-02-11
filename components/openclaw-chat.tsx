"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  message: string;
}

const GATEWAY_TOKEN = process.env.NEXT_PUBLIC_OPENCLAW_TOKEN || "";

function uuid() {
  return crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getVisitorId(): string {
  if (typeof window === "undefined") return uuid();
  let id = localStorage.getItem("oc-visitor-id");
  if (!id) {
    id = uuid();
    localStorage.setItem("oc-visitor-id", id);
  }
  return id;
}

function getSessionKey(): string {
  return `agent:main:webchat:default:direct:visitor-${getVisitorId()}`;
}

export default function OpenClawChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contact, setContact] = useState<ContactInfo>({ firstName: "", lastName: "", message: "" });
  const [formSending, setFormSending] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

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
          id: "webchat",
          version: "1.0.0",
          platform: typeof navigator !== "undefined" ? navigator.platform : "web",
          mode: "webchat",
        },
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

      ws.onopen = () => sendConnect(ws);

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "hello-ok") {
            setIsConnected(true);
            return;
          }

          if (data.type === "res" && !data.ok) {
            console.warn("OpenClaw error:", data.error);
            return;
          }

          if (data.type === "res" && data.ok) return;

          if (data.type === "event") {
            const ev = data.event;

            if (ev === "agent.text.delta") {
              const text = data.payload?.text || "";
              if (text) {
                setIsTyping(true);
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === "assistant" && Date.now() - last.timestamp < 120000) {
                    return [...prev.slice(0, -1), { ...last, content: last.content + text }];
                  }
                  return [...prev, { role: "assistant", content: text, timestamp: Date.now() }];
                });
              }
              return;
            }

            if (ev === "agent.turn.end" || ev === "agent.run.end") {
              setIsTyping(false);
              return;
            }

            if (ev === "agent.text.done") {
              setIsTyping(false);
              const text = data.payload?.text || "";
              if (text) {
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.role === "assistant") {
                    return [...prev.slice(0, -1), { role: "assistant", content: text, timestamp: Date.now() }];
                  }
                  return [...prev, { role: "assistant", content: text, timestamp: Date.now() }];
                });
              }
              return;
            }

            if (ev === "chat" || ev === "chat.message") {
              const text = data.payload?.text || data.payload?.message?.content || data.payload?.content || "";
              if (text) {
                setIsTyping(false);
                setMessages((prev) => [...prev, { role: "assistant", content: text, timestamp: Date.now() }]);
              }
              return;
            }
          }
        } catch { /* ignore */ }
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
    if (isOpen && formSubmitted) connect();
    return () => {
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
    };
  }, [isOpen, formSubmitted, connect]);

  useEffect(() => {
    return () => {
      wsRef.current?.close();
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
    };
  }, []);

  const handleFormSubmit = () => {
    if (!contact.firstName.trim() || !contact.lastName.trim() || !contact.message.trim()) return;
    setFormSending(true);
    setFormSubmitted(true);

    // Show user's initial message in chat
    setMessages([{
      role: "user",
      content: contact.message.trim(),
      timestamp: Date.now(),
    }]);
    setIsTyping(true);
  };

  // Once connected after form submit, send the intro message to Lucy
  useEffect(() => {
    if (isConnected && formSubmitted && formSending && wsRef.current) {
      const introText = `[ახალი ვიზიტორი sitech.ge-დან]\nსახელი: ${contact.firstName} ${contact.lastName}\n\nშეტყობინება: ${contact.message}`;
      wsRef.current.send(JSON.stringify({
        type: "req",
        id: uuid(),
        method: "chat.send",
        params: {
          sessionKey: getSessionKey(),
          message: introText,
          idempotencyKey: uuid(),
        },
      }));
      setFormSending(false);
    }
  }, [isConnected, formSubmitted, formSending, contact]);

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
      params: {
        sessionKey: getSessionKey(),
        message: text,
        idempotencyKey: uuid(),
      },
    }));
  };

  // ── Accent color ──
  const accent = "#c8f542";

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-black shadow-lg transition-all hover:scale-105 active:scale-95"
        style={{ backgroundColor: accent, boxShadow: `0 4px 20px ${accent}40` }}
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
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]/95 shadow-2xl shadow-black/40 backdrop-blur-xl sm:h-[32rem] sm:w-96">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3" style={{ background: `linear-gradient(135deg, ${accent}15, ${accent}08)` }}>
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full text-lg" style={{ backgroundColor: `${accent}30` }}>✨</div>
              {formSubmitted && (
                <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0c0c0c] ${isConnected ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`} />
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">SiTech</h3>
              <p className="text-xs text-gray-400">
                {!formSubmitted ? "დაგვიკავშირდით" : isConnected ? "ონლაინ" : "კავშირი..."}
              </p>
            </div>
          </div>

          {/* Content */}
          {!formSubmitted ? (
            /* ── Contact Form ── */
            <div className="flex flex-1 flex-col gap-4 p-5">
              <p className="text-sm text-gray-300">
                გამარჯობა! 👋 შეავსეთ ფორმა და ჩვენი გუნდი მალევე დაგიკავშირდებათ.
              </p>

              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="mb-1 block text-xs text-gray-500">სახელი *</label>
                  <input
                    type="text"
                    value={contact.firstName}
                    onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                    placeholder="თქვენი სახელი"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[#c8f542]/50"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-xs text-gray-500">გვარი *</label>
                  <input
                    type="text"
                    value={contact.lastName}
                    onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                    placeholder="თქვენი გვარი"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[#c8f542]/50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs text-gray-500">შეტყობინება *</label>
                <textarea
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  placeholder="რით შეგვიძლია დაგეხმაროთ?"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-[#c8f542]/50"
                />
              </div>

              <button
                onClick={handleFormSubmit}
                disabled={!contact.firstName.trim() || !contact.lastName.trim() || !contact.message.trim()}
                className="mt-auto rounded-lg py-2.5 text-sm font-semibold text-black transition-all hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ backgroundColor: accent }}
              >
                გაგზავნა →
              </button>

              <p className="text-center text-[10px] text-gray-600">
                ჩვენ ვიყენებთ AI ასისტენტს სწრაფი პასუხისთვის
              </p>
            </div>
          ) : (
            /* ── Chat View ── */
            <>
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-md text-black"
                        : "rounded-bl-md bg-white/10 text-gray-100"
                    }`}
                    style={msg.role === "user" ? { backgroundColor: accent } : undefined}
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

              <div className="border-t border-white/10 bg-[#0c0c0c]/80 p-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                    placeholder="დაწერეთ შეტყობინება..."
                    disabled={!isConnected}
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#c8f542]/50 disabled:opacity-40"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!isConnected || !input.trim()}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-black transition-all hover:brightness-110 disabled:opacity-40"
                    style={{ backgroundColor: accent }}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
