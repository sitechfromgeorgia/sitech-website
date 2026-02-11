"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              SiTech
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>{t('footer.webDev')}</li>
              <li>{t('footer.aiIntegration')}</li>
              <li>{t('footer.pwa')}</li>
              <li>{t('footer.seo')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hello@sitech.ge" className="hover:text-primary transition-colors">
                  hello@sitech.ge
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+995593003040" className="hover:text-primary transition-colors">
                  +995 593 003 040
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>ბათუმი, საქართველო</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} SiTech. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
