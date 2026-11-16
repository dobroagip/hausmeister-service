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
import { MessageCircle, ShieldCheck } from 'lucide-react';
import CityLandingPage from './components/CityLandingPage';
import { company } from './data/company';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [prefilledInquiry, setPrefilledInquiry] = useState<string>('');
  const [prefilledAdresse, setPrefilledAdresse] = useState<string>('');
  const [prefilledDienstleistung, setPrefilledDienstleistung] = useState<string>('');
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
        return <Home onNavigate={handleTabNavigation}  />;
      case 'services':
        return <Services onApplyEstimate={handleApplyEstimate} />;
      case 'about':
        return <About />;
      case 'references':
        return <References onNavigate={handleTabNavigation} />;
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
        return <Home onNavigate={handleTabNavigation}  />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden w-full">
      
      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
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

     
    </div>
  );
}
