webpackJsonp([170],{"326h":function(e,t){},kN6P:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("bOdI"),l=s.n(a),o=(s("rddR"),{data:function(){var e;return{form:(e={name:"良山伯",mobile:"",username:"admin"},l()(e,"mobile","15812187576"),l()(e,"delivery",!1),l()(e,"type",[]),l()(e,"resource",""),l()(e,"desc",""),l()(e,"pass","12345645"),l()(e,"checkPass",""),l()(e,"age",""),l()(e,"status",!0),e)}},components:{},mounted:function(){},methods:{closePage:function(){this.$router.push({name:"system-user-list"})}}}),r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-detail"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"user-detail__title"},[e._v("用户详情信息")]),e._v(" "),s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"登录名"}},[s("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户姓名"}},[s("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机号"}},[s("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass",t)},expression:"form.checkPass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户状态",prop:"delivery"}},[s("el-switch",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),e._v(" "),s("div",{staticClass:"user-detail__line"}),e._v(" "),s("div",{staticClass:"user-detail__buttons"},[s("el-button",{attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),s("el-button",{attrs:{plain:""},on:{click:e.closePage}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var n=s("VU/8")(o,r,!1,function(e){s("326h")},null,null);t.default=n.exports}});