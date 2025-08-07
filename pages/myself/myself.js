// pages/myself/myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    basePhotoUrl: 'https://your-cdn.com/', // 必须定义
    userInfo: {
      headPic: '',
      wwHeadPic: '',
      username: ''
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  onLoginTap: function() {
    wx.getUserProfile({
      desc: '获取用户相关信息',
      success: res => {
        if (res.errMsg === "getUserProfile:ok") {
          let username = res.userInfo.nickName;
          let headPic = res.userInfo.avatarUrl;
          wx.login({
            success: async res => {
              if (res.errMsg === "login:ok") {
                const response = await myRequest ({
                  url: api.BASE_URL + "/app/user/wx_login",
                  method:  "POST",
                  data: {
                    wxHeadPic: headPic,
                    wxUsername: username,
                    code: res.code,
                  }
                });
                if (response.data.code === 0) {
                  Notify({type: "success", message: response.data.msg, duration: 1000 });
                  Cache.setCache(getApp().globalDate.SESSION_KEY_LOGIN_USER, response.data.data.token, 3600);
                  this.setData({
                    userInfo: response.data.data,
                    editUser: response.data.data,
                    isLogin: true,
                  });
                } else {
                  Notify({ type: "danger", message: response.data.msg, duration: 2000 })
                }
              } else {
                wx.showToast({
                  icon: "error",
                  title: "登录失败",
                })
              }
            },
          })
        }
      }
    })
  },

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
  }
})


