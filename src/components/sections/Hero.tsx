'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, ChevronDown, MapPin } from 'lucide-react'
import Image from 'next/image'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center hero-mesh noise-overlay overflow-hidden"
    >
      {/* ── Animated gradient orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
          bg-brand-blue/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full
          bg-indigo-500/15 blur-3xl pointer-events-none"
      />

      {/* ── Grid pattern overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left column */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Location badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-white/10 border border-white/20 text-slate-300 text-sm font-medium backdrop-blur-sm">
                <MapPin size={13} className="text-brand-blue-ultra" />
                Guatemala, Centroamérica
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item}>
              <h1 className="text-hero font-black text-white tracking-tight">
                René{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Velásquez</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r
                      from-brand-blue to-brand-blue-ultra rounded-full origin-left"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={item} className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-brand-blue-ultra tracking-wide uppercase">
                Marketing Strategist&nbsp;·&nbsp;Business Growth Leader
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Actualmente: Performance Marketing @ KFC Guatemala
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={item}>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Profesional en marketing con <strong className="text-white">Maestría en Marketing Digital</strong> y
                amplia experiencia liderando estrategias de medios 360 ATL y BTL, performance,
                contenido, pauta y analítica digital. He gestionado ecosistemas digitales
                end-to-end (SEO, SEM, Social Ads, E-commerce, CRM), optimizando conversión,
                ROAS y crecimiento rentable en entornos <strong className="text-white">B2C y B2B omnicanal</strong>.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={item}>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {[
                  { value: '+20', label: 'Años de experiencia' },
                  { value: '+15%', label: 'Crecimiento YoY promedio' },
                  { value: 'B2B+B2C', label: 'Mercados dominados' },
                ].map(stat => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="/cv-rene-velasquez.pdf"
                  download
                  className="btn-primary text-sm px-5 py-3"
                >
                  <Download size={15} />
                  Descargar CV
                </a>
                <a href="#contacto" className="btn-secondary text-sm px-5 py-3
                  !border-white/25 !text-white hover:!border-brand-blue hover:!text-brand-blue-ultra hover:!bg-white/5">
                  <Mail size={15} />
                  Contactar
                </a>
                <a
                  href="https://www.linkedin.com/in/renevelasquezb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold
                    bg-[#0077B5] hover:bg-[#006399] text-white transition-all duration-200
                    hover:-translate-y-0.5 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column – Photo */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/40 to-indigo-500/20
                blur-2xl scale-110 opacity-60" />

              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[440px] rounded-2xl overflow-hidden
                border border-white/20 shadow-2xl">
                <Image
                  src="/foto-rene.jpg"
                  alt="René Velásquez – Marketing Executive"
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-10 top-1/4 bg-white dark:bg-navy-800 rounded-xl
                  px-3 py-2 shadow-xl border border-slate-200/50 dark:border-navy-600"
              >
                <div className="text-xs font-bold text-navy-900 dark:text-white">+20 años</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">experiencia</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-8 bottom-1/3 bg-white dark:bg-navy-800 rounded-xl
                  px-3 py-2 shadow-xl border border-slate-200/50 dark:border-navy-600"
              >
                <div className="text-xs font-bold text-brand-blue">Maestría</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Marketing Digital</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
          gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  )
}
