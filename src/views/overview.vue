<script setup>
import { useTransactions } from '@/stores/useTransactionStore'
import BarChart from '@/components/chart.vue';
import Transaction from '@/components/Transaction.vue';
import Footer from '@/components/footer.vue';

const { transactions, totalIncome, totalExpense } = useTransactions()
</script>

<template>
  <section class="p-4 pb-24">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Analytics</h2>
    
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
        <h3 class="text-emerald-600 text-sm font-medium">Total Incomes</h3>
        <p class="text-xl font-bold text-emerald-700">{{ totalIncome.toLocaleString() }} $</p>
      </div>
      <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100">
        <h3 class="text-orange-600 text-sm font-medium">Total Expenses</h3>
        <p class="text-xl font-bold text-orange-700">{{ totalExpense.toLocaleString() }} $</p>
      </div>
    </div>

    <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8">
      <h3 class="text-lg font-bold mb-4 text-slate-700">Income vs Expenses</h3>
      <BarChart :income="totalIncome" :expense="totalExpense" />
    </div>

    <Transaction :items="transactions" />
    <Footer />
  </section>
</template>