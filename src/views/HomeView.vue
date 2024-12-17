<template>
  <div class="container">
    <h1>
      Welcome Task Manager App<br />
      on Vue 3
    </h1>
    <div class="image_wrapper">
      <img src="../images/tm.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.image_wrapper {
  padding: 2rem 3rem;
  margin: 1rem auto;
}
.image_wrapper img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media (max-width: 1024px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
