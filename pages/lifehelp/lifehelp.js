Page({
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