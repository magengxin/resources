
var g_deptchangeThisPage="8a812897493378a00149567740676661";//只给智慧监控使用的全局公司id的变量
var ZhuanYe2ValueMap = {
    "全部" : "-1",
    "变电" : "1",
    "线路" : "2",
    "电缆" : "3",
    "配电" : "4",
    "自动化" : "5",
    "通信" : "6",
}

//根据工种获取html标签
var GongZhong2DBZYHtmlLabelMap = {
    "1" : {allnumid:"dangban_tx_all",pieid:"on_duty_r1",echartfun:on_duty_r1,title:"特巡",layer:lxtomapMap.txry},
    "6" : {allnumid:"dangban_jx_all",pieid:"on_duty_r2",echartfun:on_duty_r2,title:"保障",layer:lxtomapMap.jxry},
//  "3" : {allnumid:"dangban_qx_all",pieid:"on_duty_r3",echartfun:on_duty_r3,title:"抢修",layer:lxtomapMap.qxry},
    "4" : {allnumid:"dangban_hq_all",pieid:"on_duty_r4",echartfun:on_duty_r4,title:"后勤",layer:lxtomapMap.hqry},
}
//车辆装备
var Car2DBZYHtmlLabelMap = {
    "yingji" : {id1:"car_yingji_1",id2:"car_yingji_2","CLZBLXMC":"应急发电车","CLZBLX":"1"},
    "zhihui" : {id1:"car_zhihui_1",id2:"car_zhihui_2","CLZBLXMC":"应急指挥车","CLZBLX":"2"},
    // "wuzi" : {id1:"car_wuzi_1",id2:"car_wuzi_2","CLZBLXMC":"应急物资车","CLZBLX":"4"},
    "qiangxiu" : {id1:"car_qiangxiu_1",id2:"car_qiangxiu_2","CLZBLXMC":"抢修车","CLZBLX":"3"},
    "houqin" : {id1:"car_houqin_1",id2:"car_houqin_2","CLZBLXMC":"后勤车","CLZBLX":"5"},
}



setTimeout(function(){
	loadDBZY();
},1000);

function loadDBZY() {
    bindClick_DBZY();//页面初始化加载数据
    //  dealDangBanZiYuan("-1","-1",g_deptchangeThisPage);//当班资源(特巡 保障 后勤)统计
	//  dealCar(g_deptchangeThisPage);//当班资源:车辆装备
	dealKuaDanWei(g_deptchangeThisPage);//外单位资源:跨单位 跨省市
}
function bindClick_DBZY() {
    $("#ul_dbzy_zy").find("li").click(function () {//点击切换当班资源的专业:1 变电 2 线路 3 电缆 4 配电 5 外协(去掉外协加上 自动化5 通信6)
        var text = $(this).text();
        switch(text){
		case '全部':
			$("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
		case '变电':
			$("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
		case '线路':
		    $("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
		case '电缆':
			$("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
		case '配电':
			$("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
		case '自动化':
			$("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
		case '通信':
			$("#dangban_tx_all").text(0);
			$("#tx0").text(0);
			$("#tx1").text(0);
			$("#dangban_jx_all").text(0);
			$("#bz0").text(0);
			$("#bz1").text(0);
			$("#dangban_hq_all").text(0);
			$("#hq0").text(0);
			$("#hq1").text(0);
			on_duty_r1("0","0","","0","");
			on_duty_r2("0","0","","0","");
			on_duty_r4("0","0","","0","");
		    break;
	}
        var isctive=$(this).is('.liSelected');
        $(this).addClass('liSelected').siblings().removeClass('liSelected');
        $('#dangbanziyuanList .wzActive').text(text);//点击右侧切换内容
//      dealDangBanZiYuan("-1",ZhuanYe2ValueMap[text],g_deptchangeThisPage);//当班资源(特巡 保障 后勤)统计
    });

    Object.keys(GongZhong2DBZYHtmlLabelMap).forEach(function (name) {
        var allnumid = GongZhong2DBZYHtmlLabelMap[name].allnumid;
        $("#"+allnumid).css({'cursor': 'pointer'});
        $("#"+allnumid).click(function () {//2个圆环中间的总数的点击事件
            //判断专业
            var text = $("#ul_dbzy_zy").find('.liSelected').text();
            showDangbanZiYuanList(name,ZhuanYe2ValueMap[text],"-1",g_deptchangeThisPage);//当班资源明细
        });
    })
}
//当班资源明细
function showDangbanZiYuanList(GZ,ZY,cdqk,ssgs) {

    ChooseShow("KHFW");
    $('#qiangdan_title').text(GongZhong2DBZYHtmlLabelMap[GZ].title);
   //班组类型、班组专业、班组名称、当班负责人、联系方式、是否出动
    var parentComId = ulmap.KHFW;
    switch(GZ){
       case "1":
			    var titleList = [
			        ["ID",""],
			        ["GZMC","班组类型"],
			        ["ZYMC","班组专业"],
			        ["BZMC","班组名称"],
			        ["iiii","当班负责人"],
			        ["iiii","联系方式"],
			        ["CDQKMC","是否出动"],
			    ];
			    break
	    case "4":
	    case "6":
	            var titleList = [
			        ["ID",""],
			        ["GZMC","班组类型"],
			        ["ZYMC","班组专业"],
			        ["MC","班组名称"],
			        ["FZRMC","当班负责人"],
			        ["LXFS","联系方式"],
			        ["SFMRDBMC","是否出动"],
			    ];
			    break
   }
    var clickfuns = [
        inJumpMap,
        null,
        null,
        null,
        null,
        null,
    ];

    function inJumpMap(id,locallayer) {
        JumpMap(id,locallayer);
    }

    function dealRow(row) {
        var newrow = [];
        for (var i=0;i<titleList.length;i++){
            var value = row[titleList[i][0]] || DEFAULT_DETAIL_EMPTY_TEXT;
            if (titleList[i][0] ==="SFCD"){
                value = value?"出动":"备用";
            }
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
        createList(parentComId,titleList,rows,dealRow,null,clickfuns,GongZhong2DBZYHtmlLabelMap[GZ].layer);
        if($("#FourUl").find('table').find('tbody').find('tr').length == rows.length){
        	$('#pageBlock').show();
        	fenye();
        }
    }
    switch(GZ){
       case "1":
			    getDangBanZiyuanTXDetail(dealdata,GZ,ZY,cdqk,ssgs);
			    break
	    case "4":
	    case "6":
	            getDangBanZiyuanDetail(dealdata,GZ,ZY,cdqk,ssgs);
			    break
   }
}

//当班资源统计
//GZ	工种 1 特巡 2 检修 3 抢修 4 后勤 5 司机
//ZY	专业 1 变电 2 线路 3 电缆 4 配电 5 外协
function getDangBanZiyuanCount(callback,GZ,ZY,ssgs) {
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "GZ": GZ, "ZY": ZY, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETDBZYCDQKTJ_DW/0";
    callgetajax(callback,url,param);
}

//特巡的当班资源统计是另外接口
function getDangBanZiyuanCount_TX(callback,zy,ssgs) {
    //http://localhost:8080/pdpsc-app/interface/BDZT_GETDBZY_XSRYCDTJ/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-01-01&JSSJ=2018-08-02

    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW,"ZDID":zy};
    var url = basepath + "interface/BDZT_GETDBZY_XSRYCDTJ/0";
    callgetajax(callback,url,param);

}

//当班资源明细处理车辆

function getDangBanZiyuanDetail(callback,GZ,ZY,cdqk,ssgs) {
    //http://localhost:58080/pdpsc-app/interface/BDZT_GETDBZYMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-13&JSSJ=2018-09-1
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "GZ": GZ, "ZY": ZY, "CDQK":cdqk, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETBDDWMX/0";
    callgetajax(callback,url,param);
}

//当班资源人员明细
function getDangBanZiyuanTXDetail(callback,GZ,ZY,cdqk,ssgs) {
    //http://localhost:58080/pdpsc-app/interface/BDZT_GETDBZYMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-13&JSSJ=2018-09-1
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "ZY": ZY, "CDQK":cdqk, "KSSJ": KSSJ_NOW, "JSSJ": JSSJ_NOW};
    var url = basepath + "interface/BDZT_GETXSQKTJ_RYMX/0";
    callgetajax(callback,url,param);
}



//处理车辆
function dealCar(ssgs) {

    getDangBanZiyuanDetail(dealdata,"","5","-1",null,ssgs);

    var resultset={};
    function dealdata(data) {
        if (!data.data){
            data.data = [];
        }
        var rows = data.data;
        var CLZBLX = 0;
        var SFCD;
        for (var i=0;i<rows.length;i++){
            var row =rows[i];
            CLZBLX = row.CLZBLX;
            SFCD = row.SFCD;
            if (CLZBLX){
                var obj = resultset[CLZBLX];
                if (!obj){
                    obj = {ZS:0,CDS:0};
                    resultset[CLZBLX] = obj;
                }
                obj.ZS += 1;
                if (SFCD === "1"){
                    obj.CDS += 1;
                }
            }
        }
        dealhtml(resultset);
    }
    function dealhtml(resultset) {
        Object.keys(Car2DBZYHtmlLabelMap).forEach(function (name) {
            var CLZBLX = Car2DBZYHtmlLabelMap[name].CLZBLX;
            if (resultset[CLZBLX]){
                $("#"+Car2DBZYHtmlLabelMap[name].id1).text(resultset[CLZBLX].CDS || 0);
                $("#"+Car2DBZYHtmlLabelMap[name].id2).text(resultset[CLZBLX].ZS || 0);
            } else {
                $("#"+Car2DBZYHtmlLabelMap[name].id1).text(0);
                $("#"+Car2DBZYHtmlLabelMap[name].id2).text(0);
            }

        });
    }
}

//外单位人员
function dealKuaDanWei(ssgs) {

    var titleList = [
        ["SSGSMC","单位名称"],
        ["FZR","联系人"],
         ["LXFS","联系电话"],
        ["ZYMS","资源"],
    ];

    cleartable();
    getExternZiyuanDetail(dealdata,"-1",ssgs);//外部资源明细(人员列表)，BYLX 备用类型 1 跨单位备用 2 跨省备用
    function dealdata(data) {
        if (!data.data || data.data.length ==0){
            return;
        }
        var rows = data.data;
        dealhtml(rows);
    }

    function dealhtml(rows) {
        var tbody = $("#table_kuodanwei").find("tbody");
        tbody.empty();
        var tr;
        for (var i=0;i<rows.length;i++){
            addNewTr(tbody,rows[i],titleList);
        }
    }

    function cleartable() {
        var tbody = $("#table_kuodanwei").find("tbody");
        tbody.empty();
    }

    function addNewTr(tbody,row,titleList) {
        var tr = $("<tr>");
        var th;
        for (var i = 0;i<titleList.length;i++){
            th = $("<th>" ,{
                text: row[titleList[i][0]],
            });
            tr.append(th);
        }
        tbody.append(tr);;
    }

}

//外部资源明细(人员列表)，BYLX 备用类型 1 跨单位备用 2 跨省备用
function getExternZiyuanDetail(callback,BYLX,ssgs) {

    //http://localhost:8080/pdpsc-app/interface/BDZT_BYZYMX/0?SSGS=8a812897493378a00149567740676661&KSSJ=2018-09-13&JSSJ=2018-09-1
    var ssgsval = ssgs || SSGS;
    var param = {"SSGS": ssgsval, "BYLX":BYLX};
    var url = basepath + "interface/BDZT_BYZYMX/0";
    callgetajax(callback,url,param);


}



	on_duty_r1("0","0","","0","");//资源监控 下 当班资源 之 特巡 饼图
    on_duty_r2("0","0","","0","");//资源监控 下 当班资源 之 保障 饼图(检修、抢修合并为保障)
//  on_duty_r3();//资源监控 下 当班资源 之 抢修 饼图
    on_duty_r4("0","0","","0","");//资源监控 下 当班资源 之 后勤 饼图
//  personnel();//资源监控 下 物资监控 之 人员 车辆 供应商 三个饼图 
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 特巡 饼图
 * @param {Object} num1 出动
 * @param {Object} num2 待命
 * @param {Object} num3
 * @param {Object} num4 后备
 * @param {Object} num5
 */
function on_duty_r1(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
            }
        }
    };

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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;

    var on_duty_r1 = echarts.init(document.getElementById('on_duty_r1'));
    option = {
        tooltip : {
            show: true,
            textStyle:{
            	color:'#b7e7f3'
            },
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
//              console.log('aaaaaaaaaaaaaaaaaa啊' + {c});
                if (params.name === "invisible"){
                    return (
                        params.seriesName+ percent.toString()
                    );
                }
                return (
                    params.seriesName + params.name + "  " + percent.toString()
                );
            }
        },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['40%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                 labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num1val,name:'出动数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val,name:'' ,itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['40%','50%'],
                radius : [45, 55],
                   labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                   label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val,  itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
    on_duty_r1.setOption(option);
    return on_duty_r1;
}
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 检修 饼图
 * @param {Object} num1 当班数
 * @param {Object} num2 待命数
 * @param {Object} num3
 * @param {Object} num4 后备数
 * @param {Object} num5
 */
function on_duty_r2(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
            }
        }
    };
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;

    var on_duty_r2 = echarts.init(document.getElementById('on_duty_r2'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
                if (params.name === "invisible"){
                    return (
                        params.seriesName + percent.toString()
                    );
                }
                return (
                    params.seriesName + params.name + "  " + percent.toString()
                );


            }
        },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['40%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                 labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num1val,name:'出动数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['40%','50%'],
                radius : [45, 55],
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val,itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
    on_duty_r2.setOption(option);
    return on_duty_r2;
}
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 抢修 饼图
 * @param {Object} num1
 * @param {Object} num2
 * @param {Object} num3
 * @param {Object} num4
 * @param {Object} num5
 */
function on_duty_r3(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
            }
        }
    };
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;
//不调用第三个饼图
//  var on_duty_r3 = echarts.init(document.getElementById('on_duty_r3'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
                if (params.name === "invisible"){
                    return (
                        params.seriesName+ "<br/>" + percent.toString()
                    );
                }
                return (
                    params.seriesName+ "<br/>" + params.name + " : " + percent.toString()
                );


            }
        },
        // legend: {
        //     orient:'vertical',
        //     x : 60,
        //     y : 70,
        //     itemGap:8,
        //     data:['25','15','4'],
        //     textStyle:{//图例文字的样式
        //         color:'#ccc',
        //         fontSize:20
        //     }
        // },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['50%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        textStyle:{
                            fontSize:24,
                            color:'#fff'
                        },
                        formatter : function (params){
                            if (params.name === "invisible"){
                                return "";
                            }
                            return params.value;
                        },
                    },
                },
                data:[
                    {value:num1val,name:'当班数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['50%','50%'],
                radius : [45, 55],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            fontSize:24,
                            color:'#fff'
                        },
                        formatter : function (params){
                            if (params.name === "invisible"){
                                return "";
                            }
                            return params.value;
                        },
                    },
                },
                // labelLine: {
                //     normal: {
                //         show: true,
                //     },
                // },
                itemStyle : dataStyle,
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
//  on_duty_r3.setOption(option);
    return on_duty_r3;
}
/**
 * 资源监控 
 * 下 
 * 当班资源 
 * 之 
 * 后勤 饼图
 * @param {Object} num1
 * @param {Object} num2
 * @param {Object} num3
 * @param {Object} num4
 * @param {Object} num5
 */
function on_duty_r4(num1,num2,num3,num4,num5) {
    var dataStyle = {
        normal: {
            label: {show:true},
            labelLine: {show:true},
            textStyle:{
                position:'center'
            }
        }
    };
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
            color: 'rgba(10, 10, 10, 0.1)'
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(188,188,188,0.1)',
            label: {show:false},
            labelLine: {show:false},
            textStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        emphasis : {
            color: 'rgba(188,188,188,0.1)'
        }
    };
    var num1val = num1||0;
    var num2val = num2||0;
    var num3val = num3||0;
    var num4val = num4||0;
    var num5val = num5||0;

    var on_duty_r4 = echarts.init(document.getElementById('on_duty_r4'));
    option = {
//
        tooltip : {
            show: true,
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: function (params) {
//              var percent = params.percent; //显示百分比
                var percent = params.value;  //显示原始数值
                if (params.name === "invisible"){
                    return (
                        params.seriesName + percent.toString()
                    );
                }
                return (
                    params.seriesName + params.name + "  " + percent.toString()
                );


            }
        },
        color:['#1a7bfe','#2cc072','#04a8ce'],
        animation: false,
        series : [
            {
                name:'',
                type:'pie',
                clockWise:true,
                radius : [60, 80],
                center:['40%','50%'],
                itemStyle : dataStyle,
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                 labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                data:[
                    {value:num1val,name:'出动数',},
                    {value:num2val,name:'待命数',},
                    {value:num3val, name:'invisible', itemStyle : placeHolderStyle}
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:true,
                center:['40%','50%'],
                radius : [45, 55],
                label: {
                    normal: {
                    	formatter:'{hr|}\n {b|{b} }{c}',
                        show: false,
                        position: 'outside',
                        textStyle:{
                            fontSize:16,
                            color:'#fff'
                        },
                        color:'#b7e7f3',
                        rich:{
                        	hr:{
                        		borderColor:'#aaa'
                        	},
                        	b:{
                        		fontSize:16
                        	}
                        },
                    },
                },
                   labelLine: {
                       normal: {
                           show: false,
                       },
                   },
                itemStyle : dataStyle,
                data:[
                    {value:num4val, name:'后备'},
//                  {value:num5val,  itemStyle : placeHolderStyle}
                ]
            },
        ]
    };
    on_duty_r4.setOption(option);
    return on_duty_r4;
}
