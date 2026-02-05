"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Brain, Smartphone, TrendingUp, Zap, Globe, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "ვებ განვითარება",
    description: "თანამედროვე, სწრაფი და რესპონსიული ვებსაიტები Next.js-ით",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI ინტეგრაცია",
    description: "ჭკვიანი ჩატბოტები და AI გადაწყვეტილებები თქვენი ბიზნესისთვის",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "PWA აპლიკაციები",
    description: "Progressive Web Apps - მობილური აპის ფუნქციონალი ვებ ტექნოლოგიებით",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "SEO & მარკეტინგი",
    description: "საძიებო ოპტიმიზაცია და ციფრული მარკეტინგი შედეგებისთვის",
    gradient: "from-orange-500 to-red-500",
  },
];

const stats = [
  { icon: Users, value: "50+", label: "კმაყოფილი კლიენტი" },
  { icon: Globe, value: "100+", label: "პროექტი" },
  { icon: Zap, value: "99%", label: "წარმატების მაჩვენებელი" },
  { icon: Code, value: "24/7", label: "მხარდაჭერა" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background" />
        
        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              ✨ ციფრული ტრანსფორმაცია თქვენი ბიზნესისთვის
            </motion.div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SiTech
              </span>
              <br />
              <span className="text-gray-950 dark:text-gray-50">ციფრული სააგენტო</span>
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              ვქმნით თანამედროვე, სწრაფ და ეფექტურ ციფრულ გადაწყვეტილებებს.
              <br />
              Next.js, AI და PWA ტექნოლოგიებით.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
                >
                  დაგვიკავშირდით
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-8 py-3 text-sm font-medium transition-all hover:bg-gray-100 dark:bg-gray-900"
                >
                  პორტფოლიო
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">ჩვენი სერვისები</h2>
            <p className="text-gray-600 dark:text-gray-400">
              სრული სპექტრის ციფრული გადაწყვეტილებები თქვენი ბიზნესისთვის
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  
                  <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-2xl transition-opacity group-hover:opacity-10`} />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                ყველა სერვისი
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center text-white"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              მზად ხართ დაიწყოთ თქვენი პროექტი?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              დაგვიკავშირდით დღესვე და მიიღეთ უფასო კონსულტაცია
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-primary shadow-lg transition-all hover:bg-white/90"
              >
                დაიწყეთ ახლავე
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
