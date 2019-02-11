// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.min
//= require jquery_ujs
//= require responsiveslides.min
//= require turbolinks
//= require bootstrap-sprockets
//= require audioPlayer
//= require main
//= require_tree .


//stop auto-slide for video carousel
$(document).ready(function() {      
   $('.carousel').carousel('pause');
});

//slider slideshow
$(document).ready(function (){
  $(".rslides").responsiveSlides();
})

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  random: true,          // Boolean: Randomize the order of the slides, true or false
  pause: true,           // Boolean: Pause on hover, true or false
  pauseControls: true   // Boolean: Pause when hovering controls, true or false 
});