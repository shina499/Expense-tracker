<script>
// src/stores/useTransactionStore.js
import { ref, computed, watch } from 'vue'

const transactions = ref(JSON.parse(localStorage.getItem('my_expenses') || '[]'))

// ذخیره خودکار در صورت تغییر
watch(transactions, (newVal) => {
  localStorage.setItem('my_expenses', JSON.stringify(newVal))
}, { deep: true })

export function useTransactions() {
  const addTransaction = (title, note, amount) => {
    transactions.value.unshift({
      id: Date.now(),
      title,
      note,
      amount: Number(amount),
      date: new Date().toLocaleDateString()
    })
  }

  const totalIncome = computed(() => 
    transactions.value.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0)
  )

  const totalExpense = computed(() => 
    Math.abs(transactions.value.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0))
  )

  const totalMoney = computed(() => totalIncome.value - totalExpense.value)

  return { transactions, addTransaction, totalIncome, totalExpense, totalMoney }
}
</script>

<template>
  <div class="mt-8">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-bold text-gray-800">Recent Activity</h3>
      <span class="text-xs text-indigo-600 font-medium">View All</span>
    </div>

    <ul class="space-y-3">
      <li v-for="t in items" :key="t.id" 
          class="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-50 hover:border-indigo-100 transition-all">
        <div class="flex gap-4 items-center">
          <div :class="t.amount < 0 ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'" 
               class="w-12 h-12 rounded-2xl flex items-center justify-center font-bold">
            {{ t.title.charAt(0).toUpperCase() }}
          </div>

          <div class="flex flex-col">
            <p class="text-[15px] font-bold text-gray-800">{{ t.title }}</p>
            <p class="text-xs text-gray-400">{{ t.note || 'No description' }}</p>
          </div>
        </div>

        <div class="text-right">
          <p :class="t.amount < 0 ? 'text-red-500' : 'text-emerald-500'" class="font-bold text-sm">
            {{ t.amount > 0 ? '+' : '' }}{{ t.amount.toLocaleString() }}$
          </p>
          <p class="text-[10px] text-gray-300">{{ t.date }}</p>
        </div>
      </li>
    </ul>
    
    <div v-if="items.length === 0" class="text-center py-10">
      <p class="text-gray-400 text-sm">No transactions yet. Start adding!</p>
    </div>
  </div>
</template>
