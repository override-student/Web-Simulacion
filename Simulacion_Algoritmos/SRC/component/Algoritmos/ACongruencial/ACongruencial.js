document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm4");
  const clearButton = document.getElementById("clearButtonC");
  const iterationsTableBody = document.querySelector("#iterationsTable4 tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener las semillas, el valor de 'm' (mod) y el número de repeticiones
    let semillas = document
      .getElementById("x0C")
      .value.trim()
      .split(" ")
      .map(Number);
    let m = parseInt(document.getElementById("mC").value);
    let repeticiones = parseInt(document.getElementById("repC").value);

    // Validaciones de los inputs
    if (
      semillas.length === 0 ||
      isNaN(m) ||
      isNaN(repeticiones) ||
      semillas.includes(NaN)
    ) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }

    // El largo de la lista de semillas debe ser mayor a 1 para que el algoritmo funcione correctamente
    if (semillas.length < 2) {
      alert("Ingrese al menos dos semillas.");
      return;
    }

    // Limpiar la tabla antes de agregar nuevos resultados
    iterationsTableBody.innerHTML = "";

    // Algoritmo congruencial aditivo
    for (let i = 0; i < repeticiones; i++) {
      let x =
        (semillas[semillas.length - 1] + semillas[semillas.length - 2]) % m; // Suma y módulo con las últimas dos semillas
      let y = x / m; // Valor generado entre 0 y 1
      let r = y; // Asignamos r(x) como el mismo valor de y(x)

      // Agregar el nuevo valor de x al array de semillas para que sea utilizado en la siguiente iteración
      semillas.push(x);

      // Mostrar los resultados en la tabla
      const row = iterationsTableBody.insertRow();
      row.insertCell(0).textContent = i + 1; // Iteración
      row.insertCell(1).textContent = x; // Valor x
      row.insertCell(2).textContent = r.toFixed(4); // r(x)
    }
  });

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x0C").value = "";
    document.getElementById("mC").value = "";
    document.getElementById("repC").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });
});
