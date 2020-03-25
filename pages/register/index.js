var app = getApp()
var address = require('./city.js')

var app = getApp()
Page({
  data: {
    // 性别选择
    array: ['男', '女', '其他'],
    objectArray: [
      {
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      },
      {
        id: 2,
        name: '其他'
      }
    ],
    index: 0,

    //省市三级联动，祖传代码，勿动~~
    address: '', //详细收货地址（四级）
    value: [0, 0, 0], // 地址选择器省市区 暂存 currentIndex
    region: '', //所在地区
    regionValue: [0, 0, 0], // 地址选择器省市区 最终 currentIndex
    provinces: [], // 一级地址
    citys: [], // 二级地址
    areas: [], // 三级地址
    visible: false
  },
  onLoad(options) {
    // 默认联动显示北京
    var id = address.provinces[0].id 
    this.setData({
      provinces: address.provinces, // 34省
      citys: address.citys[id], //默认北京市辖区
      areas: address.areas[address.citys[id][0].id]
    })
  },
  closePopUp() {
    this.setData({
      visible: false
    })
  },
  pickAddress() {
    this.setData({
      visible: true,
      value: [...this.data.regionValue]
    })
  },
  // 处理省市县联动逻辑 并保存 value
  cityChange(e) {
    var value = e.detail.value
    let {
      provinces,
      citys
    } = this.data
    var provinceNum = value[0]
    var cityNum = value[1]
    var areaNum = value[2]

    if (this.data.value[0] !== provinceNum) {
      var id = provinces[provinceNum].id
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id]
      })
    } else if (this.data.value[1] !== cityNum) {
      var id = citys[cityNum].id
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id]
      })
    } else {
      this.setData({
        value: [provinceNum, cityNum, areaNum]
      })
    }
  },
  preventTouchmove() {},
  // 城市选择器
  // 点击地区选择取消按钮
  cityCancel(e) {
    this.setData({
      citys: this.data.lastCitys,
      areas: this.data.lastAreas,
      value: [...this.data.regionValue],
      visible: false
    })
  },
  // 提交时由序号获取省市区id
  getRegionId(type) {
    let value = this.data.regionValue
    let provinceId = address.provinces[value[0]].id
    let townId = address.citys[provinceId][value[1]].id
    let areaId = ''
    if (address.areas[townId][value[2]].id) {
      areaId = address.areas[townId][value[2]].id
    } else {
      areaId = 0
    }

    if (type === 'provinceId') {
      return provinceId
    } else if (type === 'townId') {
      return townId
    } else {
      return areaId
    }
  },
  // 点击地区选择确定按钮
  citySure(e) {
    var value = this.data.value
    this.setData({
      visible: false
    })
    // 将选择的城市信息显示到输入框
    try {
      var region = (this.data.provinces[value[0]].name || '') + (this.data.citys[value[1]].name || '')
      if (this.data.areas.length > 0) {
        region = region + this.data.areas[value[2]].name || ''
      } else {
        this.data.value[2] = 0
      }
    } catch (error) {
      console.log('adress select something error')
    }

    this.setData({
      region: region,
      lastCitys: this.data.citys,
      lastAreas: this.data.areas,
      regionValue: [...this.data.value]
    }, () => {
      console.log(`省份ID：${this.getRegionId('provinceId')}: 市区ID：${this.getRegionId('townId')}：城区ID：${this.getRegionId('areas')}`)
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})