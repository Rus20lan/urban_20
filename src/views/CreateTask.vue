<template>
  <h1>Please fill out the form and save the task</h1>
  <div class="container">
    <TaskForm />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';

export default {
  name: 'CreateTask',
  components: { TaskForm },
};
</script>

<style scoped>
.container {
  margin: 1rem auto;
  padding: 0.5rem 2rem;
}
</style>
