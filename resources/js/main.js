$(document).ready(function(){
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
});