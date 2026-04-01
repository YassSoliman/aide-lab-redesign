import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle, backgroundImage }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-stone">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone via-stone/95 to-stone/80" />
        </div>
      )}

      <div className="hidden md:block absolute top-1/3 right-0 w-96 h-96 rounded-full bg-azure/5 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-2xl-fluid text-cacao mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl leading-relaxed text-cacao/70 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
