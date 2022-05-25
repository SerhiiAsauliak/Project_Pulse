$(document).ready(function(){
   $('.carousel__wrapper').slick({
      infinite: true,
      speed: 100,
      adaptiveHeight: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="img/main/left_arrow.png"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="img/main/right_arrow.png"></button>',
      responsive: [
         {
           breakpoint: 992,
           settings: {
             arrows: false,
             adaptiveHeight: false,
             dots:true,
             slidesToShow: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             arrows: false,
             slidesToShow: 1,
             adaptiveHeight: false,
             dots:true
           }
         }
       ]
    });
 });