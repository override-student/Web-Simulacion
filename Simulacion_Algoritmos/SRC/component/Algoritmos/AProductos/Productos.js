document.addEventListener("DOMContentLoaded", () => {
  // Mis constantes del formulario, del botón de borrar campos, y de la tabla
  const form = document.getElementById("inputForm");
  const clearButton = document.getElementById("clearButton");
  const iterationsTableBody = document.querySelector("#iterationsTable1 tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Variables del algoritmo
    const x0 = document.getElementById("x0P").value;
    const x1 = document.getElementById("x1P").value;
    const rep = document.getElementById("repP").value;

    // Validar entradas
    if (x0.length < 3 || x1.length < 3) {
      alert("X0 y X1 deben tener al menos 3 dígitos.");
      return;
    }

    if (!x0 || !x1 || !rep) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Convertir a números
    const x0Num = parseInt(x0, 10);
    const x1Num = parseInt(x1, 10);
    const repNum = parseInt(rep, 10);

    // Ejecutar el algoritmo de productos medios
    simulateProductAlgorithm(x0Num, x1Num, repNum);
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0P").value = "";
    document.getElementById("x1P").value = "";
    document.getElementById("repP").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });

  function simulateProductAlgorithm(x0, x1, repetitions) {
    iterationsTableBody.innerHTML = ""; // Limpiar la tabla antes de mostrar nuevos resultados

    for (let i = 0; i < repetitions; i++) {
      const product = (x0 * x1).toString().padStart(8, "0"); // Producto en formato de 8 dígitos
      const middleDigits = extractMiddleDigits(product); // Extraer los 4 dígitos del medio
      const y = parseInt(middleDigits, 10);
      const r = y / 10000; // Normalizar a [0,1]

      // Agregar fila a la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = x1; // x
      row.insertCell(2).textContent = y; // y(x)
      row.insertCell(3).textContent = r.toFixed(4); // r(x) con 4 decimales

      // Actualizar x0 y x1 para la próxima iteración
      x0 = x1;
      x1 = y;
    }
  }

  function extractMiddleDigits(numberString) {
    // Si el producto tiene menos de 8 dígitos, agregar ceros al frente
    const paddedString = numberString.padStart(8, "0");
    // Tomar los 4 dígitos del medio
    return paddedString.substring(2, 6);
  }
});
