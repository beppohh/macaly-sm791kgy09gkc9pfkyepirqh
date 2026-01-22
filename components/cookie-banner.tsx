"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "brehm-cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!consent) {
      setShowBanner(true);
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
    console.log("Cookie consent: accepted");
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
    console.log("Cookie consent: rejected");
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-4 shadow-lg md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          {/* Icon */}
          <div className="hidden shrink-0 md:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Cookie className="h-6 w-6 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Cookie-Einstellungen
            </h3>
            <p className="text-sm text-muted-foreground">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer 
              Website zu bieten. Einige Cookies sind für den Betrieb der Website 
              erforderlich, während andere uns helfen, die Website zu verbessern und 
              Ihnen personalisierte Inhalte anzuzeigen. Sie können Ihre Einwilligung 
              jederzeit widerrufen.{" "}
              <Link 
                href="/datenschutz" 
                className="text-secondary underline hover:text-secondary/80"
              >
                Mehr erfahren
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
            <Button
              variant="outline"
              onClick={handleReject}
              className="order-2 sm:order-1 md:order-2 lg:order-1"
            >
              Nur notwendige
            </Button>
            <Button
              onClick={handleAccept}
              className="order-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:order-2 md:order-1 lg:order-2"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
