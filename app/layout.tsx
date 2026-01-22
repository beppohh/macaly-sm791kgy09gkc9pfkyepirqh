import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brehm Consulting - Unternehmensberatung für Sales & Marketing",
  description: "Strategisches Wachstum für Sales & Marketing im Außer-Haus-Markt. Wir begleiten StartUps und Mittelstandsunternehmen in Deutschland und der Schweiz zum nachhaltigen Erfolg.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning={true}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}