<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Overview from './views/overview.vue';
import { useRoute } from 'vue-router';

</script>

<template>

    <div class="wrapper min-h-screen flex flex-col md:w-[400px] md:mx-auto">
      <Header />
      <RouterView />
    </div>

</template>