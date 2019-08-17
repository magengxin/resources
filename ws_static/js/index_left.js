/**
 * Created by admin on 2018/9/6.
 */
//全网监控开始

$(function () {

    loadPage();
    loadguZhangMarqueePage();
    setInterval(loadPage,1000*60);
    setInterval(loadguZhangMarqueePage,1000*60*2);
    $("#zd_list_num").css({'cursor': 'pointer'})
    $("#zd_list_num").click(function () {
        guzhuDongGDShow();
        $('#qiangdan_title').text("主动工单");
    });

    $("#baoxiudan_num").css({'cursor': 'pointer'});
    $("#baoxiudan_num").click(function () {
        baoXiuDanShow();
        $('#qiangdan_title').text("报修工单");
    });

    $("#suqiu_num").css({'cursor': 'pointer'});
    $("#suqiu_num").click(function () {
        suQiuDanShow();
        $('#qiangdan_title').text("诉求工单");
    });
    
    
  	$("#qualified1").css({'cursor': 'pointer'});
    $("#qualified1").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("电压合格率");
        showSuQiuList(null,null,g_deptchange);
    });
    
    $("#qualified2").css({'cursor': 'pointer'});
    $("#qualified2").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("电压合格率");
        showSuQiuList(null,null,g_deptchange);
    });
    
    $("#qualified3").css({'cursor': 'pointer'});
    $("#qualified3").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("电压合格率");
        showSuQiuList(null,null,g_deptchange);
    });
    
    $("#qualified4").css({'cursor': 'pointer'});
    $("#qualified4").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("电压合格率");
        showSuQiuList(null,null,g_deptchange);
    });
    
    
    $("#qualified4").css({'cursor': 'pointer'});
    $("#qualified4").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("电压合格率");
        showSuQiuList(null,null,g_deptchange);
    });
    
    
    
    $("#md_red_num").css({'cursor': 'pointer'});
    $("#md_red_num").click(function () {
        zhuPeiWangShow("2");
        $('#qiangdan_title').text("主网");
    });
    
    $("#md_yellow_num").css({'cursor': 'pointer'});
    $("#md_yellow_num").click(function () {
        ZpYiChangShow("25,32,33,35,37,85,83");
        $('#qiangdan_title').text("主网");
    });
    
    $("#pd_red_num").css({'cursor': 'pointer'});
    $("#pd_red_num").click(function () {
        zhuPeiWangShow("1");
        $('#qiangdan_title').text("配网");
    });
    
    $("#pd_yellow_num").css({'cursor': 'pointer'});
    $("#pd_yellow_num").click(function () {
        ZpYiChangShow("22");
        $('#qiangdan_title').text("配网");
    });
    
    $("#gzjk_ssjc_tval").css({'cursor': 'pointer'});
    $("#gzjk_ssjc_tval").click(function () {
       ChooseShow("KHFW");
        $('#qiangdan_title').text("实时监测");
        var areaGZJC = $("#areaGZJC").text();
	    var areaId = '8a812897493378a00149567740676661';
		switch(areaGZJC){
		case '上海':
			areaId = '8a812897493378a00149567740676661';
		    break;
		case '核心':
			areaId = 'JBH-HXQ';
		    break;
		case '浦东':
		    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
		    break;
		case '市区':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
		    break;
		case '市北':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
		    break;
		case '市南':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
		    break;
		case '嘉定':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
		    break;
		case '松江':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
		    break;
	    case '青浦':
	    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
		    break;
		case '奉贤':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
		    break;
		case '金山':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
		    break;
		case '崇明':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
		    break;
		case '长兴':
			areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
		    break;
	    			}
        showSuQiuList(null,null,areaId);
    });
    
    
    $("#chart_110kv_pie").css({'cursor': 'pointer'});
    $("#chart_110kv_pie").click(function () {
        guzhangDetailShow("32");//交流10kV：22 交流35kV：25 交流110kV：32
        $('#qiangdan_title').text("故障监测");
    });
    
    
    $("#chart_35kv_pie").css({'cursor': 'pointer'});
    $("#chart_35kv_pie").click(function () {
        guzhangDetailShow("25");
        $('#qiangdan_title').text("故障监测");
    });
    
    $("#chart_10kv_pie").css({'cursor': 'pointer'});
    $("#chart_10kv_pie").click(function () {
        guzhangDetailShow("22");
        $('#qiangdan_title').text("故障监测");
    });
    
    $("#chart_04kv_pie").css({'cursor': 'pointer'});
    $("#chart_04kv_pie").click(function () {
        guzhangDetailShow("08");
        $('#qiangdan_title').text("故障监测");
    });
    
    $("#gzjk_zjtz_val").css({'cursor': 'pointer'});
    $("#gzjk_zjtz_val").click(function () {
        tiaoZhaDetailShow("01");//type 跳闸情况（01:跳闸,02:跳闸重合成功,03:跳闸重合不成功）
        $('#qiangdan_title').text("直接跳闸");
    });
    
    $("#gzjk_chsb_val").css({'cursor': 'pointer'});
    $("#gzjk_chsb_val").click(function () {
        tiaoZhaDetailShow("03");
        $('#qiangdan_title').text("重合失败");
    });
    
    $("#gzjk_chcg_val").css({'cursor': 'pointer'});
    $("#gzjk_chcg_val").click(function () {
        tiaoZhaDetailShow("02");
        $('#qiangdan_title').text("重合成功");
    });
    
    $("#taiqu_tqzs").css({'cursor': 'pointer'});
    $("#taiqu_tqzs").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("异常监测");
        showSuQiuList(null,null,g_deptchange);
    });
    
//  $("#taiqu_jcl").css({'cursor': 'pointer'});
//  $("#taiqu_jcl").click(function () {//检测率点击不要明细
//      ChooseShow("KHFW");
//      $('#qiangdan_title').text("异常监测");
//      showSuQiuList(null,null,g_deptchange);
//  });
    
    
    $("#shishijiance1").css({'cursor': 'pointer'});
    $("#shishijiance1").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("实时监测");
        showSuQiuList(null,null,g_deptchange);
    });
    
     $("#shishijiance1-biao1").css({'cursor': 'pointer'});
    $("#shishijiance1-biao1").click(function () {
//      ChooseShow("KHFW");
        qiangXiuDetailShow('5','04');
        $('#qiangdan_title').text("实时监测");
//      showSuQiuList(null,null,g_deptchange);
    });
      
    $("#shishijiance1-biao2").css({'cursor': 'pointer'});
    $("#shishijiance1-biao2").click(function () {
        qiangXiuDetailShow('5','09');
        $('#qiangdan_title').text("实时监测");
//      showSuQiuList(null,null,g_deptchange);
    });
    
    $("#shishijiance1-biao3").css({'cursor': 'pointer'});
    $("#shishijiance1-biao3").click(function () {
        qiangXiuDetailShow('4','04');
        $('#qiangdan_title').text("实时监测");
    });
    
    $("#shishijiance1-biao4").css({'cursor': 'pointer'});
    $("#shishijiance1-biao4").click(function () {
       qiangXiuDetailShow('4','09');
        $('#qiangdan_title').text("实时监测");
    });



$("#heXinQuVal").css({'cursor': 'pointer'});
    $("#heXinQuVal").click(function () {
//      ChooseShow("KHFW");
        qiangXiuDetail2Show("核心");
        $('#qiangdan_title').text("抢修分布");
//      showSuQiuList(null,null,g_deptchange);
    });
    
    $("#puDongVal").css({'cursor': 'pointer'});
    $("#puDongVal").click(function () {
    	qiangXiuDetail2Show("浦东");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#shiQuVal").css({'cursor': 'pointer'});
    $("#shiQuVal").click(function () {
        qiangXiuDetail2Show("市区");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#shiBeiVal").css({'cursor': 'pointer'});
    $("#shiBeiVal").click(function () {
        qiangXiuDetail2Show("市北");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#shiNanVal").css({'cursor': 'pointer'});
    $("#shiNanVal").click(function () {
        qiangXiuDetail2Show("市南");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#jiaDingVal").css({'cursor': 'pointer'});
    $("#jiaDingVal").click(function () {
        qiangXiuDetail2Show("嘉定");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#songJiangVal").css({'cursor': 'pointer'});
    $("#songJiangVal").click(function () {
        qiangXiuDetail2Show("松江");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#qingPuVal").css({'cursor': 'pointer'});
    $("#qingPuVal").click(function () {
        qiangXiuDetail2Show("青浦");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#fengXianVal").css({'cursor': 'pointer'});
    $("#fengXianVal").click(function () {
        qiangXiuDetail2Show("奉贤");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#jinShanVal").css({'cursor': 'pointer'});
    $("#jinShanVal").click(function () {
        qiangXiuDetail2Show("金山");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#chongMingVal").css({'cursor': 'pointer'});
    $("#chongMingVal").click(function () {
        qiangXiuDetail2Show("崇明");
        $('#qiangdan_title').text("抢修分布");
    });
    
    $("#changXingVal").css({'cursor': 'pointer'});
    $("#changXingVal").click(function () {
        qiangXiuDetail2Show("长兴");
        $('#qiangdan_title').text("抢修分布");
    });
    
//  $("#juBaoBingTu").css({'cursor': 'pointer'});
//  $("#juBaoBingTu").click(function () {
////      ChooseShow("KHFW");
//      suQiuShow("举报");
//      $('#qiangdan_title').text("实时监测");
////      showSuQiuList(null,null,g_deptchange);
//  });
//  
//   $("#suQiuBingTu").css({'cursor': 'pointer'});
//  $("#suQiuBingTu").click(function () {
//  	suQiuShow("投诉");
//      $('#qiangdan_title').text("实时监测");
//  });
    //诉求分布明细
    $("#jinJiSuQiuZhuZhuangTu").css({'cursor': 'pointer'});
    $("#jinJiSuQiuZhuZhuangTu").click(function () {
    	suQiuShow("");
        $('#qiangdan_title').text("诉求分布");
    });
    
})

function loadPage() {
    getJianKongAllData('md_red_num',2);//主网故障数
//  getJianKongAbnormalData('md_yellow_num');//主网异常
    getJianKongAllData('pd_red_num',1);//配电故障数
//  getJianKongAbnormalData('pd_yellow_num');//配网异常
    getJianKongAllData('zd_list_num',0);//主动单
    getBaoXiuDongDanData('baoxiudan_num');//报修单
    getXunShiRenWuData(g_deptchange); //巡视统计
    getYeWuZhiHuData(g_deptchange);//业务指挥
    getCangKuData();//仓库资源
}
function loadguZhangMarqueePage(){
	getGuZhangMarquee('25,32,33,34,35,36,37,80,81,82,83,84,85,86,87,88,90');
}
//35kV以上走马灯故障显示
function getGuZhangMarquee(DYDJ){
	getGuZhangMarqueeData(dealdata,DYDJ,g_deptchange);
	function dealdata(data){
		if(data.data){
			var rows = data.data;
			var guZhangList = [];//故障发生
			var xiuFuList = [];//故障修复
			rows.sort(sortJddjsj);
			$('.histoy_inner').empty();
			$("#guzhangMarquee").empty();
			for(i = 0; i < rows.length;i++){
				if(rows[i].QXDZT == '01' || rows[i].QXDZT == '02'){//未到达或进行中
					guZhangList.push(rows[i]);
				} else if(rows[i].QXDZT == '03'){//已完成
					xiuFuList.push(rows[i]);
				}
				var span = $('<span>',{
					style : rows[i].QXDZT == '03'?"color:#00da5b;":"color:#ff3b4d;",
					text : ((guZhangList[i].JDDJSJ == null?"--":guZhangList[i].JDDJSJ)+" "+(guZhangList[i].TZQKMC == null?"--":guZhangList[i].TZQKMC)),
				});
				$('.histoy_inner').append(span);
			}
			guZhangList.sort(sortJddjsj);
			xiuFuList.sort(sortJlxfsj);
			if(guZhangList.length > 0){
				var marquee = $('<marquee>',{
					style : "vertical-align: middle;font-size: 28px;width: 1090px;color:#ff3b4d;",
					text : ("故障发生:"+(guZhangList[0].JDDJSJ == null?"--":guZhangList[0].JDDJSJ)+" "+(guZhangList[0].SSGDDWMC == null?"--":guZhangList[0].SSGDDWMC)+" "+(guZhangList[0].DYDJMC == null?"--":guZhangList[0].DYDJMC)+" "+(guZhangList[0].SYZXMC==null?"--":guZhangList[0].SYZXMC)+" "+(guZhangList[0].TZQKMC == null?"--":guZhangList[0].TZQKMC)),
				});
				marquee.prop("loop","3");
                $("#guzhangMarquee").append(marquee);
			}
			if(xiuFuList.length > 0){
			  var marquee = $('<marquee>',{
			  	    style : "vertical-align: middle;font-size: 28px;width: 1090px;color:#00da5b;",
					text : ("故障修复:"+(xiuFuList[0].JDDJSJ == null?"--":xiuFuList[0].JDDJSJ)+" "+(xiuFuList[0].SSGDDWMC == null?"--":xiuFuList[0].SSGDDWMC)+" "+(xiuFuList[0].DYDJMC == null?"--":xiuFuList[0].DYDJMC)+" "+(xiuFuList[0].SYZXMC==null?"--":xiuFuList[0].SYZXMC)+" "+(xiuFuList[0].TZQKMC == null?"--":xiuFuList[0].TZQKMC)),
				});
			  marquee.prop("loop","3");
               $("#guzhangMarquee").append(marquee);
			}
		}
	}
}
/**
 * 按照故障发生时间排序 按照返回对象数组rows的元素的JDDJSJ属性大小(字符串按照数值比较)升序排列
 * @param {Object} a
 * @param {Object} b
 */
function sortJddjsj(a,b){

	return a.JDDJSJ-b.JDDJSJ;
	
	}
/**
 * 按照故障修复时间排序 按照返回对象数组rows的元素的JLXFSJ属性大小(字符串按照数值比较)升序排列
 * @param {Object} a
 * @param {Object} b
 */
function sortJlxfsj(a,b){

	return a.JLXFSJ-b.JLXFSJ;
	
	}
//全网监控故障数
function getJianKongAllData(id ,DYDJ) {

    getQuanWangZTData(daaldata,DYDJ,g_deptchange);
    function daaldata(data) {
        var num = 0;
        for(var i=0;i<data.length;i++) {
            num += data[i].SL;
        }
        $('#' + id).text(num);
//      if(id == "md_red_num" && num > 0){
//      	getzhuPeiWangDetial(dealBackDataList,"2");
//      	function dealBackDataList(data){
//      		$("#showInfo").empty();
//      		if (data.length != 0){ 
//      			for(i = 0;i < data.length;i++){
//      				$("#showInfo").append("故障发生:"+(data[i].JDDJSJ == null?"--":data[i].JDDJSJ)+" "+(data[i].SSGDDWMC == null?"--":data[i].SSGDDWMC)+" "+(data[i].DYDJMC == null?"--":data[i].DYDJMC)+" "+(data[i].SYZXMC==null?"--":data[i].SYZXMC)+" "+(data[i].TZQKMC == null?"--":data[i].TZQKMC));
//      			}
//      			
//      		}
//      	}
//      }
        var num1 = parseInt($('#md_red_num').text()) ;
        var num2 = parseInt($('#pd_red_num').text()) ;
        changeYichang("quanwangjiankong",num1 > 5);
    }
}

//全网监控异常数
function getJianKongAbnormalData(id) {

    //http://localhost:8080/pdpsc-app/interface/GDFW_BDZT_YC_ZWSB/0?SSGS=-1
    if(id == "md_yellow_num"){
    	var data = {"SSGS": "8a812897493378a00149567740676661", "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "DYDJ":"25,32,33,35,37,85,83"};
    } else if(id == "pd_yellow_num"){
    	var data = {"SSGS": "8a812897493378a00149567740676661", "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "DYDJ":"22"};
    } 
    
    $.ajax({
        url: basepath + "interface/GDFW_BDZT_YC_QWYXJKTJ/0",
        data: data,
        type: 'get',
        dataType: 'json',
        success: function (data) {
        	var row = data.data;
            var num = 0;
            if(data.data){
            	 for(var i=0;i<row.length;i++) {
                    num += row[i].YCS;
                 }
                $('#' + id).text(num);
            }
        },
        error:function (data) {
            //console.log(data);
        }
    });
}


//报修单
function getBaoXiuDongDanData(id) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_GETZTQX_LYMX/0?SSGS=-1&KSSJ=2018-10-07&JSSJ=2018-10-08&GZLX=1&SFCL=0

    var data = {"SSGS": SSGS, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"GZLX":1,"SFCL":0};
    $.ajax({
        url: basepath + "interface/BDZT_GETZTQX_LYMX/0",
        data: data,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (data.data) {
                var num = 0;
                /*for(var i=0;i<data.data.length;i++) {
                    num +=parseInt(data.data[i].ZS);
                }*/
               if(data.data.length>0){
                    num=  data.data.length;
               }else{
                    num=0;
                }
            }
            $('#' + id).text(num);
        },
        error:function (data) {
            //console.log(data);
        }
    });
}

//智慧保电 0917版本
function getZhiHuiBaodianData(power_monitor, option, BDDXJB,ssgs) {

    getBaoDianObjStatus(dealdata,BDDXJB,"-1",ssgs);

    function dealdata(data) {
        if (!data.data){
            data.data = [];
        }
        var rows = data.data;

        var ZS = rows.length;
        var YCS = 0;
        for (var i=0;i<rows.length;i++){
            YCS += parseInt(rows[i].YCS)
        }
        //硬编码，保电异常数为0
        // YCS = 0;
        // if (BDDXJB===1){
        //     ZS=5;
        // } else if (BDDXJB===2){
        //     ZS=24;
        // }if (BDDXJB===3){
        //     ZS=10;
        // }
        //end

        // 如果异常数量为0，则中间文字显示“正常”，否则显示数字
        if(YCS == 0) {
            option.title.text = "正常"
        }
        else {
            option.title.text = YCS;
        }

        switch (BDDXJB) {//赋值用户总数
            case 1:
                $('#yjbdNum').text(ZS);
                break
            case 2:
                $('#ejbdNum').text(ZS);
                break
            case 3:
                $('#bdsbNum').text(ZS);
                break
        }

        option.series[0].data[0].value = YCS;
        option.series[0].data[1].value = ZS;
        // option.series[0].data[2].value = 100-ZS-YCS;
        power_monitor.setOption(option);
        // power_monitor.dispatchAction({
        //     type:'highlight',
        //     dataIndex:1
        // })

        if (BDDXJB === 1) {
            YJYHYCS=YCS;
        } else if (BDDXJB === 2) {
            EJYHYCS=YCS;
        } else if (BDDXJB === 3) {
            SFQSBYCS=YCS;
        }
        getZHBDYC();
    }
}

//业务指挥，异常处理，紧急处理
function getYeWuZhiHuData(ssgs,dashBoard,dashBoard_option) {

    getTaskCountData(dealdata,ssgs);
    function dealdata(data) {
        var abnormal_deal_num = 0;
        var abnormal_all_num = 0;
        var emergent_deal_num = 0;
        var emergent_all_num = 0;

        if (!data.data){
            data.data = [];
        }
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            if (row.TASK_TYPE === '2'){
                abnormal_deal_num += parseInt(row.ZCLS);
                abnormal_all_num += parseInt(row.ZS);
            } else if (row.TASK_TYPE === '3') {
                emergent_deal_num += parseInt(row.ZCLS);
                emergent_all_num += parseInt(row.ZS);
            }
        }
        setYiChangChuLi(abnormal_all_num);
        setJinJiChuLi(emergent_all_num);
        setChengZhen(abnormal_deal_num);
        setHongZhen(emergent_deal_num);
    }
}

//巡视任务统计
function getXunShiRenWuData(ssgs) {

    getXunShiTongJiData(dealdata, ssgs)
    function dealdata(data) {

        var YXXS = 0;//	已巡视数（含正在巡视）
        var YFXQXS  = 0;//已发现缺陷数
        var JHXSS = 0;//计划巡视数

        if (!data.data){
            data.data = [];
        }
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            YXXS = parseInt(row.YXXS || 0);
            YFXQXS = parseInt(row.YFXQXS || 0);
            JHXSS = parseInt(row.JHXSS || 0);

        }

        setXunShiRenWu(JHXSS);
        setLvZhen(YFXQXS);
        setZiZhen(YXXS);
    }
}

//资源监控
function ziYuanJianKongData(left_box,option) {

    $.ajax({
        url: basepath + "getXngdfwbdztzyjktj?SSGS="+SSGS,
//      url: basepath + "interface/BDZT_GETDBZYCDQKTJ_DW/0?SSGS=-1&GZ=-1",
        type: 'get',
        dataType: 'json',
        success: function (data) {

            //以下变量从接口取值赋值 目前设置为0;

            var tx_zs = 0;
            var tx_cds = 0;
            var jx_zs = 0;
            var jx_cds = 0;
            var qx_zs = 0;
            var qx_cds = 0;
            var bz_zs = 0;
            var bz_cds = 0;
            var hq_zs = 0;
            var hq_cds = 0;
            var sj_zs = 0;
            var sj_cds = 0;
            var rows = data.data;
            for(var i=0;i<rows.length;i++) {
                if (rows[i].GZ === "4"){
                    hq_zs += parseInt(rows[i].ZS);
                    hq_cds += parseInt(rows[i].CDS);
                } else if (rows[i].GZ === "5"){
                    sj_zs += parseInt(rows[i].ZS);
                    sj_cds += parseInt(rows[i].CDS);
                }else if (rows[i].GZ === "6"){
                    bz_zs += parseInt(rows[i].ZS);
                    bz_cds += parseInt(rows[i].CDS);
                }
            }
//            $('#zyjk_tx_text').text(tx_cds+"/"+tx_zs);//特巡
              $('#zyjk_jx_text').text(bz_cds+"/"+bz_zs);//保障
//            $('#zyjk_qx_text').text(qx_cds+"/"+qx_zs);//
              $('#zyjk_hq_text').text(hq_cds+"/"+hq_zs);//后勤
              $('#zyjk_cl_text').text(sj_cds+"/"+sj_zs);//车辆


            var dataBJ =[
                [
//                  tx_zs===0?0:100*tx_cds/tx_zs,
//                  jx_zs===0?0:100*jx_cds/jx_zs,
                    bz_zs===0?0:100*bz_cds/bz_zs,//此处位置原为检修,之后是检修与抢修合并,并重命名为保障
                    hq_zs===0?0:100*hq_cds/hq_zs,
                    sj_zs===0?0:100*sj_cds/sj_zs,
//                  qx_zs===0?0:100*qx_cds/qx_zs,
                ]
            ];
            option.series[0].data = dataBJ;
            left_box.setOption(option);
        },
        error:function (data) {
            console.log(data);
        }
    });
}

//应急库\常备库
function getCangKuData() {
    //http://127.0.0.1:8080/pdpsc-app/interface/BDZT_CKTJ/0?SSGS=8a812897493378a00149567740676661
    // "默认-1
    // 1、应急仓库
    // 2、常备仓库"
    var param = {"SSGS": SSGS};
    $.ajax({
        url: basepath + "interface/BDZT_CKTJ/0",
        type: 'get',
        data: param,
        dataType: 'json',
        success: function (data) {
            var LX;   //类型
            var LXMC;   //类型名称
            var yingji_SL = 0;   //数量
            var yingji_YCSL = 0;   //异常数量
            var changbei_SL= 0;   //数量
            var changbei_YCSL = 0;   //异常数量

            if (!data.data) {
                data.data = [];
            }
            for(var i=0;i<data.data.length;i++) {
                LX = data.data[i].LX;
                if (LX === "1"){
                    yingji_SL += parseInt(data.data[i].SL);
                    yingji_YCSL += parseInt(data.data[i].YCSL);
                } else if (LX === "2") {
                    changbei_SL += parseInt(data.data[i].SL);
                    changbei_YCSL += parseInt(data.data[i].YCSL);
                }
            }
            $('#yingjiku_all_num').text(yingji_SL);
            $('#yingjiku_abnormal_num').text(yingji_YCSL);
            $('#changbeiku_all_num').text(changbei_SL);
            $('#changbei_abnormal_num').text(changbei_YCSL);
        },
        error:function (data) {
            console.log(data);
        }
    });
}

/**
 * 总体抢修情况明细（按来源）
 * type：非电力故障数：4 电力故障数：5 全部：1
 * lx：95598：04 12345：09
 */
function qiangXiuDetailShow(type,lx){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    var areaPWQX = $("#areaPWQX").text();
    var areaId = '8a812897493378a00149567740676661';
	switch(areaPWQX){
	case '上海':
		areaId = '8a812897493378a00149567740676661';
	    break;
	case '核心':
		areaId = 'JBH-HXQ';
	    break;
	case '浦东':
	    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	    break;
	case '市区':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	    break;
	case '市北':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	    break;
	case '市南':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	    break;
	case '嘉定':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	    break;
	case '松江':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	    break;
    case '青浦':
    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	    break;
	case '奉贤':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	    break;
	case '金山':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	    break;
	case '崇明':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	    break;
	case '长兴':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	    break;
    			}
	showqiangXiuCeList(areaId,type,lx);
}

/**
 * 总体抢修情况明细（按来源）
 * areaName：公司或地区名称
 * type：全部：1 非电力故障数：4 电力故障数：5
 * lx：全部:-1 95598：04 12345：09
 */
function qiangXiuDetail2Show(areaName){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	switch(areaName){
	case '核心':
		var areaId = 'JBH-HXQ';
	    break;
	case '浦东':
	    var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	    break;
	case '市区':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	    break;
	case '市北':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	    break;
	case '市南':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	    break;
	case '嘉定':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	    break;
	case '松江':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	    break;
    case '青浦':
    	var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	    break;
	case '奉贤':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	    break;
	case '金山':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	    break;
	case '崇明':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	    break;
	case '长兴':
		var areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	    break;
    			}
	showqiangXiuCeList(areaId,"1","-1");
}

/**
 * 紧急诉求明细
 * type：分类(投诉 举报) 
 */
function suQiuShow(type){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	suQiuCeList(type);
}
/**
 * 故障监测--当日监测—实时监测（明细）
 * @param {Object} type 电压等级
 * 交流10kV：22 交流35kV：25 交流110kV：32 交流0.4kV：08
 */
function guzhangDetailShow(type){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    var areaGZJC = $("#areaGZJC").text();
    var areaId = '8a812897493378a00149567740676661';
    if(areaGZJC == '核心'){
    	var sfhxq = '1';
    } else {
    	var sfhxq = '-1';
    }
	switch(areaGZJC){
	case '上海':
		areaId = '8a812897493378a00149567740676661';
	    break;
	case '核心':
		areaId = 'JBH-HXQ';
	    break;
	case '浦东':
	    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	    break;
	case '市区':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	    break;
	case '市北':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	    break;
	case '市南':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	    break;
	case '嘉定':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	    break;
	case '松江':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	    break;
    case '青浦':
    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	    break;
	case '奉贤':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	    break;
	case '金山':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	    break;
	case '崇明':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	    break;
	case '长兴':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	    break;
    			}
	showFaultJianCeList(areaId,type,sfhxq);
}
/**
 * 故障监测--当日监测—跳闸监测（明细）
 * @param {Object} type 跳闸情况（01:跳闸,02:跳闸重合成功,03:跳闸重合不成功）
 */
function tiaoZhaDetailShow(type){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    var areaGZJC = $("#areaGZJC").text();
    var areaId = '8a812897493378a00149567740676661';
    if(areaGZJC == '核心'){
    	var sfhxq = '1';
    } else {
    	var sfhxq = '-1';
    }
	switch(areaGZJC){
	case '上海':
		areaId = '8a812897493378a00149567740676661';
	    break;
	case '核心':
		areaId = 'JBH-HXQ';
	    break;
	case '浦东':
	    areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	    break;
	case '市区':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	    break;
	case '市北':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	    break;
	case '市南':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	    break;
	case '嘉定':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	    break;
	case '松江':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	    break;
    case '青浦':
    	areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	    break;
	case '奉贤':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	    break;
	case '金山':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	    break;
	case '崇明':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	    break;
	case '长兴':
		areaId = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	    break;
    			}
	showtiaoZhaCeList(areaId,type,sfhxq);
}

/**
 * 新版智慧保电
 * @param {Object} power_monitor
 * @param {Object} option
 * @param {Object} type
 */
function getNewZhiHuiBaodianData(power_monitor, option,type){
	getBaoDianObjInfo(dealdata,type);
	function dealdata(data){
        if (!data.data){
            data.data = [];
        }
        var rows = data.data;

        var ZS = 0;
        var YCS = 0;
        var ZCS = 0;
        for (var i=0;i<rows.length;i++){
            YCS += parseInt(rows[i].YCS);
            ZCS += parseInt(rows[i].ZCS);
            ZS += parseInt(rows[i].ZS);
        }
        
        // 如果异常数量为0，则中间文字显示“正常”，否则显示数字
        if(YCS == 0) {
            option.title.text = "正常"
        }
        else {
            option.title.text = YCS;
        }

        switch (type) {//赋值用户总数
            case 1:
                $('#yjbdNum').text(ZS);
                break
            case 2:
                $('#ejbdNum').text(ZS);
                break
            case 3:
                $('#bdsbNum').text(ZS);
                break
        }

//      option.series[0].data[0].value = YCS;
        option.series[0].data[0].value = 0;
        option.series[0].data[1].value = ZCS;
        // option.series[0].data[2].value = 100-ZS-YCS;
        power_monitor.setOption(option);
        // power_monitor.dispatchAction({
        //     type:'highlight',
        //     dataIndex:1
        // })

        if (type === 1) {
//          YJYHYCS=YCS;
            YJYHYCS=0;
        } else if (type === 2) {
//          EJYHYCS=YCS;
            EJYHYCS=0;
        } else if (type === 3) {
//          SFQSBYCS=YCS;
            SFQSBYCS=0;
        }
        getZHBDYC();
	}
	
}

/**
 * 全网状态(左侧)--主动工单明细
 */
function guzhuDongGDShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showzhuDongGDCeList();
}

/**
 * 全网状态(左侧)--保修单明细
 */
function baoXiuDanShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showbaoXiuDanCeList();
}

/**
 * 全网状态(左侧)--诉求单明细
 */
function suQiuDanShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showsuQiuDanCeList();
}

/**
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网)
 * 1表示10KV 是配网的 
 * 2表示35KV及以上  是主网故障 
 * 不传表示所有的电压等级
 */
function zhuPeiWangShow(DYDJ){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showzhuPeiWangCeList(DYDJ);
}


/**
 * 全网状态(左侧)--主网与配网的橙色数字明细(35kV及以上的主网 与 10KV)
 */
function ZpYiChangShow(DYDJ){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showYiChangCeList(DYDJ);
}