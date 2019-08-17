
$(document).ready(function(){
	//初始化图表
	
    por_equipment();//智慧监控 下 保障重点 之 保电设备下 若干个饼图
});

function por_equipment() {
	debugger
	var dlZhanWeiFu = 0;
    var por_equipment = echarts.init(document.getElementById('por_equipment'));
    var option={
//			color:['#0069c7','#13a7e4','#15e9d8','#6ae0f3','#099724','#9bc92e','#43bb75'],
			animation: false,
			grid:{
				top:120
			},
			tooltip:{
				show:true
			},
			yAxis: {
                type: 'value',
                max:function(value){
                	var num = value.max*2
                	if(num%30!=0){
                		num = (30-num%30)+num
                	}
                	return num
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 18,
                    color: "#fff"
                },
                splitLine: {
                    lineStyle: {
                        color: "#2076ae"
                    }
                }
           },
			 xAxis: {
                type: 'category',
                data: ['变电','线路','电缆','配电'],
                axisLabel: {
                    fontSize: 18,
                    color: "#fff"
                },
                axisLine: {
                    lineStyle: {
                        color: "#2076ae"
                    }
                },
            },
	        series : [ //系列列表
            {//500kv : 0
                name:'500kv',  
                type:'bar',   //类型 
                stack:'500kv',
                color:'#0069c7',
                barWidth:20,
                data:[0,0,0,0]
            },
            

            {//220kv : 1
                name:'220kv', 	
                type:'bar',   //类型
                stack:'220kv',
                barWidth:20,
                color:'#13a7e4',
                data:[0,0,0,0]
            },
          
           {//110kv : 2
                name:'110kv',  
                type:'bar',   //类型 
                stack:'110kv',
                barWidth:20,
                color:'#15e9d8',
                data:[0,0,0,0]
            },
            
			{//35kv : 3
                name:'35kv',  
                type:'bar',   //类型 
                stack:'35kv',
                barWidth:20,
                color:'#6ae0f3',
                data:[0,0,0,0]
            },
            
           {// : 4
                name:'占位符',  
                type:'bar',   //类型 
                color:'#f53f4e',
                barWidth:5,
                data:[]
           },
           { // : 5
                name:'故障',  
                type:'bar',   //类型 
                color:'#f53f4e',
                barWidth:10,
                data:[0,0,0,0]
           },
           {// : 6
                name:'异常',  
                type:'bar',   //类型 
                color:'#f9bc51',
                barWidth:10,
                data:[0,0,0,0]
           },

           
           {//配电站 : 7
                name:'开关站',  
                type:'bar',   //类型 
                stack:'220kv',
                barWidth:20,
                data:[0,0,0,0],
                color:'#099724'
           },
           { // : 8
                name:'配电站',  
                type:'bar',   //类型 
                stack:'110kv',
                barWidth:20,
                data:[0,0,0,0],
                color:'#9bc92e'
           },
           {// : 9
                name:'箱变',  
                type:'bar',   //类型 
                stack:'35kv',
                barWidth:20,
                data:[0,0,0,0],
                color:'#43bb75',
                barGap:'40%',
           },
        ]
    };
    por_equipment.setOption(option);
    doBaoZhangSheBeiCount(por_equipment,option,"8a812897493378a00149567740676661");
}