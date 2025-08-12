
Page({
  data: {
    spots: [
      {
        id: 1,
        name: "蜂蜜",
        type: "food",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/11.png",
        brief: "三种新鲜又营养的蜂蜜"
      },
      {
        id: 2,
        name: "三花鹅",
        type: "food",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/三花鹅1.png",
        brief: "鹅肉质鲜嫩 饱满 相当有嚼劲"
      },
      {
        id: 3,
        name: "鱼虾多多农家乐",
        type: "attraction",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/鱼虾多多1.png",
        brief: "有利用黄河水养殖的鲤鱼，同时配有垂钓池，在闲暇之余可自行垂钓，观落日美景。"
      },
      {
        id: 4,
        name: "枣园溜达鸡",
        type: "food",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/枣园溜达鸡1.png",
        brief: "“溜达鸡”肉细嫩多汁 肥而不腻 瘦而不柴"
      },
      {
        id: 5,
        name: "灵武市河东驿栈民宿旅店",
        type: "attraction",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/河东驿栈民宿旅店1.png",
        brief: "将当地特色美食、乡村文化融入其中，营造人情味浓厚的乡村氛围"
      },
      {
        id: 6,
        name: "落日湾",
        type: "attraction",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/落日湾1.png",
        brief: "集打卡拍照、露营烧烤、悠闲垂钓于一体的乡村旅游胜地"
      },
      {
        id: 7,
        name: "上桥村生态康养小院",
        type: "attraction",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/上桥村康养小院照片/上桥村照片/封面.jpg",
        brief: "集休闲养生、亲子共融、文化体验于一体的理想栖息地"
      },
      {
        id: 8,
        name: "水洞沟",
        type: "attraction",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/水洞沟景区宣传照片大图/封面.jpg",
        brief: "美丽又奇特的梦想旅游地"
      },
      {
        id: 9,
        name: "灵武长枣",
        type: "food",
        image: "cloud://linhexing-8gtbgmcq7e198071.6c69-linhexing-8gtbgmcq7e198071-1373744932/images/灵武长枣1.png",
        brief: "果皮紫红色，鲜艳靓丽，肉厚、质脆，酸甜适口，富含各种矿物质和维生素"
      }
    ]
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})