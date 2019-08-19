//防台防汛台风
function getYjgjTaifeng(callback) {

	var url = basepath + "interface/GETTFYJTJ/-1/0";
	var param = {
		"SDATE": moment().format("YYYY-MM-DD 00:00:00"),
		"EDATE": moment().format("YYYY-MM-DD 23:59:59")
	};
	$.ajax({
		url: url,
		data: param,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			callback(data)
		}
	});
}
////防台防汛雷电
//function getYjgjLeidian(callback) {
//
//	var url = basepath+"thunder/linePredictsSta";
//	var param = {"time":moment().format("YYYY-M-D HH:00:00")};
//	$.ajax({
//		url: url,
//		data: param,
//		type: 'get',
//		dataType: 'json',
//		success: function(data) {
//			callback(data)
//		}
//	});
//}
//防汛告警
function getYjgjFangXun(callback) {
	var url = basepath + "interface/BDZT_ZHJPTJ/0";
	var param = {
		"SSGS": "8a812897493378a00149567740676661",
		"KSSJ": KSSJ_2,
		"JSSJ": JSSJ_2
	};
	$.ajax({
		url: url,
		data: param,
		type: 'get',
		dataType: 'json',
		success: function(data) {
			callback(data)
		}
	});
}
//应急
function getFangXunWuZi(callback) {
	//http://localhost:8080/pdpsc-app/interface/BDZT_CKWZTJ/0?SSGS=8a812897493378a00149567740676661
	var ssgsval = '8a812897493378a00149567740676661';
	var param = {
		"SSGS": ssgsval
	};
	var url = basepath + "interface/BDZT_CKWZTJ/0";
	$.ajax({
				url: url,
				data: param,
				type: 'get',
				dataType: 'json',
				success: function(data) {
					callback(data)
				}
		})
}

function getFangXunDuiWu(callback) {
	var param = {
		"LX": -1,
		"ZLX": -1
	};
	var url = basepath + "interface/GETFTFX_ZYTJ/0";
	$.ajax({
				url: url,
				data: param,
				type: 'get',
				dataType: 'json',
				success: function(data) {
					callback(data)
				}
		})
}