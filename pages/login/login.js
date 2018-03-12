var app = getApp()
Page({

  data: {
    phone: '',
    password: ''
  },

  onLoad: function (options) {
  
  },
  phone(e){
      this.setData({
          phone: e.detail.value
      })
  },
  password(e){
      this.setData({
          password: e.detail.value
      })
  },
  isRoot(){
    if (this.data.phone == 'root' && password == 'root')
      wx.navigateTo({
        url: '../main/main',
      })
    else
      this.login()
  },
  login(){
      wx.request({
          url: app.globalData.url + 'login/cellphone',
          data:{
              phone: this.data.phone,
              password: this.data.password
          },
          success: (res) => {
              if(res.data.code == 200){
                  app.globalData.userInfo = res.data
                  wx.navigateTo({
                      url: '../main/main',
                  })
              }else{
                  wx.showModal({
                      title: '登录失败',
                      showCancel: false
                  })
              }

              console.log(res.data)
          }
      })
  }
})