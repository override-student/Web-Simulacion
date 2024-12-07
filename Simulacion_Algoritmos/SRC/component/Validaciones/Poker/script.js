// Función para limpiar campos
document.getElementById("clearButton7").addEventListener("click", () => {
  document.getElementById("xP").value = "";
  const tableBody = document.querySelector("#iterationsTabl7U2 tbody");
  tableBody.innerHTML = ""; // Limpiar tabla
});

// Generador de números aleatorios usando cuadrados medios
function generarNumerosAleatoriosPoker() {
  let semilla = Math.floor(1000 + Math.random() * 9000);
  let iteraciones = Math.floor(20 + Math.random() * 80);
  let numerosAleatorios = [];

  for (let i = 0; i < iteraciones; i++) {
    let cuadrado = (semilla * semilla).toString().padStart(8, "0");
    semilla = parseInt(cuadrado.substring(2, 6));
    numerosAleatorios.push(semilla / 10000);
  }

  document.getElementById("xP").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NAP" que genera los números y los coloca en el input
document
  .getElementById("NAP")
  .addEventListener("click", generarNumerosAleatoriosPoker);
