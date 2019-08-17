
    get_tztj_ssjc("上海");//页面初始化加载饼图
    $("#gzjk_ssjc_tval").css({'cursor': 'pointer'});//点击故障监测总数弹明细
    $("#gzjk_ssjc_tval").click(function () {
       ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("实时监测");
        var areaGZJC = $("#areaGZJC").text();
	    var areaId = '8a812897493378a00149567740676661';
		switch(areaGZJC){
		case '上海':
			areaId = '8a812897493378a00149567740676661';
		    break;
		case '核心':
			areaId = 'JBH-HXQ';
		    break;
		case '浦东':
		    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
		    break;
		case '市区':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
		    break;
		case '市北':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
		    break;
		case '市南':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
		    break;
		case '嘉定':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
		    break;
		case '松江':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
		    break;
	    case '青浦':
	    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
		    break;
		case '奉贤':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
		    break;
		case '金山':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
		    break;
		case '崇明':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
		    break;
		case '长兴':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
		    break;
	    			}
        showSuQiuList(null,null,areaId);
    });
    
    //点击主动工单弹出明细
    //未到达
    $("#zdgd_stat_num1").click(function () {
        $("#zdgd_stat_num1").css({'cursor': 'pointer'});
        ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("主动工单");
        showGuZhangJianCeList(null,'01',SSGSMAP_NAME[g_deptchangeGZHJC]);//创建明细
    });
	//进行中
    $("#zdgd_stat_num2").click(function () {
        $("#zdgd_stat_num2").css({'cursor': 'pointer'});
        ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("主动工单");
		
        showGuZhangJianCeList(null,'02',SSGSMAP_NAME[g_deptchangeGZHJC]);//创建明细
        
    });
	//已完成
    $("#zdgd_stat_num3").click(function () {
        $("#zdgd_stat_num3").css({'cursor': 'pointer'});
        ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("主动工单");

        showGuZhangJianCeList(null,'03',SSGSMAP_NAME[g_deptchangeGZHJC]);//创建明细
    });
    //110kv
    $("#chart_110kv_pie").css({'cursor': 'pointer'});
    $("#chart_110kv_pie").click(function () {
        guzhangDetailShow("32");//交流10kV：22 交流35kV：25 交流110kV：32//创建明细
        $('#qiangdan_title',parent.document).text("故障监测");
    });
    
    //35kv
    $("#chart_35kv_pie").css({'cursor': 'pointer'});
    $("#chart_35kv_pie").click(function () {
        guzhangDetailShow("25");//创建明细
        $('#qiangdan_title',parent.document).text("故障监测");
    });
    //10kv
    $("#chart_10kv_pie").css({'cursor': 'pointer'});
    $("#chart_10kv_pie").click(function () {
        guzhangDetailShow("22");//创建明细
        $('#qiangdan_title',parent.document).text("故障监测");
    });
    //0.4kv
    $("#chart_04kv_pie").css({'cursor': 'pointer'});
    $("#chart_04kv_pie").click(function () {
        guzhangDetailShow("08");//创建明细
        $('#qiangdan_title',parent.document).text("故障监测");
    });
    //直接跳闸
    $("#gzjk_zjtz_val").css({'cursor': 'pointer'});
    $("#gzjk_zjtz_val").click(function () {
        tiaoZhaDetailShow("01");//type 跳闸情况（01:跳闸,02:跳闸重合成功,03:跳闸重合不成功）
        $('#qiangdan_title',parent.document).text("直接跳闸");
    });
    //重合失败
    $("#gzjk_chsb_val").css({'cursor': 'pointer'});
    $("#gzjk_chsb_val").click(function () {
        tiaoZhaDetailShow("03");
        $('#qiangdan_title',parent.document).text("重合失败");
    });
    //重合成功
    $("#gzjk_chcg_val").css({'cursor': 'pointer'});
    $("#gzjk_chcg_val").click(function () {
        tiaoZhaDetailShow("02");
        $('#qiangdan_title',parent.document).text("重合成功");
    });

	//点击地区切换---背景高亮切换位置
	var move_left_start = $('.move_after').css('left'),
	move_left = parseInt(move_left_start),
	scale = (1080 / 12);
	$('.square_move dd').click(function() {
		var index = $(this).index() - 1,
			end_left;
		if(index == 0) {
			$('.move_after').hide();
		} else if(index == 1) {
			$('.move_after').show();
			end_left = move_left;
		} else {
			$('.move_after').show();
			end_left = move_left + (index - 1) * scale;
		}
		$('.move_after').css('left', end_left);
	})
	
	
/*右侧态势图入口*/
$('#tst_id_gzjc').click(function(){
	parent.document.getElementById("iframe1").contentWindow.specialClick(0);
});


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
    
    function inJumpMap(id, locallayer) {//地图定位
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZJC);
         }

    function dealRow(row) {//标题数组GZSBBH/SSGDDW
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


    function dealdata(data) {//创建list
		$('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        console.log(rows)
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }
    getGZJCDetailData(dealdata, DYDJ,QXDZT,ssgs);//获取数据
}



var g_deptchangeGZHJC;//右侧12个地区中所选择的地区
/**
 * 点击右侧故障检测右边的地址切换
 * @param {Object} area
 */
function get_tztj_ssjc(area) {
	$(".chuli_item_bar").css("background","rgba(188,188,188,0.1)");
	$(".chuli_item_bar span").css("background","rgba(188,188,188,0.1)");
    g_deptchangeGZHJC  = area;
    get_gzjc_ssjc_pie(area, '32');//绑定故障监测-当日监测右侧饼图 交流110kV：32
    get_gzjc_ssjc_pie(area, '25');//绑定故障监测-当日监测右侧饼图 交流35kV：25
    get_gzjc_ssjc_pie(area, '22');//绑定故障监测-当日监测右侧饼图 交流10kV：22
    get_gzjc_ssjc_pie(area, '08');//绑定故障监测-当日监测右侧饼图 交流0.4kV：08

    get_tztj_ssjc_stat('01', area);//直接跳闸
    get_tztj_ssjc_stat('02', area);//重合失败
    get_tztj_ssjc_stat('03', area);//重合成功

    get_tztj_ssjc_total(area);//实时监测-总数

    get_gzjc_gzfb_bar1();//故障监测-故障分布柱状图

    get_gzjc_zdgd_list(area);//故障监测-主动工单
}


/**
 * 实时监测-总数
 * @param {Object} area
 */
function get_tztj_ssjc_total(area) {
    getShishiJianCeTotalData(function (rlt) {
        var data = rlt.data;
        var num = 0;
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                num += Number(data[i].SL);
            }
        }
        $("#gzjk_ssjc_tval").text(num);
    }, SSGSMAP_NAME[area]);

}

//实时监测总数
function getShishiJianCeTotalData(callback, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}


/**
 * 绑定故障监测-当日监测右侧三个饼图
 * @param {Object} area
 * @param {Object} DYDJ
 */
function get_gzjc_ssjc_pie(area, DYDJ) {
    getShishiJianCeStatData(function (rlt) {//获取接口数据
        var data = rlt.data;
        var total = 0;
        var n1 = 0, n2 = 0, n3 = 0, n4 = 0;
        //未到达数  进行中数 已完成数
        //已处理:ywc 处理中:wdd+jxz
        var wdd = 0;var jxz = 0;var ywc = 0;
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                total += Number(data[i].SL);
                wdd += Number(data[i].WDD);
                jxz += Number(data[i].JXZ);
                ywc += Number(data[i].YWC);
                switch (data[i].LY) {
                    case '01': //SCADA
                        n1 += Number(data[i].SL);
                        break;
                    case '02': //DSCADA
                        n2 += Number(data[i].SL);
                        break;
                    case '09': //用电信息采集系统
                        n3 += Number(data[i].SL);
                        break;
                    default: //其他
                        n4 += Number(data[i].SL);
                }
            }
        }
        switch (DYDJ) {
            case '32':
                chart_110kv_pie(total, n1, n2, n3, n4);//110kv图表塞数据
                if((n1+n2+n3+n4) != 0){
                	$("#chuli_110").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                	$("#chuli_110").parent().css("background","#e3bc31");
                	$("#chuli_110").css("background","#00da5b");
                }
                break;
            case '25':
                chart_35kv_pie(total, n1, n2, n3, n4);//35kv图表塞数据
                if((n1+n2+n3+n4) != 0){
                	$("#chuli_35").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                	$("#chuli_35").parent().css("background","#e3bc31");
                	$("#chuli_35").css("background","#00da5b");
                }
                break;
            case '22':
                chart_10kv_pie(total, n1, n2, n3, n4);//10kv图表塞数据
                if((n1+n2+n3+n4) != 0){
                    $("#chuli_10").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                    $("#chuli_10").parent().css("background","#e3bc31");
                	$("#chuli_10").css("background","#00da5b");
                } 
                break;
            case '08':
                chart_04kv_pie(total, n1, n2, n3, n4);//0.4kv图表塞数据
                if((n1+n2+n3+n4) != 0){
                $("#chuli_04").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                $("#chuli_04").parent().css("background","#e3bc31");
                $("#chuli_04").css("background","#00da5b");
                }
                break;
        }
        ;
    }, DYDJ, SSGSMAP_NAME[area]);
}
//实时监测总数，按电压
function getShishiJianCeStatData(callback, DYDJ, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "DYDJ": DYDJ, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}
/**
 * 绑定故障监测-实时监测-下方的直接跳闸、重合失败、重合成功
 * @param {Object} TZQK
 * @param {Object} area
 */
function get_tztj_ssjc_stat(TZQK, area) {
    getTiaoZhaData(function (rlt) {//获取跳闸情况
        var data = rlt.data;
        var num = 0;
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                num += Number(data[i].SL);
            }
        }

        var pnum = num / (num + 50) * 100;
        switch (TZQK) {
            case '01':
                $("#gzjk_zjtz_val").text(num);
                $("#gzjk_zjtz_bar").attr("style", "width:" + pnum + "%");//跳闸图形背景色
                break;
            case '03':
                $("#gzjk_chsb_val").text(num);
                $("#gzjk_chsb_bar").attr("style", "width:" + pnum + "%");//重合失败图形背景色
                break;
            case '02':
                $("#gzjk_chcg_val").text(num);
                $("#gzjk_chcg_bar").attr("style", "width:" + pnum + "%");//重合成功图形背景色
                break;
        }
    }, TZQK, SSGSMAP_NAME[area]);
}

//跳闸情况统计
function getTiaoZhaData(callback, TZQK, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "TZQK": TZQK, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTZTJ/0", param);
}


/**
 * 故障监测-故障分布柱状图
 */
function get_gzjc_gzfb_bar1() {
    getNewGuZhangfenbuData(function(rlt){//获取故障分布数据
    	var nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//已处理:YWC
//  	var numz = [0,0,0,0,0,0,0,0,0,0,0,0];//处理中:JXZ+WDD
    	var data = rlt.data;
    	if(data != null){
    		for(var i = 0;i < data.length;i++){
				var gsName = data[i].SSGDDW;
               	switch(data[i].SSGDDW){
    				case 'JBH-HXQ'://核心
//  				    nums[0] += data[i].SL;
    					nums[0] += data[i].YWC;
    					nums[12] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06'://浦东
//  					nums[1] += data[i].SL;
                        nums[1] += data[i].YWC;
    					nums[13] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03'://市区
//  				    nums[2] += data[i].SL;
                        nums[2] += data[i].YWC;
    					nums[14] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04'://市北
//  					nums[3] += data[i].SL;
                        nums[3] += data[i].YWC;
    					nums[15] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05'://市南
//  					nums[4] += data[i].SL;
						nums[4] += data[i].YWC;
    					nums[16] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08'://嘉定
//  					nums[5] += data[i].SL;
                        nums[5] += data[i].YWC;
    					nums[17] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A'://松江 
//  					nums[6] += data[i].SL;
                        nums[6] += data[i].YWC;
    					nums[18] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09'://青浦 
//  					nums[7] += data[i].SL;
						nums[7] += data[i].YWC;
    					nums[19] += (data[i].JXZ+data[i].WDD);
    				    break;
    			    case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07'://奉贤
//  			    	nums[8] += data[i].SL;
						nums[8] += data[i].YWC;
    					nums[20] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B'://金山
//  					nums[9] += data[i].SL;
						nums[9] += data[i].YWC;
    					nums[21] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ'://崇明
//  					nums[10] += data[i].SL;
						nums[10] += data[i].YWC;
    					nums[22] += (data[i].JXZ+data[i].WDD);
    				    break;
    				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ'://长兴
//  					nums[11] += data[i].SL;
						nums[11] += data[i].YWC;
    					nums[23] += (data[i].JXZ+data[i].WDD);
    				    break;
    			}

    	   }
    	}
    	 chart_gzfb_bar.apply(this,nums);//故障分布图塞数据
    },-1);
}

//故障分布(ajax接口请求)
function getNewGuZhangfenbuData(callback,ssgss){
	var url = basepath + "/hxq/XN_GDFW_BDZT_GZJCTJ";
//	var url = "http://10.130.21.26:58080/pdpsc-app/hxq/XN_GDFW_BDZT_GZJCTJ";//临时方案：用此写死的url，正式上线时用上面被注释的url
	var param = {"SSGS":ssgss,"KSSJ":KSSJ_NOW,"JSSJ":JSSJ_NOW};
	callgetajax(callback,url,param);
}

/**
 * 故障监测-主动工单
 * @param {Object} area
 */
function get_gzjc_zdgd_list(area) {
    getZhuDongGongDanListData(function (rlt) {//获取主动工单数据
    	//创建页面结构，添加工单数
        $("#zdgd_stat_list1").html("");
        $("#zdgd_stat_list2").html("");
        $("#zdgd_stat_list3").html("");
        $("#zdgd_stat_num1").html("<i></i> 未到达(0)");
        $("#zdgd_stat_num2").html("<i></i> 进行中(0)");
        $("#zdgd_stat_num3").html("<i></i> 已完成(0)");
        var data = rlt.data;
        var n1 = 0, n2 = 0, n3 = 0;
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                var jddjsj = new Date(data[i].JDDJSJ);
                var tzqxsj = new Date(data[i].TZQXSJ);
                var jlddsj = new Date(data[i].JLDDSJ);
                var jlxfsj = new Date(data[i].JLXFSJ);

                var timeRange = '';
                switch (data[i].QXDZT) {
                    case '01'://未到达
                        if (data[i].TZQXSJ == null) {
                            p = 1 * 100 / 6;
                            timeRange = dateFtt("hh:mm", jddjsj) + "--";
                            break;
                        }
                        var t = (tzqxsj - jddjsj) / (60 * 60 * 1000);
                        if (t < 1) {
                            p = 1 * 100 / 6;
                        } else if (t > 6) {
                            p = 100;
                        } else {
                            p = t * 100 / 6;
                        }
                        timeRange = dateFtt("hh:mm", jddjsj) + "--" + dateFtt("hh:mm", tzqxsj);
                        break;
                    case '02'://进行中
                        if (data[i].TZQXSJ == null) {
                            p = 1 * 100 / 6;
                            timeRange = "--" + dateFtt("hh:mm", jlddsj);
                            break;
                        }
                        var t = (jlddsj - tzqxsj) / (60 * 60 * 1000);
                        if (t < 1) {
                            p = 1 * 100 / 6;
                        } else if (t > 6) {
                            p = 100;
                        } else {
                            p = t * 100 / 6;
                        }
                        timeRange = dateFtt("hh:mm", tzqxsj) + "--" + dateFtt("hh:mm", jlddsj);
                        break;
                    case '03'://已完成
                        var t = (jlxfsj - jlddsj) / (60 * 60 * 1000);
                        if (t < 1) {
                            p = 1 * 100 / 6;
                        } else if (t > 6) {
                            p = 100;
                        } else {
                            p = t * 100 / 6;
                        }
                        timeRange = dateFtt("hh:mm", jlddsj) + "--" + dateFtt("hh:mm", jlxfsj);
                        break;
                }

                var h = Math.ceil((new Date() - jddjsj) * 10 / (60 * 60 * 1000)) / 10;
                var ss = '<div class="tables-item__listItem">' +
                    '<div class="left">' +
                    '<span class="progressBar" style="width:' + p + '%;"></span>' +
                    '<span class="name">' + data[i].GZSBMC + '</span>' +
                    '<span class="timeRange">' + timeRange + '</span>' +
                    '</div>' +
                    '<div class="right" style="position:relative;">' +
                    '<span class="time">' + h + 'h</span><img src="'+basepath+'ws_static/img/position.png" style="position:absolute;right:0px;top:45px;cursor: pointer;" onclick=JumpMap("'+data[i].OBJ_ID+'","'+lxtomapMap.GZJC+'")>' +
                    //'<span class="principal">' + data[i].SYZXMC + '</span>' +
                    '</div>' +
                    '</div>';
                switch (data[i].QXDZT) {
                    case '01':
                        $("#zdgd_stat_list1").append(ss)
                        $("#zdgd_stat_num1").html("<i></i> 未到达(" + ++n1 + ")");
                        break;
                    case '02':
                        $("#zdgd_stat_list2").append(ss)
                        $("#zdgd_stat_num2").html("<i></i> 进行中(" + ++n2 + ")");
                        break;
                    case '03':
                        $("#zdgd_stat_list3").append(ss)
                        $("#zdgd_stat_num3").html("<i></i> 已完成(" + ++n3 + ")");
                        break;
                }
            }
        }
    }, SSGSMAP_NAME[area]);
}

//实时监测总数，按电压
function getZhuDongGongDanListData(callback, ssgs) {
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCMX/0", param);
}

/**
 * 故障监测--当日监测—实时监测（明细）
 * @param {Object} type 电压等级
 * 交流10kV：22 交流35kV：25 交流110kV：32 交流0.4kV：08
 */
function guzhangDetailShow(type){
	$(".bottom-list",parent.document).removeClass("hide");//显示class为bottom-list的div
    var areaGZJC = $("#areaGZJC").text();
    var areaId = '8a812897493378a00149567740676661';
    if(areaGZJC == '核心'){
    	var sfhxq = '1';
    } else {
    	var sfhxq = '-1';
    }
	switch(areaGZJC){
	case '上海':
		areaId = '8a812897493378a00149567740676661';
	    break;
	case '核心':
		areaId = 'JBH-HXQ';
	    break;
	case '浦东':
	    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	    break;
	case '市区':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	    break;
	case '市北':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	    break;
	case '市南':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	    break;
	case '嘉定':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	    break;
	case '松江':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	    break;
    case '青浦':
    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	    break;
	case '奉贤':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	    break;
	case '金山':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	    break;
	case '崇明':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	    break;
	case '长兴':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	    break;
    			}
	showFaultJianCeList(areaId,type,sfhxq);
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
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");//最后一个参数传"-1"则返回给inJumpMap方法的入参locallayer值为接口返回的每条数据记录
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }


    getFaultJianDetial(dealBackDataList,areaId,type,sfhxq);//抢修情况明细查看(ajax接口请求)
}
/**
 * 故障监测--当日监测—跳闸监测（明细）
 * @param {Object} type 跳闸情况（01:跳闸,02:跳闸重合成功,03:跳闸重合不成功）
 */
function tiaoZhaDetailShow(type){
	$(".bottom-list",parent.document).removeClass("hide");//显示class为bottom-list的div
    var areaGZJC = $("#areaGZJC").text();
    var areaId = '8a812897493378a00149567740676661';
    if(areaGZJC == '核心'){
    	var sfhxq = '1';
    } else {
    	var sfhxq = '-1';
    }
	switch(areaGZJC){
	case '上海':
		areaId = '8a812897493378a00149567740676661';
	    break;
	case '核心':
		areaId = 'JBH-HXQ';
	    break;
	case '浦东':
	    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	    break;
	case '市区':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	    break;
	case '市北':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	    break;
	case '市南':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	    break;
	case '嘉定':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	    break;
	case '松江':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	    break;
    case '青浦':
    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	    break;
	case '奉贤':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	    break;
	case '金山':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	    break;
	case '崇明':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	    break;
	case '长兴':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	    break;
    			}
	showtiaoZhaCeList(areaId,type,sfhxq);
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