webpackJsonp([6],{"5W1q":function(t,o){},AS41:function(t,o,n){t.exports=n.p+"static/img/background.3cdd6be.jpg"},NHnr:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("/5sW"),s=n("7t+N"),a=n.n(s),i={name:"Nav",data:function(){return{logoicon:'<i class="fa fa-home"></i>'}},mounted:function(){a()(window).scroll(function(){a()(window).scrollTop()>200?a()("#header").addClass("fixed-top slide-down bg-dark"):a()("#header").removeClass("fixed-top slide-down bg-dark")})}},r={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"row pt-3 pb-3",attrs:{id:"header"}},[n("a",{staticClass:"btn col-1 offset-1 text-white",attrs:{href:"http://daniushuangpin.ys168.com",target:"_black"}},[t._v("网盘")]),t._v(" "),n("router-link",{staticClass:"btn col-2 offset-3 text-white",attrs:{to:"/jdweb/dist"},domProps:{innerHTML:t._s(t.logoicon)}}),t._v(" "),n("div",{staticClass:"dropdown col-1 offset-2 offset-sm-3 "},[n("button",{staticClass:"btn bg-alpha dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("\n            工具\n        ")]),t._v(" "),n("div",{staticClass:"dropdown-menu dropdown-menu-right"},[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/jdweb/dist/Doc"}},[t._v("官方文档")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"https://gitee.com/thxnder/xxjd/wikis/pages?title=1-%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B&parent=%E4%B8%80%E3%80%81%E3%80%8A%E6%98%9F%E7%A9%BA%E9%94%AE%E9%81%93%E3%80%8B%E6%96%B9%E6%A1%88",target:"_black"}},[t._v("小小文档")]),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"https://739497722.docs.qq.com/ipGva4mn5bo",target:"_black"}},[t._v("在线加词")]),t._v(" "),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/jdweb/dist/Tools/Search"}},[t._v("查码工具")]),t._v(" "),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/jdweb/dist/Tools/Contribution"}},[t._v("加词处理")]),t._v(" "),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/jdweb/dist/Tools/Study"}},[t._v("跟打器")])],1)])],1)},staticRenderFns:[]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"row text-center bg-light"},[o("p",{staticClass:"col-12 mt-1 mb-0"},[this._v("© 2018 星空键道")]),this._v(" "),o("p",{staticClass:"col-12"},[this._v("加入"),o("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5sTEYIQ"}},[this._v("大牛双拼&星空输入法")])])])}]};var l={name:"Utilites",data:function(){return{}},mounted:function(){a()(".goTop").addClass("d-none").removeClass("d-block"),a()(".download").addClass("d-none").removeClass("d-block"),a()(window).scroll(function(){a()(window).scrollTop()>550?a()(".goTop").addClass("d-block").removeClass("d-none"):a()(window).scrollTop()>280?a()(".download").addClass("d-block").removeClass("d-none"):(a()(".goTop").addClass("d-none").removeClass("d-block"),a()(".download").addClass("d-none").removeClass("d-block"))})},methods:{goTop:function(){a()("html,body").animate({scrollTop:top},1e3)}}},c={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("div",{staticClass:"util fixed-bottom fixed-right",staticStyle:{left:"auto",right:"30px",top:"auto",bottom:"100px"}},[o("router-link",{staticClass:"btn text-dark bg-light d-block mb-1 search",attrs:{to:"/jdweb/dist/Tools/Search"}},[o("i",{staticClass:"fa fa-search"})]),this._v(" "),o("router-link",{staticClass:"btn text-dark bg-light d-block mb-1 download",attrs:{to:"/jdweb/dist/Tools/Download"}},[o("i",{staticClass:"fa fa-download"})]),this._v(" "),o("button",{staticClass:"btn d-block goTop",on:{click:this.goTop}},[o("i",{staticClass:"fa fa-arrow-up"})])],1)])},staticRenderFns:[]};var u={name:"app",components:{"v-nav":n("VU/8")(i,r,!1,function(t){n("lq5x")},null,null).exports,"v-footer":n("VU/8")({name:"Footer"},d,!1,function(t){n("aIMB")},null,null).exports,"v-utiltes":n("VU/8")(l,c,!1,function(t){n("gBt4")},null,null).exports},data:function(){return{bg:{backgroundImage:"url("+n("AS41")+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundAttachment:"fixed"},bgcolor:{backgroundColor:"rgba(0, 0, 0, 0.4)"}}},mounted:function(){var t=this;document.onkeydown=function(o){o=o||event;var n=window.location.href;if(o.ctrlKey&&116==o.keyCode)n="http://localhost:8080/jdweb/dist/Tools/Contribution";else if(116==o.keyCode){if(!/.*\/jdweb\/dist$/.test(n))return o.preventDefault(),confirm("刷新将跳转首页，是否前往？")&&t.$router.push("/jdweb/dist"),!1;n="http://localhost:8080/jdweb/dist/Tools/Contribution"}}}},b={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"mainbg",style:this.bg},[o("div",{staticClass:"container-fluid",style:this.bgcolor},[o("v-nav"),this._v(" "),o("router-view"),this._v(" "),o("v-footer"),this._v(" "),o("v-utiltes")],1)])},staticRenderFns:[]};var f=n("VU/8")(u,b,!1,function(t){n("a7wG")},null,null).exports,p=n("/ocq");e.a.use(p.a);var h=new p.a({mode:"history",routes:[{path:"/jdweb/dist",name:"Home",component:function(){return n.e(0).then(n.bind(null,"wqTG"))}},{path:"/jdweb/dist/Doc",name:"Doc",component:function(){return n.e(3).then(n.bind(null,"wHRJ"))}},{path:"/jdweb/dist/Download",name:"Download",component:function(){return n.e(4).then(n.bind(null,"DcKT"))}},{path:"/jdweb/dist/Tools/Search",name:"Search",component:function(){return n.e(1).then(n.bind(null,"NnbT"))}},{path:"/jdweb/dist/Tools/Contribution",name:"Contribution",component:function(){return n.e(2).then(n.bind(null,"zyUd"))}},{path:"/jdweb/dist/Tools/Study",name:"Study",component:function(){return n.e(5).then(n.bind(null,"3LeL"))}}]});n("qb6w"),n("5W1q"),n("K3J8");new e.a({el:"#app",router:h,render:function(t){return t(f)}})},a7wG:function(t,o){},aIMB:function(t,o){},gBt4:function(t,o){},lq5x:function(t,o){},qb6w:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.930e39f3aeecee3d1ded.js.map