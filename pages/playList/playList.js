var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      playList: {},
      songList: {}
  },
  onLoad: function (options) {
      var _this = this
      wx.getStorage({
          key: 'listid',
          success: res => {
              console.log(res)
              wx.request({
                  url: app.globalData.url + 'playlist/detail',
                  data:{
                      id: res.data
                  },
                  success: res => {
                      console.log(res.data)
                      this.setData({
                          playList: res.data.playlist,
                          songList: res.data.privileges
                      })
                      app.globalData.playList = this.data.songList
                  }
              })
          }
      })
    //   var i;
    //   for(i = 0; i < this.data.songList.length;i++){
    //       console.log(i)
    //       wx.request({
    //           url: app.globalData.url + 'song/detail',
    //           data:{
    //               id: this.data.songList[i].id,
    //           },
    //           success: res => {
    //               console.log(res.data)
    //           },
    //           fail: err => {
    //               console.log(err)
    //           }
    //       })
    //   }
  },
  toAudio(e){
      wx.setStorage({
          key: 'songid',
          data: e.currentTarget.dataset.id,
          success: () => {
              wx.navigateTo({
                  url: '../audio/audio'
              })
          }
      })
  },
  playAll(){
      wx.setStorage({
          key: 'songid',
          data: 0,
          success: () => {
              wx.navigateTo({
                  url: '../audio/audio',
              })
          }
      })
  }
})