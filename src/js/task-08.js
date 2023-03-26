const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault(); // отменяем действие по умолчанию

  const formData = new FormData(loginForm);
  const userData = {};
  let isFormFilled = true;

  formData.forEach((value, key) => {
    if (!value) {
      isFormFilled = false;
      alert(`Please fill in ${key} field`);
    } else {
      userData[key] = value;
    }
  });

  if (isFormFilled) {
    console.log(userData);
    loginForm.reset();
  }
});
