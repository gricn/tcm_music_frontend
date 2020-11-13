//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')

Page({
  options: {
    pureDataPattern: /^_/   // 指定所有 _ 开头的数据字段为纯数据字段
  },
  data: {
    cur: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isRegistered: false,
    motto: 'Hi！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    playSwitchChecked: false,
    randomSwitchChecked: false,
    _itemNum: 0, // 用来存放当前播放的音乐种类数字，0~4分别对应 宫商角徵羽。当其他函数调用 playMusic
    currentSongIndexList: [0, 0, 0, 0, 0], // 用来存放5播放页面音乐index
    nextSongIndexList: [1, 1, 1, 1, 1],

    // 微信小程序swiper命名不规范，swiper和swipe没有关系
    swiperList: {
      swiper1: {
        "id": "a0",
        "url": "https://hbimg.huabanimg.com/cc7483bb7e9f7bd168d00e9aba2941e5dc0cf5d33c68f-YN9GOK",
        "nextSongName": "渔舟唱晚"
      },
      swiper2: {
        "id": "a1",
        "url": "https://hbimg.huabanimg.com/3ddffad15246fa4a7b847e747b1773edfd2a591544d6b-uB8l6M",
        "nextSongName": "金音2"
      },
      swiper3: {
        "id": "a2",
        "url": "https://hbimg.huabanimg.com/297ffaa48cdb3a9756b45d207e21e490f5d92b193daa1-HCQJps",
        "nextSongName": "木"
      },
      swiper4: {
        "id": "a3",
        "url": "https://hbimg.huabanimg.com/68765fb5aef5ed89d57a397248f4eaf3a6a4ec3a52ef0-xcNqIJ",
        "nextSongName": "火音2"
      },
      swiper5: {
        "id": "a4",
        "url": "https://hbimg.huabanimg.com/ecdd77fcbeaf108501166bb2d028260acb5132b443891-eC8WXw",
        "nextSongName": "水音2"
      }
    },
    fan_url: "https://hbimg.huabanimg.com/9e0ac627e3055a688d0113d9bf039f44f0bc5d0f13674-wOWv3Y",
    fan_url2: "https://hbimg.huabanimg.com/83ae78fc6d25ee7bfd1903951918c57d109ecd7b5772f-3tVDLQ",
    menu_url: "https://hbimg.huabanimg.com/9a02a800ce8af13b836d81422550dc03dec918d469792-sfKjeY",

    modalName: null,
    fan_hidden: 0,
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    // 获取用户注册情况

    //大致逻辑是：首先看看缓存有没有isRegistered，如果没，则请求服务器访问，
    //根据用户openid判断是否注册，如果没有，最后才确定没注册，首页显示注册按钮
    wx.getStorage({
      key: 'isRegistered',
      success: res => {
        console.log("从缓存读取用户注册情况成功，值为:" + res.data)
        app.globalData.isRegistered = res.data
        that.setData({
          isRegistered: res.data
        })
      },
      fail: e => {
        console.log("未能从缓存读取用户注册情况，请求服务器中……")
        wx.getStorage({
          key: 'openid',
          success: res => {
            wx.request({
              url: 'https://www.gricn.top:4000/isRegistered/' + res.data,
              success(res) {
                if (res.data.exist) {
                  wx.setStorage({
                    key: 'isRegistered',
                    data: true,
                  })
                  wx.setStorage({
                    key: 'user_gender',
                    data: res.data.gender
                  })
                  that.setData({
                    isRegistered: true,
                  })
                  app.globalData.isRegistered = true
                  app.globalData.user_gender = res.data.gender

                  console.log("用户已注册 从服务器读取用户注册情况成功")
                } else {
                  console.log("用户未注册 从服务器读取用户注册情况失败")
                }
              }
            })
          },
          fail: e => {
            console.log("用户未注册鸭")
          }
        })
      }
    })

    // 如果存在参数，则获得上一页面传回的参数
    if (options.cur != null) {
      this.setData({
        cur: options.cur
      })
    }
  },

  onShow: function (option) {
    var that = this
    wx.getStorage({
      key: 'isRegistered',
      success: res => {
        this.setData({
          isRegistered: res.data
        })
      }
    })
    wx.setStorage({
      key: "skipCoverPage",
      data: "true"
    })
    // app.globalData.bam.title = "请欣赏"
    console.log("isNaN(e): " + isNaN(option))
  },

  listenerBAM: function () {
    var that = this

    app.globalData.bam.onWaiting(() => {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 300)
    })

    // //监听音频播放进度
    // app.globalData.bam.onTimeUpdate(() => { 
    //   // console.log(app.globalData.bam.currentTime)
    // })

    app.globalData.bam.onError(() => {
      wx.showModal({
        title: '错误',
        content: '音频播放错误，请检测网络情况',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    })

    app.globalData.bam.onEnded(() => { //监听音乐自然播放结束
      that.nextMusicPlay()
      wx.showToast({
        title: '正在切换下一首音乐',
        icon: 'none',
        duration: 1000
      })
    })

    app.globalData.bam.onNext(() => {
      that.nextMusicPlay()
    })

    app.globalData.bam.onPrev(() => {
      that.nextMusicPlay()
    })

    app.globalData.bam.onPlay(() => {
      that.setData({
        playSwitchChecked: true
      })
    })

    app.globalData.bam.onPause(() => {
      that.setData({
        playSwitchChecked: false
      })
    })

    app.globalData.bam.onStop(() => {
      that.setData({
        playSwitchChecked: false
      })
    })
  },

  nextMusicPlay(e) {
    this.listenerBAM()

    /* 大致思路：先进行音乐播放，然后更新下一首歌曲的信息 */
    var that = this

    // isNaN()这个函数要好好研究，写了个卡在这里的bug
    let itemNum = isNaN(e.currentTarget.id[1]) ? this.data._itemNum : parseInt(e.currentTarget.id[1])
    console.log("目前所在页面为：" + itemNum)
    let nextSongIndex = this.data.nextSongIndexList[itemNum]
    var musicListName = ""

    // 这部分很浪费资源，要修改
    let appData = app.globalData
    let gong_len = appData.gong_list.length
    let shang_len = appData.shang_list.length
    let jue_len = appData.jue_list.length
    let zhi_len = appData.zhi_list.length
    let yu_len = appData.yu_list.length
    let tempLen = 0

    switch (itemNum) {
      case 0:
        musicListName = "gong_list"
        tempLen = gong_len
        break
      case 1:
        musicListName = "shang_list"
        tempLen = shang_len
        break
      case 2:
        musicListName = "jue_list"
        tempLen = jue_len
        break
      case 3:
        musicListName = "zhi_list"
        tempLen = zhi_len
        break
      case 4:
        musicListName = "yu_list"
        tempLen = yu_len
        break
    }


    // 获取音乐海报
    let item = appData[musicListName][nextSongIndex]
    var nextSongPicURL = 'https://www.gricn.top:4000/api/poster/' + item.music_id
    wx.request({
      url: nextSongPicURL,
      success(res) {
        app.globalData.bam.coverImgUrl = res.data
      },
      fail(res) {
        console.log("加载音乐海报失败：" + res)
      }
    })


    // 获取下一首歌曲的音乐名、歌手和MP3地址
    app.globalData.bam.title = item.music_name
    console.log("下一首歌曲的音乐名为：" + item.music_name)
    app.globalData.bam.singer = item.music_authors

    let nextSongMP3URL = 'https://www.gricn.top:4000/api/song/' + item.music_id
    wx.request({
      url: nextSongMP3URL,
      success(res) {
        app.globalData.bam.src = res.data
        console.log("切换下一首歌曲成功")
        that.data.currentSongIndexList[itemNum] = nextSongIndex
      }
    })

    /* ------------------------------------------- */
    //更新下一首歌曲的index
    let currentSongIndex = nextSongIndex

    nextSongIndex = this.data.randomSwitchChecked ?
      Math.floor(Math.random() * tempLen) :
      (currentSongIndex + 1) % tempLen
    this.data.nextSongIndexList[itemNum] = nextSongIndex

    // 最后更新首页显示下一首的内容
    let temp = "swiper" + (itemNum + 1)
    let tempJSON = this.data.swiperList
    tempJSON[temp].nextSongName = appData[musicListName][nextSongIndex].music_name
    console.log("下一首内容存储成功：" + appData[musicListName][nextSongIndex].music_name)

    this.setData({
      swiperList: tempJSON,
      playSwitchChecked: true
    })
  },

  // 音乐播放暂停switch
  musicPlay(e) {
    this.listenerBAM()
    let itemNum = !isNaN(e) ? parseInt(e.currentTarget.id[1]) : this.data._itemNum
    itemNum = this.data._itemNum
    let currentSongIndex = this.data.currentSongIndexList[itemNum]
    var that = this
    var musicListName = ""

    switch (itemNum) {
      case 0:
        musicListName = "gong_list"
        break
      case 1:
        musicListName = "shang_list"
        break
      case 2:
        musicListName = "jue_list"
        break
      case 3:
        musicListName = "zhi_list"
        break
      case 4:
        musicListName = "yu_list"
        break
    }
    let currentSong = app.globalData[musicListName][currentSongIndex]

    console.log("currentSong:" + currentSong.music_name)
    app.globalData.bam.title = currentSong.music_name

    if (e.detail.value) {
      wx.request({
        url: 'https://www.gricn.top:4000/api/song/' + currentSong.music_id,
        success(res) {
          app.globalData.bam.src = res.data //tu
        }
      })
      this.setData({
        playSwitchChecked: true
      })
    } else {
      app.globalData.bam.pause()
      this.setData({
        playSwitchChecked: false
      })
    }
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
    if (this.data.modalName === 'bottomModal') {
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

  To_tc_test: function (e) {
    var curwindowWidth = 414
    wx.getSystemInfo({
      success(res) {
        curwindowWidth = res.windowWidth
      }
    })
    var curwindowWidth3 = curwindowWidth / 3
    if (app.globalData.isRegistered) {
      console.log('已注册，调往体质测试界面')
      if (e.changedTouches['0'].pageX <= curwindowWidth3) {
        console.log('进入定时关闭页面')
        wx.navigateTo({
          url: '/pages/timeoff/index',
        })
      } else if (e.changedTouches['0'].pageX >= (curwindowWidth - curwindowWidth3)) {
        console.log('进入我的舒缓歌单')
        var to_songlist_path = '../tc_test/tc_test?curTab=10&top_item_hid=true'

        wx.getStorage({
          key: 'wuyin_hid',
          success: res => {
            console.log('从缓存读取wuyin_hid成功，前往页面中……')
            to_songlist_path += '&gong_hid=' + res.data.gong_hid + '&shang_hid=' + res.data.shang_hid + '&jue_hid=' + res.data.jue_hid + '&zhi_hid=' + res.data.zhi_hid + '&yu_hid=' + res.data.yu_hid + '&to_cur=' + res.data.to_cur
            console.log('path:' + to_songlist_path)
          },
          fail: e => {
            console.log('从缓存读取wuyin_hid失败')
          },
          complete: () => {
            wx.navigateTo({
              url: to_songlist_path,
            })
          }
        })

      } else {
        console.log('进入中医体质测试页面')
        wx.navigateTo({
          url: '../tc_test/tc_test?top_item_hid=false',
        })
      }
    } else {
      console.log('未注册，调往注册界面')
      wx.navigateTo({
        url: '../register/index',
      })
    }
  },

  To_register: function () {
    wx.navigateTo({
      url: '../register/index',
    })
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //随机播放
  randomPlay(e) {
    if (!this.data.randomSwitchChecked) {
      this.setData({
        randomSwitchChecked: true
      })
    } else {
      this.setData({
        randomSwitchChecked: false
      })
    }
  },
  // 音乐暂停
  musicPause: function musicPause() {
    app.globalData.bam.pause()
  },

})