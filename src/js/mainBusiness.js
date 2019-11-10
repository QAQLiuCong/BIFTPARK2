$(function() {
  tabClick();
  var activeIndex = getQueryVariable("active");
  $(".tab .tab-item span")
    .eq(activeIndex)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $(".tab-content-box .tab-content")
    .eq(activeIndex)
    .show()
    .siblings()
    .hide();
});

function tabClick() {
  $(".tab").on("click", ".tab-item span", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    var index = $(this).index();
    $(".tab-content-box .tab-content")
      .eq(index)
      .show()
      .siblings()
      .hide();
  });
}
