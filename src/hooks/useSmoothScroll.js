import { useCallback } from 'react'

export default function useSmoothScroll(offset = 100) {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [offset])

  return scrollToSection
}
