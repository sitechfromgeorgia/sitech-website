"use client";

import { useState } from "react";
import { Sparkles, Zap, Globe, ArrowRight } from "lucide-react";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern pt-20">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl" />
        </div>

        {/* Floating icons */}
        <div className="absolute top-32 right-[20%] text-[var(--color-primary)]">
          <Sparkles className="w-8 h-8" aria-hidden="true" />
        </div>
        <div className="absolute bottom-32 left-[15%] text-[var(--color-accent)]">
          <Zap className="w-7 h-7" aria-hidden="true" />
        </div>
        <div className="absolute top-1/2 right-[10%] text-[var(--color-secondary)]">
          <Globe className="w-9 h-9" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="animate-slideUp">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium border border-[var(--color-primary)]/20">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                AI-Enhanced Development
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slideUp delay-100">
              <span className="block text-[var(--color-foreground)]">გაზარდე ბიზნესი</span>
              <span className="block text-gradient mt-2">ონლაინ</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed animate-slideUp delay-200">
              თანამედროვე ვებსაიტები და ციფრული გადაწყვეტილებები
              <span className="text-[var(--color-primary)]"> AI ტექნოლოგიების </span>
              გამოყენებით
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slideUp delay-300">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                დაიწყე პროექტი
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--color-foreground)] rounded-full font-semibold text-lg border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                ნახე პორტფოლიო
              </button>
            </div>

            <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-[var(--color-muted)] animate-slideUp delay-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm">145+ Expert Skills</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[var(--color-border)]" />
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-[var(--color-foreground)]">Next.js</span>
                <span>•</span>
                <span className="font-semibold text-[var(--color-foreground)]">React</span>
                <span>•</span>
                <span className="font-semibold text-[var(--color-foreground)]">AI</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[var(--color-border)]" />
              <div className="text-sm">🇬🇪 Made in Georgia</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeIn delay-500">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-muted)] flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--color-accent)] font-medium mb-4 block">ჩვენს შესახებ</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ქართული <span className="text-gradient">სული</span>, AI-გაძლიერებული მომავალი
              </h2>
              <p className="text-[var(--color-muted)] text-lg mb-6 leading-relaxed">
                SiTech Georgia არის ბათუმში დაფუძნებული ვებ-დეველოპმენტ სტუდია, რომელიც აერთიანებს თანამედროვე ტექნოლოგიებს და ხელოვნურ ინტელექტს ქართული ბიზნესებისთვის.
              </p>
              <p className="text-[var(--color-muted)] text-lg mb-8 leading-relaxed">
                ჩვენ არ ვაკეთებთ &quot;გენერიულ&quot; საიტებს — თითოეული პროექტი უნიკალურია, როგორც თქვენი ბიზნესი.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-primary)]">50+</div>
                  <div className="text-sm text-[var(--color-muted)]">პროექტი</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-accent)]">95%</div>
                  <div className="text-sm text-[var(--color-muted)]">კმაყოფილება</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--color-secondary)]">24/7</div>
                  <div className="text-sm text-[var(--color-muted)]">მხარდაჭერა</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-1">
                <div className="w-full h-full rounded-3xl bg-[var(--color-card)] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🏔️</div>
                    <p className="text-[var(--color-muted)]">ბათუმი, საქართველო</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">🤖 AI Powered</div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--color-accent)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">🇬🇪 Made in Georgia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">სერვისები</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">რას <span className="text-gradient">ვაკეთებთ</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">სრული ციფრული გადაწყვეტილებები — საიტიდან მობილურ აპამდე</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🌐", title: "ვებსაიტები", desc: "თანამედროვე, სწრაფი და მობაილ-მორგებული ვებსაიტები თქვენი ბიზნესისთვის", items: ["Landing Pages", "კორპორატიული საიტები", "Blog / პორტფოლიო"], price: "300+ ₾", color: "primary" },
              { emoji: "🛒", title: "ონლაინ მაღაზია", desc: "E-commerce პლატფორმა ინტეგრირებული გადახდებით და მარაგის მართვით", items: ["TBC / BOG ინტეგრაცია", "მარაგის მართვა", "მიტანის სერვისები"], price: "3,000+ ₾", color: "accent" },
              { emoji: "🤖", title: "AI ინტეგრაცია", desc: "ჭკვიანი ჩატბოტები, ავტომატიზაცია და AI-გაძლიერებული ფუნქციები", items: ["Telegram / WhatsApp ბოტები", "AI Customer Support", "ავტომატიზაცია"], price: "Custom", color: "secondary" },
            ].map((s) => (
              <div key={s.title} className={`group p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-${s.color})] hover:shadow-xl transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-xl bg-[var(--color-${s.color})]/10 flex items-center justify-center text-[var(--color-${s.color})] text-2xl mb-6 group-hover:scale-110 transition-transform`}>{s.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-[var(--color-muted)] mb-4">{s.desc}</p>
                <ul className="text-sm text-[var(--color-muted)] mb-4 space-y-1">
                  {s.items.map((i) => <li key={i}>✓ {i}</li>)}
                </ul>
                <p className={`text-[var(--color-${s.color})] font-bold text-lg`}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">პორტფოლიო</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ჩვენი <span className="text-gradient">ნამუშევრები</span></h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">რეალური პროექტები რეალური შედეგებით</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://greenland77.ge" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border-2 border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-4 right-4 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">✅ ჩაბარებული</div>
              <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-6xl">🏡</div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Greenland77.ge</h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">უძრავი ქონების სააგენტოს ვებსაიტი</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs">კორპორატიული</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs">უძრავი ქონება</span>
                </div>
              </div>
            </a>
            <div className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] relative opacity-90">
              <div className="absolute top-4 right-4 z-10 bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full">🚧 მუშავდება</div>
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">💃</div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Caucasus Dance Bridge</h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">საერთაშორისო ცეკვის ფესტივალი</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-xs">Booking</span>
                </div>
              </div>
            </div>
            <div className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border border-dashed border-[var(--color-border)] relative">
              <div className="absolute top-4 right-4 z-10 bg-[var(--color-muted)] text-white text-xs font-bold px-3 py-1 rounded-full">🔜 მალე</div>
              <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-6xl">➕</div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-[var(--color-muted)]">თქვენი პროექტი?</h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">შეკვეთეთ თქვენი უნიკალური ვებსაიტი</p>
                <button onClick={() => scrollTo("contact")} className="inline-block px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors">
                  დაიწყე პროექტი →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">შეფასებები</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">რას ამბობენ <span className="text-gradient">კლიენტები</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "საიტი ძალიან სწრაფად გაკეთდა და ხარისხიანად. Lucy-მ ყველა კითხვას პასუხი გასცა და პროცესი ძალიან მარტივი იყო.", name: "ანა ა.", role: "მცირე ბიზნესი", color: "primary" },
              { text: "E-commerce საიტი გადახდების ინტეგრაციით — ყველაფერი მუშაობს იდეალურად. რეკომენდაციას ვუწევ ყველას!", name: "გიორგი მ.", role: "ონლაინ მაღაზია", color: "accent" },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)]">
                <div className="flex gap-1 mb-4 text-[var(--color-secondary)]">⭐⭐⭐⭐⭐</div>
                <p className="text-[var(--color-muted)] mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-[var(--color-${t.color})] flex items-center justify-center text-white font-bold`}>{t.name[0]}</div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-[var(--color-muted)]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">კონტაქტი</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">დაგვიკავშირდი</h2>
            <p className="text-[var(--color-muted)] text-lg">გვიყავი თქვენი იდეის შესახებ — უფასო კონსულტაცია!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl">📧</div>
                <div>
                  <div className="text-sm text-[var(--color-muted)]">ელ-ფოსტა</div>
                  <div className="font-medium">hello@sitech.ge</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl">📱</div>
                <div>
                  <div className="text-sm text-[var(--color-muted)]">Telegram</div>
                  <div className="font-medium">@sitech_georgia</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-2xl">📍</div>
                <div>
                  <div className="text-sm text-[var(--color-muted)]">ლოკაცია</div>
                  <div className="font-medium">ბათუმი, საქართველო</div>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="თქვენი სახელი" className="w-full px-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors" />
              <input type="email" placeholder="ელ-ფოსტა ან ტელეფონი" className="w-full px-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors" />
              <textarea rows={4} placeholder="მოგვიყევით თქვენი პროექტის შესახებ..." className="w-full px-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none" />
              <button type="submit" className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-bold transition-colors">გაგზავნა →</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">მზად ხარ დასაწყებად?</h2>
          <p className="text-xl text-white/80 mb-8">დაგვიკავშირდი და მოდი ერთად შევქმნათ შენი ციფრული მომავალი</p>
          <a href="https://t.me/sitech_georgia" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-white text-[var(--color-primary)] rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            💬 მომწერე Telegram-ზე
          </a>
        </div>
      </section>

    </main>
  );
}
