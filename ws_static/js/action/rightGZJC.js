$(document).ready(function () {
    
    $("#zdgd_stat_num1").click(function () {
        $("#zdgd_stat_num1").css({'cursor': 'pointer'});
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
        showGuZhangJianCeList(null,'01',SSGSMAP_NAME[g_deptchangeGZHJC]);
    });

    $("#zdgd_stat_num2").click(function () {
        $("#zdgd_stat_num2").css({'cursor': 'pointer'});
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");
		
        showGuZhangJianCeList(null,'02',SSGSMAP_NAME[g_deptchangeGZHJC]);
        
    });

    $("#zdgd_stat_num3").click(function () {
        $("#zdgd_stat_num3").css({'cursor': 'pointer'});
        ChooseShow("KHFW");
        $('#qiangdan_title').text("主动工单");

        showGuZhangJianCeList(null,'03',SSGSMAP_NAME[g_deptchangeGZHJC]);
    });
    
    
});

var g_deptchangeGZHJC;

/**
 * 点击全网状态-故障监测
 */
function clickGzjcTab(){
	$(".chuli_item_bar").css("background","rgba(188,188,188,0.1)");
	$(".chuli_item_bar span").css("background","rgba(188,188,188,0.1)");
	get_tztj_ssjc("上海");
}

/**
 * 点击右侧故障检测右边的地址切换
 * @param {Object} area
 */
function get_tztj_ssjc(area) {
	$(".chuli_item_bar").css("background","rgba(188,188,188,0.1)");
	$(".chuli_item_bar span").css("background","rgba(188,188,188,0.1)");
    g_deptchangeGZHJC  = area;
    get_gzjc_ssjc_pie(area, '32');//绑定故障监测-当日监测右侧三个饼图 交流110kV：32
    get_gzjc_ssjc_pie(area, '25');//绑定故障监测-当日监测右侧三个饼图 交流35kV：25
    get_gzjc_ssjc_pie(area, '22');//绑定故障监测-当日监测右侧三个饼图 交流10kV：22
    get_gzjc_ssjc_pie(area, '08');//绑定故障监测-当日监测右侧三个饼图 交流0.4kV：08

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

/**
 * 绑定故障监测-当日监测右侧三个饼图
 * @param {Object} area
 * @param {Object} DYDJ
 */
function get_gzjc_ssjc_pie(area, DYDJ) {
    getShishiJianCeStatData(function (rlt) {
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
                chart_110kv_pie(total, n1, n2, n3, n4);
                if((n1+n2+n3+n4) != 0){
                	$("#chuli_110").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                	$("#chuli_110").parent().css("background","#e3bc31");
                	$("#chuli_110").css("background","#00da5b");
                }
                break;
            case '25':
                chart_35kv_pie(total, n1, n2, n3, n4);
                if((n1+n2+n3+n4) != 0){
                	$("#chuli_35").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                	$("#chuli_35").parent().css("background","#e3bc31");
                	$("#chuli_35").css("background","#00da5b");
                }
                break;
            case '22':
                chart_10kv_pie(total, n1, n2, n3, n4);
                if((n1+n2+n3+n4) != 0){
                    $("#chuli_10").attr("style", "width:" + ywc*100/(jxz+ywc+wdd) + "%");
                    $("#chuli_10").parent().css("background","#e3bc31");
                	$("#chuli_10").css("background","#00da5b");
                } 
                break;
            case '08':
                chart_04kv_pie(total, n1, n2, n3, n4);
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

/**
 * 绑定故障监测-实时监测-下方的直接跳闸、重合失败、重合成功
 * @param {Object} TZQK
 * @param {Object} area
 */
function get_tztj_ssjc_stat(TZQK, area) {
    getTiaoZhaData(function (rlt) {
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
                $("#gzjk_zjtz_bar").attr("style", "width:" + pnum + "%");
                break;
            case '03':
                $("#gzjk_chsb_val").text(num);
                $("#gzjk_chsb_bar").attr("style", "width:" + pnum + "%");
                break;
            case '02':
                $("#gzjk_chcg_val").text(num);
                $("#gzjk_chcg_bar").attr("style", "width:" + pnum + "%");
                break;
        }
    }, TZQK, SSGSMAP_NAME[area]);
}

function get_tztj_stat(TZQK, area) {
    var areaKey = SSGSMAP_NAME[area];
    getTiaoZhaData(function (rlt) {
        var data = rlt.data;
        var num = 0;
        if (data != null) {
            if (areaKey == SSGS) {
                for (var i = 0; i < data.length; i++) {
                    num += Number(data[i].SL);
                }
            } else {
                num = Number(data[0].SL);
            }
        }

        var pnum = num * 100 / GZJK_DZ_LIMIT;
        switch (TZQK) {
            case '01':
                $("#gzjk_zjtz_val").text(num);
                $("#gzjk_zjtz_bar").attr("style", "width:" + pnum + "%");
                break;
            case '02':
                $("#gzjk_chsb_val").text(num);
                $("#gzjk_chsb_bar").attr("style", "width:" + pnum + "%");
                break;
            case '03':
                $("#gzjk_chcg_val").text(num);
                $("#gzjk_chcg_bar").attr("style", "width:" + pnum + "%");
                break;
        }
    }, TZQK, areaKey);
}

/**
 * 故障监测-故障分布柱状图
 */
function get_gzjc_gzfb_bar1() {
    getNewGuZhangfenbuData(function(rlt){
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
    	 chart_gzfb_bar.apply(this,nums);
    },-1);
}

/**
 * 故障监测-主动工单
 * @param {Object} area
 */
function get_gzjc_zdgd_list(area) {
    getZhuDongGongDanListData(function (rlt) {
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
                    case '01':
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
                    case '02':
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
                    case '03':
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