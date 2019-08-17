$(function() {
	 getWenDuData();

	// getYuJingZTBDData();
	// setInterval(getWenDuData,1000*60*30);

	initLeft();
	setInterval(initLeft, 1000 * 60 * 5);
})


function initLeft() {
	getFuHeData();
	getTaiQuJianCeData('-1', 'GZ');
	getTaiQuJianCeData('-1', 'ZZ');
	getTaiQuJianCeData('-1', 'DDY');
	getTaiQuJianCeData('-1', 'SXBPH');
	getYuJingZTBDData(); //预警状态
	bindGongDianFuwuData('8a812897493378a00149567740676661');
//	bindJinjisuqiuData();
	bindJinjisuqiuDataWeiChuLi();
	bindJinjisuqiuDataYiChuLi();
}

function getWenDuData() {
	$.ajax({
		//GETTQXX?SSGS=-1&KSSJ=2018-01-01&JSSJ=2018-09-01
		//TASK_TYPE=2为异常处理，3为紧急
		url: basepath + "interface/GETTQXX/0",
		type: 'get',
		dataType: 'json',
		success: function(data) {
			if (data.data && data.data.length > 0) {

				//        	$('#abnormal_deal_num').text(abnormal_deal_num);
				$('#wendu').text(data.data[0].TEMPERATURE);
				var hour = new Date().getHours();
				if (hour > 5 || hour < 18) {//这里的3d文件夹下的与jbhm文件夹下用的basepath用的应该是同一个才对，这里的basepath暂时写死为http://127.0.0.1:8080/pdpsc-app/
					$('#weather').attr("src",basepath +'ws_static/img/weather/day/'+data.data[0].DAY_PICTURE_URL);
				} else {
					$('#weather').attr("src",basepath +'ws_static/img/weather/night/icon_power.png'+data.data[0].NIGHT_PICTURE_URL);
				}
				$("#wendu").attr("title", data.data[0].WEATHER);

			}
		},
		error: function(data) {
			console.log(data);
		}
	});
}

function getFuHeData() {
	if (releaseFlag) {
		url = basepath + "idpqry/SBID/CUR/8a812897493378a00149567740676661/21/2";
	} else {
		url = "json/0.json";
	}
	$.ajax({
		//http://10.131.216.134:7889/pdpsc-app/idpqry/SBID/CUR/8a812897493378a00149567740676661/21/2
		//TASK_TYPE=2为异常处理，3为紧急
		// url: basepath + "idpqry/SBID/CUR/8a812897493378a00149567740676661/21/2",
		url: url,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			if (data.data.length > 0) {
				var value = parseInt(data.data[0].VALUE) / 1000000;
				var SSvalue = value.toFixed(1);
				$("#ShiShiFuHe").text(SSvalue + "MW");
				$("#FuHeCount").text(SSvalue + "MW");
				getFuHeList(SSvalue);
			}
		},
		error: function(data) {
			console.log(data);
		}
	});

	function getFuHeList(SSvalue) {
		var date = gettime();
		var time = date.year.toString() + date.month.toString() + date.day.toString();
		if(releaseFlag){
			url= basepath + "idpqry/SBID/HIS/8a812897493378a00149567740676661/21/2/" + time + "/" + time;
		}else{
			url="json/1.json";
		}
		$.ajax({
			//  http://10.131.216.134:7889/pdpsc-app/idpqry/SBID/HIS/8a812897493378a00149567740676661/21/2/20181005/20181005
			//TASK_TYPE=2为异常处理，3为紧急
			// url: basepath + "/idpqry/SBID/HIS/8a812897493378a00149567740676661/21/2/" + time + "/" + time,
			url: url,
			type: 'get',
			dataType: 'json',
			success: function(data) {
				if (data.data.length > 0) {
					var valueList = data.data[0].VALUE[0].VALUE;
					var maxValue = 0;
					var finalValue;
					var dataList = {};
					var XData = []; //
					var YData = []; //
					for (var i = 0; i < valueList.length; i++) {
						var time = valueList[i].T; //前一个温度
						var Val = (parseInt(valueList[i].V) / 1000000).toFixed(1); //前一个温度

						Val - maxValue >= 0 ? maxValue = Val : maxValue;

						XData.push(time);
						YData.push(Val);
					}
					dataList.time = XData;
					dataList.value = YData;
					load_body(dataList);//向负荷曲线中赋值
					maxValue - SSvalue >= 0 ? finalValue = maxValue : finalValue = SSvalue;
					$("#ZuiGaoFuHe").text(finalValue + "MW");
				} else {
					$("#ZuiGaoFuHe").text(SSvalue + "MW");
				}
			},
			error: function(data) {
				console.log(data);
			}
		});
	}

}

function load_body(data) {

	if (!data) {
		data = {
			time: ['0', '', '', '', '12', '', '', '', '24'],
			value: [180, 400, 89, 540, 260, 830, 710, 830, 710]
		}
	}
	var time = data.time;
	var value = data.value;
	var load_body = echarts.init(document.getElementById('load_body'));
	var color = ['#0587f2', '#00fe01', '#f39800', '#01dcd7'];
	var bgColor = ['rgba(5, 135, 242, 0.3)', 'rgba(0, 254, 1, 0.4)', 'rgba(243, 152, 0, 0.4)', 'rgba(1, 220, 215, 0.4)'];


	option = {
		xAxis: {
			type: 'category',
			// data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			data: time,
			axisLabel: {
				color: '#00ffff', //刻度线标签颜色
				fontSize: 24
			},
			splitLine: {
				show: true
			},
			axisLine:{
				lineStyle:{
					color:"#00ffff"
				}
			}
		},
		yAxis: {
			type: 'value',
			min: 0,
			max: 20000,
			axisLabel: {
				color: '#00ffff', //刻度线标签颜色
				fontSize: 24,
				formatter:'{value}MW'
			},
			boundaryGap: false,
			splitLine: {
				show: false
			},
			axisLine:{
				lineStyle:{
					color:"#00ffff"
				}
			}
		},
		series: {
			// data: [1000, 1800, 1500, 1300, 1200, 1500, 2000, 1800, 1500, 1300, 1200, 2000, 2200],
			data: value,
			type: 'line',
			symbol: 'none', //这句就是去掉点的
			smooth: true, //这句就是让曲线变平滑的
			itemStyle: {
				normal: {
					lineStyle: {
						width: 6, //折线宽度
						color: '#00f8f9'
						// (0,0,0,1,[
						//     { offset: 0, color: '#072c43' },
						//     { offset: 1, color: '#00f8f9' }
						// ])
					}
				}
			}
		}
	};

	load_body.setOption(option);
}

//获取时间的函数
function gettime() {

	var dateObj = {};
	var date = new Date();
	var year = date.getFullYear();
	var monthStr = date.getMonth() + 1;
	var dayStr = date.getDate();
	var hourStr = date.getHours();
	var minutesStr = date.getMinutes();
	var month = monthStr >= 10 ? monthStr : "0" + monthStr;
	var day = dayStr >= 10 ? dayStr : "0" + dayStr;
	var hour = hourStr >= 10 ? hourStr : "0" + hourStr;
	var minutes = minutesStr > 10 ? minutesStr : "0" + minutesStr;

	dateObj.year = year;
	dateObj.month = month;
	dateObj.day = day;
	dateObj.hour = hour;
	dateObj.minutes = minutes;

	return dateObj;
}


var KSSJ_NOW_YYYYMMDD = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000)); //昨天
var JSSJ_NOW_YYYYMMDD = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000)); //昨天
//var KSSJ_NOW = dateFtt("yyyy-MM-dd", new Date(new Date() - 24 * 60 * 60 * 1000)) + " 00:00:00"; //当天
var KSSJ_NOW = dateFtt("yyyy-MM-dd", new Date()) + " 00:00:00";//当天
var JSSJ_NOW = dateFtt("yyyy-MM-dd", new Date()) + " 23:59:59"; //当天

function dateFtt(fmt, date) {
	var o = {
		'M+': date.getMonth() + 1, //月份
		'd+': date.getDate(), //日
		'h+': date.getHours(), //小时
		'm+': date.getMinutes(), //分
		's+': date.getSeconds(), //秒
		'q+': Math.floor((date.getMonth() + 3) / 3), //季度
		S: date.getMilliseconds(), //毫秒
	};

	var fmtN = fmt;
	if (/(y+)/.test(fmtN)) {
		fmtN = fmtN.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
	}
	Object.keys(o).forEach(function(k) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmtN = fmtN.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k].toString()) : (("00" + o[k]).substr(o[k].toString()
				.length)));
		}
	});
	return fmtN;
}

/**
 * 全网运行监控统计-配网运行-台区监测
 */
function getTaiQuJianCeData(companyId, yclx) {
	// var sfhxq = companyId === "JBH-HXQ" ? "1" : "0";
	
	var dataParam = {
		"SSGS": companyId,
		"KSSJ": KSSJ_NOW_YYYYMMDD,
		"JSSJ": JSSJ_NOW_YYYYMMDD,
		"YCLX": yclx
	};
	if(releaseFlag){
		url= basepath + "interface/BDZT_GETDYYCMX/0";
	}else{
		url= "json/2.json";
	}
	
	$.ajax({
		// url: basepath + "interface/BDZT_GETDYYCMX/0",
		url: url,
		data: dataParam,
		type: 'get',
		dataType: 'json',
		async: false,
		success: function(result) {

			if (result.data) {
				var gznum = 0; //过载总数
				for (var i = 0; i < result.data.length; i++) {

					//过载
					if (yclx === 'GZ') {
						//gznum +=parseInt(result.data[i].DYLJGZ);
						if (parseInt(result.data[i].LXGZ) > 0) {
							gznum += 1;
						}
					}

					//重载
					if (yclx === 'ZZ') {
						if (parseInt(result.data[i].LXZZ) > 0) {
							gznum += 1;
						}
					}

					//低电压
					if (yclx === 'DDY') {
						if (parseInt(result.data[i].LXDDY) > 0) {
							gznum += 1;
						}
					}

					//三相不平衡
					if (yclx === 'SXBPH') {
						if (parseInt(result.data[i].LXSXBPH) > 0) {
							gznum += 1;
						}
					}
				}
			}

			if (yclx === 'GZ') {
				$("#tqjcguozai").text(gznum);
			}

			if (yclx === 'ZZ') {
				$("#tqjczhongzai").text(gznum);
			}

			if (yclx === 'DDY') {
//				$("#tqjcdidianya").text(gznum);
				$("#tqjcdidianya").text('0');
			}

			if (yclx === 'SXBPH') {
				$("#tqjcsxbph").text(gznum);
			}
		},
		error: function(data) {
			console.log(data);
		}
	});
}

/**
 * 处理用户报修饼图图表
 */
function bindGongDianFuwuData(SSGS) {
	//总体抢修情况（按来源）
	//处理电力故障、非电力故障数据绑定
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;
		// var val12345 = 0;
		// var val95598 = 0;

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

		var valTotoal = 0;

		for (var i = 0; i < data.length; i++) {
			if (data[i].LY == '04') { //95598
				// val95598 += Number(data[i].ZS); //得到95598的用户报修
				if (data[i].GZFL == '电力故障') { //电力故障
					valDLGZ95598 += Number(data[i].ZS);
					valDLGZYiChuli95598 += Number(data[i].YCLS);
					valDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}
				if (data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ95598 += Number(data[i].ZS);
					valFDLGZYiChuli95598 += Number(data[i].YCLS);
					valFDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}

			}
			if (data[i].LY == '09') { //12345
				// val12345 += Number(data[i].ZS);
				if (data[i].GZFL == '电力故障') { //电力故障
					valDLGZ12345 += Number(data[i].ZS);
					valDLGZYiChuli12345 += Number(data[i].YCLS);
					valDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
				if (data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ12345 += Number(data[i].ZS);
					valFDLGZYiChuli12345 += Number(data[i].YCLS);
					valFDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
			}

		}
		// valTotoal = val12345 + val95598;
		// shishijiance1(valTotoal, val12345, val95598); //给用户报修总数赋值
		// shishijianceBiao1(valDLGZWeiChuli95598, valDLGZYiChuli95598);

		shishijianceBiao1(valDLGZ12345, valDLGZ95598);
		$('#dianliguzhang').text(valDLGZ12345 + valDLGZ95598);
		$('#dlgz12345ycl').text(valDLGZYiChuli12345);
		$('#dlgz12345wcl').text(valDLGZWeiChuli12345);
		$('#dlgz95598ycl').text(valDLGZYiChuli95598);
		$('#dlgz95598wcl').text(valDLGZWeiChuli95598);


		shishijianceBiao2(valFDLGZ12345, valFDLGZ95598);
		$('#fdianliguzhang').text(valFDLGZ12345 + valFDLGZ95598);
		$('#fdlgz12345ycl').text(valFDLGZYiChuli12345);
		$('#fdlgz12345wcl').text(valFDLGZWeiChuli12345);
		$('#fdlgz95598ycl').text(valFDLGZYiChuli95598);
		$('#fdlgz95598wcl').text(valFDLGZWeiChuli95598);


		// shishijianceBiao3(valFDLGZWeiChuli95598, valFDLGZYiChuli95598);
		// shishijianceBiao4(valFDLGZWeiChuli12345, valFDLGZYiChuli12345);
		// $('#val12345').text(val12345); //给12345赋值
		// $('#val95598').text(val95598); //给95598赋值

	}

	BDZT_GETZTQX_LY_1(dealData, SSGS);
}

/**
 * 实时监测右边第一个图表
 */
function shishijianceBiao1(val1, val2) {
	option1 = {

		color: ['#1babe8', '#0060e6'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: val1,
					name: '12345'
				},
				{
					value: val2,
					name: '95598'
				}
			]
		}]
	};

	var chart2 = echarts.init(document.getElementById('chart2'));
	chart2.setOption(option1);
}

function shishijianceBiao2(val1, val2) {
	option2 = {
		color: ['#1babe8', '#0060e6'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: val1,
					name: '12345'
				},
				{
					value: val2,
					name: '95598'
				}
			]
		}]
	};

	var chart3 = echarts.init(document.getElementById('chart3'));
	chart3.setOption(option2);
}


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

	//http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZTQX_LY_1/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-09%2000:00:00&JSSJ=2018-09-09%2023:59:59
	if(releaseFlag){
		url= basepath + "interface/BDZT_GETZTQX_LY_1/0";
	}else{
		url= "json/3.json";
	}
	// var url = basepath + "interface/BDZT_GETZTQX_LY_1/0";
	var url = url;
	callgetajax(dealData, url, param);
}

/**
 * 绑定紧急投诉饼状图表数据(总数)
 */
function bindJinjisuqiuData() {
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;

		var jubao = suqiu = 0; //举报、投诉工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for (var i = 0; i < data.length; i++) {

			if (data[i].FL == '举报') {
				jubao++;
				if (data[i].LY == '12345') {
					jubao12345++;
				}
				if (data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if (data[i].FL == '投诉') {
				suqiu++;
				if (data[i].LY == '12345') {
					suqiu12345++;
				}
				if (data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到举报和投诉工单的数量

		suQiuBingTu(suqiu, suqiu12345, suqiu95598);
		juBaoBingTu(jubao, jubao12345, jubao95598);
		$("#tousu").text(suqiu);
		$("#jubao").text(jubao);
	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS, 0);
}


/**
 * 绑定紧急投诉饼状图表数据(已处理)
 */
function bindJinjisuqiuDataYiChuLi() {
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;

		// var jubao = suqiu = 0; //举报、投诉工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for (var i = 0; i < data.length; i++) {
			if (data[i].FL == '举报') {
				// jubao++;
				if (data[i].LY == '12345') {
					jubao12345++;
				}
				if (data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if (data[i].FL == '投诉') {
				// suqiu++;
				if (data[i].LY == '12345') {
					suqiu12345++;
				}
				if (data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到已处理举报和投诉工单的数量


		$("#tousu12345ycl").text(suqiu12345);
		$("#tousu95598ycl").text(suqiu95598);

		$("#jubao12345ycl").text(jubao12345);
		$("#jubao95598ycl").text(jubao95598);
	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS, 2);
}


/**
 * 绑定紧急投诉饼状图表数据(未处理)
 */
function bindJinjisuqiuDataWeiChuLi() {
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;

		// var jubao = suqiu = 0; //举报、投诉工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for (var i = 0; i < data.length; i++) {
			if (data[i].FL == '举报') {
				// jubao++;
				if (data[i].LY == '12345') {
					jubao12345++;
				}
				if (data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if (data[i].FL == '投诉') {
				// suqiu++;
				if (data[i].LY == '12345') {
					suqiu12345++;
				}
				if (data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到已处理举报和投诉工单的数量


		$("#tousu12345wcl").text(suqiu12345);
		$("#tousu95598wcl").text(suqiu95598);

		$("#jubao12345wcl").text(jubao12345);
		$("#jubao95598wcl").text(jubao95598);
	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS, 1);
}


function juBaoBingTu(jubao, jubao12345, jubao95598) {
	option4 = {
		color: ['#1babe8', '#0060e6'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: jubao12345,
					name: '12345'
				},
				{
					value: jubao95598,
					name: '95598'
				},
			]
		}]
	};

	var chart5 = echarts.init(document.getElementById('chart5'));
	chart5.setOption(option4);
}

function suQiuBingTu(var1, var2, var3) {

	option3 = {
		color: ['#1babe8', '#0060e6'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: var2,
					name: '12345'
				},
				{
					value: var3,
					name: '95598'
				}
			]
		}]
	};

	var chart4 = echarts.init(document.getElementById('chart4'));
	chart4.setOption(option3);
}

/**
 * 获取紧急投诉工单接口
 * @param {Object} dealData
 * @param {Object} SSGS
 */
function BDZT_GETSQGDMX(dealData, SSGS, SFCL) {
	// var SFCL = 0 //	是否已处理 0全部 1正在处理数 2已处理数  需要等明天和yaoqimin确认后才能添加
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ_NOW,
		"JSSJ": JSSJ_NOW,
		"SFCL": SFCL,
	};
	if(releaseFlag){
		url = basepath + "interface/BDZT_GETSQGDMX/0";
	}else{
		url = "json/4.json";
	}
	// var url = basepath + "interface/BDZT_GETSQGDMX/0";
	// var url = "json/4.json";
	callgetajax(dealData, url, param);
}

//获取预警状态、抢修状态、BD状态
function getYuJingZTBDData() {
	//interface/GDFW_YJZT/0
	//http://127.0.0.1:8080/pdpsc-app/interface/GDFW_YJZT/0?YWDW=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06&RQ=2018-07-31
	var rq = dateFtt("yyyy-MM-dd", new Date(new Date())); //今天
	//硬编码
	// var param = {"YWDW": "8a812897493378a00149567740676661", "RQ": rq};
	var param = {
		"YWDW": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06",
		"RQ": rq
	};
	if(releaseFlag){
		url=basepath + "interface/GDFW_YJZT/0";
	}else{
		url="json/5.json";
	}
	$.ajax({
		// url: basepath + "interface/GDFW_YJZT/0",
		url: url,
		data: param,
		type: 'get',
		dataType: 'json',
		success: function(data) {

			var yujing;
			var qiangxiu;
			var bdzt;
			if (data.data) {
				for (var i = 0; i < data.data.length; i++) {
					if (data.data[i].YJLX === "1") {
						yujing = data.data[i].YJZTMS;
					} else if (data.data[i].YJLX === "2") {
						qiangxiu = data.data[i].YJZTMS;
					} else if (data.data[i].YJLX === "3") {
						bdzt = data.data[i].YJZTMS;
					}
				}
				$('#span_YJStatus').text(yujing);
				$('#span_QXStatus').text(qiangxiu);
				$('#span_BDStatus').text(bdzt);

			}
		},
		error: function(data) {
			console.log(data);
		}
	});
}



function callgetajax(callback, url, param, type) {
	$.ajax({
		url: url,
		data: param,
		type: type,
		dataType: 'json',
		success: function(data) {
			callback(data);
		},
		error: function(data) {
			console.log(data);
		}
	});
}
