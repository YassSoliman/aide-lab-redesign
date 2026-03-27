import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ProduitsLanding from './pages/ProduitsLanding'
import ImplantsPage from './pages/ImplantsPage'
import CouronnesPage from './pages/CouronnesPage'
import AutresProduitsPage from './pages/AutresProduitsPage'
import ServicesPage from './pages/ServicesPage'
import AProposPage from './pages/AProposPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fr/produits" element={<ProduitsLanding />} />
        <Route path="/fr/produits/implants" element={<ImplantsPage />} />
        <Route path="/fr/produits/couronnes-et-ponts" element={<CouronnesPage />} />
        <Route path="/fr/produits/autres-produits" element={<AutresProduitsPage />} />
        <Route path="/fr/services" element={<ServicesPage />} />
        <Route path="/fr/a-propos" element={<AProposPage />} />
        <Route path="/fr/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
