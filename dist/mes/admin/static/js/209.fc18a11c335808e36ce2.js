webpackJsonp([209],{"/ocw":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{label:{type:String,default:"文本内容"},prop:{type:String,default:"name"},sortable:{type:Boolean,default:!1},width:{type:[String,Number],default:""},align:{type:String,default:"center"},tips:{type:String,default:""},icon:{type:String,default:"el-icon-question"},resizable:{type:Boolean,default:!1}}},o={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-table-column",{attrs:{prop:t.prop,resizable:t.resizable,sortable:!!t.sortable&&"custom",width:t.width,"show-overflow-tooltip":!0,align:t.align},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{scope:e,row:e.row})]}}],null,!0)},[l("template",{slot:"header"},[t.tips?l("span",{staticClass:"tooltip-header"},[t._v("\n      "+t._s(t.label)+"\n      "),l("el-tooltip",{attrs:{effect:"Light",placement:"top"}},[l("div",{staticClass:"tooltip-header-content",attrs:{slot:"content"},domProps:{innerHTML:t._s(t.tips)},slot:"content"}),t._v(" "),l("i",{staticClass:"el-icon-question"})])],1):l("span",[t._v("\n      "+t._s(t.label)+"\n    ")])])],2)},staticRenderFns:[]};var a=l("VU/8")(n,o,!1,function(t){l("4Dx2")},"data-v-1f870395",null);e.default=a.exports},"4Dx2":function(t,e){}});