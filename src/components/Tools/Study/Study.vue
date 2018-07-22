<template>
  <div class="container card mb-3">
    <div class="d-flex justify-content-between p-2 pt-2">
      <span class="lead text-secondary pt-2">{{termsData.name ? termsData.name : '未读取文件'}}&nbsp;{{termsData.size ? termsData.mbSize : 0}}</span>
      <div id="fileUpBox" class="">
        <!-- <label class="btn border" title="载入键道单字">键道单字</label> -->
        <label class="btn border" :class="{'btn-danger':notUpFileClass}" for="file" title="上传词库文件">上传</label>
        <input id="file" ref="file" @change="readFile" type="file">
      </div>
    </div>
    <div class="d-flex mx-auto flex-row justify-content-center align-items-center p-3">
      <label id="word" class="border-0">{{word}}</label>
      <input id="code" class="border rounded px-2" 
            maxlength="6"
            @click="isReadFile"
            :class="{'': status == 0, 'border-primary': status == 1,'border-success': status == 2, 'border-danger': status == -1}" type="text"
            @keyup.space="isRight" @keydown.space.prevent autocomplete="off"
            v-model="code" title="请输入编码">
    </div>
    <div>
      <p class="text-center">version 1.0</p>
      <p class="text-center">请选择一个Rime词库后上传体验，输入编码后空格键确定，校验成功后自动下一个。</p>
      <p class="text-center">使用英文输入法</p>
    </div>
    <div id="message" class="fixed-top w-20 alert p-3" :class="message.class" v-show="message.show">
      {{message.cont}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'study',
  data () {
    return {
      word: '字词',
      code: '',
      status: 0,
      jdl: '',
      termsData: {},
      computedData: [],
      codeClass: '',
      notUpFileClass: false,
      message: {
        show: false,
        class: '',
        cont: ''
      },
      closeTimer: false,
      nextData: {
        word: '',
        code: ''
      },
      errNum: 2
    }
  },
  methods: {
    isReadFile: function (){
      if (!this.termsData.size) {
        this.notUpFileClass = true;
        this.showMessage({
          show: true,
          class: 'alert-danger',
          cont: `未读取词库文件，请点击上传选择词库文件。`
        });
        return;
      }
    },
    isRight: function () {
      this.isFileSize();

      var x;
      var reg = new RegExp(`^.{${this.errNum}}`);
      var trim = /[\s+|\r+|\n+]/g;

      this.code = this.code.replace(trim, '');
      this.nextData.code = this.nextData.code.replace(trim, '');

      if (this.code.length >= 1) {
        if (this.nextData.code == this.code){
          this.showMessage({
            show: true,
            class: 'alert-info',
            cont: `编码：${this.nextData.code}\t词条：${this.nextData.word}\t√`
          })
          this.status = 2;
          this.errNum = 2;
          this.next();
        } else {
          this.status = -1;

          this.showMessage({
            show: true,
            class: 'alert-danger',
            cont: `错误请重新输入\t提示：共有${this.nextData.code.length}位，前${this.errNum}位是：${this.nextData.code.match(eval(reg))}\t×`
          })
          if (this.nextData.code.length > this.errNum) this.errNum++;
        }
      }
    },
    next: function (){
      var __this = this;
      setTimeout(next, 300);
      function next(){
        var random = Math.floor(Math.random()*__this.termsData.content.length+1);
        if (random % 2 == 0){
          random++;
        }
        __this.status = 0;
        __this.nextData.word = __this.word = __this.termsData.content[random];
        __this.nextData.code = __this.code = __this.termsData.content[random+1];
        __this.code = '';
      }
    },
    splitTerms: function(data) {
      this.termsData.content = data.split(/[\t\n]/);
    },
    isFileSize: function (){
      if (!this.termsData.size) {
        this.isReadFile();
        return;
      }
    },
    readFile: function () {
      var __this = this;
      
      if (this.$refs.file.files.length) {
        var file = this.$refs.file.files[this.$refs.file.files.length-1];
        var reader = new FileReader();
        if (!/yaml|txt|xls/.test(file.name)){
          this.showMessage({
            show: true,
            class: 'alert-danger',
            cont: `您上传的${file.name}文件格式不受支持。`
          });
        } else {
          this.termsData = this.$refs.file.files[this.$refs.file.files.length-1];      
          this.termsData.mbSize = this.kbToMb(this.termsData.size);
          this.termsData.result = '';

          reader.onload = function() {
            __this.termsData.result = this.result;
            __this.splitTerms(this.result);
          }

          reader.readAsText(file);

          this.notUpFileClass = false;

          this.next();

          this.showMessage({
            show: true,
            class: 'alert-success',
            cont: '词库已加载。'
          })
        }

      }
    },
    kbToMb: function (data) {
      var computedData = parseFloat(data);
      if (computedData < 1048576){
        return eval(computedData / 1024).toFixed(1) + 'KB';
      } else {
        return eval(computedData / 1048576).toFixed(1) + "MB";
      }
    },
    showMessage: function(data){
      var __this = this;
      this.message = data;
      this.closeMessage();
    },
    closeMessage: function(){
      var __this = this;
      setTimeout(function(){
        __this.message = {
          show: false,
          class: '',
          cont: ''
        }
      }, 3000);
    }
  }
}
</script>

<style>
#word {
  text-align: center;
  font-size: 33px;
  line-height: 35px;
  margin-bottom: 2px;
  color: #333;
}
#code {
  font-size: 25px;
  width: 130px;
  margin: 0 0 0 20px;
}
#fileUpBox label {
  line-height: 30px;
  margin-bottom: 0;
}
#file {
  display: none;
  opacity: 0;
  filter: opacity(alpha=0)
}
#message {
  max-width: 50%;
  right: auto;
  left: 0;
  top: 70px;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
}
</style>
