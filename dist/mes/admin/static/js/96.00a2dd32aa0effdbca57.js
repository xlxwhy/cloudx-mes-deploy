webpackJsonp([96],{"9jQY":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("rddR");var l={mixins:[a("oW5U").a],data:function(){return{table:{loading:!1,query:{multipleInput:{name:"username",values:{}}},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()},tags:{0:{text:"未知状态",type:"info"},true:{text:"已启用",type:"success"},false:{text:"已禁用",type:"info"}}}},components:{},mounted:function(){this.loadTable()},methods:{handleClean:function(){this.table.query.multipleInput.name="username"},loadTypes:function(){var e=this;this.$api.PartsTypeController.list({},function(t){t.body&&(e.typeOptions.values=t.body)})},loadTable:function(){var e=this,t=this.handleQueryParam();console.log(t),this.table.loading=!0,this.$api.UserController.page(t,function(t){e.table.loading=!1,e.$gtmc.assembleBody(e.table.page,t.body)})},handleQueryParam:function(){var e=this.$gtmc.assemblePage(this.table),t=this.table.query;return this.$gtmc.appendFilter(e.body.filters,"status","eq",t.status),this.$gtmc.appendFilterDataTime(e.body.filters,"createTime",t.createTime),this.$gtmc.appendFilterMultipleInput(e.body.filters,t.multipleInput),e}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"system-user-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:function(t){return e.$handleQuery()},clean:e.handleClean}},[a("xv-field-multiple-input",{attrs:{entity:e.table.query.multipleInput,label:"选择查询类型",placeholder:"输入搜索关键字",options:{values:[{label:"登录名",value:"username"},{label:"用户姓名",value:"name"},{label:"手机号",value:"phoneNumber"}]}},on:{done:function(t){return e.$handleInputQuery()}}}),e._v(" "),a("xv-field-select",{attrs:{entity:e.table.query,name:"status",label:" 用户状态",placeholder:"全部",options:{values:[{label:"全部",value:null},{label:"已启用",value:!0},{label:"已禁用",value:!1}]}}}),e._v(" "),a("xv-field-datetime",{attrs:{entity:e.table.query,name:"createTime",label:"创建时间"}})],1),e._v(" "),a("xv-button-panel",{attrs:{auths:e.auth.create}},[a("xv-button-add",{attrs:{name:"新增用户"},on:{click:function(t){return e.link("system-user-create")}}})],1),e._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],attrs:{table:e.table},on:{"sort-change":function(t){return e.$handleQuery()}}},[a("xv-table-column-text",{attrs:{prop:"username",label:"登录名",width:"200",sortable:""}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"name",label:"用户姓名",width:"100",sortable:"",align:"center"}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"phoneNumber",label:"手机号",width:"120",align:"center"}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"positionName",label:"用户职位"}}),e._v(" "),a("xv-table-column-tag",{attrs:{prop:"status",tags:e.tags,label:"用户状态",width:"100"}}),e._v(" "),a("xv-table-column-date-time",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),a("xv-table-column-date-time",{attrs:{prop:"updateTime",label:"更新时间"}}),e._v(" "),a("xv-table-column-action",{key:e.$columnKey(),attrs:{width:"80",auths:e.auth.modify},scopedSlots:e._u([{key:"default",fn:function(e){return[a("xv-link",{attrs:{text:"编辑",name:"system-user-detail",query:{userId:e.row.userId}}})]}}])})],1),e._v(" "),a("xv-list-page",{attrs:{table:e.table},on:{change:function(t){return e.$handleQuery()}}})],1)},staticRenderFns:[]};var s=a("VU/8")(l,n,!1,function(e){a("lHqk")},null,null);t.default=s.exports},lHqk:function(e,t){},oW5U:function(e,t,a){"use strict";t.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});