

//保障重点

//规模统计—变电规模统计,ZT 1正常2异常3故障-1全部
function getBianDianGuiMoData(callback, DYDJ ,SBLX,SBZLX,ZT,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_BDGMTJ/0?SSGS=8a812897493378a00149567740676661&DYDJ=08,22,25,32&SBLX=zf
    var ssgsval = ssgs || SSGS;
    var ztval = ZT||-1;
    //var param = {"SSGS": ssgsval, "DYDJ": DYDJ, "SBLX": SBLX, "SBZLX": SBZLX};
    var param = {"SSGS": ssgsval};
    if (DYDJ) {
        param.DYDJ = DYDJ;
    }
    if (SBLX){
        param.SBLX = SBLX;
    }
    if (SBZLX){
        param.SBZLX = SBZLX;
    }
    param.ZT = ztval;
    var url = basepath + "interface/BDZT_BDGMTJ/0";
    callgetajax(callback,url,param);
}

//规模统计—输电规模统计
function getShuDianGuiMoData(callback, DYDJ ,SBLX,SBZLX,ZT,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_SDGMTJ/0?SSGS=8a812897493378a00149567740676661&DYDJ=08,22,25,32&SBLX=zf
    var ssgsval = ssgs || SSGS;
    var ztval = ZT||-1;
    //var param = {"SSGS": ssgsval, "DYDJ": DYDJ, "SBLX": SBLX, "SBZLX": SBZLX};
    var param = {"SSGS": ssgsval};
    if (DYDJ) {
        param.DYDJ = DYDJ;
    }
    if (SBLX){
        param.SBLX = SBLX;
    }
    if (SBZLX){
        param.SBZLX = SBZLX;
    }
    param.ZT = ztval;
    var url = basepath + "interface/BDZT_SDGMTJ/0";
    callgetajax(callback,url,param);
}


//规模统计—配电规模统计
function getPeiDianGuiMoData(callback, DYDJ ,SBLX,SBZLX,ZT,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_PDGMTJ/0?SSGS=8a812897493378a00149567740676661&DYDJ=08,22,25,32&SBLX=zf
    var ssgsval = ssgs || SSGS;
    var ztval = ZT||-1;
    //var param = {"SSGS": ssgsval, "DYDJ": DYDJ, "SBLX": SBLX, "SBZLX": SBZLX};
    var param = {"SSGS": ssgsval};
    if (DYDJ) {
        param.DYDJ = DYDJ;
    }
    if (SBLX){
        param.SBLX = SBLX;
    }
    if (SBZLX){
        param.SBZLX = SBZLX;
    }
    param.ZT = ztval;
    var url = basepath + "interface/BDZT_PDGMTJ/0";
    callgetajax(callback,url,param);
}

//规模统计—规模明细
function getGuiMoDetail(callback, DYDJ ,ZT,SBLX,SBZLX,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETBDLJMX/0?SSGS=8a812897493378a00149567740676661&DYDJ=08,22,25,32&SBLX=zf
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval};
    DYDJ ? param.DYDJ = DYDJ : null;
    ZT ? param.ZT = ZT : null;
    SBLX ? param.SBLX = SBLX : null;
    SBZLX ? param.SBZLX = SBZLX : null;

    var url = basepath + "interface/BDZT_GETBDLJMX/0";
    callgetajax(callback,url,param);
}


//按专业统计设备异常，废弃
function getAbnormalCoutByZhuanYe(callback, ssgs) {

    //http://localhost:8080/pdpsc-app/interface/GDFW_BDZT_YC_ZYSB/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-05%2000:00:00&JSSJ=2018-09-05%2023:59:59
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ, "JSSJ": JSSJ};
    var url = basepath + "interface/GDFW_BDZT_YC_ZYSB/0";
    callgetajax(callback,url,param);
}

//获取保电对象详细信息
//类型:1会展中心、2交通枢纽、3领导住处、9保障重点
//BDDXJB null or 1 or 2 or 3
function getBDObjDetailData(callback,LX,BDDXJB,ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETBDDXMX/0?SSGS=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09
    var ssgsval = ssgs || SSGS;
    //var param = {"SSGS": ssgsval,"LX": LX,"BDDXJB" : BDDXJB};
    var param = {"SSGS": ssgsval};
    if (LX){
        param.LX = LX;
    }
    if (BDDXJB){
        param.BDDXJB = BDDXJB;
    }
    var url = basepath + "interface/BDZT_GETBDDXMX/0";
    callgetajax(callback,url,param);
}


//故障_一二级保电对象，废弃
function getGuZhangBaoDianObjCount(callback,ssgs){
    //http://localhost:8080/pdpsc-app/interface/GDFW_BDZT_GZ_BDDX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-05%2000:00:00&JSSJ=2018-09-05%2023:59:59

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ, "JSSJ": JSSJ};
    var url = basepath + "interface/GDFW_BDZT_GZ_BDDX/0";
    callgetajax(callback,url,param);
}

//保电对象异常( 一级，二级)，废弃
function getAbnormalBaoDianObjCount(callback,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/GDFW_BDZT_YC_BDDXYC/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-05%2000:00:00&JSSJ=2018-09-05%2023:59:59
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ":KSSJ, "JSSJ": JSSJ};
    var url = basepath + "interface/GDFW_BDZT_YC_BDDXYC/0";
    callgetajax(callback,url,param);
}

//获取保电路径信息
function getBaoDianPath(callback,BDDXID, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETBDLJMX/0?BDDXID=2018080801&SSGS=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval,"BDDXID": BDDXID};
    var url = basepath + "interface/BDZT_GETBDLJMX/0";
    callgetajax(callback,url,param);
}

////获取示范区保电路径信息
//function getShiFangQuBaoDianPath(callback,BDDXID, ssgs) {
//  //http://localhost:8080/pdpsc-app/interface/BDZT_GETBDLJMX/0?BDDXID=2018080801&SSGS=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50
//  var ssgsval = ssgs || SSGS;
//  var param = {"SSGS": ssgsval,"BDSBID": BDDXID};
//  var url = basepath + "interface/BDZT_GETBDLJMX/0";
//  callgetajax(callback,url,param);
//}

//实时负荷
function getRealTimeLoadData(callback,SBIDs,SbId) {

    var url = basepath + "idpqry/SBID/CUR/"+SBIDs+"/21";
    callgetajax1(callback,url,null,SbId);

}

//主变明细
function getTransRealTimeLoadData(callback,SBID) {
    var param = {"ZXID": SBID,"SSGS": "-1"};
    var url = basepath + "interface/BDZT_GETZBMX/0";
    callgetajax(callback,url,param);

}

//保电对象状态列表, 0正常 1异常 2故障
function getBaoDianObjStatus(callback,BDDXJB,ZT,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETBDDXZTMX/0?SSGS=8a812897493378a00149567740676661&BDDXJB=1&ZT=2
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval,"BDDXJB": BDDXJB,"ZT":ZT};
    var url = basepath + "interface/BDZT_GETBDDXZTMX/0";
    callgetajax(callback,url,param);
}



/**
 * 保电对象统计
 * @param {Object} callback
 * @param {Object} type
 */
function getBaoDianObjInfo(callback,type){
	var url = basepath + "interface/BDZT_GETBDDXTJ/0";
	var param = {"SSGS": "-1", "BDDXJB":type};
	callgetajax(callback,url,param);
}
/**
 * 保障重点:四个专业的设备数与异常次数统计
 */
function getTotalAndAbnorCount(callback,ssgs){
	var url = basepath + "interface/GDFW_BDZT_YC_ZYSB/0";
	var param = {"SSGS": ssgs, "KSSJ":KSSJ_NOW, "JSSJ":JSSJ_NOW};
	callgetajax(callback,url,param);
}

/**
 * 保障重点:四个专业的故障次数统计
 */
function getFaultCount(callback,ssgs){
	var url = basepath + "interface/GDFW_BDZT_GZ_ZYSB/0";
	var param = {"SSGS": ssgs, "KSSJ":KSSJ_NOW, "JSSJ":JSSJ_NOW};
	callgetajax(callback,url,param);
}

function getsheBeiDetial(callback,dydj,sbzlx){
	var url = basepath + "interface/GDFW_BDZT_YC_ZYSB_SBMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661", "DYDJ":dydj, "SBZLX":sbzlx};
	callgetajax(callback,url,param);
}

function getgZDetial(callback,dydj,sbzlx){
	var url = basepath + "hxq/GDFW_BDZT_GZ_ZYSB_GZMX";
	var param = {"SSGS": "8a812897493378a00149567740676661", "DYDJ":dydj, "SBZLX":sbzlx,"KSSJ":KSSJ_NOW, "JSSJ":JSSJ_NOW};
	callgetajax(callback,url,param);
	
}

function getyCDetial(callback,dydj,sbzlx){
	var url = basepath + "interface/GDFW_BDZT_YC_ZYSB_YCMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661", "DYDJ":dydj, "SBZLX":sbzlx,"KSSJ":KSSJ_NOW, "JSSJ":JSSJ_NOW};
	callgetajax(callback,url,param);
	
}
//获取主变设备id
function getZhuBianSbid(callback,sbid){
	var url = basepath + "/interface/BDZT_GETZBMX/0";
	var param = {"ZXID":sbid,"SSGS":"-1"};
//	callgetajax(callback,url,param);
	callgetajax1(callback,url,param,sbid);
}
