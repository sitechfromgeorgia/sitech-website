"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/translations";
import { Globe } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'ka', flag: '🇬🇪', name: 'ქართული' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'uk', flag: '🇺🇦', name: 'Українська' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Si<span className="text-[var(--color-accent)]">Tech</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">{t('nav.services')}</a>
            <a href="#portfolio" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">{t('nav.portfolio')}</a>
            <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">{t('nav.contact')}</a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLang.flag}</span>
              </button>
              
              {isLangOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                          language === lang.code
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'hover:bg-[var(--color-muted)]/10'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a href="https://t.me/SiTechagencybot" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/25 tracking-wider">
              {t('nav.contactButton')}
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
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">{t('nav.services')}</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">{t('nav.portfolio')}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors text-sm uppercase tracking-widest font-semibold">{t('nav.contact')}</a>
            
            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-muted)] mb-2 uppercase tracking-wider">{t('nav.language')}</p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-xs">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <a href="https://t.me/SiTechagencybot" target="_blank" rel="noopener noreferrer" className="block px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-full text-sm font-semibold text-center tracking-wider">
              {t('nav.contactButton')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
