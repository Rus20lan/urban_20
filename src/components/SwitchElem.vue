<template>
  <input
    type="checkbox"
    name="switch"
    id="switch"
    @click="toggleClick"
    :checked="checked"
  />
  <label for="switch"></label>
</template>

<script setup>
import { computed, defineEmits, ref, watch } from 'vue';
import { useStore } from 'vuex';
const emit = defineEmits(['click-happened']);
const store = useStore();
const theme = computed(() => store.state.theme);

const checked = ref(!theme.value.theme);
const toggleClick = () => {
  emit('click-happened');
};

watch(
  theme,
  () => {
    if (theme.value.theme) {
      checked.value = false;
    } else {
      checked.value = true;
    }
  },
  { deep: true }
);
</script>

<style scoped>
input[type='checkbox'] {
  width: 0;
  height: 0;
  visibility: hidden;
}
label {
  display: block;
  width: 95%;
  height: 100%;
  /* width: 500px; */
  /* height: 150px; */
  background-color: #477a85;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 0 20px #477a8550;
}
label::after {
  content: '';
  /* width: 120px; */
  /* height: 120px; */
  width: 33%;
  height: 48px;
  background-color: #e8f5f7;
  position: absolute;
  border-radius: 70px;
  top: 1px;
  left: 0px;
  transition: 0.5s;
}
input:checked + label:after {
  left: calc(100% - 0px);
  transform: translateX(-100%);
}
input:checked + label {
  background-color: #243d42;
}
label:active:after {
  width: 160px;
}
</style>
