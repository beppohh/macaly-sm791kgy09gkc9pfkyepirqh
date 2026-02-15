"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);

  const leistungenLinks = [
    { href: '/sales', label: 'Sales' },
    { href: '/marketing', label: 'Marketing' },
    { href: '/webdesign', label: 'Web-Konzepte' },
  ];

  const navLinks = [
    { href: '/wissen', label: 'Sales & Marketing Wissen' },
    { href: '/blog', label: 'Blog' },
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
            {/* Leistungen Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                Leistungen
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                  {leistungenLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="block px-4 py-2 text-sm font-medium text-foreground hover:text-secondary hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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

            <Button asChild className="bg-destructive hover:bg-destructive/90 hidden sm:inline-flex">
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
              {/* Mobile Leistungen Accordion */}
              <div>
                <button
                  onClick={() => setLeistungenOpen(!leistungenOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-foreground hover:text-secondary transition-colors py-2"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${leistungenOpen ? 'rotate-180' : ''}`} />
                </button>
                {leistungenOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {leistungenLinks.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        className="block text-base font-medium text-muted-foreground hover:text-secondary transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
              <Button asChild className="bg-destructive hover:bg-destructive/90 mt-4 w-full">
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
