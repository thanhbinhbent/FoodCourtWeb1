// Đối tượng
function validator(options) {
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  // lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = document.querySelector(rule.selector);
      if (inputElement) {
        // Xử lý trường hợp blur ra khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        // Xử lý trường hợp khi người dùng đang nhập
        var errorElement =
          inputElement.parentElement.querySelector(".form-message");
        inputElement.oninput = function () {
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
// Định nghĩa quy tắc nhập
// Khi có lỗi trả về messen lỗi
// khi hợp lệ không trả ra gì cả
validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Please type value for this field!";
    },
  };
};
validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "This field must is email!";
    },
  };
};

validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : "This field must minium 6 characters, at least one letter and one number";
    },
  };
};
validator.isConfirmed = function (selector, getCofirmValue) {
  return {
    selector: selector,
    test: function (value) {
      return value === getCofirmValue()
        ? undefined
        : "Giá trị nhập vào không khớp với mật khẩu đã nhập!";
    },
  };
};
