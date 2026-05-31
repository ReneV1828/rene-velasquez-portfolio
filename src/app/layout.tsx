import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import './globals.css'

/* ─────────────────────────────────────────
   SEO & Open Graph Metadata
───────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://renevelasquez.com'),
  title: {
    default: 'René Velásquez | Gerente de Mercadeo | Marketing Strategist Guatemala',
    template: '%s | René Velásquez',
  },
  description:
    'Profesional de marketing con +20 años de experiencia. Especialista en Marketing Digital, Growth Marketing, CRM, SEO/SEM, Trade Marketing y liderazgo de equipos. CMO · Gerente de Mercadeo · Director de Marketing en Guatemala.',
  keywords: [
    'Gerente de Mercadeo Guatemala',
    'Marketing Manager Guatemala',
    'Director de Marketing Guatemala',
    'CMO Guatemala',
    'Marketing Strategist',
    'Growth Marketing',
    'Digital Marketing Manager',
    'Head of Marketing',
    'Gerente Comercial Guatemala',
    'Marketing Executive Guatemala',
    'René Velásquez',
    'Marketing Digital',
    'SEO SEM Guatemala',
    'Trade Marketing',
    'Omnichannel Marketing',
  ],
  authors: [{ name: 'René Velásquez', url: 'https://renevelasquez.com' }],
  creator: 'René Velásquez',
  openGraph: {
    type: 'profile',
    locale: 'es_GT',
    url: 'https://renevelasquez.com',
    siteName: 'René Velásquez – Marketing Executive',
    title: 'René Velásquez | Gerente de Mercadeo | Marketing Strategist Guatemala',
    description:
      '+20 años liderando estrategias de marketing 360, transformación digital, growth y equipos multidisciplinarios en Guatemala y Centroamérica.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'René Velásquez – Marketing Executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'René Velásquez | Gerente de Mercadeo Guatemala',
    description: '+20 años en marketing estratégico, digital y growth. Disponible para oportunidades ejecutivas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://renevelasquez.com',
  },
}

/* ─────────────────────────────────────────
   JSON-LD Schema Markup
───────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'René Velásquez',
  jobTitle: 'Gerente de Mercadeo | Marketing Strategist | Business Growth Leader',
  description: 'Profesional en marketing con Maestría en Marketing Digital y +20 años de experiencia liderando estrategias 360 ATL/BTL, marketing digital, growth y equipos en Guatemala.',
  url: 'https://renevelasquez.com',
  sameAs: ['https://www.linkedin.com/in/renevelasquezb/'],
  email: 'renevb@ufm.edu',
  telephone: '+502-4917-5701',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GT',
    addressLocality: 'Guatemala City',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Universidad Galileo',
      sameAs: 'https://www.galileo.edu',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Universidad Francisco Marroquín',
      sameAs: 'https://www.ufm.edu',
    },
  ],
  knowsAbout: [
    'Marketing Estratégico',
    'Marketing Digital',
    'Growth Marketing',
    'SEO SEM',
    'CRM',
    'Trade Marketing',
    'Omnichannel Marketing',
    'Business Intelligence',
    'Category Management',
    'S&OP',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Grupo Buen Rollo',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
