// eslint-disable-next-line camelcase
const $main = document.querySelector('.main');
const $navigation__mobile = document.querySelector('.navigation__mobile');
const $navigation__website = document.querySelector('.navigation__website');

$navigation__mobile.addEventListener('click', event => {
  event.preventDefault();
  if ($navigation__mobile.classList.value === 'navigation__mobile active') {
    $navigation__mobile.classList.add('inactive');
    setTimeout(() => {
      $navigation__mobile.classList.remove('active', 'inactive')
      $navigation__website.classList.remove('active');
      $main.classList.remove('mobile-active');
    }, 600)
  } else {
    $navigation__mobile.classList.add('active');
    $navigation__website.classList.add('active');
    $main.classList.add('mobile-active');
  }
});
