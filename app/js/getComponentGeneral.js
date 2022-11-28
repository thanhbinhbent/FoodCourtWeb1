// load componet in page
const nav = document.querySelector("header");
const footer = document.querySelector("footer");
// load componet in page
fetch("../component/headerPage.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

fetch("../component/footerPage.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });
