webpackJsonp([111],{JxI1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={mixins:[a("oW5U").a],data:function(){return{table:{loading:!1,query:{},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()}}},components:{},created:function(){this.loadTable()},methods:{loadTable:function(){var e=this,t=this.handleQueryParam();this.table.loading=!0,this.$api.VehicleController.page(t,function(t){e.$gtmc.assembleBody(e.table.page,t.body),e.table.loading=!1})},handleQueryParam:function(){var e=this.$gtmc.assemblePage(this.table),t=this.table.query;return this.$gtmc.appendFilter(e.body.filters,"vehName","like",t.vehName),this.$gtmc.appendFilter(e.body.filters,"vehNameCode","like",t.vehNameCode),this.$gtmc.appendFilter(e.body.filters,"modelCode","like",t.modelCode),console.log(e),e}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basic-model-list"},[a("gtmc-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:function(t){return e.$handleQuery()}}},[a("gtmc-field-input",{attrs:{entity:e.table.query,name:"vehName",label:"车名",placeholder:"请输入车名"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),a("gtmc-field-input",{attrs:{entity:e.table.query,name:"vehNameCode",label:"车名代码",placeholder:"请输入车名代码"},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),a("gtmc-field-input",{attrs:{entity:e.table.query,name:"modelCode",label:"车型Model",placeholder:"请输入车型Model"},on:{done:function(t){return e.$handleInputQuery()}}})],1),e._v(" "),a("gtmc-list-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],attrs:{table:e.table},on:{"sort-change":function(t){return e.$handleQuery()}}},[a("gtmc-table-column-text",{attrs:{prop:"vehName",label:"车名",sortable:""}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"vehNameCode",label:"车名代码",align:"center",sortable:""}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"modelCode",label:"车型Model",align:"center",sortable:""}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"sfx",label:"SFX",align:"center",width:"100"}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"color",label:"颜色代码",align:"center",width:"100"}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"colorName",label:"颜色",align:"center",width:"100"}}),e._v(" "),a("gtmc-table-column-date-time",{attrs:{prop:"updateTime",label:"更新时间"}})],1),e._v(" "),a("gtmc-list-page",{attrs:{table:e.table},on:{change:function(t){return e.$handleQuery()}}})],1)},staticRenderFns:[]};var r=a("VU/8")(l,n,!1,function(e){a("horP")},null,null);t.default=r.exports},horP:function(e,t){},oW5U:function(e,t,a){"use strict";t.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});