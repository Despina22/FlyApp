import { ErrorMessage } from '../shared/errorMessage.js';

export class RegexValidation {
  firstNameInput = document.getElementById('firstName');
  lastNameInput = document.getElementById('lastName');
  emailInput = document.getElementById('email');
  phoneNumberInput = document.getElementById('phoneNumber');
  numberOfPersons = document.getElementById('numberOfPersons');
  destination = document.getElementById('destination');

  errorMessageStyle = new ErrorMessage();

  validateForm() {
    const regexFirstName = /^[A-Z][a-z]{2,50}$/;
    const isFirstNameValid = regexFirstName.test(this.firstNameInput.value);
    this.errorMessageStyle.renderErrorMessageForInvalidInput(
      !isFirstNameValid,
      this.firstNameInput
    );

    const regexLastName = /^[A-Z][a-z]{2,50}$/;
    const isLastNameValid = regexLastName.test(this.lastNameInput.value);
    this.errorMessageStyle.renderErrorMessageForInvalidInput(
      !isLastNameValid,
      this.lastNameInput
    );

    const regexEmail = new RegExp(/^[\w\-\.]{3,}@[a-z]+(\.[a-z]{2,5})+$/);
    const isEmailValid = regexEmail.test(this.emailInput.value);
    this.errorMessageStyle.renderErrorMessageForInvalidInput(
      !isEmailValid,
      this.emailInput
    );

    const regexPhoneNumber = /^\+[0-9]{6,15}$/;
    const isPhoneNumberValid = regexPhoneNumber.test(
      this.phoneNumberInput.value
    );
    this.errorMessageStyle.renderErrorMessageForInvalidInput(
      !isPhoneNumberValid,
      this.phoneNumberInput
    );

    const regexNumberOfPersons = /\d{1,2}/;
    const isNumberOfPersonsValid = regexNumberOfPersons.test(
      this.numberOfPersons.value
    );
    this.errorMessageStyle.renderErrorMessageForInvalidInput(
      !isNumberOfPersonsValid,
      this.numberOfPersons
    );

    const isFormValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneNumberValid &&
      isNumberOfPersonsValid;
    return isFormValid;
  }
}
