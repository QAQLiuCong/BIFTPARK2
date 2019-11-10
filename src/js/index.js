$(function() {
  banner_swiper_init();
  park_swiper();
  slider_init();
});

zoomSlider();

$(window).resize(function() {
  zoomSlider();
});

function banner_swiper_init() {
  new Swiper(".banner-swiper", {
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
}

// 园区轮播banner
function park_swiper() {
  var parkSwiper = new Swiper(".park-swiper", {
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    initialSlide: 0,
    observer: true,
    observeParents: true,
    lazy: {
      loadPrevNext: true
    },
    on: {
      slideChangeTransitionStart: function() {
        $(".park-swiper-thumbs > div")
          .eq(this.activeIndex)
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    }
  });
  $(".park-swiper-thumbs").on("click", "> div", function() {
    var index = $(this).index();
    parkSwiper.slideTo(index);
  });
  $(".park-arrow.left").on("click", function() {
    if (parkSwiper.activeIndex === 0) {
      var len = $(".park-swiper-thumbs").children().length;
      parkSwiper.slideTo(len - 1);
      return;
    }
    parkSwiper.slidePrev();
  });
  $(".park-arrow.right").on("click", function() {
    var len = $(".park-swiper-thumbs").children().length;
    if (parkSwiper.activeIndex === len - 1) {
      parkSwiper.slideTo(0);
      return;
    }
    parkSwiper.slideNext();
  });
  $(".park-swiper").hover(
    function() {
      parkSwiper.autoplay.stop();
    },
    function() {
      parkSwiper.autoplay.start();
    }
  );
}

// 缩放slider 轮播
function zoomSlider() {
  $(".slider-box").css("zoom", "calc(" + $(window).width() + "/ 1920)");
}

function slider_init() {
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
  new $JssorSlider$("introduction-slide", jssor_1_options);
}
