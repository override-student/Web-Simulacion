document.addEventListener("DOMContentLoaded", () => {
  const calcularButton = document.getElementById("calcularButtonC"),
    clearButton = document.getElementById("clearButtonCC"),
    iterationsTableBody = document.querySelector("#iterationsTable8 tbody");

  calcularButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const x0 = document.getElementById("x0CC").value,
      a = document.getElementById("aCC").value,
      b = document.getElementById("bCC").value,
      c = document.getElementById("cCC").value,
      m = document.getElementById("MCC").value,
      rep = document.getElementById("repCC").value;

    // Validar entradas
    if (!x0 || !a || !b || !c || !m || !rep || isNaN(rep) || rep <= 0) {
      alert(
        "Todos los campos son obligatorios y las repeticiones deben ser un número positivo."
      );
      return;
    }

    // Convertir valores a números
    let x0Num = parseInt(x0, 10),
      aNum = parseInt(a, 10),
      bNum = parseInt(b, 10),
      cNum = parseInt(c, 10),
      mNum = parseInt(m, 10),
      repNum = parseInt(rep, 10);

    // Ejecutar el algoritmo congruencial cuadrático
    simulateQuadraticAlgorithm(x0Num, aNum, bNum, cNum, mNum, repNum);
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0CC").value = "";
    document.getElementById("aCC").value = "";
    document.getElementById("bCC").value = "";
    document.getElementById("cCC").value = "";
    document.getElementById("MCC").value = "";
    document.getElementById("repCC").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });

  function simulateQuadraticAlgorithm(x0, a, b, c, m, repetitions) {
    iterationsTableBody.innerHTML = ""; // Limpiar la tabla antes de mostrar nuevos resultados

    for (let i = 0; i < repetitions; i++) {
      // Aplicar la fórmula del algoritmo cuadrático
      const newX = (a * Math.pow(x0, 2) + b * x0 + c) % m;
      const r = (newX / (m - 1)).toFixed(4); // Normalizar r(x) a [0,1] y limitar a 4 decimales

      // Agregar fila a la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = newX; // x
      row.insertCell(2).textContent = r; // r(x)

      // Actualizar x0 para la próxima iteración
      x0 = newX;
    }
  }
});
