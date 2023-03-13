window.addEventListener('load', function () {
  const toggle = document.querySelector('.header-toggle');
  const menu = document.querySelector('.header-menu');

  toggle && toggle.addEventListener('click', handleToggleMenu);

  function handleToggleMenu(e) {
    menu && menu.classList.add('is-expand');
  }

  document.addEventListener('click', handleClickOutside);

  function handleClickOutside(e) {
    if (
      e.target.matches('.header-toggle') ||
      e.target.matches('.header-menu, .header-menu *')
    )
      return;
    menu && menu.classList.remove('is-expand');
  }
});
