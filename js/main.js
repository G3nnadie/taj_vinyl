$(document).ready(function () {

  // Show menu mobail
  $('.menu-btn').on('click', function () {
    $('body').toggleClass('no-scroll-mb');
    $('.navbar-toggle').toggleClass('active');
    $('.nav').toggleClass('nav--open');
    $('.nav__main').toggleClass('nav__main--open');
  });

  // Open search
  $('.search__open').on('click', function() {
    $('.search').addClass('search--show');
    $('.search__form input').focus();
  });

  $('body').mouseup(function (e) {
    let modalContent = $('.search__form');
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $('.search').removeClass('search--show');
    }
  });

  // Card color more
  $('.card__colors-more').on('click', function() {
    $(this).toggleClass('card__colors-more--active');
    $('.card__colors-body').slideToggle(200);
  });

  // Show filter mob
  $('.open-filter').on('click', function () {
    $('.filter').fadeToggle(200);
    $('.catalog__body').fadeToggle(1);
  });

  // Modal
  $('.open-modal-feedback').on('click', function(e) {
    e.preventDefault();
    $('.modal--feedback').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Btn up
  $('.btn-up').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Accardion faq
  var accordion = function() {
    $('.accordion-header').on('click', function(){
      $(this).next('.accordion-body').not(':animated').slideToggle(200)
    })
    $('.accordion-header').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Rooms sl
  var swiper = new Swiper(".hero__sl", {
    autoplay: {
      delay: 4000,
    },
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // 768: {
      //   spaceBetween: 20,
      //   slidesPerView: 2,
      // },
      // 1200: {
      //   spaceBetween: 20,
      //   slidesPerView: 3,
      // },
    },
  });

});