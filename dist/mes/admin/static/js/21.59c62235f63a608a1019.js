webpackJsonp([21,0,60,64],{"2KUU":function(t,e){},FskD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("BO1k"),r=n.n(a),o=n("mvHQ"),i=n.n(o),l=n("Xxa5"),s=n.n(l),c=n("fZjL"),u=n.n(c),d=n("exGp"),f=n.n(d),h=n("bOdI"),p=n.n(h),g=n("Lokx"),v=n.n(g),m=n("lqB5"),y={props:{data:{type:Object,default:function(){return{}}}},components:{Sortable:v.a,XvSelectGoods:m.default},data:function(){var t;return t={loading:!1,form:{mainTitle:this.data.locationSubject.mainTitle,subTitle:this.data.locationSubject.subTitle},rules:{mainTitle:[{required:!0,message:"请输入主标题",trigger:"blur"}],subTitle:[{required:!0,message:"请输入副标题",trigger:"blur"}]}},p()(t,"loading",!1),p()(t,"list",this.data.items),p()(t,"goodsDialogVisible",!1),t},mounted:function(){this.rowDrop()},methods:{rowDrop:function(){var t=document.querySelector(".el-table__body-wrapper tbody"),e=this;v.a.create(t,{onEnd:function(t){var n=t.newIndex,a=t.oldIndex;console.log(n,a);var r=e.list.splice(a,1)[0];e.list.splice(n,0,r),console.log("拖动后的数据显示",e.list);var o=e.list.slice(0);e.list.length=0,e.$nextTick(function(){e.list=o})}})},preview:function(){},submit:function(t){var e,n=this;this.$refs.ruleForm.validate((e=f()(s.a.mark(function e(a,r){var o,i,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=5;break}return o=u()(r),i=r[o[0]][0].message,n.$message.warning(i),e.abrupt("return",console.log(i));case 5:if(l=n.getParams(),console.log(l),l){e.next=9;break}return e.abrupt("return",!1);case 9:if("preview"!=t){e.next=13;break}n.$emit("preview",{type:"goods",params:l}),e.next=18;break;case 13:return n.loading=!0,e.next=16,n.$api.PageSettingController.setPublishGoods({body:l});case 16:n.loading=!1,n.$emit("change",{type:"getGoods"});case 18:case"end":return e.stop()}},e,n)})),function(t,n){return e.apply(this,arguments)}))},getParams:function(){var t=this.form,e=this.data,n=this.list,a=t.mainTitle,r=t.subTitle,o=JSON.parse(i()(e));return o.appName||(o.appName="丰云惠",o.appType=1,o.pageName="首页",o.pageType=1,o.terminalName="APP",o.terminalType=1),o.locationSubject.mainTitle=a,o.locationSubject.subTitle=r,o.decorationItemVos=n.map(function(t,e){return t.contentType=0,t.name||(t.name="零配件模块"),t.sort=e,t}),delete o.items,o},cannel:function(){var t=this;this.$confirm("确认取消当前操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$emit("change")}).catch(function(t){})},noTop:function(t){var e=this;this.$confirm("是否确定取消置顶?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.list.splice(t,1)}).catch(function(t){})},selectGoods:function(){if(this.list.length>=10)return this.$message.warning("最多可置顶10款商品");this.goodsDialogVisible=!0},selectGoodsChange:function(t){var e=this,n=t.map(function(t){var e=t.goodsId,n=t.goodsName,a=t.mainMaterialPath,r=t.stock;return{contentBody:{goodsId:e,goodsName:n,mainMaterialPath:a,price:t.price,stock:r},contentType:0,name:"零配件"}}),a=function(t){if(!e.list.find(function(e){return e.contentBody.goodsId==t.contentBody.goodsId})&&e.list.length<10&&e.list.push(t),10==e.list.length)return"break"},o=!0,i=!1,l=void 0;try{for(var s,c=r()(n);!(o=(s=c.next()).done);o=!0){if("break"===a(s.value))break}}catch(t){i=!0,l=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw l}}this.$message.success("添加成功"),console.log("list+++",this.list)}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"goods-module"},[n("div",{staticClass:"goods-module__content"},[n("el-form",{ref:"ruleForm",attrs:{"label-width":"80px",model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{label:"主标题",prop:"mainTitle"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入主标题",maxlength:"5"},model:{value:t.form.mainTitle,callback:function(e){t.$set(t.form,"mainTitle",e)},expression:"form.mainTitle"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"副标题",prop:"subTitle"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入副标题",maxlength:"8"},model:{value:t.form.subTitle,callback:function(e){t.$set(t.form,"subTitle",e)},expression:"form.subTitle"}})],1)],1),t._v(" "),n("div",{staticClass:"product"},[n("div",{staticClass:"product-head"},[t._v("商品列表")]),t._v(" "),n("div",{staticClass:"product-content"},[n("div",{staticClass:"flex justify-content-spacebetween align-items-center",staticStyle:{margin:"20px 0"}},[n("el-button",{attrs:{size:"large",type:"primary"},on:{click:t.selectGoods}},[t._v("添加置顶零配件商品")]),t._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"400",trigger:"hover"}},[n("div",{staticClass:"tips-txt",staticStyle:{color:"#E6A23C"}},[n("p",[t._v("消费端展示规则：")]),t._v(" "),n("p",[t._v("①运营人员后台人工置顶，最多可同时置顶10款商品。")]),t._v(" "),n("p",[t._v("②不置顶商品时或置顶商品不足10款时，展示或补足10个浏览量高-低的商品。")]),t._v(" "),n("p",[t._v("③同等浏览量情况下按上架时间近-远排序。")])]),t._v(" "),n("div",{staticClass:"tips",staticStyle:{color:"#E11430"},attrs:{slot:"reference"},slot:"reference"},[n("i",{staticClass:"el-icon-question"}),t._v(" 消费端展示规则\n                        ")])])],1),t._v(" "),n("div",{staticClass:"product-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"goods-table",attrs:{"row-key":"id",data:t.list,border:""}},[n("el-table-column",{attrs:{type:"index",label:"排序",width:"50",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"零配件商品ID",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                "+t._s(e.row.contentBody.goodsId)+"\n                            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"零配件商品名称","min-width":"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"goods-info flex"},[n("div",{staticClass:"img flex align-items-center justify-content-center"},[n("img",{attrs:{src:t.$image(e.row.contentBody.mainMaterialPath)}})]),t._v(" "),n("div",{staticClass:"col txt",staticStyle:{"margin-left":"10px"}},[t._v("\n                                        "+t._s(e.row.contentBody.goodsName)+"\n                                    ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"销售价格",align:"center",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                ￥"+t._s(e.row.contentBody.price)+"\n                            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"库存",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                "+t._s(e.row.contentBody.stock)+"\n                            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.noTop(e.$index)}}},[t._v("取消置顶")])]}}])})],1),t._v(" "),n("el-alert",{staticStyle:{"margin-top":"10px"},attrs:{type:"info",closable:!1}},[n("p",{staticClass:"flex align-items-center"},[n("i",{staticClass:"el-icon-rank",staticStyle:{"margin-right":"10px","font-size":"16px"}}),t._v("\n                            可通过拖拽表格行，调整轮播图的展示顺序。最多可以置顶 10 个零配件商品。\n                        ")])])],1)])])],1),t._v(" "),n("div",{staticClass:"goods-module__foot flex justify-content-center",staticStyle:{padding:"20px 0 0"}},[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.submit("preview")}}},[t._v("预览")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:function(e){return t.submit("save")}}},[t._v("发布")]),t._v(" "),n("el-button",{attrs:{size:"large"},on:{click:t.cannel}},[t._v("取消")])],1),t._v(" "),n("xv-select-goods",{attrs:{visible:t.goodsDialogVisible,"virtaul-show":!1},on:{"update:visible":function(e){t.goodsDialogVisible=e},change:t.selectGoodsChange}})],1)},staticRenderFns:[]};var _=n("VU/8")(y,b,!1,function(t){n("c+j2")},"data-v-59313960",null);e.default=_.exports},MGsi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),o=n("exGp"),i=n.n(o),l=n("woOf"),s=n.n(l),c=n("Gu7T"),u=n.n(c),d=(n("OBrr"),{props:{status:{type:[Number,String],default:4},defaultValue:{type:Array,default:function(){return[]}}},data:function(){return{loading:!0,table:{filters:[],query:{key:"goodsId",keyword:""},sort:{descs:["updateTime"]},page:{current:1,size:10,total:0}},defaultSelectGoodsId:this.defaultValue}},watch:{defaultValue:{handler:function(t,e){this.defaultSelectGoodsId=[].concat(u()(t)),this.setDefalutRow()},deep:!0}},mounted:function(){this.loadTable()},methods:{getQueryParam:function(){var t=this.table.query,e=t.key,n=t.keyword,a=this.$gtmc.assemblePage(this.table);return this.$gtmc.appendFilter(a.body.filters,"status","eq",this.status),e&&n&&this.$gtmc.appendFilter(a.body.filters,e,"like",n),a},handleQuery:function(){this.loadTable()},handleQueryClean:function(){this.table.query.key="goodsId",this.loadTable()},cleanQuery:function(){s()(this.$data,this.$options.data.call(this)),this.loadTable()},handlePageChange:function(t,e){this.loadTable(null,t,e)},loadTable:function(t,e,n){var a=this;return i()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.getQueryParam(),a.loading=!0,t.next=4,a.$api.GoodsController.pagePartsGoods(e);case 4:n=t.sent,a.$gtmc.assembleBody(a.table.page,n.body),setTimeout(function(t){a.setDefalutRow()},100),a.loading=!1;case 8:case"end":return t.stop()}},t,a)}))()},handleSelectionChange:function(t){this.$emit("change",t)},clearSelection:function(){this.$refs.table.$refs.table.clearSelection()},setDefalutRow:function(){var t=this,e=this.defaultSelectGoodsId,n=this.table.page.records;if(!e.length)return!1;n.forEach(function(a,r){e.indexOf(a.goodsId)>=0&&t.$refs.table.$refs.table.toggleRowSelection(n[r],!0)})}},filters:{getStatusType:function(t){return{0:"info",1:"warning",2:"warning",3:"warning",4:"success",5:"danger",6:"danger",7:"danger"}[t]},getStatusTxt:function(t){return{0:"未知",1:"待提交",2:"待业务担当审核",3:"待商城运营担当审核",4:"已上架",5:"审核不通过",6:"审核不通过",7:"已下架"}[t]}}}),f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-goods"},[n("div",{staticClass:"xv-list-query"},[n("xv-field-select",{attrs:{entity:t.table.query,name:"key",placeholder:"选择查询类型",options:{values:[{label:"商品ID",value:"goodsId"},{label:"商品名称",value:"goodsName"}]}}}),t._v(" "),n("xv-field-input",{attrs:{entity:t.table.query,name:"keyword",placeholder:"输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.loadTable}},[t._v("查询")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.cleanQuery}},[t._v("清除查询条件")])],1),t._v(" "),n("div",{staticClass:"select-goods__content"},[n("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{"margin-top":"20px"},attrs:{table:t.table,height:"400"},on:{"sort-change":t.handleQuery,"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"goodsId",label:"商品ID",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"商品价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    ￥"+t._s(e.row.price)+"\n                ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发布状态",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("getStatusType")(e.row.status)}},[t._v(t._s(t._f("getStatusTxt")(e.row.status)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",align:"center"}})],1),t._v(" "),n("xv-list-page",{attrs:{table:t.table},on:{change:t.handleQuery}})],1)])},staticRenderFns:[]};var h=n("VU/8")(d,f,!1,function(t){n("koAj")},"data-v-7302444a",null);e.default=h.exports},OdD2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),o=n("exGp"),i=n.n(o),l=n("woOf"),s=n.n(l),c=n("Gu7T"),u=n.n(c),d={props:{status:{type:Number,default:4},defaultValue:{type:Array,default:function(){return[]}}},data:function(){return{loading:!0,table:{filters:[],query:{key:"goodsId",keyword:""},sort:{descs:["updateTime"]},page:{current:1,size:10,total:0}},defaultSelectGoodsId:this.defaultValue}},watch:{defaultValue:{handler:function(t,e){this.defaultSelectGoodsId=[].concat(u()(t)),this.setDefalutRow()},deep:!0}},mounted:function(){this.loadTable()},methods:{getQueryParam:function(){var t=this.table.query,e=t.key,n=t.keyword;this.table.filters=[];var a=this.$gtmc.assemblePage(this.table);return this.$gtmc.appendFilter(a.body.filters,"status","eq",this.status),e&&n&&this.$gtmc.appendFilter(a.body.filters,e,"like",n),a},handleQuery:function(){this.loadTable()},handleQueryClean:function(){this.table.query.key="goodsId",this.loadTable()},handlePageChange:function(t,e){this.loadTable(null,t,e)},cleanQuery:function(){s()(this.$data,this.$options.data.call(this)),this.loadTable()},loadTable:function(t,e,n){var a=this;return i()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.getQueryParam(),a.loading=!0,t.next=4,a.$api.GoodsController.pageVirtualGoods(e);case 4:n=t.sent,a.$gtmc.assembleBody(a.table.page,n.body),setTimeout(function(t){a.setDefalutRow()},100),a.loading=!1;case 8:case"end":return t.stop()}},t,a)}))()},handleSelectionChange:function(t){this.$emit("change",t)},clearSelection:function(){this.$refs.table.$refs.table.clearSelection()},setDefalutRow:function(){var t=this,e=this.defaultSelectGoodsId,n=this.table.page.records;if(!e.length)return!1;n.forEach(function(a,r){e.indexOf(a.goodsId)>=0&&t.$refs.table.$refs.table.toggleRowSelection(n[r],!0)})}},filters:{getStatusType:function(t){return{0:"info",1:"warning",2:"warning",3:"warning",4:"success",5:"danger",6:"danger",7:"danger"}[t]},getStatusTxt:function(t){return{0:"未知",1:"待提交",2:"待业务担当审核",3:"待商城运营担当审核",4:"已上架",5:"审核不通过",6:"审核不通过",7:"已下架"}[t]}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-goods"},[n("div",{staticClass:"xv-list-query"},[n("xv-field-select",{attrs:{entity:t.table.query,name:"key",placeholder:"选择查询类型",options:{values:[{label:"商品ID",value:"goodsId"},{label:"商品名称",value:"goodsName"}]}}}),t._v(" "),n("xv-field-input",{attrs:{entity:t.table.query,name:"keyword",placeholder:"输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.loadTable}},[t._v("查询")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.cleanQuery}},[t._v("清除查询条件")])],1),t._v(" "),n("div",{staticClass:"select-goods__content"},[n("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{"margin-top":"20px"},attrs:{table:t.table,height:"400"},on:{"sort-change":t.handleQuery,"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"goodsId",label:"商品ID",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"商品价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    ￥"+t._s(e.row.price)+"\n                ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发布状态",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("getStatusType")(e.row.status)}},[t._v(t._s(t._f("getStatusTxt")(e.row.status)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",align:"center"}})],1),t._v(" "),n("xv-list-page",{attrs:{table:t.table},on:{change:t.handleQuery}})],1)])},staticRenderFns:[]};var h=n("VU/8")(d,f,!1,function(t){n("2KUU")},"data-v-0aa3f137",null);e.default=h.exports},SldL:function(t,e){!function(e){"use strict";var n,a=Object.prototype,r=a.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=_;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={},v={};v[i]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(G([])));y&&y!==a&&r.call(y,i)&&(v=y);var b=S.prototype=x.prototype=Object.create(v);k.prototype=b.constructor=S,S.constructor=k,S[s]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},T($.prototype),$.prototype[l]=function(){return this},u.AsyncIterator=$,u.async=function(t,e,n,a){var r=new $(_(t,e,n,a));return u.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},T(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},u.values=G,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,r){return l.type="throw",l.arg=t,e.next=a,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;P(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:G(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=n),g}}}function _(t,e,n,a){var r=e&&e.prototype instanceof x?e:x,o=Object.create(r.prototype),i=new I(a||[]);return o._invoke=function(t,e,n){var a=d;return function(r,o){if(a===h)throw new Error("Generator is already running");if(a===p){if("throw"===r)throw o;return N()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=L(i,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var s=w(t,e,n);if("normal"===s.type){if(a=n.done?p:f,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=p,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function S(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function $(t){var e;this._invoke=function(n,a){function o(){return new Promise(function(e,o){!function e(n,a,o,i){var l=w(t[n],t,a);if("throw"!==l.type){var s=l.arg,c=s.value;return c&&"object"==typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(c).then(function(t){s.value=t,o(s)},i)}i(l.arg)}(n,a,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var a=t.iterator[e.method];if(a===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=w(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,n){t.exports=n("jyFz")},"c+j2":function(t,e){},exGp:function(t,e,n){"use strict";e.__esModule=!0;var a,r=n("//Fk"),o=(a=r)&&a.__esModule?a:{default:a};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function a(r,i){try{var l=e[r](i),s=l.value}catch(t){return void n(t)}if(!l.done)return o.default.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}("next")})}}},jyFz:function(t,e,n){var a=function(){return this}()||Function("return this")(),r=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,o=r&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=n("SldL"),r)a.regeneratorRuntime=o;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},koAj:function(t,e){},lqB5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Gu7T"),r=n.n(a),o=n("MGsi"),i=n("OdD2"),l={components:{PartsList:o.default,VirtualList:i.default},props:{visible:Boolean,virtaulShow:{type:Boolean,default:!0},PartsShow:{type:Boolean,default:!0},status:{type:[Number,String],value:4},defaultValue:{type:Array,default:function(){return[]}}},data:function(){return{activeName:this.PartsShow?"parts":"virtual",tabNav:[{label:"零配件商品",value:1},{label:"虚拟商品",value:2}],selectPartsList:[],selectVirtualList:[]}},methods:{save:function(){var t=this.selectPartsList,e=this.selectVirtualList,n=[].concat(r()(t),r()(e));if(!n.length)return this.$message.warning("请至少选入一项商品");this.$emit("change",n),this.close(),this.$set(this,"selectPartsList",[]),this.$set(this,"selectVirtualList",[])},close:function(){this.$refs.partsList&&this.$refs.partsList.clearSelection(),this.$refs.virtualList&&this.$refs.virtualList.clearSelection(),this.$emit("update:visible",!1)},selectPartsChange:function(t){this.$set(this,"selectPartsList",t)},selectVirtualChange:function(t){this.$set(this,"selectVirtualList",t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"选择商品",visible:t.visible,width:"1000px",top:"20px","append-to-body":"","show-close":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.visible=e}}},[n("div",{staticClass:"select-goods"},[n("el-tabs",{staticClass:"parts-tab-nav",model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[t.PartsShow?n("el-tab-pane",{attrs:{label:"零配件商品",name:"parts"}},[n("parts-list",{ref:"partsList",attrs:{status:t.status,"default-value":t.defaultValue},on:{change:t.selectPartsChange}})],1):t._e(),t._v(" "),t.virtaulShow?n("el-tab-pane",{attrs:{label:"虚拟商品",name:"virtual"}},[n("virtual-list",{ref:"virtualList",attrs:{status:t.status,"default-value":t.defaultValue},on:{change:t.selectVirtualChange}})],1):t._e()],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer flex justify-content-center",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"large"},on:{click:t.close}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{size:"large",type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)])},staticRenderFns:[]};var c=n("VU/8")(l,s,!1,function(t){n("vf3P")},"data-v-6e6b78ba",null);e.default=c.exports},vf3P:function(t,e){}});