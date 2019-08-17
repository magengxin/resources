$(document).ready(function () {
    // 初始化
    Popup_gzjsfx.setData({
        area: ["核心区", "浦东", "市区", "市北", "市南", "嘉定", "松江", "青浦", "奉贤", "金山", "崇明", "长兴"],
        tzhb: {
            curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        gzhb: {
            curMonth: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
            lastMonth: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
        },
        gzyy: {
            data: [
                {name: "架空线路", value: 0},
                {name: "电缆", value: 0},
                {name: "变电", value: 0},
            ]
        },
        gzyy2: {
            data: [
                {name: "架空线路", value: 0},
                {name: "电缆", value: 0},
                {name: "变电", value: 0},
            ]
        },
        tzlhb: {
            curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        tylhb: {
            curMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        ////////////////////
        tzcs: {
            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        gzcs: {
            curYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lastYear: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        tzl: {
            "当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        tyl: {
            "当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司当年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "上海公司上年": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        ljyh: {
            data: [
                {name: "10KV", value: 0},
                {name: "380KV", value: 0}
            ]
        },
        yxyh: {
            data: [
                {name: "10KV", value: 0},
                {name: "380KV", value: 0}
            ]
        }
    });

});

/**
 * 点击地址切换
 * @param {Object} area
 */
function gzjc_qsfx(area) {
    if(area != '上海'){
        $("#fenbutongji1").hide();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi1").show();
        $(".m_gzjzfx").hide();
        $(".y_gzjzfx").show();
        popup_tab_toggle($("#fenbutongji1"),1);
        $("input[name = 'radio_gzjcfx_type']").get(1).checked = true;
    }
    if(area == '上海'){
        $("#fenbutongji1").show();//只有上海公司有分布统计，非上海公司没有分布统计
        $("#qushifenxi1").show();
        $("input[name = 'radio_gzjcfx_type']").get(0).checked = true;
        $(".m_gzjzfx").show();
        $(".y_gzjzfx").hide();
        popup_tab_toggle($("#fenbutongji1"),0);
    }

	clickChangeYear()//地区切换完成后调一下年份切换函数来重新初始化趋势分析
}

/**
 * 点击切换年份
 */
function clickChangeYear(){
	var year=$("input[name = 'radio_gzjcfx_year']:checked").val();
	var eara=$("input[name = 'radio_gzjcfx_area']:checked").val();
	gzjc_qsfx_popup(eara, year);
	gzjc_fbtj()
//	if( new Date().getFullYear() == year){
//		gzjc_qsfx_popup(eara, year);
//	}else{
//		var date1 = moment().add(-1 , "year").format("YYYY");
//		gzjc_qsfx_popup(eara, date1);
//	}	
}

/**
 * 点击月份切换初始化分布统计
 */

function gzjc_fbtj() {
	var m = $("#l_pop_gzjc_m").attr("data-month");
	var month = new Date().getMonth();
	var year = moment().format("YYYY");
	if($("input[name = 'radio_gzjcfx_year']:checked").val() == 2018){
		m = $("#l_pop_gzjc_m").attr("data-month");
		month = $("#l_pop_gzjc_m").attr("data-month");
		year = $("input[name = 'radio_gzjcfx_year']:checked").val()
	}
	if(m>month){
		$("#l_pop_gzjc_m").attr("data-month",month);
		return;
	}
    if(Number(m)>9){
    	var thisMon=year+m;
    }else{
    	var thisMon=year+'0'+m;
    }
    tm=Number(m);
    if(tm>9){
    	var lastMon=year-1+tm;
    }else{
    	var lastMon=year-1+'0'+tm;
    }
    
    gzjc_fbtj_popup(thisMon, lastMon);
}

/**
 * 点击弹出中间弹框的按钮
 */
function gzjc_fbtj_init() {
	setTimeout(function(){
		$('.popup-normal__areaSelect').find('input')[0].click();
	},1000);          
	$('#l_pop_gzjc_y').text(moment().format("YYYY")+'年');
	gzjc_fbtj();//初始化分布统计
	gzjc_qsfx_popup('上海', moment().format("YYYY")); //初始化趋势分析----2019-03-30 09:34:20
}

/**
 * 绑定分布统计图表
 * @param {Object} yyyymm
 * @param {Object} yyyymml
 */
function gzjc_fbtj_popup(yyyymm, yyyymml) {//当月，上月
    var f1 = function () {
        var n1s = [], n2s = [], n3s = [], n4s = [], n5s = [0, 0, 0], n6s = [0, 0];
        for (var i = 0; i < arguments.length; i++) {
            var data = arguments[i][0].data;
            if (data == undefined) {
                n1s[i] = 0;
                n2s[i] = [0, 0, 0];
                n3s[i] = 0;
                n4s[i] = 0;
            } else {
                var n2ss = [0, 0, 0];
                for (var j = 0; j < data.length; j++) {
                    switch (data[j].LX) {
                        case '1': //跳闸
                            n1s[i] = Number(data[j].VALUE);
                            break;
                        case '5':
                            switch (data[j].ZLX) {
                                case '1':
                                    n6s[0] += Number(data[j].VALUE);
                                    break;
                                case '2':
                                    n6s[1] += Number(data[j].VALUE);
                                    break;
                            }
                            break;
                        case '6': //故障
                            switch (data[j].ZLX) {
                                case '1':
                                    n2ss[0] = Number(data[j].VALUE);
                                    n5s[0] += Number(data[j].VALUE);
                                    break;
                                case '2':
                                    n2ss[1] = Number(data[j].VALUE);
                                    n5s[1] += Number(data[j].VALUE);
                                    break;
                                case '3':
                                    n2ss[2] = Number(data[j].VALUE);
                                    n5s[2] += Number(data[j].VALUE);
                                    break;
                            }
                            n2s[i] = n2ss;
                            break;
                        case '3': //跳闸率
                            n3s[i] = Number(data[j].VALUE);
                            break;
                        case '4': //故障率
                            n4s[i] = Number(data[j].VALUE);
                    }
                }
            }
        }
        Popup_gzjsfx.setData({
            tzhb: {curMonth: n1s},
            gzhb: {curMonth: n2s},
            tzlhb: {curMonth: n3s},
            tylhb: {curMonth: n4s},
            gzyy: {
                data: [
                    {name: "架空线路", value: n5s[0]},
                    {name: "电缆", value: n5s[1]},
                    {name: "变电", value: n5s[2]},
                ]
            },
           /* gzyy2: {
                data: [
                    {name: "架空线路", value: n5s[0]},
                    {name: "电缆", value: n5s[1]},
                    {name: "变电", value: n5s[2]},
                ]
            },*/
            ljyh: {
                data: [
                    {name: "10KV", value: n6s[0]},
                    {name: "380KV", value: n6s[1]}
                ]
            },
            yxyh: {
                data: [
                    {name: "10KV", value: n6s[0]},
                    {name: "380KV", value: n6s[1]}
                ]
            },
        });
    };
    getGuzhangTongjiData(f1, SSGS_IDS, yyyymm);

    var f2 = function () {
        var n1s = [], n2s = [], n3s = [], n4s = [];
        for (var i = 0; i < arguments.length; i++) {
            var data = arguments[i][0].data;
            if (data == undefined) {
                n1s[i] = 0;
                n2s[i] = [0, 0, 0];
                n3s[i] = 0;
                n4s[i] = 0;
            } else {
                var n2ss = [0, 0, 0];
                for (var j = 0; j < data.length; j++) {
                    switch (data[j].LX) {
                        case '1': //跳闸
                            n1s[i] = Number(data[j].VALUE);
                            break;
                        case '6': //故障
                            switch (data[j].ZLX) {
                                case '1':
                                    n2ss[0] = Number(data[j].VALUE);
                                    break;
                                case '2':
                                    n2ss[1] = Number(data[j].VALUE);
                                    break;
                                case '3':
                                    n2ss[2] = Number(data[j].VALUE);
                                    break;
                            }
                            n2s[i] = n2ss;
                            break;
                        case '3': //跳闸率
                            n3s[i] = Number(data[j].VALUE);
                            break;
                        case '4': //停运率
                            n4s[i] = Number(data[j].VALUE);
                    }
                }
            }
        }
        Popup_gzjsfx.setData({
            tzhb: {lastMonth: n1s},
            gzhb: {lastMonth: n2s},
            tzlhb: {lastMonth: n3s},
            tylhb: {lastMonth: n4s},
        });
    };
    getGuzhangTongjiData(f2, SSGS_IDS, yyyymml);
}

/**
 * 绑定趋势分析图表
 * @param {Object} ssgs
 * @param {Object} date
 */
function gzjc_qsfx_popup(ssgs, date) {//date---2019
	var n5s = [0, 0, 0];
    var zm = {'01':0, '02':1, '03':2, '04':3, '05':4, '06':5, '07':6, '08':7, '09':8, '10':9, '11':10, '12':11};
    var zy = [date-1, date];
//  var zy = [date.getUTCFullYear() - 1, date.getUTCFullYear()];
    var startMonth = zy[0] + "01";
//  var endMonth = dateFtt("yyyyMM", date);
	var endMonth;
	if(date == '2018'){
		endMonth = '201812'
	}else{
		endMonth = moment().add(-1 , "month").format("YYYYMM");
	}
    var t = function(zz) {
        zz = zz || 12;
        var arr = [];
        arr.length = 12;
        return arr.fill(0, 0, zz);;
    }
	var thisYearTzl=[];
	var lastYearTzl=[];
	var thisYearTyl=[];
	var lastYearTyl=[];
	
    var f = function (rlt) {
        var cm = 12;
        var n1s = t(cm), n2s = t(cm), n3s = t(cm), n4s = t(cm);
        var p1s = t(), p2s = t(), p3s = t(), p4s = t();
        var data = rlt.data;
        if (rlt.data != null) {
            for (var i = 0; i < data.length; i++) {
                switch (data[i].LX) {
                    case '1': //跳闸
                        if (data[i].NF == zy[0] + "") {
                            p1s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n1s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '2': //故障
                        if (data[i].NF == zy[0] + "") {
                            p2s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n2s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '3': //跳闸率
                        if (data[i].NF == zy[0] + "") {
                            p3s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n3s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                    case '4': //停运率
                        if (data[i].NF == zy[0] + "") {
                            p4s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        } else if (data[i].NF == zy[1] + "") {
                            n4s[zm[data[i].NY.substr(4)]] = Number(data[i].VALUE);
                        }
                        break;
                   case '6'://故障
                   if(date == data[i].NF){
                       switch (data[i].ZLX) {
                                case '1':
                                    n5s[0] += Number(data[i].VALUE);
                                    break;
                                case '2':
                                    n5s[1] += Number(data[i].VALUE);
                                    break;
                                case '3':
                                    n5s[2] += Number(data[i].VALUE);
                                    break;
                            }
                      }
                }
            }
        }
//      var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
//      //当前月份没有值，给他们赋值为null则在统计图形上不会被连线
//      n1s[nowMonth] = null;n2s[nowMonth] = null;n3s[nowMonth] = null;n4s[nowMonth] = null;

		if(date == '2019'){
			var nowMonth = new Date().getMonth();//获取当前月份:0-11 代表 1~12月
			for(i = nowMonth;i <= 11;i++){
				n1s[i] = null;//当前月份到12月值确定没有值，给他们赋值为null则在统计图形上不会被连线
				n2s[i] = null;
				n3s[i] = null;
				n4s[i] = null;
			}
		}
        if(ssgs=='上海'){
        	Popup_gzjsfx.setData({
	        	tzl: {"当年": n3s, "上年": p3s},//跳闸率
	            tyl: {"当年": n4s, "上年": p4s},//停运率
	            tzcs: {curYear: n1s, lastYear: p1s},//跳闸次数
	            gzcs: {curYear: n2s, lastYear: p2s},//故障次数 
	            gzyy2: {
	                data: [
	                    {name: "架空线路", value: n5s[0]},
	                    {name: "电缆", value: n5s[1]},
	                    {name: "变电", value: n5s[2]},
	                ]
             	},
	        },true);
        }else{
        	thisYearTzl=n3s;
        	lastYearTzl=p3s;
        	thisYearTyl=n4s;
			lastYearTyl=p4s;
			Popup_gzjsfx.setData({
	            tzcs: {curYear: n1s, lastYear: p1s},//跳闸次数
	            gzcs: {curYear: n2s, lastYear: p2s},//故障次数 
	            gzyy2: {
	                data: [
	                    {name: "架空线路", value: n5s[0]},
	                    {name: "电缆", value: n5s[1]},
	                    {name: "变电", value: n5s[2]},
	                ]
             	},
             	tzl: {"当年": thisYearTzl, "上年": lastYearTzl,"上海公司当年": n3s, "上海公司上年": p3s},
            	tyl: {"当年": thisYearTyl, "上年": lastYearTyl,"上海公司当年": n4s, "上海公司上年": p4s},
	        },true);
        }
        
    };
    getGuzhangFenxiData(f, SSGSMAP_NAME[ssgs], startMonth, endMonth);
    
}
