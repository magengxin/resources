
//业务指挥
	setTimeout(function(){
		loadYWZH();//初始化加载页面数据
	},1000)
    

/*巡视分布高亮*/
var move_left_start1 = $('.move_after_xunshi').css('left'),
	move_left1 = parseInt(move_left_start1),
	scale1 = (1045 / 13);
$('.square_move_xunshi dd').click(function() {//点击地区切换---高亮切换位置
	var index = $(this).index() - 1,
		end_left1;
	if(index == 0) {
		$('.move_after_xunshi').hide();
	} else if(index == 1) {
		$('.move_after_xunshi').show();
		end_left1 = move_left1;
	} else {
		$('.move_after_xunshi').show();
		end_left1 = move_left1 + (index - 1) * scale1;
	}
	$('.move_after_xunshi').css('left', end_left1);
	$('#xsfb_dt').html($(this).html());
})


function loadYWZH() {
    //setBaoDianTeXun();
    createTaskPanle(g_deptchange);//任务看板显示数据
    bindclick_YWZH();//任务处置详情
    dosetTaskCount(null,"2");//任务处置异常
    dosetTaskCount(null,"3");//任务处置紧急

}

function bindclick_YWZH() {
    $("#task_yichang_count").css({'cursor': 'pointer'});
    $("#task_yichang_count").click(function () {
        showTaskList("2",g_deptchange);//异常点击弹出明细
    });

    $("#task_jinji_count").css({'cursor': 'pointer'});
    $("#task_jinji_count").click(function () {
        showTaskList("3",g_deptchange);//紧急点击弹出明细
    });
}

//保电特巡统计
function setBaoDianTeXun(patrol_box,option,ssgs) {

    var JHXSS = 0;	//计划巡视数
    var YXXS = 0;	//已巡视数
    var YFXQXS = 0;	//已发现缺陷数
    var YFXYHS = 0;	//已发现隐患数
    dealHtml(patrol_box,option,JHXSS,YXXS,YFXQXS,YFXYHS);
    getXunShiTongJiData(dealdata,ssgs);//巡视统计

    function dealdata(data) {
        if (!data.data || data.data.length == 0){
            return;
        }

        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            JHXSS += parseInt(row.JHXSS||0);
            YXXS += parseInt(row.YXXS||0);
            YFXQXS += parseInt(row.YFXQXS||0);
            YFXYHS += parseInt(row.YFXYHS||0);
        }

        dealHtml(patrol_box,option,JHXSS,YXXS,YFXQXS,YFXYHS);
        bindclick_XS();
    }

    function dealHtml(patrol_box,option,JHXSS,YXSS,YFXQXS,YFXYHS) {
        $("#hasDoneSpan").text(YXSS);//已巡视
        $("#TotalCount").text(JHXSS);//总巡视
        $("#JHXSCount").text(JHXSS);//计划巡视
        $("#YFXQXCount").text(YFXQXS);//已发现缺陷数
        $("#YFXYHCount").text(YFXYHS);//已发现隐患数
        $("#hasDonPer").text(JHXSS===0?"100%":parseInt(YXSS/JHXSS*100)+"%");//已巡视占比

        option.series[0].data[0].value = YXSS;
        option.series[0].data[0].name = YXSS.toString();
        option.series[0].data[1].value = JHXSS;
        option.series[0].data[1].name = JHXSS.toString();
        patrol_box.setOption(option);//巡视任务饼图
    }

    function bindclick_XS() {//绑定巡视明细

        var titleList_YXS = [
            ["SBID",""],
            ["ZT","状态"],
            ["XSFW","巡视范围"],
            ["JHXSSJ","计划巡视时间"],
            ["iiiii","任务内容"],
            ["FZRMC","处理人"],
            //["iiiii","联系方式"],
            ["XSKSSJ","巡视开始时间"],
            ["XSJSSJ","巡视结束时间"],
        ];
        $("#hasDoneSpan").css({'cursor': 'pointer'});
        $("#hasDoneSpan").click(function () {
        	var area = $("#xsfb_dt").text();
        	if(area == '核心'){
		    	var sfhxq = '1';
		    } else {
		    	var sfhxq = '-1';
		    }
	    	switch(area){
			        case '上海'://上海
	  					var ssgs = '-1';
	  				    break;
	  				case '核心'://核心
	  					var ssgs = 'JBH-HXQ';
	  				    break;
	  				case '检修'://检修
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
	  				    break;
	  				case '浦东'://浦东
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	  				    break;
	  				case '市区'://市区
	  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	  				    break;
	  				case '市北'://市北
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	  				    break;
	  				case '市南'://市南
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	  				    break;
	  				case '嘉定'://嘉定
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	  				    break;
	  				case '松江'://松江
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	  				    break;
	  				case '青浦'://青浦
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	  				    break;
	  				case '奉贤'://奉贤
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	  				    break;
	  				case '金山'://金山
	  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	  				    break;
	  				case '崇明'://崇明
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	  				    break;
	  				case '长兴'://长兴
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	  				    break;
	  			}
            showBaoDianTeXunList(getXunShiTongJiDetail_YXS,titleList_YXS,"已巡视",ssgs,sfhxq);//巡视明细列表
        });
//
//      var titleList_JHXS = [
//          ["SBID",""],
//          ["ZT","状态"],
//          ["SBMC","巡视对象"],
//          ["JHXSSJ","计划巡视时间"],
//          ["XSFW","巡视内容"],
//          ["XSBZMC","巡视班组"],
//          ["FZRMC","当班负责人"],
//            ["iiiii","联系电话"],
//      ];
//      $("#TotalCount").css({'cursor': 'pointer'});
//      $("#TotalCount").click(function () {
//      	var area = $("#xsfb_dt").text();
//      	if(area == '核心'){
//		    	var sfhxq = '1';
//		    } else {
//		    	var sfhxq = '-1';
//		    }
//	    	switch(area){
//			        case '上海'://上海
//	  					var ssgs = '-1';
//	  				    break;
//	  				case '核心'://核心
//	  					var ssgs = 'JBH-HXQ';
//	  				    break;
//	  				case '检修'://检修
//	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
//	  				    break;
//	  				case '浦东'://浦东
//	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
//	  				    break;
//	  				case '市区'://市区
//	  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
//	  				    break;
//	  				case '市北'://市北
//	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
//	  				    break;
//	  				case '市南'://市南
//	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
//	  				    break;
//	  				case '嘉定'://嘉定
//	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
//	  				    break;
//	  				case '松江'://松江
//	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
//	  				    break;
//	  				case '青浦'://青浦
//	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
//	  				    break;
//	  				case '奉贤'://奉贤
//	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
//	  				    break;
//	  				case '金山'://金山
//	  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
//	  				    break;
//	  				case '崇明'://崇明
//	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
//	  				    break;
//	  				case '长兴'://长兴
//	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
//	  				    break;
//	  			}
//          showBaoDianTeXunList(getXunShiTongJiDetail_JHXS,titleList_JHXS,"计划巡视",ssgs,sfhxq);
//      });

        $("#JHXSCount").css({'cursor': 'pointer'});
        $("#JHXSCount").click(function () {//计划巡视数点击弹明细
        	var area = $("#xsfb_dt").text();
        	if(area == '核心'){
		    	var sfhxq = '1';
		    } else {
		    	var sfhxq = '-1';
		    }
	    	switch(area){
			        case '上海'://上海
	  					var ssgs = '-1';
	  				    break;
	  				case '核心'://核心
	  					var ssgs = 'JBH-HXQ';
	  				    break;
	  				case '检修'://检修
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
	  				    break;
	  				case '浦东'://浦东
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	  				    break;
	  				case '市区'://市区
	  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	  				    break;
	  				case '市北'://市北
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	  				    break;
	  				case '市南'://市南
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	  				    break;
	  				case '嘉定'://嘉定
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	  				    break;
	  				case '松江'://松江
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	  				    break;
	  				case '青浦'://青浦
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	  				    break;
	  				case '奉贤'://奉贤
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	  				    break;
	  				case '金山'://金山
	  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	  				    break;
	  				case '崇明'://崇明
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	  				    break;
	  				case '长兴'://长兴
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	  				    break;
	  			}
            showBaoDianTeXunList(getXunShiTongJiDetail_JHXS,titleList_JHXS,"计划巡视",ssgs,sfhxq);//计划巡视明细列表
        });
       //所属公司、级别、设备名称、设备类型、发现时间、缺陷描述
        var titleList_YFXQX = [
            ["SBID",""],
            ["FXRDW","公司"],
            ["QXXZ","级别"],
            ["SBMC","设备名称"],
            ["SBLXMC","设备类型"],
            ["JHXSSJ","发现日期"],
            ["QXMSMC","缺陷描述"],
        ];

        $("#YFXQXCount").css({'cursor': 'pointer'});
        $("#YFXQXCount").click(function () {//已发现缺陷数
        	var area = $("#xsfb_dt").text();
        	if(area == '核心'){
		    	var sfhxq = '1';
		    } else {
		    	var sfhxq = '-1';
		    }
	    	switch(area){
			        case '上海'://上海
	  					var ssgs = '-1';
	  				    break;
	  				case '核心'://核心
	  					var ssgs = 'JBH-HXQ';
	  				    break;
	  				case '检修'://检修
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
	  				    break;
	  				case '浦东'://浦东
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	  				    break;
	  				case '市区'://市区
	  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	  				    break;
	  				case '市北'://市北
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	  				    break;
	  				case '市南'://市南
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	  				    break;
	  				case '嘉定'://嘉定
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	  				    break;
	  				case '松江'://松江
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	  				    break;
	  				case '青浦'://青浦
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	  				    break;
	  				case '奉贤'://奉贤
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	  				    break;
	  				case '金山'://金山
	  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	  				    break;
	  				case '崇明'://崇明
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	  				    break;
	  				case '长兴'://长兴
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	  				    break;
	  			}
            showBaoDianTeXunList(getXunShiTongJiDetail_YFXQX,titleList_YFXQX,"已发现缺陷",ssgs,sfhxq);//已发现缺陷数明细
        });
        //所属公司、级别、隐患点（地址）、发现时间、隐患描述
        var titleList_YFXYH = [
            ["SBID",""],
            ["SSGSMC","公司"],
            ["YHFJMC","级别"],
            ["SBMC","隐患点"],
            ["JHXSSJ","发现时间"],
            ["YHMS","隐患描述"],
        ];
        $("#YFXYHCount").css({'cursor': 'pointer'});
        $("#YFXYHCount").click(function () {//已发现隐患数
        	var area = $("#xsfb_dt").text();
        	if(area == '核心'){
		    	var sfhxq = '1';
		    } else {
		    	var sfhxq = '-1';
		    }
	    	switch(area){
			        case '上海'://核心
	  					var ssgs = '-1';
	  				    break;
	  				case '核心'://核心
	  					var ssgs = 'JBH-HXQ';
	  				    break;
	  				case '检修'://检修
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
	  				    break;
	  				case '浦东'://浦东
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	  				    break;
	  				case '市区'://市区
	  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	  				    break;
	  				case '市北'://市北
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	  				    break;
	  				case '市南'://市南
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	  				    break;
	  				case '嘉定'://嘉定
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	  				    break;
	  				case '松江'://松江
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	  				    break;
	  				case '青浦'://青浦
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	  				    break;
	  				case '奉贤'://奉贤
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	  				    break;
	  				case '金山'://金山
	  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	  				    break;
	  				case '崇明'://崇明
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	  				    break;
	  				case '长兴'://长兴
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	  				    break;
	  			}
            showBaoDianTeXunList(getXunShiTongJiDetail_YFXYH,titleList_YFXYH,"已发现隐患",ssgs,sfhxq);////已发现隐患数
        });

    }
}

////任务处置
//function setTaskCount(abnormal,option,ssgs,TASK_TYPE) {
//
//  var tasktype = {
//      "2": ["异常处理","task_yichang_count"],
//      "3": ["紧急","task_jinji_count"]
//  }
//
//  var ZS = 0;	//总数
//  var WCS = 0;	//完成数
//  var ZCLS = 0;	//在处理数
//
//  //dealHtml(abnormal,option,ZS,WCS,ZCLS,TASK_TYPE);;
//  getTaskCountData(dealdata,ssgs);//获取任务处置数据
//
//  function dealdata(data) {
//      if (!data || data.length == 0){
//          data =[];
//      }
//
//      var rows = data;
//      for (var i=0;i<rows.length;i++){
//          var row = rows[i];
//
//          if (row.TASK_TYPE === TASK_TYPE) {
//              ZS += parseInt(row.ZS);
//              WCS += parseInt(row.WCS);
//              ZCLS += parseInt(row.ZCLS);
//          }
//      }
//
//      dealHtml(abnormal,option,ZS,WCS,ZCLS,TASK_TYPE);//
//  }
//
//  function dealHtml(abnormal,option,ZS,WCS,ZCLS,TASK_TYPE) {
//
//      $("#"+tasktype[TASK_TYPE][1]).text(ZS);
//      // $("#task_yichang_count").text(ZS_abnormal);
//      // $("#task_jinji_count").text(ZS_emergent);
//
//      //70%认为全满
//      var rate = 10/7;
//
//      option.legend.data = ['1.已下达 '+ZS,'2.抢修中 '+ZCLS,'3.已完成 '+WCS];
//      option.series[0].data[0].value = ZS;
//      option.series[0].data[0].name = '1.已下达 '+ZS;
//      option.series[0].data[1].value = ZS*rate -ZS;
//
//      option.series[1].data[0].value = ZCLS;
//      option.series[1].data[0].name = '2.抢修中 '+ZCLS;
//      option.series[1].data[1].value = ZS*rate -ZCLS;
//
//      option.series[2].data[0].value = WCS;
//      option.series[2].data[0].name = '3.已完成 '+WCS;
//      option.series[2].data[1].value = ZS*rate -WCS;
//
//      abnormal.setOption(option);
//  }
//}

//任务看板
//面板 RWLX	任务类型（1、移动 2、异常处理）"TASK_STATUS_NAME" : "已接收","已完成"?
function createTaskPanle(ssgs,TASK_STATUS_NAME){


    var titleList = [
        ["TASK_DESC","任务描述"],
        ["SEND_TIME","下达时间"],
        ["iiiii","班组"],
    ];

    createGDGropList("li_task_jinxingzhong", [], "处理中", titleList, dealRow, null);//任务看板处理中添加结构
    createGDGropList("li_task_yiwancheng", [], "已完成", titleList, null);//任务看板已完成添加结构

    getTaskData(dealdata,"",ssgs);//任务下达查询

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }

    function dealdata(data) {

        if (!data.data || data.data.length ===0) {
            return;
        }
        var rows = data.data;

        var zhongrows = [];
        var yirows = [];

        for(var i=0;i<rows.length;i++){
            var row = rows[i];
            //2异常 3紧急
            if (row.TASK_TYPE === "2" || row.TASK_TYPE === "3"){
                if (row.TASK_STATUS_NAME === "已下达"){
                    yirows.push(row);
                } else {
                    zhongrows.push(row);
                }
            }

        }

        createGDGropList("li_task_jinxingzhong", zhongrows, "处理中", titleList, dealRow, null);//任务看板处理中添加结构
        createGDGropList("li_task_yiwancheng", yirows, "已完成", titleList, dealRow, null);//任务看板已完成添加结构

    }

}

//业务指挥任务看板添加样式列表
function createGDGropList(liid, rows, titlename, titleList, dealRow, clickfun) {

    var btnclick = function (rows) {
        return function () {
            clickfun(rows);
        }
    };


    $('#' + liid).empty();
    var color = '#FFFFFF';
    switch (liid) {
        case "li_weidaoda":
            color = "#d0a643";
            break
        case "li_jinxingzhong":
            color = "#2c9dca";
            break
        case "li_yiwancheng":
            color = "#0afd40";
            break

    }

    var h40 = $("<h4>", {text: titlename + " - ", style: "padding-left: 30px;"});
    var span = $("<span>", {text: rows.length, class: "potClick"});
    span.css({"color": color});
    h40.append(span);
    if (clickfun) {
        span.click(btnclick(rows));
    }
    $('#' + liid).append(h40);

    var bigBox = $("<div>", {style: "margin-top:70px"});
    rows.forEach(function (sourcerow, idx) {

        var row = dealRow(sourcerow);

        var divwork_line = $("<div>", {class: "work_line"});
        divwork_line.width("60%");
        var p_taskname = $("<p>", {
            text: row[0],
            style: "white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"
        });
        var nowtime;
        if (liid === "li_yiwancheng") {
            nowtime = row[3] ? new Date(row[3]) : new Date();
        } else {
            nowtime = new Date();
        }

        var date1 = new Date(row[1]);

        var hour = getDayTowDate(nowtime, date1);
        var inthout = parseInt(hour);
        if (inthout >= 6) {
            divwork_line.width("143%");
            inthout = 6;
        } else if (inthout == 0) {
            divwork_line.width("24%");
        } else {
            parseInt((inthout / 6) * 143).toString()
            divwork_line.width(parseInt((inthout / 6) * 143).toString() + "%");
        }

        var span_time = $("<span>", {text: date1.getHours() + ":" + date1.getMinutes() + "--" + nowtime.getHours() + ":" + nowtime.getMinutes()});

        var div1 = $("<div>", {class: "f-l"});
        div1.append(divwork_line).append(p_taskname).append(span_time);

        var h31 = $("<h3>", {text: inthout + "h"});
        var p_bz = $("<p>", {text: row[2]});

        var div2 = $("<div>", {class: "f-l"});
        div2.append(h31).append(p_bz);
        var divbox = $("<div>", {class: "info_box"});
        divbox.append(div1).append(div2);
        bigBox.append(divbox);
    });
    $('#' + liid).append(bigBox);
}

//任务详情列表，任务类型、状态、任务对象、下达时间、任务内容
function showTaskList(RWLX,ssgs) {//任务下达明细

    ChooseShow("KHFW");
    $('#qiangdan_title').text("任务");

    getTaskData(dealdata,RWLX,ssgs);//任务下达查询

    var parentComId = ulmap.KHFW;;

    var titleList = [
        ["ID",""],
        ["TASK_TYPE_NAME","任务类型"],
        ["TASK_STATUS_NAME","状态"],
        ["iiiii","任务对象"],
        ["SEND_TIME","下达时间"],
        ["TASK_DESC","任务内容"],
    ];

    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
    ];

    function inJumpMap(id,row) {
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

//状态、任务对象、下达时间、任务内容、处理人、联系方式、发现缺陷（隐患）数
function showBaoDianTeXunList(startfun,titleList,title,ssgs,sfhxq) {//巡视明细

    ChooseShow("KHFW");
    $('#qiangdan_title',parent.document).text(title);

    startfun(dealdata,ssgs,sfhxq);

    var parentComId = ulmap.KHFW;

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
    ];

    function inJumpMap(id,row) {
//      fly2Equip(id);
        // var locallayer = row.TASK_TYPE_NAME==="异常处理" ? lxtomapMap.YCRW :lxtomapMap.JJRW;
           JumpMap(row.JLID,lxtomapMap.XSRW);
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


//巡视分布柱状图
function doXunShiInfo(chart_xsfb,option,ssgs){
	getXunShiTongJiData(dealdata,ssgs);
	function dealdata(data){
		 if (!data.data || data.data.length == 0){
            return;
        }
		 var jhxs = [0,0,0,0,0,0,0,0,0,0,0,0,0];//计划巡视
		 var ys = [0,0,0,0,0,0,0,0,0,0,0,0,0];//已巡视
		 var yfxqx = [0,0,0,0,0,0,0,0,0,0,0,0,0];//已发现缺陷
		 var yfxyh = [0,0,0,0,0,0,0,0,0,0,0,0,0];//已发现隐患
		 var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            switch(row.SSGS){
  				case 'JBH-HXQ'://核心
  					jhxs[0] += parseInt(row.JHXSS);
  					ys[0] += parseInt(row.YXXS);
  					yfxqx[0] += parseInt(row.YFXQXS);
  					yfxyh[0] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50'://检修
  			    	jhxs[1] += parseInt(row.JHXSS);
  					ys[1] += parseInt(row.YXXS);
  					yfxqx[1] += parseInt(row.YFXQXS);
  					yfxyh[1] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06'://浦东
  					jhxs[2] += parseInt(row.JHXSS);
  					ys[2] += parseInt(row.YXXS);
  					yfxqx[2] += parseInt(row.YFXQXS);
  					yfxyh[2] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03'://市区
  				    jhxs[3] += parseInt(row.JHXSS);
  					ys[3] += parseInt(row.YXXS);
  					yfxqx[3] += parseInt(row.YFXQXS);
  					yfxyh[3] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04'://市北
  					jhxs[4] += parseInt(row.JHXSS);
  					ys[4] += parseInt(row.YXXS);
  					yfxqx[4] += parseInt(row.YFXQXS);
  					yfxyh[4] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05'://市南
  					jhxs[5] += parseInt(row.JHXSS);
  					ys[5] += parseInt(row.YXXS);
  					yfxqx[5] += parseInt(row.YFXQXS);
  					yfxyh[5] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08'://嘉定
  					jhxs[6] += parseInt(row.JHXSS);
  					ys[6] += parseInt(row.YXXS);
  					yfxqx[6] += parseInt(row.YFXQXS);
  					yfxyh[6] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A'://松江
  			    	jhxs[7] += parseInt(row.JHXSS);
  					ys[7] += parseInt(row.YXXS);
  					yfxqx[7] += parseInt(row.YFXQXS);
  					yfxyh[7] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09'://青浦
  					jhxs[8] += parseInt(row.JHXSS);
  					ys[8] += parseInt(row.YXXS);
  					yfxqx[8] += parseInt(row.YFXQXS);
  					yfxyh[8] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07'://奉贤
  					jhxs[9] += parseInt(row.JHXSS);
  					ys[9] += parseInt(row.YXXS);
  					yfxqx[9] += parseInt(row.YFXQXS);
  					yfxyh[9] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B'://金山
  					jhxs[10] += parseInt(row.JHXSS);
  					ys[10] += parseInt(row.YXXS);
  					yfxqx[10] += parseInt(row.YFXQXS);
  					yfxyh[10] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ'://崇明
  					jhxs[11] += parseInt(row.JHXSS);
  					ys[11] += parseInt(row.YXXS);
  					yfxqx[11] += parseInt(row.YFXQXS);
  					yfxyh[11] += parseInt(row.YFXYHS);
  				    break;
  				case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ'://长兴
  					jhxs[12] += parseInt(row.JHXSS);
  					ys[12] += parseInt(row.YXXS);
  					yfxqx[12] += parseInt(row.YFXQXS);
  					yfxyh[12] += parseInt(row.YFXYHS);
  				    break;
  			}
            
        }
        for(i = 0;i < 13;i ++){
        	option.series[1].data[i] = jhxs[i];
        	option.series[2].data[i] = ys[i];
        	option.series[4].data[i] = yfxqx[i];
        	option.series[5].data[i] = yfxyh[i];
        }
		chart_xsfb.setOption(option);
	}
	chart_xsfb.on("click",clickEchart_chart_xsfb);
}
//巡视任务饼图塞数据
function get_bdtx_ssjc(area){
	switch(area){
		        case '上海'://核心
  					var ssgs = '-1';
  				    break;
  				case '核心'://核心
  					var ssgs = 'JBH-HXQ';
  				    break;
  				case '检修'://检修
  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
  				    break;
  				case '浦东'://浦东
  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
  				    break;
  				case '市区'://市区
  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
  				    break;
  				case '市北'://市北
  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
  				    break;
  				case '市南'://市南
  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
  				    break;
  				case '嘉定'://嘉定
  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
  				    break;
  				case '松江'://松江
  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
  				    break;
  				case '青浦'://青浦
  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
  				    break;
  				case '奉贤'://奉贤
  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
  				    break;
  				case '金山'://金山
  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
  				    break;
  				case '崇明'://崇明
  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
  				    break;
  				case '长兴'://长兴
  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
  				    break;
  			}
	patrol_box(ssgs);
}
//任务处置
function dosetTaskCount(ssgs,TASK_TYPE) {

    var tasktype = {
        "2": ["异常处理","task_yichang_count"],
        "3": ["紧急","task_jinji_count"]
    }

    var ZS = 0;	//总数
    var WCS = 0;	//完成数
    var ZCLS = 0;	//在处理数

    //dealHtml(abnormal,option,ZS,WCS,ZCLS,TASK_TYPE);;
    getTaskCountData(dealdata,ssgs);//右侧业务指挥下任务处理之异常

    function dealdata(data) {
        if (!data || data.length == 0){
            data =[];
        }
        var rate = 10/7;
        var rows = data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];

            if (row.TASK_TYPE === TASK_TYPE) {
                ZS += parseInt(row.ZS);
                WCS += parseInt(row.WCS);
                ZCLS += parseInt(row.ZCLS);
            }
        }

//      dealHtml(ZS,WCS,ZCLS,TASK_TYPE);
        switch(TASK_TYPE){
			case '2':
			    $("#task_yichang_count").text(ZS);
				$("#yxd").text(ZS);
				$("#clz").text(ZCLS);
				$("#ywc").text(WCS);
				$("#yxd").parent("div").next("div").children("span").css('width', ZS*100/(ZS*rate) + "%");//异常已下达
				$("#clz").parent("div").next("div").children("span").css('width', ZCLS*100/(ZS*rate) + "%");//异常处理中
				$("#ywc").parent("div").next("div").children("span").css('width', WCS*100/(ZS*rate) + "%");//异常已完成
			    break;
			case '3':
			    $("#task_jinji_count").text(ZS);
				$("#yxd1").text(ZS);
				$("#clz1").text(ZCLS);
				$("#ywc1").text(WCS);
				$("#yxd1").parent("div").next("div").children("span").css('width', ZS*100/(ZS*rate) + "%");//紧急已下达
				$("#clz1").parent("div").next("div").children("span").css('width', ZCLS*100/(ZS*rate) + "%");//紧急处理中
				$("#ywc1").parent("div").next("div").children("span").css('width', WCS*100/(ZS*rate) + "%");//紧急已完成
			    break;
		}
    }

}

//巡视分布图
function clickEchart_chart_xsfb(param) {

    if (param.componentType !== "series"){
        return;
    }
    var titleList_YXS1 = [
            ["SBID",""],
            ["ZT","状态"],
            ["XSFW","巡视范围"],
            ["JHXSSJ","计划巡视时间"],
            ["iiiii","任务内容"],
            ["FZRMC","处理人"],
            //["iiiii","联系方式"],
            ["XSKSSJ","巡视开始时间"],
            ["XSJSSJ","巡视结束时间"],
        ];
    var titleList_JHXS1 = [
            ["SBID",""],
            ["ZT","状态"],
            ["SBMC","巡视对象"],
            ["JHXSSJ","计划巡视时间"],
            ["XSFW","巡视内容"],
            ["XSBZMC","巡视班组"],
            ["FZRMC","当班负责人"],
              ["iiiii","联系电话"],
        ];
    var titleList_YFXQX1 = [
            ["SBID",""],
            ["FXRDW","公司"],
            ["QXXZ","级别"],
            ["SBMC","设备名称"],
            ["SBLXMC","设备类型"],
            ["JHXSSJ","发现日期"],
            ["QXMSMC","缺陷描述"],
        ];
    var titleList_YFXYH1 = [
            ["SBID",""],
            ["SSGSMC","公司"],
            ["YHFJMC","级别"],
            ["SBMC","隐患点"],
            ["JHXSSJ","发现时间"],
            ["YHMS","隐患描述"],
        ];
    var area = param.name;
        	if(area == '核心'){
		    	var sfhxq = '1';
		    } else {
		    	var sfhxq = '-1';
		    }
	    	switch(area){
			        case '上海'://上海
	  					var ssgs = '-1';
	  				    break;
	  				case '核心'://核心
	  					var ssgs = 'JBH-HXQ';
	  				    break;
	  				case '检修'://检修
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50';
	  				    break;
	  				case '浦东'://浦东
	  					var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06';
	  				    break;
	  				case '市区'://市区
	  				    var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03';
	  				    break;
	  				case '市北'://市北
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04';
	  				    break;
	  				case '市南'://市南
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05';
	  				    break;
	  				case '嘉定'://嘉定
	  				   var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08';
	  				    break;
	  				case '松江'://松江
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A';
	  				    break;
	  				case '青浦'://青浦
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09';
	  				    break;
	  				case '奉贤'://奉贤
	  				  var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07';
	  				    break;
	  				case '金山'://金山
	  				 var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B';
	  				    break;
	  				case '崇明'://崇明
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ';
	  				    break;
	  				case '长兴'://长兴
	  				var ssgs = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ';
	  				    break;
	  			}
	    	
    switch(param.color){
	case '#5fb4e5'://已巡视:#5fb4e5
		showBaoDianTeXunList(getXunShiTongJiDetail_YXS,titleList_YXS1,"已巡视",ssgs,sfhxq);
	    break;
	case '#0071ce'://计划巡视:#0071ce
		showBaoDianTeXunList(getXunShiTongJiDetail_JHXS,titleList_JHXS1,"计划巡视",ssgs,sfhxq);
	    break;
	case '#e3bc31'://已发现缺陷:#e3bc31
	    showBaoDianTeXunList(getXunShiTongJiDetail_YFXQX,titleList_YFXQX1,"已发现缺陷",ssgs,sfhxq);
	    break;
	case '#fa364a'://已发现隐患:fa364a
		showBaoDianTeXunList(getXunShiTongJiDetail_YFXYH,titleList_YFXYH1,"已发现隐患",ssgs,sfhxq);
	    break;
}
}


