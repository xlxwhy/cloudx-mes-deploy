webpackJsonp([32,45,200,235,236],{"+9yV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l);t.default={data:function(){return{}},methods:{assembleItems:function(){var e=this.itemRuleTable.page.records,t=[],a=1,l=!0,n=!1,s=void 0;try{for(var r,o=i()(e);!(l=(r=o.next()).done);l=!0){var d=r.value,u={itemId:d.itemId,manualItemParts:[],sort:a++};if(t.push(u),d.detailItem.manItemParts){var m=1,c=!0,h=!1,v=void 0;try{for(var f,b=i()(d.detailItem.manItemParts);!(c=(f=b.next()).done);c=!0){var p=f.value,y={partsId:p.partsId,sort:m++,useQuantity:p.useQuantity};u.manualItemParts.push(y)}}catch(e){h=!0,v=e}finally{try{!c&&b.return&&b.return()}finally{if(h)throw v}}}}}catch(e){n=!0,s=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw s}}return t},assembleRules:function(){var e=this.itemRuleTable.page.records,t=[],a=!0,l=!1,n=void 0;try{for(var s,r=i()(e);!(a=(s=r.next()).done);a=!0){var o=s.value,d={condMileages:[],itemId:o.itemId};for(var u in t.push(d),o.detailItem.ruleCheckbox)o.detailItem.ruleCheckbox[u]&&d.condMileages.push(u)}}catch(e){l=!0,n=e}finally{try{!a&&r.return&&r.return()}finally{if(l)throw n}}return t},assembleItemParts:function(e,t){var a=[],l=!0,n=!1,s=void 0;try{for(var r,o=i()(t);!(l=(r=o.next()).done);l=!0){var d=r.value,u={itemId:e.itemId,partsCode:d.partsCode,partsId:d.partsId,partsName:d.partsName,partsTypeName:d.partsTypeName,suggestPrice:d.suggestPrice,sort:"",useQuantity:""};a.push(u)}}catch(e){n=!0,s=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw s}}return a},assembleBody:function(){return{description:this.detail.description,manualId:this.detail.manualId,manualItemRules:this.assembleRules(),manualItems:this.assembleItems(),manualType:this.manualType?this.manualType:1,modelCode:this.detail.modelCode,vehName:this.detail.vehName,vehNameCode:this.detail.vehNameCode,name:this.detail.name}},assembleBodyAdd:function(){return this.assembleBody()},assembleBodyModify:function(){return this.assembleBody()}}}},"9ebJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l);t.default={data:function(){return{detail:{description:"",itemDetails:[],manualId:"",manualType:"",modelCode:"",name:"",ruleDetails:[],sort:"",status:"",vehName:"",vehNameCode:"",baseItems:[],formItemRules:[]}}},methods:{initItemRuleCheckbox:function(e,t){e.ruleCheckbox||this.$set(e,"ruleCheckbox",{});var a=!0,l=!1,n=void 0;try{for(var s,r=i()(this.rules);!(a=(s=r.next()).done);a=!0){var o=s.value;this.$set(e.ruleCheckbox,o.value,!1)}}catch(e){l=!0,n=e}finally{try{!a&&r.return&&r.return()}finally{if(l)throw n}}if(t&&t.condMileages){var d=!0,u=!1,m=void 0;try{for(var c,h=i()(t.condMileages);!(d=(c=h.next()).done);d=!0){var v=c.value;this.$set(e.ruleCheckbox,v,!0)}}catch(e){u=!0,m=e}finally{try{!d&&h.return&&h.return()}finally{if(u)throw m}}}},initRuleCheckbox:function(){var e=this.detail;this.detail.itemDetails||this.$set(this.detail,"itemDetails",[]);var t=!0,a=!1,l=void 0;try{for(var n,s=i()(e.itemDetails);!(t=(n=s.next()).done);t=!0){var r=n.value,o=this.$findByKey(this.detail.ruleDetails,"itemId",r.itemId);this.initItemRuleCheckbox(r,o)}}catch(e){a=!0,l=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw l}}},initItemSelected:function(e){var t=!0,a=!1,l=void 0;try{for(var n,s=i()(this.detail.itemDetails);!(t=(n=s.next()).done);t=!0){n.value.selected=!1}}catch(e){a=!0,l=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw l}}var r=!0,o=!1,d=void 0;try{for(var u,m=i()(e);!(r=(u=m.next()).done);r=!0){u.value.detailItem.selected=!0}}catch(e){o=!0,d=e}finally{try{!r&&m.return&&m.return()}finally{if(o)throw d}}},initItemRuleTable:function(){var e=this,t=[],a=function(a){e.$nextTick(function(){a.detailItem&&a.detailItem.selected?(e.$refs.itemTable.toggleRowSelection(a,!0),e.$refs.itemTable.toggleRowExpansion(a,!0),t.push(a)):(e.$refs.itemTable.toggleRowSelection(a,!1),e.$refs.itemTable.toggleRowExpansion(a,!1))})},l=!0,n=!1,s=void 0;try{for(var r,o=i()(this.detail.baseItems);!(l=(r=o.next()).done);l=!0){a(r.value)}}catch(e){n=!0,s=e}finally{try{!l&&o.return&&o.return()}finally{if(n)throw s}}this.itemRuleTable.page.records=t},initItemRelation:function(){var e=!0,t=!1,a=void 0;try{for(var l,n=i()(this.detail.baseItems);!(e=(l=n.next()).done);e=!0){var s=l.value,r=this.$findByKey(this.detail.itemDetails,"itemId",s.itemId);r||(r={itemId:s.itemId,selected:!1,useQuantity:"",manItemParts:[],ruleCheckbox:{}},this.detail.itemDetails.push(r)),s.detailItem=r,r.baseItem=s}}catch(e){t=!0,a=e}finally{try{!e&&n.return&&n.return()}finally{if(t)throw a}}}}}},HZQ6:function(e,t){},Kma9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={mixins:[],components:{TemplateDetail:a("dPe4").default},data:function(){return{loading:!1}},created:function(){},methods:{}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"basic-maintain-manual-detail"},[t("template-detail",{attrs:{manualType:"2"}})],1)},staticRenderFns:[]};var n=a("VU/8")(l,i,!1,function(e){a("HZQ6")},null,null);t.default=n.exports},"L5c/":function(e,t){},Tho2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={props:{vehicle:{type:Object,default:function(){return{dialog:{visible:!1,loading:!1},data:[],selected:{modelCodes:[]}}}},selected:{type:Array,default:function(){return[]}}},data:function(){return{series:{modelCodes:[]},seriesIndex:0,model:"",modelIndex:0}},watch:{selected:{handler:function(e,t){}}},created:function(){this.loadVehicle()},methods:{handleSeries:function(e,t){this.series=e,this.seriesIndex=t,this.modelIndex=0,this.model=this.series.modelCodes[0]},handleSeriesClass:function(e,t){return this.seriesIndex==t?"selected":""},handleModel:function(e,t){this.model=e,this.modelIndex=t},handleModelClass:function(e,t){return this.modelIndex==t?"selected":""},handleConfirm:function(){var e=this.series.vehName,t=this.series.vehNameCode,a=this.model;this.$emit("confirm",{vehName:e,vehNameCode:t,modelCode:a}),this.vehicle.dialog.visible=!1},loadVehicle:function(){var e=this;this.vehicle.dialog.loading=!0,this.$api.VehicleController.listSeriesModel({},function(t){e.vehicle.dialog.loading=!1,console.log(t.body),e.vehicle.data=t.body,e.initVehicle()})},initVehicle:function(){if(this.vehicle.data&&this.vehicle.selected&&(this.series=this.$findByKey(this.vehicle.data,"vehNameCode",this.vehicle.selected.vehNameCode),this.series&&(this.seriesIndex=this.vehicle.data.indexOf(this.series))),this.series||(this.series=this.vehicle.data[0],this.seriesIndex=0),this.series)for(var e=0;e<this.series.modelCodes.length;e++){var t=this.series.modelCodes[e];t==this.vehicle.selected.modelCode&&(this.model=t,this.modelIndex=e)}this.model||(this.model=this.series.modelCodes[0],this.modelIndex=0)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basic-maitain-manual-vehicle-dialog"},[a("gtmc-detail-dialog",{attrs:{dialog:e.vehicle.dialog},on:{confirm:e.handleConfirm}},[a("div",{staticClass:"basic-maitain-manual-vehicle-dialog__content"},[a("div",{staticClass:"tree-panel__series"},e._l(e.vehicle.data,function(t,l){return a("div",{key:l,class:e.handleSeriesClass(t,l),on:{click:function(a){return e.handleSeries(t,l)}}},[a("div",[e._v("\n            "+e._s(t.vehName)+"("+e._s(t.vehNameCode)+")\n          ")]),e._v(" "),a("div",[a("i",{staticClass:"el-icon-arrow-right"})])])}),0),e._v(" "),a("div",{staticClass:"tree-panel__models"},e._l(e.series.modelCodes,function(t,l){return a("div",{key:l,class:e.handleModelClass(t,l),on:{click:function(a){return e.handleModel(t,l)}}},[a("div",[e._v("\n            "+e._s(t)+"\n          ")])])}),0)])])],1)},staticRenderFns:[]};var n=a("VU/8")(l,i,!1,function(e){a("L5c/")},null,null);t.default=n.exports},VNlR:function(e,t,a){"use strict";t.a={data:function(){return{rules:[{label:"5K",value:5,selected:!1},{label:"10K",value:10,selected:!1},{label:"15K",value:15,selected:!1},{label:"20K",value:20,selected:!1},{label:"25K",value:25,selected:!1},{label:"30K",value:30,selected:!1},{label:"35K",value:35,selected:!1},{label:"40K",value:40,selected:!1},{label:"45K",value:45,selected:!1},{label:"50K",value:50,selected:!1},{label:"60K",value:60,selected:!1},{label:"70K",value:70,selected:!1},{label:"80K",value:80,selected:!1},{label:"90K",value:90,selected:!1},{label:"100K",value:100,selected:!1},{label:"100K+",value:101,selected:!1}]}},methods:{}}},dPe4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l),n=a("+9yV"),s=a("9ebJ"),r=a("Tho2"),o=a("VNlR"),d={1:{name:"模板名称",description:"模板说明"},2:{name:"保养手册名称",description:"保养手册说明"}},u={props:{manualType:{type:String,default:"1"}},mixins:[s.default,n.default,o.a],data:function(){return{loading:!1,itemRuleTable:{page:{records:[]}},label:d[this.manualType],detailRules:{name:this.$rule.name(d[this.manualType].name,null,32),description:this.$rule.lengths("保养项说明",null,100)},select:{dialog:{visible:!1,loading:!1,title:"零配件",width:"1280px"},item:{},rows:[]},vehicle:{dialog:{visible:!1,title:"保养手册适用车型",width:"800px"},selected:{},data:[]},isShowMaintainGoodsDialog:!1}},created:function(){this.loadData()},components:{VehicleDialog:r.default},computed:{},methods:{isTemplate:function(){return"1"==this.manualType},toListPage:function(){this.$closeTagView();var e=1==this.manualType?"basic-maintain-manual-template-list":"basic-maintain-manual-list";this.link(e)},toMaintainPage:function(e){this.$closeTagView(),this.link("goods-maintain-detail",{maintainManualId:e})},showVehicleDialog:function(){this.vehicle.dialog.visible=!0},handleConfirmVehicle:function(e){var t=this;this.detail.modelCode=e.modelCode,this.detail.vehName=e.vehName,this.detail.vehNameCode=e.vehNameCode,this.$nextTick(function(){t.$refs.form.validateField("vehName")})},selectParts:function(e){this.select.dialog.visible=!0,this.select.item=e,this.select.rows=e.detailItem.manItemParts},handleSave:function(){var e=this,t={body:this.detail.manualId?this.assembleBodyModify():this.assembleBodyAdd(),next:this.isTemplate()?"basic-maintain-manual-template-list":""};console.log(t);var a=this.$api.MaintainManualController;this.loading=!0,this.$invokeSave(t,"manualId",a.add,a.modify,function(t){e.loading=!1,console.log(t.body),t&&t.body?(e.detail.manualId=t.body,2==e.manualType&&(e.isShowMaintainGoodsDialog=!0)):e.$message.error("保存"+label.name+"出错")}).catch(function(t){e.loading=!1,console.log(t)})},handlePartsRemove:function(e,t){this.$removeByKey(e.detailItem.manItemParts,"partsId",t.partsId),this.$removeByKey(e.detailItem.selectParts,"partsId",t.partsId)},handleConfirmParts:function(e){var t=this,a=this.assembleItemParts(this.select.item,e);this.select.item.detailItem.manItemParts=a,this.select.item.detailItem.selectParts=e,this.$nextTick(function(){t.$refs.form.validateField("baseItems"),t.$refs.form.validateField("formItemRules"),t.$initDragTable(t.$refs["partsTable"+t.select.item.itemId],t.select.item.detailItem,"manItemParts")})},loadData:function(){var e=this;this.loading=!0;var t=this.getParameter("manualId"),a=this.getParameter("cloneId"),l=a,i=l?a:t;if(i){var n={path:{manualId:i}};this.$api.MaintainManualController.get(n,function(t){e.loading=!1,t&&t.body&&(console.log(t.body),2==e.manualType&&2!=t.body.manualType&&(t.body.vehName="",t.body.vehNameCode="",t.body.modelCode=""),l&&(t.body.manualId=null),e.loadItems(function(a){console.log(a.body),t.body.baseItems=a.body,e.detail=t.body,e.initRuleCheckbox(),e.initItemRelation(),e.initItemRuleTable()}))})}else this.loadItems()},loadItems:function(e){var t=this;this.$api.ItemController.list({},function(a){t.loading=!1,t.detail.baseItems=a.body,e&&e(a)})},handleItemSelectionChange:function(e,t){var a=this;this.initItemRelation(),this.initItemSelected(e),this.initItemRuleTable(),this.$nextTick(function(){a.$refs.form.validateField("baseItems"),a.$refs.form.validateField("formItemRules")})},hasItemParts:function(e){return e.detailItem&&e.detailItem.manItemParts&&e.detailItem.manItemParts.length>0},buildItemTable:function(e){var t={page:{records:[]}};return e.detailItem&&(t.page.records=e.detailItem.manItemParts),t},buildItemPartsProp:function(e,t){return"baseItems."+this.detail.baseItems.indexOf(e)+".detailItem.manItemParts."+e.detailItem.manItemParts.indexOf(t)+".useQuantity"},visibleSelectParts:function(e){return e.detailItem&&e.detailItem.selected},validatorFormRules:function(e,t,a){var l=this.assembleRules(),n=!0,s=!1,r=void 0;try{for(var o,d=i()(l);!(n=(o=d.next()).done);n=!0){var u=o.value;u.condMileages&&0!=u.condMileages.length||a("每个保养项至少选择一个保养里程数")}}catch(e){s=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(s)throw r}}a()},validatorFormBaseItems:function(e,t,a){var l=this.assembleItems();if(!l||0==l.length)return a("请至少选择一个保养项"),!1;var n=!0,s=!1,r=void 0;try{for(var o,d=i()(l);!(n=(o=d.next()).done);n=!0){var u=o.value;if(!u.manualItemParts||0==u.manualItemParts.length)return a("每个保养项至少选择一个零配件"),!1}}catch(e){s=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(s)throw r}}return a(),!0},validatorFormVehicle:function(e,t,a){return console.log(this.detail),this.detail.vehName||this.detail.vehNameCode||this.detail.modelCode?this.detail.vehName?this.detail.vehNameCode?this.detail.modelCode?void a():(a("车型Model有误，请重新选择适用车型"),!1):(a("车名代码有误，请重新选择适用车型"),!1):(a("车名有误，请重新选择适用车型"),!1):(a("请选择适用车型"),!1)}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basic-maintain-manual-template-detail"},[a("gtmc-detail",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("el-form",{ref:"form",attrs:{model:e.detail,rules:e.detailRules,"label-width":"120px"}},[a("gtmc-block",{attrs:{title:"基本信息"}},[a("el-form-item",{attrs:{label:e.label.name,prop:"name",required:""}},[a("el-input",{model:{value:e.detail.name,callback:function(t){e.$set(e.detail,"name","string"==typeof t?t.trim():t)},expression:"detail.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.label.description,prop:"description"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.detail.description,callback:function(t){e.$set(e.detail,"description","string"==typeof t?t.trim():t)},expression:"detail.description"}})],1),e._v(" "),"2"==e.manualType?a("el-form-item",{attrs:{label:"适用车型",prop:"vehName",required:"",rules:[{trigger:"change",validator:e.validatorFormVehicle}]}},[e._v("\n          "+e._s(e.detail.vehName)+"\n          "),e.detail.vehNameCode?a("span",[e._v(" ("+e._s(e.detail.vehNameCode)+") ")]):e._e(),e._v("\n          "+e._s(e.detail.modelCode)+"\n          "),a("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(t){return e.showVehicleDialog()}}},[e._v("选择车型")])],1):e._e()],1),e._v(" "),a("gtmc-line"),e._v(" "),a("gtmc-block",{attrs:{title:"选择保养项，关联零配件"}},[a("el-table",{ref:"itemTable",staticClass:"item-table",staticStyle:{width:"100%"},attrs:{data:e.detail.baseItems,"row-key":"itemId","show-header":!1,border:""},on:{select:e.handleItemSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),a("el-table-column",{key:Math.random(),attrs:{type:"expand",width:"2"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasItemParts(t.row)?e._e():a("el-alert",{attrs:{title:"未关联零配件",type:"error",closable:!1}}),e._v(" "),a("div",[e.hasItemParts(t.row)?a("gtmc-list-table",{ref:"partsTable"+t.row.itemId,attrs:{table:e.buildItemTable(t.row),"row-key":"partsId"}},[a("gtmc-table-column-text",{attrs:{prop:"partsName",label:"零配件名称"}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"partsCode",label:"零配件编号",width:"120"}}),e._v(" "),a("gtmc-table-column-text",{attrs:{prop:"partsTypeName",label:"所属品类",width:"120"}}),e._v(" "),a("gtmc-table-column-amount",{attrs:{prop:"suggestPrice",label:"SRP价格",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"建议用量(件)",prop:"useQuantity",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[a("el-form-item",{attrs:{label:"","label-width":"0px",prop:e.buildItemPartsProp(t.row,l.row),rules:e.$rule.quantity(" ",1,9999999,!0,function(){return l.row.useQuantity})}},[a("el-input",{model:{value:l.row.useQuantity,callback:function(t){e.$set(l.row,"useQuantity","string"==typeof t?t.trim():t)},expression:"scopeParts.row.useQuantity"}})],1)]}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[a("el-button",{staticClass:"gtmc-button-text",attrs:{type:"text"},on:{click:function(a){return e.handlePartsRemove(t.row,l.row)}}},[e._v("删除")])]}}],null,!0)})],1):e._e(),e._v("\n                "+e._s(e.$nextTick(function(){e.hasItemParts(t.row)&&e.$initDragTable(e.$refs["partsTable"+t.row.itemId],t.row.detailItem,"manItemParts")}))+"\n              ")],1),e._v(" "),e.hasItemParts(t.row)?a("el-alert",{attrs:{type:"warning",closable:!1}},[e._v(" 拖动表格可调整零配件的推荐顺序。")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:" ",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"select-parts-button"},[e._v("\n                "+e._s(t.row.name)+"\n                "),t.row.detailItem&&t.row.detailItem.selected?a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus"},on:{click:function(a){return e.selectParts(t.row)}}},[e._v("选择零配件")]):e._e()],1)]}}])})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"0px",prop:"baseItems",rules:[{trigger:"change",validator:e.validatorFormBaseItems}]}})],1),e._v(" "),a("gtmc-block",{staticClass:"item-rule-table",attrs:{title:"保养规则"}},[e.itemRuleTable.page.records&&0!=e.itemRuleTable.page.records.length?e._e():a("div",{staticClass:"item-rule-table-none"},[e._v("\n          请先勾选保养项\n        ")]),e._v(" "),a("el-form-item",{attrs:{"label-width":"0px",prop:"formItemRules",rules:[{trigger:"change",validator:e.validatorFormRules}]}},[e.itemRuleTable.page.records&&e.itemRuleTable.page.records.length>0?a("gtmc-list-table",{staticClass:"rule-table",attrs:{table:e.itemRuleTable,border:""}},[a("gtmc-table-column-text",{attrs:{prop:"name",label:"保养项 / 里程(km)"}}),e._v(" "),e._l(e.rules,function(t,l){return a("el-table-column",{key:l,attrs:{label:t.label,width:"40",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[a("el-checkbox",{model:{value:l.row.detailItem.ruleCheckbox[t.value],callback:function(a){e.$set(l.row.detailItem.ruleCheckbox,t.value,a)},expression:"scope.row.detailItem.ruleCheckbox[rule.value]"}})]}}],null,!0)})})],2):e._e()],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"button"},slot:"button"},[a("gtmc-button-save",{attrs:{name:"保存"},on:{click:function(t){return e.$handleFormValidate("form",e.handleSave)}}}),e._v(" "),a("gtmc-button-return",{attrs:{name:"取消"},on:{click:function(t){return e.toListPage()}}})],1),e._v(" "),a("gtmc-select-parts",{attrs:{select:e.select},on:{confirm:e.handleConfirmParts}}),e._v(" "),a("vehicle-dialog",{attrs:{vehicle:e.vehicle},on:{confirm:e.handleConfirmVehicle}}),e._v(" "),a("el-dialog",{attrs:{title:"保存成功",visible:e.isShowMaintainGoodsDialog,width:"30%",center:""},on:{"update:visible":function(t){e.isShowMaintainGoodsDialog=t}}},[a("span",[a("center",[e._v("是否继续将当前保养手册发布为保养服务？")])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.toMaintainPage(e.detail.manualId)}}},[e._v("前往发布流程")]),e._v(" "),a("el-button",{on:{click:function(t){return e.toListPage()}}},[e._v("返回列表")])],1)])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(u,m,!1,function(e){a("hxfb")},null,null);t.default=c.exports},hxfb:function(e,t){}});