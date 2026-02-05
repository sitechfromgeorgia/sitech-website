"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">კონტაქტი</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              მზად ვართ დაგეხმაროთ თქვენი პროექტის განხორციელებაში
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-3xl font-bold">დაგვიკავშირდით</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  მოგვწერეთ ან დაგვირეკეთ - ჩვენ მზად ვართ პასუხი გავცეთ თქვენს ყველა კითხვას
                  და დაგეხმაროთ პროექტის დაწყებაში.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ელ. ფოსტა</h3>
                    <a href="mailto:info@sitech.ge" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      info@sitech.ge
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ტელეფონი</h3>
                    <a href="tel:+995123456789" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      +995 123 456 789
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">მისამართი</h3>
                    <p className="text-gray-600 dark:text-gray-400">თბილისი, საქართველო</p>
                  </div>
                </motion.div>
              </div>

              {/* Messaging Buttons */}
              <div className="space-y-4 pt-4">
                <h3 className="font-semibold mb-4">ან მოგვწერეთ:</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/995123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 rounded-lg bg-[#25D366] px-6 py-3 text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </motion.a>

                  <motion.a
                    href="https://t.me/sitech_ge"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 rounded-lg bg-[#0088cc] px-6 py-3 text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>Telegram</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-lg"
            >
              <h3 className="mb-6 text-2xl font-bold">გამოგვიგზავნეთ შეტყობინება</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    სახელი *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="თქვენი სახელი"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    ელ. ფოსტა *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    ტელეფონი
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+995 123 456 789"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium">
                    სერვისი
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">აირჩიეთ სერვისი</option>
                    <option value="web">ვებ განვითარება</option>
                    <option value="ai">AI ინტეგრაცია</option>
                    <option value="pwa">PWA აპლიკაცია</option>
                    <option value="seo">SEO & მარკეტინგი</option>
                    <option value="other">სხვა</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    შეტყობინება *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="მოგვიყევით თქვენი პროექტის შესახებ..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
                  disabled={submitted}
                >
                  {submitted ? "✓ გაგზავნილია" : "გაგზავნა"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 mx-auto text-gray-600 dark:text-gray-400/30" />
                <p className="text-gray-600 dark:text-gray-400">რუკა ჩაიტვირთება აქ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
