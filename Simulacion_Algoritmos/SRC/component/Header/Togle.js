document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector(".toggle-element-aboutUs header")
      .addEventListener("click", function () {
        const toggleElement = this.closest(".toggle-element-aboutUs");
        toggleElement.classList.toggle("active");
      });
  });
});
