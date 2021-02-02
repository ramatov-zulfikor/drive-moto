$(document).ready(function () {

   $('.hero__slider').slick({
      dots: true,
      // autoplay: true,
      prevArrow: '<button type="button" class="slider__btn slider__prev btn-reset"><img src="images/icons/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slider__btn slider__next btn-reset"><img src="images/icons/arrow-next.svg" alt=""></button>',
      arrows: true
   })

   // ===

   $('.products__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slider__btn products__slider__prev btn-reset"><img src="images/icons/arrow-prev--black.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slider__btn products__slider__next btn-reset"><img src="images/icons/arrow-next--black.svg" alt=""></button>',
      arrows: true
   })

   // ===

   $('.tabs__item').click(function(e) {
      e.preventDefault();

      $('.tabs__item').removeClass('tabs__item--active')
      $('.tabs-content__item').removeClass('tabs-content__item--active')

      $(this).addClass('tabs__item--active')
      $($(this).attr('href')).addClass('tabs-content__item--active')
   })

   // ===

   $('.product__wishlist-btn').click(function(e) {
      e.preventDefault()

      $(this).toggleClass('wishlist-btn--active')
   })

   // ===

   $('.tabs-triggers__item').click(function(e) {
      e.preventDefault();

      $($(this).siblings()).removeClass('tabs-triggers__item--active')
      $($(this).parent().siblings().find('.products-content__item')).removeClass('products-content__item--active')

      $(this).addClass('tabs-triggers__item--active')
      $($(this).attr('href')).addClass('products-content__item--active')
   })

   // ===

   $('.pagination__item').click(function(e) {
      e.preventDefault()

      $($(this).siblings()).removeClass('pagination__item--active')
      $(this).addClass('pagination__item--active')
   })

   // ===

   $('.filter-styler').styler();

   // ===

   $('.filter-item__title--drop').click(function() {
      $(this).toggleClass('filter-item__title--active')
      $(this).next().slideToggle('200')
   })

});