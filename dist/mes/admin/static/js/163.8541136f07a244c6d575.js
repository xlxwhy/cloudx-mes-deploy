webpackJsonp([163],{LeMG:function(t,e){},T3lE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Lokx"),r=a.n(s),n=a("X7/f"),o={components:{Sortable:r.a},data:function(){return{loading:!1,list:[{id:1,carName:"全新换代雷凌 · 双擎1",carLogo:"https://jjdf.geekd.cn/group1/M00/00/10/rBKy7l0u5b2ABMiXAACCsa_otEI899.png",carPath:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",subscribe:0,status:2,time:"2019-8-30 09:15"},{id:2,carName:"全新换代雷凌 · 双擎2",carLogo:"https://jjdf.geekd.cn/group1/M00/00/10/rBKy7l0u5b2ABMiXAACCsa_otEI899.png",carPath:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",subscribe:1,status:0,time:"2019-8-30 09:15"},{id:3,carName:"全新换代雷凌 · 双擎3",carLogo:"https://jjdf.geekd.cn/group1/M00/00/10/rBKy7l0u5b2ABMiXAACCsa_otEI899.png",carPath:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",subscribe:0,status:1,time:"2019-8-30 09:15"},{id:4,carName:"全新换代雷凌 · 双擎2",carLogo:"https://jjdf.geekd.cn/group1/M00/00/10/rBKy7l0u5b2ABMiXAACCsa_otEI899.png",carPath:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",subscribe:1,status:2,time:"2019-8-30 09:15"},{id:5,carName:"全新换代雷凌 · 双擎3",carLogo:"https://jjdf.geekd.cn/group1/M00/00/10/rBKy7l0u5b2ABMiXAACCsa_otEI899.png",carPath:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",subscribe:0,status:3,time:"2019-8-30 09:15"}],total:0,queryParams:{curPage:1,pageSize:10}}},mounted:function(){this.rowDrop()},methods:{getData:function(){var t=this;n.default.list({},function(e){t.list=e.data.list})},toDetail:function(t){this.$router.push({name:"goods-car-detail",query:{id:t}})},rowDrop:function(){var t=document.querySelector(".el-table__body-wrapper tbody");r.a.create(t,{onEnd:function(t){var e=t.newIndex,a=t.oldIndex;console.log(e,a)}})},lowerShelf:function(t){this.$confirm("是否下架些商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).catch(function(t){})}},filters:{setSubscribe:function(t){return 0==t?"info":"success"},getStatusTxt:function(t){return 0==t?"待审核":1==t?"已发布":2==t?"审核不通过":"已下架"},setStatus:function(t){return 0==t?"warning":1==t?"success":2==t?"danger":void 0}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"car-list"},[a("el-button",{staticClass:"car-add--btn",attrs:{type:"primary",size:"large"}},[t._v("+发布新车商品")]),t._v(" "),a("div",{staticClass:"car-list__content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"goods-table",staticStyle:{width:"100%"},attrs:{"row-key":"id",data:t.list,border:""}},[a("el-table-column",{attrs:{type:"index",label:"排序",width:"100px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"车型信息",align:"center","min-width":"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"car-info flex align-items-center"},[a("div",{staticClass:"car-info--logo"},[a("img",{attrs:{src:e.row.carLogo}})]),t._v(" "),a("div",{staticClass:"car-info--type"},[a("img",{attrs:{src:e.row.carPath}})]),t._v(" "),a("div",{staticClass:"car-info--name"},[t._v(t._s(e.row.carName))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否可预订",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("setSubscribe")(e.row.subscribe)}},[t._v(t._s(1==e.row.subscribe?"可预订":"不可预订"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("setStatus")(e.row.status)}},[t._v(t._s(t._f("getStatusTxt")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"更新时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toDetail(e.row.id)}}},[t._v("查看")]),t._v(" "),1==e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:t.lowerShelf}},[t._v("下架")]):t._e(),t._v(" "),0==e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toDetail(e.row.id)}}},[t._v("审核")]):t._e(),t._v(" "),2==e.row.status||3==e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toDetail(e.row.id)}}},[t._v("编辑")]):t._e()]}}])})],1),t._v(" "),a("el-alert",{staticStyle:{"margin-top":"10px"},attrs:{type:"info",closable:!1}},[a("p",{staticClass:"flex align-items-center"},[a("i",{staticClass:"el-icon-rank",staticStyle:{"margin-right":"10px","font-size":"16px"}}),t._v("消费端仅显示 “已发布” 状态的新车产品。 可通过拖拽表格行，调整新车产品展示顺序。\n\t\t\t")])])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,i,!1,function(t){a("LeMG")},"data-v-455d228a",null);e.default=c.exports}});