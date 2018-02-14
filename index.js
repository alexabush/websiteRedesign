$(document).ready(function() {
  const $projectDiv = $('#projectDiv');
  const $imgs = $('#projectDiv > div > img');
  const $nav = $('nav')

  $.each($imgs, function(index, value) {
    $(value).attr('src', './img/trees.jpg');
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll)
    if (scroll > 637) {
      $nav.addClass('navColor');
    } else {
      $nav.removeClass('navColor');
    }
  })

})