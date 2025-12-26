<script setup>
import { ref } from 'vue'
import { useTransactions } from '@/stores/useTransactionStore' // مسیر فایل مرحله ۱
import Transaction from '@/components/Transaction.vue'
import Footer from '@/components/footer.vue'

const { transactions, addTransaction, totalIncome, totalExpense, totalMoney } = useTransactions()

const showForm = ref(false)
const title = ref('')
const note = ref('')
const amount = ref(null)

const handleAdd = () => {
  if(!title.value || !amount.value) return alert('لطفا فیلدها را پر کنید')
  addTransaction(title.value, note.value, amount.value)
  title.value = ''; note.value = ''; amount.value = null;
  showForm.value = false
}
</script>

<template>
  <section class="p-4 pb-24">
    <div class="bg-linear-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200">
      <p class="opacity-80 text-sm">Total Balance</p>
      <h1 class="text-3xl font-bold mt-1 mb-8">{{ totalMoney.toLocaleString() }} $</h1>
      
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
          <p class="text-xs opacity-70">Incomes</p>
          <p class="text-lg font-bold">+{{ totalIncome.toLocaleString() }}</p>
        </div>
        <div class="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
          <p class="text-xs opacity-70">Expenses</p>
          <p class="text-lg font-bold">-{{ totalExpense.toLocaleString() }}</p>
        </div>
      </div>
    </div>

    <Transaction :items="transactions" />

    <Transition name="fade">
      <div v-if="showForm" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="showForm = false"></div>
        <div class="bg-white w-full max-w-md rounded-t-[32px] sm:rounded-2xl p-8 relative z-10 animate-slide-up">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">New Transaction</h2>
          <div class="space-y-4">
            <input v-model="title" type="text" placeholder="Title (e.g. Salary)" class="w-full bg-gray-50 border-none ring-1 ring-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
            <input v-model="note" type="text" placeholder="Note" class="w-full bg-gray-50 border-none ring-1 ring-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
            <input v-model.number="amount" type="number" placeholder="Amount (negative for expense)" class="w-full bg-gray-50 border-none ring-1 ring-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
            <button @click="handleAdd" class="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-transform">Add Transaction</button>
          </div>
        </div>
      </div>
    </Transition>

    <Footer @open-add="showForm = true" />
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.animate-slide-up { animation: slideUp 0.4s ease-out; }
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
</style>