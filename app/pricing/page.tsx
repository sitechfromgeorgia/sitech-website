"use client";

import { Check, Sparkles, Zap, Rocket, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "300-800₾",
    description: "იდეალური მცირე ბიზნესებისთვის",
    features: [
      "1-5 გვერდიანი ვებსაიტი",
      "რესპონსიული დიზაინი",
      "ძირითადი SEO ოპტიმიზაცია",
      "კონტაქტის ფორმა",
      "Google Maps ინტეგრაცია",
      "1 თვიანი უფასო მხარდაჭერა"
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    name: "Business",
    icon: Zap,
    price: "1500-3000₾",
    description: "საშუალო ბიზნესებისთვის",
    features: [
      "5-15 გვერდიანი ვებსაიტი",
      "უნიკალური დიზაინი",
      "სრული SEO ოპტიმიზაცია",
      "CMS სისტემა (კონტენტის მართვა)",
      "ბლოგი ფუნქციონალი",
      "სოც. ქსელების ინტეგრაცია",
      "Google Analytics",
      "3 თვიანი უფასო მხარდაჭერა"
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Growth",
    icon: Rocket,
    price: "3000-8000₾",
    description: "მზარდი ბიზნესებისთვის",
    features: [
      "15-30 გვერდიანი ვებსაიტი",
      "PWA ფუნქციონალი",
      "AI ჩატბოტი (Lucy)",
      "მოწინავე SEO",
      "E-commerce ფუნქციები",
      "მომხმარებლის პროფილები",
      "Dashboard პანელი",
      "API ინტეგრაციები",
      "6 თვიანი უფასო მხარდაჭერა"
    ],
    gradient: "from-green-500 to-emerald-500",
    popular: false
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "5000+₾",
    description: "დიდი კომპანიებისთვის",
    features: [
      "უსასრულო გვერდები",
      "სრული AI ინტეგრაცია",
      "მრავალენოვანი მხარდაჭერა",
      "მოწინავე ანალიტიკა",
      "Custom Backend",
      "Microservices არქიტექტურა",
      "დედიკირებული სერვერი",
      "24/7 მხარდაჭერა",
      "1 წლიანი უფასო მოვლა",
      "პრიორიტეტული სერვისი"
    ],
    gradient: "from-orange-500 to-red-500",
    popular: false
  }
];

const addons = [
  { name: "დამატებითი გვერდი", price: "50-100₾" },
  { name: "ენის დამატება", price: "200-400₾" },
  { name: "E-commerce მოდული", price: "800-1500₾" },
  { name: "AI ჩატბოტი", price: "500-1000₾/თვე" },
  { name: "SEO აუდიტი", price: "300-600₾" },
  { name: "კონტენტის შექმნა", price: "100-300₾/გვერდი" }
];



export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              გამჭვირვალე <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">ფასები</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              აირჩიეთ თქვენი ბიზნესისთვის შესაფერისი პაკეტი
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl border ${
                    plan.popular
                      ? "border-primary shadow-xl shadow-primary/20"
                      : "border-gray-200 dark:border-gray-800"
                  } bg-white dark:bg-gray-950 p-8 transition-all`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                      პოპულარული
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${plan.gradient} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className={`mt-0.5 h-5 w-5 flex-shrink-0 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <button
                      className={`w-full rounded-lg ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg`
                          : "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-100 dark:bg-gray-900"
                      } px-6 py-3 text-sm font-medium transition-all`}
                    >
                      დაიწყეთ ახლავე
                    </button>
                  </Link>

                  {/* Background Glow */}
                  {plan.popular && (
                    <div className={`absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-gradient-to-br ${plan.gradient} opacity-10 blur-3xl`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">დამატებითი სერვისები</h2>
            <p className="text-gray-600 dark:text-gray-400">
              გააფართოვეთ თქვენი პაკეტი დამატებითი ფუნქციებით
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary via-purple-600 to-pink-600 p-12 text-center text-white"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              კითხვები გაქვთ?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              დაგვიკავშირდით უფასო კონსულტაციისთვის და დეტალური ინფორმაციისთვის
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-primary shadow-lg transition-all hover:bg-white/90"
              >
                დაგვიკავშირდით
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
