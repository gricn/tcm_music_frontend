//index 用来存储各种类型回答的值，sliderValue取值范围为0 ~ 4

var index = [
  //index[0]:阳虚质：7个
  [{
      "quesID": 1,
      "content": "您的手脚发凉吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您胃脘部、背部或腰膝部怕冷吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您感到怕冷衣服比他人穿得多吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您比一般人受不了寒冷吗",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您比他人容易患感冒吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您吃凉的东西会感到不舒服吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您吃凉的东西后，容易腹泻吗？",
      "sliderValue": 0
    },

  ],

  //index[1]:阴虚质：8个
  [{
      "quesID": 1,
      "content": "您感到手脚心发热吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您觉得身、脸上发热吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您皮肤或口唇干吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您口唇的颜色比普通人红吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您容易便秘或大便干燥吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您面部两潮红或偏红吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您感到眼睛干涩吗？",
      "sliderValue": 0
    },
    {
      "quesID": 8,
      "content": "您感到口干舌燥、总想喝水吗？",
      "sliderValue": 0
    },
  ],


  //index[2]:气虚质：8个
  [{
      "quesID": 1,
      "content": "您容易疲乏吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您容易气短（呼吸急促，接不上气）吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您容易心慌吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您容易头晕或站起时晕眩吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您比别人容易患感冒吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您喜欢安静、懒得说话吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您说话声音无力吗？",
      "sliderValue": 0
    },
    {
      "quesID": 8,
      "content": "您活动量稍大就容易出汗吗？",
      "sliderValue": 0
    },
  ],

  //index[3]:痰湿质：8个
  [{
      "quesID": 1,
      "content": "您感到胸闷或腹部胀满吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您感到身沉重不轻松或不爽快吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您腹部肥满松软吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您有额部油脂分泌多的现象吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您上眼睑比别人肿（轻微隆起现象）吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您嘴里有黏黏的感觉吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您平时痰多，咽喉部总感到痰堵着吗？",
      "sliderValue": 0
    },
    {
      "quesID": 8,
      "content": "您舌苔厚腻或有舌苔厚厚的感觉吗？",
      "sliderValue": 0
    },
  ],

  // 特殊：index[4]:湿热质：7个（如果区分男女问题则6个）
  [{
      "quesID": 1,
      "content": "您面部或鼻部有油腻感或油亮发光吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您容易生痤疮或疮疖吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您感到口苦或嘴里有异味吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您大便黏滞不爽、有解不尽的感觉吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您小便时尿道有发热感、尿色浓（深）吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您的阴囊部位潮湿吗？", //（男性回答）
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您带下色黄（白带发黄）吗？", //（女性回答）
      "sliderValue": 0
    },
  ],

  //index[5]:血瘀质：7个
  [{
      "quesID": 1,
      "content": "您的皮肤在不知不觉会出现青紫瘀斑吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您两颧部有细微红血丝吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您身上有哪里疼痛吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您容易有黑眼圈吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您容易忘事（健忘）吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您面色晦黯或容易出现褐斑吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您口唇颜色偏黯吗？",
      "sliderValue": 0
    },
  ],

  //index[6]:特禀质：7个
  [{
      "quesID": 1,
      "content": "您没有感冒时也会打喷嚏吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您没有感冒时也会鼻塞、流鼻涕吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您有因季节变化、温度变化等原因咳喘吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您容易过敏吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您的皮肤容易起荨麻疹吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您因过敏出现过紫癜吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您的皮肤一抓就红，并出现抓痕吗？",
      "sliderValue": 0
    },
  ],

  //index[7]:气郁质：7个
  [{
      "quesID": 1,
      "content": "您感到闷闷不乐、情绪低沉吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您容易精神紧张、焦虑不安吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您多愁善感、感情脆弱吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您容易感到害怕或受到惊吓吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您胁肋部或乳房腹痛吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您无缘无故叹气吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您咽喉部有异物感，吐之不出咽之不下的感觉吗？",
      "sliderValue": 0
    },
  ],

  //index[8]:平和质：8个
  [{
      "quesID": 1,
      "content": "您精力充沛吗？",
      "sliderValue": 0
    },
    {
      "quesID": 2,
      "content": "您容易疲乏吗？",
      "sliderValue": 0
    },
    {
      "quesID": 3,
      "content": "您说话声音无力吗？",
      "sliderValue": 0
    },
    {
      "quesID": 4,
      "content": "您感到闷闷不乐、情绪低沉吗？",
      "sliderValue": 0
    },
    {
      "quesID": 5,
      "content": "您比一般人耐受不了寒冷吗？",
      "sliderValue": 0
    },
    {
      "quesID": 6,
      "content": "您能适应外界自然和社会环境的变化吗？",
      "sliderValue": 0
    },
    {
      "quesID": 7,
      "content": "您容易失眠吗？",
      "sliderValue": 0
    },
    {
      "quesID": 8,
      "content": "您容易忘事（健忘）吗？",
      "sliderValue": 0
    },
  ],
]

var constitutionContext = [
  "阳虚质", "阴虚质", "气虚质", 
  "痰湿质", "湿热质", "血瘀质",
  "特凛质", "气郁质", "平和质"
]


module.exports = {
  dataList: index,
  dataContext: constitutionContext
}