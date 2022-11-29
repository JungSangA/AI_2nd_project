// 실시간 data값 갱신

function refresh() {
  const curTemp = document.getElementById("cur-temp");
  const curHum = document.getElementById("cur-hum");
  const curIll = document.getElementById("cur-ill");
  const curGas = document.getElementById("cur-gas");
  const curCo2 = document.getElementById("cur-co2");
  const curDust = document.getElementById("cur-dust");
  // curTemp.innerHTML = `${}`;
  // curHum.innerHTML = `${}`;
}

refresh();
setInterval(refresh, 5000);

// 시간값 갱신
const year = document.querySelector("h1#year");
const today = document.querySelector("h1#today");
const time = document.querySelector("h2#time");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  year.innerText = `${year}년`;
  today.innerText = `${month}월 ${day}일`;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
