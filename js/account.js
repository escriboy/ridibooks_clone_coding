$(".txtIdArea > input").focus(function () {
  $(".txtIdArea > span").removeClass("txtSpan1");
  $(".txtIdArea > span").addClass("txtSpHv");
  $(".idWarning").css("visibility", "hidden");
  $(".txtIdArea > span").text("5~20자 영문, 숫자 입력");
});

// $(".txtIdArea > input").on("propertychange change paste input", () => {
//   alert("changed");
// });

if ($(".txtIdArea > input").val == "") {
  $(this).blur(function () {
    $(".txtIdArea > span").removeClass("txtSpHv");
    $(".txtIdArea > span").addClass("txtSpan1");
    $(".idWarning").css("visibility", "visible");
    $(".txtIdArea > span").text("아이디");
  });
}

$(".txtPwArea > input").focus(function () {
  $(".txtPwArea > span").removeClass("txtSpan1");
  $(".txtPwArea > span").addClass("txtSpHv");
  $(".pwWarning").css("visibility", "hidden");
  $(".txtPwArea > span").text(
    "8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력"
  );
});

if (".txtPwArea > input".value == "") {
  $(".txtPwArea > input").blur(function () {
    $(".txtPwArea > span").removeClass("txtSpHv");
    $(".txtPwArea > span").addClass("txtSpan1");
    $(".pwWarning").css("visibility", "visible");
    $(".txtPwArea > span").text("비밀번호");
  });
}

$(".pwDbCheck > input").focus(function () {
  $(".pwDbCheck > span").removeClass("txtSpan3");
  $(".pwDbCheck > span").addClass("txtSpHv");
  $(".pwDbCheck > span").text("비밀번호 재입력");
});

if (".pwDbCheck > input".value == "") {
  $(".pwDbCheck > input").blur(function () {
    $(".pwDbCheck > span").removeClass("txtSpHv");
    $(".pwDbCheck > span").addClass("txtSpan1");
    $(".pwDbCheck > span").text("비밀번호 확인");
  });
}

$(".txtAdArea > input").focus(function () {
  $(".txtAdArea > span").removeClass("txtSpan1");
  $(".txtAdArea > span").addClass("txtSpHv");
  $(".txtAdArea > span").text("이메일 주소 입력");
});

if (".txtAdArea > input".value == "") {
  $(".txtAdArea > input").blur(function () {
    $(".txtAdArea > span").removeClass("txtSpHv");
    $(".txtAdArea > span").addClass("txtSpan1");
    $(".txtAdArea > span").text("이메일 주소");
  });
}

$(".txtNameArea > input").focus(function () {
  $(".txtNameArea > span").removeClass("txtSpan3");
  $(".txtNameArea > span").addClass("txtSpHv");
  $(".txtNameArea > span").text("이름 입력");
});

if (".txtNameArea > input".value == "") {
  $(".txtNameArea > input").blur(function () {
    $(".txtNameArea > span").removeClass("txtSpHv");
    $(".txtNameArea > span").addClass("txtSpan3");
    $(".txtNameArea > span").text("이름");
  });
}

$(".txtBirthArea > input").focus(function () {
  $(".txtBirthArea > span").removeClass("birthSpan");
  $(".txtBirthArea > span").addClass("txtSpHv");
  $(".txtBirthArea > span").text("예: 1981");
});

if (".txtBirthArea > input".value == "") {
  $(".txtBirthArea > input").blur(function () {
    $(".txtBirthArea > span").removeClass("txtSpHv");
    $(".txtBirthArea > span").addClass("birthSpan");
    $(".txtBirthArea > span").text("출생년도");
  });
}

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
