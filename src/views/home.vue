<script setup>
import Transaction from '@/components/Transaction.vue';
import Transaction from '@/components/Transaction.vue';
</script>

<template>
  <section class="min-h-screen">
    <div
      class="w-[95%] h-[250px] px-7 py-10 shadow-xl shadow-blue-400  bg-linear-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mx-auto mt-5 rounded-xl flex flex-col justify-between "
    >
    <div class="ml-4">
        <p class="text-lg text-white">total money:</p>
        <p class="text-white font-bold text-2xl">130,000 T</p>
    </div>
    <div class="flex justify-around items-center text-white">
        <div class="">
            <p class="text-lg text-white">Expences:</p>
            <p class="text-white font-bold text-2xl">2,158,000,000</p>
        </div>
        <div class="">
            <p class="text-lg text-white">incomes:</p>
            <p class="text-white font-bold text-2xl">2,000</p>
        </div>
    </div>
    </div>

   <Transaction />
  </section>
</template>