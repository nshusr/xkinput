<template>
  <div class="container text-center">
      <div class="row">
            <textarea v-model="oldTerms" @keydown.tab="oldTermsInput" class="col-6" cols="30" rows="10" placeholder="请输入旧词库"></textarea>
            <textarea v-model="newsTerms" @keydown.tab="newsTermsInput" class="col-6" cols="30" rows="10" placeholder="请输入新加词库"></textarea>
            <textarea v-model="outTerms" @keydown.tab="outTermsInput" class="col-6" cols="30" rows="10" placeholder="输出已处理词条"></textarea>
            <textarea v-model="AkeyTerms" @keydown.tab="AkeyTermsInput" class="col-6" cols="30" rows="10" placeholder="输出需要手动调整的词条"></textarea>
      </div>
      <button class="btn my-2" @click="handleTerms">走起</button>
  </div>
</template>

<script>
export default {
    name: 'Contribution',
    data () {
        return {
            oldTerms: '',
            newsTerms: '',
            outTerms: '',
			AkeyTerms: '',
			termsHandle: []
        }
    },
    methods: {
        handleTerms: function (){
			this.termsHandle = this.oldTerms.replace();
			this.outTerms = this.termsHandle;
			this.outTerms += '\n' + typeof this.outTerms
        },
        oldTermsInput: function ($event){
            $event.preventDefault();
			this.oldTerms = this.oldTerms += '	';
		},
        newsTermsInput: function ($event){
            $event.preventDefault();
			this.newsTerms = this.newsTerms += '	';
		},
        outTermsInput: function ($event){
            $event.preventDefault();
			this.outTerms = this.outTerms += '	';
		},
        AkeyTermsInput: function ($event){
            $event.preventDefault();
			this.AkeyTerms = this.AkeyTerms += '	';
		}
    }
}
</script>

<style>

</style>