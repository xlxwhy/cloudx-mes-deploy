webpackJsonp([173],{rJwA:function(e,l){},s8p4:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("rddR"),r={data:function(){return{table:{query:{name:"",code:"",status:null,seriesCode:""},sort:{prop:"versionId",order:"descending"},page:{current:1,size:10,total:0}}}},components:{},mounted:function(){this.loadTable()},methods:{buildQueryFilters:function(){var e=[];return this.table.query.name&&e.push({property:"name",operator:"like",value:this.table.query.name}),this.table.query.code&&e.push({property:"code",operator:"like",value:this.table.query.code}),this.table.query.seriesCode&&e.push({property:"seriesCode",operator:"eq",value:this.table.query.seriesCode}),this.table.query.status&&e.push({property:"status",operator:"eq",value:this.table.query.status}),e},handleQuery:function(){var e=this.buildQueryFilters();this.loadTable(e)},handleQueryClean:function(){},handlePageChange:function(e,l){this.loadTable(null,e,l)},loadTable:function(e,l,t){var r=this,n={body:{current:t||this.table.page.current,size:l||this.table.page.size,filters:e}};a.default.page(n,function(e){r.$gtmc.assembleBody(r.table.page,e.body)})}}},n={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"track-client-list"},[t("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:e.handleQuery,clean:e.handleQueryClean}},[t("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"经销商",placeholder:"请输入搜索关键字"}}),e._v(" "),t("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"客户手机号",placeholder:"请输入客户手机号"}}),e._v(" "),t("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"车型版本",placeholder:"请输入车型版本"}}),e._v(" "),t("br"),e._v(" "),t("xv-field-select",{attrs:{entity:e.table.query,name:"status",label:"受理状态",options:{values:[{label:"全部",value:null},{label:"未发送",value:2},{label:"未分配",value:2},{label:"已分配",value:2},{label:"已跟进",value:2},{label:"放弃",value:2},{label:"完成",value:2},{label:"订车",value:2},{label:"销售",value:2},{label:"交车",value:2}]}}}),e._v(" "),t("xv-field-date",{attrs:{entity:e.table.query,name:"createTime",label:"留资时间",placeholder:"请选择留资时间"}})],1),e._v(" "),t("xv-list-table",{attrs:{table:e.table},on:{"sort-change":e.handleQuery}},[t("el-table-column",{attrs:{prop:"code",label:"经销商",sortable:""}}),e._v(" "),t("el-table-column",{attrs:{prop:"code",label:"留资类型",sortable:""}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"客户姓名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"code",label:"客户手机号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"车型版本",sortable:""}}),e._v(" "),t("el-table-column",{attrs:{prop:"code",label:"留资时间",sortable:""}}),e._v(" "),t("el-table-column",{attrs:{prop:"code",label:"受理状态",sortable:""}}),e._v(" "),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("router-link",{attrs:{to:{name:"track-client-detail",query:{versionId:l.row.versionId}}}},[e._v("查看详情")])]}}])})],1),e._v(" "),t("xv-list-page",{attrs:{table:e.table},on:{change:e.handleQuery}})],1)},staticRenderFns:[]};var o=t("VU/8")(r,n,!1,function(e){t("rJwA")},null,null);l.default=o.exports}});