webpackJsonp([60],{MGsi:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),a=r("exGp"),i=r.n(a),l=r("woOf"),u=r.n(l),c=r("Gu7T"),s=r.n(c),f=(r("OBrr"),{props:{status:{type:[Number,String],default:4},defaultValue:{type:Array,default:function(){return[]}}},data:function(){return{loading:!0,table:{filters:[],query:{key:"goodsId",keyword:""},sort:{descs:["updateTime"]},page:{current:1,size:10,total:0}},defaultSelectGoodsId:this.defaultValue}},watch:{defaultValue:{handler:function(t,e){this.defaultSelectGoodsId=[].concat(s()(t)),this.setDefalutRow()},deep:!0}},mounted:function(){this.loadTable()},methods:{getQueryParam:function(){var t=this.table.query,e=t.key,r=t.keyword,n=this.$gtmc.assemblePage(this.table);return this.$gtmc.appendFilter(n.body.filters,"status","eq",this.status),e&&r&&this.$gtmc.appendFilter(n.body.filters,e,"like",r),n},handleQuery:function(){this.loadTable()},handleQueryClean:function(){this.table.query.key="goodsId",this.loadTable()},cleanQuery:function(){u()(this.$data,this.$options.data.call(this)),this.loadTable()},handlePageChange:function(t,e){this.loadTable(null,t,e)},loadTable:function(t,e,r){var n=this;return i()(o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.getQueryParam(),n.loading=!0,t.next=4,n.$api.GoodsController.pagePartsGoods(e);case 4:r=t.sent,n.$gtmc.assembleBody(n.table.page,r.body),setTimeout(function(t){n.setDefalutRow()},100),n.loading=!1;case 8:case"end":return t.stop()}},t,n)}))()},handleSelectionChange:function(t){this.$emit("change",t)},clearSelection:function(){this.$refs.table.$refs.table.clearSelection()},setDefalutRow:function(){var t=this,e=this.defaultSelectGoodsId,r=this.table.page.records;if(!e.length)return!1;r.forEach(function(n,o){e.indexOf(n.goodsId)>=0&&t.$refs.table.$refs.table.toggleRowSelection(r[o],!0)})}},filters:{getStatusType:function(t){return{0:"info",1:"warning",2:"warning",3:"warning",4:"success",5:"danger",6:"danger",7:"danger"}[t]},getStatusTxt:function(t){return{0:"未知",1:"待提交",2:"待业务担当审核",3:"待商城运营担当审核",4:"已上架",5:"审核不通过",6:"审核不通过",7:"已下架"}[t]}}}),h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"select-goods"},[r("div",{staticClass:"xv-list-query"},[r("xv-field-select",{attrs:{entity:t.table.query,name:"key",placeholder:"选择查询类型",options:{values:[{label:"商品ID",value:"goodsId"},{label:"商品名称",value:"goodsName"}]}}}),t._v(" "),r("xv-field-input",{attrs:{entity:t.table.query,name:"keyword",placeholder:"输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.loadTable}},[t._v("查询")]),t._v(" "),r("el-button",{attrs:{type:"text"},on:{click:t.cleanQuery}},[t._v("清除查询条件")])],1),t._v(" "),r("div",{staticClass:"select-goods__content"},[r("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{"margin-top":"20px"},attrs:{table:t.table,height:"400"},on:{"sort-change":t.handleQuery,"selection-change":t.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"goodsId",label:"商品ID",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),r("el-table-column",{attrs:{label:"商品价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    ￥"+t._s(e.row.price)+"\n                ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"发布状态",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tag",{attrs:{type:t._f("getStatusType")(e.row.status)}},[t._v(t._s(t._f("getStatusTxt")(e.row.status)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",align:"center"}})],1),t._v(" "),r("xv-list-page",{attrs:{table:t.table},on:{change:t.handleQuery}})],1)])},staticRenderFns:[]};var d=r("VU/8")(f,h,!1,function(t){r("koAj")},"data-v-7302444a",null);e.default=d.exports},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",c="object"==typeof t,s=e.regeneratorRuntime;if(s)c&&(t.exports=s);else{(s=e.regeneratorRuntime=c?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",y={},g={};g[i]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(I([])));m&&m!==n&&o.call(m,i)&&(g=m);var b=k.prototype=_.prototype=Object.create(g);L.prototype=b.constructor=k,k.constructor=L,k[u]=L.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[l]=function(){return this},s.AsyncIterator=S,s.async=function(t,e,r,n){var o=new S(w(t,e,r,n));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return l.type="throw",l.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),i=new G(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=T(i,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,i){var l=x(t[r],t,n);if("throw"!==l.type){var u=l.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(c).then(function(t){u.value=t,a(u)},i)}i(l.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function T(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("//Fk"),a=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,r){return function n(o,i){try{var l=e[o](i),u=l.value}catch(t){return void r(t)}if(!l.done)return a.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},koAj:function(t,e){}});