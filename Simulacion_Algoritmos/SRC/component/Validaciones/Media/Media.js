document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputFormU2");

  const iterationsTableBody = document.querySelector(
    "#iterationsTableU2 tbody"
  );

  // Crear tooltip div y añadirlo al cuerpo del documento
  const tooltip = document.createElement("div");
  tooltip.classList.add("custom-tooltip");
  document.body.appendChild(tooltip);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let numerosAleatorios = document
      .getElementById("numerosAleatorios")
      .value.trim()
      .split(" ")
      .map(Number);
    let nivelConfianza = parseFloat(
      document.getElementById("nivelConfianza").value
    );

    if (numerosAleatorios.length === 0 || isNaN(nivelConfianza)) {
      alert("Por favor, ingrese valores válidos en ambos campos.");
      return;
    }

    let suma = numerosAleatorios.reduce((a, b) => a + b, 0);
    let promedio = suma / numerosAleatorios.length;

    let formulaParte1 = 1 / 2;
    let formulaParte2 = 1 / Math.sqrt(12 * numerosAleatorios.length);

    let y = formulaParte1 + nivelConfianza * formulaParte2;
    let r = formulaParte1 - nivelConfianza * formulaParte2;

    const row = iterationsTableBody.insertRow();

    // Función para crear celda con el valor formateado y el icono de tooltip
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

    // Añadir celdas con el icono y tooltip para promedio, y(x), r(x)
    addTooltipCell(row, promedio); // x
    addTooltipCell(row, y); // y(x)
    addTooltipCell(row, r); // r(x)
  });
});
