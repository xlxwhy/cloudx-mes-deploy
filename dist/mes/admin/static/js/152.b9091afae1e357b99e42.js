webpackJsonp([152],{OPtX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"trade-refund-maintain-detail"},[i("xv-detail",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{staticClass:"detail__steps"},[i("el-steps",{attrs:{active:t.getActiveStep(),"align-center":"","finish-status":"success"}},[i("el-step",{attrs:{title:"用户申请退款",description:t.entity.createTime}}),t._v(" "),1==t.entity.status||0==t.entity.status?i("el-step",{attrs:{title:"完成退款",description:" "}}):t._e(),t._v(" "),2==t.entity.status?i("el-step",{attrs:{title:"退款取消",description:t.entity.createTime}}):t._e(),t._v(" "),3==t.entity.status?i("el-step",{attrs:{title:"退款失败",description:t.entity.createTime}}):t._e(),t._v(" "),4==t.entity.status?i("el-step",{attrs:{title:"完成退款",description:t.entity.createTime}}):t._e()],1)],1),t._v(" "),i("div",{staticClass:"detail__info"},[i("detail-block",{attrs:{title:"退款信息",border:!0}},[i("el-form",{attrs:{inline:!0,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"退款单号："}},[t._v("\n            "+t._s(t.entity.code)+"\n          ")]),t._v(" "),i("el-form-item",{attrs:{label:"退款状态："}},[0==t.entity.status?i("el-tag",{attrs:{type:"info"}},[t._v("未知状态")]):t._e(),t._v(" "),1==t.entity.status?i("el-tag",{attrs:{type:"warning"}},[t._v("退款中")]):t._e(),t._v(" "),2==t.entity.status?i("el-tag",{attrs:{type:"error"}},[t._v("退款取消")]):t._e(),t._v(" "),3==t.entity.status?i("el-tag",{attrs:{type:"error"}},[t._v("退款失败")]):t._e(),t._v(" "),4==t.entity.status?i("el-tag",{attrs:{type:"success"}},[t._v("已退款")]):t._e()],1),t._v(" "),i("el-form-item",{attrs:{label:"退款金额："}},[i("xv-amount",{attrs:{value:t.entity.amount}})],1),t._v(" "),i("el-form-item",{attrs:{label:"退款原因："}},[t._v("\n            "+t._s(t.entity.name)+"\n          ")]),t._v(" "),i("br"),t._v(" "),i("el-form-item",{attrs:{label:"相关订单号："}},[t._v("\n            "+t._s(t.entity.code)+"\n          ")]),t._v(" "),i("el-form-item",[i("xv-link",{attrs:{text:"查看相关订单",name:"trade-order-maintain-detail",query:{orderId:t.entity.code}}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"detail__user"},[i("div",{staticClass:"left"},[i("detail-block",{attrs:{title:"用户信息",border:!0}},[i("el-form",{attrs:{"label-width":"120px"}},[i("el-form-item",{attrs:{label:"联系人："}},[t._v("\n              "+t._s(t.entity.name)+"\n            ")]),t._v(" "),i("el-form-item",{attrs:{label:"手机号："}},[t._v("\n              "+t._s(t.entity.code)+"\n            ")]),t._v(" "),i("el-form-item",{attrs:{label:"车型："}},[t._v("\n              "+t._s(t.entity.name)+"\n            ")]),t._v(" "),i("el-form-item",{attrs:{label:"车牌号："}},[t._v("\n              "+t._s(t.entity.code)+"\n            ")])],1)],1)],1),t._v(" "),i("div",{staticClass:"right"},[i("detail-block",{attrs:{title:"销售店信息",border:!0}},[i("el-form",{attrs:{"label-width":"120px"}},[i("el-form-item",{attrs:{label:"销售店名："}},[t._v("\n              "+t._s(t.entity.name)+"\n            ")]),t._v(" "),i("el-form-item",{attrs:{label:"销售店地址："}},[t._v("\n              "+t._s(t.entity.name)+"\n            ")])],1)],1)],1)]),t._v(" "),i("xv-line"),t._v(" "),i("div",{staticClass:"detail__buttons"},[i("xv-button-return",{attrs:{name:"返回列表"},on:{click:function(e){return t.link("trade-refund-parts-list")}}})],1)],1)],1)},staticRenderFns:[]};var s=i("VU/8")({data:function(){return{loading:!0,entity:{}}},created:function(){this.loadEntity()},methods:{getActiveStep:function(){return this.inArray(this.entity.status,[2,3,4])?2:1},loadEntity:function(){var t=this,e={query:{id:this.getParameter("id")}};this.loading=!0,this.$apis.VehicleApi.get(e,function(e){t.entity=e.body,t.loading=!1})}}},a,!1,function(t){i("nwDH")},null,null);e.default=s.exports},nwDH:function(t,e){}});