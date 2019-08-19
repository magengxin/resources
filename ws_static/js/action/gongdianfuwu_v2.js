
/**
 * 点击供电服务
 */
function clickGDFW() {
	bindGongDianFuwuData("8a812897493378a00149567740676661");//默认加载上海的数据

	bindQiangxiufenbuData();//加载抢修分布图表数据

	bindJinjisuqiuData();//加载紧急诉求-实时监测饼状图表数据

	bindJinjisuqiuZhuZhuangTuData();// 绑定紧急诉求-诉求分布的柱状图数据
}

/**
 * 点击中间弹出按钮
 */
function clickTanChu() {
	$('#l_pop_pwqx_y').text(moment().format("YYYY")+'年')
	$('.popup-normal__areaSelect').eq(3).find('input')[0].click();
	var year = moment().format("YYYY");
	var kssj = moment().add(-2 , "month").format("YYYYMM");//2月
	var jssj = moment().add(-1 , "month").format("YYYYMM");//3月
	bindGongDianFuWu_QZQXHB(kssj, jssj);//供电服务-分布统计-故障抢修环比
	bindPingjunXiufuShijianHuanbi(kssj, jssj);//加载上海公司平均修复时长环比图表
	bindPingjunDaodaShijianHuanbi(kssj, jssj);//加载上海公司平均到达时长环比图表
	bindGongDianFuWu_QuShiFenXi('8a812897493378a00149567740676661', year); //绑定供电服务-趋势分析

}

/**
 *
 * 点击右侧切换地域时会触发该函数
 * @param {Object} area
 */
function get_gdfw_pwqx(area) {
	var SSGS = SSGSMAP_NAME[area];
	bindGongDianFuwuData(SSGS);//绑定供电服务右侧部分数据

}

var peiWangQiangXiuFenXiYear=2019;
var peiWangQiangXiuFenXiMonth;
var gongsi = '8a812897493378a00149567740676661'; //默认上海公司

/**
 * 点击配网抢修分析弹框上面的地区切换
 */
function gzjc_pwqx(area) {

	gongsi = SSGSMAP_NAME[area];
	if(area != '上海') {
		$("#fenbutongji4").hide();//只有上海公司有趋势分析,非上海公司没有
		$("#qushifenxi4").show();
		$(".m_pwqxfx1").hide();
		$(".y_pwqxfx1").show();
		popup_tab_toggle($("#fenbutongji4"), 1);
		$("input[name = 'radio_pwqxfx_type']").get(1).checked = true;
	}

	if(area === '上海') {
		gongsi = '8a812897493378a00149567740676661';
		$("#fenbutongji4").show();//只有上海公司有趋势分析,非上海公司没有
		$("#qushifenxi4").show();
		$("input[name = 'radio_pwqxfx_type']").get(0).checked = true;
		$(".m_pwqxfx1").show();
		$(".y_pwqxfx1").hide();
		popup_tab_toggle($("#fenbutongji4"), 0);
	}
	bindGongDianFuWu_QuShiFenXi(gongsi, peiWangQiangXiuFenXiYear);
}

/**
 * 鼠标点击配网抢修分析弹框上面的月份切换按钮
 * @param {Object} o
 */
function changeDatePwfx(o) {

	var m = $("#l_pop_pwqx_m").attr("data-month");
	var month = new Date().getMonth();
	var year = moment().format("YYYY");
	if($("input[name = 'radio_pwqxfx_year']:checked").val() == 2018){
		m = $("#l_pop_pwqx_m").attr("data-month");
		month = $("#l_pop_pwqx_m").attr("data-month");
		year = $("input[name = 'radio_pwqxfx_year']:checked").val()
	}
	if(m>month){
		$("#l_pop_pwqx_m").attr("data-month",month);
		return;
	}
    if(Number(m)>9){
    	var thisMon=year+m;
    }else{
    	var thisMon=year+'0'+m;
    }
    tm=Number(m);
    if(tm>9){
    	var lastMon=year-1+tm;
    }else{
    	var lastMon=year-1+'0'+tm;
    }


//	var el = $(o).siblings('.m');
//	var m = el.attr("data-month");
//	var lm = Number(m) - 1;
//	var el1 = $(o).siblings('.y');
//	var y = el1.attr("data-year");
//	var month = new Date().getMonth();
//	if(m>month){
//		$(o).siblings('.m').attr("data-month",month)
//		return
//	}
//	if(y == 'undefined' || y == null || y == '') {
//		y = 2019;
//	}
//	if(Number(m) < 10) {
//		var mon = '0' + Number(m);
//	} else {
//		var mon = m;
//	}
//	if(lm < 10) {
//		var last_mon = '0' + lm;
//	} else {
//		var last_mon = '' + lm;
//	}
//
//	kssj = '2019' + last_mon;
//	jssj = '2019' + mon;
//	if(m==1){
//		kssj = '201812';
//	}
	bindGongDianFuWu_QZQXHB(lastMon, thisMon);//供电服务-分布统计-故障抢修环比
	bindPingjunXiufuShijianHuanbi(lastMon, thisMon);
	bindPingjunDaodaShijianHuanbi(lastMon, thisMon);
	peiWangQiangXiuFenXiYear = year;
	peiWangQiangXiuFenXiMonth = m;

}

/**
 * 点击趋势分析年份
 */
function clickQsfxYear() {
	var year = $("input[name = 'radio_pwqxfx_year']:checked").val();
	peiWangQiangXiuFenXiYear=year;
	bindGongDianFuWu_QuShiFenXi(gongsi, Number(year));
}

var t = function(zz) {
	zz = zz || 12;
	var arr = [];
	arr.length = 12;
	return arr.fill(0, 0, zz);;
}
var cm = 12;

/**
 * 供电服务-分布统计-故障抢修环比
 */
function bindGongDianFuWu_QZQXHB(kssj, jssj) {
	function dealData1(res) { //欠费复电回调
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //当月平均到达时间
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //上月平均到达时间
		for(var i = 0; i < data.length; i++) {

			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].NY == jssj) {
					heXinQu = Number(data[i].VALUE);
					continue;
				}
				if(data[i].NY == kssj) {
					heXinQu1 = Number(data[i].VALUE);
					continue;
				}
			}

			if(data[i].NY == jssj) {
				switch(data[i].SSGS) {
					// case 'JBH-HXQ': //核心区
					// 	heXinQu = Number(data[i].VALUE);
					// 	break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}
			if(data[i].NY == kssj) {
				switch(data[i].SSGS) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 = Number(data[i].VALUE);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 = Number(data[i].VALUE);
						// 	break;
					default:
						break;
				}
			}

		}
		var thisMonthArr = [], //当月欠费复电
			lastMontArr = []; //上月欠费复电
		thisMonthArr[0] = heXinQu;
		thisMonthArr[1] = puDong;
		thisMonthArr[2] = shiQu;
		thisMonthArr[3] = shiBei;
		thisMonthArr[4] = shiNan;
		thisMonthArr[5] = jiaDing;
		thisMonthArr[6] = songJiang;
		thisMonthArr[7] = qingPu;
		thisMonthArr[8] = fengXian;
		thisMonthArr[9] = jinShan;
		thisMonthArr[10] = chongMing;
		thisMonthArr[11] = changXing;

		lastMontArr[0] = heXinQu1;
		lastMontArr[1] = puDong1;
		lastMontArr[2] = shiQu1;
		lastMontArr[3] = shiBei1;
		lastMontArr[4] = shiNan1;
		lastMontArr[5] = jiaDing1;
		lastMontArr[6] = songJiang1;
		lastMontArr[7] = qingPu1;
		lastMontArr[8] = fengXian1;
		lastMontArr[9] = jinShan1;
		lastMontArr[10] = chongMing1;
		lastMontArr[11] = changXing1;

		Popup_pwqxfx.setData({ ////给分布统计-平均到达时间环比图表赋值
			gzqxhb: { //分布统计-故障抢修环比
				'当月欠费复电': thisMonthArr,
				'上月欠费复电': lastMontArr
			},
		});
		var thisTotal = 0;var lastTotal = 0;
		for(i = 0;i <thisMonthArr.length;i++){
        	thisTotal += thisMonthArr[i];
        }
		for(i = 0;i <lastMontArr.length;i++){
        	lastTotal += lastMontArr[i];
       }
       $("#qf1").html(thisTotal);$("#qf2").html(lastTotal);

	}

	function dealData2(res) { //电力故障
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //当月平均到达时间
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //上月平均到达时间
		for(var i = 0; i < data.length; i++) {
			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].NY == jssj) {
					heXinQu = Number(data[i].VALUE);
					continue;
				}

				if(data[i].NY == kssj) {
					heXinQu1 = Number(data[i].VALUE);
					continue;
				}
			}

			if(data[i].NY == jssj) {
				switch(data[i].SSGS) {
					// case 'JBH-HXQ': //核心区
					// 	heXinQu = Number(data[i].VALUE);
					// 	break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}
			if(data[i].NY == kssj) {
				switch(data[i].SSGS) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 = Number(data[i].VALUE);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 = Number(data[i].VALUE);
						// 	break;
					default:
						break;
				}
			}

		}
		var thisMonthArr = [], //"当月电力故障"
			lastMontArr = []; ////"上月电力故障"
		thisMonthArr[0] = heXinQu;
		thisMonthArr[1] = puDong;
		thisMonthArr[2] = shiQu;
		thisMonthArr[3] = shiBei;
		thisMonthArr[4] = shiNan;
		thisMonthArr[5] = jiaDing;
		thisMonthArr[6] = songJiang;
		thisMonthArr[7] = qingPu;
		thisMonthArr[8] = fengXian;
		thisMonthArr[9] = jinShan;
		thisMonthArr[10] = chongMing;
		thisMonthArr[11] = changXing;

		lastMontArr[0] = heXinQu1;
		//		lastMontArr[0]=200;
		lastMontArr[1] = puDong1;
		lastMontArr[2] = shiQu1;
		lastMontArr[3] = shiBei1;
		lastMontArr[4] = shiNan1;
		lastMontArr[5] = jiaDing1;
		lastMontArr[6] = songJiang1;
		lastMontArr[7] = qingPu1;
		lastMontArr[8] = fengXian1;
		lastMontArr[9] = jinShan1;
		lastMontArr[10] = chongMing1;
		lastMontArr[11] = changXing1;

		Popup_pwqxfx.setData({
			gzqxhb: { //分布统计-故障抢修环比
				'当月电力故障': thisMonthArr,
				'上月电力故障': lastMontArr
			},
		});
        var thisTotal = 0;var lastTotal = 0;
		for(i = 0;i <thisMonthArr.length;i++){
        	thisTotal += thisMonthArr[i];
        }
		for(i = 0;i <lastMontArr.length;i++){
        	lastTotal += lastMontArr[i];
       }
       $("#dl1").html(thisTotal);$("#dl2").html(lastTotal);
	}

	function dealData3(res) { //非电力故障
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //当月平均到达时间
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //上月平均到达时间
		for(var i = 0; i < data.length; i++) {

			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].NY == jssj) {
					heXinQu = Number(data[i].VALUE);
					continue;
				}

				if(data[i].NY == kssj) {
					heXinQu1 = Number(data[i].VALUE);
					continue;
				}
			}

			if(data[i].NY == jssj) {
				switch(data[i].SSGS) {
					// case 'JBH-HXQ': //核心区
					// 	heXinQu = Number(data[i].VALUE);
					// 	break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}
			if(data[i].NY == kssj) {
				switch(data[i].SSGS) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 = Number(data[i].VALUE);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 = Number(data[i].VALUE);
						// 	break;
					default:
						break;
				}
			}

		}
		var thisMonthArr = [], //"当月电力故障"
			lastMontArr = []; ////"上月电力故障"
		thisMonthArr[0] = heXinQu;
		thisMonthArr[1] = puDong;
		thisMonthArr[2] = shiQu;
		thisMonthArr[3] = shiBei;
		thisMonthArr[4] = shiNan;
		thisMonthArr[5] = jiaDing;
		thisMonthArr[6] = songJiang;
		thisMonthArr[7] = qingPu;
		thisMonthArr[8] = fengXian;
		thisMonthArr[9] = jinShan;
		thisMonthArr[10] = chongMing;
		thisMonthArr[11] = changXing;

		lastMontArr[0] = heXinQu1;
		//		lastMontArr[0]=200;
		lastMontArr[1] = puDong1;
		lastMontArr[2] = shiQu1;
		lastMontArr[3] = shiBei1;
		lastMontArr[4] = shiNan1;
		lastMontArr[5] = jiaDing1;
		lastMontArr[6] = songJiang1;
		lastMontArr[7] = qingPu1;
		lastMontArr[8] = fengXian1;
		lastMontArr[9] = jinShan1;
		lastMontArr[10] = chongMing1;
		lastMontArr[11] = changXing1;

		Popup_pwqxfx.setData({
			gzqxhb: { //分布统计-故障抢修环比
				'当月非电力故障': thisMonthArr,
				'上月非电力故障': lastMontArr
			},
		});
        var thisTotal = 0;var lastTotal = 0;
		for(i = 0;i <thisMonthArr.length;i++){
        	thisTotal += thisMonthArr[i];
        }
		for(i = 0;i <lastMontArr.length;i++){
        	lastTotal += lastMontArr[i];
       }
       $("#fd1").html(thisTotal);$("#fd2").html(lastTotal);
	}

	var tmp_ssgs = '-1';
	BDZT_GETQWYXJKTJ_GDFW(dealData1, tmp_ssgs, kssj, jssj, 6); //1 用户报修 6欠费付电(欠费停电)
	BDZT_GETQWYXJKTJ_GDFW(dealData2, tmp_ssgs, kssj, jssj, 2); //电力故障
	BDZT_GETQWYXJKTJ_GDFW(dealData3, tmp_ssgs, kssj, jssj, 3); //非电力故障
}

/**
 * 供电服务趋势分析
 * @param {Object} SSGS
 * @param {Object} year
 */
function bindGongDianFuWu_QuShiFenXi(SSGS, year) {

	function dealDataYHBX1_12(res) { //用户报修1-12月回调
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var m = t(cm);
		var lm = t(cm);
		for(var i = 0; i < data.length; i++) {
//			if(data[i].SSGS != "8a812897493378a00149567740676661") {

				switch(data[i].NY) {
					case year + '01': //
						m[0] += Number(data[i].VALUE);
						break;
					case year + '02': //
						m[1] += Number(data[i].VALUE);
						break;
					case year + '03': //
						m[2] += Number(data[i].VALUE);
						break;
					case year + '04': //
						m[3] += Number(data[i].VALUE);
						break;
					case year + '05': //
						m[4] += Number(data[i].VALUE);
						break;
					case year + '06': //
						m[5] += Number(data[i].VALUE);
						break;
					case year + '07': //
						m[6] += Number(data[i].VALUE);
						break;
					case year + '08': //
						m[7] += Number(data[i].VALUE);
						break;
					case year + '09': //
						m[8] += Number(data[i].VALUE);
						break;
					case year + '10': //
						m[9] += Number(data[i].VALUE);
						break;
					case year + '11': //
						m[10] += Number(data[i].VALUE);
						break;
					case year + '12': //
						m[11] += Number(data[i].VALUE);
						break;
					case lastYear + '01': //
						lm[0] += Number(data[i].VALUE);
						break;
					case lastYear + '02': //
						lm[1] += Number(data[i].VALUE);
						break;
					case lastYear + '03': //
						lm[2] += Number(data[i].VALUE);
						break;
					case lastYear + '04': //
						lm[3] += Number(data[i].VALUE);
						break;
					case lastYear + '05': //
						lm[4] += Number(data[i].VALUE);
						break;
					case lastYear + '06': //
						lm[5] += Number(data[i].VALUE);
						break;
					case lastYear + '07': //
						lm[6] += Number(data[i].VALUE);
						break;
					case lastYear + '08': //
						lm[7] += Number(data[i].VALUE);
						break;
					case lastYear + '09': //
						lm[8] += Number(data[i].VALUE);
						break;
					case lastYear + '10': //
						lm[9] += Number(data[i].VALUE);
						break;
					case lastYear + '11': //
						lm[10] += Number(data[i].VALUE);
						break;
					case lastYear + '12': //
						lm[11] += Number(data[i].VALUE);
						break;
					default:
						break;
				}
//			}
		}
		console.log(year)
		if(year	=='2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			if(nowMonth==0){
				nowMonth = 12;
			}
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
		}


		Popup_pwqxfx.setData({ //趋势分析-用户报修-当年
			yhbx: {
				curYear: m,
				lastYear: lm
			},
		});
	}

	function dealDataDLGZ1_12(res) { //电力故障1-12月回调
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var m = t(cm);
		var lm = t(cm);
		for(var i = 0; i < data.length; i++) {
//			if(data[i].SSGS != "8a812897493378a00149567740676661") {
				switch(data[i].NY) {
					case year + '01': //
						m[0] += Number(data[i].VALUE);
						break;
					case year + '02': //
						m[1] += Number(data[i].VALUE);
						break;
					case year + '03': //
						m[2] += Number(data[i].VALUE);
						break;
					case year + '04': //
						m[3] += Number(data[i].VALUE);
						break;
					case year + '05': //
						m[4] += Number(data[i].VALUE);
						break;
					case year + '06': //
						m[5] += Number(data[i].VALUE);
						break;
					case year + '07': //
						m[6] += Number(data[i].VALUE);
						break;
					case year + '08': //
						m[7] += Number(data[i].VALUE);
						break;
					case year + '09': //
						m[8] += Number(data[i].VALUE);
						break;
					case year + '10': //
						m[9] += Number(data[i].VALUE);
						break;
					case year + '11': //
						m[10] += Number(data[i].VALUE);
						break;
					case year + '12': //
						m[11] += Number(data[i].VALUE);
						break;
					case lastYear + '01': //
						lm[0] += Number(data[i].VALUE);
						break;
					case lastYear + '02': //
						lm[1] += Number(data[i].VALUE);
						break;
					case lastYear + '03': //
						lm[2] += Number(data[i].VALUE);
						break;
					case lastYear + '04': //
						lm[3] += Number(data[i].VALUE);
						break;
					case lastYear + '05': //
						lm[4] += Number(data[i].VALUE);
						break;
					case lastYear + '06': //
						lm[5] += Number(data[i].VALUE);
						break;
					case lastYear + '07': //
						lm[6] += Number(data[i].VALUE);
						break;
					case lastYear + '08': //
						lm[7] += Number(data[i].VALUE);
						break;
					case lastYear + '09': //
						lm[8] += Number(data[i].VALUE);
						break;
					case lastYear + '10': //
						lm[9] += Number(data[i].VALUE);
						break;
					case lastYear + '11': //
						lm[10] += Number(data[i].VALUE);
						break;
					case lastYear + '12': //
						lm[11] += Number(data[i].VALUE);
						break;
					default:
						break;
				}
//			}
		}
		if(year=='2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			if(nowMonth==0){
				nowMonth = 12;
			}
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
		}
		Popup_pwqxfx.setData({ //趋势分析-用户报修-当年
			dlgz: {
				curYear: m,
				lastYear: lm
			},
		});

	}

	function dealDataFDLGZ1_12(res) { //非电力故障当年上年1-12月回调
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var m = t(cm);
		var lm = t(cm);
		for(var i = 0; i < data.length; i++) {
//			if(data[i].SSGS != "8a812897493378a00149567740676661") {
				switch(data[i].NY) {
					case year + '01': //
						m[0] += Number(data[i].VALUE);
						break;
					case year + '02': //
						m[1] += Number(data[i].VALUE);
						break;
					case year + '03': //
						m[2] += Number(data[i].VALUE);
						break;
					case year + '04': //
						m[3] += Number(data[i].VALUE);
						break;
					case year + '05': //
						m[4] += Number(data[i].VALUE);
						break;
					case year + '06': //
						m[5] += Number(data[i].VALUE);
						break;
					case year + '07': //
						m[6] += Number(data[i].VALUE);
						break;
					case year + '08': //
						m[7] += Number(data[i].VALUE);
						break;
					case year + '09': //
						m[8] += Number(data[i].VALUE);
						break;
					case year + '10': //
						m[9] += Number(data[i].VALUE);
						break;
					case year + '11': //
						m[10] += Number(data[i].VALUE);
						break;
					case year + '12': //
						m[11] += Number(data[i].VALUE);
						break;
					case lastYear + '01': //
						lm[0] += Number(data[i].VALUE);
						break;
					case lastYear + '02': //
						lm[1] += Number(data[i].VALUE);
						break;
					case lastYear + '03': //
						lm[2] += Number(data[i].VALUE);
						break;
					case lastYear + '04': //
						lm[3] += Number(data[i].VALUE);
						break;
					case lastYear + '05': //
						lm[4] += Number(data[i].VALUE);
						break;
					case lastYear + '06': //
						lm[5] += Number(data[i].VALUE);
						break;
					case lastYear + '07': //
						lm[6] += Number(data[i].VALUE);
						break;
					case lastYear + '08': //
						lm[7] += Number(data[i].VALUE);
						break;
					case lastYear + '09': //
						lm[8] += Number(data[i].VALUE);
						break;
					case lastYear + '10': //
						lm[9] += Number(data[i].VALUE);
						break;
					case lastYear + '11': //
						lm[10] += Number(data[i].VALUE);
						break;
					case lastYear + '12': //
						lm[11] += Number(data[i].VALUE);
						break;
					default:
						break;
				}
//			}
		}
		if(year =='2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			if(nowMonth==0){
				nowMonth = 12;
			}
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
		}


		Popup_pwqxfx.setData({ //趋势分析-用户报修-当年
			fdlgz: {
				curYear: m,
				lastYear: lm
			},
		});
	}

	var lastYear = year - 1;
	var pjxfsjThisYear = [];
	var pjxfsjLastYear = [];

	var pjddsjThisYear = [];
	var pjddsjLastYear = [];


	function dealDataPJDDSJ1_12(res) { //平均到达时间当年上年1-12月回调

		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var m = t(cm);
		var lm = t(cm);
		for(var i = 0; i < data.length; i++) {
			switch(data[i].NY) {
				case year + '01': //
					m[0] = Number(data[i].VALUE);
					break;
				case year + '02': //
					m[1] = Number(data[i].VALUE);
					break;
				case year + '03': //
					m[2] = Number(data[i].VALUE);
					break;
				case year + '04': //
					m[3] = Number(data[i].VALUE);
					break;
				case year + '05': //
					m[4] = Number(data[i].VALUE);
					break;
				case year + '06': //
					m[5] = Number(data[i].VALUE);
					break;
				case year + '07': //
					m[6] = Number(data[i].VALUE);
					break;
				case year + '08': //
					m[7] = Number(data[i].VALUE);
					break;
				case year + '09': //
					m[8] = Number(data[i].VALUE);
					break;
				case year + '10': //
					m[9] = Number(data[i].VALUE);
					break;
				case year + '11': //
					m[10] = Number(data[i].VALUE);
					break;
				case year + '12': //
					m[11] = Number(data[i].VALUE);
					break;
				case lastYear + '01': //
					lm[0] = Number(data[i].VALUE);
					break;
				case lastYear + '02': //
					lm[1] = Number(data[i].VALUE);
					break;
				case lastYear + '03': //
					lm[2] = Number(data[i].VALUE);
					break;
				case lastYear + '04': //
					lm[3] = Number(data[i].VALUE);
					break;
				case lastYear + '05': //
					lm[4] = Number(data[i].VALUE);
					break;
				case lastYear + '06': //
					lm[5] = Number(data[i].VALUE);
					break;
				case lastYear + '07': //
					lm[6] = Number(data[i].VALUE);
					break;
				case lastYear + '08': //
					lm[7] = Number(data[i].VALUE);
					break;
				case lastYear + '09': //
					lm[8] = Number(data[i].VALUE);
					break;
				case lastYear + '10': //
					lm[9] = Number(data[i].VALUE);
					break;
				case lastYear + '11': //
					lm[10] = Number(data[i].VALUE);
					break;
				case lastYear + '12': //
					lm[11] = Number(data[i].VALUE);
					break;
				default:
					break;
			}
		}
		pjddsjThisYear = m;
		pjddsjLastYear = lm;

		function dealDataPJDDSJShangHai1_12(res) { //平均到达时间当年上年1-12月回调 上海公司
			if(!res.data) {
				res.data = [];
			}
			var data = res.data;
			var m = t(cm);
			var lm = t(cm);
			for(var i = 0; i < data.length; i++) {
				switch(data[i].NY) {
					case year + '01': //
						m[0] = Number(data[i].VALUE);
						break;
					case year + '02': //
						m[1] = Number(data[i].VALUE);
						break;
					case year + '03': //
						m[2] = Number(data[i].VALUE);
						break;
					case year + '04': //
						m[3] = Number(data[i].VALUE);
						break;
					case year + '05': //
						m[4] = Number(data[i].VALUE);
						break;
					case year + '06': //
						m[5] = Number(data[i].VALUE);
						break;
					case year + '07': //
						m[6] = Number(data[i].VALUE);
						break;
					case year + '08': //
						m[7] = Number(data[i].VALUE);
						break;
					case year + '09': //
						m[8] = Number(data[i].VALUE);
						break;
					case year + '10': //
						m[9] = Number(data[i].VALUE);
						break;
					case year + '11': //
						m[10] = Number(data[i].VALUE);
						break;
					case year + '12': //
						m[11] = Number(data[i].VALUE);
						break;
					case lastYear + '01': //
						lm[0] = Number(data[i].VALUE);
						break;
					case lastYear + '02': //
						lm[1] = Number(data[i].VALUE);
						break;
					case lastYear + '03': //
						lm[2] = Number(data[i].VALUE);
						break;
					case lastYear + '04': //
						lm[3] = Number(data[i].VALUE);
						break;
					case lastYear + '05': //
						lm[4] = Number(data[i].VALUE);
						break;
					case lastYear + '06': //
						lm[5] = Number(data[i].VALUE);
						break;
					case lastYear + '07': //
						lm[6] = Number(data[i].VALUE);
						break;
					case lastYear + '08': //
						lm[7] = Number(data[i].VALUE);
						break;
					case lastYear + '09': //
						lm[8] = Number(data[i].VALUE);
						break;
					case lastYear + '10': //
						lm[9] = Number(data[i].VALUE);
						break;
					case lastYear + '11': //
						lm[10] = Number(data[i].VALUE);
						break;
					case lastYear + '12': //
						lm[11] = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}

        var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
        if(nowMonth==0){
				nowMonth = 12;
			}
        if(year=='2019'){

        	for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
        }


			Popup_pwqxfx.setData({ //趋势分析-平均到达时间
				pjddsj: {
					"当年": pjddsjThisYear,
					"上年": pjddsjLastYear,
					"上海公司当年": m,
					"上海公司上年": lm,
				},
			});


		}
		if(year == '2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			if(nowMonth==0){
				nowMonth = 12;
			}
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
		}

		if(SSGS == '8a812897493378a00149567740676661') {
			Popup_pwqxfx.setData({ //趋势分析-平均到达时间
				pjddsj: {
					"当年": m,
					"上年": lm
				},
			});
		} else {
			BDZT_GETQWYXJKTJ_GDFW(dealDataPJDDSJShangHai1_12, "8a812897493378a00149567740676661", startDate, endDate, 4); //平均到达时间当年上年1-12月
		}


	}

	function dealDataPJXFSJ1_12(res) { //平均修复时间当年上年1-12月回调 上海公司除外
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var m = t(cm);
		var lm = t(cm);
		for(var i = 0; i < data.length; i++) {
			switch(data[i].NY) {
				case year + '01': //
					m[0] = Number(data[i].VALUE);
					break;
				case year + '02': //
					m[1] = Number(data[i].VALUE);
					break;
				case year + '03': //
					m[2] = Number(data[i].VALUE);
					break;
				case year + '04': //
					m[3] = Number(data[i].VALUE);
					break;
				case year + '05': //
					m[4] = Number(data[i].VALUE);
					break;
				case year + '06': //
					m[5] = Number(data[i].VALUE);
					break;
				case year + '07': //
					m[6] = Number(data[i].VALUE);
					break;
				case year + '08': //
					m[7] = Number(data[i].VALUE);
					break;
				case year + '09': //
					m[8] = Number(data[i].VALUE);
					break;
				case year + '10': //
					m[9] = Number(data[i].VALUE);
					break;
				case year + '11': //
					m[10] = Number(data[i].VALUE);
					break;
				case year + '12': //
					m[11] = Number(data[i].VALUE);
					break;
				case lastYear + '01': //
					lm[0] = Number(data[i].VALUE);
					break;
				case lastYear + '02': //
					lm[1] = Number(data[i].VALUE);
					break;
				case lastYear + '03': //
					lm[2] = Number(data[i].VALUE);
					break;
				case lastYear + '04': //
					lm[3] = Number(data[i].VALUE);
					break;
				case lastYear + '05': //
					lm[4] = Number(data[i].VALUE);
					break;
				case lastYear + '06': //
					lm[5] = Number(data[i].VALUE);
					break;
				case lastYear + '07': //
					lm[6] = Number(data[i].VALUE);
					break;
				case lastYear + '08': //
					lm[7] = Number(data[i].VALUE);
					break;
				case lastYear + '09': //
					lm[8] = Number(data[i].VALUE);
					break;
				case lastYear + '10': //
					lm[9] = Number(data[i].VALUE);
					break;
				case lastYear + '11': //
					lm[10] = Number(data[i].VALUE);
					break;
				case lastYear + '12': //
					lm[11] = Number(data[i].VALUE);
					break;
				default:
					break;
			}
		}
		pjxfsjThisYear = m;
		pjxfsjLastYear = lm;

		function dealDataPJXFSJ1ShangHai_12(res) { //平均修复时间当年上年1-12月回调 上海公司除
			if(!res.data) {
				res.data = [];
			}
			var data = res.data;
			var m = t(cm);
			var lm = t(cm);
			for(var i = 0; i < data.length; i++) {
				switch(data[i].NY) {
					case year + '01': //
						m[0] = Number(data[i].VALUE);
						break;
					case year + '02': //
						m[1] = Number(data[i].VALUE);
						break;
					case year + '03': //
						m[2] = Number(data[i].VALUE);
						break;
					case year + '04': //
						m[3] = Number(data[i].VALUE);
						break;
					case year + '05': //
						m[4] = Number(data[i].VALUE);
						break;
					case year + '06': //
						m[5] = Number(data[i].VALUE);
						break;
					case year + '07': //
						m[6] = Number(data[i].VALUE);
						break;
					case year + '08': //
						m[7] = Number(data[i].VALUE);
						break;
					case year + '09': //
						m[8] = Number(data[i].VALUE);
						break;
					case year + '10': //
						m[9] = Number(data[i].VALUE);
						break;
					case year + '11': //
						m[10] = Number(data[i].VALUE);
						break;
					case year + '12': //
						m[11] = Number(data[i].VALUE);
						break;
					case lastYear + '01': //
						lm[0] = Number(data[i].VALUE);
						break;
					case lastYear + '02': //
						lm[1] = Number(data[i].VALUE);
						break;
					case lastYear + '03': //
						lm[2] = Number(data[i].VALUE);
						break;
					case lastYear + '04': //
						lm[3] = Number(data[i].VALUE);
						break;
					case lastYear + '05': //
						lm[4] = Number(data[i].VALUE);
						break;
					case lastYear + '06': //
						lm[5] = Number(data[i].VALUE);
						break;
					case lastYear + '07': //
						lm[6] = Number(data[i].VALUE);
						break;
					case lastYear + '08': //
						lm[7] = Number(data[i].VALUE);
						break;
					case lastYear + '09': //
						lm[8] = Number(data[i].VALUE);
						break;
					case lastYear + '10': //
						lm[9] = Number(data[i].VALUE);
						break;
					case lastYear + '11': //
						lm[10] = Number(data[i].VALUE);
						break;
					case lastYear + '12': //
						lm[11] = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}
		if(year=='2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			if(nowMonth==0){
				nowMonth = 12;
			}
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
		}

			Popup_pwqxfx.setData({ ////趋势分析-平均修复时间
				pjxfsj: {
					"当年": pjxfsjThisYear,
					"上年": pjxfsjLastYear,
					"上海公司当年": m,
					"上海公司上年": lm
				},
			});
		}
		if(year =='2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			if(nowMonth==0){
				nowMonth = 12;
			}
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
		}

		if(SSGS == '8a812897493378a00149567740676661') {
			Popup_pwqxfx.setData({ //趋势分析-平均修复时间
				pjxfsj: {
					"当年": m,
					"上年": lm
				},
			});
		} else {
			BDZT_GETQWYXJKTJ_GDFW(dealDataPJXFSJ1ShangHai_12, "8a812897493378a00149567740676661", startDate, endDate, 5); //平均修复时间当年上年1-12月
		}
	}

	endDate = year + '12';
	tmp = year - 1;
	startDate = tmp + '01';
	if(SSGS == null || SSGS == '') {
		SSGS = -1;
	}

	BDZT_GETQWYXJKTJ_GDFW(dealDataYHBX1_12, SSGS, startDate, endDate, 1); ////用户报修1-12月
	BDZT_GETQWYXJKTJ_GDFW(dealDataDLGZ1_12, SSGS, startDate, endDate, 2); //电力故障1-12月
	BDZT_GETQWYXJKTJ_GDFW(dealDataFDLGZ1_12, SSGS, startDate, endDate, 3); //非电力故障当年上年1-12月

	BDZT_GETQWYXJKTJ_GDFW(dealDataPJDDSJ1_12, SSGS, startDate, endDate, 4); //平均到达时间当年上年1-12月
	BDZT_GETQWYXJKTJ_GDFW(dealDataPJXFSJ1_12, SSGS, startDate, endDate, 5); //平均修复时间当年上年1-12月

}

/**
 * 上海公司平均到达时长环比图表
 */
function bindPingjunDaodaShijianHuanbi(kssj, jssj) {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //当月平均到达时间
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //上月平均到达时间
		for(var i = 0; i < data.length; i++) {

			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].NY == jssj) {
					heXinQu = Number(data[i].VALUE);
					continue;
				}
				if(data[i].NY == kssj) {
					heXinQu1 = Number(data[i].VALUE);
					continue;
				}
			}

			if(data[i].NY == jssj) {
				switch(data[i].SSGS) {
					// case 'JBH-HXQ': //核心区
					// 	heXinQu = Number(data[i].VALUE);
					// 	break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}
			if(data[i].NY == kssj) {
				switch(data[i].SSGS) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 = Number(data[i].VALUE);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 = Number(data[i].VALUE);
						// 	break;
					default:
						break;
				}
			}

		}
		var thisMonthArr = [],
			lastMontArr = [];
		thisMonthArr[0] = heXinQu;
		thisMonthArr[1] = puDong;
		thisMonthArr[2] = shiQu;
		thisMonthArr[3] = shiBei;
		thisMonthArr[4] = shiNan;
		thisMonthArr[5] = jiaDing;
		thisMonthArr[6] = songJiang;
		thisMonthArr[7] = qingPu;
		thisMonthArr[8] = fengXian;
		thisMonthArr[9] = jinShan;
		thisMonthArr[10] = chongMing;
		thisMonthArr[11] = changXing;

		lastMontArr[0] = heXinQu1;
		lastMontArr[1] = puDong1;
		lastMontArr[2] = shiQu1;
		lastMontArr[3] = shiBei1;
		lastMontArr[4] = shiNan1;
		lastMontArr[5] = jiaDing1;
		lastMontArr[6] = songJiang1;
		lastMontArr[7] = qingPu1;
		lastMontArr[8] = fengXian1;
		lastMontArr[9] = jinShan1;
		lastMontArr[10] = chongMing1;
		lastMontArr[11] = changXing1;

		Popup_pwqxfx.setData({ ////给分布统计-平均到达时间环比图表赋值
			pjddsjhb: { //平均到达时间环比
				curMonth: thisMonthArr,
				lastMonth: lastMontArr
			},
		});
	}

	var tmp_ssgs = '-1';
	BDZT_GETQWYXJKTJ_GDFW(dealData, tmp_ssgs, kssj, jssj, 4); //查询平均到达时长
}

/**
 * 上海公司平均修复时长环比图表
 */
function bindPingjunXiufuShijianHuanbi(kssj, jssj) {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //当月平均到达时间
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //上月平均到达时间
		for(var i = 0; i < data.length; i++) {

			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].NY == jssj) {
					heXinQu = Number(data[i].VALUE);
					continue;
				}
				if(data[i].NY == kssj) {
					heXinQu1 = Number(data[i].VALUE);
					continue;
				}
			}

			if(data[i].NY == jssj) {
				switch(data[i].SSGS) {
					// case 'JBH-HXQ': //核心区
					// 	heXinQu = Number(data[i].VALUE);
					// 	break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing = Number(data[i].VALUE);
						break;
					default:
						break;
				}
			}
			if(data[i].NY == kssj) {
				switch(data[i].SSGS) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 = Number(data[i].VALUE);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 = Number(data[i].VALUE);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 = Number(data[i].VALUE);
						// 	break;
					default:
						break;
				}
			}

		}
		var thisMonthArr = [],
			lastMontArr = [];
		thisMonthArr[0] = heXinQu;
		thisMonthArr[1] = puDong;
		thisMonthArr[2] = shiQu;
		thisMonthArr[3] = shiBei;
		thisMonthArr[4] = shiNan;
		thisMonthArr[5] = jiaDing;
		thisMonthArr[6] = songJiang;
		thisMonthArr[7] = qingPu;
		thisMonthArr[8] = fengXian;
		thisMonthArr[9] = jinShan;
		thisMonthArr[10] = chongMing;
		thisMonthArr[11] = changXing;

		lastMontArr[0] = heXinQu1;
		lastMontArr[1] = puDong1;
		lastMontArr[2] = shiQu1;
		lastMontArr[3] = shiBei1;
		lastMontArr[4] = shiNan1;
		lastMontArr[5] = jiaDing1;
		lastMontArr[6] = songJiang1;
		lastMontArr[7] = qingPu1;
		lastMontArr[8] = fengXian1;
		lastMontArr[9] = jinShan1;
		lastMontArr[10] = chongMing1;
		lastMontArr[11] = changXing1;

		Popup_pwqxfx.setData({ ////给分布统计-平均修复时间环比图表赋值
			pjxfsjhb: { //平均修复时间环比
				curMonth: thisMonthArr,
				lastMonth: lastMontArr
			},
		});
	}

	var tmp_ssgs = '-1';
	BDZT_GETQWYXJKTJ_GDFW(dealData, tmp_ssgs, kssj, jssj, 5); //查询平均修复时长
}

/**
 * 处理用户报修饼图图表
 */
function bindGongDianFuwuData(SSGS) {
	//总体抢修情况（按来源）
	//处理电力故障、非电力故障数据绑定
	function dealData(res) {
		if(!res.data) {
			res.data = [];
			pjddsj95598(0); ////抢修效率-平均到达时间
			pjddsj12345(0); //抢修效率-平均修复时间
		}
		var data = res.data;
		var val12345 = 0;
		var val95598 = 0;

		var valDLGZ12345 = 0; //12345电力故障总数
		var valFDLGZ12345 = 0; //13245非电力故障总数

		var valDLGZ95598 = 0; //95598电力故障总数
		var valFDLGZ95598 = 0; //95598非电力故障总数

		var valDLGZYiChuli95598 = 0; //95598电力故障总数已处理
		var valDLGZWeiChuli95598 = 0; //95598电力故障总数未处理

		var valFDLGZYiChuli95598 = 0; //95598非电力故障总数已处理
		var valFDLGZWeiChuli95598 = 0; //95598非电力故障总数未处理

		var valDLGZYiChuli12345 = 0; //13245电力故障总数已处理
		var valDLGZWeiChuli12345 = 0; //12345电力故障总数未处理

		var valFDLGZYiChuli12345 = 0; //13245非电力故障总数已处理
		var valFDLGZWeiChuli12345 = 0; //12345非电力故障总数未处理

		var pjddsj = 0;
		var pjxfsj = 0;
		var valTotoal = 0;

		for(var i = 0; i < data.length; i++) {
			if(data[i].LY == '04') { //95598
				val95598 += Number(data[i].ZS); //得到95598的用户报修
				if(data[i].GZFL == '电力故障') { //电力故障
					valDLGZ95598 += Number(data[i].ZS);
					valDLGZYiChuli95598 += Number(data[i].YCLS);
					valDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}
				if(data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ95598 += Number(data[i].ZS);
					valFDLGZYiChuli95598 += Number(data[i].YCLS);
					valFDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}

			}
			if(data[i].LY == '09') { //12345
				val12345 += Number(data[i].ZS);
				if(data[i].GZFL == '电力故障') { //电力故障
					valDLGZ12345 += Number(data[i].ZS);
					valDLGZYiChuli12345 += Number(data[i].YCLS);
					valDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
				if(data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ12345 += Number(data[i].ZS);
					valFDLGZYiChuli12345 += Number(data[i].YCLS);
					valFDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
			}

			pjddsj = pjddsj + Number(data[i].PJDDSJ);
			pjxfsj = pjxfsj + Number(data[i].PJXFSJ);

		}
		valTotoal = val12345 + val95598;
		//		shishijiance1(valTotoal, val12345, val95598); //给用户报修总数赋值
		var countNum = val95598-val12345>0?val95598*2.4:val12345*2.4
		shishijianceBiao1(valDLGZWeiChuli95598, valDLGZYiChuli95598,countNum);
		shishijianceBiao2(valDLGZWeiChuli12345, valDLGZYiChuli12345,countNum);
		shishijianceBiao3(valFDLGZWeiChuli95598, valFDLGZYiChuli95598,countNum);
		shishijianceBiao4(valFDLGZWeiChuli12345, valFDLGZYiChuli12345,countNum);
		$('#val12345').text(val12345); //给12345赋值
		$('#val95598').text(val95598); //给95598赋值
		yongHu(val95598,val12345);

		if(data.length > 0) {
			pjddsj95598((pjddsj / data.length).toFixed(1)); ////抢修效率-平均到达时间
			pjddsj12345((pjxfsj / data.length).toFixed(1)); //抢修效率-平均修复时间
		}

	}
	if(SSGS == null || SSGS == '') {
		var SSGS = -1;
	}
	BDZT_GETZTQX_LY_1(dealData, SSGS);
}

/*

 * 配网抢修实时监测-----用户报修
 *
 *
 * */
function yongHu(val1,val2){
	 var count = val1-val2>0?val1:val2
	 var yonghu = {
        series: [
        	{
        		type:'pie',
        		radius:['70%','80%'],
        		label:{
        			show:false
        		},
        		startAngle:180,
        		hoverAnimation:false,
        		data:[
        			{
        				value:val1,
        				name:'95598',
        				itemStyle:{
							color:'#12b4ff'
						}
        			},
        			{
        				value:val2,
        				name:'12345',
        				itemStyle:{
							color:'#0060e5'
						},
        			},
        			{
        				value:(count*2.4),
        				name:'总数',
        				itemStyle:{
//							color:'rgba(188, 188, 188, 0.1)'
							color:'#082f45'
						},
        			},

        		]
        	}
        ],
       }
	 var yonghubaoxiutu = echarts.init(document.getElementById('yonghu'));
 	 yonghubaoxiutu.setOption(yonghu);
 }







/**
 * 绑定抢修分布图表数据
 */
function bindQiangxiufenbuData() {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var totalVal = 0;
		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //电力故障数
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 00; //非电力故障数
		var shiQu2 = shiBei2 = shiNan2 = puDong2 = fengXian2 = jiaDing2 = qingPu2 = songJiang2 = jinShan2 = gongDian2 = jianXiu2 = chongMing2 = changXing2 = heXinQu2 = 0; //已处理
		var shiQu3 = shiBei3 = shiNan3 = puDong3 = fengXian3 = jiaDing3 = qingPu3 = songJiang3 = jinShan3 = gongDian3 = jianXiu3 = chongMing3 = changXing3 = heXinQu3 = 0; //处理中
		for(var i = 0; i < data.length; i++) {
			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].GZFL == '电力故障') {
					heXinQu += Number(data[i].ZS);
					continue;
				}
				if(data[i].GZFL == '非电力故障') {
					heXinQu1 += Number(data[i].ZS);
					continue;
				}
				heXinQu2+= Number(data[i].YCLS);
				heXinQu3+= Number(data[i].ZCLS);
			}

			if(data[i].GZFL == '电力故障') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu += Number(data[i].ZS);
						shiQu2+= Number(data[i].YCLS);
				        shiQu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei += Number(data[i].ZS);
						shiBei2+= Number(data[i].YCLS);
				        shiBei3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan += Number(data[i].ZS);
						shiNan2+= Number(data[i].YCLS);
				        shiNan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong += Number(data[i].ZS);
						puDong2+= Number(data[i].YCLS);
				        puDong3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian += Number(data[i].ZS);
						fengXian2+= Number(data[i].YCLS);
				        fengXian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing += Number(data[i].ZS);
						jiaDing2+= Number(data[i].YCLS);
				        jiaDing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu += Number(data[i].ZS);
						qingPu2+= Number(data[i].YCLS);
				        qingPu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang += Number(data[i].ZS);
						songJiang2+= Number(data[i].YCLS);
				        songJiang3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan += Number(data[i].ZS);
						jinShan2+= Number(data[i].YCLS);
				        jinShan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian += Number(data[i].ZS);
						gongDian2+= Number(data[i].YCLS);
				        gongDian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu += Number(data[i].ZS);
						jianXiu2+= Number(data[i].YCLS);
				        jianXiu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing += Number(data[i].ZS);
						chongMing2+= Number(data[i].YCLS);
				        chongMing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing += Number(data[i].ZS);
						changXing2+= Number(data[i].YCLS);
				        changXing3+= Number(data[i].ZCLS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}
			if(data[i].GZFL == '非电力故障') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 += Number(data[i].ZS);
						shiQu2+= Number(data[i].YCLS);
				        shiQu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 += Number(data[i].ZS);
						shiBei2+= Number(data[i].YCLS);
				        shiBei3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 += Number(data[i].ZS);
						shiNan2+= Number(data[i].YCLS);
				        shiNan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 += Number(data[i].ZS);
						puDong2+= Number(data[i].YCLS);
				        puDong3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 += Number(data[i].ZS);
						fengXian2+= Number(data[i].YCLS);
				        fengXian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 += Number(data[i].ZS);
						jiaDing2+= Number(data[i].YCLS);
				        jiaDing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 += Number(data[i].ZS);
						qingPu2+= Number(data[i].YCLS);
				        qingPu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 += Number(data[i].ZS);
						songJiang2+= Number(data[i].YCLS);
				        songJiang3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 += Number(data[i].ZS);
						jinShan2+= Number(data[i].YCLS);
				        jinShan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 += Number(data[i].ZS);
						gongDian2+= Number(data[i].YCLS);
				        gongDian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 += Number(data[i].ZS);
						jianXiu2+= Number(data[i].YCLS);
				        jianXiu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 += Number(data[i].ZS);
						chongMing2+= Number(data[i].YCLS);
				        chongMing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 += Number(data[i].ZS);
						changXing2+= Number(data[i].YCLS);
				        changXing3+= Number(data[i].ZCLS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}

		}

		function setQiangXiuFenBuZhuZhuangTu(objId, d, f) {
			if((d + f) > 0) {
				var tmpDRatio = d * 100 / (d + f + 50);
				var dRatio = tmpDRatio + '%';
				var tmpFRatio = f * 100 / (d + f + 50);
				var fRatio = tmpFRatio + '%';
			} else {
				var dRatio = '0%';
				var fRatio = '0%';
			}

			$('#' + objId).css('width', dRatio);
			$('#' + objId + '1').css('width', fRatio);
			$('#' + objId + 'Val').attr('data-dlgz', (d+f)); //data-dlgz
//			$('#' + objId + 'Val').attr('data-fdlgz', f); //data-fdlgz

		}

	function setQiangXiuFenBuZhuZhuangTu1(objId, d, f) {
			if((d + f) > 0) {
				var tmpDRatio = d * 100 / (d + f + 50);
				var dRatio = tmpDRatio + '%';
				var tmpFRatio = f * 100 / (d + f + 50);
				var fRatio = tmpFRatio + '%';
				var realRatio = d * 100 / (d + f);
				realRatio = realRatio.toFixed(1) + '%';
			} else {
				var dRatio = '0%';
				var fRatio = '0%';
			}

			$('#' + objId + '2').css('width', dRatio);
			$('#' + objId + '3').css('width', fRatio);
			$('#' + objId + 'Ycl').text(realRatio);

		}

		setQiangXiuFenBuZhuZhuangTu('shiQu', shiQu, shiQu1);
		setQiangXiuFenBuZhuZhuangTu('shiBei', shiBei, shiBei1);
		setQiangXiuFenBuZhuZhuangTu('shiNan', shiNan, shiNan1);
		setQiangXiuFenBuZhuZhuangTu('puDong', puDong, puDong1);
		setQiangXiuFenBuZhuZhuangTu('fengXian', fengXian, fengXian1);
		setQiangXiuFenBuZhuZhuangTu('jiaDing', jiaDing, jiaDing1);
		setQiangXiuFenBuZhuZhuangTu('qingPu', qingPu, qingPu1);
		setQiangXiuFenBuZhuZhuangTu('songJiang', songJiang, songJiang1);
		setQiangXiuFenBuZhuZhuangTu('jinShan', jinShan, jinShan1);
		setQiangXiuFenBuZhuZhuangTu('chongMing', chongMing, chongMing1);
		setQiangXiuFenBuZhuZhuangTu('changXing', changXing, changXing1);
		setQiangXiuFenBuZhuZhuangTu('heXinQu', heXinQu, heXinQu1);

		setQiangXiuFenBuZhuZhuangTu1('shiQu', shiQu2, shiQu3);
		setQiangXiuFenBuZhuZhuangTu1('shiBei', shiBei2, shiBei3);
		setQiangXiuFenBuZhuZhuangTu1('shiNan', shiNan2, shiNan3);
		setQiangXiuFenBuZhuZhuangTu1('puDong', puDong2, puDong3);
		setQiangXiuFenBuZhuZhuangTu1('fengXian', fengXian, fengXian3);
		setQiangXiuFenBuZhuZhuangTu1('jiaDing', jiaDing2, jiaDing3);
		setQiangXiuFenBuZhuZhuangTu1('qingPu', qingPu2, qingPu3);
		setQiangXiuFenBuZhuZhuangTu1('songJiang', songJiang2, songJiang3);
		setQiangXiuFenBuZhuZhuangTu1('jinShan', jinShan2, jinShan3);
		setQiangXiuFenBuZhuZhuangTu1('chongMing', chongMing2, chongMing3);
		setQiangXiuFenBuZhuZhuangTu1('changXing', changXing2, changXing3);
		setQiangXiuFenBuZhuZhuangTu1('heXinQu', heXinQu2, heXinQu3);

	}

	var SSGS = -1;
	BDZT_GETZTQX_LY_1(dealData, SSGS);
}

/**
 * 绑定紧急诉求饼状图表数据
 */
function bindJinjisuqiuData() {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var jubao = suqiu = 0; //举报、诉求工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for(var i = 0; i < data.length; i++) {
			if(data[i].FL == '举报') {
				jubao++;
				if(data[i].LY == '12345') {
					jubao12345++;
				}
				if(data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if(data[i].FL == '诉求') {
				suqiu++;
				if(data[i].LY == '12345') {
					suqiu12345++;
				}
				if(data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到举报和诉求工单的数量

		suQiuBingTu(suqiu, suqiu12345, suqiu95598);
		juBaoBingTu(jubao, jubao12345, jubao95598);

	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS);
}

/**
 * 绑定紧急诉求的柱状图数据
 */
function bindJinjisuqiuZhuZhuangTuData() {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //95598工单数
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //12345工单数
		for(var i = 0; i < data.length; i++) {
			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].LY == '95598') {
					heXinQu += Number(data[i].ZS);
					continue;
				}

				if(data[i].LY == '12345') {
					heXinQu1 += Number(data[i].ZS);
					continue;
				}

			}

			if(data[i].LY == '95598') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing += Number(data[i].ZS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}
			if(data[i].LY == '12345') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 += Number(data[i].ZS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}

		}

		// shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //95598工单数

		var arr95598 = [],
			arr12345 = [];

		arr95598[0] = heXinQu;
		arr95598[1] = puDong;
		arr95598[2] = shiQu;
		arr95598[3] = shiBei;
		arr95598[4] = shiNan;
		arr95598[5] = jiaDing;
		arr95598[6] = songJiang;
		arr95598[7] = qingPu;
		arr95598[8] = fengXian;
		arr95598[9] = jinShan;
		arr95598[10] = chongMing;
		arr95598[11] = changXing;

		arr12345[0] = heXinQu1;
		arr12345[1] = puDong1;
		arr12345[2] = shiQu1;
		arr12345[3] = shiBei1;
		arr12345[4] = shiNan1;
		arr12345[5] = jiaDing1;
		arr12345[6] = songJiang1;
		arr12345[7] = qingPu1;
		arr12345[8] = fengXian1;
		arr12345[9] = jinShan1;
		arr12345[10] = chongMing1;
		arr12345[11] = changXing1;

		// arr95598[0] = 1;
		// arr95598[1] = 3;
		// arr95598[2] = 1;
		// arr95598[3] = 3;
		// arr95598[4] = 10;
		// arr95598[5] = 2;
		// arr95598[6] = 56;
		// arr95598[7] = 2;
		// arr95598[8] = 3;
		// arr95598[9] = 2;
		// arr95598[10] = 1;
		// arr95598[11] = 1;
		//
		// arr12345[0] = 5;
		// arr12345[1] = 2;
		// arr12345[2] = 1;
		// arr12345[3] = 1;
		// arr12345[4] = 2;
		// arr12345[5] = 3;
		// arr12345[6] = 4;
		// arr12345[7] = 5;
		// arr12345[8] = 6;
		// arr12345[9] = 7;
		// arr12345[10] = 8;
		// arr12345[11] = 1;

		jinJiSuQiuZhuZhuangTu(arr95598, arr12345); //给柱状图赋值

	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS);
}