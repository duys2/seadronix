$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('header').css('background-color', 'rgba(255,255,255, .95)');
      $('header #logo a img').attr('src', './images/logo-dark.svg');
      $('header #gnb a').css('color', '#222');
      $('header .lang ul li:nth-child(2)').css('color', '#222');
      $('header').css('box-shadow', '0 0px 2px 2px rgba(0,0,0,.1)');
    } else {
      $('header').css('background-color', 'transparent');
      $('header #logo a img').attr('src', './images/logo-light.svg');
      $('header #gnb a').css('color', 'white');
      $('header .lang ul li:nth-child(2)').css('color', 'white');
    }
  });
});