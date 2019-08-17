

//左侧四个框子点击图标变白效果
$('.status_tab1 li').on('click', function() {
	var num = $(this).index();
	var showTab = $('.run_box');
	$(this).addClass('active_tab').siblings().removeClass('active_tab');
	showTab.eq(num).removeClass('hide').siblings('div').addClass('hide');
});
$('.status_tab2 li').on('click', function() {
	var num = $(this).index();
	var showTab = $('.first_box');
	$(this).addClass('active_tab').siblings().removeClass('active_tab');
	showTab.eq(num).removeClass('hide').siblings('div').addClass('hide');
});
$('.status_tab3 li').on('click', function() {
	var num = $(this).index();
	var showTab = $('.ai_box');
	$(this).addClass('active_tab').siblings().removeClass('active_tab');
	showTab.eq(num).removeClass('hide').siblings('div').addClass('hide');
});

$('.status_tab4 li').on('click', function() {
	var num = $(this).index();
	var showTab = $('.zhihui_box');
	$(this).addClass('active_tab').siblings().removeClass('active_tab');
	showTab.eq(num).removeClass('hide').siblings('div').addClass('hide');
	if(num==0){
		$('#yingji_pic').hide();
	} else if(num==1){
		$('#yingji_pic').show();
	}
});

/*点击显示当日历史*/
$('#history_show').on('click',function(){
	$('.history').show();
})

$('.history_close').on('click',function(){
	$('.history').hide();
})


//最高负荷
$('.centerTop_list03 p').on('click', function() {
	var loadPower = $('.loadPower');
	var isShow = loadPower.is(':hidden');
	if(isShow) {
		loadPower.removeClass('hide');
	} else {
		return false
	}
});

//最高负荷关闭按钮
$('.close_load').on('click', function() {
	var loadPower = $('.loadPower');
	loadPower.addClass('hide');
});


$(function() {
	settime();//中间顶部调用时间
	window.setInterval("settime()", 3000);//隔三秒刷新
	$('#showImgBigDiv').addClass('hide');//中间区域仓库图片隐藏
	$('#showImgBigDiv').css('opacity', 1);
});

//时间更新
function settime() {
	var date = gettime();

	var TimeFull = date.year + '-' + date.month + '-' + date.day + ' ' + date.hour + ':' + date.minutes;
	var TimeMonth = date.year + '-' + date.month + '-' + date.day;
	var TimeHours = date.hour + ':' + date.minutes;

	$("#TitleTime").text(TimeFull);
	$("#SubtitleTime").text(TimeMonth);
	$("#TimeHour").text("今日(00:00" + " -- " + TimeHours + ")");
	$(".setNowTime").text("今日(00:00" + " -- " + TimeHours + ")");
}
//隐藏通道监拍
$("#closeTongDao").click(function() {
	$("#TongDaoJianPaiPage").removeClass('show').addClass('hide');
});
//返回通道监拍
$("#goBackTongDao").click(function() {
	$("#TongDaoJianPaiPage").removeClass('show').addClass('hide');
});

//调用地图
function changeMap(type) {
	Popup.hide("#popup-gzjcfx");
	//专题名称
	var name = "";
	if("YXZT" == type || "QWZT" == type) { //运行状态 
		name = "runStatus";
	} else if("GZJC" == type) { //故障监测
		name = "runFault";
	} else if("PWYX" == type) { //配网运行
		name = "runDms";
	} else if("GDFW" == type) { //供电服务
		name = "runPower";
	} else if("BZZD" == type || "ZHJK" == type) { //保障重点
		name = "intelligenceSafeguard";
	} else if("ZDGZ" == type) { //智能感知
		name = "intelligencePerception";
	} else if("YWZH" == type) { //业务指挥
		name = "business";
	} else if("DBZY" == type || "ZYJK" == type) { //当班资源
		name = "resourceControl";
	} else if("WZJK" == type) { //物资监控
		name = "resourceMaterial";
	}
	//如果没有引入地图的url的话，则直接返回
	if(document.getElementById("iframe1").src == document.URL) {
		return;
	}
	//TODO
	document.getElementById("iframe1").contentWindow.changeSpecial({
		name: name
	});
}

//点击右侧应急预案隐藏
$("#firstTab li").click(function(){
	$('#yingji_pic').hide();
});

/**
 * 点击全网状态-故障监测
 */
function clickGzjcTab(){
	$('#popup-tqjcfx').hide();
	$('#popup-pwqxfx').hide();
	$(".chuli_item_bar").css("background","rgba(188,188,188,0.1)");
	$(".chuli_item_bar span").css("background","rgba(188,188,188,0.1)");
}
//点击切换全网状态导航栏
$('#yxzt').click(function(){
	$(".bottom-list").addClass("hide");
})
$('#gzjc').click(function(){
	$(".bottom-list").addClass("hide");
})
$('#pwyx').click(function(){
	$(".bottom-list").addClass("hide");
})
$('#gdfw').click(function(){
	$(".bottom-list").addClass("hide");
})

/**
 * 点击供电服务
 */
function clickGDFW() {
	$('#popup-tqjcfx').hide();//点击供电服务台区监测分析图隐藏
	$('#popup-gzjcfx').hide();//点击供电服务故障监测分析图隐藏
}
// 运行状态点击分析图关闭
function clickAll(){
	$('#popup-tqjcfx').hide();
	$('#popup-gzjcfx').hide();
	$('#popup-pwqxfx').hide();
}


