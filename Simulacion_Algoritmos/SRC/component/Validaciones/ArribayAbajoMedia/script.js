// Función para limpiar campos
document.getElementById("clearButton6").addEventListener("click", () => {
  document.getElementById("xAYBM").value = "";
  const tableBody = document.querySelector("#iterationsTabl6U2 tbody");
  tableBody.innerHTML = ""; // Limpiar tabla
});

// Generador de números aleatorios usando cuadrados medios
function generarNumerosAleatoriosAYBM() {
  let semilla = Math.floor(1000 + Math.random() * 9000);
  let iteraciones = Math.floor(20 + Math.random() * 80);
  let numerosAleatorios = [];

  for (let i = 0; i < iteraciones; i++) {
    let cuadrado = (semilla * semilla).toString().padStart(8, "0");
    semilla = parseInt(cuadrado.substring(2, 6));
    numerosAleatorios.push(semilla / 10000);
  }

  document.getElementById("xAYBM").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NA" que genera los números y los coloca en el input
document
  .getElementById("NAAYBM")
  .addEventListener("click", generarNumerosAleatoriosAYBM);

document.getElementById("clearButton6").addEventListener("click", () => {
  document.getElementById("xAYBM").value = "";
  const tableBody = document.querySelector("#iterationsTabl6U2 tbody");
  tableBody.innerHTML = ""; // Limpiar tabla
});
