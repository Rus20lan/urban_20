<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <FooterSign />
  </footer>
</template>

<script>
import FooterSign from '@/components/FooterSign.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar, FooterSign },

  setup() {},
};
</script>

<style scoped>
header {
  padding: 0.5rem 1rem;
}
</style>
