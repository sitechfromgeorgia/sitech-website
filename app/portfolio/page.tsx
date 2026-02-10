"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "WIG - Modern Landing",
    description: "თანამედროვე Landing Page Framer Motion ანიმაციებით და Bento Grid დიზაინით",
    image: "/portfolio/wig.png",
    liveUrl: "https://wig-landing.vercel.app",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Bento Grid"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "MOS - Demo Platform",
    description: "მობილურზე ორიენტირებული დემო პლატფორმა PWA ფუნქციონალით",
    image: "/portfolio/mos.png",
    liveUrl: "https://mosi-demo-pearl.vercel.app",
    tags: ["PWA", "Next.js", "React", "Mobile-First"],
    gradient: "from-purple-500 to-pink-500"
  }
];

const capabilities = [
  {
    title: "Responsive Design",
    description: "ყველა მოწყობილობაზე სრულყოფილი გამოცდილება"
  },
  {
    title: "Performance",
    description: "სწრაფი ჩატვირთვა და ოპტიმიზირებული კოდი"
  },
  {
    title: "Modern Stack",
    description: "უახლესი ტექნოლოგიები და best practices"
  },
  {
    title: "SEO Ready",
    description: "საძიებო სისტემებისთვის ოპტიმიზირებული"
  }
];



export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              ჩვენი <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">პორტფოლიო</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              წარმატებული პროექტები, რომლებიც ჩვენ შევქმენით
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="space-y-12"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Project Info */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="mb-3 text-3xl font-bold">{project.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${project.gradient} px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Project Preview */}
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink className="h-16 w-16 text-gray-600 dark:text-gray-400/20" />
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className={`absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-20`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">რით გამოვირჩევით</h2>
            <p className="text-gray-600 dark:text-gray-400">
              თანამედროვე ტექნოლოგიები და სრულყოფილი აღსრულება
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 text-center transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="mb-2 text-lg font-semibold">{capability.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{capability.description}</p>
              </div>
            ))}
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
              გსურთ მსგავსი პროექტი?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              მოდით ერთად შევქმნათ რაღაც განსაკუთრებული
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-primary shadow-lg transition-all hover:bg-white/90"
            >
              დაიწყეთ პროექტი
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
