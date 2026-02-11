'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !message) return;
    
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });
      
      if (res.ok) {
        setStatus('success');
        setName('');
        setContact('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="თქვენი სახელი"
          required
          className="w-full px-6 py-4 rounded-2xl glass-card border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-all text-lg"
        />
      </div>
      <div>
        <input 
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="ელ-ფოსტა ან ტელეფონი"
          required
          className="w-full px-6 py-4 rounded-2xl glass-card border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-all text-lg"
        />
      </div>
      <div>
        <textarea 
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="მოგვიყევით თქვენი პროექტის შესახებ..."
          required
          className="w-full px-6 py-4 rounded-2xl glass-card border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-all resize-none text-lg"
        />
      </div>
      <button 
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-accent-dark)] text-white rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'idle' && 'გაგზავნა →'}
        {status === 'sending' && '⏳ იგზავნება...'}
        {status === 'success' && '✅ გაგზავნილია!'}
        {status === 'error' && '❌ შეცდომა, სცადეთ თავიდან'}
      </button>
    </form>
  );
}
