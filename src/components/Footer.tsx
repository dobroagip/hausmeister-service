import { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';
import { company } from '../data/company';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onEmergencyClick: () => void;
  onOpenLegalModal: (tabId: 'impressum' | 'datenschutz' | 'barrierefreiheit' | 'agb') => void;
}

export default function Footer({ setActiveTab, onEmergencyClick, onOpenLegalModal }: FooterProps) {
  const [showSeoDashboard, setShowSeoDashboard] = useState(false);
  const [showConfigDashboard, setShowConfigDashboard] = useState(false);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const keywords = [
    'Hausmeisterservice Wien',
    'Hausbetreuung Wien',
    'Hausmeister Wien',
    'Gebäudebetreuung Wien',
    'Gartenpflege Wien',
    'Winterdienst Wien',
    'Objektbetreuung Wien'
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Info and Badges */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Hausmeister <span className="text-emerald-500">Service</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Ihr zertifizierter Partner für die professionelle Objekt- und Gebäudebetreuung in Wien, Niederösterreich und dem gesamten Umland. Zuverlässige Services nach höchsten österreichischen Standards.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/50 p-2 rounded border border-slate-800">
                <Award className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Österreichischer Qualitätsbetrieb</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/50 p-2 rounded border border-slate-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Haftpflichtversichert bis € 5.000.000</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 pb-2 border-b border-slate-800">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-emerald-500 transition-colors">
                  Startseite
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-emerald-500 transition-colors">
                  Serviceleistungen 
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-emerald-500 transition-colors">
                  Über unser Unternehmen
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('references')} className="hover:text-emerald-500 transition-colors">
                  Kundenreferenzen
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-emerald-500 transition-colors">
                  Wissenswertes & Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-emerald-500 transition-colors">
                  Anfrage & Kontakt
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('angebot')} className="hover:text-emerald-500 transition-colors font-semibold text-emerald-400">
                  Angebot anfordern
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Notdienst */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 pb-2 border-b border-slate-800">
              Kontakt & Notdienst
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Favoritenstraße 102<br />
                  1100 Wien, Österreich
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={onEmergencyClick}
                  className="w-full flex items-center justify-center gap-1.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 hover:text-rose-300 font-semibold py-2 px-3 rounded-lg border border-rose-500/35 transition-colors text-xs"
                >
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                  Notdienst-Zentrale 24/7
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Service Area */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 pb-2 border-b border-slate-800">
              Öffnungszeiten
            </h3>
            <ul className="space-y-3.5 text-sm mb-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  <strong className="text-slate-200">Bürozeiten:</strong><br />
                  Montag – Freitag: 08:00 – 17:00 Uhr<br />
                  Samstag: 09:00 – 13:00 Uhr
                </span>
              </li>
              <li className="text-xs text-rose-400 flex items-center gap-1.5 font-medium">
                <span className="h-1.5 w-1.5 bg-rose-500 rounded-full"></span>
                Notdienst telefonisch immer erreichbar
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Niederösterreich-Standorte:</span>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <button onClick={() => handleNavClick('city-bad-erlach')} className="hover:text-emerald-400 text-slate-400 text-left transition-colors font-semibold">
                  • Bad Erlach (2822)
                </button>
                <button onClick={() => handleNavClick('city-neunkirchen')} className="hover:text-emerald-400 text-slate-400 text-left transition-colors font-semibold">
                  • Neunkirchen (2620)
                </button>
                <button onClick={() => handleNavClick('city-ternitz')} className="hover:text-emerald-400 text-slate-400 text-left transition-colors font-semibold">
                  • Ternitz (2630)
                </button>
                <button onClick={() => handleNavClick('city-wiener-neustadt')} className="hover:text-emerald-400 text-slate-400 text-left transition-colors font-semibold">
                  • Wiener Neustadt (2700)
                </button>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 text-xs">
              <button 
                onClick={() => setShowSeoDashboard(!showSeoDashboard)}
                className="text-[11px] text-blue-400 hover:underline bg-blue-900/10 hover:bg-blue-950/30 px-2.5 py-1 rounded border border-blue-900/40 transition-all font-mono"
              >
                {showSeoDashboard ? 'SEO-Tags ausblenden' : 'SEO-Keywords (Österreich)'}
              </button>
              <button 
                onClick={() => setShowConfigDashboard(!showConfigDashboard)}
                className="text-[11px] text-emerald-400 hover:underline bg-emerald-900/10 hover:bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-900/40 transition-all font-mono"
              >
                {showConfigDashboard ? 'Integrations ausblenden' : 'Google/Social Connections'}
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic SEO Information Panel */}
        {showSeoDashboard && (
          <div className="mb-8 p-5 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 text-xs font-mono animate-in fade-in duration-200">
            <h4 className="text-blue-400 font-bold mb-2.5 text-sm flex items-center gap-1.5">
              <span>●</span> Google Austria SEO Keyword Optimization Log:
            </h4>
            <p className="mb-3 text-slate-400">
              Die folgenden Suchbegriffe für die Wiener Region sind strukturell im HTML und im semantischen Page-Layout integriert worden:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {keywords.map((kw) => (
                <div key={kw} className="bg-slate-900 px-3 py-1.5 rounded border border-slate-800/80 text-blue-300">
                  ✓ {kw}
                </div>
              ))}
            </div>
            <p className="mt-3 text-slate-500 text-[11px]">
              Schema.org Typ: <strong>LocalBusiness & HomeAndConstructionBusiness</strong>. Meta Name: <code>Hausmeister Service Wien</code>.
            </p>
          </div>
        )}

        {/* Dynamic Integration Panel */}
        {showConfigDashboard && (
          <div className="mb-8 p-5 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 text-xs font-mono animate-in fade-in duration-200">
            <h4 className="text-emerald-400 font-bold mb-2.5 text-sm flex items-center gap-1.5">
              <span>●</span> Google Integration Console & Services:
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-white font-bold">1. Google Analytics (GA4):</span>
                <p className="text-slate-400 text-xs mt-0.5">
                  Die Website verfügt über vorbereitete Script-Hooks. Um die Tracking-ID zu hinterlegen, tragen Sie Ihre GA4 ID (z.B. <code className="text-emerald-300">G-XXXXXXXXXX</code>) einfach in die `.env` Datei als <code className="text-emerald-300">VITE_GOOGLE_ANALYTICS_ID</code> ein.
                </p>
              </div>
              <div>
                <span className="text-white font-bold">2. Google Business Profile & Maps:</span>
                <p className="text-slate-400 text-xs mt-0.5">
                  Ermöglicht den direkten Sync Ihrer Kundenrezensionen und Unternehmensfotos. Der Google Map Iframe auf der Kontaktseite kann durch Ihren individuellen Teilungs-Link auf Maps in Sekunden ausgetauscht werden.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar: Copyright, Legal Disclaimer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Hausmeister Service Österreich. Alle Rechte vorbehalten. 
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button onClick={() => onOpenLegalModal('impressum')} className="hover:underline hover:text-slate-400 font-medium">
              Impressum (Austrian ECG)
            </button>
            <button onClick={() => onOpenLegalModal('datenschutz')} className="hover:underline hover:text-slate-400">
              Datenschutzerklärung
            </button>
            <button onClick={() => onOpenLegalModal('barrierefreiheit')} className="hover:underline hover:text-slate-400 font-semibold text-emerald-500/90 hover:text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Barrierefreiheitserklärung (WZG)
            </button>
            <button onClick={() => onOpenLegalModal('agb')} className="hover:underline hover:text-slate-400">
              AGB
            </button>
            <p className="text-slate-600">
              Stand: 12. Juni 2026
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
