const logoutBox = document.getElementById("logout-box");
const loginForm = logoutBox.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetingBox = document.getElementById("greeting-box");
const greeting = document.querySelectorAll(".user-name");
const resetBtn = document.getElementById("reset");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e) {
  // 브라우저의 기본동작을 막아줌
  e.preventDefault();

  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);

  loginInput.value = "";
}

function onReset() {
  localStorage.removeItem(USERNAME_KEY);
  logoutBox.classList.remove(HIDDEN_CLASSNAME);
  greetingBox.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(userName) {
  greeting.forEach((el) => (el.innerText = userName));
  logoutBox.classList.add(HIDDEN_CLASSNAME);
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  logoutBox.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUserName);
}

loginForm.addEventListener("submit", onLoginSubmit);
resetBtn.addEventListener("click", onReset);
