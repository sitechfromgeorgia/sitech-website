"use client";

import Image from "next/image";
import { Sparkles, Zap, Globe, ArrowRight, MessageCircle, Bot, Clock, Languages, Heart, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/60 via-transparent to-[var(--color-background)]" />
        </div>
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        {/* Floating icons */}
        <div className="absolute top-32 right-[20%] text-[var(--color-primary)] animate-float">
          <Sparkles className="w-8 h-8" aria-hidden="true" />
        </div>
        <div className="absolute bottom-32 left-[15%] text-[var(--color-accent)] animate-float animation-delay-1000">
          <Zap className="w-7 h-7" aria-hidden="true" />
        </div>
        <div className="absolute top-1/2 right-[10%] text-[var(--color-secondary)] animate-float animation-delay-2000">
          <Globe className="w-9 h-9" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="animate-slideUp">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium border border-[var(--color-primary)]/20">
                <Bot className="w-4 h-4" aria-hidden="true" />
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slideUp delay-100">
              <span className="block text-[var(--color-foreground)]">{t('hero.title1')}</span>
              <span className="block text-gradient mt-2">{t('hero.title2')}</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed animate-slideUp delay-200">
              {t('hero.subtitle1')}
              <span className="block mt-2 text-[var(--color-foreground)]">{t('hero.subtitle2')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slideUp delay-300">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[var(--color-primary-dark)] transition-all hover:scale-105"
              >
                {t('hero.startProject')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollTo("lucy")}
                className="flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--color-foreground)] rounded-full font-semibold text-lg border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Heart className="w-5 h-5" aria-hidden="true" />
                {t('hero.meetLucy')}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-muted)] flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
          </div>
        </div>
      </section>

      {/* Lucy Section - MOST IMPORTANT! */}
      <section id="lucy" className="py-24 px-6 bg-[var(--color-card)] relative overflow-hidden">
        {/* Dynamic Background - Floating Orbs & Particles */}
        <div className="lucy-bg-orbs absolute inset-0" />
        <div className="lucy-bg-particles absolute inset-0" />
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block animate-slideUp">{t('lucy.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp delay-100">
              {t('lucy.title')} <span className="text-gradient">{t('lucy.titleGradient')}</span> {t('lucy.title247')}
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto animate-slideUp delay-200">
              {t('lucy.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Lucy character showcase */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] p-1 animate-gradient">
                <div className="w-full h-full rounded-3xl bg-[var(--color-background)] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  {/* Chat bubble animation */}
                  <div className="absolute top-8 left-8 bg-[var(--color-primary)]/10 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tl-none border border-[var(--color-primary)]/20 animate-slideUp">
                    <p className="text-sm">{t('lucy.greeting')}</p>
                  </div>
                  <div className="absolute bottom-8 right-8 bg-[var(--color-accent)]/10 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-br-none border border-[var(--color-accent)]/20 animate-slideUp delay-300">
                    <p className="text-sm">{t('lucy.helpQuestion')}</p>
                  </div>
                  
                  <Image src="/lucy-avatar.png" alt="Lucy - SiTech AI Assistant" width={200} height={200} className="mb-4 animate-float rounded-full" />
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">{t('lucy.name')}</h3>
                    <p className="text-[var(--color-muted)]">{t('lucy.role')}</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-500 font-medium">{t('lucy.online')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lucy capabilities */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('lucy.availability')}</h3>
                    <p className="text-[var(--color-muted)]">{t('lucy.availabilityDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('lucy.instantResponse')}</h3>
                    <p className="text-[var(--color-muted)]">{t('lucy.instantResponseDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform">
                    <Languages className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('lucy.multilingual')}</h3>
                    <p className="text-[var(--color-muted)]">{t('lucy.multilingualDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20">
            <p className="text-xl md:text-2xl font-medium mb-6">
              {t('lucy.teamMember')}
            </p>
            <a 
              href="https://t.me/SiTechagencybot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t('lucy.startChat')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - EXACT PRICES */}
      <section id="services" className="py-24 px-6 bg-[var(--color-background)] relative overflow-hidden">
        {/* Dynamic Background - Animated Grid/Mesh */}
        <div className="services-bg-grid absolute inset-0" />
        <div className="services-bg-mesh absolute inset-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">{t('services.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')} <span className="text-gradient">{t('services.titleGradient')}</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 - ლენდინგი */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "radial-gradient(circle at 20% 50%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-accent) 1px, transparent 1px)", backgroundSize: "30px 30px, 40px 40px"}} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-landing.jpg" alt={t('services.landing')} width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">{t('services.landing')}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('services.landingDesc')}</p>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{t('services.landingPrice')}</div>
              </div>
            </div>

            {/* Service 2 - მრავალენოვანი */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" style={{backgroundImage: "linear-gradient(135deg, var(--color-accent) 25%, transparent 25%), linear-gradient(225deg, var(--color-accent) 25%, transparent 25%)", backgroundSize: "20px 20px"}} />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-tr-full" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">{t('services.addLanguage')}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('services.addLanguageDesc')}</p>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">{t('services.addLanguagePrice')}</div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "repeating-linear-gradient(0deg, var(--color-secondary), var(--color-secondary) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, var(--color-secondary), var(--color-secondary) 1px, transparent 1px, transparent 40px)"}} />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-business-site.jpg" alt={t('services.businessSite')} width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">{t('services.businessSite')}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('services.businessSiteDesc')}</p>
                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">{t('services.businessSitePrice')}</div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" style={{backgroundImage: "conic-gradient(from 0deg at 50% 50%, var(--color-primary) 0deg, transparent 60deg, transparent 300deg, var(--color-primary) 360deg)", backgroundSize: "60px 60px"}} />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[var(--color-primary)]/5 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-complex-app.jpg" alt={t('services.complexApp')} width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">{t('services.complexApp')}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('services.complexAppDesc')}</p>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{t('services.complexAppPrice')}</div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "radial-gradient(ellipse at 30% 70%, var(--color-accent) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, var(--color-primary) 0%, transparent 50%)"}} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-accent)]/30 via-transparent to-[var(--color-primary)]/30" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-payment.jpg" alt={t('services.paymentIntegration')} width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">{t('services.paymentIntegration')}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('services.paymentIntegrationDesc')}</p>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">{t('services.paymentIntegrationPrice')}</div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-secondary) 10px, var(--color-secondary) 11px)"}} />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-maintenance.jpg" alt={t('services.maintenanceSmall')} width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">{t('services.maintenanceSmall')}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('services.maintenanceSmallDesc')}</p>
                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">{t('services.maintenanceSmallPrice')}</div>
              </div>
            </div>

            {/* Service 7 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all md:col-span-2 lg:col-span-3 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{backgroundImage: "radial-gradient(circle at 10% 50%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 90% 50%, var(--color-accent) 1px, transparent 1px)", backgroundSize: "50px 50px, 35px 35px"}} />
              <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0"><Image src="/icons/icon-maintenance.jpg" alt={t('services.maintenanceLarge')} width={64} height={64} className="rounded-lg" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t('services.maintenanceLarge')}</h3>
                    <p className="text-[var(--color-muted)] text-sm">{t('services.maintenanceLargeDesc')}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[var(--color-primary)]">{t('services.maintenanceLargePrice')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"}} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
            {t('specialOffer.badge')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('specialOffer.title')}
          </h2>
          <p className="text-2xl md:text-3xl mb-8 font-medium">
            {t('specialOffer.price')} <span className="text-5xl font-bold">{t('specialOffer.priceAmount')}</span>
          </p>
          <p className="text-xl mb-8 text-white/90">
            {t('specialOffer.description')}
          </p>
          <a 
            href="https://t.me/SiTechagencybot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[var(--color-primary)] rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            {t('specialOffer.cta')}
            <ArrowRight className="w-6 h-6" />
          </a>
          <p className="text-sm mt-6 text-white/70">{t('specialOffer.limited')}</p>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-24 px-6 bg-[var(--color-card)] relative overflow-hidden">
        {/* Dynamic Background - Diagonal Scanlines */}
        <div className="comingsoon-bg-scanlines absolute inset-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-medium mb-4 block">{t('comingSoon.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('comingSoon.title')} <span className="text-gradient">{t('comingSoon.titleGradient')}</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">{t('comingSoon.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "icon-ai-chatbot.jpg", titleKey: "comingSoon.aiChatbots", descKey: "comingSoon.aiChatbotsDesc" },
              { icon: "icon-automation.jpg", titleKey: "comingSoon.automation", descKey: "comingSoon.automationDesc" },
              { icon: "icon-smm.jpg", titleKey: "comingSoon.smm", descKey: "comingSoon.smmDesc" },
              { icon: "icon-training.jpg", titleKey: "comingSoon.training", descKey: "comingSoon.trainingDesc" },
            ].map((service) => (
              <div key={service.titleKey} className="group relative p-6 rounded-2xl bg-[var(--color-background)] border border-dashed border-[var(--color-border)] opacity-75 hover:opacity-100 transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{backgroundImage: "radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)", backgroundSize: "24px 24px"}} />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-secondary)]/5 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="mb-4"><Image src={`/icons/${service.icon}`} alt={t(service.titleKey)} width={64} height={64} className="rounded-lg" /></div>
                  <h3 className="text-lg font-bold mb-2">{t(service.titleKey)}</h3>
                  <p className="text-[var(--color-muted)] text-sm">{t(service.descKey)}</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-xs font-medium">{t('comingSoon.soon')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - REAL PROJECTS ONLY */}
      <section id="portfolio" className="py-24 px-6 bg-[var(--color-background)] relative overflow-hidden">
        {/* Dynamic Background - Radial Gradient Orbs */}
        <div className="portfolio-bg-orbs absolute inset-0" />
        <div className="portfolio-bg-orb3 absolute inset-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">{t('portfolio.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('portfolio.title')} <span className="text-gradient">{t('portfolio.titleGradient')}</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Greenland77.ge */}
            <a 
              href="https://greenland77.ge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border-2 border-[var(--color-primary)] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  {t('portfolio.ongoing')}
                </div>
                <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-7xl">
                  📦
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[var(--color-primary)] transition-colors">{t('portfolio.greenlandTitle')}</h3>
                  <ExternalLink className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                </div>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('portfolio.greenlandDesc')}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg text-xs font-medium">Next.js</span>
                  <span className="px-2.5 py-1 bg-green-500/10 text-green-500 rounded-lg text-xs font-medium">{t('portfolio.greenlandDesc')}</span>
                  <span className="px-2.5 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-lg text-xs font-medium">Supabase</span>
                </div>
              </div>
            </a>

            {/* WIG Landing */}
            <a 
              href="https://wig-landing.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border-2 border-[var(--color-accent)] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  {t('portfolio.ongoing')}
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-7xl">
                  💼
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{t('portfolio.wigTitle')}</h3>
                  <ExternalLink className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <p className="text-[var(--color-muted)] text-sm mb-4">{t('portfolio.wigDesc')}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-lg text-xs font-medium">Landing</span>
                  <span className="px-2.5 py-1 bg-purple-500/10 text-purple-500 rounded-lg text-xs font-medium">ბიზნესი</span>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Card */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 rounded-3xl bg-[var(--color-card)] border-2 border-dashed border-[var(--color-border)]">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">{t('portfolio.yourProject')}</h3>
              <p className="text-[var(--color-muted)] mb-6 max-w-md">
                {t('portfolio.yourProjectDesc')}
              </p>
              <button 
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold hover:bg-[var(--color-primary-dark)] hover:scale-105 transition-all"
              >
                {t('hero.startProject')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-card)] relative overflow-hidden">
        {/* Dynamic Background - Dots/Stars Pattern */}
        <div className="contact-bg-dots absolute inset-0" />
        <div className="contact-bg-stars absolute inset-0" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">{t('contact.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')} <span className="text-gradient">{t('contact.titleGradient')}</span></h2>
            <p className="text-[var(--color-muted)] text-lg">{t('contact.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Telegram */}
            <a 
              href="https://t.me/SiTechagencybot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                💬
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">{t('contact.telegram')}</h3>
              <p className="text-[var(--color-muted)] text-center text-sm mb-4">{t('contact.telegramDesc')}</p>
              <p className="font-mono text-sm text-[var(--color-primary)]">@SiTechagencybot</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:hello@sitech.ge"
              className="group flex flex-col items-center p-8 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                📧
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">{t('contact.email')}</h3>
              <p className="text-[var(--color-muted)] text-center text-sm mb-4">{t('contact.emailDesc')}</p>
              <p className="font-mono text-sm text-[var(--color-accent)]">hello@sitech.ge</p>
            </a>

            {/* Location */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-secondary)] transition-colors">{t('contact.location')}</h3>
              <p className="text-[var(--color-muted)] text-center text-sm mb-4">{t('contact.locationDesc')}</p>
              <p className="font-medium text-[var(--color-secondary)]">{t('contact.locationCity')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Language Switcher */}
      <footer className="py-12 px-6 bg-[var(--color-background)] border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">
                <span className="text-gradient">SiTech</span> Georgia
              </div>
              <p className="text-[var(--color-muted)] text-sm">საქართველოს პირველი AI სააგენტო</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[var(--color-muted)]">ენა:</span>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium">
                  🇬🇪 ქართული
                </button>
                <button className="px-3 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)] text-sm font-medium opacity-50 cursor-not-allowed" disabled>
                  🇬🇧 English
                </button>
                <button className="px-3 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)] text-sm font-medium opacity-50 cursor-not-allowed" disabled>
                  🇺🇦 Українська
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-muted)]">&copy; 2026 SiTech Georgia. Made with ❤️ in Batumi</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/sitech.georgia" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/sitech.web.agency" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://t.me/SiTechagencybot" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
