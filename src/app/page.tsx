import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
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
                SiTech Georgia არის ბათუმში დაფუძნებული ვებ-დეველოპმენტ სტუდია, რომელიც აერთიანებს 
                თანამედროვე ტექნოლოგიებს და ხელოვნურ ინტელექტს ქართული ბიზნესებისთვის.
              </p>
              <p className="text-[var(--color-muted)] text-lg mb-8 leading-relaxed">
                ჩვენ არ ვაკეთებთ &quot;გენერიულ&quot; საიტებს — თითოეული პროექტი უნიკალურია, 
                როგორც თქვენი ბიზნესი.
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
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🤖 AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--color-accent)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🇬🇪 Made in Georgia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">სერვისები</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              რას <span className="text-gradient">ვაკეთებთ</span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              სრული ციფრული გადაწყვეტილებები — საიტიდან მობილურ აპამდე
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] text-2xl mb-6 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <h3 className="text-xl font-bold mb-3">ვებსაიტები</h3>
              <p className="text-[var(--color-muted)] mb-4">
                თანამედროვე, სწრაფი და მობაილ-მორგებული ვებსაიტები თქვენი ბიზნესისთვის
              </p>
              <ul className="text-sm text-[var(--color-muted)] mb-4 space-y-1">
                <li>✓ Landing Pages</li>
                <li>✓ კორპორატიული საიტები</li>
                <li>✓ Blog / პორტფოლიო</li>
              </ul>
              <p className="text-[var(--color-primary)] font-bold text-lg">
                300+ ₾
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="group p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-2xl mb-6 group-hover:scale-110 transition-transform">
                🛒
              </div>
              <h3 className="text-xl font-bold mb-3">ონლაინ მაღაზია</h3>
              <p className="text-[var(--color-muted)] mb-4">
                E-commerce პლატფორმა ინტეგრირებული გადახდებით და მარაგის მართვით
              </p>
              <ul className="text-sm text-[var(--color-muted)] mb-4 space-y-1">
                <li>✓ TBC / BOG ინტეგრაცია</li>
                <li>✓ მარაგის მართვა</li>
                <li>✓ მიტანის სერვისები</li>
              </ul>
              <p className="text-[var(--color-accent)] font-bold text-lg">
                3,000+ ₾
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="group p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] text-2xl mb-6 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h3 className="text-xl font-bold mb-3">AI ინტეგრაცია</h3>
              <p className="text-[var(--color-muted)] mb-4">
                ჭკვიანი ჩატბოტები, ავტომატიზაცია და AI-გაძლიერებული ფუნქციები
              </p>
              <ul className="text-sm text-[var(--color-muted)] mb-4 space-y-1">
                <li>✓ Telegram / WhatsApp ბოტები</li>
                <li>✓ AI Customer Support</li>
                <li>✓ ავტომატიზაცია</li>
              </ul>
              <p className="text-[var(--color-secondary)] font-bold text-lg">
                Custom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">პორტფოლიო</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ჩვენი <span className="text-gradient">ნამუშევრები</span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              რეალური პროექტები რეალური შედეგებით
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Caucasus Dance Bridge */}
            <a href="https://caucasusdancebridge.com" target="_blank" rel="noopener noreferrer" 
               className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">
                💃
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Caucasus Dance Bridge
                </h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">
                  საერთაშორისო ცეკვის ფესტივალის ვებსაიტი
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-xs">Booking</span>
                </div>
              </div>
            </a>

            {/* Project 2 - Tbilisi.today */}
            <a href="https://tbilisi.today" target="_blank" rel="noopener noreferrer"
               className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-6xl">
                📰
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Tbilisi.today
                </h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">
                  ახალი ამბების აგრეგატორი AI-ით
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs">AI/ML</span>
                  <span className="px-2 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded text-xs">News</span>
                </div>
              </div>
            </a>

            {/* Project 3 - Mobiline.cloud */}
            <a href="https://mobiline.cloud" target="_blank" rel="noopener noreferrer"
               className="group block rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-6xl">
                📱
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Mobiline.cloud
                </h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">
                  მობილურების მაღაზიის მართვის სისტემა
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs">SaaS</span>
                  <span className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-xs">Inventory</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">შეფასებები</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              რას ამბობენ <span className="text-gradient">კლიენტები</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)]">
              <div className="flex gap-1 mb-4 text-[var(--color-secondary)]">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-[var(--color-muted)] mb-6 italic">
                &quot;საიტი ძალიან სწრაფად გაკეთდა და ხარისხიანად. Lucy-მ ყველა კითხვას პასუხი გასცა 
                და პროცესი ძალიან მარტივი იყო.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                  ა
                </div>
                <div>
                  <div className="font-bold">ანა ა.</div>
                  <div className="text-sm text-[var(--color-muted)]">მცირე ბიზნესი</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)]">
              <div className="flex gap-1 mb-4 text-[var(--color-secondary)]">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-[var(--color-muted)] mb-6 italic">
                &quot;E-commerce საიტი გადახდების ინტეგრაციით — ყველაფერი მუშაობს იდეალურად. 
                რეკომენდაციას ვუწევ ყველას!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                  გ
                </div>
                <div>
                  <div className="font-bold">გიორგი მ.</div>
                  <div className="text-sm text-[var(--color-muted)]">ონლაინ მაღაზია</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-medium mb-4 block">კონტაქტი</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              დაგვიკავშირდი
            </h2>
            <p className="text-[var(--color-muted)] text-lg">
              გვიყავი თქვენი იდეის შესახებ — უფასო კონსულტაცია!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <div className="text-sm text-[var(--color-muted)]">ელ-ფოსტა</div>
                  <div className="font-medium">hello@sitech.ge</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <div className="text-sm text-[var(--color-muted)]">Telegram</div>
                  <div className="font-medium">@sitech_georgia</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <div className="text-sm text-[var(--color-muted)]">ლოკაცია</div>
                  <div className="font-medium">ბათუმი, საქართველო</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="თქვენი სახელი"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="ელ-ფოსტა ან ტელეფონი"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="მოგვიყევით თქვენი პროექტის შესახებ..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-bold transition-colors"
              >
                გაგზავნა →
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            მზად ხარ დასაწყებად?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            დაგვიკავშირდი და მოდი ერთად შევქმნათ შენი ციფრული მომავალი
          </p>
          <a href="https://t.me/sitech_georgia" target="_blank" rel="noopener noreferrer"
             className="inline-block px-10 py-5 bg-white text-[var(--color-primary)] rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            💬 მომწერე Telegram-ზე
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--color-charcoal)] text-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                Si<span className="text-[var(--color-accent)]">Tech</span>
              </div>
              <p className="text-sm">
                AI-გაძლიერებული ვებ დეველოპმენტი ქართული ბიზნესებისთვის
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">სერვისები</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">ვებსაიტები</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">ონლაინ მაღაზია</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI ინტეგრაცია</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">კომპანია</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#portfolio" className="hover:text-white transition-colors">პორტფოლიო</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">კონტაქტი</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">დაგვიკავშირდი</h4>
              <ul className="space-y-2 text-sm">
                <li>📧 hello@sitech.ge</li>
                <li>📱 @sitech_georgia</li>
                <li>📍 ბათუმი, საქართველო</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 SiTech Georgia. ყველა უფლება დაცულია.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm">🇬🇪 Made with ❤️ in Batumi</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
