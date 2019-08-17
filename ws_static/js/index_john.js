/**
 * Created by john on 2018/9/8.
 */


$(document).ready(function () {
		
	setLvZhen(0);
	setZiZhen(0);
	setChengZhen(0);
	setHongZhen(0);
	getQxztData();
	getZHBDYC();//判断智慧保电异常状态
});	

//设置巡检任务
function setXunShiRenWu(value){
	$("#xunShiRenWu").html(value);
}
//设置异常处理
function setYiChangChuLi(value){
	$("#xunShiRenWu").html(value);
}
//设置紧急处理
function setJinJiChuLi(value){
	$("#xunShiRenWu").html(value);
}

//判断智慧保电异常状态
function getZHBDYC(){
	
	/*<input type="hidden" name="智慧保电一级用户异常数" id="YJYHYCS" value="0"/>
    <input type="hidden" name="智慧保电二级用户异常数" id="EJYHYCS" value="0"/>
    <input type="hidden" name="智慧保电示范区设备异常数" id="SFQSBYCS" value="0"/>*/
	/*var YJYHYCS=parseInt($("#YJYHYCS").value());
	var EJYHYCS=parseInt($("#EJYHYCS").value());
	var SFQSBYCS=parseInt($("#SFQSBYCS").value());
	*/
	if(YJYHYCS>0 || EJYHYCS>0 || SFQSBYCS>0){
		$("#zhihuibaodianStatus").html('异常');
		$("#zhihuibaodianStatusImg").addClass("yellow_alarm_color");
		
	}else{
		$("#zhihuibaodianStatus").html('正常');
		$("#zhihuibaodianStatusImg").removeClass("yellow_alarm_color");
	}
	
}

//获取抢修状态
function getQxztData(){
	    //http://10.131.216.134:7889/pdpsc-app/interface/GDFW_YJZT/0?YWDW=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06&RQ=2018-07-31
	var date=getCurrentDate();
	
    var param = {"YWDW": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06",RQ:date};
    $.ajax({
        url: basepath + "interface/GDFW_YJZT/0",
        data: param,
        type: 'get',
        dataType: 'json',
        success: function (res) {
            var num;
            if (res.data) {
            	var obj=res.data;
                for(var i=0;i<obj.length;i++){
                    if(obj.YJLX==1){
                    	$('#span_YJStatus').html(obj.YJZTMS);break;
                    }
                    if(obj.YJLX==2){
                    	$('#span_QXStatus').html(obj.YJZTMS);break;
                    }
                    if(obj.YJLX==3){
                    	$('#span_BDStatus').html(obj.YJZTMS)
                    }
                }
            }
        },
        error:function (data) {
            console.log(data);
        }
    });
}

//获取当天日期，格式YYYY-MM-DD
function getCurrentDate(){
	var date = new Date();
	var sperator="-";
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	if(month >=1 && month<=9){
		month="0"+month;
	}
	if(day>=1 && day<=9){
		day="0"+day;
	}
	var currentDate=year+sperator+month+sperator+day;
	return currentDate;
}

//定位地图
function forwardMap(id){
	document.getElementById("iframe1").contentWindow.bddxFyl(id);
}

function setLvZhen(lv_value){
		if(lv_value<0){
			lv_value=0;
		}
		if(lv_value>130){
			lv_value=130
		}							
		$("#greenZhen").html(lv_value);
	$("#lv").rotate({animateTo:lv_value+230});
	
	var mt=360-1.7*lv_value;
	var mt1=mt+"px";
	
	if(lv_value>40 && lv_value<129){
		var t=lv_value-40
		var ml=-50+t;
		var ml1=ml+"px";
	  	$(".control_legend1").css("margin-top",mt1)
	  	$(".control_legend1").css("margin-left",ml1)
	}else if(lv_value>=129 & lv_value<=130){
	  	$(".control_legend1").css("margin-top",mt1)
	  	$(".control_legend1").css("margin-left","70px")
	}
	else{
	 	var ml=-10-lv_value;
		var ml1=ml+"px";
	  	$(".control_legend1").css("margin-top",mt1)
	  	$(".control_legend1").css("margin-left",ml1)
	}
}							

function setZiZhen(value){
	var x,y;	
	var value1 = value;
	if(value<0){
		value=0;
	}
	if(value>130){
		value=130
	}
	if(value<=45){
		x=value;
	    y=150+0.6*value;
	}								
	if(value>45 && value<=60){
		y=150+value;
		x=1.4*value;
	}
	if(value>60 && value<90){
		y=150+1.2*value;
		x=1.4*value;
	}
	if(value==90){
		x=126
		y=280
	}
	if(value>90 && value<=100){
		x=126-(value-90);
		y=280+(value-90);
	}
	if(value>110 && value<=120){
		x=126-0.5*(value-90);
		y=280+1.2*(value-90);
	}
	if(value>120 && value<=130){
		x=126-0.5*(value-90);
		y=280+1.5*(value-90);
	}
	$(".control_legend2").css("margin-left",x);
	$(".control_legend2").css("margin-top",y);
	$("#zi").rotate({animateTo:value});
	$("#ziZhen").html(value1);
}


function setChengZhen(value){
	var x,y;
	if(value<0){
		value=0
	}
	if(value>260){
		value=260
	}
	var jiaodu=value-130;								
	if (jiaodu>=-130 && jiaodu<-120) {
		x=100;
		y=370;
	}else if(jiaodu>=-120 && jiaodu<-110){
		x=80;
		y=345;
	}else if(jiaodu>=-110 && jiaodu<-100){
		x=70;
		y=315;
	}else if(jiaodu>=-100 && jiaodu<-90){
		x=60;
		y=305;
	}else if(jiaodu>=-90 && jiaodu<-80){
		x=60;
		y=275;
	}else if(jiaodu>=-80 && jiaodu<-70){
		x=70;
		y=255;
	}else if(jiaodu>=-70 && jiaodu<-60){
		x=80;
		y=245;
	}else if(jiaodu>=-60 && jiaodu<-50){
		x=85;
		y=235;
	}else if(jiaodu>=-50 && jiaodu<-40){
		x=90;
		y=215;
	}else if(jiaodu>=-40 && jiaodu<-30){
		x=100;
		y=200;
	}else if(jiaodu>=-30 && jiaodu<-20){
		x=115;
		y=180;
	}
	else if(jiaodu>=-20 && jiaodu<-10){
		x=135;
		y=160;
	}else if(jiaodu>=-10 && jiaodu<=0){
		x=180;
		y=150;
	}else if(jiaodu>0 && jiaodu<=30){
		x=180+1.4*jiaodu;
		y=150+0.6*jiaodu;
	}else if(jiaodu>30 && jiaodu<=60){
		x=180+1.8*jiaodu;
		y=150+jiaodu;
	}else if(jiaodu>60 && jiaodu<=90){
		x=180+1.45*jiaodu;
		y=150+1.4*jiaodu;
	}else if(jiaodu>90 && jiaodu<=120){
		x=310-1*(jiaodu-90);
		y=150+1.7*jiaodu;
	}else if(jiaodu>120 && jiaodu<=130){
		x=310-1*(jiaodu-90);
		y=150+1.7*jiaodu;
	}

	$(".control_legend3").css("margin-left",x);
	$(".control_legend3").css("margin-top",y);
	$("#cheng").rotate({animateTo:jiaodu});
	$("#chengZheng").html(value);
}


function setHongZhen(value){
	var x,y;
	if(value<0){
		value=0
	}
	if(value>260){
		value=260
	}
	var jiaodu=value-130;								
	if (jiaodu>=-130 && jiaodu<=-100) {
		x=280-value;
		y=360-1.2*value;
	}else if(jiaodu>-100 && jiaodu<=-85){
		x=280-0.8*value;
		y=360-1.8*value;
	}else if(jiaodu>-85 && jiaodu<=-55){
		x=244+0.8*(value-40);
		y=279-1.8*(value-40);
	}else if(jiaodu>-55 && jiaodu<=-25){
		x=244+0.8*(value-40);
		y=279-1.8*(value-40);
	}else if(jiaodu>-25 && jiaodu<0){
		x=244+1.1*(value-40);
		y=279-1.5*(value-40);
	}else if(jiaodu==0){
		x=360;
		y=151;
	}
	else if(jiaodu>0 && jiaodu<=30){
		x=360+1.6*jiaodu;
		y=151+0.6*jiaodu;
	}
	else if(jiaodu>30 && jiaodu<=60){
		x=360+1.8*jiaodu;
		y=151+1*jiaodu;
	}else if(jiaodu>60 && jiaodu<=90){
		x=360+1.5*jiaodu;
		y=151+1.6*jiaodu;
	}
	else if(jiaodu>90 && jiaodu<=120){
		x=495-1.1*(jiaodu-90);
		y=295+1.6*(jiaodu-90);
	}
	else if(jiaodu>120 && jiaodu<=130){
		x=495-1.0*(jiaodu-90);
		y=295+1.5*(jiaodu-90);
	}

	$(".control_legend4").css("margin-left",x);
	$(".control_legend4").css("margin-top",y);
	$("#hong").rotate({animateTo:jiaodu});
	$("#hongZheng").html(value);
}
		
