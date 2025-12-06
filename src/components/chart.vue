<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'day1', 'day2', 'day3', 'day4', 'day5' ],
        datasets: [ { data: [30, 20, 50, 24, 70] } ]
      },
      chartOptions: {
        responsive: true,
        borderColor: '#42b983',
        backgroundColor: 'rgb(255, 159, 64)',
      }
    }
  }
}
</script>