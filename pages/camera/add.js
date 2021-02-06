var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/http"));

Page({
    data: {
        name: "",
        num: "",
        code: "",
        remark: "",
        id: ""
    },
    onLoad: function(t) {},
    AppletCamera: function() {
        var e = this.data;
        if (!e.name) return wx.showToast({
            title: "请填写名称",
            icon: "none"
        }), !1;
        if (!e.num) return wx.showToast({
            title: "请填写序列号",
            icon: "none"
        }), !1;
        if (!e.code) return wx.showToast({
            title: "请填写验证码",
            icon: "none"
        }), !1;
        if (!e.remark) return wx.showToast({
            title: "请填写备注",
            icon: "none"
        }), !1;
        var n = "/AppletCamera/Add?Name=" + this.data.name + "&SerialNumber=" + this.data.num + "&VerificationCode=" + this.data.code + "&Remark=" + this.data.remark;
        t.default.getReq(n, function(t) {
            200 == t.code || 0 == t.code ? (wx.showToast({
                title: "添加成功",
                duration: 1300
            }), wx.redirectTo({
                url: "/pages/camera/list"
            })) : wx.showToast({
                title: t.msg,
                icon: "none",
                duration: 1000
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});