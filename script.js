$(".nav-link").click(function(event) {
  for (let i = 0; i < 4; i++) {
    if ($($("section")[i]).hasClass(event.target.id))
    {
      $($("section")[i]).removeClass("invis")
        if ($($("section")[i]).hasClass("HOME")) {$(".diag").removeClass("invis")}
        else {$(".diag").addClass("invis")}
    }
    else {$($("section")[i]).addClass("invis")}
  }
})
