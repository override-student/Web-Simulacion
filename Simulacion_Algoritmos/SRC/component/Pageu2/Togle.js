document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".toggle-element-u2 header")
    .addEventListener("click", function () {
      const toggleElement = this.closest(".toggle-element-u2");
      toggleElement.classList.toggle("active");
    });
});
