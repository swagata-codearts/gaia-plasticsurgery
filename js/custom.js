// JavaScript Document
jQuery('#banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
});

jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
       if(jQuery(this).scrollTop() > 200 ) {
       jQuery(".custom-header").addClass("fixed-top");
       jQuery(".header-top").slideUp();
      } else {
       jQuery(".custom-header").removeClass("fixed-top");
       jQuery(".header-top").slideDown();
      }
    });
});

jQuery(document).ready(function() {
    jQuery('.count-number').each(function () {
        jQuery(this).prop('Counter',0).animate({
            Counter: jQuery(this).text()
        }, {
            
            //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });
    });

