<template>
<div class="container text-center">
	<div class="row main-container">
		<div class="col-12 col-md-4 p-0">
			<div class="bg-white info" @click="showPlate.old = !showPlate.old">
				<span class="textarea-info" v-html="count.old"></span>
				<span class="textarea-title">词库数据</span>
			</div>
			<transition name="slide">
				<textarea v-show="showPlate.old" v-model="oldTerms" @keydown.tab.prevent="oldTermsInput" @keyup.ctrl.86="testing(false)" :placeholder="oldAttr"></textarea>
			</transition>
		</div>
		<div class="col-12 col-md-4 p-0">
			<div class="bg-white info" @click="showPlate.new = !showPlate.new">
				<span class="textarea-info" v-html="count.new"></span>
				<span class="textarea-title">更正数据</span>
			</div>
			<transition name="slide">
				<textarea v-show="showPlate.new" v-model="newsTerms" @keydown.tab.prevent="newsTermsInput" @keyup.ctrl.86="testing(false)" :placeholder="newAttr"></textarea>
			</transition>
		</div>
		<div class="col-12 col-md-4 p-0">
			<div class="bg-white info" @click="showPlate.out = !showPlate.out">
				<span class="textarea-info" v-html="count.out"></span>
				<span class="textarea-title">转换内容</span>
			</div>
			<transition name="slide">
				<textarea v-show="showPlate.out" readonly v-model="outTerms" @keydown.tab.prevent="outTermsInput" placeholder="输出转换后内容"></textarea>
			</transition>
		</div>
		<div class="col-12 col-md-6 p-0">
			<div class="bg-white info" @click="showPlate.suc = !showPlate.suc">
				<span class="textarea-info" v-html="count.success"></span>
				<span class="textarea-title">成功信息</span>
			</div>
			<transition name="slide">
				<textarea v-show="showPlate.suc" readonly v-model="successInfo" placeholder="输出成功信息"></textarea>
			</transition>
		</div>
		<div class="col-12 col-md-6 p-0">
			<div class="bg-white info" @click="showPlate.err = !showPlate.err">
				<span class="textarea-info" v-html="count.error"></span>
				<span class="textarea-title">错误信息</span>
			</div>
			<transition name="slide">
				<textarea v-show="showPlate.err" readonly v-model="errorInfo" placeholder="输出错误信息"></textarea>
			</transition>
		</div>
	
		<div class="controls-switch fixed-bottom" style="left: 30px; bottom: 100px;" v-show="switchControl">
			<button class="btn btn-light d-block" @click="switchControlFn"><i class="fa" :class="{'fa-toggle-on':switchControl, 'fa-toggle-off':!switchControl}"></i></button>
		</div>

		<transition name="slide">
			<div class="controls-btn p-1">
				<button :class="btnClass" @click="testing(true)" @mousedown="clickPlay">{{btnInfo}}</button>
				<div class="btn btn-light custom-control custom-checkbox d-inline-block">
					<input class="custom-control-input" id="isDev" type="checkbox" @click="isDev = !isDev" v-model="isDev">
					<label class="custom-control-label" for="isDev">重数调式</label>
				</div>
				<button class="btn btn-light" @click="createDemo">测试内容</button>
				<button class="btn btn-danger" @click="clearContent">清空内容</button>
				<a class="btn btn-light" href="https://739497722.docs.qq.com/ipGva4mn5bo" target="_black">键道6加词</a>
			</div>
		</transition>

		<div class="bottom-info w-100">
			<p class="alert alert-secondary my-1">申请表词库处理工具v{{version}}</p>
			<p class="bg-light p-1 rounded mb-1">
				<span class="d-block small">转换后词组，顺序错乱，可以使用BashShell中sort工具进行排序，也可以使用编写好的sh工具进行排序。<a href="https://gitee.com/nmlixa/Rime_JD/tree/master/Tools/TermsTools" target="_black">工具1sortTerms.sh</a></span>
				<span class="small">请注意！本工具不支持<b>英文（含英文）</b>词组准确修改功能！工具遇重码操作后计算耗时较长，请耐心等待。</span>
			</p>
			<div class="text-left bg-light p-1 mb-1 rounded fzx history-card" @click="clickHistory">
				<p><button class="btn">更新历史</button><i class="fa fa-arrow-right btn fzb float-right history-arrow" :class="{'history-active':isHover}"></i></p>
				<p><span class="badge badge-success">new</span> {{updateHistory[updateHistoryLength].ver}}: {{updateHistory[updateHistoryLength].cont}}</p>
				<p><span class="badge badge-info">hot</span> {{updateHistory[updateHistoryLength-1].ver}}: {{updateHistory[updateHistoryLength-1].cont}}</p>
				<p><span class="badge badge-secondary">hot</span> {{updateHistory[updateHistoryLength-2].ver}}: {{updateHistory[updateHistoryLength-2].cont}}</p>
				<div v-if="updates" class="mt-1">
					<div v-for="item in updateHistory" :key="item.cont">
						<p>{{item.ver}}: {{item.cont}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<transition name="translateRotate">
		<div class="container alert fixed-top mt-5" :class="{'alert-success':showMessageData.sc,'alert-danger':showMessageData.e}" v-if="showMessageData.show">{{showMessageData.cont}}</div>
	</transition>
	<transition name="slide">
		<div class="layer-box" v-show="layer.show">
			<div class="layer-card card fixed-top h-50 mx-auto" :class="layer.class" @mousewheel.prevent>
				<div class="card-header card-title">{{layer.title}}</div>
				<div class="card-body card-text">{{layer.content}}</div>
				<div class="card-footer">
					<button class="btn btn-light" @click="closeLayer">关闭</button>
				</div>
			</div>
			<div class="layer-card-mask"></div>
		</div>
	</transition>
</div>
</template>

<script>
import $ from 'jquery';
export default {
	name: 'Contribution',
	data() {
		return {
			version: -1,
			oldTerms: '',
			newsTerms: '',
			oldAttr: '请输入词库数据\n词条\t编码',
			newAttr: '请输入更正数据\n编码\t[+/-/*]\t词条',
			btnClass: 'btn btn-light my-2',
			btnInfo: '开始处理',
			outTerms: '',
			successInfo: '',
			errorInfo: '',
			oldTermsData: {},
			newsTermsData: {},
			newTermsData: '',
			newTermsCountData: {},
			successInfoData: '',
			count: {
				old: '词: 0 码: 0',
				new: '码: 0 符: 0 词: 0',
				out: '词: 0 码: 0',
				success: '共：0 加: 0 改: 0 删：0',
				error: '共: 0 错: 0 没：0 缺：0',
			},
			errorInfoData: '',
			demoOldData: `剥壳	blke
经历	jglk
静力	jglk
经历	jglk
博客	blke
万夫	wffj
折子戏	fzxi
万付	wffj`,
			demoNewData: `blkeav2	+	剥个
blkeav2	*	贝壳
jglk3	-	经历
jglk4	+	静静
wffj	-	万付`,
			updates: false,
			showMessageData: {
				cont: '',
				sc: false,
				s: 3000,
				e: false,
				show:false
			},
			historyArrow: '>',
			isHover: false,
			begin: '',
			end: '',
			isPhone: false,
			isDev: false,
			switchControl: true,
			showPlate: {
				old: true,
				new: true,
				out: false,
				suc: false,
				err: false
			},
			layer: {
				show: false
			},
			timeOf: [],
			updateHistory: [
				{ 'ver': '1.0', 'cont': "正常使用，发布版本。"},
				{ 'ver': '1.1', 'cont': '自动解决，全角半角问题。'},
				{ 'ver': '1.2', 'cont': '新增*操作符，等同于!m，自动解决，全角半角问题。'},
				{ 'ver': '1.3', 'cont': '使用*操作符作用主修改操作符，兼容!m修改符。'},
				{ 'ver': '1.4', 'cont': '修复主动修改!m为*的步骤错误问题。'},
				{ 'ver': '1.5', 'cont': '升级删除时确定编码词条才删除，改善提示内容。'},
				{ 'ver': '1.6', 'cont': '升级添加细节优化处理。'},
				{ 'ver': '1.6.1', 'cont': '改进成功信息提示时间。'},
				{ 'ver': '1.7', 'cont': '新增查看编码所在行数，新增提示处理表的操作符 编码 词条的数量。'},
				{ 'ver': '1.8', 'cont': '新增头部信息统计，改进自适应布局方式，完善缺失编码检测机制。'},
				{ 'ver': '2.0', 'cont': '新增重码操作机制，以编码后缀方式操作词条序。较耗费性能，可关闭。'},
				{ 'ver': '2.1', 'cont': '完善重码调试机制，可正常使用、完善移动端界面布局。'},
				{ 'ver': '2.2', 'cont': '新增自动鉴别处理模式，无重码时操作更快，有重码自动转至重码模式。'},
				{ 'ver': '2.3', 'cont': '纠正删除编码重码时的准确匹配，纠正Bug。'},
				{ 'ver': '2.4', 'cont': '完成支持英文词库处理，前提每个英文词条中必须有至少一个大写字母。'},
			],
			updateHistoryLength: 0,
			haveRepeat: /\d+/.test(this.newsTerms),
		}
	},
	created: function (){
		this.isPhoneFn();
		this.getVersion();
	},
	mounted: function (){
		this.showHello();
	},
	methods: {
		getVersion: function (){
			this.version = this.updateHistory[this.updateHistoryLength].ver;
		},
		handleTerms: function() {
			//设置公共属性
			var __this = this;
			var thisNewData = this.newsTermsData.obj;
			var thisOldData = this.oldTermsData.obj;
			var reg, out, SuccessAll, ErrorAll, AddNum, ModifyNum, DelNum, ErrorNum, NoNum, ErrorAttr, regIdent, regIdentData, isHasIdent, IdentNum;
			var SuccessAll = ErrorAll = AddNum = ModifyNum = DelNum = ErrorNum = NoNum = ErrorAttr = 0;
			var i = 1;
			//设置文本、编码、属性
			//1 遍历旧词库
			if (this.haveRepeat){
				for (let y in thisOldData.word){
					//1.1输出到输出框
					reg = new RegExp(`[\\u4e00-\\u9fa5]+\\t\\b${thisOldData.code[y]}\\d+\\b`, 'g');
					regIdentData = this.newTermsData.match(reg);

					for (let x in regIdentData){
						IdentNum = new Array();
						IdentNum[x] = regIdentData[x].toString().match(/\d+/g);
					}

					if (this.newTermsData.search(reg) == -1){
						this.newTermsData += `${thisOldData.word[y]}\t${thisOldData.code[y]}${i}\r\n`;
					} else {
						this.newTermsData += `${thisOldData.word[y]}\t${thisOldData.code[y]}${IdentNum.length+1}\r\n`;
					}
				}
			} else {
				for (let y in thisOldData.word){
					//1.1输出到输出框
					reg = new RegExp(`[\\u4e00-\\u9fa5]+\\t\\b${thisOldData.code[y]}\\b`, 'g');

					this.newTermsData += `${thisOldData.word[y]}\t${thisOldData.code[y]}\r\n`;
				}
			}
			//2 遍历新词条
			for(var x in thisNewData.word){
				//add
				if(thisNewData.add[x]) {
					//判断编码是否已存在
					reg = new RegExp(`[\\u4e00-\\u9fa5]+\\t\\b${thisNewData.code[x]}\\b`, 'g')
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.search(reg) == -1){
						this.newTermsData += out + '\r\n';
						this.successInfoData += `${out}\t[ + 第${parseFloat(x) + 1}行]\r\n`;
						SuccessAll ++;
						AddNum ++;
					} else {
						this.errorInfoData += `${out}\t已有编码\t[ + 第${parseFloat(x) + 1}行]\r\n`;
						ErrorAll ++;
						ErrorNum ++;
					}
				//modify
				} else if (thisNewData.modify[x]) {
					reg = new RegExp(`[\\u4e00-\\u9fa5]+\\t\\b${thisNewData.code[x]}\\b`, 'g');
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.search(reg) != -1) {
						this.newTermsData = this.newTermsData.replace(reg, out);
						this.successInfoData += `${out}\t[ * 第${parseFloat(x) + 1}行]\r\n`;
						SuccessAll ++;
						ModifyNum ++;
					} else {
						this.errorInfoData += `${out}\t未找到编码\t[ * 第${parseFloat(x) + 1}行]\r\n`;
						ErrorAll ++;
						NoNum ++;
					}
				//delete
				} else if (thisNewData.delete[x]) {
					reg = new RegExp(`${thisNewData.word[x]}\\t\\b${thisNewData.code[x]}\\d*\\b[\\r\\n]*`, 'g');
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.indexOf(thisNewData.code[x]) != -1){
						if (this.newTermsData.indexOf(thisNewData.word[x]) != -1) {
							this.newTermsData = this.newTermsData.replace(eval(reg), '');
							this.successInfoData += `${out}\t[ - 第${parseFloat(x) + 1}行]\r\n`;
							SuccessAll ++;
							DelNum ++;
						} else {
							this.errorInfoData += `${out}\t词组编码不同，已放弃删除\t[ - 第${parseFloat(x) + 1}行]\r\n`;
							ErrorAll ++;
							NoNum ++;
						}
					} else {
						this.errorInfoData += `${out}\t未找到编码\t[ - 第${parseFloat(x) + 1}行]\r\n`;
						ErrorAll ++;
						NoNum ++;
					}
				//未知
				} else {
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					this.errorInfoData += `${out}\t未知操作符号\t[第${parseFloat(x) + 1}行]\r\n`;
					ErrorAll ++;
					ErrorAttr ++;
				}
			}

			this.TermsCountSet('newTermsData', 'newTermsCountData');

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
			this.successInfoData = `成功统计：\t\t完成共计用时${thisTimeOf}\n共有 ${SuccessAll} 个, 添加 ${AddNum} 个,\n修改 ${ModifyNum} 个, 删除 ${DelNum} 个。\n\n${this.successInfoData}`;
			if (!ErrorAll && !ErrorNum && !NoNum && !ErrorAttr) {
				this.errorInfoData = `恭喜，没有错误哦！`
			} else {
				this.errorInfoData = `失败统计：\n共有 ${ErrorAll}个, 错误 ${ErrorNum} 个,\n没找到 ${NoNum} 个, 没操作符 ${ErrorAttr} 个。\n\n${this.errorInfoData}`;
			}
			
			//填充内容
			if (this.isDev){
				this.outTerms = this.clearIdent(true, this.newTermsData);
			} else {
				this.outTerms = this.clearIdent(false, this.newTermsData);
			}
			this.oldTerms = this.clearIdent(false, this.oldTerms);
			this.successInfo = this.successInfoData;
			this.errorInfo = this.errorInfoData;
			this.backHandingBtn();

			//发送成功信息
			this.showMessage({
				show: true,
				sc: true,
				cont: `用时${__this.end-__this.begin}毫秒 处理完毕！共成功${SuccessAll}个、失败${ErrorAll}个！`
			});

			//清理数据
			this.successInfoData = this.errorInfoData = this.newTermsData = '';
		},
		TermsCountSet: function (formName, formData, isClearIdent){
			//转换符号
			this.allToHalf();
			
			if (this.haveRepeat && this.isClearIdent){
				let isClear = confirm('检测到词库中包含数字，是否是重码标识？如果是将清除，处理中会自动计算重码。')
				if (isClear) this.oldTerms = this.clearIdent(false, this.oldTerms);
			}
			
			this[formData].test = this[formName].split(/[\t\r\n]/g);

			this[formData].add = [];
			this[formData].obj = {};
			this[formData].obj.word = [];
			this[formData].obj.code = [];
			this[formData].obj.add = [];
			this[formData].obj.modify = [];
			this[formData].obj.delete = [];
			for (var x in this[formData].test) {
				var isOpreation = /^[\+\-\*]$/.test(this[formData].test[x]);
				var isCode = /^[a-z]+$/.test(this[formData].test[x]);
				var isChinese = /[^a-z]|[^\+\-\*]+/.test(this[formData].test[x]);
				if (isOpreation) {
					switch (this[formData].test[x]) {
						case '+':
							this[formData].obj.add.push(true);
							this[formData].obj.modify.push(false);
							this[formData].obj.delete.push(false);
							break;
						case '*':
							this[formData].obj.add.push(false);
							this[formData].obj.modify.push(true);
							this[formData].obj.delete.push(false);
							break;
						case '-':
							this[formData].obj.add.push(false);
							this[formData].obj.modify.push(false);
							this[formData].obj.delete.push(true);
							break;
						default:
							break;
					}
				} else if (isCode){
					this[formData].obj.code.push(this[formData].test[x]);
				} else if (isChinese){
					this[formData].obj.word.push(this[formData].test[x]);
				}
			}
		},
		testing: function (isHoundle) {
			this.begin = new Date();
			
			if (0 == this.oldTerms.length){
				this.showMessage({
					show: true,
					sc: true,
					s: 1200,
					cont: `工作表为空！`
				});
				this.backHandingBtn();
				return;
			}
			
			//重置数据
			this.TermsCountSet('oldTerms', 'oldTermsData');
			this.TermsCountSet('newsTerms', 'newsTermsData');

			let oWordNum = this.oldTermsData.obj.word.length,
				oCodeNum = this.oldTermsData.obj.code.length,
				mWordNum = this.newsTermsData.obj.word.length,
				mModifyNum = this.newsTermsData.obj.modify.length,
				mCodeNum = this.newsTermsData.obj.code.length;

			this.count.old = `词: ${oWordNum} 码: ${oCodeNum}`;
			this.count.new = `码: ${mCodeNum} 符: ${mModifyNum} 词: ${mWordNum}`;

			if (oWordNum != oCodeNum){
				this.showMessage({
					show: true,
					e: true,
					s: 1200,
					cont: `请检查词库内容！`
				});
				this.count.old = `<b style="color: red;">词: ${oWordNum} 码: ${oCodeNum}<b>`;
				return;
			}

			if (mWordNum != mModifyNum || mModifyNum != mCodeNum || mWordNum != mCodeNum){
				this.showMessage({
					show: true,
					e: true,
					s: 1200,
					cont: `请检查更正数据内容！`
				});
				this.count.new = `<b style="color: red;">码: ${mCodeNum} 符: ${mModifyNum} 词: ${mWordNum}<b>`;
				return;
			}
			
			//正常则调用处理数据，否则仅计数，判断是否有错误内容
			if (isHoundle){
				this.handleTerms(this.haveRepeat);
			} else {
				return;
			}

		},
		createDemo: function(){
			this.oldTerms = this.demoOldData;
			this.newsTerms = this.demoNewData;
			this.testing(false);
		},
		clearContent: function(){
			this.oldTerms = this.newsTerms = this.outTerms = this.AkeyTerms = '';
			this.testing(false);
		},
		allToHalf: function(){
			var regPlus = /\＋/g;
			var regMinus = /\-/g;
			var regModify = /\!m|\！m|\！M|\!M|\＊/g;
			this.newsTerms = this.newsTerms.replace(regPlus, '+');
			this.newsTerms = this.newsTerms.replace(regMinus, '-');
			this.newsTerms = this.newsTerms.replace(regModify, '*');
		},
		clearIdent: function (isclear, data){
			var result = data.replace(/\d+/g, '');
			return isclear ? data : result;
		},
		showMessage: function (data){
			this.showMessageData = data;
			this.closeMessge(data.s);
		},
		clickPlay: function (){
			this.btnInfo = '处理中…';
			this.btnClass = 'btn btn-primary my-2';
		},
		clearSpace: function(){
			this.newTermsData = this.newTermsData.replace(/[\r\n]\s/g, '\r')
		},
		clickHistory: function(){
			this.updates = !this.updates;
			this.isHover = !this.isHover;
		},
		closeMessge: function(s){
			var __this = this;
			if (s){
				setTimeout(()=>{
					__this.showMessageData.show = false;
				},s)
			} else {
				setTimeout(()=>{
					__this.showMessageData.show = false;
				},3000)
			}
		},
		closeLayer: function (){
			this.layer = {show: false};
			this.setCookie('showUpdate', this.updateHistory[this.updateHistoryLength].ver, 365);
			this.bodyblur(0);
		},
		backHandingBtn: function(){
			var __this = this;
			setTimeout(()=>{
				__this.btnInfo = '开始处理';
				__this.btnClass = 'btn btn-light my-2';
			}, 500)
		},
		MillisecondToDate:function (msd) {
			var time = parseFloat(msd) / 1000;
			if (null != time && "" != time) {
				if (time > 60 && time < 60 * 60) {
					time = parseInt(time / 60.0) + "分" + parseInt((parseFloat(time / 60.0) -
						parseInt(time / 60.0)) * 60) + "秒";
				}
				else if (time >= 60 * 60 && time < 60 * 60 * 24) {
					time = parseInt(time / 3600.0) + "时" + parseInt((parseFloat(time / 3600.0) -
						parseInt(time / 3600.0)) * 60) + "分" +
						parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
						parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
				}
				else if (time >= 1000){
					time = parseInt(time) + "秒";
				}
				else {
					time = msd + "毫秒";
				}
			}
			return time;
		},
		switchControlFn: function (){
			this.switchControl = !this.switchControl;
		},
		oldTermsInput: function() {
			this.oldTerms = this.oldTerms += '\t';
		},
		newsTermsInput: function() {
			this.newsTerms = this.newsTerms += '\t';
		},
		outTermsInput: function() {
			this.outTerms = this.outTerms += '\t';
		},
		AkeyTermsInput: function() {
			this.AkeyTerms = this.AkeyTerms += '\t';
		},
		setCookie: function (cname,cvalue,exdays){
			var d = new Date();
			d.setTime(d.getTime()+(exdays*24*60*60*1000));
			var expires = "expires="+d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		getCookie: function (cname){
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) 
			{
				var c = ca[i].trim();
				if (c.indexOf(name)==0) return c.substring(name.length,c.length);
			}
			return "";
		},
		bodyblur: function (to){
			var $s = (s) => {
				return document.querySelector(s);
			}
			var bl = 'blur(3px)';
			if (to == 0){
				$s('#header').style.filter =
				$s('.main-container').style.filter =
				$s('#util').style.filter =
				$s('#footer').style.filter = '';
			} else {
				$s('#header').style.filter = 
				$s('.main-container').style.filter = 
				$s('#util').style.filter = 
				$s('#footer').style.filter = bl;
			}
		},
		showHello: function (){
			var isShowUpdate = this.getCookie('showUpdate');
			var newVer = parseFloat(this.updateHistory[this.updateHistoryLength].ver);

			if (isShowUpdate != newVer){
				this.layer = {
					show: true,
					title: '更新说明',
					content: `
						这次版本更新${this.updateHistory[this.updateHistoryLength].cont}
						版本号为${this.updateHistory[this.updateHistoryLength].ver}，
						详情请查阅底部说明。
					`,
					class: 'card-blue'
				}
				this.bodyblur();
			}
		},
		isPhoneFn: function (){
			if (document.documentElement.clientWidth <= 750){
				this.isPhone = true;
			}
			if (!this.isPhone) {
				this.showPlate = {
					old: true,
					new: true,
					out: true,
					suc: true,
					err: true
				}
				this.switchControl = false;
			}
			for(let x in this.updateHistory){
				this.updateHistoryLength = x;
			}
		}
	}
}
</script>

<style>
.main-container {
	border-radius: 0.25rem;
	overflow: hidden;
	z-index: 50;
}
.translateRotate-enter-active, .translateRotate-leave-active {
	transition: all 0.5s;
}
.translateRotate-enter, .translateRotate-leave-to {
	transform: translate3d(0, -10px, 10px) rotate3d(-2, 0, 0, -30deg);
	opacity: 0;
}
.slide-enter-active, .slide-leave-active {
	transition: all .3s linear;
}
.slide-enter, .slide-leave-to {
	height:  0;
	opacity: 0;
}
textarea {
	width: 100%;
	height: 200px;
	resize: none;
	padding: 5px 10px;
	border: 1px solid #E0E3DA;
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
	border: 1px solid #E0E3DA;
	border-top: 0;
	padding-left: 5px;
	transition: all .3s;
	animation: info-animate 1s ease-in-out forwards;
}
@keyframes info-animate {
	form {
		height: 0;
		overflow: hidden;
	}

	to {
		height: 26px;
		overflow:auto;
	}
}
.textarea-info {
	float: right;
	opacity: .7;
	margin-right: 5px;
}
.controls-btn {
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	background: #013449;
	z-index: 999;
}
.custom-control .custom-control-label::after,
.custom-control .custom-control-label::before {
	top: 10px;
	left: 5px;
}

.layer-card {
	position: fixed;
	margin-top: 35%;
	width: 85%;
	box-shadow: 0 0 5px rgba(0,0,0,.5);
	z-index: 1035 !important;
}

.layer-card + .layer-card-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 105%;
	height: 105%;
	background: rgba(0,0,0,.7);-webkit-filter: blur(5px); /* Chrome, Safari, Opera */
    filter: blur(5px);
	z-index: 1031;
}

@media (min-width: 375px) {
	.layer-card {
		margin-top: 40%;
		width: 80%;
	}
}

@media (min-width: 414px) {
	.layer-card {
		margin-top: 42%;
		width: 85%;
	}
}

@media (min-width: 512px) {
	.layer-card {
		margin-top: 30%;
		width: 50%;
	}
}

@media (min-width: 768px) {
	.layer-card {
		width: 50%;
		margin-top: 10%;
	}
	.controls-btn {
		position: static;
		background: 0;
	}
}

@media (min-width: 1000px) {
	.layer-card {
		width: 45%;
	}
}

.fzx {
	font-size: 12px;
}
.fzb {
	font-size: 16px;
}
.history-arrow {
	transition: all 0.5s;
}
.history-active {
	transition: all 0.5s;
	transform: rotate(90deg)
}
.history-card {
	max-height: 300px;
	overflow-y: scroll;
}
.history-card:hover .history-arrow {
	transition: all 0.5s;
	transform: rotate(90deg)
}
</style>
