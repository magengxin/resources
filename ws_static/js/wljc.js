window.onload = function () {
  var num = 1;

  var ulBox = $('.wljc-list').children('.ul-box'),
      ulList = $('.ul-list'),
      len = ulBox.length;

  $('.item-handle').click(function () {
    var index = $(this).parent('.ul-box').index();
    if (index < num) {
      // 其他ul隐藏，当前显示ul
      ulBox.siblings().find(".item-list").slideUp(500).removeClass('active').end().eq(num - 1).find(".item-list").slideDown(500).addClass('active');
      return

      if ($(this).siblings(".item-list").hasClass('sss')) {
        $(this).siblings(".item-list").slideUp(500).removeClass("active");
      } else {
        // 首先要清除其他li标签的active类名
        // $(this).parent().siblings().children(".item-list").removeClass("active");
        // active类名是随便起的，也可是active什么的都行
        // $(this).siblings(".item-list").slideDown(500).addClass("active").parent().siblings().children(".item-list").slideUp(500);


        // 其他ul隐藏，当前显示ul
        ulBox.siblings().find(".item-list").slideUp(500).removeClass('active').end().eq(num - 1).find(".item-list").slideDown(500).addClass('active');

      }

      // $(this).parent('.ul-box').siblings().removeClass("active");
      // 添加 active
      // $(this).parent('.ul-box').addClass("active");
    }
  });

  // 上一步
  $('.paging-arrow-up').click(function () {

    num--;

    // 下一页按钮状态
    $(this).siblings().removeClass('disable').addClass('active');

    // 其他移除ul，当前添加 active
    ulBox.siblings().removeClass('bg').eq(num - 1).addClass('active bg');

    // 其他ul隐藏，当前显示ul
    ulBox.siblings().find(".item-list").slideUp(500).removeClass('active').end().eq(num - 1).find(".item-list").slideDown(500).addClass('active');

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
    ulBox.siblings().removeClass('bg').eq(num - 1).addClass('active bg');

    // 其他ul隐藏，当前显示ul
    ulBox.siblings().find(".item-list").slideUp(500).removeClass('active').end().eq(num - 1).find(".item-list").slideDown(500).addClass('active');

    // 隐藏含有button下面的list
    $('.open').siblings().slideUp(500);

    // 禁用按钮
    if (num >= len) {
      $(this).removeClass('active').addClass('disable');
      return false
    }
  })

  // TODO: 第四步，点击按钮出现list之后才可以点击下一步，在此之前不能点击，下一步按钮置灰。需要查看num变量的变化

  // TODO: 页面完成 接口连上

  // TODO: 第五部 弹框

  // 打开弹框
  $('.open').click(function () {
    $(this).siblings().removeClass('hidden').slideDown(500);
    $(this).parents('.ul-box').find('.item-title-color').removeClass('hidden');
  })
}