window.onload = function () {
  var num = 1;

  $('.item-handle').click(function () {
    var index = $(this).parent().index();
    if (index < num) {
      if ($(this).siblings("ul").hasClass('on')) {
        $(this).siblings("ul").slideUp(500).removeClass("on");
      } else {
        // 首先要清除其他li标签的on类名
        $(this).parent().siblings().children("ul").removeClass("on");
        // on类名是随便起的，也可是active什么的都行
        $(this).siblings("ul").slideDown(500).addClass("on").parent().siblings().children("ul").slideUp(500);

      }

      // $(this).parent('.ul-box').siblings().removeClass("active");
      // 添加 active
      // $(this).parent('.ul-box').addClass("active");
    }
  });
  $('.paging-arrow-down').click(function () {
    var ulBox = $('.wljc-list').children('.ul-box');
    var len = ulBox.length;

    num++;
    console.log("len", len);


    // TODO: num 8 按钮没有置灰
    // TODO: 已经选择的可以完成手风琴效果

    $(this).siblings().removeClass('disable').addClass('active');

    console.log("num", num);

    // 其他移除ul，当前添加 active
    // ulBox.siblings().removeClass('active').eq(num - 1).addClass('active')
    ulBox.eq(num - 1).addClass('active')

    // 其他ul隐藏，当前显示ul
    // ulBox.siblings().children("ul").slideDown(500).eq(num - 1).children("ul").slideUp(500);
    ulBox.siblings().children("ul").slideUp(500).removeClass('on').end().eq(num - 1).children("ul").slideDown(500).addClass('on');

    // 禁用按钮
    if (num >= len) {
      $(this).removeClass('active').addClass('disable');
      return false
    }
  })
}