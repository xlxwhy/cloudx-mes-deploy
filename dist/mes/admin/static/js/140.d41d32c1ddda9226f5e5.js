webpackJsonp([140],{nlJy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={props:{label:{type:String,default:"图片"},prop:{type:String,default:""},sortable:{type:Boolean,default:!1},width:{type:String,default:"100"},height:{type:String,default:"100"},align:{type:String,default:"left"},tips:{type:String,default:""},icon:{type:String,default:"el-icon-question"}},methods:{getStyle:function(){var t="";return this.width&&(t+="max-width:"+this.width+"px;"),this.height&&(t+="max-height:"+this.height+"px;"),t}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("gtmc-table-column",{attrs:{prop:t.prop,label:t.label,sortable:t.sortable,width:parseInt(t.width)+20,"show-overflow-tooltip":!0,align:t.align,tips:t.tips,icon:t.icon},scopedSlots:t._u([{key:"default",fn:function(e){return[t.prop?i("div",{staticClass:"image"},[i("img",{style:t.getStyle(),attrs:{src:t.$image(e.row[t.prop])}})]):t._t("default",null,{scope:e,row:e.row})]}}])})},staticRenderFns:[]};var n=i("VU/8")(l,r,!1,function(t){i("rONT")},"data-v-87cf4ca6",null);e.default=n.exports},rONT:function(t,e){}});