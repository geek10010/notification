const notification = document.querySelector('#notification')
const close = document.querySelector('#close');
const dismiss = document.querySelector('#dismiss');
const tipHeader = document.querySelector('#tip-header');
const tipContent = document.querySelector('#tip-content');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const bulletsContainer = document.querySelector('#bullets-container');
let counter = 0;

let notifs = [
  '0  Controls tip:                    <br>Escape key to close<br>Ctrl + ← key to previous<br>Ctrl + → key to next.',
  '1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  '2 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum.',
  '3 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
  '4 velit esse cillum dolore eu fugiat nulla pariatur. qui officia deserunt mollit anim id est laborum.',
  '5 Excepteur sint occaecat cupidatat non proident, sunt in culpa',
  '6 qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum.',
  '7 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
];


const hideNotification = () => {
  notification.classList.add('-hidden');
  notification.innerHTML = '';
};

const showNotification = () => {
  notification.classList.remove('-hidden');
}


const renderBullets = (index) => {
  bulletsContainer.innerHTML = notifs
  .map((item, k) => `<div class="bullet${k === index ? ' -current' : ''}">&#8226;</div>`)
  .join('\n');
};

const renderItems = (index) => {
  if (notifs[index]) {
    tipHeader.innerHTML = notifs[index].slice(3, 25);
    tipContent.innerHTML = notifs[index];
    renderBullets(counter);
  }
};


const toNext = () => {
  if (counter === notifs.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  renderItems(counter);
};

next.addEventListener('click', e => {toNext()});

const toPrevious = () => {
  if (counter === 0) {
    counter = notifs.length - 1;
  } else {
    counter--;
  }
  renderItems(counter);
};

prev.addEventListener('click', e => {toPrevious()});



close.addEventListener('click', e => {
  hideNotification();
});

dismiss.addEventListener('click', e => {
  populateStorage();
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 27) { // escape key
    hideNotification();
  }

  if (e.keyCode === 37 && e.ctrlKey) { // to left
    toPrevious();
  }

  if (e.keyCode === 39 && e.ctrlKey) { // to right
    toNext();
  }
});



const populateStorage = () => {
  if (dismiss.checked) {
    localStorage.setItem('dismiss', dismiss.checked);
  } else {
    localStorage.removeItem('dismiss');
  }
};

const loadNotification = () => {
  if(localStorage.getItem('dismiss') === 'true' || notifs.length === 0) {
    hideNotification();
  } else {
    setTimeout(showNotification, 5000);
    renderItems(counter);
  }
};

loadNotification();
