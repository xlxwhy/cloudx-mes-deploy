webpackJsonp([125],{"5FGX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:{entity:{type:Object,default:function(){return{}}},controller:{type:String,default:""},method:{type:String,default:"delete"},idKey:{type:String,default:"id"},idValue:{type:[String,Number],default:"id"},type:{type:String,default:"text"},name:{type:String,default:"删除"},success:{type:Function},error:{type:Function},target:{type:String,default:"数据"}},data:function(){return{loading:!1,visible:!1}},methods:{handleDelete:function(){this.visible=!0},handleConfirm:function(){var e=this;this.loading=!0;var t=this.$api[this.controller][this.method],n={path:{},query:{}};n.path[this.idKey]=this.idValue,n.query[this.idKey]=this.idValue,console.log("delete before",t),t.call(null,n).then(function(t){console.log("delete",t),e.loading=!1,e.visible=!1,e.$message({type:"success",message:"删除成功!"}),e.success&&e.success()}).catch(function(t){console.log("delete error",t),e.loading=!1,e.error&&e.error()})},handleClose:function(){this.$message({type:"info",message:"已取消删除"}),this.visible=!1}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$showAuthElement()?n("div",{staticClass:"xv-button-text-delete"},[n("el-button",{attrs:{type:e.type},on:{click:function(t){return e.handleDelete()}}},[e._v(e._s(e.name))]),e._v(" "),n("el-dialog",{attrs:{title:"删除"+e.target,visible:e.visible,width:"500px","before-close":e.handleClose,center:"","append-to-body":""},on:{"update:visible":function(t){e.visible=t}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"xv-button-text-delete__content"},[e._t("default",[e._v("\n        确定要删除"+e._s(e.target)+"吗？"),n("br"),e._v("\n        删除的数据将无法找回，请谨慎操作。\n      ")])],2),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:function(t){return e.handleConfirm()}}},[e._v("删除")]),e._v(" "),n("el-button",{attrs:{disabled:e.loading},on:{click:function(t){return e.handleClose()}}},[e._v("暂不删除")])],1)])],1):e._e()},staticRenderFns:[]};var o=n("VU/8")(i,l,!1,function(e){n("XhGR")},null,null);t.default=o.exports},XhGR:function(e,t){}});