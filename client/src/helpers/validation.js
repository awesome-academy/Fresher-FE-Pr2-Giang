export function validatePhoneNumber(input_str) {
  var phoneNumberValidate = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return phoneNumberValidate.test(input_str);
};

export function validateNameString(input_str) {
  var nameValidate = /^[A-Za-z ]+$/;

  return nameValidate.test(input_str);
};

export function validateEmail(input_str) {
  const emailValidate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return emailValidate.test(input_str);
};

export function validatePassword(input_str) {
  const passwordValidate = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return passwordValidate.test(input_str);
}
