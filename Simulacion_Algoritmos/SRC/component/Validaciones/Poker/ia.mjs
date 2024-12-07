import { openModal } from "../IaContainer/script.mjs";

let respondIa;

class ia {
  async obtenerRespuesta() {
    try {
      // Abre el modal y espera la respuesta de la API
      const responseText = await openModal();
      respondIa = responseText;
      console.log("Respuesta recibida:", responseText);

      // Convierte el texto de respuesta en un array de números
      if (respondIa) {
        let numerosAleatorios = respondIa.trim().split(" ").map(Number); // Convierte cada elemento a número

        // Muestra los números en el input con id "numerosAleatorios"
        document.getElementById("xP").value = numerosAleatorios.join(" ");
      }
    } catch (error) {
      console.error("Error obteniendo respuesta:", error);
    }
  }
}

const content = new ia();
document
  .getElementById("iaP")
  .addEventListener("click", content.obtenerRespuesta.bind(content));
