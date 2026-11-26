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

export const examples = [
  {
    number: '01',
    title: 'De catálogo a tienda en línea.',
    description: 'Un comercio puede reunir sus productos, recibir pedidos y ofrecer a sus clientes una compra más sencilla.',
    tags: ['E-COMMERCE', 'CATÁLOGO', 'PEDIDOS'],
  },
  {
    number: '02',
    title: 'De archivos sueltos a control.',
    description: 'Una empresa puede centralizar pedidos, responsables y estados para dejar de buscar información entre archivos.',
    tags: ['SISTEMA INTERNO', 'INTEGRACIONES', 'DASHBOARD'],
  },
] as const;

export const workSteps = [
  { number: '01', title: 'Escuchamos', description: 'Nos cuenta su idea, sus procesos y lo que hoy le está frenando.', outcome: 'Necesidades y prioridades' },
  { number: '02', title: 'Definimos', description: 'Acordamos alcance, etapas y una inversión acorde con el proyecto.', outcome: 'Propuesta y plan de trabajo' },
  { number: '03', title: 'Construimos', description: 'Diseñamos y desarrollamos con revisiones y avances que usted puede ver.', outcome: 'Entregas y validación' },
  { number: '04', title: 'Acompañamos', description: 'Ponemos la solución en marcha y definimos cómo darle continuidad.', outcome: 'Lanzamiento y soporte' },
] as const;

export const frequentlyAskedQuestions = [
  {
    question: '¿Necesito saber de tecnología para empezar?',
    description: 'No. Basta con que nos cuente qué quiere lograr o qué proceso necesita mejorar. Le ayudamos a definir una solución y le explicamos cada decisión con claridad.',
  },
  {
    question: '¿Cuánto cuesta desarrollar mi proyecto?',
    description: 'Depende del alcance, las funcionalidades y las integraciones que necesite. Primero entendemos su objetivo y después le presentamos una propuesta clara, con etapas e inversión estimada.',
  },
  {
    question: '¿Cuánto tiempo toma una solución?',
    description: 'El plazo depende del tipo de solución y su alcance. Definimos un plan de trabajo por etapas y le compartimos avances para que sepa qué esperar durante el proceso.',
  },
  {
    question: '¿Pueden mejorar o conectar un sistema existente?',
    description: 'Sí. Revisamos las herramientas y procesos que ya utiliza para identificar cómo mejorarlos o conectarlos con una solución nueva.',
  },
  {
    question: '¿Qué sucede después del lanzamiento?',
    description: 'Podemos acordar soporte y mantenimiento para atender ajustes, mantener la solución funcionando y acompañar su evolución.',
  },
] as const;

export const ongoingSupport = {
  title: 'EL LANZAMIENTO\nNO ES EL FINAL\nDEL CAMINO.',
  description: 'Su herramienta necesita seguir siendo útil. Acordamos el soporte y mantenimiento para acompañarle también después de publicar.',
  topics: ['Mantenimiento', 'Soporte', 'Evolución'],
} as const;

export const companyIdentity = {
  description: 'Zenith Technologic Solutions Company. Un aliado cercano para hacer más accesible la tecnología y convertirla en una herramienta de trabajo real.',
  statement: 'LA TECNOLOGÍA DEBE\nTRABAJAR PARA LAS PERSONAS.\nNO AL REVÉS.',
  values: ['Accesibilidad', 'Empatía', 'Soluciones que evolucionan'],
} as const;
