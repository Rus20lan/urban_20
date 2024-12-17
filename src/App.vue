<template>
  <MainLayout />
</template>

<script>
import MainLayout from '@/views/MainLayout.vue';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'App',
  components: { MainLayout },

  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme);
    const elm = document.getElementById('app');

    const defineTheme = (theme, elm) => {
      if (theme) {
        elm.classList.add('dark');
        elm.classList.remove('light');
      } else {
        elm.classList.add('light');
        elm.classList.remove('dark');
      }
    };

    defineTheme(theme.value.theme, elm);

    elm.classList.add('dark');
    watch(
      theme,
      () => {
        defineTheme(theme.value.theme, elm);
      },
      { deep: true }
    );

    return {};
  },
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
@import url('./fonts/fonts.css');

.dark {
  background-color: #1c1b1f;
  h1 {
    color: var(--grey-95);
    text-shadow: 1px 1px 10px rgba(202, 202, 206, 0.2);
  }
  a {
    color: var(--light-body-color);
  }
  label {
    color: var(--prim-80);
  }
  .link_h2 {
    color: var(--prim-80);
  }
  .task_card {
    box-shadow: 0 0 0 10px rgba(202, 202, 206, 0.2);
  }
  .p_data strong {
    color: var(--prim-80);
  }
  .p_data span {
    color: var(--grey-80);
  }
  .footer_sign {
    color: var(--grey-95);
  }
}
.light {
  background-color: #eaddff;
  h1 {
    color: var(--grey-40);
    text-shadow: 1px 1px 10px rgba(202, 202, 206, 0.2);
  }
  a {
    color: var(--grey-40);
  }
  label {
    color: var(--prim-c-30);
  }
  .link_h2 {
    color: var(--prim-c-30);
  }
  .task_card {
    box-shadow: 0 0 0 10px rgba(98, 100, 108, 0.2);
  }
  .p_data strong {
    color: var(--prim-c-30);
  }
  .p_data span {
    color: var(--grey-40);
  }
  .footer_sign {
    color: var(--grey-40);
  }
}
.light_h1 {
  color: var(--grey-40);
}
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-size: cover;
  background-color: #1c1b1f;
}
#app {
  --max-width: 1400px;
  --light-body-color: #f9f5f4;
  --prim-80: #d0bcff;
  --prim-c-90: #eaddff;
  --prim-c-30: #4f378b;

  --dark-red: #bd2328;

  --grey-40: #62646c;
  --grey-50: #797c86;
  --grey-70: #afb0b6;
  --grey-80: #cacace;
  --grey-90: #e4e4e6;
  --grey-95: #f2f2f3;
  --grey-97: #f7f7f8;
  --grey-99: #fcfcfd;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  box-sizing: border-box;

  display: grid;
  grid-template-rows: 66px 1fr 40px;
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
}
</style>
