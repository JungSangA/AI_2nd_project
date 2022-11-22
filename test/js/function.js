const modal = document.querySelector(".modal-div");
const closeBtn = document.getElementById("closeBtn");
const overlay = modal.querySelector(".modal-overlay");
const content = modal.querySelector(".modal-content h2");
const dash = document.getElementById("dashboard");

const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

// 온도 클릭
const temp = dash.querySelector("#temp");
const tempClick = () => {
  const sensor = temp.querySelector(".media-body .sensor");

  //
  // DB (temp) -> 테이블검색을 하고, 몇분동안 data를 가지고 와서
  const data = [
    { time: "2022-11-22T11:25:21Z", temp: 21, humid: 32 },
    { time: "2022-11-22T11:25:22Z", temp: 21, humid: 32 },
    { time: "2022-11-22T11:25:23Z", temp: 21, humid: 32 },
    { time: "2022-11-22T11:25:24Z", temp: 21, humid: 32 },
    { time: "2022-11-22T11:25:25Z", temp: 21, humid: 32 },
    { time: "2022-11-22T11:25:26Z", temp: 21, humid: 32 },
    { time: "2022-11-22T11:25:27Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:28Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:29Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:30Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:31Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:32Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:33Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:34Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:35Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:25:36Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:37Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:38Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:39Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:40Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:41Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:42Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:43Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:44Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:25:45Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:25:46Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:47Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:48Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:49Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:50Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:51Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:52Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:53Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:54Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:55Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:56Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:25:57Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:25:58Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:25:59Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:00Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:01Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:02Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:03Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:04Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:05Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:06Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:07Z", temp: 21, humid: 35 },
    { time: "2022-11-22T11:26:08Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:26:09Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:26:10Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:26:11Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:26:12Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:26:13Z", temp: 21, humid: 34 },
    { time: "2022-11-22T11:26:14Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:15Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:16Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:17Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:18Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:19Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:20Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:21Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:22Z", temp: 22, humid: 34 },
    { time: "2022-11-22T11:26:23Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:24Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:25Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:26Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:27Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:28Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:29Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:30Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:31Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:32Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:33Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:34Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:35Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:36Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:37Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:38Z", temp: 20, humid: 32 },
    { time: "2022-11-22T11:26:39Z", temp: 21, humid: 33 },
    { time: "2022-11-22T11:26:40Z", temp: 23, humid: 33 },
    { time: "2022-11-22T11:26:41Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:42Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:43Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:44Z", temp: 22, humid: 33 },
    { time: "2022-11-22T11:26:45Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:46Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:47Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:48Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:49Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:50Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:51Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:52Z", temp: 22, humid: 32 },
    { time: "2022-11-22T11:26:53Z", temp: 22, humid: 31 },
    { time: "2022-11-22T11:26:54Z", temp: 22, humid: 31 },
    { time: "2022-11-22T11:26:55Z", temp: 22, humid: 31 },
    { time: "2022-11-22T11:26:56Z", temp: 22, humid: 31 },
    { time: "2022-11-22T11:26:57Z", temp: 20, humid: 31 },
    { time: "2022-11-22T11:26:58Z", temp: 21, humid: 31 },
    { time: "2022-11-22T11:26:59Z", temp: 23, humid: 31 },
    { time: "2022-11-22T16:48:17Z", temp: 50, humid: 50 },
  ];
  // data값 변경
  content.innerHTML = `${data[99].temp}`;
  console.log(data.length);
  // 그래프로 그려줌
  modal.classList.remove("hidden");
};
temp.addEventListener("click", tempClick);

//  클릭
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
