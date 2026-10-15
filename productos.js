// =====================================================================
//  LOS FAVORITOS DE NATA — lista de productos
// ---------------------------------------------------------------------
//  1. Cuando Amazon te apruebe como afiliado, pon tu ID de afiliado
//     (termina en -21) en AMAZON_TAG.
//  2. Cada producto busca en Amazon.es con "busqueda". Cuando elijas un
//     producto concreto, pega su enlace de afiliado en "enlace" y se
//     usará en lugar de la búsqueda.
//  3. Solo se muestran productos de 4 estrellas o más. Las búsquedas ya
//     filtran por 4 estrellas; si pegas un "enlace" concreto, pon también
//     su nota en "estrellas" (ej. 4.5) o no aparecerá en la web.
//  4. Para añadir un producto, copia un bloque { ... } y cambia los datos.
// =====================================================================

const AMAZON_TAG = "clubgatuno-21";
const ESTRELLAS_MINIMAS = 4;

const CATEGORIAS = {
  comer:   "Comer y beber",
  dormir:  "Dormir",
  jugar:   "Jugar",
  rascar:  "Rascar",
  higiene: "Higiene y cuidados",
};

const PRODUCTOS = [
  {
    nombre: "Fuente de agua para gatos",
    categoria: "comer",
    icono: "💧",
    texto: "Muchos gatos beben más agua si está en movimiento. Muy recomendable si tu gato bebe poco.",
    nata: "Mi favorita. El agua fresquita sabe mejor.",
    busqueda: "fuente agua gatos silenciosa",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Comedero elevado inclinado",
    categoria: "comer",
    icono: "🍽️",
    texto: "Al quedar más alto, el gato come en una postura más cómoda para el cuello.",
    nata: "Como como una reina.",
    busqueda: "comedero elevado inclinado gato",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Cama tipo cueva",
    categoria: "dormir",
    icono: "🛏️",
    texto: "Los gatos adoran los sitios cerrados donde sentirse protegidos. Ideal para invierno.",
    nata: "Mi escondite secreto. No se lo digas a nadie.",
    busqueda: "cama cueva gato",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Hamaca para ventana",
    categoria: "dormir",
    icono: "🪟",
    texto: "Se pega al cristal con ventosas. Sol y vistas a la calle: la televisión de los gatos.",
    nata: "Desde aquí vigilo a las palomas.",
    busqueda: "hamaca ventana gato ventosas",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Caña con plumas",
    categoria: "jugar",
    icono: "🪶",
    texto: "El juguete más sencillo y el que más éxito tiene. Bastan 10 minutos al día para que haga ejercicio.",
    nata: "¡Nunca la atrapo, pero nunca me rindo!",
    busqueda: "caña plumas gato juguete",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Túnel plegable",
    categoria: "jugar",
    icono: "🌀",
    texto: "Perfecto para esconderse, correr y emboscar. Se pliega y no ocupa sitio.",
    nata: "Entro por un lado y salgo… cuando me apetece.",
    busqueda: "tunel plegable gatos",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Rascador de cartón",
    categoria: "rascar",
    icono: "📦",
    texto: "Barato y eficaz para salvar el sofá. Además, a muchos gatos les encanta tumbarse encima.",
    nata: "Mejor que el sofá. Bueno… casi.",
    busqueda: "rascador carton gato",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Árbol rascador",
    categoria: "rascar",
    icono: "🌳",
    texto: "Rascar, trepar y dormir en un mismo mueble. A los gatos les encanta mirar desde las alturas.",
    nata: "Mi trono. Desde aquí lo controlo todo.",
    busqueda: "arbol rascador gato",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Cepillo quitapelo",
    categoria: "higiene",
    icono: "🪮",
    texto: "Menos pelos en casa y menos bolas de pelo. Y para muchos gatos, un momento de mimos.",
    nata: "Cepíllame, que hoy estoy guapa.",
    busqueda: "cepillo quitapelo gato",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Arenero cerrado",
    categoria: "higiene",
    icono: "🏠",
    texto: "Da más intimidad al gato y evita que la arena acabe por toda la casa.",
    nata: "Un poco de privacidad, por favor.",
    busqueda: "arenero cerrado gato",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Cortaúñas para gatos",
    categoria: "higiene",
    icono: "✂️",
    texto: "Uñas cuidadas y menos arañazos. Corta solo la puntita, nunca la parte rosada.",
    nata: "No me gusta… pero lo tolero por un premio.",
    busqueda: "cortaúñas gatos",
    enlace: "",
    estrellas: 0,
  },
  {
    nombre: "Transportín resistente",
    categoria: "higiene",
    icono: "🧳",
    texto: "Imprescindible para ir al veterinario. Mejor si se abre por arriba: el gato entra más fácil.",
    nata: "Si lo ves, es que toca veterinario. Yo me escondo.",
    busqueda: "transportin gato apertura superior",
    enlace: "",
    estrellas: 0,
  },
];
