import { API_CREATE_RESERVATION } from '../shared/config.js';
import httpDestination from '../http/http.destinations.shared.js';
import { Reservation } from '../http/http.reservation.js';

export class RenderReservationTable {
  httpReservation = new Reservation(API_CREATE_RESERVATION);
  table = document.querySelector('.table-of-reservations');

  async renderTableWithReservations(reservations) {
    const data = await httpDestination.getDestination();
    reservations.forEach(reservation => {
      const {
        id,
        firstName,
        lastName,
        email,
        phoneNumber,
        numberOfPersons,
        destinationId,
      } = reservation;
      const findDestination = data.find(
        destinationId => destinationId.id == reservation.destinationId
      );
      const dateFrom = new Date(findDestination.from);
      const dateTo = new Date(findDestination.to);

      const createTableBody = document.createElement('tbody');
      createTableBody.classList.add('table-body');
      createTableBody.innerHTML = `
        <tr>
            <th>${id}</th>
            <th>${firstName}</th>
            <th>${lastName}</th>
            <th>${email}</th>
            <th>${phoneNumber}</th>
            <th>${findDestination.title}</th>
            <th>${findDestination.price * numberOfPersons} &#8378;</th>
            <th>${dateFrom.getDate().toString().padStart(2, '0')}.${(
        dateFrom.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}.${dateFrom.getFullYear()}</th>
            <th>${dateTo.getDate().toString().padStart(2, '0')}.${(
        dateTo.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}.${dateTo.getFullYear()}</th>
            <th><i class="fa-solid fa-file-pen"></i></th>
        </tr>
      `;
      this.table.appendChild(createTableBody);
    });
  }
}
