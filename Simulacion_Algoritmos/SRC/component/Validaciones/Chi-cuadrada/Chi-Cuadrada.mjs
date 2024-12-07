import { addTooltipIcon } from "../IconInfo/Based.mjs";

document.getElementById("inputForm3U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xChi").value;
  const randomNumbers = inputX.split(" ").map(Number); // Convertir a números
  const tableBody = document.querySelector("#iterationsTabl3U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Definir número de intervalos
  const numIntervals = Math.ceil(Math.sqrt(randomNumbers.length));
  const intervalSize = 1 / numIntervals;
  let observedFrequencies = Array(numIntervals).fill(0);

  // Contar frecuencias en intervalos
  randomNumbers.forEach((num) => {
    const intervalIndex = Math.min(
      Math.floor(num / intervalSize),
      numIntervals - 1
    );
    observedFrequencies[intervalIndex]++;
  });

  // Calcular chi-cuadrado basado en frecuencias observadas en intervalos
  let chiSquaredSum = 0;
  const expectedFrequency = randomNumbers.length / numIntervals;

  observedFrequencies.forEach((observed) => {
    chiSquaredSum +=
      Math.pow(observed - expectedFrequency, 2) / expectedFrequency;
  });

  // Llenar la tabla con los valores de X y agregar el resultado de rechazo en la última fila
  randomNumbers.forEach((number, index) => {
    const row = document.createElement("tr");

    // Columna de X
    const xCell = document.createElement("td");
    xCell.innerText = number;
    row.appendChild(xCell);

    // Columna de Rechazo (solo en la primera fila)
    const rejectionCell = document.createElement("td");
    if (index === 0) {
      rejectionCell.innerText =
        chiSquaredSum <= 16.92 ? "✔️ No se rechaza" : "❌ Se rechaza";

      // Agregar el icono de tooltip con el texto chiSquaredSum <= 16.92
      addTooltipIcon(
        rejectionCell,
        `chi = ${chiSquaredSum.toFixed(4)} <= 16.92`
      );
    }
    row.appendChild(rejectionCell);

    // Añadir la fila a la tabla
    tableBody.appendChild(row);
  });
});
