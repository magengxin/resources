
var g_deptchangeThisPage="8a812897493378a00149567740676661";//只给智慧监控使用的全局公司id的变量
setTimeout(function(){
	dealIntelliDev(g_deptchangeThisPage);//智能感知SmartDevice，设备数量
},1000);
	
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
                    $('#qiangdan_title',parent.document).text(IntelliDevHtml2DataMap[text].detailtitle);
                    showWRJDetailList(g_deptchangeThisPage,null);
                });
            }else if(text==="智能表计"){      //点击智能表计查看明细
                div3_p.click(function () {
                    ChooseShow("KHFW");
                    $('#qiangdan_title',parent.document).text(IntelliDevHtml2DataMap[text].detailtitle);
//                  showZNBJFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                    showIntelliDevFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                });
            }else {
                div3_p.click(function () {   //点击其他的智能装置查看明细
                    ChooseShow("KHFW");
                    $('#qiangdan_title',parent.document).text(IntelliDevHtml2DataMap[text].detailtitle);
                    showIntelliDevFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);
                });
            }
        }
    }
}

//覆盖情况个数查询
function dealIntelliDevFuGaiDetail(ssgs) {
    getIntelliDevDetail(dealdata,null,ssgs);//监测设备（覆盖范围）明细

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
            bindFGclick(div3_p,text,resultset); //修改div3_p的文本，覆盖数量
           
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
                    $('#qiangdan_title',parent.document).text(IntelliDevHtml2DataMap[text].detailtitle);
                    showWRJDetailList(g_deptchangeThisPage,null);//无人机详情
                });
            } else {
                div3_p.click(function () {
                    ChooseShow("KHFW");
                    $('#qiangdan_title',parent.document).text(IntelliDevHtml2DataMap[text].detailtitle);
                    showIntelliDevFuGaiDetailList(rows,IntelliDevHtml2DataMap[text].titlelist,RTU_ID);//智能感知SmartDevice，覆盖详细情况查询
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
        fly2Equip(row["SBID"]);//地图
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
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        rows.sort(sortDydj);
        console.log(rows);
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
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
        getZNBJliDevDetail(dealdata,RTU_ID,ssgs);//智能表计（覆盖范围）明细
    }

    function inJumpMap(id,row) {
        fly2Equip(id);//地图
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
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }
}


//智能感知SmartDevice，异常情况查询
function showIntelliDevAbnormalList(startfun,RTU_ID,title,ssgs) {

    ChooseShow("KHFW");
    $('#qiangdan_title',parent.document).text(title);
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
        $('#pageBlock',parent.document).hide();
//      if (!data.data){
	    if (true){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }
}

//智能感知-智能表计，异常情况查询
function showIntelliZnbjAbnormalList(startfun,RTU_ID,title,ssgs) {

    ChooseShow("KHFW");
    $('#qiangdan_title',parent.document).text(title);
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
        $('#pageBlock',parent.document).hide();
//      if (!data.data){
	    if (true){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
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
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
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
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId,titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }
}

//智能感知hover效果
$('.SmartDevice li').hover(enterLi, leaveLi);

function enterLi() {//鼠标进入li
	$(this).css({
		width: 290,
		height: 340,
		top: 0,
		left: 0,
		marginRight: 50,
		marginBottom: 50,
		backgroundColor: 'rgba(28, 124, 187, 0.5)'
	});
	$(this).find('.smartBody img').css({
		width: 120,
		height: 120,
	});
	$(this).find('.smartBody p').css({
		fontSize: 30
	});
	$(this).find('.smartNum').css({
		left: 0
	});
}

function leaveLi() {//鼠标离开li
	$(this).css({
		width: 290,
		height: 340,
		top: 0,
		left: 0,
		marginRight: 50,
		marginBottom: 50,
		backgroundColor: 'rgba(31, 79, 121, 0.4)'
	});
	$(this).find('.smartBody img').css({
		width: 120,
		height: 120,
	});
	$(this).find('.smartBody p').css({
		fontSize: 30
	});
	$(this).find('.smartNum').css({
		left: 0
	});
}