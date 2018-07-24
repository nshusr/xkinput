<template>
    <div>
        <div id="util" class="util fixed-bottom fixed-right" style="left: auto; right: 30px; top: auto; bottom: 100px;">
            <router-link class="btn text-dark bg-light d-block mb-1 search" to="/jdweb/Tools/Search"><i class="fa fa-search"></i></router-link>
            <router-link class="btn text-dark bg-light d-block mb-1 download" to="/jdweb/Download"><i class="fa fa-download"></i></router-link>
            <button class="btn d-block goTop" @click="goTop"><i class="fa fa-arrow-up"></i></button>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Utilites',
    data () {
        return {
            
        }
    },
    mounted: function () {
        $('.goTop').addClass('d-none').removeClass('d-block');
        $('.download').addClass('d-none').removeClass('d-block');
        $(window).scroll(function (){
            if ($(window).scrollTop() > 550){
                $('.goTop').addClass('d-block').removeClass('d-none');
            } else if ($(window).scrollTop() > 280) {
                $('.download').addClass('d-block').removeClass('d-none');
            } else {
                $('.goTop').addClass('d-none').removeClass('d-block');
                $('.download').addClass('d-none').removeClass('d-block');
            }
        })
    },
    methods: {
        goTop: function (){
            $("html,body").animate({"scrollTop":top}, 1000)
        }
    }
}
</script>

<style>

</style>

