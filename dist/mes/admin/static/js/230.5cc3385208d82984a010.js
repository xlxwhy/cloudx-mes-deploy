webpackJsonp([230],{"CDS/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("neUy"),n={props:{name:{type:String,default:"上传"},action:{type:String,default:"/"},maxSize:{type:[String,Number],default:5120},message:{type:[String,Number],default:""},icon:{type:[String,Number],default:"el-icon-upload2"},headers:{type:[Object],default:function(){return{}}},accept:{type:[String],default:"application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}},methods:{handleSuccess:function(e,t){this.$message.success(this.message),this.$emit("success",e,t)},handleBeforeUpload:function(e){console.log(e.type),console.log(this.accept);var t=this.checkFileType(e),s=this.checkFileSize(e),n=Object(i.c)();n&&(this.headers.Authorization=n);var a=t&&s;return this.$emit("before",a,e),a},checkFileType:function(e){var t=this.accept.split(",").indexOf(e.type)>=0;return t||(this.$message.error("仅支持 xls、xlsx 的文件类型!"),!1)},checkFileSize:function(e){if(!this.maxSize)return!0;var t=e.size/1024<=this.maxSize;return t||(this.$message.error("文件大小不能超过"+this.getSizeMessage(this.maxSize)+"!"),!1)},getSizeMessage:function(e){if(!e)return"";return e<1024?e+"KB":Nubmer(e/1024).toFixed(0)+"MB"}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.$showAuthElement()?s("el-upload",{attrs:{accept:e.accept,headers:e.headers,action:e.action,"show-file-list":!1,"on-success":e.handleSuccess,"before-upload":e.handleBeforeUpload}},[s("el-button",{attrs:{type:"primary",icon:e.icon}},[e._v(e._s(e.name))])],1):e._e()},staticRenderFns:[]},r=s("VU/8")(n,a,!1,null,null,null);t.default=r.exports}});