
//应急预案接口
function getEmergencyWay(callback,yabh,ssgs){
	var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "YABH": yabh};
    var url = basepath + "interface/BDZT_GETYJYAMMX/0";
    callgetajax(callback,url,param);
}

//显示预案
//setTimeout(function(){
	showEmergencyList();//显示应急预案
//},1000)




function showEmergencyList(){
	showEmergency("2","");
//	showEmergency("2","");
//	showEmergency("3","");
}

function showEmergency(yabh,ssgs){
	getEmergencyWay(dealdata_Tiltle1,"2",ssgs);//获取应急预案接口--通泾
	getEmergencyWay(dealdata,yabh,ssgs);//应急预案下的方案步骤
	getEmergencyWay(dealdata_Tiltle2,"1",ssgs);//获取应急预案接口--虹光
	
	function dealdata_Tiltle1(data) {
        if(data != null && data.data){
        	var  rows = data.data;
        	$('.zhihui_ul li').eq(0).find("span").html(rows[0].YAMC);
        }
    }
	
	function dealdata(data) {
        if(data != null && data.data){
        	var  rows = data.data;
        	$(".zhuhui_tab.selected>div").eq(0).empty();
        	for(i = 0;i < rows.length;i++){
        		var html = "";
        		html += "<div class='tep1'>";
				html += "<div class='tep_left'>";
				html += "<span class='yuan'>"+(i+1)+"</span>";
				if(i != (rows.length-1)){
					html += "<div class='tep_lines'></div>";
				}
				html += "</div>";
				html += "<div class='tep_right'>";
				html += "<dl class='tep_dl'>";
				if(rows[i].CZBZMS != null){
					html += "<dd style='cursor: pointer;'><span class='sanjiao first'></span>"+rows[i].CZBZMS+"</dd>";
				}
				if(rows[i].CZBZ2MS != null){
					html += "<dd style='cursor: pointer;' title='"+rows[i].CZBZ2MS+"'><span class='border_yuan'></span>"+rows[i].CZBZ2MS+"</dd>";
				}
				if(rows[i].CZBZ3MS != null){
					html += "<dd style='cursor: pointer;' title='"+rows[i].CZBZ2MS+"'><span class='border_yuan'></span>"+rows[i].CZBZ3MS+"</dd>";
				}
				html += "</dl>";
			    html += "</div>";
				html += "</div>";
				$(".zhuhui_tab.selected>div").eq(0).append(html);//创建页面结构
        	}
        }
    }
	
	function dealdata_Tiltle2(data) {
        if(data != null && data.data){
        	var  rows = data.data;
        	$('.zhihui_ul li').eq(1).find("span").html(rows[0].YAMC);
        }
    }
}


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
		$('#yingji_pic',parent.document).show();
		$('#yingji_pic',parent.document).find('img').attr('src',basepath+'ws_static/img/tj0.png');
	} else if(index == 1){
//		$('#yingji_pic').hide();
       $('#yingji_pic',parent.document).show();
		$('#yingji_pic',parent.document).find('img').attr('src',basepath+'ws_static/img/hg0.png');
	}
	
})
//方案步骤对应的图片
var pic_list = [basepath+'ws_static/img/hg1.gif',basepath+'ws_static/img/hg2.gif',basepath+'ws_static/img/hg3.png',basepath+'ws_static/img/hg4.gif',basepath+'ws_static/img/hg5.png',basepath+'ws_static/img/hg6.gif'];
var pic_list1 = [basepath+'ws_static/img/tj1.gif',basepath+'ws_static/img/tj2.gif',basepath+'ws_static/img/tj3.png',basepath+'ws_static/img/tj4.gif',basepath+'ws_static/img/tj5.png',basepath+'ws_static/img/tj7.gif'];
/*点击切换高亮*/
$('.content_fangan').on('click','.tep_right',function(){

	$(this).find('dl').addClass('tep_active');
	$(this).parent().siblings().find('dl').removeClass('tep_active')
	$(this).addClass('tep_right_change');
	$(this).parent().siblings().find('.tep_right').removeClass('tep_right_change')

    	$('#yingji_pic',parent.document).show();

	var index = $('.tep_active').index('.zhuhui_tab.selected dl');

    if($(".ac_fangan span").text() == "通泾1719故障"){
    	$('#yingji_pic',parent.document).find('img').attr('src',pic_list1[index]);
    } else {
    	$('#yingji_pic',parent.document).find('img').attr('src',pic_list[index]);
    }
	
})
//点击步骤---上一步下一步按钮取消灰色
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
//通径上一步
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
//通径下一步
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
//虹光上一步
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
//虹光下一步
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
/*点击步骤对应切换图片*/
function changeTep(pic_list,index,num){
	$('.zhuhui_tab.selected .tep1').find('dl').eq(index).removeClass('tep_active');
	$('.zhuhui_tab.selected .tep1').find('dl').eq(num).addClass('tep_active');
	$('.zhuhui_tab.selected .tep1').find('.tep_right').eq(num).addClass('tep_right_change');
	$('.zhuhui_tab.selected .tep1').find('.tep_right').eq(index).removeClass('tep_right_change');
	$('#yingji_pic',parent.document).find('img').attr('src',pic_list[num]);
}







