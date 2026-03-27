export const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Produits",
    href: "/fr/produits",
    children: [
      { name: "Implants", href: "/fr/produits/implants" },
      { name: "Couronnes et ponts", href: "/fr/produits/couronnes-et-ponts" },
      { name: "Autres produits", href: "/fr/produits/autres-produits" }
    ]
  },
  { name: "Services", href: "/fr/services" },
  { name: "\u00C0 propos", href: "/fr/a-propos" },
  { name: "Nous joindre", href: "/fr/contact" }
]
