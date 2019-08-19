
// 弹框显示隐藏
var Popup = (function(){
    var curpopup = null;
    function show(idSelector) {
        var newpopup = document.querySelector(idSelector);
        if(!newpopup) {
            return;
        }
        hide();
        newpopup.classList.add("is-show");
        curpopup = newpopup;
    }
    function hide() {
        if(!curpopup) {
            return;
        }
        curpopup.classList.remove("is-show");
        curpopup = null;
    }
    return {
        show: show,
        hide: hide
    }
})();

// 右侧一级tab切换 音效
var audio_rightMainNav = new Audio();
audio_rightMainNav.src = basepath+"/ws_static/audio/rightMainNav.wav";
audio_rightMainNav.preload = "auto";
audio_rightMainNav.loop = false;
// 右侧一级tab切换
function rNavMain(o){
    var me = $(o),
        li = me.parent().find("li");
    var meIndex = li.index(me);
    // 标签切换
    li.each(function(index){
        $(this).removeClass("navTabCur").removeClass("navTabL");
        if(index < meIndex) {
            $(this).addClass("navTabL");
        }
    });
    me.addClass("navTabCur");
    // 内容切换
    me.parents(".rMainList").find(".tab_box > .tab_box__item").hide().eq(meIndex).show();

    audio_rightMainNav.currentTime = 0;
    audio_rightMainNav.play();
}
//左侧一级切换 音效
$(function(){

	$(".chosen_tit").click(function(){
		var audio_rightMainNav = new Audio();
		audio_rightMainNav.src = basepath+"/ws_static/audio/rightMainNav.wav";
		audio_rightMainNav.preload = "auto";
		audio_rightMainNav.loop = false;
		audio_rightMainNav.currentTime = 0;
    	audio_rightMainNav.play();
	});
})
// 中间弹框，日期月份切换
function popup_comp_timeSelect(o, type) {

    var el = $(o).siblings('.m');
    var m = + el.attr("data-month");
    console.log(m);
    //if($(".fbtj_zs").css('display')=='block'){
    	if(m==0){
	    	m=12
	    	el.attr("data-month", m);
	    	return;
	    }
	    m += type=="up" ? m==12 ? 0 : 1 : m == 1 ? 0 : -1;
    //}
    el.attr("data-month", m);
}

// 中间弹框-台区监测分析，日期、年份选择切换
function popup_tqjcfx_timeToggle(o, selecttype) {
    var select = $(o).parents('.popup-normal__typeSelect').siblings('.popup-normal__yearSelect,.popup-normal__timeSelect');
    select.hide().filter(".popup-normal__"+selecttype+"Select").show();

}

// 中间弹框，tab切换
function popup_tab_toggle(o, index) {
    if("0"==index){
        $(".m_gzjzfx").show();
        $(".y_gzjzfx").hide();
        $(".m_pwqxfx1").show();
        $(".y_pwqxfx1").hide();

    }else if("1"==index){
        $(".m_gzjzfx").hide();
        $(".y_gzjzfx").show();
        $(".m_pwqxfx1").hide();
        $(".y_pwqxfx1").show();
    }
    $(o).parents('.popup-normal__typeSelect').siblings('.popup-normal__tabContent').hide().eq(index).show()
}