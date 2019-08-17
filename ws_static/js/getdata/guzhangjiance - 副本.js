//故障监测

//跳闸情况统计
function getTiaoZhaData(callback, TZQK, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "TZQK": TZQK, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTZTJ/0", param);
}

//实时监测总数
function getShishiJianCeTotalData(callback, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}

//实时监测总数，按电压
function getShishiJianCeStatData(callback, DYDJ, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "DYDJ": DYDJ, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}

/* //实时监测总数
function getGuZhangFenBuData(callback, ssgs) {
    var param = {"SSGS": ssgs || SSGS, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    return callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param, false);
} */
function getGuZhangFenBuData1(callback, ssgss) {
    // http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59var url = basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0";
//  var configs = [];
//  for (var i = 0; i < ssgss.length; i++) {
////      configs[i] = {"url": url, "param": {"SSGS": ssgss[i], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW}};
//  }
//  bcallgetajax(callback, configs);
}

//实时监测总数，按电压
function getZhuDongGongDanListData(callback, ssgs) {
    var param = {"SSGS": ssgs || SSGS, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCMX/0", param);
}

function getTiaoZhaHuanBiData(callback, ssgs) {
    var configs = [];
    for (var i = 0; i < ssgss.length; i++) {
        configs[i] = {"url": url, "param": {"SSGS": ssgss[i], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW}};
    }
    bcallgetajax(callback, configs);

}

