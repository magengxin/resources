// 一级曲线图
var myChart = echarts.init(document.getElementById('content-left-one'));
var option = {
    grid: {
        x: '900'
    },
    tooltip: { //聚焦触发的效果，详情可参见。全局设置
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: { //图表图例注释
        align: 'left',
        data: ['数量', '容量(MVA)'],
        textStyle: {
            color: "#b3c4d1",
            fontSize: 20
        },
    },
    xAxis: [ //x轴属性设置，需要详细了解该模块属性配置，可参见http://echarts.baidu.com/option.html#xAxis
        {
            type: 'category', //表示类型为科目类
            data: ["35KV", "110KV", "220KV", "550KV", "1000KV"], //坐标轴的值
            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }


        }
    ],
    yAxis: [ //（可以有多个坐标轴），数组中的对象位置决定了yAxisIndex的值（yAxisIndex会在series中用到）
        {
            type: 'value', //表示属性为value类
            // data: ["0", "20", "40", "60", "80", "100"], //坐标轴的值
            min:0,
            max:100,
            name: '', //坐标轴名称
            minInterval: 1, //坐标最小划分单位，设置为1表示坐标轴节点保留整数
            splitNumber: 5, //指定坐标轴节点分割数（非强制），会按照预算自行调整最合适的分割数

            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: '#fff',
                }

            },
            axisTick: {
                show: false,
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }, {
            axisTick: {
                show: false
            },
            type: 'value', //表示属性为category类
            // data: ["0", "1", "2", "3", "4", "5"], //坐标轴的值
            min:0,
            max:5,
            name: '', //坐标轴名称
            minInterval: 1, //坐标最小划分单位，设置为1表示坐标轴节点保留整数
            splitNumber: 5, //指定坐标轴节点分割数（非强制），会按照预算自行调整最合适的分割数
            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: 'rgb(191, 207, 219)',
                }

            },
            splitLine: { //表示分割线属性设置
                show: true,
                lineStyle: { //表示分割线的样式
                    type: 'solid', //实线
                    color: "#24779d",
                }
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }
    ],
    series: [ //坐标轴实际数据内容
        {
            name: '数量', //数据名称
            type: 'bar', //数据表现形式（bar为柱形图，line为折线图）
            yAxisIndex: 1,
            symbolSize: 5,
            barWidth: '25%', //柱形图宽度
            itemStyle: { //柱子的属性设置
                normal: {
                    color: '#179aff', //柱子的颜色设置
                }
            },
            data: [1.0, 1.2, 2.3, 2.5, 3.3] //该条数据对应一条记录
        },
        {
            name: '容量(MVA)',
            type: 'line', //折线图
            yAxisIndex: 1,
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        colorStops: [{ //渐变模式
                            offset: 0,
                            color: 'rgb(215, 221, 0)' // 0% 处的颜色      //折线开始的颜色
                        }, {
                            offset: 1,
                            color: 'rgb(215, 221, 0)' // 100% 处的颜色    //折线结束的颜色，
                        }],
                        globalCoord: true // 缺省为 false
                    },
                }
            },
            data: [1.0, 1.2, 2.3, 2.5, 3.3]
        }
    ],
    grid: {
        x: 70,
        y: 35,
        x2: 70,
        y2: 30,
        borderWidth: 1,
        top:"15%"//图例注释与图标的距离
    },
};
myChart.setOption(option);

// 一级圆饼图

var myChart = echarts.init(document.getElementById('content-right-one'));
option = {
     graphic:{       //图形中间文字
            type:"text",
            left:"center",
            top:"center",
            style:{
                text:"数量(站)",
                textAlign:"center",
                fill:"#fff",
                fontSize:22
            }
        },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['55%', '65%'],
            data:[
                {value:14, name:'20年以上'},
                {value:14, name:'15-20年'},
                {value:18, name:'10-15年'},
                {value:20, name:'5-10年'},
                {value:20, name:'0-5年'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
             labelLine: {    //图形外文字线
                    normal: {
                        length: 30,
                        length2:100
                    }

                },
            label: {
                    normal: {
                        formatter: ' {c|{c}%}  \n\n\n  {b|{b}}',       //图形外文字上下显示
                        // borderWidth: 20,
                        // borderRadius: 4,
                        padding: [0, -80],          //文字和图的边距
                        rich: {
                             a: {
                                color: '#333',
                                fontSize: 33,
                                lineHeight: 20
                            },
                            b: {                        //name 文字样式
                                fontSize: 22,
                                lineHeight: 20,
                                color: '#fff'
                            },
                            c: {                   //value 文字样式
                                fontSize: 22,
                                lineHeight: 20,
                                color: '#fff',
                                align:"center"
                            }
                        }
                    }
                },
        }
    ],
    color:[ //自定义的颜色
            '#54c9fa',
            '#80ffc8',
            '#f5f771',
            '#ffbc5c',
            '#fa6a9d',
    ],
};

myChart.setOption(option);


/*************第二部分****************/


// 二级曲线图
var myChart = echarts.init(document.getElementById('content-left-two'));
var option = {
    // grid: {
    //     x: '900'
    // },
    tooltip: { //聚焦触发的效果，详情可参见。全局设置
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: { //图表图例注释
        align: 'left',
        data: ['数量', '容量(MVA)'],
        textStyle: {
            color: "#b3c4d1",
            fontSize: 20
        }
    },
    xAxis:  //x轴属性设置，需要详细了解该模块属性配置，可参见http://echarts.baidu.com/option.html#xAxis

    {
        type: 'category', //表示类型为科目类
        data: ["K型站", "配电室", "环网柜", "箱式变电站"], //坐标轴的值
        axisLine: {
            show: false, //表示坐标轴是否显示
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            show:true,
            textStyle:{
                color:"#edf8ff",
                fontSize:20
            }
        }
    }
    ,
    yAxis: [ //（可以有多个坐标轴），数组中的对象位置决定了yAxisIndex的值（yAxisIndex会在series中用到）
        {
            type: 'value', //表示属性为category类
            // data: ["0", "20", "40", "60", "80", "100"], //坐标轴的值
            min:0,
            max:100,
            minInterval: 1, //坐标最小划分单位，设置为1表示坐标轴节点保留整数
            splitNumber: 5, //指定坐标轴节点分割数（非强制），会按照预算自行调整最合适的分割数

            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: 'rgb(191, 207, 219)',
                }

            },
            splitLine: { //表示分割线属性设置
                show: true,
                lineStyle: { //表示分割线的样式
                    type: 'solid', //实线
                    color: "#2b7da2"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }, {
            axisTick: {
                show: false
            },
            type: 'value', //表示属性为category类
            // data: ["0", "1", "2", "3", "4", "5"], //坐标轴的值
            min:0,
            max:5,
            minInterval: 1, //坐标最小划分单位，设置为1表示坐标轴节点保留整数
            splitNumber: 5, //指定坐标轴节点分割数（非强制），会按照预算自行调整最合适的分割数
            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: 'rgb(191, 207, 219)',
                }

            },
            splitLine: { //表示分割线属性设置
                lineStyle: { //表示分割线的样式
                    type: 'solid', //实线
                    color: "#2b7da2"
                }
            },
            axisLabel: {
                formatter: '{value}' //表示所有值得单位
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }
    ],
    series: [ //坐标轴实际数据内容
        {
            name: '数量', //数据名称
            type: 'bar', //数据表现形式（bar为柱形图，line为折线图）
            barWidth: '20%', //柱形图宽度
            itemStyle: { //柱子的属性设置
                normal: {
                    color: '#179aff', //柱子的颜色设置
                }
            },
            data: [21.0, 29.2, 43.3, 74.5] //该条数据对应一条记录
        },
        {
            name: '容量(MVA)',
            type: 'line', //折线图
            yAxisIndex: 1,
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        colorStops: [{ //渐变模式
                            offset: 0,
                            color: 'rgb(215, 221, 0)' // 0% 处的颜色      //折线开始的颜色
                        }, {
                            offset: 1,
                            color: 'rgb(215, 221, 0)' // 100% 处的颜色    //折线结束的颜色，
                        }],
                        globalCoord: true // 缺省为 false
                    },
                }
            },
            data: [2.0, 2.2, 3.3, 4.5]
        }
    ],
    grid: { //设置网格属性
        left: '10%', //网格距离容器左侧的距离
        right: '10%', //网格距离容器右侧的距离
        borderWidth: 1
    },
    grid: {
        top:"15%"//图例注释与图标的距离
    },
};
myChart.setOption(option);

// 二级圆饼图

var myChart = echarts.init(document.getElementById('content-right-two'));
option = {
    title: {
        text: '投运年限',
        x: '22%',
        // top: '5%',
        textStyle: {
            fontSize: '28',
            color: '#edf8ff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        align: 'left',
        itemGap: 35,//更改间隔
        itemWidth: 20,//图标宽度
        itemHeigth: 10,//图标高度
        orient: 'vertical',
        left: '73%',
        top: '15%',
        // bottom: '15%',
        data: ['0~5年', '5~10年', '10~15年', '15~20年', '20年以上'],
        textStyle: {
            fontSize: '24',
            color: '#fff',
        }
    },
    series: [{
        name: '',
        type: 'pie',
        radius: '65%',
        center: ['43%', '50%'],
        data: [{
            value: 335,
            name: '0~5年',
            itemStyle: {
                color: 'rgb(146, 213, 255)'
            }
        },
        {
            value: 310,
            name: '5~10年',
            itemStyle: {
                color: 'rgb(105, 191, 255)'
            }
        },
        {
            value: 234,
            name: '10~15年',
            itemStyle: {
                color: 'rgb(23, 144, 255)'
            }
        },
        {
            value: 135,
            name: '15~20年',
            itemStyle: {
                color: 'rgb(0, 80, 179)'
            }
        },
        {
            value: 1548,
            name: '20年以上',
            itemStyle: {
                color: 'rgb(0, 39, 102)'
            }
        }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            normal: {
                position: 'inner',
                show: false
            }
        }
    },

    ]
};
myChart.setOption(option);

/*****************第三部分*****************/

// 三级曲线图
var myChart = echarts.init(document.getElementById('content-left-three'));
var option = {
    grid: {
        x: '900'
    },
    tooltip: { //聚焦触发的效果，详情可参见。全局设置
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: { //图表图例注释
        align: 'left',
        data: ['架空线条数', '电缆条数', '架空线长度(公里)', '电缆长度(公里)'],
        textStyle: {
            color: "#b3c4d1",
            fontSize: 20
        }
    },
    xAxis: [ //x轴属性设置，需要详细了解该模块属性配置，可参见http://echarts.baidu.com/option.html#xAxis
        {
            type: 'category', //表示类型为科目类
            data: ["35KV", "110KV", "220KV", "550KV", "1000KV"], //坐标轴的值
            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: '#fff',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }
    ],
    yAxis: [ //（可以有多个坐标轴），数组中的对象位置决定了yAxisIndex的值（yAxisIndex会在series中用到）
        {
            type: 'value', //表示属性为category类
            // data: ["0", "20", "40", "60", "80", "100"], //坐标轴的值
            min:0,
            max:100,
            minInterval: 1, //坐标最小划分单位，设置为1表示坐标轴节点保留整数
            splitNumber: 5, //指定坐标轴节点分割数（非强制），会按照预算自行调整最合适的分割数
            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: 'rgb(191, 207, 219)',
                }

            },
            splitLine: { //表示分割线属性设置
                show: true,
                lineStyle: { //表示分割线的样式
                    type: 'solid', //实线
                    color: "#2b7da2"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }, {
            axisTick: {
                show: false
            },
            type: 'value', //表示属性为category类
            // data: ["0", "1", "2", "3", "4", "5"], //坐标轴的值
            min:0,
            max:5,
            minInterval: 1, //坐标最小划分单位，设置为1表示坐标轴节点保留整数
            splitNumber: 5, //指定坐标轴节点分割数（非强制），会按照预算自行调整最合适的分割数
            axisLine: {
                show: false, //表示坐标轴是否显示
                lineStyle: {
                    color: 'rgb(191, 207, 219)',
                }

            },
            splitLine: { //表示分割线属性设置
                show: true,
                lineStyle: { //表示分割线的样式
                    type: 'solid', //实线
                    color: "#2b7da2"
                }
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#edf8ff",
                    fontSize:20
                }
            }
        }
    ],
    series: [ //坐标轴实际数据内容
        {
            name: '架空线条数', //数据名称
            stack: 'two',
            type: 'bar', //数据表现形式（bar为柱形图，line为折线图）
            barWidth: '20%', //柱形图宽度
            itemStyle: { //柱子的属性设置
                normal: {
                    color: 'rgb(23, 154, 255)', //柱子的颜色设置
                }
            },
            data: [12.0, 22.2, 33.3, 64.5,77] //该条数据对应一条记录
        },
        {
            name: '电缆条数', //数据名称
            stack: 'two',
            type: 'bar', //数据表现形式（bar为柱形图，line为折线图）
            barWidth: '20%', //柱形图宽度
            itemStyle: { //柱子的属性设置
                normal: {
                    color: 'rgb(105, 191, 255)', //柱子的颜色设置
                }
            },
            data: [12.0, 22.2, 33.3, 15.5,23] //该条数据对应一条记录
        },
        {
            name: '电缆长度(公里)',
            type: 'line', //折线图
            yAxisIndex: 1,
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        colorStops: [{ //渐变模式
                            offset: 0,
                            color: 'rgb(85, 200, 157)' // 0% 处的颜色      //折线开始的颜色
                        }, {
                            offset: 1,
                            color: 'rgb(85, 200, 157)' // 100% 处的颜色    //折线结束的颜色，
                        }],
                        globalCoord: true // 缺省为 false
                    },
                }
            },
            data: [2.0, 2.2, 3.3, 4.5,2.1]
        },
        {
            name: '架空线长度(公里)',
            type: 'line', //折线图
            yAxisIndex: 1,
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        colorStops: [{ //渐变模式
                            offset: 0,
                            color: 'rgb(255, 128, 171)' // 0% 处的颜色      //折线开始的颜色
                        }, {
                            offset: 1,
                            color: 'rgb(255, 128, 171)' // 100% 处的颜色    //折线结束的颜色，
                        }],
                        globalCoord: true // 缺省为 false
                    },
                }
            },
            data: [1.0, 1.2, 2.3, 2.5,1]
        }
    ],
    grid: { //设置网格属性
        left: '10%', //网格距离容器左侧的距离
        right: '10%', //网格距离容器右侧的距离
        borderWidth: 1
    },
    grid: {
        top:"15%"//图例注释与图标的距离
    },
};
myChart.setOption(option);

// 三级圆饼图

var myChart = echarts.init(document.getElementById('content-right-three'));
option = {
    title: {
        text: '投运年限',
        x: '22%',
        // top: '5%',
        textStyle: {
            fontSize: '28',
            color: '#edf8ff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        align: 'left',
        itemGap: 35,//更改间隔
        itemWidth: 20,//图标宽度
        itemHeigth: 10,//图标高度
        orient: 'vertical',
        left: '73%',
        top: '15%',
        // bottom: '15%',
        data: ['0~5年', '5~10年', '10~15年', '15~20年', '20年以上'],
        textStyle: {
            fontSize: '24',
            color: '#fff',
        }
    },
    series: [{
        name: '',
        type: 'pie',
        radius: '65%',
        center: ['43%', '50%'],
        data: [{
            value: 335,
            name: '0~5年',
            itemStyle: {
                color: 'rgb(146, 213, 255)'
            }
        },
        {
            value: 310,
            name: '5~10年',
            itemStyle: {
                color: 'rgb(105, 191, 255)'
            }
        },
        {
            value: 234,
            name: '10~15年',
            itemStyle: {
                color: 'rgb(23, 144, 255)'
            }
        },
        {
            value: 135,
            name: '15~20年',
            itemStyle: {
                color: 'rgb(0, 80, 179)'
            }
        },
        {
            value: 1548,
            name: '20年以上',
            itemStyle: {
                color: 'rgb(0, 39, 102)'
            }
        }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            normal: {
                position: 'inner',
                show: false
            }
        }
    },

    ]
};
myChart.setOption(option);


$(function () {
    renderLayer()
})

function renderLayer() {
    drawLayer($("#content-chart01 canvas").get(0), "rgb(70, 234, 233)", 0.66);
    drawLayer($("#content-chart02 canvas").get(0), "rgb(70, 24, 233)", 0.00);
    drawLayer($("#content-chart03 canvas").get(0), "rgb(37, 134, 230)", 0.66);
    drawLayer($("#content-chart04 canvas").get(0), "rgb(39, 84, 230)", 0.66);
}

function drawLayer(canvasObj, colorValue, rate) {
    var ctx = canvasObj.getContext("2d");

    var circle = {
        x: 65, //圆心的x轴坐标值
        y: 80, //圆心的y轴坐标值
        r: 60 //圆的半径
    };

    //画扇形
    //ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
    //ctx.fillStyle = colorValue;
    //ctx.fill();

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgb(33, 79, 110)';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorValue;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'white';
    ctx.font = '20px Calibri';
    ctx.fillText(rate * 100 + '%', circle.x - 15, circle.y + 10);

}