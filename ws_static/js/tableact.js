
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

function reCreateul(ulid,id){
    var ul = $("#"+ulid);
    var lis = $(ul).find('li');

    for (var i = 0 ; i < lis.length ;i++){
        $(lis[i]).remove();
    }

    var li0 = $("<li>",{
        id:id
    });
    ul.append(li0);
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

    //先不使用
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

//专门给保电对象列表
function creatediv1(BDDXID,text,titlemaps,ZT,rows,tableid,bddxjb) {
    var div1 = $("<div>",{
        class: 'power_box',
    });
   if(bddxjb =="3"){
   	var p0 = createTitle1(rows[0].SBS[0].SBID,text,ZT,bddxjb);
   } else {
   	var p0 = createTitle1(BDDXID,text,ZT,bddxjb);

   }
    div1.append(p0);
    var div2 = createContext2(titlemaps,rows,tableid);
    //div2.css("display","none");
    div2.css("display","block");
    div1.append(div2);

    var spantext = $(p0).find("span");
    spantext.click(function () {
        var isHidden=$(div2).is(':hidden');
        if(isHidden){
            $(div2).slideDown(200);
        }else {
            $(div2).slideUp(200);
        }
    });

    return div1;
}

function createTitle1(BDDXID,text,ZT,bddxjb) {

    var btnMapclick = function (bddxjb,id) {
        return function () {
        	if(bddxjb == "3"){
        		JumpMap(id,"protecCorePoint10kVLayer");
                showProtectedRoute(id);
        	} else{
        		JumpMap(id,lxtomapMap.BDDX);
                showProtectedRoute(id);
        	}
            
        }
    };

    var btnclick = function (id) {
        return function () {
            var url = basepath + "svgGet/svgLJ?SBID="+id;
            setTongDaoJianPaiIframeUrl(url);
        }
    };

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

function createTable2(titlemaps,rows,tableid){
    var table = $("<table>");
    var thead = createTableTitle(titlemaps);
    var tbody = createTablebody(titlemaps,rows,tableid,false,true,false);
    table.append(thead);
    table.append(tbody);
    return table;
}

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

function createTablebody(titlemaps,rows,tableid,hassvg,hascursor,haspadding) {
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

function createTableRow(row,rowid,hassvg,hascursor,haspadding) {
   console.log("***************************>>>>>>>"+console.log(row));
   console.log("***************************>>>>>>>SBID:"+console.log(row.SBID));
   var btnMapclick = function (id) {
        return function () {
        	console.log("***************************>>>>>>>"+id);
        	 fly2Equip(id);
            
        }
    };
    
    var btnclick = function (id) {
        return function () {
            var url = basepath + "svgGet/svgZN?SBID="+id;
            setTongDaoJianPaiIframeUrl(url);
        }
    };
    var tr = $("<tr>");

    var td = $("<td>");

    if (haspadding) {
        td.css({"width":"32%","text-align":"left","padding-left":"160px"});//22
    }
    var img = $("<img>",{
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

    tr.append(td);//第一个字段

    var td = $("<td>",{
        text: Lx2McMap[row.SBLX]?Lx2McMap[row.SBLX]:row.SBLX,
    });
    if (haspadding) {
        td.css({"width":"18%","text-align":"left"});//10
    }
    tr.append(td);//第二个字段

    var td = $("<td>",{
        text: DYDJ2SimMcMap[row.DYDJ],
    });
    if (haspadding) {
        td.css({"width":"15%","text-align":"left"});
    }
    tr.append(td);//第三个字段


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
        tr.append(td);//第四个字段
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

    var table = createTable3(rows,parent_rowid);
    div3.append(table);

    td.append(div3);
    tr.append(td);
    return tr;

}
function createTable3(rows,tableid){
    var table = $("<table>");
    var tbody = createTablebody(null,rows,tableid,true,false,true);
    table.append(tbody);
    return table;
}
