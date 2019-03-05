import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['./components/Home/Home'], resolve)
    },
    {
      path: '/doc',
      name: 'Doc',
      component: resolve => require(['./components/Doc/Doc'], resolve)
    },
    {
      path: '/tools/search',
      name: 'Search',
      component: resolve => require(['./components/Tools/Search/Search'], resolve)
    },
    {
      path: '/tools/contribution',
      name: 'Contribution',
      component: resolve => require(['./components/Tools/Contribution/Contribution'], resolve)
    },
    {
      path: '/tools/study',
      name: 'Study',
      component: resolve => require(['./components/Tools/Study/Study'], resolve)
    }
  ]
});
