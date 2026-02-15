'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Smartphone,
  Search,
  Database,
  Users,
  CreditCard,
  Bot,
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Sparkles,
  Shield,
  Rocket
} from 'lucide-react';

export default function WebdesignPageContent() {
  const services = [
    {
      icon: Globe,
      title: 'Erstellung von Internetseiten',
      description: 'Professionelle Marketing-Websites, Landing Pages und Unternehmensauftritte. SEO-optimiert und conversion-fokussiert.',
      color: 'from-secondary to-brand-cyan'
    },
    {
      icon: Smartphone,
      title: 'Erstellung von Apps',
      description: 'Web-Applikationen und Progressive Web Apps (PWA) für Desktop und Mobile. Responsive Design für alle Geräte.',
      color: 'from-brand-coral to-accent'
    },
    {
      icon: FileText,
      title: 'Content Management Systeme',
      description: 'Einfache Verwaltung von Inhalten: Blog-Systeme, Wissensportale, FAQ-Bereiche mit Admin-Panel.',
      color: 'from-primary to-brand-navy'
    },
    {
      icon: Users,
      title: 'User-Verwaltung',
      description: 'Sichere Authentifizierung, Benutzerrollen, Admin-Dashboards und geschützte Bereiche.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: CreditCard,
      title: 'Abrechnungssysteme',
      description: 'Integration von Payment-Lösungen, Buchungssysteme, Reservierungen und automatisierte Rechnungsstellung.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'KI-gesteuertes SEO & GEO Management',
      description: 'Suchmaschinenoptimierung mit KI-Unterstützung. Lokale Auffindbarkeit und geo-basierte Inhalte.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Bot,
      title: 'KI Agent Implementierung',
      description: 'Integration von KI-Chatbots, automatisierte Kundenbetreuung und intelligente Assistenten.',
      color: 'from-indigo-500 to-violet-600'
    }
  ];

  const referenceProjects = [
    {
      title: 'KI-Tools Deutschland',
      description: 'Verzeichnis-Portal mit Filterfunktionen, Kategorien und Suchfunktion für KI-Tools im DACH-Raum.',
      features: ['Datenbank-gestützt', 'Filter & Suche', 'Dark Mode', 'User-Reviews'],
      image: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/hb952azyypb3oi7vtk3osti2/sm791kgy09gkc9pfkyepirqh/Ejdgc_QKRMj35LhAFJcPY.png'
    },
    {
      title: 'Hygge Ferienhäuser',
      description: 'Buchungsportal für Ferienwohnungen mit Kalender-Integration, Standort-Auswahl und Online-Buchung.',
      features: ['Buchungssystem', 'Kalender-Integration', 'Standort-Filter', 'Responsive Design'],
      image: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/hb952azyypb3oi7vtk3osti2/sm791kgy09gkc9pfkyepirqh/4kWVPj85J2L1LH595s23U.png'
    },
    {
      title: 'Online Guest Management',
      description: 'SaaS-Plattform für Reservierungsverwaltung mit automatischen Bestätigungen und Gästedaten-Management.',
      features: ['Reservierungssystem', 'Auto-Bestätigungen', 'Gäste-Dashboard', 'Mobile optimiert'],
      image: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/hb952azyypb3oi7vtk3osti2/sm791kgy09gkc9pfkyepirqh/u0E5KCkCJJhUyGFQ4zCqK.png'
    },
    {
      title: 'OstseeResort Olpenitz',
      description: 'Regionales Portal mit Unterkunfts-Verzeichnis, Gastronomie, Events und interaktiver Karte.',
      features: ['Regionales Portal', 'Admin-Bereich', 'KI-Concierge', 'Event-Kalender'],
      image: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/hb952azyypb3oi7vtk3osti2/sm791kgy09gkc9pfkyepirqh/KEPck5w8SL0CeHmD4BPTb.png'
    }
  ];

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-brand-navy via-primary to-brand-navy overflow-hidden">
          {/* Nautical Wave Graphics */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute top-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#00BCD4" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <div className="inline-block">
                <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  Web-Konzepte & Entwicklung
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Digitale Lösungen für Ihr Business
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Von der einfachen Website bis zur komplexen Web-Applikation – wir entwickeln 
                maßgeschneiderte digitale Lösungen mit modernster Technologie und KI-Unterstützung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="#contact">
                    Kostenlose Erstberatung
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  <Link href="#services">
                    Unsere Leistungen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">
                Warum Web-Konzepte von Brehm Consulting?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <Rocket className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Schnelle Umsetzung</h3>
                    <p className="text-sm text-muted-foreground">
                      KI-gestützte Entwicklung für kürzere Projektzeiten und schnellere Ergebnisse
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <Sparkles className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Modernste Technologie</h3>
                    <p className="text-sm text-muted-foreground">
                      Next.js, Echtzeit-Datenbanken und KI-Integration für zukunftssichere Lösungen
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Alles aus einer Hand</h3>
                    <p className="text-sm text-muted-foreground">
                      Konzeption, Design, Entwicklung und SEO – ein Ansprechpartner für alles
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vom Konzept bis zur fertigen Lösung – wir bieten das komplette Spektrum digitaler Dienstleistungen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reference Projects */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Referenzprojekte
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Beispiele unserer Arbeit – von Portalen über Buchungssysteme bis zu KI-gestützten Plattformen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {referenceProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary">
                  <div className="relative h-[280px] sm:h-[320px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="inline-flex items-center gap-1 text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Moderne Technologie für beste Ergebnisse
              </h2>
              <p className="text-lg text-muted-foreground">
                Wir setzen auf bewährte, zukunftssichere Technologien für maximale Performance und Sicherheit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Next.js Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      React-basiert mit Server-Side-Rendering für blitzschnelle Ladezeiten und perfekte SEO
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Database className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Convex Datenbank</h3>
                    <p className="text-sm text-muted-foreground">
                      Echtzeit-Datenbank mit automatischer Synchronisation und hoher Sicherheit
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sichere Authentifizierung</h3>
                    <p className="text-sm text-muted-foreground">
                      OTP-basiertes Login und Benutzerrollen für Admin-Bereiche
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Skalierbar & Wartungsarm</h3>
                    <p className="text-sm text-muted-foreground">
                      Cloud-Hosting mit automatischer Skalierung und minimaler Wartung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary to-brand-navy text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Bereit für Ihr digitales Projekt?
              </h2>
              <p className="text-lg text-white/90">
                Lassen Sie uns gemeinsam Ihr Web-Projekt besprechen. Wir beraten Sie kostenlos 
                und unverbindlich zu den Möglichkeiten für Ihr Unternehmen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-1">Telefon</p>
                  <a href="tel:+494020972001" className="text-xl font-semibold hover:text-secondary transition-colors">
                    +49 (40) 20972001
                  </a>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/30" />
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-1">E-Mail</p>
                  <a href="mailto:service@brehm-consulting.com" className="text-xl font-semibold hover:text-secondary transition-colors">
                    service@brehm-consulting.com
                  </a>
                </div>
              </div>

              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white mt-6">
                <Link href="/#contact">
                  Kontaktformular öffnen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  );
}
