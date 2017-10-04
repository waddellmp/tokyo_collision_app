window.loading_screen = window.pleaseWait({
    logo:
    "",
    backgroundColor: "#191a1c",
    loadingHtml: "<div class='spinner'><div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div></div>"
  });
  var timer = function () { return window.loading_screen.finish(); }
  setTimeout(timer, 750);