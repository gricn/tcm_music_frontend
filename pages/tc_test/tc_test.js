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
    final_res: '您还未做完测试题',

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
  },

  regularCal() {

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

    // 获取原始分并计算存储转换分
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

    /*

        var arr = [this.data.convert1, this.data.convert2, this.data.convert3, this.data.convert4, this.data.convert5, this.data.convert6, this.data.convert7, this.data.convert8]
        console.log(arr)
        var max = Math.max.apply(null, arr);
        console.log(max)
        var maxindex = -1
        for (var i = 0, len = arr.length; i < len; i++) {
          if (arr[i] == max) {
            maxindex = i;
            break;
          }
        }
        console.log(maxindex)

        if (this.data.convert9 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert1 <= 30) {
            this.setData({
              final_res: "是平和体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert1 <= 40) {
            switch (maxindex) {
              case (0):
                this.setData({
                  final_res: "基本是平和体质,有阳虚体质倾向"
                })
                break;
              case (1):
                this.setData({
                  final_res: "基本是平和体质,有阴虚体质倾向"
                })
                break;
              case (2):
                this.setData({
                  final_res: "基本是平和体质,有气虚体质倾向"
                })
                break;
              case (3):
                this.setData({
                  final_res: "基本是平和体质,有痰湿体质倾向"
                })
                break;
              case (4):
                this.setData({
                  final_res: "基本是平和体质,有湿热体质倾向"
                })
                break;
              case (5):
                this.setData({
                  final_res: "基本是平和体质,有血瘀体质倾向"
                })
                break;
              case (6):
                this.setData({
                  final_res: "基本是平和体质,有特凛体质倾向"
                })
                break;
              case (7):
                this.setData({
                  final_res: "基本是平和体质,有气郁体质倾向"
                })
                break;
              default:
                this.setData({
                  final_res: "基本是平和体质"
                })
            }
          } else {
            if (arr[maxindex] >= 40) {
              switch (maxindex) {
                case (0):
                  this.setData({
                    final_res: "是阳虚体质"
                  })
                  break;
                case (1):
                  this.setData({
                    final_res: "是阴虚体质"
                  })
                  break;
                case (2):
                  this.setData({
                    final_res: "是气虚体质"
                  })
                  break;
                case (3):
                  this.setData({
                    final_res: "是痰湿体质"
                  })
                  break;
                case (4):
                  this.setData({
                    final_res: "是湿热体质"
                  })
                  break;
                case (5):
                  this.setData({
                    final_res: "是血瘀体质"
                  })
                  break;
                case (6):
                  this.setData({
                    final_res: "是特凛体质"
                  })
                  break;
                case (7):
                  this.setData({
                    final_res: "是气郁体质"
                  })
                  break;
              }
            } else if (arr[maxindex] >= 30) {
              switch (maxindex) {
                case (0):
                  this.setData({
                    final_res: "倾向是阳虚体质"
                  })
                  break;
                case (1):
                  this.setData({
                    final_res: "倾向是阴虚体质"
                  })
                  break;
                case (2):
                  this.setData({
                    final_res: "倾向是气虚体质"
                  })
                  break;
                case (3):
                  this.setData({
                    final_res: "倾向是痰湿体质"
                  })
                  break;
                case (4):
                  this.setData({
                    final_res: "倾向是湿热体质"
                  })
                  break;
                case (5):
                  this.setData({
                    final_res: "倾向是血瘀体质"
                  })
                  break;
                case (6):
                  this.setData({
                    final_res: "倾向是特凛体质"
                  })
                  break;
                case (7):
                  this.setData({
                    final_res: "倾向是气郁体质"
                  })
                  break;
              }
            } else {
              this.setData({
                final_res: "暂时无法判断您的体质"
              })
            }
          }
        } else {
          if (arr[maxindex] >= 40) {
            switch (maxindex) {
              case (0):
                this.setData({
                  final_res: "是阳虚体质"
                })
                break;
              case (1):
                this.setData({
                  final_res: "是阴虚体质"
                })
                break;
              case (2):
                this.setData({
                  final_res: "是气虚体质"
                })
                break;
              case (3):
                this.setData({
                  final_res: "是痰湿体质"
                })
                break;
              case (4):
                this.setData({
                  final_res: "是湿热体质"
                })
                break;
              case (5):
                this.setData({
                  final_res: "是血瘀体质"
                })
                break;
              case (6):
                this.setData({
                  final_res: "是特凛体质"
                })
                break;
              case (7):
                this.setData({
                  final_res: "是气郁体质"
                })
                break;
            }
          } else if (arr[maxindex] >= 30) {
            switch (maxindex) {
              case (0):
                this.setData({
                  final_res: "倾向是阳虚体质"
                })
                break;
              case (1):
                this.setData({
                  final_res: "倾向是阴虚体质"
                })
                break;
              case (2):
                this.setData({
                  final_res: "倾向是气虚体质"
                })
                break;
              case (3):
                this.setData({
                  final_res: "倾向是痰湿体质"
                })
                break;
              case (4):
                this.setData({
                  final_res: "倾向是湿热体质"
                })
                break;
              case (5):
                this.setData({
                  final_res: "倾向是血瘀体质"
                })
                break;
              case (6):
                this.setData({
                  final_res: "倾向是特凛体质"
                })
                break;
              case (7):
                this.setData({
                  final_res: "倾向是气郁体质"
                })
                break;
            }
          } else {
            this.setData({
              final_res: "暂时无法判断您的体质"
            })
          }
        }

        // this.setData({
        //   TabCur: 9
        // })

        break;

    }
    */
  },

  To_first_page: function() {
    wx.navigateTo({
      url: '../index/index?cur=1',
    })
  },

  To_songlist_page: function() {
    this.setData({
      TabCur: 10
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      index: jsonData.dataList,
      convertContext: jsonData.dataContext,
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