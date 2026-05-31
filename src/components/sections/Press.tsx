'use client'

import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { Newspaper, ExternalLink } from 'lucide-react'

/*
  Sección de Prensa
  ─────────────────
  Agrega aquí los artículos, entrevistas o menciones en medios donde hayas aparecido.
  Formato sugerido: { title, media, date, url, excerpt, category }

  Mientras no tengas links confirmados, la sección muestra tarjetas de placeholder
  con instrucciones para editarlas.
*/

const pressItems = [
  {
    title: 'Estrategias de Marketing Digital para el Mercado Guatemalteco',
    media: 'Revista Estrategia & Negocios',
    date: '2023',
    url: '#',           // ← Reemplazar con el URL real
    excerpt: 'Análisis de las principales tendencias de marketing digital aplicadas al mercado centroamericano y los retos de la transformación digital en empresas de consumo masivo.',
    category: 'Marketing Digital',
    placeholder: true,
  },
  {
    title: 'Crecimiento Omnicanal en el Retail Guatemalteco',
    media: 'El Economista Guatemala',
    date: '2022',
    url: '#',
    excerpt: 'Perspectiva ejecutiva sobre la integración de canales físicos y digitales para incrementar ventas y mejorar la experiencia del consumidor en el contexto guatemalteco.',
    category: 'Retail & E-commerce',
    placeholder: true,
  },
  {
    title: 'S&OP y Planeación Comercial Integrada',
    media: 'Prensa Libre – Sección Economía',
    date: '2021',
    url: '#',
    excerpt: 'La importancia de integrar los procesos de Sales & Operations Planning con la estrategia de marketing para garantizar el cumplimiento de objetivos de negocio.',
    category: 'Operaciones & Estrategia',
    placeholder: true,
  },
]

export function Press() {
  return (
    <section id="prensa" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">
            <Newspaper size={13} className="inline mr-1" />
            Medios & Prensa
          </span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Apariciones en{' '}
            <span className="text-gradient">Medios</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Entrevistas, artículos y menciones que reflejan la perspectiva ejecutiva en marketing estratégico y transformación digital.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {pressItems.map(item => (
            <motion.a
              key={item.title}
              variants={staggerItem}
              href={item.url}
              target={item.url !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`card-base card-hover rounded-2xl p-6 flex flex-col gap-4
                ${item.url === '#' ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={e => item.url === '#' && e.preventDefault()}
            >
              {/* Category & placeholder badge */}
              <div className="flex items-center justify-between">
                <span className="section-tag text-xs">{item.category}</span>
                {item.placeholder && (
                  <span className="text-xs text-slate-400 italic">Editar link</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-navy-900 dark:text-white leading-tight">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                {item.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2
                border-t border-slate-100 dark:border-navy-700">
                <div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {item.media}
                  </div>
                  <div className="text-xs text-slate-400">{item.date}</div>
                </div>
                {item.url !== '#' && (
                  <ExternalLink size={14} className="text-brand-blue flex-shrink-0" />
                )}
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

        {/* Edit note */}
        <AnimatedSection className="mt-8 text-center" delay={0.3}>
          <p className="text-xs text-slate-400 dark:text-slate-500 italic">
            * Para actualizar los artículos, edita el array <code className="bg-slate-100 dark:bg-navy-700
            px-1.5 py-0.5 rounded text-xs">pressItems</code> en{' '}
            <code className="bg-slate-100 dark:bg-navy-700 px-1.5 py-0.5 rounded text-xs">
              src/components/sections/Press.tsx
            </code>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
