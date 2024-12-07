const clearButton = document.getElementById("clearButton1");
const iterationsTableBody = document.querySelector("#iterationsTableU2 tbody");

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

  document.getElementById("numerosAleatorios").value =
    numerosAleatorios.join(" ");

  document.getElementById("nivelConfianza").value = "1.96";
}

/* Boton para generar numeros aleatorios para la media*/

document
  .getElementById("NA")
  .addEventListener("click", generarNumerosAleatorios);

clearButton.addEventListener("click", () => {
  document.getElementById("numerosAleatorios").value = "";
  document.getElementById("nivelConfianza").value = "";
  iterationsTableBody.innerHTML = "";
});
