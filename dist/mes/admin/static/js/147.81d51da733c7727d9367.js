webpackJsonp([147],{FUJ2:function(t,e){},zo5s:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"workshop-detail"},[e("xv-form-detail",{attrs:{title:"车间详情",controller:this.controller,links:this.links,form:this.form}})],1)},staticRenderFns:[]};var r=n("VU/8")({components:{},data:function(){var t=this,e=this.$template;return{loading:!1,query:this.$route.query,controller:this.$apis.WorkshopController,links:{list:{name:"workshop-list"},cancel:{name:"workshop-list"}},form:{entity:{},labelWidth:"120px",rules:{code:this.$rule.name("车间序号",null,32),name:this.$rule.name("车间名称",null,32),admin:this.$rule.name("车间名称",null,32),deviceCount:this.$rule.quantity("织机数量",0,1e5,!1,function(){return t.form.entity.deviceCount}),description:this.$rule.lengths("联系人",0,256)},items:[e.input("code","车间序号"),e.input("name","车间名称"),e.foreign("factoryId","所属工厂",null,{adapter:function(t){return{label:t.name,value:t.id}},values:[],link:"factory-list",foreignName:"工厂"}),e.input("admin","管理员"),e.number("deviceCount","织机数量",null,{controlsPosition:"right"}),e.textarea("description","备注")]}}},created:function(){this.$loadForeignList(2,this.$apis.FactoryController,{page:{size:1e3},sort:{descs:[]}})},methods:{}},i,!1,function(t){n("FUJ2")},null,null);e.default=r.exports}});