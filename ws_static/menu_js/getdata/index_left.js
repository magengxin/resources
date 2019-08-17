
//左侧统计页面

//全网状态
function getQuanWangZTData(callback,DYDJ,ssgs) {

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    DYDJ ? param.DYDJ = DYDJ : null ;
    var url = basepath + "getGdfwbdztqwjkgztj";
    callgetajax(callback,url,param);

}

//地图区域之故障跑马地灯
function getGuZhangMarqueeData(callback,DYDJ,ssgs){
	var ssgsval = ssgs || SSGS;
	var param = {"SSGS" : ssgsval, "KSSJ":KSSJ_NOW, "JSSJ":JSSJ_NOW};
	DYDJ ? param.DYDJ = DYDJ : null ;
	var url = basepath + "interface/XN_GDFW_BDZT_GZJCMX/0";
	callgetajax(callback,url,param);
}
