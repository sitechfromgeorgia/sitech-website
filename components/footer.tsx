import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              SiTech
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ციფრული სააგენტო თბილისიდან. ვქმნით თანამედროვე ვებ გადაწყვეტილებებს.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">სწრაფი ლინკები</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  სერვისები
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  პორტფოლიო
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  ფასები
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  ჩვენ შესახებ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">სერვისები</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>ვებ განვითარება</li>
              <li>AI ინტეგრაცია</li>
              <li>PWA აპლიკაციები</li>
              <li>SEO & მარკეტინგი</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">კონტაქტი</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@sitech.ge" className="hover:text-primary transition-colors">
                  info@sitech.ge
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+995123456789" className="hover:text-primary transition-colors">
                  +995 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>თბილისი, საქართველო</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} SiTech. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
}
