const nav = document.querySelector("header");
fetch("./app/component/header.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

const footer = document.querySelector("footer");
fetch("./app/component/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });
