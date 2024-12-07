// Función para limpiar campos
document.getElementById("clearButton8").addEventListener("click", () => {
  document.getElementById("xH").value = "";
  const tableBody = document.querySelector("#iterationsTabl8U2 tbody");
  tableBody.innerHTML = "";
});

// Generador de números aleatorios usando cuadrados medios
function generarNumerosAleatoriosHuecos() {
  let semilla = Math.floor(1000 + Math.random() * 9000);
  let iteraciones = Math.floor(20 + Math.random() * 80);
  let numerosAleatorios = [];

  for (let i = 0; i < iteraciones; i++) {
    let cuadrado = (semilla * semilla).toString().padStart(8, "0");
    semilla = parseInt(cuadrado.substring(2, 6));
    numerosAleatorios.push(semilla / 10000);
  }

  document.getElementById("xH").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NAH" que genera los números y los coloca en el input
document
  .getElementById("NAH")
  .addEventListener("click", generarNumerosAleatoriosHuecos);
