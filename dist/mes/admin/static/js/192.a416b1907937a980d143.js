webpackJsonp([192],{P3j1:function(e,t){},fmiJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{entity:{type:Object,default:function(){return{}}},name:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:""},multiple:{type:Boolean,default:!1},options:{type:Object,default:function(){return{adapter:function(e){return e},values:[]}}}},data:function(){return{newValues:[]}},watch:{"options.values":{handler:function(e,t){this.translation(e)},deep:!0}},created:function(){this.newValues=this.$gtmc.translate(this.options.values,this.options.adapter)},methods:{translation:function(e){var t=this;e&&(this.options.adapter?e.forEach(function(e){t.newValues.push(t.options.adapter(e))}):this.newValues=e)},handleChange:function(e){this.$emit("change",e)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xv-field-select gtmc-field"},[e.label?n("div",{staticClass:"xv-field-select__label  gtmc-field-label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),n("el-select",{attrs:{placeholder:e.placeholder,multiple:e.multiple},on:{change:e.handleChange},model:{value:e.entity[e.name],callback:function(t){e.$set(e.entity,e.name,t)},expression:"entity[name]"}},e._l(e.newValues,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)},staticRenderFns:[]};var i=n("VU/8")(a,l,!1,function(e){n("P3j1")},null,null);t.default=i.exports}});