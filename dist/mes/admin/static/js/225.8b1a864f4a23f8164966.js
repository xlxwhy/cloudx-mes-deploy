webpackJsonp([225],{"/D5A":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={body:{current:1,size:10}},o={"ResourceController.list()":{request:{}},"AuthController.login()":{request:{body:{username:"admin",password:"123456"}}},"ArticleController.add()":{request:{}},"ArticleController.modify()":{request:{}}};o["ArticleController.page()"]={request:l},o["ArticleController.get()"]={request:{path:{articleId:1e4}}},o["BizSettingController.open()"]={request:{}},o["BizSettingController.page()"]={request:l},o["FirstTimeUseOrderController.export()"]={request:l},o["FirstTimeUseOrderController.page()"]={request:l},o["PageSettingController.setPublishAds()"]={request:{}},o["PageSettingController.getPublishAds()"]={request:{}},o["PageSettingController.setPublishBanner()"]={request:{}},o["PageSettingController.getPublishBanner()"]={request:{}},o["PageSettingController.setPublishDiamond()"]={request:{}},o["PageSettingController.getPublishDiamond()"]={request:{}},o["PageSettingController.setPublishGoods()"]={request:{}},o["PageSettingController.getPublishGoods()"]={request:{}},o["PageSettingController.setPublishMember()"]={request:{}},o["PageSettingController.getPublishMember()"]={request:{}},o["PageSettingController.setPublishSeckill()"]={request:{}},o["PageSettingController.getPublishSeckill()"]={request:{}},o["ItemController.list()"]={request:{}},o["ItemController.add()"]={request:{}},o["ItemController.modify()"]={request:{}},o["ItemController.page()"]={request:l},o["ItemController.get()"]={request:{path:{itemId:"123123"}}},o["ItemController.delete()"]={request:{path:{itemId:1e4}}},o["JobOrderController.get()"]={request:{}},o["MaintainController.offShelf()"]={request:{}},o["MaintainController.page()"]={request:l},o["MaintainController.review()"]={request:{}},o["MaintainController.modify()"]={request:{}},o["MaintainController.submit()"]={request:{}},o["MaintainController.get()"]={request:{path:{maintainId:1e4}}},o["MaintainController.delete()"]={request:{path:{maintainId:1e4}}},o["MaintainManualController.getVehModelManual()"]={request:{}},o["MaintainManualController.add()"]={request:{}},o["MaintainManualController.modify()"]={request:{}},o["MaintainManualController.page()"]={request:l},o["MaintainManualController.get()"]={request:{path:{maintainManualId:1e4}}},o["MaintainManualController.delete()"]={request:{path:{maintainManualId:1e4}}},o["MaintainOrderController.export()"]={request:l},o["MaintainOrderController.page()"]={request:l},o["MaintainOrderController.get()"]={request:{path:{maintainOrderId:1e4}}},o["ScenarioController.save()"]={request:{}},o["ScenarioController.list()"]={request:{}},o["ScenarioController.page()"]={request:l},o["ScenarioController.get()"]={request:{path:{scenarioId:1e4}}},o["ScenarioController.delete()"]={request:{path:{scenarioId:1e4}}},o["PartsController.add()"]={request:{}},o["PartsController.export()"]={request:l},o["PartsController.import()"]={request:{}},o["PartsController.modify()"]={request:{}},o["PartsController.page()"]={request:l},o["PartsController.get()"]={request:{path:{partsId:1e4}}},o["PartsController.delete()"]={request:{path:{partsId:1e4}}},o["GoodsController.modify()"]={request:{}},o["GoodsController.offShelf()"]={request:{}},o["GoodsController.pagePartsGoods()"]={request:l},o["GoodsController.pageVirtualGoods()"]={request:l},o["GoodsController.review()"]={request:{}},o["GoodsController.submit()"]={request:{}},o["GoodsController.getPartsGoods()"]={request:{path:{partsGoodsId:1e4}}},o["GoodsController.getVirtualGoods()"]={request:{path:{virtualGoodsId:1e4}}},o["GoodsController.delete()"]={request:{path:{goodsId:1e4}}},o["PartsGoodsOrderController.export()"]={request:l},o["PartsGoodsOrderController.page()"]={request:l},o["PartsGoodsOrderController.get()"]={request:{path:{partsGoodsOrderId:1e4}}},o["PartsMallCategoryController.list()"]={request:{}},o["PartsMallCategoryController.save()"]={request:{}},o["PartsMallCategoryController.get()"]={request:{path:{partsMallCategoryId:1e4}}},o["PartsMallCategoryController.delete()"]={request:{path:{partsMallCategoryId:1e4}}},o["PartsTypeController.save()"]={request:{}},o["PartsTypeController.list()"]={request:{}},o["PartsTypeController.page()"]={request:l},o["PartsTypeController.get()"]={request:{path:{partsTypeId:1e4}}},o["PartsTypeController.delete()"]={request:{path:{partsTypeId:1e4}}},o["RefundOrderController.getByNum()"]={request:{path:{relatedOrderNo:"RO85552545577"}}},o["RefundOrderController.export()"]={request:l},o["RefundOrderController.page()"]={request:l},o["RefundOrderController.get()"]={request:{path:{refundOrderId:1e4}}},o["SeckillSettingController.save()"]={request:{}},o["SeckillSettingController.get()"]={request:{}},o["SeckillController.offShelf()"]={request:{}},o["SeckillController.page()"]={request:l},o["SeckillController.review()"]={request:{}},o["SeckillController.save()"]={request:{}},o["SeckillController.submit()"]={request:{}},o["SeckillController.get()"]={request:{path:{seckillId:1e4}}},o["SeckillController.delete()"]={request:{path:{seckillId:1e4}}},o["TradeRuleSettingController.save()"]={request:{}},o["TradeRuleSettingController.get()"]={request:{}},o["VehicleController.listVehModel()"]={request:{}},o["VehicleController.getVehModelManual()"]={request:{}},o["VehicleController.page()"]={request:l},o["VehicleController.listSeriesModel()"]={request:{}},o["VirtualGoodsController.offShelf()"]={request:{}},o["VirtualGoodsController.page()"]={request:l},o["VirtualGoodsController.review()"]={request:{}},o["VirtualGoodsController.save()"]={request:{}},o["VirtualGoodsController.submit()"]={request:{}},o["VirtualGoodsController.get()"]={request:{path:{virtualGoodsId:1e4}}},o["VirtualGoodsOrderController.export()"]={request:l},o["VirtualGoodsOrderController.page()"]={request:l},o["VirtualGoodsOrderController.get()"]={request:{path:{virtualGoodsOrderId:1e4}}},r.default=o}});