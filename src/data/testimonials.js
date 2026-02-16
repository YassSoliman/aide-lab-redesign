export const testimonials = [
  {
    id: 1,
    name: "Dr. Marie Tremblay",
    clinic: "Clinique Dentaire Montréal-Nord",
    quote: "AIDE Lab a transformé notre pratique. La qualité des couronnes est exceptionnelle et le service sur place est inégalé dans l'industrie.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Jean-François Dubois",
    clinic: "Centre Dentaire Laval",
    quote: "Leur expertise en implants et la planification 3D nous permettent d'offrir le meilleur à nos patients. Un partenaire de confiance.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Sophie Bergeron",
    clinic: "Clinique Sourire Plus",
    quote: "Partenaire fiable depuis 5 ans. Délais respectés, communication excellente, qualité irréprochable. Je recommande sans hésitation.",
    rating: 5
  }
]

export const services = [
  {
    id: 1,
    title: "Implants",
    description: "Notre expertise vous offre des produits d'une haute qualité et d'un esthétisme inégalé. Technologies de pointe pour des résultats parfaits.",
    image: "http://www.aidelab.com/sites/all/themes/aidelab/images/home-services/service-assistance.jpg",
    link: "/fr/produits/implants"
  },
  {
    id: 2,
    title: "Couronnes & Ponts",
    description: "Redonnez à vos patients le goût de sourire à pleines dents. Précision artisanale combinée à la technologie moderne.",
    image: "http://www.aidelab.com/sites/all/themes/aidelab/images/home-services/choix-de-couleurs.jpg",
    link: "/fr/produits/couronnes-et-ponts"
  },
  {
    id: 3,
    title: "Planification 3D",
    description: "Visualisez et planifiez chaque cas avec précision grâce à nos outils de modélisation 3D de dernière génération.",
    image: "http://www.aidelab.com/sites/all/themes/aidelab/images/home-services/nobelclinician-software-small.jpg",
    link: "/fr/produits/implants#produits-27"
  },
  {
    id: 4,
    title: "Assistance sur place",
    description: "Profitez de notre expertise directement à votre clinique pour vos cas les plus complexes.",
    image: "http://www.aidelab.com/sites/all/themes/aidelab/images/home-services/service-assistance.jpg",
    link: "/fr/services"
  }
]

export const partners = [
  { name: "Nobel Biocare", logo: "http://www.aidelab.com/sites/default/files/logo-nobel-biocare.jpg" },
  { name: "Straumann", logo: "http://www.aidelab.com/sites/default/files/logo-straumann.jpg" },
  { name: "Zirkonzahn", logo: "http://www.aidelab.com/sites/default/files/logo-zirkonzahn.jpg" },
  { name: "Ivoclar Vivadent", logo: "http://www.aidelab.com/sites/default/files/logo-ivoclar-vivadent.jpg" },
  { name: "Astratech Dental", logo: "http://www.aidelab.com/sites/default/files/logo-astratech.jpg" },
  { name: "Atlantis", logo: "http://www.aidelab.com/sites/default/files/logo-atlantis.jpg" },
  { name: "Camlog", logo: "http://www.aidelab.com/sites/default/files/logo-camlog.jpg" },
  { name: "Implant Direct", logo: "http://www.aidelab.com/sites/default/files/logo-implant-direct.jpg" }
]

export const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Produits",
    href: "/fr/produits",
    children: [
      { name: "Implants", href: "/fr/produits/implants" },
      { name: "Couronnes et ponts", href: "/fr/produits/couronnes-et-ponts" },
      { name: "Autres produits", href: "/fr/produits/autres" },
      { name: "Cas de réhabilitation", href: "/fr/produits/cas-de-rehabilitation" }
    ]
  },
  { name: "Services", href: "/fr/services" },
  { name: "À propos", href: "/fr/a-propos" },
  { name: "Nous joindre", href: "/fr/contact" }
]
