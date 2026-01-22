"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/marketing', label: 'Marketing' },
    { href: '/sales', label: 'Sales' },
    { href: '/wissen', label: 'Sales & Marketing Wissen' },
    { href: '/blog', label: 'Blog' },
    { href: '/#services', label: 'Leistungen' },
    { href: '/#contact', label: 'Kontakt' },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Button asChild className="bg-secondary hover:bg-secondary/90 hidden sm:inline-flex">
              <Link href="/#contact">
                Beratung anfragen
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-base font-medium text-foreground hover:text-secondary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-secondary hover:bg-secondary/90 mt-4 w-full">
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                  Beratung anfragen
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
