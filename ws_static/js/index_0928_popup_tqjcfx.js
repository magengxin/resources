// 弹框：台区监测分析
var Popup_tqjsfx = (function() {
	var nowmonth = new Date().getMonth();
	$("#l_pop_tqjc_m").attr("data-month", nowmonth);
    var el = document.querySelector("#popup-tqjcfx");
    var chart_tqzzhb = echarts.init(el.querySelector("#popup-tqjcfx_tqzzhb"), {width: 1320, height: 690}),
        chart_tqgzhb = echarts.init(el.querySelector("#popup-tqjcfx_tqgzhb"), {width: 1320, height: 690}),
        chart_tqddyhb = echarts.init(el.querySelector("#popup-tqjcfx_tqddyhb"), {width: 1320, height: 690}),
        chart_tqsxbphhb = echarts.init(el.querySelector("#popup-tqjcfx_tqsxbphhb"), {width: 1320, height: 690}),
        chart_zz = echarts.init(el.querySelector("#popup-tqjcfx_zz"), {width: 1320, height: 690}),
        chart_gz = echarts.init(el.querySelector("#popup-tqjcfx_gz"), {width: 1320, height: 690}),
        chart_ddy = echarts.init(el.querySelector("#popup-tqjcfx_ddy"), {width: 1320, height: 690}),
        chart_sxbph = echarts.init(el.querySelector("#popup-tqjcfx_sxbph"), {width: 1320, height: 690});

    var data = {};

    function update() {

        function opt1(boxname) {
            var dt = data[boxname];
            var opt = {
                title: {
                    text: "{a|上海公司(当月)："+sumArr(dt.curMonth.data)+"（连续3天："+sumArr(dt.curMonth.d3)+"  累计7天："+sumArr(dt.curMonth.d7)+"）\n上海公司(上月)："+sumArr(dt.lastMonth.data)+"（连续3天："+sumArr(dt.lastMonth.d3)+"  累计7天："+sumArr(dt.lastMonth.d7)+"）}",
                    textStyle: {
                        fontSize: 24,
                        fontWight: "normal",
                        color: "#fff",
                        rich: {
                            a: {
                                fontSize: 24,
                                lineHeight: 36
                            }
                        },
                    },
                    left: 80,
                    top: 20
                },
                tooltip: {
//                  show: true,
//                  trigger: 'item',
//                  formatter: '{b}: {c}',
//                  padding: 10
                },
                legend: {
                    right: 40,
                    top: 30,
                    width: 300,
                    formatter: "{a|{name}}",
                    textStyle: {
                        fontSize: 24,
                        fontWight: "normal",
                        color: "#fff",
                        rich: {
                            a: {
                                width: 100,
                                fontSize: 24,
                                lineHeight: 24
                            }
                        },
                    },
                    data: ["当月","上月","连续3天","累计7天"],
                    selectedMode: false
                },
                grid: {
                    left: 120,
                    top: 160,
                    width: 1040,
                    height: 480,
                    containLabel: true
                },
                yAxis:  {
                    type: 'value',
                    name: '次数',
                    nameTextStyle: {
                        fontSize: 24,
                        color: "#fff"
                    },
                    nameGap: 20,
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 18,
                        color: "#fff"
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color:"#08405d"
                        }
                    },
                },
                xAxis: {
                    type: 'category',
                    data: data.area,
                    axisLabel: {
                        fontSize: 18,
                        color: "#fff"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#0060e5"
                        }
                    },
                },
                series: [

                    {
                        type: 'bar',
                        name: "当月",
                        stack: "当月",
                        itemStyle: {
                            color: "#12b4ff"
                        },
                        data: dt.curMonth.data
                    },
                    {
                        type: 'bar',
                        name: "连续3天",
                        stack: "当月",
                        itemStyle: {
                            color: "#e0ff12"
                        },
                        data: dt.curMonth.d3
                    },
                    {
                        type: 'bar',
                        name: "累计7天",
                        stack: "当月",
                        itemStyle: {
                            color: "#ff8712"
                        },
                        data: dt.curMonth.d7,
                        barGap: "5%",
                        barWidth: 30
                    },
                    {
                        type: 'bar',
                        name: "上月",
                        stack: "上月",
                        itemStyle: {
                            color: "#0060e5"
                        },
                        data: dt.lastMonth.data
                    },
                    {
                        type: 'bar',
                        name: "连续3天",
                        stack: "上月",
                        itemStyle: {
                            color: "#e0ff12"
                        },
                        data: dt.lastMonth.d3
                    },
                    {
                        type: 'bar',
                        name: "累计7天",
                        stack: "上月",
                        itemStyle: {
                            color: "#ff8712"
                        },
                        data: dt.lastMonth.d7,
                        barGap: "5%",
                        barWidth: 30
                    },
                ]
            }

            return opt;
        }

        // 台区重载环比
        var option_tqzzhb = opt1("tqzzhb");
        chart_tqzzhb.setOption(option_tqzzhb);
        // 台区过载环比
        var option_tqgzhb = opt1("tqgzhb");
        chart_tqgzhb.setOption(option_tqgzhb);
        // 台区低电压环比
        var option_tqddyhb = opt1("tqddyhb");
        chart_tqddyhb.setOption(option_tqddyhb);
        // 台区三相不平衡环比
        var option_tqsxbphhb = opt1("tqsxbphhb");
        chart_tqsxbphhb.setOption(option_tqsxbphhb);

        // 重载
        var nowMonth = new Date().getMonth();
        if(nowMonth==0){
        	nowMonth=12;
        }
        var option_zz = {
            tooltip: {
                show: true,
                trigger: 'axis',
                // formatter: '{b}: {c}',
                padding: 10
            },
            legend: {
                right: 20,
                top: 30,
                data: [{
                    name: "当年"
                },{
                    name: "上年"
                }],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 120,
                top: 100,
                width: 1040,
                height: 520,
                containLabel: true
            },
            yAxis:  {
                type: 'value',
                name: '次数',
                nameTextStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                nameGap: 20,
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
                axisLabel: {
                    fontSize: 18,
                    color: "#fff"
                },
                splitLine: {
                    show: false
                },
            },
            xAxis: {
                type: 'category',
                name: '月份',
                nameTextStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                nameGap: 40,
                data: (function(){
                    var arr = [];
                    for(var i=0;i<12;i++) {
                        arr.push((i+1) + "月")
                    }
                    return arr;
                  })(),
                boundaryGap: false,
                axisLabel: {
                    fontSize: 18,
                    color: "#fff"
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
                axisTick: {
                    alignWithLabel: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color:"#08405d"
                    }
                },
            },
            series: [
                {
                    type: "line",
                    name: "当年",
                    itemStyle: {
                        color: "#12b4ff"
//                      color: "red"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.zz.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.zz.curYear

//                  data: data.zz.curYear,
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
                {
                    type: "line",
                    name: "上年",
                    itemStyle: {
                        color: "#00db5a"
//                      color: "green"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.zz.lastYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.zz.lastYear,
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                }
            ]
        };
        chart_zz.setOption(option_zz);

        // 过载
        var option_gz = Object.assign({}, option_zz, {
            series: [
                {
                    type: "line",
                    name: "当年",
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.gz.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.gz.curYear
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
                {
                    type: "line",
                    name: "上年",
                    itemStyle: {
                        color: "#00db5a"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.gz.lastYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: (function () {
                    		return data.gz.lastYear
                    })()
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
            ]
        });
        chart_gz.setOption(option_gz);

        // 低电压
        var option_ddy = Object.assign({}, option_zz, {
//          xAxis: Object.assign({}, option_zz.xAxis, {
//              splitLine: {
//                  show: false
//              }
//          }),
            series: [
                {
                    type: "line",
                    name: "当年",
                    // smooth: true,
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.ddy.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.ddy.curYear
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
                {
                    type: "line",
                    name: "上年",
                    // smooth: true,
                    itemStyle: {
                        color: "#00db5a"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.ddy.lastYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: (function () {
                    		return data.ddy.lastYear
                    })()

                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
            ]
        });
        chart_ddy.setOption(option_ddy);

        // 三项不平衡
        var option_sxbph = Object.assign({}, option_ddy, {
            series: [
                {
                    type: "line",
                    name: "当年",
                    // smooth: true,
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.sxbph.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data:data.sxbph.curYear
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
                {
                    type: "line",
                    name: "上年",
                    // smooth: true,
                    itemStyle: {
                        color: "#00db5a"
                    },
                    symbol: "circle",
					symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		fontSize: 24,
                    		formatter: function (params) {
                    			var theMax = Math.max.apply(null, data.sxbph.lastYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.sxbph.lastYear,
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
            ]
        });
        chart_sxbph.setOption(option_sxbph);

    }

    // function setData(newdata) {
    //     if(!newdata) return;
    //     for(var key in newdata) {
    //         data[key] = newdata[key]
    //     }
    //     update();
    // }


    function setData(newdata) {
        if(!newdata) return;
        var isEmpty = true;
        for(var t in data) {
            isEmpty = false;
        }
        if (isEmpty) {
            data = newdata;
        } else {
            f(newdata, data);
        }
        update();
    }

    function f(newdata, cacheData) {
        for(var key in newdata) {
            if(!Array.isArray(newdata[key])){
                f(newdata[key], cacheData[key]);
            } else {
                cacheData[key] = newdata[key];
            }
        }
    }


    function sumArr(arr) {
        return arr.reduce(function(acc, cur){ return acc + cur}, 0)
    }

    return {
        update: update,
        setData: setData
    }
})();


function tqjcfx_init(){

	$('#l_pop_tqjc_y').text(moment().format("YYYY")+'年');

    initCount(moment().add(-2 , "month").format("YYYYMM"),moment().add(-1 , "month").format("YYYYMM"));//初始化分布统计
//  initAnaly("8a812897493378a00149567740676661", '2019');//初始化趋势分析
}


function initAnaly(companyId, year){
    if(companyId != '8a812897493378a00149567740676661'){
        $("#fenbutongji").hide();//只有上海公司有分布统计,非上海公司没有分布统计
        $("#qushifenxi").show();
        $(".m_tqjcfx").hide();
        $(".y_tqjcfx").show();
        popup_tab_toggle($("#fenbutongji"),1);
        $("input[name = 'radio_tqjcfx_type']").get(1).checked = true;
    }
    if(companyId === '8a812897493378a00149567740676661'){
        $("#fenbutongji").show();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi").show();
        $("input[name = 'radio_tqjcfx_type']").get(0).checked = true;
        $(".m_tqjcfx").show();
        $(".y_tqjcfx").hide();
        popup_tab_toggle($("#fenbutongji"),0);
    }
    if(companyId === '-1'){
        var companyCode = $('input[name="radio_tqjcfx_area"]:checked').val();
        companyId = companyCode;
    }
    if(year === '-1'){
        var yearChecked = $('input[name="radio_tqjcfx_time"]:checked').val();
        year = yearChecked;
    }
    var kssj = Number(year) -1 +"01";
    var jssj = year+'12';
// alert(companyId+"---------"+kssj+"------------"+jssj);
    //当年
    var zzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    //上年
    var zzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var sfhxq = companyId === 'JBH-HXQ' ? '1' : '0';
    var zzLastParam = {"SSGS": companyId, "KSSJ": kssj , "JSSJ": jssj,  "LX":-1, "SFHXQ" : sfhxq};

    callgetajax(dealLastData, basepath + "interface/BDZT_GETQWYXJKTJ_PWYX/0", zzLastParam, 'post');

    //数据绑定
    function dealLastData(res) {
        if(!res.data) {
            res.data = [];
        }
        var data = res.data;
        for(var i = 0; i < data.length; i++) {
            var yf = Number(data[i].YF);

            if(data[i].LX==='1'){
                if(data[i].NF === year){
                    zzCurData[yf] = parseInt(data[i].VALUE);
                    continue;
                }

                if(Number(data[i].NF) === year-1){
                    zzLastData[yf] = parseInt(data[i].VALUE);
                    continue;
                }
                continue;
            }


            if(data[i].LX==='2'){
                if(data[i].NF === year){
                    gzCurData[yf] = parseInt(data[i].VALUE);
                    continue;
                }

                if(Number(data[i].NF) === year-1){
                    gzLastData[yf] = parseInt(data[i].VALUE);
                    continue;
                }
                continue;
            }

            if(data[i].LX==='3'){
                if(data[i].NF === year){
                    ddyCurData[yf] = parseInt(data[i].VALUE);
                    continue;
                }

                if(Number(data[i].NF) === year-1){
                    ddyLastData[yf] = parseInt(data[i].VALUE);
                    continue;
                }
                continue;
            }


            if(data[i].LX==='4'){
                if(data[i].NF === year){
                    sxbphCurData[yf] = parseInt(data[i].VALUE);
                    continue;
                }

                if(Number(data[i].NF) === year-1){
                    sxbphLastData[yf] = parseInt(data[i].VALUE);
                    continue;
                }
            }

        }
        zzCurData.shift();zzLastData.shift();
        gzCurData.shift();gzLastData.shift();
        ddyCurData.shift();ddyLastData.shift();
        sxbphCurData.shift();sxbphLastData.shift();
        // 初始化弹框里的数据，数据格式请严格按照示例
        if(year == '2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				zzCurData[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
				gzCurData[i] = null;
				ddyCurData[i] = null;
				sxbphCurData[i] = null;
			}
		}
	    Popup_tqjsfx.setData({

	        zz: {
	            curYear: zzCurData,
	            lastYear: zzLastData
	        },
	        gz: {
	            curYear: gzCurData,
	            lastYear: gzLastData
	        },
	        ddy: {
	            curYear: ddyCurData,
	            lastYear: ddyLastData
	        },
	        sxbph: {
	            curYear: sxbphCurData,
	            lastYear: sxbphLastData
	        }


	    });

    }
}



function changeDate(o) {
    var el = $(o).siblings('.m');
    var m = $("#l_pop_tqjc_m").attr("data-month");
	var month = new Date().getMonth();
	var year = moment().format("YYYY");
	if($("input[name = 'radio_tqjcfx_time']:checked").val() == 2018){
		m = $("#l_pop_tqjc_m").attr("data-month");
		month = $("#l_pop_tqjc_m").attr("data-month");
		year = $("input[name = 'radio_tqjcfx_time']:checked").val()
	}
	if(m>month){
		$("#l_pop_tqjc_m").attr("data-month",month);
		return;
	}
//  if(Number(m)>9){
//  	var thisMon='2019'+m;
//  }else{
//  	var thisMon='20190'+m;
//  }
//  tm=Number(m)-1;
//  if(tm>9){
//  	var lastMon='2019'+tm;
//  }else{
//  	var lastMon='20190'+tm;
//  }
//	if(m==1){
//		lastMon='201812';
//	}
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

    initCount(lastMon, thisMon);
}

function initCount(kssj, jssj) {

    //当前月
    var zzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var zzCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var zzCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var gzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ddyCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var sxbphCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //上个月
    var zzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var zzLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var zzLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var gzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ddyLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var sxbphLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var zzLastParam = {
        "SSGS": "-1", "KSSJ": kssj, "JSSJ": jssj, "LX": -1
    };

    callgetajax(dealLastData, basepath + "interface/BDZT_GETQWYXJKTJ_PWYX/0", zzLastParam, 'post');

    //数据绑定
    function dealLastData(res) {
        if (!res.data) {
            res.data = [];
        }
        var data = res.data;
        for (var i = 0; i < data.length; i++) {
            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[0] = parseInt(data[i].VALUE);
                        zzCurd3[0] = parseInt(data[i].DAY3);
                        zzCurd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[0] = parseInt(data[i].VALUE);
                        gzCurd3[0] = parseInt(data[i].DAY3);
                        gzCurd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[0] = parseInt(data[i].VALUE);
                        ddyCurd3[0] = parseInt(data[i].DAY3);
                        ddyCurd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[0] = parseInt(data[i].VALUE);
                        sxbphCurd3[0] = parseInt(data[i].DAY3);
                        sxbphCurd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[0] = parseInt(data[i].VALUE);
                        zzLastd3[0] = parseInt(data[i].DAY3);
                        zzLastd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[0] = parseInt(data[i].VALUE);
                        gzLastd3[0] = parseInt(data[i].DAY3);
                        gzLastd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[0] = parseInt(data[i].VALUE);
                        ddyLastd3[0] = parseInt(data[i].DAY3);
                        ddyLastd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[0] = parseInt(data[i].VALUE);
                        sxbphLastd3[0] = parseInt(data[i].DAY3);
                        sxbphLastd7[0] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }

            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[1] = parseInt(data[i].VALUE);
                        zzCurd3[1] = parseInt(data[i].DAY3);
                        zzCurd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[1] = parseInt(data[i].VALUE);
                        gzCurd3[1] = parseInt(data[i].DAY3);
                        gzCurd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[1] = parseInt(data[i].VALUE);
                        ddyCurd3[1] = parseInt(data[i].DAY3);
                        ddyCurd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[1] = parseInt(data[i].VALUE);
                        sxbphCurd3[1] = parseInt(data[i].DAY3);
                        sxbphCurd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[1] = parseInt(data[i].VALUE);
                        zzLastd3[1] = parseInt(data[i].DAY3);
                        zzLastd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[1] = parseInt(data[i].VALUE);
                        gzLastd3[1] = parseInt(data[i].DAY3);
                        gzLastd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[1] = parseInt(data[i].VALUE);
                        ddyLastd3[1] = parseInt(data[i].DAY3);
                        ddyLastd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[1] = parseInt(data[i].VALUE);
                        sxbphLastd3[1] = parseInt(data[i].DAY3);
                        sxbphLastd7[1] = parseInt(data[i].DAY7);
                        continue;
                    }

                }
            }


            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[2] = parseInt(data[i].VALUE);
                        zzCurd3[2] = parseInt(data[i].DAY3);
                        zzCurd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[2] = parseInt(data[i].VALUE);
                        gzCurd3[2] = parseInt(data[i].DAY3);
                        gzCurd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[2] = parseInt(data[i].VALUE);
                        ddyCurd3[2] = parseInt(data[i].DAY3);
                        ddyCurd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[2] = parseInt(data[i].VALUE);
                        sxbphCurd3[2] = parseInt(data[i].DAY3);
                        sxbphCurd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[2] = parseInt(data[i].VALUE);
                        zzLastd3[2] = parseInt(data[i].DAY3);
                        zzLastd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[2] = parseInt(data[i].VALUE);
                        gzLastd3[2] = parseInt(data[i].DAY3);
                        gzLastd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[2] = parseInt(data[i].VALUE);
                        ddyLastd3[2] = parseInt(data[i].DAY3);
                        ddyLastd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[2] = parseInt(data[i].VALUE);
                        sxbphLastd3[2] = parseInt(data[i].DAY3);
                        sxbphLastd7[2] = parseInt(data[i].DAY7);
                        continue;
                    }

                }
            }


            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[3] = parseInt(data[i].VALUE);
                        zzCurd3[3] = parseInt(data[i].DAY3);
                        zzCurd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[3] = parseInt(data[i].VALUE);
                        gzCurd3[3] = parseInt(data[i].DAY3);
                        gzCurd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[3] = parseInt(data[i].VALUE);
                        ddyCurd3[3] = parseInt(data[i].DAY3);
                        ddyCurd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[3] = parseInt(data[i].VALUE);
                        sxbphCurd3[3] = parseInt(data[i].DAY3);
                        sxbphCurd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[3] = parseInt(data[i].VALUE);
                        zzLastd3[3] = parseInt(data[i].DAY3);
                        zzLastd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[3] = parseInt(data[i].VALUE);
                        gzLastd3[3] = parseInt(data[i].DAY3);
                        gzLastd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[3] = parseInt(data[i].VALUE);
                        ddyLastd3[3] = parseInt(data[i].DAY3);
                        ddyLastd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[3] = parseInt(data[i].VALUE);
                        sxbphLastd3[3] = parseInt(data[i].DAY3);
                        sxbphLastd7[3] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }


            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[4] = parseInt(data[i].VALUE);
                        zzCurd3[4] = parseInt(data[i].DAY3);
                        zzCurd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[4] = parseInt(data[i].VALUE);
                        gzCurd3[4] = parseInt(data[i].DAY3);
                        gzCurd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[4] = parseInt(data[i].VALUE);
                        ddyCurd3[4] = parseInt(data[i].DAY3);
                        ddyCurd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[4] = parseInt(data[i].VALUE);
                        sxbphCurd3[4] = parseInt(data[i].DAY3);
                        sxbphCurd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[4] = parseInt(data[i].VALUE);
                        zzLastd3[4] = parseInt(data[i].DAY3);
                        zzLastd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[4] = parseInt(data[i].VALUE);
                        gzLastd3[4] = parseInt(data[i].DAY3);
                        gzLastd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[4] = parseInt(data[i].VALUE);
                        ddyLastd3[4] = parseInt(data[i].DAY3);
                        ddyLastd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[4] = parseInt(data[i].VALUE);
                        sxbphLastd3[4] = parseInt(data[i].DAY3);
                        sxbphLastd7[4] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }


            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[5] = parseInt(data[i].VALUE);
                        zzCurd3[5] = parseInt(data[i].DAY3);
                        zzCurd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[5] = parseInt(data[i].VALUE);
                        gzCurd3[5] = parseInt(data[i].DAY3);
                        gzCurd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[5] = parseInt(data[i].VALUE);
                        ddyCurd3[5] = parseInt(data[i].DAY3);
                        ddyCurd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[5] = parseInt(data[i].VALUE);
                        sxbphCurd3[5] = parseInt(data[i].DAY3);
                        sxbphCurd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[5] = parseInt(data[i].VALUE);
                        zzLastd3[5] = parseInt(data[i].DAY3);
                        zzLastd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[5] = parseInt(data[i].VALUE);
                        gzLastd3[5] = parseInt(data[i].DAY3);
                        gzLastd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[5] = parseInt(data[i].VALUE);
                        ddyLastd3[5] = parseInt(data[i].DAY3);
                        ddyLastd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[5] = parseInt(data[i].VALUE);
                        sxbphLastd3[5] = parseInt(data[i].DAY3);
                        sxbphLastd7[5] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }


            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[6] = parseInt(data[i].VALUE);
                        zzCurd3[6] = parseInt(data[i].DAY3);
                        zzCurd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[6] = parseInt(data[i].VALUE);
                        gzCurd3[6] = parseInt(data[i].DAY3);
                        gzCurd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[6] = parseInt(data[i].VALUE);
                        ddyCurd3[6] = parseInt(data[i].DAY3);
                        ddyCurd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[6] = parseInt(data[i].VALUE);
                        sxbphCurd3[6] = parseInt(data[i].DAY3);
                        sxbphCurd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[6] = parseInt(data[i].VALUE);
                        zzLastd3[6] = parseInt(data[i].DAY3);
                        zzLastd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[6] = parseInt(data[i].VALUE);
                        gzLastd3[6] = parseInt(data[i].DAY3);
                        gzLastd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[6] = parseInt(data[i].VALUE);
                        ddyLastd3[6] = parseInt(data[i].DAY3);
                        ddyLastd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[6] = parseInt(data[i].VALUE);
                        sxbphLastd3[6] = parseInt(data[i].DAY3);
                        sxbphLastd7[6] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }


            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[7] = parseInt(data[i].VALUE);
                        zzCurd3[7] = parseInt(data[i].DAY3);
                        zzCurd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[7] = parseInt(data[i].VALUE);
                        gzCurd3[7] = parseInt(data[i].DAY3);
                        gzCurd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[7] = parseInt(data[i].VALUE);
                        ddyCurd3[7] = parseInt(data[i].DAY3);
                        ddyCurd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[7] = parseInt(data[i].VALUE);
                        sxbphCurd3[7] = parseInt(data[i].DAY3);
                        sxbphCurd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[7] = parseInt(data[i].VALUE);
                        zzLastd3[7] = parseInt(data[i].DAY3);
                        zzLastd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[7] = parseInt(data[i].VALUE);
                        gzLastd3[7] = parseInt(data[i].DAY3);
                        gzLastd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[7] = parseInt(data[i].VALUE);
                        ddyLastd3[7] = parseInt(data[i].DAY3);
                        ddyLastd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[7] = parseInt(data[i].VALUE);
                        sxbphLastd3[7] = parseInt(data[i].DAY3);
                        sxbphLastd7[7] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }

            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[8] = parseInt(data[i].VALUE);
                        zzCurd3[8] = parseInt(data[i].DAY3);
                        zzCurd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[8] = parseInt(data[i].VALUE);
                        gzCurd3[8] = parseInt(data[i].DAY3);
                        gzCurd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[8] = parseInt(data[i].VALUE);
                        ddyCurd3[8] = parseInt(data[i].DAY3);
                        ddyCurd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[8] = parseInt(data[i].VALUE);
                        sxbphCurd3[8] = parseInt(data[i].DAY3);
                        sxbphCurd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[8] = parseInt(data[i].VALUE);
                        zzLastd3[8] = parseInt(data[i].DAY3);
                        zzLastd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[8] = parseInt(data[i].VALUE);
                        gzLastd3[8] = parseInt(data[i].DAY3);
                        gzLastd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[8] = parseInt(data[i].VALUE);
                        ddyLastd3[8] = parseInt(data[i].DAY3);
                        ddyLastd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[8] = parseInt(data[i].VALUE);
                        sxbphLastd3[8] = parseInt(data[i].DAY3);
                        sxbphLastd7[8] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }

            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[9] = parseInt(data[i].VALUE);
                        zzCurd3[9] = parseInt(data[i].DAY3);
                        zzCurd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[9] = parseInt(data[i].VALUE);
                        gzCurd3[9] = parseInt(data[i].DAY3);
                        gzCurd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[9] = parseInt(data[i].VALUE);
                        ddyCurd3[9] = parseInt(data[i].DAY3);
                        ddyCurd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[9] = parseInt(data[i].VALUE);
                        sxbphCurd3[9] = parseInt(data[i].DAY3);
                        sxbphCurd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[9] = parseInt(data[i].VALUE);
                        zzLastd3[9] = parseInt(data[i].DAY3);
                        zzLastd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[9] = parseInt(data[i].VALUE);
                        gzLastd3[9] = parseInt(data[i].DAY3);
                        gzLastd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[9] = parseInt(data[i].VALUE);
                        ddyLastd3[9] = parseInt(data[i].DAY3);
                        ddyLastd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[9] = parseInt(data[i].VALUE);
                        sxbphLastd3[9] = parseInt(data[i].DAY3);
                        sxbphLastd7[9] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }

            if (data[i].SSGS === 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ') {
                if (data[i].NY === jssj) {
                    if (data[i].LX === '1') {
                        zzCurData[10] = parseInt(data[i].VALUE);
                        zzCurd3[10] = parseInt(data[i].DAY3);
                        zzCurd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzCurData[10] = parseInt(data[i].VALUE);
                        gzCurd3[10] = parseInt(data[i].DAY3);
                        gzCurd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyCurData[10] = parseInt(data[i].VALUE);
                        ddyCurd3[10] = parseInt(data[i].DAY3);
                        ddyCurd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphCurData[10] = parseInt(data[i].VALUE);
                        sxbphCurd3[10] = parseInt(data[i].DAY3);
                        sxbphCurd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

                if (data[i].NY === kssj) {
                    if (data[i].LX === '1') {
                        zzLastData[10] = parseInt(data[i].VALUE);
                        zzLastd3[10] = parseInt(data[i].DAY3);
                        zzLastd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '2') {
                        gzLastData[10] = parseInt(data[i].VALUE);
                        gzLastd3[10] = parseInt(data[i].DAY3);
                        gzLastd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '3') {
                        ddyLastData[10] = parseInt(data[i].VALUE);
                        ddyLastd3[10] = parseInt(data[i].DAY3);
                        ddyLastd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                    if (data[i].LX === '4') {
                        sxbphLastData[10] = parseInt(data[i].VALUE);
                        sxbphLastd3[10] = parseInt(data[i].DAY3);
                        sxbphLastd7[10] = parseInt(data[i].DAY7);
                        continue;
                    }

                }

            }


        }
		zzCurData.shift();zzLastData.shift();
        gzCurData.shift();gzLastData.shift();
        ddyCurData.shift();ddyLastData.shift();
        sxbphCurData.shift();sxbphLastData.shift();

		if(jssj.split(0,4) == '2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				zzCurData[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
				gzCurData[i] = null;
				ddyCurData[i] = null;
				sxbphCurData[i] = null;
			}
		}
		    // 初始化弹框里的数据，数据格式请严格按照示例
	    Popup_tqjsfx.setData({

	        area: ["浦东", "市区", "市北", "市南", "嘉定", "松江", "青浦", "奉贤", "金山", "崇明", "长兴"],

	        tqzzhb: {
	            curMonth: {
	                data: zzCurData,
	                d3: zzCurd3,
	                d7: zzCurd7,
	            },
	            lastMonth: {
	                data: zzLastData,
	                d3: zzLastd3,
	                d7: zzLastd7,
	            }
	        },
	        tqgzhb: {
	            curMonth: {
	                data: gzCurData,
	                d3: gzCurd3,
	                d7: gzCurd7
	            },
	            lastMonth: {
	                data: gzLastData,
	                d3: gzLastd3,
	                d7: gzLastd7
	            }
	        },
	        tqddyhb: {
	            curMonth: {
	                data: ddyCurData,
	                d3: ddyCurd3,
	                d7: ddyCurd7
	            },
	            lastMonth: {
	                data: ddyLastData,
	                d3: ddyLastd3,
	                d7: ddyLastd7
	            }
	        },
	        tqsxbphhb: {
	            curMonth: {
	                data: sxbphCurData,
	                d3: sxbphCurd3,
	                d7: sxbphCurd7
	            },
	            lastMonth: {
	                data: sxbphLastData,
	                d3: sxbphLastd3,
	                d7: sxbphLastd7
	            }
	        },
	        zz: {
	            curYear: zzCurData,
	            lastYear: zzLastData
	        },
	        gz: {
	            curYear: gzCurData,
	            lastYear: gzLastData
	        },
	        ddy: {
	            curYear: ddyCurData,
	            lastYear: ddyLastData
	        },
	        sxbph: {
	            curYear: sxbphCurData,
	            lastYear: sxbphLastData
	        }


	    });


    }



}

