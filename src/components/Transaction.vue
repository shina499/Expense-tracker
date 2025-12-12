<script setup>
const props = defineProps({
  items: Array
})
</script>

<template>
  <div class="mt-6">
    <h3 class="text-xl md:text-2xl font-semibold">Transactions</h3>

    <ul class="flex flex-col gap-4 mt-3">
      <li
        v-for="t in props.items"
        :key="t.id"
        class="flex justify-between "
      >
       <div class="flex gap-4">
         <img
          src="https://cdn.dribbble.com/userupload/42919971/file/original-5918996b4eb2632f5293e351c73b6c64.png?format=webp&resize=400x300&vertical=center"
          class="w-[50px] h-[50px] rounded-full"
        />

        <div class="flex flex-col">
          <p class="text-lg font-semibold">{{ t.title }}</p>
          <p class="text-sm text-gray-600">{{ t.note }}</p>
        </div>
       </div>

        <p
          :class="t.amount < 0 ? 'text-red-500' : 'text-green-500'"
          class="text-sm "
        >
          {{ t.amount }}T
        </p>
      </li>
    </ul>
  </div>
</template>
