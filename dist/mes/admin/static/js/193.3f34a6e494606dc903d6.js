webpackJsonp([193],{UFyy:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"device-detail"},[t("xv-form-detail",{attrs:{title:"机台详情",controller:this.controller,links:this.links,form:this.form}})],1)},staticRenderFns:[]};var r=i("VU/8")({components:{},data:function(){var e=this.$template;return{loading:!1,query:this.$route.query,controller:this.$apis.DeviceController,links:{list:{name:"device-list"},cancel:{name:"device-list"}},form:{entity:{},labelWidth:"120px",rules:{code:this.$rule.name("机台编号",null,32),name:this.$rule.name("机台名称",null,32),deviceTypeId:this.$rule.requireds("机台类型不允许为空"),description:this.$rule.lengths("联系人",0,256)},items:[e.input("code","机台编号"),e.input("name","机台名称"),e.foreign("workshopId","所属车间",null,{adapter:function(e){return{label:e.name,value:e.id}},values:[],link:"workshop-list",foreignName:"车间"}),e.foreign("deviceGroupId","所属设备组",null,{adapter:function(e){return{label:e.name,value:e.id}},values:[],link:"device-group-list",foreignName:"设备组"}),e.foreign("deviceTypeId","机台类型",null,{adapter:function(e){return{label:e.name,value:e.id}},values:[],link:"device-type-list",foreignName:"机台类型"}),e.input("brandName","品牌"),e.input("collectorCode","采集编号"),e.textarea("description","备注")]}}},created:function(){this.$loadForeignList(2,this.$apis.WorkshopController,{page:{pageSize:1e3},sort:{descs:[]}}),this.$loadForeignList(3,this.$apis.DeviceGroupController,{page:{pageSize:1e3},sort:{descs:[]}}),this.$loadForeignList(4,this.$apis.DeviceTypeController,{page:{pageSize:1e3},sort:{descs:[]}})},methods:{}},n,!1,function(e){i("tTA5")},null,null);t.default=r.exports},tTA5:function(e,t){}});