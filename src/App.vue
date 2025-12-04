<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Overview from './views/overview.vue';

</script>

<template>

    <div class="wrapper min-h-screen flex flex-col md:w-[400px] md:mx-auto">
      <Header />
      <Overview />
      <Footer />
    </div>

</template>