webpackJsonp([250],{"+9yV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("BO1k"),s=a.n(r);t.default={data:function(){return{}},methods:{assembleItems:function(){var e=this.itemRuleTable.page.records,t=[],a=1,r=!0,i=!1,n=void 0;try{for(var l,u=s()(e);!(r=(l=u.next()).done);r=!0){var d=l.value,m={itemId:d.itemId,manualItemParts:[],sort:a++};if(t.push(m),d.detailItem.manItemParts){var o=1,h=!0,y=!1,c=void 0;try{for(var f,p=s()(d.detailItem.manItemParts);!(h=(f=p.next()).done);h=!0){var v=f.value,I={partsId:v.partsId,sort:o++,useQuantity:v.useQuantity};m.manualItemParts.push(I)}}catch(e){y=!0,c=e}finally{try{!h&&p.return&&p.return()}finally{if(y)throw c}}}}}catch(e){i=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw n}}return t},assembleRules:function(){var e=this.itemRuleTable.page.records,t=[],a=!0,r=!1,i=void 0;try{for(var n,l=s()(e);!(a=(n=l.next()).done);a=!0){var u=n.value,d={condMileages:[],itemId:u.itemId};for(var m in t.push(d),u.detailItem.ruleCheckbox)u.detailItem.ruleCheckbox[m]&&d.condMileages.push(m)}}catch(e){r=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}return t},assembleItemParts:function(e,t){var a=[],r=!0,i=!1,n=void 0;try{for(var l,u=s()(t);!(r=(l=u.next()).done);r=!0){var d=l.value,m={itemId:e.itemId,partsCode:d.partsCode,partsId:d.partsId,partsName:d.partsName,partsTypeName:d.partsTypeName,suggestPrice:d.suggestPrice,sort:"",useQuantity:""};a.push(m)}}catch(e){i=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw n}}return a},assembleBody:function(){return{description:this.detail.description,manualId:this.detail.manualId,manualItemRules:this.assembleRules(),manualItems:this.assembleItems(),manualType:this.manualType?this.manualType:1,modelCode:this.detail.modelCode,vehName:this.detail.vehName,vehNameCode:this.detail.vehNameCode,name:this.detail.name}},assembleBodyAdd:function(){return this.assembleBody()},assembleBodyModify:function(){return this.assembleBody()}}}}});