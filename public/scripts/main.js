window.addEventListener('load', function () {
  const toggle = document.querySelector('.header-toggle');
  const menu = document.querySelector('.header-menu');
  toggle && toggle.addEventListener('click', handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add('is-expand');
  }
  document.addEventListener('click', handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches('.header-toggle') || e.target.matches('.header-menu, .header-menu *')) return;
    menu && menu.classList.remove('is-expand');
  }
});

// Slick
$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});