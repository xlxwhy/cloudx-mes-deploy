webpackJsonp([196],{"5FGX":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{entity:{type:Object,default:function(){return{}}},controller:{type:String,default:""},method:{type:String,default:"delete"},idKey:{type:String,default:"id"},idValue:{type:String,default:"id"},type:{type:String,default:"text"},name:{type:String,default:"删除"},success:{type:Function},error:{type:Function},target:{type:String,default:"数据"}},data:function(){return{loading:!1,visible:!1}},methods:{handleDelete:function(){this.visible=!0},handleConfirm:function(){var t=this;this.loading=!0;var e=this.$api[this.controller][this.method],n={path:{}};n.path[this.idKey]=this.idValue,e.call(null,n).then(function(e){t.loading=!1,t.visible=!1,t.$message({type:"success",message:"删除成功!"}),t.success&&t.success()}).catch(function(e){t.loading=!1,t.error&&t.error()})},handleClose:function(){this.$message({type:"info",message:"已取消删除"}),this.visible=!1}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$showAuthElement()?n("div",{staticClass:"gtmc-button-text-delete"},[n("el-button",{attrs:{type:t.type},on:{click:function(e){return t.handleDelete()}}},[t._v(t._s(t.name))]),t._v(" "),n("el-dialog",{attrs:{title:"删除"+t.target,visible:t.visible,width:"500px","before-close":t.handleClose,center:"","append-to-body":""},on:{"update:visible":function(e){t.visible=e}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"gtmc-button-text-delete__content"},[t._t("default",[t._v("\n        确定要删除"+t._s(t.target)+"吗？"),n("br"),t._v("\n        删除的数据将无法找回，请谨慎操作。\n      ")])],2),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:function(e){return t.handleConfirm()}}},[t._v("删除")]),t._v(" "),n("el-button",{attrs:{disabled:t.loading},on:{click:function(e){return t.handleClose()}}},[t._v("暂不删除")])],1)])],1):t._e()},staticRenderFns:[]};var s=n("VU/8")(i,l,!1,function(t){n("JHSs")},null,null);e.default=s.exports},JHSs:function(t,e){}});