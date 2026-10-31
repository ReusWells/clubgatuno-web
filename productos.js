// =====================================================================
//  LOS FAVORITOS DE NATA — lista de productos
// ---------------------------------------------------------------------
//  1. Cada producto enlaza a su ficha de Amazon.es con su "asin" (el
//     código de 10 letras y números que sale en la dirección del
//     producto: amazon.es/dp/B0XXXXXXXX). El tag de afiliado se añade solo.
//  2. Si un producto no tiene "asin", se usa una búsqueda en Amazon con
//     "busqueda" (filtrada a 4 estrellas o más).
//  3. Solo se muestran productos de 4 estrellas o más: pon su nota en
//     "estrellas" (ej. 4.5) o no aparecerá. La nota NO se enseña en la web
//     (Amazon no deja mostrar valoraciones copiadas a mano).
//  4. Los productos con categoría "regalos" salen en su propia sección
//     de temporada. Para ocultarla, pon MOSTRAR_REGALOS = false.
//  5. Para añadir un producto, copia un bloque { ... } y cambia los datos.
//  Última revisión de productos (nota y disponibilidad): 31/10/2026.
// =====================================================================

const AMAZON_TAG = "clubgatuno-21";
const ESTRELLAS_MINIMAS = 4;
const MOSTRAR_REGALOS = true;

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
    modelo: "Fuente de acero inoxidable con filtro",
    categoria: "comer",
    icono: "💧",
    texto: "Muchos gatos beben más agua si está en movimiento. Muy recomendable si tu gato bebe poco.",
    nata: "Mi favorita. El agua fresquita sabe mejor.",
    asin: "B0G5PM19RG",
    busqueda: "fuente agua gatos silenciosa",
    estrellas: 4.4,
  },
  {
    nombre: "Comedero elevado inclinado",
    modelo: "PETKIT Cybertail, de acero inoxidable",
    categoria: "comer",
    icono: "🍽️",
    texto: "Al quedar más alto, el gato come en una postura más cómoda para el cuello.",
    nata: "Como como una reina.",
    asin: "B083DMX4Q4",
    busqueda: "comedero elevado inclinado gato",
    estrellas: 4.6,
  },
  {
    nombre: "Cama tipo cueva",
    modelo: "Bedsure, iglú con cojín lavable",
    categoria: "dormir",
    icono: "🛏️",
    texto: "Los gatos adoran los sitios cerrados donde sentirse protegidos. Ideal para invierno.",
    nata: "Mi escondite secreto. No se lo digas a nadie.",
    asin: "B0CHFGBZFZ",
    busqueda: "cama cueva gato",
    estrellas: 4.7,
  },
  {
    nombre: "Hamaca para ventana",
    modelo: "GUUSII HOME, plegable y con ventosas",
    categoria: "dormir",
    icono: "🪟",
    texto: "Se pega al cristal con ventosas. Sol y vistas a la calle: la televisión de los gatos.",
    nata: "Desde aquí vigilo a las palomas.",
    asin: "B0F5WB2Z5B",
    busqueda: "hamaca ventana gato ventosas",
    estrellas: 4.8,
  },
  {
    nombre: "Caña con plumas",
    modelo: "Set de 8 piezas con plumas de repuesto",
    categoria: "jugar",
    icono: "🪶",
    texto: "El juguete más sencillo y el que más éxito tiene. Bastan 10 minutos al día para que haga ejercicio.",
    nata: "¡Nunca la atrapo, pero nunca me rindo!",
    asin: "B07FKMTLCW",
    busqueda: "caña plumas gato juguete",
    estrellas: 4.6,
  },
  {
    nombre: "Túnel plegable",
    modelo: "OHANA, de gamuza con pelota",
    categoria: "jugar",
    icono: "🌀",
    texto: "Perfecto para esconderse, correr y emboscar. Se pliega y no ocupa sitio.",
    nata: "Entro por un lado y salgo… cuando me apetece.",
    asin: "B07TZ3WTT1",
    busqueda: "tunel plegable gatos",
    estrellas: 4.8,
  },
  {
    nombre: "Rascador de cartón",
    modelo: "Conlun, ovalado 2 en 1 (rascador y cama)",
    categoria: "rascar",
    icono: "📦",
    texto: "Barato y eficaz para salvar el sofá. Además, a muchos gatos les encanta tumbarse encima.",
    nata: "Mejor que el sofá. Bueno… casi.",
    asin: "B0B3GH8J3K",
    busqueda: "rascador carton gato",
    estrellas: 4.8,
  },
  {
    nombre: "Árbol rascador",
    modelo: "Feandrea, 112 cm con 4 postes",
    categoria: "rascar",
    icono: "🌳",
    texto: "Rascar, trepar y dormir en un mismo mueble. A los gatos les encanta mirar desde las alturas.",
    nata: "Mi trono. Desde aquí lo controlo todo.",
    asin: "B0BSFF63QY",
    busqueda: "arbol rascador gato",
    estrellas: 4.6,
  },
  {
    nombre: "Cepillo quitapelo",
    modelo: "Morpilot, rastrillo de pelo muerto",
    categoria: "higiene",
    icono: "🪮",
    texto: "Menos pelos en casa y menos bolas de pelo. Y para muchos gatos, un momento de mimos.",
    nata: "Cepíllame, que hoy estoy guapa.",
    asin: "B01M72VYXM",
    busqueda: "cepillo quitapelo gato",
    estrellas: 4.5,
  },
  {
    nombre: "Arenero cerrado",
    modelo: "BPS, cubierto con pala",
    categoria: "higiene",
    icono: "🏠",
    texto: "Da más intimidad al gato y evita que la arena acabe por toda la casa.",
    nata: "Un poco de privacidad, por favor.",
    asin: "B08G34R2XF",
    busqueda: "arenero cerrado gato",
    estrellas: 4.3,
  },
  {
    nombre: "Cortaúñas para gatos",
    modelo: "Candure, con protector de seguridad",
    categoria: "higiene",
    icono: "✂️",
    texto: "Uñas cuidadas y menos arañazos. Corta solo la puntita, nunca la parte rosada.",
    nata: "No me gusta… pero lo tolero por un premio.",
    asin: "B00E3302YE",
    busqueda: "cortaúñas gatos",
    estrellas: 4.6,
  },
  {
    nombre: "Transportín resistente",
    modelo: "Amazon Basics, con apertura por arriba",
    categoria: "higiene",
    icono: "🧳",
    texto: "Imprescindible para ir al veterinario. Mejor si se abre por arriba: el gato entra más fácil.",
    nata: "Si lo ves, es que toca veterinario. Yo me escondo.",
    asin: "B00OP6SMCI",
    busqueda: "transportin gato apertura superior",
    estrellas: 4.6,
  },

  // ----- Regalos de Navidad (sección de temporada) -----
  {
    nombre: "Calendario de Adviento para gatos",
    modelo: "Vitakraft 2026, con golosinas",
    categoria: "regalos",
    icono: "📅",
    texto: "Una chuche al día hasta Navidad. Dale solo la de ese día: son premios, no comida.",
    nata: "¿Cómo que solo una al día?",
    asin: "B0BBRB3MMW",
    busqueda: "calendario adviento gatos",
    estrellas: 4.5,
  },
  {
    nombre: "Pelota interactiva con plumas",
    modelo: "GoldenSun, se activa al moverla",
    categoria: "regalos",
    icono: "⚽",
    texto: "Se mueve sola y suena como un pájaro. Perfecta para gatos que pasan muchas horas solos en casa.",
    nata: "Por fin una presa que no se esconde debajo del sofá.",
    asin: "B0F29BJJ13",
    busqueda: "juguete interactivo gato pelota automatica",
    estrellas: 4.3,
  },
  {
    nombre: "Juguetes de hierba gatera",
    modelo: "Set de 7: cuerdas y palitos de matatabi",
    categoria: "regalos",
    icono: "🌿",
    texto: "A muchos gatos la hierba gatera les vuelve locos de alegría. Un regalo pequeño que suele triunfar.",
    nata: "Huele a fiesta.",
    asin: "B0DX158S7P",
    busqueda: "juguetes hierba gatera gato",
    estrellas: 4.4,
  },
  {
    nombre: "Taza de cristal con gatito",
    modelo: "Qinhai, de doble pared",
    categoria: "regalos",
    icono: "☕",
    texto: "Para quien quiere a un gato: el gatito aparece al servir el café o el té.",
    nata: "Un regalo para tu humano favorito.",
    asin: "B09J29195B",
    busqueda: "taza gatos regalo",
    estrellas: 4.6,
  },
  {
    nombre: "Calcetines de gatos",
    modelo: "Pack de calcetines de algodón con gatos",
    categoria: "regalos",
    icono: "🧦",
    texto: "Calentitos y divertidos. El amigo invisible perfecto para cualquier amante de los gatos.",
    nata: "Los míos son blancos de serie.",
    asin: "B06WWGKBRJ",
    busqueda: "calcetines gatos regalo",
    estrellas: 4.6,
  },
];
