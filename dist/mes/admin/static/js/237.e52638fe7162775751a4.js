webpackJsonp([237],{pyP4:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{deleteGuide:{delete:{loading:!1,visible:!1,method:this.$api.PartsTypeController.delete,param:function(t){return{path:{partsTypeId:t.partsTypeId}}},target:"零配件品类",button:{type:"text",text:"删除"},callback:{success:this.$handleQuery,error:function(){}}},check:{method:this.$api.PartsTypeController.checkOperation,param:function(t){return{body:{operation:2,partsTypeId:t.partsTypeId}}},adapter:function(t,e){if(!t||!t.body)return null;if(e?t.body.ifAllowed:t.body.success)return null;var r=[];return t.body.hasRelatedParts&&r.push("10001"),r}},warn:{visible:!1,width:"850px",title:"无法删除零配件品类",message:"",tips:[{name:"零配件",title:"零配件品类解除关联的方法：",contents:["方式一：在已关联的零配件中重新选择另外的品类；","方式二：删除已关联的零配件。"],button:{type:"primary",text:"查看已关联的零配件",link:"basic-parts-list",param:function(t){return{partsTypeId:t.partsTypeId}}}}],map:{10001:[0],10002:[0],10003:[0]},codes:[]}}}},methods:{}}}});