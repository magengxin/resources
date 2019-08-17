//资源监控-当班资源

var g_deptchangeThisPageThisPage = "8a812897493378a00149567740676661"; //只给资源监控使用的全局公司id的变量

var ZhuanYe2ValueMap = {
	"全部": "-1",
	"变电": "1",
	"线路": "2",
	"电缆": "3",
	"配电": "4",
	"自动化": "5",
	"通信": "6",
}

//根据工种获取html标签
var GongZhong2DBZYHtmlLabelMap = {
	"1": {
		allnumid: "dangban_tx_all",
		pieid: "on_duty_r1",
		echartfun: on_duty_r1,
		title: "特巡",
		layer: lxtomapMap.txry
	},
	"6": {
		allnumid: "dangban_jx_all",
		pieid: "on_duty_r2",
		echartfun: on_duty_r2,
		title: "保障",
		layer: lxtomapMap.jxry
	},
	//  "3" : {allnumid:"dangban_qx_all",pieid:"on_duty_r3",echartfun:on_duty_r3,title:"抢修",layer:lxtomapMap.qxry},
	"4": {
		allnumid: "dangban_hq_all",
		pieid: "on_duty_r4",
		echartfun: on_duty_r4,
		title: "后勤",
		layer: lxtomapMap.hqry
	},
}

var Car2DBZYHtmlLabelMap = {
	"yingji": {
		id1: "car_yingji_1",
		id2: "car_yingji_2",
		"CLZBLXMC": "应急发电车",
		"CLZBLX": "1"
	},
	"zhihui": {
		id1: "car_zhihui_1",
		id2: "car_zhihui_2",
		"CLZBLXMC": "应急指挥车",
		"CLZBLX": "2"
	},
	// "wuzi" : {id1:"car_wuzi_1",id2:"car_wuzi_2","CLZBLXMC":"应急物资车","CLZBLX":"4"},
	"qiangxiu": {
		id1: "car_qiangxiu_1",
		id2: "car_qiangxiu_2",
		"CLZBLXMC": "抢修车",
		"CLZBLX": "3"
	},
	"houqin": {
		id1: "car_houqin_1",
		id2: "car_houqin_2",
		"CLZBLXMC": "后勤车",
		"CLZBLX": "5"
	},
}

var WuZi2ZYHtmlLabelMap = {
	"kgg": {
		num: "kgg_num",
		mc: "低压屏（柜）、箱"
	}, //开关柜
	"jdbh": {
		num: "jdbh_num",
		mc: "iiiii"
	}, //继电保护及自动装置
	"dyhgq": {
		num: "dyhgq_num",
		mc: "iiiii"
	}, //交流电压互感器
	"blq": {
		num: "blq_num",
		mc: "避雷器"
	}, //避雷器
	"dx": {
		num: "dx_num",
		mc: "导、地线"
	}, //导，地线
	"byq": {
		num: "byq_num",
		mc: "交流变压器"
	}, //交流变压器
	"xb": {
		num: "xb_num",
		mc: "iiiii"
	}, //箱式变电站配件
	"dlhgq": {
		num: "dlhgq_num",
		mc: "iiiii"
	}, //交流电互感器
	"glkg": {
		num: "glkg_num",
		mc: "iiiii"
	}, //交流隔离开关
	"dl": {
		num: "dl_num",
		mc: "电缆"
	}, //电缆
	"zdh": {
		num: "zdh_num",
		mc: "iiiii"
	}, //自动化系统及设备
	"dgaq": {
		num: "dgaq_num",
		mc: "登高、安全工具（不带电作业）"
	}, //登高、安全工具
	"ftfy": {
		num: "ftfx_num",
		mc: "登高、安全工具（不带电作业）"
	}, //登高、安全工具
}

var CangKu2ZYHtmlLabelMap = { //emergency_ck_wz_ul左侧列表     emergency_wzdlx_li应急物资常备物资导航切换
	"1": {
		num: "emergency_ck_num",
		ul: "emergency_ck_ul",
		wzul: "emergency_ck_wz_ul",
		wzdlxli: "emergency_wzdlx_li"
	},
	"2": {
		num: "stand_ck_num",
		ul: "stand_ck_ul",
		wzul: "stand_ck_wz_ul",
		wzdlxli: "stand_wzdlx_li"
	},
}

$(function() {
	loadDBZY();
});

function loadDBZY() {
	bindClick_DBZY();
	bindClick_WZJK(); //物资监控
	//  dealDangBanZiYuan("-1","-1",g_deptchangeThisPage);//当班资源(特巡 保障 后勤)统计
	//  dealCar(g_deptchangeThisPage);//当班资源:车辆装备
	dealKuaDanWei(g_deptchangeThisPage); //外单位资源:跨单位 跨省市
	dealCangKuCount("1", g_deptchangeThisPage); //应急库
	dealCangKuCount("2", g_deptchangeThisPage); //常备库
	dealSupplierList(); //供应商
	dealSupplierWuZiList('-1'); //供应商
	//物资大类型编码:默认-1 应急1 常备2 变电3 线路4 进博会专用物资5
	dealCangKuWuZi("1", "6", "", g_deptchangeThisPage); //应急库
	dealCangKuWuZi("1", "1", "", g_deptchangeThisPage); //应急库
	dealCangKuWuZi("2", "3", "", g_deptchangeThisPage); //常备库
	dealKuaDanWei(g_deptchangeThisPage); //外部资源

	dealZiYuanTongJi_Person(g_deptchangeThisPage); //人员
	dealZiYuanTongJi_Car(g_deptchangeThisPage); //车辆
	dealZiYuanTongJi_Supplier(g_deptchangeThisPage); //供应商
}

function bindClick_DBZY() {
	$("#ul_dbzy_zy").find("li").click(function() { //点击切换当班资源的专业:1 变电 2 线路 3 电缆 4 配电 5 外协(去掉外协加上 自动化5 通信6)
		var text = $(this).text();
		switch(text) {
			case '全部':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
			case '变电':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
			case '线路':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
			case '电缆':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
			case '配电':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
			case '自动化':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
			case '通信':
				$("#dangban_tx_all").text(0);
				$("#tx0").text(0);
				$("#tx1").text(0);
				$("#dangban_jx_all").text(0);
				$("#bz0").text(0);
				$("#bz1").text(0);
				$("#dangban_hq_all").text(0);
				$("#hq0").text(0);
				$("#hq1").text(0);
				on_duty_r1("0", "0", "", "0", "");
				on_duty_r2("0", "0", "", "0", "");
				on_duty_r4("0", "0", "", "0", "");
				break;
		}
		var isctive = $(this).is('.liSelected');
		$(this).addClass('liSelected').siblings().removeClass('liSelected');
		$('#dangbanziyuanList .wzActive').text(text);
		//      dealDangBanZiYuan("-1",ZhuanYe2ValueMap[text],g_deptchangeThisPage);
	});

	Object.keys(GongZhong2DBZYHtmlLabelMap).forEach(function(name) {
		var allnumid = GongZhong2DBZYHtmlLabelMap[name].allnumid;
		$("#" + allnumid).css({
			'cursor': 'pointer'
		});
		$("#" + allnumid).click(function() { //2个圆环中间的总数的点击事件
			//判断专业
			var text = $("#ul_dbzy_zy").find('.liSelected').text();
			showDangbanZiYuanList(name, ZhuanYe2ValueMap[text], "-1", g_deptchangeThisPage);
		});
	})

}

//物资监控-----------添加供应商
function bindClick_WZJK() {
	$("#emergency_ck_num").css({
		'cursor': 'pointer'
	});
	$("#emergency_ck_num").click(function() { //点击弹出详细列表弹框
		ChooseShow("KHFW");
		$('#qiangdan_title').text("应急库");
		showCangKuList("1", g_deptchangeThisPage);
	});

	$("#stand_ck_num").css({
		'cursor': 'pointer'
	});
	$("#stand_ck_num").click(function() {
		ChooseShow("KHFW");
		$('#qiangdan_title').text("常备库");
		showCangKuList("2", g_deptchangeThisPage);
	});

	//应急 常备 变电 线路的点击
	Object.keys(CangKu2ZYHtmlLabelMap).forEach(function(name) {
		debugger
		var ckobj = CangKu2ZYHtmlLabelMap[name];
		$("#" + ckobj.wzdlxli).find("h4").click(function() {
			var text = $(this).text();
			var wzdlx = text.substr(0, 2);
			switch(wzdlx) {
				case '应急':
					wzdlx = "1";
					break;
				case '常备':
					wzdlx = "2";
					break;
				case '防汛':
					wzdlx = "6";
					break;
				case '变电':
					wzdlx = "3";
					break;
				case '线路':
					wzdlx = "4";
					break;
			}
			//判断仓库
			var ckul = $("#" + ckobj.ul).find(".liSelected");
			var ckid = $(ckul).attr("ckid");
			dealCangKuWuZi(name, wzdlx, ckid, g_deptchangeThisPage);
		});

	});
}

//GZ	工种 1 特巡 2 检修 3 抢修 4 后勤 5 司机(检修、抢修合并为保障)
//ZY	专业 1 变电 2 线路 3 电缆 4 配电 5 外协(去掉外协加上 自动化5 通信6)
function dealDangBanZiYuan(GZ, ZY, ssgs) {

	Object.keys(GongZhong2DBZYHtmlLabelMap).forEach(function(name) {
		console.log("------> " + name + "------> " + GongZhong2DBZYHtmlLabelMap[name]);
		console.log("**************: " + GongZhong2DBZYHtmlLabelMap[name].allnumid);
		dealEcharts(name); //循环中name依次取值1 2 4
		$("#" + GongZhong2DBZYHtmlLabelMap[name].allnumid).text(0); //2个环形图中间的总数
	});

	getDangBanZiyuanCount(dealdata, GZ, ZY, ssgs); //6 保障  4 后勤
	getDangBanZiyuanCount_TX(dealdata_TX, ZY, ssgs); //1 特巡

	function dealdata_TX(data) {
		var valueset = {
			"1": {
				ZS: 0,
				CDS: 0,
				DMS: 0,
				BYS: 0
			},
		};

		var zy2mcmap = {
			"1": "变电",
			"2": "线路",
			"3": "电缆",
			"4": "配电",
			"5": "自动化",
			"6": "通信"
		};

		if(!data.data) {
			data.data = [];
		}
		var rows = data.data;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			if(ZY || (zy2mcmap[ZY] === row.ZYMC)) {
				valueset["1"].ZS += parseInt(row.ZS || 0);
				valueset["1"].CDS += parseInt(row.CDS || 0);
				valueset["1"].DMS += parseInt(row.DMS || 0);
				valueset["1"].BYS += parseInt(row.BYS || 0);
			}
		}
		Object.keys(valueset).forEach(function(name) {
			dealEcharts(name, valueset[name].CDS, valueset[name].DMS, valueset[name].BYS);
			$("#" + GongZhong2DBZYHtmlLabelMap[name].allnumid).text(valueset[name].ZS);
			//          $("#"+GongZhong2DBZYHtmlLabelMap[name].allnumid).text(0);//将特巡饼图上的113变成0
		});

	}
	//GZ	工种   1 特巡 2 检修 3 抢修 4 后勤 5 司机(检修 抢修合并为保障,现在是1 特巡   23保障   4 后勤)
	//ZY	专业   1 变电 2 线路 3 电缆 4 配电 5 外协(去掉外协,加上自动化和通信)
	function dealdata(data) {
		if(!data.data) {
			data.data = [];
		}
		var valueset = { //ZS:总数 CDS:出动数 DMS:待命数 BYS:后备数
			//          "1" : {ZS:0,CDS:0,DMS:0,BYS:0},
			//          "2" : {ZS:0,CDS:0,DMS:0,BYS:0},
			"4": {
				ZS: 0,
				CDS: 0,
				DMS: 0,
				HBS: 0
			}, //后勤
			"6": {
				ZS: 0,
				CDS: 0,
				DMS: 0,
				HBS: 0
			}, //保障
		};
		var ZS = 0;
		var CDS = 0;
		var HBS = 0;
		var rows = data.data;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			ZS = parseInt(row.ZS || 0);
			CDS = parseInt(row.CDS || 0);
			HBS = parseInt(row.HBS || 0);
			DMS = parseInt(row.DMS || 0);
			if(valueset[row.GZ]) {
				valueset[row.GZ].ZS += ZS;
				valueset[row.GZ].CDS += CDS;
				valueset[row.GZ].HBS += HBS;
				valueset[row.GZ].DMS += DMS;
			}

		}

		Object.keys(valueset).forEach(function(name) {
			dealEcharts(name, valueset[name].CDS, valueset[name].DMS, valueset[name].HBS);
			$("#" + GongZhong2DBZYHtmlLabelMap[name].allnumid).text(valueset[name].ZS);
		});

	}

	//处理饼图
	function dealEcharts(gzid, CDS, DMS, BYS) {
		var funobj = GongZhong2DBZYHtmlLabelMap[gzid];
		var echar = funobj.echartfun(CDS || 0, DMS || 0, null, BYS || 0);
		switch(gzid) {
			case '1':
				$("#tx0").html(CDS);
				$("#tx1").html(DMS);
				break;
			case '6':
				$("#bz0").html(CDS);
				$("#bz1").html(DMS);
				break;
			case '4':
				$("#hq0").html(CDS);
				$("#hq1").html(DMS);
				break;
		}
		//      var echar = funobj.echartfun(0,DMS||0,null,BYS||0);//将特巡饼图上的113变成0
		echar.on("click", btnclick(gzid));

	}

	function btnclick(gzid) {
		return function(param) {
			clickEchart_duty(param, gzid);
		}
	};

	//当班资源点击
	function clickEchart_duty(param, gzid) {
		if(param.componentType !== "series") {
			return;
		}

		//判断专业
		var text = $("#ul_dbzy_zy").find('.liSelected').text();
		var seriesIndex = parseInt(param.seriesIndex);
		var dataIndex = parseInt(param.dataIndex);
		//1出动0待命2备用
		switch(seriesIndex) {
			case 0:
				switch(dataIndex) {
					case 0:
						var cdqk = "1";
						break;
					case 1:
						var cdqk = "2";
						break;
				}
				break;
			case 1:
				if(dataIndex == 0) {
					var cdqk = "3";
				}
				break;
		}
		showDangbanZiYuanList(gzid, ZhuanYe2ValueMap[text], cdqk, g_deptchangeThisPage);

	}
}

//当班资源明细
function showDangbanZiYuanList(GZ, ZY, cdqk, ssgs) {

	ChooseShow("KHFW");
	$('#qiangdan_title').text(GongZhong2DBZYHtmlLabelMap[GZ].title);
	//班组类型、班组专业、班组名称、当班负责人、联系方式、是否出动
	var parentComId = ulmap.KHFW;
	switch(GZ) {
		case "1":
			var titleList = [
				["ID", ""],
				["GZMC", "班组类型"],
				["ZYMC", "班组专业"],
				["BZMC", "班组名称"],
				["iiii", "当班负责人"],
				["iiii", "联系方式"],
				["CDQKMC", "是否出动"],
			];
			break
		case "4":
		case "6":
			var titleList = [
				["ID", ""],
				["GZMC", "班组类型"],
				["ZYMC", "班组专业"],
				["MC", "班组名称"],
				["FZRMC", "当班负责人"],
				["LXFS", "联系方式"],
				["SFMRDBMC", "是否出动"],
			];
			break
	}
	var clickfuns = [
		inJumpMap,
		null,
		null,
		null,
		null,
		null,
	];

	function inJumpMap(id, locallayer) {
		JumpMap(id, locallayer);
	}

	function dealRow(row) {
		var newrow = [];
		for(var i = 0; i < titleList.length; i++) {
			var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
			if(titleList[i][0] === "SFCD") {
				value = value ? "出动" : "备用";
			}
			newrow.push(value);
		}
		return newrow;
	}

	function dealdata(data) {
		$('#pageBlock').hide();
		if(!data.data) {
			createList(parentComId, titleList);
			return;
		}
		var rows = data.data;
		createList(parentComId, titleList, rows, dealRow, null, clickfuns, GongZhong2DBZYHtmlLabelMap[GZ].layer);
		if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length) {
			$('#pageBlock').show();
			fenye();
		}
	}
	switch(GZ) {
		case "1":
			getDangBanZiyuanTXDetail(dealdata, GZ, ZY, cdqk, ssgs);
			break
		case "4":
		case "6":
			getDangBanZiyuanDetail(dealdata, GZ, ZY, cdqk, ssgs);
			break
	}
}

//处理车辆
function dealCar(ssgs) {

	getDangBanZiyuanDetail(dealdata, "", "5", "-1", null, ssgs);

	var resultset = {};

	function dealdata(data) {
		if(!data.data) {
			data.data = [];
		}
		var rows = data.data;
		var CLZBLX = 0;
		var SFCD;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			CLZBLX = row.CLZBLX;
			SFCD = row.SFCD;
			if(CLZBLX) {
				var obj = resultset[CLZBLX];
				if(!obj) {
					obj = {
						ZS: 0,
						CDS: 0
					};
					resultset[CLZBLX] = obj;
				}
				obj.ZS += 1;
				if(SFCD === "1") {
					obj.CDS += 1;
				}
			}
		}
		dealhtml(resultset);
	}

	function dealhtml(resultset) {
		Object.keys(Car2DBZYHtmlLabelMap).forEach(function(name) {
			var CLZBLX = Car2DBZYHtmlLabelMap[name].CLZBLX;
			if(resultset[CLZBLX]) {
				$("#" + Car2DBZYHtmlLabelMap[name].id1).text(resultset[CLZBLX].CDS || 0);
				$("#" + Car2DBZYHtmlLabelMap[name].id2).text(resultset[CLZBLX].ZS || 0);
			} else {
				$("#" + Car2DBZYHtmlLabelMap[name].id1).text(0);
				$("#" + Car2DBZYHtmlLabelMap[name].id2).text(0);
			}

		});
	}
}

//外单位人员
function dealKuaDanWei(ssgs) {

	var titleList = [
		["SSGSMC", "单位名称"],
		["FZR", "联系人"],
		["LXFS", "联系电话"],
		["ZYMS", "资源"],
	];

	cleartable();
	getExternZiyuanDetail(dealdata, "-1", ssgs);

	function dealdata(data) {
		if(!data.data || data.data.length == 0) {
			return;
		}
		var rows = data.data;
		dealhtml(rows);
	}

	function dealhtml(rows) {
		var tbody = $("#table_kuodanwei").find("tbody");
		tbody.empty();
		var tr;
		for(var i = 0; i < rows.length; i++) {
			addNewTr(tbody, rows[i], titleList);
		}
	}

	function cleartable() {
		var tbody = $("#table_kuodanwei").find("tbody");
		tbody.empty();
	}

	function addNewTr(tbody, row, titleList) {
		var tr = $("<tr>");
		var th;
		for(var i = 0; i < titleList.length; i++) {
			th = $("<th>", {
				text: row[titleList[i][0]],
			});
			tr.append(th);
		}
		tbody.append(tr);;
	}

}

//物资管理
//仓库内设备统计
function dealCangKuWuZi(CKLX, WZDLXDM, ID, ssgs) {
	debugger
	//	$('#wzActive').html()
	getCangKuWuZiCount(dealdata, CKLX, WZDLXDM, ID, ssgs);
	var resultset = {};
	var wzul = CangKu2ZYHtmlLabelMap[CKLX].wzul;

	function dealdata(data) {
		if(!data.data) {
			data.data = [];
		}
		var rows = data.data;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			var num = parseInt(row.SL);
			var WZZLX = row.WZZLX;
			if(WZZLX) {
				// if (WZZLX.indexOf("登高、安全工具") === 0) {
				//     WZZLX = "登高、安全工具";
				// }
				var obj = resultset[WZZLX];
				if(obj) {
					obj.num += num;
				} else {
					resultset[WZZLX] = {
						"num": num,
						"dm": row.WZZLXDM,
						"dlx": WZDLXDM
					};
				}
			}

		}
		dealhtml(wzul, resultset);
	}

	function dealhtml(wzul, resultset) {

		clearul(wzul);
		createli(wzul, resultset);
	}

	function clearul(ulid) {
		var lilist = $("#" + ulid).find('li');
		for(var i = 0; i < lilist.length; i++) {
			$(lilist[i]).remove();
		}
	}

	function createli(ulid, resultset) {
		Object.keys(resultset).forEach(function(name) {
			li0 = $("<li>", {
				WZZLX: name
			});
			var p0 = $("<p>", {
				text: resultset[name].num,
				class: "potClick",
			});
			var span0 = $("<span>", {
				text: name
			});
			$(li0).append(p0);
			$(li0).append(span0);

			$(p0).click(function() {
				//              showCangKuWuZiListByWZZLX(CKLX,ID,name,g_deptchangeThisPage);
				showCangKuWuZiListByWZZLX(CKLX, ID, resultset[name].dm, resultset[name].dlx, g_deptchangeThisPage);
			})
			$("#" + ulid).append(li0);
		});
	}

}

//物资细类明细列表
function showCangKuWuZiListByWZZLX(CKLX, ID, WZZLX, WZDLXDM, ssgs) {

	ChooseShow("KHFW");
	$('#qiangdan_title').text("仓库信息");

	var parentComId = ulmap.KHFW;
	var titleList = [
		["WZCKID", ""],
		["MC", "名称"],
		["SL", "数量"],
		["WLMS", "物料描述"],
		["GYSID", "供应商"],
		["FZR", "负责人"],
		//["LXFS","联系方式"],
	];
	var clickfuns = [
		JumpMap,
		null,
		null,
		null,
		null,
		null,
		null,
	];

	getCangKuWuZiByWZZLX(dealdata, CKLX, ID, WZZLX, WZDLXDM, ssgs);

	function dealRow(row) {
		var newrow = [];
		for(var i = 0; i < titleList.length; i++) {
			var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
			newrow.push(value);
		}
		return newrow;
	}

	function dealdata(data) {
		$('#pageBlock').hide();
		if(!data.data) {
			createList(parentComId, titleList);
			return;
		}
		var rows = data.data;
		createList(parentComId, titleList, rows, dealRow, null, clickfuns, lxtomapMap.CK);
		if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length) {
			$('#pageBlock').show();
			fenye();
		}
	}
}

//仓库数量及仓库列表
function dealCangKuCount(CKLX, ssgs) {
	debugger
	$("#" + CangKu2ZYHtmlLabelMap[CKLX].num).text(0);

	var ul = CangKu2ZYHtmlLabelMap[CKLX].ul;

	getCangKuDetail(dealdata, CKLX, ssgs);

	function dealdata(data) {
		if(!data.data || data.data.length === 0) {
			return;
		}
		var rows = data.data;
		$("#" + CangKu2ZYHtmlLabelMap[CKLX].num).text(rows.length);

		clearul(ul);
		createli(ul, rows, CKLX);
	}

	function clearul(ulid) {
		var lilist = $("#" + ulid).find('li');

		for(var i = 0; i < lilist.length; i++) {
			$(lilist[i]).remove();
		}
		var lilist2 = $("#" + ulid).find('li');
	}

	function createli(ulid, rows, CKLX) {
		var lilist = $("#" + ulid).find('li');
		var li0 = $("<li>", {
			text: "全部",
			"ckid": "",
			class: "liSelected",
		});

		$("#" + ulid).append(li0);
		var lilist2 = $("#" + ulid).find('li');

		for(var i = 0; i < rows.length; i++) {
			if(rows[i].DQZT == '2') {
				img0 = $('<img>', {
					src: basepath + '/ws_static/img/warning_02.png',
					style: 'margin-right:10px;width:35px;float:left;'
				});
			} else {
				img0 = $('<img>', {
					src: basepath + '/ws_static/img/warning_01.png',
					style: 'margin-right:10px;width:35px;float:left;'
				});
			}

			p0 = $('<p>', {
				text: rows[i].MC.replace("国网上海电力", ""),
				style: 'display:inline-block;float:left;'
			});
			li0 = $("<li>", {
				"ckid": rows[i].ID,
				style: 'white-space: nowrap;text-overflow: ellipsis;overflow: hidden;'
			});
			li0.append(img0);
			li0.append(p0);

			$("#" + ulid).append(li0);
		}

		$("#" + ulid).find("li").click(function() {
			var ckid = $(this).attr("ckid");
			var isctive = $(this).is('.liSelected');
			$(this).addClass('liSelected').siblings().removeClass('liSelected');
			$("#" + ulid).siblings('.wzActive').text($(this).text())
			//判断物资类型
			var text = $("#" + CangKu2ZYHtmlLabelMap[CKLX].wzdlxli).find('.chosen_h4').text();
			var wzdlx = text.substr(0, 2);
			switch(wzdlx) {
				case '应急':
					wzdlx = "1";
					$('#qiangdan_title').text("应急库");
					break;
				case '常备':
					wzdlx = "2";
					$('#qiangdan_title').text("应急库");
					break;
				case '变电':
					wzdlx = "3";
					$('#qiangdan_title').text("常备库");
					break;
				case '线路':
					wzdlx = "4";
					$('#qiangdan_title').text("常备库");
					break;
				case '防汛':
					wzdlx = "6";
					$('#qiangdan_title').text("应急库");
					break;
			}
			dealCangKuWuZi(CKLX, wzdlx, ckid, g_deptchangeThisPage);

			//          图片滚动效果展示
			//			$('.bottom-list').removeClass('hide');
			//			var _thisTit = $(this).html();
			//			var ind = $(this).attr('ckid');
			//			if (ind>4) {
			//				ind = ind - 2;
			//			}else{
			//				ind = ind - 1;
			//			}
			//			
			//			$("#FourUl_add").empty();
			//			var th0 = $("<th>",{style : "width:50px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;",});
			//			$("#FourUl_add").append(th0);
			//			th0 = $("<th>",{
			//				text : "名称",
			//				style : "width:375px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;",
			//				});
			//			$("#FourUl_add").append(th0);
			//			th0 = $("<th>",{
			//				text : "照片附件",
			//				style : "width:375px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;",
			//				});
			//			$("#FourUl_add").append(th0);
			//			
			//			$("#FourUl table").empty();
			//			var tr = $("<tr>",{});
			//			var img = $("<img>", {
			//              src: basepath + '/ws_static/img/position.png',
			//              //class: 'positionClass',
			//              //class: "bottom2PClass ",
			//               style: 'width: 36;height:36;cursor: pointer;',
			////              click: btnclick(0, row[0], locallayer === "-1" ? sourceRow : locallayer),
			//          });
			//
			//          var td0 = $("<td>", {
			//              // text: img.html(),
			//              //title: value,
			////              class: "bottom2PClass",
			//              style: 'width:50px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;',
			//              //click: btnUrlclick(i,row),
			//          });
			//			td0.append(img);
			//			tr.append(td0);
			//			td0 = $("<td>",{
			//				text : _thisTit,
			//				style : "white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width:375px;height: 60px;line-height: 60px;padding:0 10px;font-size: 24px;",
			//			});
			//			tr.append(td0);
			//			tr.append('<td style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width:375px;height: 60px;line-height: 60px;padding:0 10px;font-size: 24px;"><img class="alert_box_show" src="'+basepath+'ws_static/img/no_img.png" alt="" style="cursor:pointer"></td>');
			//			
			//			$("#FourUl table").append(tr);
			//			
			//			$('#showImgDiv .slideBox').addClass('hide');
			//			$('#showImgDiv .slideBox').eq(ind).removeClass('hide');
			//			
			//			$('.alert_box_show').bind('click', function () {
			//				$('#showImgBigDiv').removeClass('hide');
			//				
			//			})

		});
	}
}

//供应商数量及列表
function dealSupplierList() {
	$.ajax({
		url: basepath + "interface/BDZT_WZGYSMX/0",
		data: '',
		type: 'get',
		dataType: 'json',
		success: function(data) {
			debugger
			var row = data.data;
			var num = 0;
			if(data.data) {
				for(var i = 0; i < row.length; i++) {
					$("#stand_sp_ul").append('<li id=' + row[i].ID + '>' + row[i].MC + '</li>');
				}
				$('#stand_sp_num').text(row.length);
			}
		},
		error: function(data) {
			//console.log(data);
		}
	});
}

$('#stand_sp_ul').on('click', 'li', function() {
	$(this).siblings('li').removeClass('liSelected');
	$(this).addClass('liSelected');
	$("#stand_sp_ul").siblings('.wzActive').text($(this).text());
	var id = $(this).attr('id');
	if(id == undefined) {
		id = "-1";
	}
	dealSupplierWuZiList(id);

});
//供应商物资列表
function dealSupplierWuZiList(id) {
	$.ajax({
		url: basepath + "interface/BDZT_GZGYSTJ_WZZLX_GIS/0?GYSID=" + id,
		data: '',
		type: 'get',
		dataType: 'json',
		success: function(data) {
			$("#stand_sp_wz_ul").empty();
			var row = data.data;
			var num = 0;
			if(data.data) {
				for(var i = 0; i < row.length; i++) {
					$("#stand_sp_wz_ul").append('<li wzzlx=' + row[i].WZZLXMC + '><p id=' + row[i].WZZLX + ',' + id + '>' + row[i].SL + '</p><span>' + row[i].WZZLXMC + '</span></li>');
				}
			}
		},
		error: function(data) {
			//console.log(data);
		}
	});
}
$('#stand_sp_wz_ul').on('click', 'p', function() {
	var id = $(this).attr('id');
	var array = id.split(",");
	supplierWuZiShow(array[1], array[0]);
});

/**
 * 供应商物资明细列表
 */
function supplierWuZiShow(id, lx) {
	$(".bottom-list").removeClass("hide"); //显示class为bottom-list的div
	showSupplierWuZiCeList(id, lx);
}

/**
 * 
 * 
 */
function showSupplierWuZiCeList(id, lx) {

	//物料描述 中类 小类 数量 仓库
	var parentComId = "FourUl";
	var titleList = [ //titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH", ""],
		["WLMS", "物料描述"],
		["WZZLXMC", "中类"],
		["WZXLXMC", "小类"],
		["SL", "数量"],
		["GYSMC", "仓库"],
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
		JumpMap(locallayer["GZSBBH"], lxtomapMap.QXGD);
	}

	function dealRow(row) {
		var newrow = [];
		for(var i = 0; i < titleList.length; i++) {
			console.log(titleList[i][0]);
			var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
			newrow.push(value);
		}
		return newrow;
	}

	function dealBackDataList(data) { //ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
		$('#pageBlock').hide();
		if(!data.data) {
			createList(parentComId, titleList);
			return;
		}
		var rows = data.data;
		createList(parentComId, titleList, rows, dealRow, null, clickfuns, "-1");
		if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length) {
			$('#pageBlock').show();
			fenye();
		}
	}

	getSupplierWuZiDetial(dealBackDataList, id, lx); //抢修情况明细查看(ajax接口请求)
}

$("#stand_sp_num").css({
	'cursor': 'pointer'
})
$("#stand_sp_num").click(function() {
	getSupplierShow();
	$('#qiangdan_title').text("供应商");
});

/**
 * 供应商明细列表
 */
function getSupplierShow() {
	$(".bottom-list").removeClass("hide"); //显示class为bottom-list的div
	showSupplierCeList();
}

/**
 * 
 * 
 */
function showSupplierCeList() {

	//供应商 主要供应物资 业务联系人 联系方式 地址
	var parentComId = "FourUl";
	var titleList = [ //titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH", ""],
		["MC", "供应商"],
		["ZYGYWZ", "主要供应物资"],
		["LXR", "业务联系人"],
		["LXFS", "联系方式"],
		["DZ", "地址"],
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
		JumpMap(locallayer["ID"], lxtomapMap.GYS);
	}

	function dealRow(row) {
		var newrow = [];
		for(var i = 0; i < titleList.length; i++) {
			console.log(titleList[i][0]);
			var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
			newrow.push(value);
		}
		return newrow;
	}

	function dealBackDataList(data) { //ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
		$('#pageBlock').hide();
		if(!data.data) {
			createList(parentComId, titleList);
			return;
		}
		var rows = data.data;
		createList(parentComId, titleList, rows, dealRow, null, clickfuns, "-1");
		if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length) {
			$('#pageBlock').show();
			fenye();
		}
	}

	getSupplierDetial(dealBackDataList); //抢修情况明细查看(ajax接口请求)
}

//仓库详情:名称、地址、主要供应物资、业务联系人、联系方式、公司分管领导、联系方式
function showCangKuList(CKLX, ssgs) {

	var parentComId = "FourUl";
	var titleList = [
		["ID", ""],
		["MC", "仓库名称"],
		["CKLXMC", "类型"],
		["DZ", "地址"],
		["FZR", "负责人"],
		["LXFS", "联系方式"],
		["SSGSMC", "所属公司"],
		//["iiiii","联系方式"],
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
	];

	getCangKuDetail(dealdata, CKLX, ssgs);

	function dealRow(row) {
		var newrow = [];
		for(var i = 0; i < titleList.length; i++) {
			var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
			if(titleList[i][1] === "公司") {
				value = SSGSMAP_ID[value];
			}
			newrow.push(value);
		}
		return newrow;
	}

	function dealdata(data) {
		$('#pageBlock').hide();
		if(!data.data) {
			createList(parentComId, titleList);
			return;
		}
		var rows = data.data;
		createList(parentComId, titleList, rows, dealRow, null, clickfuns, lxtomapMap.CK);
		$("#FourUl_add").append('<th style="width:375px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;">照片附件</th>');
		for(i = 0; i < $("#FourUl tr").length; i++) {
			var tr = $("#FourUl tr")[i];
			$(tr).append('<td style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width:375px;height: 60px;line-height: 60px;padding:0 10px;font-size: 24px;"><img class="alert_box_show" src="' + basepath + 'ws_static/img/no_img.png" alt="" style="cursor:pointer"></td>');
		}
		$("#div-1").css('width', 375 * (titleList.length + 1) + 'px');
		if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length) {
			$('#pageBlock').show();
			fenye();
		}
	}

}

var personnel_num = {
	"realnum": 0, //实到
	"cannum": 0, //应到
	"idlenum": 0, //空闲
	"busynum": 0, //忙碌
	"thisnum": 0, //本市
	"othernum": 0, //外省
}
//资源监控统计-人员
function dealZiYuanTongJi_Person(ssgs) {

	getZiYuanTongJi_Person(dealdata, ssgs);

	function dealdata(data) {
		if(!data.data || data.data.length == 0) {
			return;
		}

		var rows = data.data;
		var allnum = 0;
		var realnum = 0;
		var cannum = 0;
		var SL = 0;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			SL = parseInt(row.SL);
			if(row.ZLXMC === "应到岗") {
				cannum += SL;
			} else {
				realnum += SL;
			}
		}
		allnum = realnum + cannum;
		dealhtml(allnum, realnum, cannum);
	}

	function dealhtml(allnum, realnum, cannum) {
		$("#wuzijiankong_person_num").text(allnum);
		//      personnel_num.realnum = realnum;
		//      personnel_num.cannum = cannum;
		//      personnel(personnel_num);
		$("#cannum").text(cannum);
		$("#realnum").text(realnum);
	}

}

//资源监控统计-车辆
function dealZiYuanTongJi_Car(ssgs) {

	getZiYuanTongJi_Car(dealdata, ssgs);

	function dealdata(data) {
		if(!data.data || data.data.length == 0) {
			return;
		}

		var rows = data.data;
		var allnum = 0;
		var idlenum = 0;
		var busynum = 0;
		var SL = 0;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			SL = parseInt(row.SL);
			if(row.ZLXMC === "空闲") {
				idlenum += SL;
			} else {
				busynum += SL;
			}
		}
		allnum = idlenum + busynum;
		dealhtml(allnum, idlenum, busynum);
	}

	function dealhtml(allnum, idlenum, busynum) {
		$("#wuzijiankong_car_num").text(allnum);
		//      personnel_num.idlenum = idlenum;
		//      personnel_num.busynum = busynum;
		//      personnel(personnel_num);
		$("#busynum").text(busynum);
		$("#idlenum").text(idlenum);
	}

}

//资源监控统计-供应商
function dealZiYuanTongJi_Supplier(ssgs) {

	getZiYuanTongJi_Supplier(dealdata, ssgs);

	function dealdata(data) {
		if(!data.data || data.data.length == 0) {
			return;
		}

		var rows = data.data;
		var allnum = 0;
		var thisnum = 0;
		var othernum = 0;
		var SL = 0;
		for(var i = 0; i < rows.length; i++) {
			var row = rows[i];
			SL = parseInt(row.SL);
			if(row.ZLXMC === "本市") {
				thisnum += SL;
			} else {
				othernum += SL;
			}
		}
		allnum = thisnum + othernum;
		dealhtml(allnum, thisnum, othernum);
	}

	function dealhtml(allnum, thisnum, othernum) {
		$("#wuzijiankong_supplier_num").text(allnum);
		personnel_num.thisnum = thisnum;
		personnel_num.othernum = othernum;
		personnel(personnel_num);
	}
}