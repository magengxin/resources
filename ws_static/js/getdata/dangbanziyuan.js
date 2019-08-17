//当班资源

//当班资源统计
//GZ	工种 1 特巡 2 检修 3 抢修 4 后勤 5 司机
//ZY	专业 1 变电 2 线路 3 电缆 4 配电 5 外协
function getDangBanZiyuanCount(callback,GZ,ZY,ssgs) {
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "GZ": GZ, "ZY": ZY, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETDBZYCDQKTJ_DW/0";
    callgetajax(callback,url,param);
}

//特巡的当班资源统计是另外接口
function getDangBanZiyuanCount_TX(callback,zy,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETDBZY_XSRYCDTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-01-01&JSSJ=2018-08-02

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"ZDID":zy};
    var url = basepath + "interface/BDZT_GETDBZY_XSRYCDTJ/0";
    callgetajax(callback,url,param);

}

//当班资源明细
//GZ	工种 1 特巡 2 检修 3 抢修 4 后勤 5 司机,-1
//ZY	专业 1 变电 2 线路 3 电缆 4 配电 5 外协,-1
function getDangBanZiyuanDetail(callback,GZ,ZY,cdqk,ssgs) {
    //http://localhost:58080/pdpsc-app/interface/BDZT_GETDBZYMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-13&JSSJ=2018-09-1
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "GZ": GZ, "ZY": ZY, "CDQK":cdqk, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETBDDWMX/0";
    callgetajax(callback,url,param);
}

//当班资源明细
//GZ	工种 1 特巡 2 检修 3 抢修 4 后勤 5 司机,-1
//ZY	专业 1 变电 2 线路 3 电缆 4 配电 5 外协,-1
function getDangBanZiyuanTXDetail(callback,GZ,ZY,cdqk,ssgs) {
    //http://localhost:58080/pdpsc-app/interface/BDZT_GETDBZYMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-13&JSSJ=2018-09-1
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "ZY": ZY, "CDQK":cdqk, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETXSQKTJ_RYMX/0";
    callgetajax(callback,url,param);
}

//外部资源明细(人员列表)，BYLX 备用类型 1 跨单位备用 2 跨省备用
function getExternZiyuanDetail(callback,BYLX,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_BYZYMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-13&JSSJ=2018-09-1
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "BYLX":BYLX};
    var url = basepath + "interface/BDZT_BYZYMX/0";
    callgetajax(callback,url,param);


}

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