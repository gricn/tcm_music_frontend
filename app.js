//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var openid = null

    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var that = this

    // 登录
    //大致思路是：先从本地缓存读取openid，若值通过检验，则成功；否则调用getOpenid()；若本地缓存无openid，也调用getOpenid()
    wx.login({
      success: res => {
        var temp = res
        wx.getStorage({
          key: 'openid',
          success: response => {
            openid = response.data
            // console.log(typeof openid)

            // 对本地缓存存储的openid进行检测：openid不为空或者undefined，返回类型不为object类型，返回值不包括<html>
            if (openid == ("" || "undefined") || typeof openid == "object" || openid.indexOf('<html>') != -1 ) {
              console.log("从缓存读取openid成功，但数值不正确，现重新向服务器请求")
              that.getOpenid(temp)
            } else {
              console.log("从缓存读取openid成功：" + openid)
            } 
          },
          fail: response => {
            console.log("未能从缓存读取openid，准备连接服务器")
            that.getOpenid(temp)
          }
        })
      }
    })

    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  onShow() {

  },
  globalData: {
    userInfo: null,
    sex:false,
    isRegistered: false
  },
  getOpenid(temp) {
    var code = temp.code
    console.log("获取用户code成功，发送至服务器, code:" + code)
    wx.request({
      url: 'https://www.gricn.top:4000/login/' + code,
      // timeout: 3000,
      success: (res) => {
        // var openid = res.data.openid
        // console.log("openid 服务器存储成功")
        if (res.data != "") {
          console.log("从服务器获取openid成功" + res.data)
          //存储用户信息到本地存储
          wx.setStorageSync('openid', res.data)
        } else {
          console.log("从服务器获取openid成功，但返回值未空")
        }
      },
      fail: () => {
        console.log("服务器连接失败 或 服务器未能及时响应")
      }
    })

  },


})