// eslint-disable-next-line camelcase
const $navigation__mobile = document.querySelector('.navigation__mobile');
$navigation__mobile.addEventListener('click', event => {
  event.preventDefault();
  if ($navigation__mobile.classList.value === 'navigation__mobile active') {
    $navigation__mobile.classList.add('inactive');
    setTimeout(() => $navigation__mobile.classList.remove('active', 'inactive'), 1000)
  } else {
    $navigation__mobile.classList.add('active');
  }
});
