webpackJsonp([129],{QNfu:function(t,e){},Y4WF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Gu7T"),o=n.n(i),l={props:{title:{type:String,default:"详情页面"},controller:{type:Object,default:function(){return{}}},links:{type:Object,default:function(){return{cancel:{name:""},list:{name:""}}}},form:{type:Object,default:function(){return{labelWidth:"120px",submitText:"立即创建",cancelText:"取消",validateMessage:"请检查表单中的数据是否完整和正确",rules:{},items:[]}}}},components:{},data:function(){return{loading:!1,query:this.$route.query}},created:function(){this.loadEntity()},methods:{loadEntity:function(){var t=this;if(this.query&&this.query.id){this.loading=!0;var e={query:this.$route.query};this.controller.findById(e,function(e){t.form.entity=e.body,t.loading=!1}),setTimeout(function(){t.loading=!1},2e3)}},buildEntity:function(){var t,e=this.$lodash.map(this.form.items,function(t){return t.field});return(t=this.$lodash).pick.apply(t,[this.form.entity,"id"].concat(o()(e)))},handleSave:function(){var t=this,e={body:this.buildEntity(),next:this.links.list.name};console.log(e);var n=e.body.id;this.loading=!0,this.$invokeSave(e,"id",this.controller.add,this.controller.modify,function(e){t.loading=!1,console.log(e.body),n||(t.form.entity.id=e.body.id)}).catch(function(e){console.log(e),t.loading=!1})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xv-form-detail"},[n("xv-detail",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("xv-block",{attrs:{title:t.title}},[n("el-form",{ref:"form",attrs:{model:t.form.entity,rules:t.form.rules,"label-width":t.form.labelWidth}},[n("template-form-panel",{attrs:{form:t.form,entity:t.form.entity}})],1)],1),t._v(" "),n("div",{attrs:{slot:"button"},slot:"button"},[n("xv-button-save",{attrs:{name:"保存"},on:{click:function(e){return t.$handleFormValidate("form",t.handleSave)}}}),t._v(" "),t.links&&t.links.cancel&&t.links.cancel.name?n("xv-button-return",{attrs:{name:"取消"},on:{click:function(e){return t.link(t.links.cancel.name)}}}):t._e()],1)],1)],1)},staticRenderFns:[]};var a=n("VU/8")(l,r,!1,function(t){n("QNfu")},null,null);e.default=a.exports}});