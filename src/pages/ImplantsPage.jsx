import useDocumentMeta from '../hooks/useDocumentMeta'
import useSmoothScroll from '../hooks/useSmoothScroll'
import PageHero from '../components/PageHero'
import ProductSection from '../components/ProductSection'
import Partners from '../components/Partners'
import CTASection from '../components/CTASection'
import { implantProducts } from '../data/products'

export default function ImplantsPage() {
  useDocumentMeta({
    title: 'Implants dentaires',
    description: 'Proth\u00e8ses fixes, piliers personnalis\u00e9s, barres, guides chirurgicaux et assistance sur place. Compatibles avec tous les syst\u00e8mes majeurs.'
  })

  const scrollTo = useSmoothScroll()

  return (
    <>
      <PageHero
        eyebrow="IMPLANTS"
        title="Pr\u00e9cision et esth\u00e9tisme pour les cas les plus complexes"
        subtitle="Nos solutions d'implants couvrent l'ensemble du processus, de la planification 3D \u00e0 l'assistance chirurgicale sur place."
      />

      {/* Quick anchor nav */}
      <div className="sticky top-20 md:top-24 z-30 bg-white/90 backdrop-blur-sm border-b border-ink/5">
        <div className="container-custom">
          <nav className="flex overflow-x-auto no-scrollbar gap-1 py-3" aria-label="Sections implants">
            {implantProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => scrollTo(product.id)}
                className="flex-shrink-0 px-4 py-2 text-sm text-ink/60 hover:text-coral-dark
                  hover:bg-ink/5 transition-colors whitespace-nowrap"
              >
                {product.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Product sections */}
      {implantProducts.map((product, i) => (
        <ProductSection
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          images={product.images}
          reverse={i % 2 === 1}
        />
      ))}

      {/* Partners */}
      <div className="border-t border-ink/5">
        <Partners />
      </div>

      <CTASection
        headline="Discutons de votre prochain cas d'implants"
        description="Notre \u00e9quipe est pr\u00eate \u00e0 vous accompagner pour vos cas les plus complexes."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "1 (888) 350-2246", href: "tel:1-888-350-2246" }}
      />
    </>
  )
}
