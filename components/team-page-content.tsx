'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, TrendingUp, Palette, Target, Database, LineChart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Stefan Brehm',
    title: 'Sales & Marketing Specialist',
    image: 'https://brehm-consulting.com/wp-content/uploads/2024/12/stefan-brehm.jpg',
    icon: Sparkles,
    tagline: 'Erfolgreicher Serial Entrepreneur mit 30+ Jahren Expertise',
    strengths: [
      'Gründer von 3 erfolgreichen StartUps (Hotel1, BookaTable, Gastrofix)',
      'Change Management & Go-to-Market Strategien',
      'Hospitality & Food Service Tech Spezialist',
      'AI & Unternehmensoptimierung seit 2024',
      'Leaderclub Deutschland Mitglied seit 2007'
    ],
    bio: 'Vom Hotelkaufmann zum erfolgreichen Tech-Entrepreneur: Stefan bringt einzigartige Branchenkenntnisse und bewährte Wachstumsstrategien für StartUps im Außer-Haus-Markt. Seine drei erfolgreichen Exits und jahrzehntelange Führungserfahrung machen ihn zum idealen Partner für Ihre Skalierung.',
    highlight: 'Gastrofix-Exit 2022 an Lightspeed eCommerce mit 150 Mitarbeitern'
  },
  {
    name: 'Vivien Wollenberg',
    title: 'SEO & Content Specialist',
    image: 'https://brehm-consulting.com/wp-content/uploads/2024/12/vivian.jpg',
    icon: LineChart,
    tagline: 'Fast 10 Jahre Online-Marketing-Expertise für nachhaltigen Erfolg',
    strengths: [
      'Ganzheitliche SEO-Strategie & Umsetzung',
      'Content-Erstellung für Suchmaschinen & Leser',
      'Social Media Kampagnen-Management',
      'Newsletter-Marketing für Kundenbindung',
      'Website-Analyse & Ranking-Optimierung'
    ],
    bio: 'Vivien versteht die ständigen Veränderungen der digitalen Welt und entwickelt Strategien, die nachhaltig Erfolg bringen. Von der Keyword-Recherche bis zur Kampagnen-Umsetzung – sie begleitet Unternehmen auf dem Weg zu mehr Online-Sichtbarkeit und Reichweite.',
    highlight: 'Spezialistin für SEO-optimierte Inhalte, die ranken und begeistern'
  },
  {
    name: 'Stephan Michalik',
    title: 'SEO & Performance Marketing Specialist',
    image: 'https://brehm-consulting.com/wp-content/uploads/2024/12/stephan-michalik.jpg',
    icon: TrendingUp,
    tagline: '20+ Jahre Performance Marketing & bewährte Kampagnensteuerung',
    strengths: [
      'Google, Meta & Microsoft Advertising Expertise',
      'Ganzheitliche Content- & Digitalstrategie',
      'Kostenoptimierter Lead-Flow für StartUps',
      'Qualifizierung & Coaching von Marketing-Teams',
      'Gründer von Salon Digital Media (30 MA) & Grünberg.Digital'
    ],
    bio: 'Als Serial Entrepreneur mit Agenturverkauf (EOS.uptrade/Siemens) bringt Stephan bewährtes Know-how in der Umsetzung und Optimierung von Online-Kampagnen. Sein Fokus: Ein kontinuierlicher Fluss qualifizierter Anfragen durch aktive, zielgenaue Kampagnensteuerung.',
    highlight: 'Google Agency 3. Platz DACH 2016 mit Grünberg.Digital'
  },
  {
    name: 'Marion Kofahl',
    title: 'Art Director – M5 Design',
    image: 'https://brehm-consulting.com/wp-content/uploads/2024/12/marion-kofahl.jpg',
    icon: Palette,
    tagline: 'Grafikdesign, Illustration & Fotografie mit Leidenschaft',
    strengths: [
      'Corporate Design & Markenentwicklung',
      'Logo-, Website- & Kampagnen-Gestaltung',
      'Imagebroschüren, Messestände, Citylight Poster',
      'Fotografie & visuelle Markenführung',
      'Gründerin von amigos de los niños e.V. (200+ Kinder unterstützt)'
    ],
    bio: 'Marion haucht Marken eine Seele ein. Ihre Arbeit reicht von der ersten vagen Idee bis zur finalen Kreation – kontinuierlich, ganzheitlich und mit Liebe zum Detail. Ob in Hamburg, im ICE oder in Mexico City: Unterschiedliche Orte sind für sie stets Quelle der Inspiration.',
    highlight: '"To do things right, first you need love, then technique" – Antoni Gaudí'
  },
  {
    name: 'Oliver Wizmer',
    title: 'Sales Specialist',
    image: 'https://brehm-consulting.com/wp-content/uploads/2025/01/oliver-wizmer.jpg',
    icon: Target,
    tagline: '20+ Jahre Go-to-Market-Management & Sales Leadership',
    strengths: [
      'Komplexe Go-to-Market-Prozesse ganzheitlich entwickeln',
      'Marktanalyse & innovative Vertriebsstrategien',
      'Teamaufbau & Führung mit Fokus auf Agilität',
      'Erfahrung mit börsennotierten Unternehmen',
      'Maßgeschneiderte, nachhaltige Vertriebskonzepte'
    ],
    bio: 'Oliver bringt fundierte Expertise im Sales Leadership und hat mit führenden Unternehmen zusammengearbeitet. Sein praxisnaher Ansatz: Von der Marktanalyse über Vertriebsstrategien bis zur operativen Umsetzung – alles mit Fokus auf langfristige Kundenbeziehungen und nachhaltiges Wachstum.',
    highlight: 'Spezialist für die Optimierung von Go-to-Market-Strategien'
  },
  {
    name: 'Sven Brenner',
    title: 'Salesforce Specialist',
    image: 'https://brehm-consulting.com/wp-content/uploads/2025/01/svenbrenner.jpg',
    icon: Database,
    tagline: 'Salesforce-Experte seit 2017 für maßgeschneiderte CRM-Lösungen',
    strengths: [
      'Tiefgehende Analyse von Geschäftsprozessen',
      'Passgenaue Umsetzung in Salesforce-Lösungen',
      'Innovative Ansätze für komplexe Prozesse',
      'Erfahrung in internationalen Unternehmen',
      'Branchenübergreifende Expertise'
    ],
    bio: 'Sven ist fasziniert von den vielseitigen Möglichkeiten der Salesforce-Plattform. Er analysiert individuelle Anforderungen tiefgehend und setzt sie passgenau um. Seine Erfahrung in mittelständischen und börsennotierten Unternehmen ermöglicht maßgeschneiderte Lösungen für jede Branche.',
    highlight: 'Fokus auf nachhaltige Mehrwerte durch effiziente Prozessabbildung'
  }
];

export default function TeamPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Wave Graphics */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        {/* Nautical Wave Graphics */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,100 Q300,150 600,100 T1200,100 L1200,0 L0,0 Z" fill="currentColor" opacity="0.3"/>
            <path d="M0,150 Q300,200 600,150 T1200,150 L1200,0 L0,0 Z" fill="currentColor" opacity="0.2"/>
            <path d="M0,200 Q300,250 600,200 T1200,200 L1200,0 L0,0 Z" fill="currentColor" opacity="0.1"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Unsere Gemeinschaft – unser Team
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ein einzigartiges Netzwerk aus erfolgreichen Gründern, Marketing-Experten, Sales-Spezialisten und kreativen Köpfen. 
              Gemeinsam bringen wir über 100 Jahre kombinierte Expertise für Ihren Erfolg.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Bewährte Expertise trifft auf innovative Ansätze
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser Team vereint erfolgreiche Serial Entrepreneurs, Performance-Marketing-Profis, SEO-Experten, 
              kreative Designer und CRM-Spezialisten. Jedes Mitglied bringt jahrzehntelange Praxiserfahrung, 
              nachgewiesene Erfolge und eine Leidenschaft für Ihr Wachstum mit.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-secondary/50">
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                          {member.name}
                        </h3>
                        <p className="text-secondary font-semibold text-lg mb-3">
                          {member.title}
                        </p>
                        <p className="text-muted-foreground italic text-sm leading-relaxed">
                          {member.tagline}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-foreground/90 leading-relaxed mb-6 text-sm sm:text-base">
                        {member.bio}
                      </p>

                      {/* Highlight Badge */}
                      <div className="bg-accent/30 border-l-4 border-secondary p-4 mb-6 rounded-r">
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-secondary font-bold">Highlight: </span>
                          {member.highlight}
                        </p>
                      </div>

                      {/* Key Strengths */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">
                          Kernkompetenzen:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.strengths.map((strength, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-xs py-1 px-3 bg-secondary/10 text-foreground hover:bg-secondary/20"
                            >
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Lassen Sie uns gemeinsam Ihr Wachstum gestalten
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Profitieren Sie von unserer gebündelten Expertise in Marketing, Sales, Design und Technologie. 
              Vereinbaren Sie jetzt ein kostenloses Erstgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+494020971900" 
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                +49 (40) 20 97 1900
              </a>
              <a 
                href="mailto:service@brehm-consulting.com" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                service@brehm-consulting.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
