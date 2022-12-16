import { Reservation } from '../http/http.reservation.js';
import regexValidation from '../componentsCreateForm/regexValidation.js';

export class UserReservation {
  reservation = new Reservation();

  firstNameInput = document.getElementById('firstName');
  lastNameInput = document.getElementById('lastName');
  emailInput = document.getElementById('email');
  phoneNumberInput = document.getElementById('phoneNumber');
  numberOfPersons = document.getElementById('numberOfPersons');
  destination = document.getElementById('destination');

  getReservationInputValues() {
    return {
      firstName: this.firstNameInput.value,
      lastName: this.lastNameInput.value,
      email: this.emailInput.value,
      phoneNumber: this.phoneNumberInput.value,
      numberOfPersons: this.numberOfPersons.value,
      destinationId: this.destination.value,
    };
  }

  async userReservation() {
    const isAllInputsValid = regexValidation.validateForm();
    if (isAllInputsValid) {
      const userInputValues = this.getReservationInputValues();
      await this.reservation.createReservation(userInputValues);
      document
        .querySelector('.registration-success-message')
        .classList.remove('hidden');
      setTimeout(() => {
        window.location.href = 'reservationPage.html';
      }, 2000);
    }
  }

  enableButton() {
    const fields = document.querySelectorAll('input');
    const createBtn = document.querySelector('.create-btn');
    fields.forEach(field => {
      field.addEventListener('keyup', function () {
        createBtn.disabled = !Array.from(fields).every(field => field.value);
      });
    });
  }
}
