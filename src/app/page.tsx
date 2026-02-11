import Hero from "@/components/sections/Hero";
import LucyShowcase from "@/components/sections/LucyShowcase";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import SpecialOffer from "@/components/sections/SpecialOffer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <Portfolio />
      
      <Services />

      <SpecialOffer />
      
      {/* About Section */}
      <section className="py-32 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-accent)] font-semibold mb-4 block text-sm">ჩვენს შესახებ</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                ქართული <span className="text-gradient">სული</span>, AI-გაძლიერებული მომავალი
              </h2>
              <p className="text-[var(--color-muted)] text-lg mb-6 leading-relaxed">
                SiTech Georgia არის ბათუმში დაფუძნებული AI სააგენტო, რომელიც აერთიანებს 
                თანამედროვე ტექნოლოგიებს და ხელოვნურ ინტელექტს ქართული ბიზნესებისთვის.
              </p>
              <p className="text-[var(--color-muted)] text-lg mb-8 leading-relaxed">
                ჩვენ არ ვაკეთებთ &quot;გენერიულ&quot; საიტებს — Lucy, ჩვენი AI აგენტი, 
                ქმნის თითოეულ პროექტს უნიკალურად, როგორც თქვენი ბიზნესი.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-5xl font-bold text-gradient-ai mb-2">5+</div>
                  <div className="text-sm text-[var(--color-muted)] font-medium">Live პროექტი</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[var(--color-accent)] mb-2">100%</div>
                  <div className="text-sm text-[var(--color-muted)] font-medium">AI-Powered</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">24/7</div>
                  <div className="text-sm text-[var(--color-muted)] font-medium">მხარდაჭერა</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-ai-purple)] to-[var(--color-ai-cyan)] p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl glass-card flex items-center justify-center relative overflow-hidden">
                  {/* Georgian map outline with AI elements */}
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🇬🇪</div>
                    <div className="text-3xl mb-2">🤖 + 🏔️</div>
                    <p className="text-[var(--color-muted)] font-medium">ბათუმი, საქართველო</p>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[var(--color-ai-purple)] to-[var(--color-ai-cyan)] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl animate-float">
                🤖 AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl animate-float" style={{ animationDelay: "3s" }}>
                🇬🇪 Made in Georgia
              </div>
            </div>
          </div>
        </div>
      </section>

      <LucyShowcase />

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-semibold mb-4 block text-sm">შეფასებები</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              რას ამბობენ <span className="text-gradient">კლიენტები</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl border-2 border-[var(--color-border)] hover:border-[var(--color-ai-purple)]/50 transition-all">
              <div className="flex gap-1 mb-6 text-[var(--color-accent)] text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-[var(--color-muted)] text-lg mb-8 italic leading-relaxed">
                &quot;საიტი ძალიან სწრაფად გაკეთდა და ხარისხიანად. Lucy-მ ყველა კითხვას პასუხი გასცა 
                და პროცესი ძალიან მარტივი იყო. რეკომენდაციას ვუწევ!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xl">
                  ა
                </div>
                <div>
                  <div className="font-bold text-lg">ანა ა.</div>
                  <div className="text-sm text-[var(--color-muted)]">მცირე ბიზნესი</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl border-2 border-[var(--color-border)] hover:border-[var(--color-ai-cyan)]/50 transition-all">
              <div className="flex gap-1 mb-6 text-[var(--color-accent)] text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-[var(--color-muted)] text-lg mb-8 italic leading-relaxed">
                &quot;E-commerce საიტი გადახდების ინტეგრაციით — ყველაფერი მუშაობს იდეალურად. 
                AI აგენტის მუშაობა დამაჯერებელია!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-ai-purple)] to-[var(--color-ai-cyan)] flex items-center justify-center text-white font-bold text-xl">
                  გ
                </div>
                <div>
                  <div className="font-bold text-lg">გიორგი მ.</div>
                  <div className="text-sm text-[var(--color-muted)]">ონლაინ მაღაზია</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[var(--color-card)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-semibold mb-4 block text-sm">კონტაქტი</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              მზად ხარ დასაწყებად?
            </h2>
            <p className="text-xl text-[var(--color-muted)]">
              დაგვიკავშირდი და გაიცანი Lucy — უფასო კონსულტაცია!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-6 rounded-2xl glass-card border-2 border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-3xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <div className="text-sm text-[var(--color-muted)] mb-1 font-medium">ელ-ფოსტა</div>
                  <div className="font-bold text-lg">hello@sitech.ge</div>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 rounded-2xl glass-card border-2 border-[var(--color-border)] hover:border-[var(--color-ai-cyan)]/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-ai-cyan)]/10 flex items-center justify-center text-3xl flex-shrink-0">
                  📱
                </div>
                <div>
                  <div className="text-sm text-[var(--color-muted)] mb-1 font-medium">Telegram</div>
                  <div className="font-bold text-lg">@sitech_georgia</div>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 rounded-2xl glass-card border-2 border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-3xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-sm text-[var(--color-muted)] mb-1 font-medium">ლოკაცია</div>
                  <div className="font-bold text-lg">ბათუმი, საქართველო 🇬🇪</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-ai-purple)]/10 to-[var(--color-ai-cyan)]/10 border-2 border-[var(--color-ai-purple)]/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold">Lucy Online 24/7</span>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  მოგვწერე ნებისმიერ დროს — AI აგენტი მზადაა პასუხის გასაცემად და პროექტის დასაწყებად
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[var(--color-ai-purple)] via-[var(--color-ai-cyan)] to-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 ai-grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-8 animate-float">🚀</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            მზად ხარ AI-ის ძალით აგებულ საიტისთვის?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            დაგვიკავშირდი და მოდი ერთად შევქმნათ შენი ციფრული მომავალი Lucy-ს დახმარებით
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://t.me/sitech_georgia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[var(--color-ai-purple)] rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              💬 მომწერე Telegram-ზე
            </a>
            <a 
              href="mailto:hello@sitech.ge"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-lg text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all"
            >
              📧 ან Email-ით
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 px-6 bg-[var(--color-charcoal)] text-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold text-white mb-4">
                Si<span className="text-gradient-ai">Tech</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                AI-გაძლიერებული ვებ დეველოპმენტი ქართული ბიზნესებისთვის
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-white font-medium">Lucy Online 24/7</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">სერვისები</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">AI Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">ონლაინ მაღაზია</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO & PWA</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">კომპანია</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#lucy" className="hover:text-white transition-colors">გაიცანი Lucy</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">პორტფოლიო</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">კონტაქტი</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">დაგვიკავშირდი</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:hello@sitech.ge" className="hover:text-white transition-colors">hello@sitech.ge</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="https://t.me/sitech_georgia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@sitech_georgia</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>ბათუმი, საქართველო</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 SiTech Georgia. ყველა უფლება დაცულია.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">🤖 Powered by Lucy AI</span>
              <span className="text-white/30">•</span>
              <span className="text-sm">🇬🇪 Made with ❤️ in Batumi</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
