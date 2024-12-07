document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm2U2");
  const iterationsTableBody = document.querySelector(
    "#iterationsTable2U2 tbody"
  );

  const tooltip = document.createElement("div");
  tooltip.classList.add("custom-tooltip");
  document.body.appendChild(tooltip);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los números aleatorios y convertirlos en un array de números
    let numerosAleatorios = document
      .getElementById("x")
      .value.trim()
      .split(" ")
      .map(Number);

    // Verifica si hay valores válidos
    if (numerosAleatorios.length === 0 || numerosAleatorios.includes(NaN)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }

    // Calcular el promedio de los números aleatorios
    let suma = numerosAleatorios.reduce((a, b) => a + b, 0);
    let promedio = suma / numerosAleatorios.length;

    // Calcular la varianza
    let sumaDiferenciasCuadradas = numerosAleatorios.reduce(
      (sum, num) => sum + Math.pow(num - promedio, 2),
      0
    );
    let varianza = sumaDiferenciasCuadradas / (numerosAleatorios.length - 1);

    // Convertir ZLi y ZLs a números
    let ZLi = parseFloat(document.getElementById("ZLi").value),
      ZLs = parseFloat(document.getElementById("ZLs").value);

    // Verifica si ZLi y ZLs son números válidos
    if (isNaN(ZLi) || isNaN(ZLs)) {
      alert(
        "Por favor, ingrese valores numéricos para Z (Limite Inferior y Superior)."
      );
      return;
    }

    // Calcular Li y LS
    let Li = promedio - ZLi * Math.sqrt(varianza / numerosAleatorios.length),
      LS = promedio + ZLs * Math.sqrt(varianza / numerosAleatorios.length);

    const row = iterationsTableBody.insertRow();

    function addTooltipCell(row, value) {
      const cell = row.insertCell();
      const formattedValue = value.toFixed(4);

      // Crear el contenido de la celda y el icono
      const valueText = document.createTextNode(formattedValue);
      const icon = document.createElement("span");
      icon.textContent = "!";
      icon.classList.add("tooltip-icon");

      // Añadir el valor y el icono a la celda
      cell.appendChild(valueText);
      cell.appendChild(icon);

      // Event listeners para mostrar/ocultar el tooltip
      icon.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
        tooltip.textContent = value; // Mostrar el valor completo
      });

      icon.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });

      icon.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px"; // Posición junto al cursor
        tooltip.style.top = e.pageY + 10 + "px";
      });
    }

    // Mostrar los resultados en la tabla
    addTooltipCell(row, Li); // Limite Inferior (Li)
    addTooltipCell(row, LS); // Limite Superior (LS)
    addTooltipCell(row, varianza); // Varianza
  });
});
