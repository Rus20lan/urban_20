<template>
  <div class="logo_wrapper">
    <router-link to="/"><img src="../images/home.svg" /></router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoApp',
  setup() {},
};
</script>
<style scoped>
.logo_wrapper {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0.5 auto;
}
a {
  text-decoration: none;
}

.logo_wrapper img:active {
  transform: scale(0.8);
}
</style>
