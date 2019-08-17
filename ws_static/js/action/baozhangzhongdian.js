var reqLoadSBIDs1 = [];var reqLoadSBIDs2 = [];
var liid = "";
var bdtodivmap = {
    "bd_1":["bd_level1","一级用户"],
    "bd_2":["bd_level2","二级用户"],
    "bd_3":["bd_level3","核心配电站"],
}
//保障重点
$(function () {
    loadBZZD();//初始化保障重点
});

var g_deptchangeThisPage="8a812897493378a00149567740676661";//只给智慧监控使用的全局公司id的变量
function loadBZZD() {
	
    doBaoDianObj("1",g_deptchangeThisPage);//获取一级保电信息列表
    setBaoDianObj("2",g_deptchangeThisPage);//获取二级保电信息列表
    setBaoDianObj("3",g_deptchangeThisPage);//获取示范区保电信息列表
    dealIntelliDev(g_deptchangeThisPage);
    //dealIntelliDevFuGaiDetail(g_deptchangeThisPage); 覆盖个数在智能感知设备统计中可以获取，不需要改接口
    bindclick_BZZD();
    bindclick_ZNGZ();
    setTimeout(function(){
      fuzailv('1');	
    },5000);
    
}

function bindclick_BZZD() {
	//点击保电任务下面的三个标签一级用户 二级用户 核心配电站触发的click事件
    $('.protectionPower>p').on('click',function () {
        var num=$(this).index();
        var isctive=$(this).is('.active_p');
        if (!isctive){
            $(this).addClass('active_p').siblings().removeClass('active_p');
            doBaoDianObj((num+1).toString(),g_deptchangeThisPage);
            if(num != 2){
            	 setTimeout(function(){
				      fuzailv((num+1).toString());
				    },5000);
            }
        }
    });
}

function bindclick_ZNGZ() {
    var lilist = $(".SmartDevice").find("li");
    var li0;
    for (var i=0;i<lilist.length;i++){
        li0 = $(lilist[i]);
        var img = li0.children(".smartTile").children("img");
        img.css({'cursor': 'pointer'});
        //状态图片，有异常看异常详情
        img.click(function () {
            var li0 = $(this).parent().parent('li');
            var RTU_ID = $(li0).attr("RTU_ID");
        });
    }
}

//处理重点保障echart
function dealEchart_por_equipment(por_equipment,option,seriesidx,dataidx, value,notmodifyname) {
    option.series[seriesidx].data[dataidx].value = value;
    // if (!notmodifyname) {
    //     option.series[seriesidx].data[dataidx].name = vaule.toString();
    // }
    por_equipment.setOption(option);
}

//保电设备统计
function doBaoZhangSheBeiCount(por_equipment,option,ssgs) {

//  doBianDian(por_equipment,option,ssgs);
//  doShuDianXL(por_equipment,option,ssgs);
//  doShuDianDL(por_equipment,option,ssgs);
//  doPeiDian(por_equipment,option,ssgs);
    getSheBeiTotalAndAbnorCount(por_equipment,option,ssgs);//四个专业的设备数与异常次数统计(ajax调后台接口返回后台接口数据)
    getSheBeiFaultCount(por_equipment,option,ssgs);//四个专业的故障次数统计(ajax调后台接口返回后台接口数据)
    por_equipment.on("click",clickEchart_por_equipment);
}

//
function doBianDian(por_equipment,option,ssgs) {

    getBianDianGuiMoData(dealGuiModata,"25,32,33,35","zf","zf",ssgs);
    //现在不用采用异常
    //getAbnormalCoutByZhuanYe(dealYiChangeCount,ssgs);

    function dealGuiModata(data) {
        if (!data.data){
            data.data = [];
        }
        var num_35kv = 0;
        var num_110kv = 0;
        var num_220kv = 0;
        var num_500kv = 0;
        var GZS = 0;
        var YCS = 0;

        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            if (rows[i].DYDJ ==="25"){
                num_35kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="32"){
                num_110kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="33"){
                num_220kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="35"){
                num_500kv += parseInt(rows[i].ZS);
            }
            GZS += parseInt(rows[i].GZS);
            YCS += parseInt(rows[i].YCS);
        }

        //异常故障都先默认为0，硬编码
        //GZS =0;
        //YCS = 0;
        dealEchart_por_equipment(por_equipment,option,0,0,num_500kv);
        dealEchart_por_equipment(por_equipment,option,0,1,num_220kv);
        dealEchart_por_equipment(por_equipment,option,0,2,num_110kv);
        dealEchart_por_equipment(por_equipment,option,0,3,num_35kv);
//      dealEchart_por_equipment(por_equipment,option,0,4,YCS);
//      dealEchart_por_equipment(por_equipment,option,0,5,GZS);
        $("#yichang1").text(YCS);
        $("#guzhang1").text(GZS);
    }

    function dealYiChangeCount(data) {

        if (!data.data){
            data.data = [];
        }
        var num = 0;
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            //交流110kV
            if (rows[i].LXMC==="变电"){
                num += parseInt(rows[i].SL);
            }
        }
        var pnum = $("#baozhangzhongdian_yichang_num").text();
        pnum = parseInt(pnum)+num;
        $("#baozhangzhongdian_yichang_num").text(pnum);
        dealEchart_por_equipment(por_equipment,option,0,4,num);
    }
}

function doShuDianXL(por_equipment,option,ssgs) {

    getShuDianGuiMoData(dealGuiModata,"25,32,33,35","xl","xl",ssgs);
    //getAbnormalCoutByZhuanYe(dealYiChangeCount,ssgs);

    function dealGuiModata(data) {
        if (!data.data){
            data.data = [];
        }
        var num_35kv = 0;
        var num_110kv = 0;
        var num_220kv = 0;
        var num_500kv = 0;
        var GZS = 0;
        var YCS = 0;

        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            if (rows[i].DYDJ ==="25"){
                num_35kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="32"){
                num_110kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="33"){
                num_220kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="35"){
                num_500kv += parseInt(rows[i].ZS);
            }
            GZS += parseInt(rows[i].GZS);
            YCS += parseInt(rows[i].YCS);
        }
        //异常故障都先默认为0，硬编码
        //GZS =0;
        //YCS = 0;
        dealEchart_por_equipment(por_equipment,option,1,0,num_500kv);
        dealEchart_por_equipment(por_equipment,option,1,1,num_220kv);
        dealEchart_por_equipment(por_equipment,option,1,2,num_110kv);
        dealEchart_por_equipment(por_equipment,option,1,3,num_35kv);
//      dealEchart_por_equipment(por_equipment,option,1,4,YCS);
//      dealEchart_por_equipment(por_equipment,option,1,5,GZS);
        $("#yichang1").text(YCS);
        $("#guzhang1").text(GZS);
    }
    
    function dealYiChangeCount(data) {
        if (!data.data){
            data.data = [];
        }
        var num = 0;
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            //交流110kV
            if (rows[i].LXMC==="输电"){
                num += parseInt(rows[i].SL);
            }
        }
        var pnum = $("#baozhangzhongdian_yichang_num").text();
        pnum = parseInt(pnum)+num;
        $("#baozhangzhongdian_yichang_num").text(pnum);
        dealEchart_por_equipment(por_equipment,option,1,4,num);
    }
}

function doShuDianDL(por_equipment,option,ssgs) {


    //http://10.131.216.134:7889/pdpsc-app/interface/BDZT_SDGMTJ/0?SSGS=8a812897493378a00149567740676661&DYDJ=08,22,25,32,33,35&SBLX=xl&SBZLX=xndl

    getShuDianGuiMoData(dealGuiModata,"08,22,25,32,33,35","xl","xndl",'-1',ssgs);
    //getAbnormalCoutByZhuanYe(dealYiChangeCount,ssgs);

    function dealGuiModata(data) {
        if (!data.data){
            data.data = [];
        }
        var num_35kv = 0;
        var num_110kv = 0;
        var num_220kv = 0;
        var num_500kv = 0;
        var GZS = 0;
        var YCS = 0;

        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            if (rows[i].DYDJ ==="25"){
                num_35kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="32"){
                num_110kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="33"){
                num_220kv += parseInt(rows[i].ZS);
            } else if (rows[i].DYDJ ==="35"){
                num_500kv += parseInt(rows[i].ZS);
            }
            GZS += parseInt(rows[i].GZS);
            YCS += parseInt(rows[i].YCS);
        }
        //异常故障都先默认为0，硬编码
        //GZS =0;
        //YCS = 0;
        dealEchart_por_equipment(por_equipment,option,2,0,num_500kv);
        dealEchart_por_equipment(por_equipment,option,2,1,num_220kv);
        dealEchart_por_equipment(por_equipment,option,2,2,num_110kv);
        dealEchart_por_equipment(por_equipment,option,2,3,num_35kv);
//      dealEchart_por_equipment(por_equipment,option,2,4,YCS);
//      dealEchart_por_equipment(por_equipment,option,2,5,GZS);
        $("#yichang1").text(YCS);
        $("#guzhang1").text(GZS);
    }

    function dealYiChangeCount(data) {

        if (!data.data){
            data.data = [];
        }
        var num = 0;
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            //交流110kV
            if (rows[i].LXMC==="输电"){
                num += parseInt(rows[i].SL);
            }
        }
        var pnum = $("#baozhangzhongdian_yichang_num").text();
        pnum = parseInt(pnum)+num;
        $("#baozhangzhongdian_yichang_num").text(pnum);
        dealEchart_por_equipment(por_equipment,option,2,4,num);
    }
}
function doPeiDian(por_equipment,option,ssgs) {

    getPeiDianGuiMoData(dealGuiModatafun(2),"08,22,25,32,33","zf","zf04",ssgs);//开关站
    getPeiDianGuiMoData(dealGuiModatafun(0),"08,22,25,32,33","zf","zf06",ssgs);//配电站
    getPeiDianGuiMoData(dealGuiModatafun(1),"08,22,25,32,33","zf","zf10",ssgs);//用户站
    //getAbnormalCoutByZhuanYe(dealYiChangeCount,ssgs);

    function dealGuiModatafun(dataindex) {
        return function (data) {
            dealGuiModata(data,dataindex);
        }
    };

    function dealGuiModata(data,dataindex) {
        if (!data.data){
            data.data = [];
        }
        var num = 0;
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            num += parseInt(rows[i].ZS);
        }
        dealEchart_por_equipment(por_equipment,option,3,dataindex,num,true);
        //dealEchart_por_equipment(por_equipment,option,3,1,num);
    }

    function dealYiChangeCount(data) {

        if (!data.data){
            data.data = [];
        }
        var num = 0;
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            //交流110kV
            if (rows[i].LXMC==="配电"){
                num += parseInt(rows[i].SL);
            }
        }
        var pnum = $("#baozhangzhongdian_yichang_num").text();
        pnum = parseInt(pnum)+num;
        $("#baozhangzhongdian_yichang_num").text(pnum);
        dealEchart_por_equipment(por_equipment,option,3,2,num);
    }
}

function setBaoDianObj(BDDXJB,ssgs) {
    //默认值
//  ssgs="8a812897493378a00149567740676661";
    getBDObjDetailData(dealdata,null,BDDXJB,ssgs);//ajax请求后台接口:获取保电对象详细信息

    function dealdata(data) {
        var bddivobj = bdtodivmap["bd_"+BDDXJB]
        $("#"+bddivobj[0]).text(bddivobj[1]+"（"+0+ "）");
        if (!data.data || data.data.length == 0){
            return;
        }
        var rows = data.data;
        $("#"+bddivobj[0]).text(bddivobj[1]+"（"+rows.length+ "）");

    }
}

//保电对象
//BDDXJB null or 1 or 2 or 3
function doBaoDianObj(BDDXJB,ssgs) {

    //默认值
    var randnum = Math.floor(Math.random()*1000000+1);

    var ulid = "baodianljtable";
    liid = ulid+"_li_"+randnum;
    reCreateul(ulid,liid);//在id为ulid的ul标签下面:①先清空所有内部的li标签，然后添加一个id为liid的li标签
    getBDObjDetailData(dealdata,null,BDDXJB,ssgs);//ajax请求后台接口:获取保电对象详细信息

    function dealdata(data) {
        if (!data.data || data.data.length == 0){
            return;
        }
        var rows = data.data;
        var realrows = [];
        for (var  i=0; i<rows.length;i++){
            var row = rows[i];
            if (!BDDXJB) {
                realrows.push(row);
            } else if (row.BDDXJB === BDDXJB) {
                realrows.push(row);
            }
        }
        console.log(BDDXJB)
        var bddivobj = bdtodivmap["bd_"+BDDXJB]
        $("#"+bddivobj[0]).text(bddivobj[1]+"（"+realrows.length+ "）");//一级保电 二级保电 示范区保电 标签及旁边的数量

        genMutliBaodianLJInfo(realrows,ssgs,BDDXJB,ulid,liid);

    }
}

function genMutliBaodianLJInfo(realrows,ssgs,BDDXJB,ulid,liid) {

    //var BaoDianObjLJs = [];
//  var reqLoadSBIDs = [];
    for (var  i=0; i<realrows.length;i++){
        var row = realrows[i];
        doBaodianLJInfo(addOneliInul,row.ID,row.MC,ssgs,BDDXJB,ulid,liid,i)
    }
}

function doBaodianLJInfo(addOneliInul_fun,BDDXID,BDDXMC,ssgs,BDDXJB,ulid,liid,idx) {

    getBaoDianPath(dealdata,BDDXID,ssgs);//ajax请求后台接口:获取保电路径信息

    var BaoDianObjLJ = {
        "BDDXID":BDDXID,
        "BDDXMC" :BDDXMC,
        "TITLE" :["名称","类型", "电压等级","负载率"],
        "ZT" : -1,
        "BDSBS" :[],
    }
    function dealdata(data) {
        if (!data.data || data.data.length == 0){
//          return;//只加载保电对象(接入点与保电路径为空的情况下仍能加载保电对象)
            BaoDianObjLJ.ZT = 0;
        }
//      var reqLoadSBIDs = [];//请求负载率
        var rows = data.data;
        var BDSB;
        var BDSBID ;
        var SBID;
        var HasFZL = false;

        for (var i=0;i<rows.length;i++){
            var row = rows[i];
//         console.log("***************************>>>>>>>"+console.log(row.SBLXMC));
            BDSB = BaoDianObjLJ.BDSBS.find(function (item) {
                return item.SBID === row.BDSBID;
            })
            if (BaoDianObjLJ.ZT < 0) {
                BaoDianObjLJ.ZT = row.BDDXZT;
            }
            HasFZL = false;
            if (row.SBLXMC==="变电站") {
                HasFZL = true;
                if(BDDXJB == '1' && reqLoadSBIDs1.length < 52){
                	reqLoadSBIDs1.push(row.SBID);
                } else if(BDDXJB == '2' && reqLoadSBIDs2.length < 155){
                	reqLoadSBIDs2.push(row.SBID);
                }
                
            }
            var realobj = {
                "SBID" : row.SBID,
                "SBMC" : row.SBMC,
                "SBLX" : row.SBLX, //（1 电站、500 线路）
                "DYDJ" : row.DYDJ,
                "EDRL":row.EDRL,
                "HasFZL":HasFZL,
                "ZT" : row.ZT,
            }
            if (!BDSB) {
                BDSB = {
                    "SBID" : row.BDSBID,
                    "SBMC" : row.BDSBMC,
                    "SBLX" : (BDDXJB==="3")?"站点":"用户接入点",
                    "DYDJ" : row.DYDJ,
                    "ZT" : row.BDSBZT,
                    "SBS" : [
                        realobj,
                    ],
                };
                BaoDianObjLJ.BDSBS.push(BDSB);
            } else {
                BDSB.SBS.push(realobj);
            }
        }

        addOneliInul_fun(ulid,liid,BaoDianObjLJ,idx,BDDXJB);

       
//      return;
    }
}

function fuzailv(BDDXJB){
	if(BDDXJB == '1'){
		 if (reqLoadSBIDs1.length == 0){
            return;
       }
      for(var i = 0;i < reqLoadSBIDs1.length;i++){
      	var sbid = reqLoadSBIDs1[i];
      	getZhuBianSbid(dealdata,sbid);//ajax回调函数传参:传sbid到回调函数dealdata里面
      	console.log("*********sbid" +sbid);
      	function dealdata(data,SbId){
      		if(data.data){
      			var rows = data.data;
      			var reqZhuBianSBIDs1 = [];
      			for(i = 0;i < rows.length;i++){
      				reqZhuBianSBIDs1.push(rows[i].SBID);
      			}
      			var sbids = reqZhuBianSBIDs1.join(",");
      			getRealTimeLoadData(dealdata1,sbids,SbId);//ajax回调函数传参:传SbId到回调函数dealdata里面
      			function dealdata1(data,SbId){
      				var rates = "";
      				if(data.data && data.data.length != 0){
      					for(i = 0;i < rows.length;i++){
			  				var edrl = parseFloat(rows[i].EDRL);
			  				 var rate = "0%";
			  				if (edrl > 0){
		                        rate = parseFloat(parseInt(data.data[0].VALUE)*100/(edrl*1000*1000)).toFixed(1);
		//                      rate = rate+"%";
		                        if(rate == "NaN"){
		                        	rate = "--";
		                        } else{
		                        	rate >100? rate = "1%": rate = rate+"%";
		                        }
		                          rates += rate + ",";
		                    }
			  			}
      					if(rates.length > 0){
      						rates = rates.substr(0,rates.length - 1);
      					}
//    					console.log("*********SbId" +SbId);
      					$("#"+liid+"_"+SbId).text(rates);
      				}
      			}
      		}
      	}
      }
		
	} else if(BDDXJB == '2'){
		 if (reqLoadSBIDs2.length == 0){
            return;
       }
       for(var i = 0;i < reqLoadSBIDs2.length;i++){
       	var sbid = reqLoadSBIDs1[i];
      	getZhuBianSbid(dealdata,sbid);//ajax回调函数传参:传sbid到回调函数dealdata里面
      	console.log("*********sbid" +sbid);
      	function dealdata(data,SbId){
      		if(data.data){
      			var rows = data.data;
      			var reqZhuBianSBIDs2 = [];
      			for(i = 0;i < rows.length;i++){
      				reqZhuBianSBIDs2.push(rows[i].SBID);
      			}
      			var sbids = reqZhuBianSBIDs2.join(",");
      			getRealTimeLoadData(dealdata1,sbids,SbId);//ajax回调函数传参:传SbId到回调函数dealdata里面
      			function dealdata1(data){
      				var rates = "";
      				if(data.data && data.data.length != 0){
      					for(i = 0;i < rows.length;i++){
			  				var edrl = parseFloat(rows[i].EDRL);
			  				 var rate = "0%";
			  				if (edrl > 0){
		                        rate = parseFloat(parseInt(data.data[0].VALUE)*100/(edrl*1000*1000)).toFixed(1);
		//                      rate = rate+"%";
		                        if(rate == "NaN"){
		                        	rate = "--";
		                        } else{
		                        	rate >100? rate = "1%": rate = rate+"%";
		                        }
		                          rates += rate + ",";
		                    }
			  			}
      					if(rates.length > 0){
      						rates = rates.substr(0,rates.length - 1);
      					}
      					console.log("*********SbId" +SbId);
      					$("#"+liid+"_"+SbId).text(rates);
      				}
      			}
      		}
      	}
      }
	}
        
}

//电压等级、名称、类型（变电站）、所属单位、设备主人、联系方式
function showBianDianList(DYDJ,ZT,SBLX,SBZLX, ssgs) {
    var parentComId = "FourUl";

    var titleList = [
        ["SBID",""],
        ["DYDJMC","电压等级"],
        ["SBMC","名称"],
        ["SBLXMC","类型"],
        ["SSGS","所属单位"],
        ["SBZR","设备主人"],
        //["LXFS","联系方式"],
    ];

    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    function inJumpMap(id,row) {
        //线路 电缆
        if (SBZLX === "xl" || SBZLX === "xndl") {
            fly2Equip(id);
        }
        //电站还没办法定位
        return;
        if (DYDJ === DYDJ2ValueMap["10kV"]) {
            JumpMap(row.OID,lxtomapMap["10kV_DZ"])
        }else if (DYDJ === DYDJ2ValueMap["35kV"] || DYDJ === DYDJ2ValueMap["110kV"] || DYDJ === DYDJ2ValueMap["220kV"]) {
            JumpMap(row.OID,lxtomapMap["35kV_DZ"])
        }else if (DYDJ === DYDJ2ValueMap["500kV"]) {
            JumpMap(row.OID,lxtomapMap["500kV_DZ"])
        }
    }
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="所属单位") {
                value = SSGSMAP_ID[value]|| DEFAULT_DETAIL_EMPTY_TEXT;
            } else if (titleList[i][1] ==="..."){
                value = "...";
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        console.log(rows)
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }

    getGuiMoDetail(dealdata,DYDJ,ZT,SBLX,SBZLX,ssgs);
}

//获取设备实时电力负荷
function getDevRealTimeLoad(callback,SBIDs) {

    getRealTimeLoadData(dealdata,SBIDs);
// getTransRealTimeLoadData(dealdata,SBID);

    function dealdata(data) {


        if  (data.data.length > 0) {
            var resultsets = [];
            var rows = data.data;
            for (var i=0;i<rows.length;i++){
                var row = rows[i];
                resultsets.push({
                    SBID : row.SBID,
                    VALUE :row.VALUE,
                });
            }
            callback(resultsets);
        }
    }
}
function clickEchart_por_equipment(param) {

    if (param.componentType !== "series"){
        return;
    }
    var seriesIndex = parseInt(param.seriesIndex);
    var dataIndex = parseInt(param.dataIndex);
    var name = param.name;
    console.log("seriesIndex: " + seriesIndex + " dataIndex: " + dataIndex + " name: " + name);
    switch(dataIndex){
    //变电站 : zf01 线路 : xl 电缆 : xndl 配电室 : zf06 开关站 : zf04
	case 0://变电
		var sbzlx = "zf01";
	    break;
	case 1://线路
		var sbzlx = "xl";
	    break;
	case 2://电缆
	    var sbzlx = "xndl";
	    break;
	case 3://配电
	     switch(seriesIndex){
				case 7://开关站
					var sbzlx = "zf04";
				    break;
				case 8://配电站
					var sbzlx = "zf06";
				    break;
				case 9://箱变(暂时没有)
				    var sbzlx = "xxx";
				    break;
			}
	    break;
    }
    
    switch(seriesIndex){
	case 0://500KV
		var dydj = "35";
	    break;
	case 1://220kV
		var dydj = "33";
	    break;
	case 2://110kV
	    var dydj = "32";
	    break;
	case 3://35kV
		var dydj = "25";
	    break;
    }
    if(dataIndex == 3){
    	dydj = "-1";
    }
   if(seriesIndex == 0 || seriesIndex == 1 || seriesIndex == 2 ||seriesIndex == 3 ||seriesIndex == 7 ||seriesIndex == 8 ||seriesIndex == 9){
   	sheBeiShow(dydj,sbzlx,name);
   }
   if(seriesIndex == 5 || seriesIndex == 11){
   		dydj = "-1";
   	gZShow(dydj,sbzlx,name);
   }
   if(seriesIndex == 6 || seriesIndex == 12){
   	dydj = "-1";
   	yCShow(dydj,sbzlx,name);
   }
//  var dydj;
//  var zt;
//  var sbzlx;
//  if (seriesIndex === 3) {
//      if (name === "开关站"){
//          sbzlx = "zf04";
//      } else if (name === "配电站"){
//          sbzlx = "zf06";
//      } else {
//          sbzlx = "zf10";
//      }
//  } else {
//      if (name === "异常"){
//          zt = "1";
//      } else if (name === "故障"){
//          zt = "2";
//      } else {
//          var dydjmc = name.substr(2);
//          dydj = DYDJ2ValueMap[dydjmc];
//      }
//  }

//  if (seriesIndex === 0){
//      showBianDianList(dydj,zt,"zf","zf",g_deptchangeThisPage);
//  } else if(seriesIndex === 1) {
//      showBianDianList(dydj,zt,"xl","xl",g_deptchangeThisPage);
//  } else if(seriesIndex === 2) {
//      showBianDianList(dydj,zt,"xl","xndl",g_deptchangeThisPage);
//  } else {
//      showBianDianList(null,null,"zf",sbzlx,g_deptchangeThisPage);
//  }
}

//变电站辅控、机器人、配电站辅控、智能锁、视频监视=>电站明细
//电站名称、电压等级、所属单位、运维班组、电站类型、投运日期、站址、专业分类、设备主人
var titleList_DZ = [
    ["GZSBBH",""],
    ["SBMC","电站名称"],
    ["DYDJMC","电压等级"],
    ["SSGSMC","所属单位"],
    ["WHBZMC","运维班组"],
    ["SBLXMC","电站类型"],
    ["TYRQ","投运日期"],
    ["ZZ","站址"],
    ["ZYFL","专业分类"],
    ["SBZR","设备主人"],
];

//通道监拍=>架空线路
//名称、电压等级、所属单位、运维班组、架设方式、线路长度、投运日期、起点电站、终点电站、设备主人、专业分类
var titleList_JKXL = [
    ["GZSBBH",""],
    ["SBMC","名称"],
    ["DYDJMC","电压等级"],
    ["SSGSMC","所属单位"],
    ["WHBZMC","运维班组"],
    ["SBLXMC","架设方式"],
    ["XLZCD","线路长度"],
    ["TYRQ","投运日期"],
    ["QSDZ","起点电站"],
    ["ZZDZ","终点电站"],
    ["SBZR","设备主人"],
    ["ZYFL","专业分类"],
];

//电缆振动、智能井盖=>电缆
//名称、电压等级、所属单位、运维班组、架设方式、线路长度、投运日期、起点电站、终点电站、设备主人、专业分类
var titleList_DL = [
    ["GZSBBH",""],
    ["SBMC","名称"],
    ["DYDJMC","电压等级"],
    ["SSGSMC","所属单位"],
    ["WHBZMC","运维班组"],
    ["SBLXMC","架设方式"],
    ["XLZCD","线路长度"],
    ["TYRQ","投运日期"],
    ["QSDZ","起点电站"],
    ["ZZDZ","终点电站"],
    ["SBZR","设备主人"],
    ["ZYFL","专业分类"],
];
//0.4kV低压监测=>变压器
//变压器名称、额定容量、所属站线、所属单位、运维班组
var titleList_BYQ = [
    ["GZSBBH",""],
    ["SBMC","变压器名称"],
    ["EDRL","额定容量"],
    ["ZXMC","所属站线"],
    ["SSGSMC","所属单位"],
    ["WHBZMC","运维班组"],

    //SBLX设备类型、SBID设备ID、SBMC设备名称、SSGSMC所属公司、WHBZ运维班组、LXFS联系方式
];


//key 为html上的文字
    var IntelliDevHtml2DataMap = {
    "变电站辅控": {RTU_ID : "603",RTU_NAME:"变电站综合监测系统（辅控）",hasCD :false,titlelist:titleList_DZ,detailtitle:"电站",ycfun:showBDZFKAbnormalList},
    "机器人": {RTU_ID : "602",RTU_NAME:"变电站机器人巡检系统",hasCD :false,titlelist:titleList_DZ,detailtitle:"电站",ycfun:showRobotAbnormalList},
    "视频监视": {RTU_ID : "601",RTU_NAME:"生产视频监控（遥视）系统",hasCD :false,titlelist:titleList_DZ,detailtitle:"电站",ycfun:null},
    "通道监拍": {RTU_ID : "604",RTU_NAME:"输电线路通道可视化智慧型监拍系统",hasCD :false,titlelist:titleList_JKXL,detailtitle:"架空线路",ycfun:showTDJPAbnormalList},
    "智能锁": {RTU_ID : "610",RTU_NAME:"智能锁",hasCD :false,titlelist:titleList_DZ,detailtitle:"电站",ycfun:null},
    //"智能表计": {RTU_ID : "617",RTU_NAME:"智能表计",hasCD :false,titlelist:titleList_BYQ,detailtitle:"变压器",ycfun:showZNBJAbnormalList},
    "智能表计": {RTU_ID : "617",RTU_NAME:"智能表计",hasCD :false,titlelist:titleList_BYQ,detailtitle:"变压器",ycfun:null},
    "配电站辅控": {RTU_ID : "613",RTU_NAME:"配电站综合监测系统（辅控）",hasCD :false,titlelist:titleList_DZ,detailtitle:"电站",ycfun:null},
    "电缆振动": {RTU_ID : "614",RTU_NAME:"电缆振动",hasCD :true,titlelist:titleList_DL,detailtitle:"电缆",ycfun:null},
    "智能井盖": {RTU_ID : "615",RTU_NAME:"智能井盖",hasCD :true,titlelist:titleList_DL,detailtitle:"电缆",ycfun:showZNJGAbnormalList},
    "0.4kV低压监测": {RTU_ID : "616",RTU_NAME:"0.4kV低压监测",hasCD :false,titlelist:titleList_BYQ,detailtitle:"变压器",ycfun:null},
    // "无人机": {RTU_ID : "618",RTU_NAME:"无人机",hasCD :false,titlelist:null,detailtitle:"无人机",ycfun:null},
}

//智能感知SmartDevice，设备数量
function dealIntelliDev(ssgs) {

    getIntelliDevCount(dealdata,null,ssgs);

    function dealdata(data) {
        var resultset = {};
        if (!data.data){
            data.data = [];
        }

        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row =rows[i];
            var obj = resultset[row.RTU_ID];
            if (!obj) {
                obj = {RTU_ID:row.RTU_ID,ZZSL:0,JCSBSL:0,ZCD:0};
                resultset[row.RTU_ID] = obj;
            }
            obj.ZZSL += parseInt(row.ZZSL) || 0;  //设备状态绿点后的设备数量
            obj.JCSBSL += parseInt(row.JCSBSL) || 0;
            obj.ZCD += parseFloat(row.ZCD) || 0;
            obj.ZT = row.ZT; //状态 0正常、1状态异常、2环境异常
        }
        dealhtml(resultset);
    }

    function dealhtml(resultset) {

        var ZT2ImgMap = {
            "0":"warning_01.png",//正常
            "1":"warning_01.png",//异常  "1":"warning_02.png",
            "2":"warning_01.png",//环境异常  "2":"warning_02.png",
        }

        var lilist = $(".SmartDevice").find("li");

        var li0;
        var RTU_ID;
        for (var i=0;i<lilist.length;i++){
            li0 = $(lilist[i]);
            var p0 = li0.children(".smartBody").children("p");
            var span_allnum = li0.children(".smartTile").children("span");
            var img_status = li0.children(".smartTile").children("img");
            var span_fgnum = li0.children(".smartNum").find(".num");
            var span_cdnum = li0.children(".smartNum").find(".cd");
            var div_fg = li0.children(".smartNum");

            var text = p0.text();

            if (IntelliDevHtml2DataMap[text]){
                RTU_ID = IntelliDevHtml2DataMap[text].RTU_ID;
                li0.attr("RTU_ID",RTU_ID);
                var allnum = 0;
                var status = "0";
                var fgnum = 0;
                var cdnum = 0;
                if (resultset[RTU_ID]){
                    allnum = resultset[RTU_ID].ZZSL;
                    status = resultset[RTU_ID].ZT || status;
                    fgnum = resultset[RTU_ID].JCSBSL;
                    cdnum = resultset[RTU_ID].ZCD;
                }

                //状态图标
                $(span_allnum).text(allnum);
                $(img_status).attr("src",basepath +'ws_static/img/'+ZT2ImgMap[status]);

                //状态点击事件
                bindZTclick(img_status,text);

                $(img_status).text(allnum);
                $(span_fgnum).text(fgnum);
                if (span_cdnum && span_cdnum.length >0) {
                    $(span_cdnum).text(cdnum);
                }

                //覆盖详情 点击
                if (span_fgnum.length >0) {
                    bindFGclick(div_fg,text);
                } else { //无人机
                    bindFGclick(li0.children(".smartBody"),text);
                }
            }

        }
    }

    //状态点击事件，查看异常信息
    function bindZTclick(img,text) {
        var RTU_ID;
        var rows;
        var ycfun;
        if (IntelliDevHtml2DataMap[text]) {
            img.css({'cursor': 'pointer'});
            RTU_ID = IntelliDevHtml2DataMap[text].RTU_ID;
            ycfun = IntelliDevHtml2DataMap[text].ycfun;
            img.click(function () {
                if (ycfun){
                    ycfun(g_deptchangeThisPage);
                }
            });
        }
    }

    //覆盖数量点击事件，无人机单独接口
    function bindFGclick(div3_p,text) {
        var RTU_ID;
        var rows;
        if (IntelliDevHtml2DataMap[text]){
            div3_p.css({'cursor': 'pointer'});
            RTU_ID = IntelliDevHtml2DataMap[text].RTU_ID;

            if (text==="无人机") {
                div3_p.click(function () {
                    ChooseShow("KHFW");
                    $('#qiangdan_title').text(IntelliDevHtml2DataMap[text].detailtitle);
                    showWRJDetailList(g_deptchangeThisPage,null);
                });
            }else if(text==="智能表计"){      //点击智能表计查看明细
                div3_p.click(function () {
                    ChooseShow("KHFW");
                    $('#qiangdan_title').text(IntelliDevHtml2DataMap[text].detailtitle);
//                  showZNBJFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                    showIntelliDevFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                });
            }else {
                div3_p.click(function () {   //点击其他的智能装置查看明细
                    ChooseShow("KHFW");
                    $('#qiangdan_title').text(IntelliDevHtml2DataMap[text].detailtitle);
                    showIntelliDevFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                });
            }
        }
    }
}

//覆盖情况个数查询
function dealIntelliDevFuGaiDetail(ssgs) {
    getIntelliDevDetail(dealdata,null,ssgs);

    function dealdata(data) {
        var resultset = {};
        if (!data.data){
            data.data = [];
        }

        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row =rows[i];
            var obj = resultset[row.RTU_ID];
            if (!obj) {
                obj = {rows:[]};
                resultset[row.RTU_ID] = obj;
            }
            obj.rows.push(row);
        }
        dealhtml(resultset);
    }

    function dealhtml(resultset) {
        var lilist = $(".SmartDevice").find("li");

        var li0;
        var RTU_ID;
        var rows;
        for (var i=0;i<lilist.length;i++){
            li0 = $(lilist[i]);
            var p0 = li0.children(".smartBody").children("p");
            var div3_p = li0.children(".smartNum").children("p");
            var text = p0.text();
            bindFGclick(div3_p,text,resultset);
            //修改div3_p的文本，覆盖数量
        }
    }

    //覆盖数量点击事件，无人机单独接口
    function bindFGclick(div3_p,text,resultset) {
        var RTU_ID;
        var rows;
        if (IntelliDevHtml2DataMap[text]){
            div3_p.css({'cursor': 'pointer'});
            RTU_ID = IntelliDevHtml2DataMap[text].RTU_ID;
            if (resultset[RTU_ID]) {
                rows = resultset[RTU_ID].rows;
            }


            if (text==="无人机") {
                div3_p.click(function () {
                    ChooseShow("KHFW");
                    $('#qiangdan_title').text(IntelliDevHtml2DataMap[text].detailtitle);
                    showWRJDetailList(g_deptchangeThisPage,null);
                });
            } else {
                div3_p.click(function () {
                    ChooseShow("KHFW");
                    $('#qiangdan_title').text(IntelliDevHtml2DataMap[text].detailtitle);
                    showIntelliDevFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                });
            }
        }
    }
}

//智能感知SmartDevice，覆盖详细情况查询
function showIntelliDevFuGaiDetailList(rows,titleList,RTU_ID,ssgs) {

    var parentComId = "FourUl";

    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
    ];

    if (rows){
        dealdata({data:rows});
    } else {
        getIntelliDevDetail(dealdata,RTU_ID,ssgs);
    }

    function inJumpMap(id,row) {
        fly2Equip(row["SBID"]);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        rows.sort(sortDydj);
        console.log(rows);
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
}
/**
 * 按照电压等级排序 按照返回对象数组rows的元素的DYDJ属性大小(字符串按照数值比较)升序排列
 * @param {Object} a
 * @param {Object} b
 */
function sortDydj(a,b){

	return a.DYDJ-b.DYDJ;
	
	}
/**
 * 显示智能表计覆盖详细列表
 * @param rows
 * @param titleList
 * @param RTU_ID
 * @param ssgs
 */
function showZNBJFuGaiDetailList(rows,titleList,RTU_ID,ssgs) {

    var parentComId = "FourUl";

    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
    ];

    if (rows){
        dealdata({data:rows});
    } else {
        getZNBJliDevDetail(dealdata,RTU_ID,ssgs);
    }

    function inJumpMap(id,row) {
        fly2Equip(id);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
}


//智能感知SmartDevice，异常情况查询
function showIntelliDevAbnormalList(startfun,RTU_ID,title,ssgs) {

    ChooseShow("KHFW");
    $('#qiangdan_title').text(title);
    //异常类型（设备、环境、安防）、对象、对象类型（设备或仓位、位置）、发生时间、异常值、异常描述、任务状态（未下达、已下达、已到达、已处理）、处理班组、联系方式
    var parentComId = ulmap.KHFW;

    var titleList = [
        ["SBID",""],
        ["JCLXMC","异常类型"],
        ["SBMC","对象"],
        ["SBLX","对象类型"],
        ["GJSJ","发生时间"],
        ["JCZ","异常值"],
        ["GJMS","异常描述"],
        ["RWZT","任务状态"],
        ["WHBZMC","处理班组"],
        //"LXFS","联系方式"],
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
    ];

    startfun(dealdata,null,ssgs);

    function inJumpMap(id,row) {
        return ;
        var locallayer = row.TASK_TYPE_NAME==="异常处理" ? lxtomapMap.YCRW :lxtomapMap.JJRW;
        JumpMap(row.ID,locallayer);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
//      if (!data.data){
	    if (true){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
}

//智能感知-智能表计，异常情况查询
function showIntelliZnbjAbnormalList(startfun,RTU_ID,title,ssgs) {

    ChooseShow("KHFW");
    $('#qiangdan_title').text(title);
    //异常类型（设备、环境、安防）、对象、对象类型（设备或仓位、位置）、发生时间、异常值、异常描述、任务状态（未下达、已下达、已到达、已处理）、处理班组、联系方式
    var parentComId = ulmap.KHFW;

    var titleList = [
        ["SBID",""],
        ["SBLXMC","异常类型"],
        ["SBMC","对象"],
        ["SBLX","对象类型"],
        ["GJSJ","发生时间"],
        ["JCZ","异常值"],
        ["GJMS","异常描述"],
        ["ZTMC","任务状态"],
        ["WHBZ","处理班组"],
        //"LXFS","联系方式"],
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
    ];

    startfun(dealdata,null,ssgs);

    function inJumpMap(id,row) {
        return ;
        var locallayer = row.TASK_TYPE_NAME==="异常处理" ? lxtomapMap.YCRW :lxtomapMap.JJRW;
        JumpMap(row.ID,locallayer);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
//      if (!data.data){
	    if (true){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
}


//通道监拍异常
function showTDJPAbnormalList(ssgs) {

    showIntelliDevAbnormalList(getTDJPAbnormalDetail,null,"通道监拍",ssgs);
}

//机器人异常明细
function showRobotAbnormalList(ssgs) {

    showIntelliDevAbnormalList(getRobotAbnormalDetail,null,"机器人",ssgs);
}

//变电站辅控异常明细
function showBDZFKAbnormalList(ssgs) {

    showIntelliDevAbnormalList(getFuKongAbnormalDetail,null,"变电站辅控",ssgs);
}

//智能表计异常
function showZNBJAbnormalList(ssgs) {
    showIntelliZnbjAbnormalList(getZNBJAbnormalDetail,null,"智能表计",ssgs);

}

//获取智能井盖告警情况
function showZNJGAbnormalList(ssgs) {

    var parentComId = "FourUl";

    var titleList = [
        ["DEVICE_ID",""],
        ["DEVICE_ID","井盖"],
        ["ALARM_TYPE","告警类型"],
        ["ALARM_CONTENT","告警内容"],
        ["ALARM_TIME","告警时间"],
        ["RWZT","任务状态"],
        ["WHBZMC","处理班组"],
        //["LXFS","联系方式"],
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
    ];

    getZNJGAbnormalDetail(dealdata,null,null);

    function inJumpMap(id,row) {
        return ;
        var locallayer = row.TASK_TYPE_NAME==="异常处理" ? lxtomapMap.YCRW :lxtomapMap.JJRW;
        JumpMap(row.ID,locallayer);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
}

//无人机详情
function showWRJDetailList(COMPANY_ID,UAV_ID) {

    //无人机
    getWRJDetail(dealdata,COMPANY_ID,UAV_ID);

    var parentComId = "FourUl";

    var titleList = [
        ["UAV_ID",""],
        ["MODEL_UAV_MODEL","机型"],
        ["OWNER","操作人员"],
        ["CONTACT","联系方式"],
        ["iiiii","状态"],
    ];

    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
    ];


    function inJumpMap(id,row) {
        return;
        JumpMap(row.ID,locallayer);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
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
												case '83'://直流500kV
													bd500 += parseInt(rows[i].SBZS);
												    break;
												case '35'://交流500kV : 35
													bd500 += parseInt(rows[i].SBZS);
												    break;
												case '85'://直流800kV
													bd500 += parseInt(rows[i].SBZS);
												    break;
												case '37'://交流1000kV
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
			option.series[3].data[0] = bd35;option.series[3].data[1] = xl35;option.series[3].data[2] = dl35;
			
//			option.series[6].data[0] = bdYc;option.series[6].data[1] = xlYc;option.series[6].data[2] = dlYc;option.series[6].data[3] = pdYc;
            option.series[6].data[0] = 0;option.series[6].data[1] = 0;option.series[6].data[2] = 0;option.series[6].data[3] = 0;
			
			option.series[7].data[3] = pdKg;option.series[8].data[3] = pdPd;option.series[9].data[3] = pdXb;
			por_equipment.setOption(option);
		}
	}
}

function getSheBeiFaultCount(por_equipment,option,ssgs){
	//保障重点:四个专业的故障次数统计(ajax)
	getFaultCount(dealdata,ssgs);
	function dealdata(data){
		//专业为变电的故障次数
		var bdGz=0;
		//专业为线路的故障次数
		var xlGz=0;
		//专业为电缆的故障次数
		var dlGz=0;
		//专业为配电的的故障次数
		var pdGz=0;
		if(data.data){
			var rows = data.data;
			for(i = 0;i < rows.length;i++){
			         switch(rows[i].ZYLX){
						case '3'://变电
							     bdGz += parseInt(rows[i].GZS);
						    break;
						case '1'://线路
							    xlGz += parseInt(rows[i].GZS);
						    break;
						case '2'://电缆
						        dlGz += parseInt(rows[i].GZS);
						    break;
						case '4'://配电
							    pdGz += parseInt(rows[i].GZS);
						    break;
					}
			}
//			option.series[5].data[0] = bdGz;option.series[5].data[1] = xlGz;option.series[5].data[2] = dlGz;option.series[5].data[3] = pdGz;
			option.series[5].data[0] = 0;option.series[5].data[1] = 0;option.series[5].data[2] = 0;option.series[5].data[3] = 0;
			por_equipment.setOption(option);
		}
		
	}
}

function sheBeiShow(dydj,sbzlx,name){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    $('#qiangdan_title').text(name+"设备");
    showsheBeiCeList(dydj,sbzlx);
}

function showsheBeiCeList(dydj,sbzlx) {

    //电压等级、名称、类型、所属单位、设备主人
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["DYDJMC","电压等级"],
        ["SBMC","名称"],
        ["SBZLXMC","类型"],
        ["SSGSMC","所属单位"],
        ["SBZR","设备主人"],
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
//      JumpMap(locallayer["GDBH"],lxtomapMap.QXGD);
        fly2Equip(locallayer["SBID"]);
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


    getsheBeiDetial(dealBackDataList,dydj,sbzlx);//抢修情况明细查看(ajax接口请求)
}

function gZShow(dydj,sbzlx,name){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    $('#qiangdan_title').text(name+"故障");
    showgZCeList(dydj,sbzlx);
}

function showgZCeList(dydj,sbzlx) {

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
        ["SFCLMC","是否确认"],
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
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.GZJC);
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
//       if (!data.data){
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


    getgZDetial(dealBackDataList,dydj,sbzlx);//抢修情况明细查看(ajax接口请求)
}

function yCShow(dydj,sbzlx,name){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    $('#qiangdan_title').text(name+"异常");
    showyCCeList(dydj,sbzlx);
}

function showyCCeList(dydj,sbzlx) {

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
//      if (!data){
//       if (!data.data){
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


    getyCDetial(dealBackDataList,dydj,sbzlx);//抢修情况明细查看(ajax接口请求)
}




