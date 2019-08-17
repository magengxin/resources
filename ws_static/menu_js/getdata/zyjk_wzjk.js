
//仓库，物资监控

//仓库物资统计
//仓库类型CKLX 1 应急库 2 常备库
function getCangKuWuZiCount(callback,CKLX,WZDLXDM,ID,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_CKWZTJ/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    CKLX?param.CKLX = CKLX : null;
    WZDLXDM?param.WZDLXDM = WZDLXDM : null;
    ID?param.ID = ID : null;

    var url = basepath + "interface/BDZT_CKWZTJ/0";
    callgetajax(callback,url,param);
}

//物资细类明细查询
function getCangKuWuZiByWZZLX(callback,CKLX,ID,WZZLXDM,WZDLXDM,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_CKWZMX/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    CKLX?param.CKLX = CKLX : null;
    ID?param.ID = ID : null;
    WZZLXDM?param.WZZLXDM = WZZLXDM : null;
    WZDLXDM?param.WZDLXDM = WZDLXDM : null;

    var url = basepath + "interface/BDZT_CKWZMX/0";
    callgetajax(callback,url,param);
}

//仓库明细
function getCangKuDetail(callback,CKLX,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_CKMX/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "CKLX":CKLX};
    var url = basepath + "interface/BDZT_CKMX/0";
    callgetajax(callback,url,param);
}

//资源监控统计-人员
function getZiYuanTongJi_Person(callback,ssgs) {
    //http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZYJKTJ_RY/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    var url = basepath + "interface/BDZT_GETZYJKTJ_RY/0";
    callgetajax(callback,url,param);
}

//资源监控统计-车辆
function getZiYuanTongJi_Car(callback,ssgs) {
    //http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZYJKTJ_CL/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    var url = basepath + "interface/BDZT_GETZYJKTJ_CL/0";
    callgetajax(callback,url,param);
}

//资源监控统计-供应商
function getZiYuanTongJi_Supplier(callback,ssgs) {
    //http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZYJKTJ_GYS/0?SSGS=8a812897493378a00149567740676661
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    var url = basepath + "interface/BDZT_GETZYJKTJ_GYS/0";
    callgetajax(callback,url,param);
}