webpackJsonp([154],{"009J":function(e,t){},n8Ub:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("rddR"),r={data:function(){return{table:{query:{name:"",code:"",status:null,seriesCode:""},sort:{prop:"versionId",order:"descending"},page:{current:1,size:10,total:0}}}},components:{},mounted:function(){this.loadTable()},methods:{buildQueryFilters:function(){var e=[];return this.table.query.name&&e.push({property:"name",operator:"like",value:this.table.query.name}),this.table.query.code&&e.push({property:"code",operator:"like",value:this.table.query.code}),this.table.query.seriesCode&&e.push({property:"seriesCode",operator:"eq",value:this.table.query.seriesCode}),this.table.query.status&&e.push({property:"status",operator:"eq",value:this.table.query.status}),e},handleQuery:function(){var e=this.buildQueryFilters();this.loadTable(e)},handleQueryClean:function(){},handlePageChange:function(e,t){this.loadTable(null,e,t)},loadTable:function(e,t,l){var r=this,s={body:{current:l||this.table.page.current,size:t||this.table.page.size,filters:e}};a.default.page(s,function(e){r.$gtmc.assembleBody(r.table.page,e.body)})}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"vehicle-list-table"},[l("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:e.handleQuery,clean:e.handleQueryClean}},[l("xv-field-input",{attrs:{entity:e.table.query,name:"name",label:"经销商"}}),e._v(" "),l("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"客户手机号"}}),e._v(" "),l("br"),e._v(" "),l("xv-field-select",{attrs:{entity:e.table.query,name:"seriesCode",label:"车型版本",placeholder:"请选择车型版本",options:{values:[{label:"雷凌",value:1},{label:"雷凌双擎",value:2}]}}}),e._v(" "),l("xv-field-select",{attrs:{entity:e.table.query,name:"status",label:"受理状态",placeholder:"请选择受理状态",options:{values:[{label:"已提交",value:1},{label:"已受理",value:2}]}}})],1),e._v(" "),l("xv-list-table",{attrs:{table:e.table},on:{"sort-change":e.handleQuery}},[l("el-table-column",{attrs:{prop:"code",label:"车名代码",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"seriesCode",label:"车型",width:"180"}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"车型版本代码",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"车型版本"}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"官方指导价"}}),e._v(" "),l("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("router-link",{attrs:{to:{name:"basic-vehicle-detail",query:{versionId:t.row.versionId}}}},[e._v("查看详情")])]}}])})],1),e._v(" "),l("xv-list-page",{attrs:{table:e.table},on:{change:e.handleQuery}})],1)},staticRenderFns:[]};var n=l("VU/8")(r,s,!1,function(e){l("009J")},null,null);t.default=n.exports}});