<template>
    <Card>
        <h4 slot='title'>键道6键盘布局</h4>
        <small slot='extra'>@吅吅大山</small>
        <Row class='inputs-talbe-row'>
            <Table
            class='inputs-talbe'
            :columns='columns1'
            :data='inputs'
            border
            stripe
            :showHeader='false'
            :ellipsis='true'></Table>
        </Row>
    </Card>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: '0',
          key: '0',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[0]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '1',
          key: '1',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[1]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '2',
          key: '2',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[2]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '3',
          key: '3',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[3]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '4',
          key: '4',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[4]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '5',
          key: '5',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[5]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '6',
          key: '6',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[6]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '7',
          key: '7',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[7]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '8',
          key: '8',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[8]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        },
        {
          title: '9',
          key: '9',
          render: (h, parmas) => {
            let result = [];
            for (let x of parmas.row[9]) {
              result.push(h('Tag', x));
            }
            return h('div', result);
          }
        }
      ],
      inputs: require('./inputs.json').data
    };
  },
  mounted: function() {}
};
</script>

<style lang='less'>
.inputs-talbe-row {
  overflow-x: auto;
  .inputs-talbe {
    min-width: 1100px;
  }
}
</style>
