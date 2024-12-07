import { copiarDatosColumnaX } from "../CopieData/Script.mjs";

document
  .getElementById("dowloadP")
  .addEventListener("click", () => copiarDatosColumnaX(3, "iterationsTable1"));

document
  .getElementById("dowloadCU")
  .addEventListener("click", () => copiarDatosColumnaX(3, "iterationsTable2"));

document
  .getElementById("dowloadM")
  .addEventListener("click", () => copiarDatosColumnaX(3, "iterationsTable3"));

document
  .getElementById("dowloadC")
  .addEventListener("click", () => copiarDatosColumnaX(2, "iterationsTable4"));

document
  .getElementById("dowloadB")
  .addEventListener("click", () => copiarDatosColumnaX(2, "iterationsTable5"));

document
  .getElementById("dowloadL")
  .addEventListener("click", () => copiarDatosColumnaX(3, "iterationsTable6"));

document
  .getElementById("dowloadCC")
  .addEventListener("click", () => copiarDatosColumnaX(2, "iterationsTable8"));
