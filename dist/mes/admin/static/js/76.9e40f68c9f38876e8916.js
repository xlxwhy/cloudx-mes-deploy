webpackJsonp([76,147],{MWMN:function(t,e){},XLj5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={props:{image:{type:[Number,String],default:""},title:{type:[Number,String],default:""},num:{type:[Object],default:function(){return{label:"编号",value:""}}}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xv-goods-card"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:t.$image(t.image)}})]),t._v(" "),a("div",{staticClass:"title"},[t.num&&t.num.value?a("div",{},[a("div",{staticClass:"ellipsis3 "},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),a("div",{staticClass:"ellipsis1 num"},[t._v("\n        "+t._s(t.num.label)+"："+t._s(t.num.value)+"\n      ")])]):a("div",{staticClass:"ellipsis4"},[t._v("\n      "+t._s(t.title)+"\n    ")])])])},staticRenderFns:[]};var n=a("VU/8")(l,s,!1,function(t){a("MWMN")},null,null);e.default=n.exports},xqa0:function(t,e){},ywyc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("XLj5"),s={props:{records:{type:[Array],default:function(){return[]}},border:{type:[Boolean],default:!0}},components:{XvGoodsCard:l.default}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xv-detail-goods-table"},[e("xv-list-table",{attrs:{table:{page:{records:this.records}}},on:{"sort-change":this.$handleQuery}},[e("el-table-column",{attrs:{label:"商品信息"},scopedSlots:this._u([{key:"default",fn:function(t){return[e("xv-goods-card",{attrs:{image:t.row.imagePath,title:t.row.partsGoodsName,num:{label:"编号",value:t.row.partsCode}}})]}}])}),this._v(" "),e("xv-table-column-amount",{attrs:{prop:"srpPrice",label:"SRP价格",width:"100",align:"center"}}),this._v(" "),e("xv-table-column-amount",{attrs:{prop:"salePrice",label:"销售价格",width:"100",align:"center"}}),this._v(" "),e("xv-table-column-amount",{attrs:{prop:"actualPrice",label:"实付价格",tips:"商品实付价格 = 销售价格 - 等比例分摊到该商品的优惠金额",width:"100",align:"center"}}),this._v(" "),e("xv-table-column-quantity",{attrs:{prop:"quantity",label:"数量",width:"100",align:"center"}})],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,n,!1,function(t){a("xqa0")},null,null);e.default=r.exports}});