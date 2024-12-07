document
  .getElementById("inputFormUF")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtén los valores de los inputs
    const cantidades = document
      .getElementById("NMontecarlo")
      .value.split(" ")
      .map(Number);
    const probabilidades = document
      .getElementById("NPmontecarlo")
      .value.split(" ")
      .map(Number);
    const anios = parseInt(document.getElementById("Yearmontecarlo").value, 10);
    const q = parseInt(document.getElementById("Qmontecarlo").value, 10);
    const simulacionesPorAnio = parseInt(
      document.getElementById("SimulacionesMontecarlo").value,
      10
    );
    const iteracionesPromedio = parseInt(
      document.getElementById("SimulacionesMontecarloI").value,
      10
    );

    // Validación básica
    if (
      !cantidades.length ||
      !probabilidades.length ||
      isNaN(anios) ||
      isNaN(q) ||
      isNaN(simulacionesPorAnio)
    ) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Calcular límites acumulados
    const limites = probabilidades.reduce((acc, p, index) => {
      const acumulado = acc[index - 1] || 0;
      acc.push(acumulado + p / 100);
      return acc;
    }, []);

    // Función para generar un conjunto de números aleatorios
    function generarNumerosAleatorios(cantidad) {
      return Array.from({ length: cantidad }, () => Math.random());
    }

    // Función para determinar la cantidad según la probabilidad
    function determinarCantidad(aleatorio) {
      for (let i = 0; i < limites.length; i++) {
        if (aleatorio <= limites[i]) {
          return cantidades[i];
        }
      }
      return cantidades[cantidades.length - 1];
    }

    // Simulación Monte Carlo para un año
    function simularAnio(numerosAleatorios) {
      let utilidadTotal = 0;

      for (let i = 0; i < 365; i++) {
        const aleatorio = numerosAleatorios[i];
        const demanda = determinarCantidad(aleatorio);
        const costoCompra = q * 500; // Supuesto: costo unitario por caja
        const ingresoVenta = Math.min(demanda, q) * 1000; // Supuesto: precio de venta por caja
        const costoReventa = Math.max(0, q - demanda) * 500; // Supuesto: costo de reventa por caja
        const utilidad = ingresoVenta - costoCompra - costoReventa;
        utilidadTotal += utilidad;
      }

      return utilidadTotal;
    }

    // Promedio de simulaciones para un año
    function calcularPromedio(anios) {
      const resultados = [];
      for (let i = 0; i < anios; i++) {
        const numerosAleatorios = generarNumerosAleatorios(365);
        resultados.push(simularAnio(numerosAleatorios));
      }
      return resultados.reduce((a, b) => a + b, 0) / resultados.length;
    }

    // Simulaciones de promedios
    const promedios = [];
    for (let i = 0; i < iteracionesPromedio; i++) {
      promedios.push(calcularPromedio(simulacionesPorAnio));
    }

    // Encuentra el promedio más alto
    const mejorPromedio = Math.max(...promedios);

    // Generar gráfico
    const ctx = document.getElementById("resultChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: promedios.map((_, index) => `Simulación ${index + 1}`),
        datasets: [
          {
            label: "Promedios de Utilidades",
            data: promedios,
            backgroundColor: "gold",
            borderColor: "yellow",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Muestra el mejor resultado
    alert(`El mejor promedio obtenido es: ${mejorPromedio}`);

    // Limpieza de campos y gráfico
    document
      .getElementById("clearButtonMC")
      .addEventListener("click", function () {
        document.getElementById("NMontecarlo").value = "";
        document.getElementById("NPmontecarlo").value = "";
        document.getElementById("Yearmontecarlo").value = "";
        document.getElementById("Qmontecarlo").value = "";
        document.getElementById("SimulacionesMontecarlo").value = "";
        document.getElementById("SimulacionesMontecarloI").value = "";
        chart.destroy(); // Limpia la gráfica
      });
  });
