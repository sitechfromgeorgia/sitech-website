"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div 
        className="absolute top-32 right-[20%] text-[var(--color-primary)]"
        animate={floatingAnimation}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-[15%] text-[var(--color-accent)]"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
      >
        <Zap size={28} />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-[10%] text-[var(--color-secondary)]"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
      >
        <Globe size={36} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium border border-[var(--color-primary)]/20">
              <Sparkles size={16} />
              AI-Enhanced Development
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="block text-[var(--color-foreground)]">
              გაზარდე ბიზნესი
            </span>
            <span className="block text-gradient mt-2">
              ონლაინ
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed"
          >
            თანამედროვე ვებსაიტები და ციფრული გადაწყვეტილებები 
            <span className="text-[var(--color-primary)]"> AI ტექნოლოგიების </span>
            გამოყენებით
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 106, 111, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              დაიწყე პროექტი
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--color-foreground)] rounded-full font-semibold text-lg border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              ნახე პორტფოლიო
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={fadeInUp}
            className="pt-12 flex flex-wrap justify-center items-center gap-8 text-[var(--color-muted)]"
          >
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
            <div className="text-sm">
              🇬🇪 Made in Georgia
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--color-muted)] flex justify-center pt-2"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
