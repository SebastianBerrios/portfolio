# Portfolio — Sebastián Berrios Gómez

Portfolio personal para presentar experiencia profesional y proyectos como desarrollador frontend.

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-FF3E00?logo=astro&logoColor=fff&style=flat)
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)

</div>

---

## Stack

- **[Astro 4](https://astro.build/)** — framework principal (SSG)
- **[React 19](https://react.dev/)** — islands interactivos (`client:visible`)
- **[Tailwind CSS 3](https://tailwindcss.com/)** — estilos utilitarios
- **[TypeScript](https://www.typescriptlang.org/)** — tipado estático
- **[Fraunces](https://fonts.google.com/specimen/Fraunces)** — fuente display (encabezados)
- **[Onest Variable](https://fonts.google.com/specimen/Onest)** — fuente de cuerpo

---

## Comandos

```bash
pnpm dev       # Servidor de desarrollo en localhost:4321
pnpm build     # Type-check (astro check) + build de producción
pnpm preview   # Preview del build de producción
```

---

## Estructura

```
src/
├── assets/icons/            # Iconos SVG como componentes Astro
├── components/
│   ├── Hero.astro           # Sección de presentación
│   ├── Header.astro         # Navegación fija con scroll-blur
│   ├── Experience.astro     # Lista de experiencia laboral
│   ├── ExperienceItem.astro # Item individual (timeline con dot ámbar)
│   ├── Projects.astro       # Proyectos personales
│   ├── Freelances.astro     # Proyectos freelance
│   ├── ProjectSelector.tsx  # Toggle React: Freelances / Proyectos
│   ├── ThemeToggle.astro    # Botón de toggle claro/oscuro
│   ├── Badge.astro          # Badge "Disponible para trabajar"
│   ├── SocialPill.astro     # Botones de contacto/redes sociales
│   └── LinkButton.astro     # Botón de enlace (GitHub, Preview)
├── layouts/
│   └── Layout.astro         # Layout base (fuentes, fondo, meta tags, grain)
├── pages/
│   └── index.astro          # Página principal
└── utils/
    └── tags.ts              # Definición centralizada de etiquetas de tecnología
```

---

## Convenciones

- **Componentes**: `.astro` por defecto; React (`.tsx`) solo para estado interactivo (`ProjectSelector`).
- **Alias de path**: `@/` → `src/`
- **Datos como arrays**: proyectos, freelances y experiencia viven directamente en sus componentes (sin CMS ni capa de datos externa).
- **Imágenes**: servidas desde `public/images/` y referenciadas como `/images/nombre.webp`.
- **Dark mode**: clase `dark` en `<html>`, gestionada por `ThemeToggle` con persistencia en `localStorage`. Si no hay preferencia guardada, respeta el tema del sistema.

### Agregar un proyecto

- **Proyecto personal**: agregar una entrada al array `PROJECTS` en `src/components/Projects.astro`
- **Proyecto freelance**: agregar una entrada al array `FREELANCES` en `src/components/Freelances.astro`
- **Nueva etiqueta de tecnología**: agregar al objeto `TAGS` en `src/utils/tags.ts` y crear el ícono SVG correspondiente en `src/assets/icons/`

---

## Diseño

### Estética: Editorial Cálido

Tipografía serif de display contrastando con una sans-serif variable, acentos en ámbar refinado y texturas sutiles.

| Elemento | Claro | Oscuro |
|---|---|---|
| Fondo base | `#f9f7f2` | `#0e0d12` |
| Acento principal | `amber-500` | `amber-400` |
| Textura | Grano SVG (opacity 3.8%) | Grano SVG (opacity 7%) |
| Gradiente | Radial ámbar desde arriba | Radial ámbar desde arriba |

### Componentes destacados

- **Hero**: nombre en Fraunces a `text-7xl`, aura/glow detrás de la foto de perfil, label de rol en uppercase + tracking-widest
- **ThemeToggle**: botón único sol/luna con animación de escala y rotación; alterna directamente entre claro y oscuro sin dropdown
- **Timeline de experiencia**: dot ámbar con ring, línea vertical sutil (`amber-400/25`), jerarquía visual: rol (uppercase tiny) → empresa (bold) → fecha (gris)
- **Cards de proyectos**: número de proyecto en fuente mono (`01`, `02`...), hover con `scale-[1.03]` + `shadow-xl`
- **ProjectSelector**: tabs con underline animado en ámbar (transición `scale-x`) al cambiar entre Freelances y Proyectos
- **Badge**: punto pulsante (`animate-ping`) + borde animado con `conic-gradient`
- **Nav**: links con underline reveal en hover (`after:scale-x-100`) + blur progresivo al hacer scroll
