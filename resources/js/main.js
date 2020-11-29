$(document).ready(function(){
    // FEATURES-AREA-SLIDER
    $('.features-slider-wrapper').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 4,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });
    //EVENTS-AREA-SLIDER
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 2,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });

    $('.we-covered-owl-carousel').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 3,
        margin:10,
        // autoplay:false,
        // autoplayTimeout:1500,
        // autoplayHoverPause:true,
    });

});