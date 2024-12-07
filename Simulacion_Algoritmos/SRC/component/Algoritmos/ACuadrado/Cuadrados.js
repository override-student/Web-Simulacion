document.addEventListener("DOMContentLoaded", () => {
  const calcular = document.getElementById("calcularButtonCU"),
    clearButton = document.getElementById("clearButtonCU"),
    iterationsTableBody = document.querySelector("#iterationsTable2 tbody");

  calcular.addEventListener("click", function (event) {
    event.preventDefault();

    const x0 = document.getElementById("x0CU").value,
      rep = document.getElementById("repCU").value;

    // Validaciones de entrada
    if (x0.length < 3) {
      alert("X0 debe tener al menos 3 dígitos.");
      return;
    }

    if (!x0 || !rep || isNaN(rep) || rep <= 0) {
      alert(
        "Todos los campos son obligatorios y Rep debe ser un número positivo."
      );
      return;
    }

    // Convertir a número
    const x0Num = parseInt(x0, 10),
      repNum = parseInt(rep, 10);

    // Ejecutar el algoritmo de cuadrados medios
    simulateSquareAlgorithm(x0Num, repNum);
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0CU").value = "";
    document.getElementById("repCU").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });

  function simulateSquareAlgorithm(x0, repetitions) {
    iterationsTableBody.innerHTML = ""; // Limpiar la tabla antes de mostrar nuevos resultados

    for (let i = 0; i < repetitions; i++) {
      const y = (x0 * x0).toString().padStart(8, "0"); // Elevar al cuadrado y asegurar que tiene 8 dígitos
      const middleDigits = y.substring(2, 6); // Extraer los dígitos del medio
      const newX = parseInt(middleDigits, 10); // Convertir de nuevo a número

      const r = (newX / 10000).toFixed(4); // Normalizar a [0,1] y limitar a 4 decimales

      // Agregar fila a la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = newX; // x
      row.insertCell(2).textContent = y; // y(x)
      row.insertCell(3).textContent = r; // r(x)

      // Actualizar x0 para la próxima iteración
      x0 = newX;
    }
  }
});
