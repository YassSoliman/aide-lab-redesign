import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/contact'

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Produits", href: "/fr/produits" },
  { name: "Services", href: "/fr/services" },
  { name: "À propos", href: "/fr/a-propos" },
  { name: "Nous joindre", href: "/fr/contact" }
]

const products = [
  { name: "Implants", href: "/fr/produits/implants" },
  { name: "Couronnes et ponts", href: "/fr/produits/couronnes-et-ponts" },
  { name: "Autres produits", href: "/fr/produits/autres-produits" }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cacao text-stone border-t border-azure-light/15 pb-16 md:pb-0">
      {/* Main footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-white.png"
                alt="AIDE Lab"
                className="h-10"
              />
            </Link>
            <p className="text-stone/60 text-sm leading-relaxed mb-6">
              Nos experts ne cessent de surveiller les actualités du domaine
              en plus de suivre plusieurs formations par an afin d'introduire
              les nouvelles technologies dans leurs processus.
            </p>

            <div className="flex gap-3">
              {['facebook', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center
                    bg-white/5 hover:bg-azure hover:text-white
                    transition-all duration-200 active:scale-95"
                  aria-label={social}
                >
                  <span className="text-xs font-mono uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-stone/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-stone/70 hover:text-azure transition-colors duration-200 link-underline py-1.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-stone/40 mb-6">
              Produits
            </h4>
            <ul className="space-y-2">
              {products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-stone/70 hover:text-azure transition-colors duration-200 link-underline py-1.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-stone/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={contactInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-stone/70 hover:text-azure
                    transition-colors duration-200 group"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}, {contactInfo.address.province}
                    <ExternalLink className="w-3 h-3 inline ml-2 opacity-0 group-hover:opacity-100
                      transition-opacity" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.phones.tollFree.href}
                  className="flex items-center gap-3 text-stone/70 hover:text-azure
                    transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{contactInfo.phones.tollFree.number}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.phones.local.href}
                  className="flex items-center gap-3 text-stone/70 hover:text-azure
                    transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{contactInfo.phones.local.number}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-stone/70">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone/40 text-sm">
              © 2007–{currentYear} Laboratoire Dentaire AIDE. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-sm text-stone/40">
              <a href="#" className="hover:text-azure transition-colors py-1">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
