// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, // 当前选中的标签索引
    orders: [],    // 订单列表数据
    tabList: [
      { name: '全部', status: 'all', index: 0 },
      { name: '待付款', status: 'pending_payment', index: 1 },
      { name: '待发货', status: 'pending_shipment', index: 2 },
      { name: '待收货/服务中', status: 'pending_receipt', index: 3 },
      { name: '已完成', status: 'completed' },
      { name: '已取消', status: 'cancelled' }
    ]
  },
  onLoad(options) {
    // 从options获取初始tab索引
    const initialTab = options.tab ? parseInt(options.tab) : 0;
    this.setData({
      currentTab: initialTab
    });
    this.loadOrders(this.data.tabList[initialTab].status);
  },

  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    });
    this.loadOrders(this.data.tabList[index].status);
  },

  switchTab: function(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    if (this.data.currentTab !== index) {
      this.setData({
        currentTab: index
      }, () => {
        const status = this.data.tabList[index].status;
      console.log('切换到:', this.data.tabList[index].name, '状态:', status);
      this.loadOrders(status);
      });
    }
  },

  loadOrders: function(status) {
    wx.showLoading({ title: '加载中...' });
    setTimeout(() => {
      this.setData({ 
        orders: [] // 替换为实际数据
      }, () => {
        wx.hideLoading();
        console.log('数据加载完成，状态:', status);
      });
    }, 500);
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