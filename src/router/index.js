import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/Home/Home')
const Header = () => import('../components/Header/Header')
const Doc =  () => import('../components/Doc/Doc')
const Download = () => import('../components/Download/Download')
const Search = () => import('../components/Tools/Search/Search')
const Contribution = () => import('../components/Tools/Contribution/Contribution')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/rime_jd_web',
      name: 'Home',
      component: Home
    },
    {
      path: '/Doc',
      name: 'Doc',
      component: Doc
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/Tools/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Tools/Contribution',
      name: 'Contribution',
      component: Contribution
    }
  ]
})
