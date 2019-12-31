//app.js
App({
  onLaunch: function() {
    var storageData = wx.getStorageSync('paperStandard');
    if (!storageData) {
      var dataObj = require("data/data.js")
      wx.clearStorageSync();
      wx.setStorageSync('paperStandard', dataObj.paperStandard);
      wx.setStorageSync('checkId', dataObj.checkId)
    }
  },
  globalData: {
    userInfo: null
  }
})