"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Datenschutzerklärung
              </h1>
              <p className="text-lg text-muted-foreground">
                Informationen zum Umgang mit Ihren personenbezogenen Daten
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Datenerfassung auf dieser Website
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" 
                    in dieser Datenschutzerklärung entnehmen.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    <strong>Wie erfassen wir Ihre Daten?</strong><br />
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei 
                    kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                    durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
                    Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
                    automatisch, sobald Sie diese Website betreten.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                    gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  <p className="text-foreground/80">
                    <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                    Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                    ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                    Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                    jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                    Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                    Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    2. Hosting
                  </h2>
                  <p className="text-foreground/80 mb-4">
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Externes Hosting
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                    Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei 
                    kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                    Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über 
                    eine Website generiert werden, handeln.
                  </p>
                  <p className="text-foreground/80">
                    Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren 
                    potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse 
                    einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots 
                    durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    3. Allgemeine Hinweise und Pflichtinformationen
                  </h2>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Datenschutz
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                    Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                    Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
                    sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-foreground/80">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation 
                    per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem 
                    Zugriff durch Dritte ist nicht möglich.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <div className="bg-muted/30 rounded-xl p-6 mb-4">
                    <p className="text-foreground/80">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <address className="not-italic text-foreground/80 mt-4 leading-relaxed">
                      <p className="font-semibold text-foreground">Brehm Consulting</p>
                      <p>Stefan Brehm</p>
                      <p>Emil-Andresen-Straße 90g</p>
                      <p>22529 Hamburg</p>
                      <p className="mt-4">
                        Telefon: <a href="tel:+494020972001" className="text-secondary hover:underline">+49 (40) 20972001</a><br />
                        E-Mail: <a href="mailto:service@brehm-consulting.com" className="text-secondary hover:underline">service@brehm-consulting.com</a>
                      </p>
                    </address>
                  </div>
                  <p className="text-foreground/80">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                    gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                    Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Speicherdauer
                  </h3>
                  <p className="text-foreground/80">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                    wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                    Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
                    oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
                    sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                    personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); 
                    im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-foreground/80">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
                    möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die 
                    Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf 
                    unberührt.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                  </h3>
                  <p className="text-foreground/80">
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO 
                    ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN 
                    SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH 
                    EINZULEGEN. WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU 
                    BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE 
                    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-foreground/80">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                    einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, 
                    ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht 
                    besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p className="text-foreground/80">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
                    eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
                    gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte 
                    Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, 
                    soweit es technisch machbar ist.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Auskunft, Löschung und Berichtigung
                  </h3>
                  <p className="text-foreground/80">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
                    unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft 
                    und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung 
                    oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene 
                    Daten können Sie sich jederzeit an uns wenden.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Recht auf Einschränkung der Verarbeitung
                  </h3>
                  <p className="text-foreground/80">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                    zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    4. Datenerfassung auf dieser Website
                  </h2>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Cookies
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete 
                    und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend 
                    für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf 
                    Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch 
                    gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese 
                    selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen 
                    (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter 
                    Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur 
                    Abwicklung von Zahlungsdienstleistungen).
                  </p>
                  <p className="text-foreground/80">
                    Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, 
                    da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die 
                    Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das 
                    Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Server-Log-Dateien
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-foreground/80">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der 
                    Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung 
                    und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Kontaktformular
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                    wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-foreground/80">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                    vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
                    Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an 
                    uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
                    (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Anfrage per E-Mail, Telefon oder Telefax
                  </h3>
                  <p className="text-foreground/80">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
                    aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
                    Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir 
                    nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    5. Analyse-Tools und Werbung
                  </h2>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Google Analytics 4
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics 4. Anbieter ist 
                    die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Google Analytics 4 ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher 
                    zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. 
                    Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese 
                    Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des 
                    Websitebesuchers zugeordnet.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Google Analytics 4 verwendet Technologien, die die Wiedererkennung des Nutzers zum 
                    Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder 
                    Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung 
                    dieser Website werden in der Regel an einen Server von Google in den USA übertragen 
                    und dort gespeichert.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 
                    lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="text-foreground/80">
                    Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission 
                    gestützt. Details finden Sie hier:{' '}
                    <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      https://privacy.google.com/businesses/controllerterms/mccs/
                    </a>
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Google Tag Manager
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, 
                    Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools 
                    und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager 
                    selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine 
                    eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der 
                    über ihn eingebundenen Tools.
                  </p>
                  <p className="text-foreground/80">
                    Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f 
                    DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und 
                    unkomplizierten Einbindung und Verwaltung verschiedener Tools auf seiner Website.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Google Ads
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm 
                    der Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Google Ads ermöglicht es uns, Werbeanzeigen in der Google-Suchmaschine oder auf 
                    Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt 
                    (Keyword-Targeting). Ferner können zielgerichtete Werbeanzeigen anhand der bei Google 
                    vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt werden 
                    (Zielgruppen-Targeting).
                  </p>
                  <p className="text-foreground/80">
                    Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 
                    lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Google Ads Conversion-Tracking
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Diese Website nutzt Google Ads Conversion-Tracking. Anbieter ist die Google Ireland 
                    Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Mit Hilfe von Google Ads Conversion-Tracking können Google und wir erkennen, ob der 
                    Nutzer bestimmte Aktionen durchgeführt hat. So können wir beispielsweise auswerten, 
                    welche Buttons auf unserer Website wie häufig geklickt wurden und welche Produkte 
                    besonders häufig angesehen oder gekauft wurden. Diese Informationen dienen dazu, 
                    Conversion-Statistiken zu erstellen.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Wir erfahren die Gesamtanzahl der Nutzer, die auf eine unserer Anzeigen geklickt haben 
                    und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. 
                    Wir erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren 
                    lassen. Die Speicherdauer von Cookies beträgt maximal 90 Tage.
                  </p>
                  <p className="text-foreground/80">
                    Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 
                    lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Google Ads Remarketing
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Diese Website nutzt die Funktionen von Google Ads Remarketing. Anbieter ist die 
                    Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Mit Google Ads Remarketing können wir Personen, die mit unserem Online-Angebot 
                    interagieren, bestimmten Zielgruppen zuordnen, um ihnen anschließend interessenbezogene 
                    Werbung im Google-Werbenetzwerk anzeigen zu lassen (Remarketing bzw. Retargeting).
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Die mit Google Ads Remarketing erstellten Werbe-Zielgruppen können ferner mit den 
                    geräteübergreifenden Funktionen von Google verknüpft werden. Auf diese Weise können 
                    interessenbezogene, personalisierte Werbebotschaften, die in Abhängigkeit von der 
                    früheren Nutzung und vom Surfverhalten auf einem Endgerät an Sie angepasst wurden, 
                    auch auf einem anderen Ihrer Endgeräte angezeigt werden.
                  </p>
                  <p className="text-foreground/80">
                    Wenn Sie über ein Google-Konto verfügen, können Sie der personalisierten Werbung 
                    unter folgendem Link widersprechen:{' '}
                    <a href="https://www.google.com/settings/ads/onweb/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      https://www.google.com/settings/ads/onweb/
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    6. KI-Dienste und Chatbots
                  </h2>

                  <div className="bg-muted/30 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-medium text-foreground mb-3">
                      Allgemeiner Hinweis zur Nutzung von KI-Diensten
                    </h3>
                    <p className="text-foreground/80 mb-4">
                      Wir setzen im Rahmen unserer Geschäftstätigkeit verschiedene KI-basierte Dienste 
                      ein, um unsere Arbeitsprozesse zu optimieren, Texte zu erstellen, Analysen durchzuführen 
                      und unsere Dienstleistungen zu verbessern. Bei der Nutzung dieser Dienste kann es zur 
                      Verarbeitung personenbezogener Daten kommen.
                    </p>
                    <p className="text-foreground/80 mb-4">
                      <strong>Wichtiger Hinweis:</strong> Wir geben grundsätzlich keine personenbezogenen 
                      Daten unserer Kunden ohne deren ausdrückliche Einwilligung in KI-Systeme ein. Sollten 
                      wir im Einzelfall personenbezogene Daten mit Hilfe von KI-Diensten verarbeiten, 
                      informieren wir Sie darüber und holen, sofern erforderlich, Ihre Einwilligung ein.
                    </p>
                    <p className="text-foreground/80">
                      Die Nutzung von KI-Diensten erfolgt auf Grundlage unseres berechtigten Interesses 
                      an einer effizienten Geschäftsabwicklung (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                      Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese eingeholt wurde.
                    </p>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Google Gemini
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen Google Gemini, einen KI-Dienst der Google Ireland Limited („Google"), 
                    Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Google Gemini ist ein generatives KI-Modell, das wir zur Unterstützung bei der 
                    Erstellung von Texten, zur Analyse von Informationen und zur Optimierung unserer 
                    Geschäftsprozesse einsetzen.
                  </p>
                  <p className="text-foreground/80">
                    Weitere Informationen:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      https://policies.google.com/privacy
                    </a>
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    OpenAI / ChatGPT
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen ChatGPT und andere Dienste von OpenAI, L.L.C., 3180 18th Street, 
                    San Francisco, CA 94110, USA.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    ChatGPT ist ein KI-gestützter Chatbot und Sprachmodell, das wir für die Erstellung 
                    von Texten, Recherchen, Übersetzungen und zur Unterstützung bei der Kommunikation 
                    einsetzen. Bei der Nutzung werden Eingabedaten an Server von OpenAI in den USA 
                    übertragen.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der 
                    EU-Kommission gestützt.
                  </p>
                  <p className="text-foreground/80">
                    Weitere Informationen:{' '}
                    <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      https://openai.com/policies/privacy-policy
                    </a>
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Microsoft Copilot
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen Microsoft Copilot, einen KI-Assistenten der Microsoft Corporation, 
                    One Microsoft Way, Redmond, WA 98052-6399, USA (Microsoft Ireland Operations 
                    Limited für den EU-Raum).
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Microsoft Copilot ist in verschiedene Microsoft-Produkte (Microsoft 365, Bing, 
                    Windows) integriert und unterstützt uns bei der Erstellung von Dokumenten, 
                    E-Mails, Präsentationen und bei der Informationsrecherche.
                  </p>
                  <p className="text-foreground/80">
                    Weitere Informationen:{' '}
                    <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </a>
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Anthropic Claude
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen Claude, einen KI-Dienst der Anthropic PBC, 548 Market St, PMB 90375, 
                    San Francisco, CA 94104-5401, USA.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Claude ist ein KI-Assistent, der uns bei der Textverarbeitung, Analyse und 
                    Kommunikation unterstützt. Bei der Nutzung können Eingabedaten an Server von 
                    Anthropic in den USA übertragen werden.
                  </p>
                  <p className="text-foreground/80">
                    Weitere Informationen:{' '}
                    <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      https://www.anthropic.com/privacy
                    </a>
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    KI-basierte Bildgenerierung
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen verschiedene KI-Dienste zur Bildgenerierung, darunter:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                    <li>DALL-E (OpenAI) – Bildgenerierung aus Textbeschreibungen</li>
                    <li>Midjourney – KI-gestützte Bildkreation</li>
                    <li>Adobe Firefly – generative KI für Grafiken und Bilder</li>
                    <li>Stable Diffusion – Open-Source-Bildgenerierung</li>
                  </ul>
                  <p className="text-foreground/80 mb-4">
                    Diese Dienste werden zur Erstellung von Grafiken, Illustrationen und 
                    Marketing-Materialien eingesetzt. Bei der Nutzung werden Textbeschreibungen 
                    (Prompts) an die jeweiligen Server übertragen.
                  </p>
                  <p className="text-foreground/80">
                    Wir achten darauf, keine personenbezogenen Daten oder urheberrechtlich 
                    geschützte Inhalte als Eingabe für die Bildgenerierung zu verwenden.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    KI-gestützte Transkription und Spracherkennung
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen KI-Dienste zur automatischen Transkription von Audio- und 
                    Videoinhalten, darunter OpenAI Whisper und vergleichbare Dienste. Diese 
                    werden eingesetzt, um Besprechungen, Interviews oder Vorträge in Textform 
                    zu überführen.
                  </p>
                  <p className="text-foreground/80">
                    Bei der Transkription von Gesprächen mit externen Teilnehmern holen wir 
                    vorab deren Einwilligung ein.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Ihre Rechte bei KI-Verarbeitung
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Bei der Verarbeitung Ihrer personenbezogenen Daten durch KI-Dienste haben 
                    Sie folgende Rechte:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-1">
                    <li>Auskunftsrecht über die Verarbeitung Ihrer Daten durch KI-Systeme</li>
                    <li>Widerspruchsrecht gegen automatisierte Entscheidungsfindung (Art. 22 DSGVO)</li>
                    <li>Recht auf menschliche Überprüfung bei automatisierten Entscheidungen</li>
                    <li>Widerrufsrecht bei erteilten Einwilligungen</li>
                  </ul>
                  <p className="text-foreground/80">
                    Wir treffen keine rechtlich bindenden oder ähnlich erheblich beeinträchtigenden 
                    Entscheidungen ausschließlich auf Basis automatisierter Verarbeitung, es sei 
                    denn, dies ist zur Vertragserfüllung erforderlich oder Sie haben ausdrücklich 
                    eingewilligt.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    7. Plugins und Tools
                  </h2>
                  
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Google Fonts (lokales Hosting)
                  </h3>
                  <p className="text-foreground/80">
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google 
                    Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. 
                    Eine Verbindung zu Servern von Google findet dabei nicht statt.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Google Maps
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die 
                    Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu 
                    speichern. Diese Informationen werden in der Regel an einen Server von Google in 
                    den USA übertragen und dort gespeichert.
                  </p>
                  <p className="text-foreground/80">
                    Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung 
                    unserer Online-Angebote und einer leichten Auffindbarkeit der von uns auf der 
                    Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von 
                    Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt 
                    wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 
                    lit. a DSGVO.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    Google reCAPTCHA
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Wir nutzen „Google reCAPTCHA" (im Folgenden „reCAPTCHA") auf dieser Website. 
                    Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, 
                    Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website 
                    (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes 
                    Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers 
                    anhand verschiedener Merkmale.
                  </p>
                  <p className="text-foreground/80">
                    Die Nutzung von reCAPTCHA erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                    Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor 
                    missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3 mt-6">
                    YouTube
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die 
                    Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird 
                    eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server 
                    mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account 
                    eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen 
                    Profil zuzuordnen.
                  </p>
                  <p className="text-foreground/80">
                    Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer 
                    Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 
                    lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt 
                    die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6 mt-8">
                  <p className="text-sm text-foreground/60">
                    <strong>Stand:</strong> Februar 2026
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
