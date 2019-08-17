$(document).ready(function(){
    patrol_box('-1');//右侧业务指挥下已巡视数
//  abnormal();//右侧业务指挥下任务处理之异常
//  urgent();//右侧业务指挥下任务处理之紧急
    chart_xsfb();//右侧业务指挥下巡视分布
});
/**
 * 右侧业务指挥
 * 下
 * 已巡视数
 */
function patrol_box(ssgs) {
    var patrol_box = echarts.init(document.getElementById('patrol_box'));
    var option = {
        title: {//标题组件
            text: '44',
            x:'center',//标题的位置 默认是left，其余还有center、right属性
            y:'center',
            show: false,
            textStyle: {
                color: "#fff",
                fontSize: 48,
                fontWeight:'bold'
            }
        },
        tooltip : { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
        },
        color:['#60b3e5','#0071cf'],  //手动设置每个图例的颜色
        animation: false,

        series : [ //系列列表
            {
                name:'保电特巡',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['45%','35%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius : ['50%', '60%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle : {  //图形样式
                    normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label : {  //饼图图形上的文本标签
                            show : false,
                            textStyle : {
                                fontSize : '24',
                                fontWeight : 'bold'
                            }//平常不显示
                        },
                        labelLine : {     //标签的视觉引导线样式
                            show : false  //平常不显示
                        }
                    },
                    emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label : {  //饼图图形上的文本标签
                            show : false,
                            position : 'center',
                            textStyle : {
                                fontSize : '32',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:6, name:'20'},
                    {value:24, name:'24'},
                ]
            }
        ]
    };
    patrol_box.setOption(option);
    setBaoDianTeXun(patrol_box,option,ssgs);
}
/*
     巡视分布柱状图
 * 
 * 
 * */

function chart_xsfb() {
    var option = {
//      color: ['#0071ce','#5fb4e5','#e3bc31','#fa364a'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend:{
        	right:40,
        	itemGap:20,
        	textStyle:{
        		color:'rgba(255,255,255,0.8)',
        		fontSize:24,
        	},
			data:['计划巡视','已巡视','已发现缺陷','已发现隐患']
		},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['核心','检修', '浦东', '市区', '市北', '市南', '嘉定', '松江', '青浦', '奉贤', '金山', '崇明', '长兴'],
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
//          max:function(value){
//          	var num = value.max*2
//          	if(num%100!=0){
//          		num = 100-(num%100)+num
//          	}
//          	return num
//          },
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
            name: '巡视',
            type: 'bar',
            stack:'计划巡视',
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
            name: '计划巡视',
            type: 'bar',
            stack:'计划巡视',
            color:'#0071ce',
            //替换数据
            data:[0,0,0,0,0,0,0,0,0,0,0,0,0]
//          data: [arguments[12] || 0, arguments[13] || 0, arguments[14] || 0, arguments[15] || 0,
//              arguments[16] || 0, arguments[17] || 0, arguments[18] || 0, arguments[19] || 0,
//              arguments[20] || 0, arguments[21] || 0, arguments[22] || 0, arguments[23] || 0]
        },
        {
            name: '已巡视',
            type: 'bar',
            stack:'计划巡视',
            color:'#5fb4e5',
            //替换数据
            data:[0,0,0,0,0,0,0,0,0,0,0,0,0]
//          data: [arguments[0] || 0, arguments[1] || 0, arguments[2] || 0, arguments[3] || 0,
//              arguments[4] || 0, arguments[5] || 0, arguments[6] || 0, arguments[7] || 0,
//              arguments[8] || 0, arguments[9] || 0, arguments[10] || 0, arguments[11] || 0]
        },
        {
            name: '故障',
            type: 'bar',
            stack:'故障',
            barWidth:10,
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
            name: '已发现缺陷',
            type: 'bar',
            stack:'故障',
            color:'#e3bc31',
            //替换数据
            data:[0,0,0,0,0,0,0,0,0,0,0,0,0]
//          data: [arguments[12] || 0, arguments[13] || 0, arguments[14] || 0, arguments[15] || 0,
//              arguments[16] || 0, arguments[17] || 0, arguments[18] || 0, arguments[19] || 0,
//              arguments[20] || 0, arguments[21] || 0, arguments[22] || 0, arguments[23] || 0]
        },
        {
            name: '已发现隐患',
            type: 'bar',
            stack:'故障',
            color:'#fa364a',
            //替换数据
            data:[0,0,0,0,0,0,0,0,0,0,0,0,0]
//          data: [arguments[0] || 0, arguments[1] || 0, arguments[2] || 0, arguments[3] || 0,
//              arguments[4] || 0, arguments[5] || 0, arguments[6] || 0, arguments[7] || 0,
//              arguments[8] || 0, arguments[9] || 0, arguments[10] || 0, arguments[11] || 0]
        }
        ]
    };
    var chart_xsfb = echarts.init(document.getElementById('chart_xsfb'));
    chart_xsfb.setOption(option);
    doXunShiInfo(chart_xsfb,option,"-1");
    //点击显示故障分布明细列表与塞数据
// echarts.init(document.getElementById('chart_xsfb')).on("click",function clickEchart(param) {
// 	        if (param.componentType !== "series"){
//		        return;
//		    }
//		    var name = param.name;
//          $(".bottom-list").removeClass("hide");//显示class为bottom-list的div
//          $("#FourUl").removeClass("hide");//显示id为FourUl的ul
//          if(name == '核心'){
//		    	var sfhxq = '1';
//		    } else {
//		    	var sfhxq = '-1';
//		    }
//          switch(name){
//				case '上海':
//					areaId = '8a812897493378a00149567740676661';
//				    break;
//				case '核心':
//					areaId = 'JBH-HXQ';
//				    break;
//				case '浦东':
//				    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
//				    break;
//				case '市区':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
//				    break;
//				case '市北':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
//				    break;
//				case '市南':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
//				    break;
//				case '嘉定':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
//				    break;
//				case '松江':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
//				    break;
//			    case '青浦':
//			    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
//				    break;
//				case '奉贤':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
//				    break;
//				case '金山':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
//				    break;
//				case '崇明':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
//				    break;
//				case '长兴':
//					areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
//				    break;
//			}
//          showFaultJianCeList(areaId,"08,22,25,32",sfhxq);
//          $('#qiangdan_title').text("故障监测");//明细列表标题
//});
//  
}








/**
 * 右侧业务指挥
 * 下
 * 任务处理
 * 之
 * 异常
 */
function abnormal() {
    var dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
//  var abnormal = echarts.init(document.getElementById('abnormal'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (a) {
                if (a.name === "invisible"){
                    return ;
                }
                //70%认为100%
                var percent = a.percent > 69 ? 100 : a.percent * 10 /7;
                return (
                    a.seriesName+ "<br/>" + a.name + " : " + parseInt(percent).toString() +"%"
                );


            }
        },
        legend: {
            orient : 'vertical',
            x : 200,
            y : 80,
            itemGap:8,
            data:['1.已下达 68','2.抢修中 29','3.已完成 15'],
            textStyle:{//图例文字的样式
                color:'#ccc',
                fontSize:24
            },
            selectedMode: false
           
        },
        color:['#0071cd','#0291d3','#4f9cc6'],
        animation: false,
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [125, 150],
                itemStyle : dataStyle,
                data:[
                    {
                        value:68,
                        name:'1.已下达 68'
                    },
                    {
                        value:32,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'2',
                type:'pie',
                clockWise:false,
                radius : [95, 120],
                itemStyle : dataStyle,
                data:[
                    {
                        value:29,
                        name:'2.抢修中 29'
                    },
                    {
                        value:71,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'3',
                type:'pie',
                clockWise:false,
                radius : [65, 90],
                itemStyle : dataStyle,
                data:[
                    {
                        value:15,
                        name:'3.已完成 15'
                    },
                    {
                        value:85,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }
        ]
    };
//  abnormal.setOption(option);
    setTaskCount(abnormal,option,null,"2");
}
/**
 * 右侧业务指挥
 * 下
 * 任务处理
 * 之
 * 紧急
 */
function urgent() {
    var dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
//  var urgent = echarts.init(document.getElementById('urgent'));
    option = {
//
        tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 200,
            y : 80,
            itemGap:8,
            data:['1.已下达 68','2.抢修中 29','3.已完成 15'],
            textStyle:{//图例文字的样式
                color:'#ccc',
                fontSize:24
            },
            selectedMode: false
        },
        color:['#0071cd','#0291d3','#4f9cc6'],
        animation: false,
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [125, 150],
                itemStyle : dataStyle,
                data:[
                    {
                        value:68,
                        name:'1.已下达 68'
                    },
                    {
                        value:32,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'2',
                type:'pie',
                clockWise:false,
                radius : [95, 120],
                itemStyle : dataStyle,
                data:[
                    {
                        value:29,
                        name:'2.抢修中 29'
                    },
                    {
                        value:71,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'3',
                type:'pie',
                clockWise:false,
                radius : [65, 90],
                itemStyle : dataStyle,
                data:[
                    {
                        value:15,
                        name:'3.已完成 15'
                    },
                    {
                        value:85,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }
        ]
    };
//  urgent.setOption(option);
    setTaskCount(urgent,option,null,"3");
}