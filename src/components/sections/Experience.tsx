'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ChevronDown, Calendar, Building2, TrendingUp } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────
interface Experience {
  company: string
  role: string
  period: string
  logo: string
  color: string
  isCurrent?: boolean
  highlight?: string
  kpis: string[]
  bullets: string[]
}

// ── Data ───────────────────────────────────────────────────────────────
const experiences: Experience[] = [
  {
    company: 'Premium Restaurants of America (KFC)',
    role: 'Performance Marketing',
    period: 'Junio 2025 – Presente',
    logo: 'KFC',
    color: 'from-red-600 to-red-700',
    isCurrent: true,
    kpis: ['On Premise', 'Pricing', 'UX Kioscos', 'AOV', 'Plan Mejora Continua'],
    bullets: [
      'Implementar campañas de publicidad y promociones para canales On Premise.',
      'Implementar estrategias de pricing y posicionamiento de productos, logrando mejoras en rentabilidad por canal y categoría por medio de análisis de rentabilidad de Menú.',
      'Liderar proyecto de implementación de nuevo software para mejora del UX y AOV en kioscos así como llevar acabo plan de mejora continua.',
    ],
  },
  {
    company: 'Grupo Buen Rollo',
    role: 'Gerente de Mercadeo',
    period: 'Octubre 2024 – Mayo 2025',
    logo: 'GBR',
    color: 'from-orange-500 to-red-500',
    kpis: ['Transacciones', 'Ticket Promedio', 'ROAS', 'Uplift Promocional'],
    bullets: [
      'Diseñé e implementé el plan estratégico de marketing por restaurante (Graciela, Las Tablas Mucha Brasa y Filemón), alineado a objetivos de negocio, logrando incremento en transacciones mismas tiendas vs. LY al 30/04/2025.',
      'Analicé la rentabilidad del menú y optimicé su composición, impulsando platos de mayor contribución y desarrollando menús de temporada basados en tendencias de mercado.',
      'Diseñé promociones tácticas para incrementar tráfico y ventas, midiendo impacto financiero y eficiencia de inversión por marca. KPIs: uplift promocional, ROI, costo por transacción incremental.',
      'Desarrollé alianzas estratégicas con proveedores para obtener apoyos comerciales y de mercadeo, optimizando costos y amplificando visibilidad de marca.',
    ],
  },
  {
    company: 'Grupo Campeón',
    role: 'Gerente de Mercadeo',
    period: 'Febrero 2020 – Agosto 2024',
    logo: 'GC',
    color: 'from-blue-600 to-indigo-600',
    highlight: '+12% crecimiento anual en ventas',
    kpis: ['CPL', 'CPA', 'ROAS', 'Sell-out', 'Forecast Accuracy', 'GMROI'],
    bullets: [
      'Diseñé e implementé el Plan Estratégico de Marketing para Foodservice, Retail y Mayoreo, integrando mercadeo tradicional y digital, logrando incremento anual de 12% en ventas.',
      'Desarrollé estrategias de pricing, promociones, Trade Marketing y Merchandising para aumentar presencia y rotación en punto de venta.',
      'Lideré la pauta digital en redes y buscadores, integrando estrategias upper, middle y lower funnel orientadas a conversión. KPIs: CPL, CPA, ROAS, tasa de conversión, ventas atribuibles.',
      'Coordiné la planificación S&OP y lideré equipos interdisciplinarios para asegurar ejecución y alineación comercial.',
      'Diseñé y lancé el plan de membresía y fidelización de clientes para tiendas propias, incrementando la frecuencia de compra de 1.3 a 2.1 en promedio mensual.',
      'Reporté mensualmente a Junta Directiva el desempeño de unidades estratégicas, iniciativas de marketing y rentabilidad por categoría.',
    ],
  },
  {
    company: 'Grupo Master Bosch',
    role: 'Gerente de Mercadeo',
    period: 'Agosto 2014 – Febrero 2020',
    logo: 'GMB',
    color: 'from-cyan-500 to-blue-500',
    highlight: '+15–20% crecimiento YoY',
    kpis: ['CAC', 'LTV', 'ROI', 'Forecast', 'Brand Equity'],
    bullets: [
      'Desarrollé planes de marca por canal, asegurando posicionamiento y crecimiento de 15–20% YoY.',
      'Coordiné con el equipo de Brand Managers y Comercial la ejecución de estrategias y cumplimiento de forecast de ventas.',
      'Lideré estudios de mercado y análisis competitivo para detectar oportunidades por país y segmento.',
      'Gestioné lanzamientos y eventos promocionales, asegurando impacto en ventas y reconocimiento de marca.',
      'Negocié con cuentas clave y retailers estratégicos, optimizando espacios y rentabilidad.',
      'Implementé la estrategia de marketing digital integrando data, segmentación y performance, midiendo CAC, LTV y conversión.',
    ],
  },
  {
    company: 'Diario de Centro América',
    role: 'Director de Mercadeo',
    period: 'Agosto 2013 – Agosto 2014',
    logo: 'DCA',
    color: 'from-slate-600 to-slate-700',
    kpis: ['Ingresos por alianzas', 'UX web', 'Brand positioning'],
    bullets: [
      'Diseñé e implementé estrategias para posicionamiento, promoción y distribución de productos editoriales, aumentando ingresos mediante alianzas estratégicas.',
      'Lideré la transformación digital del medio, optimizando UX en la página web y mejorando la estrategia de contenido.',
      'Negocié acuerdos comerciales con instituciones públicas y privadas, fortaleciendo la presencia del diario en el mercado.',
      'Supervisé mejoras en imagen, diseño y diagramación, alineando la identidad visual con la estrategia de marca.',
    ],
  },
  {
    company: 'El Correo – Grupo ALMO',
    role: 'Jefe de Ventas y Key Account',
    period: 'Septiembre 2008 – Marzo 2013',
    logo: 'EC',
    color: 'from-green-600 to-emerald-600',
    kpis: ['Ventas', 'KPIs comerciales', 'Portafolio de clientes'],
    bullets: [
      'Coordiné la estrategia comercial para el cumplimiento de objetivos de ventas, optimizando procesos y detectando oportunidades de negocio.',
      'Analicé KPIs de ventas, implementando planes de acción estratégicos para mejorar la rentabilidad y el crecimiento comercial.',
      'Reporté directamente a la Gerencia General sobre desempeño financiero, desviaciones presupuestarias y estrategias correctivas.',
      'Desarrollé relaciones con clientes clave, impulsando expansión de portafolio.',
    ],
  },
  {
    company: 'Premium Restaurants of America (Pizza Hut)',
    role: 'Jefe de Canal Delivery & Pick Up',
    period: 'Noviembre 2004 – Septiembre 2008',
    logo: 'PRA',
    color: 'from-red-600 to-rose-600',
    kpis: ['Rentabilidad por canal', 'Ticket promedio', 'Market share'],
    bullets: [
      'Desarrollé campañas de publicidad y promociones para canales de Delivery & Pick Up.',
      'Implementé estrategias de pricing y posicionamiento de productos, logrando mejoras en rentabilidad por canal y categoría.',
      'Optimicé procesos de análisis de costos y rentabilidad, contribuyendo a la toma de decisiones estratégicas de expansión.',
    ],
  },
]

// ── Card Component ─────────────────────────────────────────────────────
function ExperienceCard({
  exp,
  index,
  isOpen,
  onToggle,
}: {
  exp: Experience
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-5 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color}
        border-4 border-white dark:border-navy-950 shadow-md z-10`} />

      {/* Card */}
      <div className="card-base rounded-2xl overflow-hidden transition-all duration-300
        hover:shadow-card-hover dark:hover:shadow-2xl">
        {/* Header */}
        <button
          onClick={onToggle}
          className="w-full text-left p-5 flex items-start gap-4 cursor-pointer
            hover:bg-slate-50 dark:hover:bg-navy-800/50 transition-colors duration-150"
          aria-expanded={isOpen}
        >
          {/* Logo */}
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color}
            flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-sm`}>
            {exp.logo}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Building2 size={13} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                {exp.company}
              </span>
              {exp.isCurrent && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                  bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400
                  text-xs font-bold">
                  ● Actual
                </span>
              )}
              {exp.highlight && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                  bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold">
                  <TrendingUp size={10} />
                  {exp.highlight}
                </span>
              )}
            </div>
            <h3 className="text-base font-bold text-navy-900 dark:text-white">{exp.role}</h3>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
              <Calendar size={12} />
              <span>{exp.period}</span>
            </div>
          </div>

          <ChevronDown
            size={18}
            className={`text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-brand-blue' : ''
            }`}
          />
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 space-y-4">
                {/* KPI tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.kpis.map(kpi => (
                    <span key={kpi}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold
                        bg-brand-blue/[0.08] dark:bg-brand-blue/[0.15] text-brand-blue dark:text-brand-blue-ultra
                        border border-brand-blue/20">
                      {kpi}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ── Section ────────────────────────────────────────────────────────────
export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experiencia" className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">Trayectoria</span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Experiencia{' '}
            <span className="text-gradient">Profesional</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Más de 20 años generando resultados medibles en industrias de consumo, retail, restauración y medios.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-2.5 top-0 bottom-0 w-0.5
            bg-gradient-to-b from-brand-blue via-indigo-400 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
