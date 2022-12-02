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
  $.ajax({
    url: "http://192.168.70.228:5025/test1/index/get/",
    type: "GET",
    datatype: "json",
    success: function (data) {
      // console.log(data);
      var chart = document.getElementById("chart").getContext("2d");
      var timeArr = [];
      var sensorArr = [];
      for (i = 0; i < data.length; i++) {
        // console.log(data[i]);
        timeArr.push(data[i].d_time.substr(11, 8));
        if (viewSensor == "temp") {
          sensorArr.push(data[i].d_tem);
        } else if (viewSensor == "humid") {
          sensorArr.push(data[i].d_hum);
        } else if (viewSensor == "illumination") {
          sensorArr.push(data[i].d_ill);
        } else if (viewSensor == "gas") {
          sensorArr.push(data[i].d_voc);
        } else if (viewSensor == "co2") {
          sensorArr.push(data[i].d_co2);
        } else if (viewSensor == "dust") {
          sensorArr.push(data[i].d_pm);
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
    },
  });
  //
  // modal.classList.add("hidden");
  // modal.classList.remove("hidden");
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

let targetSensor = "temp";
// 온도 클릭
const temp = dash.querySelector("#temp");
const tempClick = () => {
  const sensor = temp.querySelector(".media-body .sensor");
  // data값 변경
  content.innerHTML = "온도";
  targetSensor = "temp";
  getChart(targetSensor);
  modalSensor.classList.remove("hidden");
  openModal();
};
temp.addEventListener("click", tempClick);

// 습도 클릭
const hum = dash.querySelector("#hum");
const humClick = () => {
  const sensor = hum.querySelector(".media-body .sensor");
  content.innerHTML = "습도";
  targetSensor = "humid";
  getChart(targetSensor);
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
  targetSensor = "illumination";
  getChart(targetSensor);
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
  targetSensor = "gas";
  getChart(targetSensor);
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
  targetSensor = "co2";
  getChart(targetSensor);
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
  targetSensor = "dust";
  getChart(targetSensor);
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

setInterval(() => getChart(targetSensor), 3000);

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
