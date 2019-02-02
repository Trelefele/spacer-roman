import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

Vue.use(Router);

export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
  ],
});
