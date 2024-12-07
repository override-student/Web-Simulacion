export class PagesMove {
  constructor() {}

  // Función para añadir icono de tooltip
  InitPages() {
    this.pageAction(
      "NA-btn",
      "toggle-element-u1",
      "toggle-element-u2",
      "toggle-element-uF"
    );
    this.pageAction(
      "Val-btn",
      "toggle-element-u2",
      "toggle-element-u1",
      "toggle-element-uF"
    );
    this.pageAction(
      "Monte-btn",
      "toggle-element-uF",
      "toggle-element-u1",
      "toggle-element-u2"
    );
  }

  pageAction(btn, page1Id, page2Id, page3Id) {
    const button = document.getElementById(btn);
    const page1 = document.getElementById(page1Id);
    const page2 = document.getElementById(page2Id);
    const page3 = document.getElementById(page3Id);
    button.addEventListener("click", () => {
      page1.style.display = "block";
      page2.style.display = "none";
      page3.style.display = "none";
      document.getElementById("sidebar").classList.remove("open");
    });
  }
}

// Crear una instancia de PagesMove y exportar la función InitPages
const Instance = new PagesMove();
export const InitPages = Instance.InitPages.bind(Instance);
