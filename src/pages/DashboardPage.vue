<template>
  <q-page class="q-pa-md">
    <div>
      <div class="row">
        <div class="col-4">
          <div>
            <span class="absolute q-pa-md chart-label">Índice de Registos</span>
          </div>
          <apexchart
            type="area"
            height="200"
            :options="chartOptionsNew"
            :series="seriesNew"
          ></apexchart>
        </div>
        <div class="col-4">
          <div>
            <span class="absolute q-pa-md chart-label">% Novas Empresas</span>
          </div>
          <apexchart
            type="area"
            height="200"
            :options="chartOptionsMedium"
            :series="seriesMedium"
          ></apexchart>
        </div>
        <div class="col-4">
          <div>
            <span class="absolute q-pa-md chart-label"
              >Registos de Empresas</span
            >
          </div>
          <apexchart
            type="area"
            height="200"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

let series = ref([
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 61, 71, 48],
  },
]);
let chartOptions = ref({
  chart: {
    height: 250,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    align: "left",
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
});
let seriesNew = ref([
  {
    name: "Desktops",
    data: [69, 91, 148, 10, 41, 35, 51, 49, 62],
  },
]);
let chartOptionsNew = ref({
  chart: {
    height: 250,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    align: "left",
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
});
let seriesMedium = ref([
  {
    name: "Desktops",
    data: [69, 41, 35, 51, 49, 62, 91, 148, 10],
  },
]);
let chartOptionsMedium = ref({
  chart: {
    height: 250,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    align: "left",
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
});

let barsNew = ref([
  {
    name: "Inflation",
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
  },
]);
let barsOptionsNew = ref({
  chart: {
    height: 350,
    type: "bar",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  title: {
    text: "Monthly Inflation in Argentina, 2002",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444",
    },
  },
});
</script>

<style>
.dashboard-card {
  background-color: rgba(137, 175, 231, 0.089);
}
.apexcharts-menu-icon {
  display: none;
}
.chart-label {
  padding: 0.6rem 1.3rem;
  font-size: 0.8rem;
  color: rgb(67, 140, 203);
}
</style>
