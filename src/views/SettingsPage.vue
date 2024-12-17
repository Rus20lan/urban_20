<template>
  <h1>Settings</h1>
  <div class="container">
    <ul>
      <li>
        <span class="name_settings">Theme</span>
        <div></div>
        <div class="switch_wrapper">
          <SwitchElem @click-happened="handleClick" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SwitchElem from '@/components/SwitchElem.vue';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
export default {
  components: { SwitchElem },

  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme);
    const handleClick = () => {
      store.commit('theme/toggleTheme');
    };

    const h1 = document.getElementsByTagName('h1');

    watch(
      theme,
      () => {
        if (theme.value.theme) {
          h1[0].classList.remove('light');
        } else h1[0].classList.add('light');
      },
      { deep: true }
    );

    return {
      handleClick,
    };
  },
};
</script>

<style scoped>
h1 {
  /* color: var(--grey-95); */
  text-shadow: 1px 1px 10px rgba(202, 202, 206, 0.2);
}
.switch_wrapper {
  height: 50px;
  width: 160px;
  display: flex;
  align-items: center;
}
.container {
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
ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: flex-start;
  flex-direction: column;
}
li {
  width: 100%;
  padding: 0.5rem 2rem;
  align-self: flex-start;
  justify-items: flex-start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
}
.name_settings {
  color: var(--grey-80);
  font-size: 1.4rem;
  align-self: center;
}
</style>
