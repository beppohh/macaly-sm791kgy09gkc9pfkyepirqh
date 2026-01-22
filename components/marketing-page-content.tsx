'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  TrendingUp, 
  Share2, 
  Zap, 
  FileText, 
  Megaphone,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Target,
  Users,
  Lightbulb,
  Sparkles
} from 'lucide-react';

export default function MarketingPageContent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
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
                    Marketing Expertise für StartUps
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Marketing und Vertrieb, die Ihr StartUp wachsen lassen
                </h1>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Professionelle Marketing-Beratung für StartUps im Außer-Haus-Markt. Von der Marktanalyse über Lead-Generierung bis zur Marketing Automation – wir machen Sie sichtbar und erfolgreich.
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
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Marketing Team analysiert Daten und Strategien"
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
                Warum Marketing-Beratung für Ihr StartUp?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Präzise Zielgruppe</h3>
                    <p className="text-sm text-muted-foreground">
                      Erreichen Sie genau die Kunden, die Ihr StartUp wachsen lassen
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <BarChart3 className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg">Messbare Erfolge</h3>
                    <p className="text-sm text-muted-foreground">
                      Datengetriebene Kampagnen mit klaren KPIs und ROI
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
                      Langfristige Strategien statt kurzfristiger Lösungen
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
                Unsere Marketing-Leistungen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Fundierte Erkenntnisse über Ihre Zielgruppe und den Markt sind der Schlüssel für erfolgreiche Marketing-Maßnahmen. Wir unterstützen Sie mit detaillierten Analysen und praxiserprobten Strategien.
              </p>
            </div>

            {/* Service 1: Analysis & Status Quo */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                  <Image
                    src="https://images.pexels.com/photos/8485854/pexels-photo-8485854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Team analysiert Marketing-Performance und Daten"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Search className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Analyse & Status Quo
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Eine erfolgreiche Neukundengewinnung kann teuer sein und oft gehen wertvolle Leads im Prozess verloren. Der erste Schritt unserer Beratung ist daher eine gründliche Analyse.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Gründliche Analyse Ihrer aktuellen Marketingaktivitäten, Budgets und bisherigen Erfolge
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Identifikation von Stolpersteinen wie fehlende Leadpflege oder unzureichend verknüpfte Systeme
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Konkrete Vorschläge zur Optimierung der Leadgenerierung und Performance-Marketing
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Stärkung der Verbindung zwischen Marketing und Vertrieb für nachhaltigen Erfolg
                      </p>
                    </div>
                  </div>

                  <Button asChild className="bg-secondary hover:bg-secondary/90 mt-6">
                    <Link href="#contact">
                      Kostenlose Erstanalyse anfragen
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 2: Marketing Strategy */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Entwicklung einer Marketingstrategie
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Ein fundiertes Verständnis Ihres Marktes ist der Schlüssel für erfolgreiche Maßnahmen. Wir führen tiefgehende Analysen durch, um Ihre Wettbewerbsfähigkeit zu stärken.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Tiefgehende Marktanalysen zur Identifikation von Trends und Chancen
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Integration moderner Technologien: Marketing Automation, KI-gesteuerte Lead-Generierung
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Einsatz von AI-Agenten für effizienten Ressourceneinsatz
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Strategien, die Marketing- und Vertriebsressourcen optimal nutzen
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        <strong>KI-gesteuerte Optimierungen:</strong> Einführung und Analyse geeigneter AI-Tools für Ihre Zielgruppe
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
                    src="https://images.pexels.com/photos/8970684/pexels-photo-8970684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Strategische Marketing-Planung und Positionierung"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3: Digital Marketing */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                  <Image
                    src="https://images.pexels.com/photos/7414207/pexels-photo-7414207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Digitales Marketing und Social Media Strategien"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Digitales Marketing und Social Media
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        In der digitalen Welt gibt es endlose Möglichkeiten, um Ihre Zielgruppe gezielt und effizient zu erreichen. Wir entwickeln maßgeschneiderte, datengetriebene Online-Marketing-Kampagnen.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        <strong>SEO & GEO:</strong> Suchmaschinenoptimierung für maximale Sichtbarkeit
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        <strong>SEA:</strong> Bezahlte Suchmaschinenwerbung mit messbaren Erfolgen
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Social Media:</strong> Instagram, Facebook, LinkedIn – authentisch und wirkungsvoll
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Kontinuierliche Analyse und Optimierung für messbare Erfolge
                      </p>
                    </div>
                  </div>

                  <Button asChild className="bg-secondary hover:bg-secondary/90 mt-6">
                    <Link href="#contact">
                      Digital-Marketing starten
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Grid: Automation, Content, Press, AI Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Marketing Automation */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-brand-cyan flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Marketing Automation & CRM
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Durch den Einsatz automatisierter Prozesse gestalten Sie Ihre Marketing- und Vertriebsmaßnahmen effizienter und zielgerichteter.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Auswahl der passenden Tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Salesforce & HubSpot Integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>E-Mail-Kampagnen & Lead-Nurturing</span>
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

              {/* Content Creation */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-coral to-accent flex items-center justify-center">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Content-Erstellung
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Hochwertiger und relevanter Content ist das Herzstück jeder erfolgreichen Marketingstrategie. Wir helfen Ihnen, Vertrauen aufzubauen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Blog-Artikel & Website-Texte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Social Media Content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Zielgruppengerechte Inhalte</span>
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

              {/* Press Relations */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-brand-navy flex items-center justify-center">
                    <Megaphone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Pressearbeit
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Gezielte Pressearbeit ist ein wichtiger Hebel, um die öffentliche Wahrnehmung Ihrer Marke zu stärken und Vertrauen aufzubauen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Pressemitteilungen erstellen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Journalisten-Netzwerk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Organisation von Presseevents</span>
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

              {/* AI Tools & LLM Development */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      AI Tools & LLM-Optimierung
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Wir beraten Sie bei der Einführung und Analyse geeigneter AI-Tools und LLM-Technologien – von Website-Neuaufbau bis zur Optimierung für KI-gesteuerte Prozesse.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Website-Neuaufbau & Modernisierung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>LLM-freundliche Optimierung & Strukturierung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>AI-Tool-Analyse & Auswahl</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>Integration von AI-Agenten</span>
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
                Warum Brehm Consulting für Ihr StartUp?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">30+ Jahre Erfahrung</h3>
                    <p className="text-sm text-muted-foreground">
                      Tiefes Verständnis für den Außer-Haus-Markt, Hospitality und Food Service
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">StartUp-Fokus</h3>
                    <p className="text-sm text-muted-foreground">
                      Spezialisiert auf die Bedürfnisse und Herausforderungen von wachsenden StartUps
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BarChart3 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Messbare Ergebnisse</h3>
                    <p className="text-sm text-muted-foreground">
                      Datengetriebene Ansätze mit klaren KPIs und kontinuierlicher Optimierung
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ganzheitlicher Ansatz</h3>
                    <p className="text-sm text-muted-foreground">
                      Von der Strategie über die Umsetzung bis zur Verbindung von Marketing und Sales
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
                Bereit, Ihr Marketing auf das nächste Level zu bringen?
              </h2>
              <p className="text-lg text-white/90">
                Lassen Sie uns gemeinsam analysieren, wie wir Ihre Leadgenerierung optimieren, Ihr Performance-Marketing verbessern und Ihr StartUp nachhaltig wachsen lassen können.
              </p>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">Kostenlose Erstberatung</h3>
                <p className="text-white/80">
                  In einem unverbindlichen Erstgespräch analysieren wir Ihre aktuelle Situation und zeigen Ihnen konkrete Optimierungspotenziale auf.
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
      </main>
      <Footer />
    </>
  );
}
