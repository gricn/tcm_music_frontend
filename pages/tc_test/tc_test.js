// pages/tr_test/tc_test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1_1: 0,
    index1_2: 0,
    index1_3: 0,
    index1_4: 0,
    index1_5: 0,
    index1_6: 0,
    index1_7: 0,
    index2_1: 0,
    index2_2: 0,
    index2_3: 0,
    index2_4: 0,
    index2_5: 0,
    index2_6: 0,
    index2_7: 0,
    index2_7: 0,
    index2_8: 0,
    index3_1: 0,
    index3_2: 0,
    index3_3: 0,
    index3_4: 0,
    index3_5: 0,
    index3_6: 0,
    index3_7: 0,
    index3_7: 0,
    index3_8: 0,
    index4_1: 0,
    index4_2: 0,
    index4_3: 0,
    index4_4: 0,
    index4_5: 0,
    index4_6: 0,
    index4_7: 0,
    index4_7: 0,
    index4_8: 0,
    index5_1: 0,
    index5_2: 0,
    index5_3: 0,
    index5_4: 0,
    index5_5: 0,
    index5_6: 0,
    index5_7: 0,
    index5_7: 0,
    index6_1: 0,
    index6_2: 0,
    index6_3: 0,
    index6_4: 0,
    index6_5: 0,
    index6_6: 0,
    index6_7: 0,
    index6_7: 0,
    index7_1: 0,
    index7_2: 0,
    index7_3: 0,
    index7_4: 0,
    index7_5: 0,
    index7_6: 0,
    index7_7: 0,
    index7_7: 0,
    index8_1: 0,
    index8_2: 0,
    index8_3: 0,
    index8_4: 0,
    index8_5: 0,
    index8_6: 0,
    index8_7: 0,
    index8_7: 0,
    index9_1: 0,
    index9_2: 0,
    index9_3: 0,
    index9_4: 0,
    index9_5: 0,
    index9_6: 0,
    index9_7: 0,
    index9_7: 0,
    index9_8: 0,
    convert1: '暂无',
    convert2: '暂无',
    convert3: '暂无',
    convert4: '暂无',
    convert5: '暂无',
    convert6: '暂无',
    convert7: '暂无',
    convert8: '暂无',
    convert9: '暂无',
    final_res: '您还未做完测试题',
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
          index1_1: e.detail.value/25
        })
        console.log(e.detail.value/25);
        break;
      case ('index1_2'):
        this.setData({
          index1_2: e.detail.value/25
        })
        break;
      case ('index1_3'):
        this.setData({
          index1_3: e.detail.value/25
        })
        break;
      case ('index1_4'):
        this.setData({
          index1_4: e.detail.value/25
        })
        break;
      case ('index1_5'):
        this.setData({
          index1_5: e.detail.value/25
        })
        break;
      case ('index1_6'):
        this.setData({
          index1_6: e.detail.value/25
        })
        break;
      case ('index1_7'):
        this.setData({
          index1_7: e.detail.value/25
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
          convert1: (sum/28*100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 1
        // })
        console.log(1000+this.data.convert1)
        break;
      case ('index2_1'):
        this.setData({
          index2_1: e.detail.value / 25
        })
        break;
      case ('index2_2'):
        this.setData({
          index2_2: e.detail.value / 25
        })
        break;
      case ('index2_3'):
        this.setData({
          index2_3: e.detail.value / 25
        })
        break;
      case ('index2_4'):
        this.setData({
          index2_4: e.detail.value / 25
        })
        break;
      case ('index2_5'):
        this.setData({
          index2_5: e.detail.value / 25
        })
        break;
      case ('index2_6'):
        this.setData({
          index2_6: e.detail.value / 25
        })
        break;
      case ('index2_7'):
        this.setData({
          index2_7: e.detail.value / 25
        })
        break;
      case ('index2_8'):
        this.setData({
          index2_8: e.detail.value / 25
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
          convert2: (sum / 32 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 2
        // })
        console.log(2000+this.data.convert2)
        break;
      case ('index3_1'):
        this.setData({
          index3_1: e.detail.value / 25
        })
        break;
      case ('index3_2'):
        this.setData({
          index3_2: e.detail.value / 25
        })
        break;
      case ('index3_3'):
        this.setData({
          index3_3: e.detail.value / 25
        })
        break;
      case ('index3_4'):
        this.setData({
          index3_4: e.detail.value / 25
        })
        break;
      case ('index3_5'):
        this.setData({
          index3_5: e.detail.value / 25
        })
        break;
      case ('index3_6'):
        this.setData({
          index3_6: e.detail.value / 25
        })
        break;
      case ('index3_7'):
        this.setData({
          index3_7: e.detail.value / 25
        })
        break;
      case ('index3_8'):
        this.setData({
          index3_8: e.detail.value / 25
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
          convert3: (sum / 32 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 3
        // })
        console.log(3000+this.data.convert3)
        break;
      case ('index4_1'):
        this.setData({
          index4_1: e.detail.value / 25
        })
        break;
      case ('index4_2'):
        this.setData({
          index4_2: e.detail.value / 25
        })
        break;
      case ('index4_3'):
        this.setData({
          index4_3: e.detail.value / 25
        })
        break;
      case ('index4_4'):
        this.setData({
          index4_4: e.detail.value / 25
        })
        break;
      case ('index4_5'):
        this.setData({
          index4_5: e.detail.value / 25
        })
        break;
      case ('index4_6'):
        this.setData({
          index4_6: e.detail.value / 25
        })
        break;
      case ('index4_7'):
        this.setData({
          index4_7: e.detail.value / 25
        })
        break;
      case ('index4_8'):
        this.setData({
          index4_8: e.detail.value / 25
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
          convert4: (sum / 32 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 4
        // })
        console.log(4000+this.data.convert4)
        break;
      case ('index5_1'):
        this.setData({
          index5_1: e.detail.value / 25
        })
        break;
      case ('index5_2'):
        this.setData({
          index5_2: e.detail.value / 25
        })
        break;
      case ('index5_3'):
        this.setData({
          index5_3: e.detail.value / 25
        })
        break;
      case ('index5_4'):
        this.setData({
          index5_4: e.detail.value / 25
        })
        break;
      case ('index5_5'):
        this.setData({
          index5_5: e.detail.value / 25
        })
        break;
      case ('index5_6'):
        this.setData({
          index5_6: e.detail.value / 25
        })
        break;
      case ('index5_7'):
        this.setData({
          index5_7: e.detail.value / 25
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
          convert5: (sum / 24 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 5
        // })
        console.log(5000+this.data.convert5)
        break;
      case ('index6_1'):
        this.setData({
          index6_1: e.detail.value / 25
        })
        break;
      case ('index6_2'):
        this.setData({
          index6_2: e.detail.value / 25
        })
        break;
      case ('index6_3'):
        this.setData({
          index6_3: e.detail.value / 25
        })
        break;
      case ('index6_4'):
        this.setData({
          index6_4: e.detail.value / 25
        })
        break;
      case ('index6_5'):
        this.setData({
          index6_5: e.detail.value / 25
        })
        break;
      case ('index6_6'):
        this.setData({
          index6_6: e.detail.value / 25
        })
        break;
      case ('index6_7'):
        this.setData({
          index6_7: e.detail.value / 25
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
          convert6: (sum / 28 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 6
        // })
        console.log(6000+this.data.convert6)
        break;
      case ('index7_1'):
        this.setData({
          index7_1: e.detail.value / 25
        })
        break;
      case ('index7_2'):
        this.setData({
          index7_2: e.detail.value / 25
        })
        break;
      case ('index7_3'):
        this.setData({
          index7_3: e.detail.value / 25
        })
        break;
      case ('index7_4'):
        this.setData({
          index7_4: e.detail.value / 25
        })
        break;
      case ('index7_5'):
        this.setData({
          index7_5: e.detail.value / 25
        })
        break;
      case ('index7_6'):
        this.setData({
          index7_6: e.detail.value / 25
        })
        break;
      case ('index7_7'):
        this.setData({
          index7_7: e.detail.value / 25
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
          convert7: (sum / 28 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 7
        // })
        console.log(7000+this.data.convert7)
        break;
      case ('index8_1'):
        this.setData({
          index8_1: e.detail.value / 25
        })
        break;
      case ('index8_2'):
        this.setData({
          index8_2: e.detail.value / 25
        })
        break;
      case ('index8_3'):
        this.setData({
          index8_3: e.detail.value / 25
        })
        break;
      case ('index8_4'):
        this.setData({
          index8_4: e.detail.value / 25
        })
        break;
      case ('index8_5'):
        this.setData({
          index8_5: e.detail.value / 25
        })
        break;
      case ('index8_6'):
        this.setData({
          index8_6: e.detail.value / 25
        })
        break;
      case ('index8_7'):
        this.setData({
          index8_7: e.detail.value / 25
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
          convert8: (sum / 28 * 100).toFixed(2)
        })
        // this.setData({
        //   TabCur: 8
        // })
        console.log(8000+this.data.convert8)
        break;
      case ('index9_1'):
        this.setData({
          index9_1: e.detail.value / 25
        })
        break;
      case ('index9_2'):
        this.setData({
          index9_2: e.detail.value / 25
        })
        break;
      case ('index9_3'):
        this.setData({
          index9_3: e.detail.value / 25
        })
        break;
      case ('index9_4'):
        this.setData({
          index9_4: e.detail.value / 25
        })
        break;
      case ('index9_5'):
        this.setData({
          index9_5: e.detail.value / 25
        })
        break;
      case ('index9_6'):
        this.setData({
          index9_6: e.detail.value / 25
        })
        break;
      case ('index9_7'):
        this.setData({
          index9_7: e.detail.value / 25
        })
        break;
      case ('index9_8'):
        this.setData({
          index9_8: e.detail.value / 25
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
        console.log(sum)
        this.setData({
          convert9: (sum / 32 * 100).toFixed(2)
        })
        console.log(9000+this.data.convert9)

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
            switch(maxindex){
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
          }else{
            if(arr[maxindex]>=40){
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
            }else if(arr[maxindex]>=30){
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
            }else{
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
  },

  To_first_page: function () {
    wx.navigateTo({
      url: '../index/index?cur=1',
    })
  },

  To_songlist_page: function () {
    this.setData({
      TabCur: 10
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