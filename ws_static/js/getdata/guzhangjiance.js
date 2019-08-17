//故障监测

//跳闸情况统计
function getTiaoZhaData(callback, TZQK, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "TZQK": TZQK, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTZTJ/0", param);
}

//实时监测总数
function getShishiJianCeTotalData(callback, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}

//实时监测总数，按电压
function getShishiJianCeStatData(callback, DYDJ, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "DYDJ": DYDJ, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}

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

//实时监测总数，按电压
function getZhuDongGongDanListData(callback, ssgs) {
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCMX/0", param);
}

// POPUP
// 故障统计
function getGuzhangTongjiData(callback, ssgss, yyyymm) {
    var configs = [];
    var url = basepath + "interface/BDZT_GETQWYXJKTJ_GZJC/0";
    for (var i = 0; i < ssgss.length; i++) {
        configs[i] = {"url": url, "param": {"SSGS": ssgss[i], "SFHXQ": SSGS_VIP_MAP[ssgss[i]], "KSSJ": yyyymm, "JSSJ": yyyymm}};
    }
    bcallgetajax(callback, configs);
}

// 故障分析
function getGuzhangFenxiData(callback, ssgs, startMonth, endMonth) {
    var param = {"SSGS": ssgs, "SFHXQ": SSGS_VIP_MAP[ssgs], "KSSJ": startMonth, "JSSJ": endMonth};
    callgetajax(callback, basepath + "interface/BDZT_GETQWYXJKTJ_GZJC/0", param);
}
//故障分布(ajax接口请求)
function getNewGuZhangfenbuData(callback,ssgss){
	var url = basepath + "/hxq/XN_GDFW_BDZT_GZJCTJ";
//	var url = "http://10.130.21.26:58080/pdpsc-app/hxq/XN_GDFW_BDZT_GZJCTJ";//临时方案：用此写死的url，正式上线时用上面被注释的url
	var param = {"SSGS":ssgss,"KSSJ":KSSJ_NOW,"JSSJ":JSSJ_NOW};
	callgetajax(callback,url,param);
}

//台区异常明细查看(ajax接口请求)
function getTaiQuYiChangDetial(callback,ssgs,yclx,sfhxq){
	var url = basepath + "interface/BDZT_GETDYYCMX/0";
	var param = {"SSGS": ssgs,"KSSJ": KSSJ_SIMP, "JSSJ": KSSJ_SIMP, "YCLX": yclx,  "type": "-1", "SFHXQ":sfhxq };
	callgetajax(callback,url,param);
}

//抢修情况明细查看(ajax接口请求)
function getqiangXiuDetial(callback,areaId,type,lx){
	var url = basepath + "interface/BDZT_GETZTQX_LYMX/0";
	var param = {"SSGS": areaId,"ZDID":"-1","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "GZLX": type,"SFCL": "-1", "LY":lx };
	callgetajax(callback,url,param);
}

//诉求明细查看(ajax接口请求)
function getsuQiuDetial(callback,type){
	var url = basepath + "/interface/BDZT_GETSQGDMX/0";
	var param = {"SSGS": "-1","FL":type,"SFCL":"0","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
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

/**
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网)
 * @param {Object} callback
 * 1表示10KV 是配网的 
 * 2表示35KV及以上  是主网故障 
 * 不传表示所有的电压等级
 */
function getzhuPeiWangDetial(callback,DYDJ){
	var url = basepath + "bdGis/getGdfwbdztqwjkgzmx";
	var param = {"SSGS": "8a812897493378a00149567740676661","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"DYDJ":DYDJ};
	callgetajax(callback,url,param);
	
}

/**
 * 全网状态(左侧)--主网与配网的橙色数字明细(35kV及以上的主网 与 10KV)
 * @param {Object} callback
 */
function getYiChangDetial(callback,DYDJ){
	var url = basepath + "interface/GDFW_BDZT_YC_QWYXJKMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"DYDJ":DYDJ};
	callgetajax(callback,url,param);
	
}

function getSupplierWuZiDetial(callback,id,lx){
	var url = basepath + "interface/BDZT_GZGYSMX_WZZLX_GIS/0";
	var param = {"GYSID": id,"WZZLX": lx};
	callgetajax(callback,url,param);
}

function getSupplierDetial(callback){
	var url = basepath + "interface/BDZT_WZGYSMX/0";
	var param = {"ID": "-1"};
	callgetajax(callback,url,param);
}
