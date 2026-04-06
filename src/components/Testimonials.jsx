import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize, Quote } from 'lucide-react'

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const progressRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
    }

    video.addEventListener('timeupdate', updateProgress)
    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('timeupdate', updateProgress)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (!hasInteracted) setHasInteracted(true)

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(!isMuted)
  }

  const handleProgressClick = (e) => {
    const video = videoRef.current
    const bar = progressRef.current
    if (!video || !bar) return
    const rect = bar.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    video.currentTime = pct * video.duration
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cacao"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-azure/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-azure/5 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20"
        >
          <span className="inline-block text-sm font-mono tracking-widest uppercase text-azure/70">
            Témoignage
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Video column — takes 7 of 12 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Video container */}
            <div
              className="relative aspect-video overflow-hidden cursor-pointer group"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/dr-stutman-testimonial.mp4"
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster=""
              />

              {/* Dark vignette overlay — fades on play */}
              <div
                className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                style={{
                  opacity: isPlaying ? 0 : 1,
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(60,31,25,0.5) 100%)',
                }}
              />

              {/* Play button — center */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  isPlaying && hasInteracted ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
                    bg-white/15 backdrop-blur-md border border-white/20
                    transition-colors duration-300 hover:bg-white/25"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  ) : (
                    <Play className="w-6 h-6 md:w-7 md:h-7 text-white ml-1" />
                  )}
                </motion.div>
              </div>

              {/* Bottom controls bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 transition-opacity duration-400
                  bg-gradient-to-t from-cacao/80 to-transparent ${
                    hasInteracted ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <div className="flex items-center gap-3">
                  {/* Progress bar */}
                  <div
                    ref={progressRef}
                    className="flex-1 h-1 bg-white/20 cursor-pointer rounded-full overflow-hidden group/bar"
                    onClick={(e) => { e.stopPropagation(); handleProgressClick(e) }}
                  >
                    <div
                      className="h-full bg-azure transition-[width] duration-100 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Mute toggle */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 text-white/70 hover:text-white transition-colors"
                    aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Fullscreen toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      const container = videoRef.current?.parentElement
                      if (!container) return
                      if (document.fullscreenElement) {
                        document.exitFullscreen()
                      } else {
                        container.requestFullscreen()
                      }
                    }}
                    className="p-1.5 text-white/70 hover:text-white transition-colors"
                    aria-label="Plein écran"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="hidden md:block absolute -top-3 -left-3 w-10 h-10 border-t border-l border-azure/30" />
            <div className="hidden md:block absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-azure/30" />
          </motion.div>

          {/* Text column — takes 5 of 12 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Quote */}
            <div className="relative mb-10">
              <Quote className="absolute -top-6 -left-2 w-12 h-12 text-azure/15" />
              <blockquote className="relative z-10">
                <p className="font-display text-xl-fluid italic leading-snug text-stone/90">
                  I've never seen such accuracy out of anything that I've done before.
                </p>
              </blockquote>
            </div>

            {/* Doctor info — editorial card */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center
                  text-lg font-display bg-azure/15 text-azure border border-azure/20">
                  PS
                </div>
                <div>
                  <div className="font-medium text-lg text-stone">
                    Dr. Peter Stutman
                  </div>
                  <div className="text-sm font-mono text-azure/70 tracking-wide">
                    Prosthodontiste
                  </div>
                </div>
              </div>

              {/* Credential tags */}
              <div className="flex flex-wrap gap-2">
                {['Implants', 'Prothèses', 'Cas complexes'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-mono tracking-wide
                      text-stone/40 border border-white/8 bg-white/3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust stats — bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 md:mt-28 pt-10 border-t border-white/8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display text-azure">Laval, QC</div>
              <div className="text-xs font-mono uppercase tracking-wide text-stone/35 mt-1">
                Fabriqué au Québec
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display text-azure">Sur place</div>
              <div className="text-xs font-mono uppercase tracking-wide text-stone/35 mt-1">
                Assistance en clinique
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display text-azure">2007</div>
              <div className="text-xs font-mono uppercase tracking-wide text-stone/35 mt-1">
                Année de fondation
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
