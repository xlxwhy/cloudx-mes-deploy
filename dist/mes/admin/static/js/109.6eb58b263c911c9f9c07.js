webpackJsonp([109],{XAAF:function(t,e){},kfkC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={mixins:[a("oW5U").a],data:function(){return{auth:{action:this.$auths("modify","delete")},table:{loading:!1,query:{},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()},STATUS:{1:{label:"待生产",code:"unuse",type:"warning",step:1},2:{label:"生产中",code:"unuse",type:"warning",step:1},3:{label:"已完成",code:"serving",type:"success",step:2}}}},components:{},mounted:function(){this.loadTable()},methods:{handleQuery:function(){this.loadTable()},loadTable:function(){var t=this,e=this.getQueryParam();console.log(e),this.table.loading=!0,this.$api.ItemController.page(e,function(e){t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1})},getQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),t}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maintain-item-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"name",label:"排产记录名称",placeholder:"请输入排产记录名称"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-id",{attrs:{prop:"number3",label:"序号",width:"80",sortable:""}}),t._v(" "),a("xv-table-column-date-time",{attrs:{prop:"createTime",label:"操作时间"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"fullName",label:"操作人",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"number6",label:"排产机台",width:"100",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"name4",label:"排产顺序",width:"100",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"number",label:"生产单号",width:"100",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"orderNo",label:"合同号",width:"180",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"number",label:"布种编号",width:"100",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"title",label:"布种名称"}}),t._v(" "),a("xv-table-column-amount",{attrs:{prop:"number3",label:"计件单价",width:"120"}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"100",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("xv-link",{attrs:{text:"编辑",name:"basic-maintain-item-detail",query:{itemId:e.row.itemId},auths:t.auth.modify}}),t._v(" "),a("xv-button-text-delete",{attrs:{controller:"ItemController",idKey:"itemId",idValue:e.row.itemId,success:t.$handleQuery,target:"排产记录",auths:t.auth.delete}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var r=a("VU/8")(l,n,!1,function(t){a("XAAF")},null,null);e.default=r.exports},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});