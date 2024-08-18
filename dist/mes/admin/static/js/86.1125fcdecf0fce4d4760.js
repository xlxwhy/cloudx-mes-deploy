webpackJsonp([86,243],{"8yvq":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={mixins:[n("XtF0").default],data:function(){return{loading:!0,entity:{}}},components:{},created:function(){var t=this;this.$loadEntity(this.$api.OrderController.getPartsOrder,"orderId","orderId",function(e){t.loading=!1,t.entity=e.body})},methods:{}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trade-order-parts-detail"},[n("xv-detail",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"detail__steps"},[n("el-steps",{attrs:{active:t.$enum(t.STATUS,t.entity.status).step,"align-center":"","finish-status":"success"}},[n("el-step",{attrs:{title:"用户下单",description:t.entity.createTime}}),t._v(" "),t.$notInStatus(t.STATUS,t.entity,["cancel"])?n("el-step",{attrs:{title:"支付订单",description:t.entity.paymentTime}}):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["unkown","unpay","unuse","serving","finish"])?n("el-step",{attrs:{title:"用户到店安装",description:t.entity.arrivalTime}}):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["unkown","unpay","unuse","serving","finish"])?n("el-step",{attrs:{title:"完成服务",description:t.entity.completeTime}}):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["cancel"])?n("el-step",{attrs:{title:"用户取消订单",description:t.entity.cancelTime}}):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["refunding","refund-fail","refund-success"])?n("el-step",{attrs:{title:"用户退款",description:t.entity.reqRefundTime}}):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["refund-fail"])?n("el-step",{attrs:{title:"退款失败",description:t.entity.refundFailTime}}):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["refund-success"])?n("el-step",{attrs:{title:"退款完成",description:t.entity.refundCompleteTime}}):t._e()],1)],1),t._v(" "),n("div",{staticClass:"detail__order"},[n("detail-block",{attrs:{title:"订单信息",border:!0}},[n("el-form",{staticClass:"detail__order__basic",attrs:{"label-width":"160px",inline:!0}},[n("div",[n("el-form-item",{attrs:{label:"订单编号："}},[t._v("\n              "+t._s(t.entity.orderId)+"\n            ")]),t._v(" "),n("el-form-item",{attrs:{label:"订单状态："}},[n("xv-field-status",{attrs:{status:t.$enum(t.STATUS,t.entity.status)}})],1)],1),t._v(" "),t.$notInStatus(t.STATUS,t.entity,["unpay","cancel"])?n("div",[n("el-form-item",{attrs:{label:"OMS订单号："}},[t._v("\n              "+t._s(t.entity.ordPaymentVo&&t.entity.ordPaymentVo.omsOrderNo)+"\n            ")]),t._v(" "),n("el-form-item",{attrs:{label:"OMS第三方流水号："}},[t._v("\n              "+t._s(t.entity.ordPaymentVo&&t.entity.ordPaymentVo.omsThirdPartySerialNo)+"\n            ")])],1):t._e()]),t._v(" "),n("el-form",{attrs:{"label-width":"160px"}},[n("el-form-item",{attrs:{label:"用户留言："}},[n("el-input",{attrs:{type:"textarea",rows:3,placeholder:"没有留言",readonly:"",maxlength:"50"},model:{value:t.entity.buyerMessage,callback:function(e){t.$set(t.entity,"buyerMessage",e)},expression:"entity.buyerMessage"}})],1)],1),t._v(" "),t.$inStatus(t.STATUS,t.entity,["refunding","refund-fail","refund-success"])?n("el-form",{attrs:{"label-width":"160px",inline:!0}},[n("el-form-item",{attrs:{label:"退款金额："}},[n("xv-amount",{attrs:{value:t.entity.refundAmount}})],1),t._v(" "),t.$inStatus(t.STATUS,t.entity,["refund-success"])?n("el-form-item",{attrs:{label:"退款方式："}},[t._v("\n            原路退回支付渠道\n          ")]):t._e()],1):t._e(),t._v(" "),t.$inStatus(t.STATUS,t.entity,["refunding","refund-fail","refund-success"])?n("el-form",{attrs:{"label-width":"160px"}},[n("el-form-item",{attrs:{label:"退款原因："}},[n("el-input",{attrs:{type:"textarea",rows:3,placeholder:" ",readonly:"",maxlength:"50"},model:{value:t.entity.refundReason,callback:function(e){t.$set(t.entity,"refundReason",e)},expression:"entity.refundReason"}})],1)],1):t._e()],1)],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"detail__info"},[n("detail-block",{attrs:{title:"用户信息",border:!0}},[n("el-form",{attrs:{"label-width":"80px","show-message":!1}},[n("el-form-item",{attrs:{label:"联系人："}},[t._v("\n            "+t._s(t.entity.buyerName)+"\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:"手机号："}},[t._v("\n            "+t._s(t.entity.buyerMobile)+"\n          ")])],1)],1),t._v(" "),n("detail-block",{attrs:{title:"车辆信息",border:!0}},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"车牌号："}},[t._v("\n            "+t._s(t.entity.buyerLicensePlateNum)+"\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:"车架号："}},[t._v("\n            "+t._s(t.entity.buyerVehFrameCode)+"\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:"车型："}},[t._v("\n            "+t._s(t.entity.buyerVehName)+" "+t._s(t.entity.buyerModelCode)+"\n          ")])],1)],1),t._v(" "),n("detail-block",{attrs:{title:"经销商信息"}},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"经销商名："}},[t._v("\n            "+t._s(t.entity.storeName)+"\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:"经销商代码："}},[t._v("\n            "+t._s(t.entity.storeCode)+"\n          ")]),t._v(" "),n("el-form-item",{attrs:{label:"经销商地址："}},[t._v("\n            "+t._s(t.entity.storeAddress)+"\n          ")])],1)],1)],1),t._v(" "),n("div",{staticClass:"detail__goods"},[n("detail-block",{attrs:{title:"商品信息",border:!1}},[t.$notInStatus(t.STATUS,t.entity,["unpay","cancel","refund-success"])?n("div",t._l(t.entity.ordPartsItemGroupVos,function(e,a){return n("xv-detail-goods-panel",{key:a,attrs:{order:t.entity,group:e}},[n("xv-detail-goods-table",{attrs:{records:e.ordPartsItemVos}})],1)}),1):n("div",t._l(t.entity.ordPartsItemGroupVos,function(t,e){return n("xv-detail-goods-table",{key:e,attrs:{records:t.ordPartsItemVos}})}),1)])],1),t._v(" "),n("div",{staticClass:"detail__goods__total"},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"金额小计："}},[n("xv-amount",{attrs:{value:t.entity.orderAmount,className:"bold black"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"优惠券："}},[t.entity.discountAmount?t._e():n("span",[t._v("无")]),t._v(" "),t.entity.discountAmount?n("xv-amount",{attrs:{value:t.entity.discountAmount,className:"bold black",prefix:" - ￥"}}):t._e()],1),t._v(" "),t.$inStatus(t.STATUS,t.entity,["unpay","cancel"])?n("el-form-item",{attrs:{label:"需付款："}},[n("xv-amount",{attrs:{value:t.entity.actualAmount,className:"bold red"}})],1):n("el-form-item",{attrs:{label:"实付款："}},[n("xv-amount",{attrs:{value:t.entity.actualAmount,className:"bold red"}})],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"button"},slot:"button"},[n("xv-button-return-order",{attrs:{name:"返回列表"},on:{click:function(e){return t.link("trade-order-parts-list")}}})],1)])],1)},staticRenderFns:[]};var r=n("VU/8")(a,s,!1,function(t){n("uVe9")},null,null);e.default=r.exports},XtF0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{STATUS:{undefined:{label:"未知状态",code:"unkown",type:"info",step:1},null:{label:"未知状态",code:"unkown",type:"info",step:1},0:{label:"未知状态",code:"unkown",type:"info",step:1},201:{label:"待支付",code:"unpay",type:"error",step:0},202:{label:"待使用",code:"unuse",type:"warning",step:1},205:{label:"待使用",code:"unuse",type:"warning",step:1},204:{label:"服务中",code:"serving",type:"warning",step:2},206:{label:"已完成",code:"finish",type:"success",step:3},203:{label:"已取消",code:"cancel",type:"info",step:1},208:{label:"退款中",code:"refunding",type:"error",step:2},211:{label:"退款失败",code:"refund-fail",type:"error",step:3},209:{label:"已退款",code:"refund-success",type:"error",step:3}}}},methods:{}}},uVe9:function(t,e){}});