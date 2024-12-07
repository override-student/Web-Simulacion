class LateralBar {
  render() {
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.createElement("button");
      element.id = "toggleButton";
      element.innerHTML = `
      `;

      document.body.appendChild(element);
    });
  }
}

export default LateralBar;
