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

    picker: ['没有', '很少', '有时', '经常', '总是'],
    TabCur: 0, //当前页面的Tab值
    scrollLeft: 0, //Tab向左偏移量
    test_tittle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '测试结果', '您的推荐舒缓歌单'], //Tab列表
  },

  //点击不同Tab时，Tab的反应
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    if (e.currentTarget.dataset.id == 9) {

      var lock = true; //判断平和体质数值是否可以修改，true为可以

      for (var i = 0; i < this.data.abnormalConstitution.length; i++) {
        // 确定偏颇体质
        if (this.data.convert[i] >= 40) {
          this.data.abnormalConstitution[i] = 2
          if (lock) {
            this.data.normalConstitution = 0
            lock = false
          }
          //有偏颇质倾向
        } else if (this.data.convert[i] >= 30) {
          this.data.abnormalConstitution[i] = 1
          if (lock) {
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

  switchSongPage() {
    this.setData({
      TabCur: 10
    })

    /**
     * 暂时不启用，当然也可以玩玩，服务器会收到和this.data.xxx类似的数据
     * 正在考虑架构以及搭建新数据库中
     */

    // wx.request({
    //   url: 'https://www.gricn.top:4000/testresult',
    //   method:'POST',
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   data:{
    //     index : JSON.stringify(this.data.index),
    //     convert: this.data.convert,
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      index: jsonData.dataList,
      constitutionContext: jsonData.dataContext,
      sex: app.globalData.sex
    })
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