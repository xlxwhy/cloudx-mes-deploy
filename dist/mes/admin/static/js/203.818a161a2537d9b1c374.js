webpackJsonp([203],{"+DSq":function(e,t){},"Iz+i":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:{detail:{type:Object,default:function(){return{dialog:{visible:!1},entity:{}}}}},data:function(){return{form:{scenarioId:"",name:"",code:""},formRules:{name:this.$rule.name("场景名称",null,32),code:this.$rule.name("场景CODE",null,32)}}},watch:{"detail.dialog.visible":{handler:function(e,t){e&&this.init()},deep:!0}},methods:{init:function(){var e=this;this.form=this.$lodash.pick(this.detail.entity,"scenarioId","name","code"),this.$nextTick(function(){e.$refs.form.clearValidate()})},handleValidate:function(){this.$handleFormValidate("form",this.handleConfirm)},handleConfirm:function(){var e=this,t={body:this.form};this.detail.dialog.loading=!0,console.log(t),this.$api.ScenarioController.save(t,function(t){e.detail.dialog.loading=!1,t&&t.body?(e.$emit("done"),e.detail.dialog.visible=!1):e.$message.error("保存文案使用场景出错")}).catch(function(t){e.detail.dialog.loading=!1})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mall-content-scene-detail"},[n("xv-detail-dialog",{attrs:{dialog:e.detail.dialog},on:{confirm:e.handleValidate}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"场景名称",prop:"name",required:""}},[n("el-input",{attrs:{placeholder:"不超过32个字符"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleValidate(t)}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"场景CODE",prop:"code"}},[n("el-input",{attrs:{placeholder:"不超过32个字符"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleValidate(t)}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code","string"==typeof t?t.trim():t)},expression:"form.code"}})],1)],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")(i,a,!1,function(e){n("+DSq")},null,null);t.default=l.exports}});