<template>
  <div class="h-[250px]">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import { 
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale 
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// دریافت مقادیر از کامپوننت والد
const props = defineProps({
  income: { type: Number, default: 0 },
  expense: { type: Number, default: 0 }
})

// داینامیک کردن داده‌های چارت
const chartData = computed(() => ({
  labels: ['Incomes', 'Expenses'],
  datasets: [
    {
      label: 'Amount (T)',
      data: [props.income, props.expense],
      backgroundColor: ['#10b981', '#f97316'], // رنگ سبز برای درآمد، نارنجی برای هزینه
      borderRadius: 8,
      barThickness: 40
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // مخفی کردن راهنمای بالای چارت برای زیبایی
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { display: false }
    },
    x: {
      grid: { display: false }
    }
  }
}
</script>