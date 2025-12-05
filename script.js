console.log("ready");

// Lista de frases directamente en el script
const frases = [
  "Brilla hasta que duela.",
  "En tu caos confío.",
  "Hoy es el día para empezar.",
  "Cada error es un paso adelante.",
  "Haz que cuente."
];

// Función para mostrar la frase del día según el día del mes
function mostrarFraseDelDia() {
  const index = new Date().getDate() % frases.length;
  document.getElementById('phrase').textContent = frases[index];
}

// Función para mostrar una frase aleatoria al pulsar el botón
function mostrarFraseAleatoria() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  document.getElementById('phrase').textContent = frases[randomIndex];
}

// Función para mostrar la fecha actual
function mostrarFecha() {
  const hoy = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = hoy.toLocaleDateString('es-ES', opciones);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarFraseDelDia();
  mostrarFecha();

  // Configurar botón "Siguiente frase"
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.addEventListener('click', mostrarFraseAleatoria);
});
