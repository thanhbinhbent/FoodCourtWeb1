// Xử lý submenu
var itemProfile = document.querySelector("#profile-change");
var subMenu = document.querySelector(".profile-left__my-profile");
itemProfile.onclick = function () {
  if (subMenu.style.display == "inline-block") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "inline-block";
  }
};
var profileContainer = document.querySelector(".personal-info-container__save");

var profileEdit = document.querySelector(".personal-info-container__edit");
var passwordChange = document.querySelector(".change-password-container");
var addresschage = document.querySelector(".address-shipping-container");
var orderHistory = document.querySelector(".orders-history-container");
var orderDetail = document.querySelector(".order-detail-container");
var orderReivew = document.querySelector(".my-review-container ");
var btnedit = document.querySelector("#btnedit");
var btnsave = document.querySelector("#btnsave");
btnedit.onclick = () => {
  profileContainer.classList.remove("active");
  profileEdit.classList.add("active");
};
btnsave.onclick = () => {
  profileContainer.classList.add("active");
  profileEdit.classList.remove("active");
};
// get change personal infor
// get item
var changeInfor = document.querySelector("#personal-change");
changeInfor.onclick = () => {
  changeColor(changeInfor, viewreview, changepass, changeaddress, vieworder);

  show(
    profileContainer,
    profileEdit,
    passwordChange,
    addresschage,
    orderHistory,
    orderDetail,
    orderReivew
  );
};
var changepass = document.querySelector("#change-password");
changepass.onclick = () => {
  changeColor(changepass, changeaddress, vieworder, viewreview, changeInfor);

  show(
    passwordChange,
    profileContainer,
    profileEdit,
    addresschage,
    orderHistory,
    orderDetail,
    orderReivew
  );
};
var changeaddress = document.querySelector("#change-address");
changeaddress.onclick = () => {
  changeColor(changeaddress, vieworder, changepass, changeInfor, viewreview);

  show(
    addresschage,
    passwordChange,
    profileContainer,
    profileEdit,
    orderHistory,
    orderDetail,
    orderReivew
  );
};
var vieworder = document.querySelector("#view-order");
vieworder.onclick = () => {
  changeColor(vieworder, changeaddress, viewreview, changepass, changeInfor);

  show(
    orderHistory,
    addresschage,
    passwordChange,
    profileContainer,
    profileEdit,
    orderDetail,
    orderReivew
  );
  let viewbtn = document.querySelectorAll(".view-status");
  for (let i = 0; i < viewbtn.length; i++) {
    viewbtn[i].onclick = () => {
      orderDetail.classList.add("active");
      orderHistory.classList.remove("active");
    };
  }
};

var viewreview = document.querySelector("#view-review");
viewreview.onclick = () => {
  viewreview.classList.add("color-primary");
  changeColor(viewreview, vieworder, changeaddress, changepass, changeInfor);

  show(
    orderReivew,
    orderHistory,
    addresschage,
    passwordChange,
    profileContainer,
    profileEdit,
    orderDetail
  );
};

function show(itemactive, item1, item2, item3, item4, item5, item6) {
  itemactive.classList.add("active");
  item1.classList.remove("active");
  item2.classList.remove("active");
  item3.classList.remove("active");
  item4.classList.remove("active");
  item5.classList.remove("active");
  item6.classList.remove("active");
}
function changeColor(add, item1, item2, item3, item4) {
  add.classList.add("color-primary");
  item1.classList.remove("color-primary");
  item2.classList.remove("color-primary");
  item3.classList.remove("color-primary");
  item4.classList.remove("color-primary");
}
