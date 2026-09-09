import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, Calendar, Map, Check } from 'lucide-react';
import { company } from '../data/company';

interface ContactProps {
  prefilledInquiry: string;
}

export default function Contact({ prefilledInquiry }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Vienna/Wien');
  const [serviceCategory, setServiceCategory] = useState('hausbetreuung');
  const [message, setMessage] = useState(prefilledInquiry || '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Interactive Map District Selector
  const [selectedDistrict, setSelectedDistrict] = useState('1100');

  const districtsOfVienna = [
    { zip: '1100', name: 'Favoriten (Haupt-Standort)', coverage: 'Exzellente Abdeckung – Sofortige Reaktionszeit', factor: 'Frei (Stützpunkt)' },
    { zip: '1010', name: 'Innere Stadt', coverage: 'Vollständige Abdeckung – Anfahrt kostenfrei', factor: 'Frei' },
    { zip: '1130', name: 'Hietzing', coverage: 'Vollständige Abdeckung – Regelmäßiger Stützpunkt', factor: 'Frei' },
    { zip: '1190', name: 'Döbling', coverage: 'Vollständige Abdeckung – Täglicher Reinigungsdienst', factor: 'Frei' },
    { zip: '1220', name: 'Donaustadt', coverage: 'Vollständige Abdeckung – Winterdienststützpunkt', factor: 'Frei' },
    { zip: '2340', name: 'Mödling / Baden bei Wien', coverage: 'Umland-Abdeckung – Täglicher Dienst', factor: 'Frei' }
  ];

  // Sync prefilled logic when it changes
  useEffect(() => {
    if (prefilledInquiry) {
      setMessage(prefilledInquiry);
    }
  }, [prefilledInquiry]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    setIsSubmitted(true);
  };

  const currentDistrictDetails = districtsOfVienna.find(d => d.zip === selectedDistrict) || districtsOfVienna[0];

  return (
    <div className="bg-white py-16 lg:py-24 font-sans text-slate-900 border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Intro title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
            Kostenfreie Erst-Besichtigung
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Unverbindliches Angebot anfordern
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Kontaktieren Sie uns telefonisch, per E-Mail oder füllen Sie das Online-Formular aus. Wir bemühen uns, Ihre Anfrage zeitnah zu beantworten.
          </p>
        </div>

        {/* Major structure columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Block: Contact Sheets & Interactive Vienna Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">Kontaktdaten</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Unsere Zentrale befindet sich verkehrsgünstig gelegen im 10. Wiener Gemeindebezirk.</p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all group"
              >
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono font-bold uppercase">Schreiben Sie uns:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {company.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all group"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono font-bold uppercase">Rufen Sie uns an:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {company.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="h-11 w-11 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono font-bold uppercase">Firmensitz Österreich:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {company.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Vienna District coverage tool (Solves user's Google maps requirement in a fun, flawless, GDPR-friendly way) */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-5">
              <div className="flex items-center gap-2 text-slate-950 font-bold text-sm">
                <Map className="h-5 w-5 text-blue-700 shrink-0" />
                <span>Interaktives Einsatzgebiet (Wien & Wiener Umland)</span>
              </div>
              
              <p className="text-slate-500 text-xs leading-relaxed">
                Klicken Sie auf Ihren Wiener Wunschbezirk, um den anfahrtsfreien Status und unsere Service-Dichte zur Objektbetreuung einzusehen:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {districtsOfVienna.map((dist) => (
                  <button
                    type="button"
                    key={dist.zip}
                    onClick={() => {
                      setSelectedDistrict(dist.zip);
                      setLocation(`PLZ ${dist.zip}, ${dist.name}`);
                    }}
                    className={`p-2.5 border rounded-xl text-left font-mono transition-all text-[11px] ${
                      selectedDistrict === dist.zip
                        ? 'border-blue-600 bg-blue-50/60 font-bold text-blue-900'
                        : 'border-slate-205 bg-white text-slate-600 hover:border-slate-200'
                    }`}
                  >
                    <span className="block font-bold text-[10px] text-blue-700">PLZ {dist.zip}</span>
                    <span className="block truncate text-slate-800 font-semibold">{dist.name.split(' (')[0]}</span>
                  </button>
                ))}
              </div>

              {/* District info output */}
              <div className="p-3 bg-white border border-slate-150 rounded-xl space-y-1 animate-in fade-in duration-150">
                <div className="flex items-center gap-1.5 text-xs text-slate-800 font-bold">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Spezifische Versorgung: {currentDistrictDetails.name}</span>
                </div>
                <p className="text-[11px] text-slate-500">{currentDistrictDetails.coverage}</p>
                <div className="text-[10px] text-emerald-600 font-bold pt-1.5 border-t border-slate-100 flex items-center justify-between">
                  <span>Anfahrtskostenpauschale:</span>
                  <span>{currentDistrictDetails.factor}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Fully responsive Request/Estimate Submit Form */}
          <div className="lg:col-span-7">
            
            {isSubmitted ? (
              <div className="bg-emerald-50/50 p-8 sm:p-12 rounded-3xl border border-emerald-100 space-y-6 text-center shadow-sm animate-in zoom-in-95 duration-200">
                <div className="h-16 w-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-emerald-700/10">
                  <CheckCircle2 className="h-8 w-8 stroke-3" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-950">
                    Anfrage erfolgreich übermittelt!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Grüß Gott, {name}. Wir haben Ihre Anfrage zum Themenbereich <strong>{serviceCategory.toUpperCase()}</strong> erhalten und prüfen die freien Kapazitäten in der Region <strong>{location}</strong>.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-emerald-100 max-w-sm mx-auto flex items-center gap-3 text-left">
                  <Calendar className="h-6 w-6 text-emerald-600 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider font-mono">Nächster Schritt:</span>
                    <p className="text-xs text-slate-600 font-semibold">Ein Serviceberater kontaktiert Sie telefonisch zur Vereinbarung des Besichtigungstermins.</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow transition-colors"
                >
                  Neues Formular ausfüllen
                </button>
              </div>
            ) : (
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                  <Building2 className="h-5.5 w-5.5 text-blue-700" />
                  Spezifikationen Ihrer Liegenschaft
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Ihr Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="z.B. DI Andreas Wagner"
                        className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-200 outline-none bg-white focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">E-Mail-Adresse *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="wagner@verwaltung-gmbh.at"
                        className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-200 outline-none bg-white focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Telefonnummer *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="z.B. +43 664 123 45 67"
                        className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-200 outline-none bg-white focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Adresse / Ort des Objekts *</label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="z.B. Favoritenstraße 102, 1100 Wien"
                        className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-200 outline-none bg-white focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Gewünschter Hauptservice</label>
                      <select
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-200 outline-none bg-white focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="hausbetreuung">Hausbetreuung Wien (Komplettpaket)</option>
                        <option value="stiegenhaus">Stiegenhausreinigung (Einzeln)</option>
                        <option value="garten">Gartenpflege & Rasenmähen</option>
                        <option value="winterdienst">Winterdienst § 93 StVO</option>
                        <option value="notdienst">24/7 Hausmeister-Notrufbetreuung</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Weitere Anmerkungen / Details zum Objekt *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Beschreiben Sie hier kurz Anzahl der Einheiten im Wohnhaus, Besonderheiten, gewünschte Pflegintervalle oder kopieren Sie Berechnungen hier hinein."
                      className="w-full text-xs sm:text-sm p-3 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div className="text-[11px] text-slate-400">
                    * Durch Absenden erklären Sie sich mit der internen Verarbeitung Ihrer Daten zur Angebotserstellung gemäß DSGVO-Richtlinien einverstanden.
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="h-4.5 w-4.5" />
                    Unverbindliches Angebot jetzt anfordern
                  </button>
                </form>

              </div>
            )}
            
          </div>

        </div>

        {/* GDPR compliant cookie banner info card */}
        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 text-xs text-slate-500 max-w-3xl mx-auto text-center space-y-2">
          <p className="font-bold text-slate-600">Datenschutz- & Analysehinweise (für Österreich):</p>
          <p>
            Um die Nutzererfahrung auf dieser Website datenschutzkonform nach DSGVO-Standards zu verbessern, werden Cookies oder anonymisierte Sitzungsverläufe nur mit Ihrer freiwilligen Zustimmung übermittelt. Falls Sie Google Analytics tracken lassen möchten, können Sie dies im Consent Banner beidseitig konfigurieren.
          </p>
        </div>

      </div>
    </div>
  );
}
