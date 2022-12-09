var btnFilter = document.querySelector(".filter__heading");
var filterContain = document.querySelector(".filter-container__heading");
var btnTrend = document.querySelectorAll(".related-container input");

btnFilter.onclick = function () {
  if (filterContain.classList.contains("active")) {
    filterContain.classList.remove("active");
  } else {
    filterContain.classList.add("active");
  }
};
btnTrend.forEach(function (item) {
  item.onclick = function () {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  };
});
