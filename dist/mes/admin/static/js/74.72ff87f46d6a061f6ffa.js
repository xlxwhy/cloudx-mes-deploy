webpackJsonp([74,248,249],{OOMH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Gu7T"),n=a.n(i),l=a("oW5U"),r=a("S8gK"),s=a("wRoC"),o={mixins:[l.a,r.default,s.default],data:function(){return{auth:{action:this.$auths("modify","delete","publishGoods","viewVehicleModel"),buttons:this.$auths("create","import","export"),publishGoods:this.$auths("publishGoods"),viewVehicleModel:this.$auths("viewVehicleModel")},table:{loading:!1,query:{multipleInput:{name:"partsName",values:{}},vehicleInputs:{name:"vehName",values:{}},intevalInputPrice:{}},sort:{descs:["update_time"]},page:this.$gtmc.initPage()},partsId:"",selectCartypeVisible:!1,vehicle:{dialog:{visible:!1,title:"零配件适用车型",width:"900"},selected:[],tree:[]},importParts:{visible:!1},typeOptions:{adapter:function(t){return{label:t.name,value:t.partsTypeId}},values:[]}}},components:{},mounted:function(){var t=this.$route.query.partsTypeId;t&&(this.table.query.partsTypeId=t),this.loadTable(),this.loadTypes()},methods:{showVehicle:function(t){this.selectCartypeVisible=!0,this.partsId=t},handleVehicle:function(t){var e=this;console.log(t),this.table.loading=!0;var a={path:{partsId:t.partsId}};this.$api.VehicleController.listVehModel(a,function(t){e.table.loading=!1,t.body&&(e.vehicle.selected=t.body,e.vehicle.readonly=!0,e.$nextTick(function(){e.vehicle.dialog.visible=!0}))}).catch(function(t){e.table.loading=!1})},loadTypes:function(){var t=this;this.$api.PartsTypeController.list({},function(e){e.body&&(t.typeOptions.values=[{name:"全部",partsTypeId:null}].concat(n()(e.body)))})},loadTable:function(){var t=this,e=this.handleQueryParam();this.table.loading=!0,this.$api.PartsController.page(e,function(e){t.table.loading=!1,t.$gtmc.assembleBody(t.table.page,e.body)})},handleClean:function(){this.table.query.multipleInput.name="partsName",this.table.query.vehicleInputs.name="vehName"},handleQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"partsTypeId","eq",e.partsTypeId),this.$gtmc.appendFilterDataTime(t.body.filters,"updateTime",e.updateTime),this.$gtmc.appendFilterMultipleInput(t.body.filters,e.multipleInput),this.$gtmc.appendFilterMultipleInput(t.body.filters,e.vehicleInputs),this.$gtmc.appendFilterIntevalInput(t.body.filters,"suggestPrice",e.intevalInputPrice),console.log(t),t},handleImportSuccess:function(){this.importParts.visible=!1},handleImportBefore:function(t,e){t&&(this.importParts.visible=!1)},handleImportPartsClose:function(){this.importParts.visible=!1},handleExport:function(){var t=this,e=this.handleQueryParam();e.body.current=null,e.body.size=null,this.$api.PartsController.export(e,function(e){t.$gtmc.export(e,"EXPORT-PARTS-LIST.xlsx")})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-parts-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()},clean:t.handleClean}},[a("xv-field-multiple-input",{attrs:{entity:t.table.query.multipleInput,label:"选择查询类型",placeholder:"输入搜索关键字",options:{values:[{label:"零配件名称",value:"partsName"},{label:"零配件编号",value:"partsCode"}]}},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-select",{attrs:{entity:t.table.query,name:"partsTypeId",label:"所属品类",placeholder:"请选择",options:t.typeOptions}}),t._v(" "),a("xv-interval-input",{attrs:{entity:t.table.query.intevalInputPrice,label:"SRP价格范围",placeholder:""},on:{done:function(e){return t.$handleInputQuery()}}}),a("br"),t._v(" "),a("xv-field-datetime",{attrs:{entity:t.table.query,name:"updateTime",label:"更新时间"}}),t._v(" "),a("xv-field-multiple-input",{staticClass:"vehicle-inputs",attrs:{entity:t.table.query.vehicleInputs,label:"选择查询类型",placeholder:"输入搜索关键字",options:{values:[{label:"适用车型",value:"vehName"},{label:"车名代码",value:"vehNameCode"},{label:"适用车型Model",value:"modelCode"}]}},on:{done:function(e){return t.$handleInputQuery()}}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.buttons}},[a("xv-button-add",{attrs:{name:"新增零配件",auths:t.auth.create},on:{click:function(e){return t.link("basic-parts-create")}}}),t._v(" "),a("xv-button-add",{attrs:{icon:"el-icon-upload2",name:"导入零配件"},on:{click:function(e){t.importParts.visible=!0}}}),t._v(" "),a("xv-button-export",{attrs:{name:"导出零配件",auths:t.auth.export},on:{click:function(e){return t.handleExport()}}}),t._v(" "),a("div",{staticClass:"template-link"},[a("a",{attrs:{href:"./static/PARTS-TEMPLATE.xlsx"}},[t._v("下载零配件导入模板")])])],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-text",{attrs:{prop:"partsName",label:"零配件名称",width:"200",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"partsCode",label:"零配件编号",width:"150",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"partsTypeName",label:"所属品类",width:"120",sortable:""}}),t._v(" "),a("xv-table-column-amount",{attrs:{prop:"suggestPrice",label:"SRP价格",width:"100",sortable:""}}),t._v(" "),a("xv-table-column-description",{attrs:{prop:"description",label:"零配件说明"}}),t._v(" "),a("xv-table-column-date-time",{attrs:{prop:"updateTime",label:"更新时间"}}),t._v(" "),a("xv-table-column-action",{attrs:{width:"220",auths:t.auth.action},scopedSlots:t._u([{key:"default",fn:function(e){return[a("xv-button-text",{attrs:{name:"适用车型"},on:{click:function(a){return t.showVehicle(e.row.partsId)}}}),t._v(" "),a("xv-button-text",{attrs:{name:"编辑",auths:t.auth.modify},on:{click:function(a){return t.$guideModifyCheck(e.row,t.modifyGuide)}}}),t._v(" "),a("xv-button-text",{attrs:{name:"删除",auths:t.auth.delete},on:{click:function(a){return t.$guideDeleteCheck(e.row,t.deleteGuide)}}}),t._v(" "),a("xv-link",{attrs:{text:"发布商品",name:"goods-parts-detail",query:{partsId:e.row.partsId},auths:t.auth.publishGoods}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}}),t._v(" "),a("xv-select-cartype",{attrs:{visible:t.selectCartypeVisible,id:t.partsId},on:{"update:visible":function(e){t.selectCartypeVisible=e}}}),t._v(" "),a("el-dialog",{attrs:{title:"导入零配件数据",visible:t.importParts.visible,width:"500px","before-close":t.handleImportPartsClose,center:"","append-to-body":""},on:{"update:visible":function(e){return t.$set(t.importParts,"visible",e)}}},[a("div",{staticClass:"import-dialog__content"},[t._t("default",[t._v("\n        请按照数据模板填写零配件数据，保证导入文件内容和格式正确。另外，导入零配件数据前，请先检查待导入的数据中，有没有与当前系统中的零配件编号重复。如果出现重复零配件编号，该条数据记录将不会更新。\n      ")])],2),t._v(" "),a("div",{staticClass:"import-dialog__footer",attrs:{slot:"footer"},slot:"footer"},[a("xv-button-import",{attrs:{name:"检查完毕，开始导入",icon:"",message:"文件上传成功！正在录入数据库，请稍候查询零配件数据！",action:t.$path("/api/v1.0/mall/admin/basic-data/parts/import-data")},on:{success:t.handleImportSuccess,before:t.handleImportBefore}}),t._v(" "),a("el-button",{on:{click:function(e){return t.handleImportPartsClose()}}},[t._v("暂不导入")])],1)]),t._v(" "),a("xv-dialog-guide-modify",{attrs:{guide:t.modifyGuide}}),t._v(" "),a("xv-dialog-guide-delete",{attrs:{guide:t.deleteGuide},on:{confirm:function(e){return t.$guideDelete(t.deleteGuide)}}})],1)},staticRenderFns:[]};var d=a("VU/8")(o,u,!1,function(t){a("zZw5")},null,null);e.default=d.exports},S8gK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{deleteGuide:{entity:{},delete:{visible:!1,method:this.$api.PartsController.delete,param:function(t){return{path:{partsId:t.partsId}}},target:"零配件",callback:{success:this.$handleQuery,error:function(){}}},check:{method:this.$api.PartsController.checkOperation,param:function(t){return{body:{operation:2,partsId:t.partsId}}},adapter:function(t,e){if(!t||!t.body)return null;if(e?t.body.ifAllowed:t.body.success)return null;var a=[];return t.body.hasRelatedGoods&&a.push("10001"),t.body.hasRelatedMatMans&&a.push("10002"),t.body.hasRelatedMatManTemplates&&a.push("10003"),a}},warn:{visible:!1,width:"850px",title:"无法删除零配件",tips:[{name:"零配件商品",title:"零配件商品解除关联的方法：",contents:["在已关联的零配件商品中重新选择另外的零配件；"],button:{type:"primary",text:"查看已关联的零配件商品",link:"goods-parts-list",param:function(t){return{partsCode:t.partsCode}}}},{name:"保养手册",title:"保养手册解除关联的方法：",contents:["方式一：在已关联的保养手册中重新选择另外的零配件；","方式二：删除已关联的保养手册。"],button:{type:"primary",text:"查看已关联的保养手册",link:"basic-maintain-manual-list",param:function(t){return{partsCode:t.partsCode}}}},{name:"保养手册模板",title:"保养手册模板解除关联的方法：",contents:["方式一：在已关联的保养手册模板中重新选择另外的零配件；","方式二：删除已关联的保养手册模板。"],button:{type:"primary",text:"查看已关联的保养手册模板",link:"basic-maintain-manual-template-list",param:function(t){return{partsCode:t.partsCode}}}}],map:{10001:[0],10002:[1],10003:[2]},codes:[]}}}},methods:{}}},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},wRoC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{modifyGuide:{modify:{target:"零配件",link:"basic-parts-detail",param:function(t){return{partsId:t.partsId}}},check:{method:this.$api.PartsController.checkOperation,param:function(t){return{body:{operation:1,partsId:t.partsId}}},adapter:function(t,e){if(!t||!t.body)return null;if(e?t.body.ifAllowed:t.body.success)return null;var a=[];return t.body.hasRelatedGoods&&a.push("10001"),t.body.hasRelatedMaintains&&a.push("10002"),a}},warn:{visible:!1,width:"730px",title:"无法编辑零配件",message:"",tips:[{name:"配件商品",title:"",contents:[],button:{type:"primary",text:"查看已关联的零配件商品",link:"goods-parts-list",param:function(t){return{partsCode:t.partsCode}}}},{name:"保养服务",title:"",contents:[],button:{type:"primary",text:"查看已关联的保养服务",link:"goods-maintain-list",param:function(t){return{partsCode:t.partsCode}}}}],map:{10001:[0],10002:[1],10003:[0,1]},codes:[]}}}},methods:{}}},zZw5:function(t,e){}});