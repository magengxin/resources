// 弹框内的图表初始化
// 弹框：故障监测分析
var Popup_gzjsfx = (function () {
	var nowmonth = new Date().getMonth();
	if(nowmonth==0){
		nowmonth = 12
	}
    $("#l_pop_gzjc_m").attr("data-month", nowmonth);

    var el = document.querySelector("#popup-gzjcfx");

    var chart_tzhb = echarts.init(el.querySelector("#popup-gzjcfx_tzhb"), {width: 1040, height: 690}),
        chart_gzhb = echarts.init(el.querySelector("#popup-gzjcfx_gzhb"), {width: 1040, height: 690}),
        chart_gzyy = echarts.init(el.querySelector("#popup-gzjcfx_gzyy"), {width: 550, height: 690}),
        chart_tzlhb = echarts.init(el.querySelector("#popup-gzjcfx_tzlhb"), {width: 1040, height: 690}),
        chart_tylhb = echarts.init(el.querySelector("#popup-gzjcfx_tylhb"), {width: 1040, height: 690}),
        chart_ljyh = echarts.init(el.querySelector("#popup-gzjcfx_ljyh"), {width: 550, height: 690}),

        chart_tzcs = echarts.init(el.querySelector("#popup-gzjcfx_tzcs"), {width: 1040, height: 690}),
        chart_gzcs = echarts.init(el.querySelector("#popup-gzjcfx_gzcs"), {width: 1040, height: 690}),
        chart_gzyy2 = echarts.init(el.querySelector("#popup-gzjcfx_gzyy2"), {width: 550, height: 690}),
        chart_tzl = echarts.init(el.querySelector("#popup-gzjcfx_tzl"), {width: 1040, height: 690}),
        chart_tyl = echarts.init(el.querySelector("#popup-gzjcfx_tyl"), {width: 1040, height: 690}),
        chart_yxyh = echarts.init(el.querySelector("#popup-gzjcfx_yxyh"), {width: 550, height: 690});

    var data = {};

    function update() {
    	debugger
	var a = data.tzcs.lastYear
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
        chart_tzhb.setOption(option_tzhb);

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
        chart_gzhb.setOption(option_gzhb);

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
        chart_gzyy.setOption(option_gzyy);

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
        chart_tzlhb.setOption(option_tzlhb);

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
        chart_tylhb.setOption(option_tylhb);

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
        chart_ljyh.setOption(option_ljyh);

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
								var theMax = Math.max.apply(null, data.tzcs.curYear);
								if (params.value == theMax) {
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
//                  	var onemonth = new Date().getMonth();
//                  	data.tzcs.curYear.length = onemonth;
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
                    			//var theLen = data.tzcs.lastYear.length;
	                    			//data.tzcs.lastYear.sort(sortNumber);
								var theMax = Math.max.apply(null, data.tzcs.lastYear);
								if (params.value == theMax) {
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
                    data:(function () {
                    	return data.tzcs.lastYear
                    })()
                }
            ]
        };
        chart_tzcs.setOption(option_tzcs);

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
								var theMax = Math.max.apply(null, data.gzcs.curYear);
								if (params.value == theMax) {
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
//                  	var onemonth = new Date().getMonth();
//                      	if(onemonth==0){
//                      		onemonth = 12;
//                      	}
//		                    	data.gzcs.curYear.length = onemonth;
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
                    			//var theLen = data.gzcs.lastYear.length;
	                    			//data.gzcs.lastYear.sort(sortNumber);
								var theMax = Math.max.apply(null, data.gzcs.lastYear);
								if (params.value == theMax) {
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
        chart_gzcs.setOption(option_gzcs);

        // 故障原因2
//      var option_gzyy2 = Object.assign({}, option_gzyy, {
//          series: [{
//              type: "pie",
//              data: data.gzyy2.data.map(function (item, index) {
//                  item.itemStyle = {
//                      color: ["#1babe8", "#0060e5", "#244190"][index]
//                  };
//                  return item
//              }),
//              label: {
//                  color: '#fff',
//                  fontSize: 24,
//                  position: "inside"
//              },
//          }]
//      });
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
        chart_gzyy2.setOption(option_gzyy2);

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
									var theMax = Math.max.apply(null, data.tzl['当年']);
									if (params.value == theMax) {
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
//                      	var onemonth = new Date().getMonth();
//                      	if(onemonth==0){
//                      		onemonth = 12;
//                      	}
//	                    	data.tzl['当年'].length = onemonth;
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
	                    			//var theLen = data.tzl['上年'].length;
		                    			//data.tzl['上年'].sort(sortNumber);
										var theMax = Math.max.apply(null, data.tzl['上年']);
								if (params.value == theMax) {
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
            
//          (function () {
//              var arr = [];
//              var color = {
////                  "当年": "#0060e5",
//                  "当年": "red",
////                  "上年": "#12b4ff",
//                  "上年": "green",
////                  "上海公司当年": "#4700ff",
//                  "上海公司当年": "pink",
////                  "上海公司上年": "#00cc00"
//                  "上海公司上年": "black"
//              };
//              for (var key in data.tzl) {
//                  arr.push({
//                  	
//                      type: "line",
//                      name: key,
//                      symbol: "circle",
//                  	symbolSize: 10,
//                  	label: {
//	                    	normal: {
//	                    		show: true,
//	                    		position: 'top',
//	                    		formatter: function (params) {
//	                    			
////	                    			console.log('李云素' + this.data)
//	                    			
//	                    		}
//	                    	}
//	                    },
//                      itemStyle: {
//                          color: color[key]
//                      },
//                      smooth: false,
//                      data: (function () {
////		                    		data.gzcs.curYear.length = new Date().getMonth();
//
////									if ( key.indexOf('当年')>0 ) {
////										return data.tzl[key].length = new Date().getMonth();
////									}else{
////										return data.tzl[key]
////									}
//									
////									alert(data.tzl[key])
//									
//									
////									alert('我是key啊aaaaaaa a啊' + key);
//		                    		return data.tzl[key]
//		                    	})()
//                      
//                  })
//              }
//              console.log('我是arr啊' + arr);
//              return arr
//          })()
            
        };
        chart_tzl.setOption(option_tzl,true);

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
	                    			var theMax = Math.max.apply(null, data.tyl['当年']);
									if (params.value == theMax) {
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
//                      	var onemonth = new Date().getMonth();
//                      	if(onemonth==0){
//                      		onemonth = 12;
//                      	}
//	                    	data.tyl['当年'].length = onemonth;
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
		                    			//data.tyl['上年'].sort(sortNumber);
										var theMax = Math.max.apply(null, data.tyl['上年']);
								if (params.value == theMax) {
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
     	
//          series: (function () {
//              var arr = [];
//              var color = {
//                  "当年": "#0060e5",
//                  "上年": "#12b4ff",
//                  "上海公司当年": "#4700ff",
//                  "上海公司上年": "#00cc00"
//              };
//              for (var key in data.tyl) {
//                  arr.push({
//                      type: "line",
//                      name: key,
//                      symbol: "circle",
//                  	symbolSize: 10,
//                  	label: {
//	                    	normal: {
//	                    		show: true,
//	                    		position: 'top',
//	                    		formatter: function (params) {}
//	                    	}
//	                    },
//                      itemStyle: {
//                          color: color[key]
//                      },
//                      smooth: false,
//                      data: data.tyl[key],
//                      // areaStyle: {
//                      //     opacity: 0.1
//                      // },
//                  })
//              }
//              return arr
//          })()



        });
        chart_tyl.setOption(option_tyl,true);
         
         
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
        chart_yxyh.setOption(option_yxyh);

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