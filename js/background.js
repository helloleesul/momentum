const background = [
  "hello_0.jpg",
  "hello_1.jpg",
  "hello_2.jpg",
  "hello_3.jpg",
  "hello_4.jpg",
  "hello_5.jpg",
  "hello_6.jpg",
];

const hearts = ["💛", "💖", "💜", "🧡", "🖤", "💚", "💙"];

const today = Math.floor(Math.random() * background.length);
const heart = document.querySelector(".profile");

document.body.style.backgroundImage = `url('img/${background[today]}')`;
heart.innerText = hearts[today];
