import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SiTech Georgia | AI-Enhanced Web Development",
  description: "Modern web development agency in Georgia. We build stunning websites, e-commerce platforms, and AI-powered solutions for businesses.",
  keywords: ["საიტის დამზადება", "ვებ დეველოპმენტი", "web development georgia", "AI web agency"],
  openGraph: {
    title: "SiTech Georgia | AI-Enhanced Web Development",
    description: "Georgian Soul, AI-Augmented Future. Modern websites & digital solutions.",
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
        {children}
      </body>
    </html>
  );
}
