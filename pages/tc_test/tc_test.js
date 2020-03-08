// pages/tr_test/tc_test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1_1:null,
    index1_2: null,
    index1_3: null,
    index1_4: null,
    index1_5: null,
    index1_6: null,
    index1_7: null,
    index2_1: null,
    index2_2: null,
    index2_3: null,
    index2_4: null,
    index2_5: null,
    index2_6: null,
    index2_7: null,
    index2_7: null,
    index2_8: null,
    index3_1: null,
    index3_2: null,
    index3_3: null,
    index3_4: null,
    index3_5: null,
    index3_6: null,
    index3_7: null,
    index3_7: null,
    index3_8: null,
    index4_1: null,
    index4_2: null,
    index4_3: null,
    index4_4: null,
    index4_5: null,
    index4_6: null,
    index4_7: null,
    index4_7: null,
    index4_8: null,
    index5_1: null,
    index5_2: null,
    index5_3: null,
    index5_4: null,
    index5_5: null,
    index5_6: null,
    index5_7: null,
    index5_7: null,
    index6_1: null,
    index6_2: null,
    index6_3: null,
    index6_4: null,
    index6_5: null,
    index6_6: null,
    index6_7: null,
    index6_7: null,
    index7_1: null,
    index7_2: null,
    index7_3: null,
    index7_4: null,
    index7_5: null,
    index7_6: null,
    index7_7: null,
    index7_7: null,
    index8_1: null,
    index8_2: null,
    index8_3: null,
    index8_4: null,
    index8_5: null,
    index8_6: null,
    index8_7: null,
    index8_7: null,
    index9_1: null,
    index9_2: null,
    index9_3: null,
    index9_4: null,
    index9_5: null,
    index9_6: null,
    index9_7: null,
    index9_7: null,
    index9_8: null,
    convert1: '暂无',
    convert2: '暂无',
    convert3: '暂无',
    convert4: '暂无',
    convert5: '暂无',
    convert6: '暂无',
    convert7: '暂无',
    convert8: '暂无',
    convert9: '暂无',
    final_res: '暂无',
    picker: ['没有', '很少', '有时','经常','总是'],
    TabCur: 0,
    scrollLeft: 0,
    test_tittle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '测试结果','您的推荐舒缓歌单']
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  PickerChange(e) {
    //console.log('index'+e.currentTarget.id);
    var pick_id = e.currentTarget.id
    switch(pick_id){
      case('index1_1'):
        this.setData({
          index1_1: e.detail.value
        })
        console.log(e.detail.value);
        break;
      case ('index1_2'):
        this.setData({
          index1_2: e.detail.value
        })
        break;
      case ('index1_3'):
        this.setData({
          index1_3: e.detail.value
        })
        break;
      case ('index1_4'):
        this.setData({
          index1_4: e.detail.value
        })
        break;
      case ('index1_5'):
        this.setData({
          index1_5: e.detail.value
        })
        break;
      case ('index1_6'):
        this.setData({
          index1_6: e.detail.value
        })
        break;
      case ('index1_7'):
        this.setData({
          index1_7: e.detail.value
        })
        var i11 = parseInt(this.data.index1_1)
        var i12 = parseInt(this.data.index1_2)
        var i13 = parseInt(this.data.index1_3)
        var i14 = parseInt(this.data.index1_4)
        var i15 = parseInt(this.data.index1_5)
        var i16 = parseInt(this.data.index1_6)
        var i17 = parseInt(this.data.index1_7)
        var sum = i11 + i12 + i13 + i14 + i15 + i16 + i17
        this.setData({
          convert1: sum/28*100
        })
        console.log(this.data.convert1)
        break;
      case ('index2_1'):
        this.setData({
          index2_1: e.detail.value
        })
        break;
      case ('index2_2'):
        this.setData({
          index2_2: e.detail.value
        })
        break;
      case ('index2_3'):
        this.setData({
          index2_3: e.detail.value
        })
        break;
      case ('index2_4'):
        this.setData({
          index2_4: e.detail.value
        })
        break;
      case ('index2_5'):
        this.setData({
          index2_5: e.detail.value
        })
        break;
      case ('index2_6'):
        this.setData({
          index2_6: e.detail.value
        })
        break;
      case ('index2_7'):
        this.setData({
          index2_7: e.detail.value
        })
        break;
      case ('index2_8'):
        this.setData({
          index2_8: e.detail.value
        })
        var i21 = parseInt(this.data.index2_1)
        var i22 = parseInt(this.data.index2_2)
        var i23 = parseInt(this.data.index2_3)
        var i24 = parseInt(this.data.index2_4)
        var i25 = parseInt(this.data.index2_5)
        var i26 = parseInt(this.data.index2_6)
        var i27 = parseInt(this.data.index2_7)
        var i28 = parseInt(this.data.index2_8)
        var sum = i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28
        this.setData({
          convert2: sum / 32 * 100
        })
        console.log(this.data.convert2)
        break;
      case ('index3_1'):
        this.setData({
          index3_1: e.detail.value
        })
        break;
      case ('index3_2'):
        this.setData({
          index3_2: e.detail.value
        })
        break;
      case ('index3_3'):
        this.setData({
          index3_3: e.detail.value
        })
        break;
      case ('index3_4'):
        this.setData({
          index3_4: e.detail.value
        })
        break;
      case ('index3_5'):
        this.setData({
          index3_5: e.detail.value
        })
        break;
      case ('index3_6'):
        this.setData({
          index3_6: e.detail.value
        })
        break;
      case ('index3_7'):
        this.setData({
          index3_7: e.detail.value
        })
        break;
      case ('index3_8'):
        this.setData({
          index3_8: e.detail.value
        })
        var i31 = parseInt(this.data.index3_1)
        var i32 = parseInt(this.data.index3_2)
        var i33 = parseInt(this.data.index3_3)
        var i34 = parseInt(this.data.index3_4)
        var i35 = parseInt(this.data.index3_5)
        var i36 = parseInt(this.data.index3_6)
        var i37 = parseInt(this.data.index3_7)
        var i38 = parseInt(this.data.index3_8)
        var sum = i31 + i32 + i33 + i34 + i35 + i36 + i37 + i38
        this.setData({
          convert3: sum / 32 * 100
        })
        console.log(this.data.convert3)
        break;
      case ('index4_1'):
        this.setData({
          index4_1: e.detail.value
        })
        break;
      case ('index4_2'):
        this.setData({
          index4_2: e.detail.value
        })
        break;
      case ('index4_3'):
        this.setData({
          index4_3: e.detail.value
        })
        break;
      case ('index4_4'):
        this.setData({
          index4_4: e.detail.value
        })
        break;
      case ('index4_5'):
        this.setData({
          index4_5: e.detail.value
        })
        break;
      case ('index4_6'):
        this.setData({
          index4_6: e.detail.value
        })
        break;
      case ('index4_7'):
        this.setData({
          index4_7: e.detail.value
        })
        break;
      case ('index4_8'):
        this.setData({
          index4_8: e.detail.value
        })
        var i41 = parseInt(this.data.index4_1)
        var i42 = parseInt(this.data.index4_2)
        var i43 = parseInt(this.data.index4_3)
        var i44 = parseInt(this.data.index4_4)
        var i45 = parseInt(this.data.index4_5)
        var i46 = parseInt(this.data.index4_6)
        var i47 = parseInt(this.data.index4_7)
        var i48 = parseInt(this.data.index4_8)
        var sum = i41 + i42 + i43 + i44 + i45 + i46 + i47 + i48
        this.setData({
          convert4: sum / 32 * 100
        })
        console.log(this.data.convert4)
        break;
      case ('index5_1'):
        this.setData({
          index5_1: e.detail.value
        })
        break;
      case ('index5_2'):
        this.setData({
          index5_2: e.detail.value
        })
        break;
      case ('index5_3'):
        this.setData({
          index5_3: e.detail.value
        })
        break;
      case ('index5_4'):
        this.setData({
          index5_4: e.detail.value
        })
        break;
      case ('index5_5'):
        this.setData({
          index5_5: e.detail.value
        })
        break;
      case ('index5_6'):
        this.setData({
          index5_6: e.detail.value
        })
        break;
      case ('index5_7'):
        this.setData({
          index5_7: e.detail.value
        })
        var i51 = parseInt(this.data.index5_1)
        var i52 = parseInt(this.data.index5_2)
        var i53 = parseInt(this.data.index5_3)
        var i54 = parseInt(this.data.index5_4)
        var i55 = parseInt(this.data.index5_5)
        var i56 = parseInt(this.data.index5_6)
        var i57 = parseInt(this.data.index5_7)
        var sum = i51 + i52 + i53 + i54 + i55 + i56 + i57
        this.setData({
          convert5: sum / 28 * 100
        })
        console.log(this.data.convert5)
        break;
      case ('index6_1'):
        this.setData({
          index6_1: e.detail.value
        })
        break;
      case ('index6_2'):
        this.setData({
          index6_2: e.detail.value
        })
        break;
      case ('index6_3'):
        this.setData({
          index6_3: e.detail.value
        })
        break;
      case ('index6_4'):
        this.setData({
          index6_4: e.detail.value
        })
        break;
      case ('index6_5'):
        this.setData({
          index6_5: e.detail.value
        })
        break;
      case ('index6_6'):
        this.setData({
          index6_6: e.detail.value
        })
        break;
      case ('index6_7'):
        this.setData({
          index6_7: e.detail.value
        })
        var i61 = parseInt(this.data.index6_1)
        var i62 = parseInt(this.data.index6_2)
        var i63 = parseInt(this.data.index6_3)
        var i64 = parseInt(this.data.index6_4)
        var i65 = parseInt(this.data.index6_5)
        var i66 = parseInt(this.data.index6_6)
        var i67 = parseInt(this.data.index6_7)
        var sum = i61 + i62 + i63 + i64 + i65 + i66 + i67
        this.setData({
          convert6: sum / 28 * 100
        })
        console.log(this.data.convert6)
        break;
      case ('index7_1'):
        this.setData({
          index7_1: e.detail.value
        })
        break;
      case ('index7_2'):
        this.setData({
          index7_2: e.detail.value
        })
        break;
      case ('index7_3'):
        this.setData({
          index7_3: e.detail.value
        })
        break;
      case ('index7_4'):
        this.setData({
          index7_4: e.detail.value
        })
        break;
      case ('index7_5'):
        this.setData({
          index7_5: e.detail.value
        })
        break;
      case ('index7_6'):
        this.setData({
          index7_6: e.detail.value
        })
        break;
      case ('index7_7'):
        this.setData({
          index7_7: e.detail.value
        })
        var i71 = parseInt(this.data.index7_1)
        var i72 = parseInt(this.data.index7_2)
        var i73 = parseInt(this.data.index7_3)
        var i74 = parseInt(this.data.index7_4)
        var i75 = parseInt(this.data.index7_5)
        var i76 = parseInt(this.data.index7_6)
        var i77 = parseInt(this.data.index7_7)
        var sum = i71 + i72 + i73 + i74 + i75 + i76 + i77
        this.setData({
          convert7: sum / 28 * 100
        })
        console.log(this.data.convert7)
        break;
      case ('index8_1'):
        this.setData({
          index8_1: e.detail.value
        })
        break;
      case ('index8_2'):
        this.setData({
          index8_2: e.detail.value
        })
        break;
      case ('index8_3'):
        this.setData({
          index8_3: e.detail.value
        })
        break;
      case ('index8_4'):
        this.setData({
          index8_4: e.detail.value
        })
        break;
      case ('index8_5'):
        this.setData({
          index8_5: e.detail.value
        })
        break;
      case ('index8_6'):
        this.setData({
          index8_6: e.detail.value
        })
        break;
      case ('index8_7'):
        this.setData({
          index8_7: e.detail.value
        })
        var i81 = parseInt(this.data.index8_1)
        var i82 = parseInt(this.data.index8_2)
        var i83 = parseInt(this.data.index8_3)
        var i84 = parseInt(this.data.index8_4)
        var i85 = parseInt(this.data.index8_5)
        var i86 = parseInt(this.data.index8_6)
        var i87 = parseInt(this.data.index8_7)
        var sum = i81 + i82 + i83 + i84 + i85 + i86 + i87
        this.setData({
          convert8: sum / 28 * 100
        })
        console.log(this.data.convert8)
        break;
      case ('index9_1'):
        this.setData({
          index9_1: e.detail.value
        })
        break;
      case ('index9_2'):
        this.setData({
          index9_2: e.detail.value
        })
        break;
      case ('index9_3'):
        this.setData({
          index9_3: e.detail.value
        })
        break;
      case ('index9_4'):
        this.setData({
          index9_4: e.detail.value
        })
        break;
      case ('index9_5'):
        this.setData({
          index9_5: e.detail.value
        })
        break;
      case ('index9_6'):
        this.setData({
          index9_6: e.detail.value
        })
        break;
      case ('index9_7'):
        this.setData({
          index9_7: e.detail.value
        })
        break;
      case ('index9_8'):
        this.setData({
          index9_8: e.detail.value
        })
        var i91 = parseInt(this.data.index9_1)
        var i92 = 4 - parseInt(this.data.index9_2)
        var i93 = 4 - parseInt(this.data.index9_3)
        var i94 = 4 - parseInt(this.data.index9_4)
        var i95 = parseInt(this.data.index9_5)
        var i96 = parseInt(this.data.index9_6)
        var i97 = 4 - parseInt(this.data.index9_7)
        var i98 = 4 - parseInt(this.data.index9_8)
        var sum = i91 + i92 + i93 + i94 + i95 + i96 + i97 + i98
        this.setData({
          convert9: sum / 32 * 100
        })
        console.log(this.data.convert9)

        if(this.data.convert1 >= 60){
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30){
            this.setData({
              final_res:"是阳虚体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40){
            this.setData({
              final_res: "基本是阳虚体质"
            })
          }
        }else{

        }

        if (this.data.convert2 >= 60) {
          if (this.data.convert1 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是阴虚体质"
            })
          } else if (this.data.convert1 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是阴虚体质"
            })
          }
        } else {

        }

        if (this.data.convert3 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert1 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是气虚体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert1 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是气虚体质"
            })
          }
        } else {

        }

        if (this.data.convert4 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert1 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是痰湿体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert1 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是痰湿体质"
            })
          }
        } else {

        }

        if (this.data.convert5 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert1 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是湿热体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert1 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是湿热体质"
            })
          }
        } else {

        }

        if (this.data.convert6 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert1 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是血瘀体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert1 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是血瘀体质"
            })
          }
        } else {

        }

        if (this.data.convert7 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert1 <= 30 && this.data.convert8 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是特凛体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert1 <= 40 && this.data.convert8 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是特凛体质"
            })
          }
        } else {

        }

        if (this.data.convert8 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert1 <= 30 && this.data.convert9 <= 30) {
            this.setData({
              final_res: "是气郁体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert1 <= 40 && this.data.convert9 <= 40) {
            this.setData({
              final_res: "基本是气郁体质"
            })
          }
        } else {

        }

        if (this.data.convert9 >= 60) {
          if (this.data.convert2 <= 30 && this.data.convert3 <= 30 && this.data.convert4 <= 30 && this.data.convert5 <= 30 && this.data.convert6 <= 30 && this.data.convert7 <= 30 && this.data.convert8 <= 30 && this.data.convert1 <= 30) {
            this.setData({
              final_res: "是平和体质"
            })
          } else if (this.data.convert2 <= 40 && this.data.convert3 <= 40 && this.data.convert4 <= 40 && this.data.convert5 <= 40 && this.data.convert6 <= 40 && this.data.convert7 <= 40 && this.data.convert8 <= 40 && this.data.convert1 <= 40) {
            this.setData({
              final_res: "基本是平和体质"
            })
          }
        } else {

        }

        break;
    
    }
  },

  To_first_page: function () {
    wx.navigateTo({
      url: '../index/index?cur=1',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})