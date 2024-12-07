document.addEventListener("DOMContentLoaded", () => {
  const calcularButton = document.getElementById("calcularButtonL"),
    clearButton = document.getElementById("clearButtonL"),
    iterationsTableBody = document.querySelector("#iterationsTable6 tbody");

  calcularButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const x0 = document.getElementById("x0L").value,
      a = document.getElementById("aL").value,
      c = document.getElementById("cL").value,
      m = document.getElementById("mL").value,
      rep = document.getElementById("repL").value;

    // Validaciones de entrada
    if (!x0 || !a || !c || !m || !rep || isNaN(rep) || rep <= 0) {
      alert(
        "Todos los campos son obligatorios y Rep debe ser un número positivo."
      );
      return;
    }

    // Convertir a número
    let x0Num = parseInt(x0, 10),
      aNum = parseInt(a, 10),
      cNum = parseInt(c, 10),
      mNum = parseInt(m, 10),
      repNum = parseInt(rep, 10);

    // Ejecutar el algoritmo lineal congruencial
    simulateLinearAlgorithm(x0Num, aNum, cNum, mNum, repNum);
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0L").value = "";
    document.getElementById("aL").value = "";
    document.getElementById("cL").value = "";
    document.getElementById("mL").value = "";
    document.getElementById("repL").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });

  function simulateLinearAlgorithm(x0, a, c, m, repetitions) {
    iterationsTableBody.innerHTML = ""; // Limpiar la tabla antes de mostrar nuevos resultados

    for (let i = 0; i < repetitions; i++) {
      const newX = (a * x0 + c) % m; // Aplicar la fórmula del algoritmo lineal
      const r = (newX / m).toFixed(4); // Normalizar el valor a [0,1] y limitar a 4 decimales

      // Agregar fila a la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = newX; // x
      row.insertCell(2).textContent = `(${a} * ${x0} + ${c}) % ${m}`; // Fórmula aplicada (y(x))
      row.insertCell(3).textContent = r; // r(x)

      // Actualizar x0 para la próxima iteración
      x0 = newX;
    }
  }
});
