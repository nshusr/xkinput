<template>
<div class="card mx-auto w-90 p-3 mb-4 w-md-50">
  <div class="card-body">
    <h4 class="card-title">星空单字查码工具</h4>
    <p :class="alertClass">{{alertInfo}}</p>
    <form>
      <div class="form-group">
        <label for="">词条：</label>
        <input class="form-control" v-model="keyword" type="text" @keydown.space.enter.prevent="search" @keyup.delete="clear" placeholder="输入你要查询的字" />
      </div>
      <div class="form-group">
        <label for="">方案：</label>
        <select class="form-control" @change="selectProgram" v-model="programName">
            <option disabled value="">请选择</option>
            <option value="xkjdl">键道6</option>
            <option value="xkyb">一笔</option>
            <option value="xklb">两笔</option>
        </select>
      </div>
      <div class="form-group">
        <input type="button" class="btn" @click="search" value="查询" />
        <input type="button" class="btn" @click="clear" value="清除" />
        <input type="button" class="btn" @click="help = !help" value="帮助" />
      </div>
    </form>
  </div>
  <div v-if="help">
    <table class="table text-center">
      <caption>
        键道6说明
      </caption>
      <tbody>
        <tr>
          <td>水/氵<br>a</td>
          <td>人/亻<br>i</td>
          <td>口<br>o</td>
          <td>木<br>v</td>
        </tr>
        <tr>
          <td>草/艹<br>ii</td>
          <td>贝<br>ao</td>
          <td>土/士<br>vo</td>
          <td>金/钅<br>io</td>
        </tr>
        <tr>
          <td>日<br>oi</td>
          <td>十<br>uo</td>
          <td>手<br>iu</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="contents">
    <table class="table table-hover" v-show="searchSwitch">
      <thead>
        <th scope="col" style="width: 60px">总数</th>
        <th scope="col">词条</th>
        <th scope="col">读音</th>
        <th scope="col">编码</th>
        <th scope="col">拆分</th>
      </thead>
      <tbody>
        <tr v-for="cont in content" :key="cont.num">
          <td scope="row">{{ cont.num }}</td>
          <td>{{ cont.word }}</td>
          <td>{{ cont.pronunciation }}</td>
          <td>{{ cont.code }}</td>
          <td>{{ cont.split }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import Inputs from '../../Inputs/Inputs'
export default {
  name: 'Search',
  data() {
    return {
      alertClass: 'alert alert-info',
      alertInfo: '请选择一个方案',
      searchSwitch: false,
      keyword: '',
      programName: '',
      help: false,
      contnum: 0,
      program: [],
      content: [],
    }
  },
  methods: {
    search: function($event) {
      if (!this.programName){
        this.alertClass = "alert alert-danger"
      }
      var keyw = this.keyword.split('');
      /* 计数 */
      var result = 1;
      /* 遍历查找关键字 */
      for (var txt in keyw) {
        for (var key in this.program) {
          if (this.program[key].word == keyw[txt]) {
            this.content.push({
              num: result++,
              word: keyw[txt],
              pronunciation: this.program[key].pronunciation,
              code: this.program[key].code,
              split: this.program[key].split,
            });
            this.contnum++;
          }
        }
        result = 1;
      }
      this.searchSwitch = true;
    },
    clear: function() {
      for (let i = 0; i < this.contnum; i++) {
        this.content.pop();
      }
    },
    selectProgram: function(select) {
      this.program = require('./' + this.programName + '.json');
      var programSelect = select.target.value;
      switch (programSelect) {
        case 'xkjdl':
          programSelect = '键道6';
          break;
        case 'xkyb':
          programSelect = '一笔';
          break;
        case 'xklb':
          programSelect = '两笔';
          break;
      }
      this.alertClass = 'alert alert-success fixed-top text-center w-75 mx-auto';
      this.alertInfo = '成功切换到' + programSelect + '方案。';
      this.clear();
      this.search();
      this.closeAlert();
    },
    closeAlert: function() {
      var __this = this;
      setTimeout(function() {
        __this.alertClass = "d-none";
      }, 3000)
    }
  },
  components: {
    'v-inputs': Inputs
  }
}
</script>

<style scoped>
@media (min-width: 576px) {
  .w-md-50 {
    width: 70%
  }
}

@media (min-width: 768px) {
  .w-md-50 {
    width: 60%
  }
}

@media (min-width: 992px) {
  .w-md-50 {
    width: 50%
  }
}

@media (min-width: 1200px) {
  .w-md-50 {
    width: 40%
  }
}
</style>
