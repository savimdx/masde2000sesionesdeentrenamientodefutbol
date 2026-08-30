import { BenefitItem, BonusItem, DrillItem, TestimonialItem, FAQItem } from './types';
import bono1Img from './assets/images/bono_1.webp';
import bono2Img from './assets/images/bono_2.webp';
import bono3Img from './assets/images/bono_3.webp';
import bono4Img from './assets/images/bono_4.webp';
import bono5Img from './assets/images/bono_5.webp';
import bono6Img from './assets/images/bono_6.webp';
import bono7Img from './assets/images/bono_7.webp';
import bono8Img from './assets/images/bono_8.webp';
import ejerciciosAdicionalesImg from './assets/images/ejercicios_adicionales_futsal_1783515557260.webp';

export const HERO_BULLETS = [
  "Más de 2000 sesiones listas para aplicar",
  "Adaptable para todas las edades y niveles",
  "Acceso inmediato y descarga para siempre",
  "Material 100% digital e interactivo"
];

export const RECEIVE_CARDS = [
  {
    id: "rec-1",
    tag: "EL MATERIAL PRINCIPAL",
    title: "Más de 2000 Sesiones Listas",
    description: "Estructuradas paso a paso desde el calentamiento, parte principal con variantes, hasta la vuelta a la calma.",
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "rec-2",
    tag: "TODO EN UNO",
    title: "Ejercicios Técnicos, Tácticos y Físicos",
    description: "Desarrolla la técnica individual, comprensión táctica colectiva, toma de decisiones y el acondicionamiento físico óptimo.",
    accent: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "rec-3",
    tag: "ORGANIZACIÓN IMPECABLE",
    title: "Sesiones por Objetivos Claros",
    description: "Encuentra al instante lo que necesitas: posesión, presión, transiciones rápidas, defensa organizada o definición letal.",
    accent: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    id: "rec-4",
    tag: "MULTICATEGORÍA",
    title: "Adaptable a Niños, Jóvenes y Adultos",
    description: "Perfectamente adaptado desde fútbol infantil hasta categorías competitivas y amateur de alto nivel.",
    accent: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  },
  {
    id: "rec-5",
    tag: "MÉTODO PROBADO",
    title: "Diferentes Niveles Competitivos",
    description: "Variaciones progresivas de cada ejercicio para aumentar o disminuir la dificultad según el nivel real de tu plantel.",
    accent: "bg-rose-500/10 text-rose-400 border-rose-500/30"
  },
  {
    id: "rec-6",
    tag: "ACCESO ILIMITADO",
    title: "Acceso Inmediato y de por Vida",
    description: "Recibe el material en tu correo electrónico segundos después del pago. Sin suscripciones ni mensualidades adicionales.",
    accent: "bg-gold-500/10 text-amber-400 border-amber-500/30"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben-1",
    title: "Ahorra horas de planificación cada semana",
    description: "Planifica la semana de entrenamientos completa en menos de 10 minutos. No pases horas buscando videos en redes sociales."
  },
  {
    id: "ben-2",
    title: "Nunca vuelvas a quedarte sin ideas para entrenar",
    description: "Tendrás un repertorio infinito de ejercicios dinámicos y divertidos. Tus jugadores jamás volverán a tener una sesión aburrida."
  },
  {
    id: "ben-3",
    title: "Mejora el rendimiento individual y colectivo de tus jugadores",
    description: "Metodologías diseñadas para acelerar el aprendizaje técnico, la velocidad mental y la resistencia en el campo de juego."
  },
  {
    id: "ben-4",
    title: "Organiza tus entrenamientos de manera profesional",
    description: "Divide tus sesiones perfectamente: Calentamiento, Fase de desarrollo, Variante competitiva y Fase de cierre con armonía profesional."
  },
  {
    id: "ben-5",
    title: "Adapta fácilmente las sesiones según la edad y el nivel",
    description: "Si estás comenzando, te dará la seguridad de un entrenador veterano. Si ya tienes experiencia, aportará nuevas perspectivas tácticas."
  },
  {
    id: "ben-6",
    title: "Incrementa la calidad de tus entrenamientos desde el primer día",
    description: "La diferencia entre un entrenador amateur y un profesional está en el método y la preparación. Tu plantel notará el cambio de inmediato."
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bon-1",
    number: 1,
    title: "100 Ejercicios para Desarrollar la Velocidad en el Fútbol",
    description: "Ejercicios prácticos con y sin balón enfocados en la velocidad de reacción, aceleración y agilidad coordinada.",
    originalPrice: 29,
    tag: "POTENCIA Y REACCIÓN",
    image: "https://i.ibb.co/9HFkMT12/Chat-GPT-Image-29-de-ago-de-2026-20-24-41.png",
    fallbackImage: "https://i.ibb.co/9HFkMT12/Chat-GPT-Image-29-de-ago-de-2026-20-24-41.png"
  },
  {
    id: "bon-2",
    number: 2,
    title: "100 Ejercicios con Balón para Desarrollar la Resistencia en Fútbol",
    description: "Métodos de preparación física integrada con balón para acelerar la ganancia de resistencia específica de juego y mantener alta la motivación.",
    originalPrice: 35,
    tag: "RESISTENCIA INTEGRADA",
    image: "https://i.ibb.co/LKHYJ2f/Chat-GPT-Image-29-de-ago-de-2026-20-28-37.png",
    fallbackImage: "https://i.ibb.co/LKHYJ2f/Chat-GPT-Image-29-de-ago-de-2026-20-28-37.png"
  },
  {
    id: "bon-4",
    number: 3,
    title: "60 Ejercicios Físicos con Sólo un Pequeño Equipamiento en Fútbol",
    description: "Rutinas dinámicas optimizadas para entrenar fuerza, potencia y estabilidad utilizando materiales mínimos y portátiles.",
    originalPrice: 24,
    tag: "EQUIPAMIENTO MÍNIMO",
    image: "https://i.ibb.co/Zppc1F1D/Chat-GPT-Image-29-de-ago-de-2026-20-35-08.png",
    fallbackImage: "https://i.ibb.co/Zppc1F1D/Chat-GPT-Image-29-de-ago-de-2026-20-35-08.png"
  },
  {
    id: "bon-8",
    number: 4,
    title: "24 Plantillas de Entrenamientos de Fútbol",
    description: "Plantillas de diagramación, planillas de control de asistencia, fichas tácticas y hojas de anotación para estructurar tus entrenamientos de forma profesional.",
    originalPrice: 25,
    tag: "PLANTILLAS Y DISEÑO",
    image: "https://i.ibb.co/Y4kLZGb3/Chat-GPT-Image-29-de-ago-de-2026-20-37-24.png",
    fallbackImage: "https://i.ibb.co/Y4kLZGb3/Chat-GPT-Image-29-de-ago-de-2026-20-37-24.png"
  },
  {
    id: "bon-9",
    number: 5,
    title: "Lecciones en Video de Fútbol",
    description: "Acceso exclusivo a nuestra videoteca con clases tácticas y metodológicas en video, paso a paso, todo muy practical e intuitivo.",
    originalPrice: 49,
    tag: "APRENDIZAJE VISUAL",
    image: "https://i.ibb.co/pv9WZF7P/Chat-GPT-Image-29-de-ago-de-2026-20-43-32.png",
    fallbackImage: "https://i.ibb.co/pv9WZF7P/Chat-GPT-Image-29-de-ago-de-2026-20-43-32.png"
  },
  {
    id: "bon-10",
    number: 6,
    title: "Manual Práctico de Preparación Física en el Fútbol",
    description: "Guía completa de planificación física para optimizar la resistencia, fuerza explosiva, velocidad y prevención de lesiones en todas las etapas competitivas.",
    originalPrice: 35,
    tag: "PREPARACIÓN FÍSICA",
    image: "https://i.ibb.co/399HqtqR/Chat-GPT-Image-29-de-ago-de-2026-20-46-58.png",
    fallbackImage: "https://i.ibb.co/399HqtqR/Chat-GPT-Image-29-de-ago-de-2026-20-46-58.png"
  },
  {
    id: "bon-13",
    number: 7,
    title: "100 Ejercicios de Finalizaciones en Fútbol",
    description: "Guía completa de ejercicios de remates a portería, disparos tras regate, definición al primer toque y situaciones de 1x1 ante el portero.",
    originalPrice: 38,
    tag: "DEFINICIÓN Y REMATE",
    image: "https://i.ibb.co/FqBRBvR1/Chat-GPT-Image-29-de-ago-de-2026-20-45-06.png",
    fallbackImage: "https://i.ibb.co/FqBRBvR1/Chat-GPT-Image-29-de-ago-de-2026-20-45-06.png"
  },
  {
    id: "bon-18",
    number: 8,
    title: "Ejercicios Adicionales de Fútbol Sala",
    description: "Una recopilación exclusiva con esquemas tácticos extras, variantes avanzadas de posesión, presión alta y jugadas a balón parado específicas para fútbol sala.",
    originalPrice: 19,
    tag: "EJERCICIOS ADICIONALES",
    image: "https://i.ibb.co/JWmhMQJk/Ejercicios-Adicionales-de-F-tbol-Sala.png",
    fallbackImage: "https://i.ibb.co/JWmhMQJk/Ejercicios-Adicionales-de-F-tbol-Sala.png"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Fernando M.",
    role: "Entrenador Juvenil - Sub-15",
    quote: "Antes perdía mucho tiempo preparando mis entrenamientos y terminaba repitiendo los mismos conos. Ahora tengo sesiones listas para toda la temporada. Excelente material, la metodología es súper práctica.",
    rating: 5,
    achievement: "✓ 90% de ahorro de tiempo planificando",
    avatarSeed: "carlos",
    avatarUrl: "https://i.ibb.co/n8kV44L4/b3776243-7460-49de-9c89-93fabad5379e.avif"
  },
  {
    id: "test-2",
    name: "Andrés R.",
    role: "Director Deportivo - Academia de Fútbol",
    quote: "Trabajo en una academia de más de 120 niños y este pack nos ayudó muchísimo a estandarizar y variar los entrenamientos de todas las categorías. Los profesores están motivados y los padres notan el progreso.",
    rating: 5,
    achievement: "✓ Estandarización de metodología en su club",
    avatarSeed: "andres",
    avatarUrl: "https://i.ibb.co/gM4xj0Rb/treinador-de-futebol-indoor-observando-os-jogadores-durante-o-treino-406939-27210.avif"
  },
  {
    id: "test-3",
    name: "Marcelo Díaz",
    role: "Profesor de Educación Física y Entrenador",
    quote: "El contenido es increíblemente completo y muy visual. No se queda solo en teoría kilométrica; vas directo a la cancha sabiendo qué hacer. Desde el primer día pude aplicar nuevas sesiones con mi equipo.",
    rating: 5,
    achievement: "✓ Aplicación práctica inmediata",
    avatarSeed: "jose",
    avatarUrl: "https://i.postimg.cc/jq7t599j/istockphoto-515225171-612x612.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo recibiré el material?",
    answer: "Recibirás acceso inmediato en tu correo electrónico justo después de la confirmación de la compra. Se te enviará un enlace de descarga segura para acceder a todos los archivos interactivos, listos para ver en tu teléfono, tablet, computadora o para imprimirlos si lo prefieres."
  },
  {
    id: "faq-2",
    question: "¿El material sirve para todas las edades?",
    answer: "Sí. Las sesiones y ejercicios están catalogados y diseñados de forma modular, lo que te permite adaptarlos fácilmente desde categorías infantiles de iniciación hasta jóvenes de competencia y adultos amateur."
  },
  {
    id: "faq-3",
    question: "¿Necesito experiencia previa para aplicar este método?",
    answer: "No. Cada ejercicio viene explicado paso a paso de forma muy clara, con gráficos vectoriales detallados que muestran la colocación de conos, porterías, balones y movimientos de los jugadores, facilitando la comprensión incluso para principiantes."
  },
  {
    id: "faq-4",
    question: "¿Cuánto tiempo tendré acceso a la biblioteca?",
    answer: "El acceso es de por vida. Una vez descargado el material, es tuyo para siempre. Además, recibirás de forma totalmente gratuita cualquier actualización futura que agreguemos al pack sin costo extra."
  },
  {
    id: "faq-5",
    question: "¿Los 10 bonos especiales están realmente incluidos?",
    answer: "Sí, todos los 10 bonos mencionados están incluidos 100% gratis dentro del precio promocional de hoy. Se añadirán automáticamente a tu área de descarga al realizar el pedido."
  }
];

export const CREATOR_INFO = {
  name: "Lucian Sánchez",
  role: "Especialista en Metodología Táctica & Entrenador de Fútbol",
  experience: "+30 Años de Experiencia",
  // >>> COLOQUE AQUI O LINK DA FOTO DE LUCIAN SÁNCHEZ <<<
  photoUrl: "https://i.ibb.co/bMHqG5z9/img-20190102-wa0036.webp",
  bio: [
    "Hola, soy Lucian Sánchez. Con más de 30 años de trayectoria técnica y formativa en el fútbol, reuní y sistematicé toda mi experiencia en esta Biblioteca de +2000 Sesiones y Manuales Metodológicos.",
    "Mi objetivo es darte una herramienta práctica y de aplicación directa para que ahorres horas de planificación y eleves el nivel competitivo de tu equipo desde el primer día."
  ],
  credentials: [
    "+30 Años de Trayectoria en Cancha",
    "+2000 Sesiones y Ejercicios Diseñados",
    "+10.000 Entrenadores Capacitados",
    "Metodología 100% Práctica y Probada"
  ]
};


export const DRILLS: DrillItem[] = [
  {
    id: "drill-1",
    category: "Entrenamiento Técnico",
    title: "Circuito de Conducción, Fintas y Giros",
    description: "Ejercicio dinámico de control de balón, fintas corporales rápidas ante oponentes pasivos (conos) y aceleración tras el giro.",
    objective: "Mejorar la agilidad con balón, la conducción con borde externo e interno, y la velocidad de reacción.",
    organization: "Un espacio de 15x15 metros. 4 conos alineados a 1.5 metros de distancia y 2 porterías pequeñas de salida.",
    development: [
      "El jugador inicia en el cono de partida conduciendo el balón a alta velocidad.",
      "Realiza fintas (zig-zag) con toques cortos utilizando ambas piernas entre los conos centrales.",
      "Al llegar al último cono, realiza un giro rápido de 180° y acelera en un sprint corto de 5 metros para definir en las mini porterías."
    ],
    variations: [
      "Variante 1: Realizar la conducción obligatoriamente solo con la pierna no hábil.",
      "Variante 2: Añadir un defensor semi-activo al final de los conos para presionar la salida."
    ],
    players: [
      { x: 50, y: 220, team: 'blue', label: "Inicio" },
      { x: 120, y: 130, team: 'cone' },
      { x: 180, y: 130, team: 'cone' },
      { x: 240, y: 130, team: 'cone' },
      { x: 300, y: 130, team: 'cone' },
      { x: 200, y: 215, team: 'ball' },
      { x: 350, y: 80, team: 'red', label: "Portería" },
      { x: 350, y: 180, team: 'red', label: "Portería" }
    ],
    lines: [
      { x1: 55, y1: 210, x2: 110, y2: 135, type: 'dribble' },
      { x1: 120, y1: 130, x2: 180, y2: 130, type: 'dribble' },
      { x1: 180, y1: 130, x2: 240, y2: 130, type: 'dribble' },
      { x1: 240, y1: 130, x2: 300, y2: 130, type: 'dribble' },
      { x1: 300, y1: 130, x2: 350, y2: 90, type: 'run' }
    ]
  },
  {
    id: "drill-2",
    category: "Ejercicios de Pases",
    title: "Triángulo de Pases con Apoyo y Rotación de Tercer Hombre",
    description: "Circuito continuo enfocado en el pase raso firme, el control orientado y el desmarque de ruptura creando superioridad numérica.",
    objective: "Optimizar el pase al primer toque, la sincronización de movimientos y el desmarque a la espalda.",
    organization: "Triángulo equilátero con conos a 12 metros de distancia entre sí. Grupos de 5 a 6 jugadores con 1 balón.",
    development: [
      "El jugador A pasa fuerte al jugador B que se desmarca hacia adentro.",
      "B descarga al primer toque (de cara) para el jugador C que viene en carrera de apoyo.",
      "C mete un pase en profundidad para A, quien realizó una carrera a la espalda del cono imaginario.",
      "Se rota la posición: A va al puesto de B, B al de C, y C al de A."
    ],
    variations: [
      "Variante 1: Juego a un solo toque obligatorio para todos.",
      "Variante 2: Cambiar la dirección de la rotación para trabajar el perfil izquierdo."
    ],
    players: [
      { x: 80, y: 200, team: 'blue', label: "A" },
      { x: 320, y: 200, team: 'blue', label: "B" },
      { x: 200, y: 60, team: 'blue', label: "C" },
      { x: 100, y: 195, team: 'ball' },
      { x: 200, y: 140, team: 'cone', label: "Defensor Fijo" }
    ],
    lines: [
      { x1: 95, y1: 200, x2: 310, y2: 200, type: 'pass' },
      { x1: 320, y1: 190, x2: 210, y2: 70, type: 'pass' },
      { x1: 200, y1: 70, x2: 100, y2: 180, type: 'pass' }
    ]
  },
  {
    id: "drill-3",
    category: "Finalizaciones",
    title: "Pase de Pared por Banda y Remate en Zona de Gol",
    description: "Secuencia de juego rápido combinativo por los costados con llegada masiva de delanteros y remate letal frente al arquero.",
    objective: "Entrenar la precisión del centro lateral de primera, la anticipación ofensiva y la técnica de remate de cabeza o volea.",
    organization: "Mitad de campo reglamentario con portería oficial con arquero. Conos en la banda derecha para el extremo.",
    development: [
      "El centrocampista central pasa al extremo que corre libre por la banda.",
      "El extremo realiza una pared rápida (devolución) con el delantero de apoyo que sale del área.",
      "El extremo llega a línea de fondo y lanza un centro tenso entre el punto de penal y el área chica.",
      "El delantero centro ingresa con agresividad atacando el espacio para definir de primera ante el portero."
    ],
    variations: [
      "Variante 1: El centro debe ser rasante para remate directo con el pie.",
      "Variante 2: Incluir a un defensa central activo que intente rechazar el centro."
    ],
    players: [
      { x: 200, y: 230, team: 'blue', label: "Pivote" },
      { x: 340, y: 160, team: 'blue', label: "Extremo" },
      { x: 200, y: 120, team: 'blue', label: "Delantero" },
      { x: 200, y: 30, team: 'red', label: "Portero" },
      { x: 195, y: 215, team: 'ball' },
      { x: 180, y: 70, team: 'cone', label: "Defensa" }
    ],
    lines: [
      { x1: 210, y1: 220, x2: 330, y2: 165, type: 'pass' },
      { x1: 335, y1: 155, x2: 215, y2: 125, type: 'pass' },
      { x1: 215, y1: 120, x2: 200, y2: 45, type: 'run' }
    ]
  },
  {
    id: "drill-4",
    category: "Preparación Física",
    title: "Circuito de Coordinación, Agilidad y Potencia de Sprint",
    description: "Estación física integrada de alta intensidad enfocada en la aceleración intermitente, cambio de dirección y fuerza explosiva coordinada.",
    objective: "Desarrollar la potencia anaeróbica aláctica, la velocidad gestual y la coordinación motriz.",
    organization: "Área de 20x10 metros. Una escalera de coordinación, 4 mini vallas de 30 cm de altura, y 3 conos de slalom.",
    development: [
      "El jugador pasa la escalera de coordinación a toda velocidad con frecuencia rápida de apoyos (dos apoyos por cuadro).",
      "Inmediatamente realiza saltos seguidos bipodales (con ambas piernas juntas) sobre las 4 mini vallas.",
      "Realiza un slalom explosivo de ida y vuelta entre los 3 conos colocados en diagonal.",
      "Finaliza con un sprint a máxima intensidad de 10 metros hasta la línea de llegada."
    ],
    variations: [
      "Variante 1: Pasar la escalera de manera lateral.",
      "Variante 2: Colocar un balón al final del slalom para realizar un tiro de precisión inmediato."
    ],
    players: [
      { x: 60, y: 220, team: 'blue', label: "Inicio" },
      { x: 120, y: 220, team: 'cone', label: "Valla 1" },
      { x: 160, y: 220, team: 'cone', label: "Valla 2" },
      { x: 200, y: 220, team: 'cone', label: "Valla 3" },
      { x: 250, y: 150, team: 'cone', label: "Slalom" },
      { x: 290, y: 100, team: 'cone', label: "Slalom" },
      { x: 350, y: 50, team: 'blue', label: "Meta" }
    ],
    lines: [
      { x1: 70, y1: 220, x2: 110, y2: 220, type: 'run' },
      { x1: 200, y1: 220, x2: 240, y2: 160, type: 'run' },
      { x1: 290, y1: 100, x2: 345, y2: 55, type: 'run' }
    ]
  },
  {
    id: "drill-5",
    category: "Ejercicios Tácticos",
    title: "Transición Rápida 3 vs 2 con Repliegue Defensivo",
    description: "Simulación de contraataque ofensivo en superioridad numérica, donde los atacantes deben definir rápido antes del regreso del tercer defensa.",
    objective: "Mejorar la toma de decisiones ofensivas veloces, el doblaje de marcas y la contención en inferioridad numérica.",
    organization: "Un espacio de 40x30 metros. Dos porterías grandes en los extremos. 3 atacantes (azules) contra 2 defensores iniciales (rojos).",
    development: [
      "El central azul arranca con balón conduciendo a velocidad, mientras los dos extremos azules abren el campo.",
      "Los dos defensores rojos se cierran para proteger el pasillo central y retrasan su posición.",
      "Al mismo tiempo, un tercer defensor rojo en el medio campo arranca en repliegue defensivo a toda marcha.",
      "Los azules deben combinar pases rápidos para terminar la jugada en remate antes de que el tercer rojo se sume a la defensa (vuelva a un 3v3)."
    ],
    variations: [
      "Variante 1: Permitir solo un máximo de 3 toques por jugador.",
      "Variante 2: Si los defensores recuperan el balón, pueden contraatacar inmediatamente hacia la portería opuesta."
    ],
    players: [
      { x: 100, y: 130, team: 'blue', label: "A1" },
      { x: 80, y: 60, team: 'blue', label: "A2" },
      { x: 80, y: 200, team: 'blue', label: "A3" },
      { x: 260, y: 100, team: 'red', label: "D1" },
      { x: 260, y: 160, team: 'red', label: "D2" },
      { x: 350, y: 130, team: 'red', label: "Portero" },
      { x: 180, y: 50, team: 'red', label: "D3 (Repliegue)" },
      { x: 115, y: 130, team: 'ball' }
    ],
    lines: [
      { x1: 110, y1: 130, x2: 240, y2: 110, type: 'pass' },
      { x1: 80, y1: 60, x2: 200, y2: 80, type: 'run' },
      { x1: 80, y1: 200, x2: 230, y2: 170, type: 'run' }
    ]
  }
];
