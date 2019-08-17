<%@ page language="java" contentType="text/html; charset= utf-8" pageEncoding="utf-8"%>
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
		<link rel="stylesheet" href="${ctx}/ws_static/css/menu_index.css">
		<link rel="stylesheet" href="${ctx}/ws_static/css/menu_index2.css">
		<title>国家电网全景智慧供电保障系统</title>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/bootstrap.min.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/echarts.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/echarts-liquidfill.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/commfun.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/utilvar.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/getdata/index_left.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/getdata/ywzh_ywzh.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/jQueryRotate.2.2.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/jquery.SuperSlide.2.1.1.js"></script>

		<style>
			
			.left_box {
				background: url("${ctx}/ws_static/img/bg-l.jpg ") no-repeat;
			}
			
			.logo_box {
				background: url("${ctx}/ws_static/img/logommm.png ") no-repeat;
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
							<div >
								<div style="overflow-x: auto;width:2880px;height: 342px;position: relative;color: #fff;" id='div-1'>
									<div class='fixedDiv' style="position: absolute;left:0;overflow: hidden;height: 70px;line-height: 70px;background: #093053;">
										<table border="0" cellspacing="" cellpadding="" style="table-layout: fixed;width:0;text-align: center;border:none;" frame="rhs">
											<tr id="FourUl_add"></tr>
										</table>
										
										
									</div>
								<div class='mainDiv' style="height: 342px;overflow: auto;overflow-x: hidden;"  id='FourUl'>
									<table border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;width:0;text-align: center;border:none;margin-top:70px;"  frame="rhs">
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
				<div style="width: 1190px;height: 60px;color: #FFFFFF;margin-top: 85px;margin-left: 50px;position: absolute;">
					<div id="guzhangMarquee" style="padding: 5px 30px;">
						<!--<marquee style="vertical-align: middle;font-size: 28px;width: 1090px;color:#ff3b4d;" loop=3 id="showInfo"></marquee>-->
					</div>
				</div>
				<div class='history' style="display: none;">
					<p class='history_title'>当日历史故障</p>
					<img src="${ctx}/ws_static/img/history_close.png" class='history_close'/>
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
				<div id="showImgBigDiv" style="opacity: 0;"></div>

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
							<li>通信保障</li>
							<li>调控指挥</li>
						</ul>
					</div>
					<div class="clearfix"></div>
					<div class="tab_box">
						<!-- 全网状态 -->
						<div class="tab_box__item" id="zhuangtai">
							<ul class="status_tab status_tab1">
								<li id="yxzt" class="active_tab" onclick="clickAll();changeMap('YXZT')">运行状态</li>
								<li id="gzjc" onclick="clickGzjcTab();changeMap('GZJC')">故障监测</li>
								<li id="pwyx" onclick="clickPWYX();changeMap('PWYX');">配网运行</li>
								<li id="gdfw" onclick="clickGDFW();changeMap('GDFW');">供电服务</li>
								<p id="gzjc1" onclick="clickGzjcTab();" style="display: none;">故障监测</p>
								<p id="pwyx1" onclick="clickPWYX();" style="display: none;">配网运行</p>
								<p id="gdfw1" onclick="clickGDFW();" style="display: none;">供电服务</p>
							</ul>
							<!-- 全网状态 -->
							<div class="run_box">
								<iframe src="qwzt_yxzt.html" style="width: 100%;height: 2880px;border:none;" id='qwzt_yunxingzhuangtai' allowtransparency="yes"></iframe>

							</div>

							<!-- 故障监测 -->
							<div class="run_box hide run_box_gzjc" style="padding-top:0;">
								<iframe src="qwzt_gzjc.html" style="width: 100%;height: 2880px;border:none;" id='qwzt_gzjc' allowtransparency="yes"></iframe>
								
							</div>
							<!-- //故障监测 -->
							<!-- 配网运行 -->
							<div class="run_box hide run_box_pwyx" style="padding-top:0;">
								<iframe src="qwzt_pwyx.html" style="width: 100%;height: 2880px;border:none;" id='qwzt_pwyx' allowtransparency="yes"></iframe>
								
							</div>
							<!-- //配网运行 -->
							<!-- 供电服务 -->
							<div class="run_box hide run_box_gdfw" style="padding-top:0;">
								<iframe src="qwzt_gdfw.html" style="width: 100%;height: 2880px;border:none;" id='qwzt_gdfw' allowtransparency="yes"></iframe>
								
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
								<iframe src="zhjk_bzzd.html" style="width: 100%;height: 2880px;border:none;" id='zhjk_bzzd' allowtransparency="yes"></iframe>
								
							</div>
							<div class="ai_box hide">
								<iframe src="zhjk_zngz.html" style="width: 100%;height: 2880px;border:none;" id='zhjk_zngz' allowtransparency="yes"></iframe>
								
							</div>
						</div>
						<!-- 业务指挥 -->
						<div class="tab_box__item" id="zhihui" style="display:none;">
							<ul class="status_tab status_tab4">
								<li class="active_tab">业务指挥</li>
								<li>应急预案</li>
							</ul>

							<div class='zhihui_box'>
								<iframe src="ywzh_ywzh.html" style="width: 100%;height: 2880px;border:none;"  id='ywzh_ywzh' allowtransparency="yes"></iframe>
								
							</div>
							<div class='zhihui_box hide'>
								<iframe src="ywzh_yjya.html" style="width: 100%;height: 2880px;border:none;"  id='ywzh_yjya' allowtransparency="yes"></iframe>
								
							</div>
						</div>
						<!-- 资源监控 -->
						<div class="tab_box__item" id="ziyuan" style="display:none;">
							<ul class="status_tab status_tab2">
								<li class="active_tab" onclick="changeMap('DBZY')">当班资源</li>
								<li onclick="changeMap('WZJK')">物资监控</li>
							</ul>
							<div class="first_box">
								<iframe src="zyjk_dbzy.html" style="width: 100%;height: 2880px;border:none;"  id='zyjk_dbzy' allowtransparency="yes"></iframe>
								
							</div>
							<div class="first_box hide">
								<iframe src="zyjk_wzjk.html" style="width: 100%;height: 2880px;border:none;"  id='zyjk_wzjk' allowtransparency="yes"></iframe>
								
							</div>
						</div>
						<!-- 通信保障 -->
						<div class="tab_box__item" style="display:none;"></div>
						<!-- 调控指挥 -->
						<div class="tab_box__item" style="display:none;"></div>
					</div>
				</div>
			</div>
			<!--右边框体结束-->
		</div>

		<!-- popup-gzjcfx 弹框：故障监测分析 -->
		<div class="popup popup-normal popup-gzjcfx" id="popup-gzjcfx"></div>
		<!-- //popup-gzjcfx -->
		<!-- popup-tqjcfx 弹框：台区监测分析 -->
		<div class="popup popup-normal popup-tqjcfx" id="popup-tqjcfx"></div>
		<!-- //popup-tqjcfx -->
		<!-- popup-pwqxfx 弹框：配网抢修分析 -->
		<div class="popup popup-normal popup-pwqxfx" id="popup-pwqxfx"></div>
		<!-- //popup-pwqxfx -->
		
	</body>

	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/charts/charts_left.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_left.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_center_data.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/action/qwzt_gdfw.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/action/ywzh_ywzh.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/action/zyjk_wzjk.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/getdata/zyjk_wzjk.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_popup.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_popup_gzjcfx.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_popup_tqjcfx.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_popup_pwqxfx.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/charts/chart_pwyx.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/init.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/fly3d.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/qwebchannel.js"></script>

</html>