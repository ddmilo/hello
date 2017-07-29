  console.log("Mic Check");
  function fadeIntro(callback){

    $('h1').css('display', 'block');
    $('h1').animate({ opacity: 0 }, 0);
    $('h1').animate({ opacity: 1, top: "-10px" }, 3500);
    $('form').css('display', 'block');
    $('form').animate({ opacity: 0 }, 0);
    $('form').animate({ opacity: 1, top: "-10px" }, 3500);
  }

  fadeIntro();

  function restartPage(){
    let $refresh = $('<button></button>').html('Start Over').addClass("refresh btn btn-success");
    $('body').append($refresh).animate({opacity:0}, 0).animate({ opacity: 1, top: "-10px" }, 6500);
    $refresh.click(function(){
      location.reload().animate({opacity:0}, 0).animate({opacity: 1, top: "-10px" }, 6500);
    });
  }

  $('#button').keypress(function (e) {
    if (e.which == 13) {
      $('form').submit();
        //<---- Add this line
    }
  });
  $("#button").click(function(){
    $('form').hide();
    let $name = $("#name").val();
      if ($name.length > 0){
        $("h1").html("Hello, " + $name + ". <br /> <br /> I wanted you to know that I finally found a place to call home..." ).animate({opacity:0}, 0).animate({ opacity: 1, top: "-10px" }, 6500, function(){
          $("h1").html("Let me in.").animate({opacity:1});
          restartPage();
        });
        function attachFX(){
          let $soundFX = $("<audio></audio").attr("src", "door.mp3").attr("autoplay", "true").attr("loop", "true").addClass('audio');
          $('body').append($soundFX);
          $('.audio').prop("volume", 0.3);
        }
        setTimeout(attachFX, 12000);
    }
      else {
      $("h1").html(". . . . .");
      restartPage();
    }
  });


  if (screen.width <= 960) {
   $('h1').html('Sorry, but currently there is not a working mobile version for this app. <br><br>Please use a desktop/laptop and a pair of headphones to fully experience this app. <br><br> Thank You.');
   $('form').hide();
}
