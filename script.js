// Function to save user registration data in localStorage
function registerUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
}

// Function to check if a user exists
function userExists(username) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.username === username);
}

// Function to authenticate user
function authenticateUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === username && user.password === password);
  return user !== undefined;
}

// Event listener for registration form submission
const registrationForm = document.getElementById('register-form');
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const regUsername = document.getElementById('register-username').value;
  const regname = document.getElementById('register-name').value;
  const regnumber = document.getElementById('register-Number').value;
  const regPassword = document.getElementById('register-password').value;
  
  
  if (userExists(regUsername)) {
      alert('Username already exists. Please choose a different one.');
  } else {
      registerUser(regUsername, regPassword);
      alert('Registration successful! You can now log in.');
      registrationForm.reset();
  }
});

// Event listener for login form submission
const loginForm = document.getElementById('loginform');
const loginStatus = document.getElementById('loginStatus');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    if (authenticateUser(loginUsername, loginPassword)) {
        loginStatus.textContent = 'Login successful!';
        // You can redirect the user to a new page or perform other actions after successful login.
    } else {
        loginStatus.textContent = 'Login failed. Please check your credentials.';
    }
});