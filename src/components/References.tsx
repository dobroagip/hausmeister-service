import React from 'react';
import {
  CheckCircle,
  Wrench,
  Home,
  Sprout,
  Snowflake,
  ArrowRight,
} from 'lucide-react';

interface ReferencesProps {
  onNavigate?: (tab: string) => void;
}

const References: React.FC<ReferencesProps> = ({ onNavigate }) => {
  const serviceAreas = [
    {
      icon: Wrench,
      title: 'Kleinreparaturen & Montagen',
      text: 'Praktische Arbeiten rund um Haus, Wohnung und Objekt.',
    },
    {
      icon: Home,
      title: 'Hausbetreuung & Objektservice',
      text: 'Kontrollgänge und einfache Arbeiten zur Betreuung Ihrer Immobilie.',
    },
    {
      icon: Sprout,
      title: 'Gartenpflege & Rasenmähen',
      text: 'Einfache Arbeiten im Garten und rund um Ihre Immobilie.',
    },
    {
      icon: Snowflake,
      title: 'Winterdienst',
      text: 'Schneeräumung und Streudienst für Wege, Zugänge und Flächen.',
    },
  ];

  return (
    <section className="bg-white min-h-screen">
     {/* Hero */}
<div className="bg-slate-50 border-b border-slate-200">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

    {/* Back to home */}
    
<button
  type="button"
  onClick={() => window.location.href = '/'}
  className="mb-8 inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
>
  <span className="text-blue-700 text-lg leading-none">←</span>
  <span>Zur Startseite</span>
</button>

    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-5">
        <CheckCircle className="w-4 h-4" />
        Echte Projekte werden hier ergänzt
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
        Referenzen
      </h1>

      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
        Unser Unternehmen wurde 2026 gegründet. Deshalb bauen wir unsere
        Referenzen Schritt für Schritt mit echten Aufträgen und Projekten auf.
      </p>
    </div>
  </div>
</div>
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Was wir für Sie machen können
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Statt erfundene Projekte oder Bewertungen zu zeigen, möchten wir
              hier nur echte Arbeiten veröffentlichen. Neue Referenzen werden
              ergänzt, sobald entsprechende Aufträge durchgeführt wurden.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Sie haben eine Aufgabe rund um Haus, Wohnung, Garten oder Objekt?
              Senden Sie uns Ihre Anfrage. Wir prüfen, was wir für Sie machen
              können, und melden uns mit den nächsten Schritten.
            </p>
          </div>

          {/* Service list */}
          <div className="grid sm:grid-cols-2 gap-4">
            {serviceAreas.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="border border-slate-200 rounded-xl p-5 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future references */}
        <div className="mt-16 border border-slate-200 rounded-2xl bg-slate-50 p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Unsere Referenzen wachsen mit jedem Auftrag
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed mb-7">
            Sobald wir erste Projekte abgeschlossen haben und diese veröffentlichen
            dürfen, finden Sie hier konkrete Beispiele unserer Arbeit.
          </p>

          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('angebot')}
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
            >
              Angebot anfordern
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default References;