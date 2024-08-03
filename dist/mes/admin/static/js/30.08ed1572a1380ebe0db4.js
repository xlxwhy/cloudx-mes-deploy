webpackJsonp([30,39,85,160,227],{"6OFJ":function(e,t){},DoYw:function(e,t){},Hm5B:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("XtF0"),r=n("oW5U"),s={mixins:[a.default,r.a],props:{order:{type:Object,default:function(){return{}}}},data:function(){return{rowspan:this.getRowspan(),colspan:this.getColspan(),statusTag:{text:"未知状态",type:"info"},tags:{0:{text:"待支付",type:"error"},1:{text:"待使用",type:"warning"},2:{text:"服务中",type:"warning"},3:{text:"已完成",type:"success"},4:{text:"已取消",type:"info"}},firstGoods:{},moreGoods:[]}},components:{},watch:{order:{handler:function(e,t){this.init()},deep:!0}},created:function(){this.init()},methods:{init:function(){this.initStatus(this.order.status),this.initFirstGoods(),this.initMoreGoods(),this.rowspan=this.getRowspan(),this.colspan=this.getColspan()},getColspan:function(){return this.$verify("viewpartsdetail")?"8":"7"},getRowspan:function(){return this.order.ordPartsItemVos?this.order.ordPartsItemVos.length:1},initStatus:function(e){var t=this.tags[e];this.statusTag=t||this.statusTag},initFirstGoods:function(){this.firstGoods=this.order.ordPartsItemVos?this.order.ordPartsItemVos[0]:{}},initMoreGoods:function(){this.order.ordPartsItemVos&&this.order.ordPartsItemVos.length>1?this.moreGoods=this.order.ordPartsItemVos.slice(1):this.moreGoods=[]}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gtmc-table-body",{staticClass:"trade-order-parts-list-tab-card"},[n("gtmc-table-white-line",{attrs:{colspan:e.colspan}}),e._v(" "),n("gtmc-table-single-line",{attrs:{colspan:e.colspan}},[n("span",{staticClass:"status"},[e._v("订单状态")]),e._v(" "),n("gtmc-field-status",{attrs:{status:e.$enum(e.STATUS,e.order.status)}}),e._v(" "),n("span",{staticClass:"label"},[e._v("下单时间")]),e._v("："+e._s(e.order.createTime)+"\n    "),n("span",{staticClass:"label"},[e._v("订单编号")]),e._v("："+e._s(e.order.orderId)+"\n  ")],1),e._v(" "),n("gtmc-table-line",[n("td",[n("gtmc-goods-card",{attrs:{image:e.firstGoods.imagePath,title:e.firstGoods.partsGoodsName}})],1),e._v(" "),n("td",[n("gtmc-amount",{attrs:{value:e.firstGoods.salePrice}})],1),e._v(" "),n("td",[e._v("\n      x "+e._s(e.firstGoods.quantity)+"\n    ")]),e._v(" "),n("td",{attrs:{rowspan:e.rowspan}},[n("gtmc-amount",{attrs:{value:e.order.actualAmount,className:"red"}})],1),e._v(" "),n("td",{attrs:{rowspan:e.rowspan}},[e._v("\n      "+e._s(e.order.buyerName)),n("br"),e._v("\n      "+e._s(e.order.buyerMobile)+"\n    ")]),e._v(" "),n("td",{attrs:{rowspan:e.rowspan}},[e._v("\n      "+e._s(e.order.buyerVehName)),n("br"),e._v("\n      "+e._s(e.order.buyerLicensePlateNum)+"\n    ")]),e._v(" "),n("td",{attrs:{rowspan:e.rowspan}},[e._v("\n      "+e._s(e.order.storeName)),n("br"),e._v("\n      "+e._s(e.order.storeCode)+"\n\n    ")]),e._v(" "),e.$verify("viewpartsdetail")?n("td",{attrs:{rowspan:e.rowspan}},[n("router-link",{attrs:{to:{name:"trade-order-parts-detail",query:{orderId:e.order.orderId}}}},[e._v("查看详情")])],1):e._e()]),e._v(" "),e._l(e.moreGoods,function(t,a){return n("gtmc-table-line",{key:a},[n("td",[n("gtmc-goods-card",{attrs:{image:t.imagePath,title:t.partsGoodsName}})],1),e._v(" "),n("td",[n("gtmc-amount",{attrs:{value:t.salePrice}})],1),e._v(" "),n("td",[e._v("\n      x "+e._s(t.quantity)+"\n    ")])])})],2)},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(e){n("zQ3D")},null,null);t.default=o.exports},HzLs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{table:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{},mounted:function(){},methods:{loadTable:function(){this.$emit("query")},handleExport:function(){this.$emit("export")}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"trade-order-parts-list-query-panel"},[n("gtmc-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:function(t){return e.$handleQuery()}}},[n("gtmc-field-input",{attrs:{entity:e.table.query,name:"orderId",label:"订单编号",placeholder:"输入零配件订单编号"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("gtmc-field-input",{attrs:{entity:e.table.query,name:"merchant.name",label:"经销商名称",placeholder:"输入经销商名称"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("gtmc-field-input",{attrs:{entity:e.table.query,name:"user.phone",label:"用户手机号",placeholder:"输入手机号"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("br"),e._v(" "),n("gtmc-field-input",{attrs:{entity:e.table.query,name:"items.skuName",label:"商品名称",placeholder:"输入商品名称"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("gtmc-field-datetime",{attrs:{entity:e.table.query,name:"placedTime",label:"下单时间"}})],1)],1)},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(e){n("6OFJ")},null,null);t.default=s.exports},XtF0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{STATUS:{undefined:{label:"未知状态",code:"unkown",type:"info",step:1},null:{label:"未知状态",code:"unkown",type:"info",step:1},0:{label:"未知状态",code:"unkown",type:"info",step:1},201:{label:"待支付",code:"unpay",type:"error",step:0},202:{label:"待使用",code:"unuse",type:"warning",step:1},205:{label:"待使用",code:"unuse",type:"warning",step:1},204:{label:"服务中",code:"serving",type:"warning",step:2},206:{label:"已完成",code:"finish",type:"success",step:3},203:{label:"已取消",code:"cancel",type:"info",step:1},208:{label:"退款中",code:"refunding",type:"error",step:2},211:{label:"退款失败",code:"refund-fail",type:"error",step:3},209:{label:"已退款",code:"refund-success",type:"error",step:3}}}},methods:{}}},glvK:function(e,t){},oW5U:function(e,t,n){"use strict";t.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},scpx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("rddR");var a=n("HzLs"),r=n("Hm5B"),s={props:{active:{type:[String],default:""},name:{type:[String],default:""}},data:function(){return{table:{loading:!1,headers:[{title:"商品信息",width:"auto"},{title:"价格",width:"100"},{title:"数量",width:"50"},{title:"订单金额",width:"100"},{title:"用户信息",width:"100"},{title:"车辆信息",width:"100"},{title:"经销商",width:"150"},{title:"操作",width:"80",hidden:!this.$verify("viewpartsdetail")}],query:{multipleInput:{name:"",values:{}},intevalInputPrice:{}},filters:[],sort:{descs:["placedTime"]},page:this.$gtmc.initPage()}}},components:{QueryPanel:a.default,TabCard:r.default},watch:{active:{handler:function(e,t){e&&e==this.name&&this.loadTable()}}},created:function(){this.active==this.name&&this.loadTable()},methods:{getStatusValue:function(e){switch(e){case"all":return null;case"unpay":return["unpaid"];case"unuse":return["paid","pending"];case"serving":return["using"];case"finish":return["finished"];case"cancel":return["canceled"];case"refunding":return["refunding"];case"refund-fail":return["refundFailure"];case"refund-success":return["refunded"]}},loadTable:function(){var e=this,t=this.handleQueryParam();console.log(t),this.table.loading=!0,this.$api.OrderController.pagePartsOrder(t,function(t){console.log(t.body),e.$gtmc.assembleBody(e.table.page,t.body),e.table.loading=!1})},handleQueryParam:function(){var e=this.$gtmc.assemblePage(this.table),t=this.table.query;return this.$gtmc.appendFilterStatus(e.body.filters,"status",this.getStatusValue(this.name)),this.$gtmc.appendFilter(e.body.filters,"orderId","like",t.orderId),this.$gtmc.appendFilter(e.body.filters,"merchant.name","like",t["merchant.name"]),this.$gtmc.appendFilter(e.body.filters,"items.skuName","like",t["items.skuName"]),this.$gtmc.appendFilter(e.body.filters,"user.phone","like",t["user.phone"]),this.$gtmc.appendFilterDataTime(e.body.filters,"placedTime",t.placedTime),e},handleExport:function(){var e=this,t=this.handleQueryParam();this.$api.OrderController.exportPartsOrder(t,function(t){e.$gtmc.export(t,"EXPORT-PARTS-ORDER-LIST.xlsx")})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"trade-order-parts-tab-panel"},[n("query-panel",{attrs:{table:e.table},on:{query:function(t){return e.$handleQuery()},export:function(t){return e.handleExport()}}}),e._v(" "),n("gtmc-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],attrs:{table:e.table}},[n("gtmc-table-header",{attrs:{headers:e.table.headers}}),e._v(" "),e._l(e.table.page.records,function(e,t){return n("tab-card",{key:t,attrs:{order:e}})}),e._v(" "),e.table.page.records&&0==e.table.page.records.length?n("gtmc-table-empty-line",{attrs:{colspan:e.$verify("viewpartsdetail")?8:7}}):e._e()],2),e._v(" "),n("gtmc-list-page",{attrs:{table:e.table},on:{change:function(t){return e.$handleQuery()}}})],1)},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(e){n("DoYw")},null,null);t.default=o.exports},zBHA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("scpx"),r={mixins:[n("XtF0").default],data:function(){return{tabs:{active:"all",list:[{label:"全部",name:"all",component:a.default,number:0},{label:"待支付",name:"unpay",component:a.default,number:0},{label:"待使用",name:"unuse",component:a.default,number:0},{label:"服务中",name:"serving",component:a.default,number:0},{label:"已完成",name:"finish",component:a.default,number:0},{label:"已取消",name:"cancel",component:a.default,number:0},{label:"退款中",name:"refunding",component:a.default,number:0},{label:"退款失败",name:"refund-fail",component:a.default,number:0},{label:"已退款",name:"refund-success",component:a.default,number:0}]}}},components:{TabPanel:a.default},mounted:function(){},methods:{}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"trade-order-parts-list"},[t("gtmc-tab",{attrs:{tabs:this.tabs}})],1)},staticRenderFns:[]};var i=n("VU/8")(r,s,!1,function(e){n("glvK")},null,null);t.default=i.exports},zQ3D:function(e,t){}});