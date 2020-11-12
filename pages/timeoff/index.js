var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeAmount: [0, 10, 20, 30, 60, 120],
    activityTime: 0,
    countInterval: null,
    countDown: {
      hour: '00',
      minute: '00',
      second: '00',
    }
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

  numAddZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  },

  countDown(e) {
    var that = this
    if(this.data.countInterval != null){
      clearInterval(this.data.countInterval)
      console.log('已清除其他倒计时')
    }
    
    const minuteGiven = e.currentTarget.dataset.timeselected
    let secondGiven = minuteGiven * 60

    this.data.countInterval = setInterval(() => {
      let hour = 0;
      let minute = 0;
      let second = 0;

      const MS = 60 * 60;
      hour = this.numAddZero(Math.floor(secondGiven / MS));

      const m1 = secondGiven / 60;
      const m2 = hour * 60;
      minute = this.numAddZero(Math.floor(m1 - m2));

      const s1 = hour * 3600;
      const s2 = minute * 60;
      second = this.numAddZero(Math.floor(secondGiven- s1 - s2));

      this.setData({
        countDown: {
          hour,
          minute,
          second,
        }
      });

      secondGiven -= 1;

      if (secondGiven < 0) {
        clearInterval(this.data.countInterval);
        this.setData({
          countInterval: null,
          countDown: {
            hour: '00',
            minute: '00',
            second: '00',
          }
        });
        app.bam.pause()
        console.log("执行成功")
      }
    }, 1000);
  },
})