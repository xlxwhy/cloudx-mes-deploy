webpackJsonp([28,37,83,184,243],{"/THa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xx5v"),r={mixins:[a("oW5U").a,n.default],props:{order:{type:Object,default:function(){return{}}}},data:function(){return{rowspan:this.getRowspan(),colspan:this.getColspan(),statusTag:{text:"未知状态",type:"info"},tags:{0:{text:"待支付",type:"error"},1:{text:"待使用",type:"warning"},2:{text:"服务中",type:"warning"},3:{text:"已完成",type:"success"},4:{text:"已取消",type:"info"}},firstGoods:{},moreGoods:[]}},components:{},watch:{order:{handler:function(t,e){console.log("watch order",t),this.init()},deep:!0}},created:function(){this.init()},methods:{getColspan:function(){return this.$verify("viewvirtualdetail")?"6":"5"},getRowspan:function(){return 1},init:function(){this.initStatus(this.order.status),this.initFirstGoods(),this.initMoreGoods(),this.rowspan=this.getRowspan(),this.colspan=this.getColspan()},initStatus:function(t){var e=this.tags[t];this.statusTag=e||this.statusTag},initFirstGoods:function(){this.firstGoods=this.order.ordVirtualItemVo},initMoreGoods:function(){this.order.ordVirtualItemVos&&this.order.ordVirtualItemVos.length>1?this.moreGoods=this.order.ordVirtualItemVos.slice(1):this.moreGoods=[]}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("xv-table-body",{staticClass:"trade-order-virtual-list-tab-card"},[a("xv-table-white-line",{attrs:{colspan:t.colspan}}),t._v(" "),a("xv-table-single-line",{attrs:{colspan:t.colspan}},[a("span",{staticClass:"status"},[t._v("订单状态")]),t._v(" "),a("xv-field-status",{attrs:{status:t.$enum(t.STATUS,t.order.status)}}),t._v(" "),a("span",{staticClass:"label"},[t._v("下单时间")]),t._v("："+t._s(t.order.createTime)+"\n    "),a("span",{staticClass:"label"},[t._v("订单编号")]),t._v("："+t._s(t.order.orderId)+"\n  ")],1),t._v(" "),a("xv-table-line",[a("td",[a("xv-goods-card",{attrs:{image:t.firstGoods.imagePath,title:t.firstGoods.goodsName,num:{label:"优惠券批号",value:t.firstGoods.couponCode}}})],1),t._v(" "),a("td",[a("xv-amount",{attrs:{value:t.firstGoods.salePrice}})],1),t._v(" "),a("td",[t._v("\n      x "+t._s(t.firstGoods.quantity)+"\n    ")]),t._v(" "),a("td",{attrs:{rowspan:t.rowspan}},[a("xv-amount",{attrs:{value:t.order.actualAmount,className:"normal red"}})],1),t._v(" "),a("td",{attrs:{rowspan:t.rowspan}},[t._v("\n      "+t._s(t.order.buyerName)),a("br"),t._v("\n      "+t._s(t.order.buyerMobile)+"\n    ")]),t._v(" "),t.$verify("viewvirtualdetail")?a("td",{attrs:{rowspan:t.rowspan}},[a("router-link",{attrs:{to:{name:"trade-order-virtual-detail",query:{orderId:t.order.orderId}}}},[t._v("查看详情")])],1):t._e()]),t._v(" "),t._l(t.moreGoods,function(e,n){return a("xv-table-line",{key:n},[a("td",[a("xv-goods-card",{attrs:{image:e.imagePath,title:e.goodsName,num:{label:"优惠券批号",value:e.couponCode}}})],1),t._v(" "),a("td",[a("xv-amount",{attrs:{value:e.salePrice}})],1),t._v(" "),a("td",[t._v("\n      x "+t._s(e.quantity)+"\n    ")])])})],2)},staticRenderFns:[]};var i=a("VU/8")(r,s,!1,function(t){a("Xq4r")},null,null);e.default=i.exports},MxqK:function(t,e){},Un6V:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("rddR");var n=a("xkRC"),r=a("/THa"),s=a("Xx5v"),i={mixins:[a("oW5U").a,s.default],props:{active:{type:[String],default:""},name:{type:[String],default:""}},data:function(){return{table:{loading:!1,headers:[{title:"商品信息",width:"auto"},{title:"价格",width:"100"},{title:"数量",width:"50"},{title:"订单金额",width:"100"},{title:"用户信息",width:"100"},{title:"操作",width:"80",hidden:!this.$verify("viewvirtualdetail")}],query:{},filters:[],sort:{descs:["placedTime"]},page:this.$gtmc.initPage()}}},components:{QueryPanel:n.default,TabCard:r.default},watch:{active:{handler:function(t,e){t&&t==this.name&&this.loadTable()}}},created:function(){this.active==this.name&&this.loadTable()},methods:{getStatusValue:function(t){switch(t){case"all":return null;case"unpay":return["unpaid"];case"finish":return["finished"];case"cancel":return["canceled"];case"sending":return["issuing"];case"send-fail":return["issueFail"]}},handleQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilterStatus(t.body.filters,"status",this.getStatusValue(this.name)),this.$gtmc.appendFilter(t.body.filters,"orderId","like",e.orderId),this.$gtmc.appendFilter(t.body.filters,"items.skuName","like",e["items.skuName"]),this.$gtmc.appendFilter(t.body.filters,"user.phone","like",e["user.phone"]),this.$gtmc.appendFilterDataTime(t.body.filters,"placedTime",e.placedTime),t},loadTable:function(){var t=this,e=this.handleQueryParam();console.log(e),this.table.loading=!0,this.$api.OrderController.pageVirtualOrder(e,function(e){t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1},function(t){console.log(t)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trade-order-virtual-tab-panel"},[a("query-panel",{attrs:{table:t.table},on:{query:function(e){return t.$handleQuery()}}}),t._v(" "),a("xv-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table}},[a("xv-table-header",{attrs:{headers:t.table.headers}}),t._v(" "),t._l(t.table.page.records,function(t,e){return a("tab-card",{key:e,attrs:{order:t}})}),t._v(" "),t.table.page.records&&0==t.table.page.records.length?a("xv-table-empty-line",{attrs:{colspan:t.$verify("viewvirtualdetail")?6:5}}):t._e()],2),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var o=a("VU/8")(i,l,!1,function(t){a("V7rq")},null,null);e.default=o.exports},V7rq:function(t,e){},Xq4r:function(t,e){},Xx5v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{STATUS:{undefined:{label:"未知状态",code:"unkown",type:"info",step:1},null:{label:"未知状态",code:"unkown",type:"info",step:1},0:{label:"未知状态",code:"unkown",type:"info",step:1},201:{label:"待支付",code:"unpay",type:"error",step:0},206:{label:"已完成",code:"finish",type:"success",step:2},203:{label:"已取消",code:"cancel",type:"info",step:1},221:{label:"发放中",code:"sending",type:"warning",step:2},222:{label:"发放失败",code:"send-fail",type:"error",step:2}}}},methods:{}}},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},rNqS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Un6V"),r={data:function(){return{tabs:{active:"all",list:[{label:"全部",name:"all",component:n.default,number:0},{label:"待支付",name:"unpay",component:n.default,number:0},{label:"发放中",name:"sending",component:n.default,number:0},{label:"已完成",name:"finish",component:n.default,number:0},{label:"已取消",name:"cancel",component:n.default,number:0},{label:"发放失败",name:"send-fail",component:n.default,number:0}]}}},components:{TabPanel:n.default},mounted:function(){},methods:{}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"trade-order-virtual-list"},[e("xv-tab",{attrs:{tabs:this.tabs}})],1)},staticRenderFns:[]};var i=a("VU/8")(r,s,!1,function(t){a("MxqK")},null,null);e.default=i.exports},rmWh:function(t,e){},xkRC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{table:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{},mounted:function(){},methods:{loadTable:function(){this.$emit("query")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trade-order-virtual-list-query-panel"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"orderId",label:"订单编号",placeholder:"输入订单编号"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-input",{attrs:{entity:t.table.query,name:"items.skuName",label:"商品名称",placeholder:"输入商品名称"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-input",{attrs:{entity:t.table.query,name:"user.phone",label:"用户手机号",placeholder:"输入手机号"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("br"),t._v(" "),a("xv-field-datetime",{attrs:{entity:t.table.query,name:"placedTime",label:"下单时间"}})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,r,!1,function(t){a("rmWh")},null,null);e.default=s.exports}});