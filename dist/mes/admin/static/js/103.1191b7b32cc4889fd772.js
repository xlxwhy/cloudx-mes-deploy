webpackJsonp([103],{gDo7:function(t,e){},mcDI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={mixins:[a("oW5U").a],data:function(){return{table:{loading:!1,query:{status:null},sort:{descs:["createTime"]},page:this.$gtmc.initPage()},tags:{0:{text:"未知状态",type:"info"},true:{text:"已启用",type:"success"},false:{text:"已禁用",type:"info"}}}},components:{},mounted:function(){this.loadTable()},methods:{loadTable:function(){var t=this,e=this.handleQueryParam();console.log(e),this.table.loading=!0,this.$api.PositionController.page(e,function(e){t.table.loading=!1,t.$gtmc.assembleBody(t.table.page,e.body)})},handleQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),this.$gtmc.appendFilter(t.body.filters,"status","eq",e.status),this.$gtmc.appendFilterDataTime(t.body.filters,"createTime",e.createTime),t}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"system-position-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"name",label:"职位名称",placeholder:"输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-select",{attrs:{entity:t.table.query,name:"status",label:"职位状态",placeholder:"全部",options:{values:[{label:"全部",value:null},{label:"已启用",value:!0},{label:"已禁用",value:!1}]}}}),t._v(" "),a("xv-field-datetime",{attrs:{entity:t.table.query,name:"createTime",label:"创建时间"}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.create}},[a("xv-button-add",{attrs:{name:"新增职位"},on:{click:function(e){return t.link("system-position-create")}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-text",{attrs:{prop:"name",label:"职位名称",width:"200",sortable:""}}),t._v(" "),a("xv-table-column-description",{attrs:{prop:"description",label:"职位描述"}}),t._v(" "),a("xv-table-column-tag",{attrs:{prop:"status",tags:t.tags,label:"职位状态",width:"100"}}),t._v(" "),a("xv-table-column-date-time",{attrs:{prop:"createTime",label:"创建时间"}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"80",auths:t.auth.modify},scopedSlots:t._u([{key:"default",fn:function(t){return[a("xv-link",{attrs:{text:"编辑",name:"system-position-detail",query:{positionId:t.row.positionId}}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(t){a("gDo7")},null,null);e.default=i.exports},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});