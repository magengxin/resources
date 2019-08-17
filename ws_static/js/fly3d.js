$(function () {
    loadLeft();
});

//发送数据给对方
function sendMsgToRight(obj) {
    window.objLeft.onMsg(obj);
}

//接受数据
function revMsgFromRight(obj) {
    var ss = $("#revcontent").text()
    $("#revcontent").text(ss + " " + obj);
}

//创建QTChannel
function createLeftChannel() {
    new QWebChannel(qt.webChannelTransport, function(channel) {
        window.objLeft = channel.objects.D3objLeft;
        window.objLeft.revMsg.connect(revMsgFromRight);
    });
}

function loadLeft() {
    createLeftChannel();
    $("#excute").click(function () {
        flyTo3D( 10010 , 11111);
    });
}

function flyTo3D( layer , id){
    var obj = new Object();
    obj.function = "flyTo3D";
    obj.layer = layer;
    obj.id = id;
    sendMsgToRight( JSON.stringify( obj ) );
}

function flyToEquip3D(id){
    var obj = new Object();
    obj.function = "flyToEquip3D";
    obj.id = id;
    sendMsgToRight( JSON.stringify( obj ) );
}