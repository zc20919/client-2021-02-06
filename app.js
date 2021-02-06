function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var o = e(require("./utils/http"));

e(require("./base_config"));

App({
    onLaunch: function () {
        wx.login({
            success: function (e) {
                wx.setStorageSync("code", e.code),
                 o.default.getReq("/AppletOAuthcenter/Index?code=" + e.code, function (e) {
                    wx.setStorageSync("user", e), 1 == e.code && wx.setStorageSync("login", 1);


                });
            }
        });
    },
    globalData: {}
});