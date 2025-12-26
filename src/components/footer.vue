<script setup>
import { useRoute } from 'vue-router';
const emit = defineEmits(["open-add"]);
const route = useRoute();

const navItems = [
  { name: 'home', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'overview', path: '/overview', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
];
</script>

<template>
  <footer class="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4">
    <div class="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl w-full max-w-md h-16 flex items-center justify-around px-6">
      
      <router-link to="/" :class="route.path === '/' ? 'text-indigo-600' : 'text-gray-400'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </router-link>

      <button 
        @click="emit('open-add')"
        class="bg-indigo-600 text-white w-14 h-14 rounded-full -mt-10 border-4 border-gray-50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
      >
        <span class="text-3xl mb-1.5">+</span>
      </button>

      <router-link to="/overview" :class="route.path === '/overview' ? 'text-indigo-600' : 'text-gray-400'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      </router-link>

    </div>
  </footer>
</template>