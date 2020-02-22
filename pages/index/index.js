//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    music_list:[{
      poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000c74pi162Cb6_1.jpg?max_age=2592000',
      name: '月牙湾',
      author: '丫蛋蛋',
      src: 'http://ws.stream.qqmusic.qq.com/C400003RZaJa1ZtfUq.m4a?guid=3394337708&vkey=3FDAD0BAF1C16EC2D46329D93E036DD46F1D6E4196303E419D9B1A867825CC77C5B14F23A6D64F644CFA0E837CD4C15C5A58C57F99B2D5FB&uin=5568&fromtag=66',
    }],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList:[{
      id: 0,
      url: "/pictures/gong.png"
    }, {
      id: 1,
      url: "/pictures/shang.png"
    }, {
      id: 2,
      url: "/pictures/jue.png"
    }, {
      id: 3,
      url: "/pictures/zhi.png"
    }, {
      id: 4,
      url: "/pictures/yu.png"
    }],
    fan_url: "/pictures/Fan_01.png",
    first_page_url:  "/pictures/first_page.png",
    first_page_url2: "/pictures/first_page2.png",
    menu_url:  "/pictures/menu.png",
    modalName:null,
    fan_hidden:0
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
    if (this.data.modalName ==='bottomModal'){
      this.setData({
        fan_hidden: 1
      })
    }

  },
  hideModal(e) {
    if (this.data.modalName === 'bottomModal') {
      this.setData({
        fan_hidden: 0
      })
    }
    this.setData({
      modalName: null
    })


  },

  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },

  To_tc_test:function(){
    wx.navigateTo({
      url: '../tc_test/tc_test',
    })
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    //this.audioCtx.play()
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
