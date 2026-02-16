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
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    link: "/fr/produits/implants"
  },
  {
    id: 2,
    title: "Couronnes & Ponts",
    description: "Redonnez à vos patients le goût de sourire à pleines dents. Précision artisanale combinée à la technologie moderne.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
    link: "/fr/produits/couronnes-et-ponts"
  },
  {
    id: 3,
    title: "Planification 3D",
    description: "Visualisez et planifiez chaque cas avec précision grâce à nos outils de modélisation 3D de dernière génération.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop",
    link: "/fr/produits/implants#produits-27"
  },
  {
    id: 4,
    title: "Assistance sur place",
    description: "Profitez de notre expertise directement à votre clinique pour vos cas les plus complexes.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
    link: "/fr/services"
  }
]

export const partners = [
  { name: "Nobel Biocare", initials: "NB", color: "#003366" },
  { name: "Straumann", initials: "S", color: "#E31937" },
  { name: "Zirkonzahn", initials: "ZZ", color: "#1A1A1A" },
  { name: "Ivoclar Vivadent", initials: "IV", color: "#00529B" },
  { name: "Dentsply Sirona", initials: "DS", color: "#0066B3" },
  { name: "Atlantis", initials: "A", color: "#00A3E0" },
  { name: "Camlog", initials: "CL", color: "#E85A4F" },
  { name: "Implant Direct", initials: "ID", color: "#6B8E23" }
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
