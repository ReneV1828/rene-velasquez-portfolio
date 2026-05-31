# René Velásquez – Executive Marketing Portfolio

> Sitio web profesional de posicionamiento ejecutivo para René Velásquez, Marketing Strategist & Business Growth Leader.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| Next.js | 14 | Framework React con App Router |
| React | 18 | UI Library |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 3 | Estilos utilitarios |
| Framer Motion | 11 | Animaciones y transiciones |
| next-themes | 0.3 | Modo oscuro/claro |
| Lucide React | latest | Íconos SVG |

## Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus datos

# 3. Ejecutar en desarrollo
npm run dev
# Abrir http://localhost:3000

# 4. Build para producción
npm run build
npm start
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Metadata SEO + Schema markup + ThemeProvider
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Variables CSS + estilos globales
└── components/
    ├── layout/
    │   ├── Navbar.tsx       # Navegación sticky + mobile drawer
    │   └── Footer.tsx       # Footer con links y contacto
    ├── sections/
    │   ├── Hero.tsx          # Hero con foto, CTAs y animaciones
    │   ├── About.tsx         # Narrativa + pilares de expertise
    │   ├── Experience.tsx    # Timeline interactivo expandible
    │   ├── Education.tsx     # Educación + certificaciones
    │   ├── Skills.tsx        # Barras de habilidades animadas
    │   ├── Achievements.tsx  # Contadores animados de logros
    │   ├── Volunteering.tsx  # RSE y voluntariado
    │   ├── Press.tsx         # Apariciones en medios
    │   ├── Portfolio.tsx     # Link al portafolio Canva
    │   └── Contact.tsx       # Formulario + WhatsApp + info
    └── ui/
        ├── ThemeProvider.tsx    # Proveedor de tema oscuro/claro
        ├── ThemeToggle.tsx      # Botón de cambio de tema
        └── AnimatedSection.tsx  # HOC para animaciones on-scroll
```

## Personalización

### 1. Foto profesional
Coloca tu foto en `public/foto-rene.jpg` (recomendado: 800×900px, formato WebP/JPG).

### 2. CV en PDF
Coloca tu CV en `public/cv-rene-velasquez.pdf`.

### 3. Formulario de contacto
Regístrate en [Formspree](https://formspree.io) y actualiza `NEXT_PUBLIC_FORMSPREE_ENDPOINT` en `.env.local`.

### 4. Apariciones en prensa
Edita el array `pressItems` en `src/components/sections/Press.tsx` con tus links reales.

### 5. SEO y metadatos
Actualiza la URL del sitio en `NEXT_PUBLIC_SITE_URL` en `.env.local` y en `src/app/layout.tsx`.

### 6. Open Graph image
Crea una imagen de 1200×630px y colócala en `public/og-image.jpg`.

## Deploy en Vercel

```bash
# Opción 1: Vercel CLI
npm i -g vercel
vercel --prod

# Opción 2: GitHub
# 1. Sube el proyecto a GitHub
# 2. Importa en vercel.com
# 3. Agrega las variables de entorno en el panel de Vercel
```

### Variables de entorno en Vercel
Agrega en el panel de Vercel → Settings → Environment Variables:
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`

## Checklist Pre-lanzamiento

- [ ] Foto profesional en `/public/foto-rene.jpg`
- [ ] CV PDF en `/public/cv-rene-velasquez.pdf`
- [ ] Imagen Open Graph en `/public/og-image.jpg`
- [ ] Formspree endpoint configurado
- [ ] URLs de prensa actualizadas
- [ ] Dominio personalizado configurado en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Test en móvil (375px) y desktop (1440px)
- [ ] Lighthouse score > 90 verificado

## Lighthouse Optimizations Incluidas

- ✅ Fuentes con `display=swap`
- ✅ Imágenes con Next.js Image (lazy load + optimización automática)
- ✅ CSS purge con Tailwind
- ✅ Compresión habilitada en `next.config.ts`
- ✅ Headers de seguridad en `vercel.json`
- ✅ Preconnect a Google Fonts
- ✅ Schema markup JSON-LD
- ✅ Open Graph + Twitter Card
- ✅ Sitemap generado automáticamente por Next.js

## Soporte

Desarrollado con Next.js 14 App Router + Tailwind CSS + Framer Motion.
Optimizado para reclutadores, headhunters y búsqueda ejecutiva.
