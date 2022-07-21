$("#searchBar").click(function () {
  if ($(".recentScToggle").css("display") == "none") {
    $(".recentScToggle").show();
  } else {
    $(".recentScToggle").hide();
  }
});

// 메인 슬라이드

$(".slideExample").append($(".slider_image").first().clone());
$(".slideExample").prepend($(".slider_image").eq(-2).clone());
var index = 1;
moveSlider(index);

$(".left_control").click(function () {
  if (index > 1) {
    index--;
    moveSlider(index);
  } else {
    $(".slideExample").css("left", -5580);
    index = 4;
    moveSlider(index);
  }
});

$(".right_control").click(function () {
  if (index < 4) {
    index++;
    moveSlider(index);
  } else {
    $(".slideExample").css("left", 0);
    index = 1;
    moveSlider(index);
  }
});

function moveSlider(index) {
  $(".slideExample").animate(
    {
      left: -(index * 1116),
    },
    "fast"
  );
}
