import { useState, useRef } from 'react';
import { Shield, Clock, BadgeCheck, Users2, HelpCircle, PhoneCall, Check, ArrowRight, Star, HeartHandshake, Zap, Award, MessageCircle, Trees } from 'lucide-react';
import { company } from '../data/company';

interface HomeProps {
  onNavigate: (tabId: string) => void;
  onEmergencyClick: () => void;
}

export default function Home({ onNavigate, onEmergencyClick }: HomeProps) {
  const [activeAdvantage, setActiveAdvantage] = useState<string>('reaktionszeit');
  const detailCardRef = useRef<HTMLDivElement>(null);

  const handleAdvantageClick = (advantageId: string) => {
    setActiveAdvantage(advantageId);

    // Scroll detail card into view on mobile
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailCardRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 50);
    }
  };

  const heroHighlights = [
    { label: 'Winterdienst nach § 93 StVO' },
    { label: 'Gründliche Stiegenhaus- & Unterhaltsreinigung' },
    { label: 'Professioneller Hausmeisterservice', spanClassName: 'col-span-2 sm:col-span-1' },
  ];

  const advantages = [
    {
      id: 'reaktionszeit',
      title: 'schnelle Reaktionszeit',
      icon: <Clock className="h-5 w-5" />,
      tagline: 'Zeitnahe Hilfe bei dringenden Anliegen.',
      description: 'Wir reagieren schnell auf Ihre Anfrage und stimmen Termine zuverlässig mit Ihnen ab.'
    },
    {
      id: 'preise',
      title: 'faire Preise',
      icon: <Award className="h-5 w-5" />,
      tagline: 'Transparente Leistungsverträge ohne versteckte Nebenkosten.',
      description: 'Wir erstellen individuelle und transparente Angebote ohne versteckte Kosten. Unsere Preisgestaltung orientiert sich am tatsächlichen Bedarf Ihrer Immobilie.'
    },
    {
      id: 'service',
      title: 'zuverlässiger Service',
      icon: <BadgeCheck className="h-5 w-5" />,
      tagline: 'Vorschriftsmäßige Protokollierung aller Kontrollen und Arbeiten.',
      description: 'Erledigte Arbeiten werden digital erfasst und archiviert. Sie erhalten monatlich einen transparenten Tätigkeitsbericht für volle Budgetkontrolle.'
    },
    {
      id: 'betreuung',
      title: 'flexible Betreuung',
      icon: <Zap className="h-5 w-5" />,
      tagline: 'Anpassung von Reinigungs- und Kontrollrhythmen nach Bedarf.',
      description: 'Wir passen unsere Einsatzzeiten flexibel an aktuelle Gegebenheiten an – ob Wintereinbruch oder Sanierungsarbeiten.'
    },
    {
      id: 'ansprechpartner',
      title: 'persönliche Ansprechpartner',
      icon: <Users2 className="h-5 w-5" />,
      tagline: 'Ein fester technischer Betreuer für Ihre Wohnhausanlage.',
      description: 'Jedes Objekt erhält einen festen Objektleiter, der Ihre Liegenschaft kennt und Ihnen direkt zur Verfügung steht.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* Dynamic Hero Section with Generated BG Image */}
      <section className="relative min-h-145 lg:min-h-165 flex items-center bg-slate-950 overflow-hidden">
        {/* Absolute Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero-wien-building.webp" 
            alt="Moderne Wohnhausanlage in Österreich" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-95 scale-102 transition-all duration-700"
          />
          {/* Visual gradient mask overlays to ensure high-contrast readability */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-left">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
              <BadgeCheck className="h-3 w-3" />
              {company.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              {company.hero.title} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
                {company.hero.highlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
  {company.hero.description}
</p>

            {/* Info Point indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 text-xs sm:text-sm text-slate-200">
              {heroHighlights.map((item) => (
                <div key={item.label} className={`flex items-center gap-2 ${item.spanClassName ?? ''}`}>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-linear-to-r from-blue-700 to-emerald-600 hover:from-blue-800 hover:to-emerald-700 text-white font-extrabold text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/20 active:scale-98 transition-all hover:-translate-y-0.5"
              >
                Angebot anfordern
              </button>
              <a
                href={company.whatsapp ? `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo! Ich interessiere mich für Ihre Hausmeister-Services.')}` : '/contact'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!company.whatsapp) {
                    e.preventDefault();
                    onNavigate('contact');
                  }
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp schreiben
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Trust Stats Counters */}
      <section className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-700">{company.stats.experience.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">{company.stats.experience.label}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">{company.stats.service.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">{company.stats.service.label}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-700">{company.stats.quality.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">{company.stats.quality.label}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">{company.stats.support.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">{company.stats.support.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Block title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs antialiased">
              Unsere Kernleistungen
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kleinreparaturen, Montage & Hausbetreuung
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Praktische Hilfe für Haus, Wohnung und Objekt – zuverlässig und unkompliziert.
            </p>
          </div>

          {/* Quick Grids of highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Hausmeisterservice */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                Hausmeisterservice
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Kleine Reparaturen, Montagen und praktische Arbeiten rund um Haus, Wohnung und Objekt.
              </p>
              <button
  onClick={() => {
    sessionStorage.setItem('scrollToService', 'hausmeisterservice');
    onNavigate('services');
  }}
  className="text-blue-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
>
  Details ansehen
  <ArrowRight className="h-4 w-4" />
</button>
            </div>

            {/* Service 2: Gartenpflege */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Trees className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Gartenpflege
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Rasenmähen, Hecken- und Strauchschnitt sowie einfache Arbeiten rund um Garten und Grünflächen.
              </p>
              <button
  onClick={() => {
    sessionStorage.setItem('scrollToService', 'gartenpflege');
    onNavigate('services');
  }}
  className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
>
  Details ansehen
  <ArrowRight className="h-4 w-4" />
</button>
            </div>

            {/* Service 3: Winterdienst */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Winterdienst nach § 93 StVO
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Schneeräumung und Streudienst für Wege, Zugänge und Flächen rund um Ihre Immobilie.
              </p>
              <button
  onClick={() => {
    sessionStorage.setItem('scrollToService', 'winterdienst');
    onNavigate('services');
  }}
  className="text-blue-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
>
  Details ansehen
  <ArrowRight className="h-4 w-4" />
</button>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-sm py-4 px-8 rounded-xl border border-slate-200 inline-flex items-center gap-2 shadow-sm transition-all"
            >
              Alle 10 Serviceleistungen anzeigen
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Interactive Advantages Switcher Tabs (Requested section: Раздел преимуществ) */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Advantages selection list */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs block">
                Warum Hausmeister Service?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Unsere 5 Erfolgsfaktoren für Ihre Zufriedenheit
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Als inhabergeführtes Unternehmen legen wir großen Wert auf Zuverlässigkeit, Sorgfalt und persönliche Betreuung. Erfahren Sie mehr über unsere Arbeitsweise und unseren Service.
              </p>

              <div className="space-y-2.5">
                {advantages.map((adv) => (
                  <button
                    key={adv.id}
                    onClick={() => handleAdvantageClick(adv.id)}
                    className={`w-full text-left p-4 rounded-xl border font-bold text-sm flex items-center justify-between select-none transition-all ${
                      activeAdvantage === adv.id
                        ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/10'
                        : 'bg-white text-slate-700 border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={activeAdvantage === adv.id ? 'text-white' : 'text-slate-400'}>
                        {adv.icon}
                      </div>
                      <span className="uppercase tracking-wide text-xs sm:text-sm">{adv.title}</span>
                    </div>
                    <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${
                      activeAdvantage === adv.id ? 'translate-x-1 rotate-0' : '-rotate-45 text-slate-400'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Beautiful detailed view card of active advantage */}
            <div ref={detailCardRef} className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-linear-to-br from-emerald-50 to-blue-50 rounded-full blur-3xl opacity-60"></div>
              
              {(() => {
                const current = advantages.find(a => a.id === activeAdvantage) || advantages[0];
                return (
                  <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="inline-flex h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 items-center justify-center">
                      {current.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                        {current.title}
                      </h3>
                      <p className="text-emerald-600 font-bold text-base mt-2">
                        {current.tagline}
                      </p>
                    </div>

                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed pt-2 border-t border-slate-100">
                      {current.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5 pt-4">
                      <div className="flex items-center gap-1.5 bg-slate-50 text-slate-600 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-100">
                        <Check className="h-4 w-4 text-emerald-500" />
                        Zuverlässig
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 text-slate-600 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-100">
                        <Check className="h-4 w-4 text-emerald-500" />
                        In Ihrem Vertrag fixiert
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

          </div>

        </div>
      </section>

      {/* Emergency Call-out banner/promotion block (Hausmeister Notdienst) */}
      <section className="py-16 bg-linear-to-br from-rose-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-size-[24px_24px] z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/30 text-rose-400 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full animate-pulse">
                <span className="h-1.5 w-1.5 bg-rose-500 rounded-full"></span>
                Sonderrufnummer für Notfälle
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Hausmeister Notdienst Wien – 24/7
              </h2>
              <p className="text-rose-100/80 text-sm sm:text-base leading-relaxed">
                Wasserrohrbruch am Wochenende? Türschloss blockiert? Stromausfall im gesamten Stiegenhaus? Als vertraglicher Partner sind wir in ganz Wien innerhalb kürzester Zeit bei Ihnen vor Ort. 365 Tage im Jahr.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto text-center shrink-0">
              <a
                href={`tel:${company.phoneRaw}`}
                className="bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black text-base px-8 py-4.5 rounded-xl shadow-lg shadow-rose-900/30 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-5 w-5" />
                {company.emergency}
              </a>
              <button
                onClick={onEmergencyClick}
                className="bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-8 py-4.5 rounded-xl border border-white/20 backdrop-blur-md transition-colors"
                id="emergency-trigger-btn"
              >
                Notruf-Ablauf ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0 h-11 w-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Volle Versicherung</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Mit unserer Betriebshaftpflichtversicherung bis zu € 5 Mio. sind Sie bei eventuellen Schäden vollkommen freigestellt.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 h-11 w-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Handschlagqualität</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Langfristige Geschäftsbeziehungen resultieren aus gegenseitigem Vertrauen. Wir halten, was wir zusichern.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 h-11 w-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-1">Ausgezeichnete Qualität</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Unsere Services und Arbeitsabläufe entsprechen den strengsten Richtlinien der Wirtschaftskammer Österreichs (WKO).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
