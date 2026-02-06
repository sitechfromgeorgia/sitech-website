"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            Si<span className="text-[var(--color-accent)]">Tech</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
              სერვისები
            </a>
            <a href="#portfolio" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
              პორტფოლიო
            </a>
            <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
              კონტაქტი
            </a>
            <a 
              href="https://t.me/sitech_georgia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full font-medium transition-colors"
            >
              💬 მომწერე
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--color-foreground)]"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-border)] pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                სერვისები
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                პორტფოლიო
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                კონტაქტი
              </a>
              <a 
                href="https://t.me/sitech_georgia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full font-medium transition-colors text-center"
              >
                💬 მომწერე
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
