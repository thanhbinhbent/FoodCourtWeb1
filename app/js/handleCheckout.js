var btnNext = document.querySelector(
  ".check-out__information .check-out__confirm.btn"
);
var payNow = document.querySelector(
  ".check-out__pay-method .check-out__confirm.btn"
);
var btnCancel = document.querySelector(
  ".check-out__confirm.check-out__cancel.btn"
);
var sectionInfor = document.querySelector(".check-out__information");
var sectionMethod = document.querySelector(".check-out__pay-method");
var sectionSuccess = document.querySelector(".check-out__pay-success");
var step = document.querySelectorAll(".check-out__bar-step");

console.log(btnNext);
btnNext.onclick = function () {
  if (sectionInfor.classList.contains("active")) {
    sectionInfor.classList.remove("active");
    sectionMethod.classList.add("active");
    step[1].classList.add("active");
  }
};
payNow.onclick = function () {
  if (sectionMethod.classList.contains("active")) {
    sectionMethod.classList.remove("active");
    sectionSuccess.classList.add("active");
    step[2].classList.add("active");
  }
};
btnCancel.onclick = function () {
  if (sectionSuccess.classList.contains("active")) {
    sectionSuccess.classList.remove("active");
    sectionInfor.classList.add("active");
    step[1].classList.remove("active");
    step[2].classList.remove("active");
  }
};
