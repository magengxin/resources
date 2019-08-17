
$(document).ready(function(){
	Popup_yxztfx.setData({
    	chart_gdkkl: {thismonth:[], lastmonth:[]},// 供电可靠率
    	chart_zytdshs: {thismonth:[], lastmonth:[]},//中压停电时户数
    	chart_qnshedhy: {Qnmonth:[], Yapmonth:[], Hymonth:[], Gzmonth:[]},//全年时户额度耗用
    	chart_gdkkl2: {curyear:[], Jsyear: []},// 趋势分析图--供电可靠率
    	chart_tdhs2: {dntdsh2:[], sntdsh2:[]},// 趋势分析图--中压停电时户数
    	chart_edhy2: {ljedhy2:[], yapedhy2:[],gzedhy2:[]},//趋势分析图--全年时户额度耗用
    	chart_tdsjfx:{},//时户停电事件分析散点图
    	chart_pjtdsc: {},//停电时长分析散点图
    	
    	chart_tdyy1:{yapTdyy:[]},//停电原因预安排
    	chart_tdyy2:{gzTdyy:[]},//停电原因故障
    	chart_tdyy3:{yapTdyy:[]},//趋势分析图-停电原因预安排
    	chart_tdyy4:{gzTdyy:[]}//趋势分析图-停电原因故障
   }) 
})

/**
 * 点击弹出中间弹框的按钮
 */

function yxztfx_dwkkx_init() {
	setTimeout(function(){
	    $('.popup-normal__areaSelect').find('input')[0].click();
	},1000);
	$('#l_pop_dwkkx_y').text(moment().format("YYYY")+'年');
	$("#l_pop_dwkkx_m").attr("data-month",new Date().getMonth());
	yxztfx_dwkkx_popup("上海",(moment().add(-1 , "year").format("YYYYMM")-1).toString(),moment().add(-1 , "month").format("YYYYMM"));//初始化分布统计
	dw_qsfx_popup("上海",moment().add(-1 , "year").format("YYYY"),moment().format("YYYY")); //初始化趋势分析
	zhuanti_fx("上海",moment().add(-6 , "month").format("YYYY-MM-01 00:00:00"),moment().format("YYYY-MM-01 23:59:59"));//专题分析散点图
}

//专题分析
function zhuanti_fx(dateKs,dateJs){
	var ssgs=$("input[name = 'radio_gzjcfx_area']:checked").val();
	if(dateKs==undefined){
		dateKs = moment().add(-6 , "month").format("YYYY-MM-01 00:00:00");
	}
	if(dateJs == undefined){
		dateJs = moment().format("YYYY-MM-01 23:59:59");
	}
	var url_shs = basepath + "interface/BDZT_YB_GETTDSHSMX/0";//时户停电
	var url_tdsc = basepath + "interface/BDZT_YB_GETPJTDSCMX/0";//停电时长
//	var param = {"SSGS": SSGSMAP_NAME[ssgs], "SFHXQ": SSGS_VIP_MAP[SSGS], "KSSJ": dateKs, "JSSJ": dateJs};
	var param = {"SSGS": SSGSMAP_NAME[ssgs],"SFHXQ": SSGS_VIP_MAP[SSGS], "KSSJ": dateKs, "JSSJ": dateJs};
	$.ajax({
        url: url_shs,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	if(data.result_code==0 && data.data!=null){
        		var res = data.data;
        		var arrShs = [];
        		var shs = [];
        		var arrShs1 = [];//故障
        		var shs1 = [];
        		for(var i=0;i<res.length;i++){
        			shs=[];
        			shs1=[];
        			if(res[i].SFYAPTD=='1'){//预安排停电
        				shs.push(res[i].TDKSSJ);
	        			shs.push(res[i].SHS);
	        			arrShs[i]=shs;
        			}else{//故障
        				shs1.push(res[i].TDKSSJ);
	        			shs1.push(res[i].SHS);
	        			arrShs1[i]=shs1;
        			}
        		}
        		
        	}
            Popup_yxztfx.setData({
		    	chart_tdsjfx: {arrShs:arrShs,arrShs1:arrShs1},// 时户停电
		    })
        },
        error: function (data) {
            console.log(data);
        }
    });
    $.ajax({
        url: url_tdsc,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	if(data.result_code==0 && data.data!=null){
        		var res = data.data;
        		var arrShs = [];
        		var shs = [];
        		for(var i=0;i<res.length;i++){
        			shs=[];
        			shs.push(res[i].TDKSSJ);
        			shs.push(res[i].PJTDSC);
        			arrShs[i]=shs;
        		}
        	}
            Popup_yxztfx.setData({
		    	chart_pjtdsc: {arrShs:arrShs},// 停电时长
		    })
        },
        error: function (data) {
            console.log(data);
        }
    });
}


//趋势分析
function dw_qsfx_popup(ssgs, dateKs,dateJs) {
	var url = basepath + "interface/BDZT_YB_GETGDKKXZB/0"; //供电可靠性
	var url1 = basepath + "interface/BDZT_YB_GETZYYHTDHS/0";//中压停电时户数
	var url2 = basepath + "interface/BDZT_YB_GETSHEDHY/0";//全年时户额度耗用
	var url3 = basepath + "interface/BDZT_YB_GETSHEDHYTJ/0";//停电原因
	var year = dateJs;
	if(dateJs=='2019'){
		dateJs = moment().add(-1 , "month").format("YYYYMM");
	}else{
		dateJs = moment(dateJs).format("YYYY")+'12';
	}
	dateKs = dateKs + '01';
	var param = {"SSGS": SSGSMAP_NAME[ssgs], "SFHXQ": SSGS_VIP_MAP[SSGS], "KSSJ": dateKs, "JSSJ": dateJs};
	$.ajax({
        url: url,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	var curYear = [];
            	var JsYear = [];
            	for(var i=0;i<res.length;i++){
            		if(res[i].NF==year){
            			curYear.push(res[i].VALUE);
            		} else if(res[i].NF==year-1) {
            			JsYear[i] = res[i].VALUE;
            		}
            	}
            	Popup_yxztfx.setData({
			    	chart_gdkkl2: {curyear:curYear, Jsyear: JsYear},// 供电可靠率
			    })
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
    $.ajax({
        url: url1,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	var dnTdsh2 = [];
            	var snTdsh2 = [];
            	for(var i=0;i<res.length;i++){
            		if(res[i].NF== year){
            			dnTdsh2.push(res[i].VALUE);
            		} else if(res[i].NF== year-1) {
            			snTdsh2[i] = res[i].VALUE;
            		}
            	}
            	Popup_yxztfx.setData({
			    	chart_tdhs2: {dntdsh2:dnTdsh2, sntdsh2: snTdsh2},
			    })
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
	$.ajax({
        url: url2,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	var ljEdhy2 = [];
            	var yapEdhy2 = [];
            	var gzEdhy2 = [];
            	for(var i=0;i<res.length;i++){
            		if(res[i].NF==year ) {
            			ljEdhy2.push(res[i].LJHYL);
            			yapEdhy2.push(res[i].YAP);
            			gzEdhy2.push(res[i].GZ);
            		}
            	}
            	Popup_yxztfx.setData({
			    	chart_edhy2: {ljedhy2:ljEdhy2, yapedhy2:yapEdhy2,gzedhy2:gzEdhy2},
			    })
            }else{
            	Popup_yxztfx.setData({
			    	chart_edhy2: {ljedhy2:[], yapedhy2:[],gzedhy2:[]}
			    })
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
    $.ajax({
        url: url3,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	var YapTdyy = [0,0,0,0,0,0,0,0];//预安排类型数据
        	var GzTdyy = [0,0,0,0,0,0,0];//故障类型数据
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	for(var i=0;i<res.length;i++){
        			if(res[i].TJLX == "1") {//预安排
						switch(res[i].LX) {	
							case '1': //
								YapTdyy[0] = Number(res[i].VALUE);
								break;
							case '2': //
								YapTdyy[1] = Number(res[i].VALUE);
								break;
							case '3': //
								YapTdyy[2] = Number(res[i].VALUE);
								break;
							case '4': //
								YapTdyy[3] = Number(res[i].VALUE);
								break;
							case '5': //
								YapTdyy[4] = Number(res[i].VALUE);
								break;
							case '6': //
								YapTdyy[5] = Number(res[i].VALUE);
								break;
							case '7': //
								YapTdyy[6] = Number(res[i].VALUE);
								break;
							case '8': //
								YapTdyy[7] = Number(res[i].VALUE);
								break;
							default:
								break;
						}
					} else if(res[i].TJLX == "2"){ //故障
						switch(res[i].LX) {	
							case '1': //
								GzTdyy[0] = Number(res[i].VALUE);
								break;
							case '2': //
								GzTdyy[1] = Number(res[i].VALUE);
								break;
							case '3': //
								GzTdyy[2] = Number(res[i].VALUE);
								break;
							case '4': //
								GzTdyy[3] = Number(res[i].VALUE);
								break;
							case '5': //
								GzTdyy[4] = Number(res[i].VALUE);
								break;
							case '6': //
								GzTdyy[5] = Number(res[i].VALUE);
								break;
							case '7': //
								GzTdyy[6] = Number(res[i].VALUE);
								break;
							default:
								break;
						}
					}   
		        }
            	var YapAdd1 = (YapTdyy[0] + YapTdyy[1] + YapTdyy[2] + YapTdyy[3] + YapTdyy[4] + YapTdyy[5] + YapTdyy[6] + YapTdyy[7]).toFixed(3);
            	var GzAdd1 = (GzTdyy[0]+GzTdyy[1]+GzTdyy[2]+GzTdyy[3]+GzTdyy[4]+GzTdyy[5]+GzTdyy[6]).toFixed(3);
            	var jxtd1 = (YapTdyy[0] + YapTdyy[1]).toFixed(3);
            	var gctd1 = (YapTdyy[2] + YapTdyy[3] +YapTdyy[4] + YapTdyy[5]).toFixed(3);
            	var ssgz1 = (GzTdyy[0]+GzTdyy[1]+GzTdyy[2]+GzTdyy[3]+GzTdyy[4]+GzTdyy[5]).toFixed(3);
            	$("#jxtd1").text(jxtd1);
            	$("#gctd1").text(gctd1);
            	$("#ssgz1").text(ssgz1);
            	$("#jxtdzb1").text((jxtd1/YapAdd1*100).toFixed(2)+'%');
            	$("#gctdzb1").text((gctd1/YapAdd1*100).toFixed(2)+'%');
            	$("#ssgzzb1").text((ssgz1/GzAdd1*100).toFixed(2)+'%');
            	if (jxtd1==0||YapAdd1==0) {
            		$("#jxtdzb1").text("0");
            	}
            	if(gctd1==0||YapAdd1==0){
            		$("#gctdzb1").text("0");
            	}
				Popup_yxztfx.setData({
					chart_tdyy3: { //趋势-停电原因-预安排
						yapTdyy:YapTdyy
					},
					chart_tdyy4:{ //趋势-停电原因-故障
						gzTdyy:GzTdyy
					}
				});
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function yxztfx_dwkkx_popup(ssgs,dateKs,dateJs) {//分布统计
	var shiQu = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = chongMing = changXing = heXinQu = 0;//当月
	var shiQu1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = chongMing1 = changXing1 = heXinQu1 = 0;//上月
	var QnheXinQu=QnpuDong=QnshiQu=QnjiaDing=QnsongJiang=QnqingPu=QnfengXian=QnjinShan=QnchongMing=QnchangXing=0;//"全年"
	var HyheXinQu=HypuDong=HyshiQu=HyjiaDing=HysongJiang=HyqingPu=HyfengXian=HyjinShan=HychongMing=HychangXing=0;//"已耗用量"
	var YapheXinQu=YappuDong=YapshiQu=YapjiaDing=YapsongJiang=YapqingPu=YapfengXian=YapchongMing=YapjinShan=YapchangXing=0; //"预安排"
	var GzheXinQu=GzpuDong=GzshiQu=GzjiaDing=GzsongJiang=GzqingPu=GzfengXian=GzchongMing=GzjinShan=GzchangXing=0;//"故障"	
	var url = basepath + "interface/BDZT_YB_GETGDKKXZB/0"; //供电可靠性
	var url1 = basepath + "interface/BDZT_YB_GETZYYHTDHS/0";//中压停电时户数
	var url2 = basepath + "interface/BDZT_YB_GETSHEDHY/0";//全年时户额度耗用
	var url3 = basepath + "interface/BDZT_YB_GETSHEDHYTJMX/0";//停电原因
	var param = {"SFHXQ": SSGS_VIP_MAP[ssgs], "KSSJ": dateKs, "JSSJ": dateJs};
	$.ajax({
        url: url,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	shiQu = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = chongMing = changXing = heXinQu = 99.9199;//当月
			shiQu1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = chongMing1 = changXing1 = heXinQu1 = 99.9199;//上月
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	for(var i=0;i<res.length;i++){
            		if(res[i].SFHXQ === '1') {
						if(res[i].NY == dateJs) {
							heXinQu = Number(res[i].VALUE);
							continue;
						}
						if(res[i].NY == dateKs) {
							heXinQu1 = Number(res[i].VALUE);
							continue;
						}
					}
            		if(res[i].NY == dateJs) {
						switch(res[i].SSGS) {	
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
								shiQu = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
								puDong = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
								fengXian = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
								jiaDing = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
								qingPu = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
								songJiang = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
								jinShan = Number(res[i].VALUE);
								break;res
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
								chongMing = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
								changXing = Number(res[i].VALUE);
								break;
							default:
								break;
						}
					}
		            if(res[i].NY == dateKs) {
						switch(res[i].SSGS) {
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
								shiQu1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
								puDong1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
								fengXian1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
								jiaDing1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
								qingPu1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
								songJiang1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
								jinShan1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
								chongMing1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
								changXing1 = Number(res[i].VALUE);
								break;
							default:
								break;
						}
					}
            	}
            	var thisMonthArr = [], //"当月"
					lastMontArr = []; ////"上月"
				thisMonthArr[0] = heXinQu;
				thisMonthArr[1] = puDong;
				thisMonthArr[2] = shiQu;
				thisMonthArr[3] = jiaDing;
				thisMonthArr[4] = songJiang;
				thisMonthArr[5] = qingPu;
				thisMonthArr[6] = fengXian;
				thisMonthArr[7] = jinShan;
				thisMonthArr[8] = chongMing;
				thisMonthArr[9] = changXing;
		
				lastMontArr[0] = heXinQu1;
				//		lastMontArr[0]=200;
				lastMontArr[1] = puDong1;
				lastMontArr[2] = shiQu1;
				lastMontArr[3] = jiaDing1;
				lastMontArr[4] = songJiang1;
				lastMontArr[5] = qingPu1;
				lastMontArr[6] = fengXian1;
				lastMontArr[7] = jinShan1;
				lastMontArr[8] = chongMing1;
				lastMontArr[9] = changXing1;
		
				Popup_yxztfx.setData({
					chart_gdkkl: { //分布统计-
						thismonth: thisMonthArr,
						lastmonth: lastMontArr
					}
				});
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
	
	$.ajax({
        url: url1,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	shiQu = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = chongMing = changXing = heXinQu = 0;//当月
			shiQu1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = chongMing1 = changXing1 = heXinQu1 = 0;//上月
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	for(var i=0;i<res.length;i++){
            		if(res[i].SFHXQ === '1') {
						if(res[i].NY == dateJs) {
							heXinQu = Number(res[i].VALUE);
							continue;
						}
						if(res[i].NY == dateKs) {
							heXinQu1 = Number(res[i].VALUE);
							continue;
						}
					}
            		if(res[i].NY == dateJs) {
						switch(res[i].SSGS) {	
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
								shiQu = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
								puDong = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
								fengXian = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
								jiaDing = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
								qingPu = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
								songJiang = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
								jinShan = Number(res[i].VALUE);
								break;res
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
								chongMing = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
								changXing = Number(res[i].VALUE);
								break;
							default:
								break;
						}
					}
		            if(res[i].NY == dateKs) {
						switch(res[i].SSGS) {
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
								shiQu1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
								puDong1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
								fengXian1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
								jiaDing1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
								qingPu1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
								songJiang1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
								jinShan1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
								chongMing1 = Number(res[i].VALUE);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
								changXing1 = Number(res[i].VALUE);
								break;
							default:
								break;
						}
					}
            	}
            	var thisMonthArr = [], //"当月"
					lastMontArr = []; //"上月"
				thisMonthArr[0] = heXinQu;
				thisMonthArr[1] = puDong;
				thisMonthArr[2] = shiQu;
				thisMonthArr[3] = jiaDing;
				thisMonthArr[4] = songJiang;
				thisMonthArr[5] = qingPu;
				thisMonthArr[6] = fengXian;
				thisMonthArr[7] = jinShan;
				thisMonthArr[8] = chongMing;
				thisMonthArr[9] = changXing;
		
				lastMontArr[0] = heXinQu1;
				lastMontArr[1] = puDong1;
				lastMontArr[2] = shiQu1;
				lastMontArr[3] = jiaDing1;
				lastMontArr[4] = songJiang1;
				lastMontArr[5] = qingPu1;
				lastMontArr[6] = fengXian1;
				lastMontArr[7] = jinShan1;
				lastMontArr[8] = chongMing1;
				lastMontArr[9] = changXing1;
		
				Popup_yxztfx.setData({
					chart_zytdshs: { //分布统计-
						thismonth: thisMonthArr,
						lastmonth: lastMontArr
					}
				});
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
	
	$.ajax({
        url: url2,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	for(var i=0;i<res.length;i++){
            		if(res[i].SFHXQ === '1') {
						if(res[i].NF == moment().format("YYYY").toString()) {
							QnheXinQu = Number(res[i].VALUE);
							HyheXinQu = Number(res[i].YHYL);
							YapheXinQu = Number(res[i].LJYAP);
							GzheXinQu = Number(res[i].LJGZ);
							continue;
						}
					}
            		if(res[i].NF == moment().format("YYYY").toString()) {
						switch(res[i].SSGS) {	
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
								QnshiQu = Number(res[i].VALUE);
								HyshiQu = Number(res[i].YHYL);
								YapshiQu = Number(res[i].LJYAP);
								GzshiQu = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
								QnpuDong = Number(res[i].VALUE);
								HypuDong = Number(res[i].YHYL);
								YappuDong = Number(res[i].LJYAP);
								GzpuDong = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
								QnfengXian = Number(res[i].VALUE);
								HyfengXian = Number(res[i].YHYL);
								YapfengXian = Number(res[i].LJYAP);
								GzfengXian = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
								QnjiaDing = Number(res[i].VALUE);
								HyjiaDing = Number(res[i].YHYL);
								YapjiaDing = Number(res[i].LJYAP);
								GzjiaDing = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
								QnqingPu = Number(res[i].VALUE);
								HyqingPu = Number(res[i].YHYL);
								YapqingPu = Number(res[i].LJYAP);
								GzqingPu = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
								QnsongJiang = Number(res[i].VALUE);
								HysongJiang = Number(res[i].YHYL);
								YapsongJiang = Number(res[i].LJYAP);
								GzsongJiang = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
								QnjinShan = Number(res[i].VALUE);
								HyjinShan = Number(res[i].YHYL);
								YapjinShan = Number(res[i].LJYAP);
								GzjinShan = Number(res[i].LJGZ);
								break;res
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
								QnchongMing = Number(res[i].VALUE);
								HychongMing = Number(res[i].YHYL);
								YapchongMing = Number(res[i].LJYAP);
								GzchongMing = Number(res[i].LJGZ);
								break;
							case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
								QnchangXing = Number(res[i].VALUE);
								HychangXing = Number(res[i].YHYL);
								YapchangXing = Number(res[i].LJYAP);
								GzchangXing = Number(res[i].LJGZ);
								break;
							default:
								break;
						}
					}
		        }    
            	var QnMontArr = [], //"全年"
					HyMontArr = [], //"已耗用量"
					YapMontArr = [], //"预安排"
					GzMontArr = [] //"故障"				
				QnMontArr[0] = QnheXinQu;
				QnMontArr[1] = QnpuDong;
				QnMontArr[2] = QnshiQu;
				QnMontArr[3] = QnjiaDing;
				QnMontArr[4] = QnsongJiang;
				QnMontArr[5] = QnqingPu;
				QnMontArr[6] = QnfengXian;
				QnMontArr[7] = QnjinShan;
				QnMontArr[8] = QnchongMing;
				QnMontArr[9] = QnchangXing;
		
				HyMontArr[0] = HyheXinQu;
				HyMontArr[1] = HypuDong;
				HyMontArr[2] = HyshiQu;
				HyMontArr[3] = HyjiaDing;
				HyMontArr[4] = HysongJiang;
				HyMontArr[5] = HyqingPu;
				HyMontArr[6] = HyfengXian;
				HyMontArr[7] = HyjinShan;
				HyMontArr[8] = HychongMing;
				HyMontArr[9] = HychangXing;
				
				YapMontArr[0] = YapheXinQu;
				YapMontArr[1] = YappuDong;
				YapMontArr[2] = YapshiQu;
				YapMontArr[3] = YapjiaDing;
				YapMontArr[4] = YapsongJiang;
				YapMontArr[5] = YapqingPu;
				YapMontArr[6] = YapfengXian;
				YapMontArr[7] = YapjinShan;
				YapMontArr[8] = YapchongMing;
				YapMontArr[9] = YapchangXing;
				
				GzMontArr[0] = GzheXinQu;
				GzMontArr[1] = GzpuDong;
				GzMontArr[2] = GzshiQu;
				GzMontArr[3] = GzjiaDing;
				GzMontArr[4] = GzsongJiang;
				GzMontArr[5] = GzqingPu;
				GzMontArr[6] = GzfengXian;
				GzMontArr[7] = GzjinShan;
				GzMontArr[8] = GzchongMing;
				GzMontArr[9] = GzchangXing;
		
				Popup_yxztfx.setData({
					chart_qnshedhy: { //分布统计-
						Qnmonth: QnMontArr,
						Hymonth: HyMontArr,
						Yapmonth:YapMontArr,
						Gzmonth:GzMontArr
					}
				});
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
	
	//停电原因
	$.ajax({
        url: url3,
        data: param,
        type:'get',
        dataType: 'json',
        success: function (data) {
        	var YapTdyy = [0,0,0,0,0,0,0,0];//预安排类型数据
        	var GzTdyy = [0,0,0,0,0,0,0];//故障类型数据
            if(data.result_code==0 && data.data!=null){
            	var res = data.data;
            	console.log(res);
            	for(var i=0;i<res.length;i++){
            		if(res[i].NY == dateJs){
            			if(res[i].TJLX == "1") {//预安排
							switch(res[i].LX) {	
								case '1': //
									YapTdyy[0] = Number(res[i].VALUE);
									break;
								case '2': //
									YapTdyy[1] = Number(res[i].VALUE);
									break;
								case '3': //
									YapTdyy[2] = Number(res[i].VALUE);
									break;
								case '4': //
									YapTdyy[3] = Number(res[i].VALUE);
									break;
								case '5': //
									YapTdyy[4] = Number(res[i].VALUE);
									break;
								case '6': //
									YapTdyy[5] = Number(res[i].VALUE);
									break;
								case '7': //
									YapTdyy[6] = Number(res[i].VALUE);
									break;
								case '8': //
									YapTdyy[7] = Number(res[i].VALUE);
									break;
								default:
									break;
							}
						} else if(res[i].TJLX == "2"){ //故障
							switch(res[i].LX) {	
								case '1': //
									GzTdyy[0] = Number(res[i].VALUE);
									break;
								case '2': //
									GzTdyy[1] = Number(res[i].VALUE);
									break;
								case '3': //
									GzTdyy[2] = Number(res[i].VALUE);
									break;
								case '4': //
									GzTdyy[3] = Number(res[i].VALUE);
									break;
								case '5': //
									GzTdyy[4] = Number(res[i].VALUE);
									break;
								case '6': //
									GzTdyy[5] = Number(res[i].VALUE);
									break;
								case '7': //
									GzTdyy[6] = Number(res[i].VALUE);
									break;
								default:
									break;
							}
						}
            		}
		        }
            	var YapAdd = (YapTdyy[0] + YapTdyy[1] + YapTdyy[2] + YapTdyy[3] + YapTdyy[4] + YapTdyy[5] + YapTdyy[6] + YapTdyy[7]).toFixed(3);
            	var GzAdd = (GzTdyy[0]+GzTdyy[1]+GzTdyy[2]+GzTdyy[3]+GzTdyy[4]+GzTdyy[5]+GzTdyy[6]).toFixed(3);
            	var jxtd = (YapTdyy[0] + YapTdyy[1]).toFixed(3);
            	var gctd = (YapTdyy[2] + YapTdyy[3] +YapTdyy[4] + YapTdyy[5]).toFixed(3);
            	var ssgz = (GzTdyy[0]+GzTdyy[1]+GzTdyy[2]+GzTdyy[3]+GzTdyy[4]+GzTdyy[5]).toFixed(3);
            	$("#jxtd").text(jxtd);
            	$("#gctd").text(gctd);
            	$("#ssgz").text(ssgz);
            	$("#jxtdzb").text((jxtd/YapAdd*100).toFixed(2)+'%');
            	$("#gctdzb").text((gctd/YapAdd*100).toFixed(2)+'%');
            	$("#ssgzzb").text((ssgz/GzAdd*100).toFixed(2)+'%');
            	if (jxtd==0||YapAdd==0) {
            		$("#jxtdzb").text("0");
            	}
            	if(gctd==0||YapAdd==0){
            		$("#gctdzb").text("0");
            	}
            	if(GzAdd==0||ssgz==0){
            		$("#ssgzzb").text("0");
            	}
				Popup_yxztfx.setData({
					chart_tdyy1: { //分布统计-停电原因-预安排
						yapTdyy:YapTdyy
					},
					chart_tdyy2:{ //分布统计-停电原因-故障
						gzTdyy:GzTdyy
					}
				});
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
	
//  Popup_yxztfx.setData({
//      chart_gdkkl:{ "截至当月":[],"上年同期":[]},
//      chart_zytdshs:{"截至当月":[],"上年同期":[]}
//	});
	   
}


//点击切换月份
function dw_fbtj(){
	var m = $("#l_pop_dwkkx_m").attr("data-month");
	var month = new Date().getMonth();
	var year = moment().format("YYYY");
	if(m>month){
		$("#l_pop_dwkkx_m").attr("data-month",month);
		return;
	}
    if(Number(m)>9){
    	var thisMon=year+m;
    }else{
    	var thisMon=year+'0'+m;
    }
    tm=Number(m);
    if(tm-6<0){
		var ksy = tm+6;//如果月份减去6小于0，代表往前推一年---9
		if(ksy>9){
	    	ksy = ksy;
	    }else{
	    	ksy = '0'+ksy;
	    }
		var ksdata = '2018-'+ksy
		zhuanti_fx(moment(ksdata).format("YYYY-MM-01 00:00:00"),moment('2019-'+tm).format("YYYY-MM-01 23:59:59"));//专题分析散点图
	}else{
		var ksy = tm-6;//如果月份减去6大于0，代表当年---1
		if(ksy>9){
	    	ksy = ksy;
	    }else{
	    	ksy = '0'+ksy;
	    }
	    var ksdata = '2019-'+ksy
		zhuanti_fx(moment(ksdata).format("YYYY-MM-01 00:00:00"),moment('2019-'+tm).format("YYYY-MM-01 23:59:59"));//专题分析散点图
	}
    if(tm>9){
    	var lastMon=year-1+tm;
    }else{
    	var lastMon=year-1+'0'+tm;
    }
    
    yxztfx_dwkkx_popup('上海',lastMon, thisMon); 
    
    tdyy_title(lastMon,thisMon);
}


/**
   * 点击地址切换
   * @param {Object} area
   */
function yxzt_kkxfx(area) {
    if(area != '上海'){
        $("#fenbutongji2").hide();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi2").show();
         $("#zhuantifx").hide();
        $(".m_gzjzfx").hide();
        $(".y_gzjzfx").show();
        popup_tab_toggle($("#fenbutongji2"),1);
        $("#zhuantifx").show();
        $("input[name = 'radio_gzjcfx_type']").get(1).checked = true;
//      dw_qsfx_popup(area,moment().add(-1 , "year").format("YYYY"+'01'),moment().add(-1 , "month").format("YYYYMM"));
		
    }
    if(area == '上海'){
        $("#fenbutongji2").show();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi2").show();
        $("#zhuantifx").show();
        $("input[name = 'radio_gzjcfx_type']").get(0).checked = true;
        $(".m_gzjzfx").show();
        $(".y_gzjzfx").hide();
        popup_tab_toggle($("#fenbutongji2"),0);
//      dw_qsfx_popup(area,moment().add(-1 , "year").format("YYYY"+'01'),moment().add(-1 , "month").format("YYYYMM"));
    }

	changeYear()//地区切换完成后调一下年份切换函数来重新初始化趋势分析
}

$('#zhuantifx').click(function(){//点击专题分析，月份切换显示
	$(".m_gzjzfx").show();
    $(".y_gzjzfx").hide();
})

/**
   * 点击切换年份
   */
function changeYear(){
	var year=$("input[name = 'radio_gzjcfx_year']:checked").val();
	var eara=$("input[name = 'radio_gzjcfx_area']:checked").val();
//	if( new Date().getFullYear() == year){
		dw_qsfx_popup(eara, year-1,year);
//	}else{
//		var date1 = new Date(year,11,31)
//		dw_qsfx_popup(eara, moment(year).add(-1 , "year").format("YYYY")+'01',moment(year).format("YYYY")+'12');
//	}	
}

	
	

// 弹框内的图表初始化
// 弹框：电网可靠性分析
var Popup_yxztfx = (function () {
	var nowmonth = new Date().getMonth();
    $("#l_pop_gzjc_m").attr("data-month", nowmonth);
    var el = document.querySelector("#popup-dwkkxfx");
	var	chart_gdkkl = echarts.init(el.querySelector("#popup-dwkkxfx_gdkkl"), {width: 1320, height: 690});//全口径供电可靠率
	var chart_zytdshs = echarts.init(el.querySelector("#popup-dwkkxfx_zytdshs"), {width: 1320, height: 690});//中压停电时户数
	var chart_qnshedhy = echarts.init(el.querySelector("#popup-dwkkxfx_qnshedhy"), {width: 1320, height: 690});//全年时户额度耗用
    var chart_tdyy1 = echarts.init(el.querySelector("#popup-dwkkxfx_tdyy1"), {width: 660, height: 690});//停电原因左侧
    var chart_tdyy2 = echarts.init(el.querySelector("#popup-dwkkxfx_tdyy2"), {width: 660, height: 690});//停电原因右侧
    var chart_tdsjfx = echarts.init(el.querySelector("#popup-dwkkxfx_tdsjfx"), {width: 2700, height: 690});//超100时户停电事件分析
    var chart_pjtdsc = echarts.init(el.querySelector("#popup-dwkkxfx_pjtdsc"), {width: 2700, height: 690});//预安排项目平均停电时长分析
    var chart_gdkkl2 = echarts.init(el.querySelector("#popup-dwkkxfx-gdkkl2"), {width: 1320,height: 690});//趋势分析图--全口径供电可靠率
    var	chart_tdhs2 = echarts.init(el.querySelector("#popup-dwkkxfx-tdhs2"), {width: 1320,height: 690});//趋势分析图--中压停电时户数
    var	chart_edhy2 = echarts.init(el.querySelector("#popup-dwkkxfx-edhy2"), {width: 1320,height: 690});//趋势分析图--全年时户额度耗用
    var	chart_tdyyl2 = echarts.init(el.querySelector("#popup-dwkkxfx-tdyyl2"), {width: 660,height: 690});//趋势分析图--停电原因左侧
    var	chart_tdyyr2 = echarts.init(el.querySelector("#popup-dwkkxfx-tdyyr2"), {width: 660,height: 690});//趋势分析图--停电原因右侧
    var data = {};
    function update() {
    	//超100时户停电事件分析
    	console.log(data);
    	var option_tdsjfx = {
    		legend: {
    			right: 60,
                top: 30,
                icon:'rect',
    			data: [{
                    name: "预安排停电"
                }, {
                    name: "故障停电"
                }],
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
    		},
    		grid: {
                left: 120,
                top: 100,
                width: 2400,
                height: 540,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    lineStyle: {
                        color: "#08405d"
                    }
                }
            },
            xAxis: {
                type: 'time',
                interval:3600*24*1000*30,
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20,
                    formatter:function(params){
                    	return echarts.format.formatTime('yyyy/MM/dd',params);
                    }
                },
                splitLine: {
                    show:false
                },
                axisLine: {
                	show: false
                },
            },
            series: [
                {
                    type: 'scatter',
                    name: "预安排停电",
                    itemStyle: {
                        color: "#5fd9fb"
                    },
                    markLine:{
                    	data:[
                    		{
                    			name:'y轴为100的水平线',
                    			yAxis:100
                    		}
                    	],
                    	lineStyle:{
                    		color:'#fff'
                    	},
                    	label:{
                    		fontSize:20
                    	}
                    },
                    data:data.chart_tdsjfx.arrShs
                },
                {
                    type: 'scatter',
                    name: "故障停电",
                    itemStyle: {
                        color: "#f81d3c"
                    },
                    data:data.chart_tdsjfx.arrShs1
                }
            ]
        };
        chart_tdsjfx.setOption(option_tdsjfx);
    	//预安排项目平均停电时长分析
    	var option_pjtdsc = {
    		grid: {
                left: 100,
                top: 100,
                width: 2400,
                height: 550,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    lineStyle: {
                        color: "#08405d"
                    }
                }
            },
            xAxis: {
                type: 'time',
                axisTick:{
                	show:false
                },
                interval:3600*24*1000*30,
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20,
                    formatter:function(params){
                    	return echarts.format.formatTime('yyyy/MM/dd',params);
                    }
                },
                axisLine: {
                	show: false       
                },
                splitLine: {
                    show:false
                },
            },
            series: [
                {
                    type: 'scatter',
                    name: "",
                    itemStyle: {
                        color: "#5fd9fb"
                    },
                    data:data.chart_pjtdsc.arrShs
                }
            ]
        };
        chart_pjtdsc.setOption(option_pjtdsc);
    	
    	//全口径供电可靠率
    	var option_gdkkl = {
    		tooltip:{},
    		legend: {
    			right: 60,
                top: 30,
    			data: [{
                    name: "截止当月"
                }, {
                    name: "上年同期"
                }],
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
    		},
    		grid: {
                left: 50,
                top: 170,
                width: 1200,
                height: 460,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                min:99.9199,
                interval:0.01,
                max:100.0099,
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    lineStyle: {
                        color: "#08405d"
                    }
                }
            },
            xAxis: {
                type: 'category',
                data: ["核心区","浦东","市区","嘉定","松江","青浦","奉贤","金山","崇明","长兴"],
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
            },
            series: [
                {
                    type: 'bar',
                    name: "截止当月",
                    itemStyle: {
                        color: "#0060e5"
                    },
                    data:data.chart_gdkkl.thismonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'bar',
                    name: "上年同期",
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    data: data.chart_gdkkl.lastmonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'line',
//                  name: '公司停运率',
                    name: '公司:',
                    symbolSize: 1,
                    itemStyle: {
                        color: "#00ff00"
                    },
                    lineStyle: {
                        color: "#00ff00"
                    },
                    label: {
                        show: true,
//                      formatter: "{a}({c}%)",
                        formatter: "{a}{c}%",
                        fontSize: 18,
                        color: "#00ff00",
                        position: [-1085,-18]
                    },
                    data: (function () {
                        var tmp = data.chart_gdkkl.thismonth.concat(data.chart_gdkkl.lastmonth);
                        var average = sumArr(tmp) / tmp.length;
                        return tmp.map(function (num, index) {
                            return {
                                value: average.toFixed(2),
                                label: {
                                    show: index == tmp.length / 2 - 1,
                                }
                            }
                        });
                    })()
                }
            ]
        };
        chart_gdkkl.setOption(option_gdkkl);
    	
    	
   		//中压停电时户数
   		var option_zytdshs = {
    		tooltip:{},
    		legend: {
    			right: 60,
                top: 30,
    			data: [{
                    name: "当月"
                }, {
                    name: "上年同期"
                }],
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
    		},
    		grid: {
                left: 50,
                top: 170,
                width: 1200,
                height: 460,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    show:false
                },
                
            },
            xAxis: {
                type: 'category',
                data: ["核心区","浦东","市区","嘉定","松江","青浦","奉贤","金山","崇明","长兴"],
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                axisTick:{
                	show:false
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
            },
            series: [
                {
                    type: 'bar',
                    color:'#f9bc51',
                    name: "当月",
                    data:data.chart_zytdshs.thismonth,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'bar',
                    name: "上年同期",               
                    color: "rgba(255,255,255,0.3)",
                    data: data.chart_zytdshs.lastmonth,
                    barGap: "1%",
                    barWidth: 20
                },
            ]
        };
        chart_zytdshs.setOption(option_zytdshs);
   		
   		//全年时户额度耗用
   		var option_qnshedhy = {
    		tooltip: {},
    		legend: {
    			right: 60,
                top: 30,
                itemGap:60,
    			data: [ {
                    name: "全年额度"
                }, 
                {
                    name: "已耗用量",
                    icon:'roundRect'
                },
                {
                    name: "预安排"
                }, {
                    name: "故障"
                }],
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
    		},
    		grid: {
                left: 50,
                top: 150,
                width: 1200,
                height: 480,
                containLabel: true
            },
    		yAxis: [
    		{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    show:false
                },
                
           },
           	{
                type: 'value',
                axisLabel: {
                    fontSize: 24,
                    color: "rgba(0,0,0,0)",
                    margin:20
                },
                splitLine: {
                    show:false
                },
                axisLine: {
                    show:false
                }
                
           	}
    		],
            xAxis: {
                type: 'category',
                data: ["核心区","浦东","市区","嘉定","松江","青浦","奉贤","金山","崇明","长兴"],
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                axisTick:{
                	show:false
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
            },
            series: [
                
                {
                    type: 'bar',
                    name: "全年额度",
                    stack:'已耗用量',
                    itemStyle: {
                        color: "rgba(246,170,154,0.18)"
                    },
                    data: data.chart_qnshedhy.Qnmonth,
                    barGap: "1%",
                    barWidth: 40
                },
                {
                    type: 'scatter',
                    name: "已耗用量",
                    stack:'已耗用量',
                    symbol : 'cricle',
                    label:{
                    	normal:{
                    		show:true,
                    		formatter:function (val){
                    			var num = val.data[1]+'%';
                    			return num;
                    		},
                    		position:'top',
                    		textStyle:{
                    			color:'#fff',
                    			fontSize:24
                    		}
                    	}
                    },
                    itemStyle: {
                        color: "#ff8a4a"
                    },
                    data:[
                    	['核心区',data.chart_qnshedhy.Hymonth[0]+'%'],
                    	['浦东',data.chart_qnshedhy.Hymonth[1]],
                    	['市区',data.chart_qnshedhy.Hymonth[2]],
                    	['嘉定',data.chart_qnshedhy.Hymonth[3]],
                    	['松江',data.chart_qnshedhy.Hymonth[4]],
                    	['青浦',data.chart_qnshedhy.Hymonth[5]],
                    	['奉贤',data.chart_qnshedhy.Hymonth[6]],
                    	['金山',data.chart_qnshedhy.Hymonth[7]],
                    	['崇明',data.chart_qnshedhy.Hymonth[8]],
                    	['长兴',data.chart_qnshedhy.Hymonth[9]]
                    ],
                },
                {
                    type: 'bar',
                    name: "故障",
                    stack:'预安排',
                    itemStyle: {
                        color: "#f81d3c"
                    },
                    data: data.chart_qnshedhy.Gzmonth,
                    barGap: "-100%",
                    barWidth: 40
                },
                {
                    type: 'bar',
                    name: "预安排",
                    itemStyle: {
                        color: "#5fd9fb"
                    },
                    stack:'预安排',
                    data: data.chart_qnshedhy.Yapmonth,
                    barGap: "-100%",
                    barWidth: 40
                }
                
            ]
        };
        chart_qnshedhy.setOption(option_qnshedhy);
   		   
   		//停电原因(预安排&故障)
   		var option_tdyy1 = {
   			tooltip:{
        		formatter:"{b} : {c}"
        	},
    		legend: {
    			left:'center',
    			icon:'circle',
    			width:600,
    			bottom:60,
    			data:['计划检修','临时检修','内部施工','外部施工','业扩施工','市政工程','用户申请','其他'],
    			textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
    		},
            series: [
                {
                    type: 'pie',
                    name: "停电原因",
                    radius:'40%',
                    label:{
                    	fontSize:24,
                    	color:'#fff'
                    	
                    },
                    data:[
                    	{
                    		value: data.chart_tdyy1.yapTdyy[0],
                    		name:'计划检修',
                    		itemStyle:{
                    			color:'#366fc7'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy1.yapTdyy[1],
                    		name:'临时检修',
                    		itemStyle:{
                    			color:'#f97061'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy1.yapTdyy[2],
                    		name:'内部施工',
                    		itemStyle:{
                    			color:'#f81d3c'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy1.yapTdyy[3],
                    		name:'外部施工',
                    		itemStyle:{
                    			color:'#ffbc00'
                    		}
                    	},
                    	{value:data.chart_tdyy1.yapTdyy[4],
                    		name:'业扩施工',
                    		itemStyle:{
                    			color:'#4599d8'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy1.yapTdyy[5],
                    		name:'市政工程',
                    		itemStyle:{
                    			color:'#58ae32'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy1.yapTdyy[6],
                    		name:'用户申请',
                    		itemStyle:{
                    			color:'#1c417a'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy1.yapTdyy[7],
                    		name:'其他',
                    		itemStyle:{
                    			color:'#a64000'
                    		}
                    	}
                	]
            
     		}]
        };
        chart_tdyy1.setOption(option_tdyy1);
   		
   		var option_tdyy2 = {
   			tooltip:{
        		formatter:"{b} : {c}"
        	},
    		legend: {
    			left:'center',
    			bottom:60,
    			icon:'circle',
    			width:600,
    			data:['设计施工','设备原因','运行维护','外力因素','自然因素','用户影响','其他'],
    			textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
    		},
            series: [
                {
                    type: 'pie',
                    name: "停电原因",
                    radius:'40%',
                    label:{
                    	fontSize:24,
                    	color:'#fff'
                    },
                    data:[
                    	{
                    		value:data.chart_tdyy2.gzTdyy[0],
                    		name:'设计施工',
                    		itemStyle:{
                    			color:'#366fc7'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy2.gzTdyy[1],
                    		name:'设备原因',
                    		itemStyle:{
                    			color:'#f97061'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy2.gzTdyy[2],
                    		name:'运行维护',
                    		itemStyle:{
                    			color:'#f81d3c'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy2.gzTdyy[3],
                    		name:'外力因素',
                    		itemStyle:{
                    			color:'#ffbc00'
                    		}
                    	},
                    	{value:data.chart_tdyy2.gzTdyy[4],
                    		name:'自然因素',
                    		itemStyle:{
                    			color:'#4599d8'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy2.gzTdyy[5],
                    		name:'用户影响',
                    		itemStyle:{
                    			color:'#58ae32'
                    		}
                    	},
                    	{
                    		value:data.chart_tdyy2.gzTdyy[6],
                    		name:'其他',
                    		itemStyle:{
                    			color:'#1c417a'
                    		}
                    	}
                    	
                	]
            
     		}]
        };
        chart_tdyy2.setOption(option_tdyy2);
        
        
        //趋势分析
        // 供电可靠率
        var option_gdkkl2 = {
        	tooltip: {
                show: true,
                trigger: 'axis',
                padding: 10
                
            },
            legend: {
                right: 60,
                top: 30,
                data: [{
                    name: "当年",
                    icon:"rect"
                }, {
                    name: "上年",
                    icon:"rect"
                }],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 50,
                top: 150,
                width: 1200,
                height: 480,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                min:99.9299,
                interval:0.01,
                max:100.0099,
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    lineStyle: {
                        color: "#08405d"
                    }
                }
            },
            xAxis: {
                type: 'category',
                data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
            },
            series: [
                {
                    type: 'line',
                    name: "当年",
                    itemStyle: {
                        color: "#0060e5"
                    },
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
								var theMax = Math.max.apply(null, data.chart_gdkkl2.curyear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data:data.chart_gdkkl2.curyear,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'line',
                    name: "上年",
                    itemStyle: {
                        color: "#12b4ff"
                    },
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
								var theMax = Math.max.apply(null, data.chart_gdkkl2.Jsyear);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.chart_gdkkl2.Jsyear,
                    barGap: "1%",
                    barWidth: 20
                },
            ]
        };
        chart_gdkkl2.setOption(option_gdkkl2);
        // 中压停电时户数
        var option_tdhs2 = {
        	tooltip: {
                show: true,
                trigger: 'axis',
                padding: 10
                
            },
            legend: {
                right: 60,
                top: 30,
                data: [{
                    name: "当年",
                    icon:"rect"
                }, {
                    name: "上年",
                    icon:"rect"
                }],
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 50,
                top: 150,
                width: 1200,
                height: 480,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    show:false
                },
                
            },
            xAxis: {
                type: 'category',
                data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                axisTick:{
                	show:false
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
            },
            series: [
                {
                    type: 'line',
                    name: "当年",
                    itemStyle: {
                        color: "#f9bc51"
                    },
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
								var theMax = Math.max.apply(null, data.chart_tdhs2.dntdsh2);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data:data.chart_tdhs2.dntdsh2,
                    barGap: "1%",
                    barWidth: 20
                },
                {
                    type: 'line',
                    name: "上年",
                    itemStyle: {
                        color: "rgba(255,255,255,0.3)"
                    },
                    label: {
                    	normal: {
                    		show: true,
                    		position: 'top',
                    		fontSize:24,
                    		formatter: function (params) {
								var theMax = Math.max.apply(null, data.chart_tdhs2.sntdsh2);
								if (params.value == theMax) {
									return params.value;
								}else{
									return '';
								}
                    		}
                    	}
                    },
                    data: data.chart_tdhs2.sntdsh2,
                    barGap: "1%",
                    barWidth: 20
                },
            ]
        };
        chart_tdhs2.setOption(option_tdhs2);
        // 全年时户额度耗用
        var option_edhy2 = {
            legend: {
                right: 60,
                top: 30,
                itemGap:60,
                data: [{
                    name: "累计耗用量",
                    icon:"rect"
                }, {
                    name: "预安排",
                    icon:"rect"
                }, {
                    name: "故障",
                    icon:"rect"
                }],
                textStyle: {
                    fontSize: 28,
                    color: "#fff"
                },
                selectedMode: false
            },
            grid: {
                left: 50,
                top: 150,
                width: 1200,
                height: 480,
                containLabel: true
            },
    		yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
                minInterval:1,
                axisTick:{
                	show:false
                },
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                splitLine: {
                    show:false
                },
                
            },
            xAxis: {
                type: 'category',
                data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
                axisLabel: {
                    fontSize: 24,
                    color: "#fff",
                    margin:20
                },
                axisTick:{
                	show:false
                },
                axisLine: {
                    lineStyle: {
                        color: "#0060e5"
                    }
                },
            },
            series: [
                {
                    type: 'line',
                    name: "累计耗用量",
                    itemStyle: {
                        color: "#0060e5"
                    },
                    data: data.chart_edhy2.ljedhy2,
                },
	            {
	                name:'预安排',  
	                type:'bar',   //类型 
	                stack:'预安排',
	                barWidth:40,
	                color:'#ff8a4a',
	                data: data.chart_edhy2.yapedhy2,
                    barGap: "1%"
	            },
	            {
	                name:'故障',  
	                type:'bar',   //类型 
	                stack:'预安排',
	                color:'#f81d3c',
	                data:data.chart_edhy2.gzedhy2,
	            },
            ]
        };
        chart_edhy2.setOption(option_edhy2);
        // 停电原因
        var option_tdyyl2 = {
        	tooltip:{
        		formatter:"{b} : {c}"
        	},
            legend: {
                name:'检修',
                data: ['计划检修','临时检修','内部施工','外部施工','业扩施工','市政工程','用户申请','其他'],
                left:'center',
    			icon:'circle',
    			width:600,
    			bottom:60,
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            series: [
                {
                    type: 'pie',
                    name: "检修",
                    radius:'40%',
                    label:{
                    	fontSize:24,
                    	color:'#fff'
                    },
                    data: [
	                    {
	                    	value:data.chart_tdyy3.yapTdyy[0],
	                    	name:'计划检修',
		                    itemStyle: {
		                        color: '#366fc7'
		                    }
	                    },
	                    {
	                    	value:data.chart_tdyy3.yapTdyy[1],
		                    name:'临时检修',
		                    itemStyle: {
		                        color: '#f97601'
		                    }
	                    },
	                    {
	                    	value:data.chart_tdyy3.yapTdyy[2],
	                    	name:'内部施工',
		                    itemStyle: {
		                        color: '#f81d3c'
		                    }
		                },
	                    {value:data.chart_tdyy3.yapTdyy[3],name:'外部施工',
	                    itemStyle: {
	                        color: '#ffbc00'
	                    }},
	                    {value:data.chart_tdyy3.yapTdyy[4],name:'业扩施工',
	                    itemStyle: {
	                        color: '#4599d8'
	                    }},
	                    {value:data.chart_tdyy3.yapTdyy[5],name:'市政工程',
	                    itemStyle: {
	                        color: '#58ae32'
	                    }},
	                    {value:data.chart_tdyy3.yapTdyy[6],name:'用户申请',
	                    itemStyle: {
	                        color: '#1c417a'
	                    }},
	                    {value:data.chart_tdyy3.yapTdyy[7],name:'其他',
	                    itemStyle: {
	                        color: '#a64000'
	                    }},
                    ]
                }
            ]
        };
        chart_tdyyl2.setOption(option_tdyyl2);
        var option_tdyyr2 = {
        	tooltip:{
        		formatter:"{b} : {c}"
        	},
            legend: {
                name:'检修',
                left:'center',
    			icon:'circle',
    			width:600,
    			bottom:60,
                data: ['设计施工','设备原因','运行维护','外力因素','自然因素','用户影响','其他'],
                textStyle: {
                    fontSize: 24,
                    color: "#fff"
                },
                selectedMode: false
            },
            series: [
                {
                    type: 'pie',
                    name: "检修",
                    radius:'40%',
                    label:{
                    	fontSize:24,
                    	color:'#fff'
                    },
                    data: [
	                    {
	                    	value:data.chart_tdyy4.gzTdyy[0],
	                    	name:'设计施工',
		                    itemStyle: {
		                        color: '#366fc7'
		                    }
	                    },
	                    {
	                    	value:data.chart_tdyy4.gzTdyy[1],
		                    name:'设备原因',
		                    itemStyle: {
		                        color: '#f97601'
		                    }
	                    },
	                    {
	                    	value:data.chart_tdyy4.gzTdyy[2],
	                    	name:'运行维护',
		                    itemStyle: {
		                        color: '#f81d3c'
		                    }
		                },
	                    {value:data.chart_tdyy4.gzTdyy[3],name:'外力因素',
	                    itemStyle: {
	                        color: '#ffbc00'
	                    }},
	                    {value:data.chart_tdyy4.gzTdyy[4],name:'自然因素',
	                    itemStyle: {
	                        color: '#4599d8'
	                    }},
	                    {value:data.chart_tdyy4.gzTdyy[5],name:'用户影响',
	                    itemStyle: {
	                        color: '#58ae32'
	                    }},
	                    {value:data.chart_tdyy4.gzTdyy[6],name:'其他',
	                    itemStyle: {
	                        color: '#1c417a'
	                    }},
                    ]
                }
            ]
        };
        chart_tdyyr2.setOption(option_tdyyr2);
    }
    
    function setData(newdata, isMarge) {
        if (!newdata) return;
        var isEmpty = true;
        for (var t in data) {
            isEmpty = false;
        }
        if (isEmpty) {
            data = newdata;
        } else if (isMarge) {
            for (var key in newdata) {
                data[key] = newdata[key];
            }
        } else {
            f(newdata, data);
        }       
        update();
    }

    function f(newdata, cacheData) {
        for (var key in newdata) {
            if (!Array.isArray(newdata[key])) {
                f(newdata[key], cacheData[key]);
            } else {
                cacheData[key] = newdata[key];
            }
        }
    }

    function sumArr(arr) {
        return arr.reduce(function (acc, cur) {
            return acc + cur
        }, 0)
    }

    return {
        setData: setData
    }
})();
function sortNumber (a,b) {
    return a - b
}