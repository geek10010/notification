const notification = document.querySelector('#notification')
const close = document.querySelector('#close');
const dismiss = document.querySelector('#dismiss');
const tipHeader = document.querySelector('#tip-header');
const tipContent = document.querySelector('#tip-content');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let counter = 0;

let notifs = [
  '0 Lorem ipsum dolor sit amet, consectetur adipiscing elit qui officia deserunt mollit anim id est laborum.',
  '1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  '2 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum.',
  '3 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
  '4 velit esse cillum dolore eu fugiat nulla pariatur. qui officia deserunt mollit anim id est laborum.',
  '5 Excepteur sint occaecat cupidatat non proident, sunt in culpa',
  '6 qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum.',
  '7 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  '8 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum.',
  '9 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
  '10 velit esse cillum dolore eu fugiat nulla pariatur. qui officia deserunt mollit anim id est laborum.',
  '11 Excepteur sint occaecat cupidatat non proident, sunt in culpa',
  '12 qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum.',
];

/*
*/


const renderItems = (index = 0) => {
  if (notifs[index]) {
    let tiphead = notifs[index].slice(3, 25); //
    tipHeader.innerHTML = tiphead; //
//    console.log(tiphead); //
    tipContent.innerHTML = notifs[index];
    // add bullets!
  }
};


next.addEventListener('click', e => {
  if (counter === notifs.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  renderItems(counter);
});

prev.addEventListener('click', e => {
  if (counter === 0) {
    counter = notifs.length - 1;
  } else {
    counter--;
  }
  renderItems(counter);
});




close.addEventListener('click', e => {
  hideNotification();
});

const hideNotification = () => {
  notification.classList.add('-hidden');
  notification.innerHTML = '';
};

dismiss.addEventListener('click', e => {
  populateStorage();
});

const populateStorage = () => {
  if (dismiss.checked) {
    localStorage.setItem('dismiss', dismiss.checked);
  } else {
    localStorage.removeItem('dismiss');
  }
};

const pageLoad = () => {
  if(localStorage.getItem('dismiss') === 'true' || notifs.length === 0) {
    hideNotification();
  } else {
    notification.classList.remove('-hidden');
    renderItems(counter);
  }
};

pageLoad();



