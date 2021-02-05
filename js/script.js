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

   $('.tabs__item').click(function (e) {
      e.preventDefault();

      $($(this).siblings()).removeClass('tabs__item--active')
      $($(this).parent().siblings().find('.tabs-content__item')).removeClass('tabs-content__item--active')

      $(this).addClass('tabs__item--active')
      $($(this).attr('href')).addClass('tabs-content__item--active')
   })

   // ===

   $('.product__wishlist-btn').click(function (e) {
      e.preventDefault()

      $(this).toggleClass('wishlist-btn--active')
   })

   // ===

   $('.tabs-triggers__item').click(function (e) {
      e.preventDefault();

      $($(this).siblings()).removeClass('tabs-triggers__item--active')
      $($(this).parent().siblings().find('.products-content__item')).removeClass('products-content__item--active')

      $(this).addClass('tabs-triggers__item--active')
      $($(this).attr('href')).addClass('products-content__item--active')
   })

   // ===

   $('.pagination__item').click(function (e) {
      e.preventDefault()

      $($(this).siblings()).removeClass('pagination__item--active')
      $(this).addClass('pagination__item--active')
   })

   // ===

   $('.filter-styler').styler();

   // ===

   $('.filter-item__title--drop, .filter-item__settings-title').click(function () {
      $(this).toggleClass('filter-item__title--active')
      $(this).next().slideToggle('200')
   })

   // ===

   $('.js-range-slider').ionRangeSlider()

   // ===

   $('.tags__group-btn--grid').click(function () {
      $(this).addClass('tags__group-btn--selected')
      $('.tags__group-btn--list').removeClass('tags__group-btn--selected')
      $('.product').removeClass('product--list')
   })

   $('.tags__group-btn--list').click(function () {
      $(this).addClass('tags__group-btn--selected')
      $('.tags__group-btn--grid').removeClass('tags__group-btn--selected')
      $('.product').addClass('product--list')
   })

   // ===

   $('.rate-yo').rateYo({
      normalFill: '#c4c4c4',
      ratedFill: "#1c62cd",
      spacing: "5px",
      readOnly: true
   })

});