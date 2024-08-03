webpackJsonp([102],{LycT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={mixins:[a("oW5U").a],data:function(){return{auth:{action:this.$auths("modify","delete")},table:{loading:!1,query:{},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()},STATUS:{1:{label:"已关机",code:"unuse",type:"warning",step:1},2:{label:"已启动",code:"unuse",type:"success",step:1},3:{label:"生产中",code:"serving",type:"success",step:2},4:{label:"发生故障",code:"finish",type:"error",step:3},5:{label:"已删除",code:"cancel",type:"info",step:1}}}},components:{},mounted:function(){this.loadTable()},methods:{handleQuery:function(){this.loadTable()},loadTable:function(){var t=this,e=this.getQueryParam();console.log(e),this.table.loading=!0,this.$api.ItemController.page(e,function(e){t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1})},getQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),t}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maintain-item-list"},[a("gtmc-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("gtmc-field-input",{attrs:{entity:t.table.query,name:"name",label:"机台名称",placeholder:"请输入机台名称"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("gtmc-button-panel",{attrs:{auths:t.auth.create}},[a("gtmc-button-add",{attrs:{name:"新增机台"},on:{click:function(e){return t.link("basic-maintain-item-create")}}})],1),t._v(" "),a("gtmc-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("gtmc-table-column-id",{attrs:{prop:"orderNo",label:"机台编号",width:"180",sortable:""}}),t._v(" "),a("gtmc-table-column-tag",{attrs:{prop:"status",label:"机台状态",tags:t.STATUS}}),t._v(" "),a("gtmc-table-column-text",{attrs:{prop:"name",label:"机台名称",sortable:""}}),t._v(" "),a("gtmc-table-column-text",{attrs:{prop:"itemName",label:"所属车间"}}),t._v(" "),a("gtmc-table-column-text",{attrs:{prop:"partsTypeName",label:"设备组"}}),t._v(" "),a("gtmc-table-column-text",{attrs:{prop:"eventType",label:"机型",width:"80"}}),t._v(" "),a("gtmc-table-column-text",{attrs:{prop:"vehName",label:"品牌",width:"120"}}),t._v(" "),a("gtmc-table-column-text",{attrs:{prop:"code",label:"采集编号",width:"120"}}),t._v(" "),a("gtmc-table-column-action",{key:t.$columnKey(),attrs:{width:"100",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("gtmc-link",{attrs:{text:"编辑",name:"basic-maintain-item-detail",query:{itemId:e.row.itemId},auths:t.auth.modify}}),t._v(" "),a("gtmc-button-text-delete",{attrs:{controller:"ItemController",idKey:"itemId",idValue:e.row.itemId,success:t.$handleQuery,target:"机台",auths:t.auth.delete}})]}}])})],1),t._v(" "),a("gtmc-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(t){a("kyO8")},null,null);e.default=i.exports},kyO8:function(t,e){},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});