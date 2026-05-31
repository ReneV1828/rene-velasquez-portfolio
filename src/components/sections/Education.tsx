'use client'

import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const education = [
  {
    degree: 'Maestría en Marketing Digital',
    institution: 'Universidad Galileo',
    period: '2019 – 2021',
    description:
      'Especialización avanzada en estrategias de marketing digital, analítica de datos, e-commerce, SEM/SEO, automatización de marketing y growth hacking. Enfoque en toma de decisiones basada en datos y transformación digital empresarial.',
    color: 'from-blue-600 to-indigo-600',
    logo: 'UG',
    highlights: ['Marketing Analytics', 'Growth Hacking', 'E-commerce Strategy', 'Data-Driven Marketing'],
  },
  {
    degree: 'Licenciatura en Administración de Empresas',
    institution: 'Universidad Francisco Marroquín',
    period: '2000 – 2005',
    description:
      'Formación integral en administración de empresas con minor en Mercadeo. Base sólida en economía, finanzas, estrategia empresarial y fundamentos de marketing, que sustenta la visión de negocio aplicada al marketing ejecutivo.',
    color: 'from-slate-600 to-slate-700',
    logo: 'UFM',
    minor: 'Minor en Mercadeo',
    highlights: ['Estrategia Empresarial', 'Finanzas', 'Marketing Fundamental', 'Economía'],
  },
]

export function Education() {
  return (
    <section id="educacion" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">Formación Académica</span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            Educación &{' '}
            <span className="text-gradient">Certificaciones</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Base académica sólida combinada con aprendizaje continuo en las disciplinas más relevantes del marketing moderno.
          </p>
        </AnimatedSection>

        {/* Education cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-20" staggerDelay={0.15}>
          {education.map(edu => (
            <motion.div
              key={edu.degree}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="card-base card-hover rounded-2xl p-6 space-y-5"
            >
              {/* Header */}
              <div className="flex gap-4 items-start">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color}
                  flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-md`}>
                  {edu.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-navy-900 dark:text-white leading-tight">
                    {edu.degree}
                  </h3>
                  {edu.minor && (
                    <span className="inline-block mt-1 text-xs font-semibold text-brand-blue
                      bg-brand-blue/8 dark:bg-brand-blue/15 px-2 py-0.5 rounded-full">
                      {edu.minor}
                    </span>
                  )}
                </div>
              </div>

              {/* Institution & period */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <GraduationCap size={15} className="text-slate-400" />
                  <span className="text-sm font-semibold">{edu.institution}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar size={12} />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map(h => (
                  <span key={h}
                    className="px-2.5 py-1 rounded-full text-xs font-medium
                      bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Certifications */}
        <AnimatedSection className="mb-8 text-center">
          <div className="flex items-center gap-3 justify-center">
            <Award size={20} className="text-brand-blue" />
            <h3 className="text-xl font-bold text-navy-900 dark:text-white">Certificaciones Profesionales</h3>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" staggerDelay={0.07}>
          {[
            { name: 'IA para Marketing', issuer: 'Google', color: 'from-blue-500 to-indigo-600', icon: '🤖', year: '2025' },
            { name: 'Modelo de Machine Learning', issuer: 'Grow Up Data Analytics', color: 'from-violet-500 to-purple-600', icon: '🧠', year: '2024' },
            { name: 'Google Analytics para SEO', issuer: 'Semrush', color: 'from-orange-500 to-amber-500', icon: '📊', year: '2024' },
            { name: 'Fundamentos de Medición', issuer: 'Meta', color: 'from-blue-600 to-indigo-600', icon: '📱', year: '2022' },
            { name: 'Marketing Analytics', issuer: 'Panamerican Business School', color: 'from-teal-500 to-cyan-600', icon: '📈', year: '2021' },
            { name: 'Campañas Tiendas en Línea', issuer: 'Domestika', color: 'from-red-500 to-orange-500', icon: '🛒', year: '2021–22' },
            { name: 'Google Ads – Búsqueda', issuer: 'Google Academy', color: 'from-yellow-500 to-amber-500', icon: '🎯', year: '2019' },
            { name: 'Publicidad Google & Facebook', issuer: 'Google / Meta', color: 'from-cyan-500 to-blue-500', icon: '💡', year: '2019' },
            { name: 'Neuromarketing', issuer: 'Instituto Braidot', color: 'from-purple-500 to-violet-600', icon: '🔬', year: '' },
          ].map(cert => (
            <motion.div
              key={cert.name}
              variants={staggerItem}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="card-base card-hover rounded-2xl p-4 flex flex-col items-center
                gap-3 text-center cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color}
                flex items-center justify-center text-xl shadow-sm`}>
                {cert.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900 dark:text-white leading-tight">
                  {cert.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{cert.issuer}</div>
                {cert.year && <div className="text-xs text-brand-blue font-semibold mt-0.5">{cert.year}</div>}
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold
                bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                Certificado
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
