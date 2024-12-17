<template>
  <SpinnerLoader v-if="isLoading.loading" />
  <div v-else class="tasks_container">
    <h1>My Tasks List</h1>
    <div v-if="data.tasks.length === 0">
      <h2>The task list is empty</h2>
    </div>
    <div class="wrapper" v-else>
      <div class="task_wrapper" v-for="task in data.tasks" :key="task.idTask">
        <TaskCard :task="task" :isLinkTitle="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import TaskCard from '@/components/TaskCard.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const data = computed(() => store.state.tasks);
const isLoading = computed(() => store.state.loading);

onMounted(() => {
  store.dispatch('loading/simulatedLoading');
});
</script>

<style scoped>
h1 {
  text-shadow: 1px 1px 10px rgba(202, 202, 206, 0.2);
}
h2 {
  color: var(--prim-80);
}
.tasks_container {
  max-width: var(--max-width);
  margin: 1rem auto;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: auto;
  flex-wrap: wrap;
  gap: 20px;
}
.task_wrapper {
  padding: 2rem 0.5rem;
  width: 80%;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 708px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
