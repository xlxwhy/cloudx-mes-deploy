webpackJsonp([163],{LP4P:function(t,e){},Xzvv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{name:{type:String,default:"返回列表"},target:{type:String,default:"列表"},close:{type:Boolean,default:!0}},data:function(){return{loading:!1,visible:!1}},methods:{click:function(){this.visible=!0},handleConfirm:function(){this.close&&this.$closeTagView(),this.$emit("click"),this.visible=!1},handleClose:function(){this.visible=!1}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gtmc-button-return-panel"},[t.$showAuthElement()?n("el-button",{staticClass:"gtmc-button-return",attrs:{type:"primary",plain:""},on:{click:function(e){return t.click()}}},[t._v(t._s(t.name))]):t._e(),t._v(" "),n("el-dialog",{attrs:{title:"温馨提示",visible:t.visible,"before-close":t.handleClose,width:"500px",center:"","append-to-body":""},on:{"update:visible":function(e){t.visible=e}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"gtmc-button-return-panel__content"},[t._t("default",[t._v("\n        您所编辑的内容将丢失！是否继续取消？\n      ")])],2),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:function(e){return t.handleConfirm()}}},[t._v("继续取消")]),t._v(" "),n("el-button",{attrs:{disabled:t.loading},on:{click:function(e){return t.handleClose()}}},[t._v("暂不取消")])],1)])],1)},staticRenderFns:[]};var o=n("VU/8")(i,l,!1,function(t){n("LP4P")},null,null);e.default=o.exports}});