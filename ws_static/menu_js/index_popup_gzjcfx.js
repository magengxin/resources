// 弹框内的图表初始化
// 弹框：故障监测分析
var Popup_gzjsfx = (function () {
	var nowmonth = new Date().getMonth();
	if(nowmonth=='0'){
		nowmonth = '12'
	}
    $("#l_pop_gzjc_m",parent.document).attr("data-month", nowmonth);

    var data = {};
	//echarts图表
    function update() {
	    var el = parent.window.document.querySelector("#popup-gzjcfx");
	    var chart_tzhb = echarts.init(el.querySelector("#popup-gzjcfx_tzhb"), {width: 1040, height: 690}),//跳闸环比
	        chart_gzhb = echarts.init(el.querySelector("#popup-gzjcfx_gzhb"), {width: 1040, height: 690}),//故障环比
	        chart_gzyy = echarts.init(el.querySelector("#popup-gzjcfx_gzyy"), {width: 550, height: 690}),//故障原因
	        chart_tzlhb = echarts.init(el.querySelector("#popup-gzjcfx_tzlhb"), {width: 1040, height: 690}),//跳闸率环比
	        chart_tylhb = echarts.init(el.querySelector("#popup-gzjcfx_tylhb"), {width: 1040, height: 690}),//停运率环比
	        chart_ljyh = echarts.init(el.querySelector("#popup-gzjcfx_ljyh"), {width: 550, height: 690}),//累计用户
	
	        chart_tzcs = echarts.init(el.querySelector("#popup-gzjcfx_tzcs"), {width: 1040, height: 690}),//跳闸次数
	        chart_gzcs = echarts.init(el.querySelector("#popup-gzjcfx_gzcs"), {width: 1040, height: 690}),//故障次数
	        chart_gzyy2 = echarts.init(el.querySelector("#popup-gzjcfx_gzyy2"), {width: 550, height: 690}),//分析图故障原因
	        chart_tzl = echarts.init(el.querySelector("#popup-gzjcfx_tzl"), {width: 1040, height: 690}),//跳闸率
	        chart_tyl = echarts.init(el.querySelector("#popup-gzjcfx_tyl"), {width: 1040, height: 690}),//停运率
	        chart_yxyh = echarts.init(el.querySelector("#popup-gzjcfx_yxyh"), {width: 550, height: 690});//影响用户
        // 跳闸环比
        var option_tzhb = {
            title: [
                {
                    text: "(当月)" + sumArr(data.tzhb.curMonth),
                    textStyle: {
                        color: '#fff',
                        fontSize: 24
                    },
                    left: 20,
                    top: 30
                },
                {
                    text: "(上月)" + sumArr(data.tzhb.lastMonth),
                    textStyle: {
                        color: '#fff',
                        fontSize: 24
                    },
                    left: 220,
                    top: 30
                }
            ],
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
            legend: {
                right: 20,
                top: 30,
                data: [{
                    name: "当月"
                }, {
                    name: "上月"
                }],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 20,
                top: 100,
                width: 1000,
                height: 560,
                containLabel: true
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 18,
                    color: "#fff"
                },
                splitLine: {
                    lineStyle: {
                        color: "#08405d"
                    }
                }
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
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    data: data.tzhb.curMonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'bar',
                    name: "上月",
                    itemStyle: {
                        color: "#0060e5"
                    },
                    data: data.tzhb.lastMonth,
                    barGap: "1%",
                    barWidth: 20
                },
            ]
        };
        chart_tzhb.setOption(option_tzhb,{notMerge:true});//跳闸环比

        // 故障环比
        var option_gzhb = {
            title: [
                {
                    text: "(当月)" + sumArr(data.gzhb.curMonth.map(sumArr)),
                    textStyle: {
                        color: '#fff',
                        fontSize: 24
                    },
                    left: 20,
                    top: 30
                },
                {
                    text: "(上月)" + sumArr(data.gzhb.lastMonth.map(sumArr)),
                    textStyle: {
                        color: '#fff',
                        fontSize: 24
                    },
                    left: 220,
                    top: 30
                }
            ],
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
            legend: {
                right: 20,
                top: 30,
                width: 400,
                data: ['当月变电', '当月线路', '当月电缆', '上月变电', '上月线路', '上月电缆'],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 20,
                top: 120,
                width: 1000,
                height: 540,
                containLabel: true
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 18,
                    color: "#fff"
                },
                splitLine: {
                    lineStyle: {
                        color: "#08405d"
                    }
                }
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
            series: (function () {
                var arr = [];
                for (var i = 0; i < 6; i++) {
                    arr.push({
                        type: "bar",
                        name: ['当月变电', '当月线路', '当月电缆', '上月变电', '上月线路', '上月电缆'][i],
                        stack: i < 3 ? "当月" : "上月",
                        itemStyle: {
                            color: ["#0056b8", "#009bdf", "#00bfd7", "#00834d", "#429577", "#83b49e"][i]
                        },
                        data: data.gzhb[(i < 3 ? "curMonth" : "lastMonth")].map(function (item) {
                            return item[i % 3]
                        }),
                        barGap: "20%",
                        barWidth: 20
                    })
                }
                return arr;
            })(),
        };
        chart_gzhb.setOption(option_gzhb,true);//故障环比

        // 故障原因
        var option_gzyy = {
            title: {
                text: "当月",
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                right: 20,
                top: 30
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: "{b}: {c}",
                padding: 10
            },
            legend: [
                {
                    name: "aaa",
                    bottom: 30,
                    formatter: function (name) {
                        var v = data.gzyy.data.find(function (item) {
                            return item.name == name
                        }).value;
                        return "{a|" + name + "}\n{b|" + v + "}"
                    },
                    textStyle: {
                        padding: [10, 10, 0, 10],
                        color: "#fff",
                        rich: {
                            a: {
                                fontSize: 24,
                                lineHeight: 40,
                                width: 100,
                                verticalAlign: "top"
                            },
                            b: {
                                fontSize: 40,
                                width: 100,
                            }
                        }
                    },
                    selectedMode: false
                }
            ],
            series: [{
                type: "pie",
                name: "aaa",
                data: data.gzyy.data.map(function (item, index) {
                    item.itemStyle = {
                        color: [ "#009bdf", "#00bfd7","#0056b8"][index]
                    };
                    return item
                }),
                label: {
                    color: '#fff',
                    fontSize: 24,
                    position: "inside"
                }
            }]
        };
        chart_gzyy.setOption(option_gzyy,true);//故障原因

        // 跳闸率环比
        var option_tzlhb = {
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
            legend: {
                right: 20,
                top: 30,
                data: [{
                    name: "当月"
                }, {
                    name: "上月"
                }],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            
            grid: {
                left: 20,
                top: 120,
                width: 1000,
                height: 540,
                containLabel: true
            },
            yAxis: {
                type: 'value',
                name: "%",
                nameTextStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
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
                }
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
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    data: data.tzlhb.curMonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'bar',
                    name: "上月",
                    itemStyle: {
                        color: "#0060e5"
                    },
                    data: data.tzlhb.lastMonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'line',
//                  name: '公司跳闸率',
                    name: '公司:',
                    symbolSize: 1,
                    itemStyle: {
                        color: "#00ff00"
                    },
                    lineStyle: {
                        color: "#00ff00"
                    },
                    label: {
                        show: true,
//                      formatter: "{a}({c}%)",
                        formatter: "{a}{c}%",
                        fontSize: 18,
                        color: "#00ff00",
                        position: [-885,-18]
                    },
                    data: (function () {
                        var tmp = data.tzlhb.curMonth.concat(data.tzlhb.lastMonth);
                        var average = sumArr(tmp) / tmp.length;
                        return tmp.map(function (num, index) {
                            return {
                                value: average.toFixed(2),
                                label: {
                                    show: index == tmp.length / 2 - 1,
                                }
                            }
                        });
                    })()
                }
            ]
        };
        chart_tzlhb.setOption(option_tzlhb,true);//跳闸率环比

        // 停运率环比
        var option_tylhb = {
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
            legend: {
                right: 20,
                top: 30,
                data: [{
                    name: "当月"
                }, {
                    name: "上月"
                }],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 20,
                top: 120,
                width: 1000,
                height: 540,
                containLabel: true
            },
            yAxis: {
                type: 'value',
                name: "%",
                nameTextStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                max:0.7,
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
                }
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
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    data: data.tylhb.curMonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'bar',
                    name: "上月",
                    itemStyle: {
                        color: "#0060e5"
                    },
                    data: data.tylhb.lastMonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'line',
//                  name: '公司停运率',
                    name: '公司:',
                    symbolSize: 1,
                    itemStyle: {
                        color: "#00ff00"
                    },
                    lineStyle: {
                        color: "#00ff00"
                    },
                    label: {
                        show: true,
//                      formatter: "{a}({c}%)",
                        formatter: "{a}{c}%",
                        fontSize: 18,
                        color: "#00ff00",
                        position: [-885,-18]
                    },
                    data: (function () {
                        var tmp = data.tylhb.curMonth.concat(data.tylhb.lastMonth);
                        var average = sumArr(tmp) / tmp.length;
                        return tmp.map(function (num, index) {
                            return {
                                value: average.toFixed(2),
                                label: {
                                    show: index == tmp.length / 2 - 1,
                                }
                            }
                        });
                    })()
                }
            ]
        };
        chart_tylhb.setOption(option_tylhb,true);//停运率环比

        // 累计用户
        var option_ljyh = {
            title: [
                {
                    text: "当月",
                    textStyle: {
                        color: '#fff',
                        fontSize: 24
                    },
                    right: 20,
                    top: 30
                }
            ],
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
            legend: [
                {
                    name: "aaa",
                    bottom: 30,
                    formatter: function (name) {
                        var v = data.ljyh.data.find(function (item) {
                            return item.name == name
                        }).value;
                        return "{a|" + name + "}\n{b|" + v + "}"
                    },
                    textStyle: {
                        padding: [10, 10, 0, 10],
                        color: "#fff",
                        rich: {
                            a: {
                                fontSize: 24,
                                lineHeight: 40,
                                width: 100,
                                verticalAlign: "top"
                            },
                            b: {
                                fontSize: 40,
                                width: 100,
                            }
                        }
                    },
                    selectedMode: false
                }
            ],
            series: [{
                type: "pie",
                radius: ["55%", "75%"],
                data: data.ljyh.data.map(function (item, index) {
                    // item.name += "　　";
                    item.itemStyle = {
                        color: ["#1babe8", "#0060e5", "#244190"][index]
                    };
                    return item
                }),
                label: {
                    show: false
                },
            }]
        };
        chart_ljyh.setOption(option_ljyh,true);//累计用户

        // 跳闸次数
        var nowMonth = new Date().getMonth();
        if(nowMonth==0){
        	nowMonth=12;
        }
        var option_tzcs = {
            tooltip: {
                show: true,
                trigger: 'axis',
                padding: 10
                
            },
            legend: {
                right: 20,
                top: 30,
                data: ["当年", "上年"],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 60,
                top: 100,
                width: 880,
                height: 560,
                containLabel: true
            },
            yAxis: {
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
                nameGap: 20,
                data: (function () {
                    var arr = [];
                    for (var i = 1; i <= 12; i++) arr.push(i);
                    return arr
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
                        color: "#08405d"
                    }
                },
            },
            series: [
                {
                    type: "line",
                    name: "当年",
                    symbol: "circle",
                    symbolSize: 10,
                    
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
                    			data.tzcs.curYear.sort(sortNumber);
								if (params.value == data.tzcs.curYear[nowMonth-1]) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    
                    
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    data: (function () {
                    	data.tzcs.curYear.length = nowMonth;
                    	return data.tzcs.curYear
                    })()

                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                },
                {
                    type: "line",
                    name: "上年",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
                    			var theLen = data.tzcs.lastYear.length;
	                    			data.tzcs.lastYear.sort(sortNumber);
									if (params.value == data.tzcs.lastYear[theLen-1]) {
										return params.value;
									}else{
										return '';
									}
                    		}
                    	}
                    },
                    itemStyle: {
                        color: "#00db5a"
                    },
                    data:data.tzcs.lastYear
                }
            ]
        };
        chart_tzcs.setOption(option_tzcs,true);//跳闸次数

        // 故障次数
        var option_gzcs = Object.assign({}, option_tzcs, {
            series: [
                {
                    type: "line",
                    name: "当年",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
                    			data.gzcs.curYear.sort(sortNumber);
								if (params.value == data.gzcs.curYear[nowMonth-1]) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    data: (function () {
		                    	data.gzcs.curYear.length = nowMonth;
		                    	return data.gzcs.curYear
		                    })()
                    // areaStyle: {
                    //     opacity: 0.1
                    // },
                    
                    
                },
                {
                    type: "line",
                    name: "上年",
                    symbol: "circle",
                    symbolSize: 10,
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
                    			var theLen = data.gzcs.lastYear.length;
	                    			data.gzcs.lastYear.sort(sortNumber);
									if (params.value == data.gzcs.lastYear[theLen-1]) {
										return params.value;
									}else{
										return '';
									}
                    		}
                    	}
                    },
                    itemStyle: {
                        color: "#00db5a"
                    },
                    data: data.gzcs.lastYear
                }
            ]
        });
        chart_gzcs.setOption(option_gzcs,true);//故障次数

       var option_gzyy2 = {
            title: {
                text: "当年",
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
                right: 20,
                top: 30
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: "{b}: {c}",
                padding: 10
            },
            legend: [
                {
                    name: "aaa",
                    bottom: 30,
                    formatter: function (name) {
                        var v = data.gzyy2.data.find(function (item) {
                            return item.name == name
                        }).value;
                        return "{a|" + name + "}\n{b|" + v + "}"
                    },
                    textStyle: {
                        padding: [10, 10, 0, 10],
                        color: "#fff",
                        rich: {
                            a: {
                                fontSize: 24,
                                lineHeight: 40,
                                width: 100,
                                verticalAlign: "top"
                            },
                            b: {
                                fontSize: 40,
                                width: 100,
                            }
                        }
                    },
                    selectedMode: false
                }
            ],
            series: [{
                type: "pie",
                name: "aaa",
                data: data.gzyy2.data.map(function (item, index) {
                    item.itemStyle = {
                        color: ["#1babe8", "#0060e5", "#244190"][index]
                    };
                    return item
                }),
                label: {
                    color: '#fff',
                    fontSize: 24,
                    position: "inside"
                }
            }]
        };
        chart_gzyy2.setOption(option_gzyy2,true);//分析图故障原因

        // 跳闸率
        var option_tzl = {
            tooltip: {
                show: true,
                trigger: 'axis',
                padding: 10
            },
            legend: {
                right: 20,
                top: 30,
                data: Object.keys(data.tzl),
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 60,
                top: 100,
                width: 880,
                height: 560,
                containLabel: true
            },
            yAxis: {
                type: 'value',
                name: '%',
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
                nameGap: 20,
                data: (function () {
                    var arr = [];
                    for (var i = 1; i <= 12; i++) arr.push(i);
                    return arr
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
                        color: "#08405d"
                    }
                },
            },
            series: [
                {
                    type: "line",
                        name: '当年',
                        symbol: "circle",
                    	symbolSize: 10,
                    	label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize:24,
	                    		formatter: function (params) {
	                    			data.tzl['当年'].sort(sortNumber);
									if (params.value == data.tzl['当年'][nowMonth-1]) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                    },
                        itemStyle: {
	                        color: "#12b4ff"
	                    },
                        smooth: false,
                        
                        data: (function () {
	                    	data.tzl['当年'].length = nowMonth;
	                    	return data.tzl['当年']
	                    })()
                        
                    
                },
                {
                    type: "line",
                        name: '上年',
                        symbol: "circle",
                    	symbolSize: 10,
                    	label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize:24,
	                    		formatter: function (params) {
	                    			var theLen = data.tzl['上年'].length;
		                    			data.tzl['上年'].sort(sortNumber);
										if (params.value == data.tzl['上年'][theLen-1]) {
											return params.value;
										}else{
											return '';
										}
	                    		}
	                    	}
	                    },
                        itemStyle: {
	                        color: "#00db5a"
	                    },
                        smooth: false,
                        data: data.tzl['上年']
                }  
            ]   
        };
        chart_tzl.setOption(option_tzl,true);//跳闸率

        // 停运率
        var option_tyl = Object.assign({}, option_tzl, {
        	series: [
                {
                    type: "line",
                        name: '当年',
                        symbol: "circle",
                    	symbolSize: 10,
                    	label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize:24,
	                    		formatter: function (params) {
	                    			data.tyl['当年'].sort(sortNumber);
									if (params.value == data.tyl['当年'][nowMonth-1]) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    		
	                    	}
	                    },
                        itemStyle: {
	                        color: "#12b4ff"
	                    },
                        smooth: false,
                        
                        data: (function () {
	                    	data.tyl['当年'].length = nowMonth;
	                    	return data.tyl['当年']
	                    })()
                        
                },
                
                {
                    type: "line",
                        name: '上年',
                        symbol: "circle",
                    	symbolSize: 10,
                    	label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize:24,
	                    		formatter: function (params) {
	                    			var theLen = data.tyl['上年'].length;
		                    			data.tyl['上年'].sort(sortNumber);
										if (params.value == data.tyl['上年'][theLen-1]) {
											return params.value;
										}else{
											return '';
										}
	                    		}
	                    		
	                    	}
	                    },
                        itemStyle: {
	                        color: "#00db5a"
	                    },
                        smooth: false,
                        data: data.tyl['上年']                    
                } 
            ]
        });
        chart_tyl.setOption(option_tyl,true);//停运率
         
         
        // 影响用户
        var option_yxyh = {
        	title: [
                {
                    text: "当年",
                    textStyle: {
                        color: '#fff',
                        fontSize: 24
                    },
                    right: 20,
                    top: 30
                }
            ],
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
            legend: [
                {
                    name: "aaa",
                    bottom: 30,
                    formatter: function (name) {
                        var v = data.yxyh.data.find(function (item) {
                            return item.name == name
                        }).value;
                        return "{a|" + name + "}\n{b|" + v + "}"
                    },
                    textStyle: {
                        padding: [10, 10, 0, 10],
                        color: "#fff",
                        rich: {
                            a: {
                                fontSize: 24,
                                lineHeight: 40,
                                width: 100,
                                verticalAlign: "top"
                            },
                            b: {
                                fontSize: 40,
                                width: 100,
                            }
                        }
                    },
                    selectedMode: false
                }
            ],
            series: [{
                type: "pie",
                radius: ["55%", "75%"],
                data: data.yxyh.data.map(function (item, index) {
                    item.name += "　　";
                    item.itemStyle = {
                        color: ["#1babe8", "#0060e5", "#244190"][index]
                    };
                    return item
                }),
                label: {
                    show: false
                },
            }]
        };
        chart_yxyh.setOption(option_yxyh,true);//影响用户

    }

    function setData(newdata, isMarge) {
    	
        if (!newdata) return;
        var isEmpty = true;
        for (var t in data) {
            isEmpty = false;
        }
        if (isEmpty) {
            data = newdata;
        } else if (isMarge) {
            for (var key in newdata) {
                data[key] = newdata[key];
            }
        } else {
            f(newdata, data);
        }
        
        update();
    }

    function f(newdata, cacheData) {
        for (var key in newdata) {
            if (!Array.isArray(newdata[key])) {
                f(newdata[key], cacheData[key]);
            } else {
                cacheData[key] = newdata[key];
            }
        }
    }

    function sumArr(arr) {
        return arr.reduce(function (acc, cur) {
            return acc + cur
        }, 0)
    }

    return {
        setData: setData
    }
})();

function sortNumber (a,b) {
	return a - b
}


//初始化 数据
	Popup_gzjsfx.setData({
        area: ["核心区", "浦东", "市区", "市北", "市南", "嘉定", "松江", "青浦", "奉贤", "金山", "崇明", "长兴"],
        tzhb: {//跳闸环比
            curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        gzhb: {//故障环比
            curMonth: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
            lastMonth: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
        },
        gzyy: {//故障原因
            data: [
                {name: "架空线路", value: 0},
                {name: "电缆", value: 0},
                {name: "变电", value: 0},
            ]
        },
        gzyy2: {//分析图故障原因
            data: [
                {name: "架空线路", value: 0},
                {name: "电缆", value: 0},
                {name: "变电", value: 0},
            ]
        },
        tzlhb: {//跳闸率环比
            curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        tylhb: {//停运率环比
            curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        ////////////////////
        tzcs: {//跳闸次数
            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        gzcs: {//故障次数
            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        tzl: {//跳闸率
            "当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        tyl: {//停运率
            "当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        ljyh: {//累计用户
            data: [
                {name: "10KV", value: 0},
                {name: "380KV", value: 0}
            ]
        },
        yxyh: {//影响用户
            data: [
                {name: "10KV", value: 0},
                {name: "380KV", value: 0}
            ]
        }
   });

/**
 * 点击地址切换
 * @param {Object} area
 */
function gzjc_qsfx(area) {
//	gzjc_fbtj_init();
    if(area != '上海'){
        $("#fenbutongji2").hide();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi2").show();
        $(".m_gzjzfx").hide();
        $(".y_gzjzfx").show();
        popup_tab_toggle($("#fenbutongji2"),1);
        $("input[name = 'radio_gzjcfx_type']").get(1).checked = true;

    }
    if(area == '上海'){
        $("#fenbutongji2").show();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi2").show();
        $("input[name = 'radio_gzjcfx_type']").get(0).checked = true;
        $(".m_gzjzfx").show();
        $(".y_gzjzfx").hide();
        popup_tab_toggle($("#fenbutongji2"),0);
    }

	clickChangeYear()//地区切换完成后调一下年份切换函数来重新初始化趋势分析
}

/**
 * 点击切换年份
 */
function clickChangeYear(){
	var year=$("input[name = 'radio_gzjcfx_year']:checked").val();//2017
	var eara=$("input[name = 'radio_gzjcfx_area']:checked").val();//地区
	if( '2018' == year){//getFullYear返回4位数字2018
		setTimeout(function(){
			gzjc_qsfx_popup(eara, new Date(year,11,31));//加载趋势分析图
		},1000)
		
	}else{
		var date1 = new Date(year,11,31);
		setTimeout(function(){
			gzjc_qsfx_popup(eara, date1);//加载趋势分析图
		},1000)
		
	}	
}

//页面添加分析图
function append_gzjc(){
	$('#popup-gzjcfx',parent.document).empty();
	var arrClick = ["('上海')","('核心')","('浦东')","('市区')","('市北')","('市南')","('嘉定')","('松江')","('青浦')","('奉贤')","('金山')","('崇明')","('长兴')"]
	var divId = "$('#popup-gzjcfx')";
	var divup = "(this, 'up')";
	var divdown = "(this, 'down')";
	var html = '<div class="popup-normal__head">'+
				'<span class="popup-normal__close" onclick="javascript:'+divId+'.hide();"></span>'+
				'<span>故障监测分析</span>'+
			'</div>'+
			'<div class="popup-normal__main">'+
				'<div class="popup-normal__areaSelect">'+
					'<label><input value="上海" type="radio" name="radio_gzjcfx_area" onclick="append_gzjc()" checked><span>上海公司</span></label>'+
					'<label><input value="核心" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[1]+'"><span>核心区</span></label>'+
					'<label><input value="浦东" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[2]+'"><span>浦东</span></label>'+
					'<label><input value="市区" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[3]+'"><span>市区</span></label>'+
					'<label><input value="市北" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[4]+'"><span>市北</span></label>'+
					'<label><input value="市南" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[5]+'"><span>市南</span></label>'+
					'<label><input value="嘉定" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[6]+'"><span>嘉定</span></label>'+
					'<label><input value="松江" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[7]+'"><span>松江</span></label>'+
					'<label><input value="青浦" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[8]+'"><span>青浦</span></label>'+
					'<label><input value="奉贤" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[9]+'"><span>奉贤</span></label>'+
					'<label><input value="金山" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[10]+'"><span>金山</span></label>'+
					'<label><input value="崇明" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[11]+'"><span>崇明</span></label>'+
					'<label><input value="长兴" type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx'+arrClick[12]+'"><span>长兴</span></label>'+
				'</div>'+
				'<div class="popup-normal__timeSelect m_gzjzfx">'+
					'<span class="arrUp" onclick="javascript:popup_comp_timeSelect'+divup+';gzjc_fbtj_init()"></span>'+
					'<span class="arrDown" onclick="javascript:popup_comp_timeSelect'+divdown+'; gzjc_fbtj_init()"></span>'+
					'<span class="y" id="l_pop_gzjc_0y">2018年</span>'+
					'<span class="m" id="l_pop_gzjc_m" data-month="12">月</span>'+
				'</div>'+
				'<dl class="popup-normal__typeSelect popup-normal__yearSelect y_gzjzfx lys_one_wid_change lys_hover" style="display: none">'+

					'<dt>2018</dt>'+
					'<dd><label><input type="radio" name="radio_gzjcfx_year" value="2017" onclick="clickChangeYear()"><span>2017</span></label></dd>'+
					'<dd><label><input type="radio" name="radio_gzjcfx_year" checked value="2018" onclick="clickChangeYear()"><span>2018</span></label></dd>'+
				'</dl>'+
				'<div class="popup-normal__typeSelect">'+
					'<label id="fenbutongji2"><input type="radio" name="radio_gzjcfx_type" checked onclick="javascript:popup_tab_toggle(this,0)"><span>分布统计</span></label>'+
					'<label id="qushifenxi2"><input type="radio" name="radio_gzjcfx_type" onclick="javascript:popup_tab_toggle(this,1)"><span>趋势分析</span></label>'+
				'</div>'+
				'<div class="popup-normal__tabContent">'+
					'<div class="popup-normal__block popup-gzjcfx__block-tzhb">'+
						'<div class="popup-normal__blockTitle">跳闸环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_tzhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-gzhb">'+
						'<div class="popup-normal__blockTitle">故障环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_gzhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-gzyy">'+
						'<div class="popup-normal__blockTitle">故障原因</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_gzyy"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-tzlhb">'+
						'<div class="popup-normal__blockTitle">跳闸率环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_tzlhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-tylhb">'+
						'<div class="popup-normal__blockTitle">停运率环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_tylhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-ljyh">'+
						'<div class="popup-normal__blockTitle">累计用户</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_ljyh"></div>'+
					'</div>'+
				'</div>'+
				
				'<div class="popup-normal__tabContent" style="display:none">'+
					'<div class="popup-normal__block popup-gzjcfx__block-tzhb">'+
						'<div class="popup-normal__blockTitle">跳闸次数</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_tzcs"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-gzhb">'+
						'<div class="popup-normal__blockTitle">故障次数</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_gzcs"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-gzyy">'+
						'<div class="popup-normal__blockTitle">故障原因</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_gzyy2"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-tzlhb">'+
						'<div class="popup-normal__blockTitle">跳闸率</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_tzl"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-tylhb">'+
						'<div class="popup-normal__blockTitle">停运率</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_tyl"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-gzjcfx__block-ljyh">'+
						'<div class="popup-normal__blockTitle">影响用户</div>'+
						'<div class="popup-normal__blockMain" id="popup-gzjcfx_yxyh"></div>'+
					'</div>'+
				'</div>'+
				
			'</div>';
		$('#popup-gzjcfx',parent.document).html(html);
		$('.lys_hover dd',parent.document).click(function () {
			$('.lys_hover dt',parent.document).html($(this).find('span').html());
		});
		gzjc_fbtj_init();//加载分布图
}

/**
 * 点击弹出中间弹框的按钮
 */

function gzjc_fbtj_init() {
	var nowyear = new Date().getFullYear()+'年';
	var nowmonth = new Date().getMonth();
	if(nowmonth == 0){
		nowyear = '2018年';
		$("#l_pop_gzjc_0y",parent.document).html(nowyear);
		gzjc_fbtj();//初始化分布统计
		gzjc_qsfx_popup('上海', moment().add(-1 , "month")); //初始化趋势分析
	}else{
		$("#l_pop_gzjc_0y",parent.document).html(nowyear);
		gzjc_fbtj();//初始化分布统计
		gzjc_qsfx_popup('上海', new Date()); //初始化趋势分析
	}
	
	
}

/**
 * 点击月份切换初始化分布统计
 */

function gzjc_fbtj() {
    var m = $("#l_pop_gzjc_m",parent.document).attr("data-month");
	var month = new Date().getMonth();//0
	var year = new Date().getFullYear();
	console.log(m+'-----------'+month);
	if(month == 0){
		month = 12;
		year = 2018;
	}
	if(m>month){
		$("#l_pop_gzjc_m",parent.document).attr("data-month",month);//分布统计绑定年份
		return;
	}
	
    if(Number(m)>9){
    	var thisMon=year.toString()+m;//上个月
    }else{
    	var thisMon=year.toString()+'0'+m;//当月
    }
    tm=Number(m)-1;
    if(tm>9){
    	var lastMon=year.toString()+tm;
    }else{
    	var lastMon=year.toString()+'0'+tm;
    }
    
	gzjc_fbtj_popup(thisMon, lastMon);//分布统计图

    
    
}
/**
 * 绑定分布统计图表
 * @param {Object} yyyymm
 * @param {Object} yyyymml
 */
function gzjc_fbtj_popup(yyyymm, yyyymml) {
	
    var f1 = function () {
        var n1s = [], n2s = [], n3s = [], n4s = [], n5s = [0, 0, 0], n6s = [0, 0];
        for (var i = 0; i < arguments.length; i++) {
            var data = arguments[i][0].data;
            if (data == undefined) {
                n1s[i] = 0;
                n2s[i] = [0, 0, 0];
                n3s[i] = 0;
                n4s[i] = 0;
            } else {
                var n2ss = [0, 0, 0];
                for (var j = 0; j < data.length; j++) {
                    switch (data[j].LX) {
                        case '1': //跳闸
                            n1s[i] = Number(data[j].VALUE);
                            break;
                        case '5':
                            switch (data[j].ZLX) {
                                case '1':
                                    n6s[0] += Number(data[j].VALUE);
                                    break;
                                case '2':
                                    n6s[1] += Number(data[j].VALUE);
                                    break;
                            }
                            break;
                        case '6': //故障
                            switch (data[j].ZLX) {
                                case '1':
                                    n2ss[0] = Number(data[j].VALUE);
                                    n5s[0] += Number(data[j].VALUE);
                                    break;
                                case '2':
                                    n2ss[1] = Number(data[j].VALUE);
                                    n5s[1] += Number(data[j].VALUE);
                                    break;
                                case '3':
                                    n2ss[2] = Number(data[j].VALUE);
                                    n5s[2] += Number(data[j].VALUE);
                                    break;
                            }
                            n2s[i] = n2ss;
                            break;
                        case '3': //跳闸率
                            n3s[i] = Number(data[j].VALUE);
                            break;
                        case '4': //故障率
                            n4s[i] = Number(data[j].VALUE);
                    }
                }
            }
        }
        Popup_gzjsfx.setData({//塞数据
            tzhb: {curMonth: n1s},
            gzhb: {curMonth: n2s},
            tzlhb: {curMonth: n3s},
            tylhb: {curMonth: n4s},
            gzyy: {
                data: [
                    {name: "架空线路", value: n5s[0]},
                    {name: "电缆", value: n5s[1]},
                    {name: "变电", value: n5s[2]},
                ]
            },
            ljyh: {
                data: [
                    {name: "10KV", value: n6s[0]},
                    {name: "380KV", value: n6s[1]}
                ]
            },
            yxyh: {
                data: [
                    {name: "10KV", value: n6s[0]},
                    {name: "380KV", value: n6s[1]}
                ]
            },
        });
    };
    getGuzhangTongjiData(f1, SSGS_IDS, yyyymm);//调用故障统计接口

    var f2 = function () {
        var n1s = [], n2s = [], n3s = [], n4s = [];
        for (var i = 0; i < arguments.length; i++) {
            var data = arguments[i][0].data;
            if (data == undefined) {
                n1s[i] = 0;
                n2s[i] = [0, 0, 0];
                n3s[i] = 0;
                n4s[i] = 0;
            } else {
                var n2ss = [0, 0, 0];
                for (var j = 0; j < data.length; j++) {
                    switch (data[j].LX) {
                        case '1': //跳闸
                            n1s[i] = Number(data[j].VALUE);
                            break;
                        case '6': //故障
                            switch (data[j].ZLX) {
                                case '1':
                                    n2ss[0] = Number(data[j].VALUE);
                                    break;
                                case '2':
                                    n2ss[1] = Number(data[j].VALUE);
                                    break;
                                case '3':
                                    n2ss[2] = Number(data[j].VALUE);
                                    break;
                            }
                            n2s[i] = n2ss;
                            break;
                        case '3': //跳闸率
                            n3s[i] = Number(data[j].VALUE);
                            break;
                        case '4': //停运率
                            n4s[i] = Number(data[j].VALUE);
                    }
                }
            }
        }
        Popup_gzjsfx.setData({
            tzhb: {lastMonth: n1s},
            gzhb: {lastMonth: n2s},
            tzlhb: {lastMonth: n3s},
            tylhb: {lastMonth: n4s},
        });
    };
    getGuzhangTongjiData(f2, SSGS_IDS, yyyymml);//调用故障统计接口
}

// POPUP
// 故障统计
function getGuzhangTongjiData(callback, ssgss, yyyymm) {
    var configs = [];
    var url = basepath + "interface/BDZT_GETQWYXJKTJ_GZJC/0";
    for (var i = 0; i < ssgss.length; i++) {
        configs[i] = {"url": url, "param": {"SSGS": ssgss[i], "SFHXQ": SSGS_VIP_MAP[ssgss[i]], "KSSJ": yyyymm, "JSSJ": yyyymm}};
    }
    bcallgetajax(callback, configs);
}

/**
 * 绑定趋势分析图表
 * @param {Object} ssgs
 * @param {Object} date
 */
function gzjc_qsfx_popup(ssgs, date) {
	var n5s = [0, 0, 0];//存放故障数，架空线路/电缆/变电页面添加数据
    var zm = {'01':0, '02':1, '03':2, '04':3, '05':4, '06':5, '07':6, '08':7, '09':8, '10':9, '11':10, '12':11};//12个地区
    var zy = [date.getUTCFullYear() - 1, date.getUTCFullYear()];//上年当年2017   2018
    var startMonth = zy[0] + "01";//201701
    var endMonth = dateFtt("yyyyMM", date);//201809
    var t = function(zz) {
        zz = zz || 12;
        var arr = [];
        arr.length = 12;
        return arr.fill(0, 0, zz);;
    }
	var thisYearTzl=[];
	var lastYearTzl=[];
	var thisYearTyl=[];
	var lastYearTyl=[];
	
    var f = function (rlt) {//故障分析回调---201701--201809
        var cm = date.getMonth() + 1;//10
        var n1s = t(cm), n2s = t(cm), n3s = t(cm), n4s = t(cm);//[0,0,10]
        var p1s = t(), p2s = t(), p3s = t(), p4s = t();//[0,0,12]
        var data = rlt.data;
        if (rlt.data != null) {
            for (var i = 0; i < data.length; i++) {
                switch (data[i].LX) {
                    case '1': //跳闸
                        if (data[i].NF == zy[0] + "") {
                            p1s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n1s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '2': //故障
                        if (data[i].NF == zy[0] + "") {
                            p2s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n2s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '3': //跳闸率
                        if (data[i].NF == zy[0] + "") {
                            p3s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n3s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '4': //停运率
                        if (data[i].NF == zy[0] + "") {
                            p4s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n4s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                   case '6'://故障
                   if(date.getFullYear() == data[i].NF){
                       switch (data[i].ZLX) {
                                case '1':
                                    n5s[0] += Number(data[i].VALUE);
                                    break;
                                case '2':
                                    n5s[1] += Number(data[i].VALUE);
                                    break;
                                case '3':
                                    n5s[2] += Number(data[i].VALUE);
                                    break;
                            }
                      }
                }
            }
        }
//      var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
//      //当前月份没有值，给他们赋值为null则在统计图形上不会被连线
//      n1s[nowMonth] = null;n2s[nowMonth] = null;n3s[nowMonth] = null;n4s[nowMonth] = null;
        if(ssgs=='上海'){
        	Popup_gzjsfx.setData({
	        	tzl: {"当年": n3s, "上年": p3s},//跳闸率
	            tyl: {"当年": n4s, "上年": p4s},//停运率
	            tzcs: {curYear: n1s, lastYear: p1s},//跳闸次数
	            gzcs: {curYear: n2s, lastYear: p2s},//故障次数 
	            gzyy2: {
	                data: [
	                    {name: "架空线路", value: n5s[0]},
	                    {name: "电缆", value: n5s[1]},
	                    {name: "变电", value: n5s[2]},
	                ]
             	},
	        },true);
        }else{
        	thisYearTzl=n3s;
        	lastYearTzl=p3s;
        	thisYearTyl=n4s;
			lastYearTyl=p4s;
			Popup_gzjsfx.setData({
	            tzcs: {curYear: n1s, lastYear: p1s},//跳闸次数
	            gzcs: {curYear: n2s, lastYear: p2s},//故障次数 
	            gzyy2: {
	                data: [
	                    {name: "架空线路", value: n5s[0]},
	                    {name: "电缆", value: n5s[1]},
	                    {name: "变电", value: n5s[2]},
	                ]
             	},
	        },true);
        	getGuzhangFenxiData(f1, SSGSMAP_NAME['上海'], startMonth, endMonth);
        }
        
    };
    getGuzhangFenxiData(f, SSGSMAP_NAME[ssgs], startMonth, endMonth);//调用故障分析接口

    var f1 = function (rlt) {//故障分析分布图回调
        var cm = date.getMonth() + 1;
        var n3s = t(cm), n4s = t(cm);
        var p3s = t(), p4s = t();
        var data = rlt.data;
        if (rlt.data != null) {
            for (var i = 0; i < data.length; i++) {
                switch (data[i].LX) {
                    case '3': //跳闸率
                        if (data[i].NF == zy[0] + "") {
                            p3s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n3s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '4': //停运率
                        if (data[i].NF == zy[0] + "") {
                            p4s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n4s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                }
            }
        }
        Popup_gzjsfx.setData({//塞数据
            tzl: {"当年": thisYearTzl, "上年": lastYearTzl,"上海公司当年": n3s, "上海公司上年": p3s},
            tyl: {"当年": thisYearTyl, "上年": lastYearTyl,"上海公司当年": n4s, "上海公司上年": p4s},
        },true);
    };
    
}
// 故障分析
function getGuzhangFenxiData(callback, ssgs, startMonth, endMonth) {
    var param = {"SSGS": ssgs, "SFHXQ": SSGS_VIP_MAP[ssgs], "KSSJ": startMonth, "JSSJ": endMonth};
    callgetajax(callback, basepath + "interface/BDZT_GETQWYXJKTJ_GZJC/0", param);
}