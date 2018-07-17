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
			if (ev.ctrlKey && ev.keyCode == 116) {
				window.location.href = 'http://localhost:8080/jdweb/dist/Tools/Contribution';
			} else if (ev.keyCode == 116) {
				var isGoHome = confirm("刷新将跳转首页，是否前往？");
				if (isGoHome) {
					this.$router.push('/jdweb/dist');
				}
				ev.preventDefault();
				return false;
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
