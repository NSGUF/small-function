// pages/translate/folding/folding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      name: "菜单一",
      childList: [{
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }, {
        name: "子菜单三"
      }, {
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }, {
        name: "子菜单三"
      }, {
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }]
    }, {
      name: "菜单二",
      childList: [{
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }, {
        name: "子菜单三"
      }, {
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }, {
        name: "子菜单三"
      }, {
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }, {
        name: "子菜单三"
      }, {
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }, {
        name: "子菜单三"
      }]
    }, {
      name: "菜单三",
      childList: [{
        name: "子菜单一"
      }, {
        name: "子菜单二"
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 通常从数据库获取的数据是没有处理的，这里处理一下
    let listData = this.data.listData
    let id = 0;
    for (let i = 0; i < listData.length; i++) {
      listData[i].id = id++;
      listData[i].isShow = false;
    }
    this.setData({
      listData
    })
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
  clickChangeStatus: function(e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    const listData = this.data.listData;
    for (let i = 0; i < listData.length; i++) {
      if (listData[i].id === id) {
        listData[i].isShow = !listData[i].isShow
      }
    }
    this.setData({
      listData
    })
  }
})