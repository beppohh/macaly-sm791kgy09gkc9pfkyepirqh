import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Brehm Consulting Logo" 
                width={40} 
                height={40}
              />
              <span className="font-bold text-lg">Brehm Consulting</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Hospitality - StartUps - Marketing - Sales
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base">Kontakt</h3>
            <address className="not-italic text-sm text-primary-foreground/80 space-y-1">
              <p>Emil-Andresen-Straße 90g</p>
              <p>22529 Hamburg</p>
              <p className="pt-2">
                <a href="tel:+4940209719000" className="hover:text-secondary transition-colors">
                  +49 (40) 20 97 1900
                </a>
              </p>
              <p>
                <a href="mailto:service@brehm-consulting.com" className="hover:text-secondary transition-colors">
                  service@brehm-consulting.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base">Team</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/team" className="hover:text-secondary transition-colors">
                  Unser Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/impressum" className="hover:text-secondary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-secondary transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Brehm Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
