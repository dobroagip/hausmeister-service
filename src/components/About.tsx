import { Target, HeartHandshake, CalendarRange, Quote, Award, ShieldAlert, Sparkles, Footprints, ClipboardCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-blue-700" />,
      title: 'Ausbildung & WKO-Richtlinien',
      desc: 'Unsere Mitarbeiter durchlaufen regelmäßige Schulungen gemäß den Standards der Wirtschaftskammer. So gewährleisten wir höchste Arbeitssicherheit und Qualität.'
    },
    {
      icon: <Target className="h-6 w-6 text-emerald-600" />,
      title: 'Langfristige Zusammenarbeit',
      desc: 'Über 80% unserer Kunden betreuen wir seit mehr als 5 Jahren. Stabilität und Werterhalt stehen für uns vor schnellem Profit.'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-blue-700" />,
      title: 'Nachhaltige Reinigung & Pflege',
      desc: 'Wir nutzen umweltverträgliche, biologisch abbaubare Waschsubstanzen und achten auf ressourcenschonende Wassernutzung bei Grünflächen.'
    }
  ];

  const team = [
    {
      name: 'Karl Brunner',
      role: 'Geschäftsführung & Betriebsleitung',
      experience: '20 Jahre Branchenerfahrung in der Wiener Hausbetreuung',
      quote: 'Zuverlässigkeit ist keine Frage des Zufalls, sondern präziser Organisation.',
      avatarBg: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Julia Pichler',
      role: 'Kundenbetreuung & Qualitätsmanagement',
      experience: 'Ansprechpartnerin für Hausverwaltungen & Abrechnungsfragen',
      quote: 'Ein sauberes Gebäude beginnt beim aufmerksamen Zuhören der Kundenwünsche.',
      avatarBg: 'bg-emerald-100 text-emerald-800'
    },
    {
      name: 'Stefan Kovac',
      role: 'Leiter Außendienst & Notfallkoordination',
      experience: 'Meister der Haustechnik, leitet das 24/7 Notruf-Einsatzteam',
      quote: 'Wenn andere schlafen, sichern wir Gehwege und technische Zentralanlagen.',
      avatarBg: 'bg-teal-100 text-teal-800 font-bold'
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Pitch Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
              Ein starker Partner für Ihr Eigentum
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Über uns – Hausmeister Service Österreich
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Seit unserer Gründung im Herzen Wiens verfolgen wir ein klares Ziel: Liegenschaftseigentümer und Hausverwaltungen durch erstklassigen, unkomplizierten und haftungssicheren Service zu entlasten. 
            </p>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Wir larpieren keine Dienstleistungen – bei uns zählt das handwerkliche Resultat vor Ort. Ein sauberes Stiegenhaus, perfekt beigemähte Liegenschaftsränder, vorschriftsmäßig gestreuter Gehweg und eine Haustechnik, die stillschweigend funktioniert. Genau das garantieren wir Tag für Tag mit unserem eingespielten Stammteam.
            </p>

            <div className="p-4 bg-slate-50 border-l-4 border-emerald-650 rounded-r-xl text-slate-600 text-sm inline-flex items-center gap-2.5">
              <ClipboardCheck className="h-6 w-6 text-emerald-600 shrink-0" />
              <span>Sicherheit nach <strong>ÖNORM B 1300</strong> und <strong>B 1301</strong> (Objektsicherheitsprüfungen) im Rahmen unserer Betreuung integrierbar.</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 relative shadow-sm">
            <div className="space-y-6">
              <span className="text-3xl font-black text-blue-700 block">Unsere Chronik & Mission</span>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex gap-3">
                  <div className="font-bold text-blue-700 min-w-16">2014</div>
                  <div>Gründung als kleiner Einmann-Gartenservice im 10. Wiener Gemeindebezirk.</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-blue-700 min-w-16">2017</div>
                  <div>Aufnahme von Stiegenhausreinigungen und Winterdienst-Haftungsübernahme.</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-blue-700 min-w-16">2020</div>
                  <div>Umzug in ein größeres Büro mit modernem Fuhrpark. Betreuung von über 80 Wohnhausanlagen.</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-bold text-blue-700 min-w-16">Heute</div>
                  <div>Etablierter, mittelständischer Betrieb mit über 20 hochqualifizierten Fachkräften und vollem 24/7 Notdienstschutz in Wien.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Unsere gelebten Unternehmenswerte</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Für uns ist Handschlagqualität nicht nur ein Wort, sondern ein täglicher österreichischer Ehrenkodex.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Team human elements */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Köpfe hinter dem Service</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Mitarbeiter, die für Kompetenz vor Ort und reibungslose kaufmännische Organisation bürgen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100/70 rounded-2xl p-8 relative flex flex-col justify-between hover:border-slate-200 hover:shadow-sm transition-all">
                
                <div className="space-y-6">
                  {/* Pseudo photo / initial circle representation to keep it clean & professional */}
                  <div className="flex items-center gap-4">
                    <div className={`h-14 w-14 rounded-full flex items-center justify-center font-extrabold text-lg shadow-sm border border-white/40 ${t.avatarBg}`}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                      <p className="text-emerald-600 font-medium text-xs sm:text-sm">{t.role}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs italic font-mono">
                    {t.experience}
                  </p>

                  <div className="relative text-slate-600 text-xs sm:text-sm pl-6 border-l-2 border-slate-250 italic leading-relaxed py-1">
                    <Quote className="h-4 w-4 text-emerald-500 absolute top-0 left-0 -translate-x-3 -translate-y-2 transform -scale-x-100 opacity-20" />
                    "{t.quote}"
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center text-xs text-slate-400">
                  <span>WKO Zertifiziert</span>
                  <span className="font-bold text-slate-500 font-mono">ID: HS-0{idx+1}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
