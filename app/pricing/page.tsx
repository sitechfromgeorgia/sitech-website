"use client";

import { Check, Rocket, Globe, Briefcase, Code, CreditCard, Settings, Wrench, Megaphone } from "lucide-react";
import Link from "next/link";

const mainServices = [
  {
    name: "ლენდინგი",
    icon: Rocket,
    price: "200₾-დან",
    description: "One-page საიტი თქვენი ბიზნესის სწრაფი სტარტისთვის.",
    features: [
      "ერთი გვერდი (One-page)",
      "რესპონსიული დიზაინი",
      "სწრაფი ჩატვირთვა",
      "კონტაქტის ფორმა",
      "სოციალური ქსელების ინტეგრაცია"
    ],
    color: "var(--color-primary)"
  },
  {
    name: "ბიზნეს საიტი",
    icon: Briefcase,
    price: "500₾-დან",
    description: "სრულფასოვანი ვებსაიტი კომპანიის წარსადგენად.",
    features: [
      "3-5 ძირითადი გვერდი",
      "სერვისების კატალოგი",
      "ბლოგი/სიახლეები",
      "SEO ოპტიმიზაცია",
      "Google Maps ინტეგრაცია"
    ],
    color: "#a855f7"
  },
  {
    name: "კომპლექსური საიტი/აპი",
    icon: Code,
    price: "1,500₾-დან",
    description: "ინდივიდუალური ფუნქციონალი და რთული სისტემები.",
    features: [
      "სრული ფუნქციონალი",
      "Dashboard პანელი",
      "მომხმარებლების მართვა",
      "API ინტეგრაციები",
      "უნიკალური ბიზნეს ლოგიკა"
    ],
    color: "#ec4899"
  },
  {
    name: "გადახდის ინტეგრაცია",
    icon: CreditCard,
    price: "5,000₾-დან",
    description: "E-commerce და საბანკო სისტემების შეერთება.",
    features: [
      "TBC / BOG ინტეგრაცია",
      "Visa / Mastercard მხარდაჭერა",
      "გადახდების ისტორია",
      "უსაფრთხო ტრანზაქციები",
      "ავტომატური ინვოისინგი"
    ],
    color: "#f59e0b"
  }
];

const addons = [
  {
    name: "+ენის დამატება",
    icon: Globe,
    price: "+50₾/ენა",
    description: "დამატებითი ენოვანი ვერსია თქვენი საიტისთვის."
  },
  {
    name: "Maintenance (პატარა)",
    icon: Settings,
    price: "100₾/თვე",
    description: "მცირე საიტების ტექნიკური მხარდაჭერა და განახლებები."
  },
  {
    name: "Maintenance (დიდი)",
    icon: Wrench,
    price: "შეთანხმებით",
    description: "დიდი პროექტების უწყვეტი მონიტორინგი და განვითარება."
  }
];

export default function PricingPage() {
  const CTA_LINK = "https://t.me/SiTechagencybot";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            გამჭვირვალე <span className="text-primary italic">ფასები</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            აირჩიეთ თქვენი ბიზნესის ზრდისთვის საჭირო სერვისი. არანაირი ფარული ხარჯები.
          </p>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative group max-w-4xl mx-auto overflow-hidden rounded-3xl border border-primary/50 bg-primary/5 p-8 md:p-12 text-center transition-all hover:bg-primary/10">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6">
                <Megaphone className="w-4 h-4" />
                სპეციალური შეთავაზება
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">100₾ ლენდინგი</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                კამპანია <span className="text-primary font-bold">"500 მცირე მეწარმე"</span> — მხოლოდ მათთვის, ვინც ახლა იწყებს!
              </p>
              <Link 
                href={CTA_LINK}
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
              >
                ვისარგებლებ აქციით
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="group relative flex flex-col bg-card border border-border rounded-3xl p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className="p-3 rounded-2xl bg-muted group-hover:bg-primary/10 transition-colors"
                      style={{ color: service.color }}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-primary">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground mb-8">{service.description}</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={CTA_LINK}
                    target="_blank"
                    className="flex items-center justify-center w-full py-4 rounded-xl border border-primary/20 bg-primary/5 font-bold transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    შეკვეთა
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons & Maintenance */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">დამატებითი სერვისები</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {addons.map((addon, idx) => {
                const Icon = addon.icon;
                return (
                  <div 
                    key={idx}
                    className="flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-card border border-border group transition-all hover:border-primary/30"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="p-3 rounded-xl bg-muted text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">{addon.name}</h4>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xl font-bold text-primary">{addon.price}</span>
                      <Link 
                        href={CTA_LINK}
                        target="_blank"
                        className="px-6 py-2 rounded-lg bg-foreground text-background text-sm font-bold transition-opacity hover:opacity-90"
                      >
                        დამატება
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">გაქვთ განსხვავებული მოთხოვნები?</h2>
            <p className="text-muted-foreground mb-10">
              მოგვწერეთ Telegram-ში და მიიღეთ თქვენს პროექტზე მორგებული ინდივიდუალური პირობები.
            </p>
            <Link 
              href={CTA_LINK}
              target="_blank"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95"
            >
              მოგვწერეთ Telegram-ში
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
