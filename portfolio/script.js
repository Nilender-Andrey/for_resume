function turnRight() {
  const face = document.querySelector('.face');
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');

  removHeaderAndFooter();

  pushBack();

  if (face) {
    face.className = 'main__page left leftAnimation1';
  }
  if (left) {
    left.className = 'main__page right leftAnimation2';
  }
  if (right) {
    right.className = 'main__page face leftAnimation3';
    addBtnActiveClassToButton(right.id);
  }
}

function turnLeft() {
  const face = document.querySelector('.face');
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');

  removHeaderAndFooter();

  pushBack();

  if (face) {
    face.className = 'main__page right rightAnimation1';
  }
  if (left) {
    left.className = 'main__page face rightAnimation3';
    addBtnActiveClassToButton(left.id);
  }
  if (right) {
    right.className = 'main__page left rightAnimation2';
  }
}

function addBtnActiveClassToButton(nameSection) {
  const headerBtn = document.querySelectorAll('.header__btn');
  headerBtn.forEach((item) => {
    item.classList.remove('btn-active');

    if (item.classList.contains(`header__btn_${nameSection}`)) {
      item.classList.add('btn-active');
    }
  });
}

//***********************  main handler  ***************************/

document.querySelector('.main-wrap').onclick = (event) => {
  const pressedElementClass = event.target;

  if (pressedElementClass.closest('button.section__btn_left')) {
    turnLeft();
  } else if (pressedElementClass.closest('button.section__btn_right')) {
    turnRight();
  }
};

//***********************  header handler  ***************************/

document.querySelector('.header').onclick = (event) => {
  const pressedElClassList = event.target.classList;

  if (pressedElClassList.contains('header__btn')) {
    removHeaderAndFooter();
    const face = document.querySelector('.face');
    const headerBtn = document.querySelectorAll('.header__btn');

    headerBtn.forEach((item) => item.classList.remove('btn-active'));
    pressedElClassList.add('btn-active');

    if (pressedElClassList.contains('header__btn_my-contacts')) {
      if (face.id === 'about-me') turnLeft();
      if (face.id === 'my-works') turnRight();
    }
    if (pressedElClassList.contains('header__btn_about-me')) {
      if (face.id === 'my-contacts') turnRight();
      if (face.id === 'my-works') turnLeft();
    }
    if (pressedElClassList.contains('header__btn_my-works')) {
      if (face.id === 'about-me') turnRight();
      if (face.id === 'my-contacts') turnLeft();
    }
  }
};

function removHeaderAndFooter() {
  const headerWrap = document.querySelector('.header-wrap');
  const footer = document.querySelector('.footer');

  headerWrap.firstElementChild.classList.add('remove-logo');
  headerWrap.lastElementChild.classList.add('remove-menu');
  headerWrap.parentElement.classList.add('remove-header');
  footer.classList.add('remove-footer');
  footer.firstElementChild.classList.add('remove-footer-wrap');

  setTimeout(() => {
    headerWrap.firstElementChild.classList.remove('remove-logo');
    headerWrap.lastElementChild.classList.remove('remove-menu');
    headerWrap.parentElement.classList.remove('remove-header');
    footer.classList.remove('remove-footer');
    footer.firstElementChild.classList.remove('remove-footer-wrap');
  }, 3700);
}

function pushBack() {
  const mainWrap = document.querySelector('.main-wrap');

  const bodyWrap = document.querySelector('.body-wrap');

  bodyWrap.classList.remove('body-wrap--hide');
  mainWrap.classList.add('scaleAnimation1');

  setTimeout(() => {
    mainWrap.classList.remove('scaleAnimation1');
    bodyWrap.classList.add('body-wrap--hide');
  }, 5500);
}
