webpackJsonp([170],{HBcE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:{popup:{type:Object,default:function(){return{dialog:{visible:!1,loading:!1},data:[],selected:{}}}},selected:{type:Array,default:function(){return[]}}},data:function(){return{template:{description:""},templateIndex:0,form:{useTempalte:1,description:""}}},watch:{selected:{handler:function(e,t){}}},created:function(){this.loadVehicle()},methods:{handleClick:function(e,t){this.template=e,this.templateIndex=t},handleClass:function(e,t){return this.templateIndex==t?"selected":""},handleConfirm:function(){2==this.form.useTempalte?(this.popup.selected={},this.$emit("confirm",{})):(this.popup.selected=this.template,this.$emit("confirm",this.template)),this.popup.dialog.visible=!1},loadVehicle:function(){var e=this,t={body:{size:1e3,current:1,filters:[]}};this.$gtmc.appendFilter(t.body.filters,"manualType","eq","1"),this.popup.dialog.loading=!0,this.$api.MaintainManualController.page(t,function(t){e.popup.dialog.loading=!1,e.popup.data=t.body.records,e.initSelected()})},initSelected:function(){if(this.popup.data&&this.popup.selected){var e=this.$findByKey(this.popup.data,"manualId",this.popup.selected.manualId);e&&(this.templateIndex=this.popup.data.indexOf(this.template),this.template=e)}this.template&&this.template.manualId||(this.template=this.popup.data[0],this.templateIndex=0)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basic-maitain-manual-template-dialog"},[a("gtmc-detail-dialog",{attrs:{dialog:e.popup.dialog},on:{confirm:e.handleConfirm}},[a("div",{staticClass:"basic-maitain-manual-template-dialog__content"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"是否使用模板"}},[a("el-radio-group",{model:{value:e.form.useTempalte,callback:function(t){e.$set(e.form,"useTempalte",t)},expression:"form.useTempalte"}},[a("el-radio",{attrs:{label:1}},[e._v("使用模板")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("不使用模板，全新创建")])],1)],1),e._v(" "),1==e.form.useTempalte?a("el-form-item",{attrs:{label:"选择模板"}},[a("div",{staticClass:"template-list-table"},e._l(e.popup.data,function(t,i){return a("div",{key:i,class:e.handleClass(t,i),on:{click:function(a){return e.handleClick(t,i)}}},[e._v("\n              "+e._s(t.name)+"\n            ")])}),0)]):e._e(),e._v(" "),1==e.form.useTempalte?a("el-form-item",{attrs:{label:"模板说明"}},[a("el-input",{attrs:{type:"textarea",disabled:"",rows:"3"},model:{value:e.template.description,callback:function(t){e.$set(e.template,"description",t)},expression:"template.description"}})],1):e._e()],1),e._v(" "),1==e.form.useTempalte?a("div",{staticClass:"no-template-message"},[e._v("\n        没有合适的保养手册模板？立即前去\n        "),a("gtmc-link",{attrs:{text:"添加保养手册模板",name:"basic-maintain-manual-template-list"}})],1):e._e()],1)])],1)},staticRenderFns:[]};var n=a("VU/8")(i,l,!1,function(e){a("nmlO")},null,null);t.default=n.exports},nmlO:function(e,t){}});