import { RenderReservationForm } from '../componentsCreateForm/renderReservationForm.js';
import { UserReservation } from '../componentsCreateForm/userReservation.js';
import { API_DESTINATION_URL } from '../shared/config.js';
import { Destinations } from '../http/http.destinations.shared.js';
import { Navigation } from '../shared/navigation.js';

const userReservation = new UserReservation();
const httpDestination = new Destinations(API_DESTINATION_URL);
const renderReservationForm = new RenderReservationForm();
const navigation = new Navigation();

document
  .querySelector('.open-navbar-icon')
  .addEventListener('click', navigation.toggleNavbar);

userReservation.enableButton();
const destinationsData = await httpDestination.getDestination();
renderReservationForm.renderReservationForm(destinationsData);

document.querySelector('.create-btn').addEventListener('click', function (e) {
  e.preventDefault();
  userReservation.userReservation();
});
