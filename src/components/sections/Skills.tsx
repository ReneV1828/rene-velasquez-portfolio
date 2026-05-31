'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const skillGroups = [
  {
    category: 'Marketing Estratégico',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'Marketing Estratégico 360', level: 98 },
      { name: 'Planeación S&OP', level: 90 },
      { name: 'Trade Marketing', level: 92 },
      { name: 'Category Management', level: 88 },
      { name: 'Pricing Strategy', level: 87 },
      { name: 'Omnichannel Marketing', level: 93 },
    ],
  },
  {
    category: 'Marketing Digital',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'SEO / SEM', level: 90 },
      { name: 'Social Ads (Meta / Google)', level: 92 },
      { name: 'Growth Marketing', level: 88 },
      { name: 'CRM & Automatización', level: 85 },
      { name: 'E-commerce', level: 84 },
      { name: 'Analítica Digital', level: 88 },
    ],
  },
  {
    category: 'Liderazgo & Negocio',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Liderazgo de Equipos', level: 95 },
      { name: 'Business Intelligence', level: 82 },
      { name: 'Market Research', level: 90 },
      { name: 'Relaciones Públicas', level: 85 },
      { name: 'Desarrollo de Marcas', level: 92 },
      { name: 'Data Analytics', level: 80 },
    ],
  },
]

function SkillBar({ name, level, color, delay }: {
  name: string
  level: number
  color: string
  delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-bold text-brand-blue">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${color}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="competencias" className="section-padding bg-slate-50 dark:bg-navy-950">
      <div className="container-max">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">Competencias</span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Habilidades &{' '}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Un perfil multidisciplinario que integra visión estratégica, dominio digital y liderazgo para generar resultados de negocio.
          </p>
        </AnimatedSection>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px 0px' }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="card-base rounded-2xl p-6 space-y-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className={`w-2 h-10 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-sm font-bold text-navy-900 dark:text-white uppercase tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology tags */}
        <AnimatedSection className="mt-16" delay={0.2}>
          <h3 className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500
            uppercase tracking-widest mb-6">
            Herramientas & Plataformas
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Google Analytics 4', 'Google Ads', 'Meta Ads', 'HubSpot', 'Salesforce',
              'Google Data Studio', 'Power BI', 'Hotjar', 'Semrush', 'Mailchimp',
              'Zapier', 'Canva', 'Google Tag Manager', 'Shopify', 'WooCommerce',
              'LinkedIn Campaign Manager', 'TikTok Ads', 'WhatsApp Business API',
            ].map(tool => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium
                  bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-600
                  text-slate-600 dark:text-slate-300 shadow-sm cursor-default
                  hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
