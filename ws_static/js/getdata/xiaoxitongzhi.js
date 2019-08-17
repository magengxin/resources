
//消息通知
//走马灯展现
function getZouMaDengData(callback,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETDWFHTJ_PZ/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETDWFHTJ_PZ/0";
    callgetajax(callback,url,param);
}