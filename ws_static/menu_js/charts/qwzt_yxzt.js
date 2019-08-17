
    setTimeout(function(){
    	liquidFill();//电网可靠性
    	qualified1("1","");//A类电压合格率
	    qualified2("2","");//B类电压合格率
	    qualified3("3","");//C类电压合格率
	    qualified4("4","");//D类电压合格率
	    quality("");//电能质量
	    device_status("");//设备状态
    },2000)

/**
 * 电网可靠性
 */
function liquidFill() {
    var liquidFill = echarts.init(document.getElementById('liquidFill'));
    option = {
        series: [{
            type: 'liquidFill',
            data: [0.99983],
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
    //弹出明细
    containers.on('click', function (parans) {
    	if (parans.seriesIndex == 0) {
			ChooseShow("KHFW");
			$('#qiangdan_title',parent.document).text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 1) {
			ChooseShow("KHFW");
			$('#qiangdan_title',parent.document).text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 2) {
			ChooseShow("KHFW");
			$('#qiangdan_title',parent.document).text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 3) {
			ChooseShow("KHFW");
			$('#qiangdan_title',parent.document).text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}else if (parans.seriesIndex == 4) {
			ChooseShow("KHFW");
			$('#qiangdan_title',parent.document).text("电能质量");
			showSuQiuList(null,null,g_deptchange);
    	}
    })
    
}

//全网状态--故障监测--实时监测明细(报修单详情)
function showSuQiuList(DYDJ,QXDZT ,ssgs) {

    //公司、设备名称、设备类型、所属站线、电压等级、停电时间、送电时间、修复时间、维护班组、联系电话
    var parentComId = "FourUl";
//  var titleList = [
//      ["GZSBBH",""],
//      ["SSGDDW","公司"],
//      ["GZSBMC","设备名称"],
//      ["GZSBLX_BM","设备类型"],
//      ["SYZXMC","所属站线"],
//      ["DYDJ","电压等级"],
//      ["gegs","停电时间"],
//      ["eggg","送电时间"],
//      ["JLXFSJ","修复时间"],
//      ["iiiii","维护班组"],
//      //["YHSJ","联系电话"],
//  ];
var titleList = [
        ["GZSBBH",""],
        ["SSGDDW","公司"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
//      ["GZSBLX_BM","设备类型"],
        ["JDDJSJ","停电时间"],
        ["JLXFSJ","修复时间"],
        ["HFSDSJ","送电时间"],
        ["TZQKMC","跳闸情况"],
        ["TZSBMC","跳闸设备"],
        ["SFQR","是否确认"],
        ["QXZDMC","抢修班组"],
        //["YHSJ","联系电话"],
    ];
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {//点击定位按钮调用的方法
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZJC);//获取定位的val值与图层名称layer调用定位地图方法JumpMap
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }

	//回调往弹框塞数据
    function dealdata(data) {
//  	window.parent.document.getElementById('pageBlock').contentWindow.hide();
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }


    getGZJCDetailData(dealdata, DYDJ,QXDZT,ssgs);//故障监测3明细详情
}
function getGZJCDetailData(callback, DYDJ,QXDZT ,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCMX/0?SSGS=-1&KSSJ=2018-09-05%2000:00:00&JSSJ=2018-09-05%2023:59:59
    var sfhxq = "-1";
    if(ssgs == "JBH-HXQ"){
    	sfhxq = "1";
    }
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "SFBDHXQ" : sfhxq };
    DYDJ ? param.DYDJ=DYDJ : null;
    QXDZT ? param.QXDZT=QXDZT: null;
    var url = basepath + "interface/XN_GDFW_BDZT_GZJCMX/0";
	// var url = "json/guzhangjiancemingxi.json";
    callgetajax(callback,url,param);
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


