var app = getApp()
// var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeAmount: [5, 10, 20, 30, 60, 120],
    activityTime: 0,
    countInterval: null,
    countDown: {
      hour: '00',
      minute: '00',
      second: '00',
    },
    time: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面onLoad")
    if (app.globalData.storedFormatTime !== 0) {
      let storedFormatTime = app.globalData.storedFormatTime
      console.log("storedFormatTime:" + storedFormatTime)
      let nowFormatTime = Date.parse(new Date())
      let tmp = (storedFormatTime - nowFormatTime) / 1000
      this.data.countInterval = null
      this.countDown(tmp)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
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
    console.log("页面onHide")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面onUnload")
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
    // 当用户重复点击倒计时按钮时
    if (this.data.countInterval != null) {
      clearInterval(this.data.countInterval)
      console.log('已清除其他倒计时')
    }

    if (e.currentTarget != null && e.currentTarget.dataset.timeselected != null) {
      const minuteGiven = e.currentTarget.dataset.timeselected
      var secondGiven = minuteGiven * 60
    } else {
      var secondGiven = e
    }
    console.log("secondGiven: " + secondGiven)

    this.data.countInterval = setInterval(() => {
      let hour = 0;
      let minute = 0;
      let second = 0;
      // 小时
      const MS = 60 * 60;
      hour = that.numAddZero(Math.floor(secondGiven / MS));
      // 分钟
      const m1 = secondGiven / 60;
      const m2 = hour * 60;
      minute = that.numAddZero(Math.floor(m1 - m2));
      // 秒
      const s1 = hour * 3600;
      const s2 = minute * 60;
      second = that.numAddZero(Math.floor(secondGiven - s1 - s2));

      that.setData({
        countDown: {
          hour,
          minute,
          second,
        }
      });

      secondGiven -= 1;

      if (secondGiven < 0) {
        clearInterval(that.data.countInterval);
        that.setData({
          countInterval: null,
          countDown: {
            hour: '00',
            minute: '00',
            second: '00',
          }
        });
        // 需要修改
        app.globalData.bam.pause()
        app.globalData.storedFormatTime = 0
      }
    }, 1000);

    // 计算倒计时截止时间
    let nowFormatTime = Date.parse(new Date())
    app.globalData.storedFormatTime = nowFormatTime + secondGiven * 1000
  },

  cancelCountDown(){
    clearInterval(this.data.countInterval)
    this.setData({
      countInterval: null,
      countDown: {
        hour: '00',
        minute: '00',
        second: '00',
      }
    });
  }


})