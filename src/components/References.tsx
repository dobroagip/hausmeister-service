import { FormEvent, useState } from 'react';
import { Star, MessageSquarePlus, Trophy, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export default function References() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('Hausverwaltung');
  const [formLocation, setFormLocation] = useState('Wien');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Initial Review data
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'rev-1',
      author: 'Ing. Michael Gruber',
      role: 'Hausverwalter Gruber & Partner',
      location: '1190 Wien',
      rating: 5,
      text: 'Wir haben den Winterdienst und die Stiegenhausreinigung für 12 unserer Wohnanlagen an Hausmeister Service übergeben. Die Ausführung klappt fehlerfrei. Insbesondere die lückenlose Dokumentation der Kontrollgänge gibt uns Rechtssicherheit nach § 93 StVO.',
      date: '20. April 2026'
    },
    {
      id: 'rev-2',
      author: 'Elisabeth Hofer',
      role: 'Eigentümergemeinschaft',
      location: '1230 Wien',
      rating: 5,
      text: 'Sehr höfliche Mitarbeiter, die das Rasenmähen und Heckenschneiden in unserem Gemeinschaftsgarten vornehmen. Es sieht immer extrem gepflegt aus. Auch kleinere Ausbesserungen im Keller wurden sofort miterledigt.',
      date: '02. Juni 2026'
    },
    {
      id: 'rev-3',
      author: 'Dr. Thomas Wallner',
      role: 'Gewerbeobjekt-Besitzer',
      location: 'Mödling',
      rating: 5,
      text: 'Professionelle Gebäudebetreuung, die ihr Geld wert ist. Bei einem Rohrbruch im Heizungsschacht am Pfingstsonntag war der Notdienst schnell vor Ort und hat den Zulauf abgesperrt. Äußerst kompetente Handhabung.',
      date: '08. Juni 2026'
    }
  ]);

  // Gallery cases (Before/After descriptions or reference projects)
  const portfolioCases = [
    {
      id: 'port-1',
      title: 'Stiegenhaus-Grundreinigung',
      category: 'cleaning',
      location: 'Zinshaus, 1050 Wien',
      descrBefore: 'Verschmutzter Terrazzoboden mit hartnäckigen Kalk- und Salzrändern aus der Wintersaison.',
      descrAfter: 'Tiefenporige maschinelle Grundreinigung, aufgebrachte Spezialversiegelung für langanhaltenden Glanz.',
      imgBefore: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400',
      imgAfter: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'port-2',
      title: 'Frühjahrs-Heckenschnitt',
      category: 'Gartenservice',
      location: 'Wohnhausanlage, Baden bei Wien',
      descrBefore: 'Überwucherte Hainbuchenhecke ragte in die Gehwege hinein und versperrte die Sicht beim Ausparken.',
      descrAfter: 'Präziser maschineller Trapezschnitt auf normierte Höhe, vollständiger Grünschnittabtransport.',
      imgBefore: 'https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?auto=format&fit=crop&q=80&w=400',
      imgAfter: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'port-3',
      title: 'Winterdienst Schneeräumung',
      category: 'emergency',
      location: 'Gewerbepark, 1220 Wien',
      descrBefore: '25 cm Neuschnee verdeckte Zufahrten und blockierte Parkplätze am frühen Morgen.',
      descrAfter: 'Besenreine maschinelle Schneeräumung und Splittstreuung bis um 05:45 Uhr abgeschlossen gemäß StVO.',
      imgBefore: 'https://images.unsplash.com/photo-1482867996988-2faec3cbb4f9?auto=format&fit=crop&q=80&w=400',
      imgAfter: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const handleAddReview = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) {
      alert('Bitte füllen Sie Name und Feedback-Text aus.');
      return;
    }

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: formName,
      role: formRole,
      location: formLocation,
      rating: formRating,
      text: formText,
      date: 'Heute (Live)'
    };

    setReviews([newRev, ...reviews]);
    setSuccessMsg('Vielen Dank! Ihre Bewertung wurde erfolgreich veröffentlicht.');
    setFormName('');
    setFormText('');
    setTimeout(() => {
      setSuccessMsg('');
      setShowForm(false);
    }, 4500);
  };

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioCases 
    : portfolioCases.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs antialiased">
            Zufriedene Kunden in ganz Österreich
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            Unsere Referenzen & Projekte
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Einblick in unsere tägliche Arbeit. Sehen Sie echte Bilder von Vorher/Nachher-Einsätzen und lesen Sie die ehrlichen Meinungen unserer Wiener Auftraggeber.
          </p>
        </div>

        {/* Section 1: Customer Reviews Card list */}
        <div className="mb-24 space-y-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Was unsere Kunden sagen</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Unzensierte Bewertungen von österreichischen Hausverwaltungen und Liegenschaftseigentümern.</p>
            </div>
            
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl flex items-center gap-2"
            >
              <Star className="h-4 w-4 fill-white" />
              Eigene Bewertung schreiben
            </button>
          </div>

          {/* Review writing overlay form */}
          {showForm && (
            <form onSubmit={handleAddReview} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-2xl mx-auto space-y-4 animate-in fade-in slide-in-from-top-4 duration-250">
              <h3 className="font-extrabold text-slate-900 text-base">Hinterlassen Sie uns Ihr Feedback</h3>
              
              {successMsg && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200">
                  {successMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Ihr Name (inkl. Titel)</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="z.B. DI Andreas Wagner"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Rolle / Position</label>
                  <select
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="Hausverwaltung">Hausverwaltung</option>
                    <option value="Privat-Eigentümer">Privat-Eigentümer</option>
                    <option value="Beirat / EG">Beirat / EG</option>
                    <option value="Gewerblicher Kunde">Gewerblicher Kunde</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Niederlassung / Ort</label>
                  <input
                    type="text"
                    required
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    placeholder="z.B. 1180 Wien"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Sterne-Bewertung</label>
                  <div className="flex gap-1 items-center h-[38px]">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setFormRating(num)}
                        className="p-1 hover:scale-110"
                      >
                        <Star className={`h-6 w-6 ${formRating >= num ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ihr Feedback-Text</label>
                <textarea
                  required
                  rows={3}
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  placeholder="Wie zufrieden waren Sie mit unserer Hausbetreuung, Reinigung oder Gartenpflege?"
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-lg"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg"
                >
                  Feedback senden
                </button>
              </div>
            </form>
          )}

          {/* Testimonial card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 flex flex-col justify-between hover:shadow-sm hover:bg-slate-50/50 transition-all relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Rating star sequence */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <div>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm block leading-tight">{rev.author}</span>
                    <span className="text-slate-500 text-[10px] sm:text-xs block mt-0.5">{rev.role}</span>
                  </div>
                  <div className="text-right text-[10px] text-slate-400 font-mono">
                    <span className="block">{rev.location}</span>
                    <span className="block mt-0.5">{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Before/After Portfolio Showcase */}
        <div className="space-y-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900">Arbeitsproben & Vorher/Nachher-Vergleiche</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Durch präzise Kameras dokumentieren wir wesentliche Fortschritte.</p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              { id: 'all', label: 'Alle Projekte' },
              { id: 'cleaning', label: 'Stiegenhaus & Reinigung' },
              { id: 'Gartenservice', label: 'Garten- & Rasenpflege' },
              { id: 'emergency', label: 'Winterdienst-Einsätze' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Showcase items representing before/after elements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            {filteredPortfolio.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all">
                
                <div>
                  {/* Aspect Ratio 4:3 grid of Before vs After */}
                  <div className="grid grid-cols-2 relative h-48 border-b border-slate-100/80 bg-slate-50">
                    <div className="relative overflow-hidden group">
                      <img 
                        src={p.imgBefore} 
                        alt="Vorher" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter saturate-50 brightness-90 group-hover:scale-102 transition-transform" 
                      />
                      <span className="absolute bottom-2 left-2 bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                        Vorher
                      </span>
                    </div>
                    <div className="relative overflow-hidden group border-l border-white">
                      <img 
                        src={p.imgAfter} 
                        alt="Nachher" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform" 
                      />
                      <span className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                        Nachher
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3.5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-extrabold text-slate-900 text-base">{p.title}</h3>
                      <span className="text-[10px] text-blue-700 font-bold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase font-mono mt-0.5 shrink-0">
                        {p.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-500 leading-relaxed">
                      <div>
                        <strong className="text-slate-700 text-[11px] block uppercase font-mono tracking-wider">Problemstellung:</strong>
                        <p>{p.descrBefore}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-50">
                        <strong className="text-emerald-700 text-[11px] block uppercase font-mono tracking-wider">Nach unserem Einsatz:</strong>
                        <p className="text-slate-600 font-medium">{p.descrAfter}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-50 bg-slate-50/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>{p.location}</span>
                  </div>
                  <span>Abgeschlossen</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
