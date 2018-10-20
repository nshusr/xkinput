import Vue from 'vue';
import App from './Home';
import router from '../../router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

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
