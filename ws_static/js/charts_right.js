$(document).ready(function() {
	gzjc_r();
})
//故障检测
function gzjc_r() {
	var liquidFill = echarts.init(document.getElementById('chart_gzjc_bar'));
	option = {
		color: ['#00da5b', '#e3bc31'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: ['处理中', '已处理'],
			textStyle: {
				color: '#edf8ff',
				fontSize: 32,
			},
			right: 45
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['浦东', '市区', '市北', '市南', '嘉定', '松江', '青浦', '奉贤', '金山', '崇明', '长兴', '检修', '电缆'],
			axisTick: {
				alignWithLabel: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#2076ae',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 28,
					color: '#eeeeee'
				},
			}
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				length: 10,
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#2076ae',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 28,
					color: '#fff'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2076ae'
				}
			},
			boundaryGap: ['0%', '20%'],
		}],
		series: [{
				name: '故障分布',
				type: 'bar',
				stack: '故障分布',
				barWidth: '30%',
				label: {
					show: true,
					color: '#FFF',
					textStyle: {
						color: '#FFF',
						fontSize: 20
					}
				},

			},
			{
				name: '处理中',
				type: 'bar',
				stack: '故障分布',
				//替换数据
				data: [0, 20, 20, 40, 62, 32, 45, 12, 30, 13, 26, 52, 20]
			},
			{
				name: '已处理',
				type: 'bar',
				stack: '故障分布',
				//替换数据
				data: [12, 52, 45, 0, 12, 14, 20, 32, 38, 25, 24, 12, 10]
			}
		]
	}
	liquidFill.setOption(option);
	gzjc_data(liquidFill, option)
	liquidFill.on("click", function clickEchart(param) {
		debugger
		if(param.componentType !== "series") {
			return;
		}
		var name = param.name;
		$(".bottom-list").removeClass("hide"); //显示class为bottom-list的div
		if(name == '核心') {
			var sfhxq = '1';
		} else {
			var sfhxq = '-1';
		}
		switch(name) {
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
		showFaultJianCeList(areaId, "08,22,25,32", sfhxq);
		$('#qiangdan_title').text("故障监测"); //明细列表标题
	});
}

function gzjc_data(qualified, option) {
	var url = basepath + "/hxq/XN_GDFW_BDZT_GZJCTJ";
	var param = {
		"KSSJ": KSSJ_NOW,
		"JSSJ": JSSJ_NOW
	};
	$.ajax({
		url: url,
		data: param,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			debugger
			var nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //已处理:YWC
			var numz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //处理中:JXZ+WDD
			var data = data.data;
			if(data != null) {
				for(var i = 0; i < data.length; i++) {
					var gsName = data[i].SSGDDW;
					switch(data[i].SSGDDW) {

						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //浦东
							//  					nums[1] += data[i].SL;
							nums[0] += data[i].YWC;
							numz[0] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //市区
							//  				    nums[2] += data[i].SL;
							nums[1] += data[i].YWC;
							numz[1] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //市北
							//  					nums[3] += data[i].SL;
							nums[2] += data[i].YWC;
							numz[2] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //市南
							//  					nums[4] += data[i].SL;
							nums[3] += data[i].YWC;
							numz[3] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //嘉定
							//  					nums[5] += data[i].SL;
							nums[4] += data[i].YWC;
							numz[4] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //松江 
							//  					nums[6] += data[i].SL;
							nums[5] += data[i].YWC;
							numz[5] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //青浦 
							//  					nums[7] += data[i].SL;
							nums[6] += data[i].YWC;
							numz[6] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //奉贤
							//  			    	nums[8] += data[i].SL;
							nums[7] += data[i].YWC;
							numz[7] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //金山
							//  					nums[9] += data[i].SL;
							nums[8] += data[i].YWC;
							numz[8] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //崇明
							//  					nums[10] += data[i].SL;
							nums[9] += data[i].YWC;
							numz[9] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //长兴
							//  					nums[11] += data[i].SL;
							nums[10] += data[i].YWC;
							numz[10] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //检修
							//  				    nums[0] += data[i].SL;
							nums[11] += data[i].YWC;
							numz[11] += (data[i].JXZ + data[i].WDD);
							break;
						case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
							//  				    nums[0] += data[i].SL;
							nums[12] += data[i].YWC;
							numz[12] += (data[i].JXZ + data[i].WDD);
							break;
					}

				}
				option.series[1].data = numz;
				option.series[2].data = nums;
				qualified.setOption(option);
			}
		}
	})

}

//台风告警
function right_tfgj(data) {
	debugger
	var data = data.data;
	for(var i = 0; i < data.length; i++) {
		if(data[i].MAXGRADE == "1") {
			$("#blue_yjgj").text(data[i].ZS);
		} else if(data[i].MAXGRADE == "2") {
			$("#yellow_yjgj").text(data[i].ZS);
		} else if(data[i].MAXGRADE == "3") {
			$("#or_yjgj").text(data[i].ZS);
		} else if(data[i].MAXGRADE == "4") {
			$("#red_yjgj").text(data[i].ZS);
		}
	}
}
getYjgjTaifeng(right_tfgj)
////雷电告警
//function right_ldgj(data) {
//	debugger
//	var data = data.data;
//	for(var i = 0; i < data.length; i++) {
//		if(data[i].predictLevel == "1") {
//			$("#ld_1").text(data[i].count);
//		} else if(data[i].predictLevel == "2") {
//			$("#ld_2").text(data[i].count);
//		} else if(data[i].predictLevel == "3") {
//			$("#ld_3").text(data[i].count);
//		} else {
//			return
//		}
//	}
//
//}
//getYjgjLeidian(right_ldgj)

//防汛告警
//function right_fxgj(data) {
//	debugger
//	var num = 0;
//	if(data.data) {
//		for(var i = 0; i < data.data.length; i++) {
//			num += parseInt(data.data[i].YCSL);
//		}
//		$("#fxyj_xltx").text(num);
//	}
//}
//防汛物资
function right_fxwz(data) {
	var num1=0;
	var num2 =0;
	var data = data.data;
	for(var i = 0; i < data.length; i++){
		debugger
		if(data[i].WZDLX=="防汛") {
			if(data[i].CKLXMC=="应急库"){
				num1 += Number(data[i].SL)
			} else if(data[i].CKLXMC=="常备库"){
				num2 += Number(data[i].SL)
			}
		}
	}
	$("#Yinji_fx").text(num1)	
	$("#ChangBei_fx").text(num2)
}
getFangXunWuZi(right_fxwz)


function right_fxdw(data) {
	debugger
	var num1=0;
	var num2 =0;
	var num3 = 0;
	var data = data.data;
	for(var i = 0; i < data.length; i++){
		if(data[i].LXMC=="人员") {
			if(data[i].ZLXMC=="人员"){
				num1 += Number(data[i].SL)
			}
		}else if(data[i].LXMC=="队伍"){
			if(data[i].ZLXMC=="队伍"){
				num2 += Number(data[i].SL)
			}
		} else if(data[i].LXMC=="车辆"){
			if(data[i].ZLXMC=="车辆"){
				num3 += Number(data[i].SL)
			}
		}
	}
	$(".duiwu").text(num2)	
	$(".renyuan").text(num1)
	$(".cheliang").text(num3)
}
getFangXunDuiWu(right_fxdw);
//getYjgjFangXun(right_fxgj)
//
//$('.top').click(function() {
//	$(this).siblings().toggle();
//})
//
//$('.bottom li').click(function() {
//
//	//获取左侧节点下标
//	var index = $(this).index();
//
//	//隐藏指定上侧内容
//	$(this).parent().parent().siblings().children(".show").removeClass('show');
//
//	//根据下标显示对应内容
//	$(this).parent().parent().siblings().children().eq(index).addClass('show');
//	$(this).parent().parent().slideUp();
//})