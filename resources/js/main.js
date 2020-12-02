$(document).ready(function(){
    // FEATURES-AREA-SLIDER
    $('.features-slider-wrapper').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 1,
        margin: 10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsiveBaseElement: 'body',
        responsive: {
            0:{
                items:1,
                dots: false
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
    //EVENTS-AREA-SLIDER
    $('.owl-carousel-activator-events').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 1,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsiveBaseElement: 'body',
        responsive: {
            0:{
                items:1,
                dots: false
            },
            768:{
                items:2
            }
        }
    });
    //COVERED-AREA-SLIDER
    $('.owl-carousel-activator-covered-section').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 1,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsiveBaseElement: 'body',
        responsive: {
            0:{
                items:1,
                dots: false
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    //TESTIMONIAL-AREA-SLIDER
    $('.testimonial-slider-activator').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 1,
        margin:40,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsiveBaseElement: 'body',
        responsive: {
            0:{
                items:1,
                dots: false
            },
            992:{
                items:2
            }
        }
    });

});
/*SITCKY MENU*/
var stickymenu = document.getElementById("stickymenu")
var stickymenuoffset = stickymenu.offsetTop

window.addEventListener("scroll", function(e){
    requestAnimationFrame(function(){
        if (window.pageYOffset > stickymenuoffset){
            stickymenu.classList.add('sticky')
        }
        else{
            stickymenu.classList.remove('sticky')
        }
    })
})