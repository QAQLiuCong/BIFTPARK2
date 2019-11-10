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

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
