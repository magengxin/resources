
/**
 * 获取抢修工单接口数据
 * @param {Object} dealData
 * @param {Object} SSGS
 */
function BDZT_GETZTQX_LY_1(dealData, SSGS) {

	//	var SSGS=-1	//公司
	var KSSJ = KSSJ_NOW //开始时间
	var JSSJ = JSSJ_NOW //结束时间
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ,
		"JSSJ": JSSJ
	};
	//	alert(KSSJ);
	//http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZTQX_LY_1/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-09%2000:00:00&JSSJ=2018-09-09%2023:59:59
	var url = basepath + "interface/BDZT_GETZTQX_LY_1/0";
	callgetajax(dealData, url, param);
}

/**
 * 获取紧急诉求工单接口
 * @param {Object} dealData
 * @param {Object} SSGS
 */
function BDZT_GETSQGDMX(dealData, SSGS) {
	var SFCL = 0 //	是否已处理 0全部 1正在处理数 2已处理数  需要等明天和yaoqimin确认后才能添加
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ_NOW,
		"JSSJ": JSSJ_NOW,
		"SFCL": SFCL,
	};
	var url = basepath + "interface/BDZT_GETSQGDMX/0";
	callgetajax(dealData, url, param);
}

/**
 * 全网运行监控统计-供电服务
 */
function BDZT_GETQWYXJKTJ_GDFW(dealData, SSGS, KSSJ,JSSJ,LX){

//	var SSGS = "8a812897493378a00149567740676661";
//	var KSSJ = '201808'; //开始年月
//	var KSSJ = JSSJ = dateFtt("yyyy-MM", new Date()); //结束年月
//	var LX = 4 //类型 //4：平均到达时间
    var sfhxq = SSGS === 'JBH-HXQ' ? '1' : '0';
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ,
		"JSSJ": JSSJ,
        "SFHXQ" : sfhxq,
		"LX": LX
	};

	//	http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETQWYXJKTJ_GDFW/0?SSGS=8a812897493378a00149567740676661,FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09&KSSJ=201808&JSSJ=201809&LX=1
	var url = basepath + "interface/BDZT_GETQWYXJKTJ_GDFW/0";
	// var url = "json/BDZT_GETQWYXJKTJ_GDFW/0.json";
	callgetajax(dealData, url, param);
}
