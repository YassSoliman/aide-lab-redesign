import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductSection({ title, description, images = [], reverse = false, id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id={id} className="section-padding bg-stone scroll-mt-24">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={reverse ? 'lg:order-2 lg:direction-ltr' : 'lg:direction-ltr'}
          >
            <h2 className="font-display text-xl-fluid text-cacao mb-6">
              {title}
            </h2>
            {description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-cacao/70 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <Link
              to="/fr/contact"
              className="inline-flex items-center gap-2 mt-4 text-azure-dark hover:gap-3 transition-all duration-300 font-medium"
            >
              Des questions? Contactez-nous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={reverse ? 'lg:order-1 lg:direction-ltr' : 'lg:direction-ltr'}
          >
            {images.map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
