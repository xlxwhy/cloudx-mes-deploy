webpackJsonp([80,143],{"17xF":function(t,e){},ON4U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{spans:{type:Array,default:function(){return[1,1]}},value:{type:[String],default:""},clazz:{type:[String],default:""},type:{type:[String],default:""},needColon:{type:Boolean,default:!0}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:" attribute-cell ",class:"display-"+t.spans[0]+"-"+t.spans[1],attrs:{rowspan:t.spans[0],colspan:t.spans[1]}},["IMAGE"==t.type?a("div",{class:t.clazz},[a("img",{attrs:{src:t.value}}),t._v(" "),t._t("default")],2):t._e(),t._v(" "),t.type&&"TEXT"!=t.type?t._e():a("div",{class:t.clazz},[a("span",[t._v(t._s(t.value))]),t.needColon?a("span",[a("strong",[t._v("：")])]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),0==t.type.indexOf("TAG-")?a("div",{class:t.clazz},[a("el-tag",{attrs:{type:t.type.replace("TAG-","").toLowerCase()}},[t._v(t._s(t.value))]),t._v(" "),t._t("default")],2):t._e()])},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(t){a("17xF")},null,null);e.default=r.exports},VXp8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("BO1k"),s=a.n(n),r=a("ON4U"),i={props:{needColon:{type:Boolean,default:!0},inteval:{type:Number,default:2},nameKey:{type:[String,Number],default:"name"},valueKey:{type:[String,Number],default:"value"},table:{type:Object,default:function(){return{data:[],spans:[]}}}},components:{AttributeCell:r.default},data:function(){return{fieldRowList:[],spanList:[]}},created:function(){this.initSpanList(),this.initFieldRowList()},methods:{initSpanList:function(){this.spanList=[];var t=!0,e=!1,a=void 0;try{for(var n,r=s()(this.table.spans);!(t=(n=r.next()).done);t=!0){var i=n.value;this.spanList=this.spanList.concat(this.getTableSpans(i.ri,i.ci,i.rows,i.cols))}}catch(t){e=!0,a=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw a}}},initFieldRowList:function(){for(var t=0;t<this.table.data.length;t++)if(t%this.inteval==0){for(var e=[],a=0;a<this.inteval;a++)if(this.table.data[t+a])e.push(this.table.data[t+a]);else{var n={};n[this.nameKey]="",n[this.valueKey]="",n[this.valueType]="",n[this.nameType]="",e.push(n)}this.fieldRowList.push(e)}},getItem:function(t,e){return t[parseInt((e-1)/2)]},getItemValue:function(t,e){var a=this.getItem(t,e);return(e-1)%2==0?a[this.nameKey]:a[this.valueKey]},getItemType:function(t,e){var a=this.getItem(t,e);return(e-1)%2==0?a.nameType:a.valueType},getItemClass:function(t,e,a){this.getItem(t,a);var n="attribute-cell-"+e+"-"+(a-1);return n+=(a-1)%2==0?" field-name":" field-value"},getItemColon:function(t){return(t-1)%2==0&&this.needColon},getItemSpans:function(t,e){e-=1;var a=!0,n=!1,r=void 0;try{for(var i,l=s()(this.spanList);!(a=(i=l.next()).done);a=!0){var u=i.value;if(t===u.ri&e===u.ci)return[u.rows,u.cols]}}catch(t){n=!0,r=t}finally{try{!a&&l.return&&l.return()}finally{if(n)throw r}}return[1,1]},getTableSpans:function(t,e,a,n){for(var s=[],r=t;r<t+a;r++)for(var i=e;i<e+n;i++)r==t&&i==e?s.push({ri:r,ci:i,rows:a,cols:n}):s.push({ri:r,ci:i,rows:0,cols:0});return s}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attribute-table"},[a("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},t._l(t.fieldRowList,function(e,n){return a("tr",{key:n,class:"attribute-row-"+n},t._l(2*e.length,function(s){return a("attribute-cell",{key:s,class:t.getItemClass(e,n,s),attrs:{type:t.getItemType(e,s),value:t.getItemValue(e,s),spans:t.getItemSpans(n,s),needColon:t.getItemColon(s)}})}),1)}),0)])},staticRenderFns:[]};var u=a("VU/8")(i,l,!1,function(t){a("h4FF")},null,null);e.default=u.exports},h4FF:function(t,e){}});