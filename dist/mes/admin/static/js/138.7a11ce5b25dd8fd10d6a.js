webpackJsonp([138],{PpKH:function(e,t){},Z7t7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{tableBasic:{data:[{fieldOne:"客户姓名",valueOne:"王二小"},{fieldOne:"客户手机号",valueOne:"15800088805"},{fieldOne:"经销店",valueOne:"广汽丰田第X店"},{fieldOne:"意向车型",valueOne:"雷凌2019精英版"}],spans:[]},tableContact:{data:[{fieldOne:"留资类型",valueOne:"获取底价"},{fieldOne:"留资时间",valueOne:"2019-10-12 12:10"},{fieldOne:"购车计划",valueOne:"一个月内"},{fieldOne:"购车方式",valueOne:"全款购买"},{fieldOne:"受理状态",valueOne:"未分配",valueType:"TAG-WARNING"}],spans:[{ri:2,ci:1,rows:1,cols:3}]}}},components:{},mounted:function(){},methods:{handleChange:function(e){console.log(e)},closePage:function(){this.$router.push({name:"track-client-list"})},loadTable:function(e,t,a){}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"track-client-detail"},[a("xv-block",{attrs:{title:"基本信息"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"track-client-detail__info"},[a("div",{staticClass:"track-client-detail__info__fields"},[a("attribute-table",{attrs:{table:e.tableBasic,nameKey:"fieldOne",valueKey:"valueOne",needColon:!0}})],1),e._v(" "),a("div",{staticClass:"track-client-detail__info__image"},[a("img",{attrs:{width:"100",height:"100",src:"https://www.gac-toyota.com.cn/vehicles/2019newlevin/images/vechicles/yuyue.jpg"}})])])])],1),e._v(" "),a("xv-block",{attrs:{title:"留资内容"}},[a("div",{staticClass:"track-client-detail__contact"},[a("attribute-table",{attrs:{table:e.tableContact,nameKey:"fieldOne",valueKey:"valueOne",needColon:!1}})],1)]),e._v(" "),a("div",{staticClass:"track-client-detail__button"},[a("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){return e.closePage()}}},[e._v("关闭")])],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(e){a("PpKH")},null,null);t.default=i.exports}});