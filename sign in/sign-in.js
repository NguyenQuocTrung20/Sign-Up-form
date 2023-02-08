const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInput();
});

function checkInput() {
//   Get Values from inputs and check
//   trim will get rid of whitespace
  const usernameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordtwoValue = passwordTwo.value.trim();
  
//   If there is an easier way to repeat these 'if' statements please let me know
//   shoot me an email 
  
  if (usernameValue === '') {
//     Add error class and display message
    
    showErrorFor(userName, 'Username cannot be blank');
  } else {
//     Add success class
    setSuccessFor(userName);
  }
  
  if (emailValue === '') {
//     Add error class and display message
    
    showErrorFor(email, 'email cannot be blank');
    
  } else if(!validEmail(emailValue)) {
    showErrorFor(email, 'Invalid email');
    
  } else {
//     Add success class
    setSuccessFor(email);
  }
  
  if (passwordValue === '') {
//     Add error class and display message
    
    showErrorFor(password, 'Password cannot be blank');
  } else {
//     Add success class
    setSuccessFor(password);
  }
  
  if (passwordtwoValue === '') {
//     Add error class and display message
    
    showErrorFor(passwordTwo, 'Password cannot be blank');
  } else if(passwordValue !== passwordtwoValue) {
//     If passwords do not match show error
    showErrorFor(passwordTwo, 'Passwords must match');
  } else {
//     Add success class
    setSuccessFor(passwordTwo);
  }
  
  function showErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
//     set the error message
    small.innerText = message;
//     Set the failure class
    formControl.className = 'form-controls failure';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement
    
//     set success class
    formControl.className = 'form-controls success';
  }
  
  // The following will check if email entered is valid
  function validEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

};