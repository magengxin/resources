
function scale(eq,id,name){
	$('#showImgDiv .slideBox').eq(eq).find(id).on('click',function(){
//		console.log($(id)[0].src)
		var	imgurl;
		if(name){
			imgurl = $(id)[0].src;
			$('#picbox').css('display','block');
			$('#picbox').attr('src',imgurl);
			$('#showImgBigDiv').hide();
			$('#pictitle').text($(this).siblings().text()).show()
			$('#picbox').on('click',function(){
				$(this).hide()
				$('#showImgBigDiv').show()
				$('#pictitle').hide()
			})
			$("#arrowBtn").click(function() {
				$("#showImgBigDiv").css('display','none');
			})
			name = false
		}
		else{
			imgurl = ''
			$('#picbox').hide()
			$('#picbox').css('background','red');
			$('#showImgBigDiv').show();
			$('#arrowBtn').show();
			
			$("#showImgBigDiv").css('display','block');
			name = true
		}
		
	})
}

$("#arrowBtn").click(function() {
	$("#showImgBigDiv").css('display','none');
})

$("#FourUl").on('click',"td .alert_box_show",function(){
	var name = $('#qiangdan_title').text();
	if($("#FourUl_add th").length == 3){
		if(name == '常备库'){
			var index = $("#stand_ck_ul .liSelected").index() - 1;
		} else {
			var index = $("#emergency_ck_ul .liSelected").index() - 1;
		}
	} else{
		var index = $(this).index("#FourUl td .alert_box_show");
	}
	if(name == '常备库'){
		index = index+3;
	}
	$('#showImgDiv .slideBox').eq(index).css('display','block');
	$('#showImgDiv .slideBox').css('display','none');
   $('#showImgDiv .slideBox').eq(index).css('display','block');
   $('#showImgBigDiv').css('display','block');
});

scale(0,'#0','flag0')
scale(0,'#1','flag1')
scale(0,'#2','flag2')
scale(0,'#3','flag3')
scale(0,'#4','flag4')
scale(1,'#5','flag5')
scale(1,'#6','flag6')
scale(2,'#7','flag7')
scale(2,'#8','flag8')
scale(3,'#9','flag9')
scale(3,'#10','flag10')
scale(4,'#11','flag11')
scale(4,'#12','flag12')
scale(5,'#13','flag13')
scale(5,'#14','flag14')
scale(6,'#15','flag15')
scale(6,'#16','flag16')
scale(7,'#17','flag17')
scale(7,'#18','flag18')
scale(8,'#19','flag19')
scale(8,'#20','flag20')
scale(9,'#21','flag21')
scale(9,'#22','flag22')
scale(10,'#23','flag23')
scale(10,'#24','flag24')
scale(11,'#25','flag25')
scale(11,'#26','flag26')

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
$('.status_line li').on('click', function() {
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

/*应急方案点击*/


/*点击选择方案*/
$('.zhihui_ul>li').on('click',function(){
	$('.zhuhui_tab.selected .tep_active').removeClass('tep_active');
	$(this).addClass('ac_fangan').siblings('li').removeClass('ac_fangan');
	var index = $(this).index();
	$('.zhuhui_tab').eq(index).addClass('selected').siblings('div').removeClass('selected');
	if(index == 1){
		showEmergency("1","");
	} else if(index == 0){
		showEmergency("2","");
	}
	if(index == 0){
		$('#yingji_pic').show();
		$('#yingji_pic img').attr('src',basepath+'ws_static/img/tj0.png');
	} else if(index == 1){
//		$('#yingji_pic').hide();
       $('#yingji_pic').show();
		$('#yingji_pic img').attr('src',basepath+'ws_static/img/hg0.png');
	}
	
})
var pic_list = [basepath+'ws_static/img/hg1.gif',basepath+'ws_static/img/hg2.gif',basepath+'ws_static/img/hg3.png',basepath+'ws_static/img/hg4.gif',basepath+'ws_static/img/hg5.png',basepath+'ws_static/img/hg6.gif'];
var pic_list1 = [basepath+'ws_static/img/tj1.gif',basepath+'ws_static/img/tj2.gif',basepath+'ws_static/img/tj3.png',basepath+'ws_static/img/tj4.gif',basepath+'ws_static/img/tj5.png',basepath+'ws_static/img/tj7.gif'];
/*点击切换高亮*/
$('.content_fangan').on('click','.tep_right',function(){

	$(this).find('dl').addClass('tep_active');
	$(this).parent().siblings().find('dl').removeClass('tep_active')
	$(this).addClass('tep_right_change');
	$(this).parent().siblings().find('.tep_right').removeClass('tep_right_change')

    	$('#yingji_pic').show();

	var index = $('.tep_active').index('.zhuhui_tab.selected dl');

    if($(".ac_fangan span").text() == "通泾1719故障"){
    	$('#yingji_pic').find('img').attr('src',pic_list1[index]);
    } else {
    	$('#yingji_pic').find('img').attr('src',pic_list[index]);
    }
	
})

$('.content_fangan').on('click','.tep1 dl',function(){

	$('#prev').removeClass('txtActive');
	$('#next').removeClass('txtActive');
	$('#prev0').removeClass('txtActive');
	$('#next0').removeClass('txtActive');
	$('#prev1').removeClass('txtActive');
	$('#next1').removeClass('txtActive');
})
/*点击切换下一步*/
$('#next').on('click',function(){
	$('#prev').removeClass('txtActive');
	var index = $('.tep_active').index('.zhuhui_tab.selected dl');
	var len = $('.zhuhui_tab.selected .tep1').find('dl').length;
	if(index == len-1){
		$(this).addClass('txtActive');
		return;
	}else{
		$(this).removeClass('txtActive');
	}
	changeTep(pic_list1,index,index+1);
})
/*点击切换上一步*/
$('#prev').on('click',function(){
	$('#next').removeClass('txtActive');
	var index = $('.tep_active').index('.zhuhui_tab.selected dl');
	if(index == 0){
		$(this).addClass('txtActive');
		return;
	}else{
		$(this).removeClass('txtActive');
	}
	changeTep(pic_list1,index,index-1);
})

$('#next0').on('click',function(){
	$('.zhuhui_tab.selected #prev0').removeClass('txtActive');
	var index = $('.zhuhui_tab.selected .tep_active').index('.zhuhui_tab.selected dl');
	var len = $('.zhuhui_tab.selected .tep1').find('dl').length;
	if(index == len-1){
		$(this).addClass('txtActive');
		return;
	}else{
		$(this).removeClass('txtActive');
	}
	changeTep(pic_list,index,index+1);
})

$('#prev0').on('click',function(){
	$('.zhuhui_tab.selected #next0').removeClass('txtActive');
	var index = $('.zhuhui_tab.selected .tep_active').index('.zhuhui_tab.selected dl');
	if(index == 0){
		$(this).addClass('txtActive');
		return;
	}else{
		$(this).removeClass('txtActive');
	}
	changeTep(pic_list,index,index-1);
})

$('#next1').on('click',function(){
	$('.zhuhui_tab.selected #prev1').removeClass('txtActive');
	var index = $('.zhuhui_tab.selected .tep_active').index('.zhuhui_tab.selected dl');
	var len = $('.zhuhui_tab.selected .tep1').find('dl').length;
	if(index == len-1){
		$(this).addClass('txtActive');
		return;
	}else{
		$(this).removeClass('txtActive');
	}
	changeTep(index,index+1);
})

$('#prev1').on('click',function(){
	$('.zhuhui_tab.selected #next1').removeClass('txtActive');
	var index = $('.zhuhui_tab.selected .tep_active').index('.zhuhui_tab.selected dl');
	if(index == 0){
		$(this).addClass('txtActive');
		return;
	}else{
		$(this).removeClass('txtActive');
	}
	changeTep(index,index-1);
})

function changeTep(pic_list,index,num){
	$('.zhuhui_tab.selected .tep1').find('dl').eq(index).removeClass('tep_active');
	$('.zhuhui_tab.selected .tep1').find('dl').eq(num).addClass('tep_active');
	$('.zhuhui_tab.selected .tep1').find('.tep_right').eq(num).addClass('tep_right_change');
	$('.zhuhui_tab.selected .tep1').find('.tep_right').eq(index).removeClass('tep_right_change');
	$('#yingji_pic').find('img').attr('src',pic_list[num]);
}
/*点击步骤对应切换图片*/






$('.title_list li').on('click', function() {
	var num = $(this).index();
	titlelistCLick(this, num);
});
$('.chosen_tit').on('click', function() {
	var obj = $(this).parent().parent('.left_tab');
	var num = obj.index() - 1;//1
	var showList = $('.title_list li').eq(num);
	if(num === 3) {
		obj.addClass("bg-box2").siblings().removeClass("bg-box2");
	}
	obj.addClass("chosen_tab").siblings().removeClass("chosen_tab bg-box2");
	
	showList.addClass('active_list').siblings().removeClass('active_list');//左侧右侧联动
	titlelistCLick(showList, num);
});

//点击切换图标ac----------白色         icon1-----------蓝色
$('.activeIcon1').on('click',function(){
	$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_1.png")')
	$('.activeIcon2').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_2.png")')
	$('.activeIcon3').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_3.png")')
	$('.activeIcon4').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_4.png")')
})
$('.activeIcon2').on('click',function(){
	$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_2.png")')
	$('.activeIcon1').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_1.png")')
	$('.activeIcon3').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_3.png")')
	$('.activeIcon4').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_4.png")')
})
$('.activeIcon3').on('click',function(){
	$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_3.png")')
	$('.activeIcon1').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_1.png")')
	$('.activeIcon2').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_2.png")')
	$('.activeIcon4').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_4.png")')
})
$('.activeIcon4').on('click',function(){
	$(this).find('span').eq(0).css('background-image','url("../../ws_static/img/icon_ac_4.png")')
	$('.activeIcon1').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_1.png")')
	$('.activeIcon3').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_3.png")')
	$('.activeIcon2').find('span').eq(0).css('background-image','url("../../ws_static/img/icon_2.png")')
})

/*右侧态势图入口*/
$('#tst_id_gzjc').click(function(){
	document.getElementById("iframe1").contentWindow.specialClick(0);
});
$('#tst_id_kkxfx').click(function(){
	document.getElementById("iframe1").contentWindow.specialClick(0);
});
$('#tst_id_pwyx').click(function(){
	document.getElementById("iframe1").contentWindow.specialClick(1);
});
$('#tst_id_gdfw').click(function(){
	document.getElementById("iframe1").contentWindow.specialClick(2);
});


// 台区监测 
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
//左右联动函数
function titlelistCLick(obj, num) {

	var showTab = $('.tab_box>li');
	$(obj).addClass('active_list').siblings().removeClass('active_list');
	showTab.eq(num).removeClass('hide').siblings('li').addClass('hide');
	var bg_num = num + 1;
	

	var zhuantimapname;
	var thisLi = $('.title_list li');
	if(bg_num === 1) {
		zhuantimapname = LxToZTmapMap.YXZT;
		thisLi.eq(0).css({
			width: 305
		});
		thisLi.eq(1).css({
			width: 304,
			left: 0
		});
		thisLi.eq(2).css({
			left: -30
		});
		thisLi.eq(3).css({
			left: -61
		});
	} else if(bg_num === 2) {
		zhuantimapname = LxToZTmapMap.ZDBZ;
		thisLi.eq(0).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg2_1.png)',
			width: '311px'
		});
		thisLi.eq(1).css({
			width: 280,
			marginLeft: 0,
			left: 8
		});
		thisLi.eq(2).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg2_2.png)',
			left: 40,
			width: 305
		});
		thisLi.eq(3).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg2_2.png)',
			left: 8,
		});
	} else if(bg_num === 3) {
		zhuantimapname = LxToZTmapMap.YWZH;
		thisLi.eq(0).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg3_1.png)',
			width: 350
		});
		thisLi.eq(1).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg3_2.png)',
			left: -37,
			width: 264,
		});
		thisLi.eq(2).css({
			width: 305,
			left: -75,
		});
		thisLi.eq(3).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg3_3.png)',
			left: -85
		});
	} else if(bg_num === 4) {
		zhuantimapname = LxToZTmapMap.ZYJK;
		thisLi.eq(0).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg4_1.png)',
			width: 350
		});
		thisLi.eq(1).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg4_2.png)',
			width: 304,
			left: -22
		});
		thisLi.eq(2).css({
			backgroundImage: 'url(' + basepath + '/ws_static/img/tab_bg4_3.png)',
			width: 265,
			left: -45
		});
		thisLi.eq(3).css({
			left: -112
		});
	}
	JumpZhuanTiMap(zhuantimapname);
}

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

$(".power_title_click").find("img").click(function() {
	alert($(this).attr("id"));
});

$("#baodian_huizhan_1").click(function() {
	var url = "http://10.131.216.134:7889/pdpsc-app/svgGet/svgZN?SBID=44f64e23638a039c93573aba47015744f6210d42cb"
	setTongDaoJianPaiIframeUrl(url);
});

$("#baodian_huizhan_2").click(function() {

	var url = "http://10.131.216.134:7889/pdpsc-app/svgGet/svgLJ?SBID=2018080801"
	setTongDaoJianPaiIframeUrl(url);
});


$('.centerTop_list03 p').on('click', function() {
	var loadPower = $('.loadPower');
	var isShow = loadPower.is(':hidden');
	if(isShow) {
		loadPower.removeClass('hide');
	} else {
		return false
	}
});

$('.close_load').on('click', function() {
	var loadPower = $('.loadPower');
	loadPower.addClass('hide');
});

$('.emergency_title1 li h4').on("click", function() {
	var showUl = $('.emergency_list').find('ul');
	var num = $(this).index();
	$(this).addClass('chosen_h4').siblings().removeClass('chosen_h4');
	//showUl.eq(num).removeClass('hide').siblings().addClass('hide')
});

$('.emergency_title2 li h4').on("click", function() {
	var showUl = $('.emergency_list2').find('ul');
	var num = $(this).index();
	$(this).addClass('chosen_h4').siblings().removeClass('chosen_h4');
	showUl.eq(num).removeClass('hide').siblings().addClass('hide')
});

$('.show_emergency_list').on('click', function() {
	var ebox = $('.emergency_box');
	var isShow = ebox.is(':hidden');
	if(isShow) {
		ebox.removeClass('hide')
	} else {
		ebox.addClass('hide')
	}
});

$('.emergency_table tbody tr td').on('click', function() {
	var box = $('.emergency_box');
	var hideTab = $('.more_tab');
	box.css({
		'background-image': 'url("' + basepath + '/ws_static/img/click_02.png")'
	});
	hideTab.removeClass('hide')
});

$('.emergency_box_title span').on('click', function() {
	$(this).addClass('chosen_span').siblings().removeClass('chosen_span');
	var num = $(this).index();
	$('.emergency_3').eq(num).removeClass('hide').siblings('.emergency_3').addClass('hide')
});

$('.first_td').on('click', function() {
	var tr = $(this).parent();
	var nextTr = tr.next('.hide_list');
	var show = nextTr.is(":hidden");
	if(show) {
		nextTr.removeClass('hide')
	} else {
		nextTr.addClass('hide')
	}
});

$('.SmartDevice li').hover(enterLi, leaveLi);

function enterLi() {
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

function leaveLi() {
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
$(function() {
	settime();
	window.setInterval("settime()", 3000);
	window.setInterval("setWeatherImg1()", 300000);
	window.setInterval("setWeatherImg2()", 600000);
	window.setInterval("setWeatherImg3()", 900000);
});

function setWeatherImg1() {
	$("#weatherImg").attr({
		"src": basepath + '/ws_static/img/qin.png',
		"title": "晴"
	});
}

function setWeatherImg2() {
	$("#weatherImg").attr({
		"src": basepath + '/ws_static/img/rain.png',
		"title": "雨"
	});
}

function setWeatherImg3() {
	$("#weatherImg").attr({
		"src": basepath + '/ws_static/img/top_01.png',
		"title": "多云转晴"
	});
}

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
$("#arrowBtn").click(function() {
	$("#showImgBigDiv").removeClass("show").addClass("hide");
})
$(".arrowIndex").find("img").hover(function() {
	var id = $(this).parent().attr('id');
	if(id === "arrowLeft") {
		$(this).attr("src", basepath + '/ws_static/img/left_qh1.png');
	} else {
		$(this).attr("src", basepath + '/ws_static/img/right_qh2.png');
	}

}, function() {
	var id = $(this).parent().attr('id');
	if(id === "arrowLeft") {
		$(this).attr("src", basepath + '/ws_static/img/left_qh.png');
	} else {
		$(this).attr("src", basepath + '/ws_static/img/right_qh.png');
	}

});
$("#closeTongDao").click(function() {
	$("#TongDaoJianPaiPage").removeClass('show').addClass('hide');
});
$("#goBackTongDao").click(function() {
	$("#TongDaoJianPaiPage").removeClass('show').addClass('hide');
});

//从首页底部移植过来的
function yccz_qx(clas) { //缺陷
	if(clas) {
		if($('#' + clas + '')[0].className == "ycjcz_k") {
			document.getElementById("iframe1").contentWindow.changeVisible({
				name: "protecCoreDefectHistoryLayer",
				type: "true"
			})
			$('#' + clas + '')[0].className = "ycjcz_g"
		} else {
			document.getElementById("iframe1").contentWindow.changeVisible({
				name: "protecCoreDefectHistoryLayer",
				type: "false"
			})
			$('#' + clas + '')[0].className = "ycjcz_k"
		}
	}
}

function yccz_yh(clas) { //隐患
	if(clas) {
		if($('#' + clas + '')[0].className == "ycjcz_k") {
			document.getElementById("iframe1").contentWindow.changeVisible({
				name: "protecCoreDangerHistoryLayer",
				type: "true"
			})
			$('#' + clas + '')[0].className = "ycjcz_g"
		} else {
			document.getElementById("iframe1").contentWindow.changeVisible({
				name: "protecCoreDangerHistoryLayer",
				type: "false"
			})
			$('#' + clas + '')[0].className = "ycjcz_k"
		}
	}
}

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
	} else if("FTFX" == type) { //防台防汛
		name = "typhoonFlood";
	} else if("DWZT" == type) { //防台防汛
		name = "DWZT";
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

var move_left_start = $('.move_after').css('left'),
	move_left = parseInt(move_left_start),
	scale = (1080 / 12);
$('.square_move dd').click(function() {
	var index = $(this).index() - 1,
		end_left;
	if(index == 0) {
		$('.move_after').hide();
	} else if(index == 1) {
		$('.move_after').show();
		end_left = move_left;
	} else {
		$('.move_after').show();
		end_left = move_left + (index - 1) * scale;
	}
	$('.move_after').css('left', end_left);
})

var sec_left_start = $('.move_section_bar').css('left'),
	sec_move_left = parseInt(sec_left_start),
	sec_scale = (960 / 6);
$('.double_move dd').click(function() {
	var index = $(this).index() - 1,
		end_left,
		end_top;
	if(index == 0) {
		$('.move_section_bar').hide();
	} else if(index == 1) {
		$('.move_section_bar').show();
		end_left = sec_move_left;
	} else {
		$('.move_section_bar').show();
		if(index > 6) {
			end_left = sec_move_left + (index - 7) * sec_scale;
			end_top = 600;
		} else {
			end_left = sec_move_left + (index - 1) * sec_scale;
			end_top = 119;
		}
	}
	$('.move_section_bar').css({
		'left': end_left,
		'top': end_top
	});
})

$('.lys_hover dd').click(function () {
	$('.lys_hover dt').html($(this).find('span').html());
});

$(function () {
	$('#showImgBigDiv').addClass('hide');
	$('#showImgBigDiv').css('opacity', 1);
});

$("#firstTab li").click(function(){
	$('#yingji_pic').hide();
});





