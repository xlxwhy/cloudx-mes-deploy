webpackJsonp([129],{Ha4l:function(t,e){},LO30:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"department-detail"},[e("xv-form-detail",{attrs:{title:"班级详情",controller:this.controller,links:this.links,form:this.form}})],1)},staticRenderFns:[]};var l=n("VU/8")({components:{},data:function(){var t=this,e=this.$template;return{loading:!1,query:this.$route.query,controller:this.$apis.DepartmentController,links:{list:{name:"department-list"},cancel:{name:"department-list"}},form:{entity:{},labelWidth:"120px",rules:{code:this.$rule.name("班级序号",null,32),name:this.$rule.name("班级名称",null,32),admin:this.$rule.name("班级名称",null,32),employeeCount:this.$rule.quantity("员工数量",0,1e5,!1,function(){return t.form.entity.deviceCount}),description:this.$rule.lengths("联系人",0,256)},items:[e.input("code","班级序号"),e.input("name","班级名称"),e.input("admin","管理员"),e.number("employeeCount","员工数量",null,{controlsPosition:"right"}),e.textarea("description","备注")]}}},created:function(){},methods:{}},i,!1,function(t){n("Ha4l")},null,null);e.default=l.exports}});