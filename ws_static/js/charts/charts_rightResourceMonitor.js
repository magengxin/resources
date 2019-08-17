$(document).ready(function () {
    on_duty_r1("0","0","","0","");//资源监控 下 当班资源 之 特巡 饼图
    on_duty_r2("0","0","","0","");//资源监控 下 当班资源 之 保障 饼图(检修、抢修合并为保障)
//  on_duty_r3();//资源监控 下 当班资源 之 抢修 饼图
    on_duty_r4("0","0","","0","");//资源监控 下 当班资源 之 后勤 饼图
    personnel();//资源监控 下 物资监控 之 人员 车辆 供应商 三个饼图 
});
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 特巡 饼图
 * @param {Object} num1 出动
 * @param {Object} num2 待命
 * @param {Object} num3
 * @param {Object} num4 后备
 * @param {Object} num5
 */
function on_duty_r1(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;

    var on_duty_r1 = echarts.init(document.getElementById('on_duty_r1'));
    option = {
        tooltip : {
            show: true,
            textStyle:{
            	color:'#b7e7f3'
            },
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
//              console.log('aaaaaaaaaaaaaaaaaa啊' + {c});
                if (params.name === "invisible"){
                    return (
                        params.seriesName+ percent.toString()
                    );
                }
                return (
                    params.seriesName + params.name + "  " + percent.toString()
                );
            }
        },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['40%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                 labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num1val,name:'出动数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val,name:'' ,itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['40%','50%'],
                radius : [45, 55],
                   labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                   label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val,  itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
    on_duty_r1.setOption(option);
    return on_duty_r1;
}
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 检修 饼图
 * @param {Object} num1 当班数
 * @param {Object} num2 待命数
 * @param {Object} num3
 * @param {Object} num4 后备数
 * @param {Object} num5
 */
function on_duty_r2(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;

    var on_duty_r2 = echarts.init(document.getElementById('on_duty_r2'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
                if (params.name === "invisible"){
                    return (
                        params.seriesName + percent.toString()
                    );
                }
                return (
                    params.seriesName + params.name + "  " + percent.toString()
                );


            }
        },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['40%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                 labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num1val,name:'出动数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['40%','50%'],
                radius : [45, 55],
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val,itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
    on_duty_r2.setOption(option);
    return on_duty_r2;
}
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 抢修 饼图
 * @param {Object} num1
 * @param {Object} num2
 * @param {Object} num3
 * @param {Object} num4
 * @param {Object} num5
 */
function on_duty_r3(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;
//不调用第三个饼图
//  var on_duty_r3 = echarts.init(document.getElementById('on_duty_r3'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
                if (params.name === "invisible"){
                    return (
                        params.seriesName+ "<br/>" + percent.toString()
                    );
                }
                return (
                    params.seriesName+ "<br/>" + params.name + " : " + percent.toString()
                );


            }
        },
        // legend: {
        //     orient:'vertical',
        //     x : 60,
        //     y : 70,
        //     itemGap:8,
        //     data:['25','15','4'],
        //     textStyle:{//图例文字的样式
        //         color:'#ccc',
        //         fontSize:20
        //     }
        // },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['50%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        textStyle:{
                            fontSize:24,
                            color:'#fff'
                        },
                        formatter : function (params){
                            if (params.name === "invisible"){
                                return "";
                            }
                            return params.value;
                        },
                    },
                },
                data:[
                    {value:num1val,name:'当班数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['50%','50%'],
                radius : [45, 55],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            fontSize:24,
                            color:'#fff'
                        },
                        formatter : function (params){
                            if (params.name === "invisible"){
                                return "";
                            }
                            return params.value;
                        },
                    },
                },
                // labelLine: {
                //     normal: {
                //         show: true,
                //     },
                // },
                itemStyle : dataStyle,
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
//  on_duty_r3.setOption(option);
    return on_duty_r3;
}
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 后勤 饼图
 * @param {Object} num1
 * @param {Object} num2
 * @param {Object} num3
 * @param {Object} num4
 * @param {Object} num5
 */
function on_duty_r4(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;

    var on_duty_r4 = echarts.init(document.getElementById('on_duty_r4'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
                if (params.name === "invisible"){
                    return (
                        params.seriesName + percent.toString()
                    );
                }
                return (
                    params.seriesName + params.name + "  " + percent.toString()
                );


            }
        },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['40%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                 labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num1val,name:'出动数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['40%','50%'],
                radius : [45, 55],
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                   labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                itemStyle : dataStyle,
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val,  itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
    on_duty_r4.setOption(option);
    return on_duty_r4;
}
/**
 * 资源监控 
 * 下 
 * 物资监控 
 * 之 
 * 人员 车辆 供应商 三个饼图
 * @param {Object} personnel_nums
 */
function personnel(personnel_nums) {
    var personnel_nums_val = personnel_nums || {};
    var color=['#0f89f7'];
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
                show : true  //平常不显示
            },
            labelLine: {  // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                show: true
            }
        },
    };
    var radius = [60, 70];
    var personnel = echarts.init(document.getElementById('personnel'));
    option = {
        color:['#62e0ff'],
        series: [{
            type : 'pie',
            center : ['20%', '50%'],
            radius : radius,
            startAngle:180,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
//          itemStyle : labelFromatter,
            label: {
                normal: {
                    show:false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                    formatter : function (params){
                        if (params.name === ""){
                            return "";
                        }
                        return params.name +" " +params.value;
                    },
                },
            },
            labelLine:{
            	normal:{
            		show:false
            	}
            },
            data : [
                {name:'', value:0, itemStyle : labelBottom},
                {name:'应到岗',value:personnel_nums_val.cannum||0,},
                {name:'实到岗', value:personnel_nums_val.realnum||0,itemStyle : {
                    normal : {
                        color:color[0],
                    }
                }},
            ]
        },{
            type : 'pie',
            center : ['65%', '50%'],
            radius : radius,
            startAngle:180,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : labelFromatter,
            label: {
                normal: {
                    show:false,
                    // position: 'center',
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                    formatter : function (params){
                        if (params.name === ""){
                            return "";
                        }
                        return params.name +" " +params.value;
                    },
                },
            },
            labelLine:{
            	normal:{
            		show:false
            	}
            },
            data : [
                {name:'', value:0, itemStyle : labelBottom},
                {name:'忙碌',value:personnel_nums_val.busynum||0,},
                {name:'空闲', value:personnel_nums_val.idlenum||0,itemStyle : {
                    normal : {
                        color:color[0],
                    }
                }},
            ]
        }
//      ,{
//          type : 'pie',
//          center : ['80%', '50%'],
//          radius : radius,
//          startAngle:0,
//          clockWise: true,           // 饼图的扇区是否是顺时针排布。[ default: true ]
//          hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
//          x: 'right', // for funnel
//          itemStyle : labelFromatter,
//          label: {
//              normal: {
//                  show:'true',
//                  // position: 'center',
//                  textStyle: {
//                      fontSize: '30',
//                      fontWeight: 'bold'
//                  },
//                  formatter : function (params){
//                      if (params.name === ""){
//                          return "";
//                      }
//                      return params.name +" " +params.value;
//                  },
//              },
//          },
//          data : [
//              {name:'外省', value:personnel_nums_val.othernum||0,},
//              {name:'本市',value:personnel_nums_val.thisnum||0,itemStyle:{
//                  normal:{
//                      color:'#0f89f7'
//                  }
//              }},
//          ]
//      },

        ],
    };
    personnel.setOption(option);
}