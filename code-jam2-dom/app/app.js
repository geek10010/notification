const notification = document.querySelector('#notification')
const close = document.querySelector('#close');
const dismiss = document.querySelector('#dismiss');

close.addEventListener('click', e => {
  notification.classList.add('-hidden');
});


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
  if(localStorage.getItem('dismiss') === 'true') {
    notification.classList.add('-hidden');
  } else {
    notification.classList.remove('-hidden');
  }
};

pageLoad();
