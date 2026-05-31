'use client'

import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const volunteering = [
  {
    org: 'Empresarios Juveniles',
    role: 'Voluntario – Programa K-19',
    period: '2001 – 2004',
    description:
      'Participación en el Programa K-19 de Empresarios Juveniles: iniciativa de estudiantes universitarios para impartir lecciones cortas a estudiantes de nivel medio en escuelas públicas sobre los elementos necesarios para montar un negocio propio. Formación en emprendimiento desde las bases.',
    color: 'from-amber-500 to-orange-500',
    icon: '🌱',
    category: 'Mentoría Empresarial',
  },
  {
    org: 'Fondo Unido de Guatemala – Live United',
    role: 'Voluntario',
    period: '2012 – 2013',
    description:
      'Participación en el Día Mundial de Acción del Fondo Unido de Guatemala: Feria de los Sueños para 2,300 niños, donde se promovieron valores a través del juego. Activación de impacto social con enfoque en educación y desarrollo comunitario infantil.',
    color: 'from-red-500 to-rose-600',
    icon: '🤝',
    category: 'RSE & Impacto Social',
  },
]

export function Volunteering() {
  return (
    <section id="voluntariado" className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">
            <Heart size={13} className="inline mr-1" />
            Compromiso Social
          </span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Voluntariado &{' '}
            <span className="text-gradient">Comunidad</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            El liderazgo ejecutivo trasciende los resultados de negocio — también implica contribuir al desarrollo del país y de las personas.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" staggerDelay={0.15}>
          {volunteering.map(vol => (
            <motion.div
              key={vol.org}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="card-base card-hover rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${vol.color}
                  flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
                  {vol.icon}
                </div>
                <div>
                  <span className="section-tag text-xs mb-1 inline-block">{vol.category}</span>
                  <h3 className="text-base font-bold text-navy-900 dark:text-white">{vol.org}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{vol.role}</p>
                  {vol.period && (
                    <p className="text-xs text-brand-blue font-semibold mt-0.5">{vol.period}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {vol.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
