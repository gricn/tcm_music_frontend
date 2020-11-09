//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    cur: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isRegistered: false,
    motto: 'Hi！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    successRegistered: false,

    // 微信小程序swiper命名不规范，swiper和swipe没有关系
    swiperList: {
      swiper1: {
        id: 'a0',
        url: "https://hbimg.huabanimg.com/cc7483bb7e9f7bd168d00e9aba2941e5dc0cf5d33c68f-YN9GOK",
        music_list: {
          poster: 'https://p2.music.126.net/QVg1vX7lvFdbHrnn0hrPNQ==/23089744195372.jpg',
          name: '土音',
          author: '吴慎',
          src: '',
          id: '167237',
          next_s: '渔舟唱晚'
        },
      },
      swiper2: {
        id: 'a1',
        url: "https://hbimg.huabanimg.com/3ddffad15246fa4a7b847e747b1773edfd2a591544d6b-uB8l6M",
        music_list: {
          poster: 'https://p1.music.126.net/TlKUiqvj1batGJJtBPQwZA==/116548232557408.jpg',
          name: '金音1',
          author: '吴慎',
          src: '',
          id: '167247',
          next_s: '金音2'
        },
      },
      swiper3: {
        id: 'a2',
        url: "https://hbimg.huabanimg.com/297ffaa48cdb3a9756b45d207e21e490f5d92b193daa1-HCQJps",
        music_list: {
          poster: 'https://p2.music.126.net/6XHo66x8Dm-0Sx27OA8NCA==/68169720934902.jpg',
          name: '木音(角声)',
          author: '吴慎',
          src: '',
          id: '167272',
          next_s: '木'
        },
      },
      swiper4: {
        id: 'a3',
        url: "https://hbimg.huabanimg.com/68765fb5aef5ed89d57a397248f4eaf3a6a4ec3a52ef0-xcNqIJ",
        music_list: {
          poster: 'https://p1.music.126.net/AFJ6f-3LC37wjvChfNBAsw==/24189255823157.jpg',
          name: '火音1',
          author: '吴慎',
          src: '',
          id: '167260',
          next_s: '火音2'
        },
      },
      swiper5: {
        id: 'a4',
        url: "https://hbimg.huabanimg.com/ecdd77fcbeaf108501166bb2d028260acb5132b443891-eC8WXw",
        music_list: {
          poster: 'https://p2.music.126.net/So0DylHDizPpf6SFD36lWg==/74766790701523.jpg',
          name: '水音1',
          author: '吴慎',
          src: '',
          id: '167278',
          next_s: '水音2'
        },
      }
    },

    random_playsongs1: 0,
    random_playsongs2: 0,
    random_playsongs3: 0,
    random_playsongs4: 0,
    random_playsongs5: 0,

    fan_url: "https://hbimg.huabanimg.com/9e0ac627e3055a688d0113d9bf039f44f0bc5d0f13674-wOWv3Y",
    fan_url2: "https://hbimg.huabanimg.com/83ae78fc6d25ee7bfd1903951918c57d109ecd7b5772f-3tVDLQ",
    menu_url: "https://hbimg.huabanimg.com/9a02a800ce8af13b836d81422550dc03dec918d469792-sfKjeY",
    modalName: null,
    fan_hidden: 0,
    finalRes: ''
  },

  change_singing_page: function (e) {
    this.audioCtx0.pause() //tu
    this.audioCtx1.pause() //jin
    this.audioCtx2.pause() //mu
    this.audioCtx3.pause() //huo
    this.audioCtx4.pause() //shui
  },

  //随机播放
  random_play: function (e) {
    switch (e.target.id) {
      case 'a0p':
        this.setData({
          random_playsongs1: 1
        })
        break;
      case 'a1p':
        this.setData({
          random_playsongs2: 1
        })
        break;
      case 'a2p':
        this.setData({
          random_playsongs3: 1
        })
        break;
      case 'a3p':
        this.setData({
          random_playsongs4: 1
        })
        break;
      case 'a4p':
        this.setData({
          random_playsongs5: 1
        })
        break;
    }
  },



  next_music: function (e) {
    var gong_len = app.globalData.gong_list.length
    var shang_len = app.globalData.shang_list.length
    var jue_len = app.globalData.jue_list.length
    var zhi_len = app.globalData.zhi_list.length
    var yu_len = app.globalData.yu_list.length
    switch (e.currentTarget.id) {
      case 'a0b':
        var that = this
        var cur_song_index = 0
        this.audioCtx0.pause()
        for (var i = 0; i < gong_len; i++) {
          if (app.globalData.gong_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }
        var next_song_index = (cur_song_index + 1) % gong_len
        var next_n_song_index = (next_song_index + 1) % gong_len
        if (this.data.random_playsongs1) {
          next_n_song_index = Math.floor(Math.random() * gong_len);
        }
        this.setData({
          'swiperList.swiper1.music_list.name': app.globalData.gong_list[next_song_index].music_name,
          'swiperList.swiper1.music_list.author': app.globalData.gong_list[next_song_index].music_authors,
          'swiperList.swiper1.music_list.id': app.globalData.gong_list[next_song_index].music_id,
          'swiperList.swiper1.music_list.next_s': app.globalData.gong_list[next_n_song_index].music_name
        })

        var next_url = 'https://www.gricn.top:4000/api/song/' + app.globalData.gong_list[next_song_index].music_id
        wx.request({
          url: next_url,
          success(res) {
            that.audioCtx0.src = res.data
            that.audioCtx0.play()
          }
        })

        break;
      case 'a1b':
        var that = this
        var cur_song_index = 0
        this.audioCtx1.pause()
        for (var i = 0; i < shang_len; i++) {
          if (app.globalData.shang_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }

        var next_song_index = (cur_song_index + 1) % shang_len
        var next_n_song_index = (next_song_index + 1) % shang_len
        if (this.data.random_playsongs2) {
          next_n_song_index = Math.floor(Math.random() * shang_len);
        }
        this.setData({
          'swiperList.swiper2.music_list.name': app.globalData.shang_list[next_song_index].music_name,
          'swiperList.swiper2.music_list.author': app.globalData.shang_list[next_song_index].music_authors,
          'swiperList.swiper2.music_list.id': app.globalData.shang_list[next_song_index].music_id,
          'swiperList.swiper2.music_list.next_s': app.globalData.shang_list[next_n_song_index].music_name
        })
        var next_url = 'https://www.gricn.top:4000/api/song/' + app.globalData.shang_list[next_song_index].music_id
        wx.request({
          url: next_url,
          success(res) {
            that.audioCtx1.src = res.data
            that.audioCtx1.play()
          }
        })
        break;
      case 'a2b':
        var that = this
        var cur_song_index = 0
        this.audioCtx2.pause()
        for (var i = 0; i < jue_len; i++) {
          if (app.globalData.jue_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }

        var next_song_index = (cur_song_index + 1) % jue_len
        var next_n_song_index = (next_song_index + 1) % jue_len
        if (this.data.random_playsongs3) {
          next_n_song_index = Math.floor(Math.random() * jue_len);
        }
        this.setData({
          'swiperList.swiper3.music_list.name': app.globalData.jue_list[next_song_index].music_name,
          'swiperList.swiper3.music_list.author': app.globalData.jue_list[next_song_index].music_authors,
          'swiperList.swiper3.music_list.id': app.globalData.jue_list[next_song_index].music_id,
          'swiperList.swiper3.music_list.next_s': app.globalData.jue_list[next_n_song_index].music_name
        })
        var next_url = 'https://www.gricn.top:4000/api/song/' + app.globalData.jue_list[next_song_index].music_id
        wx.request({
          url: next_url,
          success(res) {
            that.audioCtx2.src = res.data
            that.audioCtx2.play()
          }
        })
        break;
      case 'a3b':
        var that = this
        var cur_song_index = 0
        that.audioCtx3.pause()
        for (var i = 0; i < zhi_len; i++) {
          if (app.globalData.zhi_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }

        var next_song_index = (cur_song_index + 1) % zhi_len
        var next_n_song_index = (next_song_index + 1) % zhi_len
        if (this.data.random_playsongs4) {
          next_n_song_index = Math.floor(Math.random() * zhi_len);
        }
        this.setData({
          'swiperList.swiper4.music_list.name': app.globalData.zhi_list[next_song_index].music_name,
          'swiperList.swiper4.music_list.author': app.globalData.zhi_list[next_song_index].music_authors,
          'swiperList.swiper4.music_list.id': app.globalData.zhi_list[next_song_index].music_id,
          'swiperList.swiper4.music_list.next_s': app.globalData.zhi_list[next_n_song_index].music_name
        })
        var next_url = 'https://www.gricn.top:4000/api/song/' + app.globalData.zhi_list[next_song_index].music_id
        wx.request({
          url: next_url,
          success(res) {
            that.audioCtx3.src = res.data
            that.audioCtx3.play()
          }
        })
        break;
      case 'a4b':
        var that = this
        var cur_song_index = 0
        that.audioCtx4.pause()
        for (var i = 0; i < yu_len; i++) {
          if (app.globalData.yu_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }

        var next_song_index = (cur_song_index + 1) % yu_len
        var next_n_song_index = (next_song_index + 1) % yu_len
        if (this.data.random_playsongs5) {
          next_n_song_index = Math.floor(Math.random() * yu_len);
        }
        this.setData({
          'swiperList.swiper5.music_list.name': app.globalData.yu_list[next_song_index].music_name,
          'swiperList.swiper5.music_list.author': app.globalData.yu_list[next_song_index].music_authors,
          'swiperList.swiper5.music_list.id': app.globalData.yu_list[next_song_index].music_id,
          'swiperList.swiper5.music_list.next_s': app.globalData.yu_list[next_n_song_index].music_name
        })
        var next_url = 'https://www.gricn.top:4000/api/song/' + app.globalData.yu_list[next_song_index].music_id
        wx.request({
          url: next_url,
          success(res) {
            that.audioCtx4.src = res.data
            that.audioCtx4.play()
          }
        })
        break;


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
    var finalRes1 = this.data.finalRes

    if (app.globalData.isRegistered) {

      console.log('已注册，调往体质测试界面')
      if (e.changedTouches['0'].pageX <= curwindowWidth3) {
        console.log('进入定时关闭页面')
        var to_time_path = '../tc_test/tc_test?curTab=10&top_item_hid=true&&songlist_hid=false&time_slider_hid=false&finalRes=' + finalRes1
        wx.navigateTo({
          url: '/pages/square/square',
        })
      } else if (e.changedTouches['0'].pageX >= (curwindowWidth - curwindowWidth3)) {
        console.log('进入我的舒缓歌单')
        var to_songlist_path = '../tc_test/tc_test?curTab=10&top_item_hid=true&songlist_hid=false&time_slider_hid=true&finalRes=' + finalRes1

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
          url: '../tc_test/tc_test?top_item_hid=false&songlist_hid=false&time_slider_hid=true',
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
    console.log(e)
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
  musicPlay(e) {
    let tmp = "audioCtx" + e.currentTarget.id[1]
    e.detail.value ? this[tmp].play() : this[tmp].pause()
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
            console.log(e)
            console.log("用户未注册鸭")
          }
        })
      }
    })


    //获得上一页面传回的参数
    if (options !== null) {
      this.setData({
        finalRes: options.finalRes,
        cur: options.cur
      })
    }
  },

  onShow: function (option) {
    wx.getStorage({
      key: 'isRegistered',
      success: res => {
        this.setData({
          isRegistered: res.data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx0 = wx.createInnerAudioContext('a0') //tu
    this.audioCtx1 = wx.createInnerAudioContext('a1') //jin
    this.audioCtx2 = wx.createInnerAudioContext('a2') //mu
    this.audioCtx3 = wx.createInnerAudioContext('a3') //huo
    this.audioCtx4 = wx.createInnerAudioContext('a4') //shui

    var that = this
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167237',
      success(res) {
        that.audioCtx0.src = res.data //tu
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167247',
      success(res) {
        that.audioCtx1.src = res.data //jin
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167272',
      success(res) {
        that.audioCtx2.src = res.data //mu
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167260',
      success(res) {
        that.audioCtx3.src = res.data //huo
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167278',
      success(res) {
        that.audioCtx4.src = res.data //shui
      }
    })
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

  }

})