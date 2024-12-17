<template>
  <div class="container">
    <span class="footer_sign">
      <strong>© Created by Ruslan Sadikov , 2024</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FooterSign',
};
</script>

<style scoped>
.container {
  /* display: grid; */
  margin: 0 auto;
  max-width: var(--max-width);
  /* grid-row: inherit; */
  width: auto;
}
.container span {
  text-align: center;
}
</style>
