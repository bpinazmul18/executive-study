$(document).ready(function(){
    // FEATURES-AREA-SLIDER
    $('.features-slider-wrapper').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 4,
        margin: 10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });
    //EVENTS-AREA-SLIDER
    $('.owl-carousel-activator-events').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 2,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });
    //COVERED-AREA-SLIDER
    $('.owl-carousel-activator-covered-section').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 3,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });
    //TESTIMONIAL-AREA-SLIDER
    $('.testimonial-slider-activator').owlCarousel({
        loop: true,
        nav:false,
        dots: true,
        items: 2,
        margin:40,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
    });

});


function openNav(){
    document.getElementById("myNav").style.display = "flex";
}

function closeNav(){
    document.getElementById("myNav").style.display = "none";
}

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