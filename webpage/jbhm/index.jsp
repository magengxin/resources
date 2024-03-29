﻿<%@ page language="java" contentType="text/html; charset= utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="UTF-8">
<script type="text/javascript">
    var WEB_ROOT = '${ctx}/';
    var releaseFlag="baodian";
</script>
<link rel="stylesheet" href="${ctx}/ws_static/css/bootstrap.css">
<link rel="stylesheet" href="${ctx}/ws_static/css/bootstrap-grid.css">
<link rel="stylesheet" href="${ctx}/ws_static/css/bootstrap-reboot.min.css">
<link rel="stylesheet" href="${ctx}/ws_static/css/index.css">
<link rel="stylesheet" href="${ctx}/ws_static/css/index2.css">
<link rel="stylesheet" href="${ctx}/ws_static/css/index3.css">

<script type="text/javascript" src="${ctx}/ws_static/js/lib/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/bootstrap.min.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/echarts.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/echarts-liquidfill.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/commfun.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/utilvar.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/leftComponent.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/baozhangzhongdian.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/gongdianfuwu.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/other.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/xiaoxitongzhi.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/yewuzhihui.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/dangbanziyuan.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/yunxingzhuangtai.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/guzhangjiance.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/right_data.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/tableact.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_HXBDQ.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/jQueryRotate.2.2.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/jquery.SuperSlide.2.1.1.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/moment.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/lib/moment-with-locales.js"></script>

		<style>
			.left_box {
				background: url("${ctx}/ws_static/img/bg-l.jpg ") no-repeat;
			}
			
			.logo_box {
				background: url("${ctx}/ws_static/img/logo1.png ") no-repeat;
				height: 132px;
			}
			
			.left_tab {
				background: url("${ctx}/ws_static/img/left-box_02.png") no-repeat;
			}
			
			.title_box_l>p span.icon_img_1 {
				background-image: url("${ctx}/ws_static/img/icon_ac_1.png");
			}
			
			.title_box_l>p span.icon_img_2 {
				background-image: url("${ctx}/ws_static/img/icon_2.png");
			}
			
			.title_box_l>p span.icon_img_3 {
				background-image: url("${ctx}/ws_static/img/icon_3.png");
			}
			
			.title_box_l>p span.icon_img_4 {
				background-image: url("${ctx}/ws_static/img/icon_4.png");
			}
			
			.title_box_l>div.alarm .alarm_color {
				background-image: url("${ctx}/ws_static/img/green_sc.png");
			}
			
			.title_box_l>div.alarm .yellow_alarm_color {
				background-image: url("${ctx}/ws_static/img/ooo_01.png");
				background-size: cover;
			}
			
			.main_net .top_massage>.icon_img {
				background: url("${ctx}/ws_static/img/icon_5.png") no-repeat;
			}
			
			.vice_net .top_massage>.icon_img {
				background: url("${ctx}/ws_static/img/icon_6.png") no-repeat;
			}
			
			.main_text>div span.icon_img {
				background: url("${ctx}/ws_static/img/icon_7.png") no-repeat;
			}
			
			.list_doc .list_box .top_list .icon_img1 {
				background-image: url("${ctx}/ws_static/img/icon_8.png");
			}
			
			.list_doc .list_box .top_list .icon_img2 {
				background-image: url("${ctx}/ws_static/img/icon_10.png");
			}
			
			.list_doc .list_box .top_list .icon_img3 {
				background-image: url("${ctx}/ws_static/img/icon_9.png");
			}
			
			.right-box {
				background-image: url("${ctx}/ws_static/img/bg-r.jpg");
				color: white;
			}
			
			.title_list li {
				background-image: url("${ctx}/ws_static/img/tab_bg1.png");
			}
			
			.status_tab li {
				background-image: url("${ctx}/ws_static/img/status2.png");
			}
			
			.status_tab li.active_tab {
				background-image: url("${ctx}/ws_static/img/status1.png");
			}
			
			.monitor_box .monitor_title {
				background: url("${ctx}/ws_static/img/bg_title.png") no-repeat;
			}
			
			.monitor_bottom ul li div {
				background-image: url("${ctx}/ws_static/img/bg-bottom.png");
			}
			
			.monitor_bottom ul>li.active_btn div {
				background-image: url("${ctx}/ws_static/img/bg_big2.png");
			}
			
			.content_box_l-big {
				background: url("${ctx}/ws_static/img/Bg-list.png") no-repeat;
			}
			
			.power_monitor_4 {
				background-image: url("${ctx}/ws_static/img/C.png");
			}
			
			.power_monitor_5 {
				background-image: url("${ctx}/ws_static/img/B.png");
			}
			
			.power_monitor_6 {
				background-image: url("${ctx}/ws_static/img/C.png");
			}
			
			.resource li .img_box {
				background-image: url("${ctx}/ws_static/img/BG-img.png");
			}
			
			.cars_massage {
				background-image: url("${ctx}/ws_static/img/cars_bg2.png");
			}
			
			.cars1 {
				background-image: url("${ctx}/ws_static/img/cars_01.png");
			}
			
			.cars2 {
				background-image: url("${ctx}/ws_static/img/cars_02.png");
			}
			
			.cars3 {
				background-image: url("${ctx}/ws_static/img/cars_03.png");
			}
			
			.cars4 {
				background-image: url("${ctx}/ws_static/img/cars_04.png");
			}
			
			.cars5 {
				background-image: url("${ctx}/ws_static/img/cars_05.png");
			}
			
			.chosen_tab {
				background: url("${ctx}/ws_static/img/left-box_01_n.png") no-repeat;
			}
			
			.centerTop_list {
				background-image: url("${ctx}/ws_static/img/topBG.png");
			}
			
			.loadPower {
				background-image: url("${ctx}/ws_static/img/loadbg.png");
			}
			
			.bottomClose {
				background: url("${ctx}/ws_static/img/loadIcon_03.png") center no-repeat;
			}
			.bottomChange {
				background: url("${ctx}/ws_static/img/bottomChange.png") center no-repeat;
			}
			.bottomChangeDown{
				background: url("${ctx}/ws_static/img/bottomChangeDown.png") center no-repeat;
			}
			.zhizhen {
				background-image: url("${ctx}/ws_static/img/bg_circle.png");
			}
			
			.emergency_box {
				background-image: url("${ctx}/ws_static/img/click_01.png");
			}
			
			.emergency_list2 ul:first-child li {
				background-image: url("${ctx}/ws_static/img/list2bg_01.png");
			}
			
			.emergency_list2 ul:nth-of-type(2) li {
				background: url("${ctx}/ws_static/img/list2bg_02.png");
			}
			
			.emergency_list3 #stand_sp_wz_ul li {
				background-image: url("${ctx}/ws_static/img/list2bg_03.png");
			}
			
			.ziYuan_box .d1 p:first-child {
				background-image: url("${ctx}/ws_static/img/icon_ duty_01.png");
			}
			
			.ziYuan_box .d2 p:first-child {
				background-image: url("${ctx}/ws_static/img/icon_ duty_03.png");
			}
			
			.ziYuan_box .d3 p:first-child {
				background-image: url("${ctx}/ws_static/img/icon_ duty_02.png");
			}
			
			.ziYuan_box .d4 p:first-child {
				background-image: url("${ctx}/ws_static/img/icon_ duty_04.png");
			}
			
			.bg-box2 {
				background-image: url("${ctx}/ws_static/img/Bg-list2_n.png");
			}
			
			#showImgBigDiv {
				background: url("${ctx}/ws_static/img/show_img_bg.png") no-repeat center;
			}
			
			.right_topIcon {
				background-image: url("${ctx}/ws_static/img/right_boxtop.png");
			}
			
			.TongDaoJianPaiPage {
				background-image: url("${ctx}/ws_static/img/fuhe_bg.png");
			}
			
			#closeTongDao {
				background: url("${ctx}/ws_static/img/guanbi.png") no-repeat center;
			}
			
			#goBackTongDao {
				background: url("${ctx}/ws_static/img/fanhui.png") no-repeat center;
			}
			/*.runbox_gdfw_ssjc .chart1 .shishijiance1 {
				background: url("${ctx}/ws_static/img/bg_yuan.png") no-repeat center;
			}*/
			
			.personnel_img p.img1 {
				background: url("${ctx}/ws_static/img/personnel1.png") no-repeat;
			}
			
			.personnel_img p.img2 {
				background: url("${ctx}/ws_static/img/personnel2.png") no-repeat 3px;
			}
			/*.personnel_img p.img3 {
				background: url("${ctx}/ws_static/img/personnel3.png") no-repeat center;
			}*/
		</style>

	</head>

	<body>
		<div class="body_box pos-r">

			<!--左边框体开始-->
			<div class="left_box overflow_h f-l">
				<div class="logo_box pos-r"></div>

				<!--开始-->
				<div class="left_tab pos-r overflow_h chosen_tab activeIcon1">
					<div class="title_box_l overflow_h pos-r">
						<p class="float-left font-bold chosen_tit">
							<span class="icon_img icon_img_1"></span>
							<span class="title_text font-blue">全网状态</span>
						</p>
						<span style="font-size: 23px;color: #FFFFFF;position: absolute;right: 13%;top: 24%;" id="TimeHour">今日(00:00 -- 08:00)</span>
						<div class="alarm float-right">
							<span id="quanwangjiankongStatusImg" class="alarm_color"></span>
							<span id="quanwangjiankong_text" class="alarm_text">
                            正常
                        </span>
						</div>
					</div>
					<div class="clearfix"></div>

					<div class="content_box_l overflow_h">
						<div class="main_net float-left overflow_h">
							<div class="top_massage">
								<div class="icon_img float-left"></div>
								<div class="main_text float-left">
									<p>
										主网
									</p>
								</div>
							</div>
							<div class="bottom_massage">
								<span id="md_red_num" class="red_num">
                                0
                            </span>
								<span>
                                <span class="line_span"></span>
								<span class="line_span" style="margin-top: 2px;"></span>
								</span>
								<span id="md_yellow_num" class="yellow_num">
                                0
                            </span>
							</div>
						</div>

						<div class="main_net float-left overflow_h vice_net">
							<div class="top_massage">
								<div class="icon_img float-left"></div>
								<div class="main_text float-left">
									<p>
										配网
									</p>
								</div>
							</div>
							<div class="bottom_massage">
								<span id="pd_red_num" class="red_num">
                                0
                            </span>
								<span>
                                <span class="line_span"></span>
								<span class="line_span" style="margin-top: 2px;"></span>
								</span>
								<span id="pd_yellow_num" class="yellow_num">
                                0
                            </span>
							</div>
						</div>

						<div class="list_doc float-right">
							<div class="list_box">
								<div class="top_list">
									<span class="icon_img1 icon_img"></span>
									<span class="list_name">主动单</span>
									<span id="zd_list_num" class="list_num float-right">
                                    0
                                </span>
								</div>
								<div class="bottom_list">
									<div class="bg_line pos-r"></div>
									<div class="blue_line pos-r"></div>
								</div>
							</div>

							<div class="list_box">
								<div class="top_list">
									<span class="icon_img2 icon_img"></span>
									<span class="list_name">报修单</span>
									<span id="baoxiudan_num" class="list_num float-right" style="color: #3a7fff;">
                                    0
                                </span>
								</div>
								<div class="bottom_list">
									<div class="bg_line pos-r"></div>
									<div class="blue_line pos-r"></div>
								</div>
							</div>

							<div class="list_box">
								<div class="top_list">
									<span class="icon_img3 icon_img"></span>
									<span class="list_name">诉求单</span>
									<span id="suqiu_num" class="list_num float-right">
                                    0
                                </span>
								</div>
								<div class="bottom_list">
									<div class="bg_line pos-r"></div>
									<div class="blue_line pos-r"></div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<!--全网监控结束-->

				<!--保电监控开始-->
				<div class="left_tab pos-r overflow_h m-t-45 activeIcon2">
					<div class="title_box_l overflow_h pos-r">
						<p class="float-left font-bold chosen_tit">
							<span class="icon_img icon_img_2"></span>
							<span class="title_text font-blue">智慧保电</span>
						</p>
						<div class="alarm float-right">
							<span class="alarm_color" id="zhihuibaodianStatusImg"></span>
							<span class="alarm_text" id="zhihuibaodianStatus">
                            正常
                        </span>
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="equipment_title overflow_h" style="right: 10px">
						<div class="f-l">
							<span class="f-l" style="background-color: #13b2e7"></span>
							<p class="f-l">正常</p>
						</div>
						<div class="f-l">
							<span class="f-l" style="background-color: #FF9326"></span>
							<p class="f-l">异常</p>
						</div>
					</div>
					<div class="content_box_l overflow_h" style="margin-top: 15px;">
						<div id="power_monitor_2" class="power_monitor_2"></div>
						<div id="power_monitor_1" class="power_monitor_1"></div>
						<div id="power_monitor_3" class="power_monitor_3"></div>
						<ul class="control_text">
							<li class="control2">一级用户 <span id="yjbdNum"></span></li>
							<li class="control1">二级用户 <span id="ejbdNum"></span></li>
							<li class="control3">核心配电站 <span id="bdsbNum"></span></li>
						</ul>
					</div>
				</div>
				<!--全网状态结束-->

				<!--业务指挥开始-->
				<div class="left_tab pos-r overflow_h m-t-45 activeIcon3">
					<div class="title_box_l overflow_h pos-r">
						<p class="float-left font-bold chosen_tit">
							<span class="icon_img icon_img_3"></span>
							<span class="title_text font-blue">业务指挥</span>
						</p>
						<div class="alarm float-right">
							<span id="yewuzhihuiStatusImg" class="alarm_color"></span>
							<span class="alarm_text">
                            正常
                        </span>
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="content_box_l overflow_h">
						<div class="dashBoard overflow_h" id="dashBoard">
							<div class='zhizhen'>
								<img src="${ctx}/ws_static/img/zhizhen_lv.png" id="zi">
								<img src="${ctx}/ws_static/img/zhizhen_zi.png" id="lv">
							</div>

							<div class='zhizhen' style="margin-left: 60px;">
								<img src="${ctx}/ws_static/img/zhizhen_cheng.png" id="cheng">
							</div>
							<div class='zhizhen' style="margin-left: 70px;">
								<img src="${ctx}/ws_static/img/zhizhen_hong.png" id="hong">
							</div>

						</div>

						<ul class="control_text" style="margin-top:50px">
							<li class="control4" style="width: 20%;margin-left: 72px;">巡视任务</li>
							<li class="control5" style="width: 22%;margin-left: 72px;">异常处理</li>
							<li class="control6" style="width: 22%;margin-left: 58px;">紧急处置</li>
						</ul>

						<div style="margin-top:-180px;font-weight: bold; ">
							<span id="xunShiRenWu" class="CommandNumStyle" style="left: 14% ; text-align: center;width: 80px;">0</span>
							<span id="yiChangChuLi" class="CommandNumStyle" style="left: 44.5%;text-align: center;width:  80px;">0</span>
							<span id="jinJiChuLi" class="CommandNumStyle" style="right: 14%;width: 80px;text-align: center;">0</span>
						</div>

						<div class="control_legend pos-r float-left control_legend1">
							<div>
								<p>
									<span id="greenZhen">0</span>
								</p>
								<p style="margin-top: -20px;">
									发现缺陷
								</p>
							</div>
						</div>
						<div class="control_legend pos-r float-left control_legend2" style="margin-left: 100px;">
							<div>
								<p>
									<span id="ziZhen">0</span>
								</p>
								<p style="margin-top: -20px;">
									已巡视
								</p>
							</div>
						</div>
						<div class="control_legend pos-r float-left control_legend3" style="margin-left: 200px;">
							<div>
								<p>
									<span id="chengZheng">0</span>
								</p>
								<p style="margin-top: -20px;">
									处理中
								</p>
							</div>
						</div>
						<div class="control_legend pos-r float-left control_legend4" style="margin-left: 400px;">
							<div>
								<p>
									<span id="hongZheng">0</span>
								</p>
								<p style="margin-top: -20px;">
									处理中
								</p>
							</div>
						</div>
					</div>
				</div>
				<!--业务指挥结束-->

				<!--资源监控开始-->
				<div class="left_tab pos-r overflow_h m-t-45 content_box_l-big  activeIcon4">
					<div class="title_box_l overflow_h pos-r activeIcon4">
						<p class="float-left font-bold chosen_tit">
							<span class="icon_img icon_img_4"></span>
							<span class="title_text font-blue">资源监控</span>
						</p>
						<div class="alarm float-right">
							<span id="ziyuanjiankongStatusImg" class="alarm_color"></span>
							<span class="alarm_text">
                            正常
                        </span>
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="content_box_l overflow_h">
						<div class="left_box2" id="left_box2">
						</div>
						<div class="right2_box">
							<div class="right_num pos-r">
								<div>
									<span>
                                    <img src="${ctx}/ws_static/img/yingjiku.png" alt="ICON" width="48" height="48">
                                </span>
									<span id="yingjiku_all_num" class="span1">
                                    3
                                </span>
									<span class="span1">-</span>
									<span id="yingjiku_abnormal_num" class="span2">0</span>
								</div>
								<p>应急库</p>
							</div>
							<div class="right_num pos-r right_num_bottom">
								<div>
									<span>
                                    <img src="${ctx}/ws_static/img/right_icon.png" alt="ICON" width="48" height="48">
                                </span>
									<span id="changbeiku_all_num" class="span1">
                                    9
                                </span>
									<span class="span1">-</span>
									<span id="changbei_abnormal_num" class="span2">0</span>
								</div>
								<p>常备库</p>
							</div>
						</div>
						<ul class="resource">
							<li class="pos-r resource1_1">
								<div class="img_box">
									<img src="${ctx}/ws_static/img/img_btn_05.png" alt="img" width="36" height="36">
								</div>
								<p>
									<span id="zyjk_tx_text">0/0</span>
								</p>
							</li>
							<li class="pos-r resource1_2">
								<div class="img_box">
									<img src="${ctx}/ws_static/img/img_btn_02.png" alt="img" width="36" height="36">
								</div>
								<p>
									<span id="zyjk_jx_text">0/0</span>
								</p>
							</li>
							<li class="pos-r resource1_3">
								<div class="img_box">
									<img src="${ctx}/ws_static/img/img_btn_03.png" alt="img" width="36" height="36">
								</div>
								<p>
									<span id="zyjk_hq_text">0/0</span>
								</p>
							</li>
							<li class="pos-r resource1_4">
								<div class="img_box">
									<img src="${ctx}/ws_static/img/img_btn_04.png" alt="img" width="36" height="36">
								</div>
								<p>
									<span id="zyjk_cl_text">0/0</span>
								</p>
							</li>
							<!--<li class="pos-r resource1_5">
								<div class="img_box">
									<img src="${ctx}/ws_static/img/img_btn_01.png" alt="img" width="36" height="36">
								</div>
								<p>
									<span id="zyjk_qx_text">-/-</span>
								</p>
							</li>-->
						</ul>
					</div>
				</div>
				<!--资源监控开始-->
				<div class='all_logo' style="position: absolute;bottom:0;left:90px;">
					<img src="${ctx}/ws_static/img/all_logo.png" />
				</div>
			</div>
			<!--左边框体结束-->

			<div class="center_box overflow_h">
				<!--
                	描述：新明细列表结构开始
                -->
				<div class="bottom-list hide">
					<div class="box" style="position: absolute;left:0;top:0;width:100%;background: #073a66;height:70px;opacity: 0.5;"></div>
					<div class="f-l bottom1">
						<p id="qiangdan_title" style="margin-top:90px;">仓库列表</p>
						<p style="margin-top:20px;"><img src="${ctx}/ws_static/img/01.png" alt="" width="105" height="120"></p>
					</div>
					<div class="lys_box">
						<div class="lys_box_inner">
							<div></div>
							<div>
								<div style="overflow-x: auto;width:2880px;height: 342px;position: relative;color: #fff;" id='div-1'>
									<div class='fixedDiv' style="position: absolute;left:0;overflow: hidden;height: 70px;line-height: 70px;background: #093053;">
										<table border="0" cellspacing="" cellpadding="" style="table-layout: fixed;width:0;text-align: center;border:none;" frame="rhs">
											<tr id="FourUl_add"></tr>
										</table>

									</div>
									<div class='mainDiv' style="height: 342px;overflow: auto;overflow-x: hidden;" id='FourUl'>
										<table border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;width:0;text-align: center;border:none;margin-top:70px;" frame="rhs">
											<!--<tr id="xiangdan_header_app" style="opacity: 0;"></tr>-->
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="pageBlock" class="f-r bottom3" style="display: none;">
						<div class="pager-list"></div>
					</div>

					<div class="bottomClose" id="bottomDetailClose"></div>
					<div class="bottomChange" id="bottomChangeDown"></div>
				</div>
				<!--
                	描述：新明细列表结构结束
                -->
				<img id='picbox' style="position: absolute;top:154px;left: 0;width:2880px;height: 1556px;background: pink;display: none;" />
				<div id='pictitle' style="position: absolute;bottom:450px;left: 0;width:2880px;height: 90px;background: rgba(0,0,0,0.5);text-align: center;display: none;line-height: 90px;font-size: 48px;color:#fff;"></div>
				<!--应急预案显示图片   -->
				<div class='yingji_pic' style="width:100%;height: 100%;position: absolute;left:0;top:154px;display: none;" id='yingji_pic'>
					<img style="width:100%;height: 100%;" src="${ctx}/ws_static/img/tj0.png" />
				</div>
				<div class="centerTop_list">
					<div class="f-l centerTop_list01">
						<img src="${ctx}/ws_static/img/top_05.png" alt="img" width="32" height="32">
						<span id="TitleTime">2018-09-07 08:00</span>
						<img id="wenduimg" src="${ctx}/ws_static/img/top_01.png" id="weatherImg" alt="img" title="多云转晴" width="48" height="48">
						<img src="${ctx}/ws_static/img/top_06.png" alt="img" width="16" height="36">
						<span id="wendu">21</span>
					</div>
					<div class="f-l centerTop_list02">
						<p class="f-l" style="padding: 0 20px;">
							<img src="${ctx}/ws_static/img/top_03.png" alt="" width="48" height="48">
							<span id="span_BDStatus">保电状态</span>
						</p>
						<p class="f-l" style="padding: 0 20px;">
							<img src="${ctx}/ws_static/img/top_006.png" alt="" width="48" height="48">
							<span id="span_QXStatus">抢修状态</span>
						</p>
						<p class="f-l" style="padding: 0 20px;">
							<img src="${ctx}/ws_static/img/top_04.png" alt="" width="48" height="48">
							<span id="span_YJStatus">预警状态</span>
						</p>
					</div>
					<div class="f-l centerTop_list03">
						<p class="f-r">
							<span>最高负荷:</span>
							<span id="ZuiGaoFuHe" style="cursor: pointer">--MW</span>
						</p>
						<p class="f-r">
							<span>实时负荷:</span>
							<span id="ShiShiFuHe" style="cursor: pointer">--MW</span>
						</p>
					</div>
				</div>

				<div style="width: 1190px;height: 60px;background: rgba(49,111,151,0.5);color: #FFFFFF;margin-top: 20px;margin-left: 50px;position: absolute;">
					<div style="padding: 5px 60px 5px 30px;position: relative;">
						<img src="${ctx}/ws_static/img/message_icon.png" alt="img" width="32" height="32">
						<marquee id="zoumadeng" style="vertical-align: middle;font-size: 28px;width: 1060px;">全网保电正常......</marquee>
						<!--<span class="hide" style="float: right;color: #00cc00;font-size: 28px;" id="SubtitleTime">2018-09-07 08:00</span>-->
						<img src="${ctx}/ws_static/img/fangan_ac.png" alt="img" width="40" height="40" style="position: absolute;right: 10px;top:10px;" id='history_show'>
					</div>
				</div>
				<!--<div style="width: 1190px;height: 60px;color: #FFFFFF;margin-top: 85px;margin-left: 50px;position: absolute;">
					<div id="guzhangMarquee" style="padding: 5px 30px;">
						<marquee style="vertical-align: middle;font-size: 28px;width: 1090px;color:#ff3b4d;" loop=3 id="showInfo">该方法就发个就发个</marquee>
					</div>
				</div>-->
				<div class='history' style="display: none;">
					<p class='history_title'>当日历史故障</p>
					<img src="${ctx}/ws_static/img/history_close.png" class='history_close' />
					<div class='histoy_inner'>
						<!--<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span >2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span >2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>
						<span>2018-11-23 12:30:21 故障描述</span>-->
					</div>
				</div>
				<div id="showImgBigDiv" style="opacity: 0;">
					<div id="showImgTitle">
						<p>照片附件</p>
					</div>
					<div id="showImgDiv">
						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/sj_05.jpg" alt="" id='0' />
										<div class='cangkunpic'>松江中心库板货车</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/sj_02.jpg" alt="" id='1' />
										<div class='cangkunpic'>松江中心库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/sj_03.jpg" alt="" id='2' />
										<div class='cangkunpic'>松江中心库汽车吊</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/sj_04.jpg" alt="" id='3' />
										<div class='cangkunpic'>松江中心库外景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/sj_01.jpg" alt="" id='4' />
										<div class='cangkunpic'>松江中心库应急物资</div>
									</li>
								</ul>

							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/wzl_01.jpg" alt="" id='5' />
										<div class='cangkunpic'>吴中路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/wzl_02.jpg" alt="" id='6' />
										<div class='cangkunpic'>吴中路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/zyl_01.jpg" alt="" id='7' />
										<div class='cangkunpic'>闸殷路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/zyl_02.jpg" alt="" id='8' />
										<div class='cangkunpic'>闸殷路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/gdl_01.jpg" alt="" id='9' />
										<div class='cangkunpic'>顾戴路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/gdl_02.jpg" alt="" id='10' />
										<div class='cangkunpic'>顾戴路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/dslq_01.jpg" alt="" id='11' />
										<div class='cangkunpic'>东三里桥路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/dslq_02.jpg" alt="" id='12' />
										<div class='cangkunpic'>东三里桥路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/jl_01.jpg" alt="" id='13' />
										<div class='cangkunpic'>金廊公路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/jl_02.jpg" alt="" id='14' />
										<div class='cangkunpic'>金廊公路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/gjl_01.jpg" alt="" id='15' />
										<div class='cangkunpic'>拱极路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/gjl_02.jpg" alt="" id='16' />
										<div class='cangkunpic'>拱极路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/hhgl_01.jpg" alt="" id='17' />
										<div class='cangkunpic'>沪杭公路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/hhgl_02.jpg" alt="" id='18' />
										<div class='cangkunpic'>沪杭公路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/hcl_01.jpg" alt="" id='19' />
										<div class='cangkunpic'>霍城路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/hcl_02.jpg" alt="" id='20' />
										<div class='cangkunpic'>霍城路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/bgl_01.jpg" alt="" id='21' />
										<div class='cangkunpic'>堡港路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/bgl_02.jpg" alt="" id='22' />
										<div class='cangkunpic'>堡港路仓库外景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/qsl_01.jpg" alt="" id='23' />
										<div class='cangkunpic'>青松路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/qsl_02.jpg" alt="" id='24' />
										<div class='cangkunpic'>青松路仓库内景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<div class="slideBox">
							<div class="bd">
								<ul>
									<li><img src="${ctx}/ws_static/img/ckimg/hnl_01.jpg" alt="" id='25' />
										<div class='cangkunpic'>沪南路仓库内景</div>
									</li>
									<li><img src="${ctx}/ws_static/img/ckimg/hnl_02.jpg" alt="" id='26' />
										<div class='cangkunpic'>沪南路仓库内景</div>
									</li>
								</ul>
							</div>
							<a class="prev" href="javascript:void(0)"></a>
							<a class="next" href="javascript:void(0)"></a>
						</div>

						<script type="text/javascript">
							jQuery(".slideBox").slide({
								effect: 'left',
								mainCell: ".bd ul",
								autoPlay: false
							});
						</script>
					</div>
					<div id="arrowBtn" class="arrowStyle">
						<img src="${ctx}/ws_static/img/loadIcon_03.png" />
					</div>

				</div>

				<div class="loadPower hide">
					<div class="loadPower_title">
						<p>电网负荷</p>
						<ul class="pos-a">
							<li class="f-l">
								<img src="${ctx}/ws_static/img/loadIcon_01.png" alt="img" width="55" height="55">
							</li>

							<li class="f-l">
								<img src="${ctx}/ws_static/img/loadIcon_03.png" alt="img" width="55" height="55" class="close_load">
							</li>
						</ul>
					</div>
					<div class="load_body" id="load_body" _echarts_instance_="ec_1536250079816" style="
                -webkit-tap-highlight-color: transparent; user-select: none; position: relative;top: 35px;left: 20px;">
						<div style="position: relative; overflow: hidden; width: 770px; height: 300px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
							<canvas data-zr-dom-id="zr_0" width="770" height="300" style="position: absolute; left: 0px; top: 0px; width: 770px; height: 300px;
                         user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
						</div>
						<div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999;
                    transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51);
                    border-radius: 4px; color: rgb(255, 255, 255); font: 14px/21px &quot;Microsoft YaHei&quot; padding: 5px; left: 567px; top: 156px;">
							<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#c23531;"></span>负荷: 710<br>
							<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#2f4554;"></span>总出力: 10<br>
							<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#61a0a8;"></span>新能源: 20<br>
							<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#d48265;"></span>总受点: 220</div>
					</div>
					<div class="load_num">
						<ul>
							<!--<li class="f-l">-->
							<!--<p>-->
							<!--<img src="${ctx}/ws_static/img/ooo_03.png" alt="img" width="15" height="15">-->
							<!--<span>负荷</span>-->
							<!--</p>-->
							<!--<span id="FuHeCount" style="display: inline; margin-left: 10px;">2150</span>-->
							<!--</li>-->
							<!--<li class="f-l">-->
							<!--<p>-->
							<!--<img src="${ctx}/ws_static/img/ooo%20(4).png" alt="img" width="15" height="15">-->
							<!--<span>总出力</span>-->
							<!--</p>-->
							<!--<p>2150</p>-->
							<!--</li>-->
							<!--<li class="f-l">-->
							<!--<p>-->
							<!--<img src="${ctx}/ws_static/img/ooo%20(1).png" alt="img" width="15" height="15">-->
							<!--<span>新能源</span>-->
							<!--</p>-->
							<!--<p>2150</p>-->
							<!--</li>-->
							<!--<li class="f-l">-->
							<!--<p>-->
							<!--<img src="${ctx}/ws_static/img/ooo%20(2).png" alt="img" width="15" height="15">-->
							<!--<span>总受点</span>-->
							<!--</p>-->
							<!--<p>2150</p>-->
							<!--</li>-->
						</ul>
					</div>
				</div>
				<div class="TongDaoJianPaiPage hide" id="TongDaoJianPaiPage">
					<div class="TongDaoJianPaiPageAction" title="返回" id="goBackTongDao"></div>
					<div class="TongDaoJianPaiPageAction" title="关闭" id="closeTongDao"></div>
					<iframe id="TongDaoJianPaiPageIframe" width="100%" height="96.1%" style="margin-top: 3%" frameborder="0"></iframe>
				</div>
				<iframe id="iframe1" src="" style="width: 100%;height: 96.5%; border: none;"></iframe>

			</div>

			<!--右边框体开始-->
			<div class="right-box overflow_h f-r">
				<div class="bg_box pos-r rMainList">
					<div class="rMainListBox">
						<!-- <ul class="title_list overflow_h">
                        <li class="active_list">全网状态</li>
                        <li style="left: -18px;">智慧监控</li>
                        <li style="left:-55px">业务指挥</li>
                        <li style="left:-92px">资源监控</li>
                        <li style="left:-92px">通信保障</li>
                        <li style="left:-92px">调控指挥</li>
                    </ul> -->
						<ul class="overflow_h" id="firstTab">
							<li id="qwzt" class="navTabFirst navTabCur" onClick="javascript:rNavMain(this);changeMap('QWZT')">全网状态</li>
							<li id="zhjk" onClick="javascript:rNavMain(this);changeMap('ZHJK')">智慧监控</li>
							<li id="ywzh" onClick="javascript:rNavMain(this);changeMap('YWZH')">业务指挥</li>
							<li id="zyjk" onClick="javascript:rNavMain(this);changeMap('ZYJK')">资源监控</li>
							<li style="display: none;">通信保障</li>
							<li style="display: none;">调控指挥</li>
							<li id="ftfx" onClick="javascript:rNavMain(this);changeMap('FTFX')">防台防汛</li>
						</ul>
					</div>
					<div class="clearfix"></div>
					<div class="tab_box">
						<!-- 全网状态 -->
						<div class="tab_box__item" id="zhuangtai">
							<ul class="status_tab status_tab1">
								<li id="yxzt" class="active_tab" onclick="changeMap('YXZT')">运行状态</li>
								<li id="gzjc" onclick="clickGzjcTab();changeMap('GZJC')">故障监测</li>
								<li id="pwyx" onclick="clickPWYX();changeMap('PWYX');">配网运行</li>
								<li id="gdfw" onclick="clickGDFW();changeMap('GDFW');">供电服务</li>
								<p id="gzjc1" onclick="clickGzjcTab();" style="display: none;">故障监测</p>
								<p id="pwyx1" onclick="clickPWYX();" style="display: none;">配网运行</p>
								<p id="gdfw1" onclick="clickGDFW();" style="display: none;">供电服务</p>
							</ul>

							<div class="run_box" style="position: relative;">
								<p class="float-right time_line setNowTime">
									(0:00 -- 当前)
								</p>
								<div class="clearfix"></div>
								<img style="position: absolute;left: 645px;top: 98px;cursor: pointer;" src="${ctx}/ws_static/img/icon_tst.png" id="tst_id_kkxfx">

								<div class="monitor_box">
									<div class="monitor_title">
										<p>
											电网可靠性
										</p>
									</div>
									<div class="tip2" onclick="javascript:Popup.show('#popup-dwkkxfx');yxztfx_dwkkx_init();" style="right: 0;top:0;">
										<!--<div class="tip2" id='gzjc_fx' onclick="gzjc_fbtj_init()" >-->
									</div>
									<div class="monitor_body">
										<div id="liquidFill"></div>
									</div>

								</div>
								<div class="monitor_box">
									<div class="monitor_title">
										<p>
											电压合格率
										</p>
									</div>
									<div class="monitor_body">
										<div class="qualified">
											<p class='float-left'>A类</p>
											<div id="qualified1" class="float-left"></div>
										</div>
										<div class="qualified">
											<p class='float-left'>B类</p>
											<div id="qualified2" class="float-left"></div>
										</div>
										<div class="qualified">
											<p class='float-left'>C类</p>
											<div id="qualified3" class="float-left"></div>
										</div>
										<div class="qualified">
											<p class='float-left'>D类</p>
											<div id="qualified4" class="float-left"></div>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>

								<div class="monitor_box monitor_box_full" style="margin-top: 120px;">
									<div class="monitor_title">
										<p id="dnzl_title" class="potClick">
											电能质量
											<img src="${ctx}/ws_static/img/canclick.png" alt="">
										</p>
									</div>
									<div class="monitor_body">
										<div id="quality" class="quality"></div>
										<ul class="quality_titlt">
											<li class="quality_titlt_1">系统频率</li>
											<li class="quality_titlt_2">电压偏差</li>
											<li class="quality_titlt_3">三相不平衡度</li>
											<li class="quality_titlt_4">电压闪变</li>
											<li class="quality_titlt_5">电压总谐波畸变率</li>
										</ul>
										<ul class="quality_titlt">
											<li class="quality_titlt_1 quality_title_Img">
												<img src="${ctx}/ws_static/img/icon_fre.png" alt="">
											</li>
											<li class="quality_titlt_2 quality_title_Img">
												<img src="${ctx}/ws_static/img/icon_differ.png" alt="">
											</li>
											<li class="quality_titlt_3 quality_title_Img">
												<img src="${ctx}/ws_static/img/icon_unbalance.png" alt="">
											</li>
											<li class="quality_titlt_4 quality_title_Img">
												<img src="${ctx}/ws_static/img/icon_flash.png" alt="">
											</li>
											<li class="quality_titlt_5 quality_title_Img">
												<img src="${ctx}/ws_static/img/icon_waveform.png" alt="">
											</li>
										</ul>
									</div>
								</div>

								<div class="clearfix"></div>

								<div class="monitor_box" style="position: relative; overflow: visible; margin-top: 120px;">
									<div style="
                                        color: #999;
                                        /* float: right; */
                                        position: absolute;
                                        right: 66px;
                                        top: -50px;
                                    ">
										<span style="font-size: 24px;color:#b7e7f3;">来源：PMS2.0</span>
									</div>
									<div class="monitor_title">
										<p>
											设备状态
										</p>
									</div>
									<div class="monitor_body">
										<div id="device_status" class="device_status"></div>
									</div>
								</div>
								<div class="monitor_box" style="margin-top: 120px;">
									<div class="monitor_title">
										<p class="potClick" onclick="tdjpUrl()">
											通道监拍
										</p>
									</div>
									<div class="monitor_body">
										<div class="aisle">
											<div class="aisle_text f-l">
												500kV
											</div>
											<div class="aisle_line f-l pos-r">
												<div class="bottom_line"></div>
												<div class="top_line pos-r"></div>
											</div>
											<div id="tongdao_500" class="aisle_num f-r potClick qwzt-yxzt-tdjp">
												0
											</div>
										</div>
										<div class="aisle">
											<div class="aisle_text f-l">
												220kV
											</div>
											<div class="aisle_line f-l pos-r">
												<div class="bottom_line"></div>
												<div class="top_line pos-r"></div>
											</div>
											<div id="tongdao_220" class="aisle_num f-r potClick qwzt-yxzt-tdjp">
												0
											</div>
										</div>
										<div class="aisle">
											<div class="aisle_text f-l">
												110kV
											</div>
											<div class="aisle_line f-l pos-r">
												<div class="bottom_line"></div>
												<div class="top_line pos-r"></div>
											</div>
											<div id="tongdao_110" class="aisle_num f-r potClick qwzt-yxzt-tdjp">
												0
											</div>
										</div>
										<div class="aisle">
											<div class="aisle_text f-l">
												35kV
											</div>
											<div class="aisle_line f-l pos-r">
												<div class="bottom_line"></div>
												<div class="top_line pos-r"></div>
											</div>
											<div id="tongdao_35" class="aisle_num f-r potClick qwzt-yxzt-tdjp">
												0
											</div>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="monitor_box monitor_box_full" style="position: relative; overflow: visible; ">

								</div>
								<div class="clearfix"></div>
								<!--轴开始-->
								<div class="monitor_box monitor_box_full" style="position: relative; overflow: visible; margin-top: -230px;">
									<!--<div class="monitor_title">
        <p> 台区监测 </p>
      </div>-->
									<div class="monitor_body">
										<!--<div class="monitor_top">
          <ul>
            <li> <span> <img src="${ctx}/ws_static/img/topIcon%20(3).png" alt="Icon" width="36" height="36"> </span> <span>过载</span> <span class="monitor_top_num">0</span> </li>
            <li> <span> <img src="${ctx}/ws_static/img/topIcon%20(2).png" alt="Icon" width="36" height="36"> </span> <span>重载</span> <span class="monitor_top_num">8</span> </li>
            <li> <span> <img src="${ctx}/ws_static/img/topIcon%20(4).png" alt="Icon" width="36" height="36"> </span> <span>低电压</span> <span class="monitor_top_num">0</span> </li>
            <li> <span> <img src="${ctx}/ws_static/img/topIcon%20(1).png" alt="Icon" width="36" height="36"> </span> <span>三相不平衡</span> <span class="monitor_top_num">20</span> </li>
          </ul>
        </div>-->
										<div class="monitor_bottom">
											<ul id="areaUl">
												<li class="active_btn">
													<p>全市</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>核心</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>浦东</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>市区</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>市北</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>市南</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>嘉定</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>松江</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>青浦</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>奉贤</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>金山</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>崇明</p>
													<div></div>
												</li>
												<li class="info_btn">
													<p>长兴</p>
													<div></div>
												</li>
											</ul>
										</div>
										<div class="bg_monitor pos-a"></div>
									</div>
								</div>
								<!--轴结束-->

							</div>

							<!-- 故障监测 -->
							<div class="run_box hide run_box_gzjc" id="right_runbox_gzjc">
								<div class="runbox-block">
									<div class="runbox-block__title">
										<em>当日监测</em>
										<span class="tip">来源：SCADA<br>用电信息采集</span>
										<div class="tip2" onclick="javascript:Popup.show('#popup-gzjcfx');gzjc_fbtj_init()">

										</div>
										<img style="position: absolute;right: -140px;top: -20px;cursor: pointer;" src="${ctx}/ws_static/img/icon_tst.png" id='tst_id_gzjc' />

									</div>
									<!-- myselector -->
									<dl class="myselector square_move">
										<dt id="areaGZJC">上海</dt>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">上海</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">核心</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">浦东</dd>

										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">市区</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">市北</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">市南</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">嘉定</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">松江</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">青浦</dd>

										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">奉贤</dd>

										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">金山</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">崇明</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_tztj_ssjc($(this).html())">长兴</dd>
									</dl>
									<!-- 实时监测 -->
									<div class="runbox-block__content runbox_gzjc_ssjc">

										<div class="subTitle">
											<i class="subIco subIco-ssjc"></i> 故障监测
										</div>
										<div class="total">
											<em>总数</em>
											<span id="gzjk_ssjc_tval">0</span>
										</div>
										<div class="chart1">
											<div class="shishijiance1Leng">
												<span class="a1" style='background-color: #0069c7;'></span>
												<!--<img src="${ctx}/ws_static/img/j5.png">--><span style="color: #b7e7f3;font-size: 24px;">SCADA</span>
												<span class="a2" style='background-color: #13a7e4;'></span>
												<!--<img src="${ctx}/ws_static/img/j6.png">--><span style="color: #b7e7f3;font-size: 24px;">配电自动化</span>
												<span class="a3" style='background-color: #15e9d8;'></span>
												<!--<img src="${ctx}/ws_static/img/j7.png">--><span style="color: #b7e7f3;font-size: 24px;">用电信息采集</span>
												<span class="a4" style='background-color: #6ae0f3;'></span>
												<!--<img src="${ctx}/ws_static/img/j8.png">--><span style="color: #b7e7f3;font-size: 24px;">其他</span>
											</div>
											<div class='chululeng'>
												<span class="chu1" style='background-color: #e3bc31;'></span>
												<!--<img src="${ctx}/ws_static/img/j5.png">--><span style="color: #b7e7f3;font-size: 24px;margin-right: 10px;">处理中</span>
												<span class="chu2" style='background-color: #00da5b;'></span>
												<!--<img src="${ctx}/ws_static/img/j6.png">--><span style="color: #b7e7f3;font-size: 24px;">已处理</span>
											</div>
											<div class='chulizhanbi'>
												<div class='chuli_item_bar'>
													<span id="chuli_110"></span>
												</div>
												<div class='chuli_item_bar'>
													<span id="chuli_35"></span>
												</div>
												<div class='chuli_item_bar'>
													<span id="chuli_10"></span>
												</div>
												<div class='chuli_item_bar'>
													<span id="chuli_04"></span>
												</div>

											</div>
											<div id="chart_110kv_pie" style="width: 230px; height: 300px; float: left"></div>
											<div id="chart_35kv_pie" style="width: 230px; height: 300px; float: left"></div>
											<div id="chart_10kv_pie" style="width: 230px; height: 300px; float: left"></div>
											<div id="chart_04kv_pie" style="width: 230px; height: 300px; float: left"></div>
										</div>
										<div class="textjiance">
											<span class="jctext1">110kV及以上</span>
											<span class="jctext2">35kV</span>
											<span class="jctext3">10kV</span>
											<span class="jctext4">0.4kV</span>
										</div>
										<div class="chart2">
											<div class="subTitle">
												<i class="subIco subIco-ssjc" style="background: url(${ctx}/ws_static/img/icon_tz.png) no-repeat;"></i> 跳闸监测
											</div>

											<div class="chart2-item">
												<span title="直接跳闸" id="gzjk_zjtz_val">0</span>
												<div class="chart2-item__bar">
													<span style="width:0%;" id="gzjk_zjtz_bar"></span>
												</div>
											</div>
											<div class="chart2-item">
												<span title="重合失败" id="gzjk_chsb_val">0</span>
												<div class="chart2-item__bar">
													<span style="width:0%;" id="gzjk_chsb_bar"></span>
												</div>
											</div>
											<div class="chart2-item">
												<span title="重合成功" id="gzjk_chcg_val">0</span>
												<div class="chart2-item__bar">
													<span style="width:0%;" id="gzjk_chcg_bar"></span>
												</div>
											</div>
										</div>
									</div>
									<!-- 故障分布 -->
									<div class="runbox-block__content runbox_gzjc_gzfb">
										<div class="subTitle">
											<i class="subIco subIco-gzfb"></i> 故障分布
										</div>
										<div class="chart1" style="position: relative;top: 0;">
											<p class="move_after" style="display: none;"></p>
											<div id="chart_gzfb_bar" style="width: 1200px; height: 440px; "></div>

										</div>
									</div>
									<!-- 主动工单 -->
									<div class="runbox-block__content runbox_gzjc_zdgd">
										<div class="subTitle">
											<i class="subIco subIco-zdgd"></i> 主动工单
										</div>
										<div class="legend">
											<span class="legend__item"><i style="background:#5fb4e5;"></i> 下达时间</span>
											<span class="legend__item"><i style="background:#009bdf;"></i> 在途时间</span>
											<span class="legend__item"><i style="background:#0071ce;"></i> 处置时间</span>
										</div>
										<div class="tables">
											<div class="tables-item tables-item-1">
												<div class="tables-item__head point" id="zdgd_stat_num1"><i></i> 未到达(0)</div>
												<div class="tables-item__list" id="zdgd_stat_list1"></div>
											</div>
											<div class="tables-item tables-item-2">
												<div class="tables-item__head point" id="zdgd_stat_num2"><i></i> 进行中(0)</div>
												<div class="tables-item__list" id="zdgd_stat_list2"></div>
											</div>
											<div class="tables-item tables-item-3">
												<div class="tables-item__head point" id="zdgd_stat_num3"><i></i> 已完成(0)</div>
												<div class="tables-item__list" id="zdgd_stat_list3"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- //故障监测 -->
							<!-- 配网运行 -->
							<div class="run_box hide run_box_pwyx" id="right_runbox_pwyx">
								<div class="runbox-block">
									<div class="runbox-block__title">
										<em>台区监测</em>
										<span class="tip" style="color:#b7e7f3;">来源：用电信息采集</span>
										<div class="tip2" onclick="javascript:Popup.show('#popup-tqjcfx');tqjcfx_init();">

										</div>
										<img style="position: absolute;right: -140px;top: -20px;cursor: pointer;" src="${ctx}/ws_static/img/icon_tst.png" id='tst_id_pwyx' />
									</div>
									<!-- myselector -->
									<dl class="myselector myselector1 double_move" style="z-index: 100;">
										<dt id="areaPWYX">上海</dt>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="8a812897493378a00149567740676661">上海</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="JBH-HXQ">核心</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06">浦东</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03">市区</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04">市北</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05">市南</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08">嘉定</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A">松江</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09">青浦</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07">奉贤</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B">金山</dd>
										<!--<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D">供电</dd>-->
										<!--<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50">检修</dd>-->
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ">崇明</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getPeiWangYunXingDataByCompanyId($(this).attr('id'))" id="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ">长兴</dd>
									</dl>

									<!-- myselector -->
									<dl class="myselector myselector2">
										<dt style="font-weight: normal;background: rgba(0,0,0,0);">重载</dt>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getYiChangFenBu($(this).attr('id'))" id="ZZ">重载</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getYiChangFenBu($(this).attr('id'))" id="GZ">过载</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getYiChangFenBu($(this).attr('id'))" id="DDY">低电压</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());getYiChangFenBu($(this).attr('id'))" id="SXBPH">三相不平衡</dd>
									</dl>
									<!-- 异常监测 -->
									<div class="runbox-block__content runbox_pwyx_ycjc">
										<div class="chart-jiance-title">
											<span class="c0"></span><span style="color: #b7e7f3;font-size: 24px;margin-right:14px;">异常</span>
											<span class="c1"></span><span style="color: #b7e7f3;font-size: 24px;margin-right:14px;">连续3天</span>
											<span class="c2"></span><span style="color: #b7e7f3;font-size: 24px;margin-right:14px;">累计7天</span>
											<!--<img src="${ctx}/ws_static/img/peibian-7.png" >&nbsp;&nbsp;连续3天&nbsp;&nbsp;<img src="${ctx}/ws_static/img/ganbian-3.png">&nbsp;&nbsp;累计7天-->
										</div>
										<div class="subTitle">
											<i class="subIco subIco-ycjc"></i> 异常监测

											<span class="item item-1" style='margin-left:10px;color:#91e6ff'><i></i><em style='font-style: normal;margin-left:20px;'>台区总数</em> <span id="taiqu_tqzs" style='font-size: 44px;'>122891</span></span>
										</div>
										<div class="total">

											<div class="item item-2"><i></i><em>监测率</em> <span id="taiqu_jcl">0%</span></div>
										</div>

										<div class="chart1-yichangjiance">
											<div class="chart1-1" id="tqjc-guozai"></div>
											<div class="chart1-1" id="tqjc-chongzai"></div>
											<div class="chart1-1" id="tqjc-didianya"></div>
											<div class="chart1-1" id="tqjc-bupingheng"></div>

											<ul class="control_text" style="position: relative;">
												<li class="control4" style="width: 20%;margin-left: 60px;">过载</li>
												<li class="control4" style="width: 20%;margin-left: 44px;">重载</li>
												<li class="control4" style="width: 20%;margin-left: 48px;">低电压</li>
												<li class="control5" style="width: 20%;margin-left: 8px;">三相不平衡</li>
												<span id='guozai-bi' style='position: absolute;left:90px;top:75px;'>0‰</span>
												<span id='chongzai-bi' style='position: absolute;left:290px;top:75px;'>0‰</span>
												<span id='didianya-bi' style='position: absolute;left:490px;top:75px;'>0‰</span>
												<span id='bupingheng-bi' style='position: absolute;left:690px;top:75px;'>0‰</span>
											</ul>

										</div>
									</div>
									<!-- 异常分布 -->
									<div class="runbox-block__content runbox_pwyx_ycfb">
										<div class="subTitle">
											<i class="subIco subIco-ycfb"></i> 异常分布
										</div>

										<div class="chart1 move_section">
											<div class="chart-title">
												<span class="c1" style='background-color: rgb(27, 207, 227);'></span><span style="color: #b7e7f3;font-size: 24px;">杆变</span>
												<span class="c2" style='background-color: #1490e7;'></span><span style="color: #b7e7f3;font-size: 24px;">配变</span>
												<!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="${ctx}/ws_static/img/peibian-7.png" >&nbsp;&nbsp;杆变&nbsp;&nbsp;<img src="${ctx}/ws_static/img/ganbian-3.png">&nbsp;&nbsp;配变-->
											</div>

											<div style="height: 60px; width:1200px;"></div>

											<div class="control4" id="yichangfenbu" style="height: 480px; width:1200px;"></div>

											<div class="control4" id="yichangfenbu1" style="height: 480px; width:1200px"></div>
											<p class="move_section_bar" style="display: none;"></p>
										</div>
									</div>
								</div>

							</div>
							<!-- //配网运行 -->
							<!-- 供电服务 -->
							<div class="run_box hide run_box_gdfw" id="right_runbox_gdfw">
								<div class="runbox-block">
									<div class="runbox-block__title">
										<em>配网抢修</em>
										<span class="tip" style="color:#b7e7f3;">来源：PMS2.0</span>
										<div class="tip2" onclick="javascript:Popup.show('#popup-pwqxfx');clickTanChu()">

										</div>
										<img style="position: absolute;right: -140px;top: -20px;cursor: pointer;" src="${ctx}/ws_static/img/icon_tst.png" id='tst_id_gdfw' />
									</div>
									<!-- myselector -->
									<dl class="myselector myselector1">
										<dt id="areaPWQX">上海</dt>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">上海</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">核心</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">市区</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">市北</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">市南</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">浦东</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">奉贤</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">嘉定</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">青浦</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">松江</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">金山</dd>
										<!--<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">供电</dd>-->
										<!--<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">检修</dd>-->
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">崇明</dd>
										<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_gdfw_pwqx($(this).html())">长兴</dd>
									</dl>
									<!-- 实时监测 -->
									<div class="runbox-block__content runbox_gdfw_ssjc">
										<div class="subTitle">
											<i class="subIco subIco-ssjc"></i> 实时监测
										</div>

										<div class="chart1">

											<div id="shishijiance1" class="shishijiance1">
												<div style="position: absolute;left:10px;top:-41px;font-size: 28px;color: #b7e7f3;">用户报修</div>
												<div class="p95598">95598:<span id="val95598" style="font-size: 30px">0</span></div>
												<div class="p12345">12345:<span id="val12345" style="font-size: 30px">0</span></div>
											</div>
											<div class="shishijiance1Leng">
												<span class="b1"></span>
												<!--<img src="${ctx}/ws_static/img/j1.png"/>--><span style="color: #b7e7f3;font-size: 24px;">95598</span>
												<span class="b2"></span>
												<!--<img src="${ctx}/ws_static/img/j2.png"/>--><span style="color: #b7e7f3;font-size: 24px;">12345</span>
												<span class="b3"></span>
												<!--<img src="${ctx}/ws_static/img/j4.png"/>--><span style="color: #b7e7f3;font-size: 24px;">处理中</span>
												<span class="b4"></span>
												<!--<img src="${ctx}/ws_static/img/j3.png"/>--><span style="color: #b7e7f3;font-size: 24px;">已处理</span>
												<span class="gz1" style="color: #b7e7f3;font-size: 28px;">电力故障</span>
												<span class="gz2" style="color: #b7e7f3;font-size: 28px;">非电力故障</span>
												<!--<span class="gz3">举报</span>-->
												<!--<span class="gz4">投诉</span>-->
											</div>
											<!--<div class="shenlan"><img src="${ctx}/ws_static/img/shenlan.png"/><span>12345:</span><p id="val12345">0</p></div>
                                    	<div class="qianlan"><img src="${ctx}/ws_static/img/qianlan.png"/><span>95598:</span><p id="val95598">0</p></div>-->
											<div id='yonghu' style='width:220px;height:220px;position: absolute;left:70px;top:48px;'></div>
											<div class="shishijiance1-detail">
												<div class="biao1" id="shishijiance1-biao1"></div>
												<div class="biao2" id="shishijiance1-biao2"></div>
												<div class="biao2" id="shishijiance1-biao3"></div>
												<div class="biao2" id="shishijiance1-biao4"></div>
											</div>
										</div>
									</div>
									<!-- 抢修效率 -->
									<div class="runbox-block__content runbox_gdfw_qxxl">
										<div class="subTitle">
											<i class="subIco subIco-qxxl"></i> 抢修效率
										</div>
										<div class="chart2">

											<div class="pjddsj95598" id="pjddsj95598"></div>
											<div class="pjddsj12345" id="pjddsj12345"></div>
											<div class="l1">
												<!--<img src="${ctx}/ws_static/img/qianlan.png" />-->
												<span>平均到达时间</span>
												<p>/分钟</p>
											</div>
											<div class="l2">
												<!--<img src="${ctx}/ws_static/img/shenlan.png" />-->
												<span>平均修复时间</span>
												<p>/分钟</p>
											</div>
										</div>
									</div>
									<!-- 抢修分布 -->
									<div class="runbox-block__content runbox_gdfw_qxfb">
										<div class="subTitle">
											<i class="subIco subIco-qxfb"></i> 抢修分布
										</div>
										<div class="chart3-legend">
											<div class="chart3-legend__item dlgz" style="color: #b7e7f3;font-size: 24px;">电力故障</div>
											<div class="chart3-legend__item fdlgz" style="color: #b7e7f3;font-size: 24px;">非电力故障</div>
											<div class="chart3-legend__item clz" style="color: #b7e7f3;font-size: 24px;">处理中</div>
											<div class="chart3-legend__item ycl" style="color: #b7e7f3;font-size: 24px;">已处理</div>
										</div>
										<div class="chart3">
											<div class="chart3__item">
												<span class="chart3__item-zone">核心区</span>
												<span id="heXinQuVal" class="chart3__item-count" data-dlgz="55"></span>

												<div class="chart3__item-progressbar">
													<span id="heXinQu" class="dlgz" style="width:30%"></span>
													<span id="heXinQu1" class="fdlgz" style="width:20%"></span>
												</div>
												<span id="heXinQuYcl" class="chart3__item-count chart3__item-count_fff">0%</span>

												<div class="chart3__item-progressbar">
													<span id="heXinQu3" class="clz" style="width:30%"></span>
													<span id="heXinQu2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">松江</span>
												<span id="songJiangVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="songJiang" class="dlgz" style="width:30%"></span>
													<span id="songJiang1" class="fdlgz" style="width:40%"></span>
												</div>
												<span id="songJiangYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="songJiang3" class="clz" style="width:30%"></span>
													<span id="songJiang2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">浦东</span>
												<span id="puDongVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="puDong" class="dlgz" style="width:50%"></span>
													<span id="puDong1" class="fdlgz" style="width:40%"></span>
												</div>
												<span id="puDongYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="puDong3" class="clz" style="width:30%"></span>
													<span id="puDong2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">青浦</span>
												<span id="qingPuVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="qingPu" class="dlgz" style="width:5%"></span>
													<span id="qingPu1" class="fdlgz" style="width:10%"></span>
												</div>
												<span id="qingPuYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="qingPu3" class="clz" style="width:30%"></span>
													<span id="qingPu2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">市区</span>
												<span id="shiQuVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="shiQu" class="dlgz" style="width:15%"></span>
													<span id="shiQu1" class="fdlgz" style="width:20%"></span>
												</div>
												<span id="shiQuYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="shiQu3" class="clz" style="width:30%"></span>
													<span id="shiQu2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">奉贤</span>
												<span id="fengXianVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="fengXian" class="dlgz" style="width:30%"></span>
													<span id="fengXian1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="fengXianYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="fengXian3" class="clz" style="width:30%"></span>
													<span id="fengXian2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">市北</span>
												<span id="shiBeiVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="shiBei" class="dlgz" style="width:30%"></span>
													<span id="shiBei1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="shiBeiYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="shiBei3" class="clz" style="width:30%"></span>
													<span id="shiBei2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">金山</span>
												<span id="jinShanVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="jinShan" class="dlgz" style="width:30%"></span>
													<span id="jinShan1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="jinShanYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="jinShan3" class="clz" style="width:30%"></span>
													<span id="jinShan2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">市南</span>
												<span id="shiNanVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="shiNan" class="dlgz" style="width:30%"></span>
													<span id="shiNan1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="shiNanYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="shiNan3" class="clz" style="width:30%"></span>
													<span id="shiNan2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">崇明</span>
												<span id="chongMingVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="chongMing" class="dlgz" style="width:30%"></span>
													<span id="chongMing1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="chongMingYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="chongMing3" class="clz" style="width:30%"></span>
													<span id="chongMing2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">嘉定</span>
												<span id="jiaDingVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="jiaDing" class="dlgz" style="width:30%"></span>
													<span id="jiaDing1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="jiaDingYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="jiaDing3" class="clz" style="width:30%"></span>
													<span id="jiaDing2" class="ycl" style="width:20%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone">长兴</span>
												<span id="changXingVal" class="chart3__item-count" data-dlgz="55"></span>
												<div class="chart3__item-progressbar">
													<span id="changXing" class="dlgz" style="width:30%"></span>
													<span id="changXing1" class="fdlgz" style="width:30%"></span>
												</div>
												<span id="changXingYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
												<div class="chart3__item-progressbar">
													<span id="changXing3" class="clz" style="width:30%"></span>
													<span id="changXing2" class="ycl" style="width:20%"></span>
												</div>
											</div>
										</div>
									</div>

								</div>
								<div class="runbox-block">
									<div class="runbox-block__title">
										<em>紧急诉求</em>
										<span class="tip" style="color:#b7e7f3;">来源：CMS</span>
										<!-- <span class="tip2"></span> -->

									</div>
									<div class="runbox-block__content runbox_gdfw_ssjc">
										<div class="subTitle">
											<i class="subIco subIco-ssjc"></i> 实时监测
										</div>
									</div>
									<div class="runbox-block__content runbox_gdfw_jjsq">
										<div class="chart3-legend" style='top:-390px;'>
											<div class="chart3-legend__item dlgz spl" style="color: #b7e7f3;font-size: 24px;">95598</div>
											<div class="chart3-legend__item fdlgz fspl" style="color: #b7e7f3;font-size: 24px;background: url(../img/icon_12345.png);">12345</div>
										</div>
										<div class="chart3" style='top:-220px;left:150px;'>
											<div class="chart3__item" style="width:510px;">
												<span class="chart3__item-zone" style="position: absolute;left:145px;top:-75px;text-align: left;font-size: 28px;width:185px;">举报工单：</span>
												<!--<span id="heXinQuVal" class="chart3__item-count" data-dlgz="55" data-fdlgz="40"> / </span>-->
												<span style="position: absolute;left:408px;top:-70px;text-align: left;width:185px;font-size: 32px;color:#fbbd1a;">0</span>
												<span style="position: absolute;left:158px;top:-22px;text-align: left;font-size: 28px;width:185px;color:#119ddf;">0</span>
												<span style="position: absolute;left:408px;top:-22px;text-align: left;font-size: 28px;width:185px;color:#119ddf;">0</span>
												<div class="chart3__item-progressbar" style="width:300px;">
													<span id="heXinQu" class="dlgz" style="width:50%"></span>
													<span id="heXinQu1" class="fdlgz" style="width:50%"></span>
												</div>
											</div>
											<div class="chart3__item">
												<span class="chart3__item-zone" style="position: absolute;left:613px;top:-75px;font-size: 28px;width:185px;">诉求工单：</span>
												<span style="position: absolute;left:920px;top:-70px;text-align: left;width:185px;font-size: 32px;color:#fbbd1a;">0</span>
												<span style="position: absolute;left:680px;top:-22px;text-align: left;font-size: 28px;width:185px;color:#119ddf;">0</span>
												<span style="position: absolute;left:920px;top:-22px;text-align: left;font-size: 28px;width:185px;color:#119ddf;">0</span>
												<!--<span id="songJiangVal" class="chart3__item-count" data-dlgz="55" data-fdlgz="40"> / </span>-->
												<div class="chart3__item-progressbar" style="width:300px;">
													<span id="juBaoBingTu" class="dlgz" style="width:50%"></span>
													<span id="suQiuBingTu" class="fdlgz" style="width:50%"></span>
												</div>
											</div>
										</div>
										<div class="chart4">
											<!--<div class="juBaoBingTu" id="juBaoBingTu"></div>
                                    	<div class="suQiuBingTu" id="suQiuBingTu"></div>-->

											<div class="jinJiSuQiuZhuZhuangTu" id="jinJiSuQiuZhuZhuangTu"></div>
										</div>
									</div>
									<div class="runbox-block__content runbox_gdfw_qxfb">
										<div class="subTitle suqiufenbu">
											<i class="subIco subIco-qxfb"></i>
											<span>诉求分布</span>
										</div>
									</div>
								</div>
							</div>
							<!-- //供电服务 -->
						</div>
						<!-- 智慧监控 -->
						<div class="tab_box__item" id="jiankong" style="display:none;">
							<ul class="status_tab status_tab3">
								<li class="active_tab" onclick="changeMap('BZZD')">保障重点</li>
								<li onclick="changeMap('ZDGZ')">智能感知</li>
							</ul>
							<div class="ai_box">
								<div class="monitor_box monitor_box_full monitor_box_full1 pos-r Power_box" style="margin-top: -44px">
									<div class="monitor_title">
										<p>保电设备</p>
									</div>

									<div class="monitor_body">
										<div class="equipment_title" style="left: 396px;">
											<div class="f-l">
												<span class="f-l" style="background-color: #0069c7;width: 22px;height: 15px;margin:-3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">500kV</p>
											</div>
											<div class="f-l">
												<span class="f-l" style="background-color: #13a7e4;width: 22px;height: 15px;margin:-3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">220kV</p>
											</div>
											<div class="f-l">
												<span class="f-l" style="background-color: #15e9d8;width: 22px;height: 15px;margin:-3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">110kV</p>
											</div>
											<div class="f-l">
												<span class="f-l" style="background-color: #6ae0f3;width: 22px;height: 15px;margin:-3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">35kV</p>
											</div>
										</div>

										<div class="equipment_title2" style="">

											<div class="f-l">
												<span class="f-l" style="background-color: #099724;width: 22px;height: 15px;margin:3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">开关站</p>
											</div>
											<div class="f-l">
												<span class="f-l" style="background-color: #9bc92e;width: 22px;height: 15px;margin:3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">配电站</p>
											</div>
											<div class="f-l">
												<span class="f-l" style="background-color: #43bb75;width: 22px;height: 15px;margin:3px 10px 0 0;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;line-height: 15px;">箱变</p>
											</div>
										</div>

										<div class="por_equipment" id="por_equipment"></div>
										<!--<div style="top: 122px;position: absolute;margin-left: 203px;">
											<div style="top: 41px;position: relative;right: 2px;">
												<span id="yichang1" style="position: absolute;margin-left: -4px;color: orange;">0</span>
												<img src="${ctx}/ws_static/img/orange.png" alt="img" width="39" height="38">
											</div>
											<div>
												<span id="guzhang1" style="top: 25px;position: absolute;margin-left: -7px;color: red;">0</span>
												<img src="${ctx}/ws_static/img/red.png" alt="img" width="39" height="38">
											</div>
										</div>
										<div style="top: 122px;position: absolute;margin-left: 443px;">
											<div style="top: 41px;position: relative;right: 2px;">
												<span id="yichang2" style="position: absolute;margin-left: -4px;color: orange;">
                                           0</span><img src="${ctx}/ws_static/img/orange.png" alt="img" width="39" height="38">
											</div>
											<div>
												<span id="guzhang2" style="top: 25px;position: absolute;margin-left: -7px;color: red;">0</span>
												<img src="${ctx}/ws_static/img/red.png" alt="img" width="39" height="38">
											</div>
										</div>
										<div style="top: 121px;position: absolute;margin-left: 684px;">
											<div style="top: 41px;position: relative;right: 2px;">
												<span id="yichang3" style="position: absolute; margin-left: -4px;color: orange">0</span><img src="${ctx}/ws_static/img/orange.png" alt="img" width="39" height="38">
											</div>
											<div>
												<span id="guzhang3" style="top: 25px;position: absolute;margin-left: -7px;color: red;">0</span><img src="${ctx}/ws_static/img/red.png" alt="img" width="39" height="38">
											</div>
										</div>
										<div style="top: 121px;position: absolute;margin-left: 924px;">
											<div style="top: 41px;position: relative;right: 2px;">
												<span id="yichang4" style="position: absolute; margin-left: -4px;color: orange">0</span><img src="${ctx}/ws_static/img/orange.png" alt="img" width="39" height="38">
											</div>
											<div>
												<span id="guzhang4" style="top: 25px;position: absolute;margin-left: -7px;color: red;">0</span><img src="${ctx}/ws_static/img/red.png" alt="img" width="39" height="38">
											</div>
										</div>-->
										<!--<ul class="pos-r power_text">
											<li class="">变电</li>
											<li class="">线路</li>
											<li class="">电缆</li>
											<li class="" style="text-indent: 86px;">配电</li>
										</ul>-->
										<div class="equipment_num">
											<div style="display: inline-block;">
												<span class="f-l" style="background-color: #f53f4e;width: 22px;height: 15px;margin-right: 10px;vertical-align: middle;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;">故障</p>
												<p class="f-l"></p>
											</div>
											<div style="display: inline-block;">
												<span class="f-l" style="background-color: #f9bc51;width: 22px;height: 15px;margin-right: 10px;vertical-align: middle;"></span>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;">异常</p>
												<p id="baozhangzhongdian_yichang_num" class="f-l"></p>
											</div>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="monitor_box monitor_box_full monitor_box_full1 pos-r Power_box">
									<div class="monitor_title">
										<p>保电任务</p>
									</div>
									<div class="monitor_body">
										<div class="protectionPower">
											<p id="bd_level1" class="active_p">一级用户（1）</p>
											<p id="bd_level2">二级保电（2）</p>
											<p id="bd_level3">示范区保电（3）</p>
										</div>
										<ul id="baodianljtable" class="power_detailed" style="height: 900px;overflow:hidden;overflow-y: auto ">
											<li class="hide">
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080803)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_one_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">

														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">

													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 33%;margin-left:20px">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080802)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_two_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080802)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_three_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</li>
											<li class="hide">
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080801)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_four_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">中心222</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080802)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_five_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080802)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_six_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</li>
											<li class="hide">
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080802)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_seven_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">中心333</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080803)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_eight_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div class="power_box">
													<p class="power_title power_title_click" onclick="forwardMap(2018080801)">
														<img src="${ctx}/ws_static/img/position.png" alt="img" width="36" height="36" id="Level_nine_img1">
														<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="36" height="36">
														<span class="clickExpandSpan">国家会展中心</span>
														<img src="${ctx}/ws_static/img/power_02.png" alt="img" width="36" height="36">
													</p>
													<div class="power_tab">
														<table>
															<thead>
																<tr>
																	<th style="width: 25%">名称</th>
																	<th style="width: 25%">类型</th>
																	<th style="width: 25%">电压等级</th>
																	<th style="width: 25%">负载率</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>

																		<img src="${ctx}/ws_static/img/warning_02.png" alt="img" width="36" height="36">
																		<span>广博119</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
																<tr>
																	<td>
																		<img src="${ctx}/ws_static/img/warning_03.png" alt="img" width="36" height="36">
																		<span>中博会展</span>
																		<img src="${ctx}/ws_static/img/power_01.png" alt="img" width="36" height="36">
																	</td>
																	<td>用户接入点</td>
																	<td>110V</td>
																	<td>
																		<span>53%</span>
																		<img src="${ctx}/ws_static/img/icon_power.png" alt="img" width="42" height="35">
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="ai_box hide">
								<div class="monitor_box monitor_box_full pos-r" style="margin-top: 90px;height: 1800px">
									<div class="monitor_title">
										<p>智能装置</p>
									</div>
									<div class="monitor_body">
										<ul class="SmartDevice" style="margin: 90px 120px;">
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">1</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_02.png" alt="img" width="120" height="120">
													<p>变电站辅控</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">1</span>
														<span>个电站</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">12</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_01.png" alt="img" width="120" height="120">
													<p>机器人</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">12</span>
														<span>个电站</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">205</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_05.png" alt="img" width="120" height="120">
													<p>视频监视</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">12</span>
														<span>个电站</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">385</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_06.png" alt="img" width="120" height="120">
													<p>通道监拍</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">25</span>
														<span>条架空线路</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">50</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_04.png" alt="img" width="120" height="120">
													<p>智能锁</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">10</span>
														<span>个电站</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">7560</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_10.png" alt="img" width="120" height="120">
													<p>智能表计</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">108</span>
														<span>个台区</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">10</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_03.png" alt="img" width="120" height="120">
													<p>配电站辅控</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">10</span>
														<span>个电站</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">8</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_07.png" alt="img" width="120" height="120">
													<p>电缆振动</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">8</span>
														<span>条电缆</span>
														<span class="cd">24.6</span>
														<span>km</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">660</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_08.png" alt="img" width="120" height="120">
													<p>智能井盖</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">17</span>
														<span>个工井</span>
													</p>
												</div>
											</li>
											<li>
												<div class="overflow_h smartTile">
													<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">
													<span class="f-r">2</span>
												</div>
												<div class="smartBody">
													<img src="${ctx}/ws_static/img/ai_bg_09.png" alt="img" width="120" height="120">
													<p>0.4kV低压监测</p>
												</div>
												<div class="smartNum">
													<p>
														<span>覆盖</span>
														<span class="num">2</span>
														<span>个台区</span>
													</p>
												</div>
											</li>
											<!--
                                        <li>
                                            <div class="overflow_h smartTile">
                                                <!-<img src="${ctx}/ws_static/img/warning_01.png" alt="img" width="35" height="35" class="f-l pos-r">->
                                                <span class="f-r">2</span>
                                            </div>
                                            <div class="smartBody">
                                                <img src="${ctx}/ws_static/img/ai_bg_11.png" alt="img" width="120" height="120">
                                                <p>无人机</p>
                                            </div>
                                            <div class="smartNum">
                                                <!-<p>覆盖8个电站</p>->
                                            </div>
                                        </li> -->
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- 业务指挥 -->
						<div class="tab_box__item" id="zhihui" style="display:none;">
							<ul class="status_tab status_tab4">
								<li class="active_tab">业务指挥</li>
								<li>应急预案</li>
							</ul>

							<div class='zhihui_box'>
								<div class="clearfix"></div>
								<div class="monitor_box monitor_box_full monitor_box_full1 pos-r Power_box power_tx">
									<div class="monitor_title">
										<em style="margin-left:42px;">
                                    巡视任务
                                </em>
										<div class="tip2" onclick="javascript:Popup.show('#popup-ywzh')"></div>
									</div>
									<div class="monitor_body">
										<div class="patrol_box" id="patrol_box"></div>
										<!--<div class="pos-a patrol_view">
										<div class="f-l"></div>
										<span>已巡视数</span>
									</div>-->
										<div id="hasDoneViewDiv">
											<span class="ViewTitle">已巡视</span>
											<div id="hasDonPer">0%</div>

										</div>
										<div id="hasDoneViewCount">
											<span id="hasDoneSpan">0</span>
											<!--<div id="divider"></div>
										<span id="TotalCount">1293</span>-->
										</div>

										<div class="f-r massage_num pos-r">
											<ul>
												<li class="f-l">
													<h3>计划巡视数</h3>
													<p id="JHXSCount">0</p>
												</li>
												<li class="f-l">
													<h3>已发现缺陷数</h3>
													<p id="YFXQXCount">0</p>
												</li>
												<li class="f-l">
													<h3>已发现隐患数</h3>
													<p id="YFXYHCount">0</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<!-- myselector -->
								<dl class="myselector myselector square_move_xunshi" style="position: absolute;right: 70px;top:190px;">
									<dt id='xsfb_dt'>上海</dt>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">上海</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">核心</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">检修</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">浦东</dd>

									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">市区</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">市北</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">市南</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">嘉定</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">松江</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">青浦</dd>

									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">奉贤</dd>

									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">金山</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">崇明</dd>
									<dd onclick="javascript:$(this).parent().find('dt').html($(this).html());get_bdtx_ssjc($(this).html())">长兴</dd>
								</dl>
								<!-- 巡视分布 -->
								<div class='xunshi'>
									<div class="subTitle">
										<i class="subIco subIco-gzfb"></i> 巡视分布
									</div>
									<div class="chart1" style="position: relative;top: 0;">
										<p class="move_after move_after_xunshi" style="display: none;width:80px;left:96px;"></p>
										<div id="chart_xsfb" style="width: 1200px; height: 440px; "></div>

									</div>
								</div>

								<div class="monitor_box monitor_box_full pos-r Power_box task_disposal">
									<div class="monitor_title">
										<p>
											任务处置
										</p>
									</div>
									<div class="monitor_body task_disposal_body" style="margin-left:100px;margin-top: 30px;">
										<div style="height: 64px;position: relative;">
											<p>
												<img src="${ctx}/ws_static/img/icon_logo_01.png" alt="img" width="64" height="64" style="vertical-align: top;">
												<span style="margin-right: 20px;margin-left: 10px;color:#c3f4ff;">异常</span>
												<span id="task_yichang_count" style="color:#c3f4ff;">87</span>
												<div class='detail_txt' style="position: absolute;left:340px;top:-18px;display: flex;font-size: 28px;color:#c3f4ff;">
													<div class="chart2-item" style="height:64px;margin-right: 40px;width: 220px;line-height: 60px;">
														<div style="display: flex;justify-content: space-between;">
															<span>已下达</span><i style="color: rgba(0,155,223,0.8);font-size: 48px;margin-left: 60px;" id="yxd">0</i>
														</div>
														<div class="chart2-item__bar" style="width: 100%;height: 8px;background: rgba(188, 188, 188, 0.1);">
															<span style="width:0%;display: block;height: 100%;background: #009bdf;"></span>
														</div>
													</div>
													<div class="chart2-item" style="height:64px;margin-right: 40px;width: 220px;line-height: 60px;">
														<div style="display: flex;justify-content: space-between;">
															<span>处理中</span><i style="color: rgba(0,155,223,0.8);font-size: 48px;margin-left: 60px;" id="clz">0</i>
														</div>
														<div class="chart2-item__bar" style="width: 100%;height: 8px;background: rgba(188, 188, 188, 0.1);">
															<span style="width:0%;display: block;height: 100%;background: #009bdf;"></span>
														</div>
													</div>
													<div class="chart2-item" style="height:64px;margin-right: 40px;width: 220px;line-height: 60px;">
														<div style="display: flex;justify-content: space-between;">
															<span>已完成</span><i style="color: rgba(0,155,223,0.8);font-size: 48px;margin-left: 60px;" id="ywc">0</i>
														</div>
														<div class="chart2-item__bar" style="width: 100%;height: 8px;background: rgba(188, 188, 188, 0.1);">
															<span style="width:0%;display: block;height: 100%;background: #009bdf;"></span>
														</div>
													</div>
												</div>
											</p>

											<!--<div class="f-l abnormal" id="abnormal"></div>-->
										</div>

										<div style="height: 64px;position: relative;">
											<p>
												<img src="${ctx}/ws_static/img/icon_logo_02.png" alt="img" width="64" height="64" style="vertical-align: top;">
												<span style="margin-right: 20px;margin-left: 10px;color:#c3f4ff;">紧急</span>
												<span id="task_jinji_count" style="color:#c3f4ff;">87</span>
												<div class='detail_txt' style="position: absolute;left:340px;top:-18px;display: flex;font-size: 28px;color:#c3f4ff;">
													<div class="chart2-item" style="height:64px;margin-right: 40px;width: 220px;line-height: 60px;">
														<div style="display: flex;justify-content: space-between;">
															<span>已下达</span><i style="color: rgba(0,155,223,0.8);font-size: 48px;margin-left: 60px;" id="yxd1">0</i>
														</div>
														<div class="chart2-item__bar" style="width: 100%;height: 8px;background: rgba(188, 188, 188, 0.1);">
															<span style="width:0%;display: block;height: 100%;background: #009bdf;"></span>
														</div>
													</div>
													<div class="chart2-item" style="height:64px;margin-right: 40px;width: 220px;line-height: 60px;">
														<div style="display: flex;justify-content: space-between;">
															<span>处理中</span><i style="color: rgba(0,155,223,0.8);font-size: 48px;margin-left: 60px;" id="clz1">0</i>
														</div>
														<div class="chart2-item__bar" style="width: 100%;height: 8px;background: rgba(188, 188, 188, 0.1);">
															<span style="width:0%;display: block;height: 100%;background: #009bdf;"></span>
														</div>
													</div>
													<div class="chart2-item" style="height:64px;margin-right: 40px;width: 220px;line-height: 60px;">
														<div style="display: flex;justify-content: space-between;">
															<span>已完成</span><i style="color: rgba(0,155,223,0.8);font-size: 48px;margin-left: 60px;" id="ywc1">0</i>
														</div>
														<div class="chart2-item__bar" style="width: 100%;height: 8px;background: rgba(188, 188, 188, 0.1);">
															<span style="width:0%;display: block;height: 100%;background: #009bdf;"></span>
														</div>
													</div>
												</div>
											</p>
											<!--<div class="f-l abnormal" id="urgent"></div>-->
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="bottom_box" style="margin-left: 80px;">
									<div class="bottom_title">
										<img src="${ctx}/ws_static/img/bottom_bg.png" alt="img" width="48" height="48">
										<span>任务看板</span>
									</div>
									<div class="legend_box">
										<span class="f-r">
                                                <div class="f-l legend3"></div>
                                                <div class="f-l">处置时间</div>
                                            </span>
										<span class="f-r">
                                                <div class="f-l legend2"></div>
                                                <div class="f-l">在途时间</div>
                                            </span>
										<span class="f-r">
                                                <div class="f-l legend1"></div>
                                                <div class="f-l">下达时间</div>
                                            </span>
									</div>
									<div class="clearfix"></div>
									<ul class="work_list">
										<li id="li_task_jinxingzhong" style=" width: 560px;height: 480px;margin-right: 70px;margin-top: 30px;float: left;">
											<h4 style="width: 10%;">进行中(3)</h4>
											<div style="margin-top: 70px">
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
											</div>
										</li>
										<li id="li_task_yiwancheng" style=" width: 560px;height: 480px;margin-right: 70px; margin-top:30px; float: left;">
											<h4 style="width: 10%;">已完成(3)</h4>
											<div style="margin-top: 70px">
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
												<div class="info_box">
													<div class="f-l">
														<div class="work_line"></div>
														<p>待办任务</p>
														<span>12:30--15:30</span>
													</div>
													<div class="f-l">
														<h3>3h</h3>
														<p>班组</p>
													</div>
												</div>
											</div>
										</li>
									</ul>
									<div class="clearfix"></div>
								</div>
							</div>
							<div class='zhihui_box hide'>
								<ul class='zhihui_ul'>
									<li class='ac_fangan'>
										<span></span>
									</li>
									<li>
										<span></span>
									</li>
									<li>
										<span></span>
									</li>
								</ul>
								<div class='content_fangan'>
									<div class='zhuhui_tab selected'>
										<div style="overflow-y: scroll;height: 1516px;">
											<!--<div class='tep1'>
											<div class='tep_left'>
												<span class='yuan'>1</span>
												<div class="tep_lines"></div>
											</div>
											<div class='tep_right'>
												<dl>
													<dd class='tep_active'><span class='sanjiao'></span>步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
												</dl>
											</div>
										</div>
										<div class='tep1'>
											<div class='tep_left'>
												<span class='yuan'>1</span>
												<div class="tep_lines"></div>
											</div>
											<div class='tep_right'>
												<dl>
													<dd><span class='sanjiao'></span>步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
												</dl>
											</div>
										</div>
										<div class='tep1'>
											<div class='tep_left'>
												<span class='yuan'>1</span>
												<div class="tep_lines"></div>
											</div>
											<div class='tep_right'>
												<dl>
													<dd><span class='sanjiao'></span>步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
												</dl>
											</div>
										</div>
										<div class='tep1'>
											<div class='tep_left'>
												<span class='yuan'>1</span>
												<div class="tep_lines"></div>
											</div>
											<div class='tep_right'>
												<dl>
													<dd><span class='sanjiao'></span>步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
													<dd><span class='border_yuan'></span>步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题步骤条主标题</dd>
												</dl>
											</div>
										</div>-->
										</div>
										<div class='tep_bot'>
											<span id='prev'>上一步</span>
											<span id='next'>下一步</span>
										</div>
									</div>
									<div class='zhuhui_tab'>
										<div style="overflow-y: scroll;height: 1516px;"></div>
										<div class='tep_bot'>
											<span id='prev0'>上一步</span>
											<span id='next0'>下一步</span>
										</div>
									</div>
									<div class='zhuhui_tab'>
										<div style="overflow-y: scroll;height: 1516px;"></div>
										<div class='tep_bot'>
											<span id='prev1'>上一步</span>
											<span id='next1'>下一步</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 资源监控 -->
						<div class="tab_box__item" id="ziyuan" style="display:none;">
							<ul class="status_tab status_tab2">
								<li class="active_tab" onclick="changeMap('DBZY')">当班资源</li>
								<li onclick="changeMap('WZJK')">物资监控</li>
							</ul>
							<div class="first_box">
								<div class="monitor_box monitor_box_full pos-r Power_box" style="width: 1300px">
									<div class="monitor_title">
										<p>
											当班资源
										</p>
									</div>
									<div class="clearfix"></div>
									<div class="monitor_body">
										<div class='textdis'>
											<div>
												<span class='dangbanshu'>出动数 <em id="tx0">0</em></span>
												<br/>
												<span class='daimingshu'>待命数 <em id="tx1">0</em></span>
											</div>
											<div>
												<span class='dangbanshu'>出动数 <em id="bz0">0</em></span>
												<br/>
												<span class='daimingshu'>待命数 <em id="bz1">0</em></span>
											</div>
											<div class='lasttext'>
												<span class='dangbanshu'>出动数 <em id="hq0">0</em></span>
												<br/>
												<span class='daimingshu'>待命数 <em id="hq1">0</em></span>
											</div>

										</div>
										<div class="on_duty on_duty_r1 f-l" id="on_duty_r1"></div>
										<div class="on_duty on_duty_r1 f-l" id="on_duty_r2"></div>
										<!--<div class="on_duty on_duty_r1 f-l" id="on_duty_r3"></div>-->
										<div class="on_duty on_duty_r1 f-l" id="on_duty_r4"></div>
										<div class="clearfix"></div>
										<div class="pos-r ziYuan_box">
											<div class="pos-a d1">
												<p></p>
												<p id="dangban_tx_all">0</p>
											</div>
											<div class="pos-a d2">
												<p></p>
												<p id="dangban_jx_all">0</p>
											</div>
											<!--<div class="pos-a d3">
												<p></p>
												<p id="dangban_qx_all">0</p>
											</div>-->
											<div class="pos-a d4">
												<p></p>
												<p id="dangban_hq_all">0</p>
											</div>
										</div>

										<div class="pos-r tuLi_box">
											<div>
												<div class="f-l color_box1 pos-r"></div>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;">出动数</p>
											</div>
											<div>
												<div class="f-l color_box2 pos-r"></div>
												<p class="f-l" style="color: #b7e7f3;font-size: 24px;">待命数</p>
											</div>
											<div>
												<div class="f-l color_box3 pos-r"></div>
												<p class="f-l" style="margin-left: -8px;color: #b7e7f3;font-size: 24px;">后备</p>
											</div>
										</div>
										<div class="pos-r right_text" style="height:340px;">
											<div id='dangbanziyuanList'>
												<p class='wzActive' style='list-style: none;padding: 10px;color: rgb(19, 185, 231);margin-bottom: 2px;text-align: center;font-size: 20px;cursor: pointer;'>全部</p>
												<ul id="ul_dbzy_zy">
													<li class="liSelected">全部</li>
													<li>变电</li>
													<li>线路</li>
													<li>电缆</li>
													<li>配电</li>
													<li>自动化</li>
													<li>通信</li>
												</ul>
											</div>
										</div>
										<div class="on_duty_title pos-r">
											<p>特巡</p>
											<p>保障</p>
											<!--<p>抢修</p>-->
											<p>后勤</p>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="monitor_box monitor_box_full pos-r Power_box equipment">
									<div class="monitor_title">
										<p>
											车辆装备
										</p>
									</div>
									<div class="clearfix"></div>
									<div class="monitor_body">
										<div class="equipment_box">
											<ul>
												<li class="pos-r cars1">
													<p class="pos-a">
														<span id="car_yingji_1">0</span>
														<span>/</span>
														<span id="car_yingji_2">6</span>
													</p>
												</li>
												<li class="pos-r cars2">
													<p class="pos-a">
														<span id="car_zhihui_1">0</span>
														<span>/</span>
														<span id="car_zhihui_2">2</span>
													</p>
												</li>
												<!--<li class="pos-r cars3">-->
												<!--<p class="pos-a">-->
												<!--<span id="car_wuzi_1">0</span>-->
												<!--<span>/</span>-->
												<!--<span id="car_wuzi_2">0</span>-->
												<!--</p>-->
												<!--</li>-->
												<li class="pos-r cars4">
													<p class="pos-a">
														<span id="car_qiangxiu_1">0</span>
														<span>/</span>
														<span id="car_qiangxiu_2">19</span>
													</p>
												</li>
												<li class="pos-r cars5">
													<p class="pos-a">
														<span id="car_houqin_1">0</span>
														<span>/</span>
														<span id="car_houqin_2">3</span>
													</p>
												</li>
											</ul>
										</div>
										<div class="clearfix"></div>
										<div class="cars_massage">
											<p class="line_title">
												跨单位、跨省市
											</p>
											<div class="table_box">
												<table id="table_kuodanwei" class="cars_table">
													<thead>
														<tr>
															<th style="width: 348px;height: 56px;">单位名称</th>
															<th style="width: 192px;height: 56px">联系人</th>
															<th style="width: 192px;height: 56px">联系方式</th>
															<th style="width: 570px;height: 56px">资源</th>
														</tr>
													</thead>
													<tbody>
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
														<!--<tr>-->
														<!--<th>江苏省X公司</th>-->
														<!--<th>班组</th>-->
														<!--<th>13777772415</th>-->
														<!--<th>变电队伍1</th>-->
														<!--</tr>-->
													</tbody>
												</table>
											</div>

										</div>
									</div>
								</div>
							</div>
							<div class="first_box hide">
								<div class="monitor_box monitor_box_full pos-r" style="height: 285px;">
									<div class="clearfix"></div>
									<div class="monitor_body">
										<div class="personnel" id="personnel"></div>
										<div class="personnel_img pos-r">
											<p class="img1"><span style="padding-left:48px;font-size: 28px;color:#fff;">物资人员</span></p>

											<p class="img2"><span style="padding-left:68px;font-size: 28px;color:#fff;">物资车辆</span></p>
											<!--<p class="img3"></p>-->
										</div>

										<div class='wuzirenyuan'>
											<div class='shidaogang'><span></span><em>实到岗</em><i id="cannum">--</i></div>
											<br/>
											<div class='weidaogang'><span></span><em>未到岗</em><i id="realnum">--</i></div>
											<br />
										</div>
										<div class='wuzirenyuan wuzichelaing'>
											<div class='shidaogang'><span></span><em>出动</em><i id="busynum">--</i></div>
											<br/>
											<div class='weidaogang'><span></span><em>待命</em><i id="idlenum">--</i></div>
											<br />
										</div>

										<div class="personnel_num pos-r">
											<p id="wuzijiankong_person_num" class="num_1">0</p>
											<p id="wuzijiankong_car_num" class="num_2">0</p>
											<!--<p id="wuzijiankong_supplier_num" class="num_3">0</p>-->
										</div>
										<!--<div class="personnel_title pos-r">
											<p>人员</p>
											<p>车辆</p>
											<p>供应商</p>
										</div>-->
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="monitor_box monitor_box_full pos-r monitor_box_400">
									<div class="monitor_title">
										<p>
											应急库
										</p>
									</div>
									<div class="clearfix"></div>
									<div class="monitor_body">
										<div class="emergency_left overflow_h">
											<ul class="emergency_title pos-r overflow_h emergency_title1" style="padding-left: 126px;">
												<li class="f-l">
													<h3>应急库总数</h3>
												</li>
												<Li class="f-l">
													<p id="emergency_ck_num">4</p>
												</Li>
												<!--<li class="f-l">-->
												<!--<div  class="show_emergency_list">-->
												<!--<img class="pos-r" src='${ctx}/ws_static/img/list_icon.png' alt="" width="43" height="43">-->
												<!--<span class="pos-r">详细列表</span>-->
												<!--</div>-->
												<!--</li>-->
												<li id="emergency_wzdlx_li" class="f-r">
													<h4 class="f-l chosen_h4">应急物资</h4>
													<h4 class="f-l">常备物资</h4>
													<h4 class="f-l">防汛物资</h4>
												</li>
											</ul>
											<div class="clearfix"></div>
											<div class="emergency_list">
												<ul id="emergency_ck_wz_ul">

												</ul>
												<ul class="hide">
													<li>
														<p>0</p>
														<span>开关柜（箱）</span>
													</li>
												</ul>
											</div>
										</div>
										<div class="emergency_right">
											<p class='wzActive' style='list-style: none;padding: 10px;color: rgb(19, 185, 231);margin-bottom: 2px;text-align: center;font-size: 20px;cursor: pointer;'>全部</p>
											<ul id="emergency_ck_ul" style="height:30px;">
												<li>所有仓库</li>
												<!--<li>松江中心仓库</li>-->
												<!--<li>东三里桥仓库</li>-->
												<!--<li>拱极路仓库</li>-->
												<!--<li>闸殷路仓库</li>-->
											</ul>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="monitor_box monitor_box_full pos-r monitor_box_400">
									<div class="monitor_title">
										<p>常备库</p>
									</div>
									<div class="clearfix"></div>
									<div class="monitor_body">
										<div class="emergency_left overflow_h">
											<ul class="emergency_title pos-r overflow_h emergency_title2" style='padding-left: 126px;'>
												<li class="f-l">
													<h3>常备库总数</h3>
												</li>
												<Li class="f-l">
													<p id="stand_ck_num">9</p>
												</Li>
												<li id="stand_wzdlx_li" class="f-r">
													<h4 class="f-l chosen_h4">变电设备</h4>
													<h4 class="f-l">线路设备</h4>
													<h4 class="f-l">防汛物资</h4>
												</li>
											</ul>
											<div class="clearfix"></div>
											<div class="emergency_list emergency_list2">
												<ul id="stand_ck_wz_ul">
													<li>
														<p>0</p>
														<span>开关柜（箱）</span>
													</li>
													<li>
														<p>0</p>
														<span>继电保护及自动装置</span>
													</li>
												</ul>
												<!--<ul class="hide">
													<li>
														<p>0</p>
														<span>开关柜（箱）</span>
													</li>
												</ul>-->
											</div>
										</div>
										<div class="emergency_right">
											<p class='wzActive' style='list-style: none;padding: 10px;color: rgb(19, 185, 231);margin-bottom: 2px;text-align: center;font-size: 20px;cursor: pointer;'>全部</p>
											<ul id="stand_ck_ul" style="height:430px;overflow: scroll;">
												<li>所有仓库</li>
												<!--<li>松江中心仓库</li>-->
												<!--<li>东三里桥仓库</li>-->
												<!--<li>拱极路仓库</li>-->
												<!--<li>闸殷路仓库</li>-->
											</ul>
										</div>
									</div>
								</div>
								<div class="monitor_box monitor_box_full pos-r monitor_box_400">
									<div class="monitor_title">
										<p>供应商</p>
									</div>
									<div class="clearfix"></div>
									<div class="monitor_body">
										<div class="emergency_left overflow_h">
											<ul class="emergency_title pos-r overflow_h emergency_title2" style='padding-left: 126px;'>
												<li class="f-l">
													<h3>供应商总数</h3>
												</li>
												<Li class="f-l">
													<p id="stand_sp_num">9</p>
												</Li>
												<!--<li id="stand_wzdlx_li" class="f-r">
													<h4 class="f-l chosen_h4">变电设备</h4>
													<h4 class="f-l">线路设备</h4>
												</li>-->
											</ul>
											<div class="clearfix"></div>
											<div class="emergency_list emergency_list3">
												<ul id="stand_sp_wz_ul">
													<!--<li>
														<p>0</p>
														<span>开关柜（箱）</span>
													</li>
													<li>
														<p>0</p>
														<span>继电保护及自动装置</span>
													</li>-->
												</ul>
												<!--<ul class="hide">
													<li>
														<p>0</p>
														<span>开关柜（箱）</span>
													</li>
												</ul>-->
											</div>
										</div>
										<div class="emergency_right">
											<p class='wzActive' style='list-style: none;padding: 10px;color: rgb(19, 185, 231);margin-bottom: 2px;text-align: center;font-size: 20px;cursor: pointer;'>全部</p>
											<ul id="stand_sp_ul" style="height:430px;overflow: scroll;">
												<li>全部</li>
												<!--<li>松江中心仓库</li>-->
												<!--<li>东三里桥仓库</li>-->
												<!--<li>拱极路仓库</li>-->
												<!--<li>闸殷路仓库</li>-->
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 通信保障 -->
						<div class="tab_box__item" style="display:none;"></div>
						<!-- 调控指挥 -->
						<div class="tab_box__item" style="display:none;"></div>
						<!--防台防讯-->
						<div class="tab_box__item" id="fangtai" style="display:none;">
							<ul class="status_tab status_tab2 overflow_h1">
								<li class="active_tab">防台防汛</li>
							</ul>
							<!--<div class="yjgj_r">
								<div class="yjgj_title overflow_h1" style="margin-top:20px ;">
									<div class="yjgj_img f-l"></div>
									<p class="f-l"> 天气预报</p>
								</div>
								<div class="yjgj_box">
									<div class="tqyb_box f-l">
										<div class="top">
											<div class="show">
												<img src="${ctx}/ws_static/img/tfyb_1.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/tfyb_2.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/tfyb_3.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/tfyb_4.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/tfyb_5.png" alt="">
											</div>
										</div>
										<div class="bottom">
											<ul>
												<li>
													<img src="${ctx}/ws_static/img/tfyb_1.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/tfyb_2.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/tfyb_3.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/tfyb_4.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/tfyb_5.png" alt="">
												</li>
											</ul>
										</div>
									</div>
									<div class="tqyb_box f-l weiyi">
										<div class="top">
											<div class="show">
												<img src="${ctx}/ws_static/img/ldyb_1.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/ldyb_2.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/ldyb_3.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/ldyb_4.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/ldyb_5.png" alt="">
											</div>
										</div>
										<div class="bottom">
											<ul>
												<li>
													<img src="${ctx}/ws_static/img/ldyb_1.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/ldyb_2.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/ldyb_3.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/ldyb_4.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/ldyb_5.png" alt="">
												</li>
											</ul>
										</div>
									</div>
									<div class="tqyb_box f-l">
										<div class="top">
											<div class="show">
												<img src="${ctx}/ws_static/img/byyb_1.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/byyb_2.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/byyb_3.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/byyb_4.png" alt="">
											</div>
											<div>
												<img src="${ctx}/ws_static/img/byyb_5.png" alt="">
											</div>
										</div>
										<div class="bottom">
											<ul>
												<li>
													<img src="${ctx}/ws_static/img/byyb_1.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/byyb_2.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/byyb_3.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/byyb_4.png" alt="">
												</li>
												<li>
													<img src="${ctx}/ws_static/img/byyb_5.png" alt="">
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>-->
							<div class="yjgj_r">
								<div class="yjgj_title overflow_h1" style="padding-bottom: 0;">
									<div class="yjgj_img f-l"></div>
									<p class="f-l"> 台风预警</p>
									<span style="position: absolute;left: 354px;top: 235px; color: #1ee6fd;font-size: 28px;">来源: 台风监测预警系统</span>
								</div>
								<div class="yjgj_box overflow_h1">
									<div class="yjgj_color" style="margin-left: 0">
										<div class="color_img"></div>
										<p style="text-align: center; font-size:28px; color:#edf8ff;margin: 20px 0 4px 0">红色预警
										</p>
										<p id="red_yjgj" style="font-size: 36px; color:#e94b6b; text-align: center;">0</p>
									</div>
									<div class="yjgj_color">
										<div class="color_img" style="background: url('${ctx}/ws_static/img/yjgj_o.png') no-repeat;"></div>
										<p style="text-align: center; font-size:28px; color:#edf8ff;margin: 20px 0 4px 0">橙色预警
										</p>
										<p id="or_yjgj" style="font-size: 36px; color:#ee8c49; text-align: center;">0</p>
									</div>
									<div class="yjgj_color">
										<div class="color_img" style="background: url('${ctx}/ws_static/img/yjgj_y.png') no-repeat;"></div>
										<p style="text-align: center; font-size:28px; color:#edf8ff;margin: 20px 0 4px 0">黄色预警
										</p>
										<p id="yellow_yjgj" style="font-size: 36px; color:#f7d748; text-align: center;">0</p>
									</div>
									<div class="yjgj_color">
										<div class="color_img" style="background: url('${ctx}/ws_static/img/yjgj_b.png') no-repeat;"></div>
										<p style="text-align: center; font-size:28px; color:#edf8ff;margin: 20px 0 4px 0">蓝色预警
										</p>
										<p id="blue_yjgj" style="font-size: 36px; color:#0874af; text-align: center;">0</p>
									</div>
								</div>
							</div>

							<div class="gzfb_box">
								<div class="subTitle" style="padding-left: 18px;line-height: 40px;">
									<i class="subIco1"></i> 故障监测
									<span style="position: absolute;left: 354px;top: 765px; color: #1ee6fd;font-size: 28px;">来源: PMS2.0</span>
								</div>
								<div class="chart1" style="position: relative;top: 0;">
									<div id="chart_gzjc_bar" style="width: 1200px; height: 580px; "></div>
								</div>
							</div>
							<div class="yjgj_r overflow_h">
								<div class="yjgj_title overflow_h" style="padding-bottom: 0;">
									<div class="yjgj_img f-l"></div>
									<p class="f-l"> 防汛资源</p>
								</div>
								<div style="color: white;font-size: 32px; margin:40px 0 30px 40px ;">
									防汛物资仓库
								</div>
								<div class="f-l" style="line-height: 0;font-size: 28px; width: 330px; margin:20px 0 0 40px;">
									<img src="${ctx}/ws_static/img/zyqk.png"/>
									<div style="width: 258px; height: 65px; display: inline-block;">
										<span>应急库</span>
										<span id="Yinji_fx" style="display: inline-block;margin-left: 40px;">8</span>
										<!--<div style="height: 8px; width:430px; background: #154666;  margin-top: 33px;">
											<div class="f-l" style="display: inline-block; width: 30%; background: #13ade7;height: 8px;"></div>
											<div class="f-l" style="width: 70%; height: 8px;"></div>
										</div>-->
									</div>
								</div>
								<div class="f-l" style="line-height: 0;font-size: 28px; width: 495px; margin:20px 0 0 138px;">
									<img src="${ctx}/ws_static/img/zyqk.png"/>
									<div style="width: 430px; height: 65px; display: inline-block;">
										<span>常备库</span>
										<span id="ChangBei_fx" style="display: inline-block;margin-left: 40px;">8</span>
										<!--<div style="height: 8px; width:430px; background: #154666;  margin-top: 33px;">
											<div class="f-l" style="display: inline-block; width: 30%; background: #13ade7;height: 8px;"></div>
											<div class="f-l" style="width: 70%; height: 8px;"></div>
										</div>-->
									</div>
								</div>
								
							</div>
							<div style=" color: white;font-size: 32px; margin:10px 0 30px 150px ;">
								值班资源情况
							</div>
							<div style="margin-left:160px;width: 180px; height: 65px; display: inline-block;font-size: 28px;">
								<img src="${ctx}/ws_static/img/qizi.png"/>
								<span>队伍</span>
								<span class="f-r duiwu">12</span>
							</div>
							<div style="margin-left:270px;width: 180px; height: 65px; display: inline-block;font-size: 28px;">
								<img src="${ctx}/ws_static/img/personnel1.png"/>
								<span>人员</span>
								<span class="f-r renyuan">8</span>
							</div>
							<div style="margin-left:282px;width: 180px; height: 65px; display: inline-block;font-size: 28px;">
								<img src="${ctx}/ws_static/img/personnel2.png"/>
								<span>车辆</span>
								<span class="f-r cheliang">10</span>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<!--右边框体结束-->
		</div>
		<!-- popup-dwkkxfx 弹框：电网可靠性分析 -->
		<div class="popup popup-normal popup-gzjcfx" id="popup-dwkkxfx">
			<div class="popup-normal__head">
				<span class="popup-normal__close" onclick="javascript:Popup.hide();"></span>
				<span>可靠性分析月报</span>
			</div>
			<div class="popup-normal__main">
				<div class="popup-normal__areaSelect">
					<label><input value='上海' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('上海')" checked><span>上海公司</span></label>
					<label><input value='核心' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('核心')"><span>核心区</span></label>
					<label><input value='浦东' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('浦东')"><span>浦东</span></label>
					<label><input value='市区' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('市区')"><span>市区</span></label>
					<label><input value='市北' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('市北')"><span>市北</span></label>
					<label><input value='市南' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('市南')"><span>市南</span></label>
					<label><input value='嘉定' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('嘉定')"><span>嘉定</span></label>
					<label><input value='松江' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('松江')"><span>松江</span></label>
					<label><input value='青浦' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('青浦')"><span>青浦</span></label>
					<label><input value='奉贤' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('奉贤')"><span>奉贤</span></label>
					<label><input value='金山' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('金山')"><span>金山</span></label>
					<label><input value='崇明' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('崇明')"><span>崇明</span></label>
					<label><input value='长兴' type="radio" name="radio_gzjcfx_area" onclick="yxzt_kkxfx('长兴')"><span>长兴</span></label>
				</div>
				<div class="popup-normal__timeSelect m_gzjzfx">
					<span class="arrUp" onclick="javascript:popup_comp_timeSelect(this, 'up'); dw_fbtj();"></span>
					<span class="arrDown" onclick="javascript:popup_comp_timeSelect(this, 'down'); dw_fbtj();"></span>
					<!--<span class="y" id="l_pop_dwkkx_y"></span>-->
					<dl class="popup-normal__typeSelect popup-normal__yearSelect lys_hover fbtj_year" style="position: absolute;right: 270px;">
						<dt>2019</dt>
						<dd><label><input type="radio" name="radio_fbtj_year" value="2018" onclick="changeYear()"><span>2018</span></label></dd>
						<dd><label><input type="radio" name="radio_fbtj_year" checked value="2019" onclick="changeYear()"><span>2019</span></label></dd>
						<!--<label><input type="radio" name="radio_gzjcfx_year" value="2017" onclick="clickChangeYear()"><span>2017</span></label>
	          <label><input type="radio" name="radio_gzjcfx_year" checked value="2018" onclick="clickChangeYear()"><span>2018</span></label>-->
					</dl>
					<span class="m" id="l_pop_dwkkx_m" data-month="12" style="position: absolute;right: 176px;">月</span>
				</div>
				<dl class="popup-normal__typeSelect popup-normal__yearSelect y_gzjzfx lys_one_wid_change lys_hover" style="display: none">

					<dt>2019</dt>
					<dd><label><input type="radio" name="radio_gzjcfx_year" value="2018" onclick="changeYear()"><span>2018</span></label></dd>
					<dd><label><input type="radio" name="radio_gzjcfx_year" checked value="2019" onclick="changeYear()"><span>2019</span></label></dd>

					<!--<label><input type="radio" name="radio_gzjcfx_year" value="2017" onclick="clickChangeYear()"><span>2017</span></label>
          				<label><input type="radio" name="radio_gzjcfx_year" checked value="2018" onclick="clickChangeYear()"><span>2018</span></label>-->

				</dl>
				<div class="popup-normal__typeSelect">
					<label id="fenbutongji2"><input type="radio" name="radio_gzjcfx_type" checked onclick="javascript:popup_tab_toggle(this,0)"><span>分布统计</span></label>
					<label id="qushifenxi2"><input type="radio" name="radio_gzjcfx_type" onclick="javascript:popup_tab_toggle(this,1)"><span onclick="dw_qsfx_popup(moment().add(-1 , 'year').format('YYYY'),moment().format('YYYY'))">趋势分析</span></label>
					<label id="zhuantifx"><input type="radio" name="radio_gzjcfx_type" onclick="javascript:popup_tab_toggle(this,2)"><span onclick="zhuanti_fx();">专题分析</span></label>
				</div>

				<!-- tab:分布统计 -->
				<div class="popup-normal__tabContent fbtj_zs">
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb" style=" top: 200px;">
						<div class="popup-normal__blockTitle">全口径供电可靠率</div>
						<div class="popup-normal__block-kkxfx">
							<label style="color: #fbbd1a;display: block;height: 28px;">上海公司全口径 (截止当月) : <span id="dyqkj">0</span></label>
							<label style="color: rgba(255,255,255,0.3);">上海公司全口径 (上年同期) : <span id="snqkj">0</span></label>
						</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx_gdkkl"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb" style="left: 1460px; top: 200px;">
						<div class="popup-normal__blockTitle">当月中压停电时户数 (单位 : 时户)</div>
						<div class="popup-normal__block-kkxfx">
							<label style="color: #fbbd1a;">上海公司 (当月) : <span id="dytdsh">0</span></label> &nbsp;&nbsp;&nbsp;&nbsp;
							<label style="color: rgba(255,255,255,0.3);">上海公司(上年同期) : <span id="sntdsh">0</span></label>
						</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx_zytdshs"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb">
						<div class="popup-normal__blockTitle">全年时户额度耗用(单位 : 时户)</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx_qnshedhy"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb">
						<div class="popup-normal__blockTitle">当月停电原因(预安排&故障)</div>
						<div class="popup-normal__block-kkxfx popup-normal__block-kkxfx1" style="color: white;text-align: right;">
							<label style="display: block;height: 28px;">检修停电 <span id="jxtd" style="display: inline-block;min-width: 135px;max-width: 140px;"></span> 时户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占比 <span id="jxtdzb">16.39%</span></label>
							<label>工程停电 <span id="gctd" style="display: inline-block;min-width: 135px;max-width: 140px;"></span> 时户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占比 <span id="gctdzb">80.59%</span></label>
						</div>
						<div class="popup-normal__block-kkxfx popup-normal__block-kkxfx1" style="right:55px;text-align: right;color: white;">
							<label style="display: block;height: 28px;">10千伏配电网设施故障 <span id="ssgz">11881 </span> 时户&nbsp;&nbsp;占比 <span id="ssgzzb">16.39%</span></label>
						</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx_tdyy">
							<div class="popup-normal__blockMain" id="popup-dwkkxfx_tdyy1" style="width: 660px;border: none;"></div>
							<div class="popup-normal__blockMain" id="popup-dwkkxfx_tdyy2" style="width: 660px; border: none; position: absolute; right: 0; bottom: 0;"></div>
						</div>
					</div>
				</div>
				<!-- //tab:分布统计 -->
				<!-- tab:趋势分析 -->
				<div class="popup-normal__tabContent" style="display:none">
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb" style="top:200px;">
						<div class="popup-normal__blockTitle">全口径供电可靠率</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx-gdkkl2"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb" style="top:200px;left:1460px;">
						<div class="popup-normal__blockTitle">中压停电时户数(单位 : 时户)</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx-tdhs2"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb" style="top:1000px;left:80px;">
						<div class="popup-normal__blockTitle">全年时户额度耗用(单位 : 时户)</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx-edhy2"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb" style="top:1000px;">
						<div class="popup-normal__blockTitle">当年停电原因(预安排&故障)</div>
						<div class="popup-normal__block-kkxfx popup-normal__block-kkxfx1" style="color: white;text-align: right;">
							<label style="display: block;height: 28px;">检修停电 <span id="jxtd1" style="display: inline-block;min-width: 135px;max-width: 140px;">3593 </span> 时户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占比 <span id="jxtdzb1">16.39%</span></label>
							<label>工程停电 <span id="gctd1" style="display: inline-block;min-width: 135px;max-width: 140px;">17663 </span> 时户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp占比 <span id="gctdzb1">80.59%</span></label>
						</div>
						<div class="popup-normal__block-kkxfx popup-normal__block-kkxfx1" style="right:55px;text-align: right;color: white;">
							<label style="display: block;height: 28px;">10千伏配电网设施故障 <span id="ssgz1">11881 </span> 时户&nbsp;&nbsp;占比 <span id="ssgzzb1">16.39%</span></label>
						</div>
						<div class="popup-normal__blockMain">
							<div id="popup-dwkkxfx-tdyyl2" style="width:660px;height:690px;"></div>
							<div id="popup-dwkkxfx-tdyyr2" style="width:660px;height:690px;position: absolute;right: 0;bottom:0;"></div>
						</div>
					</div>
				</div>
				<!-- //tab:趋势分析 -->
				<!-- tab:专题分析 -->
				<div class="popup-normal__tabContent" style="display:none">
					<div class="popup-normal__block popup-pwqxfx__block-gzqxhb">
						<div class="popup-normal__blockTitle">超100时户停电事件分析</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx_tdsjfx"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-gzqxhb" style="top: 1000px;">
						<div class="popup-normal__blockTitle">预安排项目平均停电时长分析</div>
						<div class="popup-normal__blockMain" id="popup-dwkkxfx_pjtdsc"></div>
					</div>
				</div>
				<!-- //tab:专题分析 -->
			</div>
		</div>

		<!-- popup-gzjcfx 弹框：故障监测分析 -->
		<div class="popup popup-normal popup-gzjcfx" id="popup-gzjcfx">
			<div class="popup-normal__head">
				<span class="popup-normal__close" onclick="javascript:Popup.hide();"></span>
				<span>故障监测分析</span>
			</div>
			<div class="popup-normal__main">
				<div class="popup-normal__areaSelect">
					<label><input value='上海' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('上海')" checked><span>上海公司</span></label>
					<label><input value='核心' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('核心')"><span>核心区</span></label>
					<label><input value='浦东' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('浦东')"><span>浦东</span></label>
					<label><input value='市区' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('市区')"><span>市区</span></label>
					<label><input value='市北' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('市北')"><span>市北</span></label>
					<label><input value='市南' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('市南')"><span>市南</span></label>
					<label><input value='嘉定' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('嘉定')"><span>嘉定</span></label>
					<label><input value='松江' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('松江')"><span>松江</span></label>
					<label><input value='青浦' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('青浦')"><span>青浦</span></label>
					<label><input value='奉贤' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('奉贤')"><span>奉贤</span></label>
					<label><input value='金山' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('金山')"><span>金山</span></label>
					<label><input value='崇明' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('崇明')"><span>崇明</span></label>
					<label><input value='长兴' type="radio" name="radio_gzjcfx_area" onclick="gzjc_qsfx('长兴')"><span>长兴</span></label>
				</div>
				<div class="popup-normal__timeSelect m_gzjzfx">
					<span class="arrUp" onclick="javascript:popup_comp_timeSelect(this, 'up'); gzjc_fbtj();"></span>
					<span class="arrDown" onclick="javascript:popup_comp_timeSelect(this, 'down'); gzjc_fbtj();"></span>
					<!--<span class="y" id="l_pop_gzjc_y"></span>-->
					<dl class="popup-normal__typeSelect popup-normal__yearSelect lys_hover fbtj_year" style="position: absolute;right: 270px;">
						<dt>2019</dt>
						<dd><label><input type="radio" name="radio_gzjcfx_year" value="2018" onclick="clickChangeYear()"><span>2018</span></label></dd>
						<dd><label><input type="radio" name="radio_gzjcfx_year" checked value="2019" onclick="clickChangeYear()"><span>2019</span></label></dd>
					</dl>
					<span class="m" id="l_pop_gzjc_m" data-month="9" style="position: absolute;right: 176px;">月</span>
				</div>
				<dl class="popup-normal__typeSelect popup-normal__yearSelect y_gzjzfx lys_one_wid_change lys_hover" style="display: none">

					<dt>2019</dt>
					<dd><label><input type="radio" name="radio_gzjcfx_year" value="2018" onclick="clickChangeYear()"><span>2018</span></label></dd>
					<dd><label><input type="radio" name="radio_gzjcfx_year" checked value="2019" onclick="clickChangeYear()"><span>2019</span></label></dd>

					<!--<label><input type="radio" name="radio_gzjcfx_year" value="2017" onclick="clickChangeYear()"><span>2017</span></label>
          <label><input type="radio" name="radio_gzjcfx_year" checked value="2018" onclick="clickChangeYear()"><span>2018</span></label>-->

				</dl>
				<div class="popup-normal__typeSelect">
					<label id="fenbutongji1"><input type="radio" name="radio_gzjcfx_type" checked onclick="javascript:popup_tab_toggle(this,0)"><span>分布统计</span></label>
					<label id="qushifenxi1"><input type="radio" name="radio_gzjcfx_type" onclick="javascript:popup_tab_toggle(this,1)"><span id='radio_gzjcfx_shanghai' onclick="gzjc_qsfx('上海');">趋势分析</span></label>
				</div>

				<!-- tab:分布统计 -->
				<div class="popup-normal__tabContent">
					<div class="popup-normal__block popup-gzjcfx__block-tzhb">
						<div class="popup-normal__blockTitle">跳闸环比</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_tzhb"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-gzhb">
						<div class="popup-normal__blockTitle">故障环比</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_gzhb"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-gzyy">
						<div class="popup-normal__blockTitle">故障原因</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_gzyy"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-tzlhb">
						<div class="popup-normal__blockTitle">跳闸率环比</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_tzlhb"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-tylhb">
						<div class="popup-normal__blockTitle">停运率环比</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_tylhb"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-ljyh">
						<div class="popup-normal__blockTitle">累计用户</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_ljyh"></div>
					</div>
				</div>
				<!-- //tab:分布统计 -->
				<!-- tab:趋势分析 -->
				<div class="popup-normal__tabContent" style="display:none">
					<div class="popup-normal__block popup-gzjcfx__block-tzhb">
						<div class="popup-normal__blockTitle">跳闸次数</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_tzcs"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-gzhb">
						<div class="popup-normal__blockTitle">故障次数</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_gzcs"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-gzyy">
						<div class="popup-normal__blockTitle">故障原因</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_gzyy2"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-tzlhb">
						<div class="popup-normal__blockTitle">跳闸率</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_tzl"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-tylhb">
						<div class="popup-normal__blockTitle">停运率</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_tyl"></div>
					</div>
					<div class="popup-normal__block popup-gzjcfx__block-ljyh">
						<div class="popup-normal__blockTitle">影响用户</div>
						<div class="popup-normal__blockMain" id="popup-gzjcfx_yxyh"></div>
					</div>
				</div>
				<!-- //tab:趋势分析 -->
			</div>
		</div>

		<!-- //popup-gzjcfx -->
		<!-- popup-tqjcfx 弹框：台区监测分析 -->
		<div class="popup popup-normal popup-tqjcfx" id="popup-tqjcfx">
			<div class="popup-normal__head">
				<span class="popup-normal__close" onclick="javascript:Popup.hide();"></span>
				<span>台区监测分析</span>
			</div>
			<div class="popup-normal__main">
				<div class="popup-normal__areaSelect">
					<label><input type="radio" name="radio_tqjcfx_area" checked value="8a812897493378a00149567740676661" onclick="initAnaly($(this).attr('value'), '-1')"><span>上海公司</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="JBH-HXQ" onclick="initAnaly($(this).attr('value'), '-1')"><span>核心区</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06" onclick="initAnaly($(this).attr('value'), '-1')"><span>浦东</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03" onclick="initAnaly($(this).attr('value'), '-1')"><span>市区</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04" onclick="initAnaly($(this).attr('value'), '-1')"><span>市北</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05" onclick="initAnaly($(this).attr('value'), '-1')"><span>市南</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08" onclick="initAnaly($(this).attr('value'), '-1')"><span>嘉定</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A" onclick="initAnaly($(this).attr('value'), '-1')"><span>松江</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09" onclick="initAnaly($(this).attr('value'), '-1')"><span>青浦</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07" onclick="initAnaly($(this).attr('value'), '-1')"><span>奉贤</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B" onclick="initAnaly($(this).attr('value'), '-1')"><span>金山</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ" onclick="initAnaly($(this).attr('value'), '-1')"><span>崇明</span></label>
					<label><input type="radio" name="radio_tqjcfx_area" value="FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ" onclick="initAnaly($(this).attr('value'), '-1')"><span>长兴</span></label>
				</div>
				<div class="popup-normal__timeSelect m_tqjcfx ">
					<span class="arrUp" onclick="javascript:popup_comp_timeSelect(this,'up');changeDate(this)"></span>
					<span class="arrDown" onclick="javascript:popup_comp_timeSelect(this,'down');changeDate(this)"></span>
					<!--<span class="y" id="l_pop_tqjc_y"></span>-->
					<dl class="popup-normal__typeSelect popup-normal__yearSelect lys_hover fbtj_year" style="position: absolute;right: 270px;">
						<dt>2019</dt>
						<dd><label><input type="radio" name="radio_tqjcfx_time" value="2018" onclick="changeDate()"><span>2018</span></label></dd>
						<dd><label><input type="radio" name="radio_tqjcfx_time" checked value="2019" onclick="changeDate()"><span>2019</span></label></dd>
					</dl>
					<span class="m" id="l_pop_tqjc_m" data-month="9" style="position: absolute;right: 176px;">月</span>
				</div>
				<dl class="popup-normal__typeSelect popup-normal__yearSelect y_tqjcfx lys_one_wid_change lys_hover" style="display:none;">

					<dt>2019</dt>
					<dd><label><input type="radio" name="radio_tqjcfx_time" value="2018" onclick="initAnaly('-1',$(this).attr('value'))"><span>2018</span></label></dd>
					<dd><label><input type="radio" name="radio_tqjcfx_time" checked value="2019" onclick="initAnaly('-1',$(this).attr('value'))"><span>2019</span></label></dd>

				</dl>

				<div class="popup-normal__typeSelect">
					<label id="fenbutongji"><input type="radio"  name="radio_tqjcfx_type" checked onclick="javascript:popup_tab_toggle(this,0);popup_tqjcfx_timeToggle(this, 'time')"><span>分布统计</span></label>
					<label id="qushifenxi"><input type="radio"  name="radio_tqjcfx_type" onclick="javascript:popup_tab_toggle(this,1);popup_tqjcfx_timeToggle(this, 'year')"><span onclick="initAnaly('8a812897493378a00149567740676661', '-1')">趋势分析</span></label>
				</div>
				<!-- tab:分布统计 -->
				<div class="popup-normal__tabContent">
					<div class="popup-normal__block popup-tqjcfx__block-zz">
						<div class="popup-normal__blockTitle">台区重载环比</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_tqzzhb"></div>
					</div>
					<div class="popup-normal__block popup-tqjcfx__block-gz">
						<div class="popup-normal__blockTitle">台区过载环比</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_tqgzhb"></div>
					</div>
					<div class="popup-normal__block popup-tqjcfx__block-ddy">
						<div class="popup-normal__blockTitle">台区采集数据异常环比</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_tqddyhb"></div>
					</div>
					<div class="popup-normal__block popup-tqjcfx__block-sxbph">
						<div class="popup-normal__blockTitle">台区三相不平衡环比</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_tqsxbphhb"></div>
					</div>
				</div>
				<!-- //tab:分布统计 -->
				<!-- tab:趋势分析 -->
				<div class="popup-normal__tabContent" style="display:none;">
					<div class="popup-normal__block popup-tqjcfx__block-zz">
						<div class="popup-normal__blockTitle">重载</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_zz"></div>
					</div>
					<div class="popup-normal__block popup-tqjcfx__block-gz">
						<div class="popup-normal__blockTitle">过载</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_gz"></div>
					</div>
					<div class="popup-normal__block popup-tqjcfx__block-ddy">
						<div class="popup-normal__blockTitle">台区监测数据异常</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_ddy"></div>
					</div>
					<div class="popup-normal__block popup-tqjcfx__block-sxbph">
						<div class="popup-normal__blockTitle">三相不平衡</div>
						<div class="popup-normal__blockMain" id="popup-tqjcfx_sxbph"></div>
					</div>
				</div>
				<!-- tab://趋势分析 -->

			</div>
		</div>
		<!-- //popup-tqjcfx -->
		<!-- popup-pwqxfx 弹框：配网抢修分析 -->
		<div class="popup popup-normal popup-pwqxfx" id="popup-pwqxfx">
			<div class="popup-normal__head">
				<span class="popup-normal__close" onclick="javascript:Popup.hide();"></span>
				<span>配网抢修分析</span>
			</div>
			<div class="popup-normal__main">
				<div class="popup-normal__areaSelect">
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('上海')" checked><span>上海公司</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('核心区')"><span>核心区</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('浦东')"><span>浦东</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('市区')"><span>市区</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('市北')"><span>市北</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('市南')"><span>市南</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('嘉定')"><span>嘉定</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('松江')"><span>松江</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('青浦')"><span>青浦</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('奉贤')"><span>奉贤</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('金山')"><span>金山</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('崇明')"><span>崇明</span></label>
					<label><input type="radio" name="radio_pwqx_area" onclick="gzjc_pwqx('长兴')"><span>长兴</span></label>
				</div>
				<div class="popup-normal__timeSelect m_pwqxfx1">
					<span class="arrUp" onclick="javascript:popup_comp_timeSelect(this, 'up');changeDatePwfx(this)"></span>
					<span class="arrDown" onclick="javascript:popup_comp_timeSelect(this, 'down');changeDatePwfx(this)"></span>
					<!--<span class="y" id="l_pop_pwqx_y"></span>-->
					<dl class="popup-normal__typeSelect popup-normal__yearSelect lys_hover fbtj_year" style="position: absolute;right: 270px;">
						<dt>2019</dt>
						<dd><label><input type="radio" name="radio_pwqxfx_year" value="2018" onclick="changeDatePwfx()"><span>2018</span></label></dd>
						<dd><label><input type="radio" name="radio_pwqxfx_year" checked value="2019" onclick="changeDatePwfx()"><span>2019</span></label></dd>
					</dl>
					<span class="m" id="l_pop_pwqx_m" data-month="9" style="position: absolute;right: 176px;">月</span>
				</div>
				<dl class="popup-normal__typeSelect popup-normal__yearSelect y_pwqxfx1 lys_one_wid_change lys_hover" style="display:none;">
					<dt>2019</dt>
					<dd><label><input type="radio" name="radio_pwqxfx_year"  value="2018" onclick="clickQsfxYear()"><span>2018</span></label></dd>
					<dd><label><input type="radio" name="radio_pwqxfx_year"  checked value="2019" onclick="clickQsfxYear()"><span>2019</span></label></dd>
				</dl>
				<div class="popup-normal__typeSelect">
					<label id="fenbutongji4"><input type="radio" name="radio_pwqxfx_type" checked onclick="javascript:popup_tab_toggle(this,0)"><span>分布统计</span></label>
					<label id="qushifenxi4"><input type="radio" name="radio_pwqxfx_type" onclick="javascript:popup_tab_toggle(this,1)"><span>趋势分析</span></label>
				</div>
				<!-- tab:分布统计 -->
				<div class="popup-normal__tabContent">
					<div class="popup-normal__block popup-pwqxfx__block-gzqxhb">
						<div class="popup-normal__blockTitle">故障抢修环比</div>
						<div class="pwyx_box">
							<div class='pwqx_txt'>
								<p>
									<span>(当月) 电力故障<span id="dl1">0</span></span>
									<span>(上月) 电力故障<span id="dl2">0</span></span>
								</p>
							</div>
							<div class='pwqx_txt'>
								<p>
									<span>非电力故障<span id="fd1">0</span></span>
									<span>非电力故障<span id="fd2">0</span></span>
								</p>
							</div>
							<div class='pwqx_txt'>
								<p>
									<span>欠费复电<span id="qf1">0</span></span>
									<span>欠费复电<span id="qf2">0</span></span>
								</p>
							</div>
						</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_gzqxhb"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb">
						<div class="popup-normal__blockTitle">平均到达时间环比</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_pjddsjhb"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb">
						<div class="popup-normal__blockTitle">平均修复时间环比</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_pjxfsjhb"></div>
					</div>
				</div>
				<!-- //tab:分布统计 -->
				<!-- tab:趋势分析 -->
				<div class="popup-normal__tabContent" style="display:none">
					<div class="popup-normal__block popup-pwqxfx__block-yhbx">
						<div class="popup-normal__blockTitle">用户报修</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_yhbx"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-dlgz">
						<div class="popup-normal__blockTitle">电力故障</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_dlgz"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-fdlgz">
						<div class="popup-normal__blockTitle">非电力故障</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_fdlgz"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjddsjhb">
						<div class="popup-normal__blockTitle">平均到达时间</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_pjddsj"></div>
					</div>
					<div class="popup-normal__block popup-pwqxfx__block-pjxfsjhb">
						<div class="popup-normal__blockTitle">平均修复时间</div>
						<div class="popup-normal__blockMain" id="popup-pwqxfx_pjxfsj"></div>
					</div>
				</div>
				<!-- //tab:趋势分析 -->
			</div>
		</div>
		<!-- //popup-pwqxfx -->
		<!-- popup-ywzh 弹框：业务指挥 -->
		<div class="popup popup-normal popup-ywzh" id="popup-ywzh">
			<div class="popup-normal__head">
				<span class="popup-normal__close" onclick="javascript:Popup.hide();"></span>
				<span>保电工作分析（核心保电区）</span>
			</div>
			<div class="popup-normal__main">
				<div class="popup-normal__eventSelect">
					<label><input type="radio" name="radio_pwqx_event" checked
                              onclick="javascript:$('.popup-normal__tabsbxs').show().siblings('.popup-normal__tabContent').hide()"><span>设备巡视</span></label>
					<label><input type="radio" name="radio_pwqx_event"
                              onclick="javascript:$('.popup-normal__tabsbjc').show().siblings('.popup-normal__tabContent').hide()"><span>设备检测</span></label>
					<label><input type="radio" name="radio_pwqx_event"
                              onclick="javascript:$('.popup-normal__tabycjcz').show().siblings('.popup-normal__tabContent').hide()"><span>异常及处置</span></label>
				</div>
				<!-- tab:设备巡视 -->
				<div class="popup-normal__tabContent popup-normal__tabsbxs">
					<img class="popup-ywzh_sbxs" src="${ctx}/ws_static/img/bd_sbxj.png" alt="">
				</div>
				<!-- tab:设备检测 -->
				<div class="popup-normal__tabContent popup-normal__tabsbjc" style="display:none">
					<img class="popup-ywzh_sbjc" src="${ctx}/ws_static/img/bd_sbjc.png" alt="">
				</div>
				<!-- tab:异常及处置 -->
				<div class="popup-normal__tabContent popup-normal__tabycjcz" style="display:none">
					<img class="popup-ywzh_ycjcz" src="${ctx}/ws_static/img/bd_ycjcz.png" alt="">
					<ul style="list-style-type: none;">
						<li class="ycjcz_k" id="popup-ywzh_ycjcz_btn11" onclick="yccz_qx('popup-ywzh_ycjcz_btn11')"></li>
						<li class="ycjcz_k" id="popup-ywzh_ycjcz_btn12" onclick="yccz_yh('popup-ywzh_ycjcz_btn12')"></li>
						<li class="ycjcz_k" id="popup-ywzh_ycjcz_btn21" onclick="yccz_qx('popup-ywzh_ycjcz_btn21')"></li>
						<li class="ycjcz_k" id="popup-ywzh_ycjcz_btn22" onclick="yccz_yh('popup-ywzh_ycjcz_btn22')"></li>
						<li class="ycjcz_k" id="popup-ywzh_ycjcz_btn31" onclick="yccz_qx('popup-ywzh_ycjcz_btn31')"></li>
						<li class="ycjcz_k" id="popup-ywzh_ycjcz_btn32" onclick="yccz_yh('popup-ywzh_ycjcz_btn32')"></li>
					</ul>
				</div>
			</div>
		</div>

	</body>

<script type="text/javascript" src="${ctx}/ws_static/js/index.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_leftBox.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_rightNetworkMonitor.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_rightPowerMonitor.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_rightBusinessCommand.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_rightResourceMonitor.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_rightGZJC.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_left.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_center_data.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_right_data.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_john.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/gongdianfuwu.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/gongdianfuwu.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/xiaoxitongzhi.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/baozhangzhongdian.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/yewuzhihui.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/dangbanziyuan.js"></script>
<script src="${ctx}/ws_static/js/charts_right.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/rightGZJC.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/popupGZJC.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/chart_rightPWYX.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/charts/charts_rightGongDianFuWu.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_0928.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_0928_popup_yxztfx.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_0928_popup_gzjcfx.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_0928_popup_tqjcfx.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/index_0928_popup_pwqxfx.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/getdata/gongdianfuwu_v2.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/action/gongdianfuwu_v2.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/init.js"></script>

<script type="text/javascript" src="${ctx}/ws_static/js/fly3d.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/qwebchannel.js"></script>
<script type="text/javascript" src="${ctx}/ws_static/js/fenye.js"></script>

</html>