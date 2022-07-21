$(".txtIdArea > input").click(function () {
  $(".txtIdArea > span").removeClass("txtSpan1");
  $(".txtIdArea > span").addClass("txtSpHv");
  $(".idWarning").css("visibility", "hidden");
  $(".txtIdArea > span").text("5~20자 영문, 숫자 입력");
});

$(".txtPwArea > input").click(function () {
  $(".txtPwArea > span").removeClass("txtSpan1");
  $(".txtPwArea > span").addClass("txtSpHv");
  $(".pwWarning").css("visibility", "hidden");
  $(".txtPwArea > span").text(
    "8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력"
  );
});

$(".pwDbCheck > input").click(function () {
  $(".pwDbCheck > span").removeClass("txtSpan3");
  $(".pwDbCheck > span").addClass("txtSpHv");
  $(".pwDbCheck > span").text("비밀번호 재입력");
});

$(".txtAdArea > input").click(function () {
  $(".txtAdArea > span").removeClass("txtSpan1");
  $(".txtAdArea > span").addClass("txtSpHv");
  $(".txtAdArea > span").text("이메일 주소 입력");
});

$(".txtNameArea > input").click(function () {
  $(".txtNameArea > span").removeClass("txtSpan3");
  $(".txtNameArea > span").addClass("txtSpHv");
  $(".txtNameArea > span").text("이름 입력");
});

$(".txtBirthArea > input").click(function () {
  $(".txtBirthArea > span").removeClass("birthSpan");
  $(".txtBirthArea > span").addClass("txtSpHv");
  $(".txtBirthArea > span").text("예: 1981");
});

var sw = true;
var tw = true;
$(".agreeSvg").click(function () {
  if (sw) {
    $(this).css("fill", "rgb(31,140,230)");
    sw = !sw;
  } else {
    $(this).css("fill", "#d6deeb");
    sw = !sw;
  }
});

$(".agrAll").click(function () {
  if (tw) {
    $(".agreeSvg").css("fill", "rgb(31,140,230)");
    tw = !tw;
  } else {
    $(".agreeSvg").css("fill", "#d6deeb");
    tw = !tw;
  }
});

$(".sexAreaLb").click(function () {
  $(this).addClass("csHov");
  $(this).removeClass("sexAreaLb");
});
// 둘(남/여) 중 하나만 선택하려면 어떻게 해야 할까?
