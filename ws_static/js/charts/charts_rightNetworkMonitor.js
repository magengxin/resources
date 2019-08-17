$(document).ready(function(){
    liquidFill();//电网可靠性
    qualified1("1","");//A类电压合格率
    qualified2("2","");//B类电压合格率
    qualified3("3","");//C类电压合格率
    qualified4("4","");//D类电压合格率
    quality("");//电能质量
    device_status("");//设备状态
//  customerService();
//  faultDetection_left();
    // faultDetection_left1();
});
/**
 * 电网可靠性
 */
function liquidFill() {
	
    var liquidFill = echarts.init(document.getElementById('liquidFill'));
    option = {
        series: [{
            type: 'liquidFill',
            data: [0.99998],
            numFixed:3,
            radius:'90%',
            backgroundStyle: {
                opacity:0
            },
            outline:{
                itemStyle: {
                    borderColor: '#0170b5',
                }
            },
            color: ['#0170b5'],
            label: {
                normal: {
                    textStyle: {
                        color: '#76ccfc', //波浪上文本颜色
                        insideColor: '#fff', //波浪内部字体颜色
                        fontSize: 48
                    }
                }
            }
        }],
    };
    liquidFill.setOption(option);
    getDwkkx(liquidFill,option);//Ajax请求方法
}
//获取电网可靠性水球数值
function getDwkkx(qualified,option){
	var url = basepath + "interface/BDZT_GETHXZBMX/0";
	var param = {"SSGS":"8a812897493378a00149567740676661", "ZBLX":"1"};
	$.ajax({
        url: url,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	debugger
        	if (data.data) {
                option.series[0].data[0] = data.data[0].ZBZ/100;
                qualified.setOption(option);
            }
        }
    })
}

/**
 * A类电压合格率
 */
function qualified1(dylx,ssgs) {
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };

    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.2)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var radius = [60, 70];
    var qualified1 = echarts.init(document.getElementById('qualified1'));
    option = {
        title : {
            text: '--',
            x: 'center',
            y:'center',
            textStyle: {
                color: '#fff',
                fontSize:'28'
            }
        },
        color:['#16CFF8'],
        series: [{
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : {
                normal : {
                    label : {
                        show : false  //平常不显示
                    },
                    labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                        show: false
                    }
                },
            },
            data : [
                {name:'其他', value:35, itemStyle : labelBottom},
                {name:'A类', value:0,itemStyle : labelTop}
            ]
        }],
    };
    qualified1.setOption(option);
//  getDianYAHeGeLvData(qualified1,option,1);//Ajax请求方法
    getDianYAHeGeLvData(qualified1,option,dylx,ssgs);//Ajax请求方法
}
/**
 * B类电压合格率
 */
function qualified2(dylx,ssgs) {
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };

    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.2)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var radius = [60, 70];
    var qualified2 = echarts.init(document.getElementById('qualified2'));
    option = {
        title : {
            text: '--',
            x: 'center',
            y:'center',
            textStyle: {
                color: '#fff',
                fontSize:'28'
            }
        },
        color:['#16CFF8'],
        series: [{
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : {
                normal : {
                    label : {
                        show : false  //平常不显示
                    },
                    labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                        show: false
                    }
                },
            },
            data : [
                {name:'其他', value:68, itemStyle : labelBottom},
                {name:'B类', value:0,itemStyle : labelTop}
            ]
        }],
    };
    qualified2.setOption(option);
//  getDianYAHeGeLvData(qualified2,option,2);//Ajax请求方法
    getDianYAHeGeLvData(qualified2,option,dylx,ssgs);//Ajax请求方法
}
/**
 * C类电压合格率
 */
function qualified3(dylx,ssgs) {
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };

    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.2)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var radius = [60, 70];
    var qualified3 = echarts.init(document.getElementById('qualified3'));
    option = {
        title : {
            text: '--',
            x: 'center',
            y:'center',
            textStyle: {
                color: '#fff',
                fontSize:'28'
            }
        },
        color:['#16CFF8'],
        series: [{
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : {
                normal : {
                    label : {
                        show : false  //平常不显示
                    },
                    labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                        show: false
                    }
                },
            },
            data : [
                {name:'其他', value:40, itemStyle : labelBottom},
                {name:'C类', value:0,itemStyle : labelTop}
            ]
        }],
    };
    qualified3.setOption(option);
//  getDianYAHeGeLvData(qualified3,option,3);//Ajax请求方法
    getDianYAHeGeLvData(qualified3,option,dylx,ssgs);//Ajax请求方法
}
/**
 * D类电压合格率
 */
function qualified4(dylx,ssgs) {
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };

    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.2)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var radius = [60, 70];
    var qualified4 = echarts.init(document.getElementById('qualified4'));
    option = {
        title : {
            text: '--',
            x: 'center',
            y:'center',
            textStyle: {
                color: '#fff',
                fontSize:'28'
            }
        },
        color:['#16CFF8'],
        series: [{
            type : 'pie',
            center : ['50%', '50%'],
            radius : radius,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : {
                normal : {
                    label : {
                        show : false  //平常不显示
                    },
                    labelLine: { // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                        show: false
                    }
                },
            },
            data : [
                {name:'其他', value:21, itemStyle : labelBottom},
                {name:'D类', value:0,itemStyle : labelTop}
            ]
        }],
    };
    qualified4.setOption(option);
//  getDianYAHeGeLvData(qualified4,option,4);//Ajax请求方法
    getDianYAHeGeLvData(qualified4,option,dylx,ssgs);//Ajax请求方法
}
/**
 * 电能质量
 */
function quality(ssgs) {
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom',
                    fontSize:'30',
                    color: '#FFFFFF'
                }
            },
            labelLine : {
                show : false
            }
        }
    };

    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.1)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var labelFromatter = {
        normal : {
            label : {
//
                show : false  //平常不显示

            },
            labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                show: false
            }
        },
    };
    var radius = [50, 60];
    var containers = echarts.init(document.getElementById('quality'));
    option = {
//
        color:['#0060e6'],
        series: [{
            type : 'pie',
            name: 'thisone',
            center : ['10%', '50%'],
            radius : radius,
            clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : labelFromatter,
            animation: false,
            
            label: {
                normal: {
                    show:'true',
                    position: 'center',
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                        color: "#FFFFFF"
                    },
                },
            },
            data : [
                {name:'', value:0, itemStyle : labelBottom},
                {name:'100%', value:100,itemStyle : labelTop}
            ]
        },
            {
                type : 'pie',
                center : ['30%', '50%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: "#FFFFFF"
                        }
                    },
                },
                data : [
                    {name:'', value:1, itemStyle : labelBottom},
                    {name:'99.4%', value:99,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['50%', '50%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: "#FFFFFF"
                        }
                    },
                },
                data : [
                    {name:'', value:0, itemStyle : labelBottom},
                    {name:'100%', value:100,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['70%', '50%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: "#FFFFFF"
                        }
                    },
                },
                data : [
                    {name:'', value:1, itemStyle : labelBottom},
                    {name:'99.6%', value:99,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['90%', '50%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: "#FFFFFF"
                        }
                    },
                },
                data : [
                    {name:'', value:0, itemStyle : labelBottom},
                    {name:'100%', value:100,itemStyle : labelTop}
                ]
            },
        ],

    };
    containers.setOption(option);
    getDianNengZhiLiangData(containers,option,ssgs);//Ajax请求方法
    
    containers.on('click', function (parans) {
    	if (parans.seriesIndex == 0) {
			ChooseShow("KHFW");
			$('#qiangdan_title').text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 1) {
			ChooseShow("KHFW");
			$('#qiangdan_title').text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 2) {
			ChooseShow("KHFW");
			$('#qiangdan_title').text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 3) {
			ChooseShow("KHFW");
			$('#qiangdan_title').text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 4) {
			ChooseShow("KHFW");
			$('#qiangdan_title').text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}
    })
    
}
/**
 * 设备状态
 */
function device_status(ssgs) {

    var device_status = echarts.init(document.getElementById('device_status'));
    var option = {
//
        tooltip : { //提示框组件
            trigger: 'item', //触发类型(饼状图片就是用这个)
            formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
        },
        color:['#0060E5','#5bc8ea','#ffe95c','#ffffff','#238dea','#7a12e8'],  //手动设置每个图例的颜色
        series : [ //系列列表
            {
                name:'设备状态',  //系列名称
                type:'pie',   //类型 pie表示饼图
                // center:['40%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius : ['60%', '70%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle : {  //图形样式
                    normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        label : {  //饼图图形上的文本标签
                            show : true , //平常不显示,
                            textStyle: {
                                color: "#fff",
                                fontSize: 24,
                            },
                        },
                        labelLine : {     //标签的视觉引导线样式
                            show : true  //平常不显示
                        },
                        borderWidth: 5,
                        borderColor: "#093350",
                        // barBorderRadius: [0,10,10,0],
                    },
                },

                data:[
                    {value:6, name:'500kV及以上'},
                    {value:24, name:'220kV'},
                    {value:70, name:'110kV'},
                    {value:26, name:'35kV'},
                    {value:81, name:'10kV'},
                    {value:21, name:'0.4kV'},
                ]
            }
        ]
    };

    device_status.setOption(option);
    getSheBeiZhuangTai(device_status,option, ssgs, "08,22,25,32,33,35,37,85,83");//其内部的getSheBeiZhuangTaiData是Ajax请求方法
}

function customerService() {
    var labelTop = {
        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            label : {  //饼图图形上的文本标签
                show : true , //平常不显示,
                textStyle: {
                    color: "#fff",
                    fontSize: 24,
                }
            },
            labelLine : {     //标签的视觉引导线样式
                show : true  //平常不显示
            }
        },
    };
    var radius = ['30%', '40%'];
    var customerService = echarts.init(document.getElementById('customerService'));
    var option = {
        color:['#0061E6','#12B4FF'],  //手动设置每个图例的颜色
        series : [ //系列列表
            {
                name:'电力故障',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['15%','30%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius :radius,  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle :labelTop,
                data:[
                    {value:31, name:'12345'},
                    {value:50, name:'95598'},
                ]
            },{
                name:'非电力故障',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['40%','30%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius :radius,  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle :labelTop,
                data:[
                    {value:21, name:'12345'},
                    {value:50, name:'95598'},
                ]
            },{
                name:'举报工单',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['65%','30%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius :radius,  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle :labelTop,
                data:[
                    {value:31, name:'95598'},//需要加个不一样的字符，如空格颜色才能正常显示
                    {value:15, name:'12398'},
                ]
            },{
                name:'诉求工单',  //系列名称
                type:'pie',   //类型 pie表示饼图
                center:['89.3%','30%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius :radius,  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                itemStyle :labelTop,
                data:[
                    {value:12, name:'诉求'},
                    {value:7, name:'举报'},
                ]
            }
        ]
    };
    customerService.setOption(option);
    dealZongTiQiangXiu(customerService,option);
}

function faultDetection_left() {

    var faultDetection_left = echarts.init(document.getElementById('faultDetection_left'));
    var option = {
        series: [{
            type: 'gauge',
            name: '110kV',
            radius: '35%',
            center:['25%','25%'],
            startAngle: '180',
            endAngle: '-179.99',
            splitNumber: '50',
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter:[0,0],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold',
                    fontSize: 28,
                    color: '#fff',
                }
            },
            detail: {
                show: false
            },
            data: [
                {value: 0, name: '98%'},
                ],

            axisLine: {
                show: false,
                lineStyle: {
                    color: [[0.98,'#1a9ecc'],[1,'rgba(255, 255, 255, 0.05)']],
                    width: 12,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#0a3653',
                    width: 4,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },{
            type: 'gauge',
            name: '35kV',
            radius: '35%',
            center:['75%','25%'],
            startAngle: '180',
            endAngle: '-179.99',
            splitNumber: '50',
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter:[0,0],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold',
                    fontSize: 28,
                    color: '#fff',
                }
            },
            detail: {
                show: false
            },
            data: [
                {value:0, name: '98%',},
            ],

            axisLine: {
                show: false,
                lineStyle: {
                    color: [[0.98,'#1a9ecc'],[1,'rgba(255, 255, 255, 0.05)']],
                    width: 12,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#0a3653',
                    width: 4,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },{
            type: 'gauge',
            name: '10kV',
            radius: '35%',
            center:['25%','75%'],
            startAngle: '180',
            endAngle: '-179.99',
            splitNumber: '50',
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter:[0,0],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold',
                    fontSize: 28,
                    color: '#fff',
                }
            },
            detail: {
                show: false
            },
            data: [
                {value: 0, name: '99%',},
            ],

            axisLine: {
                show: false,
                lineStyle: {
                    color: [[0.99,'#1a9ecc'],[1,'rgba(255, 255, 255, 0.05)']],
                    width: 12,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#0a3653',
                    width: 4,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },{
            type: 'gauge',
            name: '0.4kV',
            radius: '35%',
            center:['75%','75%'],
            startAngle: '180',
            endAngle: '-179.99',
            splitNumber: '50',
            pointer: {
                show: false
            },
            title: {
                show: true,
                offsetCenter:[0,0],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bold',
                    fontSize: 28,
                    color: '#fff',
                }
            },
            detail: {
                show: false
            },
            data: [
                {value: 0, name: '100%',},
            ],

            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1,'#1a9ecc'],[1,'rgba(255, 255, 255, 0.05)']],
                    width: 12,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#0a3653',
                    width: 4,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },]
    };
    faultDetection_left.setOption(option);
    dealGuZhangJianCeData(faultDetection_left, option);
}
function faultDetection_left1() {
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom',
                    fontSize:'30',
                    color: '#FFFFFF'
                }
            },
            labelLine : {
                show : false
            }
        }
    };

    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.1)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var labelFromatter = {
        normal : {
            label : {
//
                show : false  //平常不显示

            },
            labelLine: {            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                show: false
            }
        },
    };
    var radius = [50, 60];
    var faultDetection_left = echarts.init(document.getElementById('faultDetection_left'));
    option = {
//
        color:['#1a9ecc'],
        series: [{
            type : 'pie',
            center : ['25%', '25%'],
            radius : radius,
            clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : labelFromatter,
            label: {
                normal: {
                    show:'true',
                    position: 'center',
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                },
            },
            data : [
                {name:'98%', value:98,itemStyle : labelTop},
                {name:'', value:1, itemStyle : labelBottom}
            ]
        },
            {
                type : 'pie',
                center : ['75%', '25%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                },
                data : [
                    {name:'99%', value:99,itemStyle : labelTop},
                    {name:'', value:1, itemStyle : labelBottom}
                ]
            },
            {
                type : 'pie',
                center : ['25%', '75%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                },
                data : [
                    {name:'100%', value:100,itemStyle : labelTop},
                    {name:'', value:0, itemStyle : labelBottom}
                ]
            },
            {
                type : 'pie',
                center : ['75%', '75%'],
                radius : radius,
                clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
                hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
                x: 'right', // for funnel
                itemStyle : labelFromatter,
                label: {
                    normal: {
                        show:'true',
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                },
                data : [
                    {name:'99%', value:99,itemStyle : labelTop},
                    {name:'', value:1, itemStyle : labelBottom}
                ]
            },

        ],

    };
    faultDetection_left.setOption(option);
    dealGuZhangJianCeData(faultDetection_left, option);
}

