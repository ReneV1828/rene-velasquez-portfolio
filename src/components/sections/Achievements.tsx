'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Users, Target, ShoppingBag, Award } from 'lucide-react'

function useCounter(end: number, duration = 2000, start = 0, decimals = 0) {
  const [count, setCount] = useState(start)
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startAnimation = () => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * eased
      setCount(parseFloat(current.toFixed(decimals)))
      if (progress < 1) {
        ref.current = setTimeout(animate, 16)
      }
    }
    animate()
  }

  useEffect(() => {
    return () => { if (ref.current) clearTimeout(ref.current) }
  }, [])

  return { count, startAnimation }
}

const achievements = [
  {
    icon: Award,
    color: 'from-blue-600 to-indigo-600',
    prefix: '+',
    value: 20,
    suffix: ' años',
    label: 'Experiencia Ejecutiva',
    description: 'Liderando marketing estratégico y equipos multidisciplinarios en Guatemala y Centroamérica.',
  },
  {
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    prefix: '+',
    value: 15,
    suffix: '–20%',
    label: 'Crecimiento Anual Promedio',
    description: 'Incremento YoY sostenido en ventas, obtenido mediante estrategias de marketing integradas.',
    decimals: 0,
  },
  {
    icon: BarChart3,
    color: 'from-cyan-500 to-blue-500',
    prefix: '+',
    value: 12,
    suffix: '%',
    label: 'Crecimiento Omnicanal',
    description: 'Logrado en Grupo Campeón integrando marketing tradicional y digital con enfoque en conversión.',
  },
  {
    icon: Target,
    color: 'from-violet-500 to-purple-600',
    prefix: '',
    value: 90,
    suffix: '%',
    label: 'Categorías en Objetivo GMROI',
    description: 'Gestión eficiente de categorías con enfoque en rentabilidad y rotación de inventario.',
  },
  {
    icon: ShoppingBag,
    color: 'from-amber-500 to-orange-500',
    prefix: '1.3→',
    value: 2.1,
    suffix: 'x',
    label: 'Frecuencia de Compra Mensual',
    description: 'Incremento de la frecuencia de compra mediante plan de membresía y fidelización de clientes.',
    decimals: 1,
  },
  {
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    prefix: '',
    value: 6,
    suffix: ' empresas',
    label: 'Organizaciones Transformadas',
    description: 'Lideré la transformación digital y estratégica de marketing en industrias diversas.',
  },
]

function StatCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })
  const { count, startAnimation } = useCounter(achievement.value, 1800, 0, achievement.decimals ?? 0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)
      startAnimation()
    }
  }, [isInView, started, startAnimation])

  const Icon = achievement.icon

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="card-base card-hover rounded-2xl p-6 space-y-4 text-center cursor-default"
    >
      {/* Icon */}
      <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${achievement.color}
        flex items-center justify-center shadow-md`}>
        <Icon size={24} className="text-white" />
      </div>

      {/* Counter */}
      <div>
        <div className="achievement-number text-3xl sm:text-4xl font-black text-navy-900 dark:text-white">
          {achievement.prefix}
          <span className="text-gradient">{count}</span>
          {achievement.suffix}
        </div>
        <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mt-2">
          {achievement.label}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  )
}

export function Achievements() {
  return (
    <section id="logros" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">Resultados</span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Logros{' '}
            <span className="text-gradient">Destacados</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Resultados concretos y medibles que demuestran el impacto de la gestión estratégica de marketing a lo largo de la carrera profesional.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {achievements.map((ach, i) => (
            <StatCard key={ach.label} achievement={ach} index={i} />
          ))}
        </StaggerContainer>

        {/* Brands section */}
        <AnimatedSection className="mt-20" delay={0.2}>
          <h3 className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500
            uppercase tracking-widest mb-8">
            Experiencia en industrias
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Restauración & QSR', icon: '🍽️' },
              { label: 'Retail & Mayoreo', icon: '🏪' },
              { label: 'Electrónica & Tecnología', icon: '⚡' },
              { label: 'Medios de Comunicación', icon: '📰' },
              { label: 'Foodservice', icon: '🥩' },
              { label: 'B2B Distribución', icon: '🚚' },
              { label: 'E-commerce', icon: '🛒' },
              { label: 'Consumer Goods', icon: '🏷️' },
            ].map(ind => (
              <motion.div
                key={ind.label}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300
                  border border-slate-200 dark:border-navy-600 cursor-default
                  hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
              >
                <span>{ind.icon}</span>
                {ind.label}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
