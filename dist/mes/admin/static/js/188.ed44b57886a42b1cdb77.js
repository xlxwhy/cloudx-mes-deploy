webpackJsonp([188],{LgUQ:function(t,e){},oNkO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"factory-container"},[e("xv-form-detail",{attrs:{title:"工厂详情",controller:this.controller,links:this.links,form:this.form}})],1)},staticRenderFns:[]};var r=n("VU/8")({components:{},data:function(){var t=this.$template;return{loading:!1,query:this.$route.query,controller:this.$apis.FactoryController,links:{list:{name:"factory-list"},cancel:{name:"factory-list"}},form:{entity:{},labelWidth:"120px",rules:{code:this.$rule.name("工厂编码",null,32),name:this.$rule.name("工厂名称",null,32),type:this.$rule.requireds("工厂类型不能为空"),contactName:this.$rule.lengths("联系人",0,16),contactPhone:this.$rule.lengths("联系电话",0,20),address:this.$rule.lengths("联系人",0,128),description:this.$rule.lengths("联系人",0,256)},items:[t.input("code","工厂编码"),t.input("name","工厂名称"),t.config(t.select("type","工厂类型"),{options:{adapter:function(t){return t},values:[{label:"布料工厂",value:1},{label:"纺织工厂",value:2},{label:"其他类型",value:3}]}}),t.input("contactName","联系人"),t.input("contactPhone","联系电话"),t.input("address","地址"),t.textarea("description","备注")]}}},created:function(){},methods:{}},l,!1,function(t){n("LgUQ")},null,null);e.default=r.exports}});