import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Brehm Consulting Logo" 
              width={50} 
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="font-bold text-lg sm:text-xl text-primary hidden sm:inline">
              Brehm Consulting
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/marketing" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Marketing
            </Link>
            <Link href="/sales" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Sales
            </Link>
            <Link href="/wissen" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Sales & Marketing Wissen
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Blog
            </Link>
            <Link href="/#services" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Leistungen
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Kontakt
            </Link>
          </nav>

          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link href="/#contact">
              Beratung anfragen
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
