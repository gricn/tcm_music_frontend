var app = getApp()
// var util = require('../../utils/util.js')

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
    },
    time: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面onLoad")
    let temp = app.globalData.countDown.hour
    if (app.globalData.countDown.hour != null) {
      console.log("执行执行")
      let countDown = app.globalData.countDown
      let hour = countDown.hour
      let minute = countDown.minute
      let second = countDown.second
      let tmp = hour * 3600 + minute * 60 + second

      if (app.globalData.storedTime === 0) {
        let storedTime = app.globalData.storedTime
        // var time = util.formatTime(new Date()).getHours
        console.log("时间： " + Date().now())
      }
      clearInterval(this.data.countInterval)
      this.countDown(tmp)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
    var time = util.formatTime(new Date())
    this.setData({
      time: time
    })
    console.log(time)
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

    let countDown = this.data.countDown
    countDown.hour = parseInt(countDown.hour)
    countDown.minute = parseInt(countDown.minute)
    countDown.second = parseInt(countDown.second)

    app.globalData.countDown = countDown
    app.globalData.storedTime = this.data.time
    console.log("app已存储时间:" + this.data.time)
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
      hour = this.numAddZero(Math.floor(secondGiven / MS));
      // 分钟
      const m1 = secondGiven / 60;
      const m2 = hour * 60;
      minute = this.numAddZero(Math.floor(m1 - m2));
      // 秒
      const s1 = hour * 3600;
      const s2 = minute * 60;
      second = this.numAddZero(Math.floor(secondGiven - s1 - s2));

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
        // 需要修改
        app.bam.pause()
        console.log("音乐执行已执行")
      }
    }, 1000);
  },
})