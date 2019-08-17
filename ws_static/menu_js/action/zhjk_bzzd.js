var reqLoadSBIDs1 = [];
var reqLoadSBIDs2 = [];
var liid = "";
var bdtodivmap = {
    "bd_1":["bd_level1","一级用户"],
    "bd_2":["bd_level2","二级用户"],
    "bd_3":["bd_level3","核心配电站"],
}
//保障重点
//$(function () {
	setTimeout(function(){
		loadBZZD();//初始化保障重点
	},1000)
    
//});

var g_deptchangeThisPage="8a812897493378a00149567740676661";//只给智慧监控使用的全局公司id的变量
function loadBZZD() {
	
    doBaoDianObj("1",g_deptchangeThisPage);//获取一级保电信息列表
    setBaoDianObj("2",g_deptchangeThisPage);//获取二级保电信息列表
    setBaoDianObj("3",g_deptchangeThisPage);//获取示范区保电信息列表
//  dealIntelliDev(g_deptchangeThisPage);
    //dealIntelliDevFuGaiDetail(g_deptchangeThisPage); 覆盖个数在智能感知设备统计中可以获取，不需要改接口
    bindclick_BZZD();//点击保电任务下面的三个标签一级用户 二级用户 核心配电站触发的click事件
    bindclick_ZNGZ();//异常显示状态
    setTimeout(function(){
      fuzailv('1');	//负载率
    },5000);
}
//点击保电任务下面的三个标签一级用户 二级用户 核心配电站触发的click事件
function bindclick_BZZD() {
    $('.protectionPower>p').on('click',function () {
        var num=$(this).index();
        var isctive=$(this).is('.active_p');
        if (!isctive){
            $(this).addClass('active_p').siblings().removeClass('active_p');
            doBaoDianObj((num+1).toString(),g_deptchangeThisPage);//获取保电对象
            if(num != 2){
            	 setTimeout(function(){
				      fuzailv((num+1).toString());
				    },5000);
            }
        }
    });
}
//异常显示状态
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

        genMutliBaodianLJInfo(realrows,ssgs,BDDXJB,ulid,liid);//获取保电路径信息

    }
}
//在id为ulid的ul标签下面:①先清空所有内部的li标签，然后添加一个id为liid的li标签
function reCreateul(ulid,id){
    var ul = $("#"+ulid);
    var lis = $(ul).find('li');

    for (var i = 0 ; i < lis.length ;i++){
        $(lis[i]).remove();
    }

    var li0 = $("<li>",{
        id:id
    });
    ul.append(li0);//创建保电路径样式
}

//获取保电路径信息
function genMutliBaodianLJInfo(realrows,ssgs,BDDXJB,ulid,liid) {//获取保电路径信息

    //var BaoDianObjLJs = [];
//  var reqLoadSBIDs = [];
    for (var  i=0; i<realrows.length;i++){
        var row = realrows[i];
        doBaodianLJInfo(addOneliInul,row.ID,row.MC,ssgs,BDDXJB,ulid,liid,i)//获取保电路径信息
    }
}

function doBaodianLJInfo(addOneliInul_fun,BDDXID,BDDXMC,ssgs,BDDXJB,ulid,liid,idx) {//获取保电路径信息

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

        addOneliInul_fun(ulid,liid,BaoDianObjLJ,idx,BDDXJB);///增加负载率

       
//      return;
    }
}


var Lx2McMap= {
    "zf": "电站",
    "xl": "线路",
    "370000":"用户接入点",
    "0301":"主变",
    "0311":"母线",
    "0305":"断路器",
}

var DYDJ2McMap = {
    "22": "交流10kV",
    "25": "交流35kV",
    "32": "交流110kV",
    "33": "交流220kV	220kV",
    "34": "交流330kV	330kV",
    "35": "交流500kV	500kV",
    "08": "交流380V（含400V）",
}

var DYDJ2SimMcMap = {
    "22": "10kV",
    "25": "35kV",
    "32": "110kV",
    "33": "220kV",
    "34": "330kV",
    "35": "500kV",
    "08": "380V（含400V）",
}

var ZT2ImgMap = {
    "0":"warning_01.png",//正常
    "1":"warning_01.png",//异常 "1":"warning_02.png",
    "2":"warning_01.png",//故障 "2":"warning_03.png",
}


function addOneliInul(ulid,liid,baodianobj,level1_row_idx,bddxjb) {

    var ul = $("#"+ulid);
    var lis = $(ul).find('li');

    var li0;
    for (var i=0; i<lis.length;i++){
        var id = $(lis[i]).attr("id");
        if (id === liid){
            li0 = lis[i];
            break;
        }
    }

    if (!li0){
        return;
    }

    var tableid = liid+"_table_"+level1_row_idx;
    var div1 = creatediv1(baodianobj.BDDXID,baodianobj.BDDXMC,baodianobj.TITLE,baodianobj.ZT,baodianobj.BDSBS,tableid,bddxjb);
    $(div1).attr("idx",level1_row_idx);
    // $(li0).append(div1);
    // return;


    //console.log("记录："+baodianobj.BDDXMC+",idx = "+idx);
    var divlists = $(li0).children('div .power_box');
    if (divlists.length === 0) {
        $(li0).append(div1);//id为liid的li标签内部追加div
        divlists = $(li0).children('div .power_box');
        return;
    }

    for (var i=divlists.length-1;i>=0;i--){
        var itemidx = $(divlists[i]).attr("idx");
        var idxnum = parseInt(itemidx);
        if (idxnum < level1_row_idx){
            div1.insertAfter($(divlists[i]));
            return;
        }
    }
    div1.insertBefore($(divlists[0]));
}
//点击保电对象展开列表
$('.clickExpandSpan').on('click', function() {
	var thisClick = $(this).parent();
	var showTab = $(thisClick).siblings('.power_tab');
	var isShow = $(thisClick).siblings('.power_tab').is(':hidden');
	if(isShow) {
		showTab.slideDown(200)
	} else {
		showTab.slideUp(200)
	}
});

//$(".power_title_click").find("img").click(function() {
//	alert($(this).attr("id"));
//});


//专门给保电对象列表
function creatediv1(BDDXID,text,titlemaps,ZT,rows,tableid,bddxjb) {
    var div1 = $("<div>",{
        class: 'power_box',
    });
   if(bddxjb =="3"){//核心配电站
   	var p0 = createTitle1(rows[0].SBS[0].SBID,text,ZT,bddxjb);
   } else {
   	var p0 = createTitle1(BDDXID,text,ZT,bddxjb);

   }
    div1.append(p0);//插入一级标题
    var div2 = createContext2(titlemaps,rows,tableid);
    //div2.css("display","none");
    div2.css("display","block");
    div1.append(div2);//插入二级内容

    var spantext = $(p0).find("span");
    spantext.click(function () {//点击一级标题，二级显示效果
        var isHidden=$(div2).is(':hidden');
        if(isHidden){
            $(div2).slideDown(200);
        }else {
            $(div2).slideUp(200);
        }
    });

    return div1;
}

function createTitle1(BDDXID,text,ZT,bddxjb) {//创建一级标题

    var btnMapclick = function (bddxjb,id) {
        return function () {
        	if(bddxjb == "3"){
        		JumpMap(id,"protecCorePoint10kVLayer");//调用地图
                showProtectedRoute(id);//显示保电路径
        	} else{
        		JumpMap(id,lxtomapMap.BDDX);
                showProtectedRoute(id);//显示保电路径
        	}
            
        }
    };

    var btnclick = function (id) {
        return function () {
            var url = basepath + "svgGet/svgLJ?SBID="+id;
            setTongDaoJianPaiIframeUrl(url);//弹出中间地图区域框子
        }
    };
	//一级标题样式
    var po = $("<p>",{
        class: 'power_title power_title_click',
    });

    var img = $("<img>",{
        src: basepath +'ws_static/img/position.png',
        style: 'width: 36;height:36;cursor: pointer;',
        alt: "img",
        click: btnMapclick(bddxjb,BDDXID),
    });
    $(po).append(img);
	
    img = $("<img>",{
        src: basepath +'ws_static/img/'+ZT2ImgMap[ZT],
        style: 'width: 36;height:36;',
        alt: "img",
        //click: btnclick(0,row[0],locallayer),
    });
    $(po).append(img);

    var span0 = $("<span>",{
        class: 'clickExpandSpan',
        text : text,
    });
    $(po).append(span0);

    img = $("<img>",{
        src: basepath +'ws_static/img/power_02.png',
        style: 'width: 36;height:36;cursor: pointer;',
        alt: "img",
        click: btnclick(BDDXID),
    });
    $(po).append(img);

    return po;
}

//2级内容
function createContext2(titlemaps,rows,tableid) {
    var div2 = $("<div>",{
        style: "overflow: hidden; display: block;",
        //style: "display: block;",
        class: 'power_tab',
    });

    var table = createTable2(titlemaps,rows,tableid);
    div2.append(table);
    return div2;
}

function createTable2(titlemaps,rows,tableid){//创建二级内容
    var table = $("<table>");
    var thead = createTableTitle(titlemaps);//二级标题
    var tbody = createTablebody(titlemaps,rows,tableid,false,true,false);//二级内容
    table.append(thead);
    table.append(tbody);
    return table;
}
//创建二级标题
function createTableTitle(names) {
    var thead = $("<thead>");
    var tr = $("<tr>");
    var th;
    for (var i = 0;i<names.length;i++){
        th = $("<th>" ,{
            style: "width: 25%",
            text: names[i],
        });
        tr.append(th);
    }
    thead.append(tr);
    return thead;
}
//创建二级内容结构
function createTablebody(titlemaps,rows,tableid,hassvg,hascursor,haspadding) {
	//二级内容结构
    var tbody = $("<tbody>");
    var tr;
    rows.forEach(function (sourceRow, rowidx) {
        //var row = dealRowfun ? dealRowfun(sourceRow) : sourceRow;
        var rowid = tableid + "_" + rowidx;
        tr = createTableRow(sourceRow,rowid,hassvg,hascursor,haspadding);
        tbody.append(tr);
        if (sourceRow.SBS) {
            var tr3 = createHide3Td(sourceRow.SBS,rowid);
            tbody.append(tr3);
            tr3.css("display","none");
            $(tr).click(function () {
                var isShow=$(tr3).is(':hidden');
                if(isShow){
                    $(tr3).slideDown(200);
                }else {
                    $(tr3).slideUp(200);
                }
            });
        }

    });
    return tbody;
}
//创建二级内容的li
function createTableRow(row,rowid,hassvg,hascursor,haspadding) {
// console.log("***************************>>>>>>>"+console.log(row));
// console.log("***************************>>>>>>>SBID:"+console.log(row.SBID));
   var btnMapclick = function (id) {
        return function () {
//      	console.log("***************************>>>>>>>"+id);
        	 fly2Equip(id);
            
        }
    };
    
    var btnclick = function (id) {
        return function () {
            var url = basepath + "svgGet/svgZN?SBID="+id;
            setTongDaoJianPaiIframeUrl(url);//显示中间地图区域弹框
        }
    };
    var tr = $("<tr>");

    var td = $("<td>");

    if (haspadding) {
        td.css({"width":"32%","text-align":"left","padding-left":"160px"});//22
    }
    var img = $("<img>",{//插入定位图标
        src: basepath +'ws_static/img/position.png',
        style: 'width: 36;height:36;cursor: pointer;',
        alt: "img",
        click: btnMapclick(row.SBID),
    });
    $(td).append(img);
    img = $("<img>",{
        src: basepath +'ws_static/img/'+ZT2ImgMap[row.ZT],
        style: 'width: 36;height:36;',
        alt: "img",
    });
    $(td).append(img);

    var span0 = $("<span>",{
        text: row.SBMC,
        //click: btnclick(0,row[0],locallayer),
    });
    if (hascursor) {
        span0.css({'cursor': 'pointer'});
    }

    $(td).append(span0);

    var sblxmc = Lx2McMap[row.SBLX];

    if (hassvg && sblxmc==="电站") {
        img = $("<img>",{
            src: basepath +'ws_static/img/power_01.png',
            style: 'width: 36;height:36;cursor: pointer;',
            alt: "img",
            click: btnclick(row.SBID),
        });
        $(td).append(img);
    }

    tr.append(td);//第一个字段名称

    var td = $("<td>",{
        text: Lx2McMap[row.SBLX]?Lx2McMap[row.SBLX]:row.SBLX,
    });
    if (haspadding) {
        td.css({"width":"18%","text-align":"left"});//10
    }
    tr.append(td);//第二个字段类型

    var td = $("<td>",{
        text: DYDJ2SimMcMap[row.DYDJ],
    });
    if (haspadding) {
        td.css({"width":"15%","text-align":"left"});
    }
    tr.append(td);//第三个字段电压等级

//增加负载率走马灯滚动
    if (row.HasFZL) {
        var arrs = rowid.split("_");
        var liid = arrs[0]+"_"+arrs[1]+"_"+arrs[2]; //li的
        var tdid = liid+"_"+row.SBID;//第三个字段id
        var td = $("<td>",{
        	style:'position:relative;'
        });
        span0 = $("<marquee>",{
            id:tdid,
            text: DEFAULT_DETAIL_EMPTY_TEXT,
            EDRL : parseFloat(row.EDRL||0),
            style: "white-space: nowrap;text-overflow: ellipsis;overflow: hidden;float: left;display: block;"
            //click: btnclick(0,row[0],locallayer),
        });
        div1 = $('<div>',{
        	style:'width:160px'
        })
        div1.append(span0);
        $(td).append(div1);

        img = $("<img>",{
            src: basepath +'ws_static/img/icon_power.png',
            style: 'width: 42;height:35;margin-left:-100px;position:absolute;left:220px;top:20px;background:rgba(11,61,64,1);',
            alt: "img",
            //click: btnclick(0,row[0],locallayer),
        });
        $(td).append(img);
        if (haspadding) {
            td.css({"width":"30%","text-align":"left","padding-left":"0"});
        }
        tr.append(td);//第四个字段负载率
    }

    return tr;
}

//parent_rowid 二级行的id
function createHide3Td(rows,parent_rowid) {

    var tr = $("<tr>");

    var td = $("<td>");

    var hight = rows.length*100;
    var div3 = $("<div>",{
        class: 'power_box',
        style: 'width: 400%;hight:'+hight+"px;",
    });

    var table = createTable3(rows,parent_rowid);//插入二级结构
    div3.append(table);

    td.append(div3);
    tr.append(td);
    return tr;

}
function createTable3(rows,tableid){//二级结构
    var table = $("<table>");
    var tbody = createTablebody(null,rows,tableid,true,false,true);
    table.append(tbody);
    return table;
}



function fuzailv(BDDXJB){//负载率
	if(BDDXJB == '1'){
		 if (reqLoadSBIDs1.length == 0){
            return;
       }
      for(var i = 0;i < reqLoadSBIDs1.length;i++){
      	var sbid = reqLoadSBIDs1[i];
      	getZhuBianSbid(dealdata,sbid);//ajax回调函数传参:传sbid到回调函数dealdata里面--获取主变设备id
//    	console.log("*********sbid" +sbid);
      	function dealdata(data,SbId){
      		if(data.data){
      			var rows = data.data;
      			var reqZhuBianSBIDs1 = [];
      			for(i = 0;i < rows.length;i++){
      				reqZhuBianSBIDs1.push(rows[i].SBID);
      			}
      			var sbids = reqZhuBianSBIDs1.join(",");
      			getRealTimeLoadData(dealdata1,sbids,SbId);//ajax回调函数传参:传SbId到回调函数dealdata里面----负荷
      			function dealdata1(data,SbId){
      				var rates = "";
      				if(data.data && data.data.length != 0){
      					for(i = 0;i < rows.length;i++){
			  				var edrl = parseFloat(rows[i].EDRL);
			  				 var rate = "0%";
			  				if (edrl > 0){
		                        rate = parseFloat(parseInt(data.data[0].VALUE)*100/(edrl*1000*1000)).toFixed(1);//计算负载率
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
      	getZhuBianSbid(dealdata,sbid);//ajax回调函数传参:传sbid到回调函数dealdata里面--获取主变设备id
//    	console.log("*********sbid" +sbid);
      	function dealdata(data,SbId){
      		if(data.data){
      			var rows = data.data;
      			var reqZhuBianSBIDs2 = [];
      			for(i = 0;i < rows.length;i++){
      				reqZhuBianSBIDs2.push(rows[i].SBID);
      			}
      			var sbids = reqZhuBianSBIDs2.join(",");
      			getRealTimeLoadData(dealdata1,sbids,SbId);//ajax回调函数传参:传SbId到回调函数dealdata里面----负荷
      			function dealdata1(data){
      				var rates = "";
      				if(data.data && data.data.length != 0){
      					for(i = 0;i < rows.length;i++){
			  				var edrl = parseFloat(rows[i].EDRL);
			  				 var rate = "0%";
			  				if (edrl > 0){
		                        rate = parseFloat(parseInt(data.data[0].VALUE)*100/(edrl*1000*1000)).toFixed(1);//计算负载率
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
	}
        
}

//电压等级、名称、类型（变电站）、所属单位、设备主人、联系方式--------明细
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
            JumpMap(row.OID,lxtomapMap["10kV_DZ"]);//定位
        }else if (DYDJ === DYDJ2ValueMap["35kV"] || DYDJ === DYDJ2ValueMap["110kV"] || DYDJ === DYDJ2ValueMap["220kV"]) {
            JumpMap(row.OID,lxtomapMap["35kV_DZ"]);//定位
        }else if (DYDJ === DYDJ2ValueMap["500kV"]) {
            JumpMap(row.OID,lxtomapMap["500kV_DZ"]);//定位
        }
    }
    function dealRow(row) {//详情标题数组---SBID/DYDJMC
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
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");//创建详情内容
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }

    getGuiMoDetail(dealdata,DYDJ,ZT,SBLX,SBZLX,ssgs);//规模统计—规模明细
}

//获取设备实时电力负荷
function getDevRealTimeLoad(callback,SBIDs) {

    getRealTimeLoadData(dealdata,SBIDs);//实时负荷
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
function clickEchart_por_equipment(param) {//保电设备点击弹出明细

    if (param.componentType !== "series"){
        return;
    }
    var seriesIndex = parseInt(param.seriesIndex);
    var dataIndex = parseInt(param.dataIndex);
    var name = param.name;
//  console.log("seriesIndex: " + seriesIndex + " dataIndex: " + dataIndex + " name: " + name);
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
   	sheBeiShow(dydj,sbzlx,name);//显示设备明细
   }
   if(seriesIndex == 5 || seriesIndex == 11){
   		dydj = "-1";
   	gZShow(dydj,sbzlx,name);//显示故障明细
   }
   if(seriesIndex == 6 || seriesIndex == 12){
   	dydj = "-1";
   	yCShow(dydj,sbzlx,name);//显示异常明细
   }

}
//四个专业的故障次数统计
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
			por_equipment.setOption(option);//图表塞数据
		}
		
	}
}
//显示设备明细
function sheBeiShow(dydj,sbzlx,name){
	$(".bottom-list",parent.document).removeClass("hide");//显示class为bottom-list的div
    $('#qiangdan_title',parent.document).text(name+"设备");
    showsheBeiCeList(dydj,sbzlx);
}
//显示设备明细
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
        $('#pageBlock',parent.document).hide();
//      if (!data){
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }


    getsheBeiDetial(dealBackDataList,dydj,sbzlx);//抢修情况明细查看(ajax接口请求)
}
//显示故障明细
function gZShow(dydj,sbzlx,name){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    $('#qiangdan_title').text(name+"故障");
    showgZCeList(dydj,sbzlx);
}
//显示故障明细
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
//显示异常明细
function yCShow(dydj,sbzlx,name){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
    $('#qiangdan_title').text(name+"异常");
    showyCCeList(dydj,sbzlx);
}
//显示异常明细
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




