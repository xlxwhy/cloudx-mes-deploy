webpackJsonp([204],{Kbk1:function(t,e){},pRdk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BO1k"),o=a.n(i),n={data:function(){var t=this;return{loading:!1,form:{itemId:"",name:"",iconPath:"",description:"",tipsPaths:"",funcIconPaths:[]},formRules:{name:this.$rule.name("保养项名称",null,10),funcIconPaths:this.$rule.funcArrays(function(){return t.uploader.iconPaths},"请选择保养项图标"),description:this.$rule.lengths("保养项说明",null,32)},uploader:{iconPaths:[],tipsPaths:[]}}},created:function(){var t=this;this.loading=!0,this.loadEntity(this.$api.ItemController.get,"itemId",function(e){t.loading=!1,e&&e.body&&(console.log(e.body),t.form=e.body,t.uploader.iconPaths=t.$gtmc.parseImagePaths(t.form.iconPath),t.uploader.tipsPaths=t.$gtmc.parseImagePaths(t.form.tipsPaths,!0),t.form.funcIconPaths=t.uploader.iconPaths,console.log(t.uploader))})},methods:{handlerIconPathsChange:function(t){this.form.funcIconPaths=t,this.$refs.form.validateField("funcIconPaths")},buildEntity:function(){var t=[],e=!0,a=!1,i=void 0;try{for(var n,r=o()(this.uploader.tipsPaths);!(e=(n=r.next()).done);e=!0){var l=n.value;t.push(l.url)}}catch(t){a=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw i}}return{itemId:this.form.itemId,name:this.form.name,iconPath:this.uploader.iconPaths[0].url,description:this.form.description,tipsPaths:t}},handleSave:function(){var t=this,e={body:this.buildEntity(),next:"basic-maintain-item-list"},a=this.$api.ItemController,i=e.body.itemId;this.loading=!0,this.$invokeSave(e,"itemId",a.add,a.modify,function(e){t.loading=!1,console.log(e.body),i||(t.form.itemId=e.body)}).catch(function(e){t.loading=!1})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-maintain-item-detail"},[a("xv-detail",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("xv-block",{attrs:{title:"保养项详情"}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"保养项名称",prop:"name",required:""}},[a("el-input",{attrs:{placeholder:"不超过10个字符"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"保养项图标",prop:"funcIconPaths",required:""}},[a("xv-upload",{ref:"uploader",attrs:{limit:1,width:80,height:80},on:{change:t.handlerIconPathsChange},model:{value:t.uploader.iconPaths,callback:function(e){t.$set(t.uploader,"iconPaths",e)},expression:"uploader.iconPaths"}}),t._v(" "),a("el-alert",{staticClass:"form-tip",attrs:{type:"warning",title:"尺寸为80*80像素，大小不超过5M",closable:!1}})],1),t._v(" "),a("el-form-item",{attrs:{label:"保养项说明",prop:"description"}},[a("el-input",{attrs:{type:"textarea",rows:"4",placeholder:"描述保养项内容，消费端不展示，不超过32个字符"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description","string"==typeof e?e.trim():e)},expression:"form.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"保养项小贴士"}},[a("xv-upload",{ref:"uploader",attrs:{limit:1e3,multiple:"","max-size":5,width:750},model:{value:t.uploader.tipsPaths,callback:function(e){t.$set(t.uploader,"tipsPaths",e)},expression:"uploader.tipsPaths"}}),t._v(" "),a("el-alert",{staticClass:"form-tip",attrs:{type:"warning",title:"图片宽度为750像素，大小不超过5M",closable:!1}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"button"},slot:"button"},[a("xv-button-save",{attrs:{name:"保存"},on:{click:function(e){return t.$handleFormValidate("form",t.handleSave)}}}),t._v(" "),a("xv-button-return",{attrs:{name:"取消"},on:{click:function(e){return t.link("basic-maintain-item-list")}}})],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,r,!1,function(t){a("Kbk1")},null,null);e.default=l.exports}});