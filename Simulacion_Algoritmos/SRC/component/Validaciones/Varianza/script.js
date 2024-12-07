document.addEventListener("DOMContentLoaded", () => {
  const clearButton = document.getElementById("clearButton2");
  const iterationsTableBody = document.querySelector(
    "#iterationsTable2U2 tbody"
  );

  function generarNumerosAleatorios() {
    // Generar una semilla de 4 dígitos
    let semilla = Math.floor(1000 + Math.random() * 9000);
    let iteraciones = Math.floor(20 + Math.random() * 80); // Número de iteraciones entre 20 y 100
    let numerosAleatorios = [];

    for (let i = 0; i < iteraciones; i++) {
      let cuadrado = (semilla * semilla).toString().padStart(8, "0"); // Cuadrado de la semilla con 8 dígitos
      semilla = parseInt(cuadrado.substring(2, 6)); // Obtener los 4 dígitos del centro
      numerosAleatorios.push(semilla / 10000); // Normalizar a un rango entre 0 y 1
    }

    document.getElementById("x").value = numerosAleatorios.join(" ");

    document.getElementById("ZLi").value = "1.45";
    document.getElementById("ZLs").value = "1.16";
  }

  document
    .getElementById("NAV")
    .addEventListener("click", generarNumerosAleatorios);

  clearButton.addEventListener("click", () => {
    // Limpiar campos de entrada
    document.getElementById("x").value = "";
    document.getElementById("ZLi").value = "";
    document.getElementById("ZLs").value = "";

    // Limpiar la tabla
    iterationsTableBody.innerHTML = "";
  });
});
