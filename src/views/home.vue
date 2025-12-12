<script setup>
import { ref, computed } from 'vue'
import Transaction from '@/components/Transaction.vue'
import Footer from '@/components/footer.vue'

const transactions = ref([])

// کنترل باز شدن فرم
const showForm = ref(false)

// فیلدهای فرم
const title = ref('')
const note = ref('')
const amount = ref(null)

// تابع افزودن تراکنش
function addTransaction() {
  transactions.value.push({
    id: Date.now(),
    title: title.value,
    note: note.value,
    amount: Number(amount.value)
  })

  // پاکسازی فرم
  title.value = ''
  note.value = ''
  amount.value = ''

  showForm.value = false
}

// محاسبه درآمد (amount مثبت)
const totalIncome = computed(() =>
  transactions.value
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)
)

// محاسبه خرج (amount منفی)
const totalExpense = computed(() =>
  transactions.value
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)
)

// پول نهایی
const totalMoney = computed(() =>
  totalIncome.value - totalExpense.value
)
</script>

<template>
  <section class="min-h-screen">

    <!-- ----------- کارت گرادیانتی با مقادیر واقعی ----------- -->
    <div
      class="w-[95%] h-[250px] px-7 py-10 shadow-xl shadow-blue-400 bg-linear-to-tr
             from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
             mx-auto mt-5 rounded-xl flex flex-col justify-between"
    >
      <div class="ml-4">
        <p class="text-lg text-white">total money:</p>
        <p class="text-white font-bold text-2xl">{{ totalMoney }} T</p>
      </div>

      <div class="flex justify-around items-center text-white">
        <div>
          <p class="text-lg text-white">Expenses:</p>
          <p class="text-white font-bold text-2xl">{{ totalExpense }} T</p>
        </div>
        <div>
          <p class="text-lg text-white">Incomes:</p>
          <p class="text-white font-bold text-2xl">{{ totalIncome }} T</p>
        </div>
      </div>
    </div>

    <!-- ----------- لیست تراکنش‌ها ----------- -->
    <Transaction :items="transactions" />

    <!-- ----------- فرم اضافه کردن تراکنش ----------- -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/40 flex justify-center items-center"
    >
      <div class="bg-white p-5 rounded-xl w-[90%]">
        <h2 class="text-xl font-bold mb-3">Add Transaction</h2>

        <form @submit.prevent="addTransaction">
          <input v-model="title" placeholder="title" class="border p-2 w-full mb-2" />
          <input v-model="note" placeholder="note" class="border p-2 w-full mb-2" />
          <input v-model.number="amount" placeholder="amount (مثبت=income منفی=expense)" class="border p-2 w-full mb-2" />

          <button class="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Add
          </button>
        </form>
      </div>
    </div>

    <!-- ----------- فوتر اصلی تو ----------- -->
    <Footer @open-add="showForm = true" />

  </section>
</template>
