// Heart button click
let hearts = 0;
const heartButtons = document.querySelectorAll(".heart-btn");
const heartCount = document.getElementById("heartCount");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    hearts++;
    heartCount.textContent = hearts;
  });
}

// Call button click
let coins = 100;
const callButtons = document.querySelectorAll(".call-btn");
const coinCount = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");

function makeCall() {
  let serviceName = this.getAttribute("data-name");
  let serviceNumber = this.getAttribute("data-number");

  if (coins < 20) {
    alert("আপনার কাছে এই কলের জন্য যথেষ্ট কয়েন নেই");
    return;
  }

  coins -= 20;
  coinCount.textContent = coins;
  alert("Calling " + serviceName + " " + serviceNumber);

  let currentTime = new Date();
  let formattedTime = currentTime.toLocaleTimeString();

  let li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  let leftDiv = document.createElement("div");
  leftDiv.textContent = serviceName + " " + serviceNumber;

  let rightDiv = document.createElement("div");
  rightDiv.textContent = formattedTime;

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  historyList.appendChild(li);
}

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", makeCall);
}

// Clear history
const clearHistory = document.getElementById("clearHistory");
clearHistory.addEventListener("click", function () {
  historyList.innerHTML = "";
});

// Copy button click
let copies = 0;
const copyButtons = document.querySelectorAll(".copy-btn");
const copyCount = document.getElementById("copyCount");

copyButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const number = btn.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    copies++;
    copyCount.textContent = copies;
    alert("Copied " + number + " নম্বর কপি হয়েছে");
  });
});
