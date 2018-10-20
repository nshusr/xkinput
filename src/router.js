import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/jdweb',
      name: 'Home',
      component: resolve => require(['./components/Home/Home'], resolve)
    },
    {
      path: '/jdweb/doc',
      name: 'Doc',
      component: resolve => require(['./components/Doc/Doc'], resolve)
    },
    {
      path: '/jdweb/tools/search',
      name: 'Search',
      component: resolve => require(['./components/Tools/Search/Search'], resolve)
    },
    {
      path: '/jdweb/tools/contribution',
      name: 'Contribution',
      component: resolve => require(['./components/Tools/Contribution/Contribution'], resolve)
    },
    {
      path: '/jdweb/tools/study',
      name: 'Study',
      component: resolve => require(['./components/Tools/Study/Study'], resolve)
    }
  ]
});
