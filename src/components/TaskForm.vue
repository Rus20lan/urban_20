<script>
import { links } from '@/const/links';
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, unref } from 'vue';
import { reactive, toRaw, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import SpinnerLoader from './SpinnerLoader.vue';

export default {
  name: 'TaskForm',
  props: {
    task: Object,
  },
  components: { SpinnerLoader },

  setup(props) {
    const { task } = toRefs(props);
    const prioritys = ['low', 'medium', 'high'];
    const statuses = ['new', 'in progress', 'completed'];
    const store = useStore();
    const router = useRouter();

    const getInitialFormData = () => ({
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      status: '',
    });
    const resetTaskForm = () => Object.assign(newTask, getInitialFormData());
    const newTask = reactive(task.value ?? getInitialFormData());
    const { title, description, dueDate, priority, status } = toRefs(newTask);

    const rules = computed(() => ({
      title: { required },
      description: { required },
      dueDate: { required },
      priority: { required },
      status: { required },
    }));

    const isLoading = computed(() => store.state.loading);

    const v$ = useValidate(rules, newTask);

    const handleSubmit = async () => {
      const result = await unref(v$).$validate();

      if (result) {
        if (task.value) {
          let index = store.state.tasks.tasks.findIndex((item) => {
            return item.idTask === task.value.idTask;
          });
          store.commit('tasks/editTask', { index, updateTask: newTask });
          alert('The task has been successfully updated');
          router.push(links.MY_TASKS);
        } else {
          const task = Object.assign(
            {},
            { idTask: toRaw(store.state.id).id },
            newTask
          );
          store.dispatch('tasks/actionAddTask', task);
          store.commit('id/increment');
          resetTaskForm();
        }
      }
    };

    return {
      prioritys,
      statuses,
      newTask,
      handleSubmit,
      title,
      description,
      dueDate,
      priority,
      status,
      v$,
      isLoading,
    };
  },
};
</script>

<template>
  <form v-if="!isLoading.loading" @submit.prevent="handleSubmit" ref="addForm">
    <div>
      <label for="title">Title</label>
      <input v-model="newTask.title" type="text" name="title" />
      <p class="error_message" v-if="v$.title.$error">Title field empty</p>
    </div>
    <div>
      <label for="description"> Description </label>
      <textarea
        v-model="newTask.description"
        type="text"
        name="description"
      ></textarea>
      <p class="error_message" v-if="v$.description.$error">
        Description field empty
      </p>
    </div>
    <div class="due_date_wrapper">
      <label for="due_date">Due Date</label>
      <input type="date" name="due_date" v-model="newTask.dueDate" />
      <p class="error_message bottom" v-if="v$.dueDate.$error">
        You need to select a date
      </p>
    </div>
    <div class="select_wrapper">
      <div class="wrapper priority">
        <label class="label_select">Priority</label>
        <select class="select_priority" v-model="newTask.priority">
          <option v-for="(option, index) in prioritys" :key="index">
            {{ option }}
          </option>
        </select>
        <p class="error_message bottom" v-if="v$.priority.$error">
          You need to select a priority
        </p>
      </div>
      <div class="wrapper status">
        <label class="label_select">Status</label>
        <select v-model="newTask.status">
          <option v-for="(option, index) in statuses" :key="index">
            {{ option }}
          </option>
        </select>
        <p class="error_message bottom" v-if="v$.status.$error">
          You need to select a status
        </p>
      </div>
    </div>
    <hr />
    <div class="btn_wrapper">
      <button type="submit">Save Task</button>
    </div>
  </form>
  <SpinnerLoader v-if="isLoading.loading"></SpinnerLoader>
</template>

<style scoped>
hr {
  margin: 2rem auto;
  width: 100%;
  color: var(--grey-95);
}
.due_date_wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  position: relative;
}
.due_date_wrapper input {
  width: 50%;
  justify-items: center;
}
.due_date_wrapper label {
  width: 50%;
  justify-items: center;
}
.btn_wrapper {
  margin-bottom: 1rem;
}
.btn_wrapper button {
  padding: 1rem;
  background-color: var(--prim-80);
}
button:active {
  background-color: var(--prim-c-30);
  transform: scale(0.9);
}
h1,
label {
  text-shadow: 0px 0px 1.5px rgba(128, 128, 128, 0.8);
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30em;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 0 0 10px rgba(128, 128, 128, 0.2);
}
form div {
  margin-top: 1rem;
}
input,
textarea,
select,
button {
  font-size: 1.3rem;
  line-height: 1.2;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  color: var(--grey-40);
}
label {
  font-size: 1.3rem;
  line-height: 1.2;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
}
label {
  margin: 1rem 0;
  display: block;
}
input,
textarea {
  padding: 0.4rem;
  width: 100%;
}
textarea {
  height: 150px;
  resize: none;
}
.wrapper {
  flex-grow: 1;
  width: 100%;
  margin: 0;
}
.label_select {
  margin: 0 0 1rem 0;
  display: block;
  text-shadow: 1px 1px 10px rgba(202, 202, 206, 0.2);
}
.label_select,
select {
  font-size: 1.3rem;
  line-height: 1.2;
  box-sizing: border-box;
  padding: 0.4rem;
  border-radius: 10px;
  width: 100%;
}
.select_wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 2rem;
}
.priority,
.status {
  position: relative;
}
.error_message {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding-top: 5px;
  font-size: 0.9rem;
  text-align: center;
  color: var(--dark-red);
}
.bottom {
  bottom: -20px;
}
</style>
