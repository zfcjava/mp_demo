// pages/shoplist/shoplist.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoplists:[],
    pageIndex:0,
    pageSize:20,
    catIndex:1,
    hasMore:true
  },

  loadmore : function () {
    //如果没有数据，则停止网络请求
    if(!this.data.hasMore){
      return;
    }
    this.data.pageIndex++ ,
      wx.request({
        url: 'https://locally.uieee.com/categories/' + this.data.catIndex + '/shops',
        data: { _page: this.data.pageIndex, _limit: this.data.pageSize },
        success: (res) => {
          console.log(res.data.length)
          var newList = this.data.shoplists.concat(res.data);
          newList.concat(newList)

          //检查是否仍有新的数据 X-Total-Count
          console.log(res)
          var totalCount = parseInt(res.header['X-Total-Count'])
          var currentTotalCounts = this.data.pageSize * this.data.pageIndex;
          var flag = true;
          if(currentTotalCounts>=totalCount){
              flag = false;
          }
          console.log('totalCount : ' + totalCount)
          this.setData(
            {
              shoplists: newList,
              hasMore:flag
            }
          )

          wx.stopPullDownRefresh()
        }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title,
    })

    this.loadmore()
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
    //下拉刷新时，重置当前数据的状态
    this.setData({
      shoplists: [],
      pageIndex: 0,
      pageSize: 20,
      hasMore: true
    })
    this.loadmore()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadmore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})