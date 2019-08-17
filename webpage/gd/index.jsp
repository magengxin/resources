<%@ page language="java" contentType="text/html; charset= utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">

<head>
<meta http-equiv="Content-Type" content="text/html; charset= utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title></title>
<script>
//			var releaseFlag=true;//true表示已发布,false表示在测试状态
//			var WEB_ROOT = '${ctx}/';
//			
//			if(releaseFlag){
//				var basepath = WEB_ROOT;
//			}else{
//				var basepath = "/";
//			}
        var WEB_ROOT = '${ctx}/';
        var releaseFlag="anbao";
		</script>
<script src="${ctx}/gd_static/js/jquery-2.2.4.min.js" id="jq"></script>
<script src="${ctx}/gd_static/js/echarts.min.js" id="ec"></script>

<style>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
	width: 12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-track-piece {
	-webkit-box-shadow: inset 0 0 6px rgba(236, 229, 229, 0.5);
	border-radius: 10px;
}
/* 轨道 */
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background: rgba(13, 103, 128, 0.8);
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(0, 213, 255, 0.2);
}

html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt, dd {
	margin: 0;
	padding: 0;
	font-size: 16px;
}

ul, ol {
	list-style: none;
}

h1, h2, h3, h4, h5, h6 {
	font-weight: 400;
}

table {
	border: 0;
	border-collapse: collapse;
}

a {
	text-decoration: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	outline: 0;
}

i, em {
	font-style: normal;
}

img {
	border: 0;
	vertical-align: top;
}

html, body {
	width: 100%;
	height: auto;
}

.pie_box {
	position: relative;
}

.zs_text>ul>li {
	position: absolute;
	display: block;
	text-align: center;
}

.zs_text>ul>li:nth-child(1) {
	left: 8%;
	top: 21%;
}

.zs_text>ul>li:nth-child(2) {
	left: 31%;
	top: 21%;
}

.zs_text>ul>li:nth-child(3) {
	left: 57%;
	top: 21%;
}

.zs_text>ul>li:nth-child(4) {
	left: 80%;
	top: 21%;
}

body, input, select, s textarea, button {
	font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "PingFang SC",
		"Heiti SC", STHeiti, "Microsoft Yahei", "Source Han Sans SC",
		"Noto Sans CJK SC", "Droid Sans Fallback", sans-serif;
	outline: 0;
}

[type="text"], [type="password"], [type="tel"], [type="number"], [type="date"],
	textarea {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: 0;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
	font-size: 18px;
	color: #666;
}

.clearfix:after {
	display: block;
	content: "";
	visibility: none;
	height: 0;
	clear: both;
	overflow: hidden;
}

.clearfix {
	*zoom: 1;
}

html, body {
	width: 1920px;
}

.main {
	width: 1920px;
	height: 1080px;
	overflow: hidden;
	background-color: #001a2d;
}

h3 {
	color: #fff;
}

.main_left {
	height: 1080px;
	position: relative;
	background: url("${ctx}/gd_static/img/bg.png") no-repeat 100% 100%/100%
		100%;
}

.main_right {
	height: 1080px;
	padding-top: 64px;
	position: relative;
	background: url('${ctx}/gd_static/img/wangjia.1.png') no-repeat;
	/*3.修改背景图*/
}
/* 左屏 */
.main_left {
	width: 1916px;
	float: left;
}

.main_left .main_top {
	background: url(${ctx}/gd_static/img/logo.png) no-repeat 100% 100%/100%
		100%;
	width: 1916px;
	height: 1080px;
}
/* 全网 */
.main_left .main_qw {
	height: 918px;
	width: 1770px;
	margin: 120px 0 0 72px;
}

.main_qw .qw_box .box_l {
	width: 409px;
	height: 416px;
	float: left;
	background: url(${ctx}/gd_static/img/l_box.png) no-repeat 100% 100%/100%
		100%;
	margin-right: 24px;
}

.main_qw .qw_box .box_r {
	width: 1336px;
	height: 416px;
	background: url(${ctx}/gd_static/img/r_box.png) no-repeat 100% 100%/100%
		100%;
	float: left;
}

.box_h3 {
	display: inline-block;
	font-size: 45px;
	margin: 35px 0 0 20px;
	height: 45px;
	line-height: 45px;
	border-left: 5px solid #13bee6;
	padding-left: 10px;
}

.box_text {
	font-size: 45px;
	margin: 30px 0 0 102px;
}

.box_nav {
	padding-top: 10px;
}

.box_nav li {
	color: #fff;
	font-size: 36px;
	overflow: hidden;
	padding: 10px 40px 0;
	white-space: nowrap;
}

.box_nav li .nav_i {
	display: inline-block;
	float: left;
}

.box_nav li .nav_i::before {
	content: "";
	display: inline-block;
	margin-right: 10px;
	width: 40px;
	height: 40px;
	vertical-align: middle;
}

.box_nav li .nav_i1::before {
	background: url(${ctx}/gd_static/img/icon/gz.png) no-repeat 100% 100%/100%
		100%;
}

.box_nav li .nav_i2::before {
	background: url(${ctx}/gd_static/img/icon/cz.png) no-repeat 100% 100%/100%
		100%;
}

.box_nav li .nav_i3::before {
	background: url(${ctx}/gd_static/img/icon/ddy.png) no-repeat 100% 100%/100%
		100%;
}

.box_nav li .nav_i4::before {
	background: url(${ctx}/gd_static/img/icon/sx.png) no-repeat 100% 100%/100%
		100%;
}

.box_nav li .nav_in {
	display: inline-block;
	float: right;
	font-size: 40px;
	color: #13bee6;
}

.ec_box {
	width: 1348px;
	height: 320px;
}

.pie_box {
	overflow: hidden;
	height: 100%;
	margin: 0 0 0 124px;
}

.pie_box .ec_pie {
	width: 265px;
	height: 252px;
	float: left;
	margin-right: 20px;
	color: #13bee6;
	text-align: center;
}

.piiiie {
	width: 220px;
	height: 220px;
	margin: 0 auto;
}

.pie_text {
	font-size: 28px;
}

.pie_box .ec_pie:last-child {
	margin-right: 0;
}

.pie_bq {
	position: absolute;
	top: 22px;
	right: 40px;
}

.pie_bq .bq {
	float: left;
	margin-right: 20px;
	color: #abd6e3;
	font-size: 27px;
	line-height: 75px;
}

.pie_bq .bq::before {
	width: 18px;
	height: 18px;
	content: "";
	display: inline-block;
	margin-right: 10px;
}

.pie_bq .bq_1::before {
	background-color: #0060e6;
}

.pie_bq .bq_2::before {
	background-color: #1babe8;
	;
}

.pie_bq .bq_3::before {
	background-color: #f7d700;
}

.pie_bq .bq_4::before {
	background-color: #00da5b;
}

.green {
	color: #00da5b;
}

.yellow {
	color: #f7d700;
}
/* 保电 */
.main_left .main_bd {
	height: 968px;
	width: 1770px;
	margin-left: 20px;
}

.main_bd .qw_box {
	width: 1770px;
	height: 883px;
	overflow: hidden;
}

.main_bd .qw_box .box_l, .box_r {
	width: 870px;
	height: 883px;
	float: left;
	background: url(${ctx}/gd_static/img/ll_box.png) no-repeat 100% 100%/100%
		100%;
}

.main_bd .qw_box .box_l {
	margin-right: 24px;
}
/* 右屏 */
.main_right {
	padding: 0 66px 0 80px;
	width: 1770px;
	float: right;
}

.main_rtop {
	height: 96px;
	width: 100%;
	position: relative;
}

.main_ul {
	height: 96px;
	line-height: 96px;
	position: absolute;

	/*right: 0;*/
	/*overflow: hidden;*/
}

.main_ul li {
	float: left;
	margin-right: 16px;
}

.main_ul li h3 {
	font-size: 36px;
	display: inline-block;
	vertical-align: middle;
	color: #c3f4ff;
}

.main_ul li:last-child {
	margin-right: 0;
}

.main_ul li::before {
	content: "";
	vertical-align: middle;
	display: inline-block;
	margin-right: 10px;
}

.li_1::before {
	background: url(${ctx}/gd_static/img/icon/dun.png) no-repeat 100% 100%/100%
		100%;
	width: 37px;
	height: 45px;
}

.li_2::before {
	background: url(${ctx}/gd_static/img/icon/q.png) no-repeat 100% 100%/100%
		100%;
	width: 41px;
	height: 40px;
}

.li_3::before {
	background: url(${ctx}/gd_static/img/icon/w.png) no-repeat 100% 100%/100%
		100%;
	width: 41px;
	height: 42px;
}

.li_4::before {
	background: url(${ctx}/gd_static/img/icon/sh.png) no-repeat 100% 100%/100%
		100%;
	width: 42px;
	height: 42px;
}

/*.li_5::before {
				background: url(${ctx}/gd_static/img/icon/t.png) no-repeat 100% 100% / 100% 100%;
				width: 57px;
				height: 45px;
			}*/
/*点选保电*/
.main_ul .baodian {
	position: relative;
	cursor: pointer;
}

.main_ul .selected_box {
	position: absolute;
	left: 0;
	top: 90px;
	display: none;
	z-index: 10;
	width: 100%;
	height: 200px;
}

.main_ul .selected_box li {
	font-size: 32px;
	line-height: 48px;
	width: 85px;
	color: #000;
	background: #c3f4ff;
}
/*点选抢修状态*/
.main_ul .qiangxiu {
	position: relative;
	cursor: pointer;
}

.main_ul .selected_qx {
	position: absolute;
	left: 0;
	top: 90px;
	display: none;
	z-index: 10;
	width: 100%;
	height: 200px;
}

.main_ul .selected_qx li {
	font-size: 32px;
	line-height: 48px;
	width: 85px;
	color: #000;
	background: #c3f4ff;
}

#weather {
	float: left;
	width: 57px;
	height: 45px;
	margin-top: 30px;
}

.li_5 h3::before {
	content: "";
	vertical-align: middle;
	display: inline-block;
	background: url(${ctx}/gd_static/img/icon/wendu.png) no-repeat 100% 100%/100%
		100%;
	width: 16px;
	height: 36px;
	margin-right: 6px;
}
/*标题样式*/
.main_title {
	line-height: 60px;
	width: 100%;
	height: 60px;
	margin-top: 30px;
	/*background:url('${ctx}/gd_static/img/baoti.png') no-repeat 100% 100% / 100% 100%;*/
	background: url('${ctx}/gd_static/img/biaoti.png') no-repeat;
}

.main_title h3 {
	font-size: 50px;
	color: #fff;
	display: inline-block;
	line-height: 60px;
}

.downTime {
	font-size: 36px;
	color: #fff;
	display: inline-block;
	text-align: right;
	float: right;
	line-height: 60px;
}

.downTime span {
	font-size: 52px;
	color: #f9e509;
	display: inline-block;
	line-height: 60px;
	vertical-align: bottom;
}

.main_map {
	width: 100%;
	height: 100%;
	position: relative;
}

.maplink {
	display: block;
	position: absolute;
	color: #ffffff;
	font-weight: bold;
	font-size: 40px;
	cursor: pointer;
	padding-left: 3%;
}

.maplink:nth-child(1) {
	left: 38.4%;
	top: 41.5%;
}

.maplink:nth-child(2) {
	left: 54%;
	top: 36%;
}

.maplink:nth-child(3) {
	left: 38.4%;
	top: 48.3%;
}

.maplink:nth-child(4) {
	left: 22%;
	top: 61.7%;
}

.maplink_color {
	color: #fff100;
}
/* 业务 */
.main_right .main_yw {
	height: 1030px;
	width: 1770px;
}

.main_yw .yw_title {
	background: url(${ctx}/gd_static/img/yw.png) no-repeat 100% 100%/100%
		100%;
	width: 1764px;
	height: 64px;
	margin-bottom: 20px;
}

.main_yw .yw_box .box_l, .box_r {
	width: 870px;
	height: 883px;
	float: left;
	background: url(${ctx}/gd_static/img/ll_box.png) no-repeat 100% 100%/100%
		100%;
}

.main_yw .yw_box .box_l {
	margin-right: 24px;
}
/* 资源 */
.main_zy .yw_title {
	background: url(${ctx}/gd_static/img/zy.png) no-repeat 100% 100%/100%
		100%;
	width: 1764px;
	height: 64px;
	margin-bottom: 20px;
}

.main_zy .yw_box .box_l, .box_r {
	width: 870px;
	height: 883px;
	float: left;
	background: url(${ctx}/gd_static/img/ll_box.png) no-repeat 100% 100%/100%
		100%;
}

.main_zy .yw_box .box_l {
	margin-right: 24px;
}
/* 弹窗 */
.main_tan {
	width: 3820px;
	height: 1117px;
	background: url(${ctx}/gd_static/img/tan_bg.png) no-repeat;
	position: absolute;
	left: 1942px;
	bottom: 20px;
}

.main_tan .pop_top {
	width: 100%;
	height: 70px;
	background: url(${ctx}/gd_static/img/lb.png) no-repeat;
}

.pop_top .pop_close {
	width: 34px;
	height: 34px;
	position: absolute;
	right: 70px;
	top: 20px;
	cursor: pointer;
}

.nav_box {
	width: 100%;
	height: 100%;
	padding: 50px 150px 0;
}

.nav_box .pop_nav {
	width: 24%;
	height: 958px;
	overflow: hidden;
	float: left;
}

.pop_nav li {
	height: 96px;
	line-height: 96px;
	font-size: 36px;
	color: #c3f4ff;
}
</style>

</head>

<body>
	<div class="main">
		<!-- 左屏 -->
		<div class="main_left">
			<div class="main_nav">
				<!--<div class="main_top"></div>-->
				<div class='top' style="position: absolute;left:20px;top:26px;background: url(${ctx}/gd_static/img/top_logo.png) no-repeat;width: 100%;height: 120px;">
					<div id='btn' style="width: 300px; height: 120px; position: absolute; left: 0; top: 0;"></div>
				</div>
				<div class="main_qw">
					<div class="qw_title">
						<div class="main_rtop">
							<ul class="main_ul">
								<li class="li_1" style="margin-right: 0;">
									<h3>保电状态:</h3>
								</li>
								<li>
									<h3 class='baodian'>
										<span>一级</span>
										<ul class='selected_box'>
											<li>特级</li>
											<li>一级</li>
											<li>二级</li>
											<li>正常</li>
										</ul>
									</h3>
								</li>
								<li class="li_2" style="margin-right: 0;">
									<h3>抢修状态:</h3>
								</li>
								<li>
									<h3 class='qiangxiu'>
										<span>一级</span>
										<ul class='selected_qx'>
											<li>一级</li>
											<li>二级</li>
											<li>三级</li>
											<li>正常</li>
										</ul>
									</h3>
								</li>
								<li class="li_3">
									<h3 id="span_YJStatus">电网状态：正常</h3>
								</li>
								<li class="li_4" style="margin-right: 60px; margin-left: 45px;">
									<h3 style="font-family: '微软雅黑'; font-size: 36px;" class="shijian">2018.9.28</h3>
								</li>
								<li class="li_5"><img id="weather" src="${ctx}/gd_static/img/icon/t.png" alt="" />
									<h3 id="wendu" style='font-size: 36px;'>21℃</h3></li>
							</ul>
						</div>




					</div>
					<div class="qw_box">
						<div class="box_l">
							<h3 class="box_h3">实时负荷</h3>
							<div id="ShiShiFuHe" class="box_text" style="color: #00fc6e;">--MW</div>
							<h3 class="box_h3">最高负荷</h3>
							<div id="ZuiGaoFuHe" class="box_text" style="color: #ff0000;">--MW</div>
						</div>
						<div class="box_r">
							<h3 class="box_h3">电网负荷</h3>
							<!--<div class="ec_box" id="chart1">-->
							<div class="ec_box" id="load_body"></div>
						</div>
					</div>
					<div class="qw_box" style="margin-top: 15px;">
						<div class="box_l">
							<h3 class="box_h3">配网运行</h3>
							<ul class="box_nav">
								<li><i class="nav_i nav_i1">过载</i> <span id="tqjcguozai" class="nav_in">0</span></li>
								<li><i class="nav_i nav_i2">重载</i> <span id="tqjczhongzai" class="nav_in">0</span></li>
								<li><i class="nav_i nav_i3">低电压</i> <span id="tqjcdidianya" class="nav_in">0</span></li>
								<li><i class="nav_i nav_i4">三相不平衡</i> <span id="tqjcsxbph" class="nav_in">0</span></li>
							</ul>
						</div>
						<div class="box_r" style="position: relative;">
							<h3 class="box_h3">供电服务</h3>
							<ul class="pie_box">
								<li class="ec_pie">
									<div class="zs_text">
										<ul>
											<li style='font-size: 22px; text-align: center; margin-left: -10px'>电网故障</br>
											<span id="tousu" style="font-size: 26px">0</span></li>
											<li style='font-size: 22px; text-align: center; margin-left: 7px; margin-top: -11px'>抢修单</br>电力</br>
											<span id="dianliguzhang" style="font-size: 26px">0</span></li>
											<li style='font-size: 22px; text-align: center; margin-left: -22px; margin-top: -11px'>抢修单</br>非电力</br>
											<span id="fdianliguzhang" style="font-size: 26px">0</span></li>

											<li style='font-size: 22px; text-align: center; margin-left: -30px'>投诉/举报</br>
											<span id="jubao" style="font-size: 26px">0</span></li>
										</ul>
									</div>

									<div id="chart2" class="piiiie"></div>

									<div class="pie_text">
										<em class="yellow"><span id="zswcl">0</span></em>/<em class="green"><span id="zsycl">0</span></em>
									</div> <!--<div class="pie_text">95598:
											<em class="green"><span id="dlgz95598ycl">35</span></em>/<em class="yellow"><span id="dlgz95598wcl">22</span></em>
										</div>-->
								</li>
								<li class="ec_pie">
									<div id="chart3" class="piiiie"></div>
									<div class="pie_text">
										95598: <em class="yellow"><span id="dlgz95598wcl">0</span></em>/<em class="green"><span id="dlgz95598ycl">0</span></em>
									</div>
									<div class="pie_text">
										12345: <em class="yellow"><span id="dlgz12345wcl">0</span></em>/<em class="green"><span id="dlgz12345ycl">0</span></em>
									</div>

								</li>
								<li class="ec_pie">
									<div id="chart4" class="piiiie"></div>
									<div class="pie_text">
										95598: <em class="yellow"><span id="fdlgz95598wcl">0</span></em>/<em class="green"><span id="fdlgz95598ycl">0</span></em>
									</div>
									<div class="pie_text">
										12345: <em class="yellow"><span id="fdlgz12345wcl">0</span></em>/<em class="green"><span id="fdlgz12345ycl">0</span></em>
									</div>

								</li>
								<li class="ec_pie">
									<div id="chart5" class="piiiie"></div>
									<div class="pie_text">
										95598: <em class="yellow"><span id="jubao95598wcl">0</span></em>/<em class="green"><span id="jubao95598ycl">0</span></em>
									</div>
									<div class="pie_text">
										12345: <em class="yellow"><span id="jubao12345wcl">0</span></em>/<em class="green"><span id="jubao12345ycl">0</span></em>
									</div>

								</li>
							</ul>
							<ul class="pie_bq">
								<li class="bq bq_1">95598</li>
								<li class="bq bq_2">12345</li>
								<li class="bq bq_3">正在处理</li>
								<li class="bq bq_4" style="margin-right: 0;">已处理</li>
							</ul>
						</div>
					</div>
				</div>
			</div>



		</div>

		<!--右侧地图位置引入-->
		<!--<div class="main_right" style="width: 1920px;height: 1080px;">
				<iframe id="iframe1" src="" style="width: 100%;height: 100%; border: none;"></iframe>
			</div>-->
	</div>

	<script src="${ctx}/gd_static/js/ab_chart.js"></script>
</body>

<script>
		$(function() {
			//3d切换保电对象
			var flag = true;
			$('.baodian').dblclick(function(){
				if(flag){
					$(this).find('.selected_box').show();
					flag = false;
				}else{
					$(this).find('.selected_box').hide();
					flag = true;
				}
				
			})
			$('.baodian').find('.selected_box li').on('click',function(){
					$('.main_ul .selected_box').hide();
					var txt = $(this).text();
					$('.baodian span').text(txt);
					
			});
			//3d切换抢修状态
			var flag_qx = true;
			$('.qiangxiu').dblclick(function(){
				if(flag_qx){
					$(this).find('.selected_qx').show();
					flag_qx = false;
				}else{
					$(this).find('.selected_qx').hide();
					flag_qx = true;
				}
				
			})
			$('.qiangxiu').find('.selected_qx li').on('click',function(){
					$('.main_ul .selected_qx').hide();
					var txt = $(this).text();
					$('.qiangxiu span').text(txt);
					
			});
			$(".maplink").click(function() {
				$(this).siblings().removeClass("maplink_color");
				$(this).addClass("maplink_color");
			});
			function shijianf() {
				var shijiandata = new Date();
				//2.修改时间连接符
				var Y = shijiandata.getFullYear();
				var M = shijiandata.getMonth() + 1;
				var D = shijiandata.getDate();
				var H = shijiandata.getHours();
				if(H<10) H='0'+H
				var F = shijiandata.getMinutes();
				if(F<10) F='0'+F
				var S = shijiandata.getSeconds();
				if(S<10) S='0'+ S
				var curDay = Y + '-' + M + '-' + D + '   ' + H + ':' + F + ':' + S;
				var mytime = curDay.toLocaleString('chinese', {
					hour12: false
				});
				$(".shijian").html(mytime);
			}
			setInterval(shijianf, 1000);
			
			//点击弹出地图
			$('#btn').click('on',function(){
				window.open('${ctx}/main/smallMap','_blank');
			});
		})
		
		
		var basepath=WEB_ROOT;
$(function() {
	 getWenDuData();
	 shishijianceBiao1(0, 0);
	 shishijianceBiao2(0, 0);
	 shishijianceBiao3(0, 0);
     shishijianceBiao4(0, 0);
	// getYuJingZTBDData();
	// setInterval(getWenDuData,1000*60*30);

	initLeft();
	setInterval(initLeft, 1000 * 60 * 5);
})


function initLeft() {
	getFuHeData();
	getTaiQuJianCeData('FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03', 'GZ');
	getTaiQuJianCeData('FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03', 'ZZ');
	getTaiQuJianCeData('FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03', 'DDY');
	getTaiQuJianCeData('FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03', 'SXBPH');
	getYuJingZTBDData(); //预警状态
	bindGongDianFuwuData('FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03');
//	bindJinjisuqiuData();
	bindJinjisuqiuDataWeiChuLi();
	bindJinjisuqiuDataYiChuLi();
	get_tztj_ssjc_total();
}

function getWenDuData() {
	$.ajax({
		//GETTQXX?SSGS=-1&KSSJ=2018-01-01&JSSJ=2018-09-01
		//TASK_TYPE=2为异常处理，3为紧急
		url: basepath + "interface/GETTQXX/0",
		type: 'get',
		dataType: 'json',
		success: function(data) {
			if (data.data && data.data.length > 0) {

				//        	$('#abnormal_deal_num').text(abnormal_deal_num);
				$('#wendu').text(data.data[0].TEMPERATURE);
				var hour = new Date().getHours();
				if (hour > 5 || hour < 18) {//这里的3d文件夹下的与jbhm文件夹下用的basepath用的应该是同一个才对，这里的basepath暂时写死为http://127.0.0.1:8080/pdpsc-app/
					$('#weather').attr("src",basepath +'ws_static/img/weather/day/'+data.data[0].DAY_PICTURE_URL);
				} else {
					$('#weather').attr("src",basepath +'ws_static/img/weather/night/icon_power.png'+data.data[0].NIGHT_PICTURE_URL);
				}
				$("#wendu").attr("title", data.data[0].WEATHER);

			}
		},
		error: function(data) {
			console.log(data);
		}
	});
}

function getFuHeData() {
	if (releaseFlag) {
		url = basepath + "idpqry/SBID/CUR/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03/21/0";//端子号:上海电力传2，其余传0
	} else {
		url = "json/0.json";
	}
	$.ajax({
		//http://10.131.216.134:7889/pdpsc-app/idpqry/SBID/CUR/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03/21/2
		//TASK_TYPE=2为异常处理，3为紧急
		// url: basepath + "idpqry/SBID/CUR/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03/21/2",
		url: url,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			if (data.data.length > 0) {
				var value = parseInt(data.data[0].VALUE) / 1000000;
				var SSvalue = value.toFixed(1);
				$("#ShiShiFuHe").text(SSvalue + "MW");
				$("#FuHeCount").text(SSvalue + "MW");
				getFuHeList(SSvalue);
			}
		},
		error: function(data) {
			console.log(data);
		}
	});

	function getFuHeList(SSvalue) {
		var date = gettime();
		var time = date.year.toString() + date.month.toString() + date.day.toString();
		if(releaseFlag){
			url= basepath + "idpqry/SBID/HIS/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03/21/0/" + time + "/" + time;//端子号:上海电力传2，其余传0
		}else{
			url="json/1.json";
		}
		$.ajax({
			//  http://10.131.216.134:7889/pdpsc-app/idpqry/SBID/HIS/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03/21/2/20181005/20181005
			//TASK_TYPE=2为异常处理，3为紧急
			// url: basepath + "/idpqry/SBID/HIS/FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03/21/2/" + time + "/" + time,
			url: url,
			type: 'get',
			dataType: 'json',
			success: function(data) {
				if (data.data.length > 0) {
					var valueList = data.data[0].VALUE[0].VALUE;
					var maxValue = 0;
					var finalValue;
					var dataList = {};
					var XData = []; //
					var YData = []; //
					for (var i = 0; i < valueList.length; i++) {
						var time = valueList[i].T; //前一个温度
						var Val = (parseInt(valueList[i].V) / 1000000).toFixed(1); //前一个温度

						Val - maxValue >= 0 ? maxValue = Val : maxValue;

						XData.push(time);
						YData.push(Val);
					}
					dataList.time = XData;
					dataList.value = YData;
					load_body(dataList);//向负荷曲线中赋值
					maxValue - SSvalue >= 0 ? finalValue = maxValue : finalValue = SSvalue;
					$("#ZuiGaoFuHe").text(finalValue + "MW");
				} else {
					$("#ZuiGaoFuHe").text(SSvalue + "MW");
				}
			},
			error: function(data) {
				console.log(data);
			}
		});
	}

}

function load_body(data) {

	if (!data) {
		data = {
			time: ['0', '', '', '', '12', '', '', '', '24'],
			value: [180, 400, 89, 540, 260, 830, 710, 830, 710]
		}
	}
	var time = data.time;
	var value = data.value;
	var load_body = echarts.init(document.getElementById('load_body'));
	var color = ['#0587f2', '#00fe01', '#f39800', '#01dcd7'];
	var bgColor = ['rgba(5, 135, 242, 0.3)', 'rgba(0, 254, 1, 0.4)', 'rgba(243, 152, 0, 0.4)', 'rgba(1, 220, 215, 0.4)'];


	option = {
		xAxis: {
			type: 'category',
			// data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			data: time,
			axisLabel: {
				color: '#00ffff', //刻度线标签颜色
				fontSize: 24
			},
			splitLine: {
				show: true
			},
			axisLine:{
				lineStyle:{
					color:"#00ffff"
				}
			}
		},
		yAxis: {
			type: 'value',
			min: 0,
			max: 3000,
			interval:1000,
			axisLabel: {
				color: '#00ffff', //刻度线标签颜色
				fontSize: 24,
				formatter:'{value}MW'
			},
			boundaryGap: false,
			splitLine: {
				show: false
			},
			axisLine:{
				lineStyle:{
					color:"#00ffff"
				}
			}
		},
		series: {
			// data: [1000, 1800, 1500, 1300, 1200, 1500, 2000, 1800, 1500, 1300, 1200, 2000, 2200],
			data: value,
			type: 'line',
			symbol: 'none', //这句就是去掉点的
			smooth: true, //这句就是让曲线变平滑的
			itemStyle: {
				normal: {
					lineStyle: {
						width: 6, //折线宽度
						color: '#00f8f9'
						// (0,0,0,1,[
						//     { offset: 0, color: '#072c43' },
						//     { offset: 1, color: '#00f8f9' }
						// ])
					}
				}
			}
		}
	};

	load_body.setOption(option);
}

//获取时间的函数
function gettime() {

	var dateObj = {};
	var date = new Date();
	var year = date.getFullYear();
	var monthStr = date.getMonth() + 1;
	var dayStr = date.getDate();
	var hourStr = date.getHours();
	var minutesStr = date.getMinutes();
	var month = monthStr >= 10 ? monthStr : "0" + monthStr;
	var day = dayStr >= 10 ? dayStr : "0" + dayStr;
	var hour = hourStr >= 10 ? hourStr : "0" + hourStr;
	var minutes = minutesStr > 10 ? minutesStr : "0" + minutesStr;

	dateObj.year = year;
	dateObj.month = month;
	dateObj.day = day;
	dateObj.hour = hour;
	dateObj.minutes = minutes;

	return dateObj;
}


var KSSJ_NOW_YYYYMMDD = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000)); //昨天
var JSSJ_NOW_YYYYMMDD = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000)); //昨天
//var KSSJ_NOW = dateFtt("yyyy-MM-dd", new Date(new Date() - 24 * 60 * 60 * 1000)) + " 00:00:00"; //当天
var KSSJ_NOW = dateFtt("yyyy-MM-dd", new Date()) + " 00:00:00";//当天
var JSSJ_NOW = dateFtt("yyyy-MM-dd", new Date()) + " 23:59:59"; //当天

function dateFtt(fmt, date) {
	var o = {
		'M+': date.getMonth() + 1, //月份
		'd+': date.getDate(), //日
		'h+': date.getHours(), //小时
		'm+': date.getMinutes(), //分
		's+': date.getSeconds(), //秒
		'q+': Math.floor((date.getMonth() + 3) / 3), //季度
		S: date.getMilliseconds(), //毫秒
	};

	var fmtN = fmt;
	if (/(y+)/.test(fmtN)) {
		fmtN = fmtN.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
	}
	Object.keys(o).forEach(function(k) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmtN = fmtN.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k].toString()) : (("00" + o[k]).substr(o[k].toString()
				.length)));
		}
	});
	return fmtN;
}

/**
 * 全网运行监控统计-配网运行-台区监测
 */
function getTaiQuJianCeData(companyId, yclx) {
	// var sfhxq = companyId === "JBH-HXQ" ? "1" : "0";
	
	var dataParam = {
		"SSGS": companyId,
		"KSSJ": KSSJ_NOW_YYYYMMDD,
		"JSSJ": JSSJ_NOW_YYYYMMDD,
		"YCLX": yclx
	};
	if(releaseFlag){
		url= basepath + "interface/BDZT_GETDYYCMX/0";
	}else{
		url= "json/2.json";
	}
	
	$.ajax({
		// url: basepath + "interface/BDZT_GETDYYCMX/0",
		url: url,
		data: dataParam,
		type: 'get',
		dataType: 'json',
		async: false,
		success: function(result) {

			if (result.data) {
				var gznum = 0; //过载总数
				for (var i = 0; i < result.data.length; i++) {

					//过载
					if (yclx === 'GZ') {
						//gznum +=parseInt(result.data[i].DYLJGZ);
						if (parseInt(result.data[i].LXGZ) > 0) {
							gznum += 1;
						}
					}

					//重载
					if (yclx === 'ZZ') {
						if (parseInt(result.data[i].LXZZ) > 0) {
							gznum += 1;
						}
					}

					//低电压
					if (yclx === 'DDY') {
						if (parseInt(result.data[i].LXDDY) > 0) {
							gznum += 1;
						}
					}

					//三相不平衡
					if (yclx === 'SXBPH') {
						if (parseInt(result.data[i].LXSXBPH) > 0) {
							gznum += 1;
						}
					}
				}
			}

			if (yclx === 'GZ') {
				$("#tqjcguozai").text(gznum);
			}

			if (yclx === 'ZZ') {
				$("#tqjczhongzai").text(gznum);
			}

			if (yclx === 'DDY') {
				$("#tqjcdidianya").text(gznum);
			}

			if (yclx === 'SXBPH') {
				$("#tqjcsxbph").text(gznum);
			}
		},
		error: function(data) {
			console.log(data);
		}
	});
}

/**
 * 处理用户报修饼图图表
 */
function bindGongDianFuwuData(SSGS) {
	//总体抢修情况（按来源）
	//处理电力故障、非电力故障数据绑定
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;
		// var val12345 = 0;
		// var val95598 = 0;

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

		var valTotoal = 0;

		for (var i = 0; i < data.length; i++) {
			if (data[i].LY == '04') { //95598
				// val95598 += Number(data[i].ZS); //得到95598的用户报修
				if (data[i].GZFL == '电力故障') { //电力故障
					valDLGZ95598 += Number(data[i].ZS);
					valDLGZYiChuli95598 += Number(data[i].YCLS);
					valDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}
				if (data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ95598 += Number(data[i].ZS);
					valFDLGZYiChuli95598 += Number(data[i].YCLS);
					valFDLGZWeiChuli95598 += Number(data[i].ZCLS);
				}

			}
			if (data[i].LY == '09') { //12345
				// val12345 += Number(data[i].ZS);
				if (data[i].GZFL == '电力故障') { //电力故障
					valDLGZ12345 += Number(data[i].ZS);
					valDLGZYiChuli12345 += Number(data[i].YCLS);
					valDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
				if (data[i].GZFL == '非电力故障') { //非电力故障
					valFDLGZ12345 += Number(data[i].ZS);
					valFDLGZYiChuli12345 += Number(data[i].YCLS);
					valFDLGZWeiChuli12345 += Number(data[i].ZCLS);
				}
			}

		}
		// valTotoal = val12345 + val95598;
		// shishijiance1(valTotoal, val12345, val95598); //给用户报修总数赋值
		// shishijianceBiao1(valDLGZWeiChuli95598, valDLGZYiChuli95598);

		$('#dianliguzhang').text(valDLGZ12345 + valDLGZ95598);
		$('#dlgz12345ycl').text(valDLGZYiChuli12345);
		$('#dlgz12345wcl').text(valDLGZWeiChuli12345);
		$('#dlgz95598ycl').text(valDLGZYiChuli95598);
		$('#dlgz95598wcl').text(valDLGZWeiChuli95598);


		$('#fdianliguzhang').text(valFDLGZ12345 + valFDLGZ95598);
		$('#fdlgz12345ycl').text(valFDLGZYiChuli12345);
		$('#fdlgz12345wcl').text(valFDLGZWeiChuli12345);
		$('#fdlgz95598ycl').text(valFDLGZYiChuli95598);
		$('#fdlgz95598wcl').text(valFDLGZWeiChuli95598);
		

         
         
         shishijianceBiao1(valDLGZ12345+valFDLGZ12345, valDLGZ95598+valFDLGZ95598);
		 shishijianceBiao2(valDLGZ12345, valDLGZ95598);
		 shishijianceBiao3(valFDLGZ12345, valFDLGZ95598);
		// $('#val12345').text(val12345); //给12345赋值
		// $('#val95598').text(val95598); //给95598赋值

	}

	BDZT_GETZTQX_LY_1(dealData, SSGS);
}

/**
 * 实时监测右边第一个图表
 */
function shishijianceBiao1(val1, val2) {
	var zhanWeiFu=0;
	if(val1===0 && val2===0  ){
		zhanWeiFu=1;
	}
	option1 = {

		color: ['#f7d700', '#00da5b','rgba(188,188,188,0.1)'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: val1,
					name: '正在处理'
				},
				{
					value: val2,
					name: '已处理'
				},
				{
					value: zhanWeiFu,
					name: '占位符'
				}
			]
		}]
	};

	var chart2 = echarts.init(document.getElementById('chart2'));
	chart2.setOption(option1);
}

function shishijianceBiao2(val1, val2) {
	var zhanWeiFu=0;
	if(val1===0 && val2===0  ){
		zhanWeiFu=1;
	}
	option2 = {
		color: ['#1babe8', '#0060e6','rgba(188,188,188,0.1)'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: val1,
					name: '12345'
				},
				{
					value: val2,
					name: '95598'
				},
				{
					value: zhanWeiFu,
					name: '占位符'
				}
			]
		}]
	};

	var chart3 = echarts.init(document.getElementById('chart3'));
	chart3.setOption(option2);
}

function shishijianceBiao3(val1, val2) {
	var zhanWeiFu=0;
	if(val1===0 && val2===0  ){
		zhanWeiFu=1;
	}
	option3 = {
		color: ['#1babe8', '#0060e6','rgba(188,188,188,0.1)'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: val1,
					name: '12345'
				},
				{
					value: val2,
					name: '95598'
				},
				{
					value: zhanWeiFu,
					name: '占位符'
				}
			]
		}]
	};

	var chart4 = echarts.init(document.getElementById('chart4'));
	chart4.setOption(option3);
}

function shishijianceBiao4(val1, val2) {
	var zhanWeiFu=0;
	if(val1===0 && val2===0  ){
		zhanWeiFu=1;
	}
	option4 = {
		color: ['#1babe8', '#0060e6','rgba(188,188,188,0.1)'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: val1,
					name: '12345'
				},
				{
					value: val2,
					name: '95598'
				},
				{
					value: zhanWeiFu,
					name: '占位符'
				}
			]
		}]
	};

	var chart5 = echarts.init(document.getElementById('chart5'));
	chart5.setOption(option4);
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

	//http://10.131.216.134:7889/pdpsc-app/interface/BDZT_GETZTQX_LY_1/0?SSGS=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03&KSSJ=2018-09-09%2000:00:00&JSSJ=2018-09-09%2023:59:59
	if(releaseFlag){
		url= basepath + "interface/BDZT_GETZTQX_LY_1/0";
	}else{
		url= "json/3.json";
	}
	// var url = basepath + "interface/BDZT_GETZTQX_LY_1/0";
	var url = url;
	callgetajax(dealData, url, param);
}

/**
 * 绑定紧急投诉饼状图表数据(总数)
 */
function bindJinjisuqiuData() {
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;

		var jubao = suqiu = 0; //举报、投诉工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for (var i = 0; i < data.length; i++) {

			if (data[i].FL == '举报') {
				jubao++;
				if (data[i].LY == '12345') {
					jubao12345++;
				}
				if (data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if (data[i].FL == '投诉') {
				suqiu++;
				if (data[i].LY == '12345') {
					suqiu12345++;
				}
				if (data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到举报和投诉工单的数量

		suQiuBingTu(suqiu, suqiu12345, suqiu95598);
		juBaoBingTu(jubao, jubao12345, jubao95598);
		$("#tousu").text(suqiu);
		$("#jubao").text(jubao);
	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS, 0);
}


/**
 * 绑定紧急投诉饼状图表数据(已处理)
 */
function bindJinjisuqiuDataYiChuLi() {
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;

		// var jubao = suqiu = 0; //举报、投诉工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for (var i = 0; i < data.length; i++) {
			if (data[i].FL == '举报') {
				// jubao++;
				if (data[i].LY == '12345') {
					jubao12345++;
				}
				if (data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if (data[i].FL == '投诉') {
				// suqiu++;
				if (data[i].LY == '12345') {
					suqiu12345++;
				}
				if (data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到已处理举报和投诉工单的数量


		$("#tousu12345ycl").text(suqiu12345);
		$("#tousu95598ycl").text(suqiu95598);

		$("#jubao12345ycl").text(jubao12345);
		$("#jubao95598ycl").text(jubao95598);
	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS, 2);
}


/**
 * 绑定紧急投诉饼状图表数据(未处理)
 */
function bindJinjisuqiuDataWeiChuLi() {
	function dealData(res) {
		if (!res.data) {
			res.data = [];
		}
		var data = res.data;

		// var jubao = suqiu = 0; //举报、投诉工单数量
		var jubao12345 = jubao95598 = suqiu95598 = suqiu12345 = 0
		for (var i = 0; i < data.length; i++) {
			if (data[i].FL == '举报') {
				// jubao++;
				if (data[i].LY == '12345') {
					jubao12345++;
				}
				if (data[i].LY == '95598') {
					jubao95598++;
				}
			}
			if (data[i].FL == '投诉') {
				// suqiu++;
				if (data[i].LY == '12345') {
					suqiu12345++;
				}
				if (data[i].LY == '95598') {
					suqiu95598++;
				}
			}
		} //得到已处理举报和投诉工单的数量


		$("#tousu12345wcl").text(suqiu12345);
		$("#tousu95598wcl").text(suqiu95598);

		$("#jubao12345wcl").text(jubao12345);
		$("#jubao95598wcl").text(jubao95598);
	}
	var SSGS = -1;
	BDZT_GETSQGDMX(dealData, SSGS, 1);
}


function juBaoBingTu(jubao, jubao12345, jubao95598) {
	option4 = {
		color: ['#1babe8', '#0060e6'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: jubao12345,
					name: '12345'
				},
				{
					value: jubao95598,
					name: '95598'
				},
			]
		}]
	};

	var chart5 = echarts.init(document.getElementById('chart5'));
	chart5.setOption(option4);
}

function suQiuBingTu(var1, var2, var3) {

	option3 = {
		color: ['#1babe8', '#0060e6'],
		tooltip: {
			trigger: 'item',
			show: false,
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: var2,
					name: '12345'
				},
				{
					value: var3,
					name: '95598'
				}
			]
		}]
	};

	var chart4 = echarts.init(document.getElementById('chart4'));
	chart4.setOption(option3);
}

/**
 * 获取紧急投诉工单接口
 * @param {Object} dealData
 * @param {Object} SSGS
 */
function BDZT_GETSQGDMX(dealData, SSGS, SFCL) {
	// var SFCL = 0 //	是否已处理 0全部 1正在处理数 2已处理数  需要等明天和yaoqimin确认后才能添加
	var param = {
		"SSGS": SSGS,
		"KSSJ": KSSJ_NOW,
		"JSSJ": JSSJ_NOW,
		"SFCL": SFCL,
	};
	if(releaseFlag){
		url = basepath + "interface/BDZT_GETSQGDMX/0";
	}else{
		url = "json/4.json";
	}
	// var url = basepath + "interface/BDZT_GETSQGDMX/0";
	// var url = "json/4.json";
	callgetajax(dealData, url, param);
}

//获取预警状态、抢修状态、BD状态
function getYuJingZTBDData() {
	//interface/GDFW_YJZT/0
	//http://127.0.0.1:8080/pdpsc-app/interface/GDFW_YJZT/0?YWDW=FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06&RQ=2018-07-31
	var rq = dateFtt("yyyy-MM-dd", new Date(new Date())); //今天
	//硬编码
	// var param = {"YWDW": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03", "RQ": rq};
	var param = {
//		"YWDW": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06",
        "YWDW": "8a812897493378a00149567740676661",
		"RQ": rq
	};
	if(releaseFlag){
		url=basepath + "interface/GDFW_YJZT/0";
	}else{
		url="json/5.json";
	}
	$.ajax({
		// url: basepath + "interface/GDFW_YJZT/0",
		url: url,
		data: param,
		type: 'get',
		dataType: 'json',
		success: function(data) {

			var yujing;
			var qiangxiu;
			var bdzt;
			if (data.data) {
				for (var i = 0; i < data.data.length; i++) {
					if (data.data[i].YJLX === "1") {
						yujing = data.data[i].YJZTMS;
					} else if (data.data[i].YJLX === "2") {
						qiangxiu = data.data[i].YJZTMS;
					} else if (data.data[i].YJLX === "3") {
						bdzt = data.data[i].YJZTMS;
					}
				}
				$('#span_YJStatus').text('电网状态：正常');
				$('#span_QXStatus').text(qiangxiu);
				$('#span_BDStatus').text(bdzt);

			}
		},
		error: function(data) {
			console.log(data);
		}
	});
}



function callgetajax(callback, url, param, type) {
	$.ajax({
		url: url,
		data: param,
		type: type,
		dataType: 'json',
		success: function(data) {
			callback(data);
		},
		error: function(data) {
			console.log(data);
		}
	});
}

/**
 * 实时监测-总数
 * @param {Object} 
 */
function get_tztj_ssjc_total() {
    getShishiJianCeTotalData(function (rlt) {
        var data = rlt.data;
        var total = 0;
        var ywc = 0;
        var clz = 0;
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                total += Number(data[i].SL);
                ywc += Number(data[i].YWC);
                clz += Number(data[i].WDD);
                clz += Number(data[i].JXZ);
            }
        }
        $("#tousu").text(total);
        $("#zswcl").text(clz);
        $("#zsycl").text(ywc);
        shishijianceBiao1(clz, ywc);
    }, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03");

}

//实时监测总数
function getShishiJianCeTotalData(callback, ssgs) {
    //http://localhost:8080/pdpsc-app/interface/XN_GDFW_BDZT_GZJCTZTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2019-09-10%2000:00:00&JSSJ=2018-09-21%2023:59:59
    var param = {"SSGS": ssgs || SSGS, "SFHXQ": SSGS_VIP_MAP[ssgs || SSGS], "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    callgetajax(callback, basepath + "interface/XN_GDFW_BDZT_GZJCTJ/0", param);
}

var SSGS = "8a812897493378a00149567740676661";

var SSGS_VIP_MAP = {
    "8a812897493378a00149567740676661": "0",
    "JBH-HXQ": "1",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ": "0",

    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D": "0",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50": "0",
};
		
	</script>

</html>