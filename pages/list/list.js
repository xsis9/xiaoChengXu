// 模拟数据
const goodsData = {
  food: [
    { id: 1, 
      name: "美味蜂蜜", 
      price: 20, 
      desc: "三种新鲜又营养的蜂蜜", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/11.png",
      tags: ["槐花蜜", "枣花蜜", "百花蜜"] 
    },
    { id: 2, 
      name: "三花鹅", 
      price: 168, 
      desc: "鹅肉质鲜嫩 饱满 相当有嚼劲", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/三花鹅1.png", 
      tags: ["肉质鲜嫩"]
    },
    { id: 3, 
      name: "枣园溜达鸡", 
      price: 298, 
      desc: "“溜达鸡”肉细嫩多汁 肥而不腻 瘦而不柴", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/枣园溜达鸡1.png", 
      tags: ["细嫩多汁", "肥而不腻", "瘦而不柴"] 
    },
    { id: 4, 
      name: "灵武长枣", 
      price: 298, 
      desc: "果皮紫红色，鲜艳靓丽，肉厚、质脆，酸甜适口，富含各种矿物质和维生素", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/灵武长枣1.png", 
      tags: ["鲜艳靓丽", "酸甜适口"] 
    }
  ],
  hotel: [
    { id: 5, 
      name: "鱼虾多多农家乐", 
      price: 688, 
      desc: "有利用黄河水养殖的鲤鱼，同时配有垂钓池，在闲暇之余可自行垂钓，观落日美景。", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼虾多多1.png", 
      tags: ["休闲", "旅游", "养殖"] 
    },
    { id: 6, 
      name: "灵武市河东驿栈民宿旅店", 
      price: 888, 
      desc: "将当地特色美食、乡村文化融入其中，营造人情味浓厚的乡村氛围", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店1.png", 
      tags: ["特色美食", "乡村文化"] 
    },
    { id: 7, 
      name: "上桥村生态康养小院", 
      price: 788, 
      desc: "集休闲养生、亲子共融、文化体验于一体的理想栖息地", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/封面.jpg", 
      tags: ["休闲养生", "亲子共融", "文化体验"] 
    },
    { id: 15, 
      name: "银川机场万信酒店", 
      price: 788, 
      desc: "简约现代的客房空间宽敞，大部分房间都带有阳台", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/1首旅万信229间/图片1.png", 
      tags: ["智能化客控系统", "自助早餐厅", "健身房"] 
    },
    { id: 16, 
      name: "河东空港酒店", 
      price: 788, 
      desc: "客房设施完善，布置温馨舒适，温暖的灯光，经典简约的装饰，营造出温馨优雅的氛围", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/4河东空港酒店60间/图片1.png", 
      tags: ["舒适", "安全", "清洁", "时尚"] 
    },
    { id: 17, 
      name: "德瑞酒店", 
      price: 788, 
      desc: "地理位置优越，紧邻银川市机场，专车接送，交通便利，价格实惠", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/7德瑞酒店33间/图片1.png", 
      tags: ["舒适", "安全", "清洁", "时尚"] 
    },
    { id: 18, 
      name: "黄河境云酒店", 
      price: 788, 
      desc: "可观黄河落日、可品宁夏红酒、可尝宁夏手抓，可给心灵放假", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/8黄河境云酒店30间/图片1.png", 
      tags: ["舒适", "安全", "清洁", "时尚"] 
    },
    { id: 19, 
      name: "漠溪湾花园酒店", 
      price: 788, 
      desc: "集花园、住宿、餐饮、会议、健康休闲等为一体的酒店", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/3漠溪湾酒店72间/图片1.png", 
      tags: ["花园", "餐饮", "会议", "休闲"] 
    },
    { id: 20, 
      name: "希岸酒店", 
      price: 788, 
      desc: "以“小幸感，宠你开始”为核心价值主张，倡 导一种旅途中的新生活态度，无论何时，出游 何地，选择一个贴心、懂自己的休憩空间", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/2西岸酒店107间/图片1.png", 
      tags: ["智能化客控系统", "自助早餐厅", "健身房"] 
    },
    { id: 21, 
      name: "西港悦捷酒店", 
      price: 788, 
      desc: "客房设施齐全，温馨典雅", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/5西港悦捷酒店38间/图片1.png", 
      tags: ["自助早餐厅", "健身房"] 
    },
    { id: 22, 
      name: "翔泰酒店", 
      price: 788, 
      desc: "客房装修典雅，设计新颖，柔软舒适的床品，亲和您的肌肤，人性化的软硬双枕，让您享受每一个夜晚", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/6翔泰酒店35间/图1.png", 
      tags: ["设施齐全", "服务周到"] 
    },
    { id: 23, 
      name: "泽丰酒店", 
      price: 788, 
      desc: "出行方便快捷，设施齐全", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/住宿/9泽丰酒店30间/图片1.png", 
      tags: ["设施齐全", "服务周到"] 
    },
  ],
  travel: [
    { id: 8, 
      name: "落日湾", 
      price: 198, 
      desc: "集打卡拍照、露营烧烤、悠闲垂钓于一体的乡村旅游胜地", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾1.png", 
      tags: ["露营烧烤", "古打卡拍照", "悠闲垂钓"] 
    },
    { id: 9, 
      name: "水洞沟", 
      price: 1680, 
      desc: "美丽又奇特的梦想旅游地", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/封面.jpg", 
      tags: ["中国史前考古的发祥地", "中西方文化交流的历史见证", "全国重点文物保护单位"] 
    },
    { id: 10, 
      name: "宁夏灵河房车露营地", 
      price: 1680, 
      desc: "观看“长河落日”、夜赏“星空朗月”的绝美度假园区", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/房车露营地/d255dc4ac57278f7198b2dfe7a633d5.jpg", 
      tags: ["房车住宿","自驾烧烤","极限运动","研学教育","水上娱乐","月光营地"] 
    },
    { id: 11, 
      name: "宁夏沙漠绿化与沙产业发展基金会", 
      price: 1680, 
      desc: "基金会以‘治沙、富民、育人’为核心理念，致力于探索生态保护与经济发展的共赢之路。 ", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/沙产业基金会/10bc4f37327f77c0d13a5f39636c0f32.jpg", 
      tags: ["生态旅游", "生态研学", "采摘"] 
    },
    { id: 12, 
      name: "极限运动场", 
      price: 1680, 
      desc: "为滑板、小轮车和攀岩爱好者提供了高标准的训练与竞技空间。 ", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/极限运动场/b55f098e2c6358b60accd84ffd1cd72e.jpg", 
      tags: ["滑板", "小轮车", "攀岩"] 
    },
    { id: 13, 
      name: "二道沟“渔悦湾乐园”——黄河岸边的生态渔趣天堂", 
      price: 1680, 
      desc: "“渔悦湾乐园”生态旅游综合体，将渔业养殖与休闲体验完美融合 ", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼悦湾/1ad5e259ce44d7ad0583920864afb083.jpg", 
      tags: ["旅游观光", "垂钓娱乐", "水产养殖"] 
    },
    { id: 14, 
      name: "石坝村先锋农场：四季飘香的田园乐活天地", 
      price: 1680, 
      desc: "依托18座现代化生态温室大棚，精心打造“四季果香”主题农旅综合体。", 
      image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/石坝村先锋农场/图片1.png", 
      tags: ["采摘体验", "农业教育", "农家餐饮"] 
    },
  ]
}

Page({
  data: {
    goodsList: [],
    categoryName: ""
  },

  onLoad(options) {
    const category = options.category
    let nameMap = { food: "美食", hotel: "住宿", travel: "旅游" }
    
    this.setData({
      goodsList: goodsData[category],
      categoryName: nameMap[category]
    })
    
    wx.setNavigationBarTitle({
      title: nameMap[category]
    })
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})