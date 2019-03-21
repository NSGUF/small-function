// pages/animation/bounce/bounce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowGuide: false,
    isShowGuideAnimation: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const that = this;
    setTimeout(() => {
      that.setData({
        isShowGuideAnimation: true,
        isShowGuide: true
      })
    }, 200)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  move: function() {}, //为了不能滑动下面的
  closeGuide: function() {
    const that = this;
    that.setData({
      isShowGuideAnimation: false
    })
    setTimeout(() => {
      that.setData({
        isShowGuide: false
      })
    }, 800)
  }
  
})