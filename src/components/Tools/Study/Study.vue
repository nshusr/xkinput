<template>
	<Row type="flex" justify="center">
		<Row style="max-width: 1200px; padding: 0 20px;">
      <Card>
        <Row type="flex" justify="center">
          <h1 class="main-title">单字词组练习工具<small>Rime词库</small></h1>
        </Row>
        <Row>
          <Card class="study-main-card">
            <span slot="title" :title="termsData.name">{{termsData.name ? termsData.name : '未读取文件'}}&nbsp;{{termsData.size ? termsData.mbSize : 0}}</span>
            <div slot="extra">
              <label class="ivu-btn ivu-btn-default" for="file">上传</label>
              <input id="file" ref="file" @change="readFile" type="file">
            </div>
            <Row type="flex" justify="center">
              <span id="word" data-clipboard-target="#word">{{word}}</span>
              <input
                class="ivu-input ivu-input-default"
                maxlength="6"
                @click="isReadFile"
                :class="{'': status == 0, 'border-primary': status == 1,'border-success': status == 2, 'border-danger': status == -1}" type="text"
                @keyup.space="isRight"
                @keydown.space.prevent
                autocomplete="off"
                v-model="code"
                placeholder="请输入词组对应编码"></button>
            </Row>
          </Card>
          <p class="text-center">version 1.1</p></div>
          <Row type="flex" justify="center" style="margin-top: 15px;">
            <Col :xs="12" :md="6" style="padding: 0 5px;">
              <p>一、请选择一个Rime词库上传。</p>
            </Col> 
            <Col :xs="12" :md="6" style="padding: 0 5px;">
              <p>二、切换使用英文输入法。</p>
            </Col> 
            <Col :xs="12" :md="6" style="padding: 0 5px;">
              <p>三、输入对应词条编码，空格确定。</p>
            </Col> 
            <Col :xs="12" :md="6" style="padding: 0 5px;">
              <p>四、校验成功自动下一个。</p>
            </Col>
          </Row>
        </Row>
      </Card>
		</Row>
  </Row>
</template>

<script>
import Clipboard from 'clipboard';
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
  mounted () {
    var clip = new Clipboard('#word'),
      __this = this;
    clip.on('success', e => {
      __this.$Message.success(`已复制`);
    })
  },
  methods: {
    isReadFile: function (){
      if (!this.termsData.size) {
        this.notUpFileClass = true;
        this.$Notice.error({
          title: `词库文件为空`,
          desc: `未读取词库文件，请点击上传选择词库文件。`
        })
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
          this.$Notice.info({
            title: `词组信息：`,
            desc: `编码：${this.nextData.code}\t词条：${this.nextData.word}\t√`
          })
          this.status = 2;
          this.errNum = 2;
          this.next();
        } else {
          this.status = -1;

          this.$Notice.error({
            title: `编码有误`,
            desc: `错误请重新输入\t提示：共有${this.nextData.code.length}位，前${this.errNum}位是：${this.nextData.code.match(eval(reg))}\t×`
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
          this.$Notice.error({
            title: `上传文件有误`,
            desc: `您上传的${file.name}文件格式不受支持。`
          })
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
          this.$Notice.error({
            title: `词组载入成功`,
            desc: `词库文件已加载完成，词库为${this.termsData.name}，词库大小${this.termsData.mbSize}。`
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
    }
  }
}
</script>

<style>
.main-title,
.main-title small {
  font-weight: lighter;
}
.study-main-card .ivu-card-extra {
  top: 6px;
}
.term-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-name {
  font-size: 25px;
}
.title-name small {
  font-size: 14px;
  font-weight: 100;
}

.help-div p {
  font-size: 14px;
  line-height: 26px;
}

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
