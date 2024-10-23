const registration = document.getElementById("registration");
const login = document.getElementById("login");
const username = registration.elements["username"];
const email = registration.elements["email"];
const password = registration.elements["password"];
const passwordCheck = registration.elements["passwordCheck"];
const termsAndConditions = registration.elements["terms"];
const loginUsername = login.elements["username"];
const loginPassword = login.elements["password"];
const keepMeLoggedIn = login.elements["persist"];

const errorDisplay = document.getElementById("errorDisplay");

function validateRegistration(e) {
  e.preventDefault();
  //username
  const usernameValue = validateUsername();
  if (usernameValue === false) {
    e.preventDefault();
    return false;
  }
  //email
  const emailValue = validateRegistrationEmail();
  if (emailValue === false) {
    e.preventDefault();
    return false;
  }
  //password
  const passwordValue = validatePassword();
  if (passwordValue === false) {
    e.preventDefault();
    return false;
  }
  //check Password
  const checkPasswordValue = validateCheckPassword();
  if (checkPasswordValue === false) {
    e.preventDefault();
    return false;
  }

  const termsAndConditionsValue = validateTermsAndConditions();
  if (termsAndConditionsValue === false) {
    e.preventDefault();
    return false;
  }

  const uniqueUsername = validateUniqueUsernames();
  if (uniqueUsername === false) {
    e.preventDefault();
    return false;
  }
  //Storing at localStorage
  localStorage.setItem(usernameValue, passwordValue);

  //clear form
  registration.reset();
  return true;
}

function validateUsername() {
  const usernameValue = username.value;
  const regex = /[^a-zA-Z0-9]/;
  if (regex.test(usernameValue)) {
   alert(`Username '${usernameValue}' contains a special character or whitespace`);
    username.focus();
    return false;
  }
  if (usernameValue === "") {
   alert("username cannot be blank");
    username.focus();
    return false;
  }
  if (usernameValue.length < 4) {
    alert( "username must be at least four characters long");
    username.focus();
    return false;
  }
  
  const uniqueChars = new Set(usernameValue.split(""));
  if (uniqueChars.size < 2) {
   alert(`username: ${usernameValue} must contain at least 2 unique characters`);
    username.focus();
    return false;
  }
  return usernameValue.toLowerCase();
}

function validateRegistrationEmail() {
  const emailValue = email.value;
  const atPosition = emailValue.indexOf("@");
  const dotPosition = emailValue.lastIndexOf(".");

  if (emailValue === "") {
    alert("Email cannot be blank");
    email.focus();
    return false;
  }
  if (atPosition < 1) {
    alert("Your email must include an @ symbol which cannot be at the beginnig of the email");
    email.focus();
    return false;
  }
  if (dotPosition - atPosition < 2) {
    alert("Invalid email structure. \nYou must include a domain name after the @ symbol.");
    email.focus();
    return false;
  }

  return emailValue.toLowerCase();
}

function validatePassword() {
  const passwordValue = password.value;
  if (passwordValue === "") {
    alert("password cannot be blank");
    password.focus();
    return false;
  }
  if (passwordValue.length < 12) {
    alert("password must be at least 12 characters long");
    password.focus();
    return false;
  }
  const regexLowercase = /[a-z]/;
  const regexUppercase = /[A-Z]/;
  if (
    !(regexLowercase.test(passwordValue) && regexUppercase.test(passwordValue))
  ) {
   alert(
      "password requires at least 1 uppercase and 1 lowercase");
    password.focus();
    return false;
  }
  const regexForNumber = /[0-9]/;
  if (!regexForNumber.test(passwordValue)) {
    alert("password requires at least 1 number");
    password.focus();
    return false;
  }

  const usernameValue = validateUsername();
  if (
    passwordValue === usernameValue ||
    passwordValue.includes(usernameValue)
  ) {
    errorDisplay.style.display = "block";
    errorDisplay.innerHTML = `Password cannot contain username: ${usernameValue}`;
    password.focus();
    return false;
  }
  return passwordValue;
}

function validateCheckPassword() {
  const checkPasswordValue = passwordCheck.value;
  const passwordValue = validatePassword();
  if (checkPasswordValue === "") {
    alert("check password cannot be blank");
    passwordCheck.focus();
    return false;
  }
  if (checkPasswordValue !== passwordValue) {
   alert("passwords must match");
    passwordCheck.focus();
    return false;
  }
  return checkPasswordValue;
}

function validateTermsAndConditions() {
  const termsValue = termsAndConditions;
  if (!termsValue.checked) {
    alert("The terms and conditions must be accepted");
    termsAndConditions.focus();
    return false;
  }
  return true;
}
function validateUniqueUsernames() {
  const usernameValue = validateUsername();
  if (localStorage.getItem(usernameValue)) {
   alert(
      "username is already taken, use a different username");
    username.focus();
    return false;
  }
  return true;
}

function validateLogin(e) {
  e.preventDefault();

  const usernameValue = validateLoginUsername();
  if (usernameValue === false) {
    e.preventDefault();
    return false;
  }
  const passwordValue = validateLoginPassword();
  if (passwordValue === false) {
    e.preventDefault();
    return false;
  }

  const keepMeValue = validateKeepMeLoggedIn();
  if (keepMeValue === false) {
    e.preventDefault();
    return false;
  }

  
//   .innerHTML = "You've successfully logged in!";
  login.reset();
  return true;
}

function validateLoginUsername() {
  const usernameValue = loginUsername.value;
  if (usernameValue === "") {
    alert("Username cannot be blank");
    loginUsername.focus();
    return false;
  }
  if (!localStorage.getItem(usernameValue)) {
    alert("This username does not exists");
    loginUsername.focus();
    return false;
  }
  return true;
}

function validateLoginPassword() {
  const passwordValue = loginPassword.value;
  const usernameValue = loginUsername.value;
  if (passwordValue === "") {
    alert("Password cannot be blank");
    loginPassword.focus();
    return false;
  }
  if (!localStorage.getItem(usernameValue)) {
    alert("Wrong password");
    loginPassword.focus();
    return false;
  }
  return true;
}

function validateKeepMeLoggedIn() {
  const keepMe = keepMeLoggedIn;
  if (keepMe.checked) {
    alert("Success! You selected 'Keep me logged in'");
    
    keepMeLoggedIn.focus();
    return false;
  }
  return true;
}
registration.addEventListener("submit", validateRegistration);
login.addEventListener("submit", validateLogin);
