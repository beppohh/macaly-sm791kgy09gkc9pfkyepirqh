'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Target,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Database,
  LineChart,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export default function SalesPageContent() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <div className="inline-block">
                  <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    Sales Expertise für StartUps
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Steigere deine Verkaufszahlen mit maßgeschneiderten Vertriebsstrategien
                </h1>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Strategische Vertriebsberatung für StartUps im Außer-Haus-Markt. Von der Situationsanalyse über Implementierung bis zur Erfolgskontrolle – wir begleiten Sie auf dem Weg zu nachhaltigen Verkaufserfolgen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/8062287/pexels-photo-8062287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Sales Team analysiert Vertriebsdaten und Performance-Metriken"
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">
                Warum Vertriebsberatung für Ihr StartUp?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <LineChart className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Messbare Erfolge</h3>
                    <p className="text-sm text-muted-foreground">
                      Steigern Sie Ihre Verkaufszahlen und Conversion Rates durch datengetriebene Strategien
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Teamdynamik</h3>
                    <p className="text-sm text-muted-foreground">
                      Motivieren und optimieren Sie Ihr Vertriebsteam für konstante Leistung
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Nachhaltiges Wachstum</h3>
                    <p className="text-sm text-muted-foreground">
                      Langfristige Vertriebsstrategien, die Ihr StartUp mit Ihnen wachsen lässt
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
                Unsere Sales-Leistungen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Mit vielen Jahren Erfahrung in der Vertriebsleitung unterstützen wir Sie dabei, Ihr Produkt erfolgreich am Markt zu etablieren und nachhaltige Verkaufserfolge zu erreichen.
              </p>
            </div>

            {/* Service 1: Situationsanalyse */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                  <Image
                    src="https://images.pexels.com/photos/7876660/pexels-photo-7876660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Team analysiert Sales-Performance und Marktdaten"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Situationsanalyse: Wo steht dein Unternehmen?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Jede erfolgreiche Strategie beginnt mit einer fundierten Analyse. Gemeinsam analysieren wir den Status quo deines Vertriebs – welche Märkte, Zielgruppen und Vertriebsprozesse du derzeit hast.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Umfassende Analyse Ihrer aktuellen Vertriebsaktivitäten und Prozesse
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Identifikation von Schwachstellen und Optimierungspotenzialen
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Klare Bewertung Ihrer Marktposition und Wettbewerbsfähigkeit
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Fundament für eine erfolgreiche Vertriebsstrategie
                      </p>
                    </div>
                  </div>

                  <Button asChild className="bg-secondary hover:bg-secondary/90 mt-6">
                    <Link href="#contact">
                      Kostenlose Analyse anfragen
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 2: Zieldefinition & Strategie */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Zieldefinition & Strategieentwicklung
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Klare, messbare Ziele sind der Schlüssel zum Vertriebserfolg. Wir helfen dir dabei, präzise Zielsetzungen zu entwickeln und praxisnahe Vertriebsstrategien zu gestalten.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Definition von Verkaufszielen und KPIs, die Ihr Wachstum vorantreiben
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Optimierung der Conversion Rate aus SQL (Sales Qualified Leads) bis zum Abschluss
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Entwicklung von Vertriebsplänen mit realistischen Budgets und Meilensteinen
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        <strong>KI-gesteuerte Optimierungen:</strong> Einsatz von AI-Tools zur Prognose und Ressourcenallokation
                      </p>
                    </div>
                  </div>

                  <Button asChild className="bg-secondary hover:bg-secondary/90 mt-6">
                    <Link href="#contact">
                      Strategie-Beratung anfragen
                    </Link>
                  </Button>
                </div>

                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/6592684/pexels-photo-6592684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Team präsentiert Sales-Strategie und Vertriebsziele"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3: Implementierung */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                  <Image
                    src="https://images.pexels.com/photos/8730006/pexels-photo-8730006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Erfolgreicher Sales-Abschluss mit Handschlag und Vertragsunterzeichnung"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Implementierung: Von der Planung zur Umsetzung
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Eine gute Strategie bleibt wirkungslos, wenn sie nicht umgesetzt wird. Wir begleiten dich operativ bei der Implementierung neuer Vertriebsstrategien.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Strukturierte Umsetzungspläne mit klaren Phasen und Verantwortlichkeiten
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Unterstützung Ihres Vertriebsteams bei jedem Schritt der Transformation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Schulung und Motivation für Akzeptanz neuer Verkaufsprozesse
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Change Management mit Fokus auf langfristigen Erfolg
                      </p>
                    </div>
                  </div>

                  <Button asChild className="bg-secondary hover:bg-secondary/90 mt-6">
                    <Link href="#contact">
                      Implementierung starten
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Grid: Teamdynamik, Erfolgskontrolle, Salesforce, AI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Teamdynamik und Motivation */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-brand-cyan flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Teamdynamik und Motivation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Neben Verkaufszahlen beleuchten wir auch die Teamstruktur und Motivation der Mitarbeiter. Wie arbeitet Vertrieb mit Marketing zusammen? Wie werden Ziele erfüllt? Wie entstehen konstante Ergebnisse?
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Optimierung der Team-Performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Marketing & Sales Alignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Mitarbeitermotivation & Zielvereinbarungen</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    <Link href="#contact">
                      Mehr erfahren
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Erfolgskontrolle */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-coral to-accent flex items-center justify-center">
                    <LineChart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Erfolgskontrolle: Überprüfen und Anpassen
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Der Markt verändert sich ständig. Um nachhaltig erfolgreich zu sein, führen wir regelmäßige Erfolgskontrollen durch und passen Ihre Strategie bedarfsgerecht an.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Regelmäßige Performance-Reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>KPI-Tracking und Datenanalyse</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Kontinuierliche Optimierung der Prozesse</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    <Link href="#contact">
                      Mehr erfahren
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Salesforce & CRM Beratung */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-brand-navy flex items-center justify-center">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Salesforce & CRM Beratung
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Mit unserer Salesforce Beratung unterstützen wir Sie, Ihre Geschäftsprozesse optimal zu gestalten und das volle Potenzial Ihrer CRM-Lösung auszuschöpfen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Implementierung & Optimierung von Salesforce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>CRM-Integration in bestehende IT-Landschaft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Schulung und Change Management</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    <Link href="#contact">
                      Mehr erfahren
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* AI Tools & Automation */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      AI-Tools & Sales Automation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Nutzen Sie AI-gesteuerte Tools zur Optimierung Ihrer Verkaufsprozesse, Lead-Scoring und Customer Journey Automation für maximale Effizienz.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>AI-gesteuerte Lead-Priorisierung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Prognose und Pipeline-Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Vertriebsprozess-Automatisierung</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    <Link href="#contact">
                      Mehr erfahren
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Warum Brehm Consulting für Ihren Vertrieb?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">30+ Jahre Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Tiefes Verständnis für Vertrieb, Hospitality und den Außer-Haus-Markt
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">StartUp-Fokus</h3>
                    <p className="text-sm text-muted-foreground">
                      Spezialisiert auf schnelle Skalierbarkeit und Wachstum von StartUps
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BarChart3 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Praxisorientiert</h3>
                    <p className="text-sm text-muted-foreground">
                      Bewährte Methoden, die direkt in Ihre Verkaufszahlen führen
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ganzheitlicher Ansatz</h3>
                    <p className="text-sm text-muted-foreground">
                      Vom Team über Prozesse bis zum Einsatz von CRM und AI-Tools
                    </p>
                  </div>
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
                  Sales-Wissen
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Vertiefen Sie Ihr Vertriebs-Know-how
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  In unserem Wissensbereich finden Sie praxisnahe Antworten auf die wichtigsten Fragen rund um Vertrieb und Sales-Strategien.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/wissen/warum-scheitern-sales-strategien-im-mittelstand" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-6">
                      <span className="text-3xl mb-3 block">📊</span>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        Warum scheitern Sales-Strategien?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Die häufigsten Fehler im Mittelstand und wie Sie sie vermeiden.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen/warum-startups-externe-sales-strukturierung-brauchen" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-6">
                      <span className="text-3xl mb-3 block">🚀</span>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        Externe Sales-Strukturierung
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Warum StartUps von externer Vertriebsberatung profitieren.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen/prozess-dokumentation-wichtigkeit" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-6">
                      <span className="text-3xl mb-3 block">📚</span>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        Prozess-Dokumentation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Warum dokumentierte Prozesse der Schlüssel zur Skalierung sind.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen/bauchgefuehl-im-vertrieb" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-6">
                      <span className="text-3xl mb-3 block">⚖️</span>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        Bauchgefühl vs. Daten
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Warum datenbasierte Entscheidungen im Vertrieb erfolgreicher sind.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen/unternehmenskultur-rolle-im-sales" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary">
                    <CardContent className="p-6">
                      <span className="text-3xl mb-3 block">👥</span>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        Sales-Kultur aufbauen
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Wie eine gesunde Unternehmenskultur den Vertriebserfolg fördert.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/wissen" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary bg-muted/50">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                      <ArrowRight className="h-8 w-8 text-secondary mb-3 group-hover:translate-x-1 transition-transform" />
                      <h3 className="font-bold text-primary mb-2">
                        Alle Artikel entdecken
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        20+ Fachartikel zu Sales & Marketing
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* External Resources Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Weiterführende Ressourcen
                </h2>
                <p className="text-muted-foreground">
                  Empfohlene externe Quellen für Sales-Professionals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://www.salesforce.com/de/resources/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">SF</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                            Salesforce Resources
                          </h3>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          CRM Best Practices, Sales-Guides und Branchenreports
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://www.hubspot.de/sales" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">HS</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                            HubSpot Sales Blog
                          </h3>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Vertriebstipps, Templates und Sales-Strategien
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://www.vertriebszeitung.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">VZ</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                            Vertriebszeitung
                          </h3>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Deutschsprachiges Fachmagazin für Vertrieb und Sales
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <a 
                  href="https://www.bdvt.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border hover:border-secondary/50">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-xs">BDVT</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                            BDVT
                          </h3>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Berufsverband für Training, Beratung und Coaching
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Entdecken Sie auch unsere <Link href="/marketing" className="text-secondary hover:underline font-medium">Marketing-Beratung</Link> und <Link href="/blog" className="text-secondary hover:underline font-medium">Best-Practice-Artikel</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary to-brand-navy text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Bereit, Ihren Vertrieb auf das nächste Level zu bringen?
              </h2>
              <p className="text-lg text-white/90">
                Lassen Sie uns gemeinsam analysieren, wie wir Ihre Verkaufszahlen steigern, Ihre Conversion Rates verbessern und Ihr StartUp nachhaltig wachsen lassen können.
              </p>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">Kostenlose Erstberatung</h3>
                <p className="text-white/80">
                  In einem unverbindlichen Erstgespräch analysieren wir Ihre aktuelle Vertriebssituation und zeigen Ihnen konkrete Optimierungspotenziale auf.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Telefon</h4>
                    <a href="tel:+4940209719000" className="text-secondary hover:text-secondary/80 transition-colors text-lg font-medium block">
                      +49 (40) 20 97 1900
                    </a>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">E-Mail</h4>
                    <a href="mailto:service@brehm-consulting.com" className="text-secondary hover:text-secondary/80 transition-colors text-lg font-medium block">
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
              </div>

              <div className="pt-8 text-sm text-white/70">
                <p>Emil-Andresen-Straße 90g, 22529 Hamburg</p>
                <p className="mt-2">Spezialisiert auf Deutschland & Schweiz | Außer-Haus-Markt</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
