$('#application').modal({
  ready() {
    $('.application-page').animate({ opacity: 1 }, 300);
  },
  complete: hideApplication
});

hideApplication();

function hideApplication() {
  $('.application-page').css('opacity', 0);
}
