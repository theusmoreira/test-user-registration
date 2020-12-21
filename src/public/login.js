const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!email.value.length || !password.value.length) {
    alert('All fields are required');
    return;
  }

  axios
    .post('/sessions', {
      email: email.value,
      password: password.value,
    })
    .then(response => {
      alert(`Welcome, ${response.data.user.name}`);
    })
    .catch(error => alert(error.response.data.error));

  form.reset();
});
