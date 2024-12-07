document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm5"),
    clearButton = document.getElementById("clearButtonB"),
    iterationsTableBody = document.querySelector("#iterationsTable5 tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores, eliminando espacios en blanco
    const x0 = document.getElementById("x0Blum").value.trim(),
      m = document.getElementById("aBlum").value.trim(),
      rep = document.getElementById("repBlum").value.trim();

    // Validaciones
    if (!x0 || !m || !rep) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const x0Num = parseInt(x0, 10),
      mNum = parseInt(m, 10),
      repNum = parseInt(rep, 10);

    // Validación de números
    if (
      isNaN(x0Num) ||
      isNaN(mNum) ||
      isNaN(repNum) ||
      mNum <= 0 ||
      repNum <= 0
    ) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    // Ejecutar el algoritmo Blum Blum Shub
    simulateBlumBlumShub(x0Num, mNum, repNum);
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0Blum").value = "";
    document.getElementById("aBlum").value = "";
    document.getElementById("repBlum").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });

  function simulateBlumBlumShub(x0, m, repetitions) {
    iterationsTableBody.innerHTML = ""; // Limpiar la tabla antes de mostrar nuevos resultados

    for (let i = 0; i < repetitions; i++) {
      const x_next = x0 ** 2 % m; // Generar el siguiente valor de x
      const r_next = x_next / (m - 1); // Generar el valor de r

      // Agregar fila a la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = x_next; // x
      row.insertCell(2).textContent = r_next.toFixed(6); // r(x)

      // Actualizar x0 para la próxima iteración
      x0 = x_next;
    }
  }
});
