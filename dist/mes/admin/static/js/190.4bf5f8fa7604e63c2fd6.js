webpackJsonp([190],{"/2IY":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{table:{type:Object,default:function(){return{page:{ascs:[],descs:[],records:[]}}}},sorts:{type:Object,default:function(){return{}}},height:[String,Number]},data:function(){return{}},mounted:function(){},methods:{showRow:function(e){this.$emit("row-click",e)},handleSelectionCurrentChange:function(e){this.$emit("current-change",e)},handleSelectionChange:function(e){this.$emit("selection-change",e)},clearSelection:function(){this.$refs.table.clearSelection()},handleSortChange:function(e){var t=this.sorts[e.prop]?this.sorts[e.prop]:e.prop;this.table.page.ascs=[],this.table.page.descs=[],"ascending"===e.order?this.table.page.ascs=[t]:"descending"==e.order?this.table.page.descs=[t]:(this.table.page.ascs=this.table.sort.ascs,this.table.page.descs=this.table.sort.descs),this.$emit("sort-change",e)}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"gtmc-list-table"},[t("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{border:"",data:this.table.page.records,"tooltip-effect":"light",height:this.height,"header-row-class-name":"gtmc-list-table-header"},on:{"sort-change":this.handleSortChange,"selection-change":this.handleSelectionChange,"row-click":this.showRow,"current-change":this.handleSelectionCurrentChange}},[this._t("default")],2)],1)},staticRenderFns:[]};var i=s("VU/8")(n,a,!1,function(e){s("aK4t")},null,null);t.default=i.exports},aK4t:function(e,t){}});