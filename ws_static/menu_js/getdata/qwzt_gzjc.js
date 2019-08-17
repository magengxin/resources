//故障监测






/* //实时监测总数
function getGuZhangFenBuData(callback, ssgs) {
    var param = {"SSGS": ssgs || SSGS, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    return callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param, false);
} */
function getGuZhangFenBuData1(callback, ssgss) {
    // http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59var url = basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0";
    var configs = [];
    var url = basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0";
    for (var i = 0; i < ssgss.length; i++) {
        configs[i] = {"url": url, "param": {"SSGS": ssgss[i], "SFHXQ": SSGS_VIP_MAP[ssgss[i]], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW}};
    }
    bcallgetajax(callback, configs);
}








//故障监测明细,type类型工单，电压等级
// OBJ_ID	抢修单ID
// SSGDDW	所属供电单位
// GZSBLX_BM	故障设备类型
// GZSBBH	故障设备编号
// GZSBMC	故障设备名称
// SYZX	所属站线
// SYZXMC	所属站线名称
// DYDJ	电压等级
// BXSJ	报修时间
// JDDJSJ	接单登记时间
// BXNR	报修内容
// TZQXSJ	通知抢修时间
// JLDDSJ	记录到达时间
// JLXFSJ	记录修复时间
// YHBH	用户编号
// YHMC	用户名称
// YHSJ	用户手机
// GZDJD	故障点经度
// GZDWD	故障点纬度
// QXDZT	抢修单状态
// QXDZTMC	抢修单状态名称
function getGZJCDetailData(callback, DYDJ,QXDZT ,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCMX/0?SSGS=-1&KSSJ=2018-09-05%2000:00:00&JSSJ=2018-09-05%2023:59:59
    var sfhxq = "-1";
    if(ssgs == "JBH-HXQ"){
    	sfhxq = "1";
    }
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "SFBDHXQ" : sfhxq };
    DYDJ ? param.DYDJ=DYDJ : null;
    QXDZT ? param.QXDZT=QXDZT: null;
    var url = basepath + "interface/XN_GDFW_BDZT_GZJCMX/0";
	// var url = "json/guzhangjiancemingxi.json";
    callgetajax(callback,url,param);
}





/**
 * 新故障监测明细:按电压等级 公司 与 是否核心区
 * @param {Object} callback
 * @param {Object} areaId
 * @param {Object} type
 * @param {Object} sfhxq
 */
function getFaultJianDetial(callback,areaId,type,sfhxq){
	var url = basepath + "interface/XN_GDFW_BDZT_GZJCMX/0";
	var param = {"SSGS": areaId,"KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "DYDJ": type,"LY": "-1", "SFHXQ":sfhxq};
	callgetajax(callback,url,param);
	
}

/**
 * 故障监测--当日监测—跳闸监测（明细）
 * @param {Object} callback
 * @param {Object} areaId
 * @param {Object} type
 * @param {Object} sfhxq
 */
function gettiaoZhaDetial(callback,areaId,type,sfhxq){
	var url = basepath + "interface/XN_GDFW_BDZT_GZJCTZMX/0";
	var param = {"SSGS": areaId,"TZQK":type, "SFHXQ":sfhxq,"KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
	callgetajax(callback,url,param);
	
}

/**
 * 全网状态(左侧)--主动工单明细
 * @param {Object} callback
 */
function getzhuDongGDDetial(callback){
	var url = basepath + "bdGis/getGdfwbdztqwjkgzmx";
	var param = {"SSGS": "8a812897493378a00149567740676661","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
	callgetajax(callback,url,param);
	
}

/**
 * 全网状态(左侧)--报修单明细
 * @param {Object} callback
 */
function getbaoXiuDanDetial(callback){
	var url = basepath + "interface/BDZT_GETZTQX_LYMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661","ZDID":"-1","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"GZLX":"1","SFCL":"0","LY":"-1"};
	callgetajax(callback,url,param);
	
}

/**
 * 全网状态(左侧)--诉求单明细
 * @param {Object} callback
 */
function getsuQiuDanDetial(callback){
	var url = basepath + "interface/BDZT_GETSQGDMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661","SFCL":"1","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
	callgetajax(callback,url,param);
	
}









