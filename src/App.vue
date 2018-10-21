<template>
	<div id='app'>
		<v-nav></v-nav>
		<Layout class='main-layout'>
			<router-view></router-view>
		</Layout>
		<v-footer></v-footer>
		<v-utiltes></v-utiltes>
	</div>
</template>

<script>
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Utiltes from './components/Utilites/Utilites';
export default {
  name: 'app',
  components: {
    'v-nav': Nav,
    'v-footer': Footer,
    'v-utiltes': Utiltes
  },
  data () {
    return {
      isDestroyed: true
    };
  },
  created () {
    Vue.config.keyCodes = {
      v: 86
    }
  },
  mounted () {
    document.onkeydown = ev => {
      ev = ev || event;
      var thisHref = window.location.href;
      if (ev.keyCode == 116) {
        var isHome = /.*\/jdweb\/?$/;
        if (!isHome.test(thisHref)) {
          ev.preventDefault();
          this.$router.push('/jdweb/');
          return false;
        }
      }
    };
  }
};
</script>

<style>
.main-layout {
  padding: 70px 0 10px;
}
</style>
