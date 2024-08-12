webpackJsonp([47,131,160],{DTcC:function(t,e){},YEfO:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{jobOrderNum:{type:[String,Number],default:""}},data:function(){return{loading:!1,typeMap:{1:"类型1",2:"类型2"},entity:{}}},watch:{jobOrderNum:{handle:function(t,e){this.loadEntity(t)}}},created:function(){this.loadEntity(this.jobOrderNum)},methods:{loadEntity:function(t){var e=this;if(console.log(t),!t)return!1;this.loading=!0;var r={path:{jobOrderNum:t}};this.$api.JobOrderController.get(r,function(t){e.loading=!1,t&&t.body&&(console.log(t.body),e.entity=t.body)})}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"gtmc-detail-job-order"},[r("el-form",{attrs:{"label-width":"130px"}},[r("el-form-item",{attrs:{label:"工单号码"}},[t._v(" "+t._s(t.entity.jobOrderNo)+" ")]),t._v(" "),r("el-form-item",{attrs:{label:"交车时间"}},[t._v(" "+t._s(t.entity.completeTime)+" ")]),t._v(" "),r("el-form-item",{attrs:{label:"入厂时间"}},[t._v(" "+t._s(t.entity.arrivalTime)+" ")]),t._v(" "),r("el-form-item",{attrs:{label:"入库店"}},[t._v(" "+t._s(t.entity.storeName)+" ")]),t._v(" "),r("el-form-item",{attrs:{label:"工单类型"}},[t._v(" "+t._s(t.entity.jobType)+" ")]),t._v(" "),r("el-form-item",{attrs:{label:"工单合计金额"}},[r("gtmc-amount",{attrs:{value:t.entity.totalAmount}})],1),t._v(" "),r("el-form-item",{attrs:{label:"其他付款金额"}},[r("gtmc-amount",{attrs:{value:t.entity.otherPayment}})],1),t._v(" "),r("el-form-item",{attrs:{label:"工单优惠金额"}},[r("gtmc-amount",{attrs:{value:t.entity.discountAmount}})],1),t._v(" "),r("el-form-item",{attrs:{label:"工单结算金额"}},[r("gtmc-amount",{attrs:{value:t.entity.actualAmount}})],1),t._v(" "),r("el-form-item",{attrs:{label:"是否月付款"}},[t._v(" "+t._s(t.entity.isMonthlyPaid?"是":"否")+" ")])],1)],1)},staticRenderFns:[]};var s=r("VU/8")(a,i,!1,function(t){r("DTcC")},null,null);e.default=s.exports},extX:function(t,e){},hSZ1:function(t,e){},oClG:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("rJN5"),i=(r("YEfO"),{props:{statusMap:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}}},components:{GtmcOrderDetailMaintainItemRow:a.default},data:function(){return{headers:[{title:"保养项",width:"100"},{title:"零配件",width:""},{title:"SRP价格",width:"100"},{title:"销售价格",width:"100"},{title:"实付价格",width:"100"},{title:"数量",width:"100"}]}},methods:{getTitle:function(t){return t&&t.maintainName?t.maintainName+"公里定期保养":"保养服务"}}}),s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gtmc-order-detail-maintain-item-table"},[r("detail-block",{attrs:{title:t.getTitle(t.order.ordMatPkgVo),border:!1}},[t.$inStatus(t.statusMap,t.order,["serving","finish"])?r("div",{staticClass:"job-order-line"},[r("div",{staticClass:"status"},[t.$inStatus(t.statusMap,t.order,["serving"])?r("el-tag",{attrs:{type:"warning"}},[t._v("零配件使用中")]):t._e(),t._v(" "),t.$inStatus(t.statusMap,t.order,["finish"])?r("el-tag",{attrs:{type:"success"}},[t._v("零配件已使用")]):t._e()],1),t._v(" "),t.$inStatus(t.statusMap,t.order,["finish"])&&t.order.usedTime?r("div",{staticClass:"used-time"},[t._v("\n        使用时间: "+t._s(t.order.usedTime)+"\n      ")]):t._e(),t._v(" "),t.order.verifyCode?r("div",{staticClass:"verify-code"},[t._v("\n        核销码: "+t._s(t.order.verifyCode)+"\n      ")]):t._e(),t._v(" "),t.order.verifyJobOrderNum?r("div",{staticClass:"verify-job-order-num"},[t._v("\n        核销工单号: "+t._s(t.order.verifyJobOrderNum)+"\n      ")]):t._e(),t._v(" "),r("div",{staticClass:"verify-job-order-button"},[t.$notInStatus(t.statusMap,t.order,["serving"])&&t.order.verifyJobOrderNum?r("el-tooltip",{attrs:{effect:"Light",placement:"left"}},[r("gtmc-detail-job-order",{attrs:{slot:"content",jobOrderNum:t.order.verifyJobOrderNum},slot:"content"}),t._v(" "),r("el-button",{attrs:{type:"primary",plain:""}},[t._v("查看工单")])],1):t._e(),t._v(" "),t.$inStatus(t.statusMap,t.order,["serving"])&&t.order.verifyJobOrderNum?r("el-tooltip",{attrs:{effect:"Light",placement:"left"}},[r("gtmc-detail-job-order",{attrs:{slot:"content",jobOrderNum:t.order.verifyJobOrderNum},slot:"content"}),t._v(" "),r("el-button",{attrs:{type:"primary",plain:""}},[t._v("服务中工单")])],1):t._e()],1)]):t._e(),t._v(" "),t.order.maintainItemDetails?r("gtmc-table",[r("gtmc-table-header",{attrs:{headers:t.headers}}),t._v(" "),t._l(t.order.maintainItemDetails,function(t,e){return r("gtmc-order-detail-maintain-item-row",{key:e,attrs:{row:t}})})],2):t._e()],1)],1)},staticRenderFns:[]};var n=r("VU/8")(i,s,!1,function(t){r("extX")},null,null);e.default=n.exports},rJN5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{row:{type:Object,default:function(){return{maintainItemDetails:[]}}}},data:function(){return{firstParts:{},moreParts:[]}},components:{},created:function(){this.row.matItemParts&&this.row.matItemParts.length>0&&(this.initFirstParts(),this.initMoreParts())},methods:{getRowspan:function(){return this.row.matItemParts?this.row.matItemParts.length:1},initFirstParts:function(){this.firstParts=this.row.matItemParts[0]},initMoreParts:function(){this.row.matItemParts.length>1?this.moreParts=this.row.matItemParts.slice(1):this.moreParts=[]}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("gtmc-table-body",{staticClass:"gtmc-order-detail-maintain-item-row"},[r("gtmc-table-line",[r("td",{attrs:{rowspan:t.getRowspan()}},[r("div",{staticClass:"maintain-item"},[r("div",[r("img",{attrs:{src:t.$image(t.row.iconPath),width:"50",height:"50"}})]),t._v(" "),r("div",[t._v(" "+t._s(t.row.itemName))])])]),t._v(" "),r("td",[r("div",{staticClass:"maintain-parts"},[r("div",[t._v(" "+t._s(t.firstParts.partsName)+" ")]),t._v(" "),r("div",[t._v(" 零件编号："+t._s(t.firstParts.partsCode)+" ")])])]),t._v(" "),r("td",[r("gtmc-amount",{attrs:{value:t.firstParts.suggestPrice}})],1),t._v(" "),r("td",[r("gtmc-amount",{attrs:{value:t.firstParts.salePrice}})],1),t._v(" "),r("td",[r("gtmc-amount",{attrs:{value:t.firstParts.actualPrice}})],1),t._v(" "),r("td",[t._v("\n      x "+t._s(t.firstParts.useQuantity)+"\n    ")])]),t._v(" "),t._l(t.moreParts,function(e,a){return r("gtmc-table-line",{key:a},[r("td",{staticClass:"maintain-parts-cell"},[r("div",{staticClass:"maintain-parts"},[r("div",[t._v(" "+t._s(e.partsName)+" ")]),t._v(" "),r("div",[t._v(" 零件编号："+t._s(e.partsCode)+" ")])])]),t._v(" "),r("td",[r("gtmc-amount",{attrs:{value:e.suggestPrice}})],1),t._v(" "),r("td",[r("gtmc-amount",{attrs:{value:e.salePrice}})],1),t._v(" "),r("td",[r("gtmc-amount",{attrs:{value:e.actualPrice}})],1),t._v(" "),r("td",[t._v("\n      x "+t._s(e.useQuantity)+"\n    ")])])})],2)},staticRenderFns:[]};var s=r("VU/8")(a,i,!1,function(t){r("hSZ1")},null,null);e.default=s.exports}});