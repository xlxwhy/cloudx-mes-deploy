webpackJsonp([128],{Av3e:function(e,i){},FDmI:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={props:{dialog:{type:[Object],default:function(){return{loading:!1,visible:!1,title:"标题",width:"30%"}}},closeConfirm:{type:[Boolean],default:!0}},data:function(){return{}},methods:{handleConfirm:function(){this.$emit("confirm")},handleClose:function(e){var i=this;this.closeConfirm?this.$confirm("确认关闭？").then(function(e){i.dialog.visible=!1,i.$emit("close",e)}).catch(function(e){i.$emit("close",e)}):this.dialog.visible=!1}}},o={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"gtmc-detail-dialog"},[t("el-dialog",{attrs:{title:e.dialog.title,visible:e.dialog.visible,width:e.dialog.width,"before-close":e.handleClose,center:"","append-to-body":""},on:{"update:visible":function(i){return e.$set(e.dialog,"visible",i)}}},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialog.loading,expression:"dialog.loading"}]},[e._t("default")],2),e._v(" "),e._t("footer",[t("el-button",{attrs:{type:"primary"},on:{click:function(i){return e.handleConfirm()}}},[e._v("确 定")]),e._v(" "),t("el-button",{on:{click:function(i){e.dialog.visible=!1}}},[e._v("取 消")])],{slot:"footer"})],2)],1)},staticRenderFns:[]};var l=t("VU/8")(n,o,!1,function(e){t("Av3e")},null,null);i.default=l.exports}});