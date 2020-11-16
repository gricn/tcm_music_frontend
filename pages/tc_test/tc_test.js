// pages/tr_test/tc_test.js

/*
本测试方法来源：中华中医药学会《中医体质分类与判定自测表》
*/

var jsonData = require('./json.js')
const app = getApp()

Page({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },

  /**
   * 页面的初始数据
   */
  data: {
    finalRes: '您还未做完测试题',
    normalConstitution: 2, //0：否；1：基本是；2：是

    _abnormalConstitution: [0, 0, 0, 0, 0, 0, 0, 0],
    convert: [], // 留着，虽然下面会自动添加内容，且WXML页面要用

    top_item_hid: false,
    sendDataLocked: false,

    gong_list: {},
    shang_list: {},
    jue_list: {},
    zhi_list: {},
    yu_list: {},
    testShowMusicList: {},

    _to_cur: 1, // 测试结束，传递回主页的哪个页面（“宫”、“商” 之类？）

    picker: ['没有', '很少', '有时', '经常', '总是'],
    curTab: 0, //当前页面的Tab值
    scrollLeft: 0, //Tab向左偏移量
    test_tittle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '测试结果', '您的推荐舒缓歌单'], //Tab列表
  },


  goHomePage(e) {
    var homePagePath = '../index/index?cur=' + this.data._to_cur + '&finalRes=' + this.data.finalRes
    wx.navigateTo({
      url: homePagePath,
    })
  },

  forbid(e) {
    // 不能删，用来阻止用户在页面滑动swiper-item
  },

  swiperChange(e) { //切换
    let {
      current,
      source
    } = e.detail
    if (source === 'touch') {
      this.setData({
        curTab: current,
        scrollLeft: (current - 1) * 60
      })
    }
    this.judgeConstitution()
    if (this.data.top_item_hid == false && this.data.curTab === 10 && this.data.convert != undefined && this.data.convert.length == 9) {
      this.switchSongPage() // switchSongPage()函数作用： 跳转页面 + 向服务器发送数据 
    }
  },

  //点击不同Tab时，Tab的反应
  tabSelect(e) {
    let {
      id
    } = e.currentTarget.dataset
    this.setData({
      curTab: id,
      scrollLeft: (id - 1) * 60
    })

    this.judgeConstitution()
  },

  directToCarePage() {
    wx.navigateTo({
      url: '/pages/care/care',
    })
  },
  directToIntroPage(){
    wx.navigateTo({
      url: '/pages/wuyin_intro/index',
    })
  },

  judgeConstitution() {
    /*选择“测试结果”页时进行判断*/
    if (this.data.curTab == 9 || this.data.curTab == 10) {
      var normalConsLocked = false; //判断平和体质数值是否可以修改，true为不可修改

      for (var i = 0; i < this.data._abnormalConstitution.length; i++) {
        if (this.data.convert != undefined && this.data.convert[i] != undefined)
          // 确定偏颇体质
          if (this.data.convert[i] >= 40) {
            let temp = "_abnormalConstitution[" + i + "]"
            this.setData({
              [temp]: 2
            })
            // this.data._abnormalConstitution[i] = 2
            if (!normalConsLocked) {
              this.setData({
                normalConstitution: 0
              })
              normalConsLocked = true
            }
            //有偏颇质倾向
          } else if (this.data.convert[i] >= 30) {
            let temp = "_abnormalConstitution[" + i + "]"
            this.setData({
              [temp]: 1
            })

            if (!normalConsLocked) {
              this.setData({
                normalConstitution: 1
              })
            }
          } else {
            let temp = "_abnormalConstitution[" + i + "]"
            this.setData({
              [temp]: 0
            })
          }
      }

      var temp = ""
      if (this.data.normalConstitution == 2) {
        //确定平和质
        this.setData({
          finalRes: "平和体质"
        })

      } else if (this.data.normalConstitution == 1) {
        //基本平和质
        temp = "基本是平和体质，有"

        for (var i = 0; i < this.data._abnormalConstitution.length; i++) {
          if (this.data._abnormalConstitution[i] == 1) {
            temp += this.data.constitutionContext[i] + " "
          }
        }
        temp.slice(0, -1)
        temp += "倾向"
        this.setData({
          finalRes: temp
        })
      } else {
        //非平和质
        for (var i = 0; i < this.data._abnormalConstitution.length; i++) {
          if (this.data._abnormalConstitution[i] == 2) {
            temp += this.data.constitutionContext[i] + " "
          }
        }
        this.setData({
          finalRes: temp
        })
      }

      if (this.data.normalConstitution == 2) {
        // 平和质
        this.setData({
          testShowMusicList: this.data.gong_list,
          _to_cur: 1
        })
        console.log('推荐舒缓歌单：宫')
      } else if (this.data._abnormalConstitution[2] > 0) {
        // 气虚质
        this.setData({
          testShowMusicList: this.data.zhi_list,
          _to_cur: 5
        })
        console.log('推荐舒缓歌单：徵')
      } else if (this.data._abnormalConstitution[0] > 0) {
        // 阳虚质  
        this.setData({
          testShowMusicList: this.data.zhi_list,
          _to_cur: 4
        })
        console.log('推荐舒缓歌单：徵')
      } else if (this.data._abnormalConstitution[1] > 0) {
        // 阴虚质
        this.setData({
          testShowMusicList: this.data.yu_list,
          _to_cur: 5
        })
        console.log('推荐舒缓歌单：羽')
      } else if (this.data._abnormalConstitution[3] > 0) {
        // 痰湿质 
        this.setData({
          testShowMusicList: this.data.jue_list,
          _to_cur: 3
        })
        console.log('推荐舒缓歌单：角')
      } else if (this.data._abnormalConstitution[4] > 0) {
        // 湿热
        this.setData({
          testShowMusicList: this.data.yu_list,
          _to_cur: 5
        })
        console.log('推荐舒缓歌单：羽')
      } else if (this.data._abnormalConstitution[5] > 0) {
        // 血瘀质
        this.setData({
          testShowMusicList: this.data.jue_list,
          _to_cur: 3
        })
        console.log('推荐舒缓歌单：角')
      } else if (this.data._abnormalConstitution[7] > 0) {
        // 气郁质  //分别对应：阳虚、阴虚、气虚、痰湿、湿热、血瘀、特禀、气郁
        this.setData({
          testShowMusicList: this.data.shang_list,
          _to_cur: 2
        })
        console.log('推荐舒缓歌单：商')

      } else if (this.data._abnormalConstitution[6] > 0) {
        // 特禀质
        this.setData({
          testShowMusicList: this.data.gong_list,
          _to_cur: 1
        })
        console.log('推荐舒缓歌单：宫')
      }
    }
  },


  //滑动问题下的滑钮时，收集用户答案
  sliderChange(e) {
    var pickID = e.currentTarget.id
    console.log("pickID:" + pickID)

    //及时修改对应项sliderValue的数值

    let temp = pickID + ".sliderValue"
    this.setData({
      [temp]: e.detail.value / 25,
    })

    var id = parseInt(pickID.slice(6, 7))
    var that = this
    getSum(id)

    /*  获取原始分并计算存储转换分 */
    function getSum(e) {
      var sum = 0
      var length = (e == 4) ? that.data.index[e].length - 1 : that.data.index[e].length

      // 湿热质计算代码还需改进：undo
      for (var i = 0; i < that.data.index[e].length; i++) {
        //除了index[8]平和质部分题目要逆向计分外，其他都正常
        if ((e != 8) || ((e == 8) && (i == 0 || i == 5))) {
          sum += that.data.index[e][i].sliderValue + 1
        } else {
          sum += 5 - that.data.index[e][i].sliderValue
        }
      }

      let temp = "convert[" + e + "]"
      that.setData({
        [temp]: ((sum - length) / (length * 4) * 100).toFixed(2)
      })
    }
  },

  playmusic: function (e) {
    console.log(e)
  },

  switchSongPage() {
    // 除跳转页面外，还会向服务器发送数据
    if (this.data.curTab !== 10) {
      this.setData({
        curTab: 10
      })
    }

    if (this.data.convert.length == 9 && this.data.sendDataLocked !== true) {
      var openid = ''
      wx.getStorage({
        key: 'openid',
        success: res => {
          openid = res.data
          console.log('从本地缓存读取openid成功')

          wx.request({
            url: 'https://www.gricn.top:4000/test',
            method: 'POST',
            "Content-Type": "application/x-www-form-urlencoded",
            data: {
              openid: openid,
              index: this.data.index,
              convert: this.data.convert,
            },
            success: res => {
              console.log('给服务器发送体质检测结果成功')
              this.data.sendDataLocked = true
            },
            fail: e => {
              console.log('向服务器发送体质检测结果失败，失败原因为：\n' + e)
            }
          })
        },
        fail: e => {
          console.log('从本地缓存读取openid失败，失败原因为：\n' + e)
        }
      })

      // 用来保存  首页-“我的舒缓歌单” 获取的推荐音乐显示情况
      console.log('启动 recordRecommendMusic() 成功')

      var wuyin_hid = {
        gong_hid: this.data.gong_hid,
        shang_hid: this.data.shang_hid,
        jue_hid: this.data.jue_hid,
        zhi_hid: this.data.zhi_hid,
        yu_hid: this.data.yu_hid,
        _to_cur: this.data._to_cur,
      }

      wx.setStorage({
        key: 'wuyin_hid',
        data: wuyin_hid,
        success: res => {
          console.log('向缓存存储"wuyin_hid"结果成功')
        },
        fail: e => {
          console.log('向缓存存储"wuyin_hid"结果失败')
        }
      })
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.top_item_hid != undefined) {
      let tmp = options.top_item_hid == "false" ? false : true
      this.setData({
        top_item_hid: tmp,
        curTab: options.curTab,
        index: jsonData.dataList,
        constitutionContext: jsonData.dataContext
      })
    }

    if (options.gong_hid != undefined) {
      this.setData({
        gong_hid: options.gong_hid,
        shang_hid: options.shang_hid,
        jue_hid: options.jue_hid,
        zhi_hid: options.zhi_hid,
        yu_hid: options.yu_hid,
        _to_cur: options._to_cur,
      })
    }
    this.setData({
      gong_list: app.globalData.gong_list,
      shang_list: app.globalData.shang_list,
      jue_list: app.globalData.jue_list,
      zhi_list: app.globalData.zhi_list,
      yu_list: app.globalData.yu_list,
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getStorageSync({
      key: "user_gender",
      success: res => {
        that.setData({
          user_gender: res.data
        })
      }
    })
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

  // 不要删不要删
  noneFunction(e){
    //  不要删不要删，用来防止用户误触
    // console.log(e)
  }
})