document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".toggle-element-uF header")
    .addEventListener("click", function () {
      const toggleElement = this.closest(".toggle-element-uF");
      toggleElement.classList.toggle("active");
    });
});
