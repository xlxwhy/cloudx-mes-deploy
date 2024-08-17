webpackJsonp([71],{"1VMV":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),o=n("exGp"),i=n.n(o),u={props:["status"],data:function(){return{loading:!0,table:{filters:[],query:{key:"vehName",keyword:"",matManName:"",partsCode:""},sort:{descs:["createTime"]},page:{current:1,size:10,total:0}}}},created:function(){var t=this.$route.query.partsCode;t&&(this.table.query.partsCode=t),this.loadTable()},methods:{getQueryParam:function(){var t=this.table.query,e=t.key,n=t.keyword,r=t.matManName;this.table.filters=[];var a=this.$gtmc.assemblePage(this.table);return 5==this.status?(this.$gtmc.appendFilter(a.body.filters,"status","ge",5),this.$gtmc.appendFilter(a.body.filters,"status","le",6)):this.$gtmc.appendFilter(a.body.filters,"status","eq",this.status),e&&n&&this.$gtmc.appendFilter(a.body.filters,e,"like",n),this.$gtmc.appendFilter(a.body.filters,"matManName","like",r),this.$gtmc.appendFilter(a.body.filters,"partsCode","eq",this.table.query.partsCode),a},handleQuery:function(){this.loadTable()},handleQueryClean:function(){this.table.query.key="vehName",this.loadTable()},handlePageChange:function(t,e){this.table.page.size=t,this.table.page.current=e,this.loadTable()},loadTable:function(){var t=this;return i()(a.a.mark(function e(){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getQueryParam(),t.loading=!0,e.next=4,t.$api.MaintainController.page(n);case 4:r=e.sent,t.$gtmc.assembleBody(t.table.page,r.body),t.loading=!1;case 7:case"end":return e.stop()}},e,t)}))()},del:function(t){var e=this;this.$confirm("此操作将删除该保养服务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(i()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$api.MaintainController.delete({path:{maintainId:t}});case 3:e.loadTable();case 4:case"end":return n.stop()}},n,e)}))).catch(function(t){})},offShelf:function(t){var e=this;this.$confirm("此操作将下架该保养服务, 是否继续?<br />再次发布需要重新完成审核流程，请谨慎操作。","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(i()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$api.MaintainController.offShelf({body:{maintainId:t}});case 3:e.loadTable();case 4:case"end":return n.stop()}},n,e)}))).catch(function(t){})},look:function(t){this.$router.push({name:"goods-maintain-detail",query:{maintainManualId:t.matManId,maintainId:t.maintainId,isLook:!0}})},edit:function(t){this.$router.push({name:"goods-maintain-detail",query:{maintainManualId:t.matManId,maintainId:t.maintainId,isEdit:!0}})},audit:function(t){this.$router.push({name:"goods-maintain-detail",query:{maintainManualId:t.matManId,maintainId:t.maintainId,status:t.status,isAudit:!0}})}},filters:{getStatusType:function(t){return{0:"info",1:"warning",2:"warning",3:"warning",4:"success",5:"danger",6:"danger",7:"danger"}[t]},getStatusTxt:function(t){return{0:"未知",1:"待提交",2:"待业务担当审核",3:"待商城运营担当审核",4:"已上架",5:"审核不通过",6:"审核不通过",7:"已下架"}[t]}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parts-table intention-order-list-table"},[n("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:t.handleQuery,clean:t.handleQueryClean}},[n("xv-field-select",{attrs:{entity:t.table.query,name:"key",placeholder:"选择查询类型",options:{values:[{label:"适用车型",value:"vehName"},{label:"车名代码",value:"vehNameCode"},{label:"适用车型Model",value:"modelCode"}]}}}),t._v(" "),n("xv-field-input",{attrs:{entity:t.table.query,name:"keyword",placeholder:"输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),n("xv-field-input",{attrs:{entity:t.table.query,name:"matManName",label:"保养手册",placeholder:"输入保养手册名称"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),n("xv-field-input",{attrs:{entity:t.table.query,name:"partsCode",label:"关联的零配件编号",placeholder:"请输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),t.$verifyAuths(["1020302"])?n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{size:"large",type:"primary"},on:{click:function(e){return t.link("goods-maintain-addmanual")}}},[t._v("\n            +新增保养服务\n        ")])],1):t._e(),t._v(" "),n("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-top":"20px"},attrs:{table:t.table},on:{"sort-change":t.handleQuery}},[n("xv-table-column-text",{attrs:{prop:"vehName",label:"适用车型",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"vehNameCode",label:"车名代码",align:"center",width:"100"}}),t._v(" "),n("xv-table-column-text",{attrs:{prop:"modelCode",label:"适用车型Model",align:"center",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"matManName",label:"保养手册名称",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"发布状态",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("getStatusType")(e.row.status)}},[t._v(t._s(t._f("getStatusTxt")(e.row.status)))])]}}])}),t._v(" "),n("xv-table-column-date-time",{attrs:{prop:"updateTime",label:"更新时间",sortable:"",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex"},[t.$verifyAuths(["1020308"])?n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.look(e.row)}}},[t._v("查看")]):t._e(),t._v(" "),t.$verifyAuths(["1020303"])&&(1==e.row.status||e.row.status>4)?n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.edit(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$verifyAuths(["1020307"])&&(1==e.row.status||e.row.status>4)?n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.del(e.row.maintainId)}}},[t._v("删除")]):t._e(),t._v(" "),t.$verifyAuths(["1020304"])&&2==e.row.status||t.$verifyAuths(["1020305"])&&3==e.row.status?n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.audit(e.row)}}},[t._v("审核")]):t._e(),t._v(" "),t.$verifyAuths(["1020306"])&&4==e.row.status?n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.offShelf(e.row.maintainId)}}},[t._v("下架")]):t._e()],1)]}}])})],1),t._v(" "),n("xv-list-page",{attrs:{table:t.table},on:{change:t.handleQuery}})],1)},staticRenderFns:[]},s=n("VU/8")(u,l,!1,null,null,null);e.default=s.exports},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",s="object"==typeof t,c=e.regeneratorRuntime;if(c)s&&(t.exports=c);else{(c=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",y={},v={};v[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==r&&a.call(g,i)&&(v=g);var b=L.prototype=_.prototype=Object.create(v);k.prototype=b.constructor=L,L.constructor=k,L[l]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},$(E.prototype),E.prototype[u]=function(){return this},c.AsyncIterator=E,c.async=function(t,e,n,r){var a=new E(w(t,e,n,r));return c.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},$(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return u.type="throw",u.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function w(t,e,n,r){var a=e&&e.prototype instanceof _?e:_,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(t,e,n){var r=f;return function(a,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=T(i,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=x(t,e,n);if("normal"===l.type){if(r=n.done?p:h,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(t,n,i),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function k(){}function L(){}function $(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var u=x(t[n],t,r);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){l.value=t,o(l)},i)}i(u.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=x(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,n){t.exports=n("jyFz")},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("//Fk"),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function r(a,i){try{var u=e[a](i),l=u.value}catch(t){return void n(t)}if(!u.done)return o.default.resolve(l).then(function(t){r("next",t)},function(t){r("throw",t)});t(l)}("next")})}}},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}});