var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./utils/http"));

App({
    onLaunch: function() {
        var t = this, n = wx.getStorageSync("logs") || [];
        n.unshift(Date.now()), wx.setStorageSync("logs", n), wx.login({
            success: function(t) {
                var n = {
                    code: t.code
                };
                "null" === wx.getStorageSync("openId") && e.default.postReq("/danger/getOpenId", n, function(e) {
                    wx.setStorageSync("openId", e.data);
                });
            }
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        console.log(e), t.globalData.userInfo = e.userInfo, t.globalData.encryptedData = e.encryptedData, 
                        t.globalData.iv = e.iv, wx.setStorageSync("userInfo", JSON.stringify(e.userInfo)), 
                        t.userInfoReadyCallback && t.userInfoReadyCallback(e);
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,
        encryptedData: null,
        iv: null
    }
});