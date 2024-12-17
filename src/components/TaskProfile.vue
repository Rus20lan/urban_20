<template>
  <div class="container">
    <TaskCard :task="task" :isLinkTitle="false" />
    <div class="link_wrapper">
      <router-link to="/tasks">Back</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';
import TaskCard from './TaskCard.vue';

const route = useRoute();
const store = useStore();

const taskID = route.params.id;
const task = computed(() => {
  return store.getters['tasks/getTaskById'](+taskID);
});
</script>
<style scoped>
.container {
  max-width: 900px;
  margin: 1rem auto;
  padding: 0.5rem 2rem;
}
.link_wrapper {
  margin: 2.5rem auto;
}
a {
  text-decoration: none;
  padding: 1rem;
  background-color: var(--prim-80);
  border-radius: 15px;
  box-shadow: 0 0 0 1.5px rgba(128, 128, 128, 0.2);
}

a:active {
  background-color: var(--prim-c-30);
  transform: scale(0.9);
}
</style>
