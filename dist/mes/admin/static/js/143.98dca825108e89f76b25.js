webpackJsonp([143],{GeCm:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{index:Number,model:Object,rules:Object,disabled:Boolean},data:function(){return{}},methods:{toDetail:function(){}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.model?l("div",[l("el-table",{staticClass:"spartsTable",attrs:{data:e.model.list[e.index].manItemParts,border:""}},[l("el-table-column",{attrs:{label:"零配件名称",align:"center",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-form-item",{attrs:{prop:"list["+e.index+"].manItemParts."+t.$index+".partsName",rules:e.$rule.name("输入框",null,32),"label-width":"auto"}},[e.disabled?l("span",[e._v(e._s(t.row.partsName))]):l("el-input",{staticStyle:{width:"220px"},model:{value:t.row.partsName,callback:function(l){e.$set(t.row,"partsName",l)},expression:"scope.row.partsName"}})],1)]}}],null,!1,1918401349)}),e._v(" "),l("el-table-column",{attrs:{prop:"partsCode",label:"零配件编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"partsTypeName",label:"所属品类",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"SRP价格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                ￥"+e._s(t.row.suggestPrice)+"\n            ")]}}],null,!1,3932222481)}),e._v(" "),l("el-table-column",{attrs:{prop:"useQuantity",label:"建议用量(件)",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"* 商品价格",align:"center",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-form-item",{attrs:{prop:"list["+e.index+"].manItemParts."+t.$index+".salePrice",rules:e.$rule.price("价格",.01,999999,!0,function(){return t.row.salePrice})}},[l("el-input",{class:{disabled:e.disabled},staticStyle:{width:"220px"},attrs:{disabled:e.disabled,placeholder:"请输入价格"},model:{value:t.row.salePrice,callback:function(l){e.$set(t.row,"salePrice",l)},expression:"scope.row.salePrice"}},[l("template",{slot:"prepend"},[e._v("￥")])],2)],1)]}}],null,!1,3495748076)})],1)],1):e._e()},staticRenderFns:[]};var n=l("VU/8")(a,r,!1,function(e){l("O1qp")},"data-v-82321f3c",null);t.default=n.exports},O1qp:function(e,t){}});