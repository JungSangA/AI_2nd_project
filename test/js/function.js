const modal = document.querySelector(".modal-div");
const closeBtn = document.getElementById("closeBtn");
const overlay = modal.querySelector(".modal-overlay");
const content = modal.querySelector(".modal-content h2");
const dash = document.getElementById("dashboard");
// const el = dash.querySelector("click");
console.log(dash);
console.log(closeBtn);
console.log(overlay);
// window.onload = function () {
//   var el =
//   el.onclick = openModal;
// };
const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  //   console.log(content.innerHTML);
};
// el.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

// 온도 클릭
const temp = dash.querySelector("#temp");
const tempClick = () => {
  const sensor = temp.querySelector(".media-body .sensor");
  //구별
  content.innerHTML = sensor.innerHTML;
  //
  // DB (temp) -> 테이블검색을 하고, 몇분동안 data를 가지고 와서
  // 그래프로 그려줌
  modal.classList.remove("hidden");
};
temp.addEventListener("click", tempClick);

// 조명 클릭
const hum = dash.querySelector("#hum");
const humClick = () => {
  const sensor = hum.querySelector(".media-body .sensor");
  content.innerHTML = sensor.innerHTML;
  modal.classList.remove("hidden");
};
hum.addEventListener("click", humClick);

// 조명 클릭
const ill = dash.querySelector("#ill");
const illClick = () => {
  const sensor = ill.querySelector(".media-body .sensor");
  content.innerHTML = sensor.innerHTML;
  modal.classList.remove("hidden");
};
ill.addEventListener("click", illClick);

// 가스 클릭
const gas = dash.querySelector("#gas");
const gasClick = () => {
  const sensor = gas.querySelector(".media-body .sensor");
  content.innerHTML = sensor.innerHTML;
  modal.classList.remove("hidden");
};
gas.addEventListener("click", gasClick);

// 이산화탄소 클릭
const co2 = dash.querySelector("#co2");
const co2Click = () => {
  const sensor = co2.querySelector(".media-body .sensor");
  content.innerHTML = sensor.innerHTML;
  modal.classList.remove("hidden");
};
co2.addEventListener("click", co2Click);

// 먼지 클릭
const dust = dash.querySelector("#dust");
const dustClick = () => {
  const sensor = dust.querySelector(".media-body .sensor");
  content.innerHTML = sensor.innerHTML;
  modal.classList.remove("hidden");
};
dust.addEventListener("click", dustClick);
