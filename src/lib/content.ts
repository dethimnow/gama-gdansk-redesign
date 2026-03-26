export const site = {
  name: "GAMA",
  title: "GAMA — transport i logistyka",
  description:
    "Transport międzynarodowy i krajowy, transport HDS, podesty ruchome, prace ziemne. GAMA SP Z O.O. Straszyn.",
  facebook: "https://www.facebook.com/Gama-Marek-Hinc-Spj-111066566258591/",
} as const;

export const nav = [
  { href: "/", label: "Start" },
  { href: "/transport-hds", label: "Transport HDS" },
  { href: "/podesty-ruchome", label: "Podesty ruchome" },
  { href: "/prace-ziemne", label: "Prace Ziemne" },
  { href: "/galeria", label: "Galeria" },
  { href: "/dokumenty", label: "Dokumenty" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const assets = {
  logoSvg: "https://gama-gdansk.pl/wp-content/uploads/2022/04/logo-gama.svg",
  heroStrip: "https://gama-gdansk.pl/wp-content/uploads/2022/04/gama-pasek.jpg",
  homeTruck: "https://gama-gdansk.pl/wp-content/uploads/2022/04/IMG_E8422.jpg",
  homeFleet1:
    "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.51.10.jpeg",
  homeFleet2:
    "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-10-at-10.37.06-1.jpeg",
  hdsHero: "https://gama-gdansk.pl/wp-content/uploads/2022/05/hds-2z.jpg",
  hdsCta: "https://gama-gdansk.pl/wp-content/uploads/2022/05/hds-3.jpg",
  hdsMain: "https://gama-gdansk.pl/wp-content/uploads/2022/05/IMG_8511m.jpg",
  marpolPng: "https://gama-gdansk.pl/wp-content/uploads/2022/04/logo-marpol.png",
  podestyCta: "https://gama-gdansk.pl/wp-content/uploads/2022/05/koszowe-1-1.jpg",
  ziemneCta: "https://gama-gdansk.pl/wp-content/uploads/2022/05/prace-ziemne-1.jpg",
  marpolLogoSvg: "https://gama-gdansk.pl/wp-content/uploads/2022/04/logo-marpol.svg",
} as const;

export const home = {
  taglines: [
    "Transport międzynarodowy",
    "Transport krajowy",
    "Transport HDS",
    "Spedycja",
  ],
  headline: "GAMA SP Z.O.O. Firma z zasadami",
  intro:
    "Firma działa w branży logistyczno-transportowej od 2005r. Odpowiadając na zmieniające się potrzeby rynku opracowywała nowoczesne rozwiązania w transporcie międzynarodowym. Jej podstawowym celem od zawsze jest zapewnienie klientom satysfakcji przez skuteczne i bezpieczne dostarczenie powierzonego ładunku do odbiorcy. Wykorzystując szerokie kwalifikację oraz doświadczenie wszystkich osób zaangażowanych w działalność firmy.",
  servicesIntro: "Świadczymy kompleksowe usługi w zakresie:",
  services: [
    "transportu krajowego",
    "transportu międzynarodowego w obrębie Europy",
    "transportu HDS, przeładunku i załadunku mobilnego",
    "spedycji",
  ],
  fleetParagraphs: [
    "W swojej ofercie posiadamy nowoczesny i wydajny tabor składający się z zestawów ciężarowych o różnorodnej charakterystyce min. Naczepy z tzw. Coilmuldami do przewozu rolek stali, otwierane dachy i boki umożliwiające wygodny załadunek i rozładunek towaru",
    "Platformy do transportu niewymiarowego",
    "Zestawy z tzw. HDSem do samodzielnego załadunku i rozładunku",
  ],
};

export const transportHds = {
  title: "Transport HDS",
  body: [
    "Oferujemy wszelkiego rodzaju usługi związane z wykorzystaniem żurawia przenośnego tzw. HDSa.",
    "Dzięki wysoko wyspecjalizowanemu urządzeniu z udźwigiem 15 ton, wysuwem 16m i pełnym obrotem wokół własnej osi jesteśmy w stanie podjąć się wielu robót załadunkowych, przewozowych czy rozładunkowych.",
    "Wykorzystywane przez nas samochody nie wymagają stosowania dodatkowych maszyn wspomagających proces transportu, co przekłada się na znacznie niższe koszty całości usługi.",
    "Duża gama zawiesi, łańcuchów, pasów i szekli umożliwia podjęcia się praktycznie każdego ładunku, a pojazd posiadający aż trzy skrętne osie idealnie radzi sobie w miejskich warunkach.",
    "Oferta skierowana do przedsiębiorstw, jak i osób prywatnych.",
  ],
  stats: [
    { label: "Udźwig", value: "15 ton" },
    { label: "Wysuw", value: "16 metrów" },
    { label: "Pełny obrót", value: "wokół własnej osi" },
  ],
  ctaPhone: "519 407 231",
  gallery: [
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-obpc7359.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_7297.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_6970.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_6828.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_6456.jpg",
  ] as const,
};

export const podesty = {
  title: "Podesty ruchome",
  paragraphs: [
    "W zakresie naszych usług znajduje się wynajem podestów ruchomych tzw. podnośników koszowych / zwyżek wraz z operatorem posiadającym stosowne uprawnienia, a także wykonywanie kompleksowych prac na wysokościach – posiadane doświadczenie i najwyższa jakość sprzętu umożliwiają nam realizowanie wszystkich zleceń, również tych najbardziej nietypowych.",
    "Stawiamy na różnorodność rozwiązań, oferując podesty ruchome sięgające na różne wysokości (od 16 do 27 m), a przy tym niezawodne w wykonywaniu różnych zadań zleconych przez Klienta.",
    "Każdy oferowany przez naszą firmę podnośnik koszowy ma aktualne badanie UDT, a nasi operatorzy są uprawnieni do sterowania urządzeniem przez owy urząd. Świadczymy usługi na terenie Trójmiasta oraz województwa pomorskiego.",
    "Oferta skierowana do przedsiębiorstw, jak i osób prywatnych.",
  ],
  ctaPhone: "501 025 563",
  gallery: [
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/koszowe-IMG_E8418.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/koszowe-IMG_E8417.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/koszowe-IMG_E8419.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/koszowe-IMG_E8416.jpg",
    "https://gama-gdansk.pl/wp-content/uploads/2022/04/koszowe-IMG_E8420.jpg",
  ] as const,
};

export const praceZiemne = {
  title: "Prace Ziemne",
  leadIntro: "Firma MARPOL oferuje wykonywanie ",
  leadHighlight: "usług koparko-ładowarką",
  leadRest:
    ". Jesteśmy w stanie realizować różnego rodzaju roboty ziemne, a także prowadzić prace przeładunkowe. Używany przez nas sprzęt jest bardzo uniwersalny i mobilny. Pozwala nam na świadczenie usług na rzecz firm budowlanych, remontowych oraz zajmujących się naprawą dróg. Obsługujemy także zleceniodawców indywidualnych. Pomagamy w kopaniu pod instalację pomp ciepła, basenów, zbiorników przydomowych oczyszczalni ścieków.",
  pillars: [
    { title: "Roboty ziemne", desc: "dla firm i os. indywidualnych" },
    { title: "Prace przeładunkowe", desc: "sprzęt jest uniwersalny i mobilny" },
    { title: "Wykopy pod instalacje", desc: "pompy ciepła, baseny, zbiorniki" },
  ],
  ctaPhone: "501 154 748",
};

export const galeriaImages = [
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/gama-ciagnik.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.51.11-2.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.51.11.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.51.10.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.51.10-1.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/gama-pasek.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/24293879_133783120653602_7681839835968400063_n.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/24174714_133783117320269_1286609123379435180_n-e1651678019308.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/25446392_137649733600274_6881366293559186015_n-e1651677986337.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/28167717_153188445379736_4816950306406247420_n.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/107089077_565961520769091_629710014675411625_n.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/72477607_401315117233733_3579479083685249024_n.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/IMG_7824.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/IMG_8083.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_6970.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_6828.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2022/04/transport-hds-marpol-img_6456.jpg",
  "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-10-at-10.37.06-1.jpeg",
  "https://gama-gdansk.pl/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.51.11-1.jpeg",
] as const;

export const dokumenty = [
  {
    title: "REGON",
    href: "https://gama-gdansk.pl/wp-content/uploads/2025/09/REGON.jpg",
  },
  {
    title: "Licencja transportowa",
    href: "https://gama-gdansk.pl/wp-content/uploads/2025/09/Transport-license.jpg",
  },
  {
    title: "KRS GAMA",
    href: "https://gama-gdansk.pl/wp-content/uploads/2025/09/KRS-GAMA.jpg",
  },
] as const;

export const kontakt = {
  gama: {
    name: "GAMA SP Z O.O.",
    lines: ["Transport międzynarodowy i krajowy", "GAMA"],
    address: "83-010 Straszyn ul. Zachodnia 27B",
    phones: [
      { label: "tel/fax.", number: "58 692 66 55", tel: "+48586926655" },
      { label: "tel/fax.", number: "58 740 52 15", tel: "+48587405215" },
      { label: "tel/fax.", number: "58 740 52 58", tel: "+48587405258" },
    ],
  },
  marpol: {
    name: "MARPOL Sp.j. Marek Hinc",
    brand: "MARPOL",
    address: "80-059 Gdańsk ul. Żuławska 80",
    lines: [
      { label: "Transport HDS", number: "519 407 231", tel: "+48519407231" },
      { label: "Podesty ruchome", number: "501 025 563", tel: "+48501025563" },
      { label: "Roboty ziemne", number: "501 154 748", tel: "+48501154748" },
    ],
  },
  mapQuery: "83-010 Straszyn ul. Zachodnia 27B",
};
