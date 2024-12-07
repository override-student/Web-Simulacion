// Función para limpiar campos
document.getElementById("clearButton4").addEventListener("click", () => {
  document.getElementById("xK").value = "";
  const tableBody = document.querySelector("#iterationsTabl4U2 tbody");
  tableBody.innerHTML = ""; // Limpiar tabla
});

// Función para generar números aleatorios y colocarlos en el input X (opcional)
function generarNumerosAleatoriosK() {
  let semilla = Math.floor(1000 + Math.random() * 9000);
  let iteraciones = Math.floor(20 + Math.random() * 80); // Número de iteraciones entre 20 y 100
  let numerosAleatorios = [];

  for (let i = 0; i < iteraciones; i++) {
    let cuadrado = (semilla * semilla).toString().padStart(8, "0"); // Cuadrado de la semilla con 8 dígitos
    semilla = parseInt(cuadrado.substring(2, 6)); // Obtener los 4 dígitos del centro
    numerosAleatorios.push(semilla / 10000); // Normalizar a un rango entre 0 y 1
  }

  document.getElementById("xK").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NAK" que genera los números y los coloca en el input
document
  .getElementById("NAK")
  .addEventListener("click", generarNumerosAleatoriosK);
