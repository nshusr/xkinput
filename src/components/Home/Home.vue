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
				<div id='starsbg'></div>
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
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
            },
            {
              name: '多多',
              url: 'http://daniushuangpin.ys168.com'
            },
            {
              name: 'Fcitx-rime(Linux)',
              url: `https://${process.env.BASE_URL}public/installJDL.sh`
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
            },
            {
              name: '多多',
              url: 'http://daniushuangpin.ys168.com'
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
            },
            {
              name: '多多',
              url: 'http://daniushuangpin.ys168.com'
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

<style lang='scss'>
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

#starsbg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1853px 1000px #FFF , 530px 289px #FFF , 1745px 1810px #FFF , 879px 196px #FFF , 1722px 1281px #FFF , 18px 1407px #FFF , 785px 947px #FFF , 68px 220px #FFF , 688px 1111px #FFF , 320px 528px #FFF , 777px 1078px #FFF , 914px 297px #FFF , 1618px 469px #FFF , 1489px 176px #FFF , 141px 862px #FFF , 1801px 1221px #FFF , 838px 1079px #FFF , 815px 1841px #FFF , 883px 212px #FFF , 1218px 1234px #FFF , 1996px 1921px #FFF , 1986px 1930px #FFF , 1532px 893px #FFF , 1941px 1218px #FFF , 1991px 1475px #FFF , 1557px 1071px #FFF , 314px 732px #FFF , 297px 281px #FFF , 13px 590px #FFF , 1006px 209px #FFF , 83px 1175px #FFF , 1638px 280px #FFF , 605px 516px #FFF , 678px 206px #FFF , 1604px 1208px #FFF , 608px 1321px #FFF , 1520px 1648px #FFF , 1193px 1489px #FFF , 915px 374px #FFF , 336px 445px #FFF , 513px 1130px #FFF , 1440px 1615px #FFF , 168px 1499px #FFF , 410px 1948px #FFF , 876px 543px #FFF , 1455px 1074px #FFF , 1285px 1761px #FFF , 1953px 1761px #FFF , 1108px 173px #FFF , 44px 809px #FFF , 1203px 490px #FFF , 761px 865px #FFF , 1987px 1263px #FFF , 339px 1280px #FFF , 876px 539px #FFF , 451px 129px #FFF , 1163px 253px #FFF , 129px 895px #FFF , 792px 1177px #FFF , 783px 758px #FFF , 1626px 1191px #FFF , 1661px 456px #FFF , 697px 1030px #FFF , 216px 1003px #FFF , 1492px 72px #FFF , 1953px 1027px #FFF , 1509px 1446px #FFF , 1116px 1153px #FFF , 1653px 1739px #FFF , 1806px 1454px #FFF , 245px 1846px #FFF , 996px 353px #FFF , 372px 285px #FFF , 242px 940px #FFF , 1420px 1469px #FFF , 792px 512px #FFF , 701px 723px #FFF , 1437px 1532px #FFF , 46px 1981px #FFF , 1436px 1px #FFF , 1591px 1380px #FFF , 1409px 343px #FFF , 864px 1591px #FFF , 1569px 906px #FFF , 816px 466px #FFF , 1562px 1413px #FFF , 1064px 998px #FFF , 53px 1697px #FFF , 156px 1330px #FFF , 1998px 1689px #FFF , 991px 1801px #FFF , 356px 1180px #FFF , 998px 352px #FFF , 1897px 1187px #FFF , 815px 1441px #FFF , 191px 1355px #FFF , 146px 1155px #FFF , 193px 1627px #FFF , 1941px 1475px #FFF , 771px 586px #FFF , 1126px 1303px #FFF , 1044px 1827px #FFF , 958px 741px #FFF , 579px 178px #FFF , 524px 1720px #FFF , 496px 1765px #FFF , 702px 1210px #FFF , 284px 1175px #FFF , 932px 449px #FFF , 15px 1128px #FFF , 436px 1352px #FFF , 1979px 842px #FFF , 749px 193px #FFF , 1723px 507px #FFF , 24px 1338px #FFF , 901px 150px #FFF , 1181px 559px #FFF , 367px 1486px #FFF , 1172px 1468px #FFF , 1487px 1007px #FFF , 1280px 1849px #FFF , 1517px 582px #FFF , 1193px 795px #FFF , 913px 775px #FFF , 1980px 93px #FFF , 164px 1561px #FFF , 235px 1640px #FFF , 331px 591px #FFF , 1086px 736px #FFF , 875px 581px #FFF , 1765px 658px #FFF , 1172px 59px #FFF , 1219px 1090px #FFF , 584px 596px #FFF , 1602px 905px #FFF , 152px 576px #FFF , 1293px 586px #FFF , 1860px 1705px #FFF , 614px 1331px #FFF , 262px 898px #FFF , 1747px 832px #FFF , 780px 201px #FFF , 904px 1677px #FFF , 1551px 204px #FFF , 1578px 1757px #FFF , 643px 663px #FFF , 1761px 1395px #FFF , 654px 1296px #FFF , 1600px 955px #FFF , 884px 843px #FFF , 585px 1562px #FFF , 1690px 905px #FFF , 1699px 473px #FFF , 420px 1992px #FFF , 455px 958px #FFF , 1627px 398px #FFF , 721px 516px #FFF , 1288px 1311px #FFF , 513px 855px #FFF , 1140px 1815px #FFF , 204px 1007px #FFF , 1476px 870px #FFF , 1517px 1632px #FFF , 1798px 459px #FFF , 852px 1208px #FFF , 1573px 1698px #FFF , 359px 1578px #FFF , 316px 1155px #FFF , 63px 263px #FFF , 588px 1433px #FFF , 692px 208px #FFF , 212px 568px #FFF , 1750px 330px #FFF , 1402px 428px #FFF , 125px 977px #FFF , 1754px 323px #FFF , 1038px 1384px #FFF , 1516px 323px #FFF , 1418px 805px #FFF , 1434px 1762px #FFF , 611px 1450px #FFF , 1453px 1684px #FFF , 1694px 1724px #FFF , 139px 357px #FFF , 268px 1238px #FFF , 1663px 936px #FFF , 1087px 112px #FFF , 1477px 889px #FFF , 672px 614px #FFF , 1552px 1677px #FFF , 344px 1440px #FFF , 1509px 915px #FFF , 1142px 753px #FFF , 1618px 1588px #FFF , 636px 1218px #FFF , 1625px 589px #FFF , 1539px 636px #FFF , 39px 1474px #FFF , 588px 5px #FFF , 1222px 693px #FFF , 1126px 258px #FFF , 1163px 679px #FFF , 1579px 1247px #FFF , 1364px 983px #FFF , 1251px 1606px #FFF , 1575px 447px #FFF , 431px 1033px #FFF , 622px 617px #FFF , 1900px 671px #FFF , 537px 370px #FFF , 444px 1872px #FFF , 170px 880px #FFF , 1194px 543px #FFF , 91px 704px #FFF , 1710px 213px #FFF , 1980px 1666px #FFF , 370px 845px #FFF , 336px 910px #FFF , 493px 375px #FFF , 1611px 387px #FFF , 690px 1761px #FFF , 1681px 1010px #FFF , 1444px 1547px #FFF , 1250px 691px #FFF , 1268px 122px #FFF , 1937px 284px #FFF , 1193px 740px #FFF , 1691px 476px #FFF , 933px 770px #FFF , 1189px 1862px #FFF , 1403px 1148px #FFF , 317px 1540px #FFF , 693px 1384px #FFF , 1556px 1947px #FFF , 1219px 1840px #FFF , 1935px 242px #FFF , 903px 882px #FFF , 361px 89px #FFF , 914px 977px #FFF , 1838px 894px #FFF , 1338px 1345px #FFF , 705px 356px #FFF , 348px 123px #FFF , 532px 1404px #FFF , 616px 173px #FFF , 1229px 1894px #FFF , 820px 1866px #FFF , 1757px 48px #FFF , 516px 131px #FFF , 1717px 747px #FFF , 1206px 278px #FFF , 1400px 1858px #FFF , 552px 962px #FFF , 882px 701px #FFF , 194px 1557px #FFF , 268px 1715px #FFF , 1158px 1929px #FFF , 970px 1594px #FFF , 301px 1296px #FFF , 1799px 1403px #FFF , 1789px 1091px #FFF , 1257px 1250px #FFF , 733px 1177px #FFF , 1121px 702px #FFF , 818px 1394px #FFF , 1389px 500px #FFF , 1171px 1369px #FFF , 644px 903px #FFF , 348px 1264px #FFF , 282px 828px #FFF , 908px 503px #FFF , 1101px 500px #FFF , 197px 1867px #FFF , 974px 1542px #FFF , 1270px 326px #FFF , 969px 1675px #FFF , 697px 857px #FFF , 1241px 187px #FFF , 1497px 830px #FFF , 1540px 1331px #FFF , 1607px 601px #FFF , 212px 878px #FFF , 22px 1543px #FFF , 415px 718px #FFF , 557px 1248px #FFF , 7px 824px #FFF , 1403px 1147px #FFF , 942px 93px #FFF , 1439px 1174px #FFF , 1421px 787px #FFF , 708px 497px #FFF , 971px 303px #FFF , 635px 1932px #FFF , 1074px 1216px #FFF , 1971px 630px #FFF , 708px 998px #FFF , 265px 334px #FFF , 621px 1342px #FFF , 616px 1107px #FFF , 1761px 432px #FFF , 61px 1002px #FFF , 350px 1685px #FFF , 1794px 1088px #FFF , 675px 391px #FFF , 489px 1002px #FFF , 1853px 1332px #FFF , 1979px 1805px #FFF , 1549px 847px #FFF , 550px 1046px #FFF , 1590px 1279px #FFF , 409px 1252px #FFF , 510px 1132px #FFF , 1634px 746px #FFF , 647px 1886px #FFF , 257px 1564px #FFF , 323px 38px #FFF , 1556px 1946px #FFF , 1615px 1788px #FFF , 887px 1369px #FFF , 1293px 866px #FFF , 471px 725px #FFF , 410px 164px #FFF , 527px 1148px #FFF , 244px 874px #FFF , 948px 205px #FFF , 1664px 1757px #FFF , 774px 68px #FFF , 701px 1065px #FFF , 914px 1456px #FFF , 1469px 1847px #FFF , 310px 1744px #FFF , 332px 1183px #FFF , 1343px 198px #FFF , 419px 1363px #FFF , 1488px 980px #FFF , 1024px 1538px #FFF , 1417px 1880px #FFF , 1001px 425px #FFF , 1867px 1222px #FFF , 1757px 1034px #FFF , 807px 129px #FFF , 1436px 1119px #FFF , 742px 1735px #FFF , 1833px 1401px #FFF , 1104px 1044px #FFF , 1264px 4px #FFF , 632px 1671px #FFF , 498px 1018px #FFF , 1093px 698px #FFF , 711px 392px #FFF , 361px 277px #FFF , 1771px 314px #FFF , 1785px 1032px #FFF , 1470px 1581px #FFF , 138px 339px #FFF , 1945px 1890px #FFF , 903px 718px #FFF , 454px 131px #FFF , 1856px 1256px #FFF , 1114px 278px #FFF , 945px 113px #FFF , 1829px 1047px #FFF , 909px 175px #FFF , 148px 451px #FFF , 869px 351px #FFF , 1086px 1974px #FFF , 1368px 197px #FFF , 148px 39px #FFF , 766px 242px #FFF , 1147px 1834px #FFF , 1167px 61px #FFF , 1518px 1234px #FFF , 1719px 650px #FFF , 1105px 1955px #FFF , 254px 319px #FFF , 1160px 487px #FFF , 912px 1345px #FFF , 371px 758px #FFF , 993px 1521px #FFF , 524px 1687px #FFF , 421px 180px #FFF , 579px 1545px #FFF , 526px 680px #FFF , 322px 185px #FFF , 1881px 4px #FFF , 1793px 350px #FFF , 1631px 1641px #FFF , 1152px 206px #FFF , 1340px 1461px #FFF , 748px 1821px #FFF , 690px 207px #FFF , 1969px 436px #FFF , 1642px 1251px #FFF , 926px 1967px #FFF , 1029px 1634px #FFF , 930px 554px #FFF , 757px 451px #FFF , 1783px 1564px #FFF , 397px 1993px #FFF , 989px 767px #FFF , 101px 1374px #FFF , 1731px 1965px #FFF , 334px 1043px #FFF , 710px 1206px #FFF , 220px 191px #FFF , 1535px 1957px #FFF , 1203px 111px #FFF , 1067px 573px #FFF , 1411px 1898px #FFF , 285px 1626px #FFF , 1414px 1301px #FFF , 1775px 267px #FFF , 1529px 367px #FFF , 704px 1688px #FFF , 10px 1292px #FFF , 707px 852px #FFF , 1168px 726px #FFF , 850px 1006px #FFF , 127px 1726px #FFF , 1207px 823px #FFF , 1995px 481px #FFF , 1177px 567px #FFF , 1226px 1859px #FFF , 908px 853px #FFF , 475px 366px #FFF , 1137px 1467px #FFF , 748px 1305px #FFF , 450px 1647px #FFF , 646px 1851px #FFF , 1957px 1996px #FFF , 906px 888px #FFF , 1795px 1683px #FFF , 265px 1306px #FFF , 258px 1486px #FFF , 477px 63px #FFF , 577px 381px #FFF , 1437px 1960px #FFF , 284px 1363px #FFF , 278px 690px #FFF , 1438px 1734px #FFF , 1889px 1885px #FFF , 1306px 590px #FFF , 1767px 1677px #FFF , 1544px 1968px #FFF , 590px 1663px #FFF , 1062px 1131px #FFF , 1223px 347px #FFF , 1522px 50px #FFF , 301px 742px #FFF , 1480px 439px #FFF , 573px 948px #FFF , 1260px 1655px #FFF , 579px 885px #FFF , 631px 1278px #FFF , 1050px 1967px #FFF , 337px 157px #FFF , 14px 1943px #FFF , 1940px 535px #FFF , 1998px 1104px #FFF , 422px 492px #FFF , 166px 663px #FFF , 1544px 1683px #FFF , 950px 9px #FFF , 729px 1748px #FFF , 587px 642px #FFF , 203px 380px #FFF , 1500px 823px #FFF , 987px 315px #FFF , 1809px 1856px #FFF , 1004px 710px #FFF , 59px 1084px #FFF , 614px 216px #FFF , 1812px 1059px #FFF , 601px 1095px #FFF , 223px 66px #FFF , 1901px 529px #FFF , 112px 62px #FFF , 1492px 526px #FFF , 106px 460px #FFF , 791px 728px #FFF , 541px 330px #FFF , 975px 968px #FFF , 1012px 960px #FFF , 1619px 636px #FFF , 1841px 1460px #FFF , 1942px 667px #FFF , 78px 182px #FFF , 1626px 792px #FFF , 1356px 1729px #FFF , 1580px 1636px #FFF , 847px 773px #FFF , 1530px 172px #FFF , 259px 914px #FFF , 1652px 1187px #FFF , 812px 1320px #FFF , 909px 1130px #FFF , 836px 1830px #FFF , 21px 1188px #FFF , 1542px 173px #FFF , 1057px 1360px #FFF , 1594px 161px #FFF , 1481px 1072px #FFF , 1986px 1100px #FFF , 115px 939px #FFF , 1371px 279px #FFF , 1699px 1737px #FFF , 690px 191px #FFF , 1347px 698px #FFF , 1169px 99px #FFF , 1983px 1489px #FFF , 1759px 552px #FFF , 1429px 1806px #FFF , 1889px 1492px #FFF , 205px 1201px #FFF , 1686px 1643px #FFF , 1088px 958px #FFF , 699px 1268px #FFF , 1685px 1657px #FFF , 1329px 1374px #FFF , 1689px 1724px #FFF , 959px 1705px #FFF , 119px 747px #FFF , 1802px 1488px #FFF , 771px 1597px #FFF , 161px 129px #FFF , 1879px 1509px #FFF , 321px 819px #FFF , 1691px 1935px #FFF , 1218px 1248px #FFF , 1517px 780px #FFF , 680px 173px #FFF , 1206px 213px #FFF , 1243px 597px #FFF , 1458px 859px #FFF , 1215px 274px #FFF , 868px 131px #FFF , 1957px 1798px #FFF , 61px 1888px #FFF , 61px 1893px #FFF , 1691px 1684px #FFF , 314px 14px #FFF , 1235px 1109px #FFF , 1727px 1731px #FFF , 557px 1651px #FFF , 1645px 303px #FFF , 1769px 1461px #FFF , 1455px 772px #FFF , 764px 1033px #FFF , 1562px 1596px #FFF , 1763px 1568px #FFF , 165px 852px #FFF , 277px 1177px #FFF , 1704px 1100px #FFF , 1097px 777px #FFF , 1074px 469px #FFF , 859px 1037px #FFF , 681px 1579px #FFF , 689px 1928px #FFF , 681px 1906px #FFF , 1973px 1440px #FFF , 1574px 985px #FFF , 490px 821px #FFF , 393px 1564px #FFF , 527px 1333px #FFF , 1098px 849px #FFF , 1141px 388px #FFF , 692px 1359px #FFF , 517px 1510px #FFF , 202px 489px #FFF , 1833px 1144px #FFF , 389px 637px #FFF , 1974px 1224px #FFF , 873px 1181px #FFF , 1421px 1843px #FFF , 730px 1458px #FFF , 1458px 1202px #FFF , 741px 1346px #FFF , 766px 478px #FFF , 1244px 1945px #FFF , 134px 1545px #FFF , 1840px 1960px #FFF , 1313px 749px #FFF , 16px 637px #FFF , 1876px 740px #FFF , 1957px 140px #FFF , 1046px 1426px #FFF , 230px 1567px #FFF , 830px 312px #FFF , 1103px 160px #FFF , 196px 312px #FFF , 1726px 1156px #FFF , 954px 706px #FFF , 801px 1129px #FFF , 1718px 389px #FFF , 1885px 1980px #FFF , 1887px 186px #FFF , 1452px 298px #FFF , 469px 593px #FFF , 1608px 409px #FFF , 442px 346px #FFF , 190px 1422px #FFF , 375px 1430px #FFF , 452px 1523px #FFF , 5px 633px #FFF , 553px 1944px #FFF , 351px 1136px #FFF , 268px 273px #FFF , 373px 1369px #FFF , 1726px 670px #FFF , 886px 1921px #FFF , 1216px 64px #FFF , 570px 546px #FFF , 1535px 1682px #FFF , 943px 588px #FFF , 554px 1009px #FFF , 132px 633px #FFF , 1197px 594px #FFF , 1579px 1988px #FFF , 1253px 1129px #FFF , 1155px 350px #FFF , 1007px 1467px #FFF , 1072px 613px #FFF , 1130px 1485px #FFF , 1920px 1017px #FFF , 1679px 1507px #FFF , 781px 935px #FFF , 1429px 1930px #FFF , 980px 186px #FFF , 1106px 256px #FFF , 1276px 1429px #FFF , 1706px 1192px #FFF , 965px 323px #FFF , 1603px 368px #FFF , 602px 62px #FFF , 1592px 756px #FFF , 1481px 466px #FFF , 1320px 1774px #FFF , 1715px 302px #FFF , 495px 1304px #FFF , 5px 1492px #FFF , 863px 1766px #FFF , 753px 1649px #FFF , 1330px 1584px #FFF , 1622px 1555px #FFF , 1835px 880px #FFF , 831px 1926px #FFF , 1053px 1638px #FFF , 773px 711px #FFF , 932px 639px #FFF , 487px 415px #FFF , 835px 1201px #FFF , 127px 1208px #FFF , 586px 1161px #FFF , 806px 240px #FFF , 1099px 1801px #FFF , 74px 139px #FFF , 460px 252px #FFF , 34px 419px #FFF , 365px 50px #FFF , 681px 1406px #FFF , 1271px 1638px #FFF , 1481px 817px #FFF , 132px 1949px #FFF , 174px 1458px #FFF , 156px 735px #FFF , 852px 610px #FFF , 1066px 131px #FFF , 322px 1771px #FFF , 871px 1381px #FFF , 1112px 515px #FFF , 1945px 573px #FFF , 626px 1674px #FFF , 773px 1078px #FFF , 1472px 358px #FFF , 1799px 1684px #FFF , 495px 1762px #FFF , 1959px 544px #FFF , 1110px 507px #FFF , 1447px 312px #FFF , 422px 295px #FFF , 1544px 439px #FFF , 863px 1868px #FFF , 1416px 1291px #FFF , 53px 1295px #FFF , 1586px 893px #FFF , 523px 1155px #FFF , 1675px 474px #FFF , 83px 1865px #FFF , 431px 272px #FFF , 571px 579px #FFF , 1576px 1537px #FFF , 483px 813px #FFF , 654px 524px #FFF , 1514px 555px #FFF , 904px 315px #FFF , 1657px 508px #FFF , 1488px 1948px #FFF , 1665px 1387px #FFF , 237px 834px #FFF , 1467px 809px #FFF;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1853px 1000px #FFF , 530px 289px #FFF , 1745px 1810px #FFF , 879px 196px #FFF , 1722px 1281px #FFF , 18px 1407px #FFF , 785px 947px #FFF , 68px 220px #FFF , 688px 1111px #FFF , 320px 528px #FFF , 777px 1078px #FFF , 914px 297px #FFF , 1618px 469px #FFF , 1489px 176px #FFF , 141px 862px #FFF , 1801px 1221px #FFF , 838px 1079px #FFF , 815px 1841px #FFF , 883px 212px #FFF , 1218px 1234px #FFF , 1996px 1921px #FFF , 1986px 1930px #FFF , 1532px 893px #FFF , 1941px 1218px #FFF , 1991px 1475px #FFF , 1557px 1071px #FFF , 314px 732px #FFF , 297px 281px #FFF , 13px 590px #FFF , 1006px 209px #FFF , 83px 1175px #FFF , 1638px 280px #FFF , 605px 516px #FFF , 678px 206px #FFF , 1604px 1208px #FFF , 608px 1321px #FFF , 1520px 1648px #FFF , 1193px 1489px #FFF , 915px 374px #FFF , 336px 445px #FFF , 513px 1130px #FFF , 1440px 1615px #FFF , 168px 1499px #FFF , 410px 1948px #FFF , 876px 543px #FFF , 1455px 1074px #FFF , 1285px 1761px #FFF , 1953px 1761px #FFF , 1108px 173px #FFF , 44px 809px #FFF , 1203px 490px #FFF , 761px 865px #FFF , 1987px 1263px #FFF , 339px 1280px #FFF , 876px 539px #FFF , 451px 129px #FFF , 1163px 253px #FFF , 129px 895px #FFF , 792px 1177px #FFF , 783px 758px #FFF , 1626px 1191px #FFF , 1661px 456px #FFF , 697px 1030px #FFF , 216px 1003px #FFF , 1492px 72px #FFF , 1953px 1027px #FFF , 1509px 1446px #FFF , 1116px 1153px #FFF , 1653px 1739px #FFF , 1806px 1454px #FFF , 245px 1846px #FFF , 996px 353px #FFF , 372px 285px #FFF , 242px 940px #FFF , 1420px 1469px #FFF , 792px 512px #FFF , 701px 723px #FFF , 1437px 1532px #FFF , 46px 1981px #FFF , 1436px 1px #FFF , 1591px 1380px #FFF , 1409px 343px #FFF , 864px 1591px #FFF , 1569px 906px #FFF , 816px 466px #FFF , 1562px 1413px #FFF , 1064px 998px #FFF , 53px 1697px #FFF , 156px 1330px #FFF , 1998px 1689px #FFF , 991px 1801px #FFF , 356px 1180px #FFF , 998px 352px #FFF , 1897px 1187px #FFF , 815px 1441px #FFF , 191px 1355px #FFF , 146px 1155px #FFF , 193px 1627px #FFF , 1941px 1475px #FFF , 771px 586px #FFF , 1126px 1303px #FFF , 1044px 1827px #FFF , 958px 741px #FFF , 579px 178px #FFF , 524px 1720px #FFF , 496px 1765px #FFF , 702px 1210px #FFF , 284px 1175px #FFF , 932px 449px #FFF , 15px 1128px #FFF , 436px 1352px #FFF , 1979px 842px #FFF , 749px 193px #FFF , 1723px 507px #FFF , 24px 1338px #FFF , 901px 150px #FFF , 1181px 559px #FFF , 367px 1486px #FFF , 1172px 1468px #FFF , 1487px 1007px #FFF , 1280px 1849px #FFF , 1517px 582px #FFF , 1193px 795px #FFF , 913px 775px #FFF , 1980px 93px #FFF , 164px 1561px #FFF , 235px 1640px #FFF , 331px 591px #FFF , 1086px 736px #FFF , 875px 581px #FFF , 1765px 658px #FFF , 1172px 59px #FFF , 1219px 1090px #FFF , 584px 596px #FFF , 1602px 905px #FFF , 152px 576px #FFF , 1293px 586px #FFF , 1860px 1705px #FFF , 614px 1331px #FFF , 262px 898px #FFF , 1747px 832px #FFF , 780px 201px #FFF , 904px 1677px #FFF , 1551px 204px #FFF , 1578px 1757px #FFF , 643px 663px #FFF , 1761px 1395px #FFF , 654px 1296px #FFF , 1600px 955px #FFF , 884px 843px #FFF , 585px 1562px #FFF , 1690px 905px #FFF , 1699px 473px #FFF , 420px 1992px #FFF , 455px 958px #FFF , 1627px 398px #FFF , 721px 516px #FFF , 1288px 1311px #FFF , 513px 855px #FFF , 1140px 1815px #FFF , 204px 1007px #FFF , 1476px 870px #FFF , 1517px 1632px #FFF , 1798px 459px #FFF , 852px 1208px #FFF , 1573px 1698px #FFF , 359px 1578px #FFF , 316px 1155px #FFF , 63px 263px #FFF , 588px 1433px #FFF , 692px 208px #FFF , 212px 568px #FFF , 1750px 330px #FFF , 1402px 428px #FFF , 125px 977px #FFF , 1754px 323px #FFF , 1038px 1384px #FFF , 1516px 323px #FFF , 1418px 805px #FFF , 1434px 1762px #FFF , 611px 1450px #FFF , 1453px 1684px #FFF , 1694px 1724px #FFF , 139px 357px #FFF , 268px 1238px #FFF , 1663px 936px #FFF , 1087px 112px #FFF , 1477px 889px #FFF , 672px 614px #FFF , 1552px 1677px #FFF , 344px 1440px #FFF , 1509px 915px #FFF , 1142px 753px #FFF , 1618px 1588px #FFF , 636px 1218px #FFF , 1625px 589px #FFF , 1539px 636px #FFF , 39px 1474px #FFF , 588px 5px #FFF , 1222px 693px #FFF , 1126px 258px #FFF , 1163px 679px #FFF , 1579px 1247px #FFF , 1364px 983px #FFF , 1251px 1606px #FFF , 1575px 447px #FFF , 431px 1033px #FFF , 622px 617px #FFF , 1900px 671px #FFF , 537px 370px #FFF , 444px 1872px #FFF , 170px 880px #FFF , 1194px 543px #FFF , 91px 704px #FFF , 1710px 213px #FFF , 1980px 1666px #FFF , 370px 845px #FFF , 336px 910px #FFF , 493px 375px #FFF , 1611px 387px #FFF , 690px 1761px #FFF , 1681px 1010px #FFF , 1444px 1547px #FFF , 1250px 691px #FFF , 1268px 122px #FFF , 1937px 284px #FFF , 1193px 740px #FFF , 1691px 476px #FFF , 933px 770px #FFF , 1189px 1862px #FFF , 1403px 1148px #FFF , 317px 1540px #FFF , 693px 1384px #FFF , 1556px 1947px #FFF , 1219px 1840px #FFF , 1935px 242px #FFF , 903px 882px #FFF , 361px 89px #FFF , 914px 977px #FFF , 1838px 894px #FFF , 1338px 1345px #FFF , 705px 356px #FFF , 348px 123px #FFF , 532px 1404px #FFF , 616px 173px #FFF , 1229px 1894px #FFF , 820px 1866px #FFF , 1757px 48px #FFF , 516px 131px #FFF , 1717px 747px #FFF , 1206px 278px #FFF , 1400px 1858px #FFF , 552px 962px #FFF , 882px 701px #FFF , 194px 1557px #FFF , 268px 1715px #FFF , 1158px 1929px #FFF , 970px 1594px #FFF , 301px 1296px #FFF , 1799px 1403px #FFF , 1789px 1091px #FFF , 1257px 1250px #FFF , 733px 1177px #FFF , 1121px 702px #FFF , 818px 1394px #FFF , 1389px 500px #FFF , 1171px 1369px #FFF , 644px 903px #FFF , 348px 1264px #FFF , 282px 828px #FFF , 908px 503px #FFF , 1101px 500px #FFF , 197px 1867px #FFF , 974px 1542px #FFF , 1270px 326px #FFF , 969px 1675px #FFF , 697px 857px #FFF , 1241px 187px #FFF , 1497px 830px #FFF , 1540px 1331px #FFF , 1607px 601px #FFF , 212px 878px #FFF , 22px 1543px #FFF , 415px 718px #FFF , 557px 1248px #FFF , 7px 824px #FFF , 1403px 1147px #FFF , 942px 93px #FFF , 1439px 1174px #FFF , 1421px 787px #FFF , 708px 497px #FFF , 971px 303px #FFF , 635px 1932px #FFF , 1074px 1216px #FFF , 1971px 630px #FFF , 708px 998px #FFF , 265px 334px #FFF , 621px 1342px #FFF , 616px 1107px #FFF , 1761px 432px #FFF , 61px 1002px #FFF , 350px 1685px #FFF , 1794px 1088px #FFF , 675px 391px #FFF , 489px 1002px #FFF , 1853px 1332px #FFF , 1979px 1805px #FFF , 1549px 847px #FFF , 550px 1046px #FFF , 1590px 1279px #FFF , 409px 1252px #FFF , 510px 1132px #FFF , 1634px 746px #FFF , 647px 1886px #FFF , 257px 1564px #FFF , 323px 38px #FFF , 1556px 1946px #FFF , 1615px 1788px #FFF , 887px 1369px #FFF , 1293px 866px #FFF , 471px 725px #FFF , 410px 164px #FFF , 527px 1148px #FFF , 244px 874px #FFF , 948px 205px #FFF , 1664px 1757px #FFF , 774px 68px #FFF , 701px 1065px #FFF , 914px 1456px #FFF , 1469px 1847px #FFF , 310px 1744px #FFF , 332px 1183px #FFF , 1343px 198px #FFF , 419px 1363px #FFF , 1488px 980px #FFF , 1024px 1538px #FFF , 1417px 1880px #FFF , 1001px 425px #FFF , 1867px 1222px #FFF , 1757px 1034px #FFF , 807px 129px #FFF , 1436px 1119px #FFF , 742px 1735px #FFF , 1833px 1401px #FFF , 1104px 1044px #FFF , 1264px 4px #FFF , 632px 1671px #FFF , 498px 1018px #FFF , 1093px 698px #FFF , 711px 392px #FFF , 361px 277px #FFF , 1771px 314px #FFF , 1785px 1032px #FFF , 1470px 1581px #FFF , 138px 339px #FFF , 1945px 1890px #FFF , 903px 718px #FFF , 454px 131px #FFF , 1856px 1256px #FFF , 1114px 278px #FFF , 945px 113px #FFF , 1829px 1047px #FFF , 909px 175px #FFF , 148px 451px #FFF , 869px 351px #FFF , 1086px 1974px #FFF , 1368px 197px #FFF , 148px 39px #FFF , 766px 242px #FFF , 1147px 1834px #FFF , 1167px 61px #FFF , 1518px 1234px #FFF , 1719px 650px #FFF , 1105px 1955px #FFF , 254px 319px #FFF , 1160px 487px #FFF , 912px 1345px #FFF , 371px 758px #FFF , 993px 1521px #FFF , 524px 1687px #FFF , 421px 180px #FFF , 579px 1545px #FFF , 526px 680px #FFF , 322px 185px #FFF , 1881px 4px #FFF , 1793px 350px #FFF , 1631px 1641px #FFF , 1152px 206px #FFF , 1340px 1461px #FFF , 748px 1821px #FFF , 690px 207px #FFF , 1969px 436px #FFF , 1642px 1251px #FFF , 926px 1967px #FFF , 1029px 1634px #FFF , 930px 554px #FFF , 757px 451px #FFF , 1783px 1564px #FFF , 397px 1993px #FFF , 989px 767px #FFF , 101px 1374px #FFF , 1731px 1965px #FFF , 334px 1043px #FFF , 710px 1206px #FFF , 220px 191px #FFF , 1535px 1957px #FFF , 1203px 111px #FFF , 1067px 573px #FFF , 1411px 1898px #FFF , 285px 1626px #FFF , 1414px 1301px #FFF , 1775px 267px #FFF , 1529px 367px #FFF , 704px 1688px #FFF , 10px 1292px #FFF , 707px 852px #FFF , 1168px 726px #FFF , 850px 1006px #FFF , 127px 1726px #FFF , 1207px 823px #FFF , 1995px 481px #FFF , 1177px 567px #FFF , 1226px 1859px #FFF , 908px 853px #FFF , 475px 366px #FFF , 1137px 1467px #FFF , 748px 1305px #FFF , 450px 1647px #FFF , 646px 1851px #FFF , 1957px 1996px #FFF , 906px 888px #FFF , 1795px 1683px #FFF , 265px 1306px #FFF , 258px 1486px #FFF , 477px 63px #FFF , 577px 381px #FFF , 1437px 1960px #FFF , 284px 1363px #FFF , 278px 690px #FFF , 1438px 1734px #FFF , 1889px 1885px #FFF , 1306px 590px #FFF , 1767px 1677px #FFF , 1544px 1968px #FFF , 590px 1663px #FFF , 1062px 1131px #FFF , 1223px 347px #FFF , 1522px 50px #FFF , 301px 742px #FFF , 1480px 439px #FFF , 573px 948px #FFF , 1260px 1655px #FFF , 579px 885px #FFF , 631px 1278px #FFF , 1050px 1967px #FFF , 337px 157px #FFF , 14px 1943px #FFF , 1940px 535px #FFF , 1998px 1104px #FFF , 422px 492px #FFF , 166px 663px #FFF , 1544px 1683px #FFF , 950px 9px #FFF , 729px 1748px #FFF , 587px 642px #FFF , 203px 380px #FFF , 1500px 823px #FFF , 987px 315px #FFF , 1809px 1856px #FFF , 1004px 710px #FFF , 59px 1084px #FFF , 614px 216px #FFF , 1812px 1059px #FFF , 601px 1095px #FFF , 223px 66px #FFF , 1901px 529px #FFF , 112px 62px #FFF , 1492px 526px #FFF , 106px 460px #FFF , 791px 728px #FFF , 541px 330px #FFF , 975px 968px #FFF , 1012px 960px #FFF , 1619px 636px #FFF , 1841px 1460px #FFF , 1942px 667px #FFF , 78px 182px #FFF , 1626px 792px #FFF , 1356px 1729px #FFF , 1580px 1636px #FFF , 847px 773px #FFF , 1530px 172px #FFF , 259px 914px #FFF , 1652px 1187px #FFF , 812px 1320px #FFF , 909px 1130px #FFF , 836px 1830px #FFF , 21px 1188px #FFF , 1542px 173px #FFF , 1057px 1360px #FFF , 1594px 161px #FFF , 1481px 1072px #FFF , 1986px 1100px #FFF , 115px 939px #FFF , 1371px 279px #FFF , 1699px 1737px #FFF , 690px 191px #FFF , 1347px 698px #FFF , 1169px 99px #FFF , 1983px 1489px #FFF , 1759px 552px #FFF , 1429px 1806px #FFF , 1889px 1492px #FFF , 205px 1201px #FFF , 1686px 1643px #FFF , 1088px 958px #FFF , 699px 1268px #FFF , 1685px 1657px #FFF , 1329px 1374px #FFF , 1689px 1724px #FFF , 959px 1705px #FFF , 119px 747px #FFF , 1802px 1488px #FFF , 771px 1597px #FFF , 161px 129px #FFF , 1879px 1509px #FFF , 321px 819px #FFF , 1691px 1935px #FFF , 1218px 1248px #FFF , 1517px 780px #FFF , 680px 173px #FFF , 1206px 213px #FFF , 1243px 597px #FFF , 1458px 859px #FFF , 1215px 274px #FFF , 868px 131px #FFF , 1957px 1798px #FFF , 61px 1888px #FFF , 61px 1893px #FFF , 1691px 1684px #FFF , 314px 14px #FFF , 1235px 1109px #FFF , 1727px 1731px #FFF , 557px 1651px #FFF , 1645px 303px #FFF , 1769px 1461px #FFF , 1455px 772px #FFF , 764px 1033px #FFF , 1562px 1596px #FFF , 1763px 1568px #FFF , 165px 852px #FFF , 277px 1177px #FFF , 1704px 1100px #FFF , 1097px 777px #FFF , 1074px 469px #FFF , 859px 1037px #FFF , 681px 1579px #FFF , 689px 1928px #FFF , 681px 1906px #FFF , 1973px 1440px #FFF , 1574px 985px #FFF , 490px 821px #FFF , 393px 1564px #FFF , 527px 1333px #FFF , 1098px 849px #FFF , 1141px 388px #FFF , 692px 1359px #FFF , 517px 1510px #FFF , 202px 489px #FFF , 1833px 1144px #FFF , 389px 637px #FFF , 1974px 1224px #FFF , 873px 1181px #FFF , 1421px 1843px #FFF , 730px 1458px #FFF , 1458px 1202px #FFF , 741px 1346px #FFF , 766px 478px #FFF , 1244px 1945px #FFF , 134px 1545px #FFF , 1840px 1960px #FFF , 1313px 749px #FFF , 16px 637px #FFF , 1876px 740px #FFF , 1957px 140px #FFF , 1046px 1426px #FFF , 230px 1567px #FFF , 830px 312px #FFF , 1103px 160px #FFF , 196px 312px #FFF , 1726px 1156px #FFF , 954px 706px #FFF , 801px 1129px #FFF , 1718px 389px #FFF , 1885px 1980px #FFF , 1887px 186px #FFF , 1452px 298px #FFF , 469px 593px #FFF , 1608px 409px #FFF , 442px 346px #FFF , 190px 1422px #FFF , 375px 1430px #FFF , 452px 1523px #FFF , 5px 633px #FFF , 553px 1944px #FFF , 351px 1136px #FFF , 268px 273px #FFF , 373px 1369px #FFF , 1726px 670px #FFF , 886px 1921px #FFF , 1216px 64px #FFF , 570px 546px #FFF , 1535px 1682px #FFF , 943px 588px #FFF , 554px 1009px #FFF , 132px 633px #FFF , 1197px 594px #FFF , 1579px 1988px #FFF , 1253px 1129px #FFF , 1155px 350px #FFF , 1007px 1467px #FFF , 1072px 613px #FFF , 1130px 1485px #FFF , 1920px 1017px #FFF , 1679px 1507px #FFF , 781px 935px #FFF , 1429px 1930px #FFF , 980px 186px #FFF , 1106px 256px #FFF , 1276px 1429px #FFF , 1706px 1192px #FFF , 965px 323px #FFF , 1603px 368px #FFF , 602px 62px #FFF , 1592px 756px #FFF , 1481px 466px #FFF , 1320px 1774px #FFF , 1715px 302px #FFF , 495px 1304px #FFF , 5px 1492px #FFF , 863px 1766px #FFF , 753px 1649px #FFF , 1330px 1584px #FFF , 1622px 1555px #FFF , 1835px 880px #FFF , 831px 1926px #FFF , 1053px 1638px #FFF , 773px 711px #FFF , 932px 639px #FFF , 487px 415px #FFF , 835px 1201px #FFF , 127px 1208px #FFF , 586px 1161px #FFF , 806px 240px #FFF , 1099px 1801px #FFF , 74px 139px #FFF , 460px 252px #FFF , 34px 419px #FFF , 365px 50px #FFF , 681px 1406px #FFF , 1271px 1638px #FFF , 1481px 817px #FFF , 132px 1949px #FFF , 174px 1458px #FFF , 156px 735px #FFF , 852px 610px #FFF , 1066px 131px #FFF , 322px 1771px #FFF , 871px 1381px #FFF , 1112px 515px #FFF , 1945px 573px #FFF , 626px 1674px #FFF , 773px 1078px #FFF , 1472px 358px #FFF , 1799px 1684px #FFF , 495px 1762px #FFF , 1959px 544px #FFF , 1110px 507px #FFF , 1447px 312px #FFF , 422px 295px #FFF , 1544px 439px #FFF , 863px 1868px #FFF , 1416px 1291px #FFF , 53px 1295px #FFF , 1586px 893px #FFF , 523px 1155px #FFF , 1675px 474px #FFF , 83px 1865px #FFF , 431px 272px #FFF , 571px 579px #FFF , 1576px 1537px #FFF , 483px 813px #FFF , 654px 524px #FFF , 1514px 555px #FFF , 904px 315px #FFF , 1657px 508px #FFF , 1488px 1948px #FFF , 1665px 1387px #FFF , 237px 834px #FFF , 1467px 809px #FFF;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 462px 1817px #FFF , 424px 1983px #FFF , 1343px 1274px #FFF , 838px 1045px #FFF , 128px 747px #FFF , 239px 667px #FFF , 1383px 789px #FFF , 810px 1527px #FFF , 830px 750px #FFF , 170px 1035px #FFF , 1927px 141px #FFF , 964px 1433px #FFF , 1030px 1735px #FFF , 1686px 1531px #FFF , 1236px 530px #FFF , 868px 1787px #FFF , 1612px 1338px #FFF , 547px 1246px #FFF , 1737px 1753px #FFF , 1518px 230px #FFF , 512px 1734px #FFF , 1352px 1054px #FFF , 730px 397px #FFF , 374px 534px #FFF , 14px 1960px #FFF , 1163px 1852px #FFF , 1505px 597px #FFF , 76px 297px #FFF , 1455px 910px #FFF , 135px 1858px #FFF , 1004px 94px #FFF , 767px 230px #FFF , 1242px 1776px #FFF , 164px 833px #FFF , 1634px 1337px #FFF , 826px 1273px #FFF , 423px 672px #FFF , 1971px 655px #FFF , 1723px 606px #FFF , 1867px 485px #FFF , 38px 412px #FFF , 1085px 43px #FFF , 963px 1776px #FFF , 1318px 1980px #FFF , 1176px 1952px #FFF , 317px 202px #FFF , 141px 943px #FFF , 420px 512px #FFF , 947px 1920px #FFF , 132px 1402px #FFF , 1672px 124px #FFF , 1708px 611px #FFF , 955px 1223px #FFF , 1666px 973px #FFF , 1829px 718px #FFF , 1865px 714px #FFF , 49px 1336px #FFF , 511px 1669px #FFF , 143px 790px #FFF , 608px 112px #FFF , 889px 1151px #FFF , 1700px 302px #FFF , 319px 1005px #FFF , 1588px 1629px #FFF , 203px 1696px #FFF , 228px 161px #FFF , 1018px 146px #FFF , 6px 1347px #FFF , 284px 1401px #FFF , 337px 1138px #FFF , 759px 200px #FFF , 899px 1772px #FFF , 436px 1287px #FFF , 1955px 961px #FFF , 1741px 1927px #FFF , 941px 1166px #FFF , 1263px 687px #FFF , 1451px 409px #FFF , 1207px 981px #FFF , 1347px 984px #FFF , 1643px 569px #FFF , 1390px 1811px #FFF , 206px 979px #FFF , 518px 1140px #FFF , 488px 1929px #FFF , 1183px 1023px #FFF , 1454px 165px #FFF , 83px 369px #FFF , 356px 477px #FFF , 1316px 1877px #FFF , 1900px 557px #FFF , 348px 191px #FFF , 1058px 1804px #FFF , 1799px 1742px #FFF , 1637px 1377px #FFF , 1537px 1910px #FFF , 1139px 1783px #FFF , 83px 725px #FFF , 800px 1871px #FFF , 640px 738px #FFF , 632px 241px #FFF , 247px 432px #FFF , 1999px 1388px #FFF , 1915px 31px #FFF , 1700px 785px #FFF , 88px 74px #FFF , 1626px 1021px #FFF , 1841px 1441px #FFF , 434px 1068px #FFF , 912px 1588px #FFF , 1320px 38px #FFF , 1539px 809px #FFF , 1654px 1676px #FFF , 927px 1335px #FFF , 1984px 898px #FFF , 1808px 136px #FFF , 1478px 1038px #FFF , 1105px 1082px #FFF , 391px 1632px #FFF , 879px 1184px #FFF , 69px 1063px #FFF , 251px 983px #FFF , 784px 780px #FFF , 1985px 211px #FFF , 1243px 821px #FFF , 1879px 1750px #FFF , 1941px 959px #FFF , 1313px 308px #FFF , 376px 692px #FFF , 593px 833px #FFF , 1020px 1813px #FFF , 811px 820px #FFF , 577px 261px #FFF , 791px 1551px #FFF , 520px 659px #FFF , 983px 748px #FFF , 1195px 194px #FFF , 1577px 1628px #FFF , 480px 691px #FFF , 552px 1096px #FFF , 1954px 910px #FFF , 177px 1129px #FFF , 1152px 861px #FFF , 548px 1596px #FFF , 774px 1431px #FFF , 70px 1355px #FFF , 1175px 1163px #FFF , 1150px 1723px #FFF , 276px 1388px #FFF , 1276px 194px #FFF , 70px 1085px #FFF , 1527px 1628px #FFF , 1434px 645px #FFF , 108px 777px #FFF , 1134px 333px #FFF , 582px 121px #FFF , 1070px 269px #FFF , 1712px 1382px #FFF , 1536px 1425px #FFF , 1330px 1081px #FFF , 43px 1094px #FFF , 1208px 1017px #FFF , 503px 869px #FFF , 479px 74px #FFF , 42px 981px #FFF , 1913px 1052px #FFF , 1911px 1759px #FFF , 86px 611px #FFF , 498px 1502px #FFF , 1737px 1446px #FFF , 1659px 533px #FFF , 1188px 164px #FFF , 193px 671px #FFF , 387px 66px #FFF , 1940px 998px #FFF , 1377px 1489px #FFF , 875px 170px #FFF , 37px 267px #FFF , 1756px 1348px #FFF , 1526px 781px #FFF , 1055px 1186px #FFF , 814px 1626px #FFF , 1125px 1073px #FFF , 1036px 1772px #FFF , 1092px 94px #FFF , 778px 1298px #FFF , 1621px 174px #FFF , 1301px 383px #FFF , 1926px 67px #FFF , 1226px 1123px #FFF , 593px 1989px #FFF , 759px 356px #FFF , 345px 92px #FFF , 924px 563px #FFF , 1686px 1326px #FFF , 1124px 877px #FFF , 558px 1645px #FFF , 1202px 382px #FFF , 244px 1976px #FFF , 1794px 786px #FFF;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 462px 1817px #FFF , 424px 1983px #FFF , 1343px 1274px #FFF , 838px 1045px #FFF , 128px 747px #FFF , 239px 667px #FFF , 1383px 789px #FFF , 810px 1527px #FFF , 830px 750px #FFF , 170px 1035px #FFF , 1927px 141px #FFF , 964px 1433px #FFF , 1030px 1735px #FFF , 1686px 1531px #FFF , 1236px 530px #FFF , 868px 1787px #FFF , 1612px 1338px #FFF , 547px 1246px #FFF , 1737px 1753px #FFF , 1518px 230px #FFF , 512px 1734px #FFF , 1352px 1054px #FFF , 730px 397px #FFF , 374px 534px #FFF , 14px 1960px #FFF , 1163px 1852px #FFF , 1505px 597px #FFF , 76px 297px #FFF , 1455px 910px #FFF , 135px 1858px #FFF , 1004px 94px #FFF , 767px 230px #FFF , 1242px 1776px #FFF , 164px 833px #FFF , 1634px 1337px #FFF , 826px 1273px #FFF , 423px 672px #FFF , 1971px 655px #FFF , 1723px 606px #FFF , 1867px 485px #FFF , 38px 412px #FFF , 1085px 43px #FFF , 963px 1776px #FFF , 1318px 1980px #FFF , 1176px 1952px #FFF , 317px 202px #FFF , 141px 943px #FFF , 420px 512px #FFF , 947px 1920px #FFF , 132px 1402px #FFF , 1672px 124px #FFF , 1708px 611px #FFF , 955px 1223px #FFF , 1666px 973px #FFF , 1829px 718px #FFF , 1865px 714px #FFF , 49px 1336px #FFF , 511px 1669px #FFF , 143px 790px #FFF , 608px 112px #FFF , 889px 1151px #FFF , 1700px 302px #FFF , 319px 1005px #FFF , 1588px 1629px #FFF , 203px 1696px #FFF , 228px 161px #FFF , 1018px 146px #FFF , 6px 1347px #FFF , 284px 1401px #FFF , 337px 1138px #FFF , 759px 200px #FFF , 899px 1772px #FFF , 436px 1287px #FFF , 1955px 961px #FFF , 1741px 1927px #FFF , 941px 1166px #FFF , 1263px 687px #FFF , 1451px 409px #FFF , 1207px 981px #FFF , 1347px 984px #FFF , 1643px 569px #FFF , 1390px 1811px #FFF , 206px 979px #FFF , 518px 1140px #FFF , 488px 1929px #FFF , 1183px 1023px #FFF , 1454px 165px #FFF , 83px 369px #FFF , 356px 477px #FFF , 1316px 1877px #FFF , 1900px 557px #FFF , 348px 191px #FFF , 1058px 1804px #FFF , 1799px 1742px #FFF , 1637px 1377px #FFF , 1537px 1910px #FFF , 1139px 1783px #FFF , 83px 725px #FFF , 800px 1871px #FFF , 640px 738px #FFF , 632px 241px #FFF , 247px 432px #FFF , 1999px 1388px #FFF , 1915px 31px #FFF , 1700px 785px #FFF , 88px 74px #FFF , 1626px 1021px #FFF , 1841px 1441px #FFF , 434px 1068px #FFF , 912px 1588px #FFF , 1320px 38px #FFF , 1539px 809px #FFF , 1654px 1676px #FFF , 927px 1335px #FFF , 1984px 898px #FFF , 1808px 136px #FFF , 1478px 1038px #FFF , 1105px 1082px #FFF , 391px 1632px #FFF , 879px 1184px #FFF , 69px 1063px #FFF , 251px 983px #FFF , 784px 780px #FFF , 1985px 211px #FFF , 1243px 821px #FFF , 1879px 1750px #FFF , 1941px 959px #FFF , 1313px 308px #FFF , 376px 692px #FFF , 593px 833px #FFF , 1020px 1813px #FFF , 811px 820px #FFF , 577px 261px #FFF , 791px 1551px #FFF , 520px 659px #FFF , 983px 748px #FFF , 1195px 194px #FFF , 1577px 1628px #FFF , 480px 691px #FFF , 552px 1096px #FFF , 1954px 910px #FFF , 177px 1129px #FFF , 1152px 861px #FFF , 548px 1596px #FFF , 774px 1431px #FFF , 70px 1355px #FFF , 1175px 1163px #FFF , 1150px 1723px #FFF , 276px 1388px #FFF , 1276px 194px #FFF , 70px 1085px #FFF , 1527px 1628px #FFF , 1434px 645px #FFF , 108px 777px #FFF , 1134px 333px #FFF , 582px 121px #FFF , 1070px 269px #FFF , 1712px 1382px #FFF , 1536px 1425px #FFF , 1330px 1081px #FFF , 43px 1094px #FFF , 1208px 1017px #FFF , 503px 869px #FFF , 479px 74px #FFF , 42px 981px #FFF , 1913px 1052px #FFF , 1911px 1759px #FFF , 86px 611px #FFF , 498px 1502px #FFF , 1737px 1446px #FFF , 1659px 533px #FFF , 1188px 164px #FFF , 193px 671px #FFF , 387px 66px #FFF , 1940px 998px #FFF , 1377px 1489px #FFF , 875px 170px #FFF , 37px 267px #FFF , 1756px 1348px #FFF , 1526px 781px #FFF , 1055px 1186px #FFF , 814px 1626px #FFF , 1125px 1073px #FFF , 1036px 1772px #FFF , 1092px 94px #FFF , 778px 1298px #FFF , 1621px 174px #FFF , 1301px 383px #FFF , 1926px 67px #FFF , 1226px 1123px #FFF , 593px 1989px #FFF , 759px 356px #FFF , 345px 92px #FFF , 924px 563px #FFF , 1686px 1326px #FFF , 1124px 877px #FFF , 558px 1645px #FFF , 1202px 382px #FFF , 244px 1976px #FFF , 1794px 786px #FFF;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 622px 41px #FFF , 767px 1109px #FFF , 1796px 1628px #FFF , 398px 1296px #FFF , 1463px 122px #FFF , 1770px 501px #FFF , 1243px 1089px #FFF , 743px 1657px #FFF , 1688px 851px #FFF , 116px 694px #FFF , 1846px 857px #FFF , 1411px 1640px #FFF , 1766px 335px #FFF , 798px 1189px #FFF , 1723px 251px #FFF , 94px 1257px #FFF , 1170px 1185px #FFF , 1016px 538px #FFF , 1513px 523px #FFF , 1297px 655px #FFF , 663px 38px #FFF , 1319px 701px #FFF , 395px 1522px #FFF , 993px 1755px #FFF , 1233px 207px #FFF , 1958px 668px #FFF , 1162px 20px #FFF , 807px 309px #FFF , 700px 1944px #FFF , 127px 538px #FFF , 217px 767px #FFF , 1012px 1532px #FFF , 93px 1445px #FFF , 1969px 1456px #FFF , 1984px 761px #FFF , 1352px 972px #FFF , 1393px 511px #FFF , 184px 999px #FFF , 886px 1125px #FFF , 1771px 1811px #FFF , 159px 951px #FFF , 1751px 601px #FFF , 1468px 719px #FFF , 748px 1388px #FFF , 745px 642px #FFF , 1769px 1116px #FFF , 523px 268px #FFF , 322px 1722px #FFF , 1841px 1228px #FFF , 919px 1551px #FFF , 356px 1382px #FFF , 511px 608px #FFF , 1220px 1897px #FFF , 256px 294px #FFF , 1719px 1238px #FFF , 988px 1190px #FFF , 972px 1996px #FFF , 1536px 1404px #FFF , 883px 445px #FFF , 1120px 1308px #FFF , 787px 1235px #FFF , 760px 1216px #FFF , 1415px 339px #FFF , 873px 1347px #FFF , 6px 1181px #FFF , 847px 1206px #FFF , 1395px 842px #FFF , 208px 970px #FFF , 1476px 1369px #FFF , 1424px 1942px #FFF , 998px 394px #FFF , 608px 1504px #FFF , 1968px 1219px #FFF , 1890px 493px #FFF , 1729px 353px #FFF , 1820px 1940px #FFF , 1414px 1486px #FFF , 1138px 1812px #FFF , 112px 333px #FFF , 1568px 317px #FFF , 1924px 451px #FFF , 774px 222px #FFF , 656px 43px #FFF , 1123px 1271px #FFF , 1122px 1221px #FFF , 1040px 1907px #FFF , 700px 520px #FFF , 1011px 823px #FFF , 821px 1945px #FFF , 184px 1002px #FFF , 288px 1557px #FFF , 1754px 701px #FFF , 1562px 546px #FFF , 1063px 1245px #FFF , 1016px 1989px #FFF , 137px 1399px #FFF , 209px 694px #FFF , 714px 701px #FFF , 990px 1650px #FFF , 899px 1885px #FFF;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 622px 41px #FFF , 767px 1109px #FFF , 1796px 1628px #FFF , 398px 1296px #FFF , 1463px 122px #FFF , 1770px 501px #FFF , 1243px 1089px #FFF , 743px 1657px #FFF , 1688px 851px #FFF , 116px 694px #FFF , 1846px 857px #FFF , 1411px 1640px #FFF , 1766px 335px #FFF , 798px 1189px #FFF , 1723px 251px #FFF , 94px 1257px #FFF , 1170px 1185px #FFF , 1016px 538px #FFF , 1513px 523px #FFF , 1297px 655px #FFF , 663px 38px #FFF , 1319px 701px #FFF , 395px 1522px #FFF , 993px 1755px #FFF , 1233px 207px #FFF , 1958px 668px #FFF , 1162px 20px #FFF , 807px 309px #FFF , 700px 1944px #FFF , 127px 538px #FFF , 217px 767px #FFF , 1012px 1532px #FFF , 93px 1445px #FFF , 1969px 1456px #FFF , 1984px 761px #FFF , 1352px 972px #FFF , 1393px 511px #FFF , 184px 999px #FFF , 886px 1125px #FFF , 1771px 1811px #FFF , 159px 951px #FFF , 1751px 601px #FFF , 1468px 719px #FFF , 748px 1388px #FFF , 745px 642px #FFF , 1769px 1116px #FFF , 523px 268px #FFF , 322px 1722px #FFF , 1841px 1228px #FFF , 919px 1551px #FFF , 356px 1382px #FFF , 511px 608px #FFF , 1220px 1897px #FFF , 256px 294px #FFF , 1719px 1238px #FFF , 988px 1190px #FFF , 972px 1996px #FFF , 1536px 1404px #FFF , 883px 445px #FFF , 1120px 1308px #FFF , 787px 1235px #FFF , 760px 1216px #FFF , 1415px 339px #FFF , 873px 1347px #FFF , 6px 1181px #FFF , 847px 1206px #FFF , 1395px 842px #FFF , 208px 970px #FFF , 1476px 1369px #FFF , 1424px 1942px #FFF , 998px 394px #FFF , 608px 1504px #FFF , 1968px 1219px #FFF , 1890px 493px #FFF , 1729px 353px #FFF , 1820px 1940px #FFF , 1414px 1486px #FFF , 1138px 1812px #FFF , 112px 333px #FFF , 1568px 317px #FFF , 1924px 451px #FFF , 774px 222px #FFF , 656px 43px #FFF , 1123px 1271px #FFF , 1122px 1221px #FFF , 1040px 1907px #FFF , 700px 520px #FFF , 1011px 823px #FFF , 821px 1945px #FFF , 184px 1002px #FFF , 288px 1557px #FFF , 1754px 701px #FFF , 1562px 546px #FFF , 1063px 1245px #FFF , 1016px 1989px #FFF , 137px 1399px #FFF , 209px 694px #FFF , 714px 701px #FFF , 990px 1650px #FFF , 899px 1885px #FFF;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

.main-carousel {
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
