import {
  UserRound,
  Wrench,
  Handshake,
  MapPin,
  CheckCircle2,
  CalendarDays,
  Leaf,
  ShieldCheck,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Wrench className="h-6 w-6 text-blue-700" />,
      title: 'Praktisch und lösungsorientiert',
      desc: 'Wir konzentrieren uns auf kleinere Reparaturen, Montagen, Hausbetreuung und einfache Arbeiten rund um Haus und Grundstück.'
    },
    {
      icon: <Handshake className="h-6 w-6 text-emerald-600" />,
      title: 'Persönlicher Kontakt',
      desc: 'Sie senden uns Ihre Anfrage – wir melden uns bei Ihnen mit einer Antwort und den nächsten Schritten.'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-blue-700" />,
      title: 'Sorgfältige Ausführung',
      desc: 'Wir erledigen jeden Auftrag verlässlich, termingerecht und mit großer Sorgfalt direkt vor Ort an Ihrer Immobilie.'
    }
  ];

  const services = [
    'Kleinreparaturen & Montagen',
    'Hausbetreuung & Objektservice',
    'Gartenpflege & Rasenmähen',
    'Winterdienst',
  ];

  return (
    <div className="bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
            Persönlich geführt · Praktisch · Zuverlässig
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Über uns
          </h1>

          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
            Hausbetreuung, Kleinreparaturen und praktische Hilfe rund ums Haus –
            persönlich organisiert und mit technischem Verständnis ausgeführt.
          </p>
        </div>

        {/* Company & Founder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">

          {/* Founder */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 lg:p-10">
              <div className="flex items-center gap-5 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-blue-700 to-emerald-600 flex items-center justify-center text-white shadow-md">
                  <UserRound className="h-8 w-8" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-emerald-600">
                    Gründer & Ansprechpartner
                  </p>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Sergey Kyslytsyn
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Hinter dem Unternehmen steht Sergey Kyslytsyn mit langjähriger
                Erfahrung im technischen Service und in der Instandhaltung.
              </p>

              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Seine berufliche Erfahrung umfasst Elektromechanik,
                Fehlersuche, Wartung und Reparatur von hydraulischen,
                mechanischen und elektrischen Systemen sowie den technischen
                Service.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarDays className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      Unternehmen gegründet 2026
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Neu gegründet – mit langjähriger beruflicher Erfahrung im Hintergrund.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      Wien & Niederösterreich
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Einsatz im vereinbarten regionalen Gebiet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="text-blue-700 font-bold uppercase tracking-widest text-xs">
                Unser Hintergrund
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900 tracking-tight">
                Neu gegründet. Mit viel praktischer Erfahrung.
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Unser Unternehmen wurde 2026 gegründet. Deshalb behaupten wir
              nicht, seit vielen Jahren als Hausmeisterbetrieb am Markt zu sein.
              Was wir mitbringen, ist etwas anderes: langjährige praktische
              Erfahrung aus Technik, Service und Instandhaltung.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Sergey Kyslytsyn arbeitet seit vielen Jahren im technischen
              Service. Zu seinen bisherigen Aufgaben gehörten Wartung,
              Diagnose und Reparatur sowie Serviceeinsätze an mobilen
              Arbeitsmaschinen. Dazu kamen die Planung von Serviceeinsätzen,
              technische Anleitung und Qualitätskontrolle.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Diese praktische Arbeitsweise nehmen wir in unseren neuen
              Hausservice mit: zuerst genau anschauen, was benötigt wird,
              den Arbeitsumfang klar besprechen und die vereinbarten Arbeiten
              sorgfältig ausführen.
            </p>

            {/* Experience highlight */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-blue-700 shrink-0 mt-0.5" />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Technischer Erfahrungshintergrund
                  </h3>

                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    Mehr als 30 Jahre Berufserfahrung in Technik und Service,
                    darunter über 20 Jahre als Elektromechaniker und
                    Servicetechniker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How we work */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
              Unsere Arbeitsweise
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-900 tracking-tight">
              Einfach und transparent
            </h2>

            <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
              Wir möchten keine komplizierten Abläufe. Sie beschreiben kurz,
              was gemacht werden soll – wir besprechen die nächsten Schritte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-600">
                  Unser Angebot
                </span>

                <h2 className="text-2xl font-extrabold text-slate-900">
                  Wobei wir helfen
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-700 rounded-3xl p-8 lg:p-10 text-white flex flex-col justify-between">
            <div>
              <span className="text-blue-100 font-bold uppercase tracking-widest text-xs">
                Unser Anspruch
              </span>

              <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold">
                Keine großen Versprechen – gute Arbeit.
              </h2>

              <p className="mt-5 text-blue-100 text-sm sm:text-base leading-relaxed">
                Wir sind ein neu gegründetes Unternehmen. Deshalb bauen wir
                unseren Kundenstamm Schritt für Schritt auf und möchten durch
                zuverlässige Arbeit, klare Kommunikation und persönliche
                Betreuung überzeugen.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <p className="text-sm text-blue-100">
                Hausbetreuung & Kleinreparaturen in Wien,
                Wiener Neustadt und Niederösterreich.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}