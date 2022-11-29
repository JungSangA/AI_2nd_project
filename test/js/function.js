const modal = document.querySelector(".modal-div");
const sensorCloseBtn = document.getElementById("sensor-closeBtn");
const cctvCloseBtn = document.getElementById("cctv-closeBtn");
const overlay = modal.querySelector(".modal-overlay");
const content = modal.querySelector(".modal-content h2");
const dash = document.getElementById("dashboard");
const modalSensor = document.getElementById("modal-sensor");
const modalCctv = document.getElementById("modal-cctv");

// chart.js 쓰기
function getChart(viewSensor) {
  let color = "rgb(231,233,237)";
  // 색깔 구분하기
  if (viewSensor === "temp") {
    // red
    color = "rgb(255, 99, 132)";
  } else if (viewSensor === "humid") {
    // blue
    color = "rgb(54, 162, 235)";
  } else if (viewSensor === "illumination") {
    // orange
    color = "rgb(255, 159, 64)";
  } else if (viewSensor === "gas") {
    // purple
    color = "rgb(153, 102, 255)";
  } else if (viewSensor === "co2") {
    // green
    color = "rgb(75, 192, 192)";
  } else if (viewSensor === "dust") {
    // grey
    color = "rgb(231,233,237)";
  }

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
    { time: "2022-11-22T16:48:17Z", temp: 24, humid: 34 },
  ];
  var chart = document.getElementById("chart").getContext("2d");
  var timeArr = [];
  var sensorArr = [];
  for (i = 0; i < data.length; i++) {
    // console.log(data[i]);
    timeArr.push(data[i].time.substring(11, 19));
    if (viewSensor == "temp") {
      sensorArr.push(data[i].temp);
    } else if (viewSensor == "humid") {
      sensorArr.push(data[i].humid);
    }
  }
  if (window.chart2 != undefined) {
    window.chart2.destroy();
  }
  window.chart2 = new Chart(chart, {
    type: "line",
    data: {
      labels: timeArr,
      datasets: [
        {
          label: viewSensor,
          backgroundColor: color,
          borderColor: color,
          data: sensorArr,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Latest 100 Temp chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              // labelString: "Time",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
  });
  //
}

const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  modalSensor.classList.add("hidden");
  modalCctv.classList.add("hidden");
  modalCctv.classList.remove("table");
};
overlay.addEventListener("click", closeModal);
sensorCloseBtn.addEventListener("click", closeModal);
cctvCloseBtn.addEventListener("click", closeModal);

// 온도 클릭
const temp = dash.querySelector("#temp");
const tempClick = () => {
  const sensor = temp.querySelector(".media-body .sensor");
  // data값 변경
  content.innerHTML = "온도";
  getChart("temp");
  modalSensor.classList.remove("hidden");
  openModal();
};
temp.addEventListener("click", tempClick);

// 습도 클릭
const hum = dash.querySelector("#hum");
const humClick = () => {
  const sensor = hum.querySelector(".media-body .sensor");
  content.innerHTML = "습도";
  getChart("humid");
  modalSensor.classList.remove("hidden");
  openModal();
};
hum.addEventListener("click", humClick);

// 조명 클릭
const ill = dash.querySelector("#ill");
const illClick = () => {
  const sensor = ill.querySelector(".media-body .sensor");
  // data값 변경
  content.innerHTML = "조명";
  getChart("illumination");
  modalSensor.classList.remove("hidden");
  openModal();
};
ill.addEventListener("click", illClick);

// 가스 클릭
const gas = dash.querySelector("#gas");
const gasClick = () => {
  const sensor = gas.querySelector(".media-body .sensor");
  // data값 변경
  content.innerHTML = "가스";
  getChart("gas");
  modalSensor.classList.remove("hidden");
  openModal();
};
gas.addEventListener("click", gasClick);

// 이산화탄소 클릭
const co2 = dash.querySelector("#co2");
const co2Click = () => {
  const sensor = co2.querySelector(".media-body .sensor");
  // data값 변경
  content.innerHTML = "이산화탄소";
  getChart("co2");
  modalSensor.classList.remove("hidden");
  openModal();
};
co2.addEventListener("click", co2Click);

// 먼지 클릭
const dust = dash.querySelector("#dust");
const dustClick = () => {
  const sensor = dust.querySelector(".media-body .sensor");
  // data값 변경
  content.innerHTML = "먼지";
  getChart("dust");
  modalSensor.classList.remove("hidden");
  openModal();
};
dust.addEventListener("click", dustClick);

// 카메라 클릭
const cctv = dash.querySelector("#cctv");
const cctvClick = () => {
  modalCctv.classList.remove("hidden");
  modalCctv.classList.add("table");
  openModal();
};
cctv.addEventListener("click", cctvClick);

// toggle 버튼 구현
// 에어컨
var airConditionToggle = $("input[id='air-condition-toggle']");
airConditionToggle.click(function () {
  const airConditionStatus = document.getElementById("air-condition-status");
  const airCondition = document.getElementById("air-condition");
  if (airConditionStatus.innerHTML === "Off") {
    airConditionStatus.innerHTML = "On";
    airConditionStatus.style.color = "blue";
    airCondition.style.color = "blue";
  } else {
    airConditionStatus.innerHTML = "Off";
    airConditionStatus.style.color = "white";
    airCondition.style.color = "white";
  }
  //  $("p").toggle();
});

// 습도조절기
var humidifierToggle = $("input[id='humidifier-toggle']");
humidifierToggle.click(function () {
  const humidifierStatus = document.getElementById("humidifier-status");
  const humidifier = document.getElementById("humidifier");
  if (humidifierStatus.innerHTML === "Off") {
    humidifierStatus.innerHTML = "On";
    humidifierStatus.style.color = "blue";
    humidifier.style.color = "blue";
  } else {
    humidifierStatus.innerHTML = "Off";
    humidifierStatus.style.color = "white";
    humidifier.style.color = "white";
  }
});

// 팬
var fanToggle = $("input[id='fan-toggle']");
fanToggle.click(function () {
  const fanStatus = document.getElementById("fan-status");
  const fan = document.getElementById("fan");
  if (fanStatus.innerHTML === "Off") {
    fanStatus.innerHTML = "On";
    fanStatus.style.color = "blue";
    fan.style.color = "blue";
  } else {
    fanStatus.innerHTML = "Off";
    fanStatus.style.color = "white";
    fan.style.color = "white";
  }
});

// 히터
var heaterToggle = $("input[id='heater-toggle']");
heaterToggle.click(function () {
  const heaterStatus = document.getElementById("heater-status");
  const heater = document.getElementById("heater");
  if (heaterStatus.innerHTML === "Off") {
    heaterStatus.innerHTML = "On";
    heaterStatus.style.color = "blue";
    heater.style.color = "blue";
  } else {
    heaterStatus.innerHTML = "Off";
    heaterStatus.style.color = "white";
    heater.style.color = "white";
  }
});
