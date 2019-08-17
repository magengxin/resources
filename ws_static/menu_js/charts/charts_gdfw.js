
	//初始化弹框里的数据，数据格式请严格按照示例
setTimeout(function(){
	//默认初始化图表
	shishijianceBiao1(0,'0');//全网状态 下 供电服务 下 电力故障 左上侧图表
	shishijianceBiao2(0,'0');//全网状态 下 供电服务 下 电力故障 右上侧图表
	shishijianceBiao3(0,'0');//全网状态 下 供电服务 下 非电力故障 左上侧图表
	shishijianceBiao4(0,'0');//全网状态 下 供电服务 下 非电力故障 右上侧图表
	pjddsj95598(30);//全网状态 下 供电服务 下 抢修效率-平均到达时间
	pjddsj12345(30);//全网状态 下 供电服务 下 抢修效率-平均修复时间
//	juBaoBingTu(0, 0,0);//全网状态 下 供电服务 下 紧急诉求之举报工单
//	suQiuBingTu(0, 0,0);//全网状态 下 供电服务 下 紧急诉求之投诉工单
	jinJiSuQiuZhuZhuangTu(); //紧急诉求柱状图初始化(全网状态 下 供电服务 下 诉求分布)
	//在点击 全网状态 下 供电服务 时以上方法会被调用来显示实时数据
},1000)
	


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
 	 yonghubaoxiutu.setOption(yonghu); //用户报修塞数据
 }   




/**
 * 实时监测右边第一个图表
 */



function shishijianceBiao1(val1, val2,countNum) {
	console.log(countNum)
	var option = {
		title: { //标题组件
			text: ''+val1,
			subtext: ''+val2,
			itemGap: 10,
			x: 'center', //标题的位置 默认是left,其余还有center、right属性
			y: 30,

			textStyle: {
				color: "#e3bd31",
				fontSize: 24,
			},
			subtextStyle: {
				fontSize: 24,
				color: "#00db5a",
			}
		},
		tooltip: { //提示框组件
			show: false,
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			formatter: "{b} : {d}%" //提示框浮层内容格式器
		},
		color: ['#12b4ff', '#082f45', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色

		graphic: [{
			type: 'image',
			left: 23,
			top: 'center',
			z: 2,
			zlevel: 100,
			style: {
				textAlign: 'center',
				image: basepath+'/ws_static/img/xian.png',

			}
		}],
		animation: false,

		series: [ //系列列表
			{
				name: '设备状态', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['70%', '90%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if(params.name=="其他" || params.name=="总数"){
								return ""
								//}
								//return params.value
							},
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
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
				data: [

					{
						value:val1+val2,
						name: '总数'
					},
					{
						value: countNum-(val1+val2),
						name: '其他'
					},
				]
			}
		]
	};
	var biao1 = echarts.init(document.getElementById('shishijiance1-biao1'));
	biao1.setOption(option);//实时监测右侧第一个图表

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}

/**
 * 实时监测右边第二个图表
 */
function shishijianceBiao2(val1, val2,countNum) {

	var option = {
		title: { //标题组件
			text: ''+val1,
			subtext: ''+val2,
			itemGap: 10,
			x: 'center', //标题的位置 默认是left,其余还有center、right属性
			y: 30,

			textStyle: {
				color: "#e3bd31",
				fontSize: 24,
			},
			subtextStyle: {
				fontSize: 24,
				color: "#00db5a",
			}
		},
		tooltip: { //提示框组件
			show:false,
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			formatter: "{b} : {d}%" //提示框浮层内容格式器
		},
		color: ['#0060e5', '#082f45', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色
		graphic: [{
			type: 'image',
			left: 23,
			top: 'center',
			z: 2,
			zlevel: 100,
			style: {
				textAlign: 'center',
				image: basepath+'/ws_static/img/xian.png',
			}
		}],
		animation: false,

		series: [ //系列列表
			{
				name: '设备状态', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['70%', '90%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if(params.name=="其他" || params.name=="总数"){
								return ""
								//}
								//return params.value
							},
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
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
				data: [

					{
						value: val1+val2,
						name: '总数'
					},
					{
						value: countNum-(val1+val2),
						name: '其他'
					},
				]
			}
		]
	};
	var biao1 = echarts.init(document.getElementById('shishijiance1-biao2'));
	biao1.setOption(option);//实时监测右侧第二个图表

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}

/**
 * 实时监测右边第三个图表
 */
function shishijianceBiao3(val1, val2,countNum) {

	var option = {
		title: { //标题组件
			text: ''+val1,
			subtext: ''+val2,
			itemGap: 10,
			x: 'center', //标题的位置 默认是left,其余还有center、right属性
			y: 30,

			textStyle: {
				color: "#e3bd31",
				fontSize: 24,
			},
			subtextStyle: {
				fontSize: 24,
				color: "#00db5a",
			}
		},
		tooltip: { //提示框组件
			show: false,
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			formatter: "{b} : {d}%" //提示框浮层内容格式器
		},
		color: ['#12b4ff', '#082f45', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色

		graphic: [{
			type: 'image',
			left: 23,
			top: 'center',
			z: 2,
			zlevel: 100,
			style: {
				textAlign: 'center',
				image: basepath+'/ws_static/img/xian.png',

			}
		}],
		animation: false,
		series: [ //系列列表
			{
				name: '设备状态', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['70%', '90%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if(params.name=="其他" || params.name=="总数"){
								return ""
								//}
								//return params.value
							},
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
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
				data: [

					{
						value: val1+val2,
						name: '总数'
					},
					{
						value: countNum -(val1+val2),
						name: '其他'
					},
				]
			}
		]
	};
	var biao1 = echarts.init(document.getElementById('shishijiance1-biao3'));
	biao1.setOption(option);//实时监测右侧第三个图表

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}

/**
 * 实时监测右边第四个图表
 */
function shishijianceBiao4(val1, val2,countNum) {

	var option = {
		title: { //标题组件
			text: ''+val1,
			subtext: ''+val2,
			itemGap: 10,
			x: 'center', //标题的位置 默认是left,其余还有center、right属性
			y: 30,

			textStyle: {
				color: "#e3bd31",
				fontSize: 24,
			},
			subtextStyle: {
				fontSize: 24,
				color: "#00db5a",
			}
		},
		tooltip: { //提示框组件
			show:false,
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			formatter: "{b} : {d}%" //提示框浮层内容格式器
		},
		color: ['#0060e5', '#082f45', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色

		graphic: [{
			type: 'image',
			left: 23,
			top: 'center',
			z: 2,
			zlevel: 100,
			style: {
				textAlign: 'center',
				image: basepath+'/ws_static/img/xian.png',

			}
		}],
		animation: false,

		series: [ //系列列表
			{
				name: '设备状态', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['70%', '90%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if(params.name=="其他" || params.name=="总数"){
								return ""
								//}
								//return params.value
							},
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
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
				data: [

					{
						value: val1+val2,
						name: '总数'
					},
					{
						value: countNum -(val1+val2),
						name: '其他'
					},
				]
			}
		]
	};
	var biao1 = echarts.init(document.getElementById('shishijiance1-biao4'));
	biao1.setOption(option);//实时监测右侧第四个图表

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}

/**
 * 抢修效率-平均到达时间
 * @param {Object} total
 */
function pjddsj95598(total) {

	var option = {
		title: { //标题组件
			text: total,
			//          subtext:'用户报修',
			itemGap: 3,
			x: 'center', //标题的位置 默认是left,其余还有center、right属性
			y: 'center',

			textStyle: {
				color: "#feffff",
				fontSize: 36,
			},
			//          subtextStyle:{
			//          	fontSize:18,
			//          	color: "#feffff",
			//          }
		},
		tooltip: { //提示框组件
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			//          formatter: "{b} : {d}%" //提示框浮层内容格式器
			show: false,
		},
		color: ['#12b4ff', '#082f45', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色
		animation:false,

		series: [ //系列列表
			{
				name: '设备状态', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['78%', '90%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				startAngle: 180,
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if(params.name=="其他" || params.name=="总数"){
								return ""
								//}
								//return params.value
							},
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					//                  emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
					//                      label : {  //饼图图形上的文本标签
					//                          show : false,
					//                          position : 'center',
					//                          textStyle : {
					//                              fontSize : '24',
					//                              fontWeight : 'bold'
					//                          }
					//                      },
					//                      show:false
					//                  }
				},
				data: [

					{
						value: total,
						name: '总数'
					},
					{
						value: 50,
						name: '其他'
					},
				]
			},

		]
	};
	var pjddsj95598 = echarts.init(document.getElementById('pjddsj95598'));
	pjddsj95598.setOption(option);//平均到达时间

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}

/**
 * 抢修效率-平均修复时间
 * @param {Object} total
 */
function pjddsj12345(total) {

	var option = {
		title: { //标题组件
			text: total,
			//          subtext:'用户报修',
			itemGap: 3,
			x: 'center', //标题的位置 默认是left,其余还有center、right属性
			y: 'center',

			textStyle: {
				color: "#feffff",
				fontSize: 36,
			},
			//          subtextStyle:{
			//          	fontSize:18,
			//          	color: "#feffff",
			//          }
		},
		tooltip: { //提示框组件
			trigger: 'item', //触发类型(饼状图片就是用这个)
			//formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			//          formatter: "{b} : {d}%" //提示框浮层内容格式器
			show: false,
		},
		color: ['#12b4ff', '#082f45', 'rgba(188, 188, 188, 0.1)'], //手动设置每个图例的颜色
		animation: false,

		series: [ //系列列表
			{
				name: '设备状态', //系列名称
				type: 'pie', //类型 pie表示饼图
				center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
				radius: ['78%', '90%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
				startAngle: 180,
				itemStyle: { //图形样式
					normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
						label: { //饼图图形上的文本标签
							show: true,
							formatter: function(params) {
								//if(params.name=="其他" || params.name=="总数"){
								return ""
								//}
								//return params.value
							},
							textStyle: {
								fontSize: '24',
								fontWeight: 'bold'
							} //平常不显示
						},
						labelLine: { //标签的视觉引导线样式
							show: false //平常不显示
						}
					},
					emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时。
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
				data: [

					{
						value: total,
						name: '总数'
					},
					{
						value: 50,
						name: '其他'
					},
				]
			},

		]
	};
	var pjddsj12345 = echarts.init(document.getElementById('pjddsj12345'));
	pjddsj12345.setOption(option);//平均修复时间

}

/**
 * 画紧急诉求右侧第一个饼图
 */
function juBaoBingTu(jubaoVal, jubaoVal12345, jubaoVal95598) {
	jubaoVal=''+jubaoVal;
	var option = {
		animation: false,
		series: [{ //饼图
				type: "pie",
				radius: [60, 80],
				label: {
					color: "#fff",
					align: "center",
					formatter: "{a|{b}}\n\n{b|{c}}",
					rich: {
						a: {
							color: "#abd7e2",
							font: '微软雅黑',
							align: "center",
							fontSize: 18
						},
						b: {
							color: "#02fffd",
							font: '微软雅黑',
							align: "center",
							fontSize: 20
						}
					}
				},
				labelLine: {
					length: 40,
					length2: 40,
					lineStyle: {
						color: "#fff"
					}
				},
				data: [{
					name: "95598",
					value: jubaoVal95598,
					itemStyle: {
						color: "#15cef5"
					},
					label: {
						padding: [0, 30, 50, -45]
					}
				}, {
					name: "12345",
					value: jubaoVal12345,
					itemStyle: {
						color: "#00da5a"
					},
					label: {
						padding: [0, -45, 50, 0]
					}
				}]
			},
			{ //外线
				type: "pie",
				radius: [84, 86],
				data: [1],
				label: {
					position: "center",
					formatter: jubaoVal,
					padding: [0, 0, 20, 0],
					fontSize: 24,
					font: '微软雅黑',
					color: '01fffe'
				},
				labelLine: {
					show: false
				},
				itemStyle: {
					color: "#fff"
				}
			},
			{ //内线
				type: "pie",
				radius: [54, 56],
				data: [1],
				label: {
					position: "center",
					formatter: "举报工单",
					padding: [20, 0, 0, 0],
					fontSize: 20,
					font: '微软雅黑',
					color: "#d2bc06"
				},
				labelLine: {
					show: false
				},
				itemStyle: {
					color: "#fff"
				}
			}
		]
	};
//	var juBaoBingTu = echarts.init(document.getElementById('juBaoBingTu'));
//	juBaoBingTu.setOption(option);

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}


/**
 * 画紧急诉求右侧第二个饼图
 */
function suQiuBingTu(suQiuVal, suQiuVal12345, suQiuVal95598) {
	suQiuVal=''+suQiuVal;
	var option = {
		animation: false,
		series: [{ //饼图
				type: "pie",
				radius: [60, 80],
				label: {
					color: "#fff",
					align: "center",
					formatter: "{a|{b}}\n\n{b|{c}}",
					rich: {
						a: {
							color: "#abd7e2",
							font: '微软雅黑',
							align: "center",
							fontSize: 18
						},
						b: {
							color: "#02fffd",
							font: '微软雅黑',
							align: "center",
							fontSize: 20
						}
					}
				},
				labelLine: {
					length: 40,
					length2: 40,
					lineStyle: {
						color: "#fff"
					}
				},
				data: [{
					name: "95598",
					value: suQiuVal95598,
					itemStyle: {
						color: "#15cef5"
					},
					label: {
						padding: [0, 30, 50, -45]
					}
				}, {
					name: "12345",
					value: suQiuVal12345,
					itemStyle: {
						color: "#00da5a"
					},
					label: {
						padding: [0, -45, 50, 0]
					}
				}]
			},
			{ //外线
				type: "pie",
				radius: [84, 86],
				data: [1],
				label: {
					position: "center",
					formatter: suQiuVal,
					padding: [0, 0, 20, 0],
					fontSize: 24,
					font: '微软雅黑',
					color: '01fffe'
				},
				labelLine: {
					show: false
				},
				itemStyle: {
					color: "#fff"
				}
			},
			{ //内线
				type: "pie",
				radius: [54, 56],
				data: [1],
				label: {
					position: "center",
					formatter: "投诉工单",
					padding: [20, 0, 0, 0],
					fontSize: 20,
					font: '微软雅黑',
					color: "#d2bc06"
				},
				labelLine: {
					show: false
				},
				itemStyle: {
					color: "#fff"
				}
			}
		]
	};
//	var suQiuBingTu = echarts.init(document.getElementById('suQiuBingTu'));
//	suQiuBingTu.setOption(option);

	//  getZhiHuiBaodianData(shishijiance1,option,2);
}

/**
 * 画紧急诉求柱状图
 */
function jinJiSuQiuZhuZhuangTu() {
	var option = {

		xAxis: {
			type: 'category',
			data: ['核心区', '浦东', '市区', '市北', '市南', '嘉定', '松江', '青浦', '奉贤', '金山', '崇明', '长兴'],
			axisTick: {
				alignWithLabel: true
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 20,
					color: '#fff'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#2076ae',
					width: 1,
				}
			}
		},
		
		yAxis: {
			boundaryGap: ['0%', '40%'],
			//          name : '次数',
			axisLabel: {
				show: true,
				textStyle: {
					fontSize: 18,
					color: '#fff'
				}
			},
			max:20,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#2076ae',
				}
			},
			axisTick:{
				show:false
			},
			axisLine: {
				show: false,
				
			},
		},

		series: [{
				type: 'bar',
				itemStyle: {
					normal: {
                        color: '#2076ae',
                        label:{
                            show:true,
                            position:'top',
                            color: '#FFF',
                            textStyle:{
                                color: '#FFF',
								fontSize:20
                            }
                        }
					}
				},
				silent: true,
				barWidth: 30,
				barGap: '0%',
				data: arguments[0],
			}, {
				type: 'bar',
				itemStyle: {
					normal: {
                        color: '#2076ae',
                        label:{
                            show:true,
                            position:'top',
                            color: '#FFF',
                            textStyle:{
                                color: '#FFF',
                                fontSize:20
                            }
                        }

					}
				},
				barWidth: 20,
				data: arguments[1]
			}

		]

	};

	var jinJiSuQiuZhuZhuangTu = echarts.init(document.getElementById('jinJiSuQiuZhuZhuangTu'));
	jinJiSuQiuZhuZhuangTu.setOption(option);//紧急诉求柱状图
	// getZhiHuiBaodianData(power_monitor_2,option,1);
}