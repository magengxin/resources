window.onload = function () {
  var num = 1;
  var flag = false;

  $('.item-handle').click(function () {
    if (flag) {
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
    }
  });
  $('.paging-arrow-down').click(function () {
    var dataBox = $('.wljc-list').children('.ul-box');
    var len = dataBox.length;

    num++;
    // 禁用按钮
    if (num == len - 1) {
      dataBox.siblings().removeClass('active').eq(num - 1).addClass('active')

      $(this).removeClass('active').addClass('disable');
      return false
    } else if (num >= len) {
      return false
    }
    console.log("num", num);

    // 其他移除 active ，当前添加 active
    dataBox.siblings().removeClass('active').eq(num - 1).addClass('active')

    // 其他ul隐藏，当前显示ul
    // dataBox.siblings().children("ul").slideDown(500).eq(num - 1).children("ul").slideUp(500);
    dataBox.siblings().children("ul").removeClass('on').end().eq(num - 1).children("ul").addClass('on');


  })
}