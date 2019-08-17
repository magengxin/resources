
$(function () {
    getWenDuData();
    getFuHeData();
    getYuJingZTBDData();
    setInterval(getWenDuData,1000*60*30);
    setInterval(getFuHeData,1000*60);
})

function getWenDuData() {
    $.ajax({
        //GETTQXX?SSGS=-1&KSSJ=2018-01-01&JSSJ=2018-09-01
        //TASK_TYPE=2为异常处理，3为紧急
        url: basepath + "interface/GETTQXX/0",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if  (data.data && data.data.length>0) {

//        	$('#abnormal_deal_num').text(abnormal_deal_num);
                $('#wendu').text(data.data[0].TEMPERATURE);
                var hour = new Date().getHours();
                if (hour>5 || hour<18){
                    $('#wenduimg').attr("src",basepath +'ws_static/img/weather/day/'+data.data[0].DAY_PICTURE_URL);
                } else {
                    $('#wenduimg').attr("src",basepath +'ws_static/img/weather/night/icon_power.png'+data.data[0].NIGHT_PICTURE_URL);
                }
                $('#wenduimg').attr("title",data.data[0].WEATHER);

            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}
function getFuHeData(){
    $.ajax({
        //http://10.131.216.134:7889/pdpsc-app/idpqry/SBID/CUR/8a812897493378a00149567740676661/21/2
        //TASK_TYPE=2为异常处理，3为紧急
        url: basepath + "idpqry/SBID/CUR/8a812897493378a00149567740676661/21/2",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if  (data.data.length > 0) {
                var value = parseInt(data.data[0].VALUE) / 1000000;
                var SSvalue = value.toFixed(1);
                $("#ShiShiFuHe").text(SSvalue + "MW");
                $("#FuHeCount").text(SSvalue + "MW");
                getFuHeList(SSvalue);
            }
        },
        error:function (data) {
            console.log(data);
        }
    });

    function getFuHeList(SSvalue) {
        var date = gettime();
        var time = date.year.toString() + date.month.toString() + date.day.toString();
        $.ajax({
            //  http://10.131.216.134:7889/pdpsc-app/idpqry/SBID/HIS/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06/21/0/20180821/20180821
            //TASK_TYPE=2为异常处理，3为紧急
            url: basepath + "/idpqry/SBID/HIS/8a812897493378a00149567740676661/21/2/" + time + "/" + time,
            type: 'get',
            dataType: 'json',
            success: function (data) {
                if (data.data.length > 0) {
                    var valueList = data.data[0].VALUE[0].VALUE;
                    var maxValue = 0;
                    var finalValue;
                    var dataList = {};
                    var XData = [];//
                    var YData = [];//
                    for (var i = 0; i < valueList.length ; i++) {
                        var time = valueList[i].T;//前一个温度
                        var Val = (parseInt(valueList[i].V) / 1000000).toFixed(1);//前一个温度
                        Val - maxValue >= 0 ? maxValue = Val : maxValue;

                        XData.push(time);
                        YData.push(Val);
                    }
                    dataList.time = XData;
                    dataList.value = YData;
                    load_body(dataList);
                    maxValue - SSvalue >= 0 ? finalValue = maxValue : finalValue = SSvalue;
                    $("#ZuiGaoFuHe").text(finalValue + "MW");
                }else{
                    $("#ZuiGaoFuHe").text(SSvalue + "MW");
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    }

}

//获取预警状态、抢修状态、BD状态
function getYuJingZTBDData() {
    //interface/GDFW_YJZT/0
    //http://127.0.0.1:8080/pdpsc-app/interface/GDFW_YJZT/0?YWDW=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06&RQ=2018-07-31

    //硬编码
    var param = {"YWDW": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06", "RQ": KSSJ_2};
    $.ajax({
        url: basepath + "interface/GDFW_YJZT/0",
        data: param,
        type: 'get',
        dataType: 'json',
        success: function (data) {

            var yujing ;
            var qiangxiu;
            var bdzt;
            if  (data.data) {
                for(var i=0;i<data.data.length;i++) {
                    if (data.data[i].YJLX === "1"){
                        yujing = data.data[i].YJZTMS;
                        switch(data.data[i].YJZT){
                        	//状态: 0:正常，1：一级 2：二级 3：三级
							case '0'://0:正常 本来的颜色
							    break;
							case '1'://1：一级 红色
								$(".centerTop_list #span_YJStatus").css("color","#eb4e54");
//								$(".centerTop_list #span_YJStatus").prev("img").attr('src',basepath.substr(0,basepath.indexOf('pdpsc-app'))+'ws_static/img/top_043.png');
                                $(".centerTop_list #span_YJStatus").prev("img").attr('src',basepath+'ws_static/img/top_043.png');
							    break;
							case '2'://2：二级 橙色
							    $(".centerTop_list #span_YJStatus").css("color","#e68e43");
							    $(".centerTop_list #span_YJStatus").prev("img").attr('src',basepath+'ws_static/img/top_042.png');
							    break;
							case '3'://3：三级 黄色
								$(".centerTop_list #span_YJStatus").css("color","#fef156");
								$(".centerTop_list #span_YJStatus").prev("img").attr('src',basepath+'ws_static/img/top_041.png');
							    break;
						}
                    } else if (data.data[i].YJLX === "2") {
                        qiangxiu = data.data[i].YJZTMS;
                        switch(data.data[i].YJZT){
							//状态: 0:正常，1：一级 2：二级 3：三级
							case '0'://0:正常 本来的颜色
							    break;
							case '1'://1：一级 红色
								$(".centerTop_list #span_QXStatus").css("color","#eb4e54");
								$(".centerTop_list #span_QXStatus").prev("img").attr('src',basepath+'ws_static/img/top_0063.png');
							    break;
							case '2'://2：二级 橙色
							    $(".centerTop_list #span_QXStatus").css("color","#e68e43");
							    $(".centerTop_list #span_QXStatus").prev("img").attr('src',basepath+'ws_static/img/top_0062.png');
							    break;
							case '3'://3：三级 黄色
								$(".centerTop_list #span_QXStatus").css("color","#fef156");
								$(".centerTop_list #span_QXStatus").prev("img").attr('src',basepath+'ws_static/img/top_0061.png');
							    break;
						}
                    } else if (data.data[i].YJLX === "3") {
                        bdzt = data.data[i].YJZTMS;
                        switch(data.data[i].YJZT){
							//状态: 0:正常，1：一级 2：二级 3：三级
							case '0'://0:正常 本来的颜色
							    break;
							case '1'://1：一级 红色
								$(".centerTop_list #span_BDStatus").css("color","#eb4e54");
								$(".centerTop_list #span_BDStatus").prev("img").attr('src',basepath+'ws_static/img/top_033.png');
							    break;
							case '2'://2：二级 橙色
							    $(".centerTop_list #span_BDStatus").css("color","#e68e43");
							    $(".centerTop_list #span_BDStatus").prev("img").attr('src',basepath+'ws_static/img/top_032.png');
							    break;
							case '3'://3：三级 黄色
								$(".centerTop_list #span_BDStatus").css("color","#fef156");
								$(".centerTop_list #span_BDStatus").prev("img").attr('src',basepath+'ws_static/img/top_031.png');
							    break;
						}
                    }
                }
                $('#span_YJStatus').text(yujing);
                $('#span_QXStatus').text(qiangxiu);
                $('#span_BDStatus').text(bdzt);

            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}
