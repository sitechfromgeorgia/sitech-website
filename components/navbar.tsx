"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Si<span className="text-[var(--color-accent)]">Tech</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">სერვისები</a>
            <a href="#portfolio" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">პორტფოლიო</a>
            <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">კონტაქტი</a>
            <a href="https://t.me/SiTechagencybot" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/25 tracking-wider">
              💬 მომწერე
            </a>
          </div>
          <button
            className="md:hidden p-2 text-[var(--color-foreground)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-border)] pt-4 space-y-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">სერვისები</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">პორტფოლიო</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">კონტაქტი</a>
            <a href="https://t.me/SiTechagencybot" target="_blank" rel="noopener noreferrer" className="block px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-full text-sm font-semibold text-center tracking-wider">
              💬 მომწერე
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
