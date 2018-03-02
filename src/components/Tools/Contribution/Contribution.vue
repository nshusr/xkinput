<template>
<div class="container text-center">
  <div class="row">
    <div class="col-6 p-0">
      <textarea v-model="oldTerms" @keydown.tab.prevent="oldTermsInput" class="form-control position-relative w-100" cols="30" rows="10" placeholder="请输入旧词库数据"></textarea>
      <span class="position-absolute font-weight-light" v-if="oldTerms" style="right: 30px; bottom: 15px;">旧词库数据</span>
    </div>
    <div class="col-6 p-0">
      <textarea v-model="newsTerms" @keydown.tab.prevent="newsTermsInput" class="form-control position-relative w-100" cols="30" rows="10" placeholder="请输入新加词库（词条[tab]编码[tab]{+/m/-}"></textarea>
      <span class="position-absolute font-weight-light" v-if="newsTerms" style="right: 30px; bottom: 15px;">加词词库条目</span>
    </div>
    <div class="col-6 p-0">
      <textarea v-model="outTerms" @keydown.tab.prevent="outTermsInput" class="form-control position-relative w-100" cols="30" rows="10" placeholder="输出转换后内容"></textarea>
      <span class="position-absolute font-weight-light" v-if="outTerms" style="right: 30px; bottom: 15px;">输出转换后内容</span>
    </div>
    <div class="col-6 p-0">
      <textarea v-model="AkeyTerms" @keydown.tab.prevent="AkeyTermsInput" class="form-control position-relative w-100" cols="30" rows="10" placeholder="输出需要手动调整的词条"></textarea>
      <span class="position-absolute font-weight-light" v-if="AkeyTerms" style="right: 30px; bottom: 15px;">需手动调整内容与错误</span>
    </div>
  </div>
  <button class="btn btn-primary my-2" @click="handleTerms">开始处理</button>
  <p class="alert alert-secondary">Beta v0.1版本</p>
</div>
</template>

<script>
export default {
  name: 'Contribution',
  data() {
    return {
      oldTerms: `教我	jcwlu
教你	jcnk
教他	jctsui
教她	jctsua
教它	jctsuo
约她	yhtsa`,
      newsTerms: `教我	jcwlu	-
教你	jiaoni	m
教他	jctsui	m
我的  wwod +
教她	jctsua	+
教它	jctsuo	+
约她	yhtsa	+`,
      outTerms: '',
      AkeyTerms: '',
      oldTermsData: {},
      newsTermsData: {},
      AkeyTermsData: '',
      newTermsData: ''
    }
  },
  methods: {
    handleTerms: function() {
      //重置数据
      this.TermsHandle('oldTermsData');
      this.TermsHandle('newsTermsData');
      this.newTermsData = this.AkeyTermsData = '';
      //设置公共属性
      var __this = this;
      var oldTermsBack = ''
      var oldTermsCodeBack = ''
      //设置文本、编码、属性
      for (let x in this.newsTermsData.obj.word){
        for (let y in this.oldTermsData.obj.word){

          if (this.oldTermsData.obj.word[x] == this.newsTermsData.obj.word[x]) {
            if (oldTermsBack != this.newsTermsData.obj.word[x] || oldTermsCodeBack != this.newsTermsData.obj.code[x]){

              if (this.newsTermsData.obj.add[x]){
                this.AkeyTermsData += this.newsTermsData.obj.word[x] + '\t' + this.newsTermsData.obj.code[x] + '   已存在' + '\n';
              } else if (this.newsTermsData.obj.modify[x]){
                this.newTermsData += this.newsTermsData.obj.word[x] + '\t' + this.newsTermsData.obj.code[x] + '\n';
              } else if (this.newsTermsData.obj.delete[x]){
                this.newTermsData += '';
              } else if (this.newsTermsData.obj.add[x] && this.newsTermsData.obj.word[x].length == 1){
                this.AkeyTermsData += this.newsTermsData.obj.word[x] + '\t' + this.newsTermsData.obj.code[x] + '\n';
              }

            }
            oldTermsBack = this.newsTermsData.obj.word[x];
            oldTermsCodeBack = this.newsTermsData.obj.code[x];
          } else {
            if (oldTermsBack != this.newsTermsData.obj.word[x] || oldTermsCodeBack != this.newsTermsData.obj.code[x]){

              if (this.newsTermsData.obj.add[x]){
                this.newTermsData += this.newsTermsData.obj.word[x] + '\t' + this.newsTermsData.obj.code[x] + '\n';
              } else if (this.newsTermsData.obj.modify[x]){
                this.AkeyTermsData += this.newsTermsData.obj.word[x] + '\t' + this.newsTermsData.obj.code[x] + '\n';
              } else if (this.newsTermsData.obj.delete[x]){
                this.newTermsData += '';
              } else if (this.newsTermsData.obj.word[x].length == 1){
                this.AkeyTermsData += this.newsTermsData.obj.word[x] + '\t' + this.newsTermsData.obj.code[x] + '\n';
              } else {
                this.newTermsData += this.oldTermsData.obj.word[x] + '\t' + this.oldTermsData.obj.code[x] + '\n';
              }

            }
            oldTermsBack = this.newsTermsData.obj.word[x];
            oldTermsCodeBack = this.newsTermsData.obj.code[x];
          }

        }
      }
      //填充内容
      this.outTerms = this.newTermsData;
      this.AkeyTerms = this.AkeyTermsData;
    },
    TermsHandle: function (formName){
      if (formName == "newsTermsData") {
        this[formName].test = this.newsTerms.split(/[\t\n]/g);
      } else {
        this[formName].test = this.oldTerms.split(/[\t\n]/g);
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
    oldTermsInput: function() {
      this.oldTerms = this.oldTerms += '	';
    },
    newsTermsInput: function() {
      this.newsTerms = this.newsTerms += '	';
    },
    outTermsInput: function() {
      this.outTerms = this.outTerms += '	';
    },
    AkeyTermsInput: function() {
      this.AkeyTerms = this.AkeyTerms += '	';
    },
    insertText: function (obj,str) {
        if (document.selection) {
            var sel = document.selection.createRange();
            sel.text = str;
        } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
            var startPos = obj.selectionStart,
                endPos = obj.selectionEnd,
                cursorPos = startPos,
                tmpStr = obj.value;
            obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
            cursorPos += str.length;
            obj.selectionStart = obj.selectionEnd = cursorPos;
        } else {
            obj.value += str;
        }
    }

  }
}
</script>

<style>

</style>
