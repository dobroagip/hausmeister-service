import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
  Clock,
} from 'lucide-react';
import { company } from '../data/company';

interface ContactProps {
  prefilledInquiry: string;
}

const services = [
  'Kleinreparaturen & Montagen',
  'Hausbetreuung & Objektservice',
  'Gartenpflege & Rasenmähen',
  'Winterdienst',
  'Sonstiges',
];

export default function Contact({ prefilledInquiry }: ContactProps) {
  const [name, setName] = useState('');
  const [kontakt, setKontakt] = useState('');
  const [location, setLocation] = useState('');
  const [serviceCategory, setServiceCategory] = useState(services[0]);
  const [message, setMessage] = useState(prefilledInquiry || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledInquiry) {
      setMessage(prefilledInquiry);
    }
  }, [prefilledInquiry]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !kontakt.trim() ||
      !location.trim() ||
      !message.trim()
    ) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    const text = `Hallo! Ich möchte eine Anfrage stellen.

Gewünschte Leistung:
${serviceCategory}

Ort der Arbeit:
${location}

Was soll gemacht werden:
${message}

Name:
${name}

Kontakt:
${kontakt}`;

   const whatsappUrl = `${company.whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setKontakt('');
    setLocation('');
    setServiceCategory(services[0]);
    setMessage(prefilledInquiry || '');
  };

  const handlePrefilledInquiryChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };

  return (
    <div
      id="kontakt-page"
      className="bg-white py-12 sm:py-16 lg:py-24 font-sans text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Kontakt & Anfrage
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Kontakt aufnehmen
          </h1>

          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Sie haben eine Frage oder benötigen Unterstützung bei einer
            Arbeit rund um Haus und Immobilie? Schreiben Sie uns kurz,
            was gemacht werden soll. Wir melden uns mit einer Rückmeldung
            und den nächsten Schritten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Contact information */}
          <div className="lg:col-span-5 space-y-6">

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Persönlicher Kontakt
              </h2>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Direkter Kontakt zum Ansprechpartner. Schreiben Sie uns
                per E-Mail oder WhatsApp oder senden Sie Ihre Anfrage
                über das Formular.
              </p>
            </div>

            <div className="space-y-3">

              {/* Email */}
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/40 transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <span className="text-xs text-slate-400 block font-bold uppercase tracking-wide">
                    E-Mail
                  </span>

                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors break-all">
                    {company.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/40 transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-bold uppercase tracking-wide">
                    Telefon
                  </span>

                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {company.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
               href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-bold uppercase tracking-wide">
                    WhatsApp
                  </span>

                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Nachricht senden
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="h-11 w-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <span className="text-xs text-slate-400 block font-bold uppercase tracking-wide">
                    Standort
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {company.address}
                  </span>
                </div>
              </div>

            </div>

            {/* Service area */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Einsatzgebiet
                  </h3>

                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Bad Erlach, Wiener Neustadt und Umgebung sowie weitere
                    Orte in Niederösterreich und Wien nach Absprache.
                  </p>
                </div>
              </div>
            </div>

            {/* Response */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-white text-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Anfrage & Rückmeldung
                  </h3>

                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Sie senden uns Ihre Anfrage. Wir prüfen die Angaben
                    und melden uns mit einer Rückmeldung und den nächsten
                    Schritten.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">

            {isSubmitted ? (
              <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-8 sm:p-12 text-center">

                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Anfrage vorbereitet
                </h2>

                <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Ihre Anfrage wurde an WhatsApp übergeben. Wenn sich
                  WhatsApp nicht automatisch geöffnet hat, können Sie uns
                  auch direkt per E-Mail kontaktieren.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp öffnen
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-3 rounded-xl border border-slate-200 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    E-Mail schreiben
                  </a>

                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
                >
                  Neue Anfrage senden
                </button>

              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">

                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Ihre Anfrage
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Bitte geben Sie uns kurz die wichtigsten Informationen.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2"
                    >
                      Ihr Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Vor- und Nachname"
                      className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label
                      htmlFor="kontakt"
                      className="block text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2"
                    >
                      Telefon oder E-Mail *
                    </label>

                    <input
                      id="kontakt"
                      type="text"
                      required
                      value={kontakt}
                      onChange={(e) => setKontakt(e.target.value)}
                      placeholder="+43 677 63460530 oder name@beispiel.at"
                      className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2"
                    >
                      Ort der Arbeit *
                    </label>

                    <input
                      id="location"
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="PLZ und Ort, z. B. 2822 Bad Erlach"
                      className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="serviceCategory"
                      className="block text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2"
                    >
                      Gewünschte Dienstleistung *
                    </label>

                    <select
                      id="serviceCategory"
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2"
                    >
                      Was soll gemacht werden? *
                    </label>

                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={message}
                      onChange={handlePrefilledInquiryChange}
                      placeholder="Beschreiben Sie kurz die gewünschte Arbeit, z. B. Reparatur, Montage, Hausbetreuung, Gartenarbeit oder Winterdienst."
                      className="w-full bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 rounded-xl px-4 py-3.5 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
                    >
                      <Send className="h-4 w-4" />
                      Anfrage senden
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 leading-relaxed">
                    Mit dem Absenden werden die von Ihnen eingegebenen
                    Angaben zur Bearbeitung Ihrer Anfrage verwendet.
                    Weitere Informationen finden Sie in unserer
                    Datenschutzerklärung.
                  </p>

                </form>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}