webpackJsonp([72,95],{"7PgA":function(e,t){},"7RrN":function(e,t){},"INL+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Gu7T"),o=a.n(n),l={mixins:[a("oW5U").a],props:{selectedValues:{type:Array,default:function(){return[]}}},data:function(){return{auth:{action:this.$auths("modify","delete")},options:{showQuery:!0,showCreate:!0,showTable:!0,showPagination:!0,showCheckbox:!1},table:{loading:!1,query:{},sort:{descs:["update_time"]},sorts:{updateTime:"update_time",createTime:"create_time"},page:this.$gtmc.initPage()},types:{1:{label:"布料工厂",code:"1",type:"warning",step:1},2:{label:"纺织类型",code:"2",type:"success",step:1},3:{label:"其他类型",code:"3",type:"info",step:2}},defaultSelectedValues:this.selectedValues}},components:{},watch:{selectedValues:{handler:function(e,t){this.defaultSelectedValues=[].concat(o()(e)),this.setDefalutRow()},deep:!0}},mounted:function(){this.loadTable()},methods:{handleQuery:function(){this.loadTable()},loadTable:function(){var e=this,t=this.getQueryParam();console.log(t),this.table.loading=!0,this.$apis.FactoryController.findByPage(t,function(t){console.log("list.vue:",t),e.$gtmc.assembleBody(e.table.page,t.body),e.table.loading=!1,setTimeout(function(){e.setDefalutRow()},100)})},getQueryParam:function(){var e=this.$gtmc.assemblePage(this.table),t=this.table.query;return this.$gtmc.appendFilter(e.body.filters,"name","like",t.name),e},resetSelectedRows:function(e,t,a){if(!a.length)return!1;t.forEach(function(n,o){a.indexOf(n.id)>=0&&e.toggleRowSelection(t[o],!0)})},handleSelectionChange:function(e){this.$emit("selection-change",e),console.log(e)},clearSelection:function(){this.$refs.table.$refs.table.clearSelection()},setDefalutRow:function(){var e=this,t=this.defaultSelectedValues,a=this.table.page.records;if(!t.length)return!1;a.forEach(function(n,o){t.indexOf(n.goodsId)>=0&&e.$refs.table.$refs.table.toggleRowSelection(a[o],!0)})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"factory-list"},[e.options.showQuery?a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:e.table},on:{query:function(t){return e.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:e.table.query,name:"name",label:"工厂名称",placeholder:"请输入工厂名称"},on:{done:function(t){return e.$handleInputQuery()}}})],1):e._e(),e._v(" "),e.options.showCreate?a("xv-button-panel",{attrs:{auths:e.auth.create}},[a("xv-button-add",{attrs:{name:"新增工厂"},on:{click:function(t){return e.link("factory-create")}}})],1):e._e(),e._v(" "),e.options.showTable?a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],ref:"table",attrs:{table:e.table},on:{"sort-change":function(t){return e.$handleQuery()},"selection-change":e.handleSelectionChange}},[e.options.showCheckbox?a("xv-table-column-check"):e._e(),e._v(" "),a("xv-table-column-id",{attrs:{prop:"code",label:"工厂编码",sortable:""}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"name",label:"系统厂名",width:"180",sortable:""}}),e._v(" "),a("xv-table-column-tag",{attrs:{prop:"type",label:"工厂类型",width:"120",tags:e.types,sortable:""}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"contactName",label:"联系人",width:"80"}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"contactPhone",label:"联系电话",width:"120"}}),e._v(" "),a("xv-table-column-text",{attrs:{prop:"address",label:"地址",width:"210",sortable:""}}),e._v(" "),a("xv-table-column-description",{attrs:{prop:"description",label:"备注"}}),e._v(" "),a("xv-table-column-date-time",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),a("xv-table-column-action",{key:e.$columnKey(),attrs:{width:"100",auths:e.auth.action},scopedSlots:e._u([{key:"default",fn:function(t){return[a("xv-link",{attrs:{text:"编辑",name:"factory-detail",query:{id:t.row.id},auths:e.auth.modify}}),e._v(" "),a("xv-button-text-delete",{attrs:{controller:"FactoryController",idKey:"id",idValue:t.row.id,success:e.$handleQuery,target:"工厂",auths:e.auth.delete}})]}}],null,!1,2629040689)})],1):e._e(),e._v(" "),e.options.showPagination?a("xv-list-page",{attrs:{table:e.table},on:{change:function(t){return e.$handleQuery()}}}):e._e()],1)},staticRenderFns:[]};var i=a("VU/8")(l,s,!1,function(e){a("7RrN")},null,null);t.default=i.exports},"jyO/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={components:{List:a("INL+").default},props:{visible:{type:Boolean,default:!1}},data:function(){return{selectedValues:[]}},created:function(){},methods:{confirm:function(){if(!selectedValues||0==selectedValues.length)return this.$message.warning("请选择选择零配件");this.close(),this.$emit("change",checkedList)},close:function(){this.$emit("update:visible",!1)},handleSelectionChange:function(e){selectedValues=e}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"950px",top:"20px","show-close":!1,"append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.visible=t}}},[a("div",{staticClass:"factory-select"},[a("List",{on:{"selection-change":e.handleSelectionChange}})],1),e._v(" "),a("div",{staticClass:"dialog-footer flex justify-content-center",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)])},staticRenderFns:[]};var l=a("VU/8")(n,o,!1,function(e){a("7PgA")},"data-v-1abb1ab4",null);t.default=l.exports},oW5U:function(e,t,a){"use strict";t.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}}});