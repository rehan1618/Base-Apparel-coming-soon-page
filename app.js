const errMsg = document.querySelector('.err-msg');
const error = document.querySelector('.error');
const btn = document.querySelector('.img-container');
const email = document.querySelector('.email-input');
const main = document.querySelector('.main');

var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i;

main.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  if (
    !email.value.length &&
    e.target !== btn &&
    e.target !== document.querySelector('.btn')
  ) {
    errMsg.classList.remove('visible');
    error.classList.remove('visible');
  }
});

btn.addEventListener('click', (e) => {
  if (!email.value.length) {
    errMsg.innerText = 'Email is required!';
    errMsg.classList.add('visible');
    error.classList.add('visible');
    return;
  }
  if (!email.value.match(pattern)) {
    errMsg.innerText = 'Please provide a valid email!';
    errMsg.classList.add('visible');
    error.classList.add('visible');
    return;
  }

  errMsg.classList.remove('visible');
  error.classList.remove('visible');
  email.value = '';
});
