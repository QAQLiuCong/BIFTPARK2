$(function() {
  index_init.calcBanner();
  index_init.swiper_init();
  slider_init();
});

// 窗口调整
$(window).resize(function() {
  index_init.calcBanner();
});

var index_init = {
  swiper_init: function() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true, // 循环模式选项
      observer: true,
      observeParents: true,
      lazy: {
        loadPrevNext: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  // 计算banner高度
  calcBanner: function() {
    var headerH = document.querySelector("header").offsetHeight;
    var winH = $(window).height();
    $(".index-banner").css("margin-top", headerH);
    $(".index-banner").height(winH - headerH);
  }
};

var slider_init = function() {
  var jssor_1_options = {
    $AutoPlay: "on" == "on", //自动播放
    $FillMode: 4,
    $PlayOrientation: "1", //2为向上滑，1为向左滑
    $Loop: parseInt("1"), //循环
    $SlideDuration: "2000", //延时
    $Idle: parseInt("2000"), //切换间隔
    $SlideEasing: $Jease$.$OutQuint,

    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: GetSlideAnimation("5", "2000"),
      $TransitionsOrder: 1
    },

    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $ActionMode: "1"
    }
  };
  var slide = new $JssorSlider$("introduction-slide", jssor_1_options);
  var MAX_WIDTH = 800;

  function ScaleSlider() {
    var containerElement = slide.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;
    var containerHeight = containerElement.clientHeight;
    if (containerWidth || containerHeight) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
      var expectedHeight = Math.min(containerHeight, containerHeight);
      slide.$ScaleSize(expectedWidth, expectedHeight);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
};
