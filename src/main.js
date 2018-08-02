import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import iView from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import MonacoEditor from 'vue-monaco-editor'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(MonacoEditor)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
