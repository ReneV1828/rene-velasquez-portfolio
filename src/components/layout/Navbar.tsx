'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' },
  { href: '#competencias', label: 'Competencias' },
  { href: '#logros', label: 'Logros' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-navy-700/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-bold text-lg tracking-tight"
            aria-label="Ir al inicio"
          >
            <span className={scrolled ? 'text-navy-900 dark:text-white' : 'text-white'}>
              René
            </span>
            <span className="text-brand-blue ml-1">Velásquez</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                    scrolled
                      ? isActive
                        ? 'text-brand-blue'
                        : 'text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white'
                      : isActive
                        ? 'text-brand-blue-ultra'
                        : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="/cv-rene-velasquez.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                bg-brand-blue text-white hover:bg-brand-blue-light transition-all duration-200
                shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              aria-label="Descargar CV de René Velásquez"
            >
              <Download size={14} />
              <span>Descargar CV</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                scrolled
                  ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-700'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden
                bg-white dark:bg-navy-900 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-navy-700">
                <span className="font-bold text-navy-900 dark:text-white">Menú</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-700 cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X size={18} className="text-slate-600 dark:text-slate-300" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium
                      text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800
                      transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-4 border-t border-slate-200 dark:border-navy-700">
                <a
                  href="/cv-rene-velasquez.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-3
                    rounded-xl text-sm font-semibold bg-brand-blue text-white
                    hover:bg-brand-blue-light transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  Descargar CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
