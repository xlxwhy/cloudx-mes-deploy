webpackJsonp([188],{Dr14:function(t,e){},lpKO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("X7/f");var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"adv-setup-detail"},[a("div",{staticClass:"adv-setup-detail__head"},[t._v("车型详情页【新车营销活动轮播图设置】")]),t._v(" "),a("div",{staticClass:"adv-setup-detail__content"},[a("el-button",{staticClass:"car-add--btn",attrs:{type:"primary",size:"large"},on:{click:function(e){return t.$router.push({name:"mall-advert-add"})}}},[t._v("+新增轮播图")]),t._v(" "),a("div",{staticClass:"advert-list"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"advert-table",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{label:"轮播图",align:"center","min-width":"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"imgs flex align-items-center"},t._l(e.row.imgs,function(t,e){return a("div",{key:e,staticClass:"imgs-item"},[a("img",{attrs:{src:t}})])}),0)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"txt",label:"适用新车产品",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:t.toDetail}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("关联新车产品")])]}}])})],1)],1)],1)]),t._v(" "),a("el-dialog",{attrs:{title:"关联适用新车产品",visible:t.dialogVisible,center:"",width:"800px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"relation"},[a("div",{staticClass:"relation-title"},[t._v("选择适用轮播图"),a("strong",[t._v("“商城12月促销” ")]),t._v("的新车产品：")]),t._v(" "),a("div",{staticClass:"relation-content flex column align-items-center"},[a("el-transfer",{staticClass:"transfer",attrs:{data:t.generateData,titles:["待选列表","已选列表"]},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.option;return a("div",{staticClass:"flex justify-content-spacebetween"},[a("span",{},[t._v(t._s(s.label))]),t._v(" "),a("el-tag",{attrs:{type:s.key%3==0?"warning":"success"}},[t._v(t._s(s.statuTxt))])],1)}}]),model:{value:t.generateValue,callback:function(e){t.generateValue=e},expression:"generateValue"}}),t._v(" "),a("el-alert",{staticStyle:{"margin-top":"20px"},attrs:{type:"warning",title:"标灰的新车产品已经关联过营销活动轮播图，不可重复关联。",closable:!1}})],1)]),t._v(" "),a("div",{staticClass:"dialog-footer flex justify-content-center",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("保 存")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")({data:function(){var t=["汉兰达","雷凌","凯美瑞","致炫","凯美瑞双擎","智酷","塞纳"];return{loading:!1,list:[{id:1,imgs:["https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg","https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg","https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg","https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg"],txt:"阿尔法 / 凯美瑞运动版"},{id:1,imgs:["https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg","https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg","https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg","https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg"],txt:"阿尔法 / 凯美瑞运动版"}],dialogVisible:!1,generateData:function(e){var a=[];return t.forEach(function(t,e){a.push({key:e,label:t,statuTxt:e%3==0?"待审核":"已发布"})}),a}(),generateValue:[1,4]}},methods:{toDetail:function(){}}},s,!1,function(t){a("Dr14")},"data-v-3c333aaa",null);e.default=i.exports}});