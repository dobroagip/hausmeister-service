import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Check, 
  ArrowRight, 
  Shield, 
  Users, 
  Wrench, 
  Thermometer, 
  Building2, 
  Trees, 
  CloudSnow 
} from 'lucide-react';

interface CityLandingPageProps {
  cityKey: 'bad-erlach' | 'neunkirchen' | 'ternitz' | 'wiener-neustadt';
  onNavigate: (tabId: string) => void;
  onPrefillAngebot: (adressePrefill: string, servicePrefill: string) => void;
}

interface CityData {
  name: string;
  district: string;
  region: string;
  postalCode: string;
  introTitle: string;
  introText: string;
  heroTagline: string;
  specialityTitle: string;
  specialityText: string;
  specialityIcon: React.ReactNode;
  localStats: {
    residents: string;
    responseTime: string;
    contracts: string;
    winterStVO: string;
  };
  features: string[];
}

const cityContentMap: Record<'bad-erlach' | 'neunkirchen' | 'ternitz' | 'wiener-neustadt', CityData> = {
  'bad-erlach': {
    name: 'Bad Erlach',
    district: 'Wiener Neustadt-Land',
    region: 'Thermenregion / Industrieviertel',
    postalCode: '2822',
    heroTagline: 'Ihr erstklassiger Partner für anspruchsvolle Liegenschaftsbetreuung und Gartenpflege in der Thermengemeinde.',
    introTitle: 'Hausbetreuung mit Herz und Verstand in Bad Erlach',
    introText: 'Als renommierte Kur- und Thermengemeinde legt Bad Erlach gesteigerten Wert auf gepflegte Immobilien, einladende Außenanlagen und makellose Sauberkeit. Unser regionaler Hausmeisterservice bietet Genossenschaften, Hausverwaltungen und privaten Eigentümern erstklassige Stiegenhausreinigung, präzise Grünanlagenpflege und verlässlichen Winterdienst nach strengen Qualitätsstandards.',
    specialityTitle: 'Fokus auf Gartenpflege & Thermen-Standard',
    specialityText: 'Bad Erlach zeichnet sich durch naturnahe Ästhetik aus. Unsere geschulten Gärtner übernehmen die fachgerechte Rasenpflege, den Hecken- und Strauchschnitt sowie die ökologische Unkrautbeseitigung, passend zum idyllischen Charakter des Ortes.',
    specialityIcon: <Trees className="h-6 w-6 text-emerald-500" />,
    localStats: {
      residents: 'ca. 3.200 Einwohner',
      responseTime: 'ca. 35 Minuten',
      contracts: '25+ betreute Objekte',
      winterStVO: 'Volle Haftung nach § 93 StVO',
    },
    features: [
      'Glanzgarantie für Stiegenhäuser und Wellnessbereiche',
      'Ökologische Gartenpflege und Rasenmähservice',
      'Winterdienst mit 24/7 Rufbereitschaft (Nov. - April)',
      'Technische Kontrollen & Leuchtmitteltausch',
      'Direkte WKO-zertifizierte Verrechnung',
    ]
  },
  'neunkirchen': {
    name: 'Neunkirchen',
    district: 'Bezirk Neunkirchen (Bezirkshauptstadt)',
    region: 'Industrieviertel',
    postalCode: '2620',
    heroTagline: 'Professionelle Hausverwaltungsservices, regelmäßige Unterhaltsreinigung und verlässliche Haustechnik in der Bezirkshauptstadt.',
    introTitle: 'Liegenschaftsbetreuung für den Wirtschafts- und Wohnstandort Neunkirchen',
    introText: 'Als pulsierende Bezirkshauptstadt verbindet Neunkirchen Gewerbeflächen, historische Wohnsubstanz und moderne Wohnhausanlagen. Unser professioneller Hausmeisterpool in Neunkirchen sichert Werterhalt, Sauberkeit und absolute Rechtssicherheit. Vom klassischen Kehrdienst bis hin zur technisch anspruchsvollen Haustechnik-Überwachung sind wir Ihr Partner vor Ort.',
    specialityTitle: 'Liegenschaftsbetreuung für Gewerbe & Wohnen',
    specialityText: 'Neunkirchens urbane Struktur erfordert passgenaue Konzepte. Wir reinigen Büros, Ordinationen und Stiegenhäuser im Wunschintervall und garantieren ein repräsentatives Erscheinungsbild für Kunden und Bewohner.',
    specialityIcon: <Building2 className="h-6 w-6 text-emerald-500" />,
    localStats: {
      residents: 'ca. 12.800 Einwohner',
      responseTime: 'ca. 30 Minuten',
      contracts: '45+ betreute Objekte',
      winterStVO: 'WKO-Zertifizierung Winterdienst',
    },
    features: [
      'Gewerbe- und Wohnhausreinigung im Turnus',
      'Müllbereitstellung & Müllraumreinigung',
      'Grünschnittentsorgung & Gehwegreinigung',
      'Regelmäßige Zählerstandskontrollen',
      'Notdienst für technische Störungen',
    ]
  },
  'ternitz': {
    name: 'Ternitz',
    district: 'Bezirk Neunkirchen',
    region: 'Schwarzatal',
    postalCode: '2630',
    heroTagline: 'Ihr verlässlicher Hausmeisterbetrieb für Großwohnanlagen, Industriebetreuung und lückenlosen Winterdienst in Ternitz.',
    introTitle: 'Zuverlässigkeit auf Groß- und Kleinflächen in Ternitz',
    introText: 'Als größte Stadt des Bezirks Neunkirchen vereint Ternitz weite Siedlungsräume und bedeutende Industriebetriebe. Unser Hausmeisterservice ist perfekt auf die Pflege weitläufiger Parkflächen, die Wartungsverantwortung großer genossenschaftlicher Wohnanlagen sowie den dichten Winterdienst-Einsatz eingestellt. Wir sorgen für Ordnung und Sicherheit an 365 Tagen im Jahr.',
    specialityTitle: 'Erfahren im Winter- und Außenbereichendienst',
    specialityText: 'In Ternitz verwalten wir anspruchsvolle Liegenschaften mit lückenloser Abdeckung. Unser Team räumt und streut Gehsteige, Parkplätze und Zufahrten zeitnah und lückenlos gem. § 93 österreichischer StVO.',
    specialityIcon: <CloudSnow className="h-6 w-6 text-emerald-500" />,
    localStats: {
      residents: 'ca. 14.700 Einwohner',
      responseTime: 'ca. 30 Minuten',
      contracts: '38+ betreute Objekte',
      winterStVO: 'Haftungsübernahme garantiert',
    },
    features: [
      'Lückenloser Winterdienst bei Eis- und Schneefall',
      'Großflächenmahd und Wildkrautbeseitigung',
      'Instandsetzungs- und handwerkliche Kleinreparaturen',
      'Kehrdienst für Parkplätze und Tiefgaragen',
      'Persönlicher Ansprechpartner für Hausverwaltungen',
    ]
  },
  'wiener-neustadt': {
    name: 'Wiener Neustadt',
    district: 'Statutarstadt Wiener Neustadt',
    region: 'Industrieviertel / Steinfeld',
    postalCode: '2700',
    heroTagline: 'Der führende Hausmeisterservice in Wiener Neustadt für erstklassige Objektbetreuung, Stiegenhausglanz und gesetzkonformen Winterdienst.',
    introTitle: 'Ihr Meisterbetrieb für Hausbetreuung in Wiener Neustadt',
    introText: 'Wiener Neustadt ist als rasant wachsende Bildungs- und Wirtschaftsmetropole ein Hotspot für erstklassige Immobilienprojekte. Unser zertifizierter Hausmeisterservice bietet das gesamte Spektrum des Facility Managements: von exklusiver Stiegenhaus-Unterhaltsreinigung über gründliche Haustechnikprüfung bis hin zum reaktionsschnellen Winterdienst. Sichern Sie den Wert Ihrer Wiener Neustädter Liegenschaft dauerhaft ab.',
    specialityTitle: 'Zertifizierter Notdienst & Objektkontrolle',
    specialityText: 'Mit unseren mobilen Einheiten in Wiener Neustadt sind wir rund um die Uhr einsatzbereit. Wir protokollieren Mängel digital, koordinieren Fremdfirmen und beheben Kleinschäden sofort unbürokratisch vor Ort.',
    specialityIcon: <Wrench className="h-6 w-6 text-emerald-500" />,
    localStats: {
      residents: 'ca. 48.000 Einwohner',
      responseTime: 'ca. 20 Minuten',
      contracts: '72+ betreute Objekte',
      winterStVO: 'Normkonformer Premiumdienst',
    },
    features: [
      '24/7 technischer Havariedienst vor Ort',
      'Fassaden- und Glasreinigung mit modernem Equipment',
      'Strikter Gehweg-Winterdienst nach § 93 StVO',
      'Grünflächenpflege inkl. Baumschnitt im Frühjahr/Herbst',
      'Transparente Leistungsberichte per E-Mail',
    ]
  }
};

export default function CityLandingPage({ cityKey, onNavigate, onPrefillAngebot }: CityLandingPageProps) {
  const data = cityContentMap[cityKey] || cityContentMap['wiener-neustadt'];

  const handleRequestQuote = () => {
    const prefillAddress = `${data.postalCode} ${data.name}`;
    const prefillService = 'Hausbetreuung & Caretaker-Komplettservice';
    onPrefillAngebot(prefillAddress, prefillService);
  };

  return (
    <div className="bg-white font-sans text-slate-800" id={`city-${cityKey}-page`}>
      
      {/* 1. Regional Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-slate-950 overflow-hidden py-16 sm:py-24">
        {/* Abstract Dark Overlay Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40 z-10"></div>
          <div className="absolute inset-0 bg-grid-white/[0.03] z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
              <MapPin className="h-3 w-3" />
              Regionaler Service für {data.name}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Hausmeisterservice & Hausbetreuung <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                in {data.name} ({data.postalCode})
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
              {data.heroTagline}
            </p>

            {/* Quick Regional Badges */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                 Bezirk: {data.district}
              </span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                 Region: {data.region}
              </span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                ✓ WKO-Meisterbetrieb
              </span>
            </div>

            {/* Call To Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleRequestQuote}
                className="bg-gradient-to-r from-blue-700 to-emerald-600 hover:from-blue-800 hover:to-emerald-700 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/10 active:scale-98 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                Kostenloses Angebot erhalten
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-7 py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all text-center"
              >
                Rückruf anfordern
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Stats in Location */}
      <section className="bg-slate-50 border-b border-slate-100 py-8 relative z-20 -mt-10 max-w-5xl mx-auto rounded-3xl shadow-xl shadow-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border">
        <div>
          <div className="text-xl font-extrabold text-blue-700">{data.localStats.residents}</div>
          <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Einzugsgebiet</p>
        </div>
        <div>
          <div className="text-xl font-extrabold text-emerald-600">{data.localStats.responseTime}</div>
          <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Einsatzverzögerung</p>
        </div>
        <div>
          <div className="text-xl font-extrabold text-blue-700">{data.localStats.contracts}</div>
          <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">In Dauerbetreuung</p>
        </div>
        <div>
          <div className="text-xl font-extrabold text-emerald-600">§ 93 StVO Österr.</div>
          <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">{data.localStats.winterStVO}</p>
        </div>
      </section>

      {/* 3. Detailed Local Pitch */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase">
                Zuverlässige Hausbetreuung vor Ort
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {data.introTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.introText}
              </p>

              {/* Speciality Box */}
              <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex gap-4 items-start">
                <div className="p-3 bg-white rounded-xl text-emerald-600 shadow-sm shrink-0 border border-emerald-50">
                  {data.specialityIcon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{data.specialityTitle}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    {data.specialityText}
                  </p>
                </div>
              </div>

              {/* Local Contact Info Block */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> DSGVO konform
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-600" /> 24h Havariedienst unter +43 (1) 234 567 89
                </span>
              </div>
            </div>

            {/* Right Column: Key Features Checklist & Map Outline */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-900/5 border border-slate-800">
              <div className="space-y-1">
                <h3 className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  Unser Leistungsangebot in {data.name}
                </h3>
                <p className="text-slate-300 text-sm font-bold">Alles aus einer kompetenten Hand:</p>
              </div>

              <div className="space-y-3.5">
                {data.features.map((feat, index) => (
                  <div key={index} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-[11px] text-slate-400 leading-normal">
                  Sichern Sie sich ein unverbindliches Erstgespräch. Unsere regionalen Mitarbeiter besichtigen Ihre Liegenschaft in {data.name} zeitnah und erstellen ein transparentes Fixpreis-Angebot.
                </p>
                
                <button
                  onClick={handleRequestQuote}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  Individuelle Anfrage starten
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Austrian Winter Service Section (§ 93 StVO) */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
            Rechtssicherheit in Niederösterreich
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Schneeräumung & Winterdienst nach § 93 StVO in {data.name}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Als Hauseigentümer, Wohnungsgenossenschaft oder Hausverwaltung tragen Sie die strenge zivil- und strafrechtliche Verantwortung für die gefahrlose Begehbarkeit der angrenzenden Gehsteige. Bei Beauftragung unseres Winterdienstes übertragen Sie dieses Haftungsrisiko vollständig auf uns.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
              <span className="text-blue-600 text-lg font-black block">100% Haftung</span>
              <p className="text-xs text-slate-500">Wir übernehmen die volle rechtliche Haftung im Schadensfall gemäß den Bestimmungen des österreichischen Gesetzgebers.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
              <span className="text-blue-600 text-lg font-black block">GPS-Überwachung</span>
              <p className="text-xs text-slate-500">Sämtliche Streu- und Räumeinsätze werden digital mit Uhrzeit und GPS-Daten lückenlos protokolliert und archiviert.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
              <span className="text-blue-600 text-lg font-black block">24h Überwachung</span>
              <p className="text-xs text-slate-500">Unsere Wetter-Zentrale beobachtet die Wetterlage rund um {data.name} u. schickt unsere Räum-Flotte bereits vor dem Schneefall los.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer-like CTA Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sichern Sie sich Ihr Angebot für {data.name} ({data.postalCode})
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Ob kurzfristige Stiegenhausreinigung, lückenloser Winterdienst oder komplette Liegenschaftspflege – rufen Sie uns direkt an oder füllen Sie das Kontaktformular aus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+43123456789"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-750 text-emerald-400 font-bold px-6 py-3 rounded-xl border border-slate-700 font-mono text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              +43 (1) 234 567 89
            </a>
            
            <button
              onClick={handleRequestQuote}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-1"
            >
              Online-Angebotsformular öffnen
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
