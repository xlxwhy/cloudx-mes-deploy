webpackJsonp([168],{"3LHv":function(t,s){},TQtp:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"goods-audit flex column align-items-center"},[t._m(0),t._v(" "),i("div",{staticClass:"goods-audit--tip"},[t._v("\n        您可以继续 \n        "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:t.toAdd}},[t._v("发布虚拟商品")]),t._v("，\n        或者\n        "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:t.toList}},[t._v("返回虚拟商品列表")]),t._v("\n        查看状态。\n    ")],1),t._v(" "),i("div",{staticClass:"goods-audit--foot"},[i("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.toAdd}},[t._v("发布虚拟商品")]),t._v(" "),i("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"large"},on:{click:t.toList}},[t._v("返回虚拟商品列表")])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-audit--head flex align-items-center"},[s("i",{staticClass:"el-icon-success icon-plus"}),this._v(" "),s("div",{staticClass:"txt"},[s("p",[this._v("恭喜您，虚拟商品已提交成功！")]),this._v(" "),s("p",[this._v("请关注审核结果。")])])])}]};var n=i("VU/8")({data:function(){return{}},methods:{toAdd:function(){this.$emit("reset")},toList:function(){this.$closeTagView(),this.link("goods-virtual-list")}}},e,!1,function(t){i("3LHv")},"data-v-57a170a1",null);s.default=n.exports}});