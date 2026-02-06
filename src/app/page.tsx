import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Services Preview Section */}
      <section className="py-24 px-6 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              რას <span className="text-gradient">ვაკეთებთ</span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              AI-გაძლიერებული დეველოპმენტი ქართული გულისხმიერებით
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
              <p className="text-[var(--color-primary)] font-semibold">
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
              <p className="text-[var(--color-accent)] font-semibold">
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
              <p className="text-[var(--color-secondary)] font-semibold">
                Custom
              </p>
            </div>
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
          <button className="px-10 py-5 bg-white text-[var(--color-primary)] rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            უფასო კონსულტაცია
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--color-charcoal)] text-white/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white">
            Si<span className="text-[var(--color-accent)]">Tech</span>
          </div>
          <p className="text-sm">
            © 2026 SiTech Georgia. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm">🇬🇪 Batumi, Georgia</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
