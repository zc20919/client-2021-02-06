var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/http"));

Page({
    data: {
        searchtxt: "",
        list: []
    },
    del(e){
        var n = this, e = "/Delete/Index?TypeId=2&Id=" +e.currentTarget.dataset.id;
        wx.showModal({
            title: '是否删除',
            content: '请确认删除摄像头',
            cancelText:"否",//默认是“取消”
            confirmText:"是",//默认是“确定”
            success: function (res) {
               if (res.cancel) {
               } else {
                  //点击确定
                  t.default.getReq(e, function(resdata) {
                    if(resdata.code==0){
                        wx.showToast({
                          title: '删除成功',
                        })
                        n.getlist()
                    }
                    //    console.log(res)
                });
                  
               }
            },
            fail: function (res) { },//接口调用失败的回调函数
            complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
         })
        // console.log(e.currentTarget.dataset.id)
    
    
        // /API/Delete/Index?TypeId=(1地磅管理,2摄像头,3客户,4商品,5一体机)&Id=
    },
    onLoad: function(t) {},
    gonav: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url,
            
        });
    },
    onReady: function() {},
    searchlist: function(e) {
        this.setData({
            searchtxt:e.detail.value
        })
        this.getlist();
    },
    onShow: function() {
        this.getlist();
    },
    getlist: function() {
        var n = this, e = "/AppletCamera/GetList?search=" + this.data.searchtxt;
        t.default.getReq(e, function(t) {
            200 != t.code && 0 != t.code || n.setData({
                list: t.list
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});