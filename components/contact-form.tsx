"use client";

import { useState, FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  firma: string;
  branche: string;
  vorname: string;
  nachname: string;
  strasse: string;
  plz: string;
  ort: string;
  land: string;
  email: string;
  telefon: string;
  anliegen: string;
  // Honeypot field - should remain empty
  website: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firma: "",
    branche: "",
    vorname: "",
    nachname: "",
    strasse: "",
    plz: "",
    ort: "",
    land: "Deutschland",
    email: "",
    telefon: "",
    anliegen: "",
    website: "", // Honeypot
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [anliegenLength, setAnliegenLength] = useState(0);

  const submitContactForm = useMutation(api.contacts.submitContactForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (name === "anliegen") {
      setAnliegenLength(value.length);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      console.log("Honeypot triggered - spam detected");
      // Pretend success to not alert the bot
      setStatus("success");
      return;
    }

    // Validate minimum characters for anliegen
    if (formData.anliegen.length < 100) {
      alert("Bitte formulieren Sie Ihr Anliegen mit mindestens 100 Zeichen.");
      return;
    }

    setStatus("submitting");
    console.log("Form submitted:", formData);

    try {
      await submitContactForm({
        firma: formData.firma,
        branche: formData.branche,
        vorname: formData.vorname,
        nachname: formData.nachname,
        strasse: formData.strasse,
        plz: formData.plz,
        ort: formData.ort,
        land: formData.land,
        email: formData.email,
        telefon: formData.telefon,
        anliegen: formData.anliegen,
      });

      console.log("Contact form submitted successfully with email notification");
      setStatus("success");
      
      // Reset form
      setFormData({
        firma: "",
        branche: "",
        vorname: "",
        nachname: "",
        strasse: "",
        plz: "",
        ort: "",
        land: "Deutschland",
        email: "",
        telefon: "",
        anliegen: "",
        website: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card className="bg-white/10 backdrop-blur border-white/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Vielen Dank für Ihre Anfrage!
          </h3>
          <p className="text-white/80">
            Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.
          </p>
          <Button
            onClick={() => setStatus("idle")}
            variant="outline"
            className="mt-6 border-white/30 text-white hover:bg-white/10"
          >
            Neue Anfrage stellen
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 backdrop-blur border-white/20">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          {/* Honeypot field - hidden from users, visible to bots */}
          <div 
            className="hidden" 
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
          >
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Company Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firma" className="text-white">
                Firma <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="firma"
                name="firma"
                value={formData.firma}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="Ihre Firma"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="branche" className="text-white">
                Branche <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="branche"
                name="branche"
                value={formData.branche}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="z.B. Gastronomie, Tech, Food Service"
              />
            </div>
          </div>

          {/* Contact Person */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vorname" className="text-white">
                Vorname <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="vorname"
                name="vorname"
                value={formData.vorname}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="Ihr Vorname"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nachname" className="text-white">
                Nachname <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="nachname"
                name="nachname"
                value={formData.nachname}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="Ihr Nachname"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="strasse" className="text-white">
              Straße und Hausnummer <span className="text-red-400">*</span>
            </Label>
            <Input
              type="text"
              id="strasse"
              name="strasse"
              value={formData.strasse}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
              placeholder="Musterstraße 123"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="plz" className="text-white">
                PLZ <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="plz"
                name="plz"
                value={formData.plz}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="12345"
              />
            </div>
            <div className="space-y-2 col-span-1 sm:col-span-2">
              <Label htmlFor="ort" className="text-white">
                Ort <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="ort"
                name="ort"
                value={formData.ort}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="Stadt"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="land" className="text-white">
                Land <span className="text-red-400">*</span>
              </Label>
              <Input
                type="text"
                id="land"
                name="land"
                value={formData.land}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="Deutschland"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                E-Mail Adresse <span className="text-red-400">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="ihre@email.de"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefon" className="text-white">
                Telefonnummer <span className="text-red-400">*</span>
              </Label>
              <Input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary"
                placeholder="+49 123 456789"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="anliegen" className="text-white">
              Bitte formulieren Sie Ihr Anliegen bzw. Ihr Interesse{" "}
              <span className="text-red-400">*</span>
            </Label>
            <Textarea
              id="anliegen"
              name="anliegen"
              value={formData.anliegen}
              onChange={handleChange}
              required
              minLength={100}
              rows={5}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-secondary resize-none"
              placeholder="Beschreiben Sie Ihr Anliegen ausführlich (mindestens 100 Zeichen)..."
            />
            <div className="flex justify-between text-sm">
              <span className={`${anliegenLength < 100 ? "text-red-400" : "text-green-400"}`}>
                {anliegenLength}/100 Zeichen (Minimum)
              </span>
              {anliegenLength >= 100 && (
                <span className="text-green-400 flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Minimum erreicht
                </span>
              )}
            </div>
          </div>

          {/* Error Message */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === "submitting" || anliegenLength < 100}
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-white disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Anfrage absenden
              </>
            )}
          </Button>

          <p className="text-xs text-white/60 text-center">
            Mit dem Absenden stimmen Sie unserer{" "}
            <a href="/datenschutz" className="underline hover:text-white">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
