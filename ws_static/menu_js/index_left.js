/**
 * Created by admin on 2018/9/6.
 */
//全网监控开始

$(function () {

    loadPage();//加载页面左侧数据
    loadguZhangMarqueePage();//加载走马灯内容
    setInterval(loadPage,1000*60);//隔一分钟刷新左侧页面
    setInterval(loadguZhangMarqueePage,1000*60*2);//走马灯两分钟刷新一次啊
    setLvZhen(0);//业务指挥指针角度加载
	setZiZhen(0);//业务指挥指针角度加载
	setChengZhen(0);//业务指挥指针角度加载
	setHongZhen(0);//业务指挥指针角度加载
	getQxztData();//页面顶部抢修状态加载
	getZHBDYC();//判断智慧保电异常状态
    $("#zd_list_num").css({'cursor': 'pointer'});//点击主动单弹明细
    $("#zd_list_num").click(function () {
        guzhuDongGDShow();
        $('#qiangdan_title').text("主动工单");
    });

    $("#baoxiudan_num").css({'cursor': 'pointer'});//点击保修单弹明细
    $("#baoxiudan_num").click(function () {
        baoXiuDanShow();
        $('#qiangdan_title').text("报修工单");
    });

    $("#suqiu_num").css({'cursor': 'pointer'});//点击诉求单弹明细
    $("#suqiu_num").click(function () {
        suQiuDanShow();
        $('#qiangdan_title').text("诉求工单");
    });
    

    $("#md_red_num").css({'cursor': 'pointer'});//点击主网红色数字弹明细
    $("#md_red_num").click(function () {
        zhuPeiWangShow("2");
        $('#qiangdan_title').text("主网");
    });
    
    $("#md_yellow_num").css({'cursor': 'pointer'});//点击主网黄色数字弹明细
    $("#md_yellow_num").click(function () {
        ZpYiChangShow("25,32,33,35,37,85,83");
        $('#qiangdan_title').text("主网");
    });
    
    $("#pd_red_num").css({'cursor': 'pointer'});//点击配网红色数字弹明细
    $("#pd_red_num").click(function () {
        zhuPeiWangShow("1");
        $('#qiangdan_title').text("配网");
    });
    
    $("#pd_yellow_num").css({'cursor': 'pointer'});//点击配网黄色数字弹明细
    $("#pd_yellow_num").click(function () {
        ZpYiChangShow("22");
        $('#qiangdan_title').text("配网");
    });
    
    $("#taiqu_tqzs").css({'cursor': 'pointer'});
    $("#taiqu_tqzs").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title').text("异常监测");
        showSuQiuList(null,null,g_deptchange);
    });
    
    
	//点击切换图标ac----------白色         icon1-----------蓝色
	$('.activeIcon1').on('click',function(){
		$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_1.png")')
		$('.activeIcon2').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_2.png")')
		$('.activeIcon3').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_3.png")')
		$('.activeIcon4').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_4.png")')
	})
	$('.activeIcon2').on('click',function(){
		$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_2.png")')
		$('.activeIcon1').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_1.png")')
		$('.activeIcon3').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_3.png")')
		$('.activeIcon4').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_4.png")')
	})
	$('.activeIcon3').on('click',function(){
		$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_3.png")')
		$('.activeIcon1').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_1.png")')
		$('.activeIcon2').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_2.png")')
		$('.activeIcon4').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_4.png")')
	})
	$('.activeIcon4').on('click',function(){
		$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_4.png")')
		$('.activeIcon1').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_1.png")')
		$('.activeIcon3').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_3.png")')
		$('.activeIcon2').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_2.png")')
	})
    
})

function loadPage() {//左侧页面数据加载
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
function loadguZhangMarqueePage(){//走马灯数据加载
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

    getQuanWangZTData(daaldata,DYDJ,g_deptchange);//全网状态故障数接口
    function daaldata(data) {//回调
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
        changeYichang("quanwangjiankong",num1 > 5);//左侧全网状态右侧正常图标显示
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
 * 智慧保电
 * @param {Object} power_monitor
 * @param {Object} option
 * @param {Object} type
 */
function getNewZhiHuiBaodianData(power_monitor, option,type){
	getBaoDianObjInfo(dealdata,type);//保电对象统计
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
        getZHBDYC();//智慧保电状态
	}
	
}
/**
 * 保电对象统计
 * @param {Object} callback
 * @param {Object} type
 */
function getBaoDianObjInfo(callback,type){
	var url = basepath + "interface/BDZT_GETBDDXTJ/0";
	var param = {"SSGS": "-1", "BDDXJB":type};
	callgetajax(callback,url,param);
}
/**
 * 全网状态(左侧)--主动工单明细
 */
function guzhuDongGDShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showzhuDongGDCeList();
}

/**
 * 
 * 全网状态(左侧)--主动工单明细
 */
function showzhuDongGDCeList() {

    //公司、跳闸设备、跳闸情况、故障设备、所属站线、电压等级、停电时间、送电时间、修复时间、抢修班组、是否确认（本次全部默认显示是）
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["TZSBMC","跳闸设备"],
        ["TZQKMC","跳闸情况"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
        ["JDDJSJ","停电时间"],
        ["HFSDSJ","送电时间"],
        ["JLXFSJ","修复时间"],
        ["TZSBMC","跳闸设备"],
        ["QXZDMC","抢修班组"],
        ["SFQR","是否确认"],
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
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GZSBBH"],lxtomapMap.QXGD);
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
//      	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
		$('#pageBlock').hide();
        if (data.length == 0){
           createList(parentComId, titleList);
           return;
        }
        var  rows = data;
       createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getzhuDongGDDetial(dealBackDataList);//抢修情况明细查看(ajax接口请求)
}
/**
 * 全网状态(左侧)--主动工单明细
 * @param {Object} callback
 */
function getzhuDongGDDetial(callback){
	var url = basepath + "bdGis/getGdfwbdztqwjkgzmx";
	var param = {"SSGS": "8a812897493378a00149567740676661","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
	callgetajax(callback,url,param);
	
}
/**
 * 全网状态(左侧)--保修单明细
 */
function baoXiuDanShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showbaoXiuDanCeList();
}
/**
 * 
 * 全网状态(左侧)--报修单明细
 */
function showbaoXiuDanCeList() {

    //公司、抢修单状态、来源、抢修单编号、报修时间、故障地点、报修内容、处理人、联系方式、接单登记时间、通知抢修时间、到达现场时间、记录修复时间、用户编号、用户名称
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["SSGDDWMC","公司"],
        ["QXDZTMC","抢修单状态"],
        ["LYMC","来源"],
        ["QXDBH","抢修单编号"],
        ["BXSJ","报修时间"],
        ["GZDD","故障地点"],
        ["BXNR","报修内容"],
        ["FZR","处理人"],
        ["LXDH","联系方式"],
        ["JDDJSJ","接单登记时间"],
        ["TZQXSJ","通知抢修时间"],
        ["JLDDSJ","到达现场时间"],
        ["JLXFSJ","记录修复时间"],
        ["YHBH","用户编号"],
        ["YHMC","用户名称"],
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
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
//      	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
		$('#pageBlock').hide();

//      if (!data){
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getbaoXiuDanDetial(dealBackDataList);//抢修情况明细查看(ajax接口请求)
}
/**
 * 全网状态(左侧)--报修单明细
 * @param {Object} callback
 */
function getbaoXiuDanDetial(callback){
	var url = basepath + "interface/BDZT_GETZTQX_LYMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661","ZDID":"-1","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"GZLX":"1","SFCL":"0","LY":"-1"};
	callgetajax(callback,url,param);
	
}
/**
 * 全网状态(左侧)--诉求单明细
 */
function suQiuDanShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showsuQiuDanCeList();
}
/**
 * 
 * 全网状态(左侧)--诉求单明细
 */
function showsuQiuDanCeList() {

    //工单编号、诉求级别、业务分类、诉求性质、受理时间、信息来源、当前状态、诉求内容
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["GDBH","工单编号"],
        ["JB","诉求级别"],
        ["FL","业务分类"],
        ["XZ","诉求性质"],
        ["SLSJ","受理时间"],
        ["LY","信息来源"],
        ["DQZT","当前状态"],
        ["NR","诉求内容"],
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
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
//      if (!data){
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getsuQiuDanDetial(dealBackDataList);//抢修情况明细查看(ajax接口请求)
}

function getsuQiuDanDetial(callback){
	var url = basepath + "interface/BDZT_GETSQGDMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661","SFCL":"1","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
	callgetajax(callback,url,param);
	
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
 * 
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网)
 * 1表示10KV 是配网的 
 * 2表示35KV及以上  是主网故障 
 * 不传表示所有的电压等级
 */
function showzhuPeiWangCeList(DYDJ) {

    //公司、跳闸设备、跳闸情况、故障设备、所属站线、电压等级、停电时间、送电时间、修复时间、抢修班组、是否确认
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
		["SSGDDWMC","公司"],
        ["TZSBMC","跳闸设备"],
        ["TZQKMC","跳闸情况"],
        ["GZSBMC","故障设备"],
        ["SYZXMC","所属站线"],
        ["DYDJMC","电压等级"],
        ["JDDJSJ","停电时间"],
        ["HFSDSJ","送电时间"],
        ["JLXFSJ","修复时间"],
        ["QXZDMC","抢修班组"],
        ["SFQR","是否确认"],
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
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
        if (data.length == 0){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getzhuPeiWangDetial(dealBackDataList,DYDJ);//抢修情况明细查看(ajax接口请求)
}

/**
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网)
 * @param {Object} callback
 * 1表示10KV 是配网的 
 * 2表示35KV及以上  是主网故障 
 * 不传表示所有的电压等级
 */
function getzhuPeiWangDetial(callback,DYDJ){
	var url = basepath + "bdGis/getGdfwbdztqwjkgzmx";
	var param = {"SSGS": "8a812897493378a00149567740676661","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"DYDJ":DYDJ};
	callgetajax(callback,url,param);
	
}
/**
 * 全网状态(左侧)--主网与配网的橙色数字明细(35kV及以上的主网 与 10KV)
 */
function ZpYiChangShow(DYDJ){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showYiChangCeList(DYDJ);
}
/**
 * 
 * 全网状态(左侧)--主网与配网的红色数字明细(35kV及以上的主网 与 10KV)
 */
function showYiChangCeList(DYDJ) {

    //异常分类、异常来源、所属站线、异常对象、对象类型、发生时间、异常值、异常描述、等级、设备主人
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
		["YCFL","异常分类"],
        ["YCLY","异常来源"],
        ["ZXMC","所属站线"],
        ["SBMC","异常对象"],
        ["SBLXMC","对象类型"],
        ["FSSJ","发生时间"],
        ["YCZ","异常值"],
        ["YCMS","异常描述"],
        ["YCDJ","等级"],
        ["SBZRMC","设备主人"],
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
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
         }
    
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
//     if (!data.data){
       if (true){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getYiChangDetial(dealBackDataList,DYDJ);//抢修情况明细查看(ajax接口请求)
}

/**
 * 全网状态(左侧)--主网与配网的橙色数字明细(35kV及以上的主网 与 10KV)
 * @param {Object} callback
 */
function getYiChangDetial(callback,DYDJ){
	var url = basepath + "interface/GDFW_BDZT_YC_QWYXJKMX/0";
	var param = {"SSGS": "8a812897493378a00149567740676661","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"DYDJ":DYDJ};
	callgetajax(callback,url,param);
	
}
/**
 * Created by john on 2018/9/8.
 */




//设置巡检任务
function setXunShiRenWu(value){
	$("#xunShiRenWu").html(value);
}
//设置异常处理
function setYiChangChuLi(value){
	$("#xunShiRenWu").html(value);
}
//设置紧急处理
function setJinJiChuLi(value){
	$("#xunShiRenWu").html(value);
}

//判断智慧保电异常状态
function getZHBDYC(){
	
	/*<input type="hidden" name="智慧保电一级用户异常数" id="YJYHYCS" value="0"/>
    <input type="hidden" name="智慧保电二级用户异常数" id="EJYHYCS" value="0"/>
    <input type="hidden" name="智慧保电示范区设备异常数" id="SFQSBYCS" value="0"/>*/
	/*var YJYHYCS=parseInt($("#YJYHYCS").value());
	var EJYHYCS=parseInt($("#EJYHYCS").value());
	var SFQSBYCS=parseInt($("#SFQSBYCS").value());
	*/
	if(YJYHYCS>0 || EJYHYCS>0 || SFQSBYCS>0){
		$("#zhihuibaodianStatus").html('异常');
		$("#zhihuibaodianStatusImg").addClass("yellow_alarm_color");
		
	}else{
		$("#zhihuibaodianStatus").html('正常');
		$("#zhihuibaodianStatusImg").removeClass("yellow_alarm_color");
	}
	
}

//获取抢修状态
function getQxztData(){
	    //http://10.131.216.134:7889/pdpsc-app/interface/GDFW_YJZT/0?YWDW=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06&RQ=2018-07-31
	var date=getCurrentDate();
	
    var param = {"YWDW": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06",RQ:date};
    $.ajax({
        url: basepath + "interface/GDFW_YJZT/0",
        data: param,
        type: 'get',
        dataType: 'json',
        success: function (res) {
            var num;
            if (res.data) {
            	var obj=res.data;
                for(var i=0;i<obj.length;i++){
                    if(obj.YJLX==1){
                    	$('#span_YJStatus').html(obj.YJZTMS);break;
                    }
                    if(obj.YJLX==2){
                    	$('#span_QXStatus').html(obj.YJZTMS);break;
                    }
                    if(obj.YJLX==3){
                    	$('#span_BDStatus').html(obj.YJZTMS)
                    }
                }
            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}

//获取当天日期，格式YYYY-MM-DD
function getCurrentDate(){
	var date = new Date();
	var sperator="-";
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	if(month >=1 && month<=9){
		month="0"+month;
	}
	if(day>=1 && day<=9){
		day="0"+day;
	}
	var currentDate=year+sperator+month+sperator+day;
	return currentDate;
}

//定位地图
function forwardMap(id){
	document.getElementById("iframe1").contentWindow.bddxFyl(id);
}

function setLvZhen(lv_value){
		if(lv_value<0){
			lv_value=0;
		}
		if(lv_value>130){
			lv_value=130
		}							
		$("#greenZhen").html(lv_value);
	$("#lv").rotate({animateTo:lv_value+230});
	
	var mt=360-1.7*lv_value;
	var mt1=mt+"px";
	
	if(lv_value>40 && lv_value<129){
		var t=lv_value-40
		var ml=-50+t;
		var ml1=ml+"px";
	  	$(".control_legend1").css("margin-top",mt1)
	  	$(".control_legend1").css("margin-left",ml1)
	}else if(lv_value>=129 & lv_value<=130){
	  	$(".control_legend1").css("margin-top",mt1)
	  	$(".control_legend1").css("margin-left","70px")
	}
	else{
	 	var ml=-10-lv_value;
		var ml1=ml+"px";
	  	$(".control_legend1").css("margin-top",mt1)
	  	$(".control_legend1").css("margin-left",ml1)
	}
}							
//业务指挥饼图指针
//紫针
function setZiZhen(value){
	var x,y;	
	var value1 = value;
	if(value<0){
		value=0;
	}
	if(value>130){
		value=130
	}
	if(value<=45){
		x=value;
	    y=150+0.6*value;
	}								
	if(value>45 && value<=60){
		y=150+value;
		x=1.4*value;
	}
	if(value>60 && value<90){
		y=150+1.2*value;
		x=1.4*value;
	}
	if(value==90){
		x=126
		y=280
	}
	if(value>90 && value<=100){
		x=126-(value-90);
		y=280+(value-90);
	}
	if(value>110 && value<=120){
		x=126-0.5*(value-90);
		y=280+1.2*(value-90);
	}
	if(value>120 && value<=130){
		x=126-0.5*(value-90);
		y=280+1.5*(value-90);
	}
	$(".control_legend2").css("margin-left",x);
	$(".control_legend2").css("margin-top",y);
	$("#zi").rotate({animateTo:value});
	$("#ziZhen").html(value1);
}

//橙针
function setChengZhen(value){
	var x,y;
	if(value<0){
		value=0
	}
	if(value>260){
		value=260
	}
	var jiaodu=value-130;								
	if (jiaodu>=-130 && jiaodu<-120) {
		x=100;
		y=370;
	}else if(jiaodu>=-120 && jiaodu<-110){
		x=80;
		y=345;
	}else if(jiaodu>=-110 && jiaodu<-100){
		x=70;
		y=315;
	}else if(jiaodu>=-100 && jiaodu<-90){
		x=60;
		y=305;
	}else if(jiaodu>=-90 && jiaodu<-80){
		x=60;
		y=275;
	}else if(jiaodu>=-80 && jiaodu<-70){
		x=70;
		y=255;
	}else if(jiaodu>=-70 && jiaodu<-60){
		x=80;
		y=245;
	}else if(jiaodu>=-60 && jiaodu<-50){
		x=85;
		y=235;
	}else if(jiaodu>=-50 && jiaodu<-40){
		x=90;
		y=215;
	}else if(jiaodu>=-40 && jiaodu<-30){
		x=100;
		y=200;
	}else if(jiaodu>=-30 && jiaodu<-20){
		x=115;
		y=180;
	}
	else if(jiaodu>=-20 && jiaodu<-10){
		x=135;
		y=160;
	}else if(jiaodu>=-10 && jiaodu<=0){
		x=180;
		y=150;
	}else if(jiaodu>0 && jiaodu<=30){
		x=180+1.4*jiaodu;
		y=150+0.6*jiaodu;
	}else if(jiaodu>30 && jiaodu<=60){
		x=180+1.8*jiaodu;
		y=150+jiaodu;
	}else if(jiaodu>60 && jiaodu<=90){
		x=180+1.45*jiaodu;
		y=150+1.4*jiaodu;
	}else if(jiaodu>90 && jiaodu<=120){
		x=310-1*(jiaodu-90);
		y=150+1.7*jiaodu;
	}else if(jiaodu>120 && jiaodu<=130){
		x=310-1*(jiaodu-90);
		y=150+1.7*jiaodu;
	}

	$(".control_legend3").css("margin-left",x);
	$(".control_legend3").css("margin-top",y);
	$("#cheng").rotate({animateTo:jiaodu});
	$("#chengZheng").html(value);
}

//红针
function setHongZhen(value){
	var x,y;
	if(value<0){
		value=0
	}
	if(value>260){
		value=260
	}
	var jiaodu=value-130;								
	if (jiaodu>=-130 && jiaodu<=-100) {
		x=280-value;
		y=360-1.2*value;
	}else if(jiaodu>-100 && jiaodu<=-85){
		x=280-0.8*value;
		y=360-1.8*value;
	}else if(jiaodu>-85 && jiaodu<=-55){
		x=244+0.8*(value-40);
		y=279-1.8*(value-40);
	}else if(jiaodu>-55 && jiaodu<=-25){
		x=244+0.8*(value-40);
		y=279-1.8*(value-40);
	}else if(jiaodu>-25 && jiaodu<0){
		x=244+1.1*(value-40);
		y=279-1.5*(value-40);
	}else if(jiaodu==0){
		x=360;
		y=151;
	}
	else if(jiaodu>0 && jiaodu<=30){
		x=360+1.6*jiaodu;
		y=151+0.6*jiaodu;
	}
	else if(jiaodu>30 && jiaodu<=60){
		x=360+1.8*jiaodu;
		y=151+1*jiaodu;
	}else if(jiaodu>60 && jiaodu<=90){
		x=360+1.5*jiaodu;
		y=151+1.6*jiaodu;
	}
	else if(jiaodu>90 && jiaodu<=120){
		x=495-1.1*(jiaodu-90);
		y=295+1.6*(jiaodu-90);
	}
	else if(jiaodu>120 && jiaodu<=130){
		x=495-1.0*(jiaodu-90);
		y=295+1.5*(jiaodu-90);
	}

	$(".control_legend4").css("margin-left",x);
	$(".control_legend4").css("margin-top",y);
	$("#hong").rotate({animateTo:jiaodu});
	$("#hongZheng").html(value);
}
		
