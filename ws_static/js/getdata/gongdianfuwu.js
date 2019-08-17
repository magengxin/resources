//供电服务开始

//客服服务-总体抢修情况
function getZongTiQiangXiuData(callback, ssgs) {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_GETZTQX_LY/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-07-08%2000:00:00&JSSJ=2018-07-08%2023:59:59
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    $.ajax({
        url: basepath + "interface/BDZT_GETZTQX_LY_1/0",
        data: param,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error:function (data) {
            console.log(data);
        }
    });
}

//客服服务-总体抢修情况
function getZongTiQiangXiuDetail(callback, GZLX,SFCL,LY,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETZTQX_LYMX/0?SSGS=-1&KSSJ=2018-09-09&JSSJ=2018-09-10&SFCL=1&GZLX=2
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "GZLX": GZLX,"SFCL":SFCL,"LY":LY};
    $.ajax({
        url: basepath + "interface/BDZT_GETZTQX_LYMX/0",
        data: param,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error:function (data) {
            console.log(data);
        }
    });
}

//客服服务-故障检测
function getGuZhangJianCeData(callback, DYDJ ,ssgs) {

    //http://127.0.0.1:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-07-08%2000:00:00&JSSJ=2018-07-08%2023:59:59
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_ZT, "JSSJ": JSSJ_NOW};
    $.ajax({
        url: basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0",
        data: param,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error:function (data) {
            console.log(data);
        }
    });
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

