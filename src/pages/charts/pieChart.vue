<template>
  <div id="chart" class="q-ma-md">
    <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import apexchart from 'vue3-apexcharts';

const chartOptions = {
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
}

const series = ref(
  [44, 55, 67, 83]
);
</script>

<style scoped></style>
