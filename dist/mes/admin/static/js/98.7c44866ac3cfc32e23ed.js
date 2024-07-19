webpackJsonp([98],{ADtT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={mixins:[a("oW5U").a],data:function(){return{TYPES:{undefined:{label:"未知类型订单",name:"trade-order-parts-detail"},null:{label:"未知类型订单",name:"trade-order-parts-detail"},1:{label:"零配件订单",name:"trade-order-parts-detail"},2:{label:"虚拟商品订单",name:"trade-order-virtual-detail"},3:{label:"保养服务订单",name:"trade-order-maintain-detail"}},table:{loading:!1,query:{multipleInput:{name:"orderId",values:{}}},sort:{descs:["firstJob.completeTime"]},page:this.$gtmc.initPage()}}},components:{},mounted:function(){this.loadTable()},methods:{handleClean:function(){this.table.query.multipleInput.name="orderId"},handleQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"merchant.name","like",e["merchant.name"]),this.$gtmc.appendFilterMultipleInput(t.body.filters,e.multipleInput),this.$gtmc.appendFilterDataTime(t.body.filters,"firstJob.completeTime",e["firstJob.completeTime"]),t},loadTable:function(){var t=this,e=this.handleQueryParam();console.log(e),this.table.loading=!0,this.$api.OrderController.pageUsedOrder(e,function(e){t.table.loading=!1,t.$gtmc.assembleBody(t.table.page,e.body)}).finally(function(){t.table.loading=!1})},handleExport:function(){var t=this,e=this.handleQueryParam();this.$api.OrderController.exportUsedOrder(e,function(e){t.$gtmc.export(e,"EXPORT-USED-ORDER-LIST.xlsx")})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trade-order-first-list"},[a("gtmc-list-query",{attrs:{cleanText:"清除查询条件",queryText:"",table:t.table},on:{clean:t.handleClean}},[a("gtmc-field-multiple-input",{attrs:{entity:t.table.query.multipleInput,label:"选择查询类型",placeholder:"输入搜索关键字",options:{values:[{label:"订单编号",value:"orderId"},{label:"工单号码",value:"firstJob.jobNo"},{label:"OMS订单编号",value:"payment.omsOrderNo"},{label:"第三方流水号",value:"payment.omsThirdPartySerialNo"}]}},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("gtmc-field-datetime",{attrs:{entity:t.table.query,name:"firstJob.completeTime",label:"首次工单完成时间"}}),t._v(" "),a("br"),t._v(" "),a("gtmc-field-input",{attrs:{entity:t.table.query,name:"merchant.name",label:"经销商名称",placeholder:"请输入经销商名称"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("div",{attrs:{slot:"button"},slot:"button"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$handleQuery()}}},[t._v("查询")]),t._v(" "),a("gtmc-button-export",{attrs:{name:"导出数据",auths:t.$auths("exportfirstusedlist")},on:{click:function(e){return t.handleExport()}}})],1)],1),t._v(" "),a("el-alert",{attrs:{type:"warning",closable:!1}},[t._v("温馨提示：当销售店在工单上整单订使用或个别使用商城订单中部分零部件时，平台同时会将该订单整单对应的实付金额结算至经销商的虚拟收款账户。")]),t._v(" "),a("gtmc-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("gtmc-table-column-id",{attrs:{prop:"orderId",label:"订单编号"}}),t._v(" "),a("gtmc-table-column-text",{attrs:{label:"订单类型",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.$enum(t.TYPES,e.row.orderType).label)+"\n      ")]}}])}),t._v(" "),a("gtmc-table-column-text-list",{attrs:{props:["storeName","storeCode"],align:"center",label:"经销商",width:"180"}}),t._v(" "),a("gtmc-table-column-id",{attrs:{prop:"jobOrderNo",label:"首个完成工单",sortable:""}}),t._v(" "),a("gtmc-table-column-date-time",{attrs:{prop:"jobCompleteTime",label:"完成时间"}}),t._v(" "),a("gtmc-table-column-id",{attrs:{label:"OMS订单编号",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.ordPaymentBo?a("div",[t._v("\n          "+t._s(e.row.ordPaymentBo.omsOrderNo)+"\n        ")]):t._e()]}}])}),t._v(" "),a("gtmc-table-column-id",{attrs:{label:"OMS第三方流水号",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.ordPaymentBo?a("div",[t._v("\n          "+t._s(e.row.ordPaymentBo.omsThirdPartySerialNo)+"\n        ")]):t._e()]}}])}),t._v(" "),a("gtmc-table-column-amount",{attrs:{prop:"orderAmount",label:"订单总金额",width:"90",align:"center"}}),t._v(" "),a("gtmc-table-column-amount",{attrs:{prop:"discountAmount",label:"订单优惠金额",width:"90",align:"center"}}),t._v(" "),a("gtmc-table-column-amount",{attrs:{prop:"actualAmount",label:"订单实付金额",tips:"订单实付金额 = 订单总金额 - 订单优惠金额",width:"120",align:"center"}}),t._v(" "),a("gtmc-table-column-action",{key:t.$columnKey(),attrs:{width:"80",auths:t.$auths("ViewFirstUsedDetail")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("gtmc-link",{attrs:{name:t.$enum(t.TYPES,e.row.orderType).name,text:"查看详情",query:{orderId:e.row.orderId}}})]}}])})],1),t._v(" "),a("gtmc-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var n=a("VU/8")(l,r,!1,function(t){a("oKzM")},null,null);e.default=n.exports},oKzM:function(t,e){},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});