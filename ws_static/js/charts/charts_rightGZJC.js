$(document).ready(function () {
	//初始化图表
    chart_110kv_pie(0,0,0,0);//全网状态 下 故障监测 之 实时监测:110kV及以上饼图
    chart_35kv_pie(0,0,0,0);//全网状态 下 故障监测 之 实时监测:35kV及以上饼图
    chart_10kv_pie(0,0,0,0);//全网状态 下 故障监测 之 实时监测:10kV及以上饼图
    chart_04kv_pie(0,0,0,0);//全网状态 下 故障监测 之 实时监测:10kV及以上饼图
    chart_gzfb_bar();//全网状态 下 故障监测 之 故障分布条形图
    //在点击 全网状态 下 故障监测 时以上方法会被调用来显示实时数据
});
/**
 * 全网状态
 * 下
 * 故障监测
 * 之
 * 实时监测:
 * 110kV及以上饼图
 */
function chart_110kv_pie() {
	var zhanWeiFu=0;
	if(arguments[1]===0 && arguments[2]===0 && arguments[3]===0 && arguments[4]===0 ){
		zhanWeiFu=1;
	}
    var option = {
        title: {//标题组件
            text: arguments[0] || 0,
            x: 'center',//标题的位置 默认是left，其余还有center、right属性
            y: 'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
            }
        },
        tooltip: { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            //formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
//          formatter: "{b} : {d}%" //提示框浮层内容格式器
			formatter: function (params){
				if(params.name=="占位符" ){
					return '';
				}
				return params.name+": "+params.percent+"%";
			}
        },
        color: ['#0069c7', '#13a7e4', '#15e9d8', '#6ae0f3','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色


        series: [ //系列列表
            {
                name: '设备状态',  //系列名称
                type: 'pie',   //类型 pie表示饼图
                center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle: {  //图形样式
                    normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
                            show: true,
                            formatter: function (params) {
                                //if(params.name=="其他" || params.name=="总数"){
                                return ""
                                //}
                                //return params.value
                            },
                            textStyle: {
                                fontSize: '24',
                                fontWeight: 'bold'
                            }//平常不显示
                        },
                        labelLine: {     //标签的视觉引导线样式
                            show: false  //平常不显示
                        }
                    },
                    emphasis: {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
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
                    {value: arguments[1] || 0, name: 'SCADA'},
                    {value: arguments[2] || 0, name: 'DSCADA'},
                    {value: arguments[3] || 0, name: '用电信息采集'},
                    {value: arguments[4] || 0, name: '其他'},
                    {value: zhanWeiFu, name: '占位符'},
                ]
            }
        ]
    };
    echarts.init(document.getElementById('chart_110kv_pie')).setOption(option);


}
/**
 * 全网状态
 * 下
 * 故障监测
 * 之
 * 实时监测:
 * 35kV及以上饼图
 */
function chart_35kv_pie() {
	var zhanWeiFu=0;
	if(arguments[1]===0 && arguments[2]===0 && arguments[3]===0 && arguments[4]===0 ){
		zhanWeiFu=1;
	}
    var option = {
        title: {//标题组件
            text: arguments[0] || '0',
            x: 'center',//标题的位置 默认是left，其余还有center、right属性
            y: 'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
                //fontSize: 48,
            }
        },
        tooltip: { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
//          formatter: "{b} : {d}%" //提示框浮层内容格式器
			formatter: function (params){
				if(params.name=="占位符" ){
					return '';
				}
				return params.name+": "+params.percent+"%";
			}
        },
//      color: ['#0992f2', '#1efc3d', '#1ee6fd', '#1e43fc'],  //手动设置每个图例的颜色
        color: ['#0069c7', '#13a7e4', '#15e9d8', '#6ae0f3','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色

        series: [ //系列列表
            {
                name: '设备状态',  //系列名称
                type: 'pie',   //类型 pie表示饼图
                center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle: {  //图形样式
                    normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
                            show: true,
                            formatter: function (params) {
                                //if(params.name=="其他" || params.name=="总数"){
                                return ""
                                //}
                                //return params.value
                            },
                            textStyle: {
                                fontSize: '24',
                                fontWeight: 'bold'
                            }//平常不显示
                        },
                        labelLine: {     //标签的视觉引导线样式
                            show: false  //平常不显示
                        }
                    },
                    emphasis: {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
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
                    {value: arguments[1] || 0, name: 'SCADA'},
                    {value: arguments[2] || 0, name: 'DSCADA'},
                    {value: arguments[3] || 0, name: '用电信息采集'},
                    {value: arguments[4] || 0, name: '其他'},
                    {value: zhanWeiFu, name: '占位符'},
                ]
            }
        ]
    };
    echarts.init(document.getElementById('chart_35kv_pie')).setOption(option);
}
/**
 * 全网状态
 * 下
 * 故障监测
 * 之
 * 实时监测:
 * 10kV及以上饼图
 */
function chart_10kv_pie() {
	var zhanWeiFu=0;
	if(arguments[1]===0 && arguments[2]===0 && arguments[3]===0 && arguments[4]===0 ){
		zhanWeiFu=1;
	}
    var option = {
        title: {//标题组件
            text: arguments[0] | '0',
            x: 'center',//标题的位置 默认是left，其余还有center、right属性
            y: 'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
            }
        },
        tooltip: { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            formatter: "{b} : {d}%" //提示框浮层内容格式器
        },
        color: ['#0069c7', '#13a7e4', '#15e9d8', '#6ae0f3','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色

        series: [ //系列列表
            {
                name: '设备状态',  //系列名称
                type: 'pie',   //类型 pie表示饼图
                center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle: {  //图形样式
                    normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
                            show: true,
                            formatter: function (params) {
                                //if(params.name=="其他" || params.name=="总数"){
                                return ""
                                //}
                                //return params.value
                            },
                            textStyle: {
                                fontSize: '24',
                                fontWeight: 'bold'
                            }//平常不显示
                        },
                        labelLine: {     //标签的视觉引导线样式
                            show: false  //平常不显示
                        }
                    },
                    emphasis: {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
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
                    {value: arguments[1] || 0, name: 'SCADA'},
                    {value: arguments[2] || 0, name: 'DSCADA'},
                    {value: arguments[3] || 0, name: '用电信息采集'},
                    {value: arguments[4] || 0, name: '其他'},
                    {value: zhanWeiFu, name: '占位符'},
                ]
            }
        ]
    };
    echarts.init(document.getElementById('chart_10kv_pie')).setOption(option);
}
/**
 * 全网状态
 * 下
 * 故障监测
 * 之
 * 实时监测:
 * 0.4kV及以上饼图
 */
function chart_04kv_pie() {
	var zhanWeiFu=0;
	if(arguments[1]===0 && arguments[2]===0 && arguments[3]===0 && arguments[4]===0 ){
		zhanWeiFu=1;
	}
    var option = {
        title: {//标题组件
            text: arguments[0] | '0',
            x: 'center',//标题的位置 默认是left，其余还有center、right属性
            y: 'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
            }
        },
        tooltip: { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            formatter: "{b} : {d}%" //提示框浮层内容格式器
        },
        color: ['#0069c7', '#13a7e4', '#15e9d8', '#6ae0f3','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色

        series: [ //系列列表
            {
                name: '设备状态',  //系列名称
                type: 'pie',   //类型 pie表示饼图
                center: ['50%', '50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle: {  //图形样式
                    normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
                            show: true,
                            formatter: function (params) {
                                //if(params.name=="其他" || params.name=="总数"){
                                return ""
                                //}
                                //return params.value
                            },
                            textStyle: {
                                fontSize: '24',
                                fontWeight: 'bold'
                            }//平常不显示
                        },
                        labelLine: {     //标签的视觉引导线样式
                            show: false  //平常不显示
                        }
                    },
                    emphasis: {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label: {  //饼图图形上的文本标签
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
                    {value: arguments[1] || 0, name: 'SCADA'},
                    {value: arguments[2] || 0, name: 'DSCADA'},
                    {value: arguments[3] || 0, name: '用电信息采集'},
                    {value: arguments[4] || 0, name: '其他'},
                    {value: zhanWeiFu, name: '占位符'},
                ]
            }
        ]
    };
    echarts.init(document.getElementById('chart_04kv_pie')).setOption(option);
}
/**
 * 全网状态
 * 下
 * 故障监测
 * 之
 * 故障分布条形图
 */
function chart_gzfb_bar() {
    var option = {
        color: ['#00da5b','#e3bc31'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['核心', '浦东', '市区', '市北', '市南', '嘉定', '松江', '青浦', '奉贤', '金山', '崇明', '长兴'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2076ae',
                },
            },
            axisLabel:{
                show : true,
                textStyle : {
                    fontSize: 28,
                    color : '#eeeeee'
                },
            }
        }],
        yAxis: [{
            type: 'value',
            max:function(value){
            	var num = value.max*3
            	if(num%10!=0){
            		num = 10-(num%10)+num
            	}
            	return num
            },
            min:0,
            axisTick: {
                length:10,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2076ae',
                },
            },
            axisLabel:{
                show : true,
                textStyle : {
                    fontSize: 28,
                    color : '#fff'
                }
            },
            splitLine:{
            	lineStyle:{
            		color:'#2076ae'
            	}
            },
            boundaryGap: ['0%', '20%'],
        }],
        series: [{
            name: '故障分布',
            type: 'bar',
            stack:'故障分布',
            barWidth: '30%',
            label:{
                show:true,
                color: '#FFF',
                textStyle:{
                    color: '#FFF',
                    fontSize:20
                }
            },

        },
        {
            name: '处理中',
            type: 'bar',
            stack:'故障分布',
            //替换数据
            data: [arguments[12] || 0, arguments[13] || 0, arguments[14] || 0, arguments[15] || 0,
                arguments[16] || 0, arguments[17] || 0, arguments[18] || 0, arguments[19] || 0,
                arguments[20] || 0, arguments[21] || 0, arguments[22] || 0, arguments[23] || 0]
        },
        {
            name: '已处理',
            type: 'bar',
            stack:'故障分布',
            //替换数据
            data: [arguments[0] || 0, arguments[1] || 0, arguments[2] || 0, arguments[3] || 0,
                arguments[4] || 0, arguments[5] || 0, arguments[6] || 0, arguments[7] || 0,
                arguments[8] || 0, arguments[9] || 0, arguments[10] || 0, arguments[11] || 0]
        }
        ]
    };
    echarts.init(document.getElementById('chart_gzfb_bar')).setOption(option);
    //点击显示故障分布明细列表与塞数据
   echarts.init(document.getElementById('chart_gzfb_bar')).on("click",function clickEchart(param) {

   	        if (param.componentType !== "series"){
		        return;
		    }
		    var name = param.name;
            $(".bottom-list").removeClass("hide");//显示class为bottom-list的div
            if(name == '核心'){
		    	var sfhxq = '1';
		    } else {
		    	var sfhxq = '-1';
		    }
            switch(name){
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
            showFaultJianCeList(areaId,"08,22,25,32",sfhxq);
            $('#qiangdan_title').text("故障监测");//明细列表标题
  });

}