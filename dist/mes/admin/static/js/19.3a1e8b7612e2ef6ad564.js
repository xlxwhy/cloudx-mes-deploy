webpackJsonp([19,2,6,7,154,193],{"+Flp":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),i=n("exGp"),s=n.n(i),o={props:{visible:Boolean,value:{type:String,default:""}},data:function(){return{loading:!1,form:{remark:this.value}}},methods:{submit:function(){var t,e=this;this.$refs.form.validate((t=s()(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",!1);case 2:e.$emit("change",e.form.remark),e.$emit("update:visible",!1);case 4:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)}))},cannel:function(){this.$emit("update:visible",!1),this.$refs.form.resetFields()}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"remack"},[n("el-dialog",{attrs:{title:"提示",visible:t.visible,width:"600px","close-on-click-modal":!1,"show-close":!1,center:"","append-to-body":""},on:{"update:visible":function(e){t.visible=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"不通过审核备注",prop:"remark",rules:[{required:!0,message:"审核备注不能为空"}]}},[n("el-input",{attrs:{type:"textarea",rows:3,autocomplete:"off"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer flex justify-content-center",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"large"},on:{click:t.cannel}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{size:"large",type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(o,l,!1,function(t){n("Kclx")},"data-v-b6e30808",null);e.default=u.exports},"4yTo":function(t,e){},GeCm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{index:Number,model:Object,rules:Object,disabled:Boolean},data:function(){return{}},methods:{toDetail:function(){}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("div",[n("el-table",{staticClass:"spartsTable",attrs:{data:t.model.list[t.index].manItemParts,border:""}},[n("el-table-column",{attrs:{label:"零配件名称",align:"center",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form-item",{attrs:{prop:"list["+t.index+"].manItemParts."+e.$index+".partsName",rules:t.$rule.name("输入框",null,32),"label-width":"auto"}},[t.disabled?n("span",[t._v(t._s(e.row.partsName))]):n("el-input",{staticStyle:{width:"220px"},model:{value:e.row.partsName,callback:function(n){t.$set(e.row,"partsName",n)},expression:"scope.row.partsName"}})],1)]}}],null,!1,1918401349)}),t._v(" "),n("el-table-column",{attrs:{prop:"partsCode",label:"零配件编号",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"partsTypeName",label:"所属品类",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"SRP价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                ￥"+t._s(e.row.suggestPrice)+"\n            ")]}}],null,!1,3932222481)}),t._v(" "),n("el-table-column",{attrs:{prop:"useQuantity",label:"建议用量(件)",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"* 商品价格",align:"center",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form-item",{attrs:{prop:"list["+t.index+"].manItemParts."+e.$index+".salePrice",rules:t.$rule.price("价格",.01,999999,!0,function(){return e.row.salePrice})}},[n("el-input",{class:{disabled:t.disabled},staticStyle:{width:"220px"},attrs:{disabled:t.disabled,placeholder:"请输入价格"},model:{value:e.row.salePrice,callback:function(n){t.$set(e.row,"salePrice",n)},expression:"scope.row.salePrice"}},[n("template",{slot:"prepend"},[t._v("￥")])],2)],1)]}}],null,!1,3495748076)})],1)],1):t._e()},staticRenderFns:[]};var i=n("VU/8")(a,r,!1,function(t){n("4yTo")},"data-v-2045017d",null);e.default=i.exports},H5ds:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{steps:Array,active:{type:Number,default:0},finishStatus:{type:String,default:"success"}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gtmc-step"},[e("el-steps",{staticClass:"step",attrs:{active:this.active,"finish-status":this.finishStatus,"align-center":""}},this._l(this.steps,function(t,n){return e("el-step",{key:n,attrs:{title:t}})}),1)],1)},staticRenderFns:[]};var i=n("VU/8")(a,r,!1,function(t){n("fW5l")},"data-v-364210d5",null);e.default=i.exports},Kclx:function(t,e){},MOVa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-audit flex column align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"goods-audit--tip"},[t._v("\n        您可以继续 \n        "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:t.toAdd}},[t._v("发布保养服务")]),t._v("，\n        或者\n        "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:t.toList}},[t._v("返回保养服务列表")]),t._v("\n        查看状态。\n    ")],1),t._v(" "),n("div",{staticClass:"goods-audit--foot"},[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.toAdd}},[t._v("发布保养服务")]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"large"},on:{click:t.toList}},[t._v("返回保养服务列表")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"goods-audit--head flex align-items-center"},[e("i",{staticClass:"el-icon-success icon-plus"}),this._v(" "),e("div",{staticClass:"txt"},[e("p",[this._v("恭喜您，保养服务已提交成功！")]),this._v(" "),e("p",[this._v("请关注审核结果。")])])])}]};var r=n("VU/8")({data:function(){return{}},methods:{toAdd:function(){this.$closeTagView(),this.link("goods-maintain-addmanual")},toList:function(){this.$closeTagView(),this.link("goods-maintain-list")}}},a,!1,function(t){n("swdq")},"data-v-6b8a1542",null);e.default=r.exports},NEHW:function(t,e,n){"use strict";var a=/([yMdhsm])(\1*)/g;function r(t,e){e-=(t+"").length;for(var n=0;n<e;n++)t="0"+t;return t}e.a={toFixed:function(t,e){return Number(t).toFixed(e||0)},dhmsTomss:function(t){return{days:parseInt(t/864e5),hours:parseInt(t%864e5/36e5),minutes:parseInt(t%36e5/6e4),seconds:t%6e4/1e3}},mssToDhms:function(t,e,n,a){return 1e3*(60*(60*(24*t+e)+n)+a)},dhmsToss:function(t){return{days:parseInt(t/86400),hours:parseInt(t%86400/3600),minutes:parseInt(t%3600/60),seconds:t%60}},ssToDhms:function(t,e,n,a){return 60*(60*(24*t+e)+n)+a},pushDateRange:function(t,e,n){if(e[0]||e[1]){var a=this.formatDate.format(e[0],"yyyy/MM/dd hh:mm:ss"),r=this.formatDate.format(e[1],"yyyy/MM/dd")+" 23:59:59";n.push({property:t,operator:"ge",value:a}),n.push({property:t,operator:"le",value:r})}},formatMoney:function(t){var e=String(t);return(e=(e=(e=(e=e.replace(/[^\d.]/g,"")).replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")).indexOf(".")<0&&""!=e&&(e=parseFloat(e)),e},getQueryStringByName:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.href.match(e),a="";return null!=n&&(a=n[2]),e=null,n=null,null==a||""==a||"undefined"==a?"":a},formatDate:{format:function(t,e){return(e=e||"yyyy-MM-dd").replace(a,function(e){switch(e.charAt(0)){case"y":return r(t.getFullYear(),e.length);case"M":return r(t.getMonth()+1,e.length);case"d":return r(t.getDate(),e.length);case"w":return t.getDay()+1;case"h":return r(t.getHours(),e.length);case"m":return r(t.getMinutes(),e.length);case"s":return r(t.getSeconds(),e.length)}})},parse:function(t,e){var n=e.match(a),r=t.match(/(\d)+/g);if(n.length==r.length){for(var i=new Date(1970,0,1),s=0;s<n.length;s++){var o=parseInt(r[s]);switch(n[s].charAt(0)){case"y":i.setFullYear(o);break;case"M":i.setMonth(o-1);break;case"d":i.setDate(o);break;case"h":i.setHours(o);break;case"m":i.setMinutes(o);break;case"s":i.setSeconds(o)}}return i}return null}},checkPrice:function(t){return/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(t)&&t>0}}},OTH7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-cell"},[this.title?e("div",{staticClass:"form-cell--title"},[this._v(this._s(this.title))]):this._e(),this._v(" "),e("div",{staticClass:"form-cell--content"},[this._t("default")],2)])},staticRenderFns:[]};var r=n("VU/8")({name:"formCell",props:["title"]},a,!1,function(t){n("uf+G")},"data-v-0cc20aac",null);e.default=r.exports},SldL:function(t,e){!function(e){"use strict";var n,a=Object.prototype,r=a.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",u="object"==typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{(c=e.regeneratorRuntime=u?t.exports:{}).wrap=_;var d="suspendedStart",f="suspendedYield",m="executing",p="completed",h={},v={};v[s]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(P([])));y&&y!==a&&r.call(y,s)&&(v=y);var b=I.prototype=x.prototype=Object.create(v);k.prototype=b.constructor=I,I.constructor=k,I[l]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,I):(t.__proto__=I,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},M(C.prototype),C.prototype[o]=function(){return this},c.AsyncIterator=C,c.async=function(t,e,n,a){var r=new C(_(t,e,n,a));return c.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},M(b),b[l]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},c.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,r){return o.type="throw",o.arg=t,e.next=a,r&&(e.method="next",e.arg=n),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var l=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(l&&u){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:P(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=n),h}}}function _(t,e,n,a){var r=e&&e.prototype instanceof x?e:x,i=Object.create(r.prototype),s=new D(a||[]);return i._invoke=function(t,e,n){var a=d;return function(r,i){if(a===m)throw new Error("Generator is already running");if(a===p){if("throw"===r)throw i;return E()}for(n.method=r,n.arg=i;;){var s=n.delegate;if(s){var o=L(s,n);if(o){if(o===h)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var l=w(t,e,n);if("normal"===l.type){if(a=n.done?p:f,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=p,n.method="throw",n.arg=l.arg)}}}(t,n,s),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function I(){}function M(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){var e;this._invoke=function(n,a){function i(){return new Promise(function(e,i){!function e(n,a,i,s){var o=w(t[n],t,a);if("throw"!==o.type){var l=o.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(u).then(function(t){l.value=t,i(l)},s)}s(o.arg)}(n,a,e,i)})}return e=e?e.then(i,i):i()}}function L(t,e){var a=t.iterator[e.method];if(a===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=w(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},VNlR:function(t,e,n){"use strict";e.a={data:function(){return{rules:[{label:"5K",value:5,selected:!1},{label:"10K",value:10,selected:!1},{label:"15K",value:15,selected:!1},{label:"20K",value:20,selected:!1},{label:"25K",value:25,selected:!1},{label:"30K",value:30,selected:!1},{label:"35K",value:35,selected:!1},{label:"40K",value:40,selected:!1},{label:"45K",value:45,selected:!1},{label:"50K",value:50,selected:!1},{label:"60K",value:60,selected:!1},{label:"70K",value:70,selected:!1},{label:"80K",value:80,selected:!1},{label:"90K",value:90,selected:!1},{label:"100K",value:100,selected:!1},{label:"100K+",value:101,selected:!1}]}},methods:{}}},Xxa5:function(t,e,n){t.exports=n("jyFz")},exGp:function(t,e,n){"use strict";e.__esModule=!0;var a,r=n("//Fk"),i=(a=r)&&a.__esModule?a:{default:a};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,n){return function a(r,s){try{var o=e[r](s),l=o.value}catch(t){return void n(t)}if(!o.done)return i.default.resolve(l).then(function(t){a("next",t)},function(t){a("throw",t)});t(l)}("next")})}}},fW5l:function(t,e){},i0m1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),r=n.n(a),i=n("fZjL"),s=n.n(i),o=n("Xxa5"),l=n.n(o),u=n("exGp"),c=n.n(u),d=n("OTH7"),f=n("H5ds"),m=n("GeCm"),p=n("MOVa"),h=n("+Flp"),v=n("VNlR"),g=(n("NEHW"),["选择车型 / 保养手册","填写保养服务详情","待业务担当审核","待商城运营担当审核","审核通过，发布成功"]),y={mixins:[v.a],components:{FormCell:d.default,SparePartsTable:m.default,DetailAudit:p.default,GtmcSteps:f.default,GtmcReviewDialog:h.default},data:function(){return{loading:!1,isDetailAudit:!1,isEdit:!1,isLook:!1,isAudit:!1,stepActive:1,steps:g,maintainManualInfo:null,maintainManualItems:[],form:{list:[]},conditionCheck:[],conditionChecks:[{label:"人车关系认证",val:"isCarOwner"},{label:"身份证认证",val:"hasIdCertified"},{label:"驾驶证认证",val:"hasDriverLicence"},{label:"机动车识别认证",val:"hasCarCertificate"},{label:"购车订单认证",val:"hasCarOrder"}],reviewLogs:[],reviewDialogVisible:!1,remack:""}},computed:{isDisabled:function(){var t=this.$route.query,e=t.isLook,n=t.isAudit;return!(!e&&!n)},status:function(){return this.maintainManualInfo?this.maintainManualInfo.status:0}},created:function(){var t=this.$route.query,e=t.isEdit,n=t.isLook,a=t.isAudit,r=t.maintainId;if(this.isEdit=e,this.isLook=n,this.isAudit=a,e||n||a){if(!r)return this.$message.error("缺少maintainId参数");this.getMaintainDetail(r)}else this.getMaintainManualDetail();n&&this.getReviewLog(r)},methods:{getMaintainManualDetail:function(){var t=this;return c()(l.a.mark(function e(){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.query.maintainManualId){e.next=3;break}return e.abrupt("return",t.$message.error("缺少maintainManualId参数"));case 3:return t.loading=!0,e.next=6,t.$api.MaintainManualController.getMaintainDetail({path:{maintainManualId:n}});case 6:(a=e.sent).body.ruleDetails=a.body.ruleDetails.filter(function(t){return t.condMileages&&t.condMileages.length}),t.maintainManualInfo=a.body,t.form.list=a.body.itemDetails,t.loading=!1;case 11:case"end":return e.stop()}},e,t)}))()},getMaintainDetail:function(t){var e=this;return c()(l.a.mark(function n(){var a,r,i,s;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$api.MaintainController.get({path:{maintainId:t}});case 3:if(a=n.sent,r=a.body.status,r,5==r?(2,e.steps=e.steps.slice(0,2),e.steps.push("业务担当审核不通过")):6==r?(3,e.steps=e.steps.slice(0,3),e.steps.push("商城运营担当不通过")):7==r&&(5,e.steps=e.steps.slice(0,5),e.steps.push("商品下架")),e.stepActive=r,a.body.name=a.body.matManName,a.body.itemDetails=a.body.itemDetails.map(function(t){return t.manItemParts=t.matItemParts,t}),a.body.ruleDetails=a.body.ruleDetails.filter(function(t){return t.condMileages&&t.condMileages.length}),e.maintainManualInfo=a.body,e.form.list=a.body.itemDetails,i=a.body.identityCond)for(s in i)i[s]&&e.conditionCheck.push(s);e.loading=!1;case 16:case"end":return n.stop()}},n,e)}))()},getReviewLog:function(t){var e=this;return c()(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$api.MaintainController.getReviewLog({path:{maintainId:t}});case 2:a=n.sent,e.reviewLogs=a.body;case 4:case"end":return n.stop()}},n,e)}))()},getRuleStatus:function(t,e){return!!t&&t.indexOf(e)>-1},handleConditionChange:function(t){console.log(t)},getCondition:function(){var t=this,e={};return this.conditionChecks.forEach(function(n){t.conditionCheck.indexOf(n.val)>-1?e[n.val]=!0:e[n.val]=!1}),e},onSubmit:function(t){var e,n=this;this.$refs.ruleForm.validate((e=c()(l.a.mark(function e(a,r){var i,o,u,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=5;break}return i=s()(r),o=r[i[0]][0].message,n.$message.warning(o),e.abrupt("return",console.log(o));case 5:return e.next=7,n.submitHandle(t);case 7:e.sent,1==t?(n.$message.success("提交成功"),window.scrollTo(0,0),n.isDetailAudit=!0,u=n.maintainManualInfo,c=null,u&&(c=u.status),5!=c&&6!=c||(n.steps=g),n.stepActive=2):(n.$message.success("保存成功"),n.$router.replace({name:"goods-maintain-list"}));case 9:case"end":return e.stop()}},e,n)})),function(t,n){return e.apply(this,arguments)}))},cannel:function(){var t=this;this.$confirm("确认取消当前操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$closeTagView(),t.$router.go(-1)}).catch(function(t){})},submitHandle:function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new r.a((t=c()(l.a.mark(function t(a,r){var i,s,o,u;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.maintainManualInfo,s=e.isEdit,o=e.isAudit,u={action:n,matManId:i.manualId,modelCode:i.modelCode,vehName:i.vehName,vehNameCode:i.vehNameCode},(s||o)&&(u.matManId=i.matManId,u.maintainId=i.maintainId),u.identityCond=e.getCondition(),u.matItemSimples=e.form.list.filter(function(t){return t.manItemParts&&t.manItemParts.length}).map(function(t){var e={itemId:t.itemId,matItemId:t.matItemId,manItemId:t.manItemId};return e.matItemPartsSimples=t.manItemParts.map(function(t){return{partsId:t.partsId,partsName:t.partsName,salePrice:t.salePrice,matItemPartsId:t.matItemPartsId,useQuantity:t.useQuantity}}),e}),console.log(u),e.loading=!0,t.prev=7,t.next=10,e.$api.MaintainController[s?"modify":"add"]({body:u});case 10:t.sent,a(),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(7),console.error(t.t0),r();case 18:e.loading=!1;case 19:case"end":return t.stop()}},t,e,[[7,14]])})),function(e,n){return t.apply(this,arguments)}))},auditPass:function(){var t=this;this.$confirm("确认审核通过吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.reviewHandle(1)}).catch(function(t){})},auditFail:function(){this.reviewDialogVisible=!0},reviewRemark:function(t){this.remark=t,this.reviewHandle(2)},reviewHandle:function(t){var e=this;return c()(l.a.mark(function n(){var a,r,i,s,o;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.remark,r=e.maintainManualInfo,i=r.maintainId,s=r.status,o={reviewType:2==s?1:2,reviewStatus:t,maintainId:i},2==t&&(o.reviewOpinion=a),e.loading=!0,n.prev=6,n.next=9,e.$api.MaintainController.review({body:o});case 9:n.sent,e.$message.success("操作成功"),e.$closeTagView(),e.$router.replace({name:"goods-maintain-list"}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(6),console.error(n.t0);case 18:e.loading=!1;case 19:case"end":return n.stop()}},n,e,[[6,15]])}))()},resetSelectCartype:function(){this.$closeTagView(),this.$router.replace({name:"goods-maintain-addmanual"})},toList:function(){this.$closeTagView(),this.$router.push({name:"goods-maintain-list"})}},filters:{getStatusType:function(t){return{0:"info",1:"warning",2:"warning",3:"warning",4:"success",5:"danger",6:"danger",7:"danger"}[t]},getStatusTxt:function(t){return{0:"未知",1:"待提交",2:"待业务担当审核",3:"待商城运营担当审核",4:"已上架",5:"业务担当审核不通过",6:"商城运营担当不通过",7:"已下架"}[t]}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"maintain-detail page-container"},[n("div",{staticClass:"maintain-detail--step"},[n("gtmc-steps",{attrs:{steps:t.steps,active:t.stepActive}})],1),t._v(" "),t.isDetailAudit?t._e():n("div",{staticClass:"maintain-detail__content"},[t.maintainManualInfo?n("el-form",{ref:"ruleForm",attrs:{model:t.form,"label-width":"120px"}},[n("form-cell",{attrs:{title:"配置新车基本信息"}},[n("el-form-item",{attrs:{label:"车型",required:""}},[t._v("\n\t\t\t\t\t"+t._s(t.maintainManualInfo.vehName)+"("+t._s(t.maintainManualInfo.vehNameCode)+") "+t._s(t.maintainManualInfo.modelCode)+"\n\t\t\t\t\t"),t.isEdit||t.isLook||t.isAudit?t._e():n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"text",size:"small"},on:{click:t.resetSelectCartype}},[t._v("重新选择")])],1),t._v(" "),n("el-form-item",{attrs:{label:"保养手册",required:""}},[t._v("\n\t\t\t\t\t"+t._s(t.maintainManualInfo.name)+"\n\t\t\t\t\t"),t.isEdit||t.isLook||t.isAudit?t._e():n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"text",size:"small"},on:{click:t.resetSelectCartype}},[t._v("重新选择")])],1),t._v(" "),n("el-form-item",{attrs:{label:"保养规则"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.maintainManualInfo.ruleDetails,border:""}},[n("el-table-column",{attrs:{prop:"itemName",label:"保养项 / 里程(km)",width:"180",align:"center"}}),t._v(" "),t._l(t.rules,function(e,a){return n("el-table-column",{key:a,attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(a){return[n("span",[t._v(t._s(e.label))])]}},{key:"default",fn:function(a){return[n("el-checkbox",{attrs:{value:t.getRuleStatus(a.row.condMileages,e.value),disabled:!0}})]}}],null,!0)})})],2)],1)],1),t._v(" "),n("form-cell",{attrs:{title:"设置零配件名称和价格"}},[t._l(t.maintainManualInfo.itemDetails,function(e,a){return[e.manItemParts&&e.manItemParts.length?n("el-form-item",{key:a,attrs:{label:e.itemName,required:""}},[n("spare-parts-table",{attrs:{model:t.form,index:a,disabled:t.isDisabled}})],1):t._e()]})],2),t._v(" "),n("form-cell",{attrs:{title:"设置用户购买条件"}},[n("el-form-item",{attrs:{label:"购买条件"}},[n("el-checkbox-group",{attrs:{disabled:t.isDisabled},on:{change:t.handleConditionChange},model:{value:t.conditionCheck,callback:function(e){t.conditionCheck=e},expression:"conditionCheck"}},t._l(t.conditionChecks,function(e){return n("el-checkbox",{key:e.val,attrs:{label:e.val}},[t._v(t._s(e.label))])}),1)],1)],1)],1):t._e(),t._v(" "),t.isLook&&t.maintainManualInfo?n("form-cell",{attrs:{title:"审核信息"}},[n("el-form",{attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"状态"}},[n("el-tag",{attrs:{type:t._f("getStatusType")(t.status)}},[t._v("\n\t\t\t\t\t\t"+t._s(t._f("getStatusTxt")(t.status))+"\n\t\t\t\t\t")])],1),t._v(" "),t.status>=4&&t.status<=6&&t.reviewLogs.length?[n("el-form-item",{attrs:{label:"审核人"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.reviewLogs[0].createBy)+"\n\t\t\t\t\t")]),t._v(" "),n("el-form-item",{attrs:{label:"审核时间"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.reviewLogs[0].updateTime)+"\n\t\t\t\t\t")]),t._v(" "),4!=t.status?n("el-form-item",{attrs:{label:"说明"}},[n("el-input",{attrs:{type:"textarea",placeholder:"无",disabled:"",rows:"4"},model:{value:t.reviewLogs[0].description,callback:function(e){t.$set(t.reviewLogs[0],"description",e)},expression:"reviewLogs[0].description"}})],1):t._e()]:t._e()],2)],1):t._e(),t._v(" "),t.maintainManualInfo?n("div",{staticClass:"car-detail--btn flex justify-content-center",staticStyle:{padding:"20px 0"}},[t.isLook||t.isAudit?t._e():[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.onSubmit(1)}}},[t._v("提交审核")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:function(e){return t.onSubmit(2)}}},[t._v("保存")]),t._v(" "),n("el-button",{attrs:{size:"large"},on:{click:t.cannel}},[t._v("取消")])],t._v(" "),t.isAudit?[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.auditPass}},[t._v("审核通过")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:t.auditFail}},[t._v("审核不通过")]),t._v(" "),n("el-button",{attrs:{size:"large"},on:{click:t.toList}},[t._v("暂不处理")])]:t._e(),t._v(" "),t.isLook?[n("el-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:t.toList}},[t._v("返回列表")])]:t._e()],2):t._e()],1),t._v(" "),t.isDetailAudit?n("div",{staticClass:"auditing"},[n("detail-audit")],1):t._e(),t._v(" "),n("gtmc-review-dialog",{attrs:{visible:t.reviewDialogVisible},on:{"update:visible":function(e){t.reviewDialogVisible=e},change:t.reviewRemark}})],1)},staticRenderFns:[]},_=n("VU/8")(y,b,!1,null,null,null);e.default=_.exports},jyFz:function(t,e,n){var a=function(){return this}()||Function("return this")(),r=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,i=r&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=n("SldL"),r)a.regeneratorRuntime=i;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},swdq:function(t,e){},"uf+G":function(t,e){}});