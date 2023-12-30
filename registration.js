document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("registrationForm");
  var submitButton = document.getElementById("submitButton");

  // Function to validate the username
  function validateUsername() {
    var username = document.getElementById("username");
    var error = document.getElementById("usernameError");
    if (!username.value.match(/^[A-Za-z0-9]+$/)) {
      error.textContent = "Username must contain only letters and numbers.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  // Function to validate the password
  function validatePassword() {
    var password = document.getElementById("password");
    var error = document.getElementById("passwordError");
    if (password.value.length < 8) {
      error.textContent = "Password must be at least 8 characters.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  // Function to validate the password verification
  function validatePasswordVerify() {
    var password = document.getElementById("password");
    var passwordVerify = document.getElementById("passwordVerify");
    var error = document.getElementById("passwordVerifyError");
    if (
      passwordVerify.value !== password.value ||
      passwordVerify.value.length < 8
    ) {
      error.textContent =
        "Passwords do not match and must be at least 8 characters.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  // Function to validate the email
  function validateEmail() {
    var email = document.getElementById("email");
    var error = document.getElementById("emailError");
    if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      error.textContent = "Email must be in the format xxx@xxx.xxx";
      return false;
    }
    error.textContent = "";
    return true;
  }

  // Function to validate the phone number
  function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber");
    var error = document.getElementById("phoneNumberError");
    if (!phoneNumber.value.match(/^\(\d{3}\) \d{3}-\d{4}$/)) {
      error.textContent = "Phone number must be in the format (xxx) xxx-xxxx";
      return false;
    }
    error.textContent = "";
    return true;
  }

  // Event listener for form submission
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Validate all fields
    var isUsernameValid = validateUsername();
    var isPasswordValid = validatePassword();
    var isPasswordVerifyValid = validatePasswordVerify();
    var isEmailValid = validateEmail();
    var isPhoneNumberValid = validatePhoneNumber();

    // Check if all validations passed
    if (
      isUsernameValid &&
      isPasswordValid &&
      isPasswordVerifyValid &&
      isEmailValid &&
      isPhoneNumberValid
    ) {
      form.submit();
    } else {
      // Focus on the first invalid field
      if (!isUsernameValid) {
        document.getElementById("username").focus();
      } else if (!isPasswordValid) {
        document.getElementById("password").focus();
      } else if (!isPasswordVerifyValid) {
        document.getElementById("passwordVerify").focus();
      } else if (!isEmailValid) {
        document.getElementById("email").focus();
      } else if (!isPhoneNumberValid) {
        document.getElementById("phoneNumber").focus();
      }
    }
  });
});
