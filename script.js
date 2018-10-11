// var $gifVid = $("#gif_vid");

// $("#channels").on({
//   'click': function() {
//      var src = ($gifVid.attr('src') === 'video.gif')
//         ? 'https://res.cloudinary.com/tgustudios/image/upload/v1534362663/trippy-square.gif'
//         : 'https://res.cloudinary.com/tgustudios/image/upload/v1535424042/space-stallions.gif';
//         //: 'https://res.cloudinary.com/tgustudios/image/upload/v1535423910/dancing-bears-small.gif';
//      $gifVid.attr('src', src);
//     }
// });

var $muteBtn = $("#mute");
var $channelsBtn = $("#channels");


$muteBtn.on({
  'click': function() {
    alert("mute button clicked");
  }
});

$channelsBtn.on({
  'click': function() {
    var channelNum = parseInt($channelsBtn.data("channel-num"), 10);

    $("#message-for-gvn").toggle();
    $("#video-container").toggle();

    $.getJSON("data/messages.json", function(data) {
      var nextMessageIndex = Math.floor((channelNum/2));
      console.log("nextMessageIndex", nextMessageIndex);

      var messageIndex = data.length - 1;

      if (nextMessageIndex <= data.length-1) {
        messageIndex = nextMessageIndex;
      }

      console.log("messageIndex", messageIndex);

      var message = "<div>" + data[messageIndex].message + "</div>";
      var submitter = "<div class='submitter'>&mdash; <em>" + data[messageIndex].submitter + "</em></div>";

      $("#message-for-gvn").html(message + submitter);
    });

    $channelsBtn.data("channel-num", channelNum+1);
    console.log("current channel number", $channelsBtn.data("channel-num"));
    // console.log($("#message-for-gvn").is(":hidden"))

    // var videoSrc = $("#video-container iframe").attr("src");

    // if (videoSrc.indexOf("&mute=1")) {
    //   $("#video-container iframe").attr("src", videoSrc.replace("&mute=1", ""));
    // } else {
    //   $("#video-container iframe").attr("src", videoSrc + "&mute=1");
    // }
  }
});


$("#video-container").hide();

// setInterval(function() {
//   $(".pixels").animate({
//     top: '-=10px',
//     // left: '-=5px'
//   }, 800);
//   $(".pixels").animate({
//     top: '+=10px',
//     // left: '+=5px'
//   }, 800);
// }, 1600);
