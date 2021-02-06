var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../base_config")).default.BASE_URL, t = {
    Accept: "application/json",
    "content-type": "application/x-www-form-urlencoded",
    Authorization: null
};

module.exports = {
    getReq: function(o, n) {
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            url: e + o,
            method: "get",
            header: t,
            success: function(e) {
                return wx.hideLoading(), "function" == typeof n && n(e.data);
            },
            fail: function() {
                return wx.hideLoading(), wx.showModal({
                    title: "网络错误",
                    content: "网络出错，请刷新重试",
                    showCancel: !1
                }), "function" == typeof n && n(!1);
            }
        });
    },
    postReq: function(o, n, i) {
        wx.showLoading({
            title: "加载中"
        }), console.log("header=="), console.log(t), wx.request({
            url: e + o,
            header: t,
            data: n,
            method: "post",
            success: function(e) {
                return wx.hideLoading(), "function" == typeof i && i(e.data);
            },
            fail: function(e) {
                return wx.hideLoading(), wx.showModal({
                    title: "网络错误",
                    content: "网络出错，请刷新重试",
                    showCancel: !1
                }), "function" == typeof i && i(!1);
            }
        });
    },
    header: t,
    inputReq: function(o, n, i) {
        wx.showLoading({
            title: "加载中"
        }), console.log("header=="), console.log(t), wx.request({
            url: e + o,
            header: t,
            data: n,
            method: "get",
            success: function(e) {
                return wx.hideLoading(), "function" == typeof i && i(e.data);
            },
            fail: function(e) {
                return wx.hideLoading(), wx.showModal({
                    title: "网络错误",
                    content: "网络出错，请刷新重试",
                    showCancel: !1
                }), "function" == typeof i && i(!1);
            }
        });
    }
};