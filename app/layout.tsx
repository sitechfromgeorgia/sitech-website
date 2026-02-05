import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SiTech - ციფრული სააგენტო | თანამედროვე ვებ გადაწყვეტილებები",
  description: "პროფესიონალური ვებ განვითარება, AI ინტეგრაცია, PWA აპლიკაციები და SEO სერვისები საქართველოში",
  keywords: ["ვებ განვითარება", "AI ინტეგრაცია", "PWA", "SEO", "ციფრული მარკეტინგი", "საქართველო"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
