<template>
	<div>
		<Card class='home-top-card' :bordered='false'>
			<Row class='home-top'>
				<Carousel class='main-carousel' :autoplay='true'  :autoplay-speed='10000'>
					<CarouselItem v-for='scheme in schemes' :key='scheme.name'>
						<Row type='flex' justify='center' align='middle'>
							<Card class='main-card'>
								<strong slot='title'>{{scheme.name}}</strong>
								<Button slot='extra' type='primary' @click="downModalToggle(scheme)" target='_blank'>获取</Button>
								<div>
									<Row type='flex' justify='center'>
										<Col span='6' class='logo'>
											<Row type='flex' justify='center' align='middle'>
												<img width='48' height='48' :src='scheme.logo' :alt='scheme.name'>
											</Row>
										</Col>
										<Col span='18' class='schemeTags'>
											<Row type='flex' justify='center' align='middle'>
												<Tag type='dot' v-for='items in scheme.propagandaItem' :key='items.item'>
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
				<div class='mask'></div>
				<img src='./../../assets/starbg.jpg' class='xkbg'>
				<img src='./../../assets/starbg.jpg' class='xkbg' id='xkbgRotate'>
			</Row>
		</Card>
     <Modal v-model="downModal.isShow"
            :title="downModal.name"
            @on-ok="downModal.isShow=false">
        <Row type="flex" justify='center' align='middle'>
          <Card class="down-modal" v-for="item in downModal.data" :key="item.name"
                :style="{minWidth: '150px'}">
            <p slot="title">{{item.name}}</p>
            <Button type='primary' :to="item.url" target="_blank">获取</Button>
          </Card>
        </Row>
    </Modal>
		<Layout>
			<Content class='home-content'>
				<v-inputs></v-inputs>
				<Card class='inputs-card'>
					<h4 slot='title'>键道6打字效果</h4>
					<small slot='extra'>@别打脸脸</small>
					<img src='./../../assets/inputs.gif' alt='键道6打字效果'>
				</Card>
				<Card>
					<h4 slot='title'>我的输入法之梦</h4>
					<small slot='extra'>吅吅大山</small>
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
import Inputs from '../Inputs/Inputs';
export default {
  name: 'Home',
  data() {
    return {
      downModal: {
        isShow: false,
        name: '',
        data: []
      },
      schemes: [
        {
          logo: require('../../assets/jd.png'),
          name: '键道6',
          item: [
            {
              name: 'Rime',
              url: 'https://gitee.com/nshu/Rime_JD'
            },
            {
              name: '小小',
              url: 'https://gitee.com/thxnder/xxjd'
            }
          ],
          propagandaItem: [
            { item: '200个两键上屏单字' },
            { item: '2000个三键上屏单字' },
            { item: '60+％的左右击键率' },
            { item: '活跃的词库维护平台' },
            { item: '21键位双拼' },
            { item: '0.4％的低重音率' },
            { item: '多平台无缝使用' },
            { item: '超高频易记简词，大大缩短码长' }
          ],
          propagandaIndex: ''
        },
        {
          logo: require('../../assets/star.png'),
          name: '两笔',
          item: [
            {
              name: 'Rime',
              url: 'https://gitee.com/morler/rime_xklb'
            }
          ],
          propagandaItem: [
            { item: '离散强，重码少' },
            { item: '打词打单两相宜' }
          ],
          propagandaIndex: ''
        },
        {
          logo: require('../../assets/star.png'),
          name: '一笔',
          item: [
            {
              name: 'Rime',
              url: 'https://gitee.com/dzyht/rime_xkybd'
            }
          ],
          propagandaItem: [
            { item: '易上手，双拼方案结构简单' },
            { item: '无字根' },
            { item: '进可双拼加形，退可纯双拼' },
          ],
          propagandaIndex: ''
        },
        {
          logo: require('../../assets/star.png'),
          name: '一道',
          item: [
            {
              name: 'Rime',
              url: 'https://gitee.com/dzyht/rime_xkybd'
            }
          ],
          propagandaItem: [
            { item: '优化手感：飞键增加' },
            { item: '结合一笔（双拼）和键道（笔形码），具有双方优点' },
          ],
          propagandaIndex: ''
        },
        // {
        //   logo: require('../../assets/star.png'),
        //   name: '魔道',
        //   item: [
        //     {
        //       name: 'Rime',
        //       url: 'https://gitee.com/dzyht/rime_xkybd'
        //     }
        //   ],
        //   propagandaItem: [
        //     { item: '一笔（双拼）结合 键道（笔形）的一个民间产物' }
        //   ],
        //   propagandaIndex: ''
        // }
      ]
    };
  },
  methods: {
    downModalToggle (scheme) {
      this.downModal.name = scheme.name;
      this.downModal.data = scheme.item;
      this.downModal.isShow = true;
    }
  },
  components: {
    'v-inputs': Inputs
  }
};
</script>

<style lang='less'>
.down-modal .ivu-card-body {
  display: flex;
  justify-content: center;
}
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
  background: rgba(0, 0, 0, 0.5);
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
    > div {
      height: 100%;
      > img {
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

.inputs-card {
  overflow: hidden;
}

@keyframes rotate {
  form {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
