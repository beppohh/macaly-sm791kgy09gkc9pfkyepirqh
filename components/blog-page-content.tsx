'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog: Best Practices & Kundenprojekte
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              Einblicke in unsere Beratungsprojekte, erfolgreiche Kundenfälle und bewährte Methoden aus der Praxis – für StartUps und Mittelstand in Deutschland und der Schweiz
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Praxisberichte & Case Studies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Aktuelle Beiträge aus der Beratungspraxis
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Von CRM-Implementierungen über Website-Optimierung bis zur Mitbewerberanalyse: Erfahren Sie, wie wir unseren Kunden zu messbaren Erfolgen verhelfen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-secondary">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge 
                          variant={post.category === 'Best Practice' ? 'default' : 'secondary'}
                          className="font-semibold backdrop-blur-sm bg-background/90"
                        >
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight group-hover:text-secondary transition-colors line-clamp-3 min-h-[4rem]">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ihr Projekt mit uns umsetzen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch und erfahren Sie, wie wir auch Ihr Unternehmen auf die nächste Stufe bringen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+494020971900"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-11 px-8"
              >
                +49 (40) 20 97 1900
              </a>
              <a
                href="mailto:service@brehm-consulting.com"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
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
