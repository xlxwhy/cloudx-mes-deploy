webpackJsonp([103],{VfGv:function(t,e){},VviF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={mixins:[a("oW5U").a],data:function(){return{auth:{action:this.$auths("modify","delete")},table:{loading:!1,query:{},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()}}},components:{},mounted:function(){this.loadTable()},methods:{handleQuery:function(){this.loadTable()},loadTable:function(){var t=this,e=this.getQueryParam();console.log(e),this.table.loading=!0,this.$api.ItemController.page(e,function(e){t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1})},getQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),t}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maintain-item-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"name",label:"客户名称",placeholder:"请输入客户名称"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.create}},[a("xv-button-add",{attrs:{name:"新增客户"},on:{click:function(e){return t.link("basic-maintain-item-create")}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-id",{attrs:{prop:"sort",label:"序号",width:"80",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"title",label:"客户全称",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"name4",label:"客户简称",width:"120",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"fullName",label:"联系人",width:"80",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"mobile",label:"联系电话",width:"180"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"name",label:"客户地址"}}),t._v(" "),a("xv-table-column-description",{attrs:{prop:"description",label:"备注"}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"100",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("xv-link",{attrs:{text:"编辑",name:"basic-maintain-item-detail",query:{itemId:e.row.itemId},auths:t.auth.modify}}),t._v(" "),a("xv-button-text-delete",{attrs:{controller:"ItemController",idKey:"itemId",idValue:e.row.itemId,success:t.$handleQuery,target:"客户",auths:t.auth.delete}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(t){a("VfGv")},null,null);e.default=i.exports},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});