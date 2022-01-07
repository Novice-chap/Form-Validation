const form = document.querySelector("#form");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector("#message-container");
const message = document.querySelector(".message");
const button = document.querySelector("[type=submit]");

let isValid = false;
let passwordsMatch = false;
function validateForm() {
  isValid = form.checkValidity();
  // console.log(isValid);
  if (isValid && passwordsMatch) {
    // button.textContent = "registered successfully";
    // button.style.color = "green";
    // button.style.background = "white";
    messageContainer.style.borderColor = "green";
    message.style.color = "green";
    message.textContent = "Thank you for registering with us!";
    isValid = false;
    passwordsMatch = false;
    return;
  }
  if (!isValid) {
    messageContainer.style.borderColor = "red";
    message.style.color = "red";
    message.textContent = "Please fill all details";
    return;
  }
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    messageContainer.style.borderColor = "red";

    message.style.color = "red";
    message.textContent = "Make sure passwords match!";
  }
}

const storeUserInformation = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
};

const processFormData = (e) => {
  e.preventDefault();
  validateForm();
  if (isValid && passwordsMatch) {
    storeUserInformation();
  }
};

form.addEventListener("submit", processFormData);
