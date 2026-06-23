import { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Building2, Trees, Snowflake } from 'lucide-react';

interface EstimateCalculatorProps {
  onApplyEstimate: (inquiryText: string) => void;
}

export default function EstimateCalculator({ onApplyEstimate }: EstimateCalculatorProps) {
  const [propertyArea, setPropertyArea] = useState<number>(300);
  const [cleaningFrequency, setCleaningFrequency] = useState<string>('weekly');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'hausbetreuung'
  ]);

  const pricingModels = [
    { id: 'hausbetreuung', label: 'Hausbetreuung (Basis)', baseRate: 0.25, icon: <Building2 className="h-4 w-4 text-blue-600 animate-pulse" /> },
    { id: 'gartenpflege', label: 'Gartenpflege & Rasenpflege', baseRate: 0.18, icon: <Trees className="h-4 w-4 text-emerald-600" /> },
    { id: 'winterdienst', label: 'Winterdienst (Nov - Apr)', baseRate: 0.35, icon: <Snowflake className="h-4 w-4 text-blue-400" /> },
    { id: 'notdienst', label: '24/7 Notdienst-Abdeckung', flatRate: 49, icon: <Sparkles className="h-4 w-4 text-rose-500" /> }
  ];

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(item => item !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateEstimate = () => {
    let total = 0;
    
    // Core property area base pricing per sqm
    pricingModels.forEach(model => {
      if (selectedServices.includes(model.id)) {
        if (model.baseRate) {
          total += propertyArea * model.baseRate;
        } else if (model.flatRate) {
          total += model.flatRate;
        }
      }
    });

    // Cleaning frequency fee multiplier
    if (cleaningFrequency === 'weekly') {
      total += (propertyArea * 0.15) + 30;
    } else if (cleaningFrequency === 'biweekly') {
      total += (propertyArea * 0.08) + 15;
    }

    return Math.round(total);
  };

  const monthlyEstimate = calculateEstimate();

  const handleExport = () => {
    const activeServicesNames = pricingModels
      .filter(m => selectedServices.includes(m.id))
      .map(m => m.label)
      .join(', ');

    const generatedText = `Grüß Gott! Ich habe Ihren Online-Rechner ausgefüllt und wünsche ein konkretes Angebot.
- Objektgröße: ${propertyArea} qm
- Stiegenhausreinigung: ${
      cleaningFrequency === 'weekly' 
        ? 'Wöchentlich' 
        : cleaningFrequency === 'biweekly' 
          ? 'Zweiwöchentlich' 
          : 'Keine Reinigung erwünscht'
    }
- Ausgewählte Leistungen: ${activeServicesNames || 'Keine'}
- Unverbindliche Online-Schätzung: ca. € ${monthlyEstimate},- pro Monat (inkl. USt)

Bitte kontaktieren Sie mich zwecks eines persönlichen Besichtigungstermins vor Ort zur finalen Abstimmung.`;
    
    onApplyEstimate(generatedText);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
      
      {/* Header banner */}
      <div className="bg-linear-to-r from-blue-700 to-emerald-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-white/10">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Öffentlicher Online-Tarifrechner</h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Erhalten Sie in wenigen Sekunden eine faire und transparente Kostenschätzung.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        
        {/* Step 1: Object size slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <span className="h-5 w-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs">1</span>
              Nutz- und Grünfläche des Objekts (qm)
            </label>
            <span className="font-mono text-sm font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
              {propertyArea} qm
            </span>
          </div>
          <input
            type="range"
            min="50"
            max="2500"
            step="25"
            value={propertyArea}
            onChange={(e) => setPropertyArea(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-700"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>50 qm (z.B. kleines Büro)</span>
            <span>2.500 qm (große Wohnhausanlage)</span>
          </div>
        </div>

        {/* Step 2: Cleaning Frequency Selection */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <span className="h-5 w-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs">2</span>
            Stiegenhausreinigung (Frequenz)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setCleaningFrequency('weekly')}
              className={`p-3.5 border rounded-xl text-left transition-all ${
                cleaningFrequency === 'weekly'
                  ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600'
                  : 'border-slate-100 hover:border-slate-200 text-slate-600 bg-slate-50/30'
              }`}
            >
              <div className="font-bold text-xs sm:text-sm">Wöchentlich</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Optimaler Glanz & Hygiene</div>
            </button>
            <button
              onClick={() => setCleaningFrequency('biweekly')}
              className={`p-3.5 border rounded-xl text-left transition-all ${
                cleaningFrequency === 'biweekly'
                  ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600'
                  : 'border-slate-100 hover:border-slate-200 text-slate-600 bg-slate-50/30'
              }`}
            >
              <div className="font-bold text-xs sm:text-sm">14-tägig</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Kosteneffizienter Standard</div>
            </button>
            <button
              onClick={() => setCleaningFrequency('none')}
              className={`p-3.5 border rounded-xl text-left transition-all ${
                cleaningFrequency === 'none'
                  ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600'
                  : 'border-slate-100 hover:border-slate-200 text-slate-600 bg-slate-50/30'
              }`}
            >
              <div className="text-xs sm:text-sm font-medium">Keine</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Wird bauseitig erledigt</div>
            </button>
          </div>
        </div>

        {/* Step 3: Service Checklist */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <span className="h-5 w-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs">3</span>
            Zusätzliche Wunscharbeiten hinzubuchen
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pricingModels.map((model) => {
              const checked = selectedServices.includes(model.id);
              return (
                <div
                  key={model.id}
                  onClick={() => handleServiceToggle(model.id)}
                  className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all select-none ${
                    checked
                      ? 'border-emerald-500 bg-emerald-50/30 text-emerald-950'
                      : 'border-slate-100 hover:border-slate-200 bg-slate-50/30 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0">{model.icon}</div>
                    <span className="text-xs sm:text-sm font-semibold">{model.label}</span>
                  </div>
                  <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-colors ${
                    checked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {checked && <Check className="h-3 w-3 stroke-3" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Result Area */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/60 -mx-6 -mb-6 p-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Unverbindliche Schätzung
            </div>
            <div className="text-3xl font-extrabold text-slate-950 flex items-baseline gap-1 justify-center sm:justify-start">
              <span>ab ca. € {monthlyEstimate},-</span>
              <span className="text-sm font-bold text-slate-400">/ Monat</span>
            </div>
            <div className="text-[10px] text-slate-400">
              *Alle Werte sind Richtwerte inkl. Abgaben, exkl. eventueller Sonderarbeiten.
            </div>
          </div>
          
          <button
            onClick={handleExport}
            className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 hover:shadow-lg transition-all text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm text-center border-none"
          >
            Spezifisches Angebot anfragen
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
