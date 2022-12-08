import { RenderReservationTable } from './renderReservationTable.js';
import { API_CREATE_RESERVATION } from '../shared/config.js';
import { Reservation } from '../http/http.reservation.js';
import { Navigation } from '../shared/navigation.js';

const renderReservationTable = new RenderReservationTable();
const httpReservation = new Reservation(API_CREATE_RESERVATION);
const navigation = new Navigation();

const data = await httpReservation.getReservation();
renderReservationTable.renderTableWithReservations(data);

document
  .querySelector('#create-reservation-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'reservationCreateForm.html';
  });

document
  .querySelector('.open-navbar-icon')
  .addEventListener('click', navigation.toggleNavbar);
