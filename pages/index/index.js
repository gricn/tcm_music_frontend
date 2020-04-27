//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    cur: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    motto: 'Hi！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList: {
      swiper1: {
        id: 'a0',
        url: "https://hbimg.huabanimg.com/cc7483bb7e9f7bd168d00e9aba2941e5dc0cf5d33c68f-YN9GOK_fw658",
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
        url: "https://hbimg.huabanimg.com/3ddffad15246fa4a7b847e747b1773edfd2a591544d6b-uB8l6M_fw658",
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
        url: "https://hbimg.huabanimg.com/297ffaa48cdb3a9756b45d207e21e490f5d92b193daa1-HCQJps_fw658",
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
        url: "https://hbimg.huabanimg.com/68765fb5aef5ed89d57a397248f4eaf3a6a4ec3a52ef0-xcNqIJ_fw658",
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
        url: "https://hbimg.huabanimg.com/ecdd77fcbeaf108501166bb2d028260acb5132b443891-eC8WXw_fw658",
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
    fan_url: "https://hbimg.huabanimg.com/9e0ac627e3055a688d0113d9bf039f44f0bc5d0f13674-wOWv3Y_fw658",
    fan_url2: "https://hbimg.huabanimg.com/83ae78fc6d25ee7bfd1903951918c57d109ecd7b5772f-3tVDLQ_fw658",
    menu_url: "https://hbimg.huabanimg.com/9a02a800ce8af13b836d81422550dc03dec918d469792-sfKjeY_fw658",
    modalName: null,
    fan_hidden: 0,
    finalRes: ''
  },

  change_singing_page: function(e) {
    this.audioCtx.pause()
    this.audioCtx1.pause()
    this.audioCtx2.pause()
    this.audioCtx3.pause()
    this.audioCtx4.pause()
  },



  next_music: function(e) {
    var gong_len = app.globalData.gong_list.length
    var shang_len = app.globalData.shang_list.length
    var jue_len = app.globalData.jue_list.length
    var zhi_len = app.globalData.zhi_list.length
    var yu_len = app.globalData.yu_list.length
    // console.log(e.currentTarget.dataset.songid)
    switch (e.currentTarget.id) {
      case 'a0b':
        var that = this
        var cur_song_index = 0
        for (var i = 0; i < gong_len; i++) {
          if (app.globalData.gong_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }
        // console.log(cur_song_index)
        var next_song_index = (cur_song_index + 1) % gong_len
        var next_n_song_index = (next_song_index + 1) % gong_len
        this.setData({
          'swiperList.swiper1.music_list.name': app.globalData.gong_list[next_song_index].music_name,
          'swiperList.swiper1.music_list.author': app.globalData.gong_list[next_song_index].music_authors,
          'swiperList.swiper1.music_list.id': app.globalData.gong_list[next_song_index].music_id,
          'swiperList.swiper1.music_list.next_s': app.globalData.gong_list[next_n_song_index].music_name
        })

        var next_url = 'https://www.gricn.top:4000/api/song/' + app.globalData.gong_list[next_song_index].music_id
        // var next_poster = `https://www.gricn.top:4000/api/poster/` + app.globalData.gong_list[next_song_index].music_id
        // var next_poster_url = ''
        wx.request({
          url: next_url,
          success(res) {
            that.audioCtx.setSrc(res.data)
          }
        })
        //换封面的地址，但是页面不重新渲染，显示空白
        // wx.request({
        //   url: next_poster,
        //   success(res) {
        //     next_poster_url = res.data
        //     console.log(res.data)
        //   }
        // })
        // this.setData({ 'swiperList.swiper1.music_list.poster': next_poster_url })
        break;
      case 'a1b':
        var that = this
        var cur_song_index = 0
        for (var i = 0; i < shang_len; i++) {
          if (app.globalData.shang_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }
        // console.log(cur_song_index)
        var next_song_index = (cur_song_index + 1) % shang_len
        var next_n_song_index = (next_song_index + 1) % shang_len
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
            that.audioCtx.setSrc(res.data)
          }
        })
        break;
      case 'a2b':
        var that = this
        var cur_song_index = 0
        for (var i = 0; i < jue_len; i++) {
          if (app.globalData.jue_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }
        // console.log(cur_song_index)
        var next_song_index = (cur_song_index + 1) % jue_len
        var next_n_song_index = (next_song_index + 1) % jue_len
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
            that.audioCtx.setSrc(res.data)
          }
        })
        break;
      case 'a3b':
        var that = this
        var cur_song_index = 0
        for (var i = 0; i < zhi_len; i++) {
          if (app.globalData.zhi_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }
        // console.log(cur_song_index)
        var next_song_index = (cur_song_index + 1) % zhi_len
        var next_n_song_index = (next_song_index + 1) % zhi_len
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
            that.audioCtx.setSrc(res.data)
          }
        })
        break;
      case 'a4b':
        var that = this
        var cur_song_index = 0
        for (var i = 0; i < yu_len; i++) {
          if (app.globalData.yu_list[i].music_id == e.currentTarget.dataset.songid) {
            cur_song_index = i
            break;
          }
        }
        // console.log(cur_song_index)
        var next_song_index = (cur_song_index + 1) % yu_len
        var next_n_song_index = (next_song_index + 1) % yu_len
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
            that.audioCtx.setSrc(res.data)
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


  // audioPause() {
  //   this.audioCtx.pause()
  // },


  To_tc_test: function(e) {

    // console.log(e.changedTouches['0'].pageX)
    var curwindowWidth = 414
    wx.getSystemInfo({
      success(res) {
        // console.log(res.windowWidth)获取屏幕宽度
        curwindowWidth = res.windowWidth
      }
    })
    var curwindowWidth3 = curwindowWidth / 3
    // console.log(curwindowWidth3)屏幕宽度的三分之一

    var finalRes1 = this.data.finalRes

    if (app.globalData.isRegistered = 1) {
      console.log('已注册，调往体质测试界面')
      if (e.changedTouches['0'].pageX <= curwindowWidth3) {
        console.log('定时关闭')
        var to_time_path = '../tc_test/tc_test?TabCur=10&sing_list_hid=1&time_show_hid=1&finalRes=' + finalRes1
        wx.navigateTo({
          url: to_time_path,
        })
      } else if (e.changedTouches['0'].pageX >= (curwindowWidth - curwindowWidth3)) {
        console.log('我的舒缓歌单')
        var to_singlist_path = '../tc_test/tc_test?TabCur=10&sing_list_hid=1&singlis_show_hid=1&finalRes=' + finalRes1
        wx.navigateTo({
          url: to_singlist_path,
        })
      } else {
        console.log('中医体质测试')
        wx.navigateTo({
          url: '../tc_test/tc_test?singlis_show_hid=1',
        })
      }
    } else {
      console.log('未注册，调往注册界面')
      wx.navigateTo({
        url: '../register/index',
      })
    }

  },

  To_register: function() {
    wx.navigateTo({
      url: '../register/index',
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
    this.audioCtx = wx.createAudioContext('a0')
    this.audioCtx1 = wx.createAudioContext('a1')
    this.audioCtx2 = wx.createAudioContext('a2')
    this.audioCtx3 = wx.createAudioContext('a3')
    this.audioCtx4 = wx.createAudioContext('a4')
    //this.audioCtx.play()
  },
  onLoad: function(options) {

    //判断用户是否已注册
    if (app.globalData.isRegistered = true) {
      console.log('该用户已注册')
    } else {
      console.log('该用户未注册')
    }

    //获得上一页面传回的参数
    this.setData({
      finalRes: options.finalRes
    })
    this.setData({
      cur: options.cur
    })
    // console.log(this.data.cur)

    var that = this
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167237',
      success(res) {
        that.audioCtx.src = res.data
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167247',
      success(res) {
        that.audioCtx1.src = res.data
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167272',
      success(res) {
        that.audioCtx2.src = res.data
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167260',
      success(res) {
        that.audioCtx3.src = res.data
      }
    })
    wx.request({
      url: 'https://www.gricn.top:4000/api/song/167278',
      success(res) {
        that.audioCtx4.src = res.data
      }
    })



    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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