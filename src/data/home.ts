export const navigationLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'Nosotros', href: '#nosotros' },
] as const;

export const workingPrinciples = [
  { number: '01', title: 'Hablamos claro', text: 'Le explicamos las opciones y sus implicaciones sin esconderlas detrás de tecnicismos.' },
  { number: '02', title: 'Avanzamos por etapas', text: 'Revisamos entregas concretas para ajustar el rumbo con usted y mantener el foco.' },
  { number: '03', title: 'Cuidamos el alcance', text: 'Priorizamos lo que aporta valor y definimos qué puede construirse ahora y qué puede esperar.' },
  { number: '04', title: 'Pensamos a largo plazo', text: 'Creamos una base que pueda evolucionar y acordamos el acompañamiento que su operación necesita.' },
] as const;

export const services = [
  { icon: 'globe', title: 'Sitios web', description: 'Una presencia clara y profesional para que sus clientes conozcan su negocio y den el siguiente paso.', tags: 'Sitios corporativos · Páginas de captación' },
  { icon: 'bag', title: 'Tiendas en línea', description: 'Venda desde una experiencia de compra sencilla, con catálogo, pedidos y pagos conectados.', tags: 'Catálogos · E-commerce' },
  { icon: 'phone', title: 'Aplicaciones web y móviles', description: 'Acerque sus servicios a las personas con herramientas fáciles de usar, desde cualquier lugar.', tags: 'Portales · Apps de servicio' },
  { icon: 'blocks', title: 'Software a la medida', description: 'Organice su operación con un sistema que responda a su forma de trabajar, no al revés.', tags: 'Sistemas internos · Gestión de procesos' },
  { icon: 'rocket', title: 'Desarrollo de MVP', description: 'Pruebe su idea con una primera versión enfocada en lo esencial y un alcance bien definido.', tags: 'Prototipos · Productos iniciales' },
  { icon: 'nodes', title: 'Integraciones y dashboards', description: 'Conecte sus herramientas y consulte la información que necesita para tomar decisiones.', tags: 'Automatización · Paneles de control' },
] as const;

export const solutions = [
  { audience: 'PARA PYMES', icon: 'store', title: 'Su negocio merece\nuna buena presencia.', description: 'Si sus clientes aún no le encuentran en línea o sus ventas dependen de mensajes sueltos.', offer: 'Sitio web + tienda en línea' },
  { audience: 'PARA EMPRENDEDORES Y STARTUPS', icon: 'bulb', title: 'De una buena idea\na una primera versión.', description: 'Si necesita validar un producto sin desarrollar todo de una vez ni perder de vista su presupuesto.', offer: 'MVP + asesoría técnica' },
  { audience: 'PARA EMPRESAS EN CRECIMIENTO', icon: 'chart', title: 'Menos hojas de cálculo.\nMás control.', description: 'Si su equipo repite tareas o necesita unir información que hoy vive en herramientas separadas.', offer: 'Software + integraciones' },
] as const;
