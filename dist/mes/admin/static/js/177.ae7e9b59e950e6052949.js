webpackJsonp([177],{Bmsa:function(e,t){},WHhX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{table:{type:Object,default:function(){return{page:{current:1,size:10,total:0}}}}},data:function(){return{}},mounted:function(){},methods:{handleSizeChange:function(e){this.table.page.size!=e&&(this.table.page.current=1),this.table.page.size=e,this.$emit("change",this.table.page)},handleCurrentChange:function(e){this.table.page.current=e,this.$emit("change",this.table.page)}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"gtmc-list-page"},[t("el-pagination",{attrs:{"current-page":this.table.page.current,"page-sizes":[10,20,50,100,500],"page-size":this.table.page.size,layout:"total, sizes, prev, pager, next, jumper",total:this.table.page.total},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(e){a("Bmsa")},null,null);t.default=s.exports}});