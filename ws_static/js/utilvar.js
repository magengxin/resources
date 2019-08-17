//定义通用变量

if(releaseFlag=='baodian'){//发布版本的基本路径
   	var basepath = WEB_ROOT;
	var mapPath=basepath+"/bdBiz/bdGis";
}else if(releaseFlag=='anbao'){
	var basepath = WEB_ROOT;
	var mapPath=basepath+"/bdBiz/abGis";
}else{//测试版本的基本路径
	var baseip = "http://127.0.0.1:8080/";
	var basepath = baseip + "pdpsc-app/";
	//var mapPath="/map/static/js/gisJs/testWR/maps.html";
	var mapPath="/map/webpage/map_kf.html";
}

var SSGS = "8a812897493378a00149567740676661";
var KSSJ_NOW = dateFtt("yyyy-MM-dd", new Date()) + " 00:00:00";//当天
var JSSJ_NOW = dateFtt("yyyy-MM-dd", new Date()) + " 23:59:59"; //当天
var KSSJ_ZT = dateFtt("yyyy-MM-dd", new Date(new Date() - 24 * 60 * 60 * 1000)) + " 00:00:00";//昨天
var JSSJ_ZT = dateFtt("yyyy-MM-dd", new Date(new Date() - 24 * 60 * 60 * 1000)) + " 23:59:59";//昨天
var KSSJ_2_NOW = dateFtt("yyyy-MM-dd", new Date());
var JSSJ_2_NOW = dateFtt("yyyy-MM-dd", new Date());
var KSSJ = "2018-07-08 00:00:00";
var JSSJ = "2018-07-08 23:59:59";
var KSSJ_SIMP = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000));
var JSSJ_SIMP = dateFtt("yyyyMMdd", new Date());

var KSSJ_2 = dateFtt("yyyy-MM-dd", new Date());
var JSSJ_2 = dateFtt("yyyy-MM-dd", new Date(new Date() + 24 * 60 * 60 * 1000));

var _CURR_DATE = new Date();
var _YYYYMM_CURR = dateFtt("yyyyMM", new Date(_CURR_DATE));
var _YYYYMM_PRE = dateFtt("yyyyMM", new Date(new Date(_CURR_DATE).setMonth(new Date(_CURR_DATE).getMonth() - 1)));
var _YYYYMM_PRE_PRE = dateFtt("yyyyMM", new Date(new Date(_CURR_DATE).setMonth(new Date(_CURR_DATE).getMonth() - 2)));

var GZJK_DZ_LIMIT = 10;

var SSGS_IDS = [
    //"8a812897493378a00149567740676661",
    "JBH-HXQ",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ",
];

var KSSJ_NOW_YYYYMMDD = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000));//昨天
var JSSJ_NOW_YYYYMMDD = dateFtt("yyyyMMdd", new Date(new Date() - 24 * 60 * 60 * 1000));//昨天
var KSSJ_YYYYMM = dateFtt("yyyyMM", new Date(new Date() - 24 * 60 * 60 * 1000));//昨天
var JSSJ_YYYYMM = dateFtt("yyyyMM", new Date(new Date() - 24 * 60 * 60 * 1000));//昨天

var SSGSMAP_ID = {
    "8a812897493378a00149567740676661": "上海电力公司",
    "JBH-HXQ": "核心区公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06": "浦东供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03": "市区供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04": "市北供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05": "市南供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08": "嘉定供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09": "青浦供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07": "奉贤供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A": "松江供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B": "金山供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ": "崇明供电公司",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ": "长兴供电公司",

    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D": "供电服务中心",
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50": "检修公司",
};

var SSGSMAP_NAME = {
    "上海": "8a812897493378a00149567740676661",
    "核心": "JBH-HXQ",
    "浦东": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP06",
    "市区": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP03",
    "市北": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP04",
    "市南": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP05",
    "嘉定": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP08",
    "松江": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0A",
    "青浦": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP09",
    "奉贤": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP07",
    "金山": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0B",
    "崇明": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPHZ",
    "长兴": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSPKZ",

    "供电": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP0D",
    "检修": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFSP50",
};

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

var DEFAULT_DETAIL_EMPTY_TEXT = "---"; //详情中缺少字段的文本

var YJYHYCS = 0;//一级用户异常数
var EJYHYCS = 1;//二级用户异常数
var SFQSBYCS = 0;//示范区设备异常数

var DYDJ2ValueMap = {
    "0.4kV": "08",
    "10kV": "22",
//  "20kV": "24",
    "35kV": "25",
    "110kV": "32",
    "220kV": "33",
    "500kV及以上": "35,37,85,83",
}

var DYDJ2NameMap = {
    "380V": "08",
    "10kV": "22",
    "20kV": "24",
    "35kV": "25",
    "110kV": "32",
    "220kV": "33",
    "500kV": "35",
}

// 22	交流10kV	10kV
// 23	交流15.75kV	15.75kV
// 24	交流20kV	20kV
// 25	交流35kV	35kV
// 30	交流66kV	66kV
// 31	交流72.5kV	72.5kV
// 32	交流110kV	110kV
// 33	交流220kV	220kV
// 34	交流330kV	330kV
// 35	交流500kV	500kV
// 36	交流750kV	750kV
// 37	交流1000kV	1000kV
// 01	交流6V	6V
// 02	交流12V	12V
// 03	交流24V	24V
// 04	交流36V	36V
// 05	交流48V	48V
// 06	交流110V	110V
// 07	交流220V	220V
// 08	交流380V（含400V）	380V（含400V）
// 09	交流660V	660V
// 10	交流1000V（含1140V）	1000V（含1140V）
// 11	交流600V	600V
// 12	交流750V	750V
// 13	交流1500V	1500V
// 14	交流3000V	3000V
// 15	交流2500V	2500V
// 20	交流3kV	3kV
// 21	交流6kV	6kV
// 86	直流1000kV	1000kV
// 85	直流800kV	800kV
// 84	直流660kV	660kV
// 83	直流500kV	500kV
// 82	直流400kV	400kV
// 88	直流320kV	320kV
// 87	直流200kV	200kV
// 81	直流125kV	125kV
// 80	直流120kV	120kV
// 78	直流50kV	50kV
// 76	直流35kV	35kV
// 77	直流30kV	30kV
// 73	直流3000V	3000V
// 72	直流1500V	1500V
// 71	直流750V	750V
// 70	直流600V	600V
// 60	直流220V	220V
// 56	直流110V	110V
// 55	直流48V	48V
// 54	直流36V	36V
// 53	直流24V	24V
// 52	直流12V	12V
// 51	直流6V	6V
// 90	直流166.7kV	166.7kV
