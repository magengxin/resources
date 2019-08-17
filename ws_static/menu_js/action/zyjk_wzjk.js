

var CangKu2ZYHtmlLabelMap = {//emergency_ck_wz_ul左侧列表     emergency_wzdlx_li应急物资常备物资导航切换
    "1" : {num:"emergency_ck_num",ul:"emergency_ck_ul",wzul:"emergency_ck_wz_ul",wzdlxli:"emergency_wzdlx_li"},
    "2" : {num:"stand_ck_num",ul:"stand_ck_ul",wzul:"stand_ck_wz_ul",wzdlxli:"stand_wzdlx_li"},
}

setTimeout(function(){
	loadDBZY();//加载页面数据
},1000);
    

var g_deptchangeThisPage="8a812897493378a00149567740676661";//只给智慧监控使用的全局公司id的变量
function loadDBZY() {
	append_pic();//页面结构添加图片
    bindClick_WZJK();//物资监控
    dealCangKuCount("1",g_deptchangeThisPage);//应急库
    dealCangKuCount("2",g_deptchangeThisPage);//常备库
    dealSupplierList();//供应商
    dealSupplierWuZiList('-1');//供应商
    //物资大类型编码:默认-1 应急1 常备2 变电3 线路4 进博会专用物资5
    dealCangKuWuZi("1","1","",g_deptchangeThisPage);//应急库
    dealCangKuWuZi("2","3","",g_deptchangeThisPage);//常备库
    dealZiYuanTongJi_Person(g_deptchangeThisPage);//人员
    dealZiYuanTongJi_Car(g_deptchangeThisPage);//车辆
    dealZiYuanTongJi_Supplier(g_deptchangeThisPage);//供应商
    personnel();//资源监控 下 物资监控 之 人员 车辆 供应商 三个饼图 
}

function append_pic(){//添加照片结构
	var html = '<div id="showImgTitle">'+
					'<p>照片附件</p>'+
				'</div>'+
				'<div id="showImgDiv">'+
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/sj_05.jpg" alt="" id="0" />'+
									'<div class="cangkunpic">松江中心库板货车</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/sj_02.jpg" alt="" id="1" />'+
									'<div class="cangkunpic">松江中心库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/sj_03.jpg" alt="" id="2" />'+
									'<div class="cangkunpic">松江中心库汽车吊</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/sj_04.jpg" alt="" id="3" />'+
									'<div class="cangkunpic">松江中心库外景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/sj_01.jpg" alt="" id="4" />'+
									'<div class="cangkunpic">松江中心库应急物资</div>'+
								'</li>'+
							'</ul>'+
		
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/wzl_01.jpg" alt="" id="5" />'+
									'<div class="cangkunpic">吴中路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/wzl_02.jpg" alt="" id="6" />'+
									'<div class="cangkunpic">吴中路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/zyl_01.jpg" alt="" id="7" />'+
									'<div class="cangkunpic">闸殷路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/zyl_02.jpg" alt="" id="8" />'+
									'<div class="cangkunpic">闸殷路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/gdl_01.jpg" alt="" id="9" />'+
									'<div class="cangkunpic">顾戴路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/gdl_02.jpg" alt="" id="10" />'+
									'<div class="cangkunpic">顾戴路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/dslq_01.jpg" alt="" id="11" />'+
									'<div class="cangkunpic">东三里桥路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/dslq_02.jpg" alt="" id="12" />'+
									'<div class="cangkunpic">东三里桥路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/jl_01.jpg" alt="" id="13" />'+
									'<div class="cangkunpic">金廊公路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/jl_02.jpg" alt="" id="14" />'+
									'<div class="cangkunpic">金廊公路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/gjl_01.jpg" alt="" id="15" />'+
									'<div class="cangkunpic">拱极路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/gjl_02.jpg" alt="" id="16" />'+
									'<div class="cangkunpic">拱极路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/hhgl_01.jpg" alt="" id="17" />'+
									'<div class="cangkunpic">沪杭公路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/hhgl_02.jpg" alt="" id="18" />'+
									'<div class="cangkunpic">沪杭公路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/hcl_01.jpg" alt="" id="19" />'+
									'<div class="cangkunpic">霍城路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/hcl_02.jpg" alt="" id="20" />'+
									'<div class="cangkunpic">霍城路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/bgl_01.jpg" alt="" id="21" />'+
									'<div class="cangkunpic">堡港路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/bgl_02.jpg" alt="" id="22" />'+
									'<div class="cangkunpic">堡港路仓库外景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/qsl_01.jpg" alt="" id="23" />'+
									'<div class="cangkunpic">青松路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/qsl_02.jpg" alt="" id="24" />'+
									'<div class="cangkunpic">青松路仓库内景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
		
					'<div class="slideBox">'+
						'<div class="bd">'+
							'<ul>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/hnl_01.jpg" alt="" id="25" />'+
									'<div class="cangkunpic">沪南路仓库内景</div>'+
								'</li>'+
								'<li><img src="'+basepath+'/ws_static/img/ckimg/hnl_02.jpg" alt="" id="26" />'+
									'<div class="cangkunpic">沪南路仓库内景</div>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<a class="prev" href="javascript:void(0)"></a>'+
						'<a class="next" href="javascript:void(0)"></a>'+
					'</div>'+
					'<script type="text/javascript">'+
					'jQuery(".slideBox",parent.document).slide({effect: "left",mainCell: ".bd ul",autoPlay: false});'+
					'</script>'+
				'</div>'+
				
				'<div id="arrowBtn" class="arrowStyle">'+
					'<img src="'+basepath+'/ws_static/img/loadIcon_03.png" />'+
				'</div>';
	
	$('#showImgBigDiv',parent.document).html(html);//塞到页面结构
	//照片附件关闭
	$("#arrowBtn",parent.document).click(function() {
		$("#showImgBigDiv",parent.document).css('display','none');
	});
	//仓库照片点击放大缩小
	function scale(eq,id,name){
		$('#showImgDiv .slideBox',parent.document).eq(eq).find(id).on('click',function(){
	//		console.log($(id)[0].src)
			var	imgurl;
			if(name){
				imgurl = $(id,parent.document)[0].src;
				$('#picbox',parent.document).css('display','block');
				$('#picbox',parent.document).attr('src',imgurl);
				$('#showImgBigDiv',parent.document).hide();
				$('#pictitle',parent.document).text($(this).siblings().text()).show()
				$('#picbox',parent.document).on('click',function(){
					$(this).hide()
					$('#showImgBigDiv',parent.document).show()
					$('#pictitle',parent.document).hide()
				})
				$("#arrowBtn",parent.document).click(function() {
					$("#showImgBigDiv",parent.document).css('display','none');
				})
				name = false
			}
			else{
				imgurl = ''
				$('#picbox',parent.document).hide()
				$('#picbox',parent.document).css('background','red');
				$('#showImgBigDiv',parent.document).show();
				$('#arrowBtn',parent.document).show();
				
				$("#showImgBigDiv",parent.document).css('display','block');
				name = true
			}
			
		})
	}
	//传入图片id
	scale(0,'#0','flag0');
	scale(0,'#1','flag1');
	scale(0,'#2','flag2');
	scale(0,'#3','flag3');
	scale(0,'#4','flag4');
	scale(1,'#5','flag5');
	scale(1,'#6','flag6');
	scale(2,'#7','flag7');
	scale(2,'#8','flag8');
	scale(3,'#9','flag9');
	scale(3,'#10','flag10');
	scale(4,'#11','flag11');
	scale(4,'#12','flag12');
	scale(5,'#13','flag13');
	scale(5,'#14','flag14');
	scale(6,'#15','flag15');
	scale(6,'#16','flag16');
	scale(7,'#17','flag17');
	scale(7,'#18','flag18');
	scale(8,'#19','flag19');
	scale(8,'#20','flag20');
	scale(9,'#21','flag21');
	scale(9,'#22','flag22');
	scale(10,'#23','flag23');
	scale(10,'#24','flag24');
	scale(11,'#25','flag25');
	scale(11,'#26','flag26');

}
//点击照片附件，弹出照片弹框
$("#FourUl",parent.document).on('click',"td .alert_box_show",function(){
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



//物资监控-----------添加供应商
function bindClick_WZJK(){
    $("#emergency_ck_num").css({'cursor': 'pointer'});
    $("#emergency_ck_num").click(function () {//点击应急库弹出详细列表弹框
        ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("应急库");
        showCangKuList("1",g_deptchangeThisPage);
    });

    $("#stand_ck_num").css({'cursor': 'pointer'});
    $("#stand_ck_num").click(function () {//点击常备库弹出详细列表弹框
        ChooseShow("KHFW");
        $('#qiangdan_title',parent.document).text("常备库");
        showCangKuList("2",g_deptchangeThisPage);
    });

    //应急 常备 变电 线路的点击切换
    Object.keys(CangKu2ZYHtmlLabelMap).forEach(function (name) {

        var ckobj = CangKu2ZYHtmlLabelMap[name];
        $("#"+ckobj.wzdlxli).find("h4").click(function () {
            var text = $(this).text();
            var wzdlx = text.substr(0,2);
            switch(wzdlx){
				case '应急':
					wzdlx = "1";
				    break;
				case '常备':
					wzdlx = "2";
				    break;
				case '变电':
				    wzdlx = "3";
				    break;
				case '线路':
					wzdlx = "4";
				    break;
			}
            //判断仓库
            var ckul = $("#"+ckobj.ul).find(".liSelected");
            var ckid = $(ckul).attr("ckid");
            dealCangKuWuZi(name,wzdlx,ckid,g_deptchangeThisPage);//获取物资明细
        });

    });
}



//物资管理
//仓库内设备统计
function dealCangKuWuZi(CKLX,WZDLXDM,ID,ssgs) {
//	$('#wzActive').html()
    getCangKuWuZiCount(dealdata,CKLX,WZDLXDM,ID,ssgs);//仓库物资统计
    var resultset = {};
    var wzul = CangKu2ZYHtmlLabelMap[CKLX].wzul;

    function dealdata(data) {
        if (!data.data){
            data.data =[];
        }
        var rows = data.data;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            var num = parseInt(row.SL);
            var WZZLX = row.WZZLX;
            if (WZZLX) {
                // if (WZZLX.indexOf("登高、安全工具") === 0) {
                //     WZZLX = "登高、安全工具";
                // }
                var obj = resultset[WZZLX];
                if (obj) {
                    obj.num += num;
                } else {
                    resultset[WZZLX] = {"num":num,"dm":row.WZZLXDM,"dlx":WZDLXDM};
                }
            }

        }
        dealhtml(wzul,resultset);
    }

    function dealhtml(wzul,resultset) {

        clearul(wzul);//添加仓库下物资列表
        createli(wzul,resultset);
    }

    function clearul(ulid) {
        var lilist = $("#"+ulid).find('li');
        for (var i =0;i<lilist.length;i++){
            $(lilist[i]).remove();
        }
    }

    function createli(ulid,resultset) {
        Object.keys(resultset).forEach(function (name) {
            li0 = $("<li>" ,{WZZLX: name});
            var p0 = $("<p>" ,{
                text: resultset[name].num,
                class: "potClick",
            });
            var span0 = $("<span>" ,{text: name});
            $(li0).append(p0);
            $(li0).append(span0);

            $(p0).click(function () {
//              showCangKuWuZiListByWZZLX(CKLX,ID,name,g_deptchangeThisPage);
                showCangKuWuZiListByWZZLX(CKLX,ID,resultset[name].dm,resultset[name].dlx,g_deptchangeThisPage);//物资细类明细列表
            })
            $("#"+ulid).append(li0);
        });
    }

}

//物资细类明细列表
function showCangKuWuZiListByWZZLX(CKLX,ID,WZZLX,WZDLXDM,ssgs) {

    ChooseShow("KHFW");
    $('#qiangdan_title').text("仓库信息");

    var parentComId =  ulmap.KHFW;
    var titleList = [
        ["WZCKID",""],
        ["MC","名称"],
        ["SL","数量"],
        ["WLMS","物料描述"],
        ["GYSID","供应商"],
        ["FZR","负责人"],
        //["LXFS","联系方式"],
    ];
    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    getCangKuWuZiByWZZLX(dealdata, CKLX,ID,WZZLX,WZDLXDM,ssgs);//物资细类明细查询

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock').hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.CK);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
}

//仓库数量及仓库列表
function dealCangKuCount(CKLX,ssgs) {

    $("#"+CangKu2ZYHtmlLabelMap[CKLX].num).text(0);

    var ul = CangKu2ZYHtmlLabelMap[CKLX].ul;

    getCangKuDetail(dealdata,CKLX,ssgs);//仓库明细

    function dealdata(data) {
        if (!data.data || data.data.length===0){
            return;
        }
        var rows = data.data;
        $("#"+CangKu2ZYHtmlLabelMap[CKLX].num).text(rows.length);

        clearul(ul);
        createli(ul,rows,CKLX);
    }

    function clearul(ulid) {
        var lilist = $("#"+ulid).find('li');

        for (var i =0;i<lilist.length;i++){
            $(lilist[i]).remove();
        }
        var lilist2 = $("#"+ulid).find('li');
    }

    function createli(ulid,rows,CKLX) {

        var lilist = $("#"+ulid).find('li');
        var li0 = $("<li>" ,{
            text: "全部",
            "ckid":"",
            class: "liSelected",
        });

        $("#"+ulid).append(li0);
        var lilist2 = $("#"+ulid).find('li');


        for (var i=0;i<rows.length;i++){
        	if(rows[i].DQZT == '2'){
        		img0=$('<img>',{
        		src: basepath + '/ws_static/img/warning_02.png',
        		style:'margin-right:10px;width:35px;float:left;'
        	});
        	} else {
        		img0=$('<img>',{
        		src: basepath + '/ws_static/img/warning_01.png',
        		style:'margin-right:10px;width:35px;float:left;'
        	});
        	}
        	
        	p0=$('<p>',{
        		text: rows[i].MC.replace("国网上海电力",""),
        		style:'display:inline-block;float:left;'
        	});
            li0 = $("<li>" ,{ 
            	"ckid": rows[i].ID,
            	style:'white-space: nowrap;text-overflow: ellipsis;overflow: hidden;'
            });
            li0.append(img0);
            li0.append(p0);
            
            $("#"+ulid).append(li0);
        }

        $("#"+ulid).find("li").click(function () {
            var ckid = $(this).attr("ckid");
            var isctive=$(this).is('.liSelected');
            $(this).addClass('liSelected').siblings().removeClass('liSelected');
            $("#"+ulid).siblings('.wzActive').text($(this).text())
            //判断物资类型
            var text = $("#"+CangKu2ZYHtmlLabelMap[CKLX].wzdlxli).find('.chosen_h4').text();
            var wzdlx = text.substr(0,2);
             switch(wzdlx){
				case '应急':
					wzdlx = "1";
					$('#qiangdan_title').text("应急库");
				    break;
				case '常备':
					wzdlx = "2";
					$('#qiangdan_title').text("应急库");
				    break;
				case '变电':
				    wzdlx = "3";
				    $('#qiangdan_title').text("常备库");
				    break;
				case '线路':
					wzdlx = "4";
					$('#qiangdan_title').text("常备库");
				    break;
			}
            dealCangKuWuZi(CKLX,wzdlx,ckid,g_deptchangeThisPage);   //物资管理----------仓库内设备统计
        });
    }
}

//供应商数量及列表
function dealSupplierList(){
	$.ajax({
        url: basepath + "interface/BDZT_WZGYSMX/0",
        data: '',
        type: 'get',
        dataType: 'json',
        success: function (data) {
        	var row = data.data;
            var num = 0;
            if(data.data){
            	 for(var i=0;i<row.length;i++) {
                    $("#stand_sp_ul").append('<li id='+row[i].ID+'>'+row[i].MC+'</li>');
                 }
                $('#stand_sp_num').text(row.length);
            }
        },
        error:function (data) {
            //console.log(data);
        }
    });
}

$('#stand_sp_ul').on('click','li',function () {//点击供应商详细列表，切换物资数据
	$(this).siblings('li').removeClass('liSelected');
	$(this).addClass('liSelected');
	$("#stand_sp_ul").siblings('.wzActive').text($(this).text());
	var id = $(this).attr('id');
	if(id == undefined){
		id = "-1";
	}
	dealSupplierWuZiList(id);//供应商物资列表
	
});
//供应商物资列表
function dealSupplierWuZiList(id){
	$.ajax({
        url: basepath + "interface/BDZT_GZGYSTJ_WZZLX_GIS/0?GYSID="+id,
        data: '',
        type: 'get',
        dataType: 'json',
        success: function (data) {
        	$("#stand_sp_wz_ul").empty();
        	var row = data.data;
            var num = 0;
            if(data.data){
            	 for(var i=0;i<row.length;i++) {
                    $("#stand_sp_wz_ul").append('<li wzzlx='+row[i].WZZLXMC+'><p id='+row[i].WZZLX+','+id+'>'+row[i].SL+'</p><span>'+row[i].WZZLXMC+'</span></li>');
                }
            }
        },
        error:function (data) {
            //console.log(data);
        }
   });
}
$('#stand_sp_wz_ul').on('click','p',function () {//物资点击弹出物资明细列表
	var id = $(this).attr('id');
	var array = id.split(",");
     supplierWuZiShow(array[1],array[0]);
});

/**
 * 供应商物资明细列表
 */
function supplierWuZiShow(id,lx){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showSupplierWuZiCeList(id,lx);
}

/**
 * 
 * 物资明细
 */
function showSupplierWuZiCeList(id,lx) {

    //物料描述 中类 小类 数量 仓库
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["WLMS","物料描述"],
        ["WZZLXMC","中类"],
        ["WZXLXMC","小类"],
        ["SL","数量"],
        ["GYSMC","仓库"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["GZSBBH"],lxtomapMap.QXGD);
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getSupplierWuZiDetial(dealBackDataList,id,lx);//物资明细查看(ajax接口请求)
}
function getSupplierWuZiDetial(callback,id,lx){
	var url = basepath + "interface/BDZT_GZGYSMX_WZZLX_GIS/0";
	var param = {"GYSID": id,"WZZLX": lx};
	callgetajax(callback,url,param);
}
//点击供应商数字弹出明细
$("#stand_sp_num").css({'cursor': 'pointer'})
    $("#stand_sp_num").click(function () {
        getSupplierShow();
        $('#qiangdan_title').text("供应商");
    });
    
    
/**
 * 供应商明细列表
 */
function getSupplierShow(){
	$(".bottom-list").removeClass("hide");//显示class为bottom-list的div
	showSupplierCeList();
}

/**
 * 
 * 
 */
function showSupplierCeList() {

    //供应商 主要供应物资 业务联系人 联系方式 地址
    var parentComId = "FourUl";
		var titleList = [//titleList是明细列表的表头，GZSBBH为空，代表定位图片
		["GZSBBH",""],
        ["MC","供应商"],
        ["ZYGYWZ","主要供应物资"],
        ["LXR","业务联系人"],
        ["LXFS","联系方式"],
        ["DZ","地址"],
    ];
    
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    
    function inJumpMap(id, locallayer) {
        JumpMap(locallayer["ID"],lxtomapMap.GYS);
         }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
        	console.log(titleList[i][0]);
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            newrow.push(value);
        }
        return newrow;
    }


    function dealBackDataList(data) {//ajax请求接口后的回调函数:向通用明细列表模板里面塞数据
        $('#pageBlock').hide();
         if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, "-1");
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }


    getSupplierDetial(dealBackDataList);//供应商明细查看(ajax接口请求)
}
function getSupplierDetial(callback){
	var url = basepath + "interface/BDZT_WZGYSMX/0";
	var param = {"ID": "-1"};
	callgetajax(callback,url,param);
}
//仓库详情:名称、地址、主要供应物资、业务联系人、联系方式、公司分管领导、联系方式
function showCangKuList(CKLX,ssgs) {

    var parentComId = "FourUl";
    var titleList = [
        ["ID",""],
        ["MC","仓库名称"],
        ["CKLXMC","类型"],
        ["DZ","地址"],
        ["FZR","负责人"],
        ["LXFS","联系方式"],
        ["SSGSMC","所属公司"],
        //["iiiii","联系方式"],
    ];
    var clickfuns = [
        JumpMap,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];

    getCangKuDetail(dealdata, CKLX,ssgs);//获取仓库详情

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][1] ==="公司"){
                value = SSGSMAP_ID[value];
            }
            newrow.push(value);
        }
        return newrow;
    }


    function dealdata(data) {
        $('#pageBlock',parent.document).hide();
        if (!data.data){
            createList(parentComId, titleList);
            return;
        }
        var  rows = data.data;
        createList(parentComId,titleList,rows,dealRow,null,clickfuns, lxtomapMap.CK);
        //详情插入照片附件
        $("#FourUl_add",parent.document).append('<th style="width:375px;height: 70px;line-height: 70px;color: #3c7eaf;font-size: 24px;font-weight: normal;">照片附件</th>');
        var len = $("#FourUl",parent.document).find('tr').length
        for(i = 0;i < len;i++){
        	var tr = $("#FourUl",parent.document).find('tr').eq(i);
        	$(tr).append('<td style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width:375px;height: 60px;line-height: 60px;padding:0 10px;font-size: 24px;"><img class="alert_box_show" src="'+basepath+'ws_static/img/no_img.png" alt="" style="cursor:pointer"></td>');
        }
        $("#div-1",parent.document).css('width',375*(titleList.length+1)+'px');
        if($("#FourUl",parent.document).find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock',parent.document).show();
        	fenye();
        }
    }
}

var personnel_num = {
    "realnum":0,//实到
    "cannum":0,//应到
    "idlenum":0,//空闲
    "busynum":0,//忙碌
    "thisnum":0,//本市
    "othernum":0,//外省
}
//资源监控统计-人员
function dealZiYuanTongJi_Person(ssgs) {

    getZiYuanTongJi_Person(dealdata,ssgs);

    function dealdata(data) {
        if (!data.data||data.data.length==0){
            return;
        }

        var rows = data.data;
        var allnum = 0;
        var realnum = 0;
        var cannum = 0;
        var SL = 0;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            SL = parseInt(row.SL);
            if (row.ZLXMC === "应到岗"){
                cannum += SL;
            } else {
                realnum += SL;
            }
        }
        allnum = realnum + cannum;
        dealhtml(allnum,realnum,cannum);
    }

    function dealhtml(allnum,realnum,cannum) {
        $("#wuzijiankong_person_num").text(allnum);//饼图中间数字
//      personnel_num.realnum = realnum;
//      personnel_num.cannum = cannum;
//      personnel(personnel_num);
        $("#cannum").text(cannum);//实到岗
        $("#realnum").text(realnum);//未到岗
    }

}

//资源监控统计-车辆
function dealZiYuanTongJi_Car(ssgs) {

    getZiYuanTongJi_Car(dealdata,ssgs);//资源监控统计-车辆

    function dealdata(data) {
        if (!data.data||data.data.length==0){
            return;
        }

        var rows = data.data;
        var allnum = 0;
        var idlenum = 0;
        var busynum = 0;
        var SL = 0;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            SL = parseInt(row.SL);
            if (row.ZLXMC === "空闲"){
                idlenum += SL;
            } else {
                busynum += SL;
            }
        }
        allnum = idlenum + busynum;
        dealhtml(allnum,idlenum,busynum);
    }

    function dealhtml(allnum,idlenum,busynum) {
        $("#wuzijiankong_car_num").text(allnum);
//      personnel_num.idlenum = idlenum;
//      personnel_num.busynum = busynum;
//      personnel(personnel_num);
       $("#busynum").text(busynum);
       $("#idlenum").text(idlenum);
    }

}

//资源监控统计-供应商
function dealZiYuanTongJi_Supplier(ssgs) {

    getZiYuanTongJi_Supplier(dealdata,ssgs);//资源监控统计-供应商

    function dealdata(data) {
        if (!data.data||data.data.length==0){
            return;
        }

        var rows = data.data;
        var allnum = 0;
        var thisnum = 0;
        var othernum = 0;
        var SL = 0;
        for (var i=0;i<rows.length;i++){
            var row = rows[i];
            SL = parseInt(row.SL);
            if (row.ZLXMC === "本市"){
                thisnum += SL;
            } else {
                othernum += SL;
            }
        }
        allnum = thisnum + othernum;
        dealhtml(allnum,thisnum,othernum);
    }

    function dealhtml(allnum,thisnum,othernum) {
        $("#wuzijiankong_supplier_num").text(allnum);
        personnel_num.thisnum = thisnum;
        personnel_num.othernum = othernum;
        personnel(personnel_num);//人员 车辆 饼图
    }
}

/**
 * 资源监控 
 * 下 
 * 物资监控 
 * 之 
 * 人员 车辆 供应商 饼图
 * @param {Object} personnel_nums
 */
function personnel(personnel_nums) {
    var personnel_nums_val = personnel_nums || {};
    var color=['#0f89f7'];
    var labelBottom = {
        normal : {
            color: 'rgba(10, 10, 10, 0.1)',
            label : {
                show : false,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(10, 10, 10, 0.2)'
        }
    };
    var labelFromatter = {
        normal : {
            label : {
                show : true  //平常不显示
            },
            labelLine: {  // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
                show: true
            }
        },
    };
    var radius = [60, 70];
    var personnel = echarts.init(document.getElementById('personnel'));
    option = {
        color:['#62e0ff'],
        series: [{
            type : 'pie',
            center : ['20%', '50%'],
            radius : radius,
            startAngle:180,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
//          itemStyle : labelFromatter,
            label: {
                normal: {
                    show:false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                    formatter : function (params){
                        if (params.name === ""){
                            return "";
                        }
                        return params.name +" " +params.value;
                    },
                },
            },
            labelLine:{
            	normal:{
            		show:false
            	}
            },
            data : [
                {name:'', value:0, itemStyle : labelBottom},
                {name:'应到岗',value:personnel_nums_val.cannum||0,},
                {name:'实到岗', value:personnel_nums_val.realnum||0,itemStyle : {
                    normal : {
                        color:color[0],
                    }
                }},
            ]
        },{
            type : 'pie',
            center : ['65%', '50%'],
            radius : radius,
            startAngle:180,
            clockWise: false,           // 饼图的扇区是否是顺时针排布。[ default: true ]
            hoverAnimation: false,       // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            x: 'right', // for funnel
            itemStyle : labelFromatter,
            label: {
                normal: {
                    show:false,
                    // position: 'center',
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                    formatter : function (params){
                        if (params.name === ""){
                            return "";
                        }
                        return params.name +" " +params.value;
                    },
                },
            },
            labelLine:{
            	normal:{
            		show:false
            	}
            },
            data : [
                {name:'', value:0, itemStyle : labelBottom},
                {name:'忙碌',value:personnel_nums_val.busynum||0,},
                {name:'空闲', value:personnel_nums_val.idlenum||0,itemStyle : {
                    normal : {
                        color:color[0],
                    }
                }},
            ]
        }

        ],
    };
    personnel.setOption(option);
}
//应急库-------应急物资常备物资切换
$('.emergency_title1 li h4').on("click", function() {
	var showUl = $('.emergency_list').find('ul');
	var num = $(this).index();
	$(this).addClass('chosen_h4').siblings().removeClass('chosen_h4');
	//showUl.eq(num).removeClass('hide').siblings().addClass('hide')
});
//常备库-------变电线路切换
$('.emergency_title2 li h4').on("click", function() {
	var showUl = $('.emergency_list2').find('ul');
	var num = $(this).index();
	$(this).addClass('chosen_h4').siblings().removeClass('chosen_h4');
	showUl.eq(num).removeClass('hide').siblings().addClass('hide')
});




