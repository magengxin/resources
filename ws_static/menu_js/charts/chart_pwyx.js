setTimeout(function(){
	tqjcOverload(0,0,0,0);//全网运行 下 配网运行 之台区监测:过载 饼图
	tqjcChongzai(0,0,0,0);//全网运行 下 配网运行 之台区监测:重载 饼图
	tqjcDidianya(0,0,0,0);//全网运行 下 配网运行 之台区监测:低电压 饼图
	tqjcBupingheng(0,0,0,0);//全网运行 下 配网运行 之台区监测:三相不平衡 饼图
	yichangjiankongload();//全网运行 下 配网运行 之 异常分布图(上半部分)
	yichangjiankongload1();//全网运行 下 配网运行 之 异常分布图(下半部分)
	getPeiWangYunXingDataByCompanyId('8a812897493378a00149567740676661');//全网运行 下 配网运行 之台区监测:台区总数 与 监测率
	getYiChangFenBu('ZZ');//全网运行 下 配网运行 之异常分布:默认显示异常类型为重载的异常分布	
	//初始化弹框里的数据，数据格式请严格按照示例	
	Popup_tqjsfx.setData({

    area: ["浦东","市区","市北","市南","嘉定","松江","青浦","奉贤","金山","崇明","长兴"],

    tqzzhb: {
        curMonth: {
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20],
            d3: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        },
        lastMonth: {
            data: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25],
            d3: [4, 5, 6, 4, 5, 6, 4, 5, 6, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        }
    },
    tqgzhb: {
        curMonth: {
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20],
            d3: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        },
        lastMonth: {
            data: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25],
            d3: [4, 5, 6, 4, 5, 6, 4, 5, 6, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        }
    },
    tqddyhb: {
        curMonth: {
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20],
            d3: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        },
        lastMonth: {
            data: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25],
            d3: [4, 5, 6, 4, 5, 6, 4, 5, 6, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        }
    },
    tqsxbphhb: {
        curMonth: {
            data: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20],
            d3: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        },
        lastMonth: {
            data: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25],
            d3: [4, 5, 6, 4, 5, 6, 4, 5, 6, 1, 2],
            d7: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
        }
    },
    zz: {
        curYear: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
        lastYear: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25, 35]
    },
    gz: {
        curYear: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
        lastYear: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25, 35]
    },
    ddy: {
        curYear: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
        lastYear: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25, 35]
    },
    sxbph: {
        curYear: [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30],
        lastYear: [15, 25, 35, 15, 25, 35, 15, 25, 35, 15, 25, 35]
    }
});
},1000)
	
	


/*右侧态势图入口*/

$('#tst_id_pwyx').click(function(){
	parent.document.getElementById("iframe1").contentWindow.specialClick(1);
});	


//切换地区，柱状图高亮位置随着点击地区不同移动位置
var sec_left_start = $('.move_section_bar').css('left'),
	sec_move_left = parseInt(sec_left_start),
	sec_scale = (960 / 6);
$('.double_move dd').click(function() {//右上角12个地区切换位置
	var index = $(this).index() - 1,
		end_left,
		end_top;
	if(index == 0) {
		$('.move_section_bar').hide();
	} else if(index == 1) {
		$('.move_section_bar').show();
		end_left = sec_move_left;
	} else {
		$('.move_section_bar').show();
		if(index > 6) {
			end_left = sec_move_left + (index - 7) * sec_scale;
			end_top = 600;
		} else {
			end_left = sec_move_left + (index - 1) * sec_scale;
			end_top = 119;
		}
	}
	$('.move_section_bar').css({
		'left': end_left,
		'top': end_top
	});
})

/**
 * 点击配网运行导航切换按钮
 */
function clickPWYX() {
	$('#popup-gzjcfx').hide();
	$('#popup-pwqxfx').hide();
}

	
/**
 * 全网运行
 * 下 
 * 配网运行 
 * 之
 * 台区监测:
 * 台区总数 与 监测率
 * @param {Object} area
 */
function getPeiWangYunXingDataByCompanyId(area) {
	//获取配网运行数据
	getPeiWangYunXingData(area, 'GZ');//过载
	getPeiWangYunXingData(area, 'ZZ');//重载
	getPeiWangYunXingData(area, 'DDY');//低电压
	getPeiWangYunXingData(area, 'SXBPH');//三相簿平衡

	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var param = {
		"SSGS": area,
		"NF": year,
		"YF": month
	}
	var url = basepath + "/interface/XN_GDFW_BDZT_TQJCLTJ/0";//获取台区总数

	$.ajax({
		url: url,
		data: param,
		type: 'GET',
		dataType: 'json',
		async: false,
		success: function(data) {
			var result_code = data.result_code;
			if(result_code == "0") {
				var list = data.data;
				if(list != null && list.length > 0) {
					$("#taiqu_tqzs").html(list[0].TQZS);//台区总数
					$("#taiqu_jcl").html(list[0].JCL + "%");//监测率
				}
			}
		},
		error: function(data) {
			//console.log(data);
		}
	});

}
/**
 * 全网运行监控统计-配网运行-异常分布
 */
function getYiChangFenBu(yclx) {
	yichangjiankongload();//异常分布柱状图----前6个地区
	yichangjiankongload1();//异常分布柱状图----后6个地区
	var gbnum1 = [0, 0, 0, 0, 0, 0];//杆变(核心~嘉定)
	var pbnum1 = [0, 0, 0, 0, 0, 0];//配变(核心~嘉定)
	var gbnum2 = [0, 0, 0, 0, 0, 0];//杆变(松江~长兴)
	var pbnum2 = [0, 0, 0, 0, 0, 0];//配变(松江~长兴)

	//配网运行-异常分布
	var hxParam = {
		"SSGS": "-1",
		"KSSJ": KSSJ_NOW_YYYYMMDD,
		"JSSJ": JSSJ_NOW_YYYYMMDD,
		"YCLX": yclx
	};
	$.ajax({
		url: basepath + "interface/BDZT_GETDYYCMX/0",//获取异常分布明细
		data: hxParam,
		type: 'get',
		dataType: 'json',
//		async: false,
		success: function(result) {
			if(result.data) {
				for(var i = 0; i < result.data.length; i++) {
					//柱变
					if(result.data[i].TYPE === "柱上变压器") {
						//核心区
						if(result.data[i].SFBDHXQ === "1") {
							gbnum1[0] += 1;
							continue;
						}

						//浦东
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06") {
							gbnum1[1] += 1;
							continue;
						}

						//市区
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03") {
							gbnum1[2] += 1;
							continue;
						}

						//市北
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04") {
							gbnum1[3] += 1;
							continue;
						}

						//市南
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05") {
							gbnum1[4] += 1;
							continue;
						}

						//嘉定
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08") {
							gbnum1[5] += 1;
							continue;
						}

						//松江
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A") {
							gbnum2[0] += 1;
							continue;
						}

						//青浦
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09") {
							gbnum2[1] += 1;
							continue;
						}

						//奉贤
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07") {
							gbnum2[2] += 1;
							continue;
						}

						//金山
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B") {
							gbnum2[3] += 1;
							continue;
						}

						//崇明
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ") {
							gbnum2[4] += 1;
							continue;
						}

						//长兴
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ") {
							gbnum2[5] += 1;
							continue;
						}

						continue;
					}

					//配变
					if(result.data[i].TYPE === "配电变压器") {

						//核心区
						if(result.data[i].SFBDHXQ === "1") {
							pbnum1[0] += 1;
							continue;
						}

						//浦东
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06") {
							pbnum1[1] += 1;
							continue;
						}

						//市区
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03") {
							pbnum1[2] += 1;
							continue;
						}

						//市北
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04") {
							pbnum1[3] += 1;
							continue;
						}

						//市南
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05") {
							pbnum1[4] += 1;
							continue;
						}

						//嘉定
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08") {
							pbnum1[5] += 1;
							continue;
						}

						//松江
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A") {
							pbnum2[0] += 1;
							continue;
						}

						//青浦
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09") {
							pbnum2[1] += 1;
							continue;
						}

						//奉贤
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07") {
							pbnum2[2] += 1;
							continue;
						}

						//金山
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B") {
							pbnum2[3] += 1;
							continue;
						}

						//崇明
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ") {
							pbnum2[4] += 1;
							continue;
						}

						//长兴
						if(result.data[i].YWDW === "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ") {
							pbnum2[5] += 1;
							continue;
						}

					}

				}
				var arr=[];
			arr = arr.concat(gbnum1,pbnum1,gbnum2,pbnum2)
//				arr.push(gbnum1);
//				arr.push(pbnum1);
//				arr.push(gbnum2);
//				arr.push(pbnum2);
				var maxNum = count(arr)*3;
				if(maxNum%10!=0){
					maxNum = 10- maxNum%10+maxNum
				}
				console.log(maxNum);
				yichangjiankongload(gbnum1, pbnum1,maxNum);//异常分布塞数据
				yichangjiankongload1(gbnum2, pbnum2,maxNum);//异常分布塞数据
			}
		},
		error: function(data) {
			//console.log(data);
		}
	});
}

/**
 * 全网运行监控统计-配网运行-台区监测
 */
function getPeiWangYunXingData(companyId, yclx) {
	// alert(companyId);
	var sfhxq = companyId === "JBH-HXQ" ? "1" : "0";
	// var dataParam = {"SSGS": companyId, "KSSJ": KSSJ_NOW_YYYYMMDD, "JSSJ": JSSJ_NOW_YYYYMMDD,  "YCLX":yclx, "SFHXQ" : sfhxq};
	var dataParam = {
		"SSGS": companyId,
		"KSSJ": KSSJ_NOW_YYYYMMDD,
		"JSSJ": JSSJ_NOW_YYYYMMDD,
		"YCLX": yclx,
		"SFBDHXQ": sfhxq
	};
	$.ajax({
		url: basepath + "interface/BDZT_GETDYYCMX/0",
		// url: "json/BDZT_GETQWYXJKTJ_GDFW/0.json",
		data: dataParam,
		type: 'get',
		dataType: 'json',
//		async: false,
		success: function(result) {
			//console.log(result);
			var gznum = 0; //过载总数
			var lxnum = 0; //连续3天过载
			var dynum = 0; //连续7天过载
			if(result.data) {

				for(var i = 0; i < result.data.length; i++) {

					//过载
					if(yclx === 'GZ') {
						//gznum +=parseInt(result.data[i].DYLJGZ);
						if(parseInt(result.data[i].LXGZ) > 0) {
							gznum += 1;
						}

						// gznum += parseInt(result.data[i].LXGZ);
						if(parseInt(result.data[i].LXGZ) === 3) {
							lxnum += 1;
						}

						if(parseInt(result.data[i].DYLJGZ) === 7) {
							dynum += 1;
						}
					}

					//重载
					if(yclx === 'ZZ') {
						if(parseInt(result.data[i].LXZZ) > 0) {
							gznum += 1;
						}

						// gznum += parseInt(result.data[i].LXZZ);
						if(parseInt(result.data[i].LXZZ) === 3) {
							lxnum += 1;
						}

						if(parseInt(result.data[i].DYLJZZ) === 7) {
							dynum += 1;
						}
					}

					//低电压
					if(yclx === 'DDY') {
						if(parseInt(result.data[i].LXDDY) > 0) {
							gznum += 1;
						}

						gznum += parseInt(result.data[i].LXDDY);
						if(parseInt(result.data[i].LXDDY) === 3) {
							lxnum += 1;
						}

						if(parseInt(result.data[i].DYLJDDY) === 7) {
							dynum += 1;
						}
					}

					//三相不平衡
					if(yclx === 'SXBPH') {
						if(parseInt(result.data[i].LXSXBPH) > 0) {
							gznum += 1;
						}

						// gznum += parseInt(result.data[i].LXSXBPH);
						if(parseInt(result.data[i].LXSXBPH) === 3) {
							lxnum += 1;
						}

						if(parseInt(result.data[i].DYLJSXBPH) === 7) {
							dynum += 1;
						}
					}

				}
			}

			if(yclx === 'GZ') {
				tqjcOverload(gznum, lxnum, dynum, gznum - lxnum - dynum);
			}

			if(yclx === 'ZZ') {
				tqjcChongzai(gznum, lxnum, dynum, gznum - lxnum - dynum);
			}

//			if(yclx === 'DDY') {
//				tqjcDidianya(gznum, lxnum, dynum, gznum - lxnum - dynum);
//			}

			if(yclx === 'SXBPH') {
				tqjcBupingheng(gznum, lxnum, dynum, gznum - lxnum - dynum);
			}

		},
		error: function(data) {
			//console.log(data);
		}
	});
}

/**
 * 异常监控
 */

function yichangjiankongload(gbnum1, pbnum1,maxNum) {//异常分布柱状图
	var option = {
		xAxis: {
			name: '',
			data: ['核心', '浦东', '市区', '市北', '市南', '嘉定'],
			axisTick: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 28,
					color: '#fff'
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 3,
				}
			}
		},

		yAxis: {
			boundaryGap: ['0%', '40%'],
			name: '次数',
			nameTextStyle: {
				fontSize: 20
			},
			max:maxNum,
			minInterval:1,
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 28,
					color: '#fff'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#2076ae'
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 3,
				}
			}
		},

		series: [{
				type: 'bar',
				itemStyle: {
					normal: {
						color: "rgb(27, 207, 227)",
						label: {
							show: true,
							position: 'top',
							color: '#FFF',
							textStyle: {
								color: '#FFF',
								fontSize: 20
							}
						}
					}
				},
				silent: true,
				barWidth: 40,
				barGap: '0%',
				data: arguments[0]
			}, {
				type: 'bar',
				itemStyle: {
					normal: {
						color: "rgb(30, 132, 199)",
						label: {
							show: true,
							position: 'top',
							color: '#FFF',
							textStyle: {
								color: '#FFF',
								fontSize: 20
							}
						}
					}
				},
				barWidth: 40,
				data: arguments[1]
			}

		]

	};

	var yichangfenbu = echarts.init(document.getElementById('yichangfenbu'));
	yichangfenbu.setOption(option);//异常分布
	// getZhiHuiBaodianData(power_monitor_2,option,1);
}

function count(arr){//计算12个地区最高异常数确定y轴最大值
	var maxLocation=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]>maxLocation){
			maxLocation = arr[i];
		}
	}
	return maxLocation;
}
/**
 * 异常监控
 */
function yichangjiankongload1(gbnum1, pbnum1,maxNum) {//后6个图

	var option = {

		xAxis: {
			type: 'category',
			data: ['松江', '青浦', '奉贤', '金山', '崇明', '长兴'],
			axisTick: {
				alignWithLabel: true
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 28,
					color: '#fff'
				}
			},

			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 3,
				}
			}

		},

		yAxis: {
			boundaryGap: ['0%', '40%'],
			name: '次数',
			nameTextStyle: {
				fontSize: 20
			},
			max: maxNum,
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 28,
					color: '#fff'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#2076ae'
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff',
					width: 3,
				}
			}
		},

		series: [{
				type: 'bar',
				itemStyle: {
					normal: {
						color: 'rgb(27, 207, 227)',
						label: {
							show: true,
							position: 'top',
							color: '#FFF',
							textStyle: {
								color: '#FFF',
								fontSize: 20
							}
						}
					}
				},
				silent: true,
				barWidth: 40,
				barGap: '0%',
				data: arguments[0]
			}, {
				type: 'bar',
				itemStyle: {
					normal: {
						color: "rgb(30, 132, 199)",
						label: {
							show: true,
							position: 'top',
							color: '#FFF',
							textStyle: {
								color: '#FFF',
								fontSize: 20
							}
						}
					}
				},
				barWidth: 40,
				data: arguments[1]
			}

		]

	};

	var yichangfenbu1 = echarts.init(document.getElementById('yichangfenbu1'));
	yichangfenbu1.setOption(option);
	// getZhiHuiBaodianData(power_monitor_2,option,1);
}
/**
 * 全网运行 
 * 下 
 * 配网运行
 * 之
 * 台区监测:
 * 过载 饼图
 */
function tqjcOverload() {
	
	var zhanWeiFu = 0;
	if ( arguments[1] === 0 && arguments[2] === 0 && arguments[3] === 0 ) {
		zhanWeiFu = 1;
	}

	var option = {
		title: { //标题组件
			text: arguments[0] || 0,
			x: 'center', //标题的位置 默认是left，其余还有center、right属性
			y: 'center',
			textStyle: {
				color: "#71dff9",
				//TODO fontSize: 36,
				fontSize: 36,
			}
		},
		tooltip: { //提示框组件
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} : {d}%" //提示框浮层内容格式器
			formatter: function (params){
				if(params.name=="占位符" ){
					return '';	
				}
				return params.name+": "+params.value;
			}
		},
		color: ['rgb(27, 207, 227)', 'rgb(30, 132, 199)', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色
		animation:false,

		series: [ //系列列表

			{
				name: '设备状态4', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['40%', '50%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if( params.name=="总数"){
								//                                  return params.value;
								//}
								return "";
							},
							color:'#1490e7',
							// position : 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							}
						}
					}
				},
				data: [{
						value: arguments[1] || 0,
						name: '连续3天',
						itemStyle:{
							color:'#f2be47'
						},
					},
					{
						value: arguments[2] || 0,
						name: '累计7天',
						itemStyle:{
							color:'#ec4f54'
						},
					},
					{
						value: arguments[3] || 0,
						name: '其他',
						itemStyle:{
							color:'#1490e7'
						},
					},
					{
						value: zhanWeiFu,
						name: '占位符',
						itemStyle:{
							color:'rgba(188, 188, 188, 0.1)'
						},
					}
				]
			}
		]
	};

	var power_monitor_2 = echarts.init(document.getElementById('tqjc-guozai'));
	
	var num;
	var TDZS = $('#taiqu_tqzs').html();
//	console.log(TDZS)
		if(TDZS){
			num = (arguments[0]/TDZS*1000).toFixed(3)
			$('#guozai-bi').html(num+'‰')
		}else{
			num = '暂无数据'
			$('#guozai-bi').html(num)
		}

	
	power_monitor_2.setOption(option);
	// getZhiHuiBaodianData(power_monitor_2,option,1);
	power_monitor_2.on("click",function clickEchart(param) {
			getYiChangFenBu('GZ')
			$('#GZ').parent().find('dt').html('过载')
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("GZ");//显示台区监测明细列表与塞数据
            $('#qiangdan_title',parent.document).text("异常监测");//明细列表标题
});
}

/**
 * 全网运行 
 * 下 
 * 配网运行
 * 之
 * 台区监测:
 * 重载 饼图
 */
function tqjcChongzai() {
	var zhanWeiFu = 0;
	if ( arguments[1] === 0 && arguments[2] === 0 && arguments[3] === 0 ) {
		zhanWeiFu = 1;
	}

	var option = {
		title: { //标题组件
			text: arguments[0] || 0 ,
			x: 'center', //标题的位置 默认是left，其余还有center、right属性
			y: 'center',
			textStyle: {
				color: "#71dff9",
				//TODO fontSize: 36,
				fontSize: 36,
			}
		},
		tooltip: { //提示框组件
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} : {d}%" //提示框浮层内容格式器
			formatter: function (params){
				if(params.name=="占位符" ){
					return '';	
				}
				return params.name+": "+params.value;
			}
		},
		color: ['rgb(27, 207, 227)', 'rgb(30, 132, 199)', 'rgba(188, 188, 188, 0.1)'],
		
		// color:['rgb(30, 132, 199)','rgb(27, 207, 227)','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色
		animation: false,

		series: [ //系列列表

			{
				name: '设备状态4', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['40%', '50%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if( params.name=="总数"){
								//                              return params.value;
								//}
								return "";
							},
							color:'#1490e7',
							// position : 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							}
						}
					}
				},
				data: [{
						value: arguments[1] || 0,
						name: '连续3天',
						itemStyle:{
							color:'#f2be47'
						},
					},
					{
						value: arguments[2] || 0,
						name: '累计7天',
						itemStyle:{
							color:'#ec4f54'
						},
					},
					{
						value: arguments[3] || 0,
						name: '其他',
						itemStyle:{
							color:'#1490e7'
						},
					},{
						value: zhanWeiFu,
						name: '占位符',
						itemStyle:{
							color:'rgba(188, 188, 188, 0.1)'
						},
					}
				]
			}
		]
	};

	var power_monitor_2 = echarts.init(document.getElementById('tqjc-chongzai'));
	power_monitor_2.setOption(option);
	var num;
	var TDZS = $('#taiqu_tqzs').html();
		if(TDZS){
			num =  (arguments[0]/TDZS*1000).toFixed(3)
			$('#chongzai-bi').html(num+'‰')
		}else{
			num = '暂无数据'
			$('#chongzai-bi').html(num)
		}

	
	// getZhiHuiBaodianData(power_monitor_2,option,1);
	power_monitor_2.on("click",function clickEchart(param) {//点击饼图弹出明细
			getYiChangFenBu('ZZ');
			$('#ZZ').parent().find('dt').html('重载');
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("ZZ");//显示台区监测明细列表与塞数据
            $('#qiangdan_title',parent.document).text("异常监测");
});
}
/**
 * 全网运行 
 * 下 
 * 配网运行
 * 之
 * 台区监测:
 * 低电压 饼图
 */
function tqjcDidianya() {
	var zhanWeiFu = 0;
	if ( arguments[1] === 0 && arguments[2] === 0 && arguments[3] ===0 ) {
		zhanWeiFu = 1;
	}

	var option = {
		title: { //标题组件
			text: arguments[0] || 0,
			x: 'center', //标题的位置 默认是left，其余还有center、right属性
			y: 'center',
			textStyle: {
				color: "#71dff9",
				//TODO fontSize: 36,
				fontSize: 36,
			}
		},
		tooltip: { //提示框组件
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} : {d}%" //提示框浮层内容格式器
			formatter: function (params){
				if(params.name=="占位符" ){
					return '';	
				}
				return params.name+": "+params.value;
			}
		},
		color: ['rgb(27, 207, 227)', 'rgb(30, 132, 199)', 'rgba(188, 188, 188, 0.1)'],
		// color:['rgb(30, 132, 199)','rgb(27, 207, 227)','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色
		animation: false,

		series: [ //系列列表

			{
				name: '设备状态4', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['40%', '50%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if( params.name=="总数"){
								//                              return params.value;
								//}
								return "";
							},
							color:'#1490e7',
							// position : 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							}
						}
					}
				},
				data: [{
						value: arguments[1] || 0,
						name: '连续3天',
						itemStyle:{
							color:'#f2be47'
						}
					},
					{
						value: arguments[2] || 0,
						name: '累计7天',
						itemStyle:{
							color:'#ec4f54'
						},
					},
					{
						value: arguments[3] || 0,
						name: '其他',
						itemStyle:{
							color:'#1490e7'
						},
					},
					{
						value: zhanWeiFu,
						name: '占位符',
						itemStyle:{
							color:'rgba(188, 188, 188, 0.1)'
						},
					}
				]
			}
		]
	};
	var power_monitor_2 = echarts.init(document.getElementById('tqjc-didianya'));
	power_monitor_2.setOption(option);
	var num;
	var TDZS = $('#taiqu_tqzs').html();
		if(TDZS){
			num =  (arguments[0]/TDZS*1000).toFixed(3)
			$('#didianya-bi').html(num+'‰')
		}else{
			num = '暂无数据'
			$('#didianya-bi').html(num)
		}

	
	// getZhiHuiBaodianData(power_monitor_2,option,1);
	power_monitor_2.on("click",function clickEchart(param) {//点击饼图弹出明细
			getYiChangFenBu('DDY')
			$('#DDY').parent().find('dt').html('低电压')
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("DDY");//显示台区监测明细列表与塞数据
            $('#qiangdan_title').text("异常监测");
//          showGuZhangJianCeList(null,1,SSGSMAP_NAME[g_deptchange]);
});
}
/**
 * 全网运行 
 * 下 
 * 配网运行
 * 之
 * 台区监测:
 * 三相不平衡 饼图
 */
function tqjcBupingheng() {
	
	var zhanWeiFu = 0;
	if ( arguments[1] === 0 && arguments[2] === 0 && arguments[3] ===0 ) {
		zhanWeiFu = 1;
	}

	var option = {
		title: { //标题组件
			text: arguments[0] || 0,
			x: 'center', //标题的位置 默认是left，其余还有center、right属性
			y: 'center',
			textStyle: {
				color: "#71dff9",
				//TODO fontSize: 36,
				fontSize: 36,
			}
		},
		tooltip: { //提示框组件
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} : {d}%" //提示框浮层内容格式器
			formatter: function (params){
				if(params.name=="占位符" ){
					return '';	
				}
				return params.name+": "+params.value;
			}
		},
		color: ['rgb(27, 207, 227)', 'rgb(30, 132, 199)', 'rgba(188, 188, 188, 0.1)'],
		// color:['rgb(30, 132, 199)','rgb(27, 207, 227)','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色
		animation: false,

		series: [ //系列列表

			{
				name: '设备状态4', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['40%', '50%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if( params.name=="总数"){
								//                              return params.value;
								//}
								return "";
							},
							color:'#1490e7',
							// position : 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							position: 'center',
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							}
						}
					}
				},
				data: [{
						value: arguments[1] || 0,
						name: '连续3天',
						itemStyle:{
							color:'#f2be47'
						}
					},
					{
						value: arguments[2] || 0,
						name: '累计7天',
						itemStyle:{
							color:'#ec4f54'
						},
					},
					{
						value: arguments[3] || 0,
						name: '其他',
						itemStyle:{
							color:'#1490e7'
						},
					},
					{
						value: zhanWeiFu,
						name: '占位符',
						itemStyle:{
							color:'rgba(188, 188, 188, 0.1)'
						},
					}
				]
			}
		]
	};
	var power_monitor_2 = echarts.init(document.getElementById('tqjc-bupingheng'));
	power_monitor_2.setOption(option);
	var num;
	var TDZS = $('#taiqu_tqzs').html();
		if(TDZS){
			num =  (arguments[0]/TDZS*1000).toFixed(3)
			$('#bupingheng-bi').html(num+'‰');//计算千分比
		}else{
			num = '暂无数据'
			$('#bupingheng-bi').html(num)
			
		}

	
	// getZhiHuiBaodianData(power_monitor_2,option,1);
	power_monitor_2.on("click",function clickEchart(param) {//点击饼图弹出明细
			getYiChangFenBu('SXBPH')
			$('#SXBPH').parent().find('dt').html('三相不平衡')
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("SXBPH");//显示台区监测明细列表与塞数据
            $('#qiangdan_title').text("异常监测");//明细列表标题
});
}

//点击过载上下联动
 $("#tqjc-guozai").css({'cursor': 'pointer'});
    $("#tqjc-guozai").click(function () {
    	getYiChangFenBu('GZ')
			$('#GZ').parent().find('dt').html('过载')
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("GZ");//显示台区监测明细列表与塞数据
            $('#qiangdan_title').text("异常监测");//明细列表标题
    });
//重载 
$("#tqjc-chongzai").css({'cursor': 'pointer'});
    $("#tqjc-chongzai").click(function () {
       getYiChangFenBu('ZZ');
			$('#ZZ').parent().find('dt').html('重载');
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("ZZ");//显示台区监测明细列表与塞数据
            $('#qiangdan_title').text("异常监测");
    });

//低电压
$("#tqjc-didianya").css({'cursor': 'pointer'});
    $("#tqjc-didianya").click(function () {
       getYiChangFenBu('DDY')
			$('#DDY').parent().find('dt').html('低电压')
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("DDY");//显示台区监测明细列表与塞数据
            $('#qiangdan_title').text("异常监测");
    });
    
//三相不平衡
$("#tqjc-bupingheng").css({'cursor': 'pointer'});
    $("#tqjc-bupingheng").click(function () {
       getYiChangFenBu('SXBPH')
			$('#SXBPH').parent().find('dt').html('三相不平衡')
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            peiwangShow("SXBPH");//显示台区监测明细列表与塞数据
            $('#qiangdan_title').text("异常监测");//明细列表标题
    });


	/**
	 * 显示台区监测明细列表与塞数据
	 * type：过载:GZ 重载:ZZ 低电压:DDY 三项不平衡:SXBPH
	 */
	function peiwangShow(type) {
	    $(".bottom-list",parent.document).removeClass("hide");//显示class为bottom-list的div
	    var areaPWYX = $("#areaPWYX").text();
	    var areaId = '8a812897493378a00149567740676661';
	    if(areaPWYX == '核心'){
	    	var sfhxq = '1';
	    } else {
	    	var sfhxq = '-1';
	    }
		switch(areaPWYX){
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
	    
	//  getTaiQuYiChangDetial(dealBackDataList,areaId,type,sfhxq);
	//  function dealBackDataList(dataList){
	//  	console.log(dataList);
	//  }
	    showTaiQuJianCeList(areaId,type,sfhxq);//areaId,type,sfhxq 是 接口请求参数
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
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }


    getTaiQuYiChangDetial(dealBackDataList,areaId,type,sfhxq);//台区异常明细查看(ajax接口请求)
}

//台区异常明细查看(ajax接口请求)
function getTaiQuYiChangDetial(callback,ssgs,yclx,sfhxq){
	var url = basepath + "interface/BDZT_GETDYYCMX/0";
	var param = {"SSGS": ssgs,"KSSJ": KSSJ_SIMP, "JSSJ": KSSJ_SIMP, "YCLX": yclx,  "type": "-1", "SFHXQ":sfhxq };
	callgetajax(callback,url,param);
}

