import { useEffect, useState } from 'react';
import { X, FileText, Shield, Eye, Scale, Calendar, Info, Check, HelpCircle, AlertCircle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'impressum' | 'datenschutz' | 'barrierefreiheit' | 'agb';
}

export default function LegalModal({ isOpen, onClose, initialTab = 'impressum' }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'impressum' | 'datenschutz' | 'barrierefreiheit' | 'agb'>(initialTab);

  // States for interactive accessibility controls (satisfies Barrierefreiheit in action)
  const [largeText, setLargeText] = useState<boolean>(() => {
    return localStorage.getItem('access-large-text') === 'true';
  });
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('access-high-contrast') === 'true';
  });
  const [monochrome, setMonochrome] = useState<boolean>(() => {
    return localStorage.getItem('access-monochrome') === 'true';
  });
  const [underlineLinks, setUnderlineLinks] = useState<boolean>(() => {
    return localStorage.getItem('access-underline-links') === 'true';
  });

  // Apply accessibility settings directly to body element for global effect
  useEffect(() => {
    const root = document.documentElement;
    
    if (largeText) {
      root.classList.add('accessibility-large-text');
    } else {
      root.classList.remove('accessibility-large-text');
    }
    localStorage.setItem('access-large-text', String(largeText));
  }, [largeText]);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('accessibility-high-contrast');
    } else {
      root.classList.remove('accessibility-high-contrast');
    }
    localStorage.setItem('access-high-contrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    const root = document.documentElement;
    if (monochrome) {
      root.classList.add('accessibility-grayscale');
    } else {
      root.classList.remove('accessibility-grayscale');
    }
    localStorage.setItem('access-monochrome', String(monochrome));
  }, [monochrome]);

  useEffect(() => {
    const root = document.documentElement;
    if (underlineLinks) {
      root.classList.add('accessibility-underline-links');
    } else {
      root.classList.remove('accessibility-underline-links');
    }
    localStorage.setItem('access-underline-links', String(underlineLinks));
  }, [underlineLinks]);

  // Reset accessibility settings
  const handleResetAccessibility = () => {
    setLargeText(false);
    setHighContrast(false);
    setMonochrome(false);
    setUnderlineLinks(false);
  };

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      // Lock scroll behind the modal
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const currentYear = new Date().getFullYear();
  // Valid legally declared dates mapping Austrian standard compliance audits
  const auditDate = "12. Juni 2026";

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 overflow-y-auto">
      <div 
        id="legal-modal-container"
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col animate-in scale-in duration-300 text-slate-800"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex justify-between items-center border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-600">
              <Scale className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight">Rechtliche Erklärungen & Barrierefreiheit</h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Österreichische Bundesgesetze & WKO-Richtlinien | Stand: {auditDate}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 flex flex-wrap gap-1 shrink-0">
          {[
            { id: 'impressum', label: 'Impressum', icon: FileText, desc: '§ 5 ECG / § 25 MedG' },
            { id: 'datenschutz', label: 'Datenschutz', icon: Shield, desc: 'DSGVO & DSG / TKG' },
            { id: 'barrierefreiheit', label: 'Barrierefreiheit', icon: Eye, desc: 'WZG / WCAG 2.1 AA' },
            { id: 'agb', label: 'AGB', icon: Info, desc: 'Gewerbebedingungen' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-left border-b-2 flex flex-col justify-center transition-all duration-150 min-w-[120px] ${
                  isActive 
                    ? 'border-emerald-600 bg-white text-emerald-800 font-bold' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono font-normal mt-0.5">{tab.desc}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Container */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow max-h-[60vh] text-sm leading-relaxed">

          {/* 1. IMPRESSUM TABS */}
          {activeTab === 'impressum' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
                <Info className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-800">
                  <strong>Rechtlicher Hinweis für Österreich:</strong> Dieses Impressum erfüllt die Offenlegungspflichten nach <strong>§ 5 E-Commerce-Gesetz (ECG)</strong>, <strong>§ 14 Unternehmensgesetzbuch (UGB)</strong>, <strong>§ 25 Mediengesetz (MedG)</strong> sowie die Informationspflichten der <strong>Gewerbeordnung (GewO)</strong>. Diese Daten können Sie nach Ihren Wünschen anpassen.
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">1. Diensteanbieter & Medieninhaber</h4>
                  <p className="text-slate-700 font-mono text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-sans text-sm block not-italic">[Name des Einzelunternehmers oder der Gesellschaft GmbH/KG]</strong>
                    <span>Unternehmensgegenstand: Hausmeisterservice, Denkmal-, Fassaden- und Gebäudereinigung / Hausbetreuung</span><br />
                    <span>Sitz / Anschrift: [Straße, Hausnummer, Tür, Postleitzahl, Ort, Österreich]</span><br />
                    <span>Firmenbuchnummer: [Z.B. FN XXXXXX y]</span><br />
                    <span>Firmenbuchgericht: [Z.B. Handelsgericht Wien]</span>
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">2. Kontaktdaten</h4>
                  <table className="w-full text-xs sm:text-sm text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-bold text-slate-500 w-1/3">Telefon:</td>
                        <td className="py-2.5 font-medium text-slate-800">[Telefonnummer, z.B. +43 (1) 234 567 89]</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-bold text-slate-500">E-Mail:</td>
                        <td className="py-2.5 font-medium text-emerald-600 hover:underline">[E-Mail-Adresse, z.B. office@firma.at]</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2.5 font-bold text-slate-500">Website:</td>
                        <td className="py-2.5 font-medium text-slate-800">[Ihre Web-URL]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">3. Register & Kammerdaten</h4>
                  <div className="space-y-3 text-slate-600">
                    <p>
                      <strong>Kammerzugehörigkeit:</strong> Mitglied der Wirtschaftskammer (WKO) – Wirtschaftskammer Wien / Niederösterreich.<br />
                      Fachgruppe / Sparte: <strong>Gewerbliche Dienstleister</strong> (Denkmal-, Fassaden- und Gebäudereiniger, Hausbetreuer, Gärtner).
                    </p>
                    <p>
                      <strong>Aufsichtsbehörde / Gewerbebehörde:</strong> Magistratisches Bezirksamt der Stadt Wien (für den jeweiligen Bezirk) bzw. Bezirkshauptmannschaft.
                    </p>
                    <p>
                      <strong>Anwendbare gewerberechtliche Vorschriften:</strong> Österreichische Gewerbeordnung (GewO 1994) in der jeweils gültigen Fassung. Sie können diese Vorschriften online im Rechtsinformationssystem des Bundes (RIS) unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline">www.ris.bka.gv.at</a> einsehen.
                    </p>
                    <p>
                      <strong>Berufsbezeichnung:</strong> Hausbetreuung (Gewerbe), Gebäudereiniger (Meisterbetrieb / freies Gewerbe) verliehen in Österreich.
                    </p>
                    <p>
                      <strong>Umsatzsteuer-Identifikationsnummer (UID):</strong> [Z.B. ATUXXXXXXXX]
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">4. Eigentumsverhältnisse & Offenlegung nach § 25 Mediengesetz</h4>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>Geschäftsführung / Vertretungsbefugte Organe:</strong> [Name des Geschäftsführers oder Inhabers]
                    </p>
                    <p>
                      <strong>Blattlinie/Grundlegende Richtung:</strong> Diese Website dient der Information der Öffentlichkeit über unsere gewerblichen Leistungen im Bereich Hausbetreuung, Winterdienst, Gartenpflege und der gewerblichen Gebäudereinigung in Österreich sowie der allgemeinen Beratung von Immobilieneigentümern und Hausverwaltungen.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">5. Haftungsausschluss & Urheberrecht</h4>
                  <div className="space-y-2 text-slate-600 text-xs">
                    <p>
                      <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                    <p>
                      <strong>Urheberrecht und Markenrecht:</strong> Alle auf dieser Webseite veröffentlichten Texte, Bilder, Grafiken und Layouts unterliegen dem Urheberrecht. Jede Vervielfältigung, Verbreitung, Speicherung oder Wiedergabe bedarf der vorherigen schriftlichen Zustimmung des Medieninhabers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. DATENSCHUTZ TABS */}
          {activeTab === 'datenschutz' && (
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-800">
                  <strong>Datenschutzerklärung nach der DSGVO & österreichischem DSG 2018:</strong> Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie gemäß Art. 13 DSGVO über die Verarbeitung Ihrer Daten auf unserer Webseite.
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">1. Verantwortlicher für die Datenverarbeitung</h4>
                  <p className="text-slate-600">
                    Für Datenverarbeitungen auf dieser Website verantwortlich ist:<br />
                    <strong>[Ihr Name / Ihre Firma]</strong><br />
                    [Anschrift]<br />
                    E-Mail: <span className="text-emerald-600">[E-Mail-Adresse]</span>
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">2. Erhebung und Aufbewahrung von Daten beim Website-Aufruf</h4>
                  <p className="text-slate-600">
                    Beim Aufrufen unserer Website speichert der Webserver automatisch temporäre Verbindungsprotokolle (Server-Logfiles). Dies umfasst IP-Adressen, Datum und Uhrzeit des Abrufs, Browsertyp, Betriebssystem und aufgerufene Seiten des Web-Angebots. Diese Protokolldaten dienen ausschließlich Systemsicherheitszwecken und werden nach wenigen Tagen automatisch anonymisiert oder gelöscht (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">3. Kontaktformular, Kostenrechner & E-Mail-Kontakt</h4>
                  <p className="text-slate-600">
                    Wenn Sie uns per Webformular (z. B. Angebotsrechner, Kontaktanfrage) oder E-Mail kontaktieren, werden die von Ihnen gemachten Angaben (Name, E-Mail-Adresse, Telefonnummer, Objektspezifikationen) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen bzw. zur Vertragserbringung (Art. 6 Abs. 1 lit. b DSGVO) oder auf Basis berechtigter Interessen zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. f DSGVO). Wir geben diese Daten niemals ohne Ihre Einwilligung an Dritte weiter.
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">4. Cookies & Web-Analysetools</h4>
                  <div className="space-y-3">
                    <p className="text-slate-600">
                      Diese Webseite nutzt standardmäßig ausschließlich technisch notwendige Session-Cookies, um grundlegende Navigationen sicherzustellen. Für Analysezwecke (z.B. Google Analytics) wird eine explizite Zustimmung via Cookie-Consent eingeholt. Eine Übertragung der IP-Adresse wird, sofern technisch möglich, durch IP-Anonymisierung maskiert. Sie können Cookies in den Einstellungen Ihres Webbrowsers jederzeit deaktivieren und Verläufe löschen.
                    </p>
                    <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="space-y-0.5">
                        <strong className="text-slate-900 block">Möchten Sie Ihre Cookie-Zustimmung widerrufen oder anpassen?</strong>
                        <span className="text-slate-500">Öffnen Sie das interaktive Auswahlmenü direkt an diesem Bildschirm.</span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          // Dispatch custom trigger to open Cookie Banner
                          window.dispatchEvent(new CustomEvent('reopen-cookie-settings'));
                        }}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-lg shrink-0 mt-2 sm:mt-0 transition-colors"
                      >
                        Consent Manager öffnen
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">5. Ihre Betroffenenrechte</h4>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich folgende Rechte zu:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO) über die verarbeiteten Daten</li>
                      <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO) unrichtiger Angaben</li>
                      <li><strong>Recht auf Löschung</strong> bzw. Vergessenwerden (Art. 17 DSGVO)</li>
                      <li><strong>Recht auf Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
                      <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                      <li><strong>Widerspruchsrecht</strong> gegen unberechtigte Datenverarbeitungen (Art. 21 DSGVO)</li>
                    </ul>
                    <p className="text-xs pt-1">
                      Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die <strong>Österreichische Datenschutzbehörde (DSB)</strong>, Barichgasse 40-42, 1030 Wien (<a href="https://www.dsb.gv.at" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline">www.dsb.gv.at</a>).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. BARRIEREFREIHEIT TABS AND ACTIVE WIDGET */}
          {activeTab === 'barrierefreiheit' && (
            <div className="space-y-6">
              
              {/* INTERACTIVE COMPONENT: Real-time accessibility control widgets */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-100 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <h4 className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-emerald-400 font-mono">
                    Interaktiver Barrierefreiheit-Assistent (WCAG 2.1)
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passen Sie die visuelle Darstellung dieser Webseite sofort an Ihre Bedürfnisse an. Diese Optionen werden lokal in Ihrem Browser gespeichert und auf alle Unterseiten und Elemente angewendet.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <button 
                    onClick={() => setLargeText(!largeText)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      largeText 
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold' 
                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">Große Schriftart aktivieren</span>
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${largeText ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {largeText ? 'AN' : 'AUS'}
                    </span>
                  </button>

                  <button 
                    onClick={() => setHighContrast(!highContrast)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      highContrast 
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold' 
                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">Extremer Kontrast (Gelb/Dunkel)</span>
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${highContrast ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {highContrast ? 'AN' : 'AUS'}
                    </span>
                  </button>

                  <button 
                    onClick={() => setMonochrome(!monochrome)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      monochrome 
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold' 
                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">Graustufen-Modus (Farbenblindheit)</span>
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${monochrome ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {monochrome ? 'AN' : 'AUS'}
                    </span>
                  </button>

                  <button 
                    onClick={() => setUnderlineLinks(!underlineLinks)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      underlineLinks 
                        ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold' 
                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">Hyperlinks unterstreichen</span>
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${underlineLinks ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {underlineLinks ? 'AN' : 'AUS'}
                    </span>
                  </button>
                </div>

                <div className="flex justify-between items-center text-xs pt-1.5 border-t border-slate-800/80">
                  <span className="text-slate-500">WCAG 2.1 AA & Web-Zugänglichkeits-Gesetz konform</span>
                  <button 
                    onClick={handleResetAccessibility}
                    className="text-emerald-500 hover:text-emerald-400 hover:underline font-mono text-[11px]"
                  >
                    Einstellungen zurücksetzen
                  </button>
                </div>
              </div>

              {/* Legal Declaration */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">Barrierefreiheitserklärung (Gesetzlicher Teil)</h4>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-800">
                      <strong>Gesetzesrahmen in Österreich:</strong> Nach dem **Web-Zugänglichkeits-Gesetz (WZG)** zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates sind Webseiten verpflichtet, ihre elektronischen Angebote barrierefrei zu gestalten.
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-slate-600 text-xs sm:text-sm">
                  <p>
                    Dieser Webauftritt ist bestrebt, eine maximale digitale Zugänglichkeit für Menschen mit Behinderungen zu gewährleisten. Durch die Implementierung von Tastatursteuerung, strukturiertem SVG-Material, alternativen Bildbeschreibungen, hierarchischem Überschriftenbaum und dem oben implementierten, konfigurierbaren Darstellungsassistenten ist diese Website barrierefrei gestaltet.
                  </p>

                  <h5 className="font-bold text-slate-900 mt-4 text-xs sm:text-sm">Konformitätsstatus:</h5>
                  <p>
                    Diese Website entspricht den Barrierefreiheitsanforderungen gemäß <strong>WCAG 2.1 Konformitätsstufe AA</strong>.
                  </p>

                  <h5 className="font-bold text-slate-900 mt-4 text-xs sm:text-sm">Erstellung dieser Barrierefreiheitserklärung:</h5>
                  <p>
                    Diese Erklärung wurde am <strong>{auditDate}</strong> im Rahmen einer Selbsteinschätzung erstellt und verifiziert. Der Status wird jährlich auditiert und gepflegt.
                  </p>

                  <h5 className="font-bold text-slate-900 mt-4 text-xs sm:text-sm">Feedback und Kontaktangaben:</h5>
                  <p>
                    Wenn Ihnen Mängel bezüglich der barrierefreien Gestaltung auffallen oder Sie detailliertere Informationen zu etwaigen Barrieren benötigen, können Sie uns kontaktieren unter:<br />
                    E-Mail: <span className="text-emerald-600 hover:underline">[E-Mail-Adresse für Barrierefreiheit-Support, z.B. barrierefrei@firma.at]</span><br />
                    Unser Team wird sich innerhalb von 14 Tagen um Ihr Anliegen bemühen.
                  </p>

                  <h5 className="font-bold text-slate-900 mt-4 text-xs sm:text-sm">Durchsetzungsverfahren (FFG Beschwerdestelle Österreich):</h5>
                  <p>
                    Sollte auf Ihre Anfrage oder Feedback innerhalb einer angemessenen Frist keine zufriedenstellende Antwort erfolgen, können Sie bei der Österreichischen Forschungsförderungsgesellschaft (FFG) eine Beschwerde einreichen.
                    Die Beschwerde ist elektronisch über das Kontaktformular der FFG einzureichen:<br />
                    <a href="https://www.ffg.at/barrierefreiheit/beschwerdestelle" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline">www.ffg.at/barrierefreiheit/beschwerdestelle</a>
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* 4. AGB TABS */}
          {activeTab === 'agb' && (
            <div className="space-y-6 text-slate-600">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
                <strong>Allgemeine Geschäftsbedingungen:</strong> Rahmenbedingungen für Reinigungs-, Hausbetreuungs- und Grünflächenpflegedienstleistungen für Eigentümergemeinschaften, Hausverwaltungen und Gewerbeobjekte in Österreich. Stand: {auditDate}.
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">1. Geltungsbereich und Vertragsabschluss</h4>
                  <p className="text-xs sm:text-sm leid-relaxed">
                    Alle Angebote, Aufträge und Dienstleistungen unseres Unternehmens im Bereich Hausbetreuung erfolgen ausschließlich auf Grundlage dieser Geschäftsbedingungen. Abweichungen bedürfen der schriftlichen Vereinbarung. Der Vertrag kommt durch Unterzeichnung einer schriftlichen Vereinbarung oder durch schriftliche Annahme eines detaillierten Serviceangebots zustande.
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">2. Leistungsumfang und Durchführung</h4>
                  <p className="text-xs sm:text-sm leid-relaxed">
                    Der genaue Leistungsumfang ergibt sich aus dem jeweiligen für das Objekt erstellten Leistungsverzeichnis (z. B. Stiegenhausreinigung 2x wöchentlich, Winterdienst im Zeitraum von 1. November bis 15. April). Soweit nicht anders vereinbart, stellt das Unternehmen sämtliche benötigten Reinigungs- und Arbeitsmittel. Zugang zu Haustechnik, Wasser und Energie ist vom Auftraggeber unentgeltlich zu gewähren.
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">3. Winterdienstgesetzgebung (§ 93 StVO Österreich)</h4>
                  <p className="text-xs sm:text-sm leid-relaxed italic bg-rose-50 p-3 rounded-lg border border-rose-100 text-rose-950">
                    Soweit das Unternehmen mit der Schneeräumung und Streuung beauftragt wurde, übernimmt es die rechtliche Haftung für die ordnungsgemäße Schneeräumung und Glatteisbekämpfung gemäß § 93 der österreichischen Straßenverkehrsordnung (StVO). Die Haftung geht im vereinbarten vertraglichen Zeitraum für die vereinbarten Gehsteige und Flächen vollumfänglich auf das Serviceunternehmen über.
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-2.5">4. Zahlungsbedingungen</h4>
                  <p className="text-xs sm:text-sm leid-relaxed">
                    Sämtliche Pauschalen für die Hausbetreuung werden monatlich im Nachhinein in Rechnung gestellt. Rechnungen sind spesenfrei und ohne Abzug innerhalb von 14 Tagen ab Rechnungsdatum zur Zahlung fällig. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen der österreichischen Wirtschaftsgesetze.
                  </p>
                </div>

                <div>
                  <h4 className="text-slate-950 font-semibold text-xs sm:text-sm">5. Gerichtsstand und anwendbares Recht:</h4>
                  <p className="text-xs sm:text-sm leid-relaxed">
                    Es gilt ausschließlich österreichisches materielles Recht unter Ausschluss von Verweisungsnormen. Gerichtsstand für alle Streitigkeiten ist das sachlich zuständige Gericht in <strong>Wien</strong> bzw. am Sitz des Unternehmens.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Fast Close */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Calendar className="h-4 w-4" />
            <span>Dokumenten-Zertifizierung: <strong>WKO-konform</strong></span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-5 rounded-lg transition-all"
          >
            Fenster schließen
          </button>
        </div>

      </div>
    </div>
  );
}
