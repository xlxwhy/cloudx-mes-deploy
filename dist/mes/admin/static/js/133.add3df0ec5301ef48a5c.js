webpackJsonp([133],{"2+mb":function(t,e){},gUi8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{tabs:{type:Object,default:function(){return{active:"",list:[]}}}},data:function(){return{}},methods:{handleClick:function(t,e){this.$emit("change",t,e)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xv-tab"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.tabs.active,callback:function(e){t.$set(t.tabs,"active",e)},expression:"tabs.active"}},t._l(t.tabs.list,function(e,n){return a("el-tab-pane",{key:n,attrs:{name:e.name}},[a("div",{staticClass:"xv-tab__label",attrs:{slot:"label"},slot:"label"},[t._v("\n        "+t._s(e.label)+"\n        "),e.number&&e.number>0?a("div",{staticClass:"xv-tab__number"},[a("div",[t._v(t._s(e.number))])]):t._e()]),t._v(" "),a(e.component,{tag:"component",attrs:{name:e.name,active:t.tabs.active}})],1)}),1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,s,!1,function(t){a("2+mb")},null,null);e.default=l.exports}});