webpackJsonp([204],{PFIe:function(e,t){},VLSl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={props:{entity:{type:Object,default:function(){return{}}},name:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:""}},data:function(){return{}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xv-field-input  gtmc-field"},[e.label?n("div",{staticClass:"xv-field-input__label  gtmc-field-label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),n("el-input",{attrs:{placeholder:e.placeholder},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("done")}},model:{value:e.entity[e.name],callback:function(t){e.$set(e.entity,e.name,"string"==typeof t?t.trim():t)},expression:"entity[name]"}})],1)},staticRenderFns:[]};var a=n("VU/8")(l,i,!1,function(e){n("PFIe")},null,null);t.default=a.exports}});