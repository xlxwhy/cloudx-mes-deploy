webpackJsonp([42],{NKKA:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),i=r("exGp"),a=r.n(i),c={data:function(){return{loading:!1,list:[],dialogVisible:!1,isEdit:!1}},created:function(){this.getData()},methods:{getData:function(){var t=this;return a()(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$api.CategoryController.treeList();case 3:r=e.sent,t.list=r.body,t.loading=!1;case 6:case"end":return e.stop()}},e,t)}))()},addCategory:function(){if(this.list.length>=4)return this.$message.warning("最多只能设置 4 个 一级类目，不能继续新增。");this.add({topLevel:1})},edit:function(t){this.$router.push({name:"mall-setting-parts-category-detail",query:{categoryId:t}})},look:function(t){this.$router.push({name:"mall-setting-parts-category-detail",query:{categoryId:t,isLook:!0}})},add:function(t){var e={};if(t){var r=t.categoryId,n=t.name,o=t.topLevel;r&&(e.name=n,e.pid=r),o&&(e.topLevel=o)}this.$router.push({name:"mall-setting-parts-category-detail",query:e})},del:function(t){var e=this;this.$confirm("是否删除该分类?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(a()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.$api.CategoryController.delete({path:{categoryId:t}});case 3:e.getData();case 4:case"end":return r.stop()}},r,e)}))).catch(function(t){})},toogleExpand:function(t,e,r){if("操作"==e.label)return!1;var n=this.$refs.table;this.list.map(function(e){t.categoryId!=e.categoryId&&n.toggleRowExpansion(e,!1)}),n.toggleRowExpansion(t)}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[t.$verifyAuths(["1060502"])?r("el-button",{attrs:{type:"primary",size:"large",disabled:t.list.length>=4},on:{click:t.addCategory}},[t._v("+ 新增一级分类")]):t._e(),t._v(" "),r("div",{staticClass:"category flex"},[r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"category-table",staticStyle:{width:"100%"},attrs:{border:"","highlight-current-row":"",data:t.list,"row-key":"categoryId"},on:{"row-click":t.toogleExpand}},[r("el-table-column",{attrs:{label:"分类名称",width:"600"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"category-img-info flex align-items-center"},[r("i",{staticClass:"el-icon-arrow-down icon-arrow"}),t._v(" "),r("div",{staticClass:"icon"},[r("img",{attrs:{src:t.$image(e.row.iconPath)}})]),t._v(" "),r("div",{staticClass:"txt"},[t._v(t._s(e.row.name))])])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"分类级别",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t"+t._s(parseInt(e.row.level)+1)+"级\n\t\t\t\t\t")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"同级排序",prop:"sort",width:"120",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.$verifyAuths(["1060503"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.look(e.row.categoryId)}}},[t._v("查看")]):t._e(),t._v(" "),t.$verifyAuths(["1060503"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.edit(e.row.categoryId)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$verifyAuths(["1060502"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.add(e.row)}}},[t._v("添加子分类")]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{type:"expand",width:"20"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-table",{staticClass:"child-table",staticStyle:{width:"100%"},attrs:{border:"",data:e.row.children,"show-header":!1}},[r("el-table-column",{attrs:{width:"600"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"category-img-info child flex align-items-center"},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:t.$image(e.row.iconPath)}})]),t._v(" "),r("div",{staticClass:"txt"},[t._v(t._s(e.row.name))])])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(parseInt(e.row.level)+1)+"级\n\t\t\t\t\t\t\t\t")]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{prop:"sort",width:"120",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.$verifyAuths(["1060503"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.look(e.row.categoryId)}}},[t._v("查看")]):t._e(),t._v(" "),t.$verifyAuths(["1060503"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.edit(e.row.categoryId)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$verifyAuths(["1060504"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.del(e.row.categoryId)}}},[t._v("删除")]):t._e()]}}],null,!0)})],1)]}}])})],1)],1)])],1)},staticRenderFns:[]};var l=r("VU/8")(c,u,!1,function(t){r("P0YH"),r("faRh")},"data-v-098a367c",null);e.default=l.exports},P0YH:function(t,e){},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",l="object"==typeof t,s=e.regeneratorRuntime;if(s)l&&(t.exports=s);else{(s=e.regeneratorRuntime=l?t.exports:{}).wrap=_;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",y={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=k.prototype=b.prototype=Object.create(v);L.prototype=w.constructor=k,k.constructor=L,k[u]=L.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},E($.prototype),$.prototype[c]=function(){return this},s.AsyncIterator=$,s.async=function(t,e,r,n){var o=new $(_(t,e,r,n));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function _(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function $(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){u.value=t,i(u)},a)}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("//Fk"),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){return function n(o,a){try{var c=e[o](a),u=c.value}catch(t){return void r(t)}if(!c.done)return i.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}},faRh:function(t,e){},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}});