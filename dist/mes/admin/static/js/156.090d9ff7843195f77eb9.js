webpackJsonp([156],{p0wD:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"worktime-detail"},[e("xv-form-detail",{attrs:{title:"班次详情",controller:this.controller,links:this.links,form:this.form}})],1)},staticRenderFns:[]};var n=r("VU/8")({components:{},data:function(){var t=this,e=this.$template;return{loading:!1,query:this.$route.query,controller:this.$apis.WorktimeController,links:{list:{name:"worktime-list"},cancel:{name:"worktime-list"}},form:{entity:{},labelWidth:"120px",rules:{num:this.$rule.name("班次序号",null,32),name:this.$rule.name("班次名称",null,32),startTime:this.$rule.requireds("起始时间不可以为空"),endTime:this.$rule.requireds("结束时间不可以为空"),prepareTime:this.$rule.quantity("提前上班时间",0,240,!1,function(){return t.form.entity.prepareTime}),salaryRate:this.$rule.quantity("工资百分比",0,100,!0,function(){return t.form.entity.salaryRate})},items:[e.input("num","序号"),e.input("name","班次名称"),e.time("startTime","起始时间"),e.time("endTime","结束时间"),e.input("prepareTime","提前上班时间"),e.input("salaryRate","工资百分比"),e.textarea("description","备注")]}}},created:function(){},methods:{}},i,!1,function(t){r("rf27")},null,null);e.default=n.exports},rf27:function(t,e){}});