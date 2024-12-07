import { addTooltipIcon } from "../IconInfo/Based.mjs";
// Función para realizar la prueba de Poker
document.getElementById("inputForm7U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xP").value;
  // Convertir a 5 enteros de dígitos o menos de 4
  let randomNumbers = inputX.split(" ").map((num) => (num * 100000).toFixed(0));
  const tableBody = document.querySelector("#iterationsTabl7U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Contadores para las categorías de Poker
  let todosDiferentes = 0;
  let unPar = 0;
  let dosPares = 0;
  let tercia = 0;
  let poker = 0;
  let quintilla = 0;

  // Calcular valores teóricos y estadísticos
  const n = randomNumbers.length;
  const resultadosTeoricos = {
    todosDiferentes: 0.3024 * n,
    unPar: 0.504 * n,
    dosPares: 0.108 * n,
    tercia: 0.072 * n,
    poker: 0.009 * n,
    quintilla: 0.0045 * n,
  };

  let chiCuadrado =
    (todosDiferentes - resultadosTeoricos.todosDiferentes) ** 2 /
      resultadosTeoricos.todosDiferentes +
    (unPar - resultadosTeoricos.unPar) ** 2 / resultadosTeoricos.unPar +
    (dosPares - resultadosTeoricos.dosPares) ** 2 /
      resultadosTeoricos.dosPares +
    (tercia - resultadosTeoricos.tercia) ** 2 / resultadosTeoricos.tercia +
    (poker - resultadosTeoricos.poker) ** 2 / resultadosTeoricos.poker +
    (quintilla - resultadosTeoricos.quintilla) ** 2 /
      resultadosTeoricos.quintilla;

  let chiCuadradoCritico = 11.07; // Nivel de significancia 0.05 con 5 grados de libertad

  randomNumbers.forEach((number, index) => {
    const digits = number.toString().split("").map(Number); // Convertir a array de dígitos
    const counts = {};

    // Contar ocurrencias de cada dígito
    digits.forEach((digit) => {
      counts[digit] = (counts[digit] || 0) + 1;
    });

    const countValues = Object.values(counts);
    let result;

    if (countValues.includes(5)) {
      quintilla++;
      result = "Quintilla";
    } else if (countValues.includes(4)) {
      poker++;
      result = "Poker";
    } else if (countValues.includes(3) && countValues.includes(2)) {
      tercia++;
      result = "Full";
    } else if (countValues.includes(3)) {
      tercia++;
      result = "Tercia";
    } else if (countValues.filter((x) => x === 2).length === 2) {
      dosPares++;
      result = "Dos Pares";
    } else if (countValues.includes(2)) {
      unPar++;
      result = "Un Par";
    } else {
      todosDiferentes++;
      result = "Todos Diferentes";
    }

    // Mostrar los números y el resultado en la tabla
    const row = document.createElement("tr");

    // Columna de X
    const xCell = document.createElement("td");
    xCell.innerText = number;
    row.appendChild(xCell);

    // Columna de tipo conjunto
    const typeCard = document.createElement("td");
    typeCard.innerText = result;
    row.appendChild(typeCard);

    // Columna de rechazo
    const rejectionCell = document.createElement("td");
    if (index === 0) {
      rejectionCell.innerText =
        chiCuadrado > chiCuadradoCritico ? "✔️ No se rechaza" : "❌ Se rechaza";

      addTooltipIcon(
        rejectionCell,
        `Chi = ${chiCuadrado.toFixed(4)} > Chi Z = ${chiCuadradoCritico.toFixed(
          4
        )}`
      );
    }
    row.appendChild(rejectionCell);

    tableBody.appendChild(row);
  });

  // Mostrar resultado en consola (puedes adaptarlo para mostrar en pantalla)
  console.log(`Chi-cuadrado calculado: ${chiCuadrado}`);
  console.log(`Chi-cuadrado crítico: ${chiCuadradoCritico}`);
});
