// pages/others/others.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  cbChanged(e){
    console.log(e.detail.value + " : " + e.target.dataset.aa)
  },
  rbChanged(e){
    console.log(e.detail.value + " : " + e.target.dataset.index)
  },
  fatherHandle(event){
    console.log("父亲被点击了")
  },
  sonHandle(event){
    console.log("儿子1被点击了")
  },
  son2Handle(event){
    console.log("儿子2被点击了")
  }
})