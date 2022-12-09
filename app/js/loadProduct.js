var dataSource = "../data/products.json";

function loadData() {
  var employeeList = document.getElementsByClassName("products-container")[0];
  let html = "";
  fetch(dataSource)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error: ,status = " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      let i = 0;
      for (i; i < json.length; i++) {
        html +=
          ' <div class="product-infor-container">' +
          ' <a href="./dish-detail.html" class="products-container__link">' +
          '<div class="product-infor">' +
          ' <div class="product-infor__img">' +
          '            <img                 src="' +
          json[i].imageURL +
          '"                alt="" />' +
          "</div>" +
          ' <div class="product-infor__heading">' +
          json[i].name +
          "</div>" +
          '<div class="product-infor__prices"> <span class="product-infor__prices--old"> ' +
          "đ " +
          json[i].oldPrice +
          "</span>" +
          '<span class="product-infor__prices--new">' +
          "đ" +
          roundMoney(json[i].newPrice) +
          "</span>" +
          '<div class="product-infor__prices--percent"></div>' +
          "</div>" +
          '<div class="product-infor__describe">  ' +
          json[i].desc +
          "  </div>" +
          '<div class="product-infor__rating">' +
          '<div class="product-thumb__rating">' +
          ' <div class="product-thumb__rating--value">' +
          "<span>" +
          json[i].rate +
          "</span>" +
          '<p class="product__rating--stars">                    <i class="bx bxs-star star-item"></i>                    <i class="bx bxs-star star-item"></i>                    <i class="bx bxs-star star-item"></i>                    <i class="bx bxs-star star-item"></i>                    <i class="bx bxs-star star-item"></i>                  </p>' +
          "</div>             </div>            </div>" +
          ' <div>              <button class="add-cart__btn">                <i class="bx bx-cart"></i> Add to cart              </button>            </div>          </div>' +
          "</a>" +
          "</div>";

        employeeList.innerHTML = html;
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
}
loadData();
function roundMoney(value) {
  value = new Intl.NumberFormat("vi-VN").format(value);

  return value;
}
