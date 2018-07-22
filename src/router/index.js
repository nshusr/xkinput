import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/Home/Home')
const Doc =  () => import('../components/Doc/Doc')
const Download = () => import('../components/Download/Download')
const Search = () => import('../components/Tools/Search/Search')
const Contribution = () => import('../components/Tools/Contribution/Contribution')
const Study = () => import('../components/Tools/Study/Study')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/jdweb',
      name: 'Home',
      component: Home
    },
    {
      path: '/jdweb/Doc',
      name: 'Doc',
      component: Doc
    },
    {
      path: '/jdweb/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/jdweb/Tools/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/jdweb/Tools/Contribution',
      name: 'Contribution',
      component: Contribution
    },
    {
      path: '/jdweb/Tools/Study',
      name: 'Study',
      component: Study
    }
  ]
})
