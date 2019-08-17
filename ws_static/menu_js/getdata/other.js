

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


