"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Impressum
              </h1>
              <p className="text-lg text-muted-foreground">
                Angaben gemäß § 5 TMG
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              
              <div className="bg-muted/30 rounded-xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 mt-0">
                  Anbieter
                </h2>
                <address className="not-italic text-foreground/80 leading-relaxed">
                  <p className="font-semibold text-foreground mb-2">Brehm Consulting</p>
                  <p>Stefan Brehm</p>
                  <p>Emil-Andresen-Straße 90g</p>
                  <p>22529 Hamburg</p>
                  <p className="mt-4">Deutschland</p>
                </address>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Kontakt
                  </h2>
                  <p className="text-foreground/80">
                    Telefon: <a href="tel:+494020972001" className="text-secondary hover:underline">+49 (40) 20972001</a><br />
                    E-Mail: <a href="mailto:service@brehm-consulting.com" className="text-secondary hover:underline">service@brehm-consulting.com</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Umsatzsteuer-Identifikationsnummer
                  </h2>
                  <p className="text-foreground/80">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    Auf Anfrage
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Berufsbezeichnung und berufsrechtliche Regelungen
                  </h2>
                  <p className="text-foreground/80">
                    Berufsbezeichnung: Unternehmensberater<br />
                    Zuständige Kammer: Handelskammer Hamburg
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                  </h2>
                  <p className="text-foreground/80">
                    Stefan Brehm<br />
                    Emil-Andresen-Straße 90g<br />
                    22529 Hamburg
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Streitschlichtung
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline ml-1">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-foreground/80">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Haftung für Inhalte
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
                    den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
                    jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                    oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-foreground/80">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Haftung für Links
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                    der Seiten verantwortlich.
                  </p>
                  <p className="text-foreground/80">
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
                    überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Urheberrecht
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p className="text-foreground/80">
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch 
                    gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                    die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                    gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                    bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                    werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Back Link */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
                >
                  ← Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
