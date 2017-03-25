$('#application').modal({
  ready() {
    $('.application-page').animate({ opacity: 1 }, 300);
  }
});

$('.application-page').css('opacity', 0);

// tmp
//$('#application').modal('open');
