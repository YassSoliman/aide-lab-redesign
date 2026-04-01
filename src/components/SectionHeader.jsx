import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', inView = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-2xl-fluid text-cacao ${align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed text-cacao/70 ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
