webpackJsonp([140],{"14sc":function(e,t){},"1C3e":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("rddR"),r={data:function(){return{table:{query:{name:"",code:"",status:null,seriesCode:""},sort:{prop:"versionId",order:"descending"},page:{current:1,size:10,total:0}}}},components:{},mounted:function(){this.loadTable()},methods:{buildQueryFilters:function(){var e=[];return this.table.query.name&&e.push({property:"name",operator:"like",value:this.table.query.name}),this.table.query.code&&e.push({property:"code",operator:"like",value:this.table.query.code}),this.table.query.seriesCode&&e.push({property:"seriesCode",operator:"eq",value:this.table.query.seriesCode}),this.table.query.status&&e.push({property:"status",operator:"eq",value:this.table.query.status}),e},handleQuery:function(){var e=this.buildQueryFilters();this.loadTable(e)},handleQueryClean:function(){},handlePageChange:function(e,t){this.loadTable(null,e,t)},loadTable:function(e,t,l){var r=this,s={body:{current:l||this.table.page.current,size:t||this.table.page.size,filters:e}};a.default.page(s,function(e){r.$gtmc.assembleBody(r.table.page,e.body)})}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"intention-order-list-table"},[l("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:e.handleQuery,clean:e.handleQueryClean}},[l("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"查询类型",placeholder:"请输入搜索关键字"}}),e._v(" "),l("xv-field-select",{attrs:{entity:e.table.query,name:"status",label:"用户状态",options:{values:[{label:"全部",value:null},{label:"已禁用",value:2},{label:"已启用",value:2}]}}}),e._v(" "),l("br"),e._v(" "),l("xv-field-date",{attrs:{entity:e.table.query,name:"createTime",label:"创建时间",placeholder:"请选择创建时间"}})],1),e._v(" "),l("xv-list-table",{attrs:{table:e.table},on:{"sort-change":e.handleQuery}},[l("el-table-column",{attrs:{prop:"code",label:"登录名",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"用户姓名",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"手机号",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"用户状态"}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"创建时间 ",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"更新时间 ",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("router-link",{attrs:{to:{name:"system-user-detail",query:{versionId:t.row.versionId}}}},[e._v("编辑")])]}}])})],1),e._v(" "),l("xv-list-page",{attrs:{table:e.table},on:{change:e.handleQuery}})],1)},staticRenderFns:[]};var n=l("VU/8")(r,s,!1,function(e){l("14sc")},null,null);t.default=n.exports}});