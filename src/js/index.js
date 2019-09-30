const $navigation__mobile = document.querySelector('.navigation__mobile');
$navigation__mobile.addEventListener('click', event => {
  event.preventDefault;
  $navigation__mobile.classList.add('active');
});
