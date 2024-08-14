webpackJsonp([158],{"8A1S":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("BO1k"),r=o.n(n),i=o("Gu7T"),a=o.n(i),s={data:function(){var t=this;return{loading:!1,form:{temp:{password:""},entity:{name:"",mobile:"",username:"",phoneNumber:"",positionId:"",organizationId:"",password:"",checkPass:"",status:!0},rules:{username:this.$rule.name("登录名",null,32),name:this.$rule.name("用户姓名",null,32),phoneNumber:this.$rule.mobile("手机号"),password:this.$rule.password("密码",null,32),checkPass:[].concat(a()(this.$rule.password("确认密码",null,32)),a()(this.$rule.equals(function(){return t.form.entity.password},"两次输入的密码不相同"))),positionId:this.$rule.requireds("请选择所属职位"),organizationId:this.$rule.requireds("请选择所属机构")}},organizationValues:[],organizationOptions:[],positionOptions:{adapter:function(t){return{label:t.name,value:t.positionId}},values:[]},roles:[]}},components:{},computed:{password:function(){return this.form.entity.password}},created:function(){this.loadOrganizationOptions(),this.loadPositionOptions(),this.loadUser()},watch:{"form.entity.organizationId":{handler:function(t,e){this.handlerChangeOrganizationId(t)},deep:!0}},methods:{getPasswordValue:function(){return this.form.entity.password},handleSave:function(){var t=this,e=this.form.entity.userId,o={body:this.$lodash.pick(this.form.entity,"name","phoneNumber","userId","username","positionId","organizationId","password","status"),next:"system-user-list"};this.form.entity.password==this.form.temp.password&&(o.body.password=null),console.log(this.form),console.log(o);var n=this.$api.UserController;this.loading=!0,this.$invokeSave(o,"userId",n.add,n.modify,function(o){t.loading=!1,t.$checkResNotNull(o)&&(console.log(o.body),e||(t.form.entity.userId=o.body),t.form.temp.password=t.form.entity.password)}).catch(function(e){t.loading=!1})},toOrganizationTree:function(t,e){var o=!0,n=!1,i=void 0;try{for(var a,s=r()(t);!(o=(a=s.next()).done);o=!0){var l=a.value;l.label=l.name,l.value=l.organizationId,l.children=l.childrenOrg,l.parent=e,l.childrenOrg&&l.childrenOrg.length>0&&this.toOrganizationTree(l.childrenOrg,l)}}catch(t){n=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(n)throw i}}return t},handlerChangeOrganizationId:function(t){if(t){for(var e=this.getOrgById(this.organizationOptions,t),o=[t];e&&e.parent;)o.splice(0,0,e.parent.organizationId),e=e.parent;this.organizationValues=o}},getOrgById:function(t,e){var o=null,n=!0,i=!1,a=void 0;try{for(var s,l=r()(t);!(n=(s=l.next()).done);n=!0){var d=s.value;if(e==d.organizationId){o=d;break}if(d.childrenOrg&&d.childrenOrg.length>0&&null!=(o=this.getOrgById(d.childrenOrg,e)))break}}catch(t){i=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw a}}return o},handleOrganizationChange:function(t){this.form.entity.organizationId=t[t.length-1]},handlePositionChange:function(t){var e=this,o={path:{positionId:t}};this.$api.PositionController.getRole(o,function(t){console.log(t),t.body&&(e.roles=t.body)})},loadOrganizationOptions:function(){var t=this;this.$api.OrganizationController.getTreeList({query:{status:!0}},function(e){console.log(e),e&&e.body&&(t.organizationOptions=t.toOrganizationTree(e.body),t.handlerChangeOrganizationId(t.form.entity.organizationId))})},loadPositionOptions:function(){var t=this;this.$api.PositionController.list({query:{status:!0}},function(e){e.body&&(t.positionOptions.values=e.body)})},loadUser:function(){var t=this;this.loading=!0,this.loadEntity(this.$api.UserController.get,"userId",function(e){t.loading=!1,t.$checkResNotNull(e,!0)&&(console.log(e.body),e.body.checkPass=e.body.password,t.form.entity=e.body,t.form.temp.password=t.form.entity.password,e.body.positionId&&t.handlePositionChange(e.body.positionId))})}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-detail"},[o("xv-detail",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[o("div",{staticClass:"user-detail__title"},[t._v("用户详情信息")]),t._v(" "),o("el-form",{ref:"form",attrs:{model:t.form.entity,rules:t.form.rules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"登录名",prop:"username",required:""}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"请输入不超过32个字符的登录名"},model:{value:t.form.entity.username,callback:function(e){t.$set(t.form.entity,"username","string"==typeof e?e.trim():e)},expression:"form.entity.username"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"用户姓名",prop:"name",required:""}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"请输入不超过32个字符用户姓名"},model:{value:t.form.entity.name,callback:function(e){t.$set(t.form.entity,"name","string"==typeof e?e.trim():e)},expression:"form.entity.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"手机号",prop:"phoneNumber",required:""}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"请输入11位手机号"},model:{value:t.form.entity.phoneNumber,callback:function(e){t.$set(t.form.entity,"phoneNumber","string"==typeof e?e.trim():e)},expression:"form.entity.phoneNumber"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"密码",prop:"password",required:""}},[o("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入不超过32字符的密码"},model:{value:t.form.entity.password,callback:function(e){t.$set(t.form.entity,"password","string"==typeof e?e.trim():e)},expression:"form.entity.password"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"确认密码",prop:"checkPass",required:""}},[o("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入不超过32字符的确认密码"},model:{value:t.form.entity.checkPass,callback:function(e){t.$set(t.form.entity,"checkPass","string"==typeof e?e.trim():e)},expression:"form.entity.checkPass"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"所属机构",prop:"organizationId",required:""}},[o("el-cascader",{attrs:{options:t.organizationOptions,"change-on-select":"",placeholder:"请选择所属机构"},on:{change:t.handleOrganizationChange},model:{value:t.organizationValues,callback:function(e){t.organizationValues=e},expression:"organizationValues"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"所属职位",prop:"positionId",required:""}},[o("xv-field-select",{attrs:{entity:t.form.entity,name:"positionId",label:"",options:t.positionOptions,placeholder:"请选择所属职位"},on:{change:t.handlePositionChange}})],1),t._v(" "),o("el-form-item",{attrs:{label:"相应角色",prop:"role"}},[o("div",{staticClass:"role-panel"},[t._l(t.roles,function(e,n){return o("el-tag",{key:n,attrs:{type:"info"}},[t._v(t._s(e.name))])}),t._v(" "),t.roles&&0!=t.roles.length?t._e():o("span",[t._v("没有找到相应的角色")])],2)]),t._v(" "),o("el-form-item",{attrs:{label:"用户状态",prop:"status"}},[o("el-switch",{model:{value:t.form.entity.status,callback:function(e){t.$set(t.form.entity,"status",e)},expression:"form.entity.status"}})],1)],1),t._v(" "),o("div",{attrs:{slot:"button"},slot:"button"},[o("xv-button-save",{attrs:{name:"保存"},on:{click:function(e){return t.$handleFormValidate("form",t.handleSave)}}}),t._v(" "),o("xv-button-return",{attrs:{name:"取消"},on:{click:function(e){return t.link("system-user-list")}}})],1)],1)],1)},staticRenderFns:[]};var d=o("VU/8")(s,l,!1,function(t){o("UVlo")},null,null);e.default=d.exports},UVlo:function(t,e){}});