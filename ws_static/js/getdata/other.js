
//通道监拍外部台账
function getTongDaoJianPaiAttrUrl(callback) {

    //http://127.0.0.1:8080/pdpsc-app/bdGis/bdYFURLdata?url=xljk_zy_url
    var url = basepath + "bdGis/bdYFURLdata?url=xljk_zy_url";
    callgetajax(callback,url,null);
}

//SVG站内图
function getSvgZNData(callback,SBID) {

    //http://10.131.216.134:7889/pdpsc-app/svgGet/svgZN?SBID=44f64e23638a039c93573aba47015744f6210d42cb
    var param = {"SBID": SBID};
    var url = basepath + "svgGet/svgZN";
    callgetajax(callback,url,param);
}

//SVG路径图
function getSvgLJData(callback,SBID) {

    //http://10.131.216.134:7889/pdpsc-app/svgGet/svgLJ?SBID=2018080801
    var param = {"SBID": SBID};
    var url = basepath + "svgGet/svgLJ";
    callgetajax(callback,url,param);
}

//电能质量外部台账
function getDNZLAttrUrl(callback) {

    //http://127.0.0.1:8080/pdpsc-app/bdGis/bdYFURLdata?url=xljk_zy_url
    var url = basepath + "bdGis/bdYFURLdata?url=dnzl_ld_url";
    callgetajax(callback,url,null);
}
