'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, ChevronRight, Lightbulb, Target, TrendingUp, Users, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { WissenPost } from '@/lib/wissen-data';
import { wissenPosts } from '@/lib/wissen-data';

interface WissenArticleContentProps {
  post: WissenPost;
}

// Funktion um verwandte Artikel zu finden
function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): WissenPost[] {
  return wissenPosts
    .filter(p => p.slug !== currentSlug)
    .filter(p => p.category === category)
    .slice(0, limit);
}

// Funktion um Lesezeit zu berechnen
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Funktion um Key Takeaways aus dem Content zu extrahieren
function extractKeyTakeaways(content: string): string[] {
  const takeaways: string[] = [];
  
  // Suche nach Fazit-Abschnitt und extrahiere wichtige Punkte
  const fazitMatch = content.match(/## Fazit[\s\S]*?(?=##|$)/i);
  if (fazitMatch) {
    const fazitText = fazitMatch[0];
    // Extrahiere fettgedruckte Aussagen
    const boldMatches = fazitText.match(/\*\*([^*]+)\*\*/g);
    if (boldMatches) {
      boldMatches.slice(0, 2).forEach(match => {
        takeaways.push(match.replace(/\*\*/g, ''));
      });
    }
  }
  
  // Suche nach wichtigen Punkten im gesamten Text
  const importantPatterns = [
    /\*\*Das Problem:\*\*\s*([^.]+\.)/g,
    /\*\*Die Lösung:\*\*\s*([^.]+\.)/g,
    /\*\*Wichtig:\*\*\s*([^.]+\.)/g,
  ];
  
  importantPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      if (takeaways.length < 4 && match[1]) {
        takeaways.push(match[1].trim());
      }
    }
  });
  
  // Wenn nicht genug gefunden, extrahiere aus den ersten Absätzen
  if (takeaways.length < 3) {
    const paragraphs = content.split('\n\n').filter(p => 
      !p.startsWith('#') && 
      !p.startsWith('-') && 
      p.length > 50 &&
      p.length < 300
    );
    
    paragraphs.slice(0, 4 - takeaways.length).forEach(p => {
      // Extrahiere den Kerngedanken
      const cleaned = p.replace(/\*\*/g, '').trim();
      if (cleaned.length > 30 && cleaned.length < 200) {
        takeaways.push(cleaned.split('.')[0] + '.');
      }
    });
  }
  
  // Fallback: Generiere aus Titel und Excerpt
  if (takeaways.length < 2) {
    return [
      "Strukturierte Prozesse sind der Schlüssel zum Erfolg",
      "Datenbasierte Entscheidungen führen zu besseren Ergebnissen",
      "Kontinuierliche Optimierung sichert nachhaltiges Wachstum"
    ];
  }
  
  return takeaways.slice(0, 4);
}

// Funktion um Inhaltsverzeichnis aus H2-Headings zu generieren
function extractTableOfContents(content: string): { id: string; title: string }[] {
  const sections: { id: string; title: string }[] = [];
  const h2Regex = /^## (.+)$/gm;
  let match;
  
  while ((match = h2Regex.exec(content)) !== null) {
    const title = match[1].trim();
    const id = title.toLowerCase()
      .replace(/[äöüß]/g, c => ({ 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' }[c] || c))
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    sections.push({ id, title });
  }
  
  return sections;
}

// Komponente für Key Takeaways Box
function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <Card className="bg-secondary/10 border-secondary/30 my-8">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-secondary" />
          <h3 className="font-bold text-lg text-foreground">Das Wichtigste auf einen Blick</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Komponente für Inhaltsverzeichnis
function TableOfContents({ sections }: { sections: { id: string; title: string }[] }) {
  if (sections.length < 2) return null;
  
  return (
    <Card className="bg-muted/50 border-border my-8">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-lg text-foreground">Inhaltsverzeichnis</h3>
        </div>
        <nav>
          <ol className="space-y-2 list-decimal list-inside">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </CardContent>
    </Card>
  );
}

// Komponente für Statistik-Box
function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-4 bg-primary/5 rounded-lg">
      <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

// Funktion um Statistiken aus dem Content zu extrahieren
function extractStats(content: string): { value: string; label: string }[] {
  const stats: { value: string; label: string }[] = [];
  
  // Suche nach Prozentangaben mit Kontext
  const percentRegex = /(\d+[-–]?\d*%)\s+([^.]+)/g;
  let match;
  while ((match = percentRegex.exec(content)) !== null) {
    if (stats.length < 3) {
      stats.push({
        value: match[1],
        label: match[2].replace(/\*\*/g, '').trim().slice(0, 30)
      });
    }
  }
  
  return stats;
}

// Intelligenter Content-Renderer
function renderContent(content: string) {
  const sections = content.split('\n\n');
  const elements: React.ReactNode[] = [];
  
  sections.forEach((section, index) => {
    const trimmed = section.trim();
    if (!trimmed) return;
    
    // H2 Headers - Hauptabschnitte
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace('## ', '');
      const id = text.toLowerCase()
        .replace(/[äöüß]/g, c => ({ 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' }[c] || c))
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      
      elements.push(
        <h2 
          key={`h2-${index}`} 
          id={id} 
          className="scroll-mt-24 text-xl sm:text-2xl font-bold text-foreground mt-12 mb-6 pb-3 border-b border-border flex items-center gap-3"
        >
          <span className="w-1 h-8 bg-secondary rounded-full"></span>
          {text}
        </h2>
      );
      return;
    }
    
    // H3 Headers - Unterabschnitte
    if (trimmed.startsWith('### ')) {
      const text = trimmed.replace('### ', '');
      elements.push(
        <h3 key={`h3-${index}`} className="text-lg sm:text-xl font-semibold text-primary mt-8 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-secondary" />
          {text}
        </h3>
      );
      return;
    }
    
    // Ungeordnete Listen
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
      elements.push(
        <ul key={`ul-${index}`} className="my-6 space-y-3">
          {items.map((item, i) => {
            const cleanItem = item.replace(/^-\s*/, '');
            return (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <ChevronRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ 
                  __html: cleanItem.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') 
                }} />
              </li>
            );
          })}
        </ul>
      );
      return;
    }
    
    // Nummerierte Listen
    if (/^\d+\./.test(trimmed)) {
      const items = trimmed.split('\n').filter(line => /^\d+\./.test(line.trim()));
      elements.push(
        <ol key={`ol-${index}`} className="my-6 space-y-4">
          {items.map((item, i) => {
            const cleanItem = item.replace(/^\d+\.\s*/, '');
            return (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <span 
                  className="text-muted-foreground pt-1"
                  dangerouslySetInnerHTML={{ 
                    __html: cleanItem.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') 
                  }} 
                />
              </li>
            );
          })}
        </ol>
      );
      return;
    }
    
    // Tabellen (einfache Markdown-Tabellen)
    if (trimmed.includes('|') && trimmed.includes('---')) {
      const rows = trimmed.split('\n').filter(row => row.includes('|'));
      if (rows.length > 2) {
        const headerRow = rows[0].split('|').filter(cell => cell.trim());
        const dataRows = rows.slice(2).map(row => row.split('|').filter(cell => cell.trim()));
        
        elements.push(
          <div key={`table-${index}`} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  {headerRow.map((cell, i) => (
                    <th key={i} className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-border px-4 py-2 text-muted-foreground">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        return;
      }
    }
    
    // Spezielle Highlight-Boxen für wichtige Aussagen
    if (trimmed.startsWith('**Das Problem:**') || trimmed.startsWith('**Die Lösung:**') || trimmed.startsWith('**Wichtig:**')) {
      elements.push(
        <Card key={`highlight-${index}`} className="my-6 bg-accent/30 border-accent">
          <CardContent className="p-4">
            <p 
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ 
                __html: trimmed.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>') 
              }} 
            />
          </CardContent>
        </Card>
      );
      return;
    }
    
    // Beispiel-Boxen
    if (trimmed.toLowerCase().includes('beispiel:') || trimmed.toLowerCase().includes('**beispiel')) {
      elements.push(
        <Card key={`example-${index}`} className="my-6 bg-muted/50 border-border">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <span className="text-xl">💡</span>
              <p 
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: trimmed.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                }} 
              />
            </div>
          </CardContent>
        </Card>
      );
      return;
    }
    
    // Normale Absätze
    if (trimmed.length > 0) {
      elements.push(
        <p 
          key={`p-${index}`} 
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ 
            __html: trimmed.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') 
          }} 
        />
      );
    }
  });
  
  return elements;
}

export default function WissenArticleContent({ post }: WissenArticleContentProps) {
  const readingTime = calculateReadingTime(post.content);
  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const keyTakeaways = extractKeyTakeaways(post.content);
  const tableOfContents = extractTableOfContents(post.content);
  const stats = extractStats(post.content);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Kompakter Hero ohne Bild */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/wissen">
              <Button variant="ghost" className="text-muted-foreground hover:text-secondary mb-6 -ml-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Button>
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{readingTime} Min. Lesezeit</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl sm:text-5xl">{post.emoji}</span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Key Takeaways */}
            <KeyTakeaways items={keyTakeaways} />

            {/* Inhaltsverzeichnis */}
            <TableOfContents sections={tableOfContents} />
            
            {/* Statistiken wenn vorhanden */}
            {stats.length >= 2 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <StatBox key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            )}

            {/* Artikel-Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Verwandte Artikel */}
            {relatedPosts.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-secondary" />
                  Weiterführende Artikel
                </h2>
                <div className="grid gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/wissen/${relatedPost.slug}`}>
                      <Card className="hover:border-secondary transition-colors">
                        <CardContent className="p-4 flex items-center gap-4">
                          <span className="text-2xl">{relatedPost.emoji}</span>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground hover:text-secondary transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Alle Artikel Link */}
            <div className="mt-8">
              <Link href="/wissen">
                <Button variant="outline" className="w-full sm:w-auto">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Alle Wissen-Artikel ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Haben Sie Fragen zu diesem Thema?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir helfen Ihnen gerne weiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+494020971900"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8"
              >
                <Phone className="w-4 h-4" />
                +49 (40) 20 97 1900
              </a>
              <a
                href="mailto:service@brehm-consulting.com"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8"
              >
                <Mail className="w-4 h-4" />
                service@brehm-consulting.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
