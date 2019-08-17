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
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/jQueryRotate.2.2.js"></script>
		<script type="text/javascript" src="${ctx}/ws_static/menu_js/lib/jquery.SuperSlide.2.1.1.js"></script>

		<style>
			*{margin:0;padding:0;}
			.tip {
				position: absolute;
				left: 360px;
				top: -60px;
				white-space: nowrap;
				text-indent: -3em;
				font-size: 24px;
				line-height: 28px;
				color: #b7e7f3;
			}
		</style>

	</head>

	<body style="background:transparent;color:#fff;">
		<div class="run_box run_box_gdfw" id="right_runbox_gdfw">
		<div class="runbox-block">
			<div class="runbox-block__title">
				<em>配网抢修</em>
				<span class="tip" style="color:#b7e7f3;">来源：PMS2.0</span>
				<div class="tip2" onclick="javascript:$('#popup-pwqxfx',parent.document).show();append_gdfw()">
				
				</div>
				<img style="position: absolute;right: -140px;top: -20px;cursor: pointer;" src="${ctx}/ws_static/img/icon_tst.png" id='tst_id_gdfw'/>
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
						<span id="heXinQuVal" class="chart3__item-count" data-dlgz="0" ></span>

						<div class="chart3__item-progressbar">
							<span id="heXinQu" class="dlgz" style="width:0%"></span>
							<span id="heXinQu1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="heXinQuYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						
						<div class="chart3__item-progressbar">
							<span id="heXinQu3"  class="clz" style="width:0%"></span>
							<span id="heXinQu2" class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">松江</span>
						<span id="songJiangVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="songJiang" class="dlgz" style="width:0%"></span>
							<span id="songJiang1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="songJiangYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="songJiang3"  class="clz" style="width:0%"></span>
							<span id="songJiang2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">浦东</span>
						<span id="puDongVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="puDong" class="dlgz" style="width:0%"></span>
							<span id="puDong1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="puDongYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="puDong3"  class="clz" style="width:0%"></span>
							<span id="puDong2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">青浦</span>
						<span id="qingPuVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="qingPu" class="dlgz" style="width:0%"></span>
							<span id="qingPu1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="qingPuYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="qingPu3"  class="clz" style="width:0%"></span>
							<span id="qingPu2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">市区</span>
						<span id="shiQuVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="shiQu" class="dlgz" style="width:0%"></span>
							<span id="shiQu1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="shiQuYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="shiQu3"  class="clz" style="width:0%"></span>
							<span id="shiQu2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">奉贤</span>
						<span id="fengXianVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="fengXian" class="dlgz" style="width:0%"></span>
							<span id="fengXian1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="fengXianYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="fengXian3"  class="clz" style="width:0%"></span>
							<span id="fengXian2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">市北</span>
						<span id="shiBeiVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="shiBei" class="dlgz" style="width:0%"></span>
							<span id="shiBei1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="shiBeiYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="shiBei3"  class="clz" style="width:0%"></span>
							<span id="shiBei2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">金山</span>
						<span id="jinShanVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="jinShan" class="dlgz" style="width:0%"></span>
							<span id="jinShan1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="jinShanYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="jinShan3"  class="clz" style="width:0%"></span>
							<span id="jinShan2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">市南</span>
						<span id="shiNanVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="shiNan" class="dlgz" style="width:0%"></span>
							<span id="shiNan1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="shiNanYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="shiNan3"  class="clz" style="width:0%"></span>
							<span id="shiNan2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">崇明</span>
						<span id="chongMingVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="chongMing" class="dlgz" style="width:0%"></span>
							<span id="chongMing1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="chongMingYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="chongMing3"  class="clz" style="width:0%"></span>
							<span id="chongMing2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">嘉定</span>
						<span id="jiaDingVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="jiaDing" class="dlgz" style="width:0%"></span>
							<span id="jiaDing1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="jiaDingYcl"  class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="jiaDing3"  class="clz" style="width:0%"></span>
							<span id="jiaDing2"  class="ycl" style="width:0%"></span>
						</div>
					</div>
					<div class="chart3__item">
						<span class="chart3__item-zone">长兴</span>
						<span id="changXingVal" class="chart3__item-count" data-dlgz="0" ></span>
						<div class="chart3__item-progressbar">
							<span id="changXing" class="dlgz" style="width:0%"></span>
							<span id="changXing1" class="fdlgz" style="width:0%"></span>
						</div>
						<span id="changXingYcl" class="chart3__item-count chart3__item-count_fff">0%</span>
						<div class="chart3__item-progressbar">
							<span id="changXing3"  class="clz" style="width:0%"></span>
							<span id="changXing2"  class="ycl" style="width:0%"></span>
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
	</body>

	<script type="text/javascript" src="${ctx}/ws_static/menu_js/commfun.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/utilvar.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/charts/charts_gdfw.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/index_popup_pwqxfx.js"></script>
	<script type="text/javascript" src="${ctx}/ws_static/menu_js/action/qwzt_gdfw.js"></script>
	


</html>