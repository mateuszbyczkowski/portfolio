$(window).on('load', function() { 
 //fading
    $('#scroll-button').delay(5600).fadeIn(1000);
    $('#nav-fade').delay(5600).fadeIn(1000);

//typing text
    var typing = document.querySelector('.typing'),
    currentIndex = 0;

    var startTyping = function (text) {
    if(text.length > currentIndex){
        typing.textContent += text.charAt( currentIndex );
        currentIndex++;
        setTimeout( function(){startTyping(text);}, 50 + Math.random() * 100)
        }
    }
    startTyping("Mateusz Byczkowski - Junior Software Developer");
 });

 //background video
$( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});

function scaleVideoContainer() {
    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){
    var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

