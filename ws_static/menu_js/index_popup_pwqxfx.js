// 弹框：配网抢修分析
var Popup_pwqxfx = (function() {
	
	var data = {};
	//echarts图表
	function update() {
		var el = parent.window.document.querySelector("#popup-pwqxfx");
		var chart_gzqxhb = echarts.init(el.querySelector("#popup-pwqxfx_gzqxhb"), {//故障抢修环比
				width: 2700,
				height: 690
			}),
			chart_pjddsjhb = echarts.init(el.querySelector("#popup-pwqxfx_pjddsjhb"), {//平均到达时间环比
				width: 1320,
				height: 690
			}),
			chart_pjxfsjhb = echarts.init(el.querySelector("#popup-pwqxfx_pjxfsjhb"), {//平均修复时间环比
				width: 1320,
				height: 690
			}),
			chart_yhbx = echarts.init(el.querySelector("#popup-pwqxfx_yhbx"), {//用户保修
				width: 870,
				height: 690
			}),
			chart_dlgz = echarts.init(el.querySelector("#popup-pwqxfx_dlgz"), {//电力故障
				width: 870,
				height: 690
			}),
			chart_fdlgz = echarts.init(el.querySelector("#popup-pwqxfx_fdlgz"), {//非电力故障
				width: 870,
				height: 690
			}),
			chart_pjddsj = echarts.init(el.querySelector("#popup-pwqxfx_pjddsj"), {//平均到达时间
				width: 1320,
				height: 690
			}),
			chart_pjxfsj = echarts.init(el.querySelector("#popup-pwqxfx_pjxfsj"), {//平均修复时间
				width: 1320,
				height: 690
			});
		// 故障抢修环比
		data.area = ['核心区','浦东','市区','市北','市南','嘉定','松江','青浦','奉贤','金山','崇明','长兴']
		var option_gzqxhb = {
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                padding: 10
            },
			//图例
			legend: [{
				right: 100,
				top: 30,
				width: 600,
				data:['当月电力故障','当月非电力故障','当月欠费复电','上月电力故障','上月非电力故障','上月欠费复电'],
				textStyle: {
					fontSize: 24,
					color: "#fff"
				},
				selectedMode: false
			}],
			grid: {
				left: 100,
				top: 150,
				width: 2500,
				height: 500,
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
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: "#fff"
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "#08405d"
					}
				},
			},
			
			xAxis: {
				type: 'category',
				data: data.area,
				axisLabel: {
					fontSize: 24,
					color: "#fff"
				},
				axisLine: {
					lineStyle: {
						color: "#0060e5"
					}
				},
				axisTick: {
					show: false
				},
				nameTextStyle: {
					align: 'center'
				}
			},
			series: (function() {
				var arr = [];
				var color = {
					"当月电力故障": "#00479d",
					"当月非电力故障": "#006fba",
					"当月欠费复电": "#25b1d8",
					"上月电力故障": "#00834d",
					"上月非电力故障": "#429577",
					"上月欠费复电": "#83b49e"
				};
				for(var key in data.gzqxhb) {
					arr.push({
						type: "bar",
						name: key,
//						stack: key.replace(/当月|上月/, ""),
						data: data.gzqxhb[key],
						barGap: "20%",
						barWidth: 26,
						itemStyle: {
							color: color[key]
						}
					})
				}
				return arr;
			})()
		};
		setTimeout(function(){
			chart_gzqxhb.setOption(option_gzqxhb);//故障抢修环比
		},500)
		

		// 平均到达时间环比
		var option_pjddsjhb = {
			tooltip: {
				show: true,
				trigger: 'item',
				formatter: '{b}: {c}',
				padding: 10
			},
			legend: {
				right: 80,
				top: 30,
				data: ["当月", "上月"],
				textStyle: {
					fontSize: 24,
					color: "#fff"
				},
				selectedMode: false
			},
			grid: {
				left: 120,
				top: 120,
				width: 1040,
				height: 500,
				containLabel: true
			},
			yAxis: {
				type: 'value',
				name: 'min',
				nameTextStyle: {
					fontSize: 24,
					color: "#fff"
				},
				nameGap: 30,
				min: 0,
				max: 60,
				splitNumber:6,
				interval: 10,
				axisLine: {
					show: false
				},
				axisLabel: {
					fontSize: 24,
					color: "#fff"
				},
				splitLine: {
					show: false
				},
			},
			xAxis: {
				type: 'category',
				data: data.area,
				axisLabel: {
					fontSize: 24,
					color: "#fff"
				},
				axisLine: {
					lineStyle: {
						color: "#0060e5"
					}
				},
				axisTick: {
					show: false
				}
			},
			series: [{
					type: "scatter",
					name: "当月",
					symbol: "rect",
					symbolSize: [30, 10],
					itemStyle: {
						color: "#12b4ff"
					},
					data: data.pjddsjhb.curMonth.map(function(num, index) {
						return [data.area[index], num]
					})
				},
				{
					type: "scatter",
					name: "上月",
					symbol: "rect",
					symbolSize: [30, 10],
					itemStyle: {
						color: "#0060e5"
					},
					data: data.pjddsjhb.lastMonth.map(function(num, index) {
						return [data.area[index], num]
					})
				},
				{
					type: "bar",
					barWidth: 1,
					data: data.area.map(function() {
						return 60
					}),
					itemStyle: {
						color: "#08405d"
					}
				},
				{
					type: "line",
					name: "上海公司平均到达时间",
					symbolSize: 1,
					itemStyle: {
						color: "#00ff00"
					},
					lineStyle: {
						color: "#00ff00"
					},
					label: {
						show: true,
						fontSize: 18,
						color: "#00ff00",
						position: [-910,-18]
					},
					data: (function() {
						var tmp = data.pjddsjhb.curMonth.concat(data.pjddsjhb.lastMonth);
						var average = sumArr(tmp) / tmp.length;
						return tmp.map(function(num, index) {
							return {
								value: average,
								label: {
									show: index == tmp.length / 2 - 1,
									formatter: function() {
//										return "公司平均(" + Math.round(average) + "min)"
                                        return "公司平均:" + Math.round(average) + "min"
									}
								}
							}
						})
					})()
				},
				{
					type: "line",
					name: "上海",
					symbolSize: 1,
					itemStyle: {
						color: "#00ff00"
					},
					lineStyle: {
						color: "#00ff00"
					},
					label: {
						show: true,
						fontSize: 18,
						color: "#00ff00",
						position: [-910,-18]
					},
					data: (function() {
						var tmp = data.pjddsjhb.curMonth.concat(data.pjddsjhb.lastMonth);
						var average = sumArr(tmp) / tmp.length;
						return tmp.map(function(num, index) {
							return {
								value: average,
								label: {
									show: index == tmp.length / 2 - 1,
									formatter: function() {
//										return "公司平均(" + Math.round(average) + "min)"
                                        return "公司平均:" + Math.round(average) + "min"
									}
								}
							}
						})
					})()
				}
				
			]
		};
		chart_pjddsjhb.setOption(option_pjddsjhb);//平均到达时间环比
		
		// 平均修复时间环比
		
		var option_pjxfsjhb = Object.assign({}, option_pjddsjhb, {
			yAxis: {
				type: 'value',
				name: 'min',
				nameTextStyle: {
					fontSize: 24,
					color: "#fff"
				},
				nameGap: 30,
				min: 0,
				max: 120,
				interval: 20,
				axisLine: {
					show: false
				},
				axisLabel: {
					fontSize: 24,
					color: "#fff"
				},
				splitLine: {
					show: false
				},
			},
			series: [{
					type: "scatter",
					name: "当月",
					symbol: "rect",
					symbolSize: [30, 10],
					itemStyle: {
						color: "#12b4ff"
					},
					data: data.pjxfsjhb.curMonth.map(function(num, index) {
						return [data.area[index], num]
					})
				},
				{
					type: "scatter",
					name: "上月",
					symbol: "rect",
					symbolSize: [30, 10],
					itemStyle: {
						color: "#0060e5"
					},
					data: data.pjxfsjhb.lastMonth.map(function(num, index) {
						return [data.area[index], num]
					})
				},
				{
					type: "bar",
					barWidth: 1,
					data: data.area.map(function() {
						return 60
					}),
					itemStyle: {
						color: "#08405d"
					}
				},
				{
					type: "line",
					name: "上海公司平均到达时间",
					symbolSize: 1,
					itemStyle: {
						color: "#00ff00"
					},
					lineStyle: {
						color: "#00ff00"
					},
					label: {
						show: true,
						fontSize: 18,
						color: "#00ff00",
						position: [-910,-18]
					},
					data: (function() {
						var tmp = data.pjxfsjhb.curMonth.concat(data.pjxfsjhb.lastMonth);
						var average = sumArr(tmp) / tmp.length;
						return tmp.map(function(num, index) {
							return {
								value: average,
								label: {
									show: index == tmp.length / 2 - 1,
									formatter: function() {
//										return "公司平均(" + Math.round(average) + "min)"
                                        return "公司平均:" + Math.round(average) + "min"
									}
								}
							}
						})
					})()
				}
			]
		});
		chart_pjxfsjhb.setOption(option_pjxfsjhb);//平均修复时间环比

		// 用户报修
		var option_yhbx = {
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
				top: 120,
				width: 720,
				height: 520,
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
				data: (function() {
					var arr = [];
					for(var i = 1; i <= 12; i++) arr.push(i);
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
			series: [{
					type: "line",
					name: "当年",
					symbol: "circle",
					symbolSize: 10,
					itemStyle: {
						color: "#12b4ff"
					},
					label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize: 24,
                    		
                    		formatter: function (params) {
                    			
                    			
                    			var theMax = Math.max.apply(null, data.yhbx.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
								
								
                    		}
                    		
                    	}
                    },
					data: data.yhbx.curYear
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
                    		fontSize: 24,
                    		formatter: function (params) {
                    			
                    			var theMax = Math.max.apply(null, data.yhbx.lastYear);
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
					data: data.yhbx.lastYear
				}
			]
		};
		chart_yhbx.setOption(option_yhbx);//用户保修
		// 电力故障
		var option_dlgz = Object.assign({}, option_yhbx, {
			series: [{
					type: "line",
					name: "当年",
					symbol: "circle",
					symbolSize: 10,
					itemStyle: {
						color: "#12b4ff"
					},
					label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize: 24,
                    		formatter: function (params) {
                    			
                    			var theMax = Math.max.apply(null, data.dlgz.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
					data: data.dlgz.curYear,
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
                    		fontSize: 24,
                    		formatter: function (params) {
                    			
                    			var theMax = Math.max.apply(null, data.dlgz.lastYear);
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
					data: data.dlgz.lastYear
				}
			]
		});
		chart_dlgz.setOption(option_dlgz);//电力故障
		// 非电力故障
		var option_fdlgz = Object.assign({}, option_yhbx, {
			series: [{
					type: "line",
					name: "当年",
					symbol: "circle",
					symbolSize: 10,
					itemStyle: {
						color: "#12b4ff"
					},
					label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize: 24,
                    		formatter: function (params) {
                    			
                    			var theMax = Math.max.apply(null, data.fdlgz.curYear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
					data: data.fdlgz.curYear,
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
                    		fontSize: 24,
                    		formatter: function (params) {
                    			
                    			var theMax = Math.max.apply(null, data.fdlgz.lastYear);
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
					data: data.fdlgz.lastYear
				}
			]
		});
		chart_fdlgz.setOption(option_fdlgz);//非电力故障
		// 平均到达时间
		var option_pjddsj = {
			tooltip: {
				show: true,
				trigger: 'axis',
				padding: 10
			},
			legend: {
				right: 20,
				top: 30,
				data: Object.keys(data.pjddsj),
				textStyle: {
					fontSize: 24,
					color: "#fff"
				},
				selectedMode: false
			},
			grid: {
				left: 60,
				top: 100,
				width: 1160,
				height: 520,
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
//				max: 60,
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
				data: (function() {
					var arr = [];
					for(var i = 1; i <= 12; i++) arr.push(i);
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
			
			series: [{
					type: "line",
					name: "当年",
					symbol: "circle",
					symbolSize: 10,
					itemStyle: {
						color: "#12b4ff"
					},
					label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize: 24,
	                    		formatter: function (params) {
//	                    			console.log(data);
	                    			var theMax = Math.max.apply(null, data.pjddsj['当年']);
									if (params.value == theMax) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                },
					data: data.pjddsj['当年'],
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
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjddsj['上年']);
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
					data: data.pjddsj['上年']
				},
				{
					type: "line",
					name: "上海公司当年",
					symbol: "circle",
					symbolSize: 10,
					label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjddsj['上海当年']);
									if (params.value == theMax) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                },
					
					itemStyle: {
						color: "#4700ff"
					},
					//接上海当年的数据
//					data: [50,60,55,44,33]
					data: data.pjddsj['上海公司当年']
				},
				{
					type: "line",
					name: "上海公司上年",
					symbol: "circle",
					symbolSize: 10,
					label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjddsj['上海上年']);
									if (params.value == theMax) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                },
					
					itemStyle: {
						color: "#83b49e"
					},
					//接上海上年的数据
					data: data.pjddsj['上海公司上年']
				}
			]
		};
		chart_pjddsj.setOption(option_pjddsj,true);//平均到达时间
		// 平均修复时间
		var option_pjxfsj = Object.assign({}, option_pjddsj, {
			
			series: [{
					type: "line",
					name: "当年",
					symbol: "circle",
					symbolSize: 10,
					itemStyle: {
						color: "#12b4ff"
					},
					label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjxfsj['当年']);
									if (params.value == theMax) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                },
					data: data.pjxfsj['当年'],
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
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjxfsj['上年']);
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
					data: data.pjxfsj['上年']
				},
				{
					type: "line",
					name: "上海公司当年",
					symbol: "circle",
					symbolSize: 10,
					itemStyle: {
						color: "#4700ff"
					},
					label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjxfsj['上海当年']);
									if (params.value == theMax) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                },
					data: data.pjxfsj['上海公司当年'],
					// areaStyle: {
					//     opacity: 0.1
					// },
				},
				{
					type: "line",
					name: "上海公司上年",
					symbol: "circle",
					symbolSize: 10,
					label: {
	                    	normal: {
	                    		show: true,
	                    		position: 'top',
	                    		fontSize: 24,
	                    		formatter: function (params) {
                    			
	                    			var theMax = Math.max.apply(null, data.pjxfsj['上海上年']);
									if (params.value == theMax) {
										return params.value;
									}else{
										return '';
									}
	                    		}
	                    	}
	                },
					
					itemStyle: {
						color: "#83b49e"
					},
					data: data.pjxfsj['上海公司上年']
				}
			]
		});
		chart_pjxfsj.setOption(option_pjxfsj,true);//平均修复时间
	}

	function setData(newdata) {
		if(!newdata) return;
		for(var key in newdata) {
			data[key] = newdata[key]
		}		
		update();
	}

	function f(newdata, cacheData) {
		for(var key in newdata) {
			if(!Array.isArray(newdata[key])) {
				f(newdata[key], cacheData[key]);
			} else {
				cacheData[key] = newdata[key];
			}
		}
	}

	function sumArr(arr) {
		return arr.reduce(function(acc, cur) {
			return acc + cur
		}, 0)
	}

	return {
		setData: setData
	}
})();

//初始化图表
Popup_pwqxfx.setData({ ////给分布统计-平均到达时间环比图表赋值
	gzqxhb: { //分布统计-故障抢修环比
		'当月电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'当月非电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'当月欠费复电': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月非电力故障':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月欠费复电': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
	},
	yhbx: {
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	dlgz: {
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	fdlgz: {
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	pjddsj: {
			"当年":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		},
	pjxfsj: {
			"当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司上年":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
	pjddsjhb: { //平均到达时间环比
		curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	pjxfsjhb: { //平均修复时间环比
		curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},

});


/**
 * 点击供电服务
 */
function clickGDFW() {
	$('#popup-tqjcfx').hide();//点击供电服务台区监测分析图隐藏
	$('#popup-gzjcfx').hide();//点击供电服务故障监测分析图隐藏
}

var peiWangQiangXiuFenXiYear = 2018;//初始定义年份
var peiWangQiangXiuFenXiMonth = 10;//初始定义月份
var gongsi = '8a812897493378a00149567740676661'; //默认上海公司	

//页面添加分析图
function append_gdfw(){
	var arrClick = ["('上海')","('核心')","('浦东')","('市区')","('市北')","('市南')","('嘉定')","('松江')","('青浦')","('奉贤')","('金山')","('崇明')","('长兴')"]
	var divId = "$('#popup-pwqxfx')";
	var divup = "(this, 'up')";
	var divdown = "(this, 'down')";
	var html = '<div class="popup-normal__head">'+
				'<span class="popup-normal__close" onclick="javascript:'+divId+'.hide();"></span>'+
				'<span>配网抢修分析</span>'+
			'</div>'+
			'<div class="popup-normal__main">'+
				'<div class="popup-normal__areaSelect">'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[0]+'" checked><span>上海公司</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[1]+'"><span>核心区</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[2]+'"><span>浦东</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[3]+'"><span>市区</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[4]+'"><span>市北</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[5]+'"><span>市南</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[6]+'"><span>嘉定</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[7]+'"><span>松江</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[8]+'"><span>青浦</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[9]+'"><span>奉贤</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[10]+'"><span>金山</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[11]+'"><span>崇明</span></label>'+
					'<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx'+arrClick[12]+'"><span>长兴</span></label>'+
				'</div>'+
				'<div class="popup-normal__timeSelect m_pwqxfx1">'+
					'<span class="arrUp" onclick="javascript:popup_comp_timeSelect'+divup+';changeDatePwfx(this)"></span>'+
					'<span class="arrDown" onclick="javascript:popup_comp_timeSelect'+divdown+';changeDatePwfx(this)"></span>'+
					'<span class="y" id="l_pop_pwqx_y">2018年</span>'+
					'<span class="m" id="l_pop_pwqx_m" data-month="12">月</span>'+
				'</div>'+
				'<dl class="popup-normal__typeSelect popup-normal__yearSelect y_pwqxfx1 lys_one_wid_change lys_hover" style="display:none;">'+
					'<dt>2018</dt>'+
					'<dd><label><input type="radio" name="radio_pwqxfx_year"  value="2017" onclick="clickQsfxYear()"><span>2017</span></label></dd>'+
					'<dd><label><input type="radio" name="radio_pwqxfx_year"  checked value="2018" onclick="clickQsfxYear()"><span>2018</span></label></dd>'+
				'</dl>'+
				'<div class="popup-normal__typeSelect">'+
					'<label id="fenbutongji4"><input type="radio" name="radio_pwqxfx_type" checked onclick="javascript:popup_tab_toggle(this,0)"><span>分布统计</span></label>'+
					'<label id="qushifenxi4"><input type="radio" name="radio_pwqxfx_type" onclick="javascript:popup_tab_toggle(this,1)"><span>趋势分析</span></label>'+
				'</div>'+
				'<div class="popup-normal__tabContent">'+
					'<div class="popup-normal__block popup-pwqxfx__block-gzqxhb">'+
						'<div class="popup-normal__blockTitle">故障抢修环比</div>'+
						'<div class="pwyx_box">'+
							'<div class="pwqx_txt">'+
								'<p>'+
									'<span>(当月) 电力故障<span id="dl1">0</span></span>'+
									'<span>(上月) 电力故障<span id="dl2">0</span></span>'+
								'</p>'+
							'</div>'+
							'<div class="pwqx_txt">'+
								'<p>'+
									'<span>非电力故障<span id="fd1">0</span></span>'+
									'<span>非电力故障<span id="fd2">0</span></span>'+
								'</p>'+
							'</div>'+
							'<div class="pwqx_txt">'+
								'<p>'+
									'<span>欠费复电<span id="qf1">0</span></span>'+
									'<span>欠费复电<span id="qf2">0</span></span>'+
								'</p>'+
							'</div>'+
						'</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_gzqxhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb">'+
						'<div class="popup-normal__blockTitle">平均到达时间环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_pjddsjhb"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb">'+
						'<div class="popup-normal__blockTitle">平均修复时间环比</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_pjxfsjhb"></div>'+
					'</div>'+
				'</div>'+
				'<div class="popup-normal__tabContent" style="display:none">'+
					'<div class="popup-normal__block popup-pwqxfx__block-yhbx">'+
						'<div class="popup-normal__blockTitle">用户报修</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_yhbx"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-pwqxfx__block-dlgz">'+
						'<div class="popup-normal__blockTitle">电力故障</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_dlgz"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-pwqxfx__block-fdlgz">'+
						'<div class="popup-normal__blockTitle">非电力故障</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_fdlgz"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb">'+
						'<div class="popup-normal__blockTitle">平均到达时间</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_pjddsj"></div>'+
					'</div>'+
					'<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb">'+
						'<div class="popup-normal__blockTitle">平均修复时间</div>'+
						'<div class="popup-normal__blockMain" id="popup-pwqxfx_pjxfsj"></div>'+
					'</div>'+
				'</div>'+
			'</div>';
			
	$('#popup-pwqxfx',parent.document).html(html);
	var nowyear = new Date().getFullYear()+'年';
	var nowmonth = new Date().getMonth();
	
	if(nowmonth == 0){
		nowyear = '2018年';
		nowmonth = '12'
	}
	$("#l_pop_pwqx_m",parent.document).attr("data-month", nowmonth);//分布统计显示月份
	$("#l_pop_pwqx_y",parent.document).html(nowyear);//分布统计绑定年份
	clickTanChu();//加载页面图表
	
}
/**
 * 点击中间弹出按钮
 */
function clickTanChu() {
	//初始化图表
Popup_pwqxfx.setData({ ////给分布统计-平均到达时间环比图表赋值
	gzqxhb: { //分布统计-故障抢修环比
		'当月电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'当月非电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'当月欠费复电': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月非电力故障':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月欠费复电': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
	},
	yhbx: {
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	dlgz: {
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	fdlgz: {
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	pjddsj: {
			"当年":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		},
	pjxfsj: {
			"当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司上年":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
	pjddsjhb: { //平均到达时间环比
		curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	pjxfsjhb: { //平均修复时间环比
		curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},

});
	var month = new Date().getMonth();
	var year;
	if(month == 0){
		year = new Date().getFullYear()-1;
	}else{
		year = new Date().getFullYear();
	}
	 
	var kssj = _YYYYMM_PRE_PRE;//上上月
	var jssj = _YYYYMM_PRE;//上月
	bindGongDianFuWu_QZQXHB(kssj, jssj);//供电服务-分布统计-故障抢修环比
	bindPingjunXiufuShijianHuanbi(kssj, jssj);//加载上海公司平均修复时长环比图表
	bindPingjunDaodaShijianHuanbi(kssj, jssj);//加载上海公司平均到达时长环比图表
	bindGongDianFuWu_QuShiFenXi('8a812897493378a00149567740676661', year); //绑定供电服务-趋势分析
}
/**
 * 点击配网抢修分析弹框上面的地区切换
 */
function gzjc_pwqx(area) {
	peiWangQiangXiuFenXiYear = 2018;
	gongsi = SSGSMAP_NAME[area];
	if(area != '上海') {
		$("#fenbutongji4").hide();//只有上海公司有趋势分析,非上海公司没有
		$("#qushifenxi4").show();
		$(".m_pwqxfx1").hide();
		$(".y_pwqxfx1").show();
		popup_tab_toggle($("#fenbutongji4"), 1);//显示趋势分析图
		$("input[name = 'radio_pwqxfx_type']").get(1).checked = true;
		var nowyear = new Date().getFullYear()+'年';
		var nowmonth = new Date().getMonth();//0
		if(nowmonth == 0){//当1月时候调用上一年的数据
			nowyear = '2018年'
		}
		$('#l_pop_pwqx_y').html(nowyear);
		bindGongDianFuWu_QuShiFenXi(gongsi, peiWangQiangXiuFenXiYear);//切换趋势分析图
	}

	if(area === '上海') {
		gongsi = '8a812897493378a00149567740676661';
		$("#fenbutongji4").show();//只有上海公司有趋势分析,非上海公司没有
		$("#qushifenxi4").show();
		$("input[name = 'radio_pwqxfx_type']").get(0).checked = true;
		$(".m_pwqxfx1").show();
		$(".y_pwqxfx1").hide();
		popup_tab_toggle($("#fenbutongji4"), 0);//显示分布统计图
		var kssj = _YYYYMM_PRE_PRE;
		var jssj = _YYYYMM_PRE;
		bindGongDianFuWu_QZQXHB(kssj, jssj);//供电服务-分布统计-故障抢修环比
		bindPingjunXiufuShijianHuanbi(kssj, jssj);//加载上海公司平均修复时长环比图表
		bindPingjunDaodaShijianHuanbi(kssj, jssj);//加载上海公司平均到达时长环比图表
	}
	
}

/**
 * 鼠标点击配网抢修分析弹框上面的月份切换按钮
 * @param {Object} o
 */
function changeDatePwfx(o) {
	Popup_pwqxfx.setData({ ////给分布统计-平均到达时间环比图表赋值
	gzqxhb: { //分布统计-故障抢修环比
		'当月电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'当月非电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'当月欠费复电': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月电力故障': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月非电力故障':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'上月欠费复电': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
	},
	yhbx: {//用户保修
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	dlgz: {//电力故障
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	fdlgz: {//非电力故障
		curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	pjddsj: {//平均到达时间
			"当年":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		},
	pjxfsj: {//平均修复时间
			"当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			"上海公司上年":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
	pjddsjhb: { //平均到达时间环比
		curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	pjxfsjhb: { //平均修复时间环比
		curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},

});
	var el = $(o).siblings('.m');
	var m = el.attr("data-month");
	var lm = Number(m) - 1;
	var el1 = $(o).siblings('.y');
	var y = el1.attr("data-year");
	var month = new Date().getMonth();
	console.log(m)
	if(month == 0){
		month = 12
	}
	if(m>month){
		$(o).siblings('.m').attr("data-month",month);//点击切换月份替换原来的页面月份内容
		return
	}
	if(y == 'undefined' || y == null || y == '') {
		y = 2018;
	}
	if(Number(m) < 10) {
		var mon = '0' + Number(m);
	} else {
		var mon = m;
	}
	if(lm < 10) {
		var last_mon = '0' + lm;
	} else {
		var last_mon = '' + lm;
	}
	kssj = '2018' + last_mon;
	jssj = '2018' + mon;
	bindGongDianFuWu_QZQXHB(kssj, jssj);//供电服务-分布统计-故障抢修环比
	bindPingjunXiufuShijianHuanbi(kssj, jssj);//平均修复时间环比
	bindPingjunDaodaShijianHuanbi(kssj, jssj);//平均到达时间环比
	peiWangQiangXiuFenXiYear = y;
	peiWangQiangXiuFenXiMonth = m;

}

/**
 * 点击趋势分析年份
 */
function clickQsfxYear() {
	var year = $("input[name = 'radio_pwqxfx_year']:checked").val();
	peiWangQiangXiuFenXiYear=year;
	bindGongDianFuWu_QuShiFenXi(gongsi, Number(year));//加载趋势分析图
}



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
        var thisTotal = 0;var lastTotal = 0;
		for(i = 0;i <thisMonthArr.length;i++){
        	thisTotal += thisMonthArr[i];
        }
		for(i = 0;i <lastMontArr.length;i++){
        	lastTotal += lastMontArr[i];
        }
		$("#qf1",parent.document).html(thisTotal);$("#qf2",parent.document).html(lastTotal);
		Popup_pwqxfx.setData({ ////给分布统计-平均到达时间环比图表赋值
			gzqxhb: { //分布统计-故障抢修环比
				'当月欠费复电': thisMonthArr,
				'上月欠费复电': lastMontArr
			},
		});
	}

	function dealData2(res) { //电力故障回调
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
		var thisTotal = 0;var lastTotal = 0;
		for(i = 0;i <thisMonthArr.length;i++){
        	thisTotal += thisMonthArr[i];
        }
		for(i = 0;i <lastMontArr.length;i++){
        	lastTotal += lastMontArr[i];
        }
        $("#dl1",parent.document).html(thisTotal);$("#dl2",parent.document).html(lastTotal);
		Popup_pwqxfx.setData({
			gzqxhb: { //分布统计-故障抢修环比
				'当月电力故障': thisMonthArr,
				'上月电力故障': lastMontArr
			},
		});
        
	}

	function dealData3(res) { //非电力故障回调
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
		var thisTotal = 0;var lastTotal = 0;
		for(i = 0;i <thisMonthArr.length;i++){
        	thisTotal += thisMonthArr[i];
        }
		for(i = 0;i <lastMontArr.length;i++){
        	lastTotal += lastMontArr[i];
        }
        $("#fd1",parent.document).html(thisTotal);$("#fd2",parent.document).html(lastTotal);
		Popup_pwqxfx.setData({
			gzqxhb: { //分布统计-故障抢修环比
				'当月非电力故障': thisMonthArr,
				'上月非电力故障': lastMontArr
			},
		});
        
	}

	var tmp_ssgs = '-1';
	BDZT_GETQWYXJKTJ_GDFW(dealData1, tmp_ssgs, kssj, jssj, 6); //1 用户报修 6欠费付电(欠费停电) 供电服务分析图接口
	BDZT_GETQWYXJKTJ_GDFW(dealData2, tmp_ssgs, kssj, jssj, 2); //电力故障-----供电服务分析图接口
	BDZT_GETQWYXJKTJ_GDFW(dealData3, tmp_ssgs, kssj, jssj, 3); //非电力故障--------供电服务分析图接口

	
}

/**
 * 供电服务趋势分析
 * @param {Object} SSGS
 * @param {Object} year
 */
function bindGongDianFuWu_QuShiFenXi(SSGS, year) { //趋势分析函数
	var t = function(zz) {
		zz = zz || 12;
		var arr = [];
		arr.length = 12;
		return arr.fill(0, 0, zz);
	}
	var cm = 12;
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
//		if(year	!='2017'){
			var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//		}
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
//		if(year!='2017'){
			var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//		}
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
//		if(year !='2017'){
			var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//		}
		

		Popup_pwqxfx.setData({ //趋势分析-用户报修-当年
			fdlgz: {
				curYear: m,
				lastYear: lm
			},
		});
	}

	var lastYear = year - 1;//上一年
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
			
        var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
//      if(year!='2017'){
        	for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//      }
		Popup_pwqxfx.setData({ //趋势分析-平均到达时间
			pjddsj: {
				"当年": pjddsjThisYear,
				"上年": pjddsjLastYear,
				"上海公司当年": m,
				"上海公司上年": lm,
			},
		});
		}
//		if(year != '2017'){
			var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//		}
         
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
//		if(year!='2017'){
			var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//		}
        
			Popup_pwqxfx.setData({ ////趋势分析-平均修复时间
				pjxfsj: {
					"当年": pjxfsjThisYear,
					"上年": pjxfsjLastYear,
					"上海公司当年": m,
					"上海公司上年": lm
				},
			});
		}
//		if(year !='2017'){
			var nowMonth = 12;//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				m[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
			}
//		}
        
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
 * 全网运行监控统计-供电服务
 */
function BDZT_GETQWYXJKTJ_GDFW(dealData, SSGS, KSSJ,JSSJ,LX){

//	var SSGS = "8a812897493378a00149567740676661";
//	var KSSJ = '201808'; //开始年月
//	var KSSJ = JSSJ = dateFtt("yyyy-MM", new Date()); //结束年月
//	var LX = 4 //类型 //4：平均到达时间
    var sfhxq = SSGS === 'JBH-HXQ' ? '1' : '0';
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ,
		"JSSJ": JSSJ,
        "SFHXQ" : sfhxq,
		"LX": LX
	};

	//	http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETQWYXJKTJ_GDFW/0?SSGS=8a812897493378a00149567740676661,FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09&KSSJ=201808&JSSJ=201809&LX=1
	var url = basepath + "interface/BDZT_GETQWYXJKTJ_GDFW/0";
	// var url = "json/BDZT_GETQWYXJKTJ_GDFW/0.json";
	callgetajax(dealData, url, param);
}

