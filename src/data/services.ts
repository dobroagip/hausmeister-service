import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'hausmeisterservice',
    title: 'Hausbetreuung',
    iconName: 'Home',
    shortDesc: 'Zuverlässige Betreuung von Häusern, Wohnungen und allgemeinen Bereichen.',
    longDesc: 'Zuverlässige Betreuung von Häusern, Wohnungen und allgemeinen Bereichen. Wir übernehmen regelmäßige Kontrollgänge und einfache Arbeiten rund um die Immobilie.',
    category: 'HAUSSERVICE',
    pricingBasis: 'Monatlicher Pauschalpreis (nach Objektgröße)',
    features: [
       'Regelmäßige Kontrollgänge',
    'Kontrolle von allgemeinen Bereichen',
    'Einfache Arbeiten rund um Haus und Objekt'
  ]
  },
  {
    id: 'gartenpflege',
    title: 'Gartenpflege',
    iconName: 'Sprout',
    shortDesc: 'Fachgerechte Pflege von Grünanlagen, Beeten und Sträuchern für ein gepflegtes Erscheinungsbild.',
    longDesc: 'Grünflächen sind die Visitenkarte Ihres Objekts. Unsere Gartenpflege Wien sorgt zu jeder Jahreszeit für gesunde, vitale und ästhetische Grünanlagen. Wir übernehmen den professionellen Baum- und Strauchschnitt, säubern Blumenbeete, entfernen Unkraut und entsorgen den Grünschnitt fachgerecht nach österreichischen Umweltstandards.',
    category: 'Gartenservice',
    pricingBasis: 'Stundensatz oder Saison-Pauschale',
    features: [
      'Professioneller Hecken- und Sträucherschnitt',
      'Unkrautbeseitigung in Beeten und Gehwegritzen',
      'Laubbeseitigung im Herbst',
      'Bewässerungsservice während der Sommermonate',
      'Fachgerechte Entsorgung des anfallenden Grünschnitts'
    ]
  },
  {
    id: 'rasenmaehen',
    title: 'Rasenmähen',
    iconName: 'Scissors',
    shortDesc: 'Regelmäßiger Rasenschnitt und Kantenpflege für dichten, grünen Rasen.',
    longDesc: 'Ein gepflegter Rasen erfordert Kontinuität. Wir übernehmen das regelmäßige Rasenmähen für Wohnhausanlagen, Gewerbeobjekte und Privatgärten im Großraum Wien. Mit modernen, lärmreduzierten Geräten kürzen wir den Rasen auf die optimale Höhe, pflegen die Rasenkanten und düngen oder vertikutieren bei Bedarf, um Moosbildung vorzubeugen.',
    category: 'Gartenservice',
    pricingBasis: 'Pro Quadratmeter oder Pauschale pro Durchgang',
    features: [
      'Präzises Mähen auch an Hanglagen und Engstellen',
      'Sauberes Trimmen aller Rasenkanten',
      'Fachgerechte Rasendüngung für sattgrüne Flächen',
      'Vertikutieren zur Belüftung des Bodens (Frühjahr/Herbst)',
      'Sofortiger Abtransport des Schnittguts'
    ]
  },
  {
    id: 'winterdienst',
    title: 'Winterdienst',
    iconName: 'Snowflake',
    shortDesc: 'Sichere Schneeräumung und Streuung gemäß § 93 StVO in Wien und Umgebung.',
    longDesc: 'Der Winterdienst Wien stellt sicher, dass Gehwege, Parkplätze und Zufahrten auch bei starkem Schneefall und Glätte sicher begehbar sind. Wir haften für die vorschriftsmäßige Räumung und Streuung gemäß den gesetzlichen Vorgaben in Österreich (§ 93 StVO) im Zeitraum vom 1. November bis 15. April, rund um die Uhr.',
    category: 'emergency',
    pricingBasis: 'Saison-Pauschale (inklusive Haftungsübernahme)',
    features: [
      'Schneeräumung und Glatteisbekämpfung rund um die Uhr',
      'Überwachung der Wetterdaten für rechtzeitige Einsätze',
      'Verwendung von umweltfreundlichem Streugut',
      'Splittkehrung am Ende der Wintersaison',
      'Volle Haftungsübernahme für die geräumten Flächen'
    ]
  },
  {
    id: 'stiegenhausreinigung',
    title: 'Stiegenhausreinigung',
    iconName: 'Building2',
    shortDesc: 'Gründliche Reinigung des Treppenhauses für ein hygienisches und einladendes Gebäude.',
    longDesc: 'Die Stiegenhausreinigung ist ein wesentlicher Aspekt der Gebäudebetreuung Wien. Ein sauberes Stiegenhaus steigert das Wohlbefinden der Bewohner und sichert den langfristigen Wert des Hauses. Mit umweltschonenden Reinigungsmitteln säubern wir Stufen, Handläufe, Fenster, Aufzüge und Eingangsbereiche gründlich und effizient.',
    category: 'cleaning',
    pricingBasis: 'Pauschale pro Reinigungstermin',
    features: [
      'Nasswischen aller Stiegen und Podeste',
      'Abwischen von Geländern, Handläufen und Briefkästen',
      'Reinigung des Aufzugs (inkl. Spiegel und Edelstahlflächen)',
      'Reinigung der Hauseingangstüren und Glassegmente',
      'Regelmäßige Fensterreinigung im Allgemeinbereich'
    ]
  },

    {
  id: 'kleinreparaturen',

  title: 'Kleinreparaturen',

  iconName: 'Wrench',

  shortDesc:
    'Kleine Reparaturen und praktische Arbeiten rund um Haus und Wohnung.',

  longDesc:
    'Wir übernehmen kleine Reparaturen und praktische Arbeiten rund um Haus und Wohnung. Dazu gehören einfache Arbeiten, kleinere Ausbesserungen und Montagen – zuverlässig und unkompliziert.',

  category: 'HAUSSERVICE',

  pricingBasis: 'Nach Zeitaufwand und Materialkosten',

  features: [
    'Kleine Ausbesserungsarbeiten',
    'Einfache Montagearbeiten',
    'Befestigung und Nachjustierung von Bauteilen',
    'Kleine Arbeiten an Türen, Fenstern und Beschlägen',
    'Austausch einfacher Bauteile und Leuchtmittel'
  ]
},
  {
    id: 'entruempelung',
    title: 'Entrümpelung',
    iconName: 'Trash2',
    shortDesc: 'Fachgerechte Räumung von Kellern, Dachböden und Wohnungen mit umweltgerechter Entsorgung.',
    longDesc: 'Ob Mieterwechsel, Haushaltsauflösung oder Kellerüberfüllung: Wir sorgen für eine besenreine Entrümpelung Ihrer Räumlichkeiten. Wir sortieren Altstoffe, Sperrmüll und Problemstoffe präzise und übergeben sie lizenzierten Entsorgungsbetrieben. Verlassen Sie sich auf eine diskrete, schnelle und besenreine Durchführung.',
    category: 'cleaning',
    pricingBasis: 'Festpreis nach Besichtigung (kostenfreie Erstbesichtigung)',
    features: [
      'Besenreine Ausräumung aller gewünschten Räume',
      'Fachsortierung nach Holz, Metall, Bauschutt und Restmüll',
      'Räumung von Messie-Wohnungen und Problemfällen',
      'Fachgerechte und umweltschonende Entsorgungsnachweise',
      'Demontage von fest eingebauten Möbeln'
    ]
  },
 {
  id: 'objektkontrollen',

  title: 'Objektkontrollen',

  iconName: 'ShieldCheck',

  shortDesc:
    'Regelmäßige Kontrollgänge zur Überprüfung von Haus, Wohnung und Objekt.',

  longDesc:
    'Regelmäßige Kontrollgänge helfen dabei, Auffälligkeiten und sichtbare Veränderungen an einer Immobilie frühzeitig zu erkennen. Wir kontrollieren die allgemein zugänglichen Bereiche und achten auf offensichtliche Schäden oder Unregelmäßigkeiten.',

  category: 'HAUSSERVICE',

  pricingBasis: 'Pauschale pro Kontrollgang',

  features: [
    'Kontrolle allgemein zugänglicher Bereiche',
    'Sichtkontrolle auf offensichtliche Schäden',
    'Kontrolle von Türen, Fenstern und Beleuchtung',
    'Feststellung sichtbarer Auffälligkeiten',
    'Dokumentation der Kontrollgänge'
  ]
},
  {
  id: 'lampenwechsel',

  title: 'Lampenwechsel',

  iconName: 'Lightbulb',

  shortDesc:
    'Austausch zugänglicher Leuchtmittel in Haus, Wohnung und allgemeinen Bereichen.',

  longDesc:
    'Defekte Leuchtmittel können schnell und unkompliziert ausgetauscht werden. Wir übernehmen den Austausch zugänglicher Leuchtmittel in Wohnungen, Häusern und allgemein zugänglichen Bereichen – zuverlässig und nach Vereinbarung.',

  category: 'HAUSSERVICE',

  pricingBasis: 'Materialkosten + Arbeit nach Zeitaufwand',

  features: [
    'Austausch zugänglicher Leuchtmittel',
    'Austausch von Glühbirnen und LED-Leuchtmitteln',
    'Lampenwechsel in Stiegenhaus und Keller',
    'Austausch von Leuchtmitteln im Außenbereich',
    'Entsorgung der ausgetauschten Leuchtmittel'
  ]
},
  {
    id: 'notdienst',
    title: 'Hausmeister Notdienst',
    iconName: 'PhoneCall',
    shortDesc: 'Notfalleinsatz bei Wasserrohrbruch, Stromausfall oder Sturmschäden.',
    longDesc: 'Notfälle halten sich nicht an Bürozeiten. Unser Hausmeister Notdienst ist auch außerhalb der regulären Geschäftszeiten für Sie erreichbar. Bei akuten Ereignissen wie Heizungsausfall im Winter, Wasserrohrbruch, Sturmschäden oder Stromausfall bemühen wir uns, schnell einen Mitarbeiter zu entsenden, um weiteren Schaden von Ihrem Gebäude abzuwenden.',
    category: 'emergency',
    pricingBasis: 'Einsatzpauschale nach Uhrzeit und Wochentag',
    features: [
      'Telefonische Erreichbarkeit auch außerhalb der Geschäftszeiten',
      'Schnelle Reaktion im Wiener Stadtgebiet',
      'Erstmaßnahmen zur Schadenseindämmung (z.B. Absperren von Wasser)',
      'Koordination und Einweisung von Spezial-Notdiensten',
      'Detaillierte Schadensdokumentation und Fotos für die Versicherung'
    ]
  }
];
