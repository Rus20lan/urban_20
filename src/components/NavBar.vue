<template>
  <div class="nav-container">
    <div class="logo_container">
      <LogoApp />
    </div>
    <ul>
      <li>
        <router-link to="/tasks">My Tasks</router-link>
      </li>
      <li>
        <router-link to="/create">Create Task</router-link>
      </li>
      <li>
        <router-link to="/settings">Settings</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import LogoApp from './LogoApp.vue';

export default {
  name: 'NavBar',
  components: { LogoApp },
  setup() {},
};
</script>

<style scoped>
.nav-container {
  max-width: var(--max-width);
  /* margin: 0.5rem auto; */
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  justify-content: space-around;
}
ul {
  grid-column: 2;
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
  margin: 1rem auto;
}
li {
  padding: 0.5rem 2rem;
  align-self: center;
}
a {
  text-decoration: none;
}
a:hover {
  color: var(--prim-80);
}
a:active {
  color: var(--prim-c-30);
}
.logo_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
