export class script {
  constructor(colum, table) {
    this.colum = colum;
    this.table = table;
  }

  copiarDatosColumnaX(colum, table) {
    const tabla = document
      .getElementById(table)
      .getElementsByTagName("tbody")[0];
    const filas = tabla.getElementsByTagName("tr");
    let datosColumnaX = [];

    // Recorremos cada fila para obtener el valor de la columna 'x'
    for (let i = 0; i < filas.length; i++) {
      const celdaX = filas[i].getElementsByTagName("td")[colum]; // Asegúrate que [1] es la columna 'x'
      if (celdaX && celdaX.textContent.trim() !== "") {
        // Verifica que hay datos en la celda
        datosColumnaX.push(celdaX.textContent.trim());
      }
    }

    if (datosColumnaX.length > 0) {
      // Copia los datos al portapapeles
      navigator.clipboard
        .writeText(datosColumnaX.join(" "))
        .then(() => {
          // Muestra el modal de confirmación
          this.mostrarModal("¡Los datos se guardaron con éxito!");
        })
        .catch((err) => {
          console.error("Error al copiar al portapapeles:", err);
        });
    } else {
      this.ErrorModal("No hay datos en la tabla aún!!!");
    }
  }

  mostrarModal(mensaje) {
    const modal = document.getElementById("successModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = mensaje; // Establece el mensaje del modal
    modal.style.display = "flex"; // Muestra el modal
    modalMessage.style.background = "#16161b";

    // Oculta el modal después de 2 segundos
    setTimeout(() => {
      modal.style.display = "none"; // Cierra el modal después de 2 segundos
    }, 2000);
  }

  ErrorModal(mensaje) {
    const modal = document.getElementById("successModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = mensaje; // Establece el mensaje del modal
    modal.style.display = "flex"; // Muestra el modal
    modalMessage.style.background = "#16161b";

    // Oculta el modal después de 2 segundos
    setTimeout(() => {
      modal.style.display = "none"; // Cierra el modal después de 2 segundos
    }, 2000);
  }
}

// Exportar la función CopiarDarosColumnax

export const copiarDatosColumnaX = (colum, table) => {
  const instance = new script();
  instance.copiarDatosColumnaX(colum, table);
};
