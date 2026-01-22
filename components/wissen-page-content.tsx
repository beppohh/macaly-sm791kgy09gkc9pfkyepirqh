'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { wissenPosts } from '@/lib/wissen-data';

export default function WissenPageContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <MapPin className="w-4 h-4 mr-2 inline-block" />
              Ihr Ratgeber für B2B Sales & Marketing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wissenswertes über Sales & Marketing
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Alles, was Sie über moderne Vertriebsstrategien, Lead-Management und erfolgreiche Sales-Prozesse wissen müssen – von Praxistipps bis zu Insider-Informationen für Ihren Erfolg im B2B-Vertrieb.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {wissenPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/wissen/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary bg-card">
                    <CardHeader className="pb-4">
                      <div className="text-5xl mb-4">{post.emoji}</div>
                      <CardTitle className="text-xl leading-tight group-hover:text-secondary transition-colors line-clamp-3">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-medium text-secondary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Box Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-muted/50 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Ihr Ratgeber für erfolgreichen B2B-Vertrieb
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hier finden Sie ausführliche Informationen rund um moderne Sales-Strategien und Marketing-Excellence. Von praktischen Tipps zur Lead-Generierung über Insider-Wissen zu CRM-Systemen bis hin zu bewährten Methoden für nachhaltiges Wachstum – wir haben alles Wichtige für Sie zusammengestellt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bereit für messbaren Vertriebserfolg?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Entdecken Sie, wie wir Ihr Unternehmen mit systematischen Sales-Prozessen und datengetriebenem Marketing auf die nächste Stufe bringen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/marketing"
                className="inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 h-12 px-10 shadow-lg hover:shadow-xl"
              >
                Unsere Leistungen ansehen
              </a>
              <a
                href="tel:+494020971900"
                className="inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-10"
              >
                Jetzt Beratung anfragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
