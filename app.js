//app.js
App({

  onLaunch: function() {
    var that = this

    wx.getStorage({
      key: 'isRegistered',
      success: function (res) {
        that.globalData.isRegistered = res.data
        console.log("主页加载注册信息成功，值为：" + res.data)
      },
      fail: res=>{

      }
    })

    // wx.request({
    //   url: 'https://www.gricn.top:4000/public/jue.json',
    //   success(res) {
    //     that.globalData.jue_list = res.data
    //     console.log('jue')
    //     console.log(that.globalData.jue_list)
    //   }
    // })
    // wx.request({
    //   url: 'https://www.gricn.top:4000/public/zhi.json',
    //   success(res) {
    //     that.globalData.zhi_list = res.data
    //     console.log('zhi')
    //     console.log(that.globalData.zhi_list)
    //   }
    // })
    // wx.request({
    //   url: 'https://www.gricn.top:4000/public/gong.json',
    //   success(res) {
    //     that.globalData.gong_list = res.data
    //     console.log('gong')
    //     console.log(that.globalData.gong_list)
    //   }
    // })
    // wx.request({
    //   url: 'https://www.gricn.top:4000/public/shang.json',
    //   success(res) {
    //     that.globalData.shang_list = res.data
    //     console.log('shang')
    //     console.log(that.globalData.shang_list)
    //   }
    // })
    // wx.request({
    //   url: 'https://www.gricn.top:4000/public/yu.json',
    //   success(res) {
    //     that.globalData.yu_list = res.data
    //     console.log('yu')
    //     console.log(that.globalData.yu_list)
    //   }
    // })

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var openid = null

    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    /* 获取用户openid */
    //大致思路是：先从本地缓存读取openid，若值通过检验，则成功；否则调用getOpenid()
    wx.login({
      success: res => {
        var temp = res
        wx.getStorage({
          key: 'openid',
          success: response => {
            openid = response.data

            // 对本地缓存存储的openid进行检测：openid不为空或者undefined，返回类型不为object类型，返回值不包括<html>
            if (openid == ("" || "undefined") || typeof openid == "object" || openid.indexOf('<html>') != -1) {
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
    sex: false,
    /* isRegistered, 先看看storage和服务器上有没有，如果没有，就默认为false */
    gong_list: {},
    shang_list: {},
    jue_list: {},
    zhi_list: {},
    yu_list: {},
  },
  getOpenid(temp) {
    var code = temp.code
    console.log("获取用户code成功，发送至服务器, code:" + code)
    wx.request({
      url: 'https://www.gricn.top:4000/getopenid/' + code,
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