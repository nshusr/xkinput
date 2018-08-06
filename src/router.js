import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home";
import Doc from "./components/Doc/Doc";
import Search from "./components/Tools/Search/Search";
import Contribution from "./components/Tools/Contribution/Contribution";
import Study from "./components/Tools/Study/Study";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/jdweb",
      name: "Home",
      component: Home
    },
    {
      path: "/jdweb/doc",
      name: "Doc",
      component: Doc
    },
    {
      path: "/jdweb/tools/search",
      name: "Search",
      component: Search
    },
    {
      path: "/jdweb/tools/contribution",
      name: "Contribution",
      component: Contribution
    },
    {
      path: "/jdweb/tools/study",
      name: "Study",
      component: Study
    }
  ]
});
