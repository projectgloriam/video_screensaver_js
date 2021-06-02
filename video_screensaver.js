function video_screensaver(videos){
  var s_saver;
  var original_state;

  seconds = 10000;

  $( "body" ).bind( "mousemove keydown", function() {
      clearTimeout(s_saver);
      var counter = 0;
      
      s_saver = setTimeout(function(){
          //$('#screensaver').fadeIn(900);
          original_state = $('body').children().detach();
          $('body').prepend('<div id="screensaver" style="position:fixed; background-color:white; padding:0; margin:0; top:0; left:0; width: 100%; height:'+ $( window ).height() + 'px; z-index: 0;" display:none;><video id="playa" width="100%" height="'+ $( window ).height() + 'px" autoplay><source src="'+videos[counter]+'" type="video/mp4" />Your browser does not support the video tag.</video></div>');
          document.getElementById('playa').onended = function(){
              counter = counter + 1;
              if (counter == videos.length){
                counter = 0;
              }
              document.getElementById('playa').src = videos[counter];
          }
      }, seconds);
      
      //$('#screensaver').fadeOut(100);
      $('#screensaver').remove();
      if($('body').children().length == 0){
        $(original_state).appendTo("body");
      }
  });
}