webpackJsonp([72,157],{HBcE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={props:{popup:{type:Object,default:function(){return{dialog:{visible:!1,loading:!1},data:[],selected:{}}}},selected:{type:Array,default:function(){return[]}}},data:function(){return{template:{description:""},templateIndex:0,form:{useTempalte:1,description:""}}},watch:{selected:{handler:function(t,e){}}},created:function(){this.loadVehicle()},methods:{handleClick:function(t,e){this.template=t,this.templateIndex=e},handleClass:function(t,e){return this.templateIndex==e?"selected":""},handleConfirm:function(){2==this.form.useTempalte?(this.popup.selected={},this.$emit("confirm",{})):(this.popup.selected=this.template,this.$emit("confirm",this.template)),this.popup.dialog.visible=!1},loadVehicle:function(){var t=this,e={body:{size:1e3,current:1,filters:[]}};this.$gtmc.appendFilter(e.body.filters,"manualType","eq","1"),this.popup.dialog.loading=!0,this.$api.MaintainManualController.page(e,function(e){t.popup.dialog.loading=!1,t.popup.data=e.body.records,t.initSelected()})},initSelected:function(){if(this.popup.data&&this.popup.selected){var t=this.$findByKey(this.popup.data,"manualId",this.popup.selected.manualId);t&&(this.templateIndex=this.popup.data.indexOf(this.template),this.template=t)}this.template&&this.template.manualId||(this.template=this.popup.data[0],this.templateIndex=0)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maitain-manual-template-dialog"},[a("xv-detail-dialog",{attrs:{dialog:t.popup.dialog},on:{confirm:t.handleConfirm}},[a("div",{staticClass:"basic-maitain-manual-template-dialog__content"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"是否使用模板"}},[a("el-radio-group",{model:{value:t.form.useTempalte,callback:function(e){t.$set(t.form,"useTempalte",e)},expression:"form.useTempalte"}},[a("el-radio",{attrs:{label:1}},[t._v("使用模板")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("不使用模板，全新创建")])],1)],1),t._v(" "),1==t.form.useTempalte?a("el-form-item",{attrs:{label:"选择模板"}},[a("div",{staticClass:"template-list-table"},t._l(t.popup.data,function(e,l){return a("div",{key:l,class:t.handleClass(e,l),on:{click:function(a){return t.handleClick(e,l)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])}),0)]):t._e(),t._v(" "),1==t.form.useTempalte?a("el-form-item",{attrs:{label:"模板说明"}},[a("el-input",{attrs:{type:"textarea",disabled:"",rows:"3"},model:{value:t.template.description,callback:function(e){t.$set(t.template,"description",e)},expression:"template.description"}})],1):t._e()],1),t._v(" "),1==t.form.useTempalte?a("div",{staticClass:"no-template-message"},[t._v("\n        没有合适的保养手册模板？立即前去\n        "),a("xv-link",{attrs:{text:"添加保养手册模板",name:"basic-maintain-manual-template-list"}})],1):t._e()],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(l,n,!1,function(t){a("t1fp")},null,null);e.default=i.exports},OQAm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Gu7T"),n=a.n(l),i=a("HBcE"),o={mixins:[a("oW5U").a],data:function(){return{auth:{action:this.$auths("publishMaintain","modify","delete"),publishMaintain:this.$auths("publishMaintain")},table:{loading:!1,query:{partsCode:"",itemId:null,manualInputs:{name:"name",values:{}},vehicleInputs:{name:"vehName",values:{}}},sort:{descs:["updateTime"]},page:this.$gtmc.initPage()},template:{dialog:{visible:!1,title:"创建保养手册",width:"700px"},selected:{},data:[]},itemOptions:{adapter:function(t){return{label:t.name,value:t.itemId}},values:[]}}},components:{ManualTemplateDialog:i.default},mounted:function(){var t=this.$route.query.partsCode;t&&(this.table.query.partsCode=t),this.loadTable()},methods:{showTemplateDialog:function(){this.template.dialog.visible=!0},handleConfirmTemplate:function(t){this.link("basic-maintain-manual-create",{cloneId:t.manualId})},loadTable:function(){var t=this,e=this.handleQueryParam();console.log(e),this.table.loading=!0,this.$api.MaintainManualController.page(e,function(e){t.$gtmc.assembleBody(t.table.page,e.body),t.table.loading=!1})},handleQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"manualType","eq","2"),this.$gtmc.appendFilter(t.body.filters,"name","like",e.name),this.$gtmc.appendFilter(t.body.filters,"modelCode","like",e.modelCode),this.$gtmc.appendFilter(t.body.filters,"partsCode","eq",e.partsCode),this.$gtmc.appendFilterMultipleInput(t.body.filters,e.manualInputs),this.$gtmc.appendFilterDataTime(t.body.filters,"updateTime",e.updateTime),t},loadItems:function(){var t=this;this.$api.ItemController.list({},function(e){e.body&&(t.itemOptions.values=[{name:"全部",itemId:null}].concat(n()(e.body)))})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maintain-manual-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-multiple-input",{staticClass:"manual-inputs",attrs:{entity:t.table.query.manualInputs,label:"选择查询类型",placeholder:"输入搜索关键字",options:{values:[{label:"保养手册名称",value:"name"},{label:"保养手册ID",value:"manualId"}]}},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-datetime",{attrs:{entity:t.table.query,name:"updateTime",label:"更新时间"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-input",{attrs:{entity:t.table.query,name:"modelCode",label:"适用车型Model",placeholder:"请输入车型Model"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-input",{attrs:{entity:t.table.query,name:"partsCode",label:"关联的零配件编号",placeholder:"请输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.create}},[a("xv-button-add",{attrs:{name:"新增保养手册"},on:{click:function(e){return t.showTemplateDialog()}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-id",{attrs:{prop:"manualId",label:"保养手册ID"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"name",label:"保养手册名称",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"vehName",label:"车名"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"vehNameCode",label:"车名代码"}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"modelCode",label:"车型Model"}}),t._v(" "),a("xv-table-column-description",{attrs:{prop:"description",label:"保养手册说明"}}),t._v(" "),a("xv-table-column-date-time",{attrs:{prop:"updateTime",label:"更新时间",sortable:""}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"220",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("xv-link",{attrs:{text:"发布保养服务",name:"goods-maintain-addmanual",query:{manualId:e.row.manualId},auths:t.auth.publishMaintain}}),t._v(" "),a("xv-link",{attrs:{text:"编辑",name:"basic-maintain-manual-detail",query:{manualId:e.row.manualId},auths:t.auth.modify}}),t._v(" "),a("xv-button-text-delete",{attrs:{controller:"MaintainManualController",idKey:"manualId",idValue:e.row.manualId,success:t.$handleQuery,target:"保养手册",auths:t.auth.delete}}),t._v(" "),a("xv-link",{attrs:{text:"克隆",name:"basic-maintain-manual-detail",query:{cloneId:e.row.manualId},auths:t.auth.create}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}}),t._v(" "),a("manual-template-dialog",{attrs:{popup:t.template},on:{confirm:t.handleConfirmTemplate}})],1)},staticRenderFns:[]};var u=a("VU/8")(o,s,!1,function(t){a("pU99")},null,null);e.default=u.exports},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},pU99:function(t,e){},t1fp:function(t,e){}});