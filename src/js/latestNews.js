$(function() {
  tabClick();
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
