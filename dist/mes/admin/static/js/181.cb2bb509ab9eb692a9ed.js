webpackJsonp([181],{rmWh:function(e,t){},xkRC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={props:{table:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{},mounted:function(){},methods:{loadTable:function(){this.$emit("query")}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"trade-order-virtual-list-query-panel"},[n("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:function(t){return e.$handleQuery()}}},[n("xv-field-input",{attrs:{entity:e.table.query,name:"orderId",label:"订单编号",placeholder:"输入订单编号"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("xv-field-input",{attrs:{entity:e.table.query,name:"items.skuName",label:"商品名称",placeholder:"输入商品名称"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("xv-field-input",{attrs:{entity:e.table.query,name:"user.phone",label:"用户手机号",placeholder:"输入手机号"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),n("br"),e._v(" "),n("xv-field-datetime",{attrs:{entity:e.table.query,name:"placedTime",label:"下单时间"}})],1)],1)},staticRenderFns:[]};var l=n("VU/8")(r,a,!1,function(e){n("rmWh")},null,null);t.default=l.exports}});