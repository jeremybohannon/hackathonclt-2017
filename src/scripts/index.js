import './fullscreen';

// Function to ease through the page during navigation
$('a[href*=#]:not([href=#], a:not(.openModal)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
                 scrollTop: target.offset().top - $('.contain-to-grid').outerHeight()
            }, 1000);
            return false;
        }
    }
});
