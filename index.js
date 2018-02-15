$(document).ready(function() {
  const $projectDiv = $('#projectDiv');
  const $imgs = $('#projectDiv > div > img');
  const $nav = $('nav');

  for (let i = $imgs.length - 2; i < $imgs.length; i++) {
    $($imgs[i]).attr('src', './img/gear_art.jpg');
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll)
    if (scroll > 637) {
      $nav.addClass('navColor');
    } else {
      $nav.removeClass('navColor');
    }
  });

});