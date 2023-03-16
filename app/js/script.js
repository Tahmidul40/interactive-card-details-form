const nameCheck = function () {
  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let name = document.getElementById("full-name").value;
  let nameStyle = document.getElementById("full-name");
  let nameWarning = document.getElementById("name-warning");
  let displayName = document.getElementById("display-name");

  if (!regName.test(name)) {
    nameWarning.classList.add("active");
    nameStyle.classList.add("border-red");
    return false;
  } else {
    nameWarning.classList.remove("active");
    nameStyle.classList.remove("border-red");
    displayName.textContent = name;
    return true;
  }
};

const numberCheck = function () {
  const cardNumber = document.getElementById("card-number").value;
  let numberStyle = document.getElementById("card-number");
  const nameWarning = document.getElementById("number-warning");
  let displayNumber = document.getElementById("display-number");

  if (cardNumber.length == "") {
    numberStyle.classList.add("border-red");
    nameWarning.classList.add("active");
    nameWarning.textContent = "Can't be blank";
    return false;
  } else if (cardNumber.length < 16 || cardNumber.length > 16) {
    numberStyle.classList.add("border-red");
    nameWarning.classList.add("active");
    nameWarning.textContent = "Must be 16 digit";
    return false;
  } else {
    numberStyle.classList.remove("border-red");
    nameWarning.classList.remove("active");
    displayNumber.textContent = cardNumber.replace(/(.{4})/g, "$1 ");
    return true;
  }
};

let dateMonth = document.getElementById("month");
let dateYear = document.getElementById("year");
let dateWarning = document.getElementById("month-year");
let serial = document.getElementById("serial-input");
let serialStyle = document.getElementById("serial");
let displaySerial = document.getElementById("display-serial");
let displayYear = document.getElementById("display-year");
let displayMonth = document.getElementById("display-month");

const monthCheck = function () {
  if (dateMonth.value.length == "") {
    dateWarning.classList.add("active");
    dateMonth.classList.add("border-red");
    dateWarning.textContent = "Can't be blank";
    return false;
  } else if (dateMonth.value > 13) {
    dateWarning.classList.add("active");
    dateMonth.classList.add("border-red");
    dateWarning.textContent = "Month is incorrect";
    return false;
  } else {
    dateWarning.classList.remove("active");
    dateMonth.classList.remove("border-red");
    displayMonth.textContent = dateMonth.value;
    return true;
  }
};

const yearCheck = function () {
  if (dateYear.value.length == "") {
    dateWarning.classList.add("active");
    dateYear.classList.add("border-red");
    dateWarning.textContent = "Can't Be blank";
    return false;
  } else {
    dateWarning.classList.remove("active");
    dateYear.classList.remove("border-red");
    displayYear.textContent = dateYear.value;
    return true;
  }
};

const serialCheck = function () {
  if (serial.value.length == "") {
    serial.classList.add("border-red");
    serialStyle.classList.add("active");
    return false;
  } else if (serial.value.length < 3) {
    serial.classList.add("border-red");
    serialStyle.classList.add("active");
    serialStyle.textContent = "Must be 3 digit";
    return false;
  } else {
    serial.classList.remove("border-red");
    serialStyle.classList.remove("active");
    displaySerial.textContent = serial.value;
    return true;
  }
};

const message = function () {
  if (
    nameCheck() &&
    numberCheck() &&
    monthCheck() &&
    yearCheck() &&
    serialCheck()
  ) {
    let messageEl = document.getElementById("message");
    let formEl = document.getElementById("form");
    messageEl.classList.add("show");
    formEl.classList.add("hide");
  }
};

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  nameCheck();
  numberCheck();
  monthCheck();
  yearCheck();
  serialCheck();
  message();
});

let continueBtn = document.getElementById("continue-btn");
continueBtn.addEventListener("click", function () {
  location.reload();
});
