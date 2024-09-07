webpackJsonp([107],{Cswa:function(t,e){},gmNs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={mixins:[a("oW5U").a],data:function(){return{auth:{action:this.$auths("modify","delete")},table:{loading:!1,query:{},sort:{descs:["update_time"]},page:this.$gtmc.initPage()},types:{1:{label:"布料工厂",code:"1",type:"warning",step:1},2:{label:"纺织类型",code:"2",type:"success",step:1},3:{label:"其他类型",code:"3",type:"info",step:2}}}},components:{},mounted:function(){this.loadTable()},methods:{handleQuery:function(){this.loadTable()},loadTable:function(){var t=this,e=this.getQueryParam();console.log(e),this.table.loading=!0,this.$apis.FactoryController.findByPage(e,function(e){console.log("list.vue:",e),t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1})},getQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),t}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"factory-table"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"name",label:"工厂名称",placeholder:"请输入工厂名称"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.create}},[a("xv-button-add",{attrs:{name:"新增工厂"},on:{click:function(e){return t.link("factory-create")}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-id",{attrs:{prop:"code",label:"工厂编码",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"name",label:"系统厂名",width:"180",sortable:""}}),t._v(" "),a("xv-table-column-tag",{attrs:{prop:"type",label:"工厂类型",width:"100",tags:t.types,sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"contactName",label:"联系人",width:"80"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"contactPhone",label:"联系电话",width:"120"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"address",label:"地址",width:"210",sortable:""}}),t._v(" "),a("xv-table-column-description",{attrs:{prop:"description",label:"备注"}}),t._v(" "),a("xv-table-column-date-time",{attrs:{prop:"createTime",label:"创建时间"}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"100",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("xv-link",{attrs:{text:"编辑",name:"factory-detail",query:{id:e.row.id},auths:t.auth.modify}}),t._v(" "),a("xv-button-text-delete",{attrs:{controller:"FactoryController",idKey:"id",idValue:e.row.id,success:t.$handleQuery,target:"工厂",auths:t.auth.delete}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var o=a("VU/8")(l,n,!1,function(t){a("Cswa")},null,null);e.default=o.exports},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});