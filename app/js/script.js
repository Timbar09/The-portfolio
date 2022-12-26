const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const logo = document.querySelector('.header__logo');

// NAV DISAPPEARENCE AND REAPPEARENCE

const navStatus = () => {
  const nav = document.querySelector('.header__nav-section');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }

    lastScrollY = window.scrollY;
  });
};

navStatus();

// DARK-MODE TOGGLE
let darkMode = localStorage.getItem('darkMode');
const dakModeToggle = document.querySelector('.header__toggle');

const enableDarkMode = () => {
  body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

dakModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// HAMBURGER MENU ANIMATION
const btnHamburger = document.querySelector('#btnHumburger');
const menuOptions = document.querySelectorAll('#appear');

const closeMenu = () => {
  body.classList.remove('noscroll');
  header.classList.remove('open');
  overlay.classList.remove('fade-in');
  header.classList.add('close');
  overlay.classList.add('fade-out');
};

const openMenu = () => {
  body.classList.add('noscroll');
  header.classList.add('open');
  overlay.classList.add('fade-in');
  header.classList.remove('close');
  overlay.classList.remove('fade-out');
};

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

//After clicking an option on the mobile menu
menuOptions.forEach((option) =>
  option.addEventListener('click', function () {
    closeMenu();
  })
);

//BUTTON CLICK ANIMATION

const buttons = document.querySelectorAll('.button a');

buttons.forEach((button) =>
  button.addEventListener('click', function () {
    button.classList.add('click');
    button.addEventListener('animationend', () => {
      button.classList.remove('click');
    });
  })
);

// FORM

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};

const formInputs = document.querySelectorAll('.john-wick');

formInputs.forEach((input) =>
  input.addEventListener('focusin', function () {
    if (input.placeholder === 'Name *') {
      input.placeholder = 'e.g John Wick';
    } else if (input.placeholder === 'Email *') {
      input.placeholder = 'e.g giveMeThanos@yahoo.com';
    } else if ((input.placeholder = 'Message *')) {
      input.placeholder = 'e.g Where is Thanos?';
    }
  })
);

formInputs.forEach((input) =>
  input.addEventListener('blur', function () {
    if (input.placeholder === 'e.g John Wick') {
      input.placeholder = 'Name *';
    } else if (input.placeholder === 'e.g giveMeThanos@yahoo.com') {
      input.placeholder = 'Email *';
    } else if ((input.placeholder = 'e.g Where is Thanos?')) {
      input.placeholder = 'Message *';
    }
  })
);
