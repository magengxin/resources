//初始化echarts实例
// var chart1 = $("#chart1").get(0);
var chart2 = $("#chart2").get(0);
var chart3 = $("#chart3").get(0);
var chart4 = $("#chart4").get(0);
var chart5 = $("#chart5").get(0);
// var myChart = echarts.init(chart1);
var myChart1 = echarts.init(chart2);
var myChart2 = echarts.init(chart3);
var myChart3 = echarts.init(chart4);
var myChart4 = echarts.init(chart5);
//var weight = [55.4, 55.9, 53];
//对echarts做基础配置
// option = {
//     xAxis: {
//         type: 'category',
//         data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//         axisLabel: {
//             color: '#00ffff',//刻度线标签颜色
//             fontSize: 24
//         },
//         splitLine: {
//             show: true
//         },
//     },
//     yAxis: {
//         type: 'value',
//         min: 0,
//         max: 5000,
//         axisLabel: {
//             color: '#00ffff',//刻度线标签颜色
//             fontSize: 24
//         },
//         boundaryGap: false,
//         splitLine: {
//             show: false
//         },
//     },
//     series: {
//         data: [1000, 1800, 1500, 1300, 1200, 1500, 2000, 1800, 1500, 1300, 1200, 2000, 2200],
//         type: 'line',
//         symbol: 'none',  //这句就是去掉点的 
//         
//         smooth: true,  //这句就是让曲线变平滑的 
//         itemStyle: {
//             normal: {
//                 lineStyle: {
//                     width: 6,//折线宽度
//                     color: '#00f8f9'
//                     // (0,0,0,1,[
//                     //     { offset: 0, color: '#072c43' },
//                     //     { offset: 1, color: '#00f8f9' }
//                     // ])
//                 }
//             }
//         }
//     }
// };
option1 = {
    
    color: ['#1babe8', '#0060e6'],
    tooltip: {
        trigger: 'item',
        show: false,
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 25, name: '12345' },
                { value: 75, name: '95598' }
            ]
        }
    ]
};
option2 = {
    color: ['#1babe8', '#0060e6'],
    tooltip: {//提示框组件
        trigger: 'item',
        show: false,
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 40, name: '12345' },
                { value: 60, name: '95598' }
            ]
        }
    ]
};
option3 = {
    color: ['#1babe8', '#0060e6'],
    tooltip: {
        trigger: 'item',
        show: false,
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 25, name: '12345' },
            ]
        }
    ]
};
option4 = {
    color: ['#1babe8', '#0060e6'],
    tooltip: {
        trigger: 'item',
        show: false,
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 25, name: '12345' }
            ]
        }
    ]
};
// myChart.setOption(option);
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);