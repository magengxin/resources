// 弹框：台区监测分析
var Popup_tqjsfx = (function() {
	
    var data = {};
	//echarts图表
    function update(type) {
		var el = parent.window.document.querySelector("#popup-tqjcfx");
		var chart_tqzzhb = echarts.init(el.querySelector("#popup-tqjcfx_tqzzhb"), {width: 1320, height: 690}),//台区重载环比
	        chart_tqgzhb = echarts.init(el.querySelector("#popup-tqjcfx_tqgzhb"), {width: 1320, height: 690}),//台区过载环比
	        chart_tqddyhb = echarts.init(el.querySelector("#popup-tqjcfx_tqddyhb"), {width: 1320, height: 690}),//台区低电压环比
	        chart_tqsxbphhb = echarts.init(el.querySelector("#popup-tqjcfx_tqsxbphhb"), {width: 1320, height: 690}),//台区三相不平衡环比
	        chart_zz = echarts.init(el.querySelector("#popup-tqjcfx_zz"), {width: 1320, height: 690}),//重载
	        chart_gz = echarts.init(el.querySelector("#popup-tqjcfx_gz"), {width: 1320, height: 690}),//过载
	        chart_ddy = echarts.init(el.querySelector("#popup-tqjcfx_ddy"), {width: 1320, height: 690}),//低电压
	        chart_sxbph = echarts.init(el.querySelector("#popup-tqjcfx_sxbph"), {width: 1320, height: 690});//三相不平衡
		if(type == 1){
			function opt1(boxname) {//定义图表
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
//          }
            
        }
			// 台区重载环比
	        var option_tqzzhb = opt1("tqzzhb");
	        setTimeout(function(){
	        	chart_tqzzhb.setOption(option_tqzzhb);
	        },500)
	        
	        // 台区过载环比
	        var option_tqgzhb = opt1("tqgzhb");
	        setTimeout(function(){
	        	chart_tqgzhb.setOption(option_tqgzhb);
	        },500)
	        
	        // 台区低电压环比
	        var option_tqddyhb = opt1("tqddyhb");
	        setTimeout(function(){
	        	chart_tqddyhb.setOption(option_tqddyhb);
	        },500)
	        
	        // 台区三相不平衡环比
	        var option_tqsxbphhb = opt1("tqsxbphhb");
	        setTimeout(function(){
	        	chart_tqsxbphhb.setOption(option_tqsxbphhb);
	        },500)
		}else{
			// 重载
        var nowMonth = new Date().getMonth();
		if(nowMonth == 0){
			nowMonth = 12;
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
                    data: (function () {
                    		if(data.zz){
                    			data.zz.curYear.length = nowMonth;
                    			return data.zz.curYear
                    		}else{
                    			return
                    		}
                    		
                    })()
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
        	setTimeout(function(){
	        	chart_zz.setOption(option_zz);//重载
	        },500)
        

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
                    data: (function () {
                    		data.gz.curYear.length = nowMonth;
                    		return data.gz.curYear
                    })()
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
        	setTimeout(function(){
	        	chart_gz.setOption(option_gz);//过载
	        },500)
        

        // 低电压
        var option_ddy = Object.assign({}, option_zz, {
            xAxis: Object.assign({}, option_zz.xAxis, {
                splitLine: {
                    show: false
                }
            }),
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
                    data: (function () {
                    		data.ddy.curYear.length = nowMonth;
                    		return data.ddy.curYear
                    })()
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
        	setTimeout(function(){
	        	chart_ddy.setOption(option_ddy);//低电压
	        },500)
        

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
                    data: (function () {
                    		data.sxbph.curYear.length = nowMonth;
                    		return data.sxbph.curYear
                    })()
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
        	setTimeout(function(){
	        	chart_sxbph.setOption(option_sxbph);//三相不平衡
	        },500)
        
		}
    }
    function setData(newdata,type) {
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
        update(type);
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

//初始化数据
setTimeout(function(){
	Popup_tqjsfx.setData({
	
	        area: ["浦东", "市区", "市北", "市南", "嘉定", "松江", "青浦", "奉贤", "金山", "崇明", "长兴"],
	
	        tqzzhb: {
	            curMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            },
	            lastMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            }
	        },
	        tqgzhb: {
	            curMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	            },
	            lastMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	            }
	        },
	        tqddyhb: {
	            curMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	            },
	            lastMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	            }
	        },
	        tqsxbphhb: {
	            curMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	            },
	            lastMonth: {
	                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	                d7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	            }
	        },
	        zz: {
	            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	        },
	        gz: {
	            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	        },
	        ddy: {
	            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	        },
	        sxbph: {
	            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	        }
	
	
	    },1);

},1000)

//分析图切换地区
function initAnaly(companyId, year){
	var type;
    if(companyId != '8a812897493378a00149567740676661'){//非上海公司没有分布统计
        $("#fenbutongji").hide();//只有上海公司有分布统计
        $("#qushifenxi").show();
        $(".m_tqjcfx").hide();
        $(".y_tqjcfx").show();
        popup_tab_toggle($("#fenbutongji"),1);
        $("input[name = 'radio_tqjcfx_type']").get(1).checked = true;

    }

    if(companyId === '8a812897493378a00149567740676661'){//只有上海公司有分布统计
        $("#fenbutongji").show();//非上海公司没有分布统计
        $("#qushifenxi").show();
        $("input[name = 'radio_tqjcfx_type']").get(0).checked = true;
        $(".m_tqjcfx").show();
        $(".y_tqjcfx").hide();
        popup_tab_toggle($("#fenbutongji"),0);
		type = 1;
    }


    if(companyId === '-1'){
        var companyCode = $('input[name="radio_tqjcfx_area"]:checked').val();//绑定地区id
        companyId = companyCode;
    }

    if(year === '-1'){
        var yearChecked = $('input[name="radio_tqjcfx_time"]:checked').val();//绑定地区id
        year = yearChecked;
    }


    var kssj = Number(year) -1 +"01";//上一年
    var jssj = year +"12";//当年
    //当年
    var zzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当年重载
    var gzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当年过载
    var ddyCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当年低电压
    var sxbphCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当年三相不平衡


    //上年
    var zzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上年重载
    var gzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上年过载
    var ddyLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上年低电压
    var sxbphLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上年三相不平衡

    var sfhxq = companyId === 'JBH-HXQ' ? '1' : '0';//是否核心区
    var zzLastParam = {"SSGS": companyId, "KSSJ": kssj , "JSSJ": jssj,  "LX":-1, "SFHXQ" : sfhxq};

    callgetajax(dealLastData, basepath + "interface/BDZT_GETQWYXJKTJ_PWYX/0", zzLastParam, 'post');//全网运行监控统计-配网运行

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
        // 初始化弹框里的数据
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
	    },type);
    }
}
//页面添加分析图
function append_tqjc(){
	var arrClick = "initAnaly($(this).attr('value'), '-1')";
	var yearClick = "initAnaly('-1',$(this).attr('value'))";
	var divId = "$('#popup-tqjcfx')";
	var divup = "(this, 'up')";
	var divdown = "(this, 'down')";
	var time_fenbu = "popup_tqjcfx_timeToggle(this, 'time')";
	var year_fenbu = "popup_tqjcfx_timeToggle(this, 'year')";
	var html = '<div class="popup-normal__head"'+
				'<span class="popup-normal__close" onclick="javascript:'+divId+'.hide();"></span>'+
				'<span>台区监测分析</span>'+
			'</div>'+
			'<div class="popup-normal__main">'+
				'<div class="popup-normal__areaSelect">'+
					'<label><input type="radio" name="radio_tqjcfx_area" checked value="8a812897493378a00149567740676661" onclick="tqjc_fbtj_init()"><span>上海公司</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="JBH-HXQ" onclick="'+arrClick+'"><span>核心区</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06" onclick="'+arrClick+'"><span>浦东</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03" onclick="'+arrClick+'"><span>市区</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04" onclick="'+arrClick+'"><span>市北</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05" onclick="'+arrClick+'"><span>市南</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08" onclick="'+arrClick+'"><span>嘉定</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A" onclick="'+arrClick+'"><span>松江</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09" onclick="'+arrClick+'"><span>青浦</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07" onclick="'+arrClick+'"><span>奉贤</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B" onclick="'+arrClick+'"><span>金山</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ" onclick="'+arrClick+'"><span>崇明</span></label>'+
					'<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ" onclick="'+arrClick+'"><span>长兴</span></label>'+
				'</div>'+
				'<div class="popup-normal__timeSelect m_tqjcfx ">'+
					'<span class="arrUp" onclick="javascript:popup_comp_timeSelect'+divup+';changeDate(this)"></span>'+
					'<span class="arrDown" onclick="javascript:popup_comp_timeSelect'+divdown+';changeDate(this)"></span>'+
					'<span class="y" id="l_pop_tqjc_y">2018年</span>'+
					'<span class="m" id="l_pop_tqjc_m" data-month="12">月</span>'+
				'</div>'+
				'<dl class="popup-normal__typeSelect popup-normal__yearSelect y_tqjcfx lys_one_wid_change lys_hover" style="display:none;">'+
					'<dt>2018</dt>'+
					'<dd><label><input type="radio" name="radio_tqjcfx_time" value="2017" onclick="'+yearClick+'"><span>2017</span></label></dd>'+
					'<dd><label><input type="radio" name="radio_tqjcfx_time" checked value="2018" onclick="'+yearClick+'"><span>2018</span></label></dd>'+
				'</dl>'+
				'<div class="popup-normal__typeSelect">'+
					'<label id="fenbutongji"><input type="radio"  name="radio_tqjcfx_type" checked onclick="javascript:popup_tab_toggle(this,0);'+time_fenbu+'"><span>分布统计</span></label>'+
					'<label id="qushifenxi"><input type="radio"  name="radio_tqjcfx_type" onclick="javascript:popup_tab_toggle(this,1);'+year_fenbu+'"><span>趋势分析</span></label>'+
				'</div>'+
				'<div class="popup-normal__tabContent">'+
					'<div class="popup-normal__block popup-tqjcfx__block-zz">'+
						'<div class="popup-normal__blockTitle">台区重载环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_tqzzhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-tqjcfx__block-gz">'+
						'<div class="popup-normal__blockTitle">台区过载环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_tqgzhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-tqjcfx__block-ddy">'+
						'<div class="popup-normal__blockTitle">台区采集数据异常环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_tqddyhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-tqjcfx__block-sxbph">'+
						'<div class="popup-normal__blockTitle">台区三相不平衡环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_tqsxbphhb"></div>'+
					'</div>'+
				'</div>'+
				'<div class="popup-normal__tabContent" style="display:none;">'+
					'<div class="popup-normal__block popup-tqjcfx__block-zz">'+
						'<div class="popup-normal__blockTitle">重载</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_zz"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-tqjcfx__block-gz">'+
						'<div class="popup-normal__blockTitle">过载</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_gz"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-tqjcfx__block-ddy">'+
						'<div class="popup-normal__blockTitle">台区监测数据异常</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_ddy"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-tqjcfx__block-sxbph">'+
						'<div class="popup-normal__blockTitle">三相不平衡</div>'+
						'<div class="popup-normal__blockMain" id="popup-tqjcfx_sxbph"></div>'+
					'</div>'+
				'</div>'+
			'</div>';
		$('#popup-tqjcfx',parent.document).html(html);
		$('.lys_hover dd',parent.document).click(function () {//趋势分析点击年份切换绑定html
			$('.lys_hover dt',parent.document).html($(this).find('span').html());
		});
		tqjc_fbtj_init();
}


//点击弹出分析图初始化
function tqjc_fbtj_init() {
	var nowyear = new Date().getFullYear()+'年';
	var nowmonth = new Date().getMonth();
	if(nowmonth == 0){
		nowyear = '2018年';
		nowmonth = '12'
	}
	$("#l_pop_tqjc_m",parent.document).attr("data-month", nowmonth);//分布统计显示月份
	$("#l_pop_tqjc_y",parent.document).html(nowyear);//分布统计绑定年份
	initCount(_YYYYMM_PRE_PRE, _YYYYMM_PRE);//加载分布统计
    initAnaly("8a812897493378a00149567740676661", new Date().getFullYear()+"");//加载趋势分析
	
}
    
//点击月份切换
function changeDate(o) {
    var el = $(o).siblings('.m');
    var m = + el.attr("data-month");//当前月份

    var kssj = _YYYYMM_PRE;//上月
    var jssj = _YYYYMM_CURR;//上上月
	var month = new Date().getMonth();
	var nowyear = new Date().getFullYear();
	console.log(m)
	if(month == 0){
		month = 12;
		nowyear = '2018'
	}
	if(m>month){
		$(o).siblings('.m').attr("data-month",month);//点击切换月份替换原来的页面月份内容
		return
	}
    if(m===1){
        var year = new Date().getFullYear() -1;
        kssj = year+"12"
        jssj = new Date().getFullYear() + "01"
    }else if(1 < m < 10){
        m =nowyear.toString()+'0' + m;
        if(jssj - m < 1){
            jssj  = _YYYYMM_PRE
            kssj = _YYYYMM_PRE_PRE;
        }else{
            jssj  = m
            kssj = m-1+"";
        }

    }else if(9<m<13){
        m =nowyear.toString() + m;
        if(jssj - m < 1){
            jssj  = _YYYYMM_PRE
            kssj = _YYYYMM_PRE_PRE;
        }else{
            jssj  = m
            kssj = m-1+"";
        }
    }
    initCount(kssj, jssj);//加载分布统计
}
//分布统计图
function initCount(kssj, jssj) {
    //当前月先将数据初始为0，回调得到数据在塞进去
    var zzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var zzCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月重载连续3天
    var zzCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月重载连续7天

    var gzCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月过载连续3天
    var gzCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月过载连续7天

    var ddyCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月低电压连续3天
    var ddyCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月低电压连续7天

    var sxbphCurData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphCurd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月三相不平衡连续3天
    var sxbphCurd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//当前月三相不平衡连续7天

    //上个月
    var zzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var zzLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月重载连续3天
    var zzLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月重载连续7天

    var gzLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gzLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月过载连续3天
    var gzLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月过载连续7天

    var ddyLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ddyLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月低电压连续3天
    var ddyLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月低电压连续7天

    var sxbphLastData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sxbphLastd3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月三相不平衡连续3天
    var sxbphLastd7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//上个月三相不平衡连续7天
    var zzLastParam = {
        "SSGS": "-1", "KSSJ": kssj, "JSSJ": jssj, "LX": -1
    };

    callgetajax(dealLastData, basepath + "interface/BDZT_GETQWYXJKTJ_PWYX/0", zzLastParam, 'post');//全网运行监控统计-配网运行

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
		// 初始化弹框里的数据
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
	        }
	    },1);
    }
}

