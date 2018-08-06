<template>
	<Row type="flex" justify="center">
		<Row style="max-width: 1200px; padding: 0 20px;">
			<Card>
				<Row class="main-textarea-box" type="flex" justify="center">
					<Col :xs="24" :sm="8">
					<div class="info" @click="showPlate.old = !showPlate.old">
						<span class="textarea-title">词库数据</span>
						<span class="textarea-info" v-html="count.old"></span>
					</div>
					<transition name="slide">
						<textarea v-show="showPlate.old" v-model="oldTerms" @keydown.tab.prevent="oldTermsInput" @keyup.ctrl.86="testing(false)"
							:placeholder="oldAttr"></textarea>
					</transition>
					</Col>
					<Col :xs="24" :sm="8">
					<div class="info" @click="showPlate.new = !showPlate.new">
						<span class="textarea-info" v-html="count.new"></span>
						<span class="textarea-title">更正数据</span>
					</div>
					<transition name="slide">
						<textarea v-show="showPlate.new" v-model="newsTerms" @keydown.tab.prevent="newsTermsInput" @keyup.ctrl.86="testing(false)"
							:placeholder="newAttr"></textarea>
					</transition>
					</Col>
					<Col :xs="24" :sm="8">
					<div class="info" @click="showPlate.out = !showPlate.out">
						<span class="textarea-info" v-html="count.out"></span>
						<span class="textarea-title">转换内容</span>
					</div>
					<transition name="slide">
						<textarea v-show="showPlate.out" readonly v-model="outTerms" @keydown.tab.prevent="outTermsInput" placeholder="输出转换后内容"></textarea>
					</transition>
					</Col>
					<Col :xs="24" :sm="12">
					<div class="info" @click="showPlate.suc = !showPlate.suc">
						<span class="textarea-info" v-html="count.success"></span>
						<span class="textarea-title">成功信息</span>
					</div>
					<transition name="slide">
						<textarea v-show="showPlate.suc" readonly v-model="successInfo" placeholder="输出成功信息"></textarea>
					</transition>
					</Col>
					<Col :xs="24" :sm="12">
					<div class="info" @click="showPlate.err = !showPlate.err">
						<span class="textarea-info" v-html="count.error"></span>
						<span class="textarea-title">错误信息</span>
					</div>
					<transition name="slide">
						<textarea v-show="showPlate.err" readonly v-model="errorInfo" placeholder="输出错误信息"></textarea>
					</transition>
					</Col>
				</Row>
			</Card>

			<i-switch class="controls-switch" v-model="switchControl" @click="switchControl = !switchControl"></i-switch>

			<transition name="slide">
				<Card class="controls-btn" style="padding: 0 20%;" v-if="switchControl">
					<Row type="flex" justify="space-around" align="middle">
						<Button size="large" @click="testing(true)">开始处理</Button>
						<Tooltip placement="top">
							<i-switch size="large" v-model="isLog">
								<span slot="open">记录</span>
								<span slot="close">记录</span>
							</i-switch>
              <div slot="content" style="text-align: center">
                <p>在处理词条时打印进度到控制台</p>
                <b>F12查看处理进度，但记录可能会影响性能！</b>
              </div>
						</Tooltip>
						<Tooltip content="在转换内容各编码后缀添加编码重数" placement="top">
							<i-switch size="large" v-model="isDev">
								<span slot="open">重数</span>
								<span slot="close">重数</span>
							</i-switch>
						</Tooltip>
						<Tooltip content="填写测试信息至词库数据与更新数据中" placement="top">
							<Button size="large" @click="createDemo">测试内容</Button>
						</Tooltip>
						<Button size="large" type="error" @click="clearContent">清空内容</Button>
					</Row>
				</Card>
			</transition>

			<div class="bottom-info w-100">
				<Card>
					<Row type="flex" justify="center">
						<h3>申请表词库处理工具v{{version}}</h3>
					</Row>
				</Card>
				<Card>
					<Row type="flex" justify="center">
						<p>转换后词组，顺序错乱，可以使用BashShell中sort工具进行排序，也可以使用编写好的sh工具进行排序。
							<Button to="https://gitee.com/nmlixa/Rime_JD/tree/master/Tools/TermsTools"
								target="_blank">工具1sortTerms.sh</Button>
						</p>
						<p>请注意！本工具不支持
							<b>英文（含英文）</b>词组准确修改功能！工具遇重码操作后计算耗时较长，请耐心等待。</p>
					</Row>
				</Card>
				<Card class="history-card">
					<h4 slot="title">更新历史</h4>
					<Button slot="extra" @click="updateAll = !updateAll">展开所有</Button>
					<Row>
						<Timeline>
							<TimelineItem>
								<Tag color="success">new</Tag>{{updateHistory[updateHistoryLength].ver}}: {{updateHistory[updateHistoryLength].cont}}
							</TimelineItem>
							<TimelineItem>
								<Tag>new</Tag>{{updateHistory[updateHistoryLength-1].ver}}: {{updateHistory[updateHistoryLength-1].cont}}
							</TimelineItem>
						</Timeline>
					</Row>
					<Row v-if="updateAll">
						<Timeline>
							<TimelineItem v-for="item in updateHistory" :key="item.cont">
								{{item.ver}}: {{item.cont}}
							</TimelineItem>
						</Timeline>
					</Row>
				</Card>
			</div>
		</Row>
	</Row>
</template>

<script>
export default {
  name: "Contribution",
  data() {
    return {
      version: -1,
      oldTerms: "",
      newsTerms: "",
      oldAttr: "请输入词库数据\n词条\t编码",
      newAttr: "请输入更正数据\n编码\t[+/-/*]\t词条",
      btnInfo: "开始处理",
      outTerms: "",
      successInfo: "",
      errorInfo: "",
      oldTermsData: {},
      newsTermsData: {},
      newTermsData: "",
      newTermsCountData: {},
      successInfoData: "",
      count: {
        old: "词: 0 码: 0",
        new: "码: 0 符: 0 词: 0",
        out: "词: 0 码: 0",
        success: "共：0 加: 0 改: 0 删：0",
        error: "共: 0 错: 0 没：0 缺：0"
      },
      errorInfoData: "",
      demoOldData: `剥壳	blke
经历	jglk
尽力	jglk
博客6	blke
万夫6	wffj
折子戏	fzxi
万付	wffj`,
      demoNewData: `blke	+	剥个
blkeav#2	*	贝壳
jglk#3	-	经历
jglk#4	+	静静
wffj	-	万付`,
      updates: false,
      begin: "",
      end: "",
      isPhone: false,
      isDev: false,
      isLog: false,
      switchControl: true,
      showPlate: {
        old: true,
        new: true,
        out: false,
        suc: false,
        err: false
      },
      timeOf: [],
      updateAll: false,
      handleTermsWorker: null,
      handleTermsStatus: 0,
      updateHistory: [
        {
          ver: "1.0",
          cont: "正常使用，发布版本。"
        },
        {
          ver: "1.1",
          cont: "自动解决，全角半角问题。"
        },
        {
          ver: "1.2",
          cont: "新增*操作符，等同于!m，自动解决，全角半角问题。"
        },
        {
          ver: "1.3",
          cont: "使用*操作符作用主修改操作符，兼容!m修改符。"
        },
        {
          ver: "1.4",
          cont: "修复主动修改!m为*的步骤错误问题。"
        },
        {
          ver: "1.5",
          cont: "升级删除时确定编码词条才删除，改善提示内容。"
        },
        {
          ver: "1.6",
          cont: "升级添加细节优化处理。"
        },
        {
          ver: "1.6.1",
          cont: "改进成功信息提示时间。"
        },
        {
          ver: "1.7",
          cont: "新增查看编码所在行数，新增提示处理表的操作符 编码 词条的数量。"
        },
        {
          ver: "1.8",
          cont: "新增头部信息统计，改进自适应布局方式，完善缺失编码检测机制。"
        },
        {
          ver: "2.0",
          cont:
            "新增重码操作机制，以编码后缀方式操作词条序。较耗费性能，可关闭。"
        },
        {
          ver: "2.1",
          cont: "完善重码调试机制，可正常使用、完善移动端界面布局。"
        },
        {
          ver: "2.2",
          cont:
            "新增自动鉴别处理模式，无重码时操作更快，有重码自动转至重码模式。"
        },
        {
          ver: "2.3",
          cont: "纠正删除编码重码时的准确匹配，纠正Bug。"
        },
        {
          ver: "2.4",
          cont:
            "完成支持英文词库处理，前提每个英文词条中必须有至少一个大写字母。"
        },
        {
          ver: "2.5",
          cont: "完成检测词库数据中含有数字是否清除判断选项，避免误处理。"
        },
        {
          ver: "3.0",
          cont:
            "重码检测模式改进，使用#符号代替纯数字，不与词库中本有数字冲突。"
        },
        {
          ver: "4.0 Alpha",
          cont: "全局主题由Bootstrap迁移至iViewUI，优化重码处理速度。"
        },
        {
          ver: "4.0",
          cont: "重码算法优化，加入Web Worker后台线程计算。"
        }
      ],
      updateHistoryLength: 0
    };
  },
  created: function() {
    this.isPhoneFn();
    this.getVersion();
  },
  mounted: function() {
    this.Notice();
  },
  methods: {
    getVersion: function() {
      this.version = this.updateHistory[this.updateHistoryLength].ver;
    },
    handleOldTerms: function(newsHaveRepeat) {
      var thisOldData = this.oldTermsData.obj,
        thisNewData = this.newTermsData,
        thisIsLog = this.isLog,
        reg,
        regIdentData;
      var i = 1,
        y = 0;

      this.$Loading.start();
      this.$Message.loading({
        content: `启动转换进程：共有${
          this.oldTermsData.obj.word.length
        }，已开始处理请稍后…`,
        duration: 0
      });
      //设置文本、编码、属性
      //1 遍历旧词库,转换内容
      this.handleTermsWorker = this.$worker
        .run(
          (newsHaveRepeat, thisOldData, thisNewData, i, y, thisIsLog) => {
            var resultData = thisNewData;
            if (newsHaveRepeat) {
              for (y in thisOldData.word) {
                reg = new RegExp(`.+\\t\\b${thisOldData.code[y]}#*\\d*`, "g");
                if (resultData.search(reg) == -1) {
                  resultData += `${thisOldData.word[y]}\t${
                    thisOldData.code[y]
                  }#${i}\r\n`;
                } else {
                  regIdentData = resultData.match(reg);
                  resultData += `${thisOldData.word[y]}\t${
                    thisOldData.code[y]
                  }#${parseFloat(regIdentData.length) + 1}\r\n`;
                }
                thisIsLog && console.log("已完成：", parseFloat(y) + 1);
              }
            } else {
              for (y in thisOldData.word) {
                reg = new RegExp(`.+\\t\\b${thisOldData.code[y]}\\b`, "g");
                resultData += `${thisOldData.word[y]}\t${
                  thisOldData.code[y]
                }\r\n`;
              }
            }
            return resultData;
          },
          [newsHaveRepeat, thisOldData, thisNewData, i, y, thisIsLog]
        )
        .then(res => {
          this.newTermsData = res;
          this.handleTerms();
        })
        .catch(e => {
          this.$Message.error("遇到错误：", e);
        });
      this.handleTermsWorker = null;
    },
    handleTerms: function() {
      //设置公共属性
      var _this = this;
      var thisNewData = this.newsTermsData.obj;
      var reg,
        out,
        log,
        ope,
        SuccessAll,
        ErrorAll,
        AddNum,
        ModifyNum,
        DelNum,
        ErrorNum,
        NoNum,
        ErrorAttr,
        HaveCodeReg,
        TermsCorrectCodeReg;
      SuccessAll = ErrorAll = AddNum = ModifyNum = DelNum = ErrorNum = NoNum = ErrorAttr = 0;
      var x = 0;

      //2 遍历新词条
      for (x in thisNewData.word) {
        //add
        if (thisNewData.add[x]) {
          //判断编码是否已存在
          ope = "+";
          reg = new RegExp(`.+\\t\\b${thisNewData.code[x]}\\b`, "g");
          log = `[ ${thisNewData.code[x]}\t${ope}\t${thisNewData.word[x]} ]`;
          out = thisNewData.word[x] + "\t" + thisNewData.code[x];
          if (this.newTermsData.search(reg) == -1) {
            this.newTermsData += out + "\r\n";
            this.successInfoData += `${out}\t[ + 第${parseFloat(x) + 1}行]\r\n`;
            SuccessAll++;
            AddNum++;
          } else {
            this.errorInfoData += `[第${parseFloat(x) +
              1}行]\t${log}\r\n>> Error 编码已存在：\r\n${this.newTermsData
              .match(reg)
              .join("，")}\r\n\r\n`;
            ErrorAll++;
            ErrorNum++;
          }
          //modify
        } else if (thisNewData.modify[x]) {
          ope = "*";
          reg = new RegExp(`.+\\t\\b${thisNewData.code[x]}\\b`, "g");
          log = `[ ${thisNewData.code[x]}\t${ope}\t${thisNewData.word[x]} ]`;
          out = thisNewData.word[x] + "\t" + thisNewData.code[x];
          if (this.newTermsData.search(reg) != -1) {
            this.newTermsData = this.newTermsData.replace(reg, out);
            this.successInfoData += `${out}\t[ * 第${parseFloat(x) + 1}行]\r\n`;
            SuccessAll++;
            ModifyNum++;
          } else {
            this.errorInfoData += `[第${parseFloat(x) +
              1}行]\t${log}\r\n>> Error 未找到编码：\r\n${
              thisNewData.code[x]
            }\r\n\r\n`;
            ErrorAll++;
            NoNum++;
          }
          //delete
        } else if (thisNewData.delete[x]) {
          HaveCodeReg = new RegExp(
            `.+\\t\\b${thisNewData.code[x]}#?\\d*\\b[\\r\\n]*`,
            "g"
          );
          TermsCorrectCodeReg = new RegExp(
            `${thisNewData.word[x]}\\t\\b${
              thisNewData.code[x]
            }#?\\d*\\b[\\r\\n]*`,
            "g"
          );
          ope = "-";
          log = `[ ${thisNewData.code[x]}\t${ope}\t${thisNewData.word[x]} ]`;
          out = thisNewData.word[x] + "\t" + thisNewData.code[x];
          if (this.newTermsData.search(HaveCodeReg) != -1) {
            if (this.newTermsData.search(TermsCorrectCodeReg) != -1) {
              this.newTermsData = this.newTermsData.replace(
                eval(TermsCorrectCodeReg),
                ""
              );
              this.successInfoData += `${out}\t[ - 第${parseFloat(x) +
                1}行]\r\n`;
              SuccessAll++;
              DelNum++;
            } else {
              this.errorInfoData += `[第${parseFloat(x) +
                1}行]\t${log}\r\n>> Warn 词组编码不对应：\r\n${this.newTermsData
                .match(HaveCodeReg)
                .join("，")}\r\n\r\n`;
              ErrorAll++;
              NoNum++;
            }
          } else {
            log = `[ ${thisNewData.code[x]}\t${ope}\t${thisNewData.word[x]} ]`;
            this.errorInfoData += `[第${parseFloat(x) +
              1}行]\t${log}\r\n>> Error 编码不存在：\r\n${
              thisNewData.code[x]
            }\r\n\r\n`;
            ErrorAll++;
            NoNum++;
          }
          //未知
        } else {
          ope = "×";
          out = thisNewData.word[x] + "\t" + thisNewData.code[x];
          this.errorInfoData += `[第${parseFloat(x) +
            1}行]\t${log}\r\n>> Dang 未知操作符号。\r\n${
            thisNewData.code[x]
          }\r\n\r\n`;
          ErrorAll++;
          ErrorAttr++;
        }
      }

      this.TermsCountSet("newTermsData", "newTermsCountData");

      let nWordNum = this.newTermsCountData.obj.word.length,
        nCodeNum = this.newTermsCountData.obj.code.length;
      //填写底部统计
      this.count.out = `词: ${nWordNum} 码: ${nCodeNum}`;
      this.count.success = `共：${SuccessAll} 加: ${AddNum} 改: ${ModifyNum} 删：${DelNum}`;
      this.count.error = `共: ${ErrorAll} 错: ${ErrorNum} 没：${NoNum} 缺：${ErrorAttr}`;
      //扫描去除空行
      this.clearSpace();

      //统计最后用时
      this.end = new Date();
      var thisTimeOf = this.MillisecondToDate(this.end - this.begin);
      this.timeOf.push(thisTimeOf);

      //添加文档底部统计
      this.successInfoData = `成功统计：\t\t完成共计用时${thisTimeOf}\n共有 ${SuccessAll} 个, 添加 ${AddNum} 个,\n修改 ${ModifyNum} 个, 删除 ${DelNum} 个。\n\n${
        this.successInfoData
      }`;
      if (!ErrorAll && !ErrorNum && !NoNum && !ErrorAttr) {
        this.errorInfoData = `恭喜，没有错误哦！`;
      } else {
        this.errorInfoData = `失败统计：\n共有 ${ErrorAll}个, 错误 ${ErrorNum} 个,\n没找到 ${NoNum} 个, 没操作符 ${ErrorAttr} 个。\n\n${
          this.errorInfoData
        }`;
      }

      //填充内容
      if (this.isDev) {
        this.outTerms = this.clearIdent(true, this.newTermsData);
      } else {
        this.outTerms = this.clearIdent(false, this.newTermsData);
      }
      this.oldTerms = this.oldTerms;
      this.successInfo = this.successInfoData;
      this.errorInfo = this.errorInfoData;

      this.$Loading.finish();
      //发送成功信息
      this.$Message.destroy();
      this.$Message.success({
        content: `用时${_this.end -
          _this.begin}毫秒 处理完毕！共成功${SuccessAll}个、失败${ErrorAll}个！`,
        duration: 3
      });

      //清理数据
      this.successInfoData = this.errorInfoData = this.newTermsData = "";
    },
    TermsCountSet: function(formName, formData) {
      //转换符号
      this.allToHalf();

      this.oldTerms = this.clearIdent(false, this.oldTerms);
      this[formData].test = this[formName].split(/[\t\r\n]/g);

      this[formData].add = [];
      this[formData].obj = {};
      this[formData].obj.word = [];
      this[formData].obj.code = [];
      this[formData].obj.add = [];
      this[formData].obj.modify = [];
      this[formData].obj.delete = [];
      for (var x in this[formData].test) {
        var isOpreation = /^[+\-*]$/.test(this[formData].test[x]);
        var isCode = /^[a-z]+#?\d*$/.test(this[formData].test[x]);
        var isChinese = /[^a-z]|[^+\-*]+/.test(this[formData].test[x]);
        if (isOpreation) {
          switch (this[formData].test[x]) {
            case "+":
              this[formData].obj.add.push(true);
              this[formData].obj.modify.push(false);
              this[formData].obj.delete.push(false);
              break;
            case "*":
              this[formData].obj.add.push(false);
              this[formData].obj.modify.push(true);
              this[formData].obj.delete.push(false);
              break;
            case "-":
              this[formData].obj.add.push(false);
              this[formData].obj.modify.push(false);
              this[formData].obj.delete.push(true);
              break;
            default:
              break;
          }
        } else if (isCode) {
          this[formData].obj.code.push(this[formData].test[x]);
        } else if (isChinese) {
          this[formData].obj.word.push(this[formData].test[x]);
        }
      }
    },
    testing: function(isHoundle) {
      this.begin = new Date();
      var newsHaveRepeat = /#\d+/.test(this.newsTerms);

      if (0 == this.oldTerms.length) {
        this.$Message.success(`工作表为空！`);
        return;
      }

      //重置数据
      this.TermsCountSet("oldTerms", "oldTermsData");
      this.TermsCountSet("newsTerms", "newsTermsData");

      let oWordNum = this.oldTermsData.obj.word.length,
        oCodeNum = this.oldTermsData.obj.code.length,
        mWordNum = this.newsTermsData.obj.word.length,
        mModifyNum = this.newsTermsData.obj.modify.length,
        mCodeNum = this.newsTermsData.obj.code.length;

      this.count.old = `词: ${oWordNum} 码: ${oCodeNum}`;
      this.count.new = `码: ${mCodeNum} 符: ${mModifyNum} 词: ${mWordNum}`;

      if (oWordNum != oCodeNum) {
        this.$Message.error(`请检查词库内容！`);
        this.count.old = `<b style="color: red;">词: ${oWordNum} 码: ${oCodeNum}<b>`;
        return;
      }

      if (
        mWordNum != mModifyNum ||
        mModifyNum != mCodeNum ||
        mWordNum != mCodeNum
      ) {
        this.$Message.error(`请检查更正数据内容！`);
        this.count.new = `<b style="color: red;">码: ${mCodeNum} 符: ${mModifyNum} 词: ${mWordNum}<b>`;
        return;
      }

      //正常则调用处理数据，否则仅计数，判断是否有错误内容
      if (isHoundle) {
        this.handleOldTerms(newsHaveRepeat);
      } else {
        return;
      }
    },
    createDemo: function() {
      this.oldTerms = this.demoOldData;
      this.newsTerms = this.demoNewData;
      this.testing(false);
    },
    clearContent: function() {
      this.oldTerms = this.newsTerms = this.outTerms = this.newTermsData = "";
      this.oldTermsData = {};
      this.testing(false);
      this.$Message.destroy();
      this.$Message.success(`已清空数据`);
    },
    allToHalf: function() {
      var regPlus = /＋/g;
      var regMinus = /-/g;
      var regModify = /!m|！m|！M|!M|＊/g;
      this.newsTerms = this.newsTerms.replace(regPlus, "+");
      this.newsTerms = this.newsTerms.replace(regMinus, "-");
      this.newsTerms = this.newsTerms.replace(regModify, "*");
    },
    clearIdent: function(isclear, data) {
      var result = data.replace(/#\d+/g, "");
      return isclear ? data : result;
    },
    clearSpace: function() {
      this.newTermsData = this.newTermsData.replace(/[\r\n]\s/g, "\r");
    },
    clickHistory: function() {
      this.updates = !this.updates;
      this.isHover = !this.isHover;
    },
    MillisecondToDate: function(msd) {
      var time = parseFloat(msd) / 1000;
      if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
          time =
            parseInt(time / 60.0) +
            "分" +
            parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
            "秒";
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
          time =
            parseInt(time / 3600.0) +
            "时" +
            parseInt(
              (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
            ) +
            "分" +
            parseInt(
              (parseFloat(
                (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
              ) -
                parseInt(
                  (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
                )) *
                60
            ) +
            "秒";
        } else if (time >= 1000) {
          time = parseInt(time) + "秒";
        } else {
          time = msd + "毫秒";
        }
      }
      return time;
    },
    oldTermsInput: function() {
      this.oldTerms = this.oldTerms += "\t";
    },
    newsTermsInput: function() {
      this.newsTerms = this.newsTerms += "\t";
    },
    outTermsInput: function() {
      this.outTerms = this.outTerms += "\t";
    },
    setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    },
    Notice: function() {
      var isShowUpdate = this.getCookie("showUpdate");
      var newVer = parseFloat(this.updateHistory[this.updateHistoryLength].ver);

      if (isShowUpdate != newVer) {
        var _this = this;
        this.$Notice.open({
          title: "版本更新了",
          desc: `
							本次版本更新${this.updateHistory[this.updateHistoryLength].cont}
							版本号为${this.updateHistory[this.updateHistoryLength].ver}，
							详情请查阅底部说明。
						`,
          duration: 0,
          onClose: () => {
            _this.setCookie("showUpdate", newVer, 365);
          }
        });
      }
    },
    isPhoneFn: function() {
      if (document.documentElement.clientWidth <= 750) {
        this.isPhone = true;
      }
      if (!this.isPhone) {
        this.showPlate = {
          old: true,
          new: true,
          out: true,
          suc: true,
          err: true
        };
      } else {
        this.switchControl = false;
      }
      for (let x in this.updateHistory) {
        this.updateHistoryLength = x;
      }
    }
  }
};
</script>

<style>
.main-container {
  border-radius: 0.25rem;
  overflow: hidden;
  z-index: 50;
}

.translateRotate-enter-active,
.translateRotate-leave-active {
  transition: all 0.5s;
}

.translateRotate-enter,
.translateRotate-leave-to {
  transform: translate3d(0, -10px, 10px) rotate3d(-2, 0, 0, -30deg);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s linear;
}

.slide-enter,
.slide-leave-to {
  height: 0;
  opacity: 0;
}

textarea {
  width: 100%;
  height: 200px;
  resize: none !important;
  padding: 5px 10px !important;
  border: 1px solid #e0e3da;
  border-top: 0;
  background: #fffff3;
  display: flex;
}

textarea:read-only {
  background: #fffff3;
}

textarea:focus {
  z-index: 99;
}

textarea:focus + .info {
  height: 26px;
  overflow: initial;
}

.info {
  width: 100%;
  height: 0;
  overflow: hidden;
  text-align: left;
  border: 1px solid #e0e3da;
  padding-left: 5px;
  transition: all 0.3s;
  animation: info-animate 1s ease-in-out forwards;
}

@keyframes info-animate {
  form {
    height: 0;
    overflow: hidden;
  }

  to {
    height: 26px;
    overflow: auto;
  }
}

.textarea-info {
  float: right;
  opacity: 0.7;
  margin-right: 5px;
}

.controls-switch {
  position: fixed !important;
  left: 20px;
  bottom: 110px;
  z-index: 5;
}

.controls-btn {
  position: fixed !important;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 999;
}

.main-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

.history-card .ivu-card-extra {
  top: 3px;
}

@media (min-width: 768px) {
  .controls-btn {
    position: static !important;
  }
  .controls-switch {
    display: none !important;
  }
}
</style>
