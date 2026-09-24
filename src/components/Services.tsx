import { useEffect, useState } from 'react';
import { 
  Home, Sprout, Scissors, Snowflake, Building2, Wrench, 
  Trash2, ShieldCheck, Lightbulb, PhoneCall, Search, 
  ArrowRight, Check, DollarSign, Eye, X 
} from 'lucide-react';
import { services } from '../data/services';
import { Service } from '../types';
import EstimateCalculator from './EstimateCalculator';

interface ServicesProps {
  onApplyEstimate: (inquiryText: string) => void;
}

export default function Services({ onApplyEstimate }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceDetails, setActiveServiceDetails] = useState<Service | null>(null);

  // Hash-based scroll behavior for anchor links from homepage
 useEffect(() => {
  const targetId = sessionStorage.getItem('scrollToService');

  if (targetId) {
    const element = document.getElementById(targetId);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 250);
    }

    sessionStorage.removeItem('scrollToService');
  }
}, []);

  // Helper to map string to actual Lucide component
  const renderIcon = (iconName: string, className = "h-6 w-6") => {
    switch (iconName) {
      case 'Home': return <Home className={className} />;
      case 'Sprout': return <Sprout className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      case 'Snowflake': return <Snowflake className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Trash2': return <Trash2 className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Lightbulb': return <Lightbulb className={className} />;
      case 'PhoneCall': return <PhoneCall className={className} />;
      default: return <Home className={className} />;
    }
  };

  const categories = [
    { id: 'all', label: 'Alle Leistungen' },
    { id: 'HAUSSERVICE', label: 'Haus- & Objektbetreuung' },
    // { id: 'cleaning', label: 'Gebäudereinigung' },
    { id: 'Gartenservice', label: 'Garten- & Rasenpflege' },
    { id: 'Winterdienst', label: 'Winterdienst' }
  ];

  const filteredServices = services.filter((svc) => {
    const matchQuery = svc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    return matchQuery && matchCategory;
  });

  return (
    <div className="bg-white py-16 lg:py-24 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block descriptive */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
            HAUSBETREUUNG & KLEINREPARATUREN
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Unsere Kernkompetenzen im Detail
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Praktische Leistungen rund um Haus, Wohnung, Objekt und Garten – zuverlässig und unkompliziert.
          </p>
        </div>

        {/* Filter bars and searches */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-12 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex flex-wrap gap-1.5 w-full lg:w-auto justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border select-none transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs shrink-0">
            <Search className="h-4.5 w-4.5 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Leistung durchsuchen..."
              className="w-full text-xs sm:text-sm pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Services grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="bg-slate-50 border border-slate-100/70 p-8 rounded-2xl hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all flex flex-col justify-between group h-full"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold group-hover:bg-blue-700 group-hover:text-white transition-all">
                    {renderIcon(svc.iconName)}
                  </div>
                  <span className="text-[10px] text-slate-400 bg-white border border-slate-150 rounded-full px-2.5 py-1 font-bold tracking-wider font-mono uppercase">
                    {svc.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {svc.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <button
                  onClick={() => setActiveServiceDetails(svc)}
                  className="text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-700 flex items-center gap-1 underline underline-offset-4"
                >
                  <Eye className="h-4 w-4 shrink-0" />
                  Details & Umfang
                </button>
                <button
                  onClick={() => onApplyEstimate(`Anfrage zum Einzelservice: *${svc.title}* für mein Objekt.`)}
                  className="text-white bg-blue-700 hover:bg-blue-800 font-bold text-xs px-3.5 py-2 rounded-lg transition-all"
                >
                  Anfragen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed service modal drawer */}
        {activeServiceDetails && (
          <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden border border-slate-100 max-h-[90vh] overflow-y-auto animate-in scale-in duration-300">
              {/* Modal header */}
              <div className="relative p-6 sm:p-8 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex justify-between items-start border-b border-slate-800">
                <div className="space-y-3 max-w-[85%]">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-white/10 text-emerald-400 rounded-lg flex items-center justify-center">
                      {renderIcon(activeServiceDetails.iconName, "h-5 w-5")}
                    </div>
                    <span className="text-[10px] sm:text-xs text-blue-300 bg-blue-500/15 border border-blue-500/30 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {activeServiceDetails.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">{activeServiceDetails.title}</h3>
                </div>
                <button 
                  onClick={() => setActiveServiceDetails(null)}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <strong className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Leistungsbeschreibung:</strong>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {activeServiceDetails.longDesc}
                  </p>
                </div>

                <div className="space-y-3">
                  <strong className="text-xs text-slate-400 uppercase tracking-widest font-mono font-bold">Umfasst folgendes Leistungsspektrum:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                    {activeServiceDetails.features.map((feat, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Kalkulationsgrundlage:</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{activeServiceDetails.pricingBasis}</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      onApplyEstimate(`Anfrage zum Einzelservice: *${activeServiceDetails.title}*\nKalkulationsgrundlage: ${activeServiceDetails.pricingBasis}.`);
                      setActiveServiceDetails(null);
                    }}
                    className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-lg text-center"
                  >
                    Unverbindlich Anfragen
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Section 2: Embed the unique Online Pricing Calculator */}
        <div className="mt-12 bg-slate-50 p-6 sm:p-12 rounded-3xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Calculator info on the left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
                Maximale Transparenz
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Keine geheimen Klauseln. Berechnen Sie Ihren Tarif online!
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Große Liegenschaften oder Eigentümergemeinschaften verlangen präzise Budgetkalkulationen für das laufende Wirtschaftsfahr. Verwenden Sie unseren Onlinerechner, um sofort Kosteneinschätzungen nach Quadratmetern und Belegfrequenz zu erhalten.
              </p>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-500">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-mono shrink-0">1</div>
                  <p>Tragen Sie das Ausmaß (Quadratmeterzahl) Ihres bebauen oder unbebauten Objekts ein.</p>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-mono shrink-0">2</div>
                  <p>Wählen Sie den gewünschten Stiegenhaus-Reinigungsintervall (wöchentlich/14-tägig).</p>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-mono shrink-0">3</div>
                  <p>Ergänzen Sie nach Bedarf Winterdienst nach StVO sowie flexible Außendienstableitungen.</p>
                </div>
              </div>
            </div>

            {/* Embed actual calculator inside the column grid column */}
            <div className="lg:col-span-7">
              <EstimateCalculator onApplyEstimate={onApplyEstimate} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
