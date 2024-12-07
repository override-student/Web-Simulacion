class Sidebar {
  render() {
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.createElement("div");
      const container = document.querySelector(".sidebar");
      element.className = "content";
      element.innerHTML = `
      <br />
      <br />
      <h2>Simulación temas</h2>
      <div class="toggle-element-aboutUs">

        <div class="toggle-tool-group-aboutUs">
            <header class="header-form-aboutUs">
                <span>Acerca de</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="toggle-icon">
                    <path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path>
                </svg>
            </header>
            <div class="toggle-content-aboutUs">
              <div class="button-list">
                    <form>
                    <p>Desarrollo web por:</p>
                    <h4>Juan Manuel Moreno Garcia</h4>
                    <p>Colaboradores:</p>
                    <h4>Jesús Omar Raya Morales</h4>
                    <h4>Christopher Alejandro Maldonado Chavez</h4>
                    <p>Información:</p>
                    <h4>Carrera</h4>
                    <h5>Ingenieria en sistemas</h5>
                    <h4>Semestre/grupo</h4>
                    <h5>5 B</h5>
                    <h4>Materia</h4>
                    <h5>Simulación</h5>
                    <h4>Maestro</h4>
                    <h5>David Guillermo Pacheco Contreras</h5>
                    <h4>Fecha de creación</h4>
                    <h5>17 de Marzo del 2024</h5>
                  </form>
                </div> 
              </div>
        </div>
      </div>
      <div class="traslate-order">
        <button id="NA-btn">Números aleatorios</button>
      <button  id="Val-btn">Validaciones</button>
      <button  id="Monte-btn">Montecarlo</button>
      </div>
   `;

      container.appendChild(element);
    });
  }
}

export default Sidebar;
