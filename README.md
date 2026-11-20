# ZTS-Company
Web Page for ZTS Company

## Diseño UI/UX
* Archivo principal: [ZTS Company - Landing Page in Figma](https://www.figma.com/design/U0loptO6dFNiG34cKFAaVq/ZTS-Company---Landing-Page?node-id=2-5519&t=RTb373xkdneUaioK-0)

## Stack

* **Astro + TypeScript** para la estructura y el contenido. Astro genera HTML estático y funciona bien para páginas enfocadas en contenido y rendimiento.
* **CSS Modules o CSS global con variables** para reproducir fielmente el diseño y definir colores, tipografía y espaciado. Usar **Raleway** y **Montserrat**, como en Figma.
* **JavaScript nativo** para navegación móvil y acordeón de preguntas frecuentes; añadir React solo si alguna interacción crece en complejidad.
* **Servicio de formularios** (por ejemplo, Formspree) para recibir consultas sin mantener un servidor propio. Si se requiere validación o lógica a medida, usar una API de Astro.
* **Despliegue en Netlify o Vercel**, con dominio y HTTPS.

## Desarrollo local

Requisitos: Node.js y npm.

```sh
npm install
npm run dev
```

Astro mostrará en la terminal la URL local para abrir en el navegador (por defecto, `http://localhost:4321`). Para generar y previsualizar la versión de producción:

```sh
npm run build
npm run preview
```

## Estructura actual

```text
src/
├── layouts/
│   └── BaseLayout.astro  # HTML base, metadatos SEO y Google Fonts
├── pages/
│   └── index.astro       # Página de entrada, por ahora con contenido provisional
├── styles/
│   ├── global.css        # Reset, estilos base y utilidades
│   └── variables.css     # Design tokens extraídos de Figma
├── components/ui/        # Espacio para componentes atómicos reutilizables
├── sections/             # Espacio para las secciones de la landing
└── data/                 # Espacio para textos y datos estáticos
```

La arquitectura y los estilos globales están preparados. La landing todavía no está maquetada; `src/pages/index.astro` contiene un marcador temporal para que el proyecto pueda arrancar mientras construimos las secciones.
