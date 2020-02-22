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
    picker: ['没有', '很少', '有时','经常','总是'],
    TabCur: 0,
    scrollLeft: 0,
    test_tittle: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '测试结果']
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
        break;
    
    }
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