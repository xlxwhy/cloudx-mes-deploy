webpackJsonp([198],{T8pp:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"material-detail"},[t("xv-form-detail",{attrs:{title:"原材料详情",controller:this.controller,links:this.links,form:this.form}})],1)},staticRenderFns:[]};var i=l("VU/8")({components:{},data:function(){var e=this.$template;return{loading:!1,query:this.$route.query,controller:this.$apis.MaterialController,links:{list:{name:"material-list"},cancel:{name:"material-list"}},form:{entity:{},labelWidth:"120px",rules:{code:this.$rule.name("材料编码",null,32),name:this.$rule.name("材料名称",null,32),type:this.$rule.requireds("材料类型不能为空"),contactName:this.$rule.lengths("联系人",0,16),contactPhone:this.$rule.lengths("联系电话",0,20),address:this.$rule.lengths("联系人",0,128),description:this.$rule.lengths("联系人",0,256)},items:[e.input("code","材料编码"),e.input("name","材料名称"),e.config(e.select("type","材料类型"),{options:{adapter:function(e){return e},values:[{label:"精棉",value:1},{label:"丝绸",value:2},{label:"纤维",value:3}]}}),e.textarea("description","备注")]}}},created:function(){},methods:{}},n,!1,function(e){l("enuc")},null,null);t.default=i.exports},enuc:function(e,t){}});