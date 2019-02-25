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
import Vue from 'vue';
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
  }
};
</script>

<style>
.main-layout {
  padding: 70px 0 10px;
}
.inputs-talbe-row::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.inputs-talbe-row::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #999;
}
.inputs-talbe-row::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #EDEDED;
}
</style>
