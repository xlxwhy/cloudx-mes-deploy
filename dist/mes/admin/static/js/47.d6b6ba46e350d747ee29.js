webpackJsonp([47,153,209],{"1mxC":function(t,e){},"9tok":function(t,e){},AOMp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("cm2o"),o=n("XPjG"),l={components:{Popover:i.default,SetConditionDialog:o.default},props:{form:Object,rules:Object,disabled:Boolean,sence:Array,day:Number},data:function(){return{list:[],editIndex:-1,dialogVisible:!1,conditionValue:[],buyConditions:[{label:"人车关系认证",val:"carOwner"},{label:"身份证认证",val:"hasIdCertified"},{label:"驾驶证认证",val:"hasDriverLicence"},{label:"机动车识别认证",val:"hasCarCertificate"},{label:"购车订单认证",val:"hasCarOrder"}]}},methods:{getSenceStatus:function(t){return t.filter(function(t){return t.opened}).length},getCondition:function(t){var e=this,n=[],i=function(i){if(t[i]){var o=e.buyConditions.find(function(t){return t.val==i});n.push(o.label)}};for(var o in t)i(o);return n},changeCondition:function(t){console.log(this.editIndex,t);var e={};this.buyConditions.forEach(function(n,i){t.indexOf(i)>=0&&(e[n.val]=!0)}),this.form.list[this.editIndex].buyConditions=e},changeBatch:function(t,e){var n=this;console.log(t,e),this.sence.forEach(function(i,o){i.opened&&(n.form.list[e]["senceStock"+o]=t)}),this.validateRowFile(e)},changeAllStock:function(t,e){this.validateRowFile(e)},getRule:function(t,e,n){var i=this;return[{required:!0,validator:function(n,o,l){i.$nextTick(function(n){var r=i.sence,a=i.form.list,s=i.day,c=0;return r.forEach(function(t,n){t.opened&&(c+=Number(a[e]["senceStock"+n]||0))}),s>0&&(c*=s),""===o||void 0===o||o&&!/^\d+$/.test(o)?l(new Error("请设置库存")):c>t.stock?l(new Error("活动的库存不能超过总库存")):void l()})},trigger:["blur"]}]},set:function(t,e){var n=this;this.$set(this,"conditionValue",[]);var i=function(e){if(t.buyConditions[e]){var i=n.buyConditions.findIndex(function(t){return t.val==e});-1==n.conditionValue.indexOf(i)&&n.conditionValue.push(i)}};for(var o in t.buyConditions)i(o);console.log(t,this.conditionValue),this.editIndex=e,this.dialogVisible=!0},cannelTop:function(){this.$confirm("是否取消该商品置顶?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).catch(function(t){})},top:function(){this.$confirm("是否将该商品置顶?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).catch(function(t){})},del:function(t){var e=this;this.$confirm("是否将该商品移除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.form.list.splice(t,1)}).catch(function(t){})},validatorFiles:function(t){var e=this.sence;this.form.list.forEach(function(n,i){e.forEach(function(e,n){if(e.opened){var o="list."+i+".senceStock"+n;t.validateField(o)}})})},validateRowFile:function(t){var e=this;this.sence.forEach(function(n,i){if(n.opened){var o="list."+t+".senceStock"+i;e.$parent.$parent.$parent.$refs.ruleForm.validateField(o)}})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"seckill-list"},[n("el-table",{staticClass:"seckill-list-table",attrs:{data:t.form.list,border:""}},[n("el-table-column",{attrs:{prop:"goodsId",label:"商品ID",align:"center",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",align:"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"info flex"},[n("div",{staticClass:"img flex justify-content-center align-items-center"},[n("img",{attrs:{src:t.$image(e.row.goodsImageUrl)}})]),t._v(" "),n("div",{staticClass:"txt col"},[t._v("\n                        "+t._s(e.row.goodsName)+"\n                    ")])])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"120"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("popover",{attrs:{placement:"top-start",title:"商品价格",head:"商品价格",content:"商品上架时设置的价格，秒杀库存为0或者秒杀结束后商品的销售价格。"}})]}},{key:"default",fn:function(e){return[t._v("\n                ￥"+t._s(e.row.price)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"seckillPrice",align:"center",width:"130"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("popover",{attrs:{placement:"top-start",title:"秒杀价格",head:"秒杀价格",content:"秒杀活动中，用户购买商品的价格。"}})]}},{key:"default",fn:function(e){return[n("el-form-item",{attrs:{prop:"list."+e.$index+".seckillPrice",rules:t.$rule.price("价格",.01,e.row.price,!0,function(){return e.row.seckillPrice}),"label-width":"auto"}},[n("el-input",{staticClass:"prepend-txt",attrs:{disabled:t.disabled,placeholder:"价格",type:"age",maxlength:"8"},model:{value:e.row.seckillPrice,callback:function(n){t.$set(e.row,"seckillPrice","string"==typeof n?n.trim():n)},expression:"scope.row.seckillPrice"}},[n("template",{slot:"prepend"},[t._v("￥")])],2)],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"stock",align:"center",width:"110"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("popover",{attrs:{placement:"top-start",title:"总库存限制",head:"总库存限制",content:"在本次秒杀活动中，商品的秒杀总库存，不是每天的库存数。(∑场次库存*h活动天数)<=秒杀库存"}})]}},{key:"default",fn:function(e){return[n("el-form-item",{attrs:{prop:"list."+e.$index+".stock",rules:t.$rule.quantity("总库存",null,999999,!0,function(){return e.row.stock}),"label-width":"auto"}},[n("el-input",{staticClass:"input-txt",attrs:{disabled:t.disabled,placeholder:"总库存"},on:{input:function(n){return t.changeAllStock(n,e.$index)}},model:{value:e.row.stock,callback:function(n){t.$set(e.row,"stock","string"==typeof n?n.trim():n)},expression:"scope.row.stock"}})],1)]}}])}),t._v(" "),t.getSenceStatus(t.sence)&&!t.disabled?n("el-table-column",{attrs:{prop:"stock",align:"center",width:"110"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("popover",{attrs:{placement:"top-start",title:"批量设置",head:"批量设置",content:"输入数量，点击设置，可以批量设置所有场次的秒杀库存。"}})]}},{key:"default",fn:function(e){return[n("el-form-item",{attrs:{"label-width":"auto"}},[n("el-input",{staticClass:"input-txt",attrs:{disabled:t.disabled,placeholder:"批量"},on:{input:function(n){return t.changeBatch(n,e.$index)}},model:{value:e.row.batch,callback:function(n){t.$set(e.row,"batch",t._n(n))},expression:"scope.row.batch"}})],1)]}}],null,!1,2608735469)}):t._e(),t._v(" "),t._l(t.sence,function(e,i){return e.opened?n("el-table-column",{key:e.label,attrs:{align:"center",width:"110"},scopedSlots:t._u([{key:"header",fn:function(i){return[t._v("\n                "+t._s(e.label)+"库存"),n("br"),t._v(t._s(e.time)+"\n            ")]}},{key:"default",fn:function(e){return[n("el-form-item",{attrs:{prop:"list."+e.$index+".senceStock"+i,rules:t.getRule(e.row,e.$index,i),"label-width":"auto"}},[n("el-input",{staticClass:"input-txt",attrs:{disabled:t.disabled,placeholder:"库存"},model:{value:e.row["senceStock"+i],callback:function(n){t.$set(e.row,"senceStock"+i,"string"==typeof n?n.trim():n)},expression:"scope.row['senceStock'+index]"}})],1)]}}],null,!0)}):t._e()}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"120"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("popover",{attrs:{placement:"top-start",title:"秒杀条件",head:"参加秒杀条件",content:"输入数量，点击设置，可以一次性设置该商品所有场次的秒杀库存。如果商品有设置购买条件自动带出。"}})]}},{key:"default",fn:function(e){return t._l(t.getCondition(e.row.buyConditions),function(e,i){return n("p",{key:i},[t._v(t._s(e))])})}}])}),t._v(" "),t.disabled?t._e():n("el-table-column",{attrs:{align:"center",width:"120",fixed:"right"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("popover",{attrs:{placement:"top-start",title:"操作",head:"操作",content:"点击条件设置，设置用户购买秒杀商品的条件。"}})]}},{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.set(e.row,e.$index)}}},[t._v("条件设置")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.del(e.$index)}}},[t._v("删除")])]}}],null,!1,1882932620)})],2),t._v(" "),n("set-condition-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},change:t.changeCondition},model:{value:t.conditionValue,callback:function(e){t.conditionValue=e},expression:"conditionValue"}})],1)},staticRenderFns:[]};var a=n("VU/8")(l,r,!1,function(t){n("Bi1x"),n("1mxC")},"data-v-3b6db045",null);e.default=a.exports},Bi1x:function(t,e){},XPjG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{visible:Boolean,value:Array},data:function(){return{data:function(t){var e=[];return["人车关系认证","身份证认证","驾驶证认证","机动车识别认证","购车订单认证"].forEach(function(t,n){e.push({key:n,label:t})}),e}(),defaultValue:this.value}},watch:{value:{handler:function(t,e){console.log("defaultValue++++",t),this.$set(this,"defaultValue",t)},deep:!0}},methods:{submitHandle:function(){this.$emit("input",this.defaultValue),this.$emit("update:visible",!1),this.$emit("change",this.defaultValue),this.$refs.transfer.leftChecked.splice(0,this.$refs.transfer.leftChecked.length),this.$refs.transfer.rightChecked.splice(0,this.$refs.transfer.rightChecked.length)},closeHandle:function(){this.$emit("update:visible",!1),this.$set(this,"defaultValue",[]),this.$refs.transfer.leftChecked.splice(0,this.$refs.transfer.leftChecked.length),this.$refs.transfer.rightChecked.splice(0,this.$refs.transfer.rightChecked.length)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"condition-dialog"},[n("el-dialog",{attrs:{title:"条件设置",visible:t.visible,width:"600px","close-on-click-modal":!1,"show-close":!1,center:"","append-to-body":""},on:{"update:visible":function(e){t.visible=e}}},[n("div",{staticClass:"flex justify-content-center"},[n("el-transfer",{ref:"transfer",attrs:{data:t.data,titles:["不需条件项","需要条件项"]},model:{value:t.defaultValue,callback:function(e){t.defaultValue=e},expression:"defaultValue"}})],1),t._v(" "),n("div",{staticClass:"dialog-footer flex justify-content-center",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"large"},on:{click:t.closeHandle}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{size:"large",type:"primary"},on:{click:t.submitHandle}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var l=n("VU/8")(i,o,!1,function(t){n("9tok")},"data-v-5d4de374",null);e.default=l.exports},cm2o:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={props:{title:String,width:{type:Number,default:200},content:String,head:String,trigger:{type:String,default:"hover"}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-popover",{attrs:{placement:"top-start",title:this.title,width:this.width,trigger:this.trigger,content:this.content}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[e("span",{domProps:{innerHTML:this._s(this.head)}}),e("i",{staticClass:"el-icon-question"})])])},staticRenderFns:[]},l=n("VU/8")(i,o,!1,null,null,null);e.default=l.exports}});