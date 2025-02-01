# Simulación_Algoritmos: Validaciones archivos scripts.js

## 1. Media

### 1.1 Descripción del Script

El archivo `script.js`, ubicada en la carpeta `SRC\component\Validaciones\Media` se encarga de la generación de números aleatorios y de la manipulación del DOM para mostrar los resultados.

### 1.2 Código

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputFormU2");

  const iterationsTableBody = document.querySelector(
    "#iterationsTableU2 tbody"
  );

  // Crear tooltip div y añadirlo al cuerpo del documento
  const tooltip = document.createElement("div");
  tooltip.classList.add("custom-tooltip");
  document.body.appendChild(tooltip);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let numerosAleatorios = document
      .getElementById("numerosAleatorios")
      .value.trim()
      .split(" ")
      .map(Number);
    let nivelConfianza = parseFloat(
      document.getElementById("nivelConfianza").value
    );

    if (numerosAleatorios.length === 0 || isNaN(nivelConfianza)) {
      alert("Por favor, ingrese valores válidos en ambos campos.");
      return;
    }

    let suma = numerosAleatorios.reduce((a, b) => a + b, 0);
    let promedio = suma / numerosAleatorios.length;

    let formulaParte1 = 1 / 2;
    let formulaParte2 = 1 / Math.sqrt(12 * numerosAleatorios.length);

    let y = formulaParte1 + nivelConfianza * formulaParte2;
    let r = formulaParte1 - nivelConfianza * formulaParte2;

    const row = iterationsTableBody.insertRow();

    // Función para crear celda con el valor formateado y el icono de tooltip
    function addTooltipCell(row, value) {
      const cell = row.insertCell();
      const formattedValue = value.toFixed(4);

      // Crear el contenido de la celda y el icono
      const valueText = document.createTextNode(formattedValue);
      const icon = document.createElement("span");
      icon.textContent = "!";
      icon.classList.add("tooltip-icon");

      // Añadir el valor y el icono a la celda
      cell.appendChild(valueText);
      cell.appendChild(icon);

      // Event listeners para mostrar/ocultar el tooltip
      icon.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
        tooltip.textContent = value; // Mostrar el valor completo
      });

      icon.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });

      icon.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px"; // Posición junto al cursor
        tooltip.style.top = e.pageY + 10 + "px";
      });
    }

    // Añadir celdas con el icono y tooltip para promedio, y(x), r(x)
    addTooltipCell(row, promedio); // x
    addTooltipCell(row, y); // y(x)
    addTooltipCell(row, r); // r(x)
  });
});
```

### 1.3 Funcionamiento

1. **Manejo del DOOM**:

   - Al cargar la página, se inicializa el script y se preparan los elementos del DOM.

2. **Generación de calculos**:

   - Al hacer clic en el botón `NA`, se generan números aleatorios y se muestran en el campo correspondiente.

3. **Limpiar campos**:
   - Al hacer clic en el botón `clearButton1`, se limpian todos los campos de entrada y la tabla de iteraciones.
4. **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosAYB`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYB`, separando los números por espacios.

## 2. Varianza

### 2.1 Descripción del Script

El archivo `script.js`, ubicado en la carpeta `SRC\component\Validaciones\Varianza`, se encarga de la generación de números aleatorios y de la manipulación del DOM para mostrar los resultados.

### 2.2 Código

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm2U2");
  const iterationsTableBody = document.querySelector(
    "#iterationsTable2U2 tbody"
  );

  const tooltip = document.createElement("div");
  tooltip.classList.add("custom-tooltip");
  document.body.appendChild(tooltip);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los números aleatorios y convertirlos en un array de números
    let numerosAleatorios = document
      .getElementById("x")
      .value.trim()
      .split(" ")
      .map(Number);

    // Verifica si hay valores válidos
    if (numerosAleatorios.length === 0 || numerosAleatorios.includes(NaN)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }

    // Calcular el promedio de los números aleatorios
    let suma = numerosAleatorios.reduce((a, b) => a + b, 0);
    let promedio = suma / numerosAleatorios.length;

    // Calcular la varianza
    let sumaDiferenciasCuadradas = numerosAleatorios.reduce(
      (sum, num) => sum + Math.pow(num - promedio, 2),
      0
    );
    let varianza = sumaDiferenciasCuadradas / (numerosAleatorios.length - 1);

    // Convertir ZLi y ZLs a números
    let ZLi = parseFloat(document.getElementById("ZLi").value),
      ZLs = parseFloat(document.getElementById("ZLs").value);

    // Verifica si ZLi y ZLs son números válidos
    if (isNaN(ZLi) || isNaN(ZLs)) {
      alert(
        "Por favor, ingrese valores numéricos para Z (Limite Inferior y Superior)."
      );
      return;
    }

    // Calcular Li y LS
    let Li = promedio - ZLi * Math.sqrt(varianza / numerosAleatorios.length),
      LS = promedio + ZLs * Math.sqrt(varianza / numerosAleatorios.length);

    const row = iterationsTableBody.insertRow();

    function addTooltipCell(row, value) {
      const cell = row.insertCell();
      const formattedValue = value.toFixed(4);

      // Crear el contenido de la celda y el icono
      const valueText = document.createTextNode(formattedValue);
      const icon = document.createElement("span");
      icon.textContent = "!";
      icon.classList.add("tooltip-icon");

      // Añadir el valor y el icono a la celda
      cell.appendChild(valueText);
      cell.appendChild(icon);

      // Event listeners para mostrar/ocultar el tooltip
      icon.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
        tooltip.textContent = value; // Mostrar el valor completo
      });

      icon.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });

      icon.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px"; // Posición junto al cursor
        tooltip.style.top = e.pageY + 10 + "px";
      });
    }

    // Mostrar los resultados en la tabla
    addTooltipCell(row, Li); // Limite Inferior (Li)
    addTooltipCell(row, LS); // Limite Superior (LS)
    addTooltipCell(row, varianza); // Varianza
  });
});
```

### 2.3 Funcionamiento

1. **Manejo del DOOM**:

   - Al cargar la página, se inicializa el script y se preparan los elementos del DOM.

2. **Generación de calculos**:

   - Al hacer clic en el botón `NA`, se generan números aleatorios y se muestra en la table.

3. **Limpieza de la Tabla**:

   - Al hacer clic en el botón `clearButton2`, se limpian todos los campos de entrada.

4. **Generación de Números Aleatorios:**:

- Se define la función `generarNumerosAleatoriosAYB`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYB`, separando los números por espacios.

## 3. Chi-Cuadrada

### 3.1 Descripción del Script

El archivo `script.js`, ubicada en la carpeta `SRC\component\Validaciones\Chi-cuadrada` se encarga de la generación de números aleatorios utilizando el método de cuadrados medios, aparte de veroficar su validez de estos y los que entren en el input de la interfaz. Además, permite limpiar los campos de entrada y la tabla de iteraciones.

### 3.2 Código

```javascript
import { addTooltipIcon } from "../IconInfo/Based.mjs";

document.getElementById("inputForm3U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xChi").value;
  const randomNumbers = inputX.split(" ").map(Number); // Convertir a números
  const tableBody = document.querySelector("#iterationsTabl3U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Definir número de intervalos
  const numIntervals = Math.ceil(Math.sqrt(randomNumbers.length));
  const intervalSize = 1 / numIntervals;
  let observedFrequencies = Array(numIntervals).fill(0);

  // Contar frecuencias en intervalos
  randomNumbers.forEach((num) => {
    const intervalIndex = Math.min(
      Math.floor(num / intervalSize),
      numIntervals - 1
    );
    observedFrequencies[intervalIndex]++;
  });

  // Calcular chi-cuadrado basado en frecuencias observadas en intervalos
  let chiSquaredSum = 0;
  const expectedFrequency = randomNumbers.length / numIntervals;

  observedFrequencies.forEach((observed) => {
    chiSquaredSum +=
      Math.pow(observed - expectedFrequency, 2) / expectedFrequency;
  });

  // Llenar la tabla con los valores de X y agregar el resultado de rechazo en la última fila
  randomNumbers.forEach((number, index) => {
    const row = document.createElement("tr");

    // Columna de X
    const xCell = document.createElement("td");
    xCell.innerText = number;
    row.appendChild(xCell);

    // Columna de Rechazo (solo en la primera fila)
    const rejectionCell = document.createElement("td");
    if (index === 0) {
      rejectionCell.innerText =
        chiSquaredSum <= 16.92 ? "✔️ No se rechaza" : "❌ Se rechaza";

      // Agregar el icono de tooltip con el texto chiSquaredSum <= 16.92
      addTooltipIcon(
        rejectionCell,
        `chi = ${chiSquaredSum.toFixed(4)} <= 16.92`
      );
    }
    row.appendChild(rejectionCell);

    // Añadir la fila a la tabla
    tableBody.appendChild(row);
  });
});
```

### 3.3 Funcionamiento

1. **Manejo deL DOOM**

   - Al cargar la página, se inicializa el script y se preparan los elementos del DOM.

2. **Importación de Módulos**:

   - Se importa la función `addTooltipIcon` desde un módulo externo, que se usará para agregar un tooltip a la tabla.

3. **Manejo del Evento de Envío del Formulario**:

   - Se añade un evento `submit` al formulario con ID `inputForm3U2`.
   - Se previene la acción predeterminada del formulario para evitar que la página se recargue.

4. **Limpieza de la Tabla**:

   - Al hacer clic en el botón "clearButton2", se limpian todos los campos de entrada., con esta estrutura, y el codigo documentado hazlo ahora para este archivo que te puse

5. **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosAYB`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYB`, separando los números por espacios.

## 4. Kalmogerov-smirrov

### 4.1 Descripción del script

El archivo `script.js`, ubicada en la carpeta `SRC\component\Validaciones\Kalmogerov-smirrov` El archivo se encarga de procesar un formulario que contiene números aleatorios, calcular el estadístico D de la prueba de Kolmogorov-Smirnov, y mostrar los resultados en una tabla.

### 4.2 Código

```javascript
import { addTooltipIcon } from "../IconInfo/Based.mjs";

document.getElementById("inputForm4U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xK").value;
  let randomNumbers = inputX
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b); // Convertir a números y ordenar ascendentemente
  const n = randomNumbers.length;
  const tableBody = document.querySelector("#iterationsTabl4U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Calcular D+ y D-
  let dPlus = -Infinity;
  let dMinus = -Infinity;

  for (let i = 0; i < n; i++) {
    const i_n = (i + 1) / n;
    const i_1_n = i / n;

    // D+ = max((i/n) - R[i])
    dPlus = Math.max(dPlus, i_n - randomNumbers[i]);

    // D- = max(R[i] - (i-1)/n)
    dMinus = Math.max(dMinus, randomNumbers[i] - i_1_n);
  }

  const dValue = Math.max(dPlus, dMinus); // Valor final de D (máximo entre D+ y D-)
  const dAlpha = 1.36 / Math.sqrt(n); // Valor crítico aproximado para nivel de significancia 0.05 (si se requiere)

  // Mostrar los números en la tabla y el resultado de la prueba
  randomNumbers.forEach((number, index) => {
    const row = document.createElement("tr");

    // Columna de X
    const xCell = document.createElement("td");
    xCell.innerText = number;
    row.appendChild(xCell);

    // Columna de Rechazo (solo en la primera fila)
    const rejectionCell = document.createElement("td");
    if (index === 0) {
      rejectionCell.innerText =
        dValue < dAlpha ? "✔️ No se rechaza" : "❌ Se rechaza";

      // Agregar el icono de tooltip con el texto Dvalue < Dalpha
      addTooltipIcon(
        rejectionCell,
        `D = ${dValue.toFixed(4)} < D Alpha = ${dAlpha.toFixed(4)}`
      );
    }
    row.appendChild(rejectionCell);

    tableBody.appendChild(row);
  });
});
```

### 4.3 Funcionamiento

1. **Manejo deL DOOM**

   - Al cargar la página, se inicializa el script y se preparan los elementos del DOM.

2. **Importación de Módulos**:

   - Se importa la función `addTooltipIcon` desde un módulo externo, que se usará para agregar un tooltip a la tabla.

3. **Manejo del Evento de Envío del Formulario**:

   - Se añade un evento `submit` al formulario con ID `inputForm4U2`.
   - Se previene la acción predeterminada del formulario para evitar que la página se recargue.

4. **Obtención y Conversión de Datos**:

   - Se obtiene el valor del campo de entrada `xK`, que contiene números aleatorios en formato de texto.
   - Se convierte este texto en un array de números utilizando `split`, `map`, y se ordena ascendentemente.

5. **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosAYB`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYB`, separando los números por espacios.

## 5. Arriba y abajo

### 5.1 Descripción del script

El archivo `script.js`, ubicada en la carpeta `SRC\component\Validaciones\ArribayAbajo` El archivo se encarga de procesar un formulario que contiene números aleatorios, calcular los intervalos en numeros aleatrios, utilizando la prueba de Arriba y abajo, y mostrar los resultados en una tabla.

### 5.2 Código

```javascript
// Función para limpiar campos
document.getElementById("clearButton5").addEventListener("click", () => {
  // Limpia el campo de entrada con ID "xAYB"
  document.getElementById("xAYB").value = "";

  // Selecciona el cuerpo de la tabla y limpia su contenido
  const tableBody = document.querySelector("#iterationsTabl5U2 tbody");
  tableBody.innerHTML = ""; // Limpiar tabla
});

// Función para generar números aleatorios y colocarlos en el input X (opcional)
function generarNumerosAleatoriosAYB() {
  // Genera una semilla aleatoria entre 1000 y 9999
  let semilla = Math.floor(1000 + Math.random() * 9000);

  // Genera un número aleatorio de iteraciones entre 20 y 100
  let iteraciones = Math.floor(20 + Math.random() * 80);
  let numerosAleatorios = []; // Array para almacenar los números aleatorios generados

  // Genera los números aleatorios utilizando el método de los cuadrados medios
  for (let i = 0; i < iteraciones; i++) {
    // Calcula el cuadrado de la semilla y lo convierte a cadena con 8 dígitos
    let cuadrado = (semilla * semilla).toString().padStart(8, "0");
    // Obtiene los 4 dígitos del centro del cuadrado
    semilla = parseInt(cuadrado.substring(2, 6));
    // Normaliza el número a un rango entre 0 y 1 y lo agrega al array
    numerosAleatorios.push(semilla / 10000);
  }

  // Coloca los números aleatorios generados en el campo de entrada "xAYB"
  document.getElementById("xAYB").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NAK" que genera los números y los coloca en el input
document
  .getElementById("NAAYB")
  .addEventListener("click", generarNumerosAleatoriosAYB);
```

### 5.3 Funcionamiento

1. **Limpieza de Campos**:

   - Se añade un evento `click` al botón con ID `clearButton5`.

   - Cuando se hace clic en el botón, se limpia el contenido del campo de entrada con ID `xAYB`.

   - También se selecciona el cuerpo de la tabla asociada (con ID `iterationsTabl5U2`) y se limpia su contenido.

2. **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosAYB`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYB`, separando los números por espacios.

3. **Evento para Generar Números**:

- Se añade un evento `click` al botón con ID `NAAYB`, que al ser presionado ejecuta la función `generarNumerosAleatoriosAYB`, generando y mostrando los números aleatorios en el campo de entrada correspondiente.

## 6. Arriba y abajo la media

### 6.1 Descripción del código

El archivo `script.js`, ubicada en la carpeta `SRC\component\Validaciones\ArribayAbajoMedia` El archivo se encarga de procesar un formulario que contiene números aleatorios, calcular los intervalos en numeros aleatrios, utilizando la prueba de Arriba y abajo de la media, y mostrar los resultados en una tabla.

### 6.2 Código

```javascript
// Función para limpiar campos
document.getElementById("clearButton6").addEventListener("click", () => {
  // Limpia el campo de entrada con ID "xAYBM"
  document.getElementById("xAYBM").value = "";

  // Selecciona el cuerpo de la tabla y limpia su contenido
  const tableBody = document.querySelector("#iterationsTabl6U2 tbody");
  tableBody.innerHTML = ""; // Limpiar tabla
});

// Generador de números aleatorios usando cuadrados medios
function generarNumerosAleatoriosAYBM() {
  // Genera una semilla aleatoria entre 1000 y 9999
  let semilla = Math.floor(1000 + Math.random() * 9000);

  // Genera un número aleatorio de iteraciones entre 20 y 100
  let iteraciones = Math.floor(20 + Math.random() * 80);
  let numerosAleatorios = []; // Array para almacenar los números aleatorios generados

  // Genera los números aleatorios utilizando el método de los cuadrados medios
  for (let i = 0; i < iteraciones; i++) {
    // Calcula el cuadrado de la semilla y lo convierte a cadena con 8 dígitos
    let cuadrado = (semilla * semilla).toString().padStart(8, "0");

    // Obtiene los 4 dígitos del centro del cuadrado
    semilla = parseInt(cuadrado.substring(2, 6));

    // Normaliza el número a un rango entre 0 y 1 y lo agrega al array
    numerosAleatorios.push(semilla / 10000);
  }

  // Coloca los números aleatorios generados en el campo de entrada "xAYBM"
  document.getElementById("xAYBM").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NA" que genera los números y los coloca en el input
document
  .getElementById("NAAYBM")
  .addEventListener("click", generarNumerosAleatoriosAYBM);
```

### 6.3 Funcionamiento

1. **Limpieza de Campos**:

   - Se añade un evento `click` al botón con ID `clearButton6`.

   - Cuando se hace clic en el botón, se limpia el contenido del campo de entrada con ID `xAYBM`.

   - También se selecciona el cuerpo de la tabla asociada (con ID `iterationsTabl6U2`) y se limpia su contenido.

2. **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosAYBM`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYBM`, separando los números por espacios.

3. **Evento para Generar Números**:

- Se añade un evento `click` al botón con ID `NAAYBM`, que al ser presionado ejecuta la función generarNumerosAleatoriosAYBM, generando y mostrando los números aleatorios en el campo de entrada correspondiente.

4. **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosAYB`, que genera números aleatorios utilizando el método de los cuadrados medios.

- Se inicializa una semilla aleatoria entre 1000 y 9999.

- Se determina un número aleatorio de iteraciones entre 20 y 100.

- Se utiliza un bucle para generar los números aleatorios:

  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.

  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.

  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.

  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xAYB`, separando los números por espacios.

# 7. La prueba de Poker

### 7.1 Descripción del script

El archivo `script.js`, ubicada en la carpeta `SRC\component\Validaciones\Poker` El archivo se encarga de procesar un formulario que contiene números aleatorios, calcular los intervalos en numeros aleatrios, utilizando la prueba de Poker.

### 7.2 Código

```javascript
// Función para limpiar campos
document.getElementById("clearButton7").addEventListener("click", () => {
// Limpia el campo de entrada con ID "xP"
document.getElementById("xP").value = "";

// Selecciona el cuerpo de la tabla y limpia su contenido
const tableBody = document.querySelector("#iterationsTabl7U2 tbody");
tableBody.innerHTML = ""; // Limpiar tabla
});

// Generador de números aleatorios usando cuadrados medios
function generarNumerosAleatoriosPoker() {
// Genera una semilla aleatoria entre 1000 y 9999
let semilla = Math.floor(1000 + Math.random() \* 9000);

// Genera un número aleatorio de iteraciones entre 20 y 100
let iteraciones = Math.floor(20 + Math.random() \* 80);
let numerosAleatorios = []; // Array para almacenar los números aleatorios generados

// Genera los números aleatorios utilizando el método de los cuadrados medios
for (let i = 0; i < iteraciones; i++) {
// Calcula el cuadrado de la semilla y lo convierte a cadena con 8 dígitos
let cuadrado = (semilla \* semilla).toString().padStart(8, "0");

    // Obtiene los 4 dígitos del centro del cuadrado
    semilla = parseInt(cuadrado.substring(2, 6));

    // Normaliza el número a un rango entre 0 y 1 y lo agrega al array
    numerosAleatorios.push(semilla / 10000);

}

// Coloca los números aleatorios generados en el campo de entrada "xP"
document.getElementById("xP").value = numerosAleatorios.join(" ");
}

// Evento para el botón "NAP" que genera los números y los coloca en el input
document
.getElementById("NAP")
.addEventListener("click", generarNumerosAleatoriosPoker);
```

### 7.3 Funcionamiento

1.  **Limpieza de Campos**:

    - Se añade un evento `click` al botón con ID `clearButton7`.
      Cuando se hace clic en el botón, se limpia el contenido del campo de entrada con ID `xP`.

    - También se selecciona el cuerpo de la tabla asociada (con ID `iterationsTabl7U2`) y se limpia su contenido.

2.  **Generación de Números Aleatorios**:

- Se define la función `generarNumerosAleatoriosPoker`, que genera números aleatorios utilizando el método de los cuadrados medios.
- Se inicializa una semilla aleatoria entre 1000 y 9999.
- Se determina un número aleatorio de iteraciones entre 20 y 100.
- Se utiliza un bucle para generar los números aleatorios:
  - Se calcula el cuadrado de la semilla y se convierte a una cadena con 8 dígitos.
  - Se extraen los 4 dígitos centrales del cuadrado para la nueva semilla.
  - Se normaliza la nueva semilla a un rango entre 0 y 1 y se almacena en un array.
  - Finalmente, se coloca el array de números aleatorios en el campo de entrada `xP`, separando los números por espacios.

3. **Evento para Generar Números**:

   - Se añade un evento `click` al botón con ID `NAP`, que al ser presionado ejecuta la función generarNumerosAleatoriosPoker, generando y mostrando los números aleatorios en el campo de entrada correspondiente.
