"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  buttons?: QuickButton[];
}

interface QuickButton {
  text: string;
  action: string;
}

interface LeadInfo {
  name: string;
  phone: string;
  interest: string;
}

type ChatPhase = "welcome" | "lead-form" | "chat";

// Session storage key
const SESSION_KEY = "sitech_chat_session";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<ChatPhase>("welcome");
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({ name: "", phone: "", interest: "" });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load session from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const session = JSON.parse(saved);
        if (session.leadInfo) setLeadInfo(session.leadInfo);
        if (session.phase) setPhase(session.phase);
        if (session.messages) {
          setMessages(session.messages.map((m: Message) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          })));
        }
      } catch (e) {
        console.error("Failed to load session", e);
      }
    }
  }, []);

  // Save session to localStorage
  useEffect(() => {
    if (phase !== "welcome" || messages.length > 0) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({
        leadInfo,
        phase,
        messages,
        lastActivity: new Date().toISOString()
      }));
    }
  }, [leadInfo, phase, messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Add bot message helper
  const addBotMessage = useCallback((text: string, buttons?: QuickButton[]) => {
    const msg: Message = {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
      buttons
    };
    setMessages(prev => [...prev, msg]);
  }, []);

  // Start chat (skip form)
  const startQuickChat = () => {
    setPhase("chat");
    addBotMessage(
      "გამარჯობა! 👋 მე ვარ Lucy, SiTech-ის AI ასისტენტი. რით შემიძლია დაგეხმაროთ?",
      [
        { text: "💰 ფასები", action: "pricing" },
        { text: "🖼 პორტფოლიო", action: "portfolio" },
        { text: "❓ კითხვა მაქვს", action: "question" }
      ]
    );
  };

  // Start with lead form
  const startWithForm = () => {
    setPhase("lead-form");
  };

  // Submit lead form
  const submitLeadForm = async () => {
    if (!leadInfo.name || !leadInfo.phone || !leadInfo.interest) return;
    
    setIsLoading(true);
    try {
      // Send lead info to API
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `📋 ახალი ლიდი!\n👤 ${leadInfo.name}\n📱 ${leadInfo.phone}\n🎯 ${leadInfo.interest}`,
          isLead: true,
          leadInfo
        }),
      });
    } catch (e) {
      console.error("Failed to submit lead", e);
    }
    
    setPhase("chat");
    addBotMessage(
      `გამარჯობა ${leadInfo.name}! 🎉\n\n${getInterestMessage(leadInfo.interest)}`,
      getInterestButtons(leadInfo.interest)
    );
    setIsLoading(false);
  };

  // Get personalized message based on interest
  const getInterestMessage = (interest: string): string => {
    switch (interest) {
      case "website":
        return "ვებსაიტით ხართ დაინტერესებული — შესანიშნავია! რა ტიპის საიტი გჭირდებათ?";
      case "ecommerce":
        return "ონლაინ მაღაზიის გაკეთება გინდათ — მაგარია! რა პროდუქტებს ყიდით?";
      case "bot":
        return "Telegram ბოტი გაინტერესებთ — კარგი არჩევანია! რა ფუნქციონალი გჭირდებათ?";
      case "ai":
        return "AI ინტეგრაციით ხართ დაინტერესებული — საუკეთესო დროა! რა ამოცანის ავტომატიზაცია გინდათ?";
      default:
        return "როგორ შემიძლია დაგეხმაროთ?";
    }
  };

  // Get buttons based on interest
  const getInterestButtons = (interest: string): QuickButton[] => {
    switch (interest) {
      case "website":
        return [
          { text: "Landing Page", action: "landing" },
          { text: "კორპორატიული", action: "corporate" },
          { text: "ბლოგი", action: "blog" }
        ];
      case "ecommerce":
        return [
          { text: "💰 ფასები", action: "ecommerce_pricing" },
          { text: "🛒 მაგალითები", action: "ecommerce_examples" }
        ];
      case "bot":
        return [
          { text: "Customer Support", action: "bot_support" },
          { text: "შეკვეთები", action: "bot_orders" },
          { text: "Custom", action: "bot_custom" }
        ];
      default:
        return [
          { text: "💰 ფასები", action: "pricing" },
          { text: "🖼 პორტფოლიო", action: "portfolio" }
        ];
    }
  };

  // Handle quick button click
  const handleButtonClick = async (action: string) => {
    // Add user "click" as message
    const buttonText = getButtonDisplayText(action);
    const userMsg: Message = {
      id: Date.now().toString(),
      text: buttonText,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    
    setIsLoading(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Get response based on action
    const response = getActionResponse(action);
    addBotMessage(response.text, response.buttons);
    
    // Send to API for Telegram notification
    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: buttonText,
          leadInfo: leadInfo.name ? leadInfo : undefined,
          action
        }),
      });
    } catch (e) {
      console.error("Failed to send to API", e);
    }
    
    setIsLoading(false);
  };

  const getButtonDisplayText = (action: string): string => {
    const map: Record<string, string> = {
      pricing: "💰 ფასები",
      portfolio: "🖼 პორტფოლიო",
      question: "❓ კითხვა მაქვს",
      landing: "Landing Page",
      corporate: "კორპორატიული საიტი",
      blog: "ბლოგი",
      ecommerce_pricing: "E-commerce ფასები",
      ecommerce_examples: "ონლაინ მაღაზიის მაგალითები",
      bot_support: "Customer Support ბოტი",
      bot_orders: "შეკვეთების ბოტი",
      bot_custom: "Custom ბოტი",
      contact_human: "👤 ადამიანთან საუბარი",
      book_call: "📅 ზარის დაჯავშნა"
    };
    return map[action] || action;
  };

  const getActionResponse = (action: string): { text: string; buttons?: QuickButton[] } => {
    switch (action) {
      case "pricing":
        return {
          text: `💰 **ჩვენი ფასები:**

• **Landing Page:** 300-800 ₾
• **კორპორატიული:** 1,500-3,000 ₾
• **ონლაინ მაღაზია:** 3,000-8,000 ₾
• **AI ინტეგრაცია:** Custom

რომელი პაკეტი გაინტერესებთ? 🤔`,
          buttons: [
            { text: "Landing Page", action: "landing" },
            { text: "E-commerce", action: "ecommerce_pricing" },
            { text: "📅 კონსულტაცია", action: "book_call" }
          ]
        };
      
      case "portfolio":
        return {
          text: `🖼 **ჩვენი ბოლო პროექტები:**

✨ **Greenland77.ge** — ლენდინგ პეიჯი
✨ **Caucasus Dance Bridge** — ივენთ საიტი
✨ **Tbilisi.today** — სიახლეების პორტალი

გინდათ რომელიმეს დეტალურად ნახვა?`,
          buttons: [
            { text: "💰 ფასები", action: "pricing" },
            { text: "📅 კონსულტაცია", action: "book_call" }
          ]
        };
      
      case "landing":
        return {
          text: `🚀 **Landing Page**

ფასი: **300-800 ₾**
ვადა: **3-7 დღე**

რა შედის:
• მობაილ-ადაპტური დიზაინი
• SEO ოპტიმიზაცია
• კონტაქტ ფორმა
• Analytics ინტეგრაცია

მზად ხართ დასაწყებად? 🎯`,
          buttons: [
            { text: "📅 დავჯავშნო ზარი", action: "book_call" },
            { text: "👤 ადამიანთან", action: "contact_human" }
          ]
        };
      
      case "contact_human":
      case "book_call":
        return {
          text: `📞 **მალე დაგიკავშირდებით!**

${leadInfo.name ? `${leadInfo.name}, ` : ""}ჩვენი გუნდი 24 საათში დაგიკავშირდებათ.

ან პირდაპირ მოგვწერეთ:
📱 **Telegram:** @sitech_georgia

მადლობა ინტერესისთვის! 🙏`,
          buttons: [
            { text: "💬 კიდევ მაქვს კითხვა", action: "question" }
          ]
        };
      
      case "question":
        return {
          text: `რა გაინტერესებთ? დამიწერეთ და დაგეხმარებით! 💬`,
          buttons: []
        };
      
      default:
        return {
          text: `მადლობა! რით შემიძლია კიდევ დაგეხმაროთ?`,
          buttons: [
            { text: "💰 ფასები", action: "pricing" },
            { text: "📅 კონსულტაცია", action: "book_call" }
          ]
        };
    }
  };

  // Send free-form message
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const userText = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userText,
          leadInfo: leadInfo.name ? leadInfo : undefined
        }),
      });

      const data = await response.json();
      
      // Add slight delay for natural feel
      await new Promise(resolve => setTimeout(resolve, 600));

      addBotMessage(
        data.reply || "მადლობა შეტყობინებისთვის! 🙏",
        data.buttons || [
          { text: "💰 ფასები", action: "pricing" },
          { text: "📅 კონსულტაცია", action: "book_call" }
        ]
      );
    } catch (error) {
      addBotMessage(
        "მადლობა! თქვენი შეტყობინება მივიღე. მალე დაგიკავშირდებით 🙏",
        [{ text: "📱 Telegram", action: "telegram" }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Reset notification when opening
  useEffect(() => {
    if (isOpen) setHasNewMessage(false);
  }, [isOpen]);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification Badge */}
      {!isOpen && hasNewMessage && (
        <div className="fixed bottom-16 right-6 z-50 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
          1
        </div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] h-[520px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                  ✨
                </div>
                <div>
                  <h3 className="font-semibold">Lucy - SiTech AI</h3>
                  <p className="text-xs text-white/80">ონლაინ • პასუხობს წამებში</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Welcome Phase */}
              {phase === "welcome" && (
                <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl mb-4">
                    ✨
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    გამარჯობა! 👋
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    მე ვარ Lucy, SiTech-ის AI ასისტენტი.<br />
                    როგორ შემიძლია დაგეხმაროთ?
                  </p>
                  <div className="space-y-3 w-full">
                    <button
                      onClick={startQuickChat}
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                      💬 სწრაფი კითხვა
                    </button>
                    <button
                      onClick={startWithForm}
                      className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      📋 სრული კონსულტაცია
                    </button>
                  </div>
                </div>
              )}

              {/* Lead Form Phase */}
              {phase === "lead-form" && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    მოკლე ინფორმაცია 📋
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                        თქვენი სახელი
                      </label>
                      <input
                        type="text"
                        value={leadInfo.name}
                        onChange={(e) => setLeadInfo(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="მაგ: გიორგი"
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                        ტელეფონი
                      </label>
                      <input
                        type="tel"
                        value={leadInfo.phone}
                        onChange={(e) => setLeadInfo(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="მაგ: 555 123 456"
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                        რა გაინტერესებთ?
                      </label>
                      <select
                        value={leadInfo.interest}
                        onChange={(e) => setLeadInfo(prev => ({ ...prev, interest: e.target.value }))}
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      >
                        <option value="">აირჩიეთ...</option>
                        <option value="website">🌐 ვებსაიტი</option>
                        <option value="ecommerce">🛒 ონლაინ მაღაზია</option>
                        <option value="bot">🤖 Telegram ბოტი</option>
                        <option value="ai">✨ AI ინტეგრაცია</option>
                        <option value="other">📦 სხვა</option>
                      </select>
                    </div>
                    <button
                      onClick={submitLeadForm}
                      disabled={!leadInfo.name || !leadInfo.phone || !leadInfo.interest || isLoading}
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {isLoading ? "იგზავნება..." : "🚀 დავიწყოთ"}
                    </button>
                    <button
                      onClick={startQuickChat}
                      className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      ← უბრალოდ კითხვა მაქვს
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Phase */}
              {phase === "chat" && (
                <div className="p-4 space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white rounded-br-md"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-blue-200" : "text-gray-400"}`}>
                          {msg.timestamp.toLocaleTimeString("ka-GE", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      
                      {/* Quick Buttons */}
                      {msg.sender === "bot" && msg.buttons && msg.buttons.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {msg.buttons.map((btn, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleButtonClick(btn.action)}
                              disabled={isLoading}
                              className="px-3 py-1.5 text-xs bg-white dark:bg-gray-700 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
                            >
                              {btn.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isLoading && (
                    <div className="flex items-start">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-md">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input (only in chat phase) */}
            {phase === "chat" && (
              <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="დაწერეთ შეტყობინება..."
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                    disabled={isLoading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || isLoading}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  ან{" "}
                  <a href="https://t.me/sitech_georgia" className="text-blue-500 hover:underline" target="_blank" rel="noopener">
                    Telegram
                  </a>
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
