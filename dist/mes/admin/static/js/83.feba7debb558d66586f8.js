webpackJsonp([83,184],{BSxj:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{label:{type:String,default:"文本内容"},prop:{type:String,default:"name"},sortable:{type:Boolean,default:!1},width:{type:[String,Number],default:""},align:{type:String,default:"center"},tips:{type:String,default:""},icon:{type:String,default:"el-icon-question"},resizable:{type:Boolean,default:!1}}},a={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-table-column",{attrs:{prop:t.prop,resizable:t.resizable,sortable:!!t.sortable&&"custom",width:t.width,"show-overflow-tooltip":!0,align:t.align},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{scope:e,row:e.row})]}}],null,!0)},[l("template",{slot:"header"},[t.tips?l("span",{staticClass:"tooltip-header"},[t._v("\n      "+t._s(t.label)+"\n      "),l("el-tooltip",{attrs:{effect:"Light",placement:"top"}},[l("div",{staticClass:"tooltip-header-content",attrs:{slot:"content"},domProps:{innerHTML:t._s(t.tips)},slot:"content"}),t._v(" "),l("i",{staticClass:"el-icon-question"})])],1):l("span",[t._v("\n      "+t._s(t.label)+"\n    ")])])],2)},staticRenderFns:[]};var o=l("VU/8")(n,a,!1,function(t){l("HSyO")},"data-v-20395a51",null);e.default=o.exports},HSyO:function(t,e){},OrFi:function(t,e){},ZoJa:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l("BSxj"),a={props:{label:{type:String,default:"文本内容"},prop:{type:String,default:""},sortable:{type:Boolean,default:!1},width:{type:String,default:""},align:{type:String,default:"center"},className:{type:String,default:"normal black"},fixed:{type:[Number,String],default:"2"},tips:{type:String,default:""},icon:{type:String,default:"el-icon-question"}},components:{GtmcTableColumn:n.default}},o={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("gtmc-table-column",{attrs:{prop:t.prop,label:t.label,sortable:t.sortable,width:t.width,align:t.align,"show-overflow-tooltip":!0,tips:t.tips,icon:t.icon},scopedSlots:t._u([{key:"default",fn:function(e){return[t.prop?l("gtmc-amount",{attrs:{value:e.row[t.prop],className:t.className}}):t._t("default",null,{scope:e,row:e.row})]}}])})},staticRenderFns:[]};var r=l("VU/8")(a,o,!1,function(t){l("OrFi")},"data-v-64d00e9c",null);e.default=r.exports}});