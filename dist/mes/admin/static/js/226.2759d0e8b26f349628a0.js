webpackJsonp([226],{"WL/5":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Gu7T"),r=e.n(n),a=e("BO1k"),s=e.n(a);i.default={props:{guide:{type:[Object],default:function(){return{entity:{},check:{visible:!1},warn:{visible:!1},delete:{visible:!1}}}}},data:function(){return{tips:[]}},watch:{"guide.warn.visible":{handler:function(t,i){t&&this.initTips()}}},created:function(){this.initTips()},methods:{initTips:function(){var t=this.guide.warn.codes,i=this.guide.warn.map,e=this.guide.warn.tips;if(t&&0!=t.length){var n=[],a=!0,u=!1,o=void 0;try{for(var l,h=s()(t);!(a=(l=h.next()).done);a=!0){var c=i[l.value];c&&0!=c.length&&(n=this.$lodash.uniq([].concat(r()(n),r()(c))))}}catch(t){u=!0,o=t}finally{try{!a&&h.return&&h.return()}finally{if(u)throw o}}n=this.$lodash.sortedUniq(n);var d=[],f=!0,p=!1,v=void 0;try{for(var y,w=s()(n);!(f=(y=w.next()).done);f=!0){var b=e[y.value];b&&d.push(b)}}catch(t){p=!0,v=t}finally{try{!f&&w.return&&w.return()}finally{if(p)throw v}}this.tips=d}else this.tips=[]},handleNames:function(){return this.tips.map(function(t){return t.name}).join("、")}}}}});