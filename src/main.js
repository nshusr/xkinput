import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueWorker from 'vue-worker';

Vue.use(iView);
Vue.use(VueWorker);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
