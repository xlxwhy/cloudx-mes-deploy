webpackJsonp([183],{"2ldj":function(e,t){},BlMh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{table:{type:Object,default:function(){return{page:{pageNum:1,pageSize:10,total:0}}}}},data:function(){return{}},mounted:function(){},methods:{handleSizeChange:function(e){this.table.page.pageSize!=e&&(this.table.page.pageNum=1),this.table.page.pageSize=e,this.$emit("change",this.table.page)},handleCurrentChange:function(e){this.table.page.pageNum=e,this.$emit("change",this.table.page)}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"xv-list-page"},[t("el-pagination",{attrs:{"current-page":this.table.page.pageNum,"page-sizes":[10,20,50,100,500],"page-size":this.table.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.table.page.total},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(e){a("2ldj")},null,null);t.default=s.exports}});