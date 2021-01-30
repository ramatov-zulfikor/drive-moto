$(document).ready(function () {

   $('.hero__slider').slick({
      dots: true,
      // autoplay: true,
      prevArrow: '<button type="button" class="slider__btn slider__prev btn-reset"><img src="images/icons/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slider__btn slider__next btn-reset"><img src="images/icons/arrow-next.svg" alt=""></button>',
      arrows: true
   });

   $('.tabs__item').click(function(e) {
      e.preventDefault();

      $('.tabs__item').removeClass('tabs__item--active')
      $('.tabs-content__item').removeClass('tabs-content__item--active')

      $(this).addClass('tabs__item--active')
      $($(this).attr('href')).addClass('tabs-content__item--active')
   })

});