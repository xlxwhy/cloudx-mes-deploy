webpackJsonp([88],{IpOi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("rddR"),r={mixins:[a("oW5U").a],data:function(){return{table:{query:{name:"",code:"",status:null,seriesCode:""},sort:{prop:"versionId",order:"descending"},page:{current:1,size:10,total:0}}}},components:{},mounted:function(){this.loadTable()},methods:{buildQueryFilters:function(){var e=[];return this.table.query.name&&e.push({property:"name",operator:"like",value:this.table.query.name}),this.table.query.code&&e.push({property:"code",operator:"like",value:this.table.query.code}),this.table.query.seriesCode&&e.push({property:"seriesCode",operator:"eq",value:this.table.query.seriesCode}),this.table.query.status&&e.push({property:"status",operator:"eq",value:this.table.query.status}),e},handleQuery:function(){var e=this.buildQueryFilters();this.loadTable(e)},handleQueryClean:function(){},handlePageChange:function(e,t){this.loadTable(null,e,t)},loadTable:function(e,t,a){var r=this,o={body:{current:a||this.table.page.current,size:t||this.table.page.size,filters:e}};l.default.page(o,function(e){r.$gtmc.assembleBody(r.table.page,e.body)})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trade-order-intention-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:e.handleQuery,clean:e.handleQueryClean}},[a("xv-field-input",{attrs:{entity:e.table.query,name:"name",label:"订单号",placeholder:"请输入订单号"}}),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"车型版本",placeholder:"请输入车型版本"}}),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"经销商",placeholder:"请输入经销商"}}),e._v(" "),a("br"),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"用户手机号",placeholder:"请输入用户手机号"}}),e._v(" "),a("xv-field-date",{attrs:{entity:e.table.query,name:"createTime",label:"下单时间",placeholder:"请选择下单时间"}})],1),e._v(" "),a("xv-list-table",{attrs:{table:e.table},on:{"sort-change":e.handleQuery}},[a("el-table-column",{attrs:{prop:"code",label:"订单号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"车型版本"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"颜色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"经销商代码",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"经销商名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"购车人姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"用户手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"总价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"意向金"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"订单状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"下单时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{name:"trade-order-intention-detail",query:{versionId:t.row.versionId}}}},[e._v("查看详情")])]}}])})],1),e._v(" "),a("xv-list-page",{attrs:{table:e.table},on:{change:e.handleQuery}})],1)},staticRenderFns:[]};var n=a("VU/8")(r,o,!1,function(e){a("zY0W")},null,null);t.default=n.exports},oW5U:function(e,t,a){"use strict";t.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},zY0W:function(e,t){}});