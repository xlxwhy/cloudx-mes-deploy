webpackJsonp([129],{"+0yX":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={props:{row:{type:Object,default:function(){return{maintainItemDetails:[]}}}},data:function(){return{firstParts:{},moreParts:[]}},components:{},created:function(){this.row.matItemParts&&this.row.matItemParts.length>0&&(this.initFirstParts(),this.initMoreParts())},methods:{getRowspan:function(){return this.row.matItemParts?this.row.matItemParts.length:1},initFirstParts:function(){this.firstParts=this.row.matItemParts[0]},initMoreParts:function(){this.row.matItemParts.length>1?this.moreParts=this.row.matItemParts.slice(1):this.moreParts=[]}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("gtmc-table-body",{staticClass:"gtmc-order-detail-maintain-item-row"},[s("gtmc-table-line",[s("td",{attrs:{rowspan:t.getRowspan()}},[s("div",{staticClass:"maintain-item"},[s("div",[s("img",{attrs:{src:t.$image(t.row.iconPath),width:"50",height:"50"}})]),t._v(" "),s("div",[t._v(" "+t._s(t.row.itemName))])])]),t._v(" "),s("td",[s("div",{staticClass:"maintain-parts"},[s("div",[t._v(" "+t._s(t.firstParts.partsName)+" ")]),t._v(" "),s("div",[t._v(" 零件编号："+t._s(t.firstParts.partsCode)+" ")])])]),t._v(" "),s("td",[s("gtmc-amount",{attrs:{value:t.firstParts.suggestPrice}})],1),t._v(" "),s("td",[s("gtmc-amount",{attrs:{value:t.firstParts.salePrice}})],1),t._v(" "),s("td",[s("gtmc-amount",{attrs:{value:t.firstParts.actualPrice}})],1),t._v(" "),s("td",[t._v("\n      x "+t._s(t.firstParts.useQuantity)+"\n    ")])]),t._v(" "),t._l(t.moreParts,function(a,r){return s("gtmc-table-line",{key:r},[s("td",{staticClass:"maintain-parts-cell"},[s("div",{staticClass:"maintain-parts"},[s("div",[t._v(" "+t._s(a.partsName)+" ")]),t._v(" "),s("div",[t._v(" 零件编号："+t._s(a.partsCode)+" ")])])]),t._v(" "),s("td",[s("gtmc-amount",{attrs:{value:a.suggestPrice}})],1),t._v(" "),s("td",[s("gtmc-amount",{attrs:{value:a.salePrice}})],1),t._v(" "),s("td",[s("gtmc-amount",{attrs:{value:a.actualPrice}})],1),t._v(" "),s("td",[t._v("\n      x "+t._s(a.useQuantity)+"\n    ")])])})],2)},staticRenderFns:[]};var e=s("VU/8")(r,i,!1,function(t){s("+UVV")},null,null);a.default=e.exports},"+UVV":function(t,a){}});