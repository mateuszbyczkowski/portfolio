//collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//page scrolling feature+animation on click
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
        
// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $technologyElement = $('.technology-item');
    var $aboutElement = $('#about-text');
    var $contactLeftElement = $('#left-img');
    var $contactRightElement = $('#right-img');

    if (isElementInViewport($technologyElement)) {
        // Start the animation
        $technologyElement.addClass('animate-twist');

        $aboutElement.removeClass('text-animate');
        $contactLeftElement.removeClass('figure-fix-left');
        $contactRightElement.removeClass('figure-fix-right');
    }
    if (isElementInViewport($aboutElement)) {
        // Start the animation
        $aboutElement.addClass('text-animate');

        $technologyElement.removeClass('animate-twist');
        $contactLeftElement.removeClass('figure-fix-left');
        $contactRightElement.removeClass('figure-fix-right');
    }
    if (isElementInViewport($contactLeftElement)) {
        // Start the animation
        $contactLeftElement.addClass('figure-fix-left');
        $contactRightElement.addClass('figure-fix-right');

        $technologyElement.removeClass('animate-twist');
        $aboutElement.removeClass('text-animate');
    }  
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});