// 실시간 data값 갱신

// function refresh() {
//   const curTemp = document.getElementById("cur-temp");
//   const curHum = document.getElementById("cur-hum");
//   const curIll = document.getElementById("cur-ill");
//   const curGas = document.getElementById("cur-gas");
//   const curCo2 = document.getElementById("cur-co2");
//   const curDust = document.getElementById("cur-dust");
//   $.ajax({
//     url: "http://192.168.70.228:5025/test1/index/get/",
//     type: "GET",
//     // datatype: "json",
//     success: function (data) {
//       // console.log(data);0
//       curTemp.innerHTML = `${data[99].d_tem}℃`;
//       curHum.innerHTML = `${data[99].d_hum}%`;
//       curIll.innerHTML = `${data[99].d_ill}lx`;
//       curGas.innerHTML = `${data[99].d_voc}`;
//       curCo2.innerHTML = `${data[99].d_co2}ppm`;
//       curDust.innerHTML = `${data[99].d_pm}ug/㎥`;
//     },
//   });
// }

// refresh();
// setInterval(refresh, 5000);

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

function getDevice() {
  // air
  // $.ajax({
  //   url: "http://192.168.70.228:5025/test1/index/air/",
  //   type: "GET",
  //   // datatype: "json",
  //   success: function (data) {
  //     const airStatus = document.getElementById("air-condition-status");
  //     if (data["d_fan"] == 1) {
  //       $('input:checkbox[id="air-condition-toggle"]').attr("checked", true);
  //       airStatus.innerHTML = "On";
  //     } else {
  //       $('input:checkbox[id="air-condition-toggle"]').attr("checked", false);
  //       airStatus.innerHTML = "Off";
  //     }
  //   },
  // });

  // Humi
  // $.ajax({
  //   url: "http://192.168.70.228:5025/test1/index/humi/",
  //   type: "GET",
  //   // datatype: "json",
  //   success: function (data) {
  //     const humiStatus = document.getElementById("humidifier-status");
  //     if (data["d_fan"] == 1) {
  //       $('input:checkbox[id="humidifier-toggle"]').attr("checked", true);
  //       humiStatus.innerHTML = "On";
  //     } else {
  //       $('input:checkbox[id="humidifier-toggle"]').attr("checked", false);
  //       humiStatus.innerHTML = "Off";
  //     }
  //   },
  // });

  // Fan
  $.ajax({
    url: "http://192.168.70.228:5025/test1/index/fan/",
    type: "GET",
    // datatype: "json",
    success: function (data) {
      const fanStatus = document.getElementById("fan-status");
      if (data["d_fan"] == 1) {
        $('input:checkbox[id="fan-toggle"]').attr("checked", true);
        fanStatus.innerHTML = "On";
      } else {
        $('input:checkbox[id="fan-toggle"]').attr("checked", false);
        fanStatus.innerHTML = "Off";
      }
    },
  });

  // Heater
  $.ajax({
    url: "http://192.168.70.228:5025/test1/index/heater/",
    type: "GET",
    // datatype: "json",
    success: function (data) {
      const heatStatus = document.getElementById("heater-status");
      if (data["d_heat"] == 1) {
        $('input:checkbox[id="heater-toggle"]').attr("checked", true);
        heatStatus.innerHTML = "On";
      } else {
        $('input:checkbox[id="heater-toggle"]').attr("checked", false);
        heatStatus.innerHTML = "Off";
      }
    },
  });
}

setInterval(getDevice, 2000);
