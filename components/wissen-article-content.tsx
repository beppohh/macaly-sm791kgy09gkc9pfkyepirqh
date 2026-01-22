'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { WissenPost } from '@/lib/wissen-data';
import ReactMarkdown from 'react-markdown';

interface WissenArticleContentProps {
  post: WissenPost;
}

export default function WissenArticleContent({ post }: WissenArticleContentProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${post.image}")`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/wissen">
              <Button variant="ghost" className="text-white hover:text-secondary mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Button>
            </Link>
            
            <Badge 
              variant={post.category === 'Strategie' ? 'default' : 'secondary'}
              className="mb-4"
            >
              {post.category}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/wissen">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zur Wissensübersicht
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Haben Sie Fragen zu diesem Thema?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
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
