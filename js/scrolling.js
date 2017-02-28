//slide sub-pages on mouse-scroll feature
$(document).ready(function () {
    var divs = $('.slide-down');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        // find currently visible div :
        div = -1;
        var count = 10;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
                count = i;
                console.log(count);
            }     
        });
        if (dir == 'up' && div > 0) {
            div--;
        }
        if (dir == 'down' && div < divs.length) {
            div++;
        }
        
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 1000, 'easeInOutExpo');
        $('#page-top').css({ opacity: 1});
        if(count==1){    
                $(".technology-item" ).addClass("animate-twist");               
            }
            else{
                 $(".technology-item" ).removeClass("animate-twist");       
            }
        if(count==0){    
             $("#about-text" ).addClass("text-animate");      
            }
            else{
             $("#about-text" ).removeClass("text-animate");
            }
        if(count==2){    
                $("#myCarousel" ).addClass("carousel-slide");      
        }
        else{
             $("#myCarousel" ).removeClass("carousel-slide");   
        }
        if(count==3){
            $("#left-img" ).addClass("figure-fix-left");   
            $("#right-img" ).addClass("figure-fix-right");   
        }
        return false;
    });
    $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });
});

//collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//page scrolling feature
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        if($anchor.attr('href')=='#skills'){
            $(".technology-item" ).delay(200).addClass("animate-twist");      
        }
        else{
             $(".technology-item" ).removeClass("animate-twist");   
        }
        if($anchor.attr('href')=='#about'){
            $("#about-text" ).addClass("text-animate");      
        }
        else{
             $("#about-text" ).removeClass("text-animate");   
        }
        if($anchor.attr('href')=='#projects'){
            $("#myCarousel" ).addClass("carousel-slide");      
        }
        else{
             $("#myCarousel" ).removeClass("carousel-slide");   
        }
        if($anchor.attr('href')=='#contact'){
            $("#left-img" ).delay(200).addClass("figure-fix-left");   
            $("#right-img" ).delay(200).addClass("figure-fix-right");   
        }
        else{
            $("#left-img" ).removeClass("figure-fix-left");   
            $("#right-img" ).removeClass("figure-fix-right");      
        }     
    });
});
        