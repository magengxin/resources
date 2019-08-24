window.onload = function () {

  $('.item-handle').click(function () {
    if ($(this).siblings("ul").hasClass('on')) {
      $(this).siblings("ul").slideUp(500).removeClass("on");
    } else {
      // 首先要清除其他li标签的on类名
      $(this).parent().siblings().children("ul").removeClass("on");
      // on类名是随便起的，也可是active什么的都行
      $(this).siblings("ul").slideDown(500).addClass("on").parent().siblings().children("ul").slideUp(500);

    }

    $(this).parent('.ul-box').siblings().removeClass("active");

    // 添加 active
    $(this).parent('.ul-box').addClass("active");
  });

  var num = 1;
  console.log("num chushi", num);
  $('.paging-arrow-down').click(function () {
    if (num == len) {
      $(this).removeClass('active').addClass('disable');
      return false
    }

    num++;
    console.log("num gaibian", num);
    var dataBox = $('.wljc-list').children('.ul-box');
    var len = dataBox.length;
    console.log("len ", len );
    console.log("                 " );
    dataBox.eq(num-1).addClass('active')

    dataBox.children("li").slideDown(500).eq(num-1).children("li").slideUp(500);
  })
}