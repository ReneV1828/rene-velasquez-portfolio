'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import {
  Phone, Mail, Linkedin, MessageCircle, Send,
  CheckCircle, AlertCircle, Loader2, MapPin
} from 'lucide-react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+502 4917-5701',
    href: 'tel:+50249175701',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Mail,
    label: 'Correo Electrónico',
    value: 'renevb@ufm.edu',
    href: 'mailto:renevb@ufm.edu',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/renevelasquezb',
    href: 'https://www.linkedin.com/in/renevelasquezb/',
    color: 'from-[#0077B5] to-[#006399]',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Guatemala, Guatemala',
    href: '#',
    color: 'from-slate-500 to-slate-600',
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'El nombre es requerido'
    if (!form.email.trim()) e.email = 'El correo es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo inválido'
    if (!form.message.trim()) e.message = 'El mensaje es requerido'
    return e
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) { setErrors(v); return }
    setErrors({})
    setStatus('sending')

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
        // Fallback: open mailto
        window.open(
          `mailto:renevb@ufm.edu?subject=Contacto desde portfolio - ${form.name}&body=${encodeURIComponent(
            `Nombre: ${form.name}\nEmpresa: ${form.company}\nCorreo: ${form.email}\n\nMensaje:\n${form.message}`
          )}`,
        )
        setStatus('success')
        return
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '50249175701'}?text=${encodeURIComponent(
    'Hola René, me gustaría conocer más sobre tu perfil profesional.'
  )}`

  const inputClass = (field: keyof typeof errors) =>
    `w-full px-4 py-3 rounded-xl text-sm font-medium
    bg-slate-50 dark:bg-navy-800 border transition-all duration-200
    text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500
    focus:outline-none focus:ring-2 focus:ring-brand-blue/40
    ${errors[field]
      ? 'border-red-400 focus:border-red-500'
      : 'border-slate-200 dark:border-navy-600 focus:border-brand-blue'
    }`

  return (
    <section id="contacto" className="section-padding bg-white dark:bg-navy-900">
      <div className="container-max">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-4">Contacto</span>
          <h2 className="text-section-title font-black text-navy-900 dark:text-white mt-4">
            ¿Hablamos de{' '}
            <span className="text-gradient">oportunidades?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Estoy abierto a conversaciones con reclutadores, headhunters y líderes empresariales interesados en sumar un perfil de marketing ejecutivo senior.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left – contact info */}
          <AnimatedSection direction="left" className="space-y-6">
            {/* CTA for recruiters */}
            <div className="card-base rounded-2xl p-6 bg-gradient-to-br from-brand-blue/5 to-indigo-500/5
              border-brand-blue/20">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center
                  justify-center flex-shrink-0 mt-0.5">
                  <Send size={14} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 dark:text-white text-sm">
                    Para Reclutadores y Headhunters
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Disponible para explorar oportunidades como CMO, Gerente de Mercadeo,
                    Director de Marketing, Head of Marketing o Gerente Comercial en empresas
                    con visión de crecimiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {contactInfo.map(info => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`flex items-center gap-4 p-4 card-base rounded-2xl
                      transition-all duration-200 group
                      ${info.href !== '#' ? 'cursor-pointer hover:border-brand-blue/30' : 'cursor-default'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color}
                      flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{info.label}</div>
                      <div className="text-sm font-semibold text-navy-900 dark:text-white
                        group-hover:text-brand-blue transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl
                bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold text-sm
                transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <MessageCircle size={18} />
              Contactar por WhatsApp
            </motion.a>
          </AnimatedSection>

          {/* Right – contact form */}
          <AnimatedSection direction="right">
            <form onSubmit={handleSubmit} noValidate className="card-base rounded-2xl p-6 md:p-8 space-y-5">
              <h3 className="font-bold text-navy-900 dark:text-white text-lg mb-1">
                Enviar mensaje
              </h3>

              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className={inputClass('name')}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={inputClass('email')}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Empresa / Organización
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                  className={inputClass('company')}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntame sobre la oportunidad o tu consulta..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass('message')} resize-none`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary justify-center py-4 text-sm
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {/* Feedback messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 p-3 rounded-xl
                      bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm"
                    role="alert"
                  >
                    <CheckCircle size={16} />
                    ¡Mensaje enviado con éxito! Te contactaré pronto.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 p-3 rounded-xl
                      bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm"
                    role="alert"
                  >
                    <AlertCircle size={16} />
                    Ocurrió un error. Por favor contáctame directamente a renevb@ufm.edu
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
