import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import MonacoEditor from 'vue-monaco-editor'

Vue.use(iView)
Vue.use(MonacoEditor)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
