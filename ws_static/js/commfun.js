



	


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
    "FTFX": ""
}

//通用建表
function createList(parentid, titlemaps, values, dealRowfun, stylefun, clickfun, locallayer, haspic) {

    var btnclick = function (funidx, id, locallayer) {
        return function () {
            clickfun[funidx](id, locallayer);
        }
    };

    var btnPicclick = function (funidx, rows, idx) {
        return function () {
            clickfun[funidx](rows, idx);
            //showImgDiv(rows,idx);
        }
    };

    var btnUrlclick = function (funidx, rows, idx) {
        return function () {
            clickfun[funidx](rows, idx);
        }
    };

	$("#"+parentid+'_add').empty();
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
        
        $("#"+parentid+'_add').append(p0);
   });
   
   $("#FourUl").find('table').empty();
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
        for (var i = start; i < end; i++) {
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
        //图片查看
//      if (haspic) {
//          var url = row[row.length - 1];
//          var showimgurl;
//          url === null ? showimgurl = basepath + "/ws_static/img/no_img.png" : showimgurl = basepath + "/ws_static/img/have_img.png";
//          var img = $("<img>", {
//              src: showimgurl,
//              class: 'positionClass',
//              //class: "bottom2PClass",
//              //style: 'cursor: pointer;margin-bottom:1rem;display: block;',
//              //style: 'cursor: pointer;',
//              click: btnPicclick(end, values, rowidx),
//          });
//
//          tr.append(img);
//      }
        $("#FourUl").find('table').append(tr);
        $("#div-1").css('width',375*row.length+'px');
    });

}

function setTongDaoJianPaiIframeUrl(url) {
    $("#TongDaoJianPaiPage").removeClass('hide').addClass('show');
    $("#TongDaoJianPaiPageIframe").attr("src", url);
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
    document.getElementById("iframe1").contentWindow.fly(param);
//  flyTo3D(locallayer,id);
}

//设备定位
function fly2Equip(id) {
	$(".bottom-list").css('height','450px');
	$('.lys_box_inner').css('height','342px');
	$('.bottom2').css('height','270px');
	$('.mainDiv').css('height','342px');
    $('#div-1').css('height','342px');
	$('.bottomChange').css('background','url("'+basepath+'ws_static/img/bottomChange.png") center no-repeat');
    document.getElementById("iframe1").contentWindow.fly2Equip(id);
//   flyToEquip3D(id);

}
//显示保电路径
function showProtectedRoute(id) {
    document.getElementById("iframe1").contentWindow.showProtectedRoute(id);
}

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


function showImgDiv(rows, idx) {

    var row = rows[idx];

    shownow();
    setLefRightClick();

    //显示照片
    function shownow() {
        var imgurl = row.TPDZ;
        if (!imgurl) {
            return;
        }

        $("#showImgBigDiv").removeClass("hide").addClass("show");
        $("#showImgDiv").css({"background": "url(" + imgurl + ") no-repeat center"});
        setInfo(row);
        $("#showImgBigDiv").attr("nowidx", idx);
    }

    //设置左右按钮
    function setLefRightClick() {
        $("#arrowLeft").click(function () {
            var nowidx = $("#showImgBigDiv").attr("nowidx");
            if (nowidx == 0) {
                return;
            }
            nowidx--;
            $("#showImgBigDiv").attr("nowidx", nowidx);
            var url = rows[nowidx].TPDZ;
            
            setInfo(rows[nowidx]);
            $("#showImgDiv").css({"background": "url(" + url + ") no-repeat center"});
        });

        $("#arrowRight").click(function () {
            var nowidx = $("#showImgBigDiv").attr("nowidx");
            if (nowidx == rows.length - 1) {
                return;
            }
            nowidx++;
            $("#showImgBigDiv").attr("nowidx", nowidx);
            var url = rows[nowidx].TPDZ;
            setInfo(rows[nowidx]);
            $("#showImgDiv").css({"background": "url(" + url + ") no-repeat center"});
        });
    }

    function setInfo(checkrow) {
    	console.log(checkrow)
        $("#tongdao_yclx").text(checkrow.YCLX);
        $("#tongdao_sbmc").text(checkrow.SBMC);
    }
}




function setVisite(id, isvis) {
    if (isvis) {
        $("#" + id).removeClass("hide").addClass("show");
    } else {
        $("#" + id).removeClass("show").addClass("hide");
    }
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