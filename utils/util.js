var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    getnowtime:function(e){
        var time=new Date();
        return time.toLocaleDateString()
    },
    formatTime: function(e) {
        var n = e.getFullYear(), o = e.getMonth() + 1, r = e.getDate(), g = e.getHours(), u = e.getMinutes(), a = e.getSeconds();
        return [ n, o, r ].map(t).join("/") + " " + [ g, u, a ].map(t).join(":");
    },
    formatDate: function(e) {
        console.log(e);
        var n = e.getFullYear(), o = e.getMonth() + 1, r = e.getDate();
        e.getHours(), e.getMinutes(), e.getSeconds();
        return t(n) + "年" + t(o) + "月" + t(r) + "日";
    },
    formathour: function(e) {
        e.getFullYear(), e.getMonth(), e.getDate();
        return [ e.getHours(), e.getMinutes(), e.getSeconds() ].map(t).join(":");
    }
};