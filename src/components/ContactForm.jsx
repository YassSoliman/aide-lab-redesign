import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', clinic: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Le nom est requis"
    if (!form.email.trim()) errs.email = "Le courriel est requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Courriel invalide"
    if (!form.message.trim()) errs.message = "Le message est requis"
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      // TODO: Connect to backend
      setSubmitted(true)
    }
  }

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-azure mx-auto mb-6" />
        <h3 className="font-display text-xl-fluid text-cacao mb-2">Merci!</h3>
        <p className="text-cacao/70">Notre équipe vous répondra dans les 24 heures.</p>
      </motion.div>
    )
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-white border text-cacao placeholder:text-cacao/40 outline-none transition-all duration-300
    focus:border-azure/50 focus:ring-1 focus:ring-azure/20
    ${errors[field] ? 'border-red-400' : 'border-cacao/10'}`

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cacao mb-1.5">Nom complet *</label>
          <input id="name" type="text" value={form.name} onChange={handleChange('name')}
            placeholder="Dr. Jean Tremblay" className={inputClass('name')} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cacao mb-1.5">Courriel *</label>
          <input id="email" type="email" value={form.email} onChange={handleChange('email')}
            placeholder="dr.tremblay@clinique.com" className={inputClass('email')} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cacao mb-1.5">Téléphone</label>
          <input id="phone" type="tel" value={form.phone} onChange={handleChange('phone')}
            placeholder="(450) 555-1234" className={inputClass('phone')} />
        </div>
        <div>
          <label htmlFor="clinic" className="block text-sm font-medium text-cacao mb-1.5">Clinique / Cabinet</label>
          <input id="clinic" type="text" value={form.clinic} onChange={handleChange('clinic')}
            placeholder="Clinique Dentaire XYZ" className={inputClass('clinic')} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cacao mb-1.5">Message *</label>
        <textarea id="message" value={form.message} onChange={handleChange('message')}
          placeholder="Décrivez votre besoin ou votre cas..." rows={5}
          className={`${inputClass('message')} resize-none`} />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="w-4 h-4" />
        Envoyer le message
      </button>
    </form>
  )
}
