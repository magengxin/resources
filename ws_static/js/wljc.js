window.onload = function () {
  var num = 1;

  var ulBox = $('.wljc-list').children('.ul-box'),
      len = ulBox.length;

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

  // 上一步
  $('.paging-arrow-up').click(function () {

    num--;

    // 其他移除ul，当前添加 active
    ulBox.siblings().removeClass('bg').eq(num - 1).addClass('active bg');

    // 其他ul隐藏，当前显示ul
    ulBox.siblings().find("ul").slideUp(500).removeClass('on').end().eq(num - 1).find("ul").slideDown(500).addClass('on');

    // 禁用按钮
    if (num <= 1) {
      $(this).removeClass('active').addClass('disable');
      return false
    }
  });

  // 下一步
  $('.paging-arrow-down').click(function () {

    num++;

    // 上一页按钮状态
    $(this).siblings().removeClass('disable').addClass('active');

    // 其他移除ul，当前添加 active
    ulBox.siblings().removeClass('bg').eq(num - 1).addClass('active bg')

    // 其他ul隐藏，当前显示ul
    ulBox.siblings().find(".item-list").slideUp(500).removeClass('on').end().eq(num - 1).find(".item-list").slideDown(500).addClass('on');

    // 禁用按钮
    if (num >= len) {
      $(this).removeClass('active').addClass('disable');
      return false
    }
  })
  // TODO: 第四步，点击按钮出现list之后才可以点击下一步，在此之前不能点击，下一步按钮置灰。需要查看num变量的变化

  // 打开弹框
  $('.open').click(function(){
    $(this).siblings().find("ul").slideDown(500);
  })
}