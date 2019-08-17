
//业务指挥
//巡视统计
function getXunShiTongJiData(callback,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETXSTJ/0?SSGS=-1&KSSJ=2018-09-20&JSSJ=2018-09-21
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETXSTJ/0";
    callgetajax(callback,url,param);
}
//任务处置
function getTaskCountData(callback,ssgs) {

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": "2017-01-01 00:00:00", "JSSJ": JSSJ_NOW};
    var url = basepath + "getGdfwbdztrwlxtj";
    callgetajax(callback,url,param);

}

//任务下达查询,任务类型（1、移动 2、异常处理）
function getTaskData(callback,RWLX,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETRWXDMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2017-01-01 00:00:00&JSSJ=2018-09-01 00:00:00

    //硬编码
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": "-1", "KSSJ": "2017-01-01 00:00:00", "JSSJ": JSSJ_NOW};
    RWLX?param.RWLX=RWLX:null;
    var url = basepath + "interface/BDZT_GETRWXDMX/0";
    callgetajax(callback,url,param);
}

//巡视明细—计划巡视
function getXunShiTongJiDetail_JHXS(callback,ssgs,sfhxq) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETXSMX_JHXS/0?SSGS=-1&KSSJ=2018-09-20&JSSJ=2018-09-21
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "SFHXQ" : sfhxq};
    var url = basepath + "interface/BDZT_GETXSMX_JHXS/0";
    callgetajax(callback,url,param);
}

//巡视明细—已巡视
function getXunShiTongJiDetail_YXS(callback,ssgs,sfhxq) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETXSMX_YXS/0?SSGS=-1&KSSJ=2018-09-20&JSSJ=2018-09-21
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "SFHXQ" : sfhxq};
    var url = basepath + "interface/BDZT_GETXSMX_YXS/0";
    callgetajax(callback,url,param);
}

//巡视明细—已发现缺陷
function getXunShiTongJiDetail_YFXQX(callback,ssgs,sfhxq) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETXSMX_YFXQX/0?SSGS=-1&KSSJ=2018-09-20&JSSJ=2018-09-21
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "SFHXQ" : sfhxq};
    var url = basepath + "interface/BDZT_GETXSMX_YFXQX/0";
    callgetajax(callback,url,param);
}

//巡视明细—已发现隐患
function getXunShiTongJiDetail_YFXYH(callback,ssgs,sfhxq) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETXSMX_YFXYH/0?SSGS=-1&KSSJ=2018-09-20&JSSJ=2018-09-21
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "SFHXQ" : sfhxq};
    var url = basepath + "interface/BDZT_GETXSMX_YFXYH/0";
    callgetajax(callback,url,param);
}


