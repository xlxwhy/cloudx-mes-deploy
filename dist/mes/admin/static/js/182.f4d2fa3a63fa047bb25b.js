webpackJsonp([182],{"+TAq":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={props:{jobOrderNum:{type:[String,Number],default:""}},data:function(){return{loading:!1,typeMap:{1:"类型1",2:"类型2"},entity:{}}},watch:{jobOrderNum:{handle:function(t,e){this.loadEntity(t)}}},created:function(){this.loadEntity(this.jobOrderNum)},methods:{loadEntity:function(t){var e=this;if(console.log(t),!t)return!1;this.loading=!0;var a={path:{jobOrderNum:t}};this.$api.JobOrderController.get(a,function(t){e.loading=!1,t&&t.body&&(console.log(t.body),e.entity=t.body)})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"xv-detail-job-order"},[a("el-form",{attrs:{"label-width":"130px"}},[a("el-form-item",{attrs:{label:"工单号码"}},[t._v(" "+t._s(t.entity.jobOrderNo)+" ")]),t._v(" "),a("el-form-item",{attrs:{label:"交车时间"}},[t._v(" "+t._s(t.entity.completeTime)+" ")]),t._v(" "),a("el-form-item",{attrs:{label:"入厂时间"}},[t._v(" "+t._s(t.entity.arrivalTime)+" ")]),t._v(" "),a("el-form-item",{attrs:{label:"入库店"}},[t._v(" "+t._s(t.entity.storeName)+" ")]),t._v(" "),a("el-form-item",{attrs:{label:"工单类型"}},[t._v(" "+t._s(t.entity.jobType)+" ")]),t._v(" "),a("el-form-item",{attrs:{label:"工单合计金额"}},[a("xv-amount",{attrs:{value:t.entity.totalAmount}})],1),t._v(" "),a("el-form-item",{attrs:{label:"其他付款金额"}},[a("xv-amount",{attrs:{value:t.entity.otherPayment}})],1),t._v(" "),a("el-form-item",{attrs:{label:"工单优惠金额"}},[a("xv-amount",{attrs:{value:t.entity.discountAmount}})],1),t._v(" "),a("el-form-item",{attrs:{label:"工单结算金额"}},[a("xv-amount",{attrs:{value:t.entity.actualAmount}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否月付款"}},[t._v(" "+t._s(t.entity.isMonthlyPaid?"是":"否")+" ")])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(t){a("Qu0B")},null,null);e.default=o.exports},Qu0B:function(t,e){}});