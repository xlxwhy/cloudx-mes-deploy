webpackJsonp([189],{"4k56":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={props:{label:{type:String,default:"状态"},prop:{type:String,default:""},sortable:{type:Boolean,default:!1},width:{type:String,default:"95"},tags:{type:Object,default:function(){return{}}},tips:{type:String,default:""},icon:{type:String,default:"el-icon-question"}}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("gtmc-table-column",{attrs:{prop:t.prop,label:t.label,sortable:t.sortable,width:t.width,align:"center",tips:t.tips,icon:t.icon},scopedSlots:t._u([{key:"default",fn:function(e){return[t.prop?r("div",{staticClass:"gtmc-table-column-tag"},[t.tags[e.row[t.prop]]?r("el-tag",{attrs:{type:t.tags[e.row[t.prop]].type}},[t._v(t._s(t.tags[e.row[t.prop]].text||t.tags[e.row[t.prop]].label))]):t._e(),t._v(" "),t.tags[e.row[t.prop]]?t._e():r("el-tag",{attrs:{type:"info"}},[t._v("未知状态")])],1):t._t("default",null,{scope:e,row:e.row})]}}])})},staticRenderFns:[]};var l=r("VU/8")(o,a,!1,function(t){r("YJyI")},null,null);e.default=l.exports},YJyI:function(t,e){}});