<template>
	<div class="header">
		<div class="row top-title">
			<hr class="col title-hr">
			<h1 class="text-white ml-2 mr-2">{{logo}}</h1>
			<hr class="col title-hr">
		</div>
		<div class="text-center m-3">
			<img :src="logoimg" class="logo" alt="Logo">
			<br>
			<router-link class="btn btn-light" to="../Download">立即获取</router-link>
		</div>
		<div class="text-center">
			<img :src="propaganda" alt="键道6，一代变迁。">
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data () {
		return {
			logo: '星空键道',
            logoimg: require('../../assets/jd.ico'),
			propaganda: require('../../assets/propaganda.png'),
		}
	},
	methods: {
		
	},
	mounted: function() {
		var visualWidth = document.documentElement.clientWidth || document.body.clientWidth;
		console.log(visualWidth)
		if (visualWidth < 750){
			this.propaganda = require('../../assets/propaganda_moblie.png');
		}
	},
	components: {
		
	}
}
</script>

<style>
.bg-alpha {
	background: rgba(0,0,0,0);
	color: white;
}
.top-title {
	width: 75%;
	margin: 5px auto;
}
h1 {
	font-size: 25px;
}
.title-hr {
	border-top: 1px solid skyblue;
}
</style>

