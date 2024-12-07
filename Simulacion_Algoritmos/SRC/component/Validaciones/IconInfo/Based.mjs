// Based.mjs
export class Based {
  constructor(data) {
    this.data = data;
  }

  // Función para añadir icono de tooltip
  addTooltipIcon(cell, text) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("custom-tooltip");
    document.body.appendChild(tooltip);

    const icon = document.createElement("span");
    icon.textContent = "!";
    icon.classList.add("tooltip-icon");
    cell.appendChild(icon);

    // Event listeners para mostrar/ocultar el tooltip
    icon.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
      tooltip.textContent = text; // Mostrar el texto personalizado
    });

    icon.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    icon.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 10 + "px"; // Posición junto al cursor
      tooltip.style.top = e.pageY + 10 + "px";
    });
  }
}

// Crear una instancia de Based y exportar la función someFunction
const basedInstance = new Based();
export const addTooltipIcon = basedInstance.addTooltipIcon.bind(basedInstance);
