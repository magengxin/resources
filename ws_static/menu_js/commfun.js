// 分析图显示隐藏
var Popup = (function(){
    var curpopup = null;
    function show(idSelector) {
        var newpopup = parent.document.querySelector(idSelector);
        if(!newpopup) {
            return;
        }
        hide();
        newpopup.classList.add("is-show");
        curpopup = newpopup;
    }
    function hide() {
        if(!curpopup) {
            return;
        }
        curpopup.classList.remove("is-show");
        curpopup = null;
    }
    return {
        show: show,
        hide: hide
    }
})();


//地图跳转配置
var lxtomapMap = {
    "ZZ": "transformerZzLayer",//
    "GZ": "transformerGzLayer",
    "SXBPH": "transformerSxbphLayer",
    "DDY": "transformerDdyLayer",
    "QXGD": "workRepairLayer",
    "ZDGD": "workActiveLayer",
    "YCRW": "wechatAbnormalLayer",//异常处置任务
    "JJRW": "wechatUrgentLayer",//紧急处置任务
    "BDDX": "powerProtecLayer",//保电对象
    "CK": "materialWarehouseLayer",//仓库
    "GYS": "materialSupplierLayer",//供应商
    "10kV_DZ": "protecCorePoint10kVLayer",
    "35kV_DZ": "protecCorePoint35kVLayer",
    "500kV_DZ": "wjPointJl500Layer",
    "hqry": "resourcePersonnelLogisLayer",//后勤人员
    "jxry": "resourcePersonnelOverhaulLayer",//检修人员
    "txry": "resourcePersonnelPatrolLayer",//特巡人员
    "qxry": "resourcePersonnelRepairLayer",//抢修人员
    "wxry": "resourcePersonnelMobileLayer",//外协人员
    "GZJC": "faultPointLayer",//故障监测图层
    "XSRW" : "wechatPatrolLayer",//巡视任务图层
}

//地图专题跳转
var LxToZTmapMap = {
    "YXZT": "runStatus",//电网运行-运行状态
    "GDFU": "runPower",//电网运行-供电服务
    "ZDBZ": "intelligenceSafeguard",//智慧保电-重点保障
    "ZNGZ": "intelligencePerception",//智慧保电-智能感知
    "YWZH": "business",//业务指挥
    "ZYJK": "resourceControl",//资源掌控
}

//通用建表
function createList(parentid, titlemaps, values, dealRowfun, stylefun, clickfun, locallayer, haspic) {
//parentid---表结构的父级盒子
//titlemaps-----标题
//values--------后台获取数据
//dealRowfun----标题列表
//stylefun------地图定位图标样式
//locallayer----判断有没有定位
//haspic-------如果内容为空用--表示
    var btnclick = function (funidx, id, locallayer) {//地图定位
        return function () {
            clickfun[funidx](id, locallayer);
        }
    };

	$("#"+parentid+'_add',parent.document).empty();
    titlemaps.forEach(function (item, index) {
    	if(index == 0){
    		var p0 = $("<th>", 
    		{
    			text: item[1],
    			style: "width:50px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;"
    		}
    		);
    	} else{
    		var p0 = $("<th>", 
    		{
    			text: item[1],
    			style: "width:375px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;"
    		}
    		);
    	}
        
        $("#"+parentid+'_add',parent.document).append(p0);
   });
   
   $("#FourUl",parent.document).find('table').empty();
    if (!values) {
        return;
    }
    
    //有没有定位
    values.forEach(function (sourceRow, rowidx) {
    	var tr = $("<tr>",{});
        var row = dealRowfun ? dealRowfun(sourceRow) : sourceRow;
        var colors = stylefun ? stylefun[sourceRow] : undefined;

        var start = locallayer ? 1 : 0;
        var end = haspic ? row.length - 1 : row.length;

        //地图定位
        if (locallayer) {

            var img = $("<img>", {
                src: basepath + '/ws_static/img/position.png',
                //class: 'positionClass',
                //class: "bottom2PClass ",
                 style: 'width: 36;height:36;cursor: pointer;',
                click: btnclick(0, row[0], locallayer === "-1" ? sourceRow : locallayer),
            });

            var td0 = $("<td>", {
                // text: img.html(),
                //title: value,
//              class: "bottom2PClass",
                style: 'width:50px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;',
                //click: btnUrlclick(i,row),
            });

            td0.css({color: colors});
            td0.append(img);
            tr.append(td0);
        }


        //普通属性
        for (var i = start; i < end; i++) {//弹框每个文字内容的样式
            var value = row[i];
            value === null ? value = "---" : value;

            var td0 = $("<td>", {
            	title: value,
            	text: value,
               style: 'white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width:375px;height: 60px;line-height: 60px;padding:0 10px;font-size: 24px;',
            });
            td0.css({color: colors});
            tr.append(td0);
        }
        $("#FourUl",parent.document).find('table').append(tr);
        $("#div-1",parent.document).css('width',375*row.length+'px');
    });

}
//弹出中间地图区域框子
function setTongDaoJianPaiIframeUrl(url) {
    $("#TongDaoJianPaiPage",parent.document).removeClass('hide').addClass('show');
    $("#TongDaoJianPaiPageIframe",parent.document).attr("src", url);
}

//定位地图
function JumpMap(id, locallayer) {
	$(".bottom-list").css('height','450px');
	$('.lys_box_inner').css('height','342px');
	$('.bottom2').css('height','270px');
	$('.mainDiv').css('height','342px');
    $('#div-1').css('height','342px');
	$('.bottomChange').css('background','url("'+basepath+'ws_static/img/bottomChange.png") center no-repeat');
    if(id=="2018080801"){
        locallayer="powerProtecALayer";
    }
    var param = {
        layer: locallayer,
        val: id,
    };
//  document.getElementById("iframe1").contentWindow.fly(param);
    window.parent.document.getElementById("iframe1").contentWindow.fly(param);
    flyTo3D(locallayer,id);
}

//设备定位
function fly2Equip(id) {
	$(".bottom-list").css('height','450px');
	$('.lys_box_inner').css('height','342px');
	$('.bottom2').css('height','270px');
	$('.mainDiv').css('height','342px');
    $('#div-1').css('height','342px');
	$('.bottomChange').css('background','url("'+basepath+'ws_static/img/bottomChange.png") center no-repeat');
//  document.getElementById("iframe1").contentWindow.fly2Equip(id);
    window.parent.document.getElementById("iframe1").contentWindow.fly2Equip(id);
     flyToEquip3D(id);

}
//显示保电路径
function showProtectedRoute(id) {
    document.getElementById("iframe1").contentWindow.showProtectedRoute(id);
}
//专题地图调用
function JumpZhuanTiMap(runStatus) {
    var param = {    	//name :专题名称
        "name": runStatus
    };
    document.getElementById("iframe1").contentWindow.changeSpecial(param);
}

//获取时间的函数
function gettime() {

    var dateObj = {};
    var date = new Date();
    var year = date.getFullYear();
    var monthStr = date.getMonth() + 1;
    var dayStr = date.getDate();
    var hourStr = date.getHours();
    var minutesStr = date.getMinutes();
    var month = monthStr >= 10 ? monthStr : "0" + monthStr;
    var day = dayStr >= 10 ? dayStr : "0" + dayStr;
    var hour = hourStr >= 10 ? hourStr : "0" + hourStr;
    var minutes = minutesStr > 10 ? minutesStr : "0" + minutesStr;

    dateObj.year = year;
    dateObj.month = month;
    dateObj.day = day;
    dateObj.hour = hour;
    dateObj.minutes = minutes;

    return dateObj;
}

//左侧全网状态右侧正常图标显示
function changeYichang(id, isyichang) {
    if (isyichang) {
        $('#' + id + "_text").text("异常");
        $('#' + id + "StatusImg").addClass("yellow_alarm_color");
    } else {
        $('#' + id + "_text").text("正常");
        $('#' + id + "StatusImg").removeClass("yellow_alarm_color");
    }
}

//yyyy-mm-dd
function conveStringToDate(datestring) {
    var date = new Date(datestring.replace(/-/, "/"));

}

//yyyy-mm-dd hh:mm:ss
function conveAllStringToDate(datestring) {
    var arr1 = datestring.split(" ");
    var sdate1 = arr1[0].split("-");
    var sdate2 = arr1[1].split(":");
    var date = new Date(sdate[0], sdate[1] - 1, sdate[2]);
    return date;

}
//返回绝对值
function getTowDateMilliSec(date1, date2) {
    var val = Math.abs(date1 - date2);
    return val;
}

function dateFtt(fmt, date) {
    var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
    };

    var fmtN = fmt;
    if (/(y+)/.test(fmtN)) {
        fmtN = fmtN.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }
    Object.keys(o).forEach(function (k) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmtN = fmtN.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k].toString()) : (("00" + o[k]).substr(o[k].toString().length)));
        }
    });
    return fmtN;
}

function getHourTowDate(date1, date2) {
    var hour = getTowDateMilliSec(date1, date2);
    return hour / 1000 / 60 / 60;
}

function getDayTowDate(date1, date2) {
    var day = getTowDateMilliSec(date1, date2);
    return day / 1000 / 60 / 60.24;
}


/**
 * 批量ajax回调
 * @param callback f
 * @param configs [{'url':'', 'param':''}]
 */
function bcallgetajax(callback, configs) {
    if (configs == undefined || !Array.isArray(configs)) {
        return;
    }

    var abjs = [];
    for (var i = 0; i < configs.length; i++) {
        abjs[i] = $.ajax({url:configs[i].url, data: configs[i].param, type: 'get', dataType: 'json'});
    }

    $.when.apply(this, abjs)
        .done(callback)
        .fail(function(data){
            console.log(data);
        });
}

function callgetajax(callback, url, param) {
    callgetajax(callback, url, param, 'get');
}

function callgetajax(callback,url,param, type) {
    $.ajax({
        url: url,
        data: param,
        type: type,
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function callAjaxSync(callback,url,param, type) {
    $.ajax({
        url: url,
        data: param,
        type: type,
        dataType: 'json',
        async: false,
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function callgetajax1(callback, url, param,p) {
    callgetajax2(callback, url, param, 'get',p);
}

function callgetajax2(callback,url,param, type,p) {
    $.ajax({
        url: url,
        data: param,
        type: type,
        dataType: 'json',
        success: function (data) {
            callback(data,p);
        },
        error: function (data) {
            console.log(data);
        }
    });
}


//弹框显示隐藏
var ulmap = {"KHFW":"FourUl"}

//选择显示哪个ulmap
function ChooseShow(type) {

    $('.bottom-list',parent.document).removeClass("hide");


    Object.keys(ulmap).forEach(function (name) {
        if (name === type) {
        	$("#"+ulmap[name],parent.document).removeClass("hide");
        } else {
        	$("#"+ulmap[name],parent.document).addClass("hide");
        }
    })
}
$(function(){
	//弹出框显示隐藏放大缩小
	$("#bottomDetailClose").click(function () {
        $(".bottom-list").addClass("hide");
        $(".bottom-list").css('height','450px');
    	$('.lys_box_inner').css('height','342px');
    	$('.mainDiv').css('height','280px');
    	$('#div-1').css('height','280px');
    	$('.bottomChange').css('background','url("'+basepath+'ws_static/img/bottomChange.png") center no-repeat');
    });
    var bottomChangeFlag = true;
	$("#bottomChangeDown").click(function () {
		if(bottomChangeFlag){
			$(".bottom-list").css('height','2000px');
	    	$('.lys_box_inner').css('height','1900px');
	    	$('.mainDiv').css('height','1900px');
	    	$('#div-1').css('height','1900px');
	    	$('.bottomChange').css('background','url("'+basepath+'ws_static/img/bottomChangeDown.png") center no-repeat');
	    	bottomChangeFlag = false;
		}else{
			$(".bottom-list").css('height','450px');
	    	$('.lys_box_inner').css('height','342px');
	    	$('.mainDiv').css('height','280px');
	    	$('#div-1').css('height','280px');
	    	$('.bottomChange').css('background','url("'+basepath+'ws_static/img/bottomChange.png") center no-repeat');
	    	bottomChangeFlag = true;
		}
	    
	});
})




//明细分页
function fenye(){
	$('#FourUl',parent.document).find('tr').hide();
	for(var i = 0;i<10;i++){
                	
    	$('#FourUl',parent.document).find('tr').eq(i).show();
    }
	$.fn.pageList = function (arg, methodName) {
            if (typeof methodName === "string" && $.trim(methodName) != "") {
                switch (methodName) {
                    case 'refresh'://刷新当前页,一般用于删除或者更新后
                        $(this).each(function () {
                            var arg = $(this).data('pageListArg');
                            if (arg != null && typeof arg.clickCallback === "function") {
                                arg.clickCallback(arg.currentPage);
                            }
                        });
                        break;
                }
            }
            else {
                var defaultSettings = {
                    prevText: 'Prev',//显示的前一页文本
                    nextText: 'Next',//显示的下一页文本
                    showGoLink: 'auto',//是否显示快速跳转，可能的值为auto 自动判断；true 永远显示；false 永不显示
                    goInputType: 'select',//如何显示快速跳转输入，可能的值为select 下拉列表；text 输入框，默认值为select
                    goText: 'Go',//显示的快速跳转文本
                    recordText: '',//显示记录数，为空时不显示，否则按照占位符显示文本，{0}表示总页数，{1}表示总记录数
                    clickCallback: function (currentPage) { },//链接被点击时触发的事件，currentPage表示当前点击的是第几页，索引从1开始
                    renderPerCall: true,//是否每次点击都重新绘制，如果每次clickCallback事件中都会重新绘制pageList，此处请设置为false减少绘制消耗
                    pageSize: 10,//每页显示的数据条数
                    currentPage: 1,//当前第几页，索引从1开始
                    totalCount: 0,//总记录数
                    currentPageCenter: true,//当前页是否居中，true表示居中,false表示按showPageRange倍率范围显示,注意此值会导致完全不同的显示方式
                    showPageRange: 5//允许最小值3，当currentPageCenter设置为true时，表示去除第一页，最后一页后，还需显示的页面数量；为false时,表示在倍率范围内应当显示的页面链接数量,
                };
                arg = $.extend({}, defaultSettings, arg);
                var totalPages = ~~(arg.totalCount / arg.pageSize) + (~~(arg.totalCount % arg.pageSize) == 0 ? 0 : 1);//获取总页数
                if (arg.currentPage < 1) {//修正当前页页码为第一页
                    arg.currentPage = 1;
                }
                if (arg.currentPage > totalPages) {//修正当前页页码为最后一页
                    arg.currentPage = totalPages;
                }
                if (!(arg.showPageRange > 2)) {
                    arg.showPageRange = 3;
                }
                $(this).data('pageListArg', arg);
                $(this).each(function () {
                    $(this).empty();//无数据
                    if (totalPages > 0) {
                        var ul = $('<ul class="pager"></ul>');
                        var startPage = 2, endPage = totalPages - 1;//排除首页最后一页后显示的第一个超链接，最后一个超链接
                        var prevS = false, nextS = false;//是否需要显示…对应的超链接
                        if (arg.showPageRange + 4 < totalPages) {//因为页面链接最多包含arg.showPageRange + 4个，所以如果总页数大于时，才显示对应的…
                            if (!arg.currentPageCenter) {
                                var rangeIdx = ~~(arg.currentPage / arg.showPageRange) + (~~(arg.currentPage % arg.showPageRange) == 0 ? 0 : 1);
                                startPage = (rangeIdx - 1) * arg.showPageRange + 1;
                                endPage = rangeIdx * arg.showPageRange;
                                if (startPage < 2) { startPage = 2; }//修正
                                if (endPage >= totalPages) { endPage = totalPages - 1; }//修正
                                if (startPage >= endPage) { startPage = startPage - arg.showPageRange; }//修正
                                if (endPage == totalPages - 2) { endPage++; }//修正
                                prevS = startPage >= arg.showPageRange;
                                nextS = endPage < totalPages - 1;
                            }
                            else {
                                var prevReduce = ~~(arg.showPageRange / 2);
                                var nextAdd = prevReduce;
                                if (~~(arg.showPageRange % 2) == 0) {
                                    prevReduce--;//showPageRange为偶数时，currentPage前面显示的页码链接数比后面显示的链接数少一个
                                }
                                if (prevReduce < 0) {//修正当showPageRange被设置为1导致的负数
                                    prevReduce = 0;
                                }
                                startPage = arg.currentPage - prevReduce;
                                if (startPage < 2) { startPage = 2; }//修正startPage
                                endPage = arg.currentPage + nextAdd;
                                if (endPage - startPage < arg.showPageRange) { endPage = startPage + arg.showPageRange - 1; }//根据startPage修正endPage
                                if (endPage > totalPages - 1) { endPage = totalPages - 1; startPage = endPage - arg.showPageRange + 1; }//修正endPage,并同步修正startPage
                                if (startPage <= 3) {//再次修正startPage
                                    startPage = 2;
                                }
                                if (endPage > totalPages - 3) {//再次修正endPage
                                    endPage = totalPages - 1;
                                }
                                prevS = startPage - 1 > 1;
                                nextS = endPage + 1 < totalPages;
                            }
                        }
                        var li = renderDoms(arg.prevText, arg.currentPage == 1, false, arg.currentPage - 1, arg);//前一页
                        li.addClass("prev");
                        ul.append(li);
                        ul.append(renderDoms("1", arg.currentPage == 1, arg.currentPage == 1, 1, arg));//第一页
                        if (prevS) {
                            ul.append(renderDoms('…', false, false, startPage - 1, arg));//…页
                        }
                        for (var i = startPage; i <= endPage; i++) {
                            ul.append(renderDoms(i, arg.currentPage == i, arg.currentPage == i, i, arg));//第i页
                        }
                        if (nextS) {
                            ul.append(renderDoms('…', false, false, endPage + 1, arg));//…页
                        }
                        if (totalPages > 1) {
                            ul.append(renderDoms(totalPages, arg.currentPage == totalPages, arg.currentPage == totalPages, totalPages, arg));//最后一页
                        }
                        li = renderDoms(arg.nextText, arg.currentPage == totalPages, false, arg.currentPage + 1, arg);//下一页
                        li.addClass("next");
                        ul.append(li);
                        var showGo;
                        switch ((arg.showGoLink + '').toLowerCase()) {
                            case "true":
                                showGo = true; break;
                            case "false":
                                showGo = false; break;
                            default:
                                showGo = arg.showPageRange + 4 < totalPages; break;
                        }
                        if (showGo) {
                            li = $('<li class="text"><span class="go">' + arg.goText + '</span></li>');
                            var sel;
                            if (arg.goInputType.toLowerCase() != 'text') {
                                sel = $('<select class="go"></select>');//<input tyle="text" class="go" />
                                for (var i = 1; i <= totalPages; i++) {
                                    sel.append('<option value="' + i + '">' + i + '</option>');
                                }
                                sel.val(arg.currentPage);
                            }
                            else {
                                sel = $('<input tyle="text" class="go" />');
                                sel.focus(function () {
                                    $(this).val('');
                                }).change(function () {
                                    var num = parseInt($(this).val());
                                    if (num && num > 0) {
                                        if (num > totalPages) {
                                            num = totalPages;
                                        }
                                        $(this).val(num);
                                    }
                                    else {
                                        $(this).val('');
                                    }
                                }).keyup(function () { $(this).change(); });
                            }
                            var sp = li.find('span');
                            sel.insertBefore(sp);
                            sp.click(function () {
                                var pageNumber = ~~$(this).parent().find('.go:eq(0)').val();
                                if (pageNumber > 0) {
                                    clickEvent($(this).parent(), arg, pageNumber);
                                }
                            });
                            ul.append(li);
                        }
                        if (typeof arg.recordText === "string" && $.trim(arg.recordText) != "") {
                            ul.append('<li class="text">' + arg.recordText.replace(/\{0\}/g, totalPages).replace(/\{1\}/g, arg.totalCount) + '</li>');
                        }
                        $(this).append(ul);
                    }
                });
            }
            function renderDoms(text, disable, active, pageNumber, arg) {
                var li = $('<li><a style="cursor:' + (disable ? "" : "pointer") + ';">' + text + '</a></li>');
                if (active) {
                    li.addClass("active");
                }
                if (disable) {
                    li.addClass("disable");
                }
                else {
                    li.click(function () {
                        clickEvent(this, arg, pageNumber);
                    });
                }
                return li;
            }
            function clickEvent(dom, arg, pageNumber) {
                if (typeof arg.clickCallback === "function") {
                    arg.clickCallback(pageNumber);
                }
                if (arg.renderPerCall) {
                    arg.currentPage = pageNumber;
                    $(dom).parent().parent().pageList(arg);
                }
            }
        };
       
        $('.pager-list',parent.document).pageList({
            prevText: '前一页',
            nextText: '下一页',
            recordText: '共{0}页，{1}条记录',
            totalCount: $('#FourUl',parent.document).find('tr').length,
            goInputType: 'text',
            //showGoLink: true,
            showPageRange: 5,
            renderPerCall: true,
            clickCallback: function (currentPage) {
            	console.log(currentPage);
            	$('#FourUl',parent.document).find('tr').hide();
                console.info("currentPage:" + currentPage);
                for(var i = (currentPage-1)*10;i<currentPage*10;i++){
                	
                	$('#FourUl',parent.document).find('tr').eq(i).show();
                }
            }
        });
}



//进入核心保电区
function intohxbdq(info,type) {

    if("核心"==info){
        $("#firstTab").find("li").each(function(){
            var li=$(this);
            li.removeClass("navTabCur");
        });

        if("1" == type){ //重点保障
            $("#zhjk").addClass("navTabCur");

            $("#zhuangtai").hide()
            $("#zhihui").hide();
            $("#ziyuan").hide();

            $("#jiankong").show();
        }else if("2" == type){ //实时监控
            $("#qwzt").addClass("navTabCur");
            $("#yxzt").removeClass("active_tab");
            $("#gzjc").addClass("active_tab");

            $("#jiankong").hide();
            $("#zhihui").hide();
            $("#ziyuan").hide();

            $("#zhuangtai").show();

            $(".run_box").addClass("hide");
            $(".run_box_gzjc").removeClass("hide")
        }else if("3" ==type){ //业务指挥
            $("#ywzh").addClass("navTabCur");

            $("#zhuangtai").hide()
            $("#jiankong").hide();
            $("#ziyuan").hide();

            $("#zhihui").show();
        }else if("4"==type){ //资源监控
            $("#zyjk").addClass("navTabCur");

            $("#zhuangtai").hide();
            $("#jiankong").hide();
            $("#zhihui").hide();

            $("#ziyuan").show();
        }else if("5"==type){ //智能感知
             $("#zhjk").addClass("navTabCur");

            $("#zhuangtai").hide()
            $("#zhihui").hide();
            $("#ziyuan").hide();
            
            $("#jiankong").show();
            $("#jiankong li").eq(1).addClass('active_tab').siblings().removeClass('active_tab');
	        $('.ai_box').eq(1).removeClass('hide').siblings('div').addClass('hide');
        }
    }else if("上海"==info){
        $("#firstTab").find("li").each(function(){
            var li=$(this);
            li.removeClass("navTabCur");
        });
        $("#qwzt").addClass("navTabCur");
        $(".run_box").removeClass("hide");
        $(".run_box_gzjc").addClass("hide");
        //保障重点多出两个按钮
        $('#jiankong').hide()
        $(".status_tab1").find("li").each(function(){
            var li=$(this);
            li.removeClass("active_tab");
        });
        $("#yxzt").addClass("active_tab");
        $("#zhuangtai").show();

    }

    //故障监测切换核心
        $("#areaGZJC").html(info);
        get_tztj_ssjc(info);

        $("#zdgd_stat_num1").click(function () {
            $("#zdgd_stat_num1").css({'cursor': 'pointer'});
            ChooseShow("KHFW");
            $('#qiangdan_title').text("主动工单");
            showGuZhangJianCeList(null,1,SSGSMAP_NAME[g_deptchange]);
        });

        $("#zdgd_stat_num2").click(function () {
            $("#zdgd_stat_num2").css({'cursor': 'pointer'});
            ChooseShow("KHFW");
            $('#qiangdan_title').text("主动工单");

            showGuZhangJianCeList(null,2,SSGSMAP_NAME[g_deptchange]);
        });

        $("#zdgd_stat_num3").click(function () {
            $("#zdgd_stat_num3").css({'cursor': 'pointer'});
            ChooseShow("KHFW");
            $('#qiangdan_title').text("主动工单");

            showGuZhangJianCeList(null,3,SSGSMAP_NAME[g_deptchange]);
        });


    //配网运行切换核心
    $("#areaPWYX").html(info);
    var id="";
    if("核心"==info){
        id="JBH-HXQ";
    }else if("上海"==info){
        id="8a812897493378a00149567740676661";
    }
    getPeiWangYunXingDataByCompanyId(id);


    //供电服务切换核心
    $("#areaPWQX").html(info);
    get_gdfw_pwqx(info);


}
/**
 * 
 * 点击右侧切换地域时会触发该函数
 * @param {Object} area
 */
function get_gdfw_pwqx(area) {
	var SSGS = SSGSMAP_NAME[area];
	bindGongDianFuwuData(SSGS);//绑定供电服务右侧部分数据

}

//通道监拍
function tdjpUrl(){
    var url = basepath+"/bdGis/bdYFURLdata?url=xljk_zy_url";
    var tdjp_url="";

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            tdjp_url=data[0].URL;
        },
        error: function (data) {
            console.log(data);
        }
    });

    setTongDaoJianPaiIframeUrl(tdjp_url);
}

/**
 * 点击地图出现联动:
 * 停电热力图-故障检测 type 1
 * 负荷热力图-配网运行 type 2
 * 抢修热力图-供电服务 type 3
 */
function linkAge(type){
	 
	switch(type){
	case '1':
	    $("#gzjc").addClass('active_tab').siblings().removeClass('active_tab');
		$('.run_box').eq(1).removeClass('hide').siblings('div').addClass('hide');
		$("#gzjc1").click();
	    break;
	case '2':
	    $("#pwyx").addClass('active_tab').siblings().removeClass('active_tab');
		$('.run_box').eq(2).removeClass('hide').siblings('div').addClass('hide');
        $('#pwyx1').click();
	    break;
	case '3':
	    $("#gdfw").addClass('active_tab').siblings().removeClass('active_tab');
	    $('.run_box').eq(3).removeClass('hide').siblings('div').addClass('hide');
        $('#gdfw1').click();
    }
}


