var dataSource = "./app/data/restaurants.json";

function loadData() {
  var restaurantList = document.getElementsByClassName("foodcourt__list")[0];
  var getItem = document.getElementsByClassName("foodcourt__item");
  console.log(getItem);
  let html = "";
  fetch(dataSource)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error: ,status = " + response.status);
        console.log(response.status);
      }
      return response.json();
      console.log(response.json());
    })
    .then((json) => {
      console.log(json);
      let i = 0;
      for (i; i < json.length; i++) {
        html +=
          '<li class="foodcourt__item" ' +
          'style="' +
          "background-image:" +
          "url('" +
          "./assets/img/foodcourt-profile/" +
          json[i].thumb +
          "')" +
          '"' +
          ">" +
          '<div class="foodcourt__content">' +
          ' <span class="foodcourt__name">' +
          json[i].resName +
          "</span>" +
          '<div class="foodcourt__time">            <i></i>' +
          '<span class="foodcourt__time-text">' +
          json[i].workTime +
          "</span>" +
          "</div>" +
          '<button class="foodcourt__order">' +
          ' <a href="./app/pages/food-court-profile.html"              ><span class="foodcourt__order-text">Order Now</span></a  >' +
          '  <span class="foodcourt__order-icon"   ><i class="fa-solid fa-angle-right"></i         ></span>        </button>      </div>   </li>';

        restaurantList.innerHTML = html;
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
}
loadData();
