<script setup>
import { defineProps, toRefs, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps({
  task: {},
  isLinkTitle: { type: Boolean },
});
const { title, description, dueDate, priority, status, idTask } = toRefs(
  props.task
);
const store = useStore();
const data = computed(() => store.state.tasks);
const completed = status.value === 'completed';
const isVisibleTrash = ref(false);

const handleRemoveTask = (idTask) => {
  let index = data.value.tasks.map((item) => item.idTask).indexOf(idTask);
  if (index !== -1) {
    store.commit('tasks/removeTask', index);
  }
};

const router = useRouter();
const handleEditTask = () => {
  router.push('/edit/' + idTask.value);
};
</script>

<template>
  <div
    class="container task_card"
    v-on:mouseover="() => (isVisibleTrash = true)"
    v-on:mouseleave="() => (isVisibleTrash = false)"
  >
    <h2 v-if="props.isLinkTitle">
      <router-link class="link_h2" :to="`/task/${idTask}`">{{
        title
      }}</router-link>
    </h2>
    <h2 v-else>
      {{ title }}
    </h2>
    <img v-if="completed" class="completed_star" src="@/images/shape.svg" />
    <p class="p_desc">{{ description }}</p>
    <p class="p_data">
      <strong>Due Date:</strong> <span>{{ dueDate }}</span>
    </p>
    <p class="p_data">
      <strong>Priority:</strong> <span>{{ priority }}</span>
    </p>
    <p class="p_data">
      <strong>Status:</strong> <span>{{ status }}</span>
    </p>
    <div class="btn_wrapper" v-if="props.isLinkTitle && isVisibleTrash">
      <a
        v-if="props.isLinkTitle && isVisibleTrash"
        @click="() => handleRemoveTask(idTask)"
        class="btn"
        ><img src="@/images/trash.svg"
      /></a>
      <a
        v-if="props.isLinkTitle && isVisibleTrash"
        @click="() => handleEditTask()"
        class="btn"
        ><img src="@/images/edit.svg"
      /></a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 30rem;
  justify-content: space-around;
  padding: 1.2rem;
  border-radius: 15px;

  position: relative;
}
.completed_star {
  position: absolute;
  top: 19.2px;
  z-index: 1;
}
h2,
p {
  margin: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
h2 {
  color: var(--prim-80);
  font-size: 1.8rem;
}
.p_desc {
  color: var(--grey-40);
}
.p_data {
  width: 100%;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
/* .p_data strong {
  color: var(--prim-80);
}
.p_data span {
  color: var(--grey-80);
} */
.btn_wrapper {
  position: absolute;
  bottom: 19.2px;
  width: 100px;
  display: flex;
  justify-content: center;
}
.btn {
  width: 30px;
  height: 30px;
  padding: 0;
  /* border-radius: 50%; */
}
.btn img {
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1280px) {
  h2 {
    font-size: 1.4rem;
  }
  .p_data {
    font-size: 1.2rem;
  }
}
</style>
