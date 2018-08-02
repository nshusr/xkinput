<template>
	<div>
		<Card class="home-top-card" :bordered="false">
			<Row class="home-top">
				<Carousel class="main-carousel" :autoplay="true" :loop="true"  :autoplay-speed="10000">
					<CarouselItem v-for="scheme in schemes" :key="scheme.name">
						<Row type="flex" justify="center" align="middle">
							<Card class="main-card">
								<strong slot="title">{{scheme.name}}</strong>
								<!-- <a slot="extra" :href="scheme.url" target="_blank">获取</a> -->
								<Button slot="extra" type="primary" :to="scheme.url" target="_blank">获取</Button>
								<div>
									<Row type="flex" justify="center">
										<Col span="6" class="logo">
											<Row type="flex" justify="center" align="middle">
												<img width="48" height="48" :src="scheme.logo" :alt="scheme.name">
											</Row>
										</Col>
										<Col span="18" class="schemeTags">
											<Row type="flex" justify="center" align="middle">
												<Tag type="dot" v-for="items in scheme.propagandaItem" :key="items.item">
													{{items.item}}
												</Tag>
											</Row>
										</Col>
									</Row>
								</div>
							</Card>
						</Row>
					</CarouselItem>
				</Carousel>
				<div class="mask"></div>
				<img :src="xkbg" alt="" class="xkbg">
				<img :src="xkbg" alt="" class="xkbg" id="xkbgRotate">
			</Row>
		</Card>
		<Layout>
			<Content class="home-content">
				<v-inputs></v-inputs>
				<Card>
					<h4 slot="title">键道6打字效果</h4>
					<small slot="extra">@别打脸脸</small>
					<img :src="inputsImg" alt="键道6打字效果">
				</Card>
				<Card>
					<h4 slot="title">我的输入法之梦</h4>
					<small slot="extra">吅吅大山</small>
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
				</Card>
			</Content>
		</Layout>
	</div>
</template>

<script>
import $ from 'jquery'
import Inputs from '../Inputs/Inputs'
export default {
	name: 'Home',
	data () {
		return {
			schemes: [
				{
					logo: require('../../assets/jd.ico'),
					name: "键道6",
					url: 'https://gitee.com/nmlixa/Rime_JD',
					propagandaItem: [
						{'item': '200个两键上屏单字'},
						{'item': '2000个三键上屏单字'},
						{'item': '60+％的左右击键率'},
						{'item': '活跃的词库维护平台'},
						{'item': '21键位双拼'},
						{'item': '0.4％的低重音率'},
						{'item': '多平台无缝使用'},
						{'item': '超高频易记简词，大大缩短码长'},
					],
					propagandaIndex: '',

				},
				{
					logo: require('../../assets/star.png'),
					name: "两笔",
					url: 'https://gitee.com/morler/rime_xklb',
					propagandaItem: [
						{'item': '提笔忘字学两笔'},
						{'item': '离散高，码长短'},
					],
					propagandaIndex: '',

				},
				{
					logo: require('../../assets/star.png'),
					name: "一笔",
					url: 'https://gitee.com/dzyht/rime_xkybd',
					propagandaItem: [
						{'item': '招募广告词'},
					],
					propagandaIndex: '',

				},
				{
					logo: require('../../assets/star.png'),
					name: "一道",
					url: 'https://gitee.com/dzyht/rime_xkybd',
					propagandaItem: [
						{'item': '招募广告词'}
					],
					propagandaIndex: '',

				},
				{
					logo: require('../../assets/star.png'),
					name: "魔道",
					url: 'https://gitee.com/dzyht/rime_xkybd',
					propagandaItem: [
						{'item': '招募广告词'}
					],
					propagandaIndex: '',

				},
			],
			inputsImg: require('../../assets/inputs.gif'),
			xkbg: require('../../assets/starbg.jpg'),
		}
	},
	components: {
		'v-inputs': Inputs
	}
}
</script>

<style lang="less">
.home-top-card {
	border-radius: 0 0 3px 3px;
	margin-bottom: 5px;
	overflow: hidden;
	.ivu-card-body {
		padding: 0;
	}
}
.home-top {
	width: 100%;
	position: relative;
	overflow: hidden;
	background: #000;
}
.home-content {
	margin: 0 20px;
	@media screen and(min-width: 768px) {
		margin: 0 8%;
	}
}
.mask {
	width: 100%;
	height: 400px;
	background: rgba(0,0,0,.5);
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
}
.xkbg {
	width: 100%;
	position: absolute;
	top: -20px;
	left: 0;
	z-index: 1;
}
#xkbgRotate {
	width: 200%;
	height: auto;
	animation: rotate 300s infinite linear;
	top: -45%;
	left: -45%;
	@media screen and (min-width: 768px) {
		top: -70%;
		left: -50%;
	}
}
.main-carousel {
	margin: -5px 0 0;
	z-index: 3;
	.Carousel__container {
		height: 330px;
	}
}
.main-card {
	width: 500px;
	height: 260px;
	margin: 65px 8% 65px;
	z-index: 5;
	overflow: hidden;
	.logo {
		text-align: center;
		>div {
			height: 100%;
			>img {
				height: 48px;
			}
		}
	}
	.ivu-card-extra {
		top: 5px;
	}
	.schemeTags {
		text-align: center;
		padding: 25px 0;
	}
}

@keyframes rotate {
	form {
		transform: rotate(0)
	}
	to {
		transform: rotate(360deg)
	}
}
</style>
