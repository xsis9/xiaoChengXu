// town-intro.js
Page({
  data: {
    swiperImages: [
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片6.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片1.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片2.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片3.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片4.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片5.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片7.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片8.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片9.png',
      'cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/轮播图/图片10.png'
    ],
    townInfo: {
      name: "临河镇",
      slogan: "航空驿镇·美丽临河"
    },
    attractions: [
      {
        id: 1,
        name: "黄河落日",
        desc: "长河落日熔金",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/黄河落日，长河落日熔金.png"
      },
      {
        id: 2,
        name: "悠远驼铃",
        desc: "大漠苍茫与丝路历史的见证",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/悠远驼铃，大漠苍茫与丝路历史的见证.png"
      },
      {
        id: 3,
        name: "明长城",
        desc: "冷兵器时代的智慧结晶",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/明长城，冷兵器时代的智慧结晶.png"
      },
      {
        id: 4,
        name: "水洞沟",
        desc: "穿越时空的文明印记",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/水洞沟，穿越时空的文明印记.png"
      },
      {
        id: 5,
        name: "治沙基地",
        desc: "人进沙退的伟大奇迹",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/治沙基地，人进沙退的伟大奇迹.png"
      },
      {
        id: 6,
        name: "生态康养",
        desc: "感受田园美好生活",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/生态康养，感受田园美好生活.png"
      },
      {
        id: 7,
        name: "藏兵洞",
        desc: "古代军事工程的奇迹",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/藏兵洞，古代军事工程的奇迹.png"
      },
      {
        id: 8,
        name: "银川河东机场",
        desc: "连接世界的枢纽",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/银川河东机场——连接世界的枢纽.png"
      },
      {
        id: 9,
        name: "马鞍山甘露寺",
        desc: "晨钟暮鼓净化心灵",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/马鞍山甘露寺，晨钟暮鼓净化心灵.png"
      },
      {
        id: 10,
        name: "二道沟岩画",
        desc: "黄河东岸的史前艺术瑰宝",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/点位/二道沟岩画，黄河东岸的史前艺术瑰宝.png"
      }
    ],
    historyImage: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/首页/宋代记载.png",
    historyText: "临河镇历史悠久，文化底蕴深厚。水洞沟古人类文化遗址、二道沟岩画、明长城、藏兵洞、马鞍山甘露寺众多文化名胜古迹让临河镇更显神奇而富有魅力。自古以来，这里就是农耕文化与北方游牧文化 的交融之地和古丝绸之路上的重要驿站。得黄河之利，这里自古便成就了“贺兰山下果园城，塞北江南旧有名”的美誉。",
    foods: [
      {
        id: 1,
        name: "桂花糯米藕",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/枣园溜达鸡2.png"
      },
      {
        id: 2,
        name: "清蒸白鱼",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/灵武长枣1.png"
      },
      {
        id: 3,
        name: "笋干烧肉",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店12.png"
      },
      {
        id: 4,
        name: "酒酿圆子",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店11.png"
      }
    ]
  },
  
  onLoad() {
    // 可以在这里添加数据请求
  },
  
  // 按钮点击事件
  contactUs() {
    wx.makePhoneCall({
      phoneNumber: '400-123-4567'
    })
  },
  
  showMap() {
    wx.openLocation({
      latitude: 31.2304,
      longitude: 121.4737,
      name: '桃源古镇',
      address: '浙江省嘉兴市桃源镇'
    })
  },

  navigateToFood() {
    wx.navigateTo({
      url: '/pages/list/list?category=food',
    })
  },
  
  navigateToHotel() {
    wx.navigateTo({
      url: '/pages/list/list?category=hotel',
    })
  },
  
  navigateToTravel() {
    wx.navigateTo({
      url: '/pages/list/list?category=travel',
    })
  }
})