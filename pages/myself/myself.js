// pages/myself/myself.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {},
    name: ''

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  methods: {
  },
  onLoad() {
    this.setData({
      obj: getApp().globalData,
      obj: {
        imgt: "https://img1.baidu.com/it/u=2205110285,1532881525&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: "暂未登录",
        userid: "暂未登录"
      }
 
    })
  },
  // 登录
  bindgetuserinfo(e) {
    console.log('触发了');
    wx.getUserProfile({ 
      success: (res) => {
        console.log(res, "info");
        getApp().globalData.imgt = res.userInfo.avatarUrl;
        getApp().globalData.name = res.userInfo.nickName;
        this.setData({
          obj: getApp().globalData
        })
        wx.login({
          success: (res) => {
            console.log(res.code);
            // 1. 拿到code发送给后端
            wx.request({
              url: 'https://14d154aa440c940335fd24b2ae4087a2/user/wxapp/authorize',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                code: res.code
              },
              success: ((res) => {
                console.log(res, "123");
                getApp().globalData.userid = res.data.data.openid
                wx.setStorageSync('token', res.data.data.token)
                wx.setStorageSync('usert', JSON.stringify(getApp().globalData))
              })
            })
          },
        })
      }
    })
  },
 
  // 退出登录
  tuilongin() { 
    console.log("“退出登录了")
    wx.removeStorage({
      key: 'token',
    })
    wx.removeStorage({
      key: 'usert'
    })
 
    this.setData({
      obj: {
        imgt: "https://img1.baidu.com/it/u=2205110285,1532881525&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: "暂未登录",
        userid: "暂未登录"
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 登录按钮点击事件
 

  goToOrderPage: function(e) {
    const tabIndex = e.currentTarget.dataset.tab || 0;
    wx.navigateTo({
      url: `/pages/order/order?tab=${tabIndex}`
    });
  },

  goToAskPage: function() {
    wx.navigateTo({
      url: `/pages/ask/ask`
    });
  },

  goToReturnPage: function() {
    wx.navigateTo({
      url: `/pages/return/return`
    });
  },

  goToConcessionPage: function() {
    wx.navigateTo({
      url: `/pages/concession/concession`
    });
  },

  goToPositionPage: function() {
    wx.navigateTo({
      url: `/pages/position/position`
    });
  },

  goToTelePage: function() {
    wx.navigateTo({
      url: `/pages/tele/tele`
    });
  }
})


