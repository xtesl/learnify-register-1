const url = 'https://learnify-api-kps0.onrender.com/api/v1/auth/register/'; // Replace with your API endpoint

const submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  const data = {
    email: email,
    password: password,
    username: username
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Add any other headers you need, such as authorization headers
    },
    body: JSON.stringify(data)
  };
    loginMessage.style.display = 'block';
    submit.disabled = true;
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
    })
    .then(data => {
        window.alert('Register was successful! please activate your acc.');
      // Handle the response data here
    })
    .catch(error => {
      console.error('There was a problem with the POST request:', error);
      // Handle errors here
    }).finally(() => {
      // Hide the login message and enable the submit button
      loginMessage.style.display = 'none';
      submit.disabled = false;
    });
});
