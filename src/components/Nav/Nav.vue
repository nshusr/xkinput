<template>
    <div id="header" class="row pt-3 pb-3">
        <a class="btn col-1 offset-1 text-white" href="http://daniushuangpin.ys168.com" target="_black">网盘</a>
        <router-link class="btn col-2 offset-3 text-white" to="/jdweb" v-html="logoicon"></router-link>
        <div class="dropdown col-1 offset-2 offset-sm-3 ">
            <button class="btn bg-alpha dropdown-toggle" data-toggle="dropdown">
                工具
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <router-link class="dropdown-item" to="/jdweb/Doc">官方文档</router-link>
                <a class="dropdown-item" href="https://gitee.com/thxnder/xxjd/wikis/pages?title=1-%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B&parent=%E4%B8%80%E3%80%81%E3%80%8A%E6%98%9F%E7%A9%BA%E9%94%AE%E9%81%93%E3%80%8B%E6%96%B9%E6%A1%88" target="_black">小小文档</a>
                <a class="dropdown-item" href="https://739497722.docs.qq.com/ipGva4mn5bo" target="_black">在线加词</a>
                <router-link class="dropdown-item" to="/jdweb/Tools/Search">查码工具</router-link>
                <router-link class="dropdown-item" to="/jdweb/Tools/Contribution">加词处理</router-link>
                <router-link class="dropdown-item" to="/jdweb/Tools/Study">跟打器</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
	name: 'Nav',
	data () {
		return {
            logoicon: '<i class="fa fa-home"></i>'
		}
	},
	mounted: function (){
        $(window).scroll(function (){
            if($(window).scrollTop() > 200){
                $('#header').addClass('fixed-top slide-down bg-dark');
            } else {
                $('#header').removeClass('fixed-top slide-down bg-dark');
            }
        })
	}
}
</script>

<style>
.bg-alpha {
	background: rgba(0,0,0,0);
	color: white;
}
@keyframes slide-to-down {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
.slide-down {
    animation: slide-to-down .3s ease;
}
</style>
