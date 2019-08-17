//$(document).ready(function(){
	//初始化图表
	setTimeout(function(){
    	por_equipment();//智慧监控 下 保障重点 之 柱状图
	},1000)

//});

function por_equipment() {//保障重点柱状图

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
    doBaoZhangSheBeiCount(por_equipment,option,"8a812897493378a00149567740676661");//保电设备统计数据
}
//保电设备统计
function doBaoZhangSheBeiCount(por_equipment,option,ssgs) {

//  doBianDian(por_equipment,option,ssgs);
//  doShuDianXL(por_equipment,option,ssgs);
//  doShuDianDL(por_equipment,option,ssgs);
//  doPeiDian(por_equipment,option,ssgs);
    getSheBeiTotalAndAbnorCount(por_equipment,option,ssgs);//四个专业的设备数与异常次数统计(ajax调后台接口返回后台接口数据)
    getSheBeiFaultCount(por_equipment,option,ssgs);//四个专业的故障次数统计(ajax调后台接口返回后台接口数据)
    por_equipment.on("click",clickEchart_por_equipment);//保电设备点击弹出明细
}
/**
 * 保障重点:四个专业的设备数与异常次数统计
 */
function getSheBeiTotalAndAbnorCount(por_equipment,option,ssgs){
	//保障重点:四个专业的设备数与异常次数统计(ajax)
	getTotalAndAbnorCount(dealdata,ssgs);
	
	function dealdata(data){
		//专业为变电的各电压等级的设备总数与异常数
		var bd500=0;var bd220=0;var bd110=0;var bd35=0; var bdYc=0;
		//专业为线路的各电压等级的设备总数与异常数
		var xl500=0;var xl220=0;var xl110=0;var xl35=0; var xlYc=0;
		//专业为电缆的各电压等级的设备总数与异常数
		var dl500=0;var dl220=0;var dl110=0;var dl35=0; var dlYc=0;
		//专业为配电的各设备子类型(开关站、配电站、箱变)的设备数与异常数
		var pdKg=0;var pdPd=0;var pdXb=0;  var pdYc=0;
		if(data.data){
			var rows = data.data;
			for(i = 0;i < rows.length;i++){
				//电压类型: 默认-1全部 10kV : 22 35kV : 25 110kV : 32 220kV : 33 500kV : 35
				//设备子类型: 默认-1全部  变电站 : zf01  开关站 : zf04 配电室 : zf06 电缆 : xndl 线路 : xl
				//专业类型:默认-1全部  1线路  2电缆  3变电  4配电
				switch(rows[i].ZYLX){
							case '3'://变电
								     switch(rows[i].DYDJ){
												case '35'://500kV
													bd500 += parseInt(rows[i].SBZS);
												    break;
												case '33'://220kV
													bd220 += parseInt(rows[i].SBZS);
												    break;
												case '32'://110kV
												    bd110 += parseInt(rows[i].SBZS);
												    break;
												case '25'://35kV
													bd35 += parseInt(rows[i].SBZS);
												    break;
											}
								     bdYc += parseInt(rows[i].YCS);
							    break;
							case '1'://线路
								     switch(rows[i].DYDJ){
												case '35'://500kV
													xl500 += parseInt(rows[i].SBZS);
												    break;
												case '33'://220kV
													xl220 += parseInt(rows[i].SBZS);
												    break;
												case '32'://110kV
												    xl110 += parseInt(rows[i].SBZS);
												    break;
												case '25'://35kV
													xl35 += parseInt(rows[i].SBZS);
												    break;
											}
								    xlYc += parseInt(rows[i].YCS);
							    break;
							case '2'://电缆
							         switch(rows[i].DYDJ){
												case '35'://500kV
													dl500 += parseInt(rows[i].SBZS);
												    break;
												case '33'://220kV
													dl220 += parseInt(rows[i].SBZS);
												    break;
												case '32'://110kV
												    dl110 += parseInt(rows[i].SBZS);
												    break;
												case '25'://35kV
													dl35 += parseInt(rows[i].SBZS);
												    break;
											}
							        dlYc += parseInt(rows[i].YCS);
							    break;
							case '4'://配电
								     switch(rows[i].SBZLX){
												case 'zf04'://开关站
													pdKg += parseInt(rows[i].SBZS);
												    break;
												case 'zf06'://配电站(即配电室)
													pdPd += parseInt(rows[i].SBZS);
												    break;
												    //箱变暂时没有,均为0
											}
								    pdYc += parseInt(rows[i].YCS);
							    break;
						}
			}
			option.series[0].data[0] = bd500;option.series[0].data[1] = xl500;option.series[0].data[2] = dl500;
			option.series[1].data[0] = bd220;option.series[1].data[1] = xl220;option.series[1].data[2] = dl220;
			option.series[2].data[0] = bd110;option.series[2].data[1] = xl110;option.series[2].data[2] = dl110;
			option.series[3].data[0] = bd35;option.series[3].data[1] = xl35;option.series[3].data[2] = dl35;//柱状图顶部数字塞数据
			
//			option.series[6].data[0] = bdYc;option.series[6].data[1] = xlYc;option.series[6].data[2] = dlYc;option.series[6].data[3] = pdYc;
            option.series[6].data[0] = 0;option.series[6].data[1] = 0;option.series[6].data[2] = 0;option.series[6].data[3] = 0;
			
			option.series[7].data[3] = pdKg;option.series[8].data[3] = pdPd;option.series[9].data[3] = pdXb;
			por_equipment.setOption(option);
		}
	}
}