webpackJsonp([150],{W6M0:function(t,e){},reDB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("X7/f");var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"adv-setup"},[a("div",{staticClass:"adv-setup__head"},[t._v("预约看车页广告位设置")]),t._v(" "),a("div",{staticClass:"adv-setup__content"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"链接图片"}},[a("el-upload",{staticClass:"img-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.form.carLogo?a("img",{staticClass:"img-uploader--pic",attrs:{src:t.form.carLogo}}):a("div",{staticClass:"add-img flex align-items-center justify-content-center"},[a("i",{staticClass:"el-icon-plus"}),t._v("添加图片")])]),t._v(" "),a("el-alert",{attrs:{type:"warning",title:"建议尺寸为690*140像素，大小不超过3Mb",closable:!1}})],1),t._v(" "),a("el-form-item",{attrs:{label:"链接地址"}},[a("el-input",{model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"car-detail--btn flex justify-content-center"},[a("el-button",{attrs:{type:"primary",size:"large",plain:""}},[t._v("保存")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"large"}},[t._v("取消")])],1)])],1)],1)])])},staticRenderFns:[]};var l=a("VU/8")({data:function(){return{form:{link:"http://www.action/H5/presale/3253?id=3556&code=23235",carLogo:""}}},methods:{beforeAvatarUpload:function(){},handleAvatarSuccess:function(){}}},s,!1,function(t){a("W6M0")},"data-v-7a4d1da0",null);e.default=l.exports}});