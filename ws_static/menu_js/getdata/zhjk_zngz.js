//智能感知

//智能装置统计
function getIntelliDevCount(callback,RTU_ID,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETJCXTMX/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    RTU_ID?param.RTU_ID=RTU_ID :null;
    var url = basepath + "interface/BDZT_GETJCXTMX/0";
    callgetajax(callback,url,param);
}

//智能表计（覆盖范围）明细
function getZNBJliDevDetail(callback,RTU_ID,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETJCSBMX/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    RTU_ID?param.RTU_ID=RTU_ID :null;
    var url = basepath + "interface/BDZT_GETZNBJYCMX/0";
    callgetajax(callback,url,param);
}
//监测设备（覆盖范围）明细
function getIntelliDevDetail(callback,RTU_ID,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETJCSBMX/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    RTU_ID?param.RTU_ID=RTU_ID :null;
    var url = basepath + "interface/BDZT_GETJCSBMX/0";
    callgetajax(callback,url,param);
}

//无人机明细
function getWRJDetail(callback,COMPANY_ID,UAV_ID) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_WRJMX/0?COMPANY_ID=8a812897493378a00149567740676661
    var ssgsval = COMPANY_ID || SSGS;
    var param = {"COMPANY_ID": ssgsval};
    UAV_ID?param.UAV_ID=UAV_ID :null;
    var url = basepath + "interface/BDZT_WRJMX/0";
    callgetajax(callback,url,param);
}

//通道监拍异常明细
function getTDJPAbnormalDetail(callback,DYDJ,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETTDJPYCMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-01-01&JSSJ=2018-09-20
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ_NOW, "JSSJ": JSSJ_NOW};
    DYDJ?param.DYDJ=DYDJ :null;
    var url = basepath + "interface/BDZT_GETTDJPYCMX/0";
    callgetajax(callback,url,param);
}

//机器人异常明细
function getRobotAbnormalDetail(callback,DYDJ,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETJQRYCMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-01-01&JSSJ=2018-09-20
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ, "JSSJ": JSSJ};
    DYDJ?param.DYDJ=DYDJ :null;
    var url = basepath + "interface/BDZT_GETJQRYCMX/0";
    callgetajax(callback,url,param);
}

//变电站辅控异常明细
function getFuKongAbnormalDetail(callback,DYDJ,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETBDZFKYCMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-01-01&JSSJ=2018-09-20
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ, "JSSJ": JSSJ};
    DYDJ?param.DYDJ=DYDJ :null;
    var url = basepath + "interface/BDZT_GETBDZFKYCMX/0";
    callgetajax(callback,url,param);
}

//获取智能井盖告警情况
function getZNJGAbnormalDetail(callback,ID,ALARM_ID) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETGTZNJGGJXX/0
    // var ssgsval = ssgs || SSGS;
    var param = {};
    ID?param.ID=ID :null;
    ALARM_ID?param.ALARM_ID=ALARM_ID :null;
    var url = basepath + "interface/BDZT_GETGTZNJGGJXX/0";
    callgetajax(callback,url,param);
}

//智能表计异常
function getZNBJAbnormalDetail(callback,DYDJ,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETJQRYCMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-01-01&JSSJ=2018-09-20
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ, "JSSJ": JSSJ};
    DYDJ?param.DYDJ=DYDJ :null;
    var url = basepath + "interface/BDZT_GETZNBJYCMX/0";
    callgetajax(callback,url,param);
}
