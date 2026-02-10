"use client";

import { Target, Heart, Zap, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "მიზანზე ორიენტირება",
    description: "კლიენტის წარმატება არის ჩვენი წარმატება. ყოველი პროექტი არის ინდივიდუალური მიდგომა."
  },
  {
    icon: Heart,
    title: "ხარისხი",
    description: "ვიყენებთ მხოლოდ სანდო ტექნოლოგიებს და თანამედროვე best practices-ს."
  },
  {
    icon: Zap,
    title: "სიჩქარე",
    description: "ოპტიმიზირებული პროცესები სწრაფი და ეფექტური შედეგებისთვის."
  },
  {
    icon: Users,
    title: "თანამშრომლობა",
    description: "ღია კომუნიკაცია და მჭიდრო თანამშრომლობა კლიენტებთან."
  }
];

const stats = [
  { icon: Award, value: "3+", label: "წელი გამოცდილება" },
  { icon: Users, value: "50+", label: "კმაყოფილი კლიენტი" },
  { icon: TrendingUp, value: "100+", label: "დასრულებული პროექტი" },
  { icon: Zap, value: "99%", label: "წარმატების მაჩვენებელი" }
];

const technologies = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "React 19", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Dokploy", category: "Deployment" },
  { name: "AI/ML", category: "Intelligence" }
];



export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              ჩვენ <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">შესახებ</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              ციფრული სააგენტო, რომელიც ქმნის მომავალს
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div
              className="space-y-6 text-lg text-gray-600 dark:text-gray-400"
            >
              <p>
                <span className="text-2xl font-bold text-gray-950 dark:text-gray-50">SiTech</span> - თანამედროვე ციფრული სააგენტო,
                რომელიც სპეციალიზირებულია ვებ განვითარებაში, AI ინტეგრაციასა და PWA აპლიკაციებში.
              </p>
              <p>
                ჩვენ გვჯერა, რომ თითოეული ბიზნესი იმსახურებს პროფესიონალურ ციფრულ სივრცეს.
                სწორედ ამიტომ, ჩვენი მისიაა შევქმნათ თანამედროვე, სწრაფი და ეფექტური ვებ გადაწყვეტილებები,
                რომლებიც რეალურად ზრდის ბიზნესს.
              </p>
              <p>
                ჩვენ ვიყენებთ უახლეს ტექნოლოგიებს და best practices-ს, რათა უზრუნველვყოთ
                მაღალი ხარისხი, სიჩქარე და მასშტაბირებადობა.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">ჩვენი ღირებულებები</h2>
            <p className="text-gray-600 dark:text-gray-400">
              პრინციპები, რომლებიც ხელმძღვანელობს ჩვენს მუშაობას
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">ტექნოლოგიები</h2>
            <p className="text-gray-600 dark:text-gray-400">
              თანამედროვე ინსტრუმენტები უმაღლესი ხარისხისთვის
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div
              className="flex flex-wrap justify-center gap-4"
            >
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-3 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="text-sm font-medium">{tech.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{tech.category}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary via-purple-600 to-pink-600 p-12 text-center text-white"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              მოდით ვითანამშრომლოთ
            </h2>
            <p className="mb-8 text-lg text-white/90">
              დავიწყოთ ერთად თქვენი ციფრული ტრანსფორმაციის მოგზაურობა
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-primary shadow-lg transition-all hover:bg-white/90"
            >
              დაგვიკავშირდით
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
