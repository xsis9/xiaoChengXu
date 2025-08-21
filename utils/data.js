// 模拟数据
const mockData = {
  food: [
    { id: 1, name: "川味火锅", price: 98, rating: 4.8, sales: 1200, 
      detail: "正宗四川麻辣火锅，选用上等牛油和三十余种香料熬制，配以新鲜毛肚、黄喉等特色食材。", 
      address: "市中心商业街88号", 
      hours: "10:00-22:00" 
    },
    { id: 2, name: "港式茶餐厅", price: 48, rating: 4.5, sales: 890, 
      detail: "经典港式风味，招牌菠萝油、丝袜奶茶、烧腊拼盘广受好评。", 
      address: "文化路156号", 
      hours: "08:00-23:00" 
    }
  ],
  hotel: [
    { id: 1, name: "星辰大酒店", price: 388, rating: 4.7, 
      detail: "五星级豪华酒店，配备全景落地窗、恒温泳池、SPA中心，距离机场仅15分钟车程。", 
      facilities: ["游泳池", "健身房", "免费WiFi", "停车场"], 
      checkIn: "14:00", 
      checkOut: "12:00" 
    },
    { id: 2, name: "青旅民宿", price: 128, rating: 4.3, 
      detail: "温馨青年旅舍，提供公共厨房、书吧、桌游区，适合背包客和学生党。", 
      facilities: ["共用厨房", "阅读区", "洗衣房"], 
      checkIn: "15:00", 
      checkOut: "11:00" 
    }
  ],
  travel: [
    { id: 1, name: "古城一日游", price: 199, rating: 4.9, 
      detail: "探索千年古城遗迹，专业导游讲解历史典故，包含特色午餐和纪念品。", 
      duration: "8小时", 
      route: "古城墙→博物馆→老街→钟鼓楼" 
    },
    { id: 2, name: "山水徒步", price: 99, rating: 4.6, 
      detail: "专业领队带队，穿越原始森林、溪流瀑布，提供登山杖和保险。", 
      duration: "6小时", 
      route: "景区入口→飞龙瀑→观云台→松涛林" 
    }
  ]
}

module.exports = mockData;