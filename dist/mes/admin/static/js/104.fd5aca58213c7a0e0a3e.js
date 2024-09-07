webpackJsonp([104],{Yx9j:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Gu7T"),n=a.n(l),i={mixins:[a("oW5U").a],data:function(){return{table:{loading:!1,query:{typeName:null},sort:{descs:["update_time"]},page:this.$gtmc.initPage()},scenarioOptions:{adapter:function(t){return{label:t.name,value:t.scenarioId}},values:[]}}},components:{},mounted:function(){this.loadTable(),this.loadScenarioList()},methods:{handleQueryParam:function(){var t=this.$gtmc.assemblePage(this.table),e=this.table.query;return this.$gtmc.appendFilter(t.body.filters,"title","like",e.title),this.$gtmc.appendFilter(t.body.filters,"typeName","like",e.typeName),this.$gtmc.appendFilter(t.body.filters,"scenarioId","eq",e.scenarioId),this.$gtmc.appendFilterDataTime(t.body.filters,"updateTime",e.updateTime),t},loadTable:function(t,e,a){var l=this,n=this.handleQueryParam();console.log(n),this.table.loading=!0,this.$api.ArticleController.page(n,function(t){l.$gtmc.assembleBody(l.table.page,t.body),l.table.loading=!1})},loadScenarioList:function(){var t=this;this.$api.ScenarioController.list({},function(e){e.body&&(t.scenarioOptions.values=[{name:"全部",scenarioId:null}].concat(n()(e.body)))})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mall-content-article-list"},[a("xv-list-query",{attrs:{cleanText:"清除查询条件",table:t.table},on:{query:function(e){return t.$handleQuery()}}},[a("xv-field-input",{attrs:{entity:t.table.query,name:"title",label:"文案标题",placeholder:"请输入搜索关键字"},on:{done:function(e){return t.$handleInputQuery()}}}),t._v(" "),a("xv-field-select",{attrs:{entity:t.table.query,name:"typeName",label:"文案类型",options:{values:[{label:"全部",value:null},{label:"用户协议",value:"用户协议"},{label:"使用规则",value:"使用规则"}]}}}),t._v(" "),a("xv-field-select",{attrs:{entity:t.table.query,name:"scenarioId",label:"使用场景",placeholder:"请选择",options:t.scenarioOptions}}),t._v(" "),a("br"),t._v(" "),a("xv-field-datetime",{attrs:{entity:t.table.query,name:"updateTime",label:"更新时间"}})],1),t._v(" "),a("xv-button-panel",{attrs:{auths:t.auth.create}},[a("xv-button-add",{attrs:{name:"新增文案"},on:{click:function(e){return t.link("mall-content-article-create")}}})],1),t._v(" "),a("xv-list-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{table:t.table},on:{"sort-change":function(e){return t.$handleQuery()}}},[a("xv-table-column-id",{attrs:{prop:"articleId",label:"文案ID",sortable:""}}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"typeName",label:"文案类型",sortable:"",width:"150"}}),t._v(" "),a("xv-table-column",{attrs:{label:"使用场景",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.scenarioSimple?t.$lodash.map(e.row.scenarioSimple,function(t){return t.name}).join(" / "):"")+"\n      ")]}}])}),t._v(" "),a("xv-table-column-text",{attrs:{prop:"title",label:"文案标题"}}),t._v(" "),a("xv-table-column-description",{attrs:{prop:"content",label:"文案内容"}}),t._v(" "),a("xv-table-column-date-time",{attrs:{prop:"updateTime",label:"更新时间"}}),t._v(" "),a("xv-table-column-action",{key:t.$columnKey(),attrs:{width:"80",auths:t.auth.modify},scopedSlots:t._u([{key:"default",fn:function(t){return[a("xv-link",{attrs:{text:"编辑",name:"mall-content-article-detail",query:{articleId:t.row.articleId}}})]}}])})],1),t._v(" "),a("xv-list-page",{attrs:{table:t.table},on:{change:function(e){return t.$handleQuery()}}})],1)},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(t){a("rZNe")},null,null);e.default=o.exports},oW5U:function(t,e,a){"use strict";e.a={data:function(){return{auth:{create:this.$auths("create"),modify:this.$auths("modify"),delete:this.$auths("delete"),view:this.$auths("view"),import:this.$auths("import"),export:this.$auths("export")}}}}},rZNe:function(t,e){}});