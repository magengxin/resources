
//供电服务开始

$(function () {
    //getZongTiQiangXiuData();//客户服务
    //getGuZhangJianCeData(); //故障检测
    createGongDanPanle(); //故障面板
    bindClick_GDFW();
})

function bindClick_GDFW() {

    $("#span_dlgz_have").css({'cursor': 'pointer'});
    $("#span_dlgz_have").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("抢修工单");
        showZongTiQiangXiuList(5,1,-1,g_deptchange);
    });

    $("#span_dlgz_ing").css({'cursor': 'pointer'});
    $("#span_dlgz_ing").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("抢修工单");
        showZongTiQiangXiuList(5,0,-1,g_deptchange);
    });

    $("#span_not_dlgz_have").css({'cursor': 'pointer'});
    $("#span_not_dlgz_have").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("抢修工单");
        showZongTiQiangXiuList(4,1,-1,g_deptchange);
    });

    $("#span_not_dlgz_ing").css({'cursor': 'pointer'});
    $("#span_not_dlgz_ing").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("抢修工单");
        showZongTiQiangXiuList(4,0,-1,g_deptchange);
    });

    //电力故障总数
    $("#customer_num1").css({'cursor': 'pointer'});
    $("#customer_num1").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("抢修工单");
        showZongTiQiangXiuList(5,-1,-1,g_deptchange);
    });

    //非电力故障总数
    $("#customer_num2").css({'cursor': 'pointer'});
    $("#customer_num2").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("抢修工单");
        showZongTiQiangXiuList(4,-1,-1,g_deptchange);
    });

    $("#gzjc_110").css({'cursor': 'pointer'});
    $("#gzjc_110").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
        showGuZhangJianCeList("32",null,g_deptchange);
    });

    $("#gzjc_35").css({'cursor': 'pointer'});
    $("#gzjc_35").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
        showGuZhangJianCeList("25",null,g_deptchange);
    });

    $("#gzjc_10").css({'cursor': 'pointer'});
    $("#gzjc_10").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
        showGuZhangJianCeList("22",null,g_deptchange);
    });

    $("#gzjc_04").css({'cursor': 'pointer'});
    $("#gzjc_04").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
        showGuZhangJianCeList("08",null,g_deptchange);
    });

    $("#gzjc_all").css({'cursor': 'pointer'});
    $("#gzjc_all").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
        showGuZhangJianCeList(null,null,g_deptchange);
    });


}

var g_customerService = {};
//客服服务-总体抢修情况
function dealZongTiQiangXiu(customerService, option, ssgs) {

    g_customerService ={obj: customerService, option :option};
    function dealdata(data) {
        //来源"LY" : "04" 95598"    LY" : "09"12345市民热线
        //电力故障 = 10kV以上抢修数+380V故障抢修数
        // var LYMC;  //来源名称, 95598,12345市民热线
        var LYMC;  //来源名称
        var GZFL;  //故障分类 电力故障 非电力故障
        var ZS;  //总数
        var YCLS;  //已处理数
        var ZCLS;  //正处理数

        var DLGZ_num_95598 = 0;
        var DLGZ_num_12345 = 0;
        var Not_DLGZ_num_95598 = 0;
        var Not_DLGZ_num_12345 = 0;

        var DLGZ_ZCLS = 0;//正处理数
        var Not_DLGZ_ZCLS = 0;
        var DLGZ_YCLS = 0; //已处理数
        var Not_DLGZ_YCLS = 0; //已处理数

        if (data.data){
            for(var i=0;i<data.data.length;i++) {
                var row = data.data[i];
                YCLS = parseInt(row.YCLS);
                ZCLS = parseInt(row.ZCLS);
                ZS = parseInt(row.ZS);
                if (row.GZFL === "电力故障"){
                    if (row.LYMC === "95598"){
                        DLGZ_num_95598 += ZS;
                    } else if (row.LYMC === "12345市民热线"){
                        DLGZ_num_12345 += ZS;
                    }
                    DLGZ_ZCLS += ZCLS;
                    DLGZ_YCLS += YCLS;
                } else  if (row.GZFL === "非电力故障"){
                    if (row.LYMC === "95598"){
                        Not_DLGZ_num_95598 += ZS;
                    } else if (row.LYMC === "12345市民热线"){
                        Not_DLGZ_num_12345 += ZS;
                    }
                    Not_DLGZ_ZCLS += ZCLS;
                    Not_DLGZ_YCLS += YCLS;
                }

            }
            option.series[0].data[0].value = DLGZ_num_12345;//12345
            option.series[0].data[1].value = DLGZ_num_95598;//95598

            option.series[1].data[0].value = Not_DLGZ_num_12345;//12345
            option.series[1].data[1].value = Not_DLGZ_num_95598;//95598

            $('#span_dlgz_have').text(DLGZ_YCLS);
            $('#span_dlgz_ing').text(DLGZ_ZCLS);

            $('#customer_num1').text((DLGZ_num_12345+DLGZ_num_95598).toString());
            $('#customer_num2').text((Not_DLGZ_num_12345+Not_DLGZ_num_95598).toString());



            $('#span_not_dlgz_have').text(Not_DLGZ_YCLS);
            $('#span_not_dlgz_ing').text(Not_DLGZ_ZCLS);

            customerService.setOption(option);
        }
    }

    getZongTiQiangXiuData(dealdata,ssgs);
}

//客服服务-总体抢修情况明细（按来源）
//GZLX 非电力故障数：4 电力故障数：5
//SFCL 1：已处理 0：正在处理 -1：全部
//LY -1（默认） 95598：04 12345：09
//公司、抢修单状态、来源、抢修单编号、报修时间、故障地点、报修内容、处理人、联系方式、接单登记时间、通知抢修时间、到达现场时间、记录修复时间、用户编号、用户名称
function showZongTiQiangXiuList(GZLX,SFCL,LY,ssgs) {

    // var titleList = [
    //     "",
    //     "公司",
    //     "抢修单状态",
    //     "来源",
    //     "抢修单编号",
    //     "报修时间",
    //     "故障地点",
    //     "报修内容",
    //     "处理人",
    //     "联系方式",
    //     "接单登记时间",
    //     "通知抢修时间",
    //     "到达现场时间",
    //     "记录修复时间",
    //     "用户编号",
    //     "用户名称",
    // ];
    var parentComId = "FourUl";
    //QXDZT	抢修单状态
    //LY	来源
    //OBJ_ID	抢修单编号
    //BXSJ	报修时间
    //GZDD	故障地点
    //BXNR	报修内容
    //JDDJSJ	接单登记时间
    // TZQXSJ	通知抢修时间
    // JLDDSJ	记录到达时间
    // JLXFSJ	记录修复时间
    // YHBH	用户编号
    // YHMC	用户名称
    var titleList = [
        ["OBJ_ID",""],
        ["iiiii","公司"],
        ["QXDZTMC","抢修单状态"],
        ["LYMC","来源"],
        ["QXDBH","抢修单编号"],
        ["BXSJ","报修时间"],
        ["GZDD","故障地点"],
        ["BXNR","报修内容"],
        ["JDDJSJ","接单登记时间"],
        ["JLXFSJ","记录修复时间"],
        ["YHBH","用户编号"],
        ["YHMC","用户名称"], //未完
    ];

    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司") {
                value = SSGSMAP_ID[value]|| DEFAULT_DETAIL_EMPTY_TEXT;
            } else if (titleList[i][1] ==="..."){
                value = "...";
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.QXGD);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getZongTiQiangXiuDetail(dealdata,GZLX,SFCL,LY,ssgs);
}

//客服服务-故障监测
var g_faultDetection_left = {};
function dealGuZhangJianCeData(faultDetection_left, option,DYDJ,ssgs) {

    g_faultDetection_left = {obj:faultDetection_left,option : option};

    function dealdata(data) {
        var DYDJ_08_all = 0;	//交流380V
        var DYDJ_22_all = 0;	//交流10kV
        var DYDJ_25_all = 0;	//交流35kV
        var DYDJ_32_all = 0;	//交流110kV

        var DYDJ_08_ywc = 0;	//已完成
        var DYDJ_22_ywc = 0;	//交流10kV
        var DYDJ_25_ywc = 0;	//交流35kV
        var DYDJ_32_ywc = 0;	//交流110kV
        if (!data.data) {
            data.data = [];
        }
        for(var i=0;i<data.data.length;i++) {
            var dydjval = data.data[i].DYDJ;
            if (dydjval === "08") {
                DYDJ_08_all += parseInt(data.data[i].SL);
                DYDJ_08_ywc += parseInt(data.data[i].YWC);
            } else if (dydjval === "22"){
                DYDJ_22_all += parseInt(data.data[i].SL);
                DYDJ_22_ywc += parseInt(data.data[i].YWC);
            } else  if (dydjval === "25") {
                DYDJ_25_all += parseInt(data.data[i].SL);
                DYDJ_25_ywc += parseInt(data.data[i].YWC);
            } else  if (dydjval === "32") {
                DYDJ_32_all += parseInt(data.data[i].SL);
                DYDJ_32_ywc += parseInt(data.data[i].YWC);
            }
        }
        var DYDJ_32_Rate;
        var DYDJ_25_Rate;
        var DYDJ_22_Rate;
        var DYDJ_08_Rate;

        var DYDJ_32_y;
        var DYDJ_25_y;
        var DYDJ_22_y;
        var DYDJ_08_y;


        DYDJ_32_all ===0? (DYDJ_32_Rate = "0%",DYDJ_32_y = DYDJ_32_ywc):
            (DYDJ_32_Rate = (parseInt(DYDJ_32_ywc/DYDJ_32_all*100)).toString()+"%",DYDJ_32_y = DYDJ_32_ywc / DYDJ_32_all);
        DYDJ_25_all ===0? (DYDJ_25_Rate = "0%",DYDJ_25_y = DYDJ_25_ywc):
            (DYDJ_25_Rate = (parseInt(DYDJ_25_ywc/DYDJ_25_all*100)).toString()+"%",DYDJ_25_y = DYDJ_25_ywc / DYDJ_25_all);
        DYDJ_22_all ===0? (DYDJ_22_Rate = "0%",DYDJ_22_y = DYDJ_22_ywc):
            (DYDJ_22_Rate = (parseInt(DYDJ_22_ywc/DYDJ_22_all*100)).toString()+"%",DYDJ_22_y = DYDJ_22_ywc / DYDJ_22_all);
        DYDJ_08_all ===0? (DYDJ_08_Rate = "0%",DYDJ_08_y = DYDJ_08_ywc):
            (DYDJ_08_Rate = (parseInt(DYDJ_08_ywc/DYDJ_08_all*100)).toString()+"%",DYDJ_08_y = DYDJ_08_ywc / DYDJ_08_all);

        // DYDJ_32_Rate += "完成率";
        // DYDJ_25_Rate += "完成率";
        // DYDJ_22_Rate += "完成率";
        // DYDJ_08_Rate += "完成率";

        option.series[0].axisLine.lineStyle.color[0][0] = DYDJ_32_y;
        option.series[0].data[0].name = DYDJ_32_Rate;
        option.series[0].axisLine.lineStyle.color[1][0]= 1;

        option.series[1].axisLine.lineStyle.color[0][0] = DYDJ_25_y;
        option.series[1].data[0].name = DYDJ_25_Rate;
        option.series[1].axisLine.lineStyle.color[1][0] = 1;

        option.series[2].axisLine.lineStyle.color[0][0] = DYDJ_22_y;
        option.series[2].data[0].name = DYDJ_22_Rate;
        option.series[2].axisLine.lineStyle.color[1][0] = 1;

        option.series[3].axisLine.lineStyle.color[0][0] = DYDJ_08_y;
        option.series[3].data[0].name = DYDJ_08_Rate;
        option.series[3].axisLine.lineStyle.color[1][0] = 1;


        $('#gzjc_110').text(DYDJ_32_all);
        $('#gzjc_35').text(DYDJ_25_all);
        $('#gzjc_10').text(DYDJ_22_all);
        $('#gzjc_04').text(DYDJ_08_all);
        $('#gzjc_all').text(DYDJ_32_all+DYDJ_25_all+DYDJ_22_all+DYDJ_08_all);
        faultDetection_left.setOption(option);
    }
    getGuZhangJianCeData(dealdata,DYDJ ,ssgs);
}


//故障监测详情(主动工单)
function showGuZhangJianCeList(DYDJ,QXDZT ,ssgs) {

    //公司、设备名称、设备类型、所属站线、电压等级、停电时间、送电时间、修复时间、维护班组、联系电话
    var parentComId = "FourUl";
//  var titleList = [
//      ["GZSBBH",""],
//      ["SSGDDW","公司"],
//      ["GZSBMC","设备名称"],
//      ["GZSBLX_BM","设备类型"],
//      ["SYZXMC","所属站线"],
//      ["DYDJMC","电压等级"],
//      ["gegs","停电时间"],
//      ["eggg","送电时间"],
//      ["JLXFSJ","修复时间"],
//      ["iiiii","维护班组"],
//      //["YHSJ","联系电话"],
//  ];
var titleList = [
        ["GZSBBH",""],
        ["SSGDDW","公司"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
//      ["GZSBLX_BM","设备类型"],
        ["JDDJSJ","停电时间"],
        ["JLXFSJ","修复时间"],
        ["HFSDSJ","送电时间"],
        ["TZQKMC","跳闸情况"],
        ["TZSBMC","跳闸设备"],
        ["SFQR","是否确认"],
        ["QXZDMC","抢修班组"],
        //["YHSJ","联系电话"],
    ];
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZJC);
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
		$('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        console.log(rows)
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
    getGZJCDetailData(dealdata, DYDJ,QXDZT,ssgs);
}


//报修单详情
function showBaoXiuDanList(DYDJ,QXDZT ,ssgs) {

    //公司、设备名称、设备类型、所属站线、电压等级、停电时间、送电时间、修复时间、维护班组、联系电话
    var parentComId = "FourUl";
    var titleList = [
        ["GZSBBH",""],
        ["SSGDDW","公司"],
        ["GZSBMC","设备名称"],
        ["GZSBLX_BM","设备类型"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
        ["gegs","停电时间"],
        ["eggg","送电时间"],
        ["JLXFSJ","修复时间"],
        ["iiiii","维护班组"],
        //["YHSJ","联系电话"],
    ];
    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.ZDGD);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getGZJCDetailData(dealdata, DYDJ,QXDZT,ssgs);
}

//全网状态--故障监测--实时监测明细(报修单详情)
function showSuQiuList(DYDJ,QXDZT ,ssgs) {

    //公司、设备名称、设备类型、所属站线、电压等级、停电时间、送电时间、修复时间、维护班组、联系电话
    var parentComId = "FourUl";
//  var titleList = [
//      ["GZSBBH",""],
//      ["SSGDDW","公司"],
//      ["GZSBMC","设备名称"],
//      ["GZSBLX_BM","设备类型"],
//      ["SYZXMC","所属站线"],
//      ["DYDJ","电压等级"],
//      ["gegs","停电时间"],
//      ["eggg","送电时间"],
//      ["JLXFSJ","修复时间"],
//      ["iiiii","维护班组"],
//      //["YHSJ","联系电话"],
//  ];
var titleList = [
        ["GZSBBH",""],
        ["SSGDDW","公司"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
//      ["GZSBLX_BM","设备类型"],
        ["JDDJSJ","停电时间"],
        ["JLXFSJ","修复时间"],
        ["HFSDSJ","送电时间"],
        ["TZQKMC","跳闸情况"],
        ["TZSBMC","跳闸设备"],
        ["SFQR","是否确认"],
        ["QXZDMC","抢修班组"],
        //["YHSJ","联系电话"],
    ];
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {//点击定位按钮调用的方法
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZJC);//获取定位的val值与图层名称layer调用定位地图方法JumpMap
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getGZJCDetailData(dealdata, DYDJ,QXDZT,ssgs);
}

//面板
function createGongDanPanle(ssgs){

    var titleList = [
        ["GZSBMC","故障设备名称"],
        ["JDDJSJ","接单登记时间"],
        ["iiiii","班组"],
        ["JLXFSJ","记录修复时间"],
    ];

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][0] === "JLXFSJ")
                value = row[titleList[i][0]];
            newrow.push(value);
        }
        return newrow;
    }

    function dealdata(data) {

        var GZSBMC;	//故障设备名称
        var JDDJSJ;	//接单登记时间
        //var TZQXSJ;	//通知抢修时间
        var JLXFSJ;	//记录修复时间
        var QXDZTMC;//	抢修单状态名称 未到达 进行中 已完成

        var weirows = [];
        var zhongrows = [];
        var yirows = [];


        if  (data.data) {
            for(var i=0;i<data.data.length;i++) {
                QXDZTMC = data.data[i].QXDZTMC;
                GZSBMC = data.data[i].GZSBMC;
                JDDJSJ = data.data[i].JDDJSJ;
                JLXFSJ = data.data[i].JLXFSJ;
                if (QXDZTMC === "未到达"){
                    weirows.push(data.data[i]);
                } else if (QXDZTMC === "进行中") {
                    zhongrows.push(data.data[i]);
                } else {
                    yirows.push(data.data[i]);
                }
            }
        }

        createGDGropList("li_weidaoda", weirows, "未到达", titleList, dealRow, createGongDanList);
        createGDGropList("li_jinxingzhong", zhongrows, "进行中", titleList, dealRow, createGongDanList);
        createGDGropList("li_yiwancheng", yirows, "已完成", titleList, dealRow, createGongDanList);
    }

    getGZJCDetailData(dealdata, null,null,ssgs);
}

function createGongDanList(rows){
    ChooseShow("KHFW");
    $('#qiangdan_title').text("主动工单");

    var parentComId = ulmap.KHFW;

    var titleList = [
        ["OBJ_ID",""],
        ["SSGDDW","公司"],
        ["GZSBMC","跳闸设备"],
        ["GZSBLX_BM","设备类型"],
        ["SYZX","所属站线"],
        ["DYDJ","电压等级"],
        ["JDDJSJ","生成时间"],
        ["BXNR","内容描述"],
        ["iiiii","是否确认"],
    ];

    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }

    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.ZDGD);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }

    dealdata({data:rows});
}

/**
 * 台区监测--异常监测明细
 * areaId,type,sfhxq 是 接口请求参数
 */
function showTaiQuJianCeList(areaId,type,sfhxq) {

    //公司、配变类型、设备名称、异常值(用哪个就取哪个最值)、最值时间(同异常值)、额定容量、使用性质、型号、生产厂商(厂家名称)、维护班组、
    //连续天数(连续三天XXX,用哪个取哪个)
    var parentComId = "FourUl";
    switch(type){
	case 'GZ':
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["YWDW","公司"],
        ["TYPE","配变类型"],
        ["SBMC","设备名称"],
        ["ERR_LOAD","异常值"],
        ["ERR_LOAD_DT","最值时间"],
        ["EDRL","额定容量"],
        ["SYXZMC","使用性质"],
        ["XH","型号"],
        ["SCCJMC","生产厂商"],
        ["WHBZMC","维护班组"],
        ["LXSXBPH","连续天数"],
    ];
	    break;
	case 'ZZ':
		var titleList = [
		["GZSBBH",""],
        ["YWDW","公司"],
        ["TYPE","配变类型"],
        ["SBMC","设备名称"],
        ["ERR_LOAD","异常值"],
        ["ERR_LOAD_DT","最值时间"],
        ["EDRL","额定容量"],
        ["SYXZMC","使用性质"],
        ["XH","型号"],
        ["SCCJMC","生产厂商"],
        ["WHBZMC","维护班组"],
        ["LXSXBPH","连续天数"],
    ];
	    break;
	case 'DDY':
	    var titleList = [
	    ["GZSBBH",""],
        ["YWDW","公司"],
        ["TYPE","配变类型"],
        ["SBMC","设备名称"],
        ["ERR_VOLT","异常值"],
        ["ERR_VOLT_DT","最值时间"],
        ["EDRL","额定容量"],
        ["SYXZMC","使用性质"],
        ["XH","型号"],
        ["SCCJMC","生产厂商"],
        ["WHBZMC","维护班组"],
        ["LXSXBPH","连续天数"],
    ];
	    break;
	case 'SXBPH':
		var titleList = [
		["GZSBBH",""],
        ["YWDW","公司"],
        ["TYPE","配变类型"],
        ["SBMC","设备名称"],
        ["ERR_UB","异常值"],
        ["ERR_UB_DT","最值时间"],
        ["EDRL","额定容量"],
        ["SYXZMC","使用性质"],
        ["XH","型号"],
        ["SCCJMC","生产厂商"],
        ["WHBZMC","维护班组"],
        ["LXSXBPH","连续天数"],
    ];
	    break;
     }
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
         switch(type){
         	case 'GZ':
         	     JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZ);
         	break;
         	case 'ZZ':
         	     JumpMap(locallayer["OBJ_ID"],lxtomapMap.ZZ);
         	break;
         	case 'DDY':
         	     JumpMap(locallayer["OBJ_ID"],lxtomapMap.SXBPH);
         	break;
         	case 'SXBPH':
         	     JumpMap(locallayer["OBJ_ID"],lxtomapMap.SXBPH);
         	break;
         }
    	
    }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];//公司编码转义成公司名称的方法
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getTaiQuYiChangDetial(dealBackDataList,areaId,type,sfhxq);//台区异常明细查看(ajax接口请求)
}

/**
 * 配网抢修--抢修情况明细（按来源）
 * areaId,type,lx 是 接口请求参数
 */
function showqiangXiuCeList(areaId,type,lx) {

    //公司、抢修单状态、来源、抢修单编号、报修时间、故障地点、报修内容、处理人、联系方式、接单登记时间、通知抢修时间、到达现场时间、记录修复时间、用户编号、用户名称
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["QXDZTMC","抢修单状态"],
        ["LYMC","来源"],
        ["QXDBH","抢修单编号"],
        ["BXSJ","报修时间"],
        ["GZDD","故障地点"],
        ["BXNR","报修内容"],
        ["FZR","处理人"],
        ["LXDH","联系方式"],
        ["JDDJSJ","接单登记时间"],
        ["TZQXSJ","通知抢修时间"],
        ["JLDDSJ","到达现场时间"],
        ["JLXFSJ","记录修复时间"],
        ["YHBH","用户编号"],
        ["YHMC","用户名称"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.QXGD);
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getqiangXiuDetial(dealBackDataList,areaId,type,lx);//抢修情况明细查看(ajax接口请求)
}

/**
 * 紧急诉求明细
 * type：分类(投诉 举报) 
 */
function suQiuCeList(type) {

    //工单编号、诉求级别、业务分类、诉求性质、受理时间、信息来源、当前状态、诉求内容
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["GDBH","工单编号"],
        ["JB","诉求级别"],
        ["FL","业务分类"],
        ["XZ","诉求性质"],
        ["SLSJ","受理时间"],
        ["LY","信息来源"],
        ["DQZT","当前状态"],
        ["NR","诉求内容"],
    ];
    
    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.ZDGD);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getsuQiuDetial(dealBackDataList,type);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 新故障监测明细:按电压等级 公司 与 是否核心区
 * @param {Object} areaId  公司
 * @param {Object} type    电压等级  交流10kV：22 交流35kV：25 交流110kV：32 交流0.4kV：08
 * @param {Object} sfhxq   是否保电核心区 默认-1不是，1是，不是1为否
 */
function showFaultJianCeList(areaId,type,sfhxq) {

    //公司、跳闸设备、跳闸情况、故障设备、所属站线、电压等级、停电时间、送电时间、修复时间、抢修班组、是否确认
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
//      ["GZSBLX_BM","设备类型"],
        ["JDDJSJ","停电时间"],
        ["JLXFSJ","修复时间"],
        ["HFSDSJ","送电时间"],
        ["TZQKMC","跳闸情况"],
        ["TZSBMC","跳闸设备"],
        ["QXZDMC","抢修班组"],
        ["SFQR","是否确认"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {//点击定位按钮调用的方法
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZJC);//获取定位的val值与图层名称layer调用定位地图方法JumpMap
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");//最后一个参数传"-1"则返回给inJumpMap方法的入参locallayer值为接口返回的每条数据记录
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getFaultJianDetial(dealBackDataList,areaId,type,sfhxq);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 故障监测--当日监测—实时监测（明细）
 * @param {Object} type 跳闸情况（01:跳闸,02:跳闸重合成功,03:跳闸重合不成功）
 */
function showtiaoZhaCeList(areaId,type,sfhxq) {

    //公司、跳闸设备、跳闸情况、故障设备、所属站线、电压等级、停电时间、送电时间、修复时间、抢修班组、是否确认
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
        ["TZQKMC","跳闸情况"],
        ["JDDJSJ","停电时间"],
        ["JLXFSJ","修复时间"],
        ["HFSDSJ","送电时间"],
        ["TZQKMC","跳闸情况"],
        ["TZSBMC","跳闸设备"],
        ["QXZDMC","抢修班组"],
        ["SFQR","是否确认"],
    ];
    
    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.ZDGD);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    gettiaoZhaDetial(dealBackDataList,areaId,type,sfhxq);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 全网状态(左侧)--主动工单明细
 */
function showzhuDongGDCeList() {

    //公司、跳闸设备、跳闸情况、故障设备、所属站线、电压等级、停电时间、送电时间、修复时间、抢修班组、是否确认（本次全部默认显示是）
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["TZSBMC","跳闸设备"],
        ["TZQKMC","跳闸情况"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
        ["JDDJSJ","停电时间"],
        ["HFSDSJ","送电时间"],
        ["JLXFSJ","修复时间"],
        ["TZSBMC","跳闸设备"],
        ["QXZDMC","抢修班组"],
        ["SFQR","是否确认"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GZSBBH"],lxtomapMap.QXGD);
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
		$('#pageBlock').hide();

//      if (!data){
         if (data.length == 0){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data;
       createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getzhuDongGDDetial(dealBackDataList);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 全网状态(左侧)--报修单明细
 */
function showbaoXiuDanCeList() {

    //公司、抢修单状态、来源、抢修单编号、报修时间、故障地点、报修内容、处理人、联系方式、接单登记时间、通知抢修时间、到达现场时间、记录修复时间、用户编号、用户名称
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["QXDZTMC","抢修单状态"],
        ["LYMC","来源"],
        ["QXDBH","抢修单编号"],
        ["BXSJ","报修时间"],
        ["GZDD","故障地点"],
        ["BXNR","报修内容"],
        ["FZR","处理人"],
        ["LXDH","联系方式"],
        ["JDDJSJ","接单登记时间"],
        ["TZQXSJ","通知抢修时间"],
        ["JLDDSJ","到达现场时间"],
        ["JLXFSJ","记录修复时间"],
        ["YHBH","用户编号"],
        ["YHMC","用户名称"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
		$('#pageBlock').hide();

//      if (!data){
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getbaoXiuDanDetial(dealBackDataList);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 全网状态(左侧)--诉求单明细
 */
function showsuQiuDanCeList() {

    //工单编号、诉求级别、业务分类、诉求性质、受理时间、信息来源、当前状态、诉求内容
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["GDBH","工单编号"],
        ["JB","诉求级别"],
        ["FL","业务分类"],
        ["XZ","诉求性质"],
        ["SLSJ","受理时间"],
        ["LY","信息来源"],
        ["DQZT","当前状态"],
        ["NR","诉求内容"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
//      if (!data){
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getsuQiuDanDetial(dealBackDataList);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网)
 * 1表示10KV 是配网的 
 * 2表示35KV及以上  是主网故障 
 * 不传表示所有的电压等级
 */
function showzhuPeiWangCeList(DYDJ) {

    //公司、跳闸设备、跳闸情况、故障设备、所属站线、电压等级、停电时间、送电时间、修复时间、抢修班组、是否确认
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
		["SSGDDWMC","公司"],
        ["TZSBMC","跳闸设备"],
        ["TZQKMC","跳闸情况"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
        ["JDDJSJ","停电时间"],
        ["HFSDSJ","送电时间"],
        ["JLXFSJ","修复时间"],
        ["QXZDMC","抢修班组"],
        ["SFQR","是否确认"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (data.length == 0){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getzhuPeiWangDetial(dealBackDataList,DYDJ);//抢修情况明细查看(ajax接口请求)
}

/**
 * 
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网 与 10KV)
 */
function showYiChangCeList(DYDJ) {

    //异常分类、异常来源、所属站线、异常对象、对象类型、发生时间、异常值、异常描述、等级、设备主人
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
		["YCFL","异常分类"],
        ["YCLY","异常来源"],
        ["ZXMC","所属站线"],
        ["SBMC","异常对象"],
        ["SBLXMC","对象类型"],
        ["FSSJ","发生时间"],
        ["YCZ","异常值"],
        ["YCMS","异常描述"],
        ["YCDJ","等级"],
        ["SBZRMC","设备主人"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
//     if (!data.data){
       if (true){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getYiChangDetial(dealBackDataList,DYDJ);//抢修情况明细查看(ajax接口请求)
}