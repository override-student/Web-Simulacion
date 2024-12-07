import { InitPages } from "../PagesMove/PagesMove.mjs";

InitPages();

document.getElementById("toggleButton").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("open");
});
