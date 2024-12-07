export class script {
  constructor(data) {
    this.data = data;
  }

  async openModal() {
    return new Promise((resolve, reject) => {
      const modal = document.createElement("div");
      modal.id = "aiModal";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";

      const modalContent = document.createElement("div");
      modalContent.style.backgroundColor = "#16161b";
      modalContent.style.padding = "20px";
      modalContent.style.borderRadius = "8px";
      modalContent.style.position = "relative";
      modalContent.style.width = "300px";
      modalContent.style.textAlign = "center";

      const closeButton = document.createElement("button");
      closeButton.innerText = "x";
      closeButton.style.top = "10px";
      closeButton.style.right = "10px";
      closeButton.onclick = () => document.body.removeChild(modal);

      const textinfo = document.createElement("p");
      textinfo.innerText =
        "A la IA solo especificale: cantidad de numeros aleatorios, si el conjunto de estos sea rechazada o no y para que prueba de validez";
      textinfo.style.textAlign = "center";
      textinfo.style.color = "#ccc";

      const promptInput = document.createElement("input");
      promptInput.type = "text";
      promptInput.placeholder = "Aquí ingresa el texto?";
      promptInput.style.width = "80%";
      promptInput.style.marginBottom = "10px";

      const sendButton = document.createElement("button");
      sendButton.innerText = "Enviar";
      sendButton.onclick = async () => {
        const prompt =
          "Mandame una lista de numeros aleatorios que deberian de ser rechazados por el metodo de verificación, unicamente los numeros para pegar y copiar, con espacio entre ellos sin comas, y estos tenga 0. antes de cada uno, las especificaciones:" +
          promptInput.value;
        try {
          const responseText = await this.generateResponse(prompt);
          document.body.removeChild(modal); // Cierra el modal
          resolve(responseText); // Retorna la respuesta a la llamada de openModal
        } catch (error) {
          reject(error);
        }
      };

      modalContent.appendChild(closeButton);
      modalContent.appendChild(promptInput);
      modalContent.appendChild(sendButton);
      modalContent.appendChild(textinfo);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
    });
  }
}

// Crear una instancia de script y exportar la función openModal
const IaModal = new script();
export const openModal = () => IaModal.openModal();
