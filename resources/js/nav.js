$( "li" ).not(".active").hover(
  function() {
    $(this).find("span").stop().animate({
      // width:"100%",
      opacity:"0.95",
    }, 500, function () {
    })
  }, function() {
    $(this).find("span").stop().animate({
      // width:"0%",
      opacity:"0",
    }, 500, function () {
    })
  }
  );