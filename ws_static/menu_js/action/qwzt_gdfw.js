
//供电服务开始
	

//实时监测---用户报修饼图点击弹出明细
	$("#shishijiance1").css({'cursor': 'pointer'});
    $("#shishijiance1").click(function () {
        ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("实时监测");
//      showSuQiuList(null,null,g_deptchange);
    });
//   实时监测---四个饼图点击弹出明细
    $("#shishijiance1-biao1").css({'cursor': 'pointer'});
    $("#shishijiance1-biao1").click(function () {
//      ChooseShow("KHFW");
        qiangXiuDetailShow('5','04');
        $('#qiangdan_title',parent.document).text("实时监测");
//      showSuQiuList(null,null,g_deptchange);
    });
      
    $("#shishijiance1-biao2").css({'cursor': 'pointer'});
    $("#shishijiance1-biao2").click(function () {
        qiangXiuDetailShow('5','09');
        $('#qiangdan_title',parent.document).text("实时监测");
//      showSuQiuList(null,null,g_deptchange);
    });
    
    $("#shishijiance1-biao3").css({'cursor': 'pointer'});
    $("#shishijiance1-biao3").click(function () {
        qiangXiuDetailShow('4','04');
        $('#qiangdan_title',parent.document).text("实时监测");
    });
    
    $("#shishijiance1-biao4").css({'cursor': 'pointer'});
    $("#shishijiance1-biao4").click(function () {
       qiangXiuDetailShow('4','09');
        $('#qiangdan_title',parent.document).text("实时监测");
    });
//诉求分布柱状图点击明细
    $("#jinJiSuQiuZhuZhuangTu").css({'cursor': 'pointer'});
    $("#jinJiSuQiuZhuZhuangTu").click(function () {
    	suQiuShow("");
        $('#qiangdan_title',parent.document).text("诉求分布");
    });
    
    //抢修分布12个地区弹出明细
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

    setTimeout(function(){//页面加载之后加载数据接口
		bindGongDianFuwuData("8a812897493378a00149567740676661");//默认加载上海的数据
	
		bindQiangxiufenbuData();//加载抢修分布图表数据
	
		bindJinjisuqiuData();//加载紧急诉求-实时监测饼状图表数据
		
		bindJinjisuqiuZhuZhuangTuData();// 绑定紧急诉求-诉求分布的柱状图数据
	},2000)
/**
 * 总体抢修情况明细（按来源）
 * areaName：公司或地区名称
 * type：全部：1 非电力故障数：4 电力故障数：5
 * lx：全部:-1 95598：04 12345：09
 */
function qiangXiuDetail2Show(areaName){//12个地区总体抢修情况
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
	showqiangXiuCeList(areaId,"1","-1");//请求数据添加表格
}


/*右侧态势图入口*/   
    
$('#tst_id_gdfw').click(function(){
	parent.document.getElementById("iframe1").contentWindow.specialClick(2);
});    
    
/**
 * 紧急诉求明细
 * type：分类(投诉 举报) 
 */
function suQiuShow(type){
	$(".bottom-list",parent.document).removeClass("hide");//显示class为bottom-list的div
	suQiuCeList(type);
}
    /**
 * 总体抢修情况明细（按来源）
 * type：非电力故障数：4 电力故障数：5 全部：1
 * lx：95598：04 12345：09
 */
function qiangXiuDetailShow(type,lx){
	$(".bottom-list",parent.document).removeClass("hide");//显示class为bottom-list的div
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
	showqiangXiuCeList(areaId,type,lx);//抢修明细
}


/**
 * 配网抢修--抢修情况明细（按来源）
 * areaId,type,lx 是 接口请求参数
 */
function showqiangXiuCeList(areaId,type,lx) {

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
    
    function inJumpMap(id, locallayer) {//地图定位
        JumpMap(locallayer["OBJ_ID"],lxtomapMap.QXGD);
         }

    function dealRow(row) {//创建表头
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
        if (!data.data){//如果数据为空，只创建表头
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;//如果不为空，创建表结构
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }
//parentComId---表结构的父级盒子
//titleList-----标题
//rows----------后台获取数据
//dealRow-------标题内容
    getqiangXiuDetial(dealBackDataList,areaId,type,lx);//抢修情况明细查看(ajax接口请求)
}


//抢修情况明细查看(ajax接口请求)
function getqiangXiuDetial(callback,areaId,type,lx){
	var url = basepath + "interface/BDZT_GETZTQX_LYMX/0";
	var param = {"SSGS": areaId,"ZDID":"-1","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW, "GZLX": type,"SFCL": "-1", "LY":lx };
	callgetajax(callback,url,param);
}
/**
 * 紧急诉求明细
 * type：分类(投诉 举报) 
 */
function suQiuCeList(type) {

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
        JumpMap,
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

    function dealRow(row) {//获取标题的GZSBBH/GDBH
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
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.ZDGD);
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }


    getsuQiuDetial(dealBackDataList,type);//抢修情况明细查看(ajax接口请求)
}
//诉求明细查看(ajax接口请求)
function getsuQiuDetial(callback,type){
	var url = basepath + "/interface/BDZT_GETSQGDMX/0";
	var param = {"SSGS": "-1","FL":type,"SFCL":"0","KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
	callgetajax(callback,url,param);
}


/**
 * 处理用户报修饼图图表
 */
function bindGongDianFuwuData(SSGS) {
	//总体抢修情况（按来源）
	//处理电力故障、非电力故障数据绑定
	function dealData(res) {
		if(!res.data) {
			res.data = [];
			pjddsj95598(0); ////抢修效率-平均到达时间
			pjddsj12345(0); //抢修效率-平均修复时间
		}
		var data = res.data;
		var val12345 = 0;
		var val95598 = 0;

		var valDLGZ12345 = 0; //12345电力故障总数
		var valFDLGZ12345 = 0; //13245非电力故障总数

		var valDLGZ95598 = 0; //95598电力故障总数		
		var valFDLGZ95598 = 0; //95598非电力故障总数

		var valDLGZYiChuli95598 = 0; //95598电力故障总数已处理
		var valDLGZWeiChuli95598 = 0; //95598电力故障总数未处理		

		var valFDLGZYiChuli95598 = 0; //95598非电力故障总数已处理
		var valFDLGZWeiChuli95598 = 0; //95598非电力故障总数未处理

		var valDLGZYiChuli12345 = 0; //13245电力故障总数已处理		
		var valDLGZWeiChuli12345 = 0; //12345电力故障总数未处理

		var valFDLGZYiChuli12345 = 0; //13245非电力故障总数已处理		
		var valFDLGZWeiChuli12345 = 0; //12345非电力故障总数未处理

		var pjddsj = 0;
		var pjxfsj = 0;
		var valTotoal = 0;

		for(var i = 0; i < data.length; i++) {
			if(data[i].LY == '04') { //95598
				val95598 += Number(data[i].ZS); //得到95598的用户报修
				if(data[i].GZFL == '电力故障') { //电力故障
					valDLGZ95598 += Number(data[i].ZS);
					valDLGZYiChuli95598 += Number(data[i].YCLS);
					valDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}
				if(data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ95598 += Number(data[i].ZS);
					valFDLGZYiChuli95598 += Number(data[i].YCLS);
					valFDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}

			}
			if(data[i].LY == '09') { //12345
				val12345 += Number(data[i].ZS);
				if(data[i].GZFL == '电力故障') { //电力故障
					valDLGZ12345 += Number(data[i].ZS);
					valDLGZYiChuli12345 += Number(data[i].YCLS);
					valDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
				if(data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ12345 += Number(data[i].ZS);
					valFDLGZYiChuli12345 += Number(data[i].YCLS);
					valFDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
			}

			pjddsj = pjddsj + Number(data[i].PJDDSJ);
			pjxfsj = pjxfsj + Number(data[i].PJXFSJ);

		}
		valTotoal = val12345 + val95598;
		//		shishijiance1(valTotoal, val12345, val95598); //给用户报修总数赋值
		var countNum = val95598-val12345>0?val95598*2.4:val12345*2.4
		shishijianceBiao1(valDLGZWeiChuli95598, valDLGZYiChuli95598,countNum);//塞数据
		shishijianceBiao2(valDLGZWeiChuli12345, valDLGZYiChuli12345,countNum);//塞数据
		shishijianceBiao3(valFDLGZWeiChuli95598, valFDLGZYiChuli95598,countNum);//塞数据
		shishijianceBiao4(valFDLGZWeiChuli12345, valFDLGZYiChuli12345,countNum);//塞数据
		$('#val12345').text(val12345); //给12345赋值
		$('#val95598').text(val95598); //给95598赋值
		yongHu(val95598,val12345);

		if(data.length > 0) {
			pjddsj95598((pjddsj / data.length).toFixed(1)); ////抢修效率-平均到达时间
			pjddsj12345((pjxfsj / data.length).toFixed(1)); //抢修效率-平均修复时间
		}

	}
	if(SSGS == null || SSGS == '') {
		var SSGS = -1;
	}
	BDZT_GETZTQX_LY_1(dealData, SSGS);
}
/**
 * 获取抢修工单接口数据
 * @param {Object} dealData
 * @param {Object} SSGS
 */
function BDZT_GETZTQX_LY_1(dealData, SSGS) {

	//	var SSGS=-1	//公司
	var KSSJ = KSSJ_NOW //开始时间
	var JSSJ = JSSJ_NOW //结束时间
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ,
		"JSSJ": JSSJ
	};
	//	alert(KSSJ);
	//http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZTQX_LY_1/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-09%2000:00:00&JSSJ=2018-09-09%2023:59:59
	var url = basepath + "interface/BDZT_GETZTQX_LY_1/0";
	callgetajax(dealData, url, param);
}


/**
 * 绑定抢修分布图表数据
 */
function bindQiangxiufenbuData() {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;
		var totalVal = 0;
		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //电力故障数
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 00; //非电力故障数
		var shiQu2 = shiBei2 = shiNan2 = puDong2 = fengXian2 = jiaDing2 = qingPu2 = songJiang2 = jinShan2 = gongDian2 = jianXiu2 = chongMing2 = changXing2 = heXinQu2 = 0; //已处理
		var shiQu3 = shiBei3 = shiNan3 = puDong3 = fengXian3 = jiaDing3 = qingPu3 = songJiang3 = jinShan3 = gongDian3 = jianXiu3 = chongMing3 = changXing3 = heXinQu3 = 0; //处理中
		for(var i = 0; i < data.length; i++) {
			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].GZFL == '电力故障') {
					heXinQu += Number(data[i].ZS);
					continue;
				}
				if(data[i].GZFL == '非电力故障') {
					heXinQu1 += Number(data[i].ZS);
					continue;
				}
				heXinQu2+= Number(data[i].YCLS);
				heXinQu3+= Number(data[i].ZCLS);
			}

			if(data[i].GZFL == '电力故障') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu += Number(data[i].ZS);
						shiQu2+= Number(data[i].YCLS);
				        shiQu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei += Number(data[i].ZS);
						shiBei2+= Number(data[i].YCLS);
				        shiBei3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan += Number(data[i].ZS);
						shiNan2+= Number(data[i].YCLS);
				        shiNan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong += Number(data[i].ZS);
						puDong2+= Number(data[i].YCLS);
				        puDong3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian += Number(data[i].ZS);
						fengXian2+= Number(data[i].YCLS);
				        fengXian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing += Number(data[i].ZS);
						jiaDing2+= Number(data[i].YCLS);
				        jiaDing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu += Number(data[i].ZS);
						qingPu2+= Number(data[i].YCLS);
				        qingPu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang += Number(data[i].ZS);
						songJiang2+= Number(data[i].YCLS);
				        songJiang3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan += Number(data[i].ZS);
						jinShan2+= Number(data[i].YCLS);
				        jinShan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian += Number(data[i].ZS);
						gongDian2+= Number(data[i].YCLS);
				        gongDian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu += Number(data[i].ZS);
						jianXiu2+= Number(data[i].YCLS);
				        jianXiu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing += Number(data[i].ZS);
						chongMing2+= Number(data[i].YCLS);
				        chongMing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing += Number(data[i].ZS);
						changXing2+= Number(data[i].YCLS);
				        changXing3+= Number(data[i].ZCLS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}
			if(data[i].GZFL == '非电力故障') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 += Number(data[i].ZS);
						shiQu2+= Number(data[i].YCLS);
				        shiQu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 += Number(data[i].ZS);
						shiBei2+= Number(data[i].YCLS);
				        shiBei3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 += Number(data[i].ZS);
						shiNan2+= Number(data[i].YCLS);
				        shiNan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 += Number(data[i].ZS);
						puDong2+= Number(data[i].YCLS);
				        puDong3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 += Number(data[i].ZS);
						fengXian2+= Number(data[i].YCLS);
				        fengXian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 += Number(data[i].ZS);
						jiaDing2+= Number(data[i].YCLS);
				        jiaDing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 += Number(data[i].ZS);
						qingPu2+= Number(data[i].YCLS);
				        qingPu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 += Number(data[i].ZS);
						songJiang2+= Number(data[i].YCLS);
				        songJiang3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 += Number(data[i].ZS);
						jinShan2+= Number(data[i].YCLS);
				        jinShan3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 += Number(data[i].ZS);
						gongDian2+= Number(data[i].YCLS);
				        gongDian3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 += Number(data[i].ZS);
						jianXiu2+= Number(data[i].YCLS);
				        jianXiu3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 += Number(data[i].ZS);
						chongMing2+= Number(data[i].YCLS);
				        chongMing3+= Number(data[i].ZCLS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 += Number(data[i].ZS);
						changXing2+= Number(data[i].YCLS);
				        changXing3+= Number(data[i].ZCLS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}

		}

		function setQiangXiuFenBuZhuZhuangTu(objId, d, f) {//抢修分布图--改变背景色样式
			if((d + f) > 0) {
				var tmpDRatio = d * 100 / (d + f + 50);
				var dRatio = tmpDRatio + '%';
				var tmpFRatio = f * 100 / (d + f + 50);
				var fRatio = tmpFRatio + '%';
			} else {
				var dRatio = '0%';
				var fRatio = '0%';
			}

			$('#' + objId).css('width', dRatio);
			$('#' + objId + '1').css('width', fRatio);
			$('#' + objId + 'Val').attr('data-dlgz', (d+f)); //data-dlgz
//			$('#' + objId + 'Val').attr('data-fdlgz', f); //data-fdlgz

		}
		
		function setQiangXiuFenBuZhuZhuangTu1(objId, d, f) {
			if((d + f) > 0) {
				var tmpDRatio = d * 100 / (d + f + 50);
				var dRatio = tmpDRatio + '%';
				var tmpFRatio = f * 100 / (d + f + 50);
				var fRatio = tmpFRatio + '%';
				var realRatio = d * 100 / (d + f);
				realRatio = realRatio.toFixed(1) + '%';
			} else {
				var dRatio = '0%';
				var fRatio = '0%';
			}

			$('#' + objId + '2').css('width', dRatio);
			$('#' + objId + '3').css('width', fRatio);
			$('#' + objId + 'Ycl').text(realRatio);

		}	
		//12个地区电力故障非电力故障塞数据
		setQiangXiuFenBuZhuZhuangTu('shiQu', shiQu, shiQu1);
		setQiangXiuFenBuZhuZhuangTu('shiBei', shiBei, shiBei1);
		setQiangXiuFenBuZhuZhuangTu('shiNan', shiNan, shiNan1);
		setQiangXiuFenBuZhuZhuangTu('puDong', puDong, puDong1);
		setQiangXiuFenBuZhuZhuangTu('fengXian', fengXian, fengXian1);
		setQiangXiuFenBuZhuZhuangTu('jiaDing', jiaDing, jiaDing1);
		setQiangXiuFenBuZhuZhuangTu('qingPu', qingPu, qingPu1);
		setQiangXiuFenBuZhuZhuangTu('songJiang', songJiang, songJiang1);
		setQiangXiuFenBuZhuZhuangTu('jinShan', jinShan, jinShan1);
		setQiangXiuFenBuZhuZhuangTu('chongMing', chongMing, chongMing1);
		setQiangXiuFenBuZhuZhuangTu('changXing', changXing, changXing1);
		setQiangXiuFenBuZhuZhuangTu('heXinQu', heXinQu, heXinQu1);
		//12个地区处理中和已处理塞数据
		setQiangXiuFenBuZhuZhuangTu1('shiQu', shiQu2, shiQu3);
		setQiangXiuFenBuZhuZhuangTu1('shiBei', shiBei2, shiBei3);
		setQiangXiuFenBuZhuZhuangTu1('shiNan', shiNan2, shiNan3);
		setQiangXiuFenBuZhuZhuangTu1('puDong', puDong2, puDong3);
		setQiangXiuFenBuZhuZhuangTu1('fengXian', fengXian2, fengXian3);
		setQiangXiuFenBuZhuZhuangTu1('jiaDing', jiaDing2, jiaDing3);
		setQiangXiuFenBuZhuZhuangTu1('qingPu', qingPu2, qingPu3);
		setQiangXiuFenBuZhuZhuangTu1('songJiang', songJiang2, songJiang3);
		setQiangXiuFenBuZhuZhuangTu1('jinShan', jinShan2, jinShan3);
		setQiangXiuFenBuZhuZhuangTu1('chongMing', chongMing2, chongMing3);
		setQiangXiuFenBuZhuZhuangTu1('changXing', changXing2, changXing3);
		setQiangXiuFenBuZhuZhuangTu1('heXinQu', heXinQu2, heXinQu3);

	}

	var SSGS = -1;
	BDZT_GETZTQX_LY_1(dealData, SSGS);//抢修明细请求数据
}

/**
 * 绑定紧急诉求饼状图表数据
 */
function bindJinjisuqiuData() {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var jubao = suqiu = 0; //举报、诉求工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for(var i = 0; i < data.length; i++) {
			if(data[i].FL == '举报') {
				jubao++;
				if(data[i].LY == '12345') {
					jubao12345++;
				}
				if(data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if(data[i].FL == '诉求') {
				suqiu++;
				if(data[i].LY == '12345') {
					suqiu12345++;
				}
				if(data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到举报和诉求工单的数量

		suQiuBingTu(suqiu, suqiu12345, suqiu95598);
		juBaoBingTu(jubao, jubao12345, jubao95598);

	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS);//获取紧急诉求工单接口
}

/**
 * 绑定紧急诉求的柱状图数据
 */
function bindJinjisuqiuZhuZhuangTuData() {
	function dealData(res) {
		if(!res.data) {
			res.data = [];
		}
		var data = res.data;

		var shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //95598工单数
		var shiQu1 = shiBei1 = shiNan1 = puDong1 = fengXian1 = jiaDing1 = qingPu1 = songJiang1 = jinShan1 = gongDian1 = jianXiu1 = chongMing1 = changXing1 = heXinQu1 = 0; //12345工单数
		for(var i = 0; i < data.length; i++) {
			//核心区
			if(data[i].SFHXQ === '1') {
				if(data[i].LY == '95598') {
					heXinQu += Number(data[i].ZS);
					continue;
				}

				if(data[i].LY == '12345') {
					heXinQu1 += Number(data[i].ZS);
					continue;
				}

			}

			if(data[i].LY == '95598') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing += Number(data[i].ZS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}
			if(data[i].LY == '12345') {
				switch(data[i].SSGDDW) {
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03': //
						shiQu1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04': //
						shiBei1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05': //
						shiNan1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06': //
						puDong1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07': //
						fengXian1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08': //
						jiaDing1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09': //
						qingPu1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A': //
						songJiang1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B': //
						jinShan1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D': //
						gongDian1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50': //
						jianXiu1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ': //
						chongMing1 += Number(data[i].ZS);
						break;
					case 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ': //
						changXing1 += Number(data[i].ZS);
						break;
						// case 'JBH-HXQ': //核心区
						// 	heXinQu1 += Number(data[i].ZS);
						// 	break;
					default:
						break;
				}
			}

		}

		// shiQu = shiBei = shiNan = puDong = fengXian = jiaDing = qingPu = songJiang = jinShan = gongDian = jianXiu = chongMing = changXing = heXinQu = 0; //95598工单数

		var arr95598 = [],
			arr12345 = [];

		arr95598[0] = heXinQu;
		arr95598[1] = puDong;
		arr95598[2] = shiQu;
		arr95598[3] = shiBei;
		arr95598[4] = shiNan;
		arr95598[5] = jiaDing;
		arr95598[6] = songJiang;
		arr95598[7] = qingPu;
		arr95598[8] = fengXian;
		arr95598[9] = jinShan;
		arr95598[10] = chongMing;
		arr95598[11] = changXing;

		arr12345[0] = heXinQu1;
		arr12345[1] = puDong1;
		arr12345[2] = shiQu1;
		arr12345[3] = shiBei1;
		arr12345[4] = shiNan1;
		arr12345[5] = jiaDing1;
		arr12345[6] = songJiang1;
		arr12345[7] = qingPu1;
		arr12345[8] = fengXian1;
		arr12345[9] = jinShan1;
		arr12345[10] = chongMing1;
		arr12345[11] = changXing1;

		jinJiSuQiuZhuZhuangTu(arr95598, arr12345); //给柱状图赋值

	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS);//诉求工单接口
}
/**
 * 获取紧急诉求工单接口
 * @param {Object} dealData
 * @param {Object} SSGS
 */
function BDZT_GETSQGDMX(dealData, SSGS) {
	var SFCL = 0 //	是否已处理 0全部 1正在处理数 2已处理数  需要等明天和yaoqimin确认后才能添加
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ_NOW,
		"JSSJ": JSSJ_NOW,
		"SFCL": SFCL,
	};
	var url = basepath + "interface/BDZT_GETSQGDMX/0";
	callgetajax(dealData, url, param);
}









