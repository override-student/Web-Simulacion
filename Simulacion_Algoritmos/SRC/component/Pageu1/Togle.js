document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".toggle-element-u1 header")
    .addEventListener("click", function () {
      const toggleElement = this.closest(".toggle-element-u1");
      toggleElement.classList.toggle("active");
    });
});
