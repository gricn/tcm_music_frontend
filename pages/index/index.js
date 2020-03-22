//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    // cur:0,
    music_list:[{
      poster: 'https://hbimg.huabanimg.com/5b5af1223a184336e4d93fa4c5268326bc3845b24e6bc-DMoIpz_fw658',
      name: '中医音乐',
      author: '请欣赏',
      src: 'https://isure.stream.qqmusic.qq.com/C400001yrgmX2QaLwE.m4a?guid=3394337708&vkey=16300FA4FFB912AF01FC369246D4E27F1A5F3C91086137EEF852291685FB26C98B15C310E24614AB94B69344E70B9EFC97B25A2AF5390106&uin=5568&fromtag=66',
    }],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList:[{
      id: 0,
      url: "https://hbimg.huabanimg.com/cc7483bb7e9f7bd168d00e9aba2941e5dc0cf5d33c68f-YN9GOK_fw658"
    }, {
      id: 1,
        url: "https://hbimg.huabanimg.com/3ddffad15246fa4a7b847e747b1773edfd2a591544d6b-uB8l6M_fw658"
    }, {
      id: 2,
        url: "https://hbimg.huabanimg.com/297ffaa48cdb3a9756b45d207e21e490f5d92b193daa1-HCQJps_fw658"
    }, {
      id: 3,
        url: "https://hbimg.huabanimg.com/68765fb5aef5ed89d57a397248f4eaf3a6a4ec3a52ef0-xcNqIJ_fw658"
    }, {
      id: 4,
        url: "https://hbimg.huabanimg.com/ecdd77fcbeaf108501166bb2d028260acb5132b443891-eC8WXw_fw658"
    }],
    fan_url: "https://hbimg.huabanimg.com/9e0ac627e3055a688d0113d9bf039f44f0bc5d0f13674-wOWv3Y_fw658",
    fan_url2: "https://hbimg.huabanimg.com/83ae78fc6d25ee7bfd1903951918c57d109ecd7b5772f-3tVDLQ_fw658",
    menu_url:  "https://hbimg.huabanimg.com/9a02a800ce8af13b836d81422550dc03dec918d469792-sfKjeY_fw658",
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
  onLoad: function (options) {
    this.setData({ cur: options.cur })
    console.log(this.data.cur)
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
  },
})
