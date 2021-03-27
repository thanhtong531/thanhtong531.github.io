

$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,

        items: 1
    });

    // top sale
    $("#top-sale .owl-carousel").owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
        }
    });
    $("#new .owl-carousel").owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
        }
    });
    
});