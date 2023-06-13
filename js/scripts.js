$(function () {
  $('.carousel').carousel({ interval: 3000 });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('i').hasClass('fa-pause')) {
      $('.carousel').carousel('pause');
      $('#carouselButton').children('i').removeClass('fa-pause');
      $('#carouselButton').children('i').addClass('fa-play');
      $('.play-pause').removeClass('btn-secondary');
      $('.play-pause').addClass('btn-success');
    } else {
      $('.carousel').carousel('cycle');
      $('#carouselButton').children('i').removeClass('fa-play');
      $('#carouselButton').children('i').addClass('fa-pause');
      $('.play-pause').removeClass('btn-success');
      $('.play-pause').addClass('btn-secondary');
    }
  });

  $('#loginButton').click(function () {
    $('#loginModal').modal('show');
  });
  $('#reserveButton').click(function () {
    $('#reserveModal').modal('show');
  });
});
