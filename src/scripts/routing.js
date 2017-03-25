$('.page')
  .css('display', 'none')
  .css('position', 'fixed')
  .css('width', '100vw')
  .css('min-height', '100vh');

if (window.location.hash.length === 0) {
  window.location.hash = '#' + $('.page').eq(0)[0].id;
}

// set first page to active
$(window.location.hash).css('display', 'initial');

function animate() {
  let next, last;
  const duration = 1000;

  // find current
  $('.page').each((i, page) => {
    if ($(page).css('display') !== 'none') {
      last = $(page);
    }
  });

  // find next
  $('.page').each((i, page) => {
    if ($(window.location.hash).is(page)) {
      next = $(window.location.hash);
    }
  });

  // find direction
  let before = true;
  let lastFound = false;
  $('.page').each((i, page) => {
    if ($(page).is(last)) {
      lastFound = true;
    }
    if ($(page).is(next) && lastFound) {
      before = false;
    }
  });

  next.css('left', (before ? -100 : 100) + 'vw');
  next.css('display', 'initial');
  next.animate({ 'left': 0 }, duration);

  last.animate({ 'left': (before ? 100 : -100) + 'vw'}, duration, () => {
    last.css('display', 'none');
  });
}

setTimeout(() => $(window).on('hashchange', animate));
