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
  kontakt: '',
  ort: prefilledAdresse,
  dienstleistung: prefilledDienstleistung || 'Hausbetreuung',
  nachricht: '',
});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledAdresse) {
      setFormData(prev => ({
        ...prev,
        ort: prefilledAdresse
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
  'Kleinreparaturen & Montagen',
  'Hausbetreuung & Objektservice',
  'Gartenpflege & Rasenmähen',
  'Winterdienst',
  'Sonstiges',
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
    if (!formData.kontakt.trim()) {
      newErrors.kontakt = 'Bitte geben Sie Ihre Telefonnummer oder E-Mail-Adresse an.';
    } else if (formData.kontakt.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.kontakt)) {
      newErrors.kontakt = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    if (!formData.ort.trim()) newErrors.ort = 'Bitte geben Sie die Objektadresse an.';
    if (!formData.nachricht.trim()) newErrors.nachricht = 'Bitte beschreiben Sie kurz Ihren Bedarf.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  const text = `Hallo! Ich möchte eine Anfrage stellen.

Leistung: ${formData.dienstleistung}
Ort: ${formData.ort}

Was soll gemacht werden:
${formData.nachricht}

Name: ${formData.name}
Kontakt: ${formData.kontakt}`;

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

  return (
    <div className="bg-slate-50 py-12 sm:py-16 md:py-24 font-sans text-slate-800" id="angebot-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Progress indicator or top note */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 bg-emerald-600 rounded-full animate-ping"></span>
            Anfrage & Angebot
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Angebot anfordern
          </h1>
          <p className="text-slate-550 text-sm sm:text-base max-w-2xl mx-auto">
          Beschreiben Sie kurz, welche Arbeiten Sie benötigen. Wir prüfen Ihre Anfrage und melden uns  bei Ihnen.
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
                Vielen Dank für Ihre Anfrage!
              </p>
              <p className="text-slate-500 text-xs sm:text-sm pt-2 leading-relaxed">
                Wir prüfen Ihre Angaben und melden uns  bei Ihnen. Gemeinsam besprechen wir die gewünschten Arbeiten und das weitere Vorgehen.
              </p>
            </div>

           <div className="border-t border-slate-100 pt-6 mt-4 flex items-center justify-center text-xs text-slate-400">
  <span className="flex items-center gap-1">
    <ShieldCheck className="h-4 w-4 text-emerald-600" />
    Vertrauliche Bearbeitung Ihrer Anfrage
  </span>
</div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  kontakt: '',
                  ort: prefilledAdresse,
                  dienstleistung: prefilledDienstleistung || 'Hausbetreuung',
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
                <p className="text-slate-400 text-xs"> Bitte geben Sie Ihre Kontaktdaten und kurz die gewünschten Arbeiten an.</p>
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

                {/* 2. Kontakt */}
                <div className="space-y-2">
                  <label htmlFor="kontakt" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Telefon oder E-Mail-Adresse *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="kontakt"
                      name="kontakt"
                      value={formData.kontakt}
                      onChange={handleChange}
                      placeholder="z.B. +43 664 123 4567 oder name@beispiel.at"
                      className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.kontakt ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.kontakt && <p className="text-xs font-medium text-rose-600">{errors.kontakt}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 3. Adresse */}
                <div className="space-y-2">
                  <label htmlFor="ort" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Objektadresse *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="ort"
                      name="ort"
                      value={formData.ort}
                      onChange={handleChange}
                      placeholder="Strasse, Hausnummer, PLZ und Ort"
                      className={`w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                        errors.ort ? 'border-rose-450 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.ort && <p className="text-xs font-medium text-rose-600">{errors.ort}</p>}
                </div>
              </div>

              <div>
                {/* 4. Dienstleistung */}
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

              </div>

              {/* 5. Nachricht */}
              <div className="space-y-2">
                <label htmlFor="nachricht" className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                  Was soll gemacht werden? *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  value={formData.nachricht}
                  onChange={handleChange}
                  placeholder="Beschreiben Sie kurz, welche Arbeiten Sie benötigen. Z.B. Reparatur, Montage, Hausbetreuung, Gartenarbeit oder Winterdienst."
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
                  Anfrage senden
                </button>
              </div>

              <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Ihre Angaben werden vertraulich behandelt.</span>
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
                      <strong className="text-slate-100 block"> Klare Absprachen</strong>
                      <span>Leistung, Umfang und Termin werden vor Beginn gemeinsam besprochen.</span>
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
                      <strong className="text-slate-100 block">Zuverlässige Arbeit</strong>
                      <span> Wir arbeiten sorgfältig</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800 text-[11px] text-slate-400">
                <p>
                  <strong>Haben Sie dringende Fragen?</strong><br />
                 Schreiben Sie uns gerne. Wir melden uns persönlich bei Ihnen:
                </p>
                {/* <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-750 text-emerald-400 font-bold p-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>{company.phone}</span>
                </a> */}
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
