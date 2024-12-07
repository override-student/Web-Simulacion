import { addTooltipIcon } from "../IconInfo/Based.mjs";
// Función para realizar la prueba de independencia arriba y abajo de la media
document.getElementById("inputForm6U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xAYBM").value;
  let randomNumbers = inputX.split(" ").map(Number);
  const n = randomNumbers.length;
  const tableBody = document.querySelector("#iterationsTabl6U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Calcular la media de los números aleatorios
  const media = randomNumbers.reduce((a, b) => a + b, 0) / n;

  // Calcular corridas basadas en la media
  let corridas = 1; // Se empieza en 1 ya que el primer elemento cuenta como primera corrida
  for (let i = 1; i < n; i++) {
    if (
      (randomNumbers[i] > media && randomNumbers[i - 1] <= media) ||
      (randomNumbers[i] < media && randomNumbers[i - 1] >= media)
    ) {
      corridas++;
    }
  }

  // Cálculo de las fórmulas
  const muCo = (2 * n - 1) / 3;
  const sigmaCo2 = (16 * n - 29) / 90;
  const z0 = Math.abs((corridas - muCo) / sigmaCo2);
  const zAlpha2 = 1.96;

  // Mostrar los números y el resultado en la tabla
  randomNumbers.forEach((number, index) => {
    const row = document.createElement("tr");

    // Columna de X
    const xCell = document.createElement("td");
    xCell.innerText = number;
    row.appendChild(xCell);

    // Columna de rechazo
    const rejectionCell = document.createElement("td");
    if (index === 0) {
      rejectionCell.innerText =
        z0 < zAlpha2 ? "✔️ No se rechaza" : "❌ Se rechaza";

      addTooltipIcon(
        rejectionCell,
        `Z0 = ${z0.toFixed(4)} < Z Alpha = ${zAlpha2.toFixed(4)}`
      );
    }
    row.appendChild(rejectionCell);

    tableBody.appendChild(row);
  });

  // Mostrar resultado general en consola (puede ser en pantalla si lo prefieres)
  console.log(
    `Media: ${media}, Corridas: ${corridas}, MuCo: ${muCo}, SigmaCo^2: ${sigmaCo2}, Z0: ${z0}, Z_alpha/2: ${zAlpha2}`
  );
});
