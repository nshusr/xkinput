(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78efa3a7"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,a,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=o(t),e=a(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),_=!o(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=_?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e}):void 0;if(!_||!p||"replace"===t&&!l||"split"===t&&!f){var h=/./[d],v=n(a,d,""[t],function(t,e,n,r,i){return e.exec===s?_&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),y=v[0],g=v[1];r(String.prototype,t,y),i(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),s=n("5f1b"),u=n("520a"),l=Math.min,f=[].push,d="split",_="length",p="lastIndex",h=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,v){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[_]||2!="ab"[d](/(?:ab)*/)[_]||4!="."[d](/(.?)(.?)/)[_]||"."[d](/()()/)[_]>1||""[d](/.?/)[_]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var o,a,c,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,l+"g");while(o=u.call(v,i)){if(a=v[p],a>d&&(s.push(i.slice(d,o.index)),o[_]>1&&o.index<i[_]&&f.apply(s,o.slice(1)),c=o[0][_],d=a,s[_]>=h))break;v[p]===o.index&&v[p]++}return d===i[_]?!c&&v.test("")||s.push(""):s.push(i.slice(d)),s[_]>h?s.slice(0,h):s}:"0"[d](void 0,0)[_]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=v(y,t,this,e,y!==n);if(r.done)return r.value;var u=i(t),f=String(this),d=o(u,RegExp),_=u.unicode,p=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),g=new d(h?u:"^(?:"+u.source+")",p),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===f.length)return null===s(g,f)?[f]:[];var m=0,x=0,E=[];while(x<f.length){g.lastIndex=h?x:0;var w,k=s(g,h?f:f.slice(x));if(null===k||(w=l(c(g.lastIndex+(h?0:x)),f.length))===m)x=a(f,x,_);else{if(E.push(f.slice(m,x)),E.length===b)return E;for(var D=1;D<=k.length-1;D++)if(E.push(k[D]),E.length===b)return E;x=m=w}}return E.push(f.slice(m)),E}]})},"32a8":function(t,e,n){},"3b2b":function(t,e,n){var r=n("7726"),i=n("5dbc"),o=n("86cc").f,a=n("9093").f,c=n("aae3"),s=n("0bfb"),u=r.RegExp,l=u,f=u.prototype,d=/a/g,_=/a/g,p=new u(d)!==d;if(n("9e1e")&&(!p||n("79e5")(function(){return _[n("2b4c")("match")]=!1,u(d)!=d||u(_)==_||"/a/i"!=u(d,"i")}))){u=function(t,e){var n=this instanceof u,r=c(t),o=void 0===e;return!n&&r&&t.constructor===u&&o?t:i(p?new l(r&&!o?t.source:t,e):l((r=t instanceof u)?t.source:t,r&&o?s.call(t):e),n?this:f,u)};for(var h=function(t){t in u||o(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=a(l),y=0;v.length>y;)h(v[y++]);f.constructor=u,u.prototype=f,n("2aba")(r,"RegExp",u)}n("7a56")("RegExp")},4917:function(t,e,n){"use strict";var r=n("cb7c"),i=n("9def"),o=n("0390"),a=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var s=r(t),u=String(this);if(!s.global)return a(s,u);var l=s.unicode;s.lastIndex=0;var f,d=[],_=0;while(null!==(f=a(s,u))){var p=String(f[0]);d[_]=p,""===p&&(s.lastIndex=o(u,i(s.lastIndex),l)),_++}return 0===_?null:d}]})},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(t){var e,n,a,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[c]),a=i.call(f,t),s&&a&&(f[c]=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"78ee":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__),clipboard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b311"),clipboard__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_5__);__webpack_exports__["a"]={name:"study",data:function(){return{word:"字词",code:"",status:0,jdl:"",termsData:{},computedData:[],codeClass:"",notUpFileClass:!1,message:{show:!1,class:"",cont:""},closeTimer:!1,nextData:{word:"",code:""},errNum:2}},mounted:function(){var t=new clipboard__WEBPACK_IMPORTED_MODULE_5___default.a("#word"),e=this;t.on("success",function(){e.$Message.success("已复制")})},methods:{isReadFile:function(){if(!this.termsData.size)return this.notUpFileClass=!0,this.$Notice.destroy(),void this.$Notice.error({title:"词库文件为空",desc:"未读取词库文件，请点击上传选择词库文件。"})},isRight:function isRight(){this.isFileSize();var reg=new RegExp("^.{".concat(this.errNum,"}")),trim=/[\s+|\r+|\n+]/g;this.code=this.code.replace(trim,""),this.nextData.code=this.nextData.code.replace(trim,""),this.code.length>=1&&(this.$Notice.destroy(),this.nextData.code==this.code?(this.$Notice.info({title:"词组信息：",desc:"编码：".concat(this.nextData.code,"\t词条：").concat(this.nextData.word,"\t√")}),this.status=2,this.errNum=2,this.next()):(this.status=-1,this.$Notice.error({title:"编码有误",desc:"错误请重新输入\t提示：共有".concat(this.nextData.code.length,"位，前").concat(this.errNum,"位是：").concat(this.nextData.code.match(eval(reg)),"\t×")}),this.nextData.code.length>this.errNum&&this.errNum++))},next:function(){var t=this;function e(){var e=Math.floor(Math.random()*t.termsData.content.length+1);e%2==0&&e++,t.status=0,t.nextData.word=t.word=t.termsData.content[e],t.nextData.code=t.code=t.termsData.content[e+1],t.code=""}setTimeout(e,300)},splitTerms:function(t){this.termsData.content=t.split(/[\t\n]/)},isFileSize:function(){this.termsData.size||this.isReadFile()},readFile:function(){var t=this;if(this.$refs.file.files.length){var e=this.$refs.file.files[this.$refs.file.files.length-1],n=new FileReader;/yaml|txt|xls/.test(e.name)?(this.termsData=this.$refs.file.files[this.$refs.file.files.length-1],this.termsData.mbSize=this.kbToMb(this.termsData.size),this.termsData.result="",n.onload=function(){t.termsData.result=this.result,t.splitTerms(this.result)},n.readAsText(e),this.notUpFileClass=!1,this.next(),this.$Notice.success({title:"词组载入成功",desc:"词库文件已加载完成，词库为".concat(this.termsData.name,"，词库大小").concat(this.termsData.mbSize,"。")})):this.$Notice.error({title:"上传文件有误",desc:"您上传的".concat(e.name,"文件格式不受支持。")})}},kbToMb:function kbToMb(data){var computedData=parseFloat(data);return computedData<1048576?eval(computedData/1024).toFixed(1)+"KB":eval(computedData/1048576).toFixed(1)+"MB"}}}},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||n("9e1e")&&r(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},9637:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{attrs:{type:"flex",justify:"center"}},[n("Row",{staticStyle:{"max-width":"1200px",padding:"0 20px"}},[n("Card",[n("Row",{attrs:{type:"flex",justify:"center"}},[n("h1",{staticClass:"main-title"},[t._v("单字词组练习工具"),n("small",[t._v("Rime词库")])])]),n("Row",[n("Card",{staticClass:"study-main-card"},[n("span",{attrs:{slot:"title",title:t.termsData.name},slot:"title"},[t._v(t._s(t.termsData.name?t.termsData.name:"未读取文件")+" "+t._s(t.termsData.size?t.termsData.mbSize:0))]),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("label",{staticClass:"ivu-btn ivu-btn-default",attrs:{for:"file"}},[t._v("上传")]),n("input",{ref:"file",attrs:{id:"file",type:"file"},on:{change:t.readFile}})]),n("Row",{attrs:{type:"flex",justify:"center"}},[n("span",{attrs:{id:"word","data-clipboard-target":"#word"}},[t._v(t._s(t.word))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"ivu-input ivu-input-default",class:{"":0==t.status,"border-primary":1==t.status,"border-success":2==t.status,"border-danger":-1==t.status},attrs:{maxlength:"6",type:"text",autocomplete:"off",placeholder:"请输入词组对应编码"},domProps:{value:t.code},on:{click:t.isReadFile,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?t.isRight(e):null},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"]))return null;e.preventDefault()},input:function(e){e.target.composing||(t.code=e.target.value)}}})])],1),n("Row",{attrs:{type:"flex",justify:"center"}},[n("p",[t._v("version 1.2")])]),n("Row",{staticStyle:{"margin-top":"15px"},attrs:{type:"flex",justify:"center"}},[n("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[n("p",[t._v("一、请选择一个Rime词库上传。")])]),n("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[n("p",[t._v("二、切换使用英文输入法。")])]),n("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[n("p",[t._v("三、输入对应词条编码，空格确定。")])]),n("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[n("p",[t._v("四、校验成功自动下一个。")])])],1)],1)],1)],1)],1)},i=[],o=n("78ee"),a=o["a"],c=(n("b7a8"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,null,null);s.options.__file="Study.vue";e["default"]=s.exports},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),o=n("9def"),a=n("4588"),c=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,_=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(r,i){var o=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=h(n,t,this,e);if(i.done)return i.value;var f=r(t),d=String(this),_="function"===typeof e;_||(e=String(e));var y=f.global;if(y){var g=f.unicode;f.lastIndex=0}var b=[];while(1){var m=s(f,d);if(null===m)break;if(b.push(m),!y)break;var x=String(m[0]);""===x&&(f.lastIndex=c(d,o(f.lastIndex),g))}for(var E="",w=0,k=0;k<b.length;k++){m=b[k];for(var D=String(m[0]),S=u(l(a(m.index),d.length),0),O=[],T=1;T<m.length;T++)O.push(p(m[T]));var M=m.groups;if(_){var C=[D].concat(O,S,d);void 0!==M&&C.push(M);var R=String(e.apply(void 0,C))}else R=v(D,d,S,O,M,e);S>=w&&(E+=d.slice(w,S)+R,w=S+D.length)}return E+d.slice(w)}];function v(t,e,r,o,a,c){var s=r+t.length,u=o.length,l=_;return void 0!==a&&(a=i(a),l=d),n.call(c,l,function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return i;if(l>u){var d=f(l/10);return 0===d?i:d<=u?void 0===o[d-1]?i.charAt(1):o[d-1]+i.charAt(1):i}c=o[l-1]}return void 0===c?"":c})}})},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),a=f(o),c=n(3),s=f(c),u=n(4),l=f(u);function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var h=function(t){function e(t,n){d(this,e);var r=_(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return p(e,t),i(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,l.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return v("action",t)}},{key:"defaultTarget",value:function(t){var e=v("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);function v(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=h},function(t,e,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=c(o);function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){s(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=u},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(t),r.removeAllRanges(),r.addRange(i),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function i(){r.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var o=0,a=r.length;o<a;o++)r[o].fn!==e&&r[o].fn._!==e&&i.push(r[o]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){var r=n(5),i=n(6);function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function s(t,e,n){return i(document.body,t,e,n)}t.exports=o},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(7);function i(t,e,n,r,i){var o=a.apply(this,arguments);return t.addEventListener(n,o,i),{destroy:function(){t.removeEventListener(n,o,i)}}}function o(t,e,n,r,o){return"function"===typeof t.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}function a(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=o},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=i}])})},b7a8:function(t,e,n){"use strict";var r=n("32a8"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-78efa3a7.0929e93e.js.map