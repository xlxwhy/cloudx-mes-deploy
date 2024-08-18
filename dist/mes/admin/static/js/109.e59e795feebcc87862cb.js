webpackJsonp([109],{e9Dv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={mixins:[a("oW5U").a],data:function(){return{auth:{action:this.$auths("modify","delete")},table:{loading:!1,query:{},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()},SUBSIDY_TYPE:{1:{label:"正常补贴",type:"text"},2:{label:"特殊补贴",type:"text"}}}},components:{},mounted:function(){this.loadTable()},methods:{handleQuery:function(){this.loadTable()},loadTable:function(){var t=this,e=this.getQueryParam();console.log(e),this.table.loading=!0,this.$apis.FabricController.findByPage(e,function(e){t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1})},getQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),t}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maintain-item-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"name",label:"布种名称",placeholder:"请输入布种名称"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.create}},[a("xv-button-add",{attrs:{name:"新增布种"},on:{click:function(e){return t.link("fabric-create")}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-text",{attrs:{prop:"code",label:"布种编号",width:"120",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"name",label:"布种名称",width:"150",sortable:""}}),t._v(" "),a("xv-table-column-amount",{attrs:{prop:"fabricPrice",label:"织布单价",width:"120",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"circles",label:"织布圈数",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"weight",label:"织布重量",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"stitches",label:"总针数",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"speed",label:"机速",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"piecePrice",label:"计件单价",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"overfulfil",label:"超产定额",width:"100"}}),t._v(" "),a("xv-table-column-amount",{attrs:{prop:"deviceAmount",label:"加机费",width:"100"}}),t._v(" "),a("xv-table-column-tag",{attrs:{prop:"subsidyType",label:"补贴方式",width:"100",tags:t.SUBSIDY_TYPE}}),t._v(" "),a("xv-table-column-amount",{attrs:{prop:"subsidyAmount",label:"补贴金额",width:"100"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"attachment",label:"附件",width:"100"}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"100",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("xv-link",{attrs:{text:"编辑",name:"fabric-detail",query:{id:e.row.id},auths:t.auth.modify}}),t._v(" "),a("xv-button-text-delete",{attrs:{controller:"FabricController",idKey:"id",idValue:e.row.id,success:t.$handleQuery,target:"布种",auths:t.auth.delete}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var i=a("VU/8")(l,n,!1,function(t){a("fvnR")},null,null);e.default=i.exports},fvnR:function(t,e){},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});