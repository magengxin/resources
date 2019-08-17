$(document).ready(function(){
    power_monitor_1();//智慧保电 二级用户
    power_monitor_2();//智慧保电 一级用户
    power_monitor_3();//智慧保电 核心配电站
    //dashBoard();//业务指挥下巡视任务 异常处理 紧急处理 三个仪表盘
    left_box2();//资源监控
    load_body();//电网负荷
});

/**
 * 智慧保电 
 * 二级用户
 */
function power_monitor_1() {
    var power_monitor_1 = echarts.init(document.getElementById('power_monitor_1'));
    var option = {
        title: {//标题组件
            text: "正常",
            x:'center',//标题的位置 默认是left，其余还有center、right属性
            y:'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
                fontWeight: "normal"
            }
        },
        tooltip : { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            //formatter: "{b} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
            formatter: "{b} : {d}%" //提示框浮层内容格式器
        },
        // color:['#FF9326','#0252b8','rgba(188, 188, 188, 0.1)'],  //手动设置每个图例的颜色
        color: ['#FF9326', '#13b2e7'],
		
        series : [ //系列列表
            {
                name:'设备状态',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['50%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius : ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle : {  //图形样式
                    normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label : {  //饼图图形上的文本标签
                            show : true,
                            formatter : function (params){
								            	//if(params.name=="其他" || params.name=="总数"){
								            		return ""
								            	//}
								                //return params.value
								            },
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
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '24',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:0, name:'异常'},
                    {value:30, name:'正常'},
                    // {value:50, name:'其他'},
                ]
            }
        ]
    };
    power_monitor_1.setOption(option);
//  getZhiHuiBaodianData(power_monitor_1,option,2);
    getNewZhiHuiBaodianData(power_monitor_1,option,2);//获取智慧保电数据
}
/**
 * 智慧保电 
 * 一级用户
 */
function power_monitor_2() {
    var power_monitor_2 = echarts.init(document.getElementById('power_monitor_2'));
    var option = {
        title: {//标题组件
            text: '正常',
            x:'center',//标题的位置 默认是left，其余还有center、right属性
            y:'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
                fontWeight: "normal"
		        //fontSize: 48,
            }
        },
        tooltip : { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            formatter: "{b} : {d}%" //提示框浮层内容格式器
        },
        color: ['#FF9326', '#13b2e7'],

        series : [ //系列列表
            {
                name:'设备状态',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['50%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius : ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle : {  //图形样式
                    normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label : {  //饼图图形上的文本标签
                            show : true,
                            formatter : function (params){
								            	//if(params.name=="其他" || params.name=="总数"){
								            		return ""
								            	//}
								                //return params.value
								            },
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
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '24',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:11, name:'异常'},
                    {value:24, name:'正常'},
                    // {value:102, name:'其他'},
                ]
            }
        ]
    };
    power_monitor_2.setOption(option);
//  getZhiHuiBaodianData(power_monitor_2,option,1);
    getNewZhiHuiBaodianData(power_monitor_2,option,1);//一级用户塞数据
}
/**
 * 智慧保电 
 * 核心配电站
 */
function power_monitor_3() {
    var power_monitor_3 = echarts.init(document.getElementById('power_monitor_3'));
    var option = {
        title: {//标题组件
            text: '正常',
            x:'center',//标题的位置 默认是left，其余还有center、right属性
            y:'center',
            textStyle: {
                color: "#71dff9",
                fontSize: 36,
                fontWeight: "normal"
            }
        },
        tooltip : { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
//          formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
			formatter: "{b} : {d}%" //提示框浮层内容格式器
        },
        color: ['#FF9326', '#13b2e7'],
        series : [ //系列列表
            {
                name:'设备状态',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['50%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius : ['40%', '50%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle : {  //图形样式
                    normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label : {  //饼图图形上的文本标签
                            show : true,
                            formatter : function (params){
								            	//if(params.name=="其他" || params.name=="总数"){
								            		return ""
								            	//}
								                //return params.value
								            },
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
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '24',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:19, name:'异常'},
                    {value:55, name:'正常'},
                    // {value:21, name:'其他'},
                ]
            }
        ]
    };
    power_monitor_3.setOption(option);
//  getZhiHuiBaodianData(power_monitor_3,option,3);
    getNewZhiHuiBaodianData(power_monitor_3,option,3);//核心配电站塞数据
}
/**
 * 业务指挥下
 * 巡视任务 异常处理 紧急处理 
 * 三个
 * 仪表盘
 */
function dashBoard() {
    var dashBoard = echarts.init(document.getElementById("dashBoard"));
    option = {

        //下面属性才是仪表盘的核心！！反正我是这么认为的！！！
        series: [{
            //类型
            type: 'gauge',
            //半径
            radius: 80,
            //起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            startAngle: 220,
            //结束角度。
            endAngle: -40,
            center: ['15%', '50%'],
            //仪表盘轴线相关配置。
            axisLine: {
                show:true,
                // 属性lineStyle控制线条样式
                lineStyle: {
                    width: 15,
                    color:[[0.3, '#cc29ff'], [0.5, '#68ff55'],[1, 'rgba(6, 136, 226, 0.4)']]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            //刻度样式。
            axisTick: {
                show: false,
            },
            //刻度标签。
            axisLabel: {
                show:false,
            },
            //仪表盘指针。
            pointer: {
                //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                show: false,
                //指针长度
                length:'90%',
                width:0,
            },
            //仪表盘标题。
            title: {
                show: true,
                offsetCenter: [0, '-40%'], // x, y，单位px
                textStyle: {
                    color: '#hhh',
                    fontSize: 30
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                // formatter: '{value}%',
                textStyle: {
                    fontSize: 36,
                    fontWeight:'bold',
                    color:'#0688e2'
                }
            },
            data: [{
                value: 26,
                name: ''
            },]
        },{
            //类型
            type: 'gauge',
            //半径
            radius: 80,
            //起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            startAngle: 220,
            //结束角度。
            endAngle: -40,
            center: ['50%', '50%'],
            //仪表盘轴线相关配置。
            axisLine: {
                show:true,
                // 属性lineStyle控制线条样式
                lineStyle: {
                    width: 15,
                    color:[[0.2, 'rgba(255, 172, 37, 1)'], [1, 'rgba(6, 136, 226, 0.4)']]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            //刻度样式。
            axisTick: {
                show: false,
            },
            //刻度标签。
            axisLabel: {
                show:false,
            },
            //仪表盘指针。
            pointer: {
                //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                show: false,
                //指针长度
                length:'90%',
                width:0,
            },
            //仪表盘标题。
            title: {
                show: true,
                offsetCenter: [0, '-40%'], // x, y，单位px
                textStyle: {
                    color: '#hhh',
                    fontSize: 30
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                // formatter: '{value}%',
                textStyle: {
                    fontSize: 36,
                    fontWeight:'bold',
                    color:'#0688e2'
                }
            },
            data: [{
                value: 59,
                name: ''
            },]
        },{
            //类型
            type: 'gauge',
            //半径
            radius: 80,
            //起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            startAngle: 220,
            //结束角度。
            endAngle: -40,
            center: ['85%', '50%'],
            //仪表盘轴线相关配置。
            axisLine: {
                show:true,
                // 属性lineStyle控制线条样式
                lineStyle: {
                    width: 15,
                    color:[[0.4, 'rgba(255, 75, 55, 1)'],[1, 'rgba(6, 136, 226, 0.4)']]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            //刻度样式。
            axisTick: {
                show: false,
            },
            //刻度标签。
            axisLabel: {
                show:false,
            },
            //仪表盘指针。
            pointer: {
                //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
                show: false,
                //指针长度
                length:'90%',
                width:0,
            },
            //仪表盘标题。
            title: {
                show: true,
                offsetCenter: [0, '-40%'], // x, y，单位px
                textStyle: {
                    color: '#hhh',
                    fontSize: 30
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                // formatter: '{value}%',
                textStyle: {
                    fontSize: 36,
                    fontWeight:'bold',
                    color:'#0688e2'
                }
            },
            data: [{
                value: 31,
                name: ''
            },]
        }]
    };
    dashBoard.setOption(option);
    getYeWuZhiHuData(dashBoard,option);//业务指挥塞数据
}
/**
 * 资源监控
 */
function left_box2() {
    var left_box = echarts.init(document.getElementById('left_box2'));
    var lineStyle = {
        normal: {
            width: 2,
            opacity: 0.9
        }
    };
    var dataBJ = [
//      [69,57,5,30],//右、上、左、左下、右下
        [0,0,0,0],//右、上、左、左下、右下

    ];
    option = {

        radar: {
            indicator: [
                {name: '特巡', max: 69},
                {name: '保障', max: 69},//此处位置原为检修,之后是检修与抢修合并,并重命名为保障
                {name: '后勤', max:69},
                {name: '车辆', max: 69},
//              {name: '抢修', max: 100},
            ],
            radius:100,
            center: ['58%', '50%'],
            shape: 'circle',
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize:24,
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(6, 136, 226, 0.3)',
                        'rgba(6, 136, 226, 0.3)',
                        'rgba(6, 136, 226, 0.3)',
                        'rgba(6, 136, 226, 0.5)',
                        'rgba(6, 136, 226, 0.7)',
                        'rgba(6, 136, 226, 0.9)',
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(6, 136, 226, 0.5)',
                }
            }
        },
        series: [
            {
                name: '资源监控',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#3f6bff'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.3
                    }
                }
            },

        ]
    };

    left_box.setOption(option);
//  ziYuanJianKongData(left_box,option);//资源监控塞数据
}

/**
 * 电网负荷
 * @param {Object} data
 */
function load_body(data) {

    if (!data) {
        data = {
            time:['0','','','','12','','','','24'],
            value: [180,400, 89,540, 260, 830, 710,830, 710]
        }
    }
    var time = data.time;
    var value = data.value;
    var load_body = echarts.init(document.getElementById('load_body'));
    var color=['#0587f2', '#00fe01', '#f39800', '#01dcd7'];
    var bgColor=['rgba(5, 135, 242, 0.3)', 'rgba(0, 254, 1, 0.4)', 'rgba(243, 152, 0, 0.4)', 'rgba(1, 220, 215, 0.4)'];
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            color:['#0587f2', '#00fe01', '#f39800', '#01dcd7']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : time,
                axisLabel: {
                    textStyle: {
                        color: '#fff',//坐标值得具体的颜色
                        fontSize: 22,
                        fontWeight: "normal"
                    },
                    width:1,
                },
                axisLine:{
                    lineStyle:{
                        color: '#289fff',
                        width: 2,
                    },
                },
                splitLine:{
                    show:false
                },
                show:true,

            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: 'rgba(40, 159, 255, 0.8)'
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: 'rgba(40, 159, 255, 0.3)'
                    }
                },
                show:true,
                min:10000
            }
        ],
        grid: {
            left: 5,
            top :'5%',
            right: '5%',
            bottom: '0%',
            containLabel:true
        },
        series : [
            {
                name:'负荷',
                type:'line',
                smooth:true,
                symbol: "none",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            color:bgColor[0]
                        },
                        lineStyle:{
                            color:color[0],
                            width:4,
                        }
                    }
                },
                data:value
            },
        ]
    };
    load_body.setOption(option);
}