webpackJsonp([187],{"4DPI":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{action:{type:String,default:"http://shop.mwt315.com/merchant/goods/ueditor?action=uploadimage&encode=utf-8"},visible:Boolean,multiple:Boolean,limit:{type:Number,default:1},showFileList:Boolean,listType:{type:String,default:""},accept:String,params:{type:Object,default:function(){return{}}},maxSize:{type:[String,Number],default:3},type:{type:String,default:"image"}},data:function(){return{imagesList:[],previewImageDialogVisible:!1,previewImageUrl:""}},methods:{handleImageSuccess:function(e,t,i){this.$emit("on-success",{res:e,file:t,fileList:i})},beforeImageUpload:function(e){if(this.isErrorTxt(e,this.maxSize))return!1},handleImageRemove:function(e,t){this.$emit("on-remove",e)},isErrorTxt:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!("image"!=this.type),a=i?"image/jpg,image/jpeg,image/gif,image/png":"video/mp4,video/ogg,video/flv,video/avi,video/wmv,video/rmvb";if(!(e.type&&a.indexOf(e.type)>-1)){var s=i?"仅支持上传jpg、png和gif格式的图片":"仅支持上传mp4、flv、ogg、avi格式视频";return this.$message.error(s),!0}if(!(e.size/1024/1024<t)){var o=t>=1?t+"M":1e3*t+"K";return this.$message.error("单张图片大小不能超过 "+o+"！"),!0}return!1},uploadVideoProcess:function(e,t,i){console.log(222222)},exceed:function(e,t){return this.$notify({message:"单次批量上次不超过"+this.limit+"个。",type:"warning"})},handlePictureCardPreview:function(e){this.previewImageUrl=e.url,this.previewImageDialogVisible=!0},clearFiles:function(){this.$refs.uploaders.clearFiles()}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-pic"},[i("el-upload",{ref:"uploaders",staticClass:"uploaders",attrs:{multiple:e.multiple,accept:e.accept,action:e.action,"list-type":e.listType,"show-file-list":e.showFileList,limit:e.limit,data:e.params,"on-exceed":e.exceed,"on-preview":e.handlePictureCardPreview,"on-success":e.handleImageSuccess,"before-upload":e.beforeImageUpload,"on-remove":e.handleImageRemove,"on-progress":e.uploadVideoProcess}},[i("div",{staticClass:"uploaders-content flex justify-content-center align-items-center"},[e._t("default",[i("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"16px"}}),e._v("\n                上传图片\n            ")])],2),e._v(" "),i("div",{staticClass:"one-img"},[e.allList.length?i("img",{staticClass:"avatar",attrs:{src:e.allList[0].url}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])])],1)},staticRenderFns:[]};var o=i("VU/8")(a,s,!1,function(e){i("JXkw")},"data-v-3651680b",null);t.default=o.exports},JXkw:function(e,t){}});