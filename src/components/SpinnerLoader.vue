<template>
  <div class="container">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: 'SpinnerLoader',
};
</script>
<style scoped>
.container {
  max-width: var(--max-width);
  margin: 1rem auto;
  width: 100px;
  height: 100px;
}
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid var(--grey-50);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid;
  border-color: var(--prim-80) transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
