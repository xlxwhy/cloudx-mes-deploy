webpackJsonp([66,162,232,234],{"+lWc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("gbXH"),o=r("Y7wP"),l=r("wRoC"),a={mixins:[o.default,l.default],data:function(){var e=this;return{loading:!1,form:{partsName:"",partsCode:"",partsTypeId:"",suggestPrice:"",description:"",useModels:""},formRules:{partsName:this.$rule.name("零配件名称",null,32),partsCode:this.$rule.code("零配件编号",null,20,!0),partsTypeId:this.$rule.requireds("请选择所属品类"),useModels:this.$rule.arrays("请选择适用车型"),suggestPrice:this.$rule.price("SRP价格",0,9999999.99,!0,function(){return e.form.suggestPrice}),description:this.$rule.lengths("零配件说明",null,32)},vehicle:{dialog:{visible:!1,title:"零配件适用车型",width:"600px"},tree:[],selected:[]},typeOptions:{adapter:function(e){return{label:e.name,value:e.partsTypeId}},values:[]}}},components:{DetailVehicleDialog:i.default},created:function(){var e=this;this.loadTypes(),this.loading=!0,this.loadEntity(this.$api.PartsController.get,"partsId",function(t){e.loading=!1,t&&t.body&&(e.form=t.body,e.vehicle.selected=e.form.useModels,console.log(e.form))})},methods:{handleSave:function(){this.save()},showVehicleDialog:function(e){console.log(this.form),this.vehicle.dialog.visible=!0,this.vehicle.selected=this.form.useModels,this.vehicle.readonly=e},handleConfirmVehicle:function(e){this.vehicle.selected=e,this.form.useModels=e},loadTypes:function(){var e=this;this.$api.PartsTypeController.list({},function(t){t.body&&(e.typeOptions.values=t.body)})}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basic-parts-detail"},[r("gtmc-detail",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("gtmc-block",{attrs:{title:"零配件详情"}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"零配件名称",prop:"partsName",required:""}},[r("el-input",{attrs:{placeholder:"零配件名称，不超过32个字符"},model:{value:e.form.partsName,callback:function(t){e.$set(e.form,"partsName","string"==typeof t?t.trim():t)},expression:"form.partsName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"零配件编号",prop:"partsCode",required:""}},[r("el-input",{attrs:{placeholder:"零配件编号，与tact/EIP系统一致，不超过20个字符"},model:{value:e.form.partsCode,callback:function(t){e.$set(e.form,"partsCode","string"==typeof t?t.trim():t)},expression:"form.partsCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属品类",prop:"partsTypeId",required:""}},[r("gtmc-field-select",{attrs:{entity:e.form,name:"partsTypeId",placeholder:"请选择",options:e.typeOptions}}),e._v("\n           \n          "),r("span",[e._v("\n            没有合适的品类？立即前去\n            "),r("router-link",{attrs:{to:{name:"basic-parts-type-list"}}},[e._v("管理零配件品类")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"选择适用车型",prop:"useModels",required:""}},[r("gtmc-button-text",{attrs:{name:"查看车型"},on:{click:function(t){return e.showVehicleDialog(!0)}}}),e._v(" "),r("el-button",{on:{click:function(t){return e.showVehicleDialog()}}},[e._v("选择车型")])],1),e._v(" "),r("el-form-item",{attrs:{label:"SRP价格",prop:"suggestPrice",required:""}},[r("el-input",{attrs:{placeholder:"0.00"},model:{value:e.form.suggestPrice,callback:function(t){e.$set(e.form,"suggestPrice","string"==typeof t?t.trim():t)},expression:"form.suggestPrice"}},[r("template",{slot:"prepend"},[e._v("￥")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"零配件说明",prop:"description"}},[r("el-input",{attrs:{type:"textarea",rows:"2",placeholder:"描述零配件，默认作为零配件商品卖点内容，不超过32个字符"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description","string"==typeof t?t.trim():t)},expression:"form.description"}})],1),e._v(" "),r("el-form-item")],1)],1),e._v(" "),r("div",{attrs:{slot:"button"},slot:"button"},[r("gtmc-button-save",{attrs:{name:"保存"},on:{click:function(t){return e.$handleFormValidate("form",e.handleSave)}}}),e._v(" "),r("gtmc-button-return",{attrs:{name:"取消"},on:{click:function(t){return e.link("basic-parts-list")}}})],1),e._v(" "),r("detail-vehicle-dialog",{attrs:{vehicle:e.vehicle},on:{confirm:e.handleConfirmVehicle}}),e._v(" "),r("gtmc-dialog-guide-modify",{attrs:{guide:e.modifyGuide}})],1)],1)},staticRenderFns:[]};var s=r("VU/8")(a,n,!1,function(e){r("ijoX")},null,null);t.default=s.exports},IpCp:function(e,t){},Y7wP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{assembleBody:function(){return{partsName:this.form.partsName,partsTypeId:this.form.partsTypeId,suggestPrice:this.form.suggestPrice,description:this.form.description,useModels:this.vehicle.selected,partsCode:this.form.partsCode}},assembleBodyAdd:function(){return this.assembleBody()},assembleBodyModify:function(){var e=this.assembleBody();return e.partsId=this.form.partsId,e},save:function(){var e=this,t=this.form.partsId,r={body:t?this.assembleBodyModify():this.assembleBodyAdd()};console.log(r);var i=this.$api.PartsController;this.loading=!0,this.$invokeSave(r,"partsId",i.add,i.modify,function(i){if(e.loading=!1,i&&i.body,t){e.modifyGuide.entity=r.body;var o=e.modifyGuide.check.adapter(i,!1);o&&0!=o.length?(e.modifyGuide.warn.codes=o,e.modifyGuide.warn.visible=!0):(e.$message.success("保存成功!"),e.$router.push({name:"basic-parts-list"}))}else i&&i.body&&(e.$message.success("保存成功!"),e.$router.push({name:"basic-parts-list"}))},!0).catch(function(t){e.loading=!1})}}}},gbXH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("Gu7T"),o=r.n(i),l=r("BO1k"),a=r.n(l),n={props:{vehicle:{type:Object,default:function(){return{dialog:{visible:!1,loading:!1},readonly:!1,tree:{},selected:[]}}}},data:function(){return{defaultNodeKeys:[],allChecked:!1}},created:function(){this.loadVehicle()},watch:{"vehicle.dialog.visible":{handler:function(e,t){var r=this;e&&(console.log(this.vehicle.readonly),this.enable(this.vehicle.tree,this.vehicle.readonly),this.defaultNodeKeys=this.findModelNodeKeys(this.vehicle.tree,this.vehicle.selected),this.$nextTick(function(){r.$refs.vehicleTree.filter()}))},deep:!0}},methods:{handleFilter:function(e,t,r){return!this.vehicle.readonly||this.defaultNodeKeys.indexOf(t.id)>=0},handleDisabled:function(e,t){console.log(e,t)},handleAll:function(){this.allChecked=!this.allChecked;var e=!0,t=!1,r=void 0;try{for(var i,o=a()(this.vehicle.tree);!(e=(i=o.next()).done);e=!0){var l=i.value;this.$refs.vehicleTree.setChecked(l,this.allChecked,!0)}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}},handleConfirm:function(){this.$emit("confirm",this.toModel()),this.vehicle.dialog.visible=!1},buildTreeKey:function(e,t){return 1e4*e+t},toTree:function(e){var t=[],r=0,i=0,o=!0,l=!1,n=void 0;try{for(var s,d=a()(e);!(o=(s=d.next()).done);o=!0){var c=s.value;r++;var u={id:this.buildTreeKey(r,0),label:c.vehName+"（"+c.vehNameCode+"）",vehName:c.vehName,vehNameCode:c.vehNameCode,level:1,children:[]};t.push(u);var h=!0,f=!1,v=void 0;try{for(var p,m=a()(c.modelCodes);!(h=(p=m.next()).done);h=!0){var y=p.value;i++,u.children.push({id:this.buildTreeKey(r,i),label:y,code:y,parent:u,level:2})}}catch(e){f=!0,v=e}finally{try{!h&&m.return&&m.return()}finally{if(f)throw v}}}}catch(e){l=!0,n=e}finally{try{!o&&d.return&&d.return()}finally{if(l)throw n}}return t},toModel:function(){var e=this.$refs.vehicleTree.getCheckedNodes(),t=this.$refs.vehicleTree.getHalfCheckedNodes(),r=[].concat(o()(e),o()(t)),i=this.$refs.vehicleTree.getCheckedKeys();console.log(r);var l=[],n=!0,s=!1,d=void 0;try{for(var c,u=a()(r);!(n=(c=u.next()).done);n=!0){var h=c.value;if(1==h.level){var f={vehName:h.vehName,vehNameCode:h.vehNameCode,modelCodes:[]},v=!0,p=!1,m=void 0;try{for(var y,g=a()(h.children);!(v=(y=g.next()).done);v=!0){var b=y.value;i.indexOf(b.id)>=0&&f.modelCodes.push(b.code)}}catch(e){p=!0,m=e}finally{try{!v&&g.return&&g.return()}finally{if(p)throw m}}l.push(f)}}}catch(e){s=!0,d=e}finally{try{!n&&u.return&&u.return()}finally{if(s)throw d}}return l},findModelNodeKeys:function(e,t){var r=[],i=!0,o=!1,l=void 0;try{for(var n,s=a()(e);!(i=(n=s.next()).done);i=!0){var d=n.value,c=!0,u=!1,h=void 0;try{for(var f,v=a()(d.children);!(c=(f=v.next()).done);c=!0){var p=f.value,m=!0,y=!1,g=void 0;try{for(var b,C=a()(t);!(m=(b=C.next()).done);m=!0){var _=b.value,k=d.vehNameCode==_.vehNameCode,x=_.modelCodes.indexOf(p.code)>=0;k&&x&&r.push(p.id)}}catch(e){y=!0,g=e}finally{try{!m&&C.return&&C.return()}finally{if(y)throw g}}}}catch(e){u=!0,h=e}finally{try{!c&&v.return&&v.return()}finally{if(u)throw h}}}}catch(e){o=!0,l=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw l}}return r},enable:function(e,t){var r=!0,i=!1,o=void 0;try{for(var l,n=a()(e);!(r=(l=n.next()).done);r=!0){var s=l.value;s.disabled=t;var d=!0,c=!1,u=void 0;try{for(var h,f=a()(s.children);!(d=(h=f.next()).done);d=!0){h.value.disabled=t}}catch(e){c=!0,u=e}finally{try{!d&&f.return&&f.return()}finally{if(c)throw u}}}}catch(e){i=!0,o=e}finally{try{!r&&n.return&&n.return()}finally{if(i)throw o}}return[]},loadVehicle:function(){var e=this;this.vehicle.dialog.loading=!0,this.$api.VehicleController.listSeriesModel({},function(t){e.vehicle.tree=e.toTree(t.body),e.defaultNodeKeys=e.findModelNodeKeys(e.vehicle.tree,e.vehicle.selected),e.vehicle.dialog.loading=!1})}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basic-parts-detail-vehicle-dialog"},[r("gtmc-detail-dialog",{attrs:{dialog:e.vehicle.dialog,closeConfirm:!1},on:{confirm:e.handleConfirm}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.vehicle.dialog.loading,expression:"vehicle.dialog.loading"}],staticClass:"basic-parts-detail-vehicle-dialog__content"},[r("el-tree",{ref:"vehicleTree",attrs:{data:e.vehicle.tree,"show-checkbox":!e.vehicle.readonly,"node-key":"id","default-expanded-keys":[],"default-checked-keys":e.defaultNodeKeys,"filter-node-method":e.handleFilter}})],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.vehicle.readonly?e._e():r("el-button",{on:{click:function(t){return e.handleAll()}}},[e._v(e._s(e.allChecked?"取消全选":"全选"))]),e._v(" "),e.vehicle.readonly?e._e():r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm()}}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:function(t){e.vehicle.dialog.visible=!1}}},[e._v("取 消")])],1)])],1)},staticRenderFns:[]};var d=r("VU/8")(n,s,!1,function(e){r("IpCp")},null,null);t.default=d.exports},ijoX:function(e,t){},wRoC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{modifyGuide:{modify:{target:"零配件",link:"basic-parts-detail",param:function(e){return{partsId:e.partsId}}},check:{method:this.$api.PartsController.checkOperation,param:function(e){return{body:{operation:1,partsId:e.partsId}}},adapter:function(e,t){if(!e||!e.body)return null;if(t?e.body.ifAllowed:e.body.success)return null;var r=[];return e.body.hasRelatedGoods&&r.push("10001"),e.body.hasRelatedMaintains&&r.push("10002"),r}},warn:{visible:!1,width:"730px",title:"无法编辑零配件",message:"",tips:[{name:"配件商品",title:"",contents:[],button:{type:"primary",text:"查看已关联的零配件商品",link:"goods-parts-list",param:function(e){return{partsCode:e.partsCode}}}},{name:"保养服务",title:"",contents:[],button:{type:"primary",text:"查看已关联的保养服务",link:"goods-maintain-list",param:function(e){return{partsCode:e.partsCode}}}}],map:{10001:[0],10002:[1],10003:[0,1]},codes:[]}}}},methods:{}}}});