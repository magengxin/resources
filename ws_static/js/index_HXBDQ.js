
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
	   // $("#gzjc").addClass('active_tab').siblings().removeClass('active_tab');
		//$('.run_box').eq(1).removeClass('hide').siblings('div').addClass('hide');
		//$("#gzjc1").click();
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
