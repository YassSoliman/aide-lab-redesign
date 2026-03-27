import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductCard({ image, imageAlt, title, description, link, linkLabel = "En savoir plus", index = 0, inView = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white border border-ink/5 hover:border-coral/20 transition-all duration-500
        hover:shadow-2xl hover:shadow-coral/5"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-display text-xl-fluid text-ink mb-2">
          {title}
        </h3>
        <p className="text-ink/60 leading-relaxed mb-6">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-coral-dark hover:gap-3 transition-all duration-300 font-medium"
        >
          {linkLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}
