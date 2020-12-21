const form = document.querySelector('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!name.value.length || !password.value.length || !email.value.length) {
    alert('All fields are required');
    return;
  }

  axios
    .post('/users', {
      name: name.value,
      email: email.value,
      password: password.value,
    })
    .then(response => alert(`Welcome, ${response.data.name}`))
    .catch(error => alert(error.response.data.error));

  form.reset();
});
