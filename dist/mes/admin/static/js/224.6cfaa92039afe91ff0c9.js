webpackJsonp([224],{Y7wP:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{assembleBody:function(){return{partsName:this.form.partsName,partsTypeId:this.form.partsTypeId,suggestPrice:this.form.suggestPrice,description:this.form.description,useModels:this.vehicle.selected,partsCode:this.form.partsCode}},assembleBodyAdd:function(){return this.assembleBody()},assembleBodyModify:function(){var s=this.assembleBody();return s.partsId=this.form.partsId,s},save:function(){var s=this,e=this.form.partsId,t={body:e?this.assembleBodyModify():this.assembleBodyAdd()};console.log(t);var i=this.$api.PartsController;this.loading=!0,this.$invokeSave(t,"partsId",i.add,i.modify,function(i){if(s.loading=!1,i&&i.body,e){s.modifyGuide.entity=t.body;var o=s.modifyGuide.check.adapter(i,!1);o&&0!=o.length?(s.modifyGuide.warn.codes=o,s.modifyGuide.warn.visible=!0):(s.$message.success("保存成功!"),s.$router.push({name:"basic-parts-list"}))}else i&&i.body&&(s.$message.success("保存成功!"),s.$router.push({name:"basic-parts-list"}))},!0).catch(function(e){s.loading=!1})}}}}});