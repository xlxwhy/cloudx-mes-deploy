webpackJsonp([78,178],{DCks:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("rddR"),n=a("rhVH"),r={props:{active:{type:[String],default:""},name:{type:[String],default:""}},data:function(){return{loading:!1,table:{headers:[{title:"商品信息",width:"auto"},{title:"价格",width:"100"},{title:"数量",width:"50"},{title:"订单金额",width:"100"},{title:"用户信息",width:"100"},{title:"操作",width:"100"}],query:{name:"",code:"",status:null,seriesCode:""},filters:[],sort:{prop:"versionId",order:"descending"},page:{current:1,size:10,total:0}}}},components:{QueryPanel:n.default},watch:{active:{handler:function(e,t){e&&e==this.name&&this.loadTable()}}},created:function(){this.active==this.name&&this.loadTable()},methods:{handlePageChange:function(e,t){this.loadTable(null,e,t)},handleQuery:function(){this.loadTable()},appendFilter:function(e,t,a,l){return l&&e.push({property:t,operator:a,value:l}),e},getStatusValue:function(e){switch(e){case"all":return null;case"unpay":return[1];case"unuse":return[2];case"serving":return[3];case"finish":return[4];case"cancel":return[5];case"refunding":return[6]}},getQueryParam:function(){return this.appendFilter(this.table.filters,"status","in",this.getStatusValue(this.name)),{body:{current:this.table.page.current,size:this.table.page.size,filters:this.table.filters}}},loadTable:function(){var e=this,t=this.getQueryParam();console.log(t),this.loading=!0,l.default.page(t,function(t){e.$gtmc.assembleBody(e.table.page,t.body),e.loading=!1})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"virtual-tab-panel"},[a("query-panel",{attrs:{table:e.table},on:{query:e.handleQuery}}),e._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{table:e.table},on:{"sort-change":e.handleQuery}},[a("el-table-column",{attrs:{prop:"code",label:"退款单号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"退款申请时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"用户信息"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"经销商",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"退款金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"退款状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"退款原因"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{name:"trade-refund-parts-detail",query:{id:t.row.versionId}}}},[e._v("查看详情")])]}}])})],1),e._v(" "),a("xv-list-page",{attrs:{table:e.table},on:{change:e.handleQuery}})],1)},staticRenderFns:[]};var s=a("VU/8")(r,i,!1,function(e){a("fpVQ")},null,null);t.default=s.exports},buB5:function(e,t){},fpVQ:function(e,t){},rhVH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={props:{table:{type:Object,default:function(){return{}}}},data:function(){return{datetime:{value:""}}},components:{},mounted:function(){},methods:{change:function(e){this.table.query.startTime=e[0],this.table.query.endTime=e[1]},handleClean:function(){this.datetime.value="",this.table.query.startTime="",this.table.query.endTime=""},buildQueryFilters:function(){var e=[];return this.appendFilter(e,"name","like",this.table.query.name),this.appendFilter(e,"code","like",this.table.query.code),this.appendFilter(e,"seriesCode","eq",this.table.query.seriesCode),this.appendFilter(e,"status","eq",this.table.query.status),this.appendFilter(e,"createTime","ge",this.table.query.startTime),this.appendFilter(e,"createTime","le",this.table.query.endTime),e},appendFilter:function(e,t,a,l){return l&&e.push({property:t,operator:a,value:l}),e},handleQueryButton:function(){var e=this.buildQueryFilters();this.table.filters=e,this.handleQuery()},handlePageChange:function(e,t){this.table.page.size=e,this.table.page.current=t;var a=this.buildQueryFilters();this.table.filters=a,this.handleQuery()},handleQuery:function(){this.$emit("query")}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"virtual-list-query-panel"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",queryText:"",table:e.table},on:{clean:e.handleClean}},[a("xv-field-input",{attrs:{entity:e.table.query,name:"name",label:"退款单号",placeholder:"请输入搜索关键字"}}),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"code",label:"经销商",placeholder:"请输入经销商"}}),e._v(" "),a("xv-field-input",{attrs:{entity:e.table.query,name:"num",label:"用户手机号",placeholder:"请输入用户手机号"}}),e._v(" "),a("br"),e._v(" "),a("xv-field-datetime",{attrs:{entity:e.datetime,name:"value",label:"申请时间"},on:{change:e.change}}),e._v(" "),a("div",{attrs:{slot:"button"},slot:"button"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleQueryButton}},[e._v("查询")]),e._v(" "),a("xv-button-export",{attrs:{name:"导出订单"}})],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(l,n,!1,function(e){a("buB5")},null,null);t.default=r.exports}});