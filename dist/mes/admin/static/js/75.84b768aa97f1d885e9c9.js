webpackJsonp([75,245],{FTiI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{STATUS:{undefined:{label:"未知状态",code:"unkown",type:"info",step:1},null:{label:"未知状态",code:"unkown",type:"info",step:1},0:{label:"未知状态",code:"unkown",type:"info",step:1},201:{label:"待支付",code:"unpay",type:"error",step:0},202:{label:"待使用",code:"unuse",type:"warning",step:1},205:{label:"待使用",code:"unuse",type:"warning",step:1},204:{label:"服务中",code:"serving",type:"warning",step:2},206:{label:"已完成",code:"finish",type:"success",step:3},203:{label:"已取消",code:"cancel",type:"info",step:1},208:{label:"退款中",code:"refunding",type:"error",step:2},211:{label:"退款失败",code:"refund-fail",type:"error",step:3},209:{label:"已退款",code:"refund-success",type:"error",step:3}}}},methods:{}}},VNlR:function(e,t,a){"use strict";t.a={data:function(){return{rules:[{label:"5K",value:5,selected:!1},{label:"10K",value:10,selected:!1},{label:"15K",value:15,selected:!1},{label:"20K",value:20,selected:!1},{label:"25K",value:25,selected:!1},{label:"30K",value:30,selected:!1},{label:"35K",value:35,selected:!1},{label:"40K",value:40,selected:!1},{label:"45K",value:45,selected:!1},{label:"50K",value:50,selected:!1},{label:"60K",value:60,selected:!1},{label:"70K",value:70,selected:!1},{label:"80K",value:80,selected:!1},{label:"90K",value:90,selected:!1},{label:"100K",value:100,selected:!1},{label:"100K+",value:101,selected:!1}]}},methods:{}}},"WPF/":function(e,t){},oW5U:function(e,t,a){"use strict";t.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},u51C:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Gu7T"),n=a.n(l),r=a("FTiI"),i=a("oW5U"),s=a("VNlR"),u={mixins:[r.default,i.a,s.a],props:{active:{type:[String],default:""},name:{type:[String],default:""}},data:function(){return{table:{loading:!1,query:{},sort:{descs:["placedTime"]},page:this.$gtmc.initPage()},options:{values:[]}}},components:{},watch:{active:{handler:function(e,t){e&&e==this.name&&this.loadTable()}}},created:function(){this.active==this.name&&this.loadTable(),this.options.values=[{label:"全部",value:null}].concat(n()(this.rules.map(function(e){var t={label:1e3*e.value,value:1e3*e.value+""};return 101==e.value&&(t.label="100000+"),t})))},methods:{getStatusValue:function(e){switch(e){case"all":return null;case"unpay":return["unpaid"];case"unuse":return["paid","pending"];case"serving":return["using"];case"finish":return["finished"];case"cancel":return["canceled"];case"refunding":return["refunding"];case"refund-fail":return["refundFailure"];case"refund-success":return["refunded"]}},getTableSorts:function(){return{orderId:"orderId",createTime:"placedTime"}},handleQueryParam:function(){var e=this.$gtmc.assemblePage(this.table),t=this.table.query;return this.$gtmc.appendFilterStatus(e.body.filters,"status",this.getStatusValue(this.name)),this.$gtmc.appendFilter(e.body.filters,"orderId","like",t.orderId),this.$gtmc.appendFilter(e.body.filters,"merchant.name","like",t["merchant.name"]),t.maintainMileage&&Number(t.maintainMileage)>1e5?this.$gtmc.appendFilter(e.body.filters,"maintainMileage","gt","100000"):this.$gtmc.appendFilter(e.body.filters,"maintainMileage","eq",t.maintainMileage),this.$gtmc.appendFilter(e.body.filters,"user.phone","like",t["user.phone"]),this.$gtmc.appendFilterDataTime(e.body.filters,"placedTime",t.placedTime),e},loadTable:function(){var e=this,t=this.handleQueryParam();console.log(t),this.table.loading=!0,this.$api.OrderController.pageMaintainOrder(t,function(t){e.$gtmc.assembleBody(e.table.page,t.body),e.table.loading=!1})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trade-order-maintain-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:function(t){return e.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:e.table.query,name:"orderId",label:"订单编号",placeholder:"输入保养服务订单编号"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"merchant.name",label:"经销商名称",placeholder:"输入经销商名称"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"user.phone",label:"用户手机号",placeholder:"输入用户手机号"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),a("br"),e._v(" "),a("xv-field-select",{attrs:{entity:e.table.query,name:"maintainMileage",label:"保养里程数（公里）",placeholder:"请选择保养里程数",options:e.options}}),e._v(" "),a("xv-field-datetime",{attrs:{entity:e.table.query,name:"placedTime",label:"下单时间"}})],1),e._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],attrs:{table:e.table,sorts:e.getTableSorts()},on:{"sort-change":function(t){return e.$handleQuery()}}},[a("xv-table-column-id",{attrs:{prop:"orderId",label:"订单编号"}}),e._v(" "),a("xv-table-column-text",{attrs:{label:"保养里程数（公里）"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.ordMatPkgVo?t.row.ordMatPkgVo.maintainName:"")+"\n      ")]}}])}),e._v(" "),a("xv-table-column-text-list",{attrs:{props:["buyerName","buyerMobile"],align:"center",label:"用户信息"}}),e._v(" "),a("xv-table-column-text-list",{attrs:{props:["buyerVehName","buyerLicensePlateNum"],align:"center",label:"车辆信息"}}),e._v(" "),a("xv-table-column-text-list",{attrs:{props:["storeName","storeCode"],align:"center",label:"经销商"}}),e._v(" "),a("xv-table-column-tag",{attrs:{prop:"status",label:"订单状态",tags:e.STATUS}}),e._v(" "),a("xv-table-column-date-time",{attrs:{prop:"createTime",label:"下单时间"}}),e._v(" "),a("xv-table-column-action",{attrs:{width:"80",auths:e.$auths("viewmaintaindetail")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("xv-link",{attrs:{text:"查看详情",name:"trade-order-maintain-detail",query:{orderId:t.row.orderId},auths:e.$auths("viewmaintaindetail")}})]}}])})],1),e._v(" "),a("xv-list-page",{attrs:{table:e.table},on:{change:function(t){return e.$handleQuery()}}})],1)},staticRenderFns:[]};var d=a("VU/8")(u,o,!1,function(e){a("WPF/")},null,null);t.default=d.exports}});