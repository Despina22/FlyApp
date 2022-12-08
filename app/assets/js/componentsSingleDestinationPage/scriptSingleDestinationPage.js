import { RenderSingleDestination } from './renderSingleDestination.js';
import { API_DESTINATION_URL } from '../shared/config.js';
import { Destinations } from '../http/http.destinations.shared.js';
import { Navigation } from '../shared/navigation.js';

const httpDestination = new Destinations(API_DESTINATION_URL);
const renderSingleDestination = new RenderSingleDestination();
const navigation = new Navigation();

const urlParams = Object.fromEntries(
  new URLSearchParams(window.location.search)
);
const { destinationId } = urlParams;
const data = await httpDestination.getDestinationById(destinationId);
renderSingleDestination.renderSingleDestination([data]);

document
  .querySelector('.open-navbar-icon')
  .addEventListener('click', navigation.toggleNavbar);
