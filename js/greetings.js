const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("h1");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const renamingButton = document.querySelector("#renaming-form button");

function onLoginSubmit(tomato) {
  const userName = loginInput.value;
  tomato.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreeting(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `반갑습니다 ${userName} 님!`;
}
const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(savedUserName);
}

function onrenaming() {
  localStorage.removeItem(USERNAME_KEY);
}
renamingButton.addEventListener("click", onrenaming);
