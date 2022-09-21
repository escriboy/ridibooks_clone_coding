// 검색어 입력 event

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
    $(".slideExample").css("left", -2765);
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
      left: -(index * 553),
    },
    "fast"
  );
}

// 작은 슬라이드

$(".narrow_slideExample").append($(".narrow_slider_image").first().clone());
$(".narrow_slideExample").prepend($(".narrow_slider_image").eq(-2).clone());
var index = 1;
moveSlider_N(index);

$(".left_control2").click(function () {
  if (index > 1) {
    index--;
    moveSlider_N(index);
  } else {
    $(".narrow_slideExample").css("left", -2765);
    index = 4;
    moveSlider_N(index);
  }
});

$(".right_control2").click(function () {
  if (index < 4) {
    index++;
    moveSlider_N(index);
  } else {
    $(".narrow_slideExample").css("left", 0);
    index = 1;
    moveSlider_N(index);
  }
});

function moveSlider_N(index) {
  $(".narrow_slideExample").animate(
    {
      left: -(index * 553),
    },
    "fast"
  );
}
