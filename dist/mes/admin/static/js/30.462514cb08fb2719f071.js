webpackJsonp([30,2,39],{EvIy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),o=r("exGp"),i=r.n(o),s={props:{visible:Boolean,id:[String,Number]},data:function(){return{showDialog:this.visible,loading:!1,partsId:this.id,list:[],defaultProps:{children:"modelCodes",label:"label"},defaultCheckedKeys:[]}},watch:{id:function(t){this.partsId=t,this.getData()},visible:function(t){this.showDialog=t}},methods:{getData:function(){var t=this;return i()(a.a.mark(function e(){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("partsId++++",t.partsId,t.visible),r={path:{partsId:t.partsId}},t.loading=!0,e.next=5,t.$api.VehicleController.listVehModel(r);case 5:n=e.sent,n.body.map(function(t){return t.modelCodes=t.modelCodes.map(function(t){return{label:t,key:t}}),t.label=t.vehName+"（"+t.vehNameCode+"）",t.key=t.vehNameCode,t}),t.list=n.body,t.loading=!1;case 9:case"end":return e.stop()}},e,t)}))()},save:function(){var t=this.$refs.tree.getCheckedKeys();this.defaultCheckedKeys=t,console.log(t),this.close(),this.$emit("change",t)},close:function(){this.$emit("update:visible",!1)},checkChange:function(t,e){var r=e.checkedKeys;this.defaultCheckedKeys=r}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{title:"零配件适用车型",visible:t.showDialog,width:"600px",top:"50px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.showDialog=e},close:t.close}},[r("div",{staticClass:"select-cartype",staticStyle:{height:"500px","padding-bottom":"20px","overflow-y":"auto"}},[r("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tree",attrs:{data:t.list,"show-checkbox":!1,"node-key":"key","default-checked-keys":t.defaultCheckedKeys,props:t.defaultProps},on:{check:t.checkChange}})],1)])},staticRenderFns:[]};var u=r("VU/8")(s,l,!1,function(t){r("f6ZG")},null,null);e.default=u.exports},FLbO:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),o=r("exGp"),i=r.n(o),s={components:{PartsList:r("Uz8m").default},data:function(){return{activeName:"全部商品",tabNav:[{label:"全部商品",status:""},{label:"待提交",status:1},{label:"待业务担当审核",status:2,num:0},{label:"待商城运营担当审核",status:3,num:0},{label:"审核不通过",status:5},{label:"已上架",status:4},{label:"已下架",status:7,num:0}]}},created:function(){this.getCount()},methods:{getCount:function(){var t=this;return i()(a.a.mark(function e(){var r,n,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GoodsController.getCount({query:{goodsType:1}});case 2:r=e.sent,n=r.body,o=n.waitOprReviewTotal,i=n.waitBsReviewTotal,t.$set(t.tabNav,2,{num:parseInt(i),label:"待业务担当审核 ",status:2}),t.$set(t.tabNav,3,{num:parseInt(o),label:"待商城运营担当审核 ",status:3});case 6:case"end":return e.stop()}},e,t)}))()}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"parts"},[r("div",{staticClass:"parts-tab"},[r("el-tabs",{staticClass:"parts-tab-nav",model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabNav,function(e,n){return r("el-tab-pane",{key:n,attrs:{label:e.label,name:e.label}},[e.num>0?r("span",{attrs:{slot:"label"},slot:"label"},[r("el-badge",{attrs:{value:e.num,max:e.num>99?99:e.num}},[t._v(t._s(e.label))])],1):t._e(),t._v(" "),e.label===t.activeName?r("parts-list",{attrs:{status:e.status}}):t._e()],1)}),1)],1)])},staticRenderFns:[]};var u=r("VU/8")(s,l,!1,function(t){r("hN4j")},"data-v-3ebe6f93",null);e.default=u.exports},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",u="object"==typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{(c=e.regeneratorRuntime=u?t.exports:{}).wrap=w;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},y={};y[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(T([])));m&&m!==n&&a.call(m,i)&&(y=m);var b=C.prototype=_.prototype=Object.create(y);k.prototype=b.constructor=C,C.constructor=k,C[l]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},$(I.prototype),I.prototype[s]=function(){return this},c.AsyncIterator=I,c.async=function(t,e,r,n){var a=new I(w(t,e,r,n));return c.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},$(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=T,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var a=e&&e.prototype instanceof _?e:_,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=function(t,e,r){var n=d;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return F()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=N(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?p:f,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function k(){}function C(){}function $(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var s=x(t[r],t,n);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){l.value=t,o(l)},i)}i(s.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function N(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Uz8m:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),o=r("exGp"),i=r.n(o),s={components:{XvSelectCartype:r("EvIy").default},props:{status:[Number,String]},data:function(){return{selloutChecked:!1,loading:!0,table:{filters:[],query:{key:"goodsId",keyword:"",attachmentCode:"",min:"",max:"",status:"",statusCode:"",stock:"",vehicleInputs:{name:"vehName",values:{}},goodsInputs:{name:"goodsName",values:{}}},sort:{descs:["updateTime"]},page:{current:1,size:10,total:0}},selectCartypeVisible:!1,partsId:""}},created:function(){var t=this.$route.query.partsCode;t&&(this.table.query.attachmentCode=t),this.loadTable()},methods:{getQueryParam:function(){var t=this.status,e=this.table.query,r=e.attachmentCode,n=e.min,a=e.max,o=(e.key,e.keyword,e.statusCode);this.table.filters=[];var i=this.$gtmc.assemblePage(this.table);return this.$gtmc.appendFilter(i.body.filters,"price","ge",n),this.$gtmc.appendFilter(i.body.filters,"price","le",a),4==t?(this.selloutChecked&&(i.body.stock=0),this.$gtmc.appendFilter(i.body.filters,"status","eq",t)):5==t||5==o?(this.$gtmc.appendFilter(i.body.filters,"status","ge",5),this.$gtmc.appendFilter(i.body.filters,"status","le",6)):""===t?(this.$gtmc.appendFilter(i.body.filters,"status","eq",o),this.$gtmc.appendFilter(i.body.filters,"attachmentCode","like",r)):this.$gtmc.appendFilter(i.body.filters,"status","eq",t),this.$gtmc.appendFilterMultipleInput(i.body.filters,this.table.query.goodsInputs),i},handleQuery:function(){this.loadTable()},handleQueryClean:function(){this.table.query.goodsInputs.name="goodsName",this.loadTable()},handlePageChange:function(t,e){this.table.page.size=t,this.table.page.current=e,this.loadTable()},loadTable:function(){var t=this;return i()(a.a.mark(function e(){var r,n,o,i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.getQueryParam(),n=t.table.query,o=n.min,i=n.max,!(2==r.body.filters.filter(function(t){return"price"==t.property}).length&&Number(o)>Number(i))){e.next=5;break}return e.abrupt("return",t.$message.warning("请输入正确的区间价格"));case 5:return t.loading=!0,e.next=8,t.$api.GoodsController.pagePartsGoods(r);case 8:s=e.sent,t.$gtmc.assembleBody(t.table.page,s.body),t.loading=!1;case 11:case"end":return e.stop()}},e,t)}))()},del:function(t){var e=this,r=t.goodsId;this.$confirm("此操作将删除该零配件, 是否继续?","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.GoodsController.delete({path:{goodsId:r}});case 3:t.sent,e.loadTable();case 5:case"end":return t.stop()}},t,e)}))).catch(function(t){})},offShelf:function(t){var e=this,r=t.goodsId;this.$confirm("此操作将下架该零配件, 是否继续?<br />再次发布需要重新完成审核流程，请谨慎操作。","提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.GoodsController.offShelf({body:{goodsId:r}});case 3:t.sent,e.loadTable();case 5:case"end":return t.stop()}},t,e)}))).catch(function(t){})},look:function(t){var e=t.goodsId;this.$router.push({name:"goods-parts-detail",query:{goodsId:e,isLook:!0}})},edit:function(t){var e=t.goodsId;this.$router.push({name:"goods-parts-detail",query:{goodsId:e,isEdit:!0}})},audit:function(t){var e=t.goodsId,r=t.status;this.$router.push({name:"goods-parts-detail",query:{goodsId:e,status:r,isAudit:!0}})},selectCartype:function(t){this.partsId=t,this.selectCartypeVisible=!0},selectCartypeChange:function(t){console.log(t)},checkNumber:function(t){return/^\d+$/.test(t)}},filters:{getStatusType:function(t){return{0:"info",1:"warning",2:"warning",3:"warning",4:"success",5:"danger",6:"danger",7:"danger"}[t]},getStatusTxt:function(t){return{0:"未知",1:"待提交",2:"待业务担当审核",3:"待商城运营担当审核",4:"已上架",5:"审核不通过",6:"审核不通过",7:"已下架"}[t]}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"parts-table intention-order-list-table"},[r("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.handleQuery()},clean:t.handleQueryClean}},[r("xv-field-multiple-input",{staticClass:"goods-inputs",attrs:{entity:t.table.query.goodsInputs,label:"选择查询类型",placeholder:"输入搜索关键字",options:{values:[{label:"商品ID",value:"goodsId"},{label:"商品名称",value:"goodsName"}]}},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),""==t.status?r("xv-field-input",{attrs:{entity:t.table.query,name:"attachmentCode",label:"关联的零配件编号",placeholder:"输入零配件编号"},on:{done:function(e){return t.$handleInputQuery()}}}):t._e(),t._v(" "),r("xv-interval-input",{attrs:{entity:t.table.query,label:"价格范围",min:"min",max:"max"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),""==t.status?r("xv-field-select",{attrs:{entity:t.table.query,name:"statusCode",label:"发布状态",placeholder:"选择发布状态",options:{values:[{label:"全部",value:""},{label:"待提交",value:1},{label:"待业务担当审核",value:2},{label:"待商城运营担当审核",value:3},{label:"已上架",value:4},{label:"审核不通过",value:5},{label:"已下架",value:7}]}}}):t._e(),t._v(" "),4==t.status?r("el-checkbox",{model:{value:t.selloutChecked,callback:function(e){t.selloutChecked=e},expression:"selloutChecked"}},[t._v("仅显示已售罄的商品")]):t._e()],1),t._v(" "),t.$verifyAuths(["1020202"])?r("div",{staticStyle:{"margin-top":"20px"}},[r("el-button",{attrs:{size:"large",type:"primary"},on:{click:function(e){return t.link("goods-parts-create")}}},[t._v("\n            +新增零配件商品\n        ")])],1):t._e(),t._v(" "),r("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-top":"20px"},attrs:{table:t.table},on:{"sort-change":t.handleQuery}},[r("el-table-column",{attrs:{prop:"goodsId",label:"商品ID",sortable:"",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",sortable:"","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"flex"},[r("div",{staticClass:"img flex align-items-center justify-content-center",staticStyle:{width:"100px",height:"60px"}},[e.row.mainMaterialPath?r("img",{staticStyle:{display:"block","max-width":"100%","max-height":"100%"},attrs:{src:t.$image(e.row.mainMaterialPath)}}):t._e()]),t._v(" "),r("div",{staticClass:"txt col",staticStyle:{"margin-left":"10px"}},[t._v("\n                        "+t._s(e.row.goodsName)+"\n                    ")])])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"关联零配件",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("p",[t._v(t._s(e.row.partsBody.partsName))]),t._v(" "),r("p",[t._v("编号: "+t._s(e.row.partsBody.partsCode))]),t._v(" "),r("p",[t._v("SRP: "+t._s(e.row.partsBody.suggestPrice))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"商品价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                ￥"+t._s(e.row.price)+"\n            ")]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"stock",label:"剩余数量",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"发布状态",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tag",{attrs:{type:t._f("getStatusType")(e.row.status)}},[t._v(t._s(t._f("getStatusTxt")(e.row.status)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",sortable:"",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"flex"},[t.$verifyAuths(["1020102"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.selectCartype(e.row.attachmentId)}}},[t._v("适用车型")]):t._e(),t._v(" "),t.$verifyAuths(["1020208"])?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.look(e.row)}}},[t._v("查看")]):t._e(),t._v(" "),t.$verifyAuths(["1020203"])&&(1==e.row.status||e.row.status>4)?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.edit(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$verifyAuths(["1020204"])&&2==e.row.status||t.$verifyAuths(["1020205"])&&3==e.row.status?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.audit(e.row)}}},[t._v("审核")]):t._e(),t._v(" "),t.$verifyAuths(["1020206"])&&4==e.row.status?r("el-button",{attrs:{type:"text"},on:{click:function(r){return t.offShelf(e.row)}}},[t._v("下架")]):t._e()],1)]}}])})],1),t._v(" "),r("xv-list-page",{attrs:{table:t.table},on:{change:t.handleQuery}}),t._v(" "),r("xv-select-cartype",{attrs:{visible:t.selectCartypeVisible,id:t.partsId},on:{"update:visible":function(e){t.selectCartypeVisible=e},change:t.selectCartypeChange}})],1)},staticRenderFns:[]},u=r("VU/8")(s,l,!1,null,null,null);e.default=u.exports},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,a=r("//Fk"),o=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){return function n(a,i){try{var s=e[a](i),l=s.value}catch(t){return void r(t)}if(!s.done)return o.default.resolve(l).then(function(t){n("next",t)},function(t){n("throw",t)});t(l)}("next")})}}},f6ZG:function(t,e){},hN4j:function(t,e){},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}});