import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Skills } from '@/components/sections/Skills'
import { Achievements } from '@/components/sections/Achievements'
import { Volunteering } from '@/components/sections/Volunteering'
import { Press } from '@/components/sections/Press'
import { Portfolio } from '@/components/sections/Portfolio'
import { Contact } from '@/components/sections/Contact'

/**
 * René Velásquez – Executive Marketing Portfolio
 *
 * Secciones:
 * 1. Hero          → Presentación + foto + CTAs
 * 2. About         → Narrativa profesional + pilares
 * 3. Experience    → Timeline interactivo
 * 4. Education     → Grados + certificaciones
 * 5. Skills        → Competencias + herramientas
 * 6. Achievements  → Métricas y logros con contadores
 * 7. Volunteering  → RSE y comunidad
 * 8. Press         → Apariciones en medios
 * 9. Portfolio     → Link a portafolio Canva
 * 10. Contact      → Formulario + info + WhatsApp
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Volunteering />
      <Press />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
