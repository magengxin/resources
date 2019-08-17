<%@ page language="java" contentType="text/html; charset= utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">

<head>
    <meta charset="UTF-8">
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
		<script src="${ctx}/3d_static/js/jquery-2.2.4.min.js"></script>
		<script src="${ctx}/3d_static/js/echarts.min.js"></script>
		<script src="${ctx}/3d_static/js/ab_index_left_data.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/js/utilvar.js"></script>
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
			
			html,
			body,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			ul,
			ol,
			li,
			dl,
			dt,
			dd {
				margin: 0;
				padding: 0;
				font-size: 16px;
			}
			
			ul,
			ol {
				list-style: none;
			}
			
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
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
			
			i,
			em {
				font-style: normal;
			}
			
			img {
				border: 0;
				vertical-align: top;
			}
			
			html,
			body {
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
			
			body,
			input,
			select,
			s textarea,
			button {
				font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "PingFang SC", "Heiti SC", STHeiti, "Microsoft Yahei", "Source Han Sans SC", "Noto Sans CJK SC", "Droid Sans Fallback", sans-serif;
				outline: 0;
			}
			
			[type="text"],
			[type="password"],
			[type="tel"],
			[type="number"],
			[type="date"],
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
			
			html,
			body {
				width: 11520px;
			}
			
			.main {
				width: 11520px;
				height: 2160px;
				overflow: hidden;
				background-color: #001a2d;
			}
			
			h3 {
				color: #fff;
			}
			
			.main_left {
				height: 2156px;
				position: relative;
				background: url("${ctx}/3d_static/img/bg.png") no-repeat 100% 100% / 100% 100%;
			}
			
			.main_right {
				height: 2156px;
				padding-top: 64px;
				position: relative;
				background: url('${ctx}/3d_static/img/wangjia.1.png') no-repeat;
				/*3.修改背景图*/
			}
			/* 左屏 */
			
			.main_left {
				width: 1916px;
				float: left;
			}
			
			.main_left .main_top {
				background: url(${ctx}/3d_static/img/logo.png) no-repeat 100% 100% / 100% 100%;
				width: 1916px;
				height: 1080px;
			}
			/* 全网 */
			
			.main_left .main_qw {
				height: 918px;
				width: 1770px;
				margin: 56px 0 0 72px;
			}
			
			.main_qw .qw_title {
				background: url(${ctx}/3d_static/img/qw.png) no-repeat 100% 100% / 100% 100%;
				width: 1764px;
				height: 64px;
				margin-bottom: 20px;
			}
			
			.main_qw .qw_box {
				width: 1770px;
				height: auto;
				overflow: hidden;
			}
			
			.main_qw .qw_box .box_l {
				width: 409px;
				height: 416px;
				float: left;
				background: url(${ctx}/3d_static/img/l_box.png) no-repeat 100% 100% / 100% 100%;
				margin-right: 24px;
			}
			
			.main_qw .qw_box .box_r {
				width: 1336px;
				height: 416px;
				background: url(${ctx}/3d_static/img/r_box.png) no-repeat 100% 100% / 100% 100%;
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
				background: url(${ctx}/3d_static/img/icon/gz.png) no-repeat 100% 100% / 100% 100%;
			}
			
			.box_nav li .nav_i2::before {
				background: url(${ctx}/3d_static/img/icon/cz.png) no-repeat 100% 100% / 100% 100%;
			}
			
			.box_nav li .nav_i3::before {
				background: url(${ctx}/3d_static/img/icon/ddy.png) no-repeat 100% 100% / 100% 100%;
			}
			
			.box_nav li .nav_i4::before {
				background: url(${ctx}/3d_static/img/icon/sx.png) no-repeat 100% 100% / 100% 100%;
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
			
			.main_qw .qw_title {
				background: url(${ctx}/3d_static/img/qw.png) no-repeat 100% 100% / 100% 100%;
				width: 1764px;
				height: 64px;
				margin-bottom: 20px;
			}
			
			.main_bd .qw_title {
				background: url(${ctx}/3d_static/img/bd.png) no-repeat 100% 100% / 100% 100%;
				width: 1764px;
				height: 64px;
				margin-bottom: 20px;
			}
			
			.main_bd .qw_box {
				width: 1770px;
				height: 883px;
				overflow: hidden;
			}
			
			.main_bd .qw_box .box_l,
			.box_r {
				width: 870px;
				height: 883px;
				float: left;
				background: url(${ctx}/3d_static/img/ll_box.png) no-repeat 100% 100% / 100% 100%;
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
			
			.main_right .main_rtop {
				height: 96px;
				width: 100%;
				position: relative;
			}
			
			.main_right .main_ul {
				height: 96px;
				line-height: 96px;
				position: absolute;
				right: 0;
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
				background: url(${ctx}/3d_static/img/icon/dun.png) no-repeat 100% 100% / 100% 100%;
				width: 37px;
				height: 45px;
			}
			
			.li_2::before {
				background: url(${ctx}/3d_static/img/icon/q.png) no-repeat 100% 100% / 100% 100%;
				width: 41px;
				height: 40px;
			}
			
			.li_3::before {
				background: url(${ctx}/3d_static/img/icon/w.png) no-repeat 100% 100% / 100% 100%;
				width: 41px;
				height: 42px;
			}
			
			.li_4::before {
				background: url(${ctx}/3d_static/img/icon/sh.png) no-repeat 100% 100% / 100% 100%;
				width: 42px;
				height: 42px;
			}
			
			/*.li_5::before {
				background: url(${ctx}/3d_static/img/icon/t.png) no-repeat 100% 100% / 100% 100%;
				width: 57px;
				height: 45px;
			}*/
			/*点选保电*/
			.main_ul .baodian{
				position: relative;
				cursor: pointer;
				
			}
			.main_ul .selected_box{
				position: absolute;
				left:0;
				top:90px;
				display: none;
				z-index: 10;
				width:100%;
				height:200px;
				
			}
			.main_ul .selected_box li{
				font-size:32px;
				line-height: 48px;
				width: 85px;
				color:#000;
				background: #c3f4ff;
			}
			/*点选抢修状态*/
			.main_ul .qiangxiu{
				position: relative;
				cursor: pointer;
			}
			.main_ul .selected_qx{
				position: absolute;
				left:0;
				top:90px;
				display: none;
				z-index: 10;
				width:100%;
				height:200px;
				
			}
			.main_ul .selected_qx li{
				font-size:32px;
				line-height: 48px;
				width: 85px;
				color:#000;
				background: #c3f4ff;
			}
			
			#weather{
				float: left;
			    width: 57px;
			    height: 45px;
			    margin-top: 30px;
			}
			
			.li_5 h3::before {
				content: "";
				vertical-align: middle;
				display: inline-block;
				background: url(${ctx}/3d_static/img/icon/wendu.png) no-repeat 100% 100% / 100% 100%;
				width: 16px;
				height: 36px;
				margin-right: 6px;
			}
			/*标题样式*/
			
			.main_title {
				line-height: 60px;
				width:100%;
				height: 60px;
				margin-top:30px;
				/*background:url('${ctx}/3d_static/img/baoti.png') no-repeat 100% 100% / 100% 100%;*/
				background: url('${ctx}/3d_static/img/biaoti.png') no-repeat;
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
				background: url(${ctx}/3d_static/img/yw.png) no-repeat 100% 100% / 100% 100%;
				width: 1764px;
				height: 64px;
				margin-bottom: 20px;
			}
			
			.main_yw .yw_box .box_l,
			.box_r {
				width: 870px;
				height: 883px;
				float: left;
				background: url(${ctx}/3d_static/img/ll_box.png) no-repeat 100% 100% / 100% 100%;
			}
			
			.main_yw .yw_box .box_l {
				margin-right: 24px;
			}
			/* 资源 */
			
			.main_zy .yw_title {
				background: url(${ctx}/3d_static/img/zy.png) no-repeat 100% 100% / 100% 100%;
				width: 1764px;
				height: 64px;
				margin-bottom: 20px;
			}
			
			.main_zy .yw_box .box_l,
			.box_r {
				width: 870px;
				height: 883px;
				float: left;
				background: url(${ctx}/3d_static/img/ll_box.png) no-repeat 100% 100% / 100% 100%;
			}
			
			.main_zy .yw_box .box_l {
				margin-right: 24px;
			}
			/* 弹窗 */
			
			.main_tan {
				width: 3820px;
				height: 1117px;
				background: url(${ctx}/3d_static/img/tan_bg.png) no-repeat;
				position: absolute;
				left: 1942px;
				bottom: 20px;
			}
			
			.main_tan .pop_top {
				width: 100%;
				height: 70px;
				background: url(${ctx}/3d_static/img/lb.png) no-repeat;
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
					<div class="main_top"></div>
					<div class="main_qw">
						<div class="qw_title"></div>
						<div class="qw_box">
							<div class="box_l">
								<h3 class="box_h3">
									实时负荷
								</h3>
								<div id="ShiShiFuHe" class="box_text" style="color: #00fc6e;">3758MW</div>
								<h3 class="box_h3">
									最高负荷
								</h3>
								<div id="ZuiGaoFuHe" class="box_text" style="color: #ff0000;">3927MW</div>
							</div>
							<div class="box_r">
								<h3 class="box_h3">
									负荷曲线
								</h3>
								<!--<div class="ec_box" id="chart1">-->
								<div class="ec_box" id="load_body">
								</div>
							</div>
						</div>
						<div class="qw_box" style="margin-top: 15px;">
							<div class="box_l">
								<h3 class="box_h3">
									台区监测
								</h3>
								<ul class="box_nav">
									<li>
										<i class="nav_i nav_i1">过载</i>
										<span id="tqjcguozai" class="nav_in">21</span>
									</li>
									<li>
										<i class="nav_i nav_i2">重载</i>
										<span id="tqjczhongzai" class="nav_in">67</span>
									</li>
									<li>
										<i class="nav_i nav_i3">低电压</i>
										<span id="tqjcdidianya" class="nav_in">0</span>
									</li>
									<li>
										<i class="nav_i nav_i4">三相不平衡</i>
										<span id="tqjcsxbph" class="nav_in">12</span>
									</li>
								</ul>
							</div>
							<div class="box_r" style="position: relative;">
								<h3 class="box_h3">
									客户服务
								</h3>
								<ul class="pie_box">
									<li class="ec_pie">
										<div class="zs_text">
											<ul>
												<li style='font-size: 22px;text-align: center;margin-left:-8px'>电力故障</br><span id="dianliguzhang" style="font-size: 18px">188</span></li>
												<li style='font-size: 22px;text-align: center;margin-left:9px;margin-top:-12px'>非电力</br>故障</br><span id="fdianliguzhang">16</span></li>
												<li style='font-size: 22px;text-align: center;margin-left:-10px'>投诉</br><span id="tousu">0</span></li>
												<li style='font-size: 22px;text-align: center;margin-left:-6px'>举报</br><span id="jubao">0</span></li>
											</ul>
										</div>

										<div id="chart2" class="piiiie"></div>

										<div class="pie_text">12345:
											<em class="green"><span id="dlgz12345ycl">66</span></em>/<em class="yellow"><span id="dlgz12345wcl">65</span></em>
										</div>
										<div class="pie_text">95598:
											<em class="green"><span id="dlgz95598ycl">35</span></em>/<em class="yellow"><span id="dlgz95598wcl">22</span></em>
										</div>
									</li>
									<li class="ec_pie">
										<div id="chart3" class="piiiie"></div>
										<div class="pie_text">12345:
											<em class="green"><span id="fdlgz12345ycl">14</span></em>/<em class="yellow"><span id="fdlgz12345wcl">0</span></em>
										</div>
										<div class="pie_text">95598:
											<em class="green"><span id="fdlgz95598ycl">2</span></em>/<em class="yellow"><span id="fdlgz95598wcl">0</span></em>
										</div>
									</li>
									<li class="ec_pie">
										<div id="chart4" class="piiiie"></div>
										<div class="pie_text">12345:
											<em class="green"><span id="tousu12345ycl">0</span></em>/<em class="yellow"><span id="tousu12345wcl">0</span></em>
										</div>
										<div class="pie_text">95598:
											<em class="green"><span id="tousu95598ycl">0</span></em>/<em class="yellow"><span id="tousu95598wcl">0</span></em>
										</div>
									</li>
									<li class="ec_pie">
										<div id="chart5" class="piiiie"></div>
										<div class="pie_text">12345:
											<em class="green"><span id="jubao12345ycl">0</span></em>/<em class="yellow"><span id="jubao12345wcl">0</span></em>
										</div>
										<div class="pie_text">95598:
											<em class="green"><span id="jubao95598ycl">0</span></em>/<em class="yellow"><span id="jubao95598wcl">0</span></em>
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
				<!-- 弹窗 -->
				<!-- <div class="main_tan" style="display: none;">
                <div class="pop_top">
                    <div class="pop_close"></div>
                </div>
                <div class="nav_box">
                    <ul class="pop_nav">
                        <li>PMS2.0</li>
                        <li>供电服务指挥系统</li>
                        <li>配网负荷监测系统</li>
                        <li>IDP</li>
                        <li>配网故障监测系统</li>
                        <li>4G单兵</li>
                        <li>400V低压监控及快速抢修系</li>
                        <li>电缆通道分布式光纤振动监控 </li>
                        <li>智能锁 </li>
                        <li>智能井盖管控告警系统 </li>
                    </ul>
                    <ul class="pop_nav">
                        <li>安全生产视频监控系统 </li>
                        <li>智慧门卫系统 </li>
                        <li>变电站机器人巡检系统 </li>
                        <li>变电站综合监测系统</li>
                        <li>青浦设备监控大数据三维展示系统 </li>
                        <li>输电线路通道可视化智慧型监拍系统 </li>
                        <li>电缆综合监控系统</li>
                        <li>诸光站综合自动化</li>
                        <li>统一视频平台</li>
                        <li>输变电设备状态监测</li>
                    </ul>
                    <ul class="pop_nav">
                        <li>气象系统 </li>
                        <li>物资系统 </li>
                        <li>安全帽系统 </li>
                        <li>无人机系统 </li>
                        <li>直流偏磁在线监测系统 </li>
                        <li>配电站综合监测系统</li>
                        <li>电能质量系统 </li>
                        <li>换流站精细化管理系统 </li>
                        <li>PMS2.0移动作业 </li>
                        <li>主网管控</li>
                    </ul>
                    <ul class="pop_nav">
                        <li>紧急指挥视频会议系统 </li>
                        <li>国网视频会议系统 </li>
                        <li>换流站系统 </li>
                        <li>调度系统 </li>
                        <li>营销业务系统</li>
                        <li></li>
                    </ul>

                </div>

            </div> -->
			</div>

			<!-- 右屏 -->
			<div class="main_right">
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
							<h3 id="span_YJStatus">预警状态:  正常</h3>
						</li>
						<li class="li_4">
							<h3 style="font-family: DS-Digital;font-size:50px;" class="shijian">2018.9.28</h3>
						</li>
						<li class="li_5">
							<img id="weather" src="${ctx}/3d_static/img/icon/t.png" alt="" />
							<h3 id="wendu" style='font-size:42px;'>21℃</h3>
						</li>
					</ul>
				</div>
				<!--
        			4.添加标题
                -->
				<div class="main_title">
					<!--<h3>进博会保电电网示意图</h3>-->
					<div class="downTime"></div>
				</div>
				<!--
					1.修改注销
					<div class="main_map">
					<span class="maplink">诸光站</span>-->
				<!-- <span class="maplink">黄渡站</span> -->
				<!--<span class="maplink">静安站</span>
					<span class="maplink">泗泾站</span>
					<span class="maplink maplink_color">练塘站</span>
				</div>-->
				<!-- <div class="main_yw">
                <div class="yw_title"></div>
                <div class="yw_box">
                    <div class="box_l">
                        <h3 class="box_h3">
                            保电特巡
                        </h3>

                    </div>
                    <div class="box_r">
                        <h3 class="box_h3">
                            任务处置
                        </h3>
                        <div class="box_task">
                            <div class="task_title">
                                <h1 class="task_h task_h1">异常</h1>
                                <span class="task_span">0</span>
                            </div>
                            <div class="task_nav">
                                <div class="task_tt">
                                    <span>已下达</span>
                                    <span>0</span>
                                </div>
                                <div class="task_tt">
                                    <span>处理中</span>
                                    <span>0</span>
                                </div>
                                <div class="task_tt">
                                    <span>已完成</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_zy">
                <div class="yw_title"></div>
                <div class="yw_box">
                    <div class="box_l">
                        <h3 class="box_h3">
                            资源总览
                        </h3>
                    </div>
                    <div class="box_r">
                        <h3 class="box_h3">
                            物资监控
                        </h3>
                    </div>
                </div>
            </div> -->
			</div>
		</div>

		<script src="${ctx}/3d_static/js/ab_chart.js">
			// $(".pop_close").click(function () {
			//     $(".main_tan").css("display", "none");

			// })
			// $(".show").click(function () {
			//     $(".main_tan").css("display", "block");

			// })
		</script>
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
			//倒计时
			function countTime() {
				//获取当前时间  
				var date = new Date();
				var now = date.getTime();
				//设置截止时间  
				var str = "2018/11/05 00:00:00";
				var endDate = new Date(str);
				var end = endDate.getTime();
				//时间差  
				var leftTime = now - end ;
				//定义变量 d,h,m,s保存倒计时的时间  
				var d, h, m, s;
//				console.log(leftTime)
//				if (leftTime > 0) {
//					d = Math.floor(leftTime / 1000 / 60 / 60 / 24)+1;
////					h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
////					m = Math.floor(leftTime / 1000 / 60 % 60);
////					s = Math.floor(leftTime / 1000 % 60);
//					document.getElementById("txt").innerHTML = '距离进博会开幕还有：';
//					document.getElementById("_d").innerHTML = d;
//				}else{
					d = Math.floor(leftTime / 1000 / 60 / 60 / 24)+1;
//					document.getElementById("txt").innerHTML = '进博会已开幕：';
//					document.getElementById("_d").innerHTML = d;
//				}
				
				//将倒计时赋值到div中  
				
//				document.getElementById("_h").innerHTML = h + "时";
//				document.getElementById("_m").innerHTML = m + "分";
//				document.getElementById("_s").innerHTML = s + "秒";
				//递归每秒调用countTime方法，显示动态时间效果  
				setTimeout(countTime, 1000);
			}
			countTime()
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
		})
	</script>

</html>