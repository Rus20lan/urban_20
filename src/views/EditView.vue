<template>
  <div class="container">
    <h1>Edit Form</h1>
    <TaskForm :task="task" />
  </div>
</template>

<script setup>
import TaskForm from '@/components/TaskForm.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

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
</style>
