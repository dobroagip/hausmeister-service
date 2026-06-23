import { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [customText, setCustomText] = useState('');

  const templates = [
    { label: 'Hausbetreuung anfragen', text: 'Servus! Ich möchte gerne ein unverbindliches Angebot für die Hausbetreuung meines Objekts in Wien anfordern.' },
    { label: 'Gartenpflege & Rasenmähen', text: 'Guten Tag, ich benötige fachmännische Hilfe bei der Gartenpflege/Rasenmähen.' },
    { label: 'Winterdienst §93 StVO', text: 'Grüß Gott, ich suche einen verlässlichen Partner für den Winterdienst der kommenden Saison.' },
    { label: 'Akuter Notdienst-Einsatz', text: 'ACHTUNG NOTFALL: Ich benötige den Hausmeister-Notdienst vor Ort!' }
  ];

  const handleSend = () => {
    const finalMsg = customText || selectedTopic || 'Guten Tag! Ich interessiere mich für Ihre Services.';
    const encodedMsg = encodeURIComponent(finalMsg);
    // Real Austria support country code +43
    const whatsappUrl = `https://wa.me/43123456789?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      
      {/* Expanded chat window widget */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden w-80 md:w-96 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-300">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="h-2.5 w-2.5 bg-green-400 border-2 border-emerald-600 rounded-full absolute bottom-0 right-0 animate-pulse"></span>
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  HS
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Hausmeister Kundenservice</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>●</span> Online (Schnelle Rückmeldung)
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Bubble Area */}
          <div className="p-4 bg-slate-50 max-h-80 overflow-y-auto space-y-4 text-sm">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-xs text-emerald-600 block mb-1">Mitarbeiter online:</span>
              Grüß Gott! Schön, dass Sie unsere Website besuchen. Wie können wir Ihnen heute in Wien oder Umgebung helfen?
            </div>

            {selectedTopic && (
              <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl ml-8 border border-emerald-100">
                <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">Ihre Auswahl:</span>
                "{templates.find(t => t.text === selectedTopic)?.label}"
              </div>
            )}

            {/* Template options */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">
                Vorgefertigte Anfrage wählen:
              </span>
              {templates.map((tpl, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedTopic(tpl.text);
                    setCustomText(tpl.text);
                  }}
                  className={`w-full text-left p-2 border rounded-lg transition-all text-xs text-slate-600 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/30 ${
                    customText === tpl.text 
                      ? 'border-emerald-500 bg-emerald-50 font-medium text-emerald-800' 
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Ihre persönliche Nachricht hier..."
                rows={2}
                className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              />
            </div>
          </div>

          {/* Action button */}
          <div className="p-3 bg-white border-t border-slate-100 flex justify-end">
            <button
              onClick={handleSend}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Send className="h-3.5 w-3.5" />
              WhatsApp-Anfrage starten
            </button>
          </div>

        </div>
      )}

      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all outline-none duration-250 border border-emerald-500/10 group"
        title="WhatsApp Kontakt"
      >
        {isOpen ? (
          <X className="h-7 w-7 transition-transform duration-200 rotate-90" />
        ) : (
          <div className="relative">
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-rose-500 text-[9px] text-white flex items-center justify-center font-bold rounded-full animate-bounce">
              1
            </span>
            <MessageSquare className="h-6 w-6 group-hover:rotate-6 transition-transform" />
          </div>
        )}
      </button>

    </div>
  );
}
