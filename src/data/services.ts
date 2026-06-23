import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'hausmeisterservice',
    title: 'Hausbetreuung',
    iconName: 'Home',
    shortDesc: 'Komplettservice für Wohnanlagen und Gewerbeobjekte in Wien und Umgebung.',
    longDesc: 'Unsere professionelle Hausbetreuung Wien kümmert sich um die umfassende Werterhaltung Ihrer Immobilie. Wir sorgen für Sauberkeit, technische Funktionsfähigkeit und Ordnung in der gesamten Anlage. Als Ihr verlässlicher Hausmeister Wien übernehmen wir die tägliche Betreuung und Kontrolle aller Räumlichkeiten, Außenbereiche und technischen Anlagen.',
    category: 'maintenance',
    pricingBasis: 'Monatlicher Pauschalpreis (nach Objektgröße)',
    features: [
      'Regelmäßige Kontrollgänge durch die gesamte Anlage',
      'Überwachung der Haustechnik und Beleuchtung',
      'Müllbereitstellung und Reinigung der Müllplätze',
      'Ansprechpartner für Mieter und Verwaltung bei Störungen',
      'Schnittstelle zu Professionisten und Handwerkern'
    ]
  },
  {
    id: 'gartenpflege',
    title: 'Gartenpflege',
    iconName: 'Sprout',
    shortDesc: 'Fachgerechte Pflege von Grünanlagen, Beeten und Sträuchern für ein gepflegtes Erscheinungsbild.',
    longDesc: 'Grünflächen sind die Visitenkarte Ihres Objekts. Unsere Gartenpflege Wien sorgt zu jeder Jahreszeit für gesunde, vitale und ästhetische Grünanlagen. Wir übernehmen den professionellen Baum- und Strauchschnitt, säubern Blumenbeete, entfernen Unkraut und entsorgen den Grünschnitt fachgerecht nach österreichischen Umweltstandards.',
    category: 'gardening',
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
    category: 'gardening',
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
    iconName: 'Sparkles',
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
    shortDesc: 'Schnelle Behebung kleinerer Defekte im und rund um das Gebäude.',
    longDesc: 'Kleine Mängel sollten sofort behoben werden, bevor größere Schäden entstehen. Unser flexibler Hausmeisterservice kümmert sich rasch und unkompliziert um Kleinreparaturen im Allgemeinbereich oder direkt in vermieteten Objekten. Wir reparieren defekte Türschlösser, sichern lockere Geländer und beheben kleinere Beschädigungen an Wänden oder Böden.',
    category: 'maintenance',
    pricingBasis: 'Nach Zeitaufwand und Materialkosten',
    features: [
      'Justieren und Schmieren von Türen und Fenstern',
      'Austausch defekter Türschließer und Zylinder',
      'Kleine Ausbesserungsarbeiten an Wänden und Putz',
      'Befestigung von losen Fliesen oder Leisten',
      'Einfache Montage- und Demontagearbeiten'
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
    shortDesc: 'Regelmäßige Überprüfung von Leerständen und technischen Anlagen zur Risikominderung.',
    longDesc: 'Die professionelle Objektbetreuung Wien umfasst auch die regelmäßige Überprüfung leerstehender Wohnungen oder Gewerbeflächen sowie technischer Anlagen (Heizung, Lüftung, Aufzug). Wir dokumentieren jeden Kontrollgang akribisch, lüften Räumlichkeiten zur Schimmelvermeidung und spülen Wasserleitungen gegen Legionellenbildung.',
    category: 'maintenance',
    pricingBasis: 'Pauschale pro Kontrollgang',
    features: [
      'Sichtkontrolle auf Einbruchspuren oder Vandalismus',
      'Spülen aller Zapfstellen (Legionellenprävention bei Leerstand)',
      'Kontrolle der Dächer und Dachrinnen nach Unwettern',
      'Zählerstandserfassung und Dokumentation von Verbrauchswerten',
      'Sofortige Meldung von Gefahr im Verzug an die Hausverwaltung'
    ]
  },
  {
    id: 'lampenwechsel',
    title: 'Lampenwechsel',
    iconName: 'Lightbulb',
    shortDesc: 'Austausch defekter Leuchtmittel im Stiegenhaus, Keller und Außenbereich.',
    longDesc: 'Sicherheit im Gebäude fängt bei funktionierender Beleuchtung an. Dunkle Flure oder schlecht beleuchtete Außenbereiche stellen ein erhebliches Sturz- und Einbruchsrisiko dar. Im Rahmen unserer Objektbetreuung wechseln wir defekte Leuchtmittel im gesamten Objekt umgehend aus und rüsten auf Wunsch auf energieeffiziente LED-Systeme um.',
    category: 'maintenance',
    pricingBasis: 'Materialkosten + kurze Arbeitspauschale',
    features: [
      'Regelmäßige Kontrolle aller Lichtquellen (Stiegenhaus, Keller, Tiefgarage)',
      'Fachgerechter Tausch von Glühbirnen, Leuchtstoffröhren und LED-Modulen',
      'Prüfung von Bewegungsmeldern und Zeitschaltuhren',
      'Reinigung verschmutzter Lampenabdeckungen',
      'Fachgerechte Entsorgung von quecksilberhaltigen Leuchtmitteln'
    ]
  },
  {
    id: 'notdienst',
    title: 'Hausmeister Notdienst',
    iconName: 'PhoneCall',
    shortDesc: '24/7 Notfalleinsatz bei Wasserrohrbruch, Stromausfall oder Sturmschäden.',
    longDesc: 'Notfälle halten sich nicht an Bürozeiten. Unser Hausmeister Notdienst steht Ihnen 24 Stunden am Tag, 7 Tage die Woche zur Verfügung. Bei akuten Ereignissen wie Heizungsausfall im Winter, Wasserrohrbruch, Sturmschäden oder Stromausfall schicken wir sofort einen geschulten Mitarbeiter, um weiteren Schaden von Ihrem Gebäude abzuwenden.',
    category: 'emergency',
    pricingBasis: 'Einsatzpauschale nach Uhrzeit und Wochentag',
    features: [
      '24/7 telefonische Erreichbarkeit an 365 Tagen im Jahr',
      'Schnelle Reaktionszeit im Wiener Stadtgebiet',
      'Erstmaßnahmen zur Schadenseindämmung (z.B. Absperren von Wasser)',
      'Koordination und Einweisung von Spezial-Notdiensten',
      'Detaillierte Schadensdokumentation und Fotos für die Versicherung'
    ]
  }
];
