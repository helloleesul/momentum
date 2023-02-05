const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  // padStart 또는 padEnd를 사용하려면 String type 이어야 함.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
