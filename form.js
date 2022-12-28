const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();

  if (validateEmail(email.value)) {
    document.querySelector("#email-label").innerHTML = "Email is not valid";
    email.style.border = "3px solid red";
  } else {
    email.style.border = "3px solid green";
    document.querySelector("#email-label").innerHTML = "Email is valid";
  }

  if (validatePassword(password.value)) {
    document.querySelector("#pasword-label").innerHTML =
      "Password is not valid";
    password.style.border = "3px solid red";
  } else {
    password.style.border = "3px solid green";
    document.querySelector("#pasword-label").innerHTML = "Password is valid";
  }

  if (validatePhone(phone.value)) {
    document.querySelector("#phone-label").innerHTML = "Phone is not valid";
    phone.style.border = "3px solid red";
  } else {
    phone.style.border = "3px solidgreen";
    document.querySelector("#phone-label").innerHTML = "Phone is  valid";
  }
});

function validateEmail(email) {
  const regex = /[a-zA-Z0-9\.\_\-]+\@[a-z]+\.[a-z]{3}/g;
  return email.match(regex) === null;
}

function validatePassword(password) {
  const regex = /[0-9]{9}/g;
  return password.match(regex) === null;
}

function validatePhone(phone) {
  const regex = /[0-9]{9}/g;
  return phone.match(regex) === null;
}
