import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, Briefcase, BookOpen, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-gradient-to-br from-brand-navy via-primary to-brand-navy">
          {/* Nautical Wave Graphics */}
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute top-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#00BCD4" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#A8DADC" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <div className="inline-block">
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    30+ Jahre Expertise
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Kurs halten und erfolgreich navigieren
                </h1>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Strategisches Wachstum für Sales & Marketing im Außer-Haus-Markt. 
                  Wir begleiten <strong>StartUps und Mittelstandsunternehmen</strong> in Deutschland und der Schweiz zum nachhaltigen Erfolg.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    <Link href="#contact">
                      Beratung anfragen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                    <Link href="#services">
                      Leistungen entdecken
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Professionelles Beratungsteam bei der Arbeit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Effektive Marketing- und Salesstrategien für nachhaltiges Unternehmenswachstum
              </h2>
              <p className="text-lg text-muted-foreground">
                Brehm Consulting ist Ihr spezialisierter Partner für den <strong>Außer-Haus-Markt</strong> (Out-of-Home, To-Go, Food Service, Tech). 
                Wir entwickeln maßgeschneiderte <strong>Vertriebsstrategien</strong> und einen zielgerichteten <strong>Marketing-Mix</strong>, um Ihr Wachstum zu beschleunigen.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Unsere Kernkompetenzen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                30 Jahre Erfahrung in vier Schlüsselbereichen für Ihren Geschäftserfolg
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Hospitality */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy to-secondary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-primary">Hospitality</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Unser Focus liegt auf Software und IT-Lösungen in der Hospitality Branche
                  </p>
                </CardContent>
              </Card>

              {/* StartUps */}
              <Link href="/wissen/warum-startups-externe-sales-strukturierung-brauchen" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-brand-cyan flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-primary">StartUps</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Wir helfen gerade StartUps den richtigen Kurs einzuschlagen
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Marketing */}
              <Link href="/marketing" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-light-blue to-secondary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-primary">Marketing</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Ein gutes Produkt braucht ein perfektes Marketing & hochwertige Leads
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Sales */}
              <Link href="/sales" className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted-foreground to-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-primary">Sales</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      Mit gutem Lead Management eine perfekte Closing Quote erzielen
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Erfahrenes Beratungsteam im Meeting"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                  So skalieren StartUps und Mittelstandsunternehmen im Außer-Haus-Markt
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">Sales & Vertriebsstrategie</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Entwicklung effektiver Vertriebsstrategien im Außer-Haus-Markt</li>
                        <li>• Optimierung Ihrer SMB & Key-Account-Struktur</li>
                        <li>• Erschließung neuer Kanäle (Food Service Distributoren, Systemgastronomie, Hotellerie)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">Marketing & Markenpositionierung</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Aufbau starker Marken im OOH-Segment</li>
                        <li>• Entwicklung optimaler Marketing-Mix</li>
                        <li>• Digitale Strategien zur Lead-Generierung im B2B-Umfeld</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">Organisations- & Wachstumshilfe</h3>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Begleitung von StartUps in der Skalierungsphase</li>
                        <li>• Unterstützung von Mittelstandsunternehmen bei der Expansion</li>
                        <li>• Optimierung von Strukturen, Prozessen & Finanzierung</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/20 border-l-4 border-accent p-4 rounded">
                  <p className="text-primary font-medium italic">
                    "Ohne detailliertes Wissen über Deinen Marketing Lead ist Vertrieb oftmals wertlos."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Stefan Brehm</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button asChild variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                    <Link href="/marketing">
                      Marketing-Beratung
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                    <Link href="/sales">
                      Sales-Beratung
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wissen Section - Internal Links */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <BookOpen className="h-4 w-4" />
                  Sales & Marketing Wissen
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Fundiertes Know-how für Ihren Erfolg
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Entdecken Sie unsere Fachartikel zu den wichtigsten Themen rund um Vertrieb, Marketing und Unternehmenswachstum.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/wissen/aufgabe-von-brehm-consulting" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-5">
                      <span className="text-2xl mb-2 block">🤝</span>
                      <h3 className="font-bold text-primary text-sm mb-1 group-hover:text-secondary transition-colors">
                        Unsere Aufgabe
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Die Brücke zwischen Marketing und Vertriebserfolg
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen/sales-marketing-alignment" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-5">
                      <span className="text-2xl mb-2 block">🤝</span>
                      <h3 className="font-bold text-primary text-sm mb-1 group-hover:text-secondary transition-colors">
                        Sales-Marketing-Alignment
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Wie beide Abteilungen effektiv zusammenarbeiten
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen/groesster-hebel-umsatzwachstum" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-5">
                      <span className="text-2xl mb-2 block">📈</span>
                      <h3 className="font-bold text-primary text-sm mb-1 group-hover:text-secondary transition-colors">
                        Umsatzwachstum
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Der größte Hebel für nachhaltiges Wachstum
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary bg-muted/50">
                    <CardContent className="p-5 flex flex-col items-center justify-center text-center h-full">
                      <ArrowRight className="h-6 w-6 text-secondary mb-2 group-hover:translate-x-1 transition-transform" />
                      <h3 className="font-bold text-primary text-sm mb-1">
                        Alle 20+ Artikel
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Zum Wissensbereich
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* External Resources Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                  Branchenverbände & Ressourcen
                </h2>
                <p className="text-sm text-muted-foreground">
                  Relevante Organisationen für den Außer-Haus-Markt
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a 
                  href="https://www.dehoga-bundesverband.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-md transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 font-bold text-xs">DH</span>
                      </div>
                      <h3 className="font-semibold text-primary text-sm group-hover:text-secondary transition-colors flex items-center justify-center gap-1">
                        DEHOGA
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Hotellerie & Gastronomie
                      </p>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://www.bvdw.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-md transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold text-xs">BVDW</span>
                      </div>
                      <h3 className="font-semibold text-primary text-sm group-hover:text-secondary transition-colors flex items-center justify-center gap-1">
                        BVDW
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Digitale Wirtschaft
                      </p>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://www.hubspot.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-md transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-600 font-bold text-sm">HS</span>
                      </div>
                      <h3 className="font-semibold text-primary text-sm group-hover:text-secondary transition-colors flex items-center justify-center gap-1">
                        HubSpot
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        CRM & Marketing
                      </p>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://www.salesforce.com/de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-md transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold text-sm">SF</span>
                      </div>
                      <h3 className="font-semibold text-primary text-sm group-hover:text-secondary transition-colors flex items-center justify-center gap-1">
                        Salesforce
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        CRM & Sales
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary to-brand-navy text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Bereit für strategisches Wachstum?
              </h2>
              <p className="text-lg text-white/90">
                Lassen Sie uns gemeinsam Ihre Vertriebsstrategie optimieren und Ihr Unternehmen im Außer-Haus-Markt erfolgreich positionieren.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <h3 className="font-semibold">Telefon</h3>
                  <a href="tel:+4940209719000" className="text-secondary hover:text-secondary/80 transition-colors text-lg font-medium">
                    +49 (40) 20 97 1900
                  </a>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">E-Mail</h3>
                  <a href="mailto:service@brehm-consulting.com" className="text-secondary hover:text-secondary/80 transition-colors text-lg font-medium">
                    service@brehm-consulting.com
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <a href="mailto:service@brehm-consulting.com">
                    Jetzt Beratungsgespräch vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="pt-8 text-sm text-white/70">
                <p>Emil-Andresen-Straße 90g, 22529 Hamburg</p>
                <p className="mt-2">Spezialisiert auf Deutschland & Schweiz</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
