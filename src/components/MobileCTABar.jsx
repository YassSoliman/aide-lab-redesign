import { Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cacao border-t border-white/10 safe-area-bottom">
      <div className="flex">
        <a
          href="tel:450-937-5191"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-stone text-sm font-medium
            border-r border-white/10 active:bg-white/5 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
        <Link
          to="/fr/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-azure text-white text-sm font-medium
            active:bg-azure-dark transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Nous joindre
        </Link>
      </div>
    </div>
  )
}
