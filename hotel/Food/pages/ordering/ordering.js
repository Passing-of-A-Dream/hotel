
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vtabs: [],  // 分类
    activeTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '',
    });
    let titles = ['美食', '奶茶','主食','小食','下午茶','点心']
    let vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})
  },

  GetSettlement() {
    console.log('金额');
    wx.navigateTo({url: '../Settlement/Settlement'})
  },

  onTabCLick(e) {
    console.log(e.detail);
    let index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    console.log(e.detail);
    let index = e.detail.index
    console.log('change', index)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})