import React, { useState, useEffect } from 'react';
import { Shield, Settings, Check, X, AlertCircle, Info } from 'lucide-react';

interface CookieConsentBannerProps {
  onOpenLegalModal: (tabId: 'impressum' | 'datenschutz' | 'barrierefreiheit' | 'agb') => void;
}

export default function CookieConsentBanner({ onOpenLegalModal }: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  
  // Custom categories matching DSGVO/TKG standard
  const [consents, setConsents] = useState({
    necessary: true, // Always true and locked
    functional: false,
    analytics: false,
  });

  // Load consent state on initial mount
  useEffect(() => {
    const storedConsent = localStorage.getItem('vienna-clean-cookie-consent');
    if (!storedConsent) {
      // Show immediately if no response is recorded yet
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(storedConsent);
        setConsents(parsed);
        // Dispatch custom event to notify analytics trackers if enabled
        applyConsentedScripts(parsed);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  // Utility to handle activating trackers based on consent
  const applyConsentedScripts = (consentObj: typeof consents) => {
    if (consentObj.analytics) {
      console.log("[DSGVO-Consent] Analyse-Cookies AKTIVIERT. Google Analytics Skript gestartet.");
      // Here, real tracking tags would initialize (e.g. window.gtag)
    } else {
      console.log("[DSGVO-Consent] Analyse-Cookies DEAKTIVIERT. Kein Tracking erlaubt.");
    }
    
    if (consentObj.functional) {
      console.log("[DSGVO-Consent] Funktionale Cookies AKTIVIERT. Einstellungen werden persistiert.");
    }
  };

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      functional: true,
      analytics: true
    };
    setConsents(newConsent);
    localStorage.setItem('vienna-clean-cookie-consent', JSON.stringify(newConsent));
    applyConsentedScripts(newConsent);
    setIsVisible(false);
  };

  const handleAcceptOnlyNecessary = () => {
    const newConsent = {
      necessary: true,
      functional: false,
      analytics: false
    };
    setConsents(newConsent);
    localStorage.setItem('vienna-clean-cookie-consent', JSON.stringify(newConsent));
    applyConsentedScripts(newConsent);
    setIsVisible(false);
  };

  const handleSaveSelection = () => {
    localStorage.setItem('vienna-clean-cookie-consent', JSON.stringify(consents));
    applyConsentedScripts(consents);
    setIsVisible(false);
  };

  const toggleCategory = (category: 'functional' | 'analytics') => {
    setConsents(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Add global trigger listener so other parts of the app can reopen preferences
  useEffect(() => {
    const handleReopen = () => {
      setShowSettings(true);
      setIsVisible(true);
    };
    window.addEventListener('reopen-cookie-settings', handleReopen);
    return () => window.removeEventListener('reopen-cookie-settings', handleReopen);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 inset-x-0 bg-slate-900 border-t border-slate-800 text-slate-100 z-55 shadow-2xl p-5 md:p-6 animate-in slide-in-from-bottom duration-300"
      id="cookie-consent-bar"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        
        {/* Banner main content block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
          
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5 text-emerald-400 font-extrabold text-sm sm:text-base">
              <Shield className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Ihre Privatsphäre ist uns wichtig! (DSGVO & Austrian TKG 2021)</span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Wir verwenden Cookies und ähnliche Technologien, um die sichere Bereitstellung unserer Dienste zu gewährleisten, die Barrierefreiheit zu unterstützen und Zugriffe auf unsere Webseite zu analysieren. Nach <strong>§ 165 Abs 3 TKG 2021</strong> benötigen wir vor dem Setzen von nicht-essentiellen Cookies Ihre ausdrückliche Zustimmung. Sie können Ihre Einstellungen jederzeit anpassen oder widerrufen.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
              <button 
                onClick={() => onOpenLegalModal('impressum')}
                className="hover:text-white transition-colors underline decoration-dotted"
              >
                Impressum
              </button>
              <span className="text-slate-600">|</span>
              <button 
                onClick={() => onOpenLegalModal('datenschutz')}
                className="hover:text-white transition-colors underline decoration-dotted"
              >
                Datenschutzerklärung
              </button>
              <span className="text-slate-600">|</span>
              <span>Stand: Juni 2026</span>
            </div>
          </div>

          {/* Action Button Controls - MUST have equal visual weight per DSGVO guidelines */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3 shrink-0 self-center sm:self-end md:self-center">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <Settings className="h-4 w-4" />
              <span>Einstellungen</span>
            </button>
            <button
              onClick={handleAcceptOnlyNecessary}
              className="bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-200 border border-slate-600 font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all"
            >
              Nur technisch notwendige
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-emerald-600 hover:bg-emerald-505 text-white font-black text-xs py-2.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <Check className="h-4 w-4 stroke-[3]" />
              Alle akzeptieren
            </button>
          </div>

        </div>

        {/* Dynamic preference toggles */}
        {showSettings && (
          <div className="mt-4 border-t border-slate-800 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            
            {/* Category 1: Strictly Necessary */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-xs sm:text-sm text-slate-100 flex items-center gap-1.5">
                    1. Technisch notwendig
                  </span>
                  <span className="text-[10px] bg-slate-850 text-slate-400 font-mono py-0.5 px-2 rounded-full uppercase">
                    Erzwungen
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-2 leading-relaxed">
                  Essentielle Cookies für das Funktionieren der Navigation, die Speicherung Ihrer Cookie-Entscheidung sowie Sicherheitschecks. Diese können nicht deaktiviert werden.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-[11px] text-emerald-400 font-mono">
                <span>Immer aktiv</span>
                <Check className="h-4 w-4" />
              </div>
            </div>

            {/* Category 2: Functional */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-xs sm:text-sm text-slate-100 flex items-center gap-1.5">
                    2. Funktionale Anpassung
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={consents.functional}
                      onChange={() => toggleCategory('functional')}
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-300 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-2 leading-relaxed">
                  Ermöglicht das Speichern von benutzerdefinierten Einstellungen auf dieser Seite, wie z.B. Ihre Barrierefreiheitspräferenzen (Schriftgröße, Kontrasteinstellungen).
                </p>
              </div>
              <span className={`text-[11px] font-mono mt-4 block ${consents.functional ? 'text-emerald-400' : 'text-slate-500'}`}>
                {consents.functional ? 'Zustimmung erteilt' : 'Abgelehnt'}
              </span>
            </div>

            {/* Category 3: Analytics */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-xs sm:text-sm text-slate-100 flex items-center gap-1.5">
                    3. Analyse & Statistik
                  </span>
                  <label className="relative inline-flex inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={consents.analytics}
                      onChange={() => toggleCategory('analytics')}
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-300 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-2 leading-relaxed">
                  Hilft uns zu verstehen, wie Besucher mit unserer Webseite interagieren (z.B. welche Seiten am häufigsten besucht werden), um unser Leistungsangebot kontinuierlich zu optimieren.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-[11px] font-mono ${consents.analytics ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {consents.analytics ? 'Zustimmung erteilt' : 'Abgelehnt'}
                </span>
                
                <button
                  onClick={handleSaveSelection}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg"
                >
                  Auswahl speichern
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
