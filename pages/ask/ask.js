// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0, // 0-发布 1-收藏
    listData: [],
    page: 1,
    hasMore: true,
    showManage: false
  },

  onLoad() {
    this.loadData();
  },

  // 切换标签
  switchTab(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      activeTab: index,
      page: 1,
      listData: []
    }, () => {
      this.loadData();
    });
  },

  // 加载数据
  loadData() {
    wx.showLoading({ title: '加载中...' });
    
    // 模拟API请求
    setTimeout(() => {
      const newData = this.getMockData();
      this.setData({
        listData: this.data.page === 1 ? newData : [...this.data.listData, ...newData],
        hasMore: newData.length >= 10,
        showManage: this.data.activeTab === 0 // 仅"我发布的"显示管理按钮
      });
      wx.hideLoading();
    }, 800);
  },

  // 上拉加载更多
  loadMore() {
    if (!this.data.hasMore) return;
    this.setData({
      page: this.data.page + 1
    }, () => {
      this.loadData();
    });
  },

  // 模拟数据
  getMockData() {
    const types = ['发布', '收藏'];
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + this.data.page * 100,
      title: `${types[this.data.activeTab]}的打听 ${i + 1}`,
      desc: '这是问题描述内容...',
      time: '2023-06-' + (10 + i) + ' 14:30',
      status: ['进行中', '已解决'][i % 2],
      image: '/images/placeholder.png'
    }));
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

  }
})