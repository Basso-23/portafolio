export const projects = [
  {
    name: "Pillars Brewery",
    category: "front-end",
    image: "https://i.imgur.com/6luOD3J.jpeg",
    position: "top",
    url: "https://pillars-brewery.vercel.app/",
    github: "https://github.com/Basso-23/pillars-brewery",
    tech: ["Astro", "React", "Tailwind", "CSS"],
    summary:
      "Diseño de la página web de la cervecería de lager artesanal Pillars Brewery.",
    h1:
      "<div>" +
      "<h1>Descripción General </h1>" +
      "<p>Un clon del diseño de la página web de la cervecería de lager artesanal Pillars Brewery, desarrollado en Astro y React utilizando <a target=_blank href=https://docs.astro.build/es/concepts/islands/>Astro Islands</a>.</p>" +
      "<p></p>" +
      '<p style="border-left:5px solid #a1a1a1; padding-left:10px">Nota: El proyecto es solo una demostración del diseño; no incluye ninguna funcionalidad.</p>' +
      "</div>",
    h2:
      "<div>" +
      "<h1>Herramientas</h1>" +
      "<p><a target=_blank href=https://vercel.com/>Vercel</a> para el despliegue del sitio web.</p>" +
      "<p>Animaciones realizadas con <a target=_blank href=https://www.framer.com/motion/>Framer Motion</a>.</p>" +
      "<p>Slider interactivo realizado con <a target=_blank href=https://swiperjs.com/>Swiper</a>.</p>" +
      "</div>",
    copyright:
      "Descargo de responsabilidad: Este proyecto fue creado solo con fines educativos. Todos los recursos utilizados pertenecen a Pillarsbrewery.com",
    status: 3,
  },

  {
    name: "Plataforma de votos",
    category: "full-stack",
    image: "https://i.imgur.com/AJTRQ56.jpeg",
    position: "top",
    url: "https://www.google.com/",
    github: "https://www.google.com/",
    tech: ["Next", "React", "Tailwind", "CSS", "Firebase"],
    summary: "Demo de sistema de conteo de votos para elecciones Panamá 2024.",
    h1:
      "<div>" +
      "<h1>Descripción General </h1>" +
      "<p>Una plataforma de conteo de votos desarrollada en Next.js que permite la recopilación y el procesamiento rápido de votos en tiempo real, garantizando la seguridad y la precisión de los resultados.</p>" +
      "</div>",
    h2:
      "<div>" +
      "<h1>Permisos según tipo de usuario</h1>" +
      "<p><strong>Administrador</strong></p>" +
      "<p><table><tr><th>Lectura</th><th>Creación</th><th>Eliminación</th><th>Edición</th></tr><tr><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td></tr></table></p>" +
      "<p><strong>Dirigente</strong></p>" +
      "<p><table><tr><th>Lectura</th><th>Creación</th><th>Eliminación</th><th>Edición</th></tr><tr><td>&#10003;</td><td></td><td></td><td></td></tr></table></p>" +
      '<p style="border-left:5px solid #a1a1a1; padding-left:10px">Nota: Los dirigentes solo tienen acceso a los datos asignados a ellos.</p>' +
      "<h1>Aspectos relevantes</h1>" +
      "<p>- Búsqueda de votantes por cédula o dirigente asignado </p>" +
      "<p>- Porcentaje total de votos conseguidos </p>" +
      "<p>- Filtro de votos conseguidos por centro de votación o dirigente</p>" +
      "<p>- Notificación al realizar una acción (crear, eliminar o editar un votante)</p>" +
      "<p>- Datos ordenables individual y grupalmente para impresión</p>" +
      "<p>- Exportación de datos vía PDF</p>" +
      "<p></p>" +
      '<p style="border-left:5px solid #a1a1a1; padding-left:10px">Nota: Los dirigentes son personas que fueron escogidas para buscar votantes.</p>' +
      "<h1>Herramientas</h1>" +
      "<p>Uso de VPS en <a target=_blank href=https://www.hostinger.com/>Hostinger</a> para el despliegue del sitio web.</p>" +
      "<p>Biblioteca de componentes <a target=_blank href=https://ui.shadcn.com/>Shadcn/ui</a>.</p>" +
      "<p>Uso de <a target=_blank href=https://jotai.org/>Jotai</a> para la manipulación de variables globales.</p>" +
      "<p>Proceso de autenticación de usuarios con <a target=_blank href=https://firebase.google.com/docs/auth?hl=es-419> Firebase Auth</a>.</p>" +
      "<p>Almacenamiento de datos en la nube con <a target=_blank href=https://firebase.google.com/docs/firestore?hl=es-419> Firebase Firestore</a>.</p>" +
      "</div>",
    copyright: false,
    status: 1,
  },

  {
    name: "AirPods Max",
    category: "front-end",
    image: "https://i.imgur.com/pGwPZXN.jpeg",
    position: "top",
    url: "https://airpods-max-rust.vercel.app/",
    github: "https://github.com/Basso-23/airpods-max",
    tech: ["Next", "React", "Tailwind", "CSS"],
    summary: "Diseño de la página web de los auriculares AirPods Max de Apple.",
    h1:
      "<div>" +
      "<h1>Descripción General </h1>" +
      "<p>Un clon del diseño de la página web de los AirPods Max de Apple, desarrollado en Next.js</p>" +
      "<p></p>" +
      '<p style="border-left:5px solid #a1a1a1; padding-left:10px">Nota: El proyecto es solo una demostración del diseño; no incluye ninguna funcionalidad.</p>' +
      "</div>",
    h2:
      "<div>" +
      "<h1>Herramientas</h1>" +
      "<p><a target=_blank href=https://vercel.com/>Vercel</a> para el despliegue del sitio web.</p>" +
      "<p>Animaciones realizadas con <a target=_blank href=https://www.framer.com/motion/>Framer Motion</a>.</p>" +
      "<p>Animaciones parallax realizadas con <a target=_blank href=https://github.com/1000ship/react-scroll-motion/tree/d12256f3f0ce5a1b18b750dd80a87c0aece4ac0d>React Scroll Motion</a>.</p>" +
      "</div>",
    copyright:
      "Descargo de responsabilidad: Este proyecto fue creado solo con fines educativos. Todos los recursos utilizados pertenecen a Apple.com",
    status: 2,
  },
  {
    name: "Nike",
    category: "front-end",
    image: "https://i.imgur.com/sfl3VSb.jpeg",
    position: "top",
    url: "https://www.nike.com/",
    github: "https://www.google.com/",
    tech: ["Next", "React", "Tailwind", "CSS"],
    summary:
      "Diseño de la página web de la tienda de ropa de Nike junto a su catálogo.",
    h1:
      "<div>" +
      "<h1>Descripción General </h1>" +
      "<p>Un clon del diseño de la página web de la tienda de ropa de Nike, desarrollado en Next.js</p>" +
      "</div>",
    h2:
      "<div>" +
      "<h1>Pestañas disponibles</h1>" +
      "<p>- Página principal</p>" +
      "<p>- Catálogo de artículos</p>" +
      "<h1>Herramientas</h1>" +
      "<p><a target=_blank href=https://vercel.com/>Vercel</a> para el despliegue del sitio web.</p>" +
      "</div>",
    copyright:
      "Descargo de responsabilidad: Este proyecto fue creado solo con fines educativos. Todos los recursos utilizados pertenecen a Nike.com",
    status: 1,
  },
];
