<script setup>
import BarChart from '@/components/chart.vue';
import Transaction from '@/components/Transaction.vue';
</script>

<template>
    <section class="min-h-screen mt-4">
        <div class="flex gap-3">
            <div class="w-[48%] h-22 bg-indigo-300 rounded-xl flex flex-col justify-center items-center gap-1">
                <h3 class="text-gray-600">Total Incomes</h3>
                <p class="text-xl font-semibold">10,000</p>
            </div>
            <div class="w-[48%] h-22 bg-orange-300 rounded-xl flex flex-col justify-center items-center gap-1">
                <h3 class="text-gray-600">Total Expences</h3>
                <p class="text-xl font-semibold">5,000,000,000,000</p>
            </div>
        </div>
        <div class="flex flex-col mt-4">
            <h3 class="text-xl font-semibold">Statitics</h3>
            <BarChart />
        </div>

        <div class="w-[90%] mx-auto flex justify-between items-center mt-6">
            <button class="py-2 px-10 bg-purple-500 text-white font-semibold rounded-xl">Expences</button>
            <button class="py-2 px-10 bg-purple-500 text-white font-semibold rounded-xl">Incomes</button>
        </div>

        <Transaction />
    </section>
</template>