webpackJsonp([209],{K7Ns:function(t,e){},p7tM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{table:{type:Object,default:function(){return{data:[],spans:[]}}},inteval:{type:Number,default:2},nameKey:{type:[String,Number],default:"name"},valueKey:{type:[String,Number],default:"value"},title:{type:[String,Number],default:"Title"}},data:function(){return{isShowContent:!0}},components:{AttributeTable:AttributeTable},created:function(){},methods:{showContent:function(){this.isShowContent=!this.isShowContent}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vehicle-attribute-table"},[a("div",{staticClass:"vehicle-attribute-table__title",on:{click:t.showContent}},[a("div",{staticClass:"vehicle-attribute-table__title__value"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),a("div",{staticClass:"vehicle-attribute-table__title__icon"},[a("i",{staticClass:"el-icon-caret-bottom",class:[t.isShowContent?"rotate-up":"rotate-down"]})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowContent,expression:"isShowContent"}],staticClass:"vehicle-attribute-table__content"},[a("attribute-table",{attrs:{table:t.table,inteval:t.inteval,nameKey:t.nameKey,valueKey:t.valueKey}})],1)])},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(t){a("K7Ns")},null,null);e.default=l.exports}});