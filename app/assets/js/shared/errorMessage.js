export class ErrorMessage {
  destination = document.querySelector('.destination');

  renderError(errorMessage) {
    this.destination.innerHTML = '';

    const errorElement = document.createElement('div');
    errorElement.classList.add('destination-error');
    errorElement.innerHTML = `
            <p class="destination-error-message">
                <i class="fa-solid fa-triangle-exclamation"></i>
               ${errorMessage}
            </p>
        `;
    this.destination.appendChild(errorElement);
  }

  renderErrorMessageForInvalidInput(isFieldNotValid, formElement) {
    if (isFieldNotValid) {
      formElement.classList.add('error-message-input');
      formElement.nextElementSibling.classList.remove('hidden');
    } else {
      formElement.classList.remove('error-message-input');
      formElement.nextElementSibling.classList.add('hidden');
    }
  }
}
