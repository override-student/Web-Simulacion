import { addTooltipIcon } from "../IconInfo/Based.mjs";

document.getElementById("inputForm4U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xK").value;
  let randomNumbers = inputX
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b); // Convertir a números y ordenar ascendentemente
  const n = randomNumbers.length;
  const tableBody = document.querySelector("#iterationsTabl4U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Calcular D+ y D-
  let dPlus = -Infinity;
  let dMinus = -Infinity;

  for (let i = 0; i < n; i++) {
    const i_n = (i + 1) / n;
    const i_1_n = i / n;

    // D+ = max((i/n) - R[i])
    dPlus = Math.max(dPlus, i_n - randomNumbers[i]);

    // D- = max(R[i] - (i-1)/n)
    dMinus = Math.max(dMinus, randomNumbers[i] - i_1_n);
  }

  const dValue = Math.max(dPlus, dMinus); // Valor final de D (máximo entre D+ y D-)
  const dAlpha = 1.36 / Math.sqrt(n); // Valor crítico aproximado para nivel de significancia 0.05 (si se requiere)

  // Mostrar los números en la tabla y el resultado de la prueba
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
        dValue < dAlpha ? "✔️ No se rechaza" : "❌ Se rechaza";

      // Agregar el icono de tooltip con el texto Dvalue < Dalpha
      addTooltipIcon(
        rejectionCell,
        `D = ${dValue.toFixed(4)} < D Alpha = ${dAlpha.toFixed(4)}`
      );
    }
    row.appendChild(rejectionCell);

    tableBody.appendChild(row);
  });
});
