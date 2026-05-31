import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-xl font-black text-white">
              René <span className="text-brand-blue">Velásquez</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Gerente de Mercadeo | Marketing Strategist | Business Growth Leader
            </p>
            <p className="text-xs text-slate-500">Guatemala, Centroamérica</p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Navegación
            </h4>
            <nav className="space-y-2">
              {[
                ['#sobre-mi', 'Sobre Mí'],
                ['#experiencia', 'Experiencia'],
                ['#educacion', 'Educación'],
                ['#competencias', 'Competencias'],
                ['#logros', 'Logros'],
                ['#portafolio', 'Portafolio'],
                ['#contacto', 'Contacto'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Contacto Directo
            </h4>
            <div className="space-y-3">
              <a href="mailto:renevb@ufm.edu"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={14} className="text-brand-blue flex-shrink-0" />
                renevb@ufm.edu
              </a>
              <a href="tel:+50249175701"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                <Phone size={14} className="text-brand-blue flex-shrink-0" />
                +502 4917-5701
              </a>
              <a
                href="https://www.linkedin.com/in/renevelasquezb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin size={14} className="text-brand-blue flex-shrink-0" />
                linkedin.com/in/renevelasquezb
              </a>
            </div>

            {/* Download CV */}
            <a
              href="/cv-rene-velasquez.pdf"
              download
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl
                bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-semibold
                transition-all duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              Descargar CV (PDF)
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-700 flex flex-col sm:flex-row
          items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} René Velásquez · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-600">
              Diseñado para posicionamiento ejecutivo
            </p>
            <a
              href="#hero"
              aria-label="Volver al inicio"
              className="w-8 h-8 rounded-full bg-navy-700 hover:bg-brand-blue
                flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <ArrowUp size={14} className="text-slate-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
