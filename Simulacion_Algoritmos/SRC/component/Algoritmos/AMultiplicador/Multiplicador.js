document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm3"),
    clearButton = document.getElementById("clearButtonM"),
    iterationsTableBody = document.querySelector("#iterationsTable3 tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const x0 = document.getElementById("x0M").value,
      a = document.getElementById("aM").value,
      rep = document.getElementById("repM").value;

    // Validar entradas
    if (x0.length <= 3) {
      alert("X0 debe tener al menos 3 dígitos.");
      return;
    }

    if (!x0 || !a || !rep) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Convertir a números
    const x0Num = parseInt(x0, 10),
      aNum = parseInt(a, 10),
      repNum = parseInt(rep, 10);

    // Ejecutar el algoritmo de multiplicador constante
    simulateConstantMultiplier(x0Num, aNum, repNum);
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0M").value = "";
    document.getElementById("aM").value = "";
    document.getElementById("repM").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });

  function simulateConstantMultiplier(x0, a, repetitions) {
    iterationsTableBody.innerHTML = ""; // Limpiar la tabla antes de mostrar nuevos resultados

    for (let i = 0; i < repetitions; i++) {
      const product = (x0 * a).toString().padStart(8, "0"); // Si este es menor de 8 digitos, se rellena con ceros
      const middleDigits = extractMiddleDigits(product); // Extraer los 4 dígitos del medio
      const y = parseInt(middleDigits, 10);
      const r = y / 10000; // Normalizar a [0,1]

      // Agregar fila a la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = x0; // x
      row.insertCell(2).textContent = y; // y(x)
      row.insertCell(3).textContent = r.toFixed(4); // r(x) con 4 decimales

      // Actualizar x0 y x1 para la próxima iteración
      x0 = y;
    }

    function extractMiddleDigits(numberString) {
      // Si el producto tiene menos de 8 dígitos, agregar ceros al frente
      const paddedString = numberString.padStart(8, "0");
      // Tomar los 4 dígitos del medio
      return paddedString.substring(2, 6);
    }
  }
});
