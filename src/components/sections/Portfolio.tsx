'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react'

export function Portfolio() {
  return (
    <section id="portafolio" className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">
            <Layers size={13} className="inline mr-1" />
            Portafolio
          </span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Casos de Éxito &{' '}
            <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Una selección de estrategias, campañas y proyectos de marketing que reflejan el enfoque orientado a resultados.
          </p>
        </AnimatedSection>

        {/* Main CTA Card */}
        <AnimatedSection delay={0.1}>
          <motion.a
            href="https://bit.ly/renevelasquez"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01, y: -4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group relative block rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-indigo-900" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-indigo-600/20" />

            {/* Animated grid */}
            <div
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 p-10 md:p-16 text-center">
              {/* Icon */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl
                  bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <ExternalLink size={32} className="text-white" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Ver Portafolio Completo
              </h3>
              <p className="text-slate-300 text-base md:text-lg max-w-lg mx-auto mb-8">
                Explora casos de marketing estratégico, campañas digitales, diseño de marca,
                Trade Marketing y growth hacking desarrollados a lo largo de la trayectoria profesional.
              </p>

              {/* CTA Button */}
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                bg-white text-navy-900 font-bold text-sm
                group-hover:bg-brand-blue group-hover:text-white
                transition-all duration-300 shadow-xl">
                <span>Ver en Canva Portfolio</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <p className="mt-4 text-xs text-slate-500">
                bit.ly/renevelasquez
              </p>
            </div>
          </motion.a>
        </AnimatedSection>

        {/* Category chips */}
        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">Áreas incluidas en el portafolio</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Branding & Identidad Visual',
              'Campañas 360°',
              'Marketing Digital',
              'Trade Marketing',
              'Growth Hacking',
              'Estrategia de Contenido',
              'Email Marketing',
              'Social Media',
              'E-commerce',
              'Presentaciones Ejecutivas',
            ].map(cat => (
              <motion.span
                key={cat}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium
                  bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600
                  text-slate-600 dark:text-slate-300 shadow-sm cursor-default"
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
