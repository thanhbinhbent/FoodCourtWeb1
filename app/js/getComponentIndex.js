// load componet in page
const navIndex = document.querySelector("header");
const footerIndex = document.querySelector("footer");
fetch("./app/component/header.html")
  .then((res) => res.text())
  .then((data) => {
    navIndex.innerHTML = data;
  });

fetch("./app/component/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footerIndex.innerHTML = data;
  });
console.log("Hello");
