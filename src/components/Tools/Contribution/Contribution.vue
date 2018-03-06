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
	<p class="alert alert-secondary">申请表词库处理工具v1.0</p>
	<p class="bg-light">转换后词组，顺序会错乱，可以使用BashShell中sort工具进行排序，也可以使用编写好的sh工具进行排序。<a href="https://gitee.com/nmlixa/Rime_JD/tree/master/Extended" target="_black">工具1sortTerms.sh</a></p>
</div>
</template>

<script>
import $ from 'jquery';
export default {
	name: 'Contribution',
	data() {
		return {
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
			demoNewData: `剥壳	blkeav	+
静力学	jlxhv	-
动力学	dlxhva	m
万夫莫开	wfmk	m
折子	fzxki	+`
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
				this.newTermsData += thisOldData.word[y] + '\t' + thisOldData.code[y] + '\n';
			}
			//2 遍历新词条
			for(var x in thisNewData.word){
				//add
				if(thisNewData.add[x]) {
					//判断词组是否已存在
					reg = new RegExp('[\\u4e00-\\u9fa5]+\\t\\b' + thisNewData.code[x] + '\\b', 'g')
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.search(reg) == -1){
						this.newTermsData += out + '\n';
						this.successInfoData += out + '\t' + '（添加成功）'+'\n';
						AddNum ++;
					} else {
						this.errorInfoData += out + '\t' + '（添加时，存在编码或编码错误）'+'\n';
						ErrorNum ++;
					}
				//modify
				} else if (thisNewData.modify[x]) {
					reg = new RegExp('[\\u4e00-\\u9fa5]+\\t\\b' + thisNewData.code[x] + '\\b', 'g')
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.search(reg) != -1) {
						this.newTermsData = this.newTermsData.replace(reg, out);
						this.successInfoData += out + '\t' + '（修改成功）'+'\n';
						ModifyNum ++;
					} else {
						this.errorInfoData += out + '\t' + '（修改时，未找到）'+'\n';
						NoNum ++;
					}
				//delete
				} else if (thisNewData.delete[x]) {
					reg = '/' + thisNewData.word[x] + '\t[a-z]+/g';
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					if (this.newTermsData.indexOf(thisNewData.word[x]) != -1){
						this.newTermsData = this.newTermsData.replace(eval(reg), '');
						this.successInfoData += out + '\t' + '（删除成功）'+'\n';
						DelNum ++;
					} else {
						this.errorInfoData += out + '\t' + '（删除时，未找到）'+'\n';
						NoNum ++;
					}
				//未知
				} else {
					out = thisNewData.word[x] + '\t' + thisNewData.code[x];
					this.errorInfoData += out + '\t' +'（未知操作属性非+-m）' + '\n';
					ErrorAttr ++;
				}
			}
			this.successInfoData += `成功： 添加 ${AddNum} 个, 修改 ${ModifyNum} 个, 删除 ${DelNum} 个。\n`;
			this.errorInfoData += `失败： 错误 ${ErrorNum} 个, 没找到 ${NoNum} 个, 没操作符 ${ErrorAttr} 个。\n`;
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
			if (formName == "newsTermsData") {
				this[formName].test = this.newsTerms.split(/[\t\R\n]/g);
			} else {
				this[formName].test = this.oldTerms.split(/[\t\R\n]/g);
			}
			this[formName].add = [];
			this[formName].obj = {};
			this[formName].obj.word = [];
			this[formName].obj.code = [];
			this[formName].obj.add = [];
			this[formName].obj.modify = [];
			this[formName].obj.delete = [];
			for (var x in this[formName].test) {
				var isChinese = /[\u4e00-\u9fa5]/g.test(this[formName].test[x]);
				var isCode = /[a-z]{2,}/g.test(this[formName].test[x]);
				if (isChinese){
					this[formName].obj.word.push(this[formName].test[x]);
				} else if (isCode){
					this[formName].obj.code.push(this[formName].test[x]);
				} else {
					switch (this[formName].test[x]) {
						case '+':
							this[formName].obj.add.push(true);
							this[formName].obj.modify.push(false);
							this[formName].obj.delete.push(false);
							break;
						case 'm':
							this[formName].obj.add.push(false);
							this[formName].obj.modify.push(true);
							this[formName].obj.delete.push(false);
							break;
						case '-':
							this[formName].obj.add.push(false);
							this[formName].obj.modify.push(false);
							this[formName].obj.delete.push(true);
						default:
							break;
					}
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
</style>
