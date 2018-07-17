<template>
	<div class="mainbg" :style="bg">
		<div :style="bgcolor" class="container-fluid">
			<v-nav></v-nav>
			<router-view></router-view>
			<v-footer></v-footer>
			<v-utiltes></v-utiltes>
		</div>
	</div>
</template>

<script>
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Utiltes from './components/Utilites/Utilites'
export default {
	name: 'app',
	components: {
		'v-nav': Nav,
		'v-footer': Footer,
		'v-utiltes': Utiltes
	},
	data () {
		return {
			bg: {
				backgroundImage: 'url('+ require('./assets/background.jpg') + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundAttachment: 'fixed'
			},
			bgcolor: {
				backgroundColor: 'rgba(0, 0, 0, 0.4)'
			}
		}
	},
	mounted: function (){
		document.onkeydown = (ev) => {
			var ev = ev || event;
			var thisHref = window.location.href;
			if (ev.ctrlKey && ev.keyCode == 116) {
				 thisHref = 'http://localhost:8080/jdweb/dist/Tools/Contribution';
			} else if (ev.keyCode == 116) {
				var isHome = /.*\/jdweb\/dist$/;
				if (!isHome.test(thisHref)) {
					ev.preventDefault();
					var isGoHome = confirm("刷新将跳转首页，是否前往？");
					isGoHome && this.$router.push('/jdweb/dist');
					return false;
				} else {
				 	thisHref = 'http://localhost:8080/jdweb/dist/Tools/Contribution';
				}
			}
		}
	}
}
</script>

<style>
.mainbg {
	background-size: cover;
}
</style>
