webpackJsonp([190],{"L5c/":function(e,i){},Tho2:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={props:{vehicle:{type:Object,default:function(){return{dialog:{visible:!1,loading:!1},data:[],selected:{modelCodes:[]}}}},selected:{type:Array,default:function(){return[]}}},data:function(){return{series:{modelCodes:[]},seriesIndex:0,model:"",modelIndex:0}},watch:{selected:{handler:function(e,i){}}},created:function(){this.loadVehicle()},methods:{handleSeries:function(e,i){this.series=e,this.seriesIndex=i,this.modelIndex=0,this.model=this.series.modelCodes[0]},handleSeriesClass:function(e,i){return this.seriesIndex==i?"selected":""},handleModel:function(e,i){this.model=e,this.modelIndex=i},handleModelClass:function(e,i){return this.modelIndex==i?"selected":""},handleConfirm:function(){var e=this.series.vehName,i=this.series.vehNameCode,s=this.model;this.$emit("confirm",{vehName:e,vehNameCode:i,modelCode:s}),this.vehicle.dialog.visible=!1},loadVehicle:function(){var e=this;this.vehicle.dialog.loading=!0,this.$api.VehicleController.listSeriesModel({},function(i){e.vehicle.dialog.loading=!1,console.log(i.body),e.vehicle.data=i.body,e.initVehicle()})},initVehicle:function(){if(this.vehicle.data&&this.vehicle.selected&&(this.series=this.$findByKey(this.vehicle.data,"vehNameCode",this.vehicle.selected.vehNameCode),this.series&&(this.seriesIndex=this.vehicle.data.indexOf(this.series))),this.series||(this.series=this.vehicle.data[0],this.seriesIndex=0),this.series)for(var e=0;e<this.series.modelCodes.length;e++){var i=this.series.modelCodes[e];i==this.vehicle.selected.modelCode&&(this.model=i,this.modelIndex=e)}this.model||(this.model=this.series.modelCodes[0],this.modelIndex=0)}}},l={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"basic-maitain-manual-vehicle-dialog"},[s("gtmc-detail-dialog",{attrs:{dialog:e.vehicle.dialog},on:{confirm:e.handleConfirm}},[s("div",{staticClass:"basic-maitain-manual-vehicle-dialog__content"},[s("div",{staticClass:"tree-panel__series"},e._l(e.vehicle.data,function(i,t){return s("div",{key:t,class:e.handleSeriesClass(i,t),on:{click:function(s){return e.handleSeries(i,t)}}},[s("div",[e._v("\n            "+e._s(i.vehName)+"("+e._s(i.vehNameCode)+")\n          ")]),e._v(" "),s("div",[s("i",{staticClass:"el-icon-arrow-right"})])])}),0),e._v(" "),s("div",{staticClass:"tree-panel__models"},e._l(e.series.modelCodes,function(i,t){return s("div",{key:t,class:e.handleModelClass(i,t),on:{click:function(s){return e.handleModel(i,t)}}},[s("div",[e._v("\n            "+e._s(i)+"\n          ")])])}),0)])])],1)},staticRenderFns:[]};var d=s("VU/8")(t,l,!1,function(e){s("L5c/")},null,null);i.default=d.exports}});