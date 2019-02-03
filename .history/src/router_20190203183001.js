import Vue from 'vue';
import Router from 'vue-router';
// import Claim from './components/Claim.vue';
import Search from './views/Search.vue';
import Search from './views/SearchInput.vue';


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
