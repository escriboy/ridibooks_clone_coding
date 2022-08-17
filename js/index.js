$('#searchBar').click(function () {
  if ($('.recentScToggle').css('display') == 'none') {
    $('.recentScToggle').show();
  } else {
    $('.recentScToggle').hide();
  }
});

// 메인 슬라이드

$('.slideExample').append($('.slider_image').first().clone());
$('.slideExample').prepend($('.slider_image').eq(-2).clone());
var index = 1;
moveSlider(index);

$('.left_control').click(function () {
  if (index > 1) {
    index--;
    moveSlider(index);
  } else {
    $('.slideExample').css('left', -5580);
    index = 4;
    moveSlider(index);
  }
});

$('.right_control').click(function () {
  if (index < 4) {
    index++;
    moveSlider(index);
  } else {
    $('.slideExample').css('left', 0);
    index = 1;
    moveSlider(index);
  }
});

function moveSlider(index) {
  $('.slideExample').animate(
    {
      left: -(index * 1116),
    },
    'fast'
  );
}

// go top btn
const $topBtn = document.querySelector('.moveTopBtn');

// 버튼 클릭 시 맨 위로 이동
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 처음에 페이지 하단으로 스크롤 위치 지정
window.onload = () => {
  window.scrollTo({ top: document.body.scrollHeight });
};
