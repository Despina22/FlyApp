import { API_CREATE_RESERVATION } from '../shared/config.js';

export function Reservation() {
  this.url = API_CREATE_RESERVATION;

  this.createReservation = async function (user) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        numberOfPersons: user.numberOfPersons,
        destinationId: user.destinationId,
      }),
    });
  };

  this.getReservation = async function () {
    return fetch(this.url, {
      method: 'GET',
    }).then(function (data) {
      return data.json();
    });
  };
}
