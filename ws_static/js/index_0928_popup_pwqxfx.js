// 弹框：配网抢修分析
var Popup_pwqxfx = (function() {
	var nowmonth = new Date().getMonth();
	if(nowmonth==0){
		nowmonth = 12
	}
	$("#l_pop_pwqx_m").attr("data-month", nowmonth);
	var el = document.querySelector("#popup-pwqxfx");
	var chart_gzqxhb = echarts.init(el.querySelector("#popup-pwqxfx_gzqxhb"), {
			width: 2700,
			height: 690
		}),
		chart_pjddsjhb = echarts.init(el.querySelector("#popup-pwqxfx_pjddsjhb"), {
			width: 1320,
			height: 690
		}),
		chart_pjxfsjhb = echarts.init(el.querySelector("#popup-pwqxfx_pjxfsjhb"), {
			width: 1320,
			height: 690
		}),
		chart_yhbx = echarts.init(el.querySelector("#popup-pwqxfx_yhbx"), {
			width: 870,
			height: 690
		}),
		chart_dlgz = echarts.init(el.querySelector("#popup-pwqxfx_dlgz"), {
			width: 870,
			height: 690
		}),
		chart_fdlgz = echarts.init(el.querySelector("#popup-pwqxfx_fdlgz"), {
			width: 870,
			height: 690
		}),
		chart_pjddsj = echarts.init(el.querySelector("#popup-pwqxfx_pjddsj"), {
			width: 1320,
			height: 690
		}),
		chart_pjxfsj = echarts.init(el.querySelector("#popup-pwqxfx_pjxfsj"), {
			width: 1320,
			height: 690
		});

	var data = {};

	function update() {
		// 故障抢修环比
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
//				data: (function() {					
//					return Object.keys(data);//上月非电力故障，当月非电力故障
//				})(),
//				data:['上月非电力故障','当月非电力故障','当月欠费付电','上月欠费付电','当月电力故障','上月电力故障']
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
//			series:[
//			{
//				name:'当月电力故障',
//				type:'bar',
//				data:data.gzqxhb.当月电力故障,
//				itemStyle: {
//					color: '#00479d'
//				}
//				
//			},
//			{
//				name:'当月非电力故障',
//				type:'bar',
//				data:data.gzqxhb.当月非电力故障,
//				itemStyle: {
//					color: '#006fba'
//				}
//			},
//			{
//				name:'当月欠费付电',
//				type:'bar',
//				data:data.gzqxhb.当月用户报修,
//				itemStyle: {
//					color: '#25b1d8'
//				}
//			},
//			{
//				name:'上月电力故障',
//				type:'bar',
//				data:data.gzqxhb.上月电力故障,
//				itemStyle: {
//					color: '#00834d'
//				}
//			}
//			,
//			{
//				name:'上月非电力故障',
//				type:'bar',
//				data:data.gzqxhb.上月非电力故障,
//				itemStyle: {
//					color: '#429577'
//				}
//			},
//			{
//				name:'上月欠费付电',
//				type:'bar',
//				data:data.gzqxhb.上月用户报修,
//				itemStyle: {
//					color: '#83b49e'
//				}
//			}
//			]
		};
		chart_gzqxhb.setOption(option_gzqxhb);

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
		chart_pjddsjhb.setOption(option_pjddsjhb);

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
		chart_pjxfsjhb.setOption(option_pjxfsjhb);

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
				selectedMode: true
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
		chart_yhbx.setOption(option_yhbx);
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
		chart_dlgz.setOption(option_dlgz);
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
		chart_fdlgz.setOption(option_fdlgz);
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
	                    			console.log(data)
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
			
			
			
//			series: (function() {
//				var arr = [];
//				var color = {
//					"当年": "#0060e5",
//					"上年": "#12b4ff",
//					"上海公司当年": "#4700ff",
//					"上海公司上年": "#00cc00"
//				};
//				for(var key in data.pjddsj) {
//					arr.push({
//						type: "line",
//						name: key,
//						symbol: "circle",
//						label: {
//	                    	normal: {
//	                    		show: true,
//	                    		position: 'top',
//	                    		formatter: function (params) {
//                  			
//	                    			var theMax = Math.max.apply(null, data.pjddsj[key]);
//									if (params.value == theMax) {
//										return params.value;
//									}else{
//										return '';
//									}
//	                    		}
//	                    	}
//	                    },
//						itemStyle: {
//							color: color[key]
//						},
//						// smooth: true,
//						data: data.pjddsj[key],
//						// areaStyle: {
//						//     opacity: 0.1
//						// },
//					})
//				}
//				return arr
//			})()
		};
		chart_pjddsj.setOption(option_pjddsj,true);
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
			
			
//			series: (function() {
//				var arr = [];
//				var color = {
//					"当年": "#0060e5",
//					"上年": "#12b4ff",
//					"上海公司当年": "#4700ff",
//					"上海公司上年": "#00cc00"
//				};
//				for(var key in data.pjxfsj) {
//					arr.push({
//						type: "line",
//						name: key,
//						symbol: "circle",
//						itemStyle: {
//							color: color[key]
//						},
//						label: {
//	                    	normal: {
//	                    		show: true,
//	                    		position: 'top',
//	                    		formatter: function (params) {
//                  			
//	                    			var theMax = Math.max.apply(null, data.pjxfsj[key]);
//									if (params.value == theMax) {
//										return params.value;
//									}else{
//										return '';
//									}
//	                    		}
//	                    	}
//	                    },
//						// smooth: true,
//						data: data.pjxfsj[key],
//						// areaStyle: {
//						//     opacity: 0.1
//						// },
//					})
//				}
//				return arr
//			})()










		});
		chart_pjxfsj.setOption(option_pjxfsj,true);
	}

	function setData(newdata) {
		if(!newdata) return;
		for(var key in newdata) {
			data[key] = newdata[key]
		}		
		update();
	}

//	function setData(newdata, isMarge) {
//		if(!newdata) return;
//		var isEmpty = true;
//		for(var t in data) {
//			isEmpty = false;
//		}
//		if(isEmpty) {
//			data = newdata;
//		} else if(isMarge) {
//			//  	data={};
//			for(var key in newdata) {
//				data[key] = newdata[key]
//			}
//		} else {
//			f(newdata, data);
//		}
//		update();
//	}

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