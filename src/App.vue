<template>
	<div id="app">
		<v-nav></v-nav>
		<Layout class="main-layout">
			<router-view></router-view>
		</Layout>
		<v-footer></v-footer>
		<v-utiltes></v-utiltes>
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
			isDestroyed: true,
		}
	},
	created: function () {
		this.$Spin.show();
	},
	mounted: function (){
		document.onkeydown = (ev) => {
			var ev = ev || event;
			var thisHref = window.location.href;
			if (ev.ctrlKey && ev.keyCode == 116) {
			} else if (ev.keyCode == 116) {
				var isHome = /.*\/jdweb\/?$/;
				if (!isHome.test(thisHref)) {
					ev.preventDefault();
					var isGoHome = confirm("刷新将跳转首页，是否前往？");
					isGoHome
					? this.$router.push('/jdweb/')
					: this.$router.go(1)
					return false;
				}
			}
		}
	},
	beforeUpdate: function () {
		this.$Spin.hide();
	}
}
</script>

<style>

.main-layout {
	padding: 70px 0 10px;
}

</style>
