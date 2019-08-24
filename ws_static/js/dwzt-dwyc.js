window.onload = function () {
  // 一级曲线图
  var myChart1 = echarts.init(document.getElementById('monitoring_circular_box_item1')),
      myChart2 = echarts.init(document.getElementById('monitoring_circular_box_item2')),
      myChart3 = echarts.init(document.getElementById('monitoring_circular_box_item3')),
      myChart4 = echarts.init(document.getElementById('monitoring_circular_box_item4')),
      myChart5 = echarts.init(document.getElementById('monitoring_circular_box_item5')),
      myChart22 = echarts.init(document.getElementById('monitoring_circular_box_item22')),
      myChart33 = echarts.init(document.getElementById('monitoring_circular_box_item33')),
      option1 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          x: 'left',
          data: ['联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 234, name: '234'},
              {value: 135, name: '135'},
              {value: 1548, name: '1548'}
            ]
          }
        ]
      };
  var option3 = {
    // backgroundColor: '#f7f7f7',//背景颜色
    tooltip : {
      show: true,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      x : 'center',
      data:['班车','包车'],
      // itemWidth:10,  //图例标记的图形宽度
      // itemHeight:10, //图例标记的图形高度
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    calculable:false,
    series : [
      {
        name:'3',
        type:'pie',
        center: ['20%', '50%'],
        radius : [40,50],
        data:[
          {value:214, name:'班车'},
          {value:300, name:'包车'},
        ],
        itemStyle: {//系列级个性化
          normal: {
            color: function(params) {
              var colorList = [
                '#339CD1','#FE8463','#9BCA63','#FAD860'
              ];
              return colorList[params.dataIndex]
            },
            labelLine:{//饼图不显示线条
              length:2,
              show:false
            },
            label:{//饼图不显示文字
              show:true,
              position : 'inner',//饼图图上显示百分比
              formatter : function (params) {
                return (params.percent - 0).toFixed(0) + '%'
              },
              textStyle:{
                fontSize:14
              }
            },
          }
        }
      },
      {
        name:'1',
        type:'pie',
        center: ['45%', '50%'],
        radius : [40,50],
        data:[
          {value:314, name:'班车'},
          {value:200, name:'包车'},
        ],
        itemStyle: {//系列级个性化
          normal: {
            color: function(params) {
              var colorList = [
                '#339CD1','#FE8463','#9BCA63','#FAD860'
              ];
              return colorList[params.dataIndex]
            },
            labelLine:{//饼图不显示线条
              length:2,
              show:false
            },
            label:{//饼图不显示文字
              show:true,
              position : 'inner',//饼图图上显示百分比
              formatter : function (params) {
                return (params.percent - 0).toFixed(0) + '%'
              },
              textStyle:{
                fontSize:14
              }
            }
          }
        }
      }, {
        name:'2',
        type:'pie',
        center: ['70%', '50%'],
        radius : [40,50],
        data:[
          {value:314, name:'班车'},
          {value:200, name:'包车'},
        ],
        itemStyle: {//系列级个性化
          normal: {
            color: function(params) {
              var colorList = [
                '#339CD1','#FE8463','#9BCA63','#FAD860'
              ];
              return colorList[params.dataIndex]
            },
            labelLine:{//饼图不显示线条
              length:2,
              show:false
            },
            label:{//饼图不显示文字
              show:true,
              position : 'inner',//饼图图上显示百分比
              formatter : function (params) {
                return (params.percent - 0).toFixed(0) + '%'
              },
              textStyle:{
                fontSize:14
              }
            }
          }
        }
      }
    ]
  }
  var option2 = {
    legend: {
      // orient : 'vertical',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
      // width:40,      //图行例组件的宽度,默认自适应
      // x : 'right',   //图例显示在右边
      // y: 'center',   //图例在垂直方向上面显示居中
      // itemWidth:10,  //图例标记的图形宽度
      // itemHeight:10, //图例标记的图形高度
      textStyle:{    //图例文字的样式
        color:'#ccd3d9',  //文字颜色
        fontSize:12    //文字大小
      },
    },
    tooltip: {},
    color:['#066dd9','#1790ff','#3faafe','#00bcd4','#b9e6ff'],  //手动设置每个图例的颜色
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['过载', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        ['重载', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        ['低电压', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
        ['三相不平衡', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        ['光伏消纳', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
      ]
    },
    series: [{
      type: 'pie',
      radius: 60,
      center: ['25%', '30%'],
      itemStyle : {
        normal : {
          label : {
            show : false   //隐藏标示文字
          },
          labelLine : {
            show : false   //隐藏标示线
          }
        }
      }
      // No encode specified, by default, it is '2012'.
    }, {
      type: 'pie',
      radius: 60,
      center: ['75%', '30%'],
      encode: {
        itemName: 'product',
        value: '2013'
      },
      itemStyle : {
        normal : {
          label : {
            show : false   //隐藏标示文字
          },
          labelLine : {
            show : false   //隐藏标示线
          }
        }
      }
    }, {
      type: 'pie',
      radius: 60,
      center: ['25%', '75%'],
      encode: {
        itemName: 'product',
        value: '2014'
      },
      itemStyle : {
        normal : {
          label : {
            show : false   //隐藏标示文字
          },
          labelLine : {
            show : false   //隐藏标示线
          }
        }
      }
    }, {
      type: 'pie',
      radius: 60,
      center: ['75%', '75%'],
      encode: {
        itemName: 'product',
        value: '2015'
      },
      itemStyle : {
        normal : {
          label : {
            show : false   //隐藏标示文字
          },
          labelLine : {
            show : false   //隐藏标示线
          }
        }
      }
    }]
  };

  var option33 ={
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'直接访问',
        type:'bar',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };


  myChart1.setOption(option1);
  myChart2.setOption(option1);
  myChart3.setOption(option1);
  myChart4.setOption(option1);
  myChart5.setOption(option1);

  myChart22.setOption(option2);

  myChart33.setOption(option33);

}