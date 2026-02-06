import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SiTech Georgia | AI-გაძლიერებული ვებ დეველოპმენტი",
  description: "ქართული სული, AI-გაძლიერებული მომავალი. თანამედროვე ვებ დეველოპმენტი ქართული ბიზნესებისთვის. საიტის დამზადება, ონლაინ მაღაზია, Telegram ბოტები.",
  keywords: ["საიტის დამზადება", "ვებ დეველოპმენტი", "ონლაინ მაღაზიის შექმნა", "telegram ბოტი", "AI ინტეგრაცია", "ბათუმი", "web development georgia"],
  openGraph: {
    title: "SiTech Georgia | AI-გაძლიერებული ვებ დეველოპმენტი",
    description: "ქართული სული, AI-გაძლიერებული მომავალი",
    locale: "ka_GE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navigation />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
