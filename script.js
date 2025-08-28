// Heart button click
// let hearts = 0;
// const heartButtons = document.querySelectorAll(".heart-btn");
// heartButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     hearts++;
//     heartCount.textContent = hearts;
//   });
// });

// let hearts = 0;
// const heartButtons = document.querySelectorAll(".heart-btn");

// function updateHeartCount() {
//   hearts++;
//   heartCount.textContent = hearts;
// }

// heartButtons.forEach(function (btn) {
//   btn.addEventListener("click", updateHeartCount);
// });

let hearts = 0;
const heartButtons = document.querySelectorAll(".heart-btn");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    hearts++;
    heartCount.textContent = hearts;
  });
}

// let coins = 100;
// const callButtons = document.querySelectorAll(".call-btn");
// // Call button click
// callButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const serviceName = btn.getAttribute("data-name");
//     const serviceNumber = btn.getAttribute("data-number");

//     if (coins < 20) {
//       alert("Not enough coins to make a call!");
//       return;
//     }

//     coins -= 20;
//     coinCount.textContent = coins;
//     alert(`Calling ${serviceName} at ${serviceNumber}`);

//     const li = document.createElement("li");
//     li.textContent = `${serviceName} - ${serviceNumber}`;
//     historyList.appendChild(li);
//   });
// });

var coins = 100;
var callButtons = document.querySelectorAll(".call-btn");
var coinCount = document.getElementById("coin-count");
var historyList = document.getElementById("history-list");

function makeCall() {
  var serviceName = this.getAttribute("data-name");
  var serviceNumber = this.getAttribute("data-number");

  if (coins < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  coins -= 20;
  coinCount.textContent = coins;
  alert("Calling " + serviceName + " at " + serviceNumber);

  var li = document.createElement("li");
  li.textContent = serviceName + " - " + serviceNumber;
  historyList.appendChild(li);
}

for (var i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", makeCall);
}
