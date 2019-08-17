//糖葫芦变色
$('.monitor_bottom>ul>li').on('click', function() {
	$(this).find('p').css({
		color: '#fff'
	});
	$(this).parent().find('.active_btn').find('p').css({
		color: '#fff'
	});
	$(this).siblings().find('p').css({
		color: '#13b9e7'
	});
	$(this).siblings('.active_btn').find('p').css({
		color: '#13b9e7'
	});
	$(this).siblings('.active_btn').css({
		color: '#fff'
	});
});


//单位切换点击事件处理
function doDeptChange(deptdivid,obj, id, num) {
    $("#"+deptdivid).find('div').css({"background-size": "100%"});
    $("#"+deptdivid).find('p').css({"color": "#FFFFFF"});
    // $('#QS').siblings('p').css({"color": "#FFFFFF"});
    // $('#QS_BD').siblings('p').css({"color": "#FFFFFF"});
    // $('#HX').siblings('p').css({"color": "#FFFFFF"});
    // $('#HX_BD').siblings('p').css({"color": "#FFFFFF"});
    if (num === 2){
        obj = $(obj).siblings("div");
    }

    // $(obj).css({"background-size": "150%"});
    $('#' + id ).siblings('p').css({"color": "#13b9e7"});
    var text = $(obj).siblings("p").text();
    text === "全市" ? text = "上海" : text;

    var ssgs = SSGSMAP_NAME[text];
    if (text === "上海" ||  text === "核心" ){
        $("#" + id).css({"background-size": "100%"});
    }
    deptchange = ssgs;
    refreshByDept(ssgs);//根据单位切换重新加载
};

var qualifieds = [];
//根据单位切换重新加载
function refreshByDept(ssgs) {
    //运行状态
//  getTaiQuInfo(ssgs); //台区监测

    for(var i=0;i<qualifieds.length;i++) {
        getDianYAHeGeLvData(qualifieds[i].obj,qualifieds[i].option,qualifieds[i].DYLX,ssgs);//电压合格率
    }
    getSheBeiZhuangTai(g_device_status.obj,g_device_status.option,ssgs); //设备状态
    //getTongDaoJianPai(); //通道监拍
    //getDianNengZhiLiangData(g_DNZL.obj,g_DNZL.option);//电能量不需要切换

    //供电服务
//  dealZongTiQiangXiu(g_customerService.obj,g_customerService.option,ssgs);
//  dealGuZhangJianCeData(g_faultDetection_left.obj,g_faultDetection_left.option,null,ssgs);//故障监测
//  createGongDanPanle(ssgs);// 工单面板
}
//电压合格率
function getDianYAHeGeLvData(qualified,option, DYLX,ssgs) {
    var saaa = qualifieds.find(function (item) {
        return item.DYLX === DYLX;
    });
    if (!saaa){
        qualifieds.push({obj:qualified,option :option,DYLX:DYLX});
    }

    var ssgsval = ssgs||SSGS;

    var data={'SSGS': ssgsval, 'VOLTTYPE': DYLX};
    $.ajax({
        url: basepath + "interface/BDZT_GETGDDYHGL/0",
        data: data,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (data.data) {
                var rate = parseInt(parseFloat(data.data[0].RATE)*1000)/1000;
                option.title.text = rate+"%";
                option.series[0].data[0].value=100000-rate*1000;
                option.series[0].data[1].value=rate*1000;
                qualified.setOption(option);
            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}

//电能质量
g_DNZL = {};
function getDianNengZhiLiangData(containers,option,ssgs) {
    //url:   "bdGis/getDnzlIndexList?systemCode=dnzl&serviceCode=dnzl_003&offset=&limit=&orderBy=&companyId="+SSGS+"&days=3",
    var ssgsval = ssgs||SSGS;
    g_DNZL = {obj:containers,option :option};
    var attrurl;
    $.ajax({
//      url:  basepath + "bdGis/getDnzlIndexList?systemCode=dnzl&serviceCode=dnzl_003&offset=&limit=&orderBy=&companyId="+SSGS+"&days=3",
        url:  basepath + "bdGis/getDnzlIndexList?offset=&limit=&orderBy=&days=3&companyId="+ssgsval,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var xtpl = 0;	//系统频率合格率
            var dypc = 0;	//电压偏差合格率
            var sxbphd = 0;	//三相电压不平衡度合格率
            var dysb = 0;	//电压闪变合格率
            var dyzxbjbl = 0;	//电压总谐波畸变率合格率

            if(data.data.page.list && data.data.page.list.length >0) {//如果报错:Uncaught TypeError: Cannot read property 'page' of undefined 则说明后台接口有问题(… … HTTP Status 404 - … …)
                var list = data.data.page.list;
                xtpl = parseFloat((parseFloat(list[0].xtpl)*100).toFixed(1));
                dypc = parseFloat((parseFloat(list[0].dypc)*100).toFixed(1));
                sxbphd = parseFloat((parseFloat(list[0].sxbphd)*100).toFixed(1));
                dysb = parseFloat((parseFloat(list[0].dysb)*100).toFixed(1));
                dyzxbjbl = parseFloat((parseFloat(list[0].dyzxbjbl)*100).toFixed(1));
            }
            //电能质量五个饼图中间数字内容
            option.series[0].data[0].value = 100-xtpl;
            option.series[0].data[1].name = xtpl.toString()+"%";
            option.series[0].data[1].value = xtpl;

            option.series[1].data[0].value = 100-dypc;
            option.series[1].data[1].name = dypc.toString()+"%";
            option.series[1].data[1].value = dypc;

            option.series[2].data[0].value = 100-sxbphd;
            option.series[2].data[1].name = sxbphd.toString()+"%";
            option.series[2].data[1].value = sxbphd;

            option.series[3].data[0].value = 100-dysb;
            option.series[3].data[1].name = dysb.toString()+"%";
            option.series[3].data[1].value = dysb;

            option.series[4].data[0].value = 100-dyzxbjbl;
            option.series[4].data[1].name = dyzxbjbl.toString()+"%";
            option.series[4].data[1].value = dyzxbjbl;

            containers.setOption(option);//电能质量图表塞数据
        },
        error:function (data) {
            console.log(data);
        }
    });

    getDNZLAttrUrl(dealDNZLAttrUrl);//电能质量外部台账

    function dealDNZLAttrUrl(attrdata) {

        if (attrdata && attrdata.length >0){
            attrurl = attrdata[0].URL;
        }
        $("#dnzl_title").click(function () {
            setTongDaoJianPaiIframeUrl(attrurl);//电能质量中间地图区域弹框显示
        })
    }


    function clickEchart(param) {

        if (param.componentType !== "series"){
            return;
        }
        setTongDaoJianPaiIframeUrl(attrurl)//电能质量中间地图区域弹框显示
    }

}



//设备状态监控统计
var g_device_status;
function getSheBeiZhuangTai(device_status,option, ssgs,dydj) {
    g_device_status ? g_device_status:g_device_status = {obj:device_status,option :option};

    getSheBeiZhuangTaiData(dealdata,ssgs,dydj);

    function dealdata(data) {

        var resultset = {
            "500kV及以上":{idx:0,num:0},
            "220kV":{idx:1,num:0},
            "110kV":{idx:2,num:0},
            "35kV":{idx:3,num:0},
            "10kV":{idx:4,num:0},
            "0.4kV":{idx:5,num:0},
        };
        if (!data.data){
            data.data = [];
        }
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            var num = parseInt(row.YCS);
            var dydj = row.DYDJ;
            switch(dydj){
				case '08':
					var dydjmc = "0.4kV";
				    break;
				case '22':
					var dydjmc = "10kV";
				    break;
				case '25':
				    var dydjmc = "35kV";
				    break;
				case '32':
					var dydjmc = "110kV";
				    break;
				case '33':
					var dydjmc = "220kV";
				    break;
				case '35':
				case '37':
				case '85':
				case '83':
					var dydjmc = "500kV及以上";
				    break;
			}
            if (resultset[dydjmc]) {
                resultset[dydjmc].num += num;
            }
        }
        dealEchart(device_status,option,resultset);
    }

    //处理饼图
    function dealEchart(device_status,option,resultset) {

        Object.keys(resultset).forEach(function (name) {
            var obj = resultset[name];
//          option.series[0].data[obj.idx].value = obj.num;
//          option.series[0].data[obj.idx].name = name+"_" + obj.num;
            option.series[0].data[obj.idx].value = "0";
            option.series[0].data[obj.idx].name = name+"_" + "0";

        });
        device_status.setOption(option);
        device_status.on("click",clickEchart_device_status);
    }

    //饼图点击事件
    function clickEchart_device_status(param) {

        if (param.componentType !== "series"){
            return;
        }

        var seriesIndex = parseInt(param.seriesIndex);
        var dataIndex = parseInt(param.dataIndex);
        var name = param.name;
        var arr = name.split("_");
        var dydj = DYDJ2ValueMap[arr[0]];
        var area = $("#areaUl li.active_btn>p").text();
	    switch(area){
			case "全市"://上海全市
				var ssgs = "8a812897493378a00149567740676661";
			    break;
			case "核心"://核心
				var ssgs = SSGS_IDS[0];
			    break;
			case "浦东"://浦东
			    var ssgs = SSGS_IDS[1];
			    break;
			case "市区"://市区
				var ssgs = SSGS_IDS[2];
			    break;
			case "市北"://市北
				var ssgs = SSGS_IDS[3];
			    break;
			case "市南"://市南
				var ssgs = SSGS_IDS[4];
			    break;
			case "嘉定"://嘉定
				var ssgs = SSGS_IDS[5];
			    break;
			case "松江"://松江
				var ssgs = SSGS_IDS[8];
			    break;
		    case "青浦"://青浦
		    	var ssgs = SSGS_IDS[6];
			    break;
			case "奉贤"://奉贤
				var ssgs = SSGS_IDS[7];
			    break;
			case "金山"://金山
				var ssgs = SSGS_IDS[9];
			    break;
			case "崇明"://崇明
				var ssgs = SSGS_IDS[10];
			    break;
			case "长兴"://长兴
				var ssgs = SSGS_IDS[11];
			    break;
		}
        showSheBeiZhuangTaiList(dydj,ssgs);
    }

}



//显示设备状态监控明细
function showSheBeiZhuangTaiList(DYDJBM,ssgs) {

    ChooseShow("KHFW");
//  $('.bottom-list',parent.document).show();
    $('#qiangdan_title',parent.document).text("设备状态");
//  $('#qiangdan_title').text("设备状态");

    var parentComId = ulmap.KHFW;
    //异常分类、异常来源、所属站线、异常对象、对象类型、发生时间、异常值、异常描述、等级、设备主人
    var titleList = [
        ["SBID",""],
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
    ];

    function inJumpMap(id,row) {
        fly2Equip(id);
    }

    getSheBeiZhuangTaiDetail(dealdata,DYDJBM,ssgs);

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
//  	$('.bottom-list',parent.document).show();
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

//通道监拍的
$(".qwzt-yxzt-tdjp").click(function () {
    // getTongDaoJianPai();
    var area = $("#areaUl li.active_btn>p").text();
    switch(area){
		case "全市"://上海全市
			var ssgs = "8a812897493378a00149567740676661";
		    break;
		case "核心"://核心
			var ssgs = SSGS_IDS[0];
		    break;
		case "浦东"://浦东
		    var ssgs = SSGS_IDS[1];
		    break;
		case "市区"://市区
			var ssgs = SSGS_IDS[2];
		    break;
		case "市北"://市北
			var ssgs = SSGS_IDS[3];
		    break;
		case "市南"://市南
			var ssgs = SSGS_IDS[4];
		    break;
		case "嘉定"://嘉定
			var ssgs = SSGS_IDS[5];
		    break;
		case "松江"://松江
			var ssgs = SSGS_IDS[8];
		    break;
	    case "青浦"://青浦
	    	var ssgs = SSGS_IDS[6];
		    break;
		case "奉贤"://奉贤
			var ssgs = SSGS_IDS[7];
		    break;
		case "金山"://金山
			var ssgs = SSGS_IDS[9];
		    break;
		case "崇明"://崇明
			var ssgs = SSGS_IDS[10];
		    break;
		case "长兴"://长兴
			var ssgs = SSGS_IDS[11];
		    break;
	}
    var id = $(this).attr("id");
    var DYDJ = id.toString().split("_")[1];
    ChooseShow("KHFW");
    getTongDaoJianPaiXiangQing(DYDJ,ssgs);
});
///通道监拍统计数字
function getTongDaoJianPai(ssgs) {
    var data = {"SSGS" :ssgs,"KSSJ": KSSJ_2, "JSSJ": JSSJ_2};
    $.ajax({
        url: basepath + "interface/BDZT_ZHJPTJ/0",
        data: data,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var allnum = 10;
            var haschage = {
                "500kV" :{htmlid:"tongdao_500",num:0},
                "220kV" :{htmlid:"tongdao_220",num:0},
                "110kV" :{htmlid:"tongdao_110",num:0},
                "35kV" :{htmlid:"tongdao_35",num:0},
            };
            if (data.data) {
                var num = 0;
                for(var i=0;i<data.data.length;i++) {
                    num = parseInt(data.data[i].YCSL);
                    var dydj = data.data[i].DYDJ;
                    if (haschage[dydj]){
                        haschage[dydj].num = num;
                    }
                }
                Object.keys(haschage).forEach(function (name) {
                    var num = haschage[name].num;
                    var htmlid = haschage[name].htmlid;
//                  $('#'+htmlid).text(num);
                    $('#'+htmlid).text(0); 
                    var rate = num/allnum;
                    rate > 1? rate =1:null;

                    //进度条
//                  var top_line = $('#'+htmlid).siblings('.aisle_line').children('.top_line');
//                  top_line.width(parseInt(60*rate)+"%");
                    //变颜色
//                  if (rate>0.5){
//                      $('#'+htmlid).css({"color": "#fbbd1a"});
//                      top_line.css({"color": "#fbbd1a"});
//                  }

                })
            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}

// http://127.0.0.1:8080/pdpsc-app/interface/BDZT_ZHJPMX/0?KSSJ=2018-07-08&JSSJ=2018-09-09
//通道监拍详情
//详情字段出参变更
//异常分类、异常来源、所属站线、异常对象、对象类型、发生时间、异常值、异常描述、等级、设备主人
function getTongDaoJianPaiXiangQing(DYDJ,ssgs) {
//  var titleList = [
//      ["SBID",""],
//      ["JCLXMC","异常类型"],
//      ["SBMC","设备名称"],
//      ["SBLX","设备类型"],
//      ["GJSJ","发生时间"],
//      ["iiiii","异常值"],
//      ["GJMS","异常描述"],
//      ["SBZR","设备主人"],
//      //["LXFS","联系方式"],
//      ["TPDZ","照片附件"],
//  ];
    var titleList = [
        ["GZSBBH",""],
        ["YCLX","异常分类"],
        ["LYMC","异常来源"],
        ["XLMC","所属站线"],
        ["SBMC","异常对象"],
        ["SBLXMC","对象类型"],
        ["GJSJ","发生时间"],
        ["JCZ","异常值"],
        ["GJMS","异常描述"],
        ["GJJB","等级"],
        ["SBZR","设备主人"],
    ];

    var clickfuns = [
        injumpmap,
        null,
        jumpurl,
        null,
        null,
        null,
        null,
        null,
        //null,
        showImgDiv,
    ];

    function injumpmap(id,row) {
        fly2Equip(row["SBID"]);
    }

    var parentComId = ulmap.KHFW;

    var attrurl ;

    ChooseShow("KHFW");
    $('#qiangdan_title',parent.document).text("通道监拍");
    doTongDaoJianPaiDatail();

    //定义内部函数
    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司") {
                value = SSGSMAP_ID[value]|| DEFAULT_DETAIL_EMPTY_TEXT;
            } else if (titleList[i][1] ==="..."){
                value = "...";
            } else if (titleList[i][0] ==="GJSJ") {
                value = value.toString().split(".")[0];
            }
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
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1",true);
         if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }

    function doTongDaoJianPaiDatail() {
        getTongDaoJianPaiAttrUrl(dealTongDaoJianPaiAttrUrl);
        getTongDaoJianPaiDetail(dealdata,DYDJ,ssgs);
    }

    function dealTongDaoJianPaiAttrUrl(attrdata) {

        if (attrdata){
            attrurl = attrdata[0].URL;
        }
    }

    function jumpurl(row) {

        var allurl = attrurl;
        if (row.SBLX === "0103") {
            allurl += "towerPMSId="+row.SBID;
        } else {
            allurl += "linePMSId="+row.SBID;
        }

        setTongDaoJianPaiIframeUrl(allurl);
    }

}






$("#areaUl li").click(function(){
	var index = $(this).index();
	$(this).siblings().removeClass("active_btn");
	$(this).removeClass("info_btn").addClass("active_btn");
	console.log(index);
	switch(index){
  				case 0://上海全市
  					var ssgs = "8a812897493378a00149567740676661";
  				    break;
  				case 1://核心
  					var ssgs = SSGS_IDS[0];
  				    break;
  				case 2://浦东
  				    var ssgs = SSGS_IDS[1];
  				    break;
  				case 3://市区
  					var ssgs = SSGS_IDS[2];
  				    break;
  				case 4://市北
  					var ssgs = SSGS_IDS[3];
  				    break;
  				case 5://市南
  					var ssgs = SSGS_IDS[4];
  				    break;
  				case 6://嘉定
  					var ssgs = SSGS_IDS[5];
  				    break;
  				case 7://松江
  					var ssgs = SSGS_IDS[8];
  				    break;
  			    case 8://青浦
  			    	var ssgs = SSGS_IDS[6];
  				    break;
  				case 9://奉贤
  					var ssgs = SSGS_IDS[7];
  				    break;
  				case 10://金山
  					var ssgs = SSGS_IDS[9];
  				    break;
  				case 11://崇明
  					var ssgs = SSGS_IDS[10];
  				    break;
  				case 12://长兴
  					var ssgs = SSGS_IDS[11];
  				    break;
  			}
	qualified1("1",ssgs);//A类电压合格率
	qualified2("2",ssgs);//B类电压合格率
	qualified3("3",ssgs);//C类电压合格率
	qualified4("4",ssgs);//D类电压合格率
	quality(ssgs);//电能质量(接口好像调不通)
	device_status(ssgs);//设备状态
    getTongDaoJianPai(ssgs)//通道监拍接口增加接口公司入参还未完成
});
