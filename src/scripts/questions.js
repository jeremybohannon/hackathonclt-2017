$('.question input, [tabindex]').focus(function() {
  $('.question.active').removeClass('active');
  if (this.type === 'checkbox') {
    $(this).next().closest('div.question').addClass('active');
  } else {
    $(this).closest('div.question').addClass('active');
  }
  goto();
});


$('.question input').keypress(function (e) {
  // enter key
  if (e.charCode === 13) {
    $('.question.active').removeClass('active');
    const next = $(this).closest('div.question').next();
    next.addClass('active');
    next.find('input').focus();
    goto();
  }
});

function goto() {
  const node = $('div.active')[0];
  console.log(node);
  $('#application').animate({
    scrollTop: node.offsetTop - (window.innerHeight / 2) + (node.offsetHeight * (1/3)),
  }, 1000);
}
