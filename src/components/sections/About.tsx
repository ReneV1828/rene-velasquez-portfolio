'use client'

import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import {
  TrendingUp, Globe, Users, BarChart3, Target,
  Award, ShoppingCart, RefreshCcw, Heart, Megaphone, Lightbulb, Layers
} from 'lucide-react'

const pillars = [
  { icon: TrendingUp,    label: 'Marketing Estratégico',    color: 'from-blue-500 to-blue-600' },
  { icon: Globe,         label: 'Transformación Digital',   color: 'from-indigo-500 to-indigo-600' },
  { icon: BarChart3,     label: 'Marketing Basado en Datos',color: 'from-violet-500 to-violet-600' },
  { icon: Users,         label: 'Liderazgo de Equipos',     color: 'from-cyan-500 to-cyan-600' },
  { icon: Target,        label: 'Growth Marketing',         color: 'from-sky-500 to-sky-600' },
  { icon: ShoppingCart,  label: 'Category Management',      color: 'from-blue-600 to-indigo-600' },
  { icon: RefreshCcw,    label: 'Planeación S&OP',          color: 'from-teal-500 to-cyan-600' },
  { icon: Heart,         label: 'Fidelización de Clientes', color: 'from-pink-500 to-rose-500' },
  { icon: Megaphone,     label: 'Relaciones Públicas',      color: 'from-amber-500 to-orange-500' },
  { icon: Award,         label: 'Desarrollo de Marcas',     color: 'from-purple-500 to-violet-600' },
  { icon: Lightbulb,     label: 'Omnichannel B2B + B2C',   color: 'from-yellow-500 to-amber-500' },
  { icon: Layers,        label: 'Ecosistemas Digitales',    color: 'from-emerald-500 to-teal-500' },
]

export function About() {
  return (
    <section
      id="sobre-mi"
      className="section-padding bg-white dark:bg-navy-900"
    >
      <div className="container-max">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">Sobre Mí</span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Liderazgo que{' '}
            <span className="text-gradient">transforma resultados</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Más de dos décadas construyendo estrategias de marketing que conectan marcas con personas y generan crecimiento sostenible.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – narrative */}
          <AnimatedSection direction="left" className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Soy un ejecutivo de marketing con <strong className="text-navy-900 dark:text-white font-semibold">más de 20 años de experiencia</strong> liderando
              estrategias de alto impacto en entornos B2B y B2C, tanto en empresas de consumo masivo,
              retail, restauración y medios de comunicación.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Me especializo en la <strong className="text-navy-900 dark:text-white font-semibold">transformación digital de negocios</strong>: diseño e
              implemento ecosistemas digitales end-to-end que integran SEO, SEM, Social Ads, CRM,
              E-commerce y analítica avanzada para optimizar el retorno de inversión y escalar el
              crecimiento comercial.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              He reportado directamente a Juntas Directivas y liderado equipos multidisciplinarios,
              coordinando áreas de marca, trade marketing, pricing, inteligencia de mercado y
              planificación S&OP con un enfoque orientado a <strong className="text-navy-900 dark:text-white font-semibold">datos, rentabilidad y crecimiento sostenible</strong>.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: '+20 años', label: 'Liderando equipos y estrategias' },
                { value: 'B2B & B2C', label: 'Experiencia en múltiples modelos' },
                { value: '+15–20%', label: 'Crecimiento YoY promedio logrado' },
                { value: '360°', label: 'ATL, BTL y Digital integrados' },
              ].map(fact => (
                <div key={fact.label}
                  className="card-base p-4 rounded-xl text-center space-y-1">
                  <div className="text-xl font-extrabold text-gradient">{fact.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{fact.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right – pillars grid */}
          <AnimatedSection direction="right">
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              staggerDelay={0.06}
            >
              {pillars.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="card-base card-hover rounded-2xl p-4 flex flex-col items-center
                    gap-3 text-center cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color}
                    flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                    {label}
                  </span>
                </motion.div>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
