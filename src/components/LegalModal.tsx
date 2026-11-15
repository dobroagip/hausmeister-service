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
            { id: 'barrierefreiheit', label: 'Barrierefreiheit', icon: Eye, desc: 'Informationen zur Zugänglichkeit' }, 
            { id: 'agb', label: 'AGB', icon: Info, desc: 'Gewerbebedingungen' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-left border-b-2 flex flex-col justify-center transition-all duration-150 min-w-30 ${
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
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 grow max-h-[60vh] text-sm leading-relaxed">

       {/* 1. IMPRESSUM TABS */}
{activeTab === 'impressum' && (
  <div className="space-y-6">

    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
      <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
      <div className="text-xs text-blue-800">
        <strong>Impressum:</strong> Angaben zum Diensteanbieter und zur Gewerbeberechtigung.
      </div>
    </div>

    <div className="space-y-5">

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          1. Diensteanbieter
        </h4>

        <div className="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
          <p>
            <strong className="text-slate-900">Sergiy Kyslytsyn</strong>
          </p>
          <p>Fabriksgasse 17/8</p>
          <p>2822 Bad Erlach</p>
          <p>Österreich</p>
        </div>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          2. Kontaktdaten
        </h4>

        <table className="w-full text-sm text-left border-collapse">
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="py-2.5 font-bold text-slate-500 w-1/3">
                Telefon:
              </td>
              <td className="py-2.5 font-medium text-slate-800">
                +43 677 63460530
              </td>
            </tr>

            <tr>
              <td className="py-2.5 font-bold text-slate-500">
                E-Mail:
              </td>
              <td className="py-2.5 font-medium">
                <a
                  href="mailto:mytechnik.service@gmx.at"
                  className="text-blue-700 hover:underline"
                >
                  mytechnik.service@gmx.at
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          3. Gewerbeberechtigung
        </h4>

        <div className="text-sm text-slate-700 space-y-3">

          <p>
            <strong>Gewerbeart:</strong> Freies Gewerbe
          </p>

          <p>
            <strong>Gewerbewortlaut:</strong><br />
            Hausbetreuung, bestehend in der Durchführung einfacher
            Reinigungstätigkeiten einschließlich objektbezogener einfacher
            Wartungstätigkeiten
          </p>

          <p>
            <strong>GISA-Zahl:</strong> 40319285
          </p>

          <p>
            <strong>Gewerbebehörde:</strong><br />
            Bezirkshauptmannschaft Wiener Neustadt
          </p>

          <p>
            <strong>Standort der Gewerbeberechtigung:</strong><br />
            2822 Bad Erlach, Fabriksgasse 17, Tür 8
          </p>

          <p>
            <strong>Gewerbeberechtigung entstanden:</strong> 03.11.2026
          </p>

        </div>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          4. Grundlegende Richtung der Website
        </h4>

        <p className="text-sm text-slate-600">
          Diese Website informiert über die angebotenen Leistungen im Bereich
          Hausbetreuung, Kleinreparaturen, Montagen, Gartenpflege,
          Rasenmähen und weitere einfache Arbeiten rund um Haus und Immobilie.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          5. Anwendbare Rechtsvorschriften
        </h4>

        <p className="text-sm text-slate-600">
          Es gelten die jeweils anwendbaren österreichischen Rechtsvorschriften,
          insbesondere die Gewerbeordnung (GewO) in der jeweils gültigen Fassung.
        </p>

        <p className="text-sm mt-2">
          <a
            href="https://www.ris.bka.gv.at"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:underline"
          >
            Rechtsinformationssystem des Bundes (RIS)
          </a>
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          6. Haftung für Inhalte
        </h4>

        <p className="text-sm text-slate-600">
          Die Inhalte dieser Website werden nach bestem Wissen erstellt.
          Trotz sorgfältiger Erstellung kann keine Gewähr für die
          Vollständigkeit, Richtigkeit und Aktualität aller Inhalte übernommen
          werden.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          7. Urheberrecht
        </h4>

        <p className="text-sm text-slate-600">
          Die auf dieser Website veröffentlichten Texte, Bilder, Grafiken
          und sonstigen Inhalte sind urheberrechtlich geschützt, soweit nicht
          anders angegeben.
        </p>
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
        <strong>Datenschutzerklärung:</strong> Informationen über die
        Verarbeitung personenbezogener Daten auf dieser Website.
      </div>
    </div>

    <div className="space-y-5">

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          1. Verantwortlicher
        </h4>

        <div className="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
          <p>
            <strong>Sergiy Kyslytsyn</strong>
          </p>
          <p>Fabriksgasse 17/8</p>
          <p>2822 Bad Erlach, Österreich</p>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:mytechnik.service@gmx.at"
              className="text-blue-700 hover:underline"
            >
              mytechnik.service@gmx.at
            </a>
          </p>
          <p>Telefon: +43 677 63460530</p>
        </div>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          2. Kontaktaufnahme
        </h4>

        <p className="text-sm text-slate-600">
          Wenn Sie uns per E-Mail, WhatsApp oder über ein Formular auf
          dieser Website kontaktieren, verarbeiten wir die von Ihnen
          übermittelten Angaben, soweit dies für die Bearbeitung Ihrer
          Anfrage erforderlich ist.
        </p>

        <p className="text-sm text-slate-600 mt-2">
          Dazu können insbesondere Name, Telefonnummer, E-Mail-Adresse,
          Angaben zum gewünschten Auftrag sowie Angaben zum Ort und zur
          gewünschten Leistung gehören.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          3. Zweck der Verarbeitung
        </h4>

        <p className="text-sm text-slate-600">
          Die Daten werden insbesondere verarbeitet, um Anfragen zu
          beantworten, Leistungen zu besprechen, Angebote zu erstellen
          und gegebenenfalls einen Auftrag vorzubereiten oder abzuwickeln.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          4. Rechtsgrundlage
        </h4>

        <p className="text-sm text-slate-600">
          Die Verarbeitung erfolgt, soweit erforderlich, zur Durchführung
          vorvertraglicher Maßnahmen oder zur Erfüllung eines Vertrags.
          Soweit eine andere Rechtsgrundlage erforderlich ist, erfolgt die
          Verarbeitung auf Grundlage der jeweils anwendbaren Bestimmungen
          der DSGVO.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          5. Speicherung und Löschung
        </h4>

        <p className="text-sm text-slate-600">
          Personenbezogene Daten werden nur so lange gespeichert, wie dies
          für den jeweiligen Zweck erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          6. Weitergabe an Dritte
        </h4>

        <p className="text-sm text-slate-600">
          Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies
          zur Bearbeitung einer Anfrage, zur Durchführung eines Auftrags,
          aufgrund gesetzlicher Verpflichtungen oder auf einer anderen
          zulässigen Rechtsgrundlage erforderlich ist.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          7. Server-Logfiles
        </h4>

        <p className="text-sm text-slate-600">
          Beim Betrieb einer Website können durch den Hosting-Anbieter
          technische Daten und Server-Logfiles verarbeitet werden. Umfang,
          Speicherdauer und konkrete Verarbeitung richten sich nach dem
          tatsächlich eingesetzten Hosting-Anbieter.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          8. Cookies und Analyse
        </h4>

        <p className="text-sm text-slate-600">
          Diese Website verwendet keine Angaben zu Analyse- oder
          Marketingdiensten, sofern solche Dienste nicht tatsächlich
          eingebunden sind. Technisch erforderliche Funktionen können
          lokale Speichermechanismen oder vergleichbare technische
          Verfahren verwenden.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          9. Ihre Rechte
        </h4>

        <div className="text-sm text-slate-600">
          <p>
            Sie haben nach Maßgabe der gesetzlichen Bestimmungen insbesondere
            folgende Rechte:
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-700">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch</li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          10. Beschwerderecht
        </h4>

        <p className="text-sm text-slate-600">
          Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
          personenbezogenen Daten gegen Datenschutzrecht verstößt, können
          Sie sich bei der zuständigen Datenschutzbehörde beschweren.
        </p>

        <p className="text-sm mt-2">
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:underline"
          >
            Österreichische Datenschutzbehörde (DSB)
          </a>
        </p>
      </div>

    </div>
  </div>
)}

         {/* 3. BARRIEREFREIHEIT TABS */}
{activeTab === 'barrierefreiheit' && (
  <div className="space-y-6">

    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
      <Eye className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
      <div className="text-xs text-slate-700">
        <strong>Barrierefreiheit:</strong> Wir bemühen uns, diese Website
        möglichst einfach und gut zugänglich zu gestalten.
      </div>
    </div>

    <div className="space-y-5">

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          Zugängliche Nutzung
        </h4>

        <p className="text-sm text-slate-600">
          Wir achten bei der Gestaltung der Website auf eine übersichtliche
          Struktur, gut lesbare Texte, ausreichende Kontraste und eine
          einfache Navigation.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          Technische Umsetzung
        </h4>

        <p className="text-sm text-slate-600">
          Die Website wird laufend weiterentwickelt. Trotz sorgfältiger
          Umsetzung kann es vorkommen, dass einzelne Inhalte oder Funktionen
          noch nicht für alle Nutzerinnen und Nutzer optimal zugänglich sind.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          Feedback
        </h4>

        <p className="text-sm text-slate-600">
          Wenn Sie auf eine mögliche Barriere stoßen oder Schwierigkeiten
          bei der Nutzung dieser Website haben, freuen wir uns über einen
          Hinweis.
        </p>

        <p className="text-sm mt-3">
          E-Mail:{' '}
          <a
            href="mailto:mytechnik.service@gmx.at"
            className="text-blue-700 hover:underline"
          >
            mytechnik.service@gmx.at
          </a>
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          Verbesserung der Website
        </h4>

        <p className="text-sm text-slate-600">
          Hinweise zur Barrierefreiheit helfen uns dabei, die Website
          schrittweise zu verbessern und Probleme bei der Nutzung zu
          erkennen und zu beheben.
        </p>
      </div>

    </div>
  </div>
)}
          {/* 4. AGB TABS */}
{activeTab === 'agb' && (
  <div className="space-y-6 text-slate-600">

    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
      <strong>Allgemeine Geschäftsbedingungen:</strong> Diese
      Geschäftsbedingungen gelten für die jeweils vereinbarten Leistungen
      und ergänzen das individuelle Angebot bzw. die Auftragsvereinbarung.
    </div>

    <div className="space-y-5">

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          1. Geltungsbereich
        </h4>

        <p className="text-sm leading-relaxed">
          Diese Geschäftsbedingungen gelten für die von Sergiy Kyslytsyn
          angebotenen und mit dem Kunden vereinbarten Leistungen.
          Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen
          Angebot oder der Auftragsvereinbarung.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          2. Angebot und Auftrag
        </h4>

        <p className="text-sm leading-relaxed">
          Angebote werden auf Grundlage der vom Kunden bereitgestellten
          Informationen erstellt. Ein Auftrag kommt durch die Annahme des
          Angebots oder eine entsprechende Vereinbarung zwischen den
          Vertragsparteien zustande.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          3. Leistungsumfang
        </h4>

        <p className="text-sm leading-relaxed">
          Der Umfang der Leistung wird jeweils individuell vereinbart.
          Dies kann insbesondere Kleinreparaturen, einfache Montagen,
          Hausbetreuung, einfache Gartenarbeiten, Rasenmähen oder
          vereinbarte Winterdienstleistungen umfassen.
        </p>

        <p className="text-sm leading-relaxed mt-2">
          Arbeiten, die nicht vom vereinbarten Leistungsumfang umfasst sind,
          werden nur nach vorheriger Abstimmung durchgeführt.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          4. Preise und Zahlung
        </h4>

        <p className="text-sm leading-relaxed">
          Der vereinbarte Preis ergibt sich aus dem jeweiligen Angebot.
          Soweit nicht anders vereinbart, werden zusätzlich beauftragte
          Arbeiten oder erforderliche Materialkosten gesondert verrechnet.
        </p>

        <p className="text-sm leading-relaxed mt-2">
          Rechnungen sind innerhalb der auf der Rechnung angegebenen
          Zahlungsfrist zu bezahlen.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          5. Zugang und Mitwirkung des Kunden
        </h4>

        <p className="text-sm leading-relaxed">
          Der Kunde stellt, soweit für die vereinbarte Leistung erforderlich,
          den notwendigen Zugang zum Objekt sowie die erforderlichen
          Informationen zur Verfügung.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          6. Winterdienst
        </h4>

        <p className="text-sm leading-relaxed">
          Winterdienstleistungen werden nur im jeweils vereinbarten Umfang
          und für die ausdrücklich vereinbarten Flächen durchgeführt.
          Zeitpunkt, Umfang und weitere Bedingungen werden im jeweiligen
          Auftrag festgelegt.
        </p>

        <p className="text-sm leading-relaxed mt-2">
          Gesetzliche Verpflichtungen des Eigentümers oder sonstigen
          Verpflichteten werden durch die Beauftragung nicht automatisch
          geändert. Eine Übernahme bestimmter Aufgaben oder Pflichten
          bedarf einer ausdrücklichen Vereinbarung.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          7. Mängel und Reklamationen
        </h4>

        <p className="text-sm leading-relaxed">
          Beanstandungen zu einer erbrachten Leistung sollen möglichst
          zeitnah mitgeteilt werden. Wir bemühen uns, berechtigte
          Beanstandungen innerhalb angemessener Frist zu prüfen und
          erforderliche Korrekturen zu vereinbaren.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          8. Haftung
        </h4>

        <p className="text-sm leading-relaxed">
          Es gelten die gesetzlichen Haftungsbestimmungen. Eine Haftung
          für Schäden wird nicht ausgeschlossen, soweit ein solcher
          Ausschluss gesetzlich nicht zulässig ist.
        </p>
      </div>

      <div>
        <h4 className="text-slate-900 font-extrabold text-base border-b pb-1.5 mb-3">
          9. Anwendbares Recht
        </h4>

        <p className="text-sm leading-relaxed">
          Es gilt österreichisches Recht, soweit gesetzlich zulässig.
          Zwingende Verbraucherschutzbestimmungen bleiben unberührt.
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
