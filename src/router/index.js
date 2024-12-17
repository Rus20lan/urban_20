import { links } from '@/const/links';
// import CreateTask from '@/views/CreateTask.vue';
// import HomeView from '@/views/HomeView.vue';
// import MyTasks from '@/views/MyTasks.vue';
// import SettingsPage from '@/views/SettingsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: links.HOME,
    children: [
      {
        path: links.HOME,
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: links.MY_TASKS,
        name: 'Tasks',
        component: () => import('../views/MyTasks.vue'),
      },
      {
        path: links.CREATE_TASK,
        name: 'Create',
        component: () => import('../views/CreateTask.vue'),
      },
      {
        path: links.SETTINGS,
        name: 'Settings',
        component: () => import('../views/SettingsPage.vue'),
      },
      {
        path: `${links.TASK}/:id`,
        name: 'TaskProfile',
        component: () => import('../components/TaskProfile.vue'),
        props: true,
      },
      {
        path: `${links.EDIT}/:id`,
        name: 'EditView',
        component: () => import('../views/EditView.vue'),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
