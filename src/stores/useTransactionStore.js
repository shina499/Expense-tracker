import { ref, computed, watch } from 'vue'

const transactions = ref(JSON.parse(localStorage.getItem('tx_data')) || [])

export function useTransactions() {
  // ذخیره خودکار در LocalStorage
  watch(transactions, (val) => {
    localStorage.setItem('tx_data', JSON.stringify(val))
  }, { deep: true })

  const addTransaction = (title, note, amount) => {
    transactions.value.push({
      id: Date.now(),
      title,
      note,
      amount: Number(amount)
    })
  }

  const totalIncome = computed(() => 
    transactions.value.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0))
  
  const totalExpense = computed(() => 
    transactions.value.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0))

  const totalMoney = computed(() => totalIncome.value - totalExpense.value)

  return { transactions, addTransaction, totalIncome, totalExpense, totalMoney }
}