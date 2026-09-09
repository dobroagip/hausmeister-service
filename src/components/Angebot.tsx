import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FileText, Send, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Building, Ruler, HelpCircle } from 'lucide-react';
import { company } from '../data/company';

interface AngebotProps {
  prefilledAdresse?: string;
  prefilledDienstleistung?: string;
}

export default function Angebot({ prefilledAdresse = '', prefilledDienstleistung = '' }: AngebotProps) {
  const [formData, setFormData] = useState({
    name: '',
    telefon: '',
    email: '',
    adresse: prefilledAdresse,
    dienstleistung: prefilledDienstleistung || 'Hausbetreuung & Caretaker-Komplettservice',
    objektgroesse: '',
    nachricht: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledAdresse) {
      setFormData(prev => ({

        ...prev,
        adresse: prefilledAdresse
      }));
    }
    if (prefilledDienstleistung) {
      setFormData(prev => ({
        ...prev,
        dienstleistung: prefilledDienstleistung
      }));
    }
  }, [prefilledAdresse, prefilledDienstleistung]);

  const servicesList = [
    'Hausbetreuung & Caretaker-Komplettservice',
    'Stiegenhausreinigung & Unterhaltsreinigung',
    'Winterdienst & Schneeräumung (§ 93 StVO Österreich)',
    'Gartenpflege, Rasenmähen & Grünanlagenpflege',
    'Sonderreinigung, Glas- und Fassadenreinigung',
    'Kleininstandsetzungen & technischer Notdienst',
    'Entrümpelung & Müllraumreinigung',
  ];

  const sizeOptions = [
    'Einfamilienhaus / Wohnhaus (< 150 m²)',
    'Kleines Wohnobjekt (3 - 10 Wohneinheiten)',
    'Mittleres Wohnobjekt (10 - 30 Wohneinheiten)',
    'Große Wohnanlage (> 30 Wohneinheiten)',
    'Gewerbeobjekt / Büro / Praxis',
    'Industriefläche / Sonstige Freifläche',
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen an.';
    if (!formData.telefon.trim()) newErrors.telefon = 'Bitte geben Sie Ihre Telefonnummer für Rückfragen an.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail-Adresse wird benötigt.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    if (!formData.adresse.trim()) newErrors.adresse = 'Bitte geben Sie die Objektadresse an.';
    if (!formData.objektgroesse.trim()) newErrors.objektgroesse = 'Bitte wählen oder beschreiben Sie die Objektgröße.';
    if (!formData.nachricht.trim()) newErrors.nachricht = 'Bitte beschreiben Sie kurz Ihren Bedarf.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-16 md:py-24 font-sans text-slate-800" id="angebot-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Progress indicator or top note */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 bg-emerald-600 rounded-full animate-ping"></span>
            Kostenfreie Angebotserstellung
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Individuelles Angebot anfordern
          </h1>
          <p className="text-slate-550 text-sm sm:text-base max-w-2xl mx-auto">
            Holen Sie sich ein maßgeschneidertes, unverbindliches Angebot für Ihr Objekt in Wien und Umgebung. Schnell, einfach und rechtssicher nach österreichischen WKO-Dienstleistungsstandards.
          </p>
        </div>

        {isSubmitted ? (
          /* Successful state */
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 p-8 sm:p-12 border border-slate-200/80 text-center space-y-6 animate-in zoom-in-95 duration-350 max-w-2xl mx-auto">
            <div className="h-20 w-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black shadow-inner">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Anfrage erfolgreich gesendet!
              </h2>
              <p className="text-emerald-700 font-bold bg-emerald-50/50 py-3 px-5 rounded-2xl border border-emerald-100 inline-block text-base sm:text-lg">
                Vielen Dank! Wir melden uns zeitnah bei Ihnen.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm pt-2 leading-relaxed">
                Unsere Objektexperten prüfen Ihre Angaben und bereiten einen ersten kostenlosen Entwurf oder schlagen einen unverbindlichen Kurzeit-Besichtigungstermin vor Ort in Wien vor.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> DSGVO compliant
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Anfrage-ID: {Math.floor(100000 + Math.random() * 900000)}</span>
              <span className="hidden sm:inline">•</span>
              <span>In Kooperation mit der WKO Österreich</span>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  telefon: '',
                  email: '',
                  adresse: '',
                  dienstleistung: 'Hausbetreuung komplett',
                  objektgroesse: '',
                  nachricht: '',
                });
              }}
              className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md inline-block text-sm"
            >
              Neue Anfrage senden
            </button>
          </div>
        ) : (
          /* Main Form Section */
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Form Fields: Major 8cols */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 md:col-span-8 space-y-6">
              
              <div className="space-y-1.5">
                <h2 className="text-xl font-bold text-slate-900">Objektangaben & Kontaktdaten</h2>
                <p className="text-slate-400 text-xs">Bitte füllen Sie das Formular aus, um ein maßgeschneidertes Angebot zu erhalten.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Name / Unternehmen *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="z.B. Max Mustermann, Hausverwaltung OG"
                      className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.name ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs font-medium text-rose-600">{errors.name}</p>}
                </div>

                {/* 2. Telefon */}
                <div className="space-y-2">
                  <label htmlFor="telefon" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Telefonnummer *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="z.B. +43 664 123 4567"
                      className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.telefon ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.telefon && <p className="text-xs font-medium text-rose-600">{errors.telefon}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 3. E-mail */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="z.B. name@beispiel.at"
                    className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.email ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-xs font-medium text-rose-600">{errors.email}</p>}
                </div>

                {/* 4. Adresse */}
                <div className="space-y-2">
                  <label htmlFor="adresse" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Objektadresse *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      placeholder="Strasse, Hausnummer, PLZ & Bezirk in Wien"
                      className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.adresse ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.adresse && <p className="text-xs font-medium text-rose-600">{errors.adresse}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 5. Dienstleistung */}
                <div className="space-y-2">
                  <label htmlFor="dienstleistung" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Gewünschte Dienstleistung *
                  </label>
                  <select
                    id="dienstleistung"
                    name="dienstleistung"
                    value={formData.dienstleistung}
                    onChange={handleChange}
                    className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    {servicesList.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Objektgröße */}
                <div className="space-y-2">
                  <label htmlFor="objektgroesse" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Objektgröße / Flächen *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="objektgroesse"
                      name="objektgroesse"
                      value={formData.objektgroesse}
                      onChange={handleChange}
                      list="objektgroesse-list"
                      placeholder="z.B. 12 Wohneinheiten, ca. 450 m²"
                      className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.objektgroesse ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                    <datalist id="objektgroesse-list">
                      {sizeOptions.map((opt, index) => (
                        <option key={index} value={opt} />
                      ))}
                    </datalist>
                  </div>
                  {errors.objektgroesse && <p className="text-xs font-medium text-rose-600">{errors.objektgroesse}</p>}
                </div>
              </div>

              {/* 7. Nachricht */}
              <div className="space-y-2">
                <label htmlFor="nachricht" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                  Besondere Anforderungen / Beschreibung *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  value={formData.nachricht}
                  onChange={handleChange}
                  placeholder="Beschreiben Sie hier Ihre Reinigungsintervalle, besondere Anforderungen an Grünpflege oder Winterdienst-Zonen."
                  className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    errors.nachricht ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                  }`}
                />
                {errors.nachricht && <p className="text-xs font-medium text-rose-600">{errors.nachricht}</p>}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Kostenloses Angebot anfordern
                </button>
              </div>

              <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Unerlässlich datenschutzkonform nach DSGVO & TKG 2021 Normen.</span>
              </div>

            </form>

            {/* Sidebar Guidelines/Info on Right: 4cols */}
            <div className="bg-slate-900 text-slate-350 p-6 sm:p-8 md:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 space-y-6">
              
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold tracking-wider uppercase text-emerald-400 font-mono">
                    Warum Hausmeister Service?
                  </h3>
                  <p className="text-xs text-slate-400">Unsere Qualitätsmerkmale:</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100 block">Haftungsübergang Winterdienst</strong>
                      <span>Volle rechtliche Verantwortung gemäß § 93 StVO Österreich.</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100 block">Transparentes Fixpauschale</strong>
                      <span>Keine versteckten Nebenkosten o. Wegpauschalen.</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100 block">Qualifizierte Fachkräfte</strong>
                      <span>Echte Wiener Gebäudereinigermeister u. Gärtner.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800 text-[11px] text-slate-400">
                <p>
                  <strong>Haben Sie dringende Fragen?</strong><br />
                  Rufen Sie direkt unsere Zentrale an:
                </p>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-750 text-emerald-400 font-bold p-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>{company.phone}</span>
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
