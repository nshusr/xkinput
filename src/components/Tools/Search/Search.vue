<template>
  <Row style='max-width: 600px; margin: 0 auto;'>
    <Row type='flex' justify='center'>
      <Card style='width: 100%;'>
        <h3>星空单字查码工具</h3>
        <Form status-icon :model='formData' :rules='rules' ref='formData'>
          <FormItem label='词条：' prop='keyword'>
            <Input type='text' v-model='formData.keyword' placeholder='请输入你要查询的字词'></Input>
          </FormItem>
          <FormItem label='方案：' prop='programName'>
            <Select v-model='formData.programName' placeholder='请选择一个方案文件'>
              <Option label='键道6' value='xkjdl'></Option>
              <Option label='一笔' value='xkyb'></Option>
              <Option label='两笔' value='xklb'></Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button @click='search'>查询</Button>
            <Button @click='clear'>清除</Button>
            <Button @click='help = !help'>帮助</Button>
          </FormItem>
        </Form>
      </Card>
    </Row>
    <Row>
      <Card v-if='help'>
        <h4>键道6说明</h4>
        <Table :show-header='false' border :columns='jdlhelpColumns' :data='jdlHelp'></Table>
      </Card>
    </Row>
    <Card>
      <Row>
        <Table :columns='contentColumns' stripe :data='content' :loading='isSearch'>
        </Table>
      </Row>
    </Card>
  </Row>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      formData: {
        keyword: '',
        programName: ''
      },
      rules: {
        keyword: [
          {
            type: 'string',
            required: true,
            message: '请输入要查询的内容！',
            trigger: 'blur'
          }
        ],
        programName: [
          { validator: this.getProgram, required: true, trigger: 'change' }
        ]
      },
      jdlhelpColumns: [
        {
          title: '1',
          key: '1'
        },
        {
          title: '2',
          key: '2'
        },
        {
          title: '3',
          key: '3'
        },
        {
          title: '4',
          key: '4'
        }
      ],
      contentColumns: [
        {
          title: '序',
          type: 'index',
          width: 60
        },
        {
          title: '词条',
          key: 'word'
        },
        {
          title: '读音',
          key: 'pronunciation'
        },
        {
          title: '编码',
          key: 'code'
        },
        {
          title: '拆分',
          key: 'split'
        }
      ],
      alertType: 'info',
      alertInfo: '请选择一个方案',
      help: false,
      contnum: 0,
      program: [],
      oldProgram: '',
      content: [],
      isSearch: false,
      jdlHelp: [
        {
          '1': '水/氵<br>a',
          '2': '人/亻<br>i',
          '3': '口<br>o',
          '4': '木<br>v'
        },
        {
          '1': '草/艹<br>ii',
          '2': '贝<br>ao',
          '3': '土/士<br>vo',
          '4': '金/钅<br>io'
        },
        {
          '1': '日<br>oi',
          '2': '十<br>uo',
          '3': '手<br>iu'
        }
      ]
    };
  },
  methods: {
    search() {
      this.$refs['formData'].validate(valid => {
        if (valid) {
          var __this = this;
          this.isSearch = true;
          setTimeout(() => {
            var keyw = this.formData.keyword.split('');
            /* 计数 */
            var result = 1;
            /* 遍历查找关键字 */
            for (var txt in keyw) {
              for (var key in __this.program) {
                if (__this.program[key].word == keyw[txt]) {
                  __this.content.push({
                    num: result++,
                    word: keyw[txt],
                    pronunciation: __this.program[key].pronunciation,
                    code: __this.program[key].code,
                    split: __this.program[key].split
                  });
                  __this.contnum++;
                }
              }
              result = 1;
            }
            this.isSearch = false;
          }, 300);
        }
      });
    },
    clear() {
      for (let i = 0; i < this.contnum; i++) {
        this.content.pop();
      }
    },
    getProgram(rule, value, callback) {
      if (value === '') {
        callback(new Error('请选择一个方案！'));
      } else {
        this.$Message.loading({
          content: '正在加载方案文件……'
        });
        this.program = require('./' + value + '.json');

        var programSelect =
          { xkjdl: '键道6', xkyb: '一笔', xklb: '两笔' }[value] || '无方案';

        this.$Message.destroy();
        this.clear();
        if (this.oldProgram != value && this.program) {
          this.$Message.success(`已切换到${programSelect}方案词库`);
        }
        this.oldProgram = value;
        callback();
      }
    }
  }
};
</script>

<style>
</style>
