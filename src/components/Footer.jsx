import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import Logo from './Logo'

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
  { name: "Autres produits", href: "/fr/produits/autres" },
  { name: "Cas de réhabilitation", href: "/fr/produits/cas-de-rehabilitation" }
]

export default function Footer({ theme }) {
  const isDark = theme === 'dark'
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${isDark ? 'bg-ink-lighter' : 'bg-ink'} text-stone`}>
      {/* Main footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <Logo inverted={true} className="h-10" />
            </a>
            <p className="text-stone/60 text-sm leading-relaxed mb-6">
              Nos experts ne cessent de surveiller les actualités du domaine
              en plus de suivre plusieurs formations par an afin d'introduire
              les nouvelles technologies dans leurs processus.
            </p>

            {/* Social icons placeholder */}
            <div className="flex gap-3">
              {['facebook', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center
                    bg-white/5 hover:bg-coral hover:text-white
                    transition-all duration-200"
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
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone/70 hover:text-coral transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-stone/40 mb-6">
              Produits
            </h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone/70 hover:text-coral transition-colors duration-200 link-underline"
                  >
                    {link.name}
                  </a>
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
                  href="https://www.google.ca/maps/place/4080+Boul+le+Corbusier,+Laval,+QC+H7L+4S8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-stone/70 hover:text-coral
                    transition-colors duration-200 group"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    4080 boulevard Le Corbusier
                    <br />
                    Laval, Qc H7L 5R2
                    <ExternalLink className="w-3 h-3 inline ml-2 opacity-0 group-hover:opacity-100
                      transition-opacity" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:1-888-350-2246"
                  className="flex items-center gap-3 text-stone/70 hover:text-coral
                    transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>1 (888) 350-2246</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:450-937-5191"
                  className="flex items-center gap-3 text-stone/70 hover:text-coral
                    transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(450) 937-5191</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-stone/70">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Lun - Ven: 8h - 17h</span>
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
              © {currentYear} Laboratoire AIDE. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-stone/40">
              <a href="#" className="hover:text-coral transition-colors">
                Politique de confidentialité
              </a>
              <span>·</span>
              <span className="font-mono">FR / EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
