webpackJsonp([83,230],{AZLp:function(t,e){},Hm5B:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("XtF0"),o=s("oW5U"),a={mixins:[r.default,o.a],props:{order:{type:Object,default:function(){return{}}}},data:function(){return{rowspan:this.getRowspan(),colspan:this.getColspan(),statusTag:{text:"未知状态",type:"info"},tags:{0:{text:"待支付",type:"error"},1:{text:"待使用",type:"warning"},2:{text:"服务中",type:"warning"},3:{text:"已完成",type:"success"},4:{text:"已取消",type:"info"}},firstGoods:{},moreGoods:[]}},components:{},watch:{order:{handler:function(t,e){this.init()},deep:!0}},created:function(){this.init()},methods:{init:function(){this.initStatus(this.order.status),this.initFirstGoods(),this.initMoreGoods(),this.rowspan=this.getRowspan(),this.colspan=this.getColspan()},getColspan:function(){return this.$verify("viewpartsdetail")?"8":"7"},getRowspan:function(){return this.order.ordPartsItemVos?this.order.ordPartsItemVos.length:1},initStatus:function(t){var e=this.tags[t];this.statusTag=e||this.statusTag},initFirstGoods:function(){this.firstGoods=this.order.ordPartsItemVos?this.order.ordPartsItemVos[0]:{}},initMoreGoods:function(){this.order.ordPartsItemVos&&this.order.ordPartsItemVos.length>1?this.moreGoods=this.order.ordPartsItemVos.slice(1):this.moreGoods=[]}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("xv-table-body",{staticClass:"trade-order-parts-list-tab-card"},[s("xv-table-white-line",{attrs:{colspan:t.colspan}}),t._v(" "),s("xv-table-single-line",{attrs:{colspan:t.colspan}},[s("span",{staticClass:"status"},[t._v("订单状态")]),t._v(" "),s("xv-field-status",{attrs:{status:t.$enum(t.STATUS,t.order.status)}}),t._v(" "),s("span",{staticClass:"label"},[t._v("下单时间")]),t._v("："+t._s(t.order.createTime)+"\n    "),s("span",{staticClass:"label"},[t._v("订单编号")]),t._v("："+t._s(t.order.orderId)+"\n  ")],1),t._v(" "),s("xv-table-line",[s("td",[s("xv-goods-card",{attrs:{image:t.firstGoods.imagePath,title:t.firstGoods.partsGoodsName}})],1),t._v(" "),s("td",[s("xv-amount",{attrs:{value:t.firstGoods.salePrice}})],1),t._v(" "),s("td",[t._v("\n      x "+t._s(t.firstGoods.quantity)+"\n    ")]),t._v(" "),s("td",{attrs:{rowspan:t.rowspan}},[s("xv-amount",{attrs:{value:t.order.actualAmount,className:"red"}})],1),t._v(" "),s("td",{attrs:{rowspan:t.rowspan}},[t._v("\n      "+t._s(t.order.buyerName)),s("br"),t._v("\n      "+t._s(t.order.buyerMobile)+"\n    ")]),t._v(" "),s("td",{attrs:{rowspan:t.rowspan}},[t._v("\n      "+t._s(t.order.buyerVehName)),s("br"),t._v("\n      "+t._s(t.order.buyerLicensePlateNum)+"\n    ")]),t._v(" "),s("td",{attrs:{rowspan:t.rowspan}},[t._v("\n      "+t._s(t.order.storeName)),s("br"),t._v("\n      "+t._s(t.order.storeCode)+"\n\n    ")]),t._v(" "),t.$verify("viewpartsdetail")?s("td",{attrs:{rowspan:t.rowspan}},[s("router-link",{attrs:{to:{name:"trade-order-parts-detail",query:{orderId:t.order.orderId}}}},[t._v("查看详情")])],1):t._e()]),t._v(" "),t._l(t.moreGoods,function(e,r){return s("xv-table-line",{key:r},[s("td",[s("xv-goods-card",{attrs:{image:e.imagePath,title:e.partsGoodsName}})],1),t._v(" "),s("td",[s("xv-amount",{attrs:{value:e.salePrice}})],1),t._v(" "),s("td",[t._v("\n      x "+t._s(e.quantity)+"\n    ")])])})],2)},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(t){s("AZLp")},null,null);e.default=i.exports},XtF0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{STATUS:{undefined:{label:"未知状态",code:"unkown",type:"info",step:1},null:{label:"未知状态",code:"unkown",type:"info",step:1},0:{label:"未知状态",code:"unkown",type:"info",step:1},201:{label:"待支付",code:"unpay",type:"error",step:0},202:{label:"待使用",code:"unuse",type:"warning",step:1},205:{label:"待使用",code:"unuse",type:"warning",step:1},204:{label:"服务中",code:"serving",type:"warning",step:2},206:{label:"已完成",code:"finish",type:"success",step:3},203:{label:"已取消",code:"cancel",type:"info",step:1},208:{label:"退款中",code:"refunding",type:"error",step:2},211:{label:"退款失败",code:"refund-fail",type:"error",step:3},209:{label:"已退款",code:"refund-success",type:"error",step:3}}}},methods:{}}},oW5U:function(t,e,s){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});