import { addTooltipIcon } from "../IconInfo/Based.mjs";
// Función para realizar la prueba de Huecos
document.getElementById("inputForm8U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xH").value;
  let randomNumbers = inputX.split(" ").map(Number);
  const tableBody = document.querySelector("#iterationsTabl8U2 tbody");
  const RL = document.getElementById("RBajo").value;
  const RH = document.getElementById("Ralto").value;

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Definir el rango objetivo para identificar los huecos
  const lowerBound = RL;
  const upperBound = RH;

  // Variables para contar huecos y su frecuencia
  let huecos = [];
  let contadorHuecos = 0;
  let dentroRango = false;

  randomNumbers.forEach((num) => {
    if (num >= lowerBound && num <= upperBound) {
      if (dentroRango) {
        huecos.push(contadorHuecos);
      }
      contadorHuecos = 0;
      dentroRango = true;
    } else {
      if (dentroRango) {
        contadorHuecos++;
      }
    }
  });

  // Calcular la frecuencia de cada hueco
  const maxHuecos = Math.max(...huecos);
  let frecuenciasHuecos = Array(maxHuecos + 1).fill(0);

  huecos.forEach((h) => {
    frecuenciasHuecos[h]++;
  });

  // Cálculo del valor esperado y el estadístico chi-cuadrado
  let n = huecos.length;
  let p = upperBound - lowerBound;
  let chiCuadrado = frecuenciasHuecos.reduce((sum, frecuencia, k) => {
    const valorEsperado = n * Math.pow(1 - p, k) * p;
    return sum + Math.pow(frecuencia - valorEsperado, 2) / valorEsperado;
  }, 0);

  let chiCuadradoCritico = 11.07; // Nivel de significancia 0.05 con 5 grados de libertad

  // Mostrar los huecos y sus frecuencias en la tabla
  frecuenciasHuecos.forEach((frecuencia, index) => {
    const row = document.createElement("tr");

    const xCell = document.createElement("td");
    xCell.innerText = `Hueco de ${index}`;
    row.appendChild(xCell);

    const HuecosCell = document.createElement("td");
    HuecosCell.innerText = frecuencia;
    row.appendChild(HuecosCell);

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
