import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import References from './components/References';
import Blog from './components/Blog';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LegalModal from './components/LegalModal';
import CookieConsentBanner from './components/CookieConsentBanner';
import Angebot from './components/Angebot';
import { PhoneCall, AlertTriangle, ShieldCheck, X, HelpingHand } from 'lucide-react';
import CityLandingPage from './components/CityLandingPage';
import { company } from './data/company';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [prefilledInquiry, setPrefilledInquiry] = useState<string>('');
  const [prefilledAdresse, setPrefilledAdresse] = useState<string>('');
  const [prefilledDienstleistung, setPrefilledDienstleistung] = useState<string>('');
  const [showEmergencyModal, setShowEmergencyModal] = useState<boolean>(false);
  const [showLegalModal, setShowLegalModal] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<'impressum' | 'datenschutz' | 'barrierefreiheit' | 'agb'>('impressum');

  // Handle URL Path & Hash for /angebot compliance and regional landings
  useEffect(() => {
    const handleUrlRouting = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path === '/angebot' || hash === '#angebot' || hash === '#/angebot') {
        setActiveTab('angebot');
      } else if (path === '/hausmeisterservice-bad-erlach' || hash === '#hausmeisterservice-bad-erlach') {
        setActiveTab('city-bad-erlach');
      } else if (path === '/hausmeisterservice-neunkirchen' || hash === '#hausmeisterservice-neunkirchen') {
        setActiveTab('city-neunkirchen');
      } else if (path === '/hausmeisterservice-ternitz' || hash === '#hausmeisterservice-ternitz') {
        setActiveTab('city-ternitz');
      } else if (path === '/hausmeisterservice-wiener-neustadt' || hash === '#hausmeisterservice-wiener-neustadt') {
        setActiveTab('city-wiener-neustadt');
      }
    };
    handleUrlRouting();
    window.addEventListener('popstate', handleUrlRouting);
    window.addEventListener('hashchange', handleUrlRouting);
    
    return () => {
      window.removeEventListener('popstate', handleUrlRouting);
      window.removeEventListener('hashchange', handleUrlRouting);
    };
  }, []);

  const handleOpenLegalModal = (tabId: 'impressum' | 'datenschutz' | 'barrierefreiheit' | 'agb') => {
    setLegalModalTab(tabId);
    setShowLegalModal(true);
  };

  // Transfers prefilled text from EstimateCalculator directly to Contact Form
  const handleApplyEstimate = (inquiryText: string) => {
    setPrefilledInquiry(inquiryText);
    handleTabNavigation('contact');
  };

  const handlePrefillAngebot = (adresse: string, service: string) => {
    setPrefilledAdresse(adresse);
    setPrefilledDienstleistung(service);
    handleTabNavigation('angebot');
  };

  const handleEmergencyClick = () => {
    setShowEmergencyModal(true);
  };

  const handleTabNavigation = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL pathname or hash for advanced SEO-friendly routing
    if (tabId === 'home') {
      window.history.pushState(null, '', '/');
    } else if (tabId === 'angebot') {
      window.history.pushState(null, '', '/angebot');
    } else if (tabId.startsWith('city-')) {
      const citySub = tabId.replace('city-', '');
      window.history.pushState ? window.history.pushState(null, '', `/hausmeisterservice-${citySub}`) : (window.location.hash = `/hausmeisterservice-${citySub}`);
    } else {
      window.history.pushState(null, '', `/#${tabId}`);
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={handleTabNavigation} onEmergencyClick={handleEmergencyClick} />;
      case 'services':
        return <Services onApplyEstimate={handleApplyEstimate} />;
      case 'about':
        return <About />;
      case 'references':
        return <References />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact prefilledInquiry={prefilledInquiry} />;
      case 'angebot':
        return <Angebot prefilledAdresse={prefilledAdresse} prefilledDienstleistung={prefilledDienstleistung} />;
      case 'city-bad-erlach':
        return <CityLandingPage cityKey="bad-erlach" onNavigate={handleTabNavigation} onPrefillAngebot={handlePrefillAngebot} />;
      case 'city-neunkirchen':
        return <CityLandingPage cityKey="neunkirchen" onNavigate={handleTabNavigation} onPrefillAngebot={handlePrefillAngebot} />;
      case 'city-ternitz':
        return <CityLandingPage cityKey="ternitz" onNavigate={handleTabNavigation} onPrefillAngebot={handlePrefillAngebot} />;
      case 'city-wiener-neustadt':
        return <CityLandingPage cityKey="wiener-neustadt" onNavigate={handleTabNavigation} onPrefillAngebot={handlePrefillAngebot} />;
      default:
        return <Home onNavigate={handleTabNavigation} onEmergencyClick={handleEmergencyClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden w-full">
      
      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onEmergencyClick={handleEmergencyClick} 
      />

      {/* Main Content View with Fade Transition Container */}
      <main className="grow bg-white relative">
        <div className="transition-all duration-350 ease-in-out">
          {renderActiveTab()}
        </div>
      </main>

      {/* Floating dynamic WhatsApp assistant button */}
      <WhatsAppButton />

      {/* Trustful site-wide footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onEmergencyClick={handleEmergencyClick} 
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Austrian Legislation & Accessibility Compliance Modal */}
      <LegalModal 
        isOpen={showLegalModal} 
        onClose={() => setShowLegalModal(false)} 
        initialTab={legalModalTab} 
      />

      {/* Dynamic DSGVO / Austrian TKG compliant Cookie banners */}
      <CookieConsentBanner onOpenLegalModal={handleOpenLegalModal} />

      {/* 24/7 Emergency Dispatch Guidance Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 z-55 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl border border-rose-105 overflow-hidden w-full max-w-xl animate-in scale-in duration-300">
            
            {/* Modal Header */}
            <div className="bg-rose-700 p-6 text-white flex justify-between items-center border-b border-rose-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/10 animate-pulse">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg leading-tight">24/7 Hausmeister-Notrufzentrale</h3>
                  <p className="text-xs text-rose-100 flex items-center gap-1 mt-0.5">
                    <span>●</span> Leitstelle Wien & Wiener Neustadt besetzt
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowEmergencyModal(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-rose-200 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-slate-700">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-bold text-slate-900 text-base">Haben Sie einen akuten Notfall im Objekt?</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Wasserrohrbrüche, Totalausfall des Lichts im Stiegenhaus, blockierte Müllschleusen oder Sturmschäden verlangen schnelles Handeln. Unsere mobile Einsatzgruppe ist rund um die Uhr abfahrbereit.
                </p>
              </div>

              {/* Step checklist for emergency */}
              <div className="space-y-3.5 pt-1">
                <strong className="text-[10px] sm:text-xs uppercase tracking-widest text-rose-600 font-bold block">Notfall-Checkliste vor Ort:</strong>
                
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex gap-2.5 items-start">
                    <span className="h-5 w-5 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <p><strong>Ruhe bewahren</strong> u. Gefahrenquelle erstbeurteilen (z.B. Wasser austreten sehen, Rauch/Funken bemerken).</p>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="h-5 w-5 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <p><strong>Erstmaßnahmen einleiten:</strong> Hauptwasserhahn im Keller oder Wohnung schließen, Sicherungskasten prüfen.</p>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="h-5 w-5 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <p><strong>Notdienst anrufen:</strong> Genaue Adresse Ihres Objekts, Ihren Namen, Lage und detaillierten Schadens-Zustand beschreiben.</p>
                  </div>
                </div>
              </div>

              {/* Real Call Action container */}
              <div className="p-5 bg-rose-50 border border-rose-100/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold text-rose-605 uppercase block tracking-wider font-mono">Gebührenfreier Notruf:</span>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="text-xl sm:text-2xl font-black text-rose-700 hover:underline"
                  >
                    {company.emergency}
                  </a>
                </div>

                <a
                  href={`tel:${company.phoneRaw}`}
                  className="w-full sm:w-auto bg-rose-600 hover:bg-rose-705 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl text-center flex items-center justify-center gap-2 shadow"
                >
                  <PhoneCall className="h-4 w-4" />
                  Jetzt anrufen
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 justify-center">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Einsatzteams für alle Wiener Gemeindebezirke vollständig besetzt.</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
