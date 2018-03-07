<template>
	<div :style="bg">
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
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			},
			bgcolor: {
				backgroundColor: 'rgba(0, 0, 0, 0.4)'
			}
		}
	},
	mounted: function (){
		
	}
}
</script>

<style>

</style>
