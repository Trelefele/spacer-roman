import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Home,
    },
    {
        path: '/',
        name: 'Search',
        component: Home,
      },
  ],
});
