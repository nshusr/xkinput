<template>
	<div id="content-top">
		<div>
			<div class="row top-title">
				<hr class="col title-hr">
				<h1 class="text-white ml-2 mr-2" style="font-size: 1.5em">{{logo}}</h1>
				<hr class="col title-hr">
			</div>
			<div class="text-center m-3">
				<img :src="logoimg" class="logo" alt="Logo">
				<br>
				<router-link class="btn btn-light text-secondary mt-3" to="/rime_jd_web/Download">立即获取</router-link>
			</div>
			<div class="text-center m-5">
				<img class="parpaganda-width" :src="propaganda" :alt="propagandaLogo">
			</div>
		</div>
		<div id="propaganda" class="carousel mt-4 p-4 slide bt row content-alpha content-carousel-shadow text-white text-center" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					顶功输入法
				</div>
				<div class="carousel-item" v-for="items in propagandaItem">
					{{ items.item }}
				</div>
				<a class="carousel-control-prev" href="#propaganda" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#propaganda" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
		<div class="row content-alpha">
			<div class="container mt-2">
				<v-inputs></v-inputs>
				<blockquote class="blockquote">
					<p class="lead text-light">键道6打字效果</p>
				</blockquote>
				<div class="text-center bg-white rounded">
					<img :src="inputsImg" class="mw-100" alt="键道6打字效果">
				</div>
				<blockquote class="blockquote">
					<footer class="blockquote-footer">
						<cite>别打脸脸</cite>
					</footer>
				</blockquote>
				<blockquote class="blockquote">
					<p class="lead text-light">我的输入法之梦</p>
				</blockquote>
				<div class="p-3 mb-3 rounded bg-white">
					<p>此岸是双拼，彼岸是双拼加形</p>
					<p>键道，将使你成为一个巨人，左脚此岸，右脚彼岸</p>
					<p>大风越狠，我心越荡</p>
					<p>踏着sysy的节拍</p>
					<p>踩着sb，syb，syxb之梦</p>
					<p>pipipapa,我心不害怕</p>
					<p>pipipapa,无所谓扰乱我</p>
					<p>你看我在勇敢的微笑</p>
					<p>你看我在勇敢的打出心中的文字啊</p>
					<p>是你吗？键道</p>
					<p>会给我一扇心房，让我勇敢的前行</p>
					<p>是你啊，键道</p>
					<p>会给我一扇灯窗</p>
					<p>让我心中无所畏惧</p>
					<p>打出心中勇敢的文字</p>
					<p>pipipapa,我的骄傲放纵</p>
					<p>你扰不乱我纯净花园</p>
					<p>你毁不灭我尽头的展望</p>
					<p>键道，让我勇敢的微笑</p>
					<p>键道，让我勇敢的挥手</p>
					<p>我的heart，在sysy的小溪中流淌</p>
					<p>我的emotion，在sysy的洪流中放纵</p>
					<p>我的thought，在syxb中雕琢</p>
					<p>我的wisdom，在syb中激发</p>
				</div>
				<blockquote class="blockquote">
					<footer class="blockquote-footer">
						<cite>吅吅大山</cite>
					</footer>
				</blockquote>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import Inputs from '../Inputs/Inputs'
export default {
	name: 'Home',
	data () {
		return {
			logo: '星空键道',
			logoimg: require('../../assets/jd.ico'),
			propagandaLogo: '键道6，一代变迁。',
			propaganda: require('../../assets/propaganda.png'),
			propagandaItem: [
				{'item': '200个两键上屏单字'},
				{'item': '2000个三键上屏单字'},
				{'item': '60+％的左右击键率'},
				{'item': '活跃的词库维护平台'},
				{'item': '21键位双拼'},
				{'item': '0.4％的低重音率'},
				{'item': '多平台无缝使用'}
			],
			propagandaIndex: '',
			inputsImg: require('../../assets/inputs.gif')
		}
	},
	mounted: function() {
		var visualWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (visualWidth < 750){
			this.propaganda = require('../../assets/propaganda_moblie.png');
		}
		for (let x in this.propagandaItem){
			this.propagandaIndex = x;
		}
		$(window).scroll(function (){
			if ($(window).scrollTop() >= 200){
				$('#content-top').addClass('content-top');
			} else {
				$('#content-top').removeClass('content-top');
			}
		})
	},
	components: {
		'v-inputs': Inputs
	}
}
</script>

<style>
.content-top {
	margin-top: 80px;
}
.bg-alpha {
	background: rgba(0,0,0,0);
	color: white;
}
.top-title {
	width: 75%;
	margin: 5px auto !important;
}
h1 {
	font-size: 25px;
}
.title-hr {
	border-top: 1px solid skyblue;
}
@media (max-width: 576px) {
	.parpaganda-width{
		width: 100%;
	}
}
@media (max-width: 992px) {
	.gitee_widget_fix {
		z-index: 0 !important;
		opacity: 0.2;
	}
}
.content-alpha {
	background: rgba(255, 255, 255, 0.4);
}
.content-carousel-shadow {
	background: rgba(255, 255, 255, 0.6);
	box-shadow: 0 0 100px white;
}
</style>