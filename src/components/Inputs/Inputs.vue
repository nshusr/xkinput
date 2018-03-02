<template>
    <div>
        <blockquote class="blockquote">
            <p  class="text-light lead">键道6键盘布局</p>
        </blockquote>
        <table class="table table-striped table-light table-responsive-sm table-bordered table-hover text-center">
            <thead>
                <tr class="d-none">
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tr in inputs">
                    <td v-for="td in tr" v-html="td">
                    </td>
                </tr>
            </tbody>
        </table>
        <blockquote class="blockquote">
            <footer class="blockquote-footer">
                <cite>吅吅大山</cite>
            </footer>
        </blockquote>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
  data () {
        return {
            inputs: require('./inputs.json').data
        }
  },
  mounted: function (){
      if ($(document.body)[0].clientWidth < 575) {
          $('table').addClass('table-sm');
      }
  }
}
</script>

<style>

</style>

