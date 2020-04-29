// pages/tr_test/tc_test.js

/*
本测试方法来源：中华中医药学会《中医体质分类与判定自测表》
*/

var jsonData = require('./json.js')
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {

    /*
      onLoad将从"./json.js"导入部分数据：
        index:[],
        constitutionContext:[]
     */

    index0: 0,

    //9种体质的转换
    convert: ['暂无', '暂无', '暂无', '暂无', '暂无', '暂无', '暂无', '暂无', '暂无'],


    /* 测试用例 */
    // convert: [100, 80, 40, 30,
    //   30, 29, 10, 10, 100
    // ],    

    finalRes: '您还未做完测试题',
    normalConstitution: 2, //0：否；1：基本是；2：是
    abnormalConstitution: [0, 0, 0, 0, 0, 0, 0, 0], //8种偏颇。0：否；1：基本是；2：是

    // sureAbnormalJudge: [],
    // maybeAbormalJudge: [],

    sing_list_hid: 0,
    time_show_hid: 0,
    singlis_show_hid: 0,

    gong_list: {},
    shang_list: {},
    jue_list: {},
    zhi_list: {},
    yu_list: {},

    gong_hid: 0,
    shang_hid: 1,
    jue_hid: 1,
    zhi_hid: 1,
    yu_hid: 1,

    to_cur: 1,
    testtimes: 1,  // 用来记录总共测试的次数

    picker: ['没有', '很少', '有时', '经常', '总是'],
    TabCur: 0, //当前页面的Tab值
    scrollLeft: 0, //Tab向左偏移量
    test_tittle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '测试结果', '您的推荐舒缓歌单'], //Tab列表
  },

  To_first_page: function(e) {
    var to_cur1 = this.data.to_cur
    var finalres1 = this.data.finalRes
    var to_frist_path = '../index/index?cur=' + this.data.to_cur + '&finalRes=' + this.data.finalRes
    wx.navigateTo({
      url: to_frist_path,
    })
  },

  //点击不同Tab时，Tab的反应
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    if (e.currentTarget.dataset.id == 9) {

      var locked = true; //判断平和体质数值是否可以修改，true为不可以修改

      for (var i = 0; i < this.data.abnormalConstitution.length; i++) {
        // 确定偏颇体质
        if (this.data.convert[i] >= 40) {
          this.data.abnormalConstitution[i] = 2
          if (!locked) {
            this.data.normalConstitution = 0
            lock = false
          }
          //有偏颇质倾向
        } else if (this.data.convert[i] >= 30) {
          this.data.abnormalConstitution[i] = 1
          if (!locked) {
            this.data.normalConstitution = 1
          }
        }
      }

      // console.log(this.data.normalConstitution == 2)
      var temp = ""

      if (this.data.normalConstitution == 2) {
        //确定平和质
        this.setData({
          finalRes: "平和体质"
        })
        console.log("exec")
      } else if (this.data.normalConstitution == 1) {
        //基本平和质
        temp = "基本是平和体质，有"

        for (var i = 0; i < this.data.abnormalConstitution.length; i++) {
          if (this.data.abnormalConstitution[i] == 1) {
            temp += this.data.constitutionContext[i] + " "
          }
        }
        temp += "倾向"
        this.setData({
          finalRes: temp
        })
      } else {
        //非平和质
        for (var i = 0; i < this.data.abnormalConstitution.length; i++) {
          if (this.data.abnormalConstitution[i] == 2) {
            temp += this.data.constitutionContext[i] + " "
          }
        }
        temp += ",有"
        for (var i = 0; i < this.data.abnormalConstitution.length; i++) {
          if (this.data.abnormalConstitution[i] == 1) {
            temp += this.data.constitutionContext[i] + " "
          }
        }
        temp += "倾向"
        this.setData({
          finalRes: temp
        })
      }
    }
    if (e.currentTarget.dataset.id == 10) {
      var str1 = '平和体质'
      var str2 = '气虚质'
      var str3 = '阳虚质'
      var str4 = '阴虚质'
      var str5 = '痰湿质'
      var str6 = '湿热质'
      var str7 = '血瘀质'
      var str8 = '气郁质'
      var str9 = '特禀质'
      console.log(this.data.finalRes)
      // if (this.data.finalRes.search(str1) > -1) {
      //   this.setData({
      //     gong_hid: 0,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 1,
      //     to_cur: 1
      //   })
      //   console.log('gong')

      // } else if (this.data.finalRes.search(str2) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 0,
      //     to_cur: 5
      //   })
      //   console.log('yu')
      // } else if (this.data.finalRes.search(str3) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 0,
      //     yu_hid: 1,
      //     to_cur: 4
      //   })
      //   console.log('zhi')
      // } else if (this.data.finalRes.search(str4) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 0,
      //     to_cur: 5
      //   })
      //   console.log('yu')
      // } else if (this.data.finalRes.search(str5) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 0,
      //     zhi_hid: 1,
      //     yu_hid: 1,
      //     to_cur: 3
      //   })
      //   console.log('jue')
      // } else if (this.data.finalRes.search(str6) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 0,
      //     to_cur: 5
      //   })
      //   console.log('yu')

      // } else if (this.data.finalRes.search(str7) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 0,
      //     zhi_hid: 1,
      //     yu_hid: 1,
      //     to_cur: 3
      //   })
      //   console.log('jue')
      // } else if (this.data.finalRes.search(str8) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 0,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 1,
      //     to_cur: 2
      //   })
      //   console.log('shang')

      // } else if (this.data.finalRes.search(str9) > -1) {
      //   this.setData({
      //     gong_hid: 0,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 1,
      //     to_cur: 1
      //   })
      //   console.log('gong')
      // }
    }
  },

  //滑动问题下的滑钮时，收集用户答案
  sliderChange(e) {
    var pickID = e.currentTarget.id
    //及时修改对应项sliderValue的数值
    {
      let temp = pickID + ".sliderValue"

      this.setData({
        [temp]: e.detail.value / 25,
      })
    }

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
          console.log("触发")
        } else {
          sum += 5 - that.data.index[e][i].sliderValue
        }
      }
      console.log("sum:" + sum)
      var temp = "convert[" + e + "]"
      that.setData({
        [temp]: ((sum - length) / (length * 4) * 100).toFixed(2)
      })
    }
  },

  playmusic: function(e) {
    console.log(e)
  },

  switchSongPage() {
    this.setData({
      TabCur: 10
    })

    /**
     * 暂时不启用，当然也可以玩玩，服务器会收到和this.data.xxx类似的数据
     * 正在考虑架构以及搭建新数据库中
     */

    var openid
    wx.getStorage({
      key: 'openid',
      success: res => {
        openid = res.data
        console.log(openid)

        wx.request({
          url: 'https://www.gricn.top:4000/test',
          method: 'POST',
          "Content-Type": "application/x-www-form-urlencoded",
          data: {
            openid: openid,
            testtimes: this.data.testtimes,
            index: this.data.index,
            convert: this.data.convert,
          },
          success: res=>{
            console.log('给服务器发送体质检测结果成功')
            this.setData({
              testtimes: this.data.testtimes + 1
            })
          },
          fail: e=>{
            console.log('向服务器发送体质检测结果失败，失败原因为：\n'+e)
          }
        })
      },
      fail: e => {
        console.log(e)
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      TabCur: options.TabCur,
      sing_list_hid: options.sing_list_hid,
      time_show_hid: options.time_show_hid,
      singlis_show_hid: options.singlis_show_hid
    })
    var finalRes1 = options.finalRes

    this.setData({
      index: jsonData.dataList,
      constitutionContext: jsonData.dataContext,
      sex: app.globalData.sex
    })

    this.setData({
      gong_list: app.globalData.gong_list,
      shang_list: app.globalData.shang_list,
      jue_list: app.globalData.jue_list,
      zhi_list: app.globalData.zhi_list,
      yu_list: app.globalData.yu_list
    })
    // console(this.data.gong_list)

    if (1) {
      var str1 = '平和体质'
      var str2 = '气虚质'
      var str3 = '阳虚质'
      var str4 = '阴虚质'
      var str5 = '痰湿质'
      var str6 = '湿热质'
      var str7 = '血瘀质'
      var str8 = '气郁质'
      var str9 = '特禀质'
      // // console.log(finalRes1)
      // if (finalRes1.search(str1) > -1) {
      //   this.setData({
      //     gong_hid: 0,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 1
      //   })
      //   console.log('gong')
      // } else if (finalRes1.search(str2) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 0
      //   })
      //   console.log('yu')
      // } else if (finalRes1.search(str3) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 0,
      //     yu_hid: 1
      //   })
      //   console.log('zhi')
      // } else if (finalRes1.search(str4) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 0
      //   })
      //   console.log('yu')
      // } else if (finalRes1.search(str5) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 0,
      //     zhi_hid: 1,
      //     yu_hid: 1
      //   })
      //   console.log('jue')
      // } else if (finalRes1.search(str6) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 0
      //   })
      //   console.log('yu')
      // } else if (finalRes1.search(str7) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 1,
      //     jue_hid: 0,
      //     zhi_hid: 1,
      //     yu_hid: 1
      //   })
      //   console.log('jue')
      // } else if (finalRes1.search(str8) > -1) {
      //   this.setData({
      //     gong_hid: 1,
      //     shang_hid: 0,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 1
      //   })
      //   console.log('shang')
      // } else if (finalRes1.search(str9) > -1) {
      //   this.setData({
      //     gong_hid: 0,
      //     shang_hid: 1,
      //     jue_hid: 1,
      //     zhi_hid: 1,
      //     yu_hid: 1
      //   })
      //   console.log('gong')
      // }
    }

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})