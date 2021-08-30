// this is for intro video and content
$("#myIntro").modal()
$(".main-page").hide();
document.getElementById('myVideo').addEventListener('ended', closeModal, false);

function closeModal() {
  $(".main-page").show();
  $('#myIntro').modal('hide');
}

// this code toggle mocile menu ===========
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


var hidden = false;

setInterval(function () {
  document.getElementById("thuder").style.visibility = "hidden";
  hidden = !hidden;
}, 600);
setInterval(function () {
  document.getElementById("thuder").style.visibility = "visible";
  hidden = !hidden;
}, 2000);



// this audio code for website====================

document.getElementById('myVideo').addEventListener('ended', sound, false);
var audio = new Audio('./audio/Storm - 40581.mp3');
var beepOne = new Audio('./audio/normal-button-rollover.mp3');

function sound() {
  audio.play()
};
$(".sound").click(function () {
  audio.play();
});
$(".main-page")
  .mouseenter(function () {
    audio.play();
  });

$("a")
  .mouseenter(function () {
    beepOne.play();
  });

  // this is for menu hide and show===========
$(document).ready(function () {
  $('.aboutus').hide();
  $('#sib-form-container').hide();

  $('.tab1').click(function () {
    $('.overlay-content a').hide();
    $('.aboutus').toggle();
    $('.tab1').click(function () {
      $('.overlay-content a').toggle();

  });
  });
});
$(document).ready(function () {

  $('.tab2').click(function () {
    $('.overlay-content a').hide();
    $('#sib-form-container').toggle();
    $('.tab2').click(function () {
      $('.overlay-content a').toggle();

  });
  });

    document.getElementById('myIntro').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      if ($(window).width() < 768) {
        $(".footer-wrap.mobile-only").appendChild("#myIntro button");
      }
    }
});


var vid = document.getElementById("myVideo");

// function enableMute() {
//   vid.muted = true;
// }

function disableMute() {
  vid.muted = false;
}
function playVid() { 
  vid.play(); 
  vid.muted = false;
} 

function pauseVid() { 
  vid.pause(); 
} 
