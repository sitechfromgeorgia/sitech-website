import type { Metadata } from "next";
import { Inter, Noto_Sans_Georgian, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/lib/language-context";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PWARegister } from "@/components/pwa-register";
import ChatWidget from "@/components/chat-widget";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoGeo = Noto_Sans_Georgian({
  variable: "--font-georgian",
  subsets: ["georgian"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucy | SiTech Georgia — AI სააგენტო",
  description: "ლუსი — საქართველოს პირველი AI სააგენტოს სახე. ვებ დეველოპმენტი, ავტომატიზაცია, ციფრული გადაწყვეტილებები ბათუმიდან.",
  keywords: ["ვებ განვითარება", "AI ინტეგრაცია", "PWA", "SEO", "ციფრული მარკეტინგი", "საქართველო", "ბათუმი"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Lucy",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#8b5cf6",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Lucy" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-startup-image" href="/icon-512.png" />
      </head>
      <body
        className={`${inter.variable} ${notoGeo.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <PWARegister />
              <ChatWidget />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
