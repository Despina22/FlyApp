import errorMessage from '../shared/errorMessage.js';
class RegexValidation {
  firstNameInput = document.getElementById('firstName');
  lastNameInput = document.getElementById('lastName');
  emailInput = document.getElementById('email');
  phoneNumberInput = document.getElementById('phoneNumber');
  numberOfPersons = document.getElementById('numberOfPersons');
  destination = document.getElementById('destination');

  constructor() {
    if (RegexValidation.instance == null) {
      RegexValidation.instance = this;
    }
    return RegexValidation.instance;
  }

  validateForm() {
    const regexFirstName = /^[A-Z][a-z]{2,50}$/;
    const isFirstNameValid = regexFirstName.test(this.firstNameInput.value);
    errorMessage.renderErrorMessageForInvalidInput(
      !isFirstNameValid,
      this.firstNameInput
    );

    const regexLastName = /^[A-Z][a-z]{2,50}$/;
    const isLastNameValid = regexLastName.test(this.lastNameInput.value);
    errorMessage.renderErrorMessageForInvalidInput(
      !isLastNameValid,
      this.lastNameInput
    );

    const regexEmail = new RegExp(/^[\w\-\.]{3,}@[a-z]+(\.[a-z]{2,5})+$/);
    const isEmailValid = regexEmail.test(this.emailInput.value);
    errorMessage.renderErrorMessageForInvalidInput(
      !isEmailValid,
      this.emailInput
    );

    const regexPhoneNumber = /^\+[0-9]{6,15}$/;
    const isPhoneNumberValid = regexPhoneNumber.test(
      this.phoneNumberInput.value
    );
    errorMessage.renderErrorMessageForInvalidInput(
      !isPhoneNumberValid,
      this.phoneNumberInput
    );

    const regexNumberOfPersons = /\d{1,2}/;
    const isNumberOfPersonsValid = regexNumberOfPersons.test(
      this.numberOfPersons.value
    );
    errorMessage.renderErrorMessageForInvalidInput(
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

const regexValidation = new RegexValidation();
Object.freeze(regexValidation);
export default regexValidation;
