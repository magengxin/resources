
$(function () {
    loadXX();
});

function loadXX() {
    showZouMaDeng(g_deptchange);
}

//设置走马灯数据
function showZouMaDeng(ssgs){

    getZouMaDengData(dealdata,ssgs);

    function dealdata(data) {
        if (!data.data || data.data.length == 0){
            return;
        }
        $("#zoumadeng").text(data.data[0].MS);
    }
}