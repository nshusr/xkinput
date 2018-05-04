<template>
<div class="container text-center">
	<div class="row">
		<div class="col-6 p-0">
			<textarea v-model="oldTerms" @keydown.tab.prevent="oldTermsInput" class="form-control position-relative" cols="30" rows="8" placeholder="词条 [tab] 编码" v-html="oldAttr"></textarea>
			<span class="position-absolute font-weight-light textarea-title">原词库数据</span>
		</div>
		<div class="col-6 p-0">
			<textarea v-model="newsTerms" @keydown.tab.prevent="newsTermsInput" class="form-control position-relative" cols="30" rows="8" placeholder="词条 [tab] 编码 [tab] +/-/m" v-html="newAttr"></textarea>
			<span class="position-absolute font-weight-light textarea-title">更正表数据</span>
		</div>
		<div class="col-4 p-0">
			<textarea readonly v-model="outTerms" @keydown.tab.prevent="outTermsInput" class="form-control position-relative" cols="30" rows="8" placeholder="输出转换后内容"></textarea>
			<span class="position-absolute font-weight-light textarea-title">输出转换后内容</span>
		</div>
		<div class="col-4 p-0">
			<textarea readonly v-model="successInfo" class="form-control position-relative" cols="30" rows="8" placeholder="输出成功信息"></textarea>
			<span class="position-absolute font-weight-light textarea-title">输出成功信息</span>
		</div>
		<div class="col-4 p-0">
			<textarea readonly v-model="errorInfo" class="form-control position-relative" cols="30" rows="8" placeholder="输出错误信息"></textarea>
			<span class="position-absolute font-weight-light textarea-title">输出错误信息</span>
		</div>
	</div>
	<button :class="btnClass" @click="handleTerms">{{btnInfo}}</button>
	<button class="btn" @click="createDemo">测试内容</button>
	<button class="btn" @click="clearSpace">去除空行</button>
	<button class="btn btn-danger" @dblclick="clearContent" @click="clearInfo = '双击生效清空'">{{clearInfo}}</button>
	<a class="btn btn-light" href="https://739497722.docs.qq.com/ipGva4mn5bo" target="_black">键道6加词</a>
	<p class="alert alert-secondary mb-1">申请表词库处理工具v{{vertion}}</p>
	<p class="bg-light p-1 rounded mb-1">转换后词组，顺序会错乱，可以使用BashShell中sort工具进行排序，也可以使用编写好的sh工具进行排序。<a href="https://gitee.com/nmlixa/Rime_JD/tree/master/TermsTools" target="_black">工具1sortTerms.sh</a><br><mark>请注意！本工具不支持单字、英文（含英文）、重码、操作！！！修改后编码会出现混乱！</mark></p>
	<div class="text-left bg-light p-1 mb-1 rounded fzx">
		<button class="btn" @click="updates = !updates">更新历史</button>
		<div v-if="updates" class="mt-1">
			<p>更新{{vertion}}：升级删除时确定编码词条才删除，改善提示内容。</p>
			<p>更新1.4：修复主动修改!m为*的步骤错误问题。</p>
			<p>更新1.3：使用*操作符作用主修改操作符，兼容!m修改符。</p>
			<p>更新1.2：新增*操作符，等同于!m，自动解决，全角半角问题。</p>
			<p>更新1.1：自动解决，全角半角问题。</p>
			<p>更新1.0：正常使用，发布版本。</p>
		</div>
	</div>
</div>
</template>

<script>
import $ from 'jquery';
export default {
	name: 'Contribution',
	data() {
		return {
			vertion: 1.5,
			oldTerms: '',
			newsTerms: '',
			oldAttr: '请输入原词库\n格式： 词条 [tab] 编码',
			newAttr: '请输入新加词库\n格式： 词条 [tab] 编码 [tab] +/m/-',
			btnClass: 'btn my-2',
			btnInfo: '开始处理',
			outTerms: '',
			successInfo: '',
			errorInfo: '',
			oldTermsData: {},
			newsTermsData: {},
			newTermsData: '',
			successInfoData: '',
			errorInfoData: '',
			clearInfo: '清空内容',
			demoOldData: `剥壳	blkeav
静力学	jlxhv
动力学	aaaaa
万夫	wfmk
折子戏	fzxki`,
			demoNewData: `blkeav	+	剥壳
jlxhv	-	静力学
dlxhva	*	动力学
wfmk	!m	万夫莫开
fzxki	+	折子`,
			updates: false
		}
	},
	methods: {
		handleTerms: function() {
			this.btnInfo = '正在处理...';
			this.btnClass = 'btn btn-primary my-2';
			//重置数据
			this.TermsHandle('oldTermsData');
			this.TermsHandle('newsTermsData');
			//设置公共属性
			var __this = this;
			var thisNewData = this.newsTermsData.obj;
			var thisOldData = this.oldTermsData.obj;
			var reg, out;
			var SuccessAll = 0;
			var ErrorAll = 0;
			var AddNum = 0;
			var ModifyNum = 0;
			var DelNum = 0;
			var ErrorNum = 0;
			var NoNum = 0;
			var ErrorAttr = 0;
			//设置文本、编码、属性
			//1 遍历旧词库
			for (let y in thisOldData.word){
				//1.1输出到输出框
				this.newTermsData += thisOldData.word[y] + '\t' + thisOldData.code[y] + '\r';
			}
			//2 遍历新词条
			for(var x in thisNewData.word){
				//add
				if(thisNewData.add[x]) {
					//判断编码是否已存在
					reg = new RegExp(`[\\b\\u4e00-\\u9fa5\\b]+\\t\\b${thisNewData.code[x]}\\b`, 'g')
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.search(reg) == -1){
						this.newTermsData += out + '\n';
						this.successInfoData += `${out}\t成功\t[+]\n`;
						SuccessAll ++;
						AddNum ++;
					} else {
						this.errorInfoData += `${out}\t已有编码\t[+]\n`;
						ErrorAll ++;
						ErrorNum ++;
					}
				//modify
				} else if (thisNewData.modify[x]) {
					reg = new RegExp(`[\\b\\u4e00-\\u9fa5\\b]+\\t\\b${thisNewData.code[x]}\\b`, 'g');
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.search(reg) != -1) {
						this.newTermsData = this.newTermsData.replace(reg, out);
						this.successInfoData += `${out}\t成功\t[*]\n`;
						SuccessAll ++;
						ModifyNum ++;
					} else {
						this.errorInfoData += `${out}\t未找到\t[*]\n`;
						ErrorAll ++;
						NoNum ++;
					}
				//delete
				} else if (thisNewData.delete[x]) {
					reg = new RegExp(`[\\b\\u4e00-\\u9fa5\\b]+\\t\\b${thisNewData.code[x]}\\b`, 'g')
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.indexOf(thisNewData.code[x]) != -1){
						if (this.newTermsData.indexOf(thisNewData.word[x]) != -1) {
							this.newTermsData = this.newTermsData.replace(eval(reg), '');
							this.successInfoData += `${out}\t成功\t[-]\n`;
							SuccessAll ++;
							DelNum ++;
						} else {
							this.errorInfoData += `${out}\t词组编码不同，已放弃删除\t[-]\n`;
							ErrorAll ++;
							NoNum ++;
						}
					} else {
						this.errorInfoData += `${out}\t未找到\t[-]\n`;
						ErrorAll ++;
						NoNum ++;
					}
				//未知
				} else {
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					this.errorInfoData += `${out}\t未知操作符号\t[?]\n`;
					ErrorAll ++;
					ErrorAttr ++;
				}
			}
			this.successInfoData += `成功统计：\n共 ${SuccessAll}个, 添加 ${AddNum} 个,\n修改 ${ModifyNum} 个, 删除 ${DelNum} 个。\n`;
			this.errorInfoData += `失败统计：\n共 ${ErrorAll}个, 错误 ${ErrorNum} 个,\n没找到 ${NoNum} 个, 没操作符 ${ErrorAttr} 个。\n`;
			//扫描去除空行
			this.clearSpace();
			//填充内容
			this.successInfo = this.successInfoData;
			this.errorInfo = this.errorInfoData;
			this.outTerms = this.newTermsData;
			this.btnInfo = '处理完成';
			this.btnClass = 'btn btn-success my-2';
			setTimeout(function (){
				__this.btnInfo = '开始处理';
				__this.btnClass = 'btn my-2';
			}, 2000);
			//清理数据
			this.successInfoData = this.errorInfoData = this.newTermsData = '';
		},
		TermsHandle: function (formName){
			//转换符号
			this.allToHalf();
			if (formName == "newsTermsData") {
				this[formName].test = this.newsTerms.split(/[\t\r\n]/g);
			} else {
				this[formName].test = this.oldTerms.split(/[\t\r\n]/g);
			}
			this[formName].add = [];
			this[formName].obj = {};
			this[formName].obj.word = [];
			this[formName].obj.code = [];
			this[formName].obj.add = [];
			this[formName].obj.modify = [];
			this[formName].obj.delete = [];
			for (var x in this[formName].test) {
				var isChinese = /[\u4e00-\u9fa5]+/.test(this[formName].test[x]);
				var isOpreation = /\+|\-|\*/.test(this[formName].test[x]);
				var isCode = /[a-z]+/.test(this[formName].test[x]) && /^[^\!]+/.test(this[formName].test[x]);
				if (isChinese){
					this[formName].obj.word.push(this[formName].test[x]);
				} else if (isOpreation) {
					switch (this[formName].test[x]) {
						case '+':
							this[formName].obj.add.push(true);
							this[formName].obj.modify.push(false);
							this[formName].obj.delete.push(false);
							break;
						case '*':
							this[formName].obj.add.push(false);
							this[formName].obj.modify.push(true);
							this[formName].obj.delete.push(false);
							break;
						case '-':
							this[formName].obj.add.push(false);
							this[formName].obj.modify.push(false);
							this[formName].obj.delete.push(true);
							break;
						default:
							break;
					}
				} else if (isCode){
					this[formName].obj.code.push(this[formName].test[x]);
				}
			}
		},
		createDemo: function(){
			this.oldTerms = this.demoOldData;
			this.newsTerms = this.demoNewData;
		},
		clearContent: function(){
			this.oldTerms = '';
			this.newsTerms = '';
			this.outTerms = '';
			this.AkeyTerms = '';
		},
		allToHalf: function(){
			var regPlus = /\＋/g;
			var regMinus = /\-/g;
			var regModify = /\!m|\！m|\！M|\!M|\＊/g;
			this.newsTerms = this.newsTerms.replace(regPlus, '+');
			this.newsTerms = this.newsTerms.replace(regMinus, '-');
			this.newsTerms = this.newsTerms.replace(regModify, '*');
			this.newsTerms = this.newsTerms.replace(regModify, '*');
			this.newsTerms = this.newsTerms.replace(regModify, '*');
			this.newsTerms = this.newsTerms.replace(regModify, '*');
			this.newsTerms = this.newsTerms.replace(regModify, '*');
		},
		clearSpace: function(){
			this.newTermsData = this.newTermsData.replace(/[\r\n]\s/g, '\r')
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
		}
	}
}
</script>

<style>
.textarea-title {
	display: block;
	color: black;
	right: 15px;
	bottom: 5px;
	opacity: 0.8;
}
textarea:focus + .textarea-title {
	display:none;
}
.fzx {
	font-size: 12px;
}
.add-exists {
	color: #932;
}
.modify-null {
	color: #746;
}
.delete-null {
	color: #654;
}
.null-symbol {
	color: #456;
}
</style>
