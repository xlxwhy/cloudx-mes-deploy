webpackJsonp([118],{D1Ww:function(e,t){},zMtP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={props:{spans:{type:Array,default:function(){return[1,1]}},value:{type:[String],default:""},clazz:{type:[String],default:""},type:{type:[String],default:""},needColon:{type:Boolean,default:!0}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",{staticClass:" attribute-cell ",class:"display-"+e.spans[0]+"-"+e.spans[1],attrs:{rowspan:e.spans[0],colspan:e.spans[1]}},["IMAGE"==e.type?a("div",{class:e.clazz},[a("img",{attrs:{src:e.value}}),e._v(" "),e._t("default")],2):e._e(),e._v(" "),e.type&&"TEXT"!=e.type?e._e():a("div",{class:e.clazz},[a("span",[e._v(e._s(e.value))]),e.needColon?a("span",[a("strong",[e._v("：")])]):e._e(),e._v(" "),e._t("default")],2),e._v(" "),0==e.type.indexOf("TAG-")?a("div",{class:e.clazz},[a("el-tag",{attrs:{type:e.type.replace("TAG-","").toLowerCase()}},[e._v(e._s(e.value))]),e._v(" "),e._t("default")],2):e._e()])},staticRenderFns:[]};var n=a("VU/8")(s,l,!1,function(e){a("D1Ww")},null,null);t.default=n.exports}});