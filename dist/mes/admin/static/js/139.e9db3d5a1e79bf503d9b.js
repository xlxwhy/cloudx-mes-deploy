webpackJsonp([139],{tqrt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Lokx"),l=a.n(n),r=(a("X7/f"),{components:{Sortable:l.a},data:function(){return{loading:!1,list:[{id:1,path:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",link:"http://www.newcar/325353",time:""},{id:2,path:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",link:"http://www.newcar/325353",time:""},{id:3,path:"https://jjdf.geekd.cn/program/myt/assets/cartype_bg.jpg",link:"http://www.newcar/325353",time:""}],form:{name:""}}},mounted:function(){this.rowDrop()},methods:{rowDrop:function(){var t=document.querySelector(".el-table__body-wrapper tbody");l.a.create(t,{onEnd:function(t){var e=t.newIndex,a=t.oldIndex;console.log(e,a)}})},del:function(t){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).catch(function(t){})}}}),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"adv-setup-detail"},[a("div",{staticClass:"adv-setup-detail__head"},[t._v("轮播图详情")]),t._v(" "),a("div",{staticClass:"adv-setup-detail__content"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"* 轮播图名称"}},[a("el-input",{attrs:{placeholder:"标识轮播图的作用，不在页面显示"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("div",{staticStyle:{margin:"20px 0"}},[a("el-button",{attrs:{size:"large",type:"primary",plain:""}},[t._v("+ 添加图片")])],1),t._v(" "),a("el-alert",{attrs:{type:"warning",closable:!1}},[a("p",[t._v("建议尺寸为750*200像素，大小不超过3Mb")])]),t._v(" "),a("div",{staticClass:"advert-list"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"advert-table",staticStyle:{width:"100%"},attrs:{"row-key":"id",data:t.list,border:""}},[a("el-table-column",{attrs:{type:"index",label:"排序",width:"50px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"图片",align:"center",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"imgs flex align-items-center justify-content-center"},[a("img",{attrs:{src:t.row.path}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"*链接地址",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.link,callback:function(a){t.$set(e.row,"link",a)},expression:"scope.row.link"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"txt",label:"* 展示时段",align:"center",width:"440px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.row.time,callback:function(a){t.$set(e.row,"time",a)},expression:"scope.row.time"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"large"},on:{click:function(a){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-alert",{staticStyle:{"margin-top":"10px"},attrs:{type:"info",closable:!1}},[a("p",{staticClass:"flex align-items-center"},[a("i",{staticClass:"el-icon-rank",staticStyle:{"margin-right":"10px","font-size":"16px"}}),t._v("可通过拖拽表格行，调整轮播图展示顺序。\n                        ")])])],1)],1),t._v(" "),a("div",{staticClass:"adv-setup-detail__footer flex justify-content-center"},[a("el-button",{attrs:{type:"primary",size:"large",plain:""}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"large"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")])],1)])])},staticRenderFns:[]};var s=a("VU/8")(r,i,!1,function(t){a("xcsN")},"data-v-8f9d5dfa",null);e.default=s.exports},xcsN:function(t,e){}});