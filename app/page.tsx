"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Zap, Globe, ArrowRight, MessageCircle, Bot, Clock, Languages, Heart, ExternalLink } from "lucide-react";

export default function Home() {
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
                საქართველოს პირველი AI სააგენტო
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slideUp delay-100">
              <span className="block text-[var(--color-foreground)]">გაზარდე ბიზნესი</span>
              <span className="block text-gradient mt-2">ონლაინ</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed animate-slideUp delay-200">
              ჩვენ მოვდივართ შენთან — მესენჯერში, მეილში, სადაც ხარ.
              <span className="block mt-2 text-[var(--color-foreground)]">არანაირი ახალი აპლიკაცია.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slideUp delay-300">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[var(--color-primary-dark)] transition-all hover:scale-105"
              >
                დაიწყე პროექტი
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollTo("lucy")}
                className="flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--color-foreground)] rounded-full font-semibold text-lg border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Heart className="w-5 h-5" aria-hidden="true" />
                გაიცანი ლუსი
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
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block animate-slideUp">გაიცანი ლუსი</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp delay-100">
              შენი <span className="text-gradient">AI თანაშემწე</span> 24/7
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto animate-slideUp delay-200">
              ლუსი არის AI ასისტენტი, რომელიც აძლევს SiTech-ს სუპერძალას — ყოველთვის ხელმისაწვდომი, ყოველთვის მზად დაგეხმაროს
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Lucy character showcase */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] p-1 animate-gradient">
                <div className="w-full h-full rounded-3xl bg-[var(--color-background)] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  {/* Chat bubble animation */}
                  <div className="absolute top-8 left-8 bg-[var(--color-primary)]/10 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tl-none border border-[var(--color-primary)]/20 animate-slideUp">
                    <p className="text-sm">გამარჯობა! 👋</p>
                  </div>
                  <div className="absolute bottom-8 right-8 bg-[var(--color-accent)]/10 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-br-none border border-[var(--color-accent)]/20 animate-slideUp delay-300">
                    <p className="text-sm">როგორ შემიძლია დაგეხმარო?</p>
                  </div>
                  
                  <Image src="/lucy-avatar.png" alt="Lucy - SiTech AI Assistant" width={200} height={200} className="mb-4 animate-float rounded-full" />
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">ლუსი</h3>
                    <p className="text-[var(--color-muted)]">SiTech AI Assistant</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-500 font-medium">ონლაინ</span>
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
                    <h3 className="text-xl font-bold mb-2">24/7 ხელმისაწვდომობა</h3>
                    <p className="text-[var(--color-muted)]">ლუსი არასდროს სძინავს. ნებისმიერ დროს, ნებისმიერ დღეს — მზად არის დაგეხმაროს</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">მყისიერი პასუხები</h3>
                    <p className="text-[var(--color-muted)]">წამებში მიიღებ პასუხს ნებისმიერ კითხვაზე — არანაირი მოლოდინი</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform">
                    <Languages className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">მრავალენოვანი</h3>
                    <p className="text-[var(--color-muted)]">საუბრობს ქართულად, ინგლისურად, რუსულად — როგორც შენ გინდა</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20">
            <p className="text-xl md:text-2xl font-medium mb-6">
              ლუსი არის გუნდის წევრი, არა მხოლოდ ხელსაწყო
            </p>
            <a 
              href="https://t.me/SiTechagencybot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              დაუწყე საუბარი ლუსს
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - EXACT PRICES */}
      <section id="services" className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">სერვისები</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">რას <span className="text-gradient">ვაკეთებთ</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">გამჭვირვალე ფასები, ხარისხიანი სერვისი</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "radial-gradient(circle at 20% 50%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-accent) 1px, transparent 1px)", backgroundSize: "30px 30px, 40px 40px"}} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-landing.jpg" alt="ლენდინგი" width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">ლენდინგი (1 ენა)</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">ერთგვერდიანი საიტი ერთ ენაზე</p>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">100₾</div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" style={{backgroundImage: "linear-gradient(135deg, var(--color-accent) 25%, transparent 25%), linear-gradient(225deg, var(--color-accent) 25%, transparent 25%)", backgroundSize: "20px 20px"}} />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-tr-full" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">+ენის დამატება</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">დამატებითი ენის ვერსია</p>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">+50₾/ენა</div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "repeating-linear-gradient(0deg, var(--color-secondary), var(--color-secondary) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, var(--color-secondary), var(--color-secondary) 1px, transparent 1px, transparent 40px)"}} />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-business-site.jpg" alt="ბიზნეს საიტი" width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">ბიზნეს საიტი</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">3-5 გვერდიანი საიტი</p>
                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">500-1,500₾</div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" style={{backgroundImage: "conic-gradient(from 0deg at 50% 50%, var(--color-primary) 0deg, transparent 60deg, transparent 300deg, var(--color-primary) 360deg)", backgroundSize: "60px 60px"}} />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[var(--color-primary)]/5 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-complex-app.jpg" alt="კომპლექსური საიტი/აპი" width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">კომპლექსური საიტი/აპი</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">სრული ფუნქციონალი</p>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">1,500-5,000₾</div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "radial-gradient(ellipse at 30% 70%, var(--color-accent) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, var(--color-primary) 0%, transparent 50%)"}} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-accent)]/30 via-transparent to-[var(--color-primary)]/30" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-payment.jpg" alt="გადახდის ინტეგრაცია" width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">გადახდის ინტეგრაცია</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">TBC, BOG და სხვა</p>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">5,000₾+</div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-secondary) 10px, var(--color-secondary) 11px)"}} />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4"><Image src="/icons/icon-maintenance.jpg" alt="Maintenance" width={64} height={64} className="rounded-lg" /></div>
                <h3 className="text-xl font-bold mb-2">Maintenance (პატარა)</h3>
                <p className="text-[var(--color-muted)] text-sm mb-4">მცირე საიტების მხარდაჭერა</p>
                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">100₾/თვე</div>
              </div>
            </div>

            {/* Service 7 */}
            <div className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all md:col-span-2 lg:col-span-3 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{backgroundImage: "radial-gradient(circle at 10% 50%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 90% 50%, var(--color-accent) 1px, transparent 1px)", backgroundSize: "50px 50px, 35px 35px"}} />
              <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0"><Image src="/icons/icon-maintenance.jpg" alt="Maintenance" width={64} height={64} className="rounded-lg" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Maintenance (დიდი)</h3>
                    <p className="text-[var(--color-muted)] text-sm">დიდი პროექტების მხარდაჭერა</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[var(--color-primary)]">შეთანხმებით</div>
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
            🔥 სპეციალური შეთავაზება
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            500 მცირე მეწარმისთვის
          </h2>
          <p className="text-2xl md:text-3xl mb-8 font-medium">
            პროფესიონალური ლენდინგი მხოლოდ <span className="text-5xl font-bold">100₾-ად</span>
          </p>
          <p className="text-xl mb-8 text-white/90">
            სრული მომსახურება: დიზაინი + დეველოპმენტი + ჰოსტინგი პირველი თვე უფასო
          </p>
          <a 
            href="https://t.me/SiTechagencybot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[var(--color-primary)] rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            დაიჭირე ადგილი ახლავე
            <ArrowRight className="w-6 h-6" />
          </a>
          <p className="text-sm mt-6 text-white/70">⏰ შეზღუდული რაოდენობა • დაჩქარდი!</p>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-medium mb-4 block">მალე</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">რა <span className="text-gradient">გველოდება</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">მალე დავამატებთ ახალ სერვისებს</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "icon-ai-chatbot.jpg", title: "AI ჩატბოტები", desc: "ინტელექტუალური ბოტები თქვენი ბიზნესისთვის" },
              { icon: "icon-automation.jpg", title: "ბიზნეს ავტომატიზაცია", desc: "პროცესების ავტომატიზაცია და ოპტიმიზაცია" },
              { icon: "icon-smm.jpg", title: "სოციალური ქსელების მართვა", desc: "SMM და კონტენტ მენეჯმენტი" },
              { icon: "icon-training.jpg", title: "ტრენინგები/კურსები", desc: "ვებ ტექნოლოგიების სწავლება" },
            ].map((service) => (
              <div key={service.title} className="group relative p-6 rounded-2xl bg-[var(--color-background)] border border-dashed border-[var(--color-border)] opacity-75 hover:opacity-100 transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{backgroundImage: "radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)", backgroundSize: "24px 24px"}} />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-secondary)]/5 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  <div className="mb-4"><Image src={`/icons/${service.icon}`} alt={service.title} width={64} height={64} className="rounded-lg" /></div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm">{service.desc}</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-xs font-medium">🔜 მალე</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - REAL PROJECTS ONLY */}
      <section id="portfolio" className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">პორტფოლიო</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ჩვენი <span className="text-gradient">ნამუშევრები</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">რეალური პროექტები რეალური შედეგებით</p>
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
                <div className="absolute top-4 right-4 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  ✅ ჩაბარებული
                </div>
                <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-7xl">
                  🏡
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[var(--color-primary)] transition-colors">Greenland77.ge</h3>
                  <ExternalLink className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                </div>
                <p className="text-[var(--color-muted)] text-sm mb-4">უძრავი ქონების სააგენტოს ვებსაიტი</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg text-xs font-medium">Next.js</span>
                  <span className="px-2.5 py-1 bg-green-500/10 text-green-500 rounded-lg text-xs font-medium">უძრავი ქონება</span>
                  <span className="px-2.5 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-lg text-xs font-medium">კორპორატიული</span>
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
                <div className="absolute top-4 right-4 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  ✅ ჩაბარებული
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-7xl">
                  💼
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">WIG Landing</h3>
                  <ExternalLink className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <p className="text-[var(--color-muted)] text-sm mb-4">ბიზნეს კონსულტაციის ლენდინგ გვერდი</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-lg text-xs font-medium">Landing</span>
                  <span className="px-2.5 py-1 bg-purple-500/10 text-purple-500 rounded-lg text-xs font-medium">ბიზნესი</span>
                  <span className="px-2.5 py-1 bg-pink-500/10 text-pink-500 rounded-lg text-xs font-medium">კონსულტაცია</span>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Card */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 rounded-3xl bg-[var(--color-card)] border-2 border-dashed border-[var(--color-border)]">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">შენი პროექტი შემდეგია!</h3>
              <p className="text-[var(--color-muted)] mb-6 max-w-md">
                გაამდიდრე ჩვენი პორტფოლიო შენი უნიკალური პროექტით
              </p>
              <button 
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold hover:bg-[var(--color-primary-dark)] hover:scale-105 transition-all"
              >
                დაიწყე პროექტი
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">კონტაქტი</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">მოდი <span className="text-gradient">ვისაუბროთ</span></h2>
            <p className="text-[var(--color-muted)] text-lg">გვიყევი შენი იდეის შესახებ — უფასო კონსულტაცია!</p>
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
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Telegram</h3>
              <p className="text-[var(--color-muted)] text-center text-sm mb-4">დაუკავშირდი ლუსს ახლავე</p>
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
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">Email</h3>
              <p className="text-[var(--color-muted)] text-center text-sm mb-4">ოფიციალური წერილები</p>
              <p className="font-mono text-sm text-[var(--color-accent)]">hello@sitech.ge</p>
            </a>

            {/* Location */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-secondary)] transition-colors">ლოკაცია</h3>
              <p className="text-[var(--color-muted)] text-center text-sm mb-4">სადაც ვართ</p>
              <p className="font-medium text-[var(--color-secondary)]">ბათუმი, საქართველო</p>
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

          <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-muted)]">
            <p>&copy; 2025 SiTech Georgia. Made with ❤️ in Batumi</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
