"use client";

import { Code, Brain, Smartphone, TrendingUp, Palette, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "ვებ განვითარება",
    description: "თანამედროვე, სწრაფი და მასშტაბირებადი ვებსაიტები",
    features: [
      "Next.js 15 და React 19",
      "სრული SEO ოპტიმიზაცია",
      "მობილური პირველი მიდგომა",
      "სწრაფი ჩატვირთვის დრო",
      "სერვერის მხარეს რენდერი (SSR)",
      "დინამიური და სტატიკური გვერდები"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "AI ინტეგრაცია",
    description: "ხელოვნური ინტელექტის სრული ინტეგრაცია თქვენს პროდუქტში",
    features: [
      "Lucy ჭკვიანი ჩატბოტი",
      "GPT-4 ინტეგრაცია",
      "ბუნებრივი ენის დამუშავება",
      "24/7 ავტომატური მხარდაჭერა",
      "პერსონალიზებული რეკომენდაციები",
      "AI-ით გაძლიერებული ანალიტიკა"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "PWA აპლიკაციები",
    description: "Progressive Web Apps - მობილური აპის გამოცდილება ვებში",
    features: [
      "ოფლაინ რეჟიმი",
      "Push შეტყობინებები",
      "მთავარ ეკრანზე დამატება",
      "სწრაფი ჩატვირთვა",
      "აპის მსგავსი ნავიგაცია",
      "კროს-პლატფორმული"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "SEO & მარკეტინგი",
    description: "საძიებო ოპტიმიზაცია და ციფრული მარკეტინგის სტრატეგია",
    features: [
      "ტექნიკური SEO აუდიტი",
      "საკვანძო სიტყვების კვლევა",
      "კონტენტის ოპტიმიზაცია",
      "ბმულების შექმნა",
      "Google Analytics დაყენება",
      "მომხმარებლის გამოცდილების გაუმჯობესება"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Palette,
    title: "UI/UX დიზაინი",
    description: "თანამედროვე და ინტუიციური ინტერფეისის დიზაინი",
    features: [
      "მომხმარებლის კვლევა",
      "Wireframes და პროტოტიპები",
      "ინტერაქტიული დიზაინი",
      "დიზაინ სისტემა",
      "Accessibility (WCAG)",
      "მობილური და დესკტოპ დიზაინი"
    ],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "მასშტაბირებადი Backend გადაწყვეტილებები",
    features: [
      "RESTful და GraphQL API",
      "მონაცემთა ბაზის დიზაინი",
      "ავთენტიფიკაცია და ავტორიზაცია",
      "Cloud Deployment (Dokploy)",
      "Real-time ფუნქციონალი",
      "მიკროსერვისის არქიტექტურა"
    ],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "უსაფრთხოება",
    description: "ვებ აპლიკაციების უსაფრთხოება და დაცვა",
    features: [
      "SSL/TLS სერტიფიკატები",
      "უსაფრთხოების აუდიტი",
      "OWASP Top 10 დაცვა",
      "მონაცემთა დაშიფვრა",
      "DDoS დაცვა",
      "რეგულარული backup-ები"
    ],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "მხარდაჭერა & მოვლა",
    description: "24/7 ტექნიკური მხარდაჭერა და განახლებები",
    features: [
      "24/7 მონიტორინგი",
      "რეგულარული განახლებები",
      "ბაგების სწრაფი გამოსწორება",
      "ტექნიკური კონსულტაცია",
      "პერფორმანსის ოპტიმიზაცია",
      "კონტენტის მართვის დახმარება"
    ],
    gradient: "from-yellow-500 to-orange-500"
  }
];



export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              ჩვენი <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">სერვისები</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              სრული სპექტრის ციფრული გადაწყვეტილებები თქვენი ბიზნესის ზრდისთვის
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Background Glow Effect */}
                  <div className={`absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-20`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary via-purple-600 to-pink-600 p-12 text-center text-white"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              არ იცით რომელი სერვისი გჭირდებათ?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              დაგვიკავშირდით უფასო კონსულტაციისთვის - ჩვენ დაგეხმარებით სწორი გადაწყვეტის არჩევაში
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-primary shadow-lg transition-all hover:bg-white/90"
            >
              უფასო კონსულტაცია
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
