
//运行状态页面

//设备状态
function getSheBeiZhuangTaiData(callback,ssgs,dydj) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_SBZTJKTJ/0?SSGS=8a812897493378a00149567740676661

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"DYDJ":dydj};
    var url = basepath + "interface/GDFW_BDZT_YC_QWYXJKTJ/0";
    callgetajax(callback,url,param);
}

//PMS2.0设备状态评价异常明细-全网电压
function getSheBeiZhuangTaiDetail(callback,DYDJBM,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_JCSBYCMX_QWDY/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-20&JSSJ=2018-09-21&DYDJBM=08

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval,"DYDJ": DYDJBM, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/GDFW_BDZT_YC_QWYXJKMX/0";
    callgetajax(callback,url,param);
}

//台区详情
function getTaiQuDetail(callback, YCLX ,ssgs) {

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_SIMP, "JSSJ": JSSJ_SIMP, "YCLX": YCLX};
    var url = basepath + "interface/BDZT_GETDYYCMX/0";
    callgetajax(callback,url,param);
}

//台区异常统计
function getTaiQuInfoCount(callback ,ssgs) {

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_SIMP, "JSSJ": JSSJ_SIMP};
    var url = basepath + "interface/BDZT_GETTQYXYCTJ/0";
    callgetajax(callback,url,param);
}

//通道监拍详情
function getTongDaoJianPaiDetail(callback,DYDJ,ssgs) {
    var param = {"SSGS":ssgs,"KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "DYDJ": DYDJ};
    var url = basepath + "interface/BDZT_ZHJPMX/0";
    callgetajax(callback,url,param);
}
